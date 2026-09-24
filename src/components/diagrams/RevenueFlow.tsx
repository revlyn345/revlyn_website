/**
 * Brand-style explanatory diagrams for the RevOps page.
 * Illustrations of method, not claims: they show how disconnected
 * teams lose handoffs and how a shared operation connects them.
 */

const INK = "var(--color-ink, #101026)";

function LeakMark({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="13" fill="var(--color-brand, #F74D30)" />
      <path d="M-4.5 -4.5 L4.5 4.5 M4.5 -4.5 L-4.5 4.5" stroke="var(--color-cream, #F7EEDF)" strokeWidth="2.6" strokeLinecap="round" />
    </g>
  );
}

export function DisconnectedFlow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 920 300" className={className} role="img" aria-label="Diagram of marketing, sales, and service working in isolation, with customer information leaking at every handoff between them">
      {/* dotted track */}
      <line x1="60" y1="150" x2="860" y2="150" stroke={INK} strokeOpacity="0.12" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />

      {/* broken connector 1 */}
      <line x1="285" y1="150" x2="385" y2="150" stroke={INK} strokeOpacity="0.35" strokeWidth="3" strokeDasharray="9 9" strokeLinecap="round" />
      <LeakMark x={335} y={150} />
      <text x="335" y="58" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fillOpacity="0.55">who owns this lead?</text>

      {/* broken connector 2 */}
      <line x1="565" y1="150" x2="665" y2="150" stroke={INK} strokeOpacity="0.35" strokeWidth="3" strokeDasharray="9 9" strokeLinecap="round" />
      <LeakMark x={615} y={150} />
      <text x="615" y="58" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} fillOpacity="0.55">what was promised?</text>

      {/* Marketing */}
      <g>
        <rect x="60" y="92" width="225" height="116" rx="30" fill="var(--color-mint, #22BFA5)" />
        <text x="172" y="143" textAnchor="middle" fontSize="24" fontWeight="800" fill={INK}>Marketing</text>
        <text x="172" y="172" textAnchor="middle" fontSize="15" fontWeight="600" fill={INK} fillOpacity="0.6">its own list</text>
      </g>

      {/* Sales */}
      <g>
        <rect x="385" y="92" width="180" height="116" rx="30" fill="var(--color-sun, #F5BA0F)" />
        <text x="475" y="143" textAnchor="middle" fontSize="24" fontWeight="800" fill={INK}>Sales</text>
        <text x="475" y="172" textAnchor="middle" fontSize="15" fontWeight="600" fill={INK} fillOpacity="0.6">its own sheet</text>
      </g>

      {/* Service */}
      <g>
        <rect x="665" y="92" width="195" height="116" rx="30" fill="var(--color-brand, #F74D30)" />
        <text x="762" y="143" textAnchor="middle" fontSize="24" fontWeight="800" fill="var(--color-cream, #F7EEDF)">Service</text>
        <text x="762" y="172" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--color-cream, #F7EEDF)" fillOpacity="0.7">finds out last</text>
      </g>

      {/* scattered records underneath */}
      <g fontSize="14" fontWeight="700" fill={INK} fillOpacity="0.45">
        <text x="130" y="262" textAnchor="middle">spreadsheet A</text>
        <text x="450" y="262" textAnchor="middle">WhatsApp inbox</text>
        <text x="790" y="262" textAnchor="middle">sticky notes</text>
      </g>
      <g stroke={INK} strokeOpacity="0.25" strokeWidth="2.5" strokeLinecap="round">
        <path d="M130 232 v-14" />
        <path d="M450 232 v-14" />
        <path d="M790 232 v-14" />
      </g>
    </svg>
  );
}

export function ConnectedSystem({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 980 340" className={className} role="img" aria-label="Diagram of marketing, sales, and service connected through one shared CRM record, with every handoff owned">
      {/* solid connectors */}
      <line x1="300" y1="96" x2="405" y2="150" stroke={INK} strokeOpacity="0.3" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="300" y1="244" x2="405" y2="190" stroke={INK} strokeOpacity="0.3" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="620" y1="150" x2="725" y2="96" stroke={INK} strokeOpacity="0.3" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="620" y1="190" x2="725" y2="244" stroke={INK} strokeOpacity="0.3" strokeWidth="3.5" strokeLinecap="round" />

      {/* shared core */}
      <g>
        <rect x="405" y="118" width="215" height="104" rx="28" fill={INK} />
        <rect x="405" y="112" width="215" height="104" rx="28" fill="var(--color-grape, #6D48E5)" />
        <text x="512" y="157" textAnchor="middle" fontSize="23" fontWeight="800" fill="var(--color-cream, #F7EEDF)">One record</text>
        <text x="512" y="186" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--color-cream, #F7EEDF)" fillOpacity="0.75">one set of numbers</text>
      </g>

      {/* teams */}
      <g>
        <rect x="85" y="52" width="215" height="90" rx="26" fill="var(--color-mint, #22BFA5)" />
        <text x="192" y="105" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>Marketing</text>
      </g>
      <g>
        <rect x="85" y="198" width="215" height="90" rx="26" fill="var(--color-sun, #F5BA0F)" />
        <text x="192" y="251" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>Sales</text>
      </g>
      <g>
        <rect x="725" y="52" width="215" height="90" rx="26" fill="var(--color-brand, #F74D30)" />
        <text x="832" y="105" textAnchor="middle" fontSize="22" fontWeight="800" fill="var(--color-cream, #F7EEDF)">Service</text>
      </g>
      <g>
        <rect x="725" y="198" width="215" height="90" rx="26" fill="var(--color-cream, #F7EEDF)" stroke={INK} strokeOpacity="0.2" strokeWidth="2.5" />
        <text x="832" y="251" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>Leadership</text>
      </g>

      {/* owned handoff marks */}
      <g>
        <circle cx="352" cy="122" r="13" fill="var(--color-mint, #22BFA5)" />
        <path d="M346 122 l4.5 4.5 l8 -9" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g>
        <circle cx="352" cy="218" r="13" fill="var(--color-sun, #F5BA0F)" />
        <path d="M346 218 l4.5 4.5 l8 -9" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g>
        <circle cx="673" cy="122" r="13" fill="var(--color-brand, #F74D30)" />
        <path d="M667 122 l4.5 4.5 l8 -9" stroke="var(--color-cream, #F7EEDF)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g>
        <circle cx="673" cy="218" r="13" fill="var(--color-mint, #22BFA5)" />
        <path d="M667 218 l4.5 4.5 l8 -9" stroke={INK} strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
