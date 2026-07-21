"use client";
/* ═══════════════════════════════════════════════════════════════
   REVLYN · HERO FIELD (OGL)
   Premium, minimal animated gradient mesh in brand tones.
   ═══════════════════════════════════════════════════════════════ */
import { useEffect, useRef } from "react";

const VERT = /* glsl */ `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2  uMouse;
uniform vec2  uRes;

float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 45758.5453); }
float vnoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x),
             mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
}

float bloom(vec2 p, vec2 c, float r){
  float d = length(p - c);
  return smoothstep(r, 0.0, d);
}

void main(){
  vec2 uv = vUv;
  float aspect = uRes.x / uRes.y;
  vec2 p = uv;
  p.x *= aspect;

  vec2 m = uMouse;
  m.x *= aspect;

  float t = uTime * 0.05;

  vec2 c1 = vec2(0.25 * aspect + 0.08 * sin(t * 1.1),
                 0.72 + 0.06 * cos(t * 0.9));
  vec2 c2 = vec2(0.78 * aspect + 0.10 * cos(t * 0.7),
                 0.30 + 0.08 * sin(t * 1.3));
  vec2 c3 = vec2(0.55 * aspect + 0.05 * sin(t * 0.5),
                 0.55 + 0.05 * cos(t * 0.6));

  c1 += (m - vec2(0.5*aspect, 0.5)) * 0.05;
  c2 += (m - vec2(0.5*aspect, 0.5)) * 0.08;

  float n = vnoise(uv * 2.2 + t * 0.6) * 0.5
          + vnoise(uv * 5.0 - t * 0.3) * 0.3;

  vec3 paper = vec3(0.988, 0.980, 0.965);
  vec3 bone  = vec3(0.965, 0.949, 0.918);
  vec3 fire  = vec3(1.000, 0.341, 0.133);
  vec3 volt  = vec3(1.000, 0.921, 0.231);

  vec3 col = mix(bone, paper, smoothstep(0.0, 1.0, uv.y));

  float b1 = bloom(p, c1, 0.55 * aspect);
  col = mix(col, mix(col, fire, 0.35), b1 * 0.55);

  float b2 = bloom(p, c2, 0.50 * aspect);
  col = mix(col, mix(col, volt, 0.55), b2 * 0.45);

  float b3 = bloom(p, c3, 0.42 * aspect);
  col = mix(col, paper, b3 * 0.35);

  vec2 g = fract(uv * vec2(60.0 * aspect, 60.0));
  float grid = step(0.985, max(g.x, g.y));
  col = mix(col, vec3(0.039), grid * 0.05);

  float grain = (n - 0.4) * 0.03;
  col += grain;

  vec2 vv = uv - 0.5;
  float vig = 1.0 - dot(vv, vv) * 0.45;
  col *= vig;

  gl_FragColor = vec4(col, 1.0);
}`;

export function WebGLHeroField({ className = "" }: { className?: string }) {
  const holderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let raf = 0;
    let cleanupInner: (() => void) | undefined;
    const el = holderRef.current;
    if (!el) return;

    (async () => {
      try {
        const { Renderer, Program, Mesh, Triangle } = await import("ogl");
        // A remount (e.g. navigating back to the homepage) can resolve this
        // import after cleanup has already run — bail out instead of
        // appending a canvas nobody will ever tear down.
        if (disposed) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: false });
        const gl = renderer.gl;
        gl.clearColor(0.988, 0.98, 0.965, 1);
        el.appendChild(gl.canvas);
        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        gl.canvas.style.display = "block";

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
          vertex: VERT,
          fragment: FRAG,
          uniforms: {
            uTime: { value: 0 },
            uMouse: { value: [0.5, 0.5] },
            uRes: { value: [1, 1] },
          },
        });
        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
          const r = el.getBoundingClientRect();
          renderer.setSize(r.width, r.height);
          program.uniforms.uRes.value = [r.width, r.height];
        };
        resize();
        window.addEventListener("resize", resize);

        let mx = 0.5, my = 0.5;
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          mx = (e.clientX - r.left) / r.width;
          my = 1 - (e.clientY - r.top) / r.height;
        };
        window.addEventListener("mousemove", onMove);

        const start = performance.now();
        const loop = (t: number) => {
          if (disposed) return;
          const time = (t - start) / 1000;
          program.uniforms.uTime.value = prefersReduced ? 0 : time;
          const cur = program.uniforms.uMouse.value as [number, number];
          cur[0] += (mx - cur[0]) * 0.04;
          cur[1] += (my - cur[1]) * 0.04;
          renderer.render({ scene: mesh });
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);

        // Captured by the outer effect's cleanup below — this used to be
        // returned from this async function instead, where React never saw
        // it, so these listeners (and the GL context) leaked on every
        // unmount. Each homepage visit created a brand new WebGL context
        // without ever releasing the previous one; browsers cap the number
        // of live contexts, so after a few visits creation started failing
        // and the canvas rendered black.
        cleanupInner = () => {
          window.removeEventListener("resize", resize);
          window.removeEventListener("mousemove", onMove);
          gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
      } catch (err) {
        console.warn("[WebGLHeroField] init failed, using CSS fallback", err);
      }
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanupInner?.();
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={holderRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(1200px 600px at 25% 70%, rgba(255,87,34,0.18), transparent 60%), radial-gradient(900px 500px at 78% 28%, rgba(255,235,59,0.35), transparent 60%), linear-gradient(180deg, #f6f2ea 0%, #fdfbf5 100%)",
      }}
      aria-hidden
    />
  );
}