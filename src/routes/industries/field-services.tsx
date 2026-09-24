import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { IndustryDetailPage, type IndustryPageContent } from "@/components/IndustryDetailPage";

const content: IndustryPageContent = {
  name: "Field services",
  hero: <>From first call<br/>to <span className="text-brand">next contract.</span></>,
  intro: "A CRM for the commercial side of field service: enquiries, site visits, quotes, customer communication, and contract follow-up connected without turning the CRM into a dispatch system.",
  audienceIntro: "Revenue gets lost between the office, the field, and the customer when visits and commercial follow-up live in separate systems.",
  audiences: [
    { title: "Owners holding every relationship", copy: "Customers call the person they know, and the next quote or renewal depends on one person's memory." },
    { title: "Sales teams waiting on site notes", copy: "A visit happens, but the information needed to price or follow up returns late or incomplete." },
    { title: "Service teams missing context", copy: "Technicians arrive without the commercial promises, previous issues, or contacts attached to the account." },
    { title: "Contract teams reacting late", copy: "Renewal dates exist in spreadsheets, and action starts only when the contract is already at risk." },
  ],
  journeyTitle: <>The path from request<br/>to <span className="text-brand">renewal</span>.</>,
  journeyIntro: "The CRM owns the relationship and commercial journey. Scheduling and job completion remain with the field-service tools built for them.",
  stages: [
    { name: "Enquiry", copy: "The request, site, contact, source, and owner are captured before it disappears into a shared inbox.", rule: "Every qualified enquiry needs one accountable owner." },
    { name: "Site assessment", copy: "The visit date, findings, photos or documents, and commercial next step are connected to the opportunity.", rule: "A completed visit needs a defined handoff, not just a status change." },
    { name: "Quote", copy: "Scope, value, validity, decision date, and customer follow-up stay visible together.", rule: "A quote without a next action is only a document." },
    { name: "Work and handoff", copy: "Commercial context reaches the team responsible for delivery, while operational detail stays in the job system.", rule: "Connect the systems; do not make both systems do the same job." },
    { name: "Service and renewal", copy: "Issues, planned reviews, and contract dates create timely actions on the same account history.", rule: "Renewal work begins before the renewal window." },
  ],
  principles: [
    { title: "One owner at every handoff", copy: "Office, sales, and field teams can see who is responsible for the next customer action." },
    { title: "Site context travels", copy: "The information collected during a visit reaches quoting and customer follow-up without retyping." },
    { title: "CRM is not dispatch", copy: "The customer and commercial record connects to scheduling and job tools rather than replacing them." },
    { title: "Contracts create actions", copy: "Review and renewal dates trigger owned work early enough for a useful conversation." },
  ],
  steps: [
    { title: "Follow", copy: "We trace a real enquiry through assessment, quote, work, service, and renewal." },
    { title: "Separate", copy: "We decide what belongs in CRM and what remains in scheduling, job, finance, or service tools." },
    { title: "Connect", copy: "We configure the pipeline, account view, handoffs, and supported system connections." },
    { title: "Test", copy: "Office and field teams run live work through the process and remove steps that do not help them." },
  ],
  deliverables: ["A written enquiry-to-renewal lifecycle with ownership", "A site-assessment handoff that supports accurate quoting", "A CRM account view for contacts, sites, opportunities, and contracts", "Documented boundaries and connections between CRM and job systems", "Follow-up and renewal workflows with clear action owners"],
  honest: [
    { title: "Field adoption decides the result", copy: "Forms and handoffs must be quick enough to use on the road. A perfect office process that slows technicians will fail." },
    { title: "Not every system connects cleanly", copy: "We verify what each scheduling or job platform actually supports before committing to an integration." },
    { title: "Visibility does not replace ownership", copy: "A renewal reminder helps only when someone is expected and able to act on it." },
  ],
  mistakes: [
    { title: "CRM becomes a job scheduler", copy: "A sales tool is forced to manage dispatch detail and becomes harder for every team to use." },
    { title: "Site notes stay in the field", copy: "The quote is delayed or inaccurate because observations never reach the commercial owner." },
    { title: "Accounts and sites are confused", copy: "Contacts, locations, assets, and contracts are mixed together, making history difficult to trust." },
    { title: "Renewals begin at expiry", copy: "The first review happens after the customer has already started considering alternatives." },
  ],
  faqs: [
    { question: "Does the CRM replace our field-service platform?", answer: "No. Scheduling, dispatch, work orders, and technician operations should stay in the system designed for them. The CRM manages customer, opportunity, and contract context around that work." },
    { question: "Can technicians update information from a phone?", answer: "Yes, if the required update is kept short and the chosen tools support the mobile workflow. We test it with the people doing the work rather than designing only for a desktop." },
    { question: "Can sites and contracts sit under one customer?", answer: "Yes. We define the relationship among company, contact, location, opportunity, and contract so teams can see both the account and site history." },
    { question: "What if our job system has no integration?", answer: "We identify the smallest reliable handoff, which may be a supported automation, scheduled import, or a clearly owned manual step. We do not promise a connection before checking it." },
  ],
  ctaTitle: "Connect the office, field, and customer.",
  ctaCopy: "Walk us through one recent job from enquiry to follow-up. We will show where ownership and information stopped moving.",
  accent: "grape",
};

export const Route = createFileRoute("/industries/field-services")({
  head: () => ({ meta: [
    { title: "CRM for Field Service Businesses | Revlyn" },
    { name: "description", content: "Connect field-service enquiries, site assessments, quotes, customer communication, and contract follow-up without replacing your dispatch system." },
    { property: "og:title", content: "CRM for Field Service Businesses | Revlyn" },
    { property: "og:description", content: "Connect enquiries, site assessments, quotes, customer communication, and contract follow-up." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://revlyn.io/industries/field-services" },
    { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Industries", path: "/industries" }, { name: "CRM for Field Service Businesses", path: "/industries/field-services" }]) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/industries/field-services" }] }),
  component: () => <IndustryDetailPage content={content} />,
});