import { Footer } from "@/components/Footer";

export default function SecurityClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <section className="border-b-2 border-ink bg-paper">
        <div className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">Trust</div>
          <h1 className="display text-4xl md:text-6xl tracking-[-0.03em] mb-14">Security</h1>

          <div className="space-y-10 text-ink/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">Read-only access, by default</h2>
              <p>Where possible, we request read-only or scoped access to your systems (like our HubSpot audit's read-only Super Admin seat) rather than full administrative control.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">Data handling</h2>
              <p>We do not sell, share, or use client data for any purpose beyond the engagement it was provided for. Access is revoked at the end of any audit or project unless an ongoing engagement is in place.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">NDAs</h2>
              <p>We're happy to sign a mutual NDA before any access is granted, on request.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">Reporting a concern</h2>
              <p>If you believe you've found a security issue related to Revlyn or this website, please contact us directly at <a href="mailto:info@revlyn.io" className="text-fire underline">info@revlyn.io</a>.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}