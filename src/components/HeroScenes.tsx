import { useEffect, useState } from "react";
import { Check, Mail, Phone, Building2, Globe, User, Trophy } from "lucide-react";

const SCENES = [
  { label: "CRM", line: "Scattered records snap into one profile." },
  { label: "RevOps", line: "Every lead routed to the right lane." },
  { label: "Automation", line: "Follow-ups fire on their own. The deal closes." },
];
const DURATION = 4200;

function useGo(dep: number) {
  const [go, setGo] = useState(false);
  useEffect(() => { setGo(false); const t = setTimeout(() => setGo(true), 60); return () => clearTimeout(t); }, [dep]);
  return go;
}

const fields = [
  { icon: User, text: "Alex Morgan", from: "-translate-x-40 -translate-y-16 -rotate-12" },
  { icon: Mail, text: "alex@northwind.co", from: "translate-x-44 -translate-y-20 rotate-6" },
  { icon: Building2, text: "Northwind", from: "-translate-x-48 translate-y-12 rotate-3" },
  { icon: Phone, text: "+1 555 0142", from: "translate-x-40 translate-y-16 -rotate-6" },
  { icon: Globe, text: "Source: Webinar", from: "translate-y-24 rotate-12" },
];

function CrmScene({ go }: { go: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className={`absolute -inset-3 rounded-[2rem] border border-mint/40 bg-mint/5 transition-all duration-700 delay-[1600ms] ${go ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} />
      <div className="relative grid gap-2">
        {fields.map((f, i) => (
          <div key={f.text} style={{ transitionDelay: `${i * 160}ms` }} className={`flex items-center gap-3 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-2 text-left text-sm text-cream transition-all duration-[900ms] ease-[cubic-bezier(.2,.9,.2,1)] ${go ? "translate-x-0 translate-y-0 rotate-0 opacity-100" : `${f.from} opacity-30`}`}>
            <f.icon size={15} className="text-mint" aria-hidden="true" /> {f.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function RevOpsScene({ go }: { go: boolean }) {
  const lanes = ["New business", "Partner", "Nurture"];
  return (
    <div className="relative mx-auto grid w-full max-w-2xl grid-cols-[auto_minmax(3.5rem,1fr)_auto] items-center gap-2 sm:gap-4">
      <div className="rounded-2xl border border-mint/40 bg-mint/10 px-3 py-2 text-left text-xs sm:px-4 sm:py-3 sm:text-sm text-cream">
        <div className="font-bold">Alex Morgan</div><div className="text-cream/60">Northwind</div>
      </div>
      <svg viewBox="0 0 200 120" className="h-28 w-full sm:h-36" preserveAspectRatio="none" aria-hidden="true">
        {[20, 60, 100].map((y, i) => (
          <path key={y} d={`M0 60 C 80 60, 110 ${y}, 200 ${y}`} fill="none" strokeWidth={i === 0 ? 2.5 : 1} className={i === 0 ? "stroke-brand" : "stroke-cream/20"} strokeDasharray="260" style={{ strokeDashoffset: go ? 0 : 260, transition: `stroke-dashoffset 1.2s ease ${i === 0 ? 0.9 : 0.2}s` }} />
        ))}
        <circle r="5" className="fill-brand" style={{ offsetPath: "path('M0 60 C 80 60, 110 20, 200 20')", offsetDistance: go ? "100%" : "0%", transition: "offset-distance 1.4s ease 1.2s" } as React.CSSProperties} />
      </svg>
      <div className="grid gap-3">
        {lanes.map((l, i) => (
          <div key={l} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all duration-500 sm:px-4 sm:py-2 sm:text-sm ${i === 0 && go ? "border-brand bg-brand text-cream shadow-[0_0_40px_-6px_var(--brand)] delay-[2500ms]" : "border-cream/15 text-cream/50"}`}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function AutomationScene({ go }: { go: boolean }) {
  const steps = ["Welcome email sent", "Task created for the owner", "Meeting booked", "Quote sent"];
  return (
    <div className="mx-auto grid w-full max-w-md gap-2">
      {steps.map((s, i) => (
        <div key={s} style={{ transitionDelay: `${i * 450}ms` }} className={`flex items-center gap-3 rounded-full border border-cream/15 bg-cream/[0.05] px-4 py-2 text-left text-sm text-cream transition-all duration-500 ${go ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-sun text-ink"><Check size={12} aria-hidden="true" /></span>{s}
        </div>
      ))}
      <div className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sun px-5 py-2.5 text-sm font-bold text-ink shadow-[0_0_60px_-8px_var(--sun)] transition-all duration-500 delay-[2000ms] ${go ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
        <Trophy size={16} aria-hidden="true" /> Deal closed won
      </div>
    </div>
  );
}

export function HeroScenes() {
  const [i, setI] = useState(0);
  const go = useGo(i);
  useEffect(() => { const t = setTimeout(() => setI((v) => (v + 1) % 3), DURATION); return () => clearTimeout(t); }, [i]);
  const Scene = [CrmScene, RevOpsScene, AutomationScene][i] ?? CrmScene;
  return (
    <div className="mt-14 w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-cream/10 bg-cream/[0.03] p-4 backdrop-blur-sm sm:p-8">
      <div role="tablist" aria-label="How Revlyn works" className="grid grid-cols-3 gap-3">
        {SCENES.map((s, n) => (
          <button key={s.label} role="tab" aria-selected={n === i} onClick={() => setI(n)} className="text-left">
            <span className={`text-sm font-bold transition-colors ${n === i ? "text-cream" : "text-cream/45"}`}>{s.label}</span>
            <span className="mt-2 block h-0.5 overflow-hidden rounded-full bg-cream/15">
              <span key={`${n}-${i}`} className={`block h-full bg-cream ${n < i ? "w-full" : n === i ? "animate-[grow_4.2s_linear_forwards]" : "w-0"}`} />
            </span>
          </button>
        ))}
      </div>
      <div className="grid min-h-[17rem] place-items-center py-6"><Scene key={i} go={go} /></div>
      <p className="text-sm text-cream/65" aria-live="polite">{SCENES[i]?.line}</p>
    </div>
  );
}
