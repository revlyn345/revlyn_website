/**
 * A system map showing how demand enters the CRM, moves through the revenue
 * process, reaches customer-facing teams, and feeds learning back into RevOps.
 * Illustration of method, not a performance claim.
 */

const INK = "var(--color-ink)";
const CREAM = "var(--color-cream)";
const MINT = "var(--color-mint)";
const SUN = "var(--color-sun)";
const GRAPE = "var(--color-grape)";
const CORAL = "var(--color-brand)";
const BACKGROUND = "var(--color-background)";

type NodeProps = {
  x: number;
  y: number;
  width: number;
  label: string;
  fill?: string;
  text?: string;
};

function Node({ x, y, width, label, fill = BACKGROUND, text = INK }: NodeProps) {
  return (
    <g>
      <rect x={x + 3} y={y + 4} width={width} height="42" rx="8" fill={INK} fillOpacity="0.16" />
      <rect x={x} y={y} width={width} height="42" rx="8" fill={fill} stroke={INK} strokeOpacity="0.14" />
      <text x={x + width / 2} y={y + 26} textAnchor="middle" fontSize="13" fontWeight="800" fill={text}>{label}</text>
    </g>
  );
}

function StageTitle({ x, number, title, copy }: { x: number; number: string; title: string; copy: string }) {
  return (
    <g>
      <text x={x} y="42" fontSize="12" fontWeight="900" fill={CORAL}>{number}</text>
      <text x={x} y="68" fontSize="19" fontWeight="900" fill={INK}>{title}</text>
      <text x={x} y="88" fontSize="11" fontWeight="700" fill={INK} fillOpacity="0.55">{copy}</text>
    </g>
  );
}

const mobileStages = [
  { number: "01", title: "Demand enters", tone: "bg-mint", items: ["Website", "Campaigns", "Events", "Outbound"] },
  { number: "02", title: "Interactions are captured", tone: "bg-sun", items: ["Forms", "Meetings", "Conversations", "Integrations"] },
  { number: "03", title: "The CRM connects the record", tone: "bg-grape text-cream", items: ["Contacts", "Companies", "Deals", "Activities"] },
  { number: "04", title: "RevOps applies the rules", tone: "bg-brand text-cream", items: ["Lifecycle stages", "Ownership", "Lead routing", "Automation"] },
  { number: "05", title: "Teams take action", tone: "bg-mint", items: ["Marketing nurtures", "Sales follows up", "Service supports"] },
  { number: "06", title: "Performance is measured", tone: "bg-sun", items: ["Funnel", "Forecast", "Attribution", "SLA health"] },
];

export function CrmRevOpsDiagram({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1400 650"
        className="hidden h-auto w-full lg:block"
        role="img"
        aria-label="Connected revenue system map. Website, campaigns, events and outbound are captured through forms, meetings, conversations and integrations. The CRM connects contacts, companies, deals and activities. RevOps applies lifecycle, ownership, routing and automation rules. Marketing, sales and service act on the system. Funnel, forecast, attribution and service levels are measured and fed back into the process."
      >
        <defs>
          <marker id="systemArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={INK} fillOpacity="0.45" />
          </marker>
          <marker id="feedbackArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill={CORAL} />
          </marker>
        </defs>

        <StageTitle x={30} number="01" title="Demand enters" copy="Every route into the business" />
        <StageTitle x={255} number="02" title="Capture" copy="Each interaction becomes data" />
        <StageTitle x={480} number="03" title="CRM record" copy="The shared source of truth" />
        <StageTitle x={705} number="04" title="RevOps rules" copy="How work moves forward" />
        <StageTitle x={930} number="05" title="Team action" copy="The next best action" />
        <StageTitle x={1155} number="06" title="Measurement" copy="What happened and why" />

        {/* Column backplates */}
        <rect x="20" y="110" width="190" height="324" rx="18" fill={MINT} fillOpacity="0.35" />
        <rect x="245" y="110" width="190" height="324" rx="18" fill={SUN} fillOpacity="0.35" />
        <rect x="470" y="110" width="190" height="324" rx="18" fill={GRAPE} fillOpacity="0.13" />
        <rect x="695" y="110" width="190" height="324" rx="18" fill={CORAL} fillOpacity="0.12" />
        <rect x="920" y="110" width="190" height="324" rx="18" fill={MINT} fillOpacity="0.35" />
        <rect x="1145" y="110" width="235" height="324" rx="18" fill={SUN} fillOpacity="0.35" />

        {/* Horizontal system spine */}
        <path d="M115 272 H1262" fill="none" stroke={INK} strokeOpacity="0.28" strokeWidth="3" strokeDasharray="5 8" markerEnd="url(#systemArrow)" />
        {[210, 435, 660, 885, 1110].map((x) => (
          <g key={x}>
            <circle cx={x + 17} cy="272" r="15" fill={INK} />
            <path d={`M${x + 11} 272 h12 M${x + 19} 266 l6 6 -6 6`} fill="none" stroke={CREAM} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}

        {/* Demand sources */}
        <Node x={40} y={132} width={150} label="Website" />
        <Node x={40} y={190} width={150} label="Campaigns" />
        <Node x={40} y={310} width={150} label="Events" />
        <Node x={40} y={368} width={150} label="Outbound" />
        <path d="M115 174 V190 M115 232 V272 M115 272 V310 M115 352 V368" fill="none" stroke={INK} strokeOpacity="0.24" strokeWidth="2" />

        {/* Capture points */}
        <Node x={265} y={132} width={150} label="Forms" />
        <Node x={265} y={190} width={150} label="Meetings" />
        <Node x={265} y={310} width={150} label="Conversations" />
        <Node x={265} y={368} width={150} label="Integrations" />
        <path d="M340 174 V190 M340 232 V272 M340 272 V310 M340 352 V368" fill="none" stroke={INK} strokeOpacity="0.24" strokeWidth="2" />

        {/* CRM objects */}
        <Node x={490} y={132} width={150} label="Contacts" fill={GRAPE} text={CREAM} />
        <Node x={490} y={190} width={150} label="Companies" fill={GRAPE} text={CREAM} />
        <Node x={490} y={310} width={150} label="Deals" fill={GRAPE} text={CREAM} />
        <Node x={490} y={368} width={150} label="Activities" fill={GRAPE} text={CREAM} />
        <path d="M565 174 V190 M565 232 V272 M565 272 V310 M565 352 V368" fill="none" stroke={GRAPE} strokeOpacity="0.6" strokeWidth="3" />

        {/* RevOps operating rules */}
        <Node x={715} y={132} width={150} label="Lifecycle stages" fill={CORAL} text={CREAM} />
        <Node x={715} y={190} width={150} label="Ownership" fill={CORAL} text={CREAM} />
        <Node x={715} y={310} width={150} label="Lead routing" fill={CORAL} text={CREAM} />
        <Node x={715} y={368} width={150} label="Automation" fill={CORAL} text={CREAM} />
        <path d="M790 174 V190 M790 232 V272 M790 272 V310 M790 352 V368" fill="none" stroke={CORAL} strokeOpacity="0.7" strokeWidth="3" />

        {/* Team actions */}
        <Node x={940} y={156} width={150} label="Marketing nurtures" />
        <Node x={940} y={251} width={150} label="Sales follows up" />
        <Node x={940} y={346} width={150} label="Service supports" />
        <path d="M1015 198 V251 M1015 293 V346" fill="none" stroke={INK} strokeOpacity="0.24" strokeWidth="2" />

        {/* Measurement */}
        <Node x={1165} y={132} width={195} label="Funnel conversion" />
        <Node x={1165} y={190} width={195} label="Forecast" />
        <Node x={1165} y={310} width={195} label="Attribution" />
        <Node x={1165} y={368} width={195} label="SLA health" />
        <path d="M1262 174 V190 M1262 232 V272 M1262 272 V310 M1262 352 V368" fill="none" stroke={INK} strokeOpacity="0.24" strokeWidth="2" />

        {/* RevOps foundation and feedback loop */}
        <rect x="20" y="476" width="1360" height="82" rx="18" fill={INK} />
        <text x="46" y="510" fontSize="13" fontWeight="900" fill={MINT}>REVOPS FOUNDATION</text>
        <text x="46" y="536" fontSize="18" fontWeight="900" fill={CREAM}>Process</text>
        <circle cx="210" cy="519" r="3" fill={CORAL} />
        <text x="238" y="536" fontSize="18" fontWeight="900" fill={CREAM}>Data quality</text>
        <circle cx="418" cy="519" r="3" fill={CORAL} />
        <text x="446" y="536" fontSize="18" fontWeight="900" fill={CREAM}>Governance</text>
        <circle cx="628" cy="519" r="3" fill={CORAL} />
        <text x="656" y="536" fontSize="18" fontWeight="900" fill={CREAM}>Enablement</text>
        <circle cx="826" cy="519" r="3" fill={CORAL} />
        <text x="854" y="536" fontSize="18" fontWeight="900" fill={CREAM}>Technology</text>
        <circle cx="1038" cy="519" r="3" fill={CORAL} />
        <text x="1066" y="536" fontSize="18" fontWeight="900" fill={CREAM}>Continuous improvement</text>

        <path d="M1262 434 V600 H790 V570" fill="none" stroke={CORAL} strokeWidth="3" strokeLinecap="round" strokeDasharray="4 9" markerEnd="url(#feedbackArrow)">
          <animate attributeName="stroke-dashoffset" from="26" to="0" dur="1.8s" repeatCount="indefinite" />
        </path>
        <text x="1045" y="624" textAnchor="middle" fontSize="13" fontWeight="900" fill={CORAL}>INSIGHT FEEDS BACK INTO THE RULES</text>
      </svg>

      {/* The same system becomes a legible vertical flow on smaller screens. */}
      <div className="grid gap-0 lg:hidden" role="img" aria-label="Connected CRM and RevOps system, from demand through measurement and continuous improvement">
        {mobileStages.map((stage, index) => (
          <div key={stage.number}>
            <div className={`rounded-2xl border-2 border-ink/10 p-5 shadow-tactile-ink-sm ${stage.tone}`}>
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-black opacity-60">{stage.number}</span>
                <h3 className="font-display text-xl font-black">{stage.title}</h3>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {stage.items.map((item) => (
                  <div key={item} className="rounded-lg border border-ink/10 bg-background/90 px-3 py-2 text-center text-sm font-bold text-ink">{item}</div>
                ))}
              </div>
            </div>
            {index < mobileStages.length - 1 && (
              <div aria-hidden="true" className="mx-auto flex h-10 w-8 flex-col items-center">
                <span className="h-7 border-l-2 border-dashed border-ink/35" />
                <span className="-mt-1 block size-2 rotate-45 border-b-2 border-r-2 border-ink/50" />
              </div>
            )}
          </div>
        ))}
        <div className="mx-auto h-7 border-l-2 border-dashed border-brand" aria-hidden="true" />
        <div className="rounded-2xl bg-ink p-5 text-cream shadow-tactile-ink-sm">
          <p className="text-xs font-black text-mint">REVOPS FOUNDATION</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Process", "Data quality", "Governance", "Enablement", "Technology", "Continuous improvement"].map((item) => (
              <span key={item} className="rounded-lg border border-cream/20 px-3 py-2 text-sm font-bold">{item}</span>
            ))}
          </div>
          <p className="mt-4 border-t border-cream/20 pt-4 text-sm font-black text-brand">Measurement feeds learning back into every rule.</p>
        </div>
      </div>
    </div>
  );
}