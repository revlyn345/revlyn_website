import { Footer } from "@/components/Footer";

export default function TermsClient() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <section className="border-b-2 border-ink bg-paper">
        <div className="max-w-[900px] mx-auto px-6 py-20 md:py-28">
          <div className="mono text-[11px] uppercase tracking-[0.22em] text-fire mb-5">Legal</div>
          <h1 className="display text-4xl md:text-6xl tracking-[-0.03em] mb-4">Terms of Service</h1>
          <p className="text-ink/50 text-sm mb-14">Last updated: September 2026</p>

          <div className="prose-legal space-y-10 text-ink/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">1. Agreement to terms</h2>
              <p>By accessing or using revlyn.io ("the Site") or engaging Revlyn's services, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Site or our services.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">2. Our services</h2>
              <p>Revlyn provides CRM, RevOps, GTM, and AI infrastructure consulting services, including HubSpot implementation, optimization, and ongoing operator support, as described on the Site. Specific scope, deliverables, and pricing for any engagement are set out in a separate signed proposal or contract between Revlyn and the client.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">3. Use of the Site</h2>
              <p>You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">4. Intellectual property</h2>
              <p>All content on this Site, including text, graphics, logos, and software, is the property of Revlyn or its licensors and is protected by applicable intellectual property laws.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">5. Limitation of liability</h2>
              <p>To the fullest extent permitted by law, Revlyn shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">6. Changes to these terms</h2>
              <p>We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink mb-3">7. Contact</h2>
              <p>Questions about these Terms can be sent to <a href="mailto:info@revlyn.io" className="text-fire underline">info@revlyn.io</a>.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}