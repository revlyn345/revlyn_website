/* ═══════════════════════════════════════════════════════════════
   REVLYN · ANIMATED SVG VISUALS
   Always-looping, brand-matched diagrams that replace body copy.
   Pure SVG + CSS keyframes. No JS state. No external assets.
   ═══════════════════════════════════════════════════════════════ */

/* Inject shared keyframes once */
function LoopStyles() {
  return (
    <style>{`
      @keyframes rv-drip { 0%{transform:translateY(-8px);opacity:0} 15%{opacity:1} 85%{opacity:1} 100%{transform:translateY(60px);opacity:0} }
      @keyframes rv-flow { to { stroke-dashoffset: -240; } }
      @keyframes rv-flow-slow { to { stroke-dashoffset: -480; } }
      @keyframes rv-pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:.4} }
      @keyframes rv-bar { 0%{transform:scaleY(.2)} 50%{transform:scaleY(1)} 100%{transform:scaleY(.2)} }
      @keyframes rv-scan { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
      @keyframes rv-tick { 0%,49%{opacity:0;transform:scale(.6)} 50%,100%{opacity:1;transform:scale(1)} }
      @keyframes rv-fill { 0%{width:0} 100%{width:var(--rv-w,100%)} }
      @keyframes rv-rotate { to { transform: rotate(360deg); } }
      @keyframes rv-orbit { to { offset-distance: 100%; } }
      @keyframes rv-page { 0%,20%{transform:rotateY(0)} 45%,65%{transform:rotateY(-160deg)} 90%,100%{transform:rotateY(0)} }
      @keyframes rv-blink { 50% { opacity: .25 } }
      .rv-flow { stroke-dasharray: 6 8; animation: rv-flow 3.5s linear infinite; }
      .rv-flow-slow { stroke-dasharray: 4 10; animation: rv-flow-slow 8s linear infinite; }
      .rv-pulse { transform-origin: center; animation: rv-pulse 2.2s ease-in-out infinite; }
      .rv-blink { animation: rv-blink 1.4s ease-in-out infinite; }
    `}</style>
  );
}

/* ───── 1. LEAK vs SEAL · replaces Problem body copy ───── */
export function LeakVsSealVisual() {
  return (
    <div className="grid md:grid-cols-2 brutal-border">
      <LoopStyles />
      {/* LEAKING */}
      <div className="relative bg-paper p-6 border-b-2 md:border-b-0 md:border-r-2 border-ink overflow-hidden">
        <div className="mono text-fire text-xs mb-4">// TODAY · LEAKING</div>
        <svg viewBox="0 0 400 220" className="w-full h-auto">
          {/* Funnel shape */}
          <path d="M40 20 L360 20 L280 110 L280 200 L120 200 L120 110 Z"
            fill="none" stroke="#0a0a0a" strokeWidth="3" />
          {/* Cracks */}
          <path d="M120 110 L100 130 M200 200 L215 218 M280 150 L305 168 M170 60 L155 80"
            stroke="#ff5722" strokeWidth="2.5" strokeLinecap="round" />
          {/* Leaks */}
          {[
            { x: 100, y: 130, d: "0s" },
            { x: 215, y: 218, d: ".6s" },
            { x: 305, y: 168, d: "1.2s" },
            { x: 155, y: 80, d: ".3s" },
          ].map((l, i) => (
            <circle key={i} cx={l.x} cy={l.y} r="5" fill="#ff5722"
              style={{ animation: `rv-drip 1.8s ${l.d} linear infinite`, transformBox: "fill-box", transformOrigin: "center" }} />
          ))}
          {/* Labels */}
          <text x="200" y="45" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#0a0a0a">14,000 OPEN OPPS</text>
          <text x="200" y="170" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#ff5722">↓ REALITY: 2,300</text>
        </svg>
        <ul className="mt-4 space-y-1.5 text-sm">
          {["CRM full of half-finished notes","Pipeline nobody trusts","Reps skip the process","AI stuck in the sandbox"].map(t =>
            <li key={t} className="flex gap-2"><span className="text-fire">✕</span><span className="line-through decoration-fire/70">{t}</span></li>
          )}
        </ul>
      </div>
      {/* SEALED */}
      <div className="relative bg-volt p-6 overflow-hidden">
        <div className="mono text-xs mb-4">// WITH REVLYN · SEALED</div>
        <svg viewBox="0 0 400 220" className="w-full h-auto">
          <path d="M40 20 L360 20 L280 110 L280 200 L120 200 L120 110 Z"
            fill="#ffeb3b" stroke="#0a0a0a" strokeWidth="3" />
          {/* Flowing pipeline */}
          <path d="M60 40 L340 40" stroke="#0a0a0a" strokeWidth="2" className="rv-flow" fill="none" />
          <path d="M140 100 L260 100" stroke="#0a0a0a" strokeWidth="2" className="rv-flow" fill="none" />
          <path d="M140 150 L260 150" stroke="#0a0a0a" strokeWidth="2" className="rv-flow" fill="none" />
          {/* Checkmarks */}
          {[[100,60],[300,60],[170,190],[230,190]].map(([x,y],i) => (
            <g key={i} style={{ animation: `rv-tick 2s ${i*.4}s ease-in-out infinite` }}>
              <circle cx={x} cy={y} r="10" fill="#0a0a0a" />
              <path d={`M${x-4} ${y} L${x-1} ${y+3} L${x+5} ${y-3}`} stroke="#ffeb3b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </g>
          ))}
          <text x="200" y="130" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#0a0a0a">ONE SCHEMA · ONE TRUTH</text>
        </svg>
        <ul className="mt-4 space-y-1.5 text-sm font-medium">
          {["One schema, one source of truth","Pipeline you present to the board","Motion reps actually run","AI wired with real guardrails"].map(t =>
            <li key={t} className="flex gap-2"><span>✓</span><span>{t}</span></li>
          )}
        </ul>
      </div>
    </div>
  );
}

/* ───── 2. METHOD RUNNER · animated 90-day progress ───── */
export function MethodRunnerVisual() {
  const stages = [
    { d: "D01–07", t: "DIAGNOSTIC", w: 8, c: "#ff5722" },
    { d: "D08–21", t: "BLUEPRINT", w: 15, c: "#ffeb3b" },
    { d: "D22–75", t: "BUILD & WIRE", w: 60, c: "#ffffff" },
    { d: "D76–90", t: "HAND-OFF", w: 17, c: "#ffeb3b" },
  ];
  return (
    <div className="brutal-border border-paper bg-[#141414] p-5 md:p-7">
      <LoopStyles />
      <div className="flex justify-between mono text-[10px] text-paper/60 mb-3">
        <span>DAY 00</span><span>DAY 30</span><span>DAY 60</span><span>DAY 90</span>
      </div>
      {/* Bar */}
      <div className="relative h-10 border-2 border-paper flex overflow-hidden">
        {stages.map((s, i) => (
          <div key={s.t} className="relative border-r-2 border-paper last:border-r-0"
            style={{ width: `${s.w}%`, background: s.c, opacity: 0 as unknown as number, animation: `rv-tick 1s ${i*.35+.2}s ease-out forwards` }}>
            {/* scan shimmer */}
            <div className="absolute inset-0 opacity-40"
              style={{ background: "linear-gradient(90deg,transparent,rgba(0,0,0,.35),transparent)", animation: `rv-scan 4s ${i*.5}s linear infinite` }}/>
          </div>
        ))}
        {/* Runner head */}
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-fire border-2 border-paper"
          style={{ animation: "rv-scan 8s ease-in-out infinite" }}/>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {stages.map((s, i) => (
          <div key={s.t} className="border-l-2 border-paper/40 pl-3">
            <div className="mono text-[10px] text-fire">{s.d}</div>
            <div className="display text-lg text-paper mt-1">{s.t}</div>
            <div className="mono text-[10px] text-paper/50 mt-1">STAGE {String(i+1).padStart(2,"0")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───── 3. STACK CONSTELLATION · animated node graph ───── */
export function StackConstellationVisual() {
  const nodes = [
    { id: "CRM",       x: 200, y: 40,  c: "#ff5722" },
    { id: "WHSE",      x: 340, y: 100, c: "#ffeb3b" },
    { id: "ELT",       x: 340, y: 200, c: "#ffffff" },
    { id: "ENRICH",    x: 200, y: 260, c: "#ff5722" },
    { id: "OUTREACH",  x: 60,  y: 200, c: "#ffeb3b" },
    { id: "PLG",       x: 60,  y: 100, c: "#ffffff" },
    { id: "CALL·INTEL",x: 200, y: 150, c: "#ffeb3b" },
    { id: "AI",        x: 200, y: 150, c: "#ff5722" },
  ];
  const edges = [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,7]];
  return (
    <div className="brutal-border bg-ink p-4 md:p-8 relative overflow-hidden">
      <LoopStyles />
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* grid */}
        {Array.from({length:8}).map((_,i)=>(
          <line key={"h"+i} x1="0" y1={i*40} x2="400" y2={i*40} stroke="#222" strokeWidth="1" />
        ))}
        {Array.from({length:11}).map((_,i)=>(
          <line key={"v"+i} x1={i*40} y1="0" x2={i*40} y2="300" stroke="#222" strokeWidth="1" />
        ))}
        {/* edges */}
        {edges.map(([a,b],i)=>(
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke="#ff5722" strokeWidth="1.5" className="rv-flow" />
        ))}
        {/* Central AI ring */}
        <circle cx="200" cy="150" r="34" fill="none" stroke="#ffeb3b" strokeWidth="1.5" strokeDasharray="4 6"
          style={{ transformOrigin: "200px 150px", animation: "rv-rotate 12s linear infinite" }} />
        <circle cx="200" cy="150" r="48" fill="none" stroke="#ff5722" strokeWidth="1" strokeDasharray="2 8"
          style={{ transformOrigin: "200px 150px", animation: "rv-rotate 20s linear infinite reverse" }} />
        {/* nodes */}
        {nodes.map((n,i)=>(
          <g key={n.id+i}>
            {i === 7 ? (
              <>
                <circle cx={n.x} cy={n.y} r="18" fill="#0a0a0a" stroke="#ff5722" strokeWidth="2"/>
                <text x={n.x} y={n.y+4} textAnchor="middle" fontSize="11" fontFamily="Inter Tight, Inter, sans-serif" fontWeight="700" fill="#ff5722">AI</text>
              </>
            ) : i === 6 ? null : (
              <>
                <rect x={n.x-32} y={n.y-11} width="64" height="22" fill="#0a0a0a" stroke={n.c} strokeWidth="1.5"/>
                <text x={n.x} y={n.y+4} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill={n.c}>{n.id}</text>
                <circle cx={n.x-32} cy={n.y-11} r="2.5" fill={n.c} className="rv-pulse"/>
              </>
            )}
          </g>
        ))}
      </svg>
      <div className="absolute top-3 right-3 mono text-[10px] text-paper/60 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-fire rv-blink inline-block"/> LIVE · 8 SUBSYSTEMS
      </div>
    </div>
  );
}

/* ───── 4. MANIFESTO STAMPS · rotating principles ───── */
export function ManifestoStampsVisual({ rules }: { rules: string[] }) {
  const rotations = [-2, 1.5, -1, 2, -1.5, 1];
  const colors = ["bg-paper","bg-volt","bg-paper","bg-fire text-paper","bg-paper","bg-ink text-paper"];
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <LoopStyles />
      {rules.map((r, i) => (
        <div key={r} className="relative">
          <div className={`brutal-border p-6 min-h-[180px] flex flex-col justify-between ${colors[i]} brutal-shadow`}
            style={{ transform: `rotate(${rotations[i]}deg)` }}>
            <div className="mono text-[10px] opacity-70">RULE · {String(i+1).padStart(2,"0")} / 06</div>
            <div className="display text-2xl md:text-3xl leading-tight">{r}</div>
            <div className="mono text-[10px] opacity-70 flex justify-between">
              <span>REVLYN OS</span><span>v.3.0</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-ink bg-volt grid place-items-center display text-sm rv-pulse">
            {i+1}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───── 5. AGENT SIGNAL BARS · sound-bar visualizer ───── */
export function AgentBarsVisual() {
  const bars = Array.from({length: 24});
  return (
    <div className="brutal-border border-paper bg-[#0d0d0d] p-4">
      <LoopStyles />
      <div className="flex items-end justify-between h-24 gap-1">
        {bars.map((_, i) => (
          <div key={i} className="flex-1 origin-bottom"
            style={{
              background: i % 4 === 0 ? "#ff5722" : i % 3 === 0 ? "#ffeb3b" : "#ffffff",
              height: `${20 + (i*17) % 80}%`,
              animation: `rv-bar ${.6 + (i*.07)%.9}s ease-in-out ${i*.05}s infinite`,
            }}/>
        ))}
      </div>
      <div className="flex justify-between mt-2 mono text-[10px] text-paper/50">
        <span>AGENT · qualify_lead()</span>
        <span className="text-fire">▸ 42 events / min</span>
      </div>
    </div>
  );
}

/* ───── 6. LOOP DIAGRAM · closed-loop system (for MacroShot) ───── */
export function SystemLoopVisual() {
  const nodes = [
    { id: "CRM", x: 200, y: 40 },
    { id: "WHSE", x: 340, y: 150 },
    { id: "AI", x: 200, y: 260 },
    { id: "REP", x: 60, y: 150 },
  ];
  return (
    <div className="brutal-border border-paper bg-[#0d0d0d] p-5 md:p-6">
      <LoopStyles />
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        <path d="M200 40 L340 150 L200 260 L60 150 Z" fill="none" stroke="#ff5722" strokeWidth="2" className="rv-flow" />
        {nodes.map((n) => (
          <g key={n.id}>
            <rect x={n.x - 34} y={n.y - 14} width="68" height="28" fill="#0a0a0a" stroke="#ffeb3b" strokeWidth="1.5" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#ffeb3b">{n.id}</text>
          </g>
        ))}
        <circle r="4" fill="#ff5722">
          <animateMotion dur="6s" repeatCount="indefinite" path="M200 40 L340 150 L200 260 L60 150 Z" />
        </circle>
      </svg>
      <div className="flex justify-between mt-3 mono text-[10px] text-paper/60">
        <span>CLOSED LOOP · SIGNAL</span>
        <span className="text-fire">▸ NO DEAD ENDS</span>
      </div>
    </div>
  );
}

/* ───── 7. DAY TIMELINE · 3-beat compressed narrative ───── */
export function DayTimelineVisual({
  beats,
}: {
  beats: { day: string; note: string }[];
}) {
  return (
    <div className="relative">
      <LoopStyles />
      <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-fire" />
      <ul className="space-y-5">
        {beats.map((b, i) => (
          <li key={b.day} className="relative pl-10">
            <span
              className="absolute left-0 top-0 w-6 h-6 brutal-border bg-volt text-ink grid place-items-center display text-[11px]"
              style={{ animation: `rv-tick 2.4s ${i * 0.25}s ease-in-out infinite` }}
            >
              {i + 1}
            </span>
            <div className="mono text-volt text-[11px]">{b.day}</div>
            <div className="mt-1 text-paper text-base leading-snug">{b.note}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───── 8. PLAYBOOK RINGS · deliverable badges ───── */
export function PlaybookRingsVisual() {
  const items = [
    { k: "ICP", c: "#ff5722" },
    { k: "MOTIONS", c: "#ffeb3b" },
    { k: "FORECAST", c: "#0a0a0a" },
    { k: "GUARDRAILS", c: "#ff5722" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3">
      <LoopStyles />
      {items.map((it, i) => (
        <div key={it.k} className="brutal-border bg-paper p-3 grid place-items-center aspect-square">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <circle cx="30" cy="30" r="24" fill="none" stroke="#0a0a0a" strokeWidth="1" opacity=".25" />
            <circle
              cx="30" cy="30" r="24" fill="none" stroke={it.c} strokeWidth="4"
              strokeDasharray="150"
              strokeDashoffset="40"
              style={{ transformOrigin: "30px 30px", animation: `rv-rotate ${8 + i * 2}s linear infinite` }}
            />
            <text x="30" y="34" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="700" fontSize="9" fill="#0a0a0a">{it.k}</text>
          </svg>
        </div>
      ))}
    </div>
  );
}
