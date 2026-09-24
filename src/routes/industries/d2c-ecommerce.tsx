import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { IndustryDetailPage, type IndustryPageContent } from "@/components/IndustryDetailPage";

const content: IndustryPageContent = {
  name: "D2C and e-commerce",
  hero: <>One customer.<br/>Every <span className="text-brand">channel.</span></>,
  intro: "A customer system that connects enquiries, orders, service conversations, and repeat purchase activity without pretending the CRM should replace your commerce platform.",
  audienceIntro: "The customer journey fragments when stores, marketplaces, WhatsApp, support, and campaigns each hold a different version of the buyer.",
  audiences: [
    { title: "Founders reading sales by channel", copy: "Store and marketplace totals are visible, but repeat buyers and service issues are hard to connect across channels." },
    { title: "Teams selling on WhatsApp", copy: "High-intent enquiries arrive in conversations, then ownership and follow-up disappear inside personal threads." },
    { title: "Marketers chasing another order", copy: "Campaigns target customers without enough context about purchase history, returns, or recent support conversations." },
    { title: "Support teams missing the buyer", copy: "An agent sees the current complaint but not the order history, previous conversation, or value of the relationship." },
  ],
  journeyTitle: <>From enquiry to<br/><span className="text-brand">repeat purchase</span>.</>,
  journeyIntro: "Commerce remains the system for orders. The CRM makes ownership, conversations, and lifecycle actions visible around them.",
  stages: [
    { name: "Enquiry or first purchase", copy: "A buyer enters through the store, marketplace, social channel, or direct conversation, with source captured where available.", rule: "Do not force every order into a sales pipeline." },
    { name: "Order and fulfilment context", copy: "The relevant order status and product context are available for service and follow-up without duplicating the commerce ledger.", rule: "The CRM needs useful context, not a second copy of every operational field." },
    { name: "Post-purchase care", copy: "Questions, returns, and service conversations stay connected to the customer and the order that caused them.", rule: "A campaign should not ignore an unresolved service issue." },
    { name: "Repeat purchase", copy: "Teams can identify who bought, when they may need to return, and which channel is appropriate for the next message.", rule: "Timing and relevance matter more than another broadcast." },
    { name: "Loyalty and reactivation", copy: "High-value, returning, and inactive customers are defined using agreed business rules rather than improvised lists.", rule: "A segment needs a clear definition and an action owner." },
  ],
  principles: [
    { title: "Commerce keeps the orders", copy: "Your store remains the authority for transactions, fulfilment, and product data." },
    { title: "CRM keeps the relationship", copy: "Ownership, consent, conversations, service history, and lifecycle actions belong around the customer." },
    { title: "Consent follows the channel", copy: "Messages use the permissions available for that person and channel. A customer record is not automatic consent." },
    { title: "Service changes marketing", copy: "Open complaints, returns, and recent support activity should inform who receives which campaign." },
  ],
  steps: [
    { title: "Map", copy: "We trace where customers enter, buy, ask questions, return products, and buy again." },
    { title: "Prioritise", copy: "We choose the customer signals that should change an action, instead of copying every available field." },
    { title: "Connect", copy: "We configure records, ownership, and supported connections to commerce and communication tools." },
    { title: "Activate", copy: "Teams test service, segmentation, and repeat-purchase workflows with live customer journeys." },
  ],
  deliverables: ["A channel and customer-data map showing where each fact belongs", "A practical unified customer view for sales, marketing, and service", "Lifecycle segments with written definitions and owners", "Supported integrations and fallback processes documented clearly", "Service and repeat-purchase workflows your team can operate"],
  honest: [
    { title: "The CRM is not your order system", copy: "It should use commerce context to improve customer work, not recreate fulfilment and inventory." },
    { title: "Identity matching has limits", copy: "Different phone numbers, emails, and marketplace identities do not always resolve into one person automatically." },
    { title: "Automation still needs permission", copy: "Having a phone number or email does not make every message appropriate or permitted." },
  ],
  mistakes: [
    { title: "Every order becomes a deal", copy: "The sales pipeline fills with transactions that belong in the commerce platform and becomes unusable." },
    { title: "One buyer, several records", copy: "WhatsApp, store, and support identities stay disconnected, so nobody sees the full relationship." },
    { title: "Campaigns ignore service", copy: "Customers receive promotional messages while an unresolved complaint or return is still open." },
    { title: "Segments exist without owners", copy: "Useful groups are built once, then go stale because no team owns the definition or next action." },
  ],
  faqs: [
    { question: "Does HubSpot replace Shopify or our marketplace tools?", answer: "No. Commerce platforms should continue to manage products, orders, payments, and fulfilment. The CRM uses selected context to support conversations and lifecycle actions." },
    { question: "Can WhatsApp conversations be included?", answer: "That depends on the provider and the connection it supports. We verify the actual path before promising it, then document any manual fallback." },
    { question: "Will every marketplace buyer become one customer record?", answer: "Not always. Marketplace privacy rules and limited identity data can prevent reliable matching. We make those boundaries visible rather than claiming a perfect customer view." },
    { question: "Where should we start if the data is messy?", answer: "Start with one useful journey, often enquiry to purchase or purchase to service. Clean the identifiers and fields needed for that action before expanding." },
  ],
  ctaTitle: "Make the next customer action visible.",
  ctaCopy: "Show us one customer journey across your store, conversations, and service tools. We will identify what should connect and what should stay where it is.",
  accent: "brand",
};

export const Route = createFileRoute("/industries/d2c-ecommerce")({
  head: () => ({ meta: [
    { title: "CRM for D2C and E-commerce Teams | Revlyn" },
    { name: "description", content: "Connect e-commerce enquiries, customer conversations, service history, and repeat-purchase actions without replacing your commerce platform." },
    { property: "og:title", content: "CRM for D2C and E-commerce Teams | Revlyn" },
    { property: "og:description", content: "Connect enquiries, customer conversations, service history, and repeat-purchase actions across channels." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://revlyn.io/industries/d2c-ecommerce" },
    { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Industries", path: "/industries" }, { name: "CRM for D2C and E-commerce Teams", path: "/industries/d2c-ecommerce" }]) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/industries/d2c-ecommerce" }] }),
  component: () => <IndustryDetailPage content={content} />,
});