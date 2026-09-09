import { Footer } from "@/components/Footer";

export default function CookiesClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <section className="border-b-2 border-ink bg-paper">
        <div className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">Legal</div>
          <h1 className="display text-4xl md:text-6xl tracking-[-0.03em] mb-4">Cookie Policy</h1>
          <p className="text-ink/50 text-sm mb-14">Last updated: September 2026</p>

          <div className="space-y-10 text-ink/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">What cookies we use</h2>
              <p>revlyn.io uses a limited set of cookies to operate the site and understand how it's used, including essential cookies required for the site to function, and analytics cookies that help us understand visitor behavior in aggregate.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">Third-party cookies</h2>
              <p>Some pages embed third-party tools (such as HubSpot forms and scheduling) which may set their own cookies in accordance with their own privacy policies.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">Managing cookies</h2>
              <p>You can control or delete cookies through your browser settings at any time. Disabling cookies may affect the functionality of some parts of this Site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">Contact</h2>
              <p>Questions about this policy can be sent to <a href="mailto:info@revlyn.io" className="text-fire underline">info@revlyn.io</a>.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}