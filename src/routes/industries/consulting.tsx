import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbSchema } from "../../lib/seo";
import { IndustryDetailPage, type IndustryPageContent } from "@/components/IndustryDetailPage";

const content: IndustryPageContent = {
  name: "Consulting",
  hero: <>From first conversation<br/>to <span className="text-brand">repeat work.</span></>,
  intro: "A CRM built for relationship-led selling: pursuits with a clear next step, proposals that do not disappear, and account history that helps the next engagement begin well.",
  audienceIntro: "Consulting pipelines drift when relationships, proposals, and delivery context live with different people.",
  audiences: [
    { title: "Partners carrying the pipeline", copy: "The relationship is strong, but the opportunity exists only in notes and memory. Nobody else can see what needs to happen next." },
    { title: "Growth leads chasing proposals", copy: "Proposals go out, follow-up dates pass, and the forecast counts work that has not moved for weeks." },
    { title: "Delivery leads missing context", copy: "The team starts an engagement without the promises, priorities, and stakeholders discussed during the sale." },
    { title: "Practices relying on referrals", copy: "Referrals arrive through personal networks, but the source and strength of those relationships are never recorded." },
  ],
  journeyTitle: <>The path from brief<br/>to <span className="text-brand">engagement</span>.</>,
  journeyIntro: "The stages follow buyer commitments, not internal optimism, and carry context into delivery.",
  stages: [
    { name: "Qualified conversation", copy: "A real need, stakeholder, and reason to act are recorded before an opportunity enters the forecast.", rule: "Interest without a problem to solve is a relationship, not yet a deal." },
    { name: "Discovery", copy: "The team understands the current situation, intended outcome, decision group, and likely timing.", rule: "Discovery is complete when the brief can be written without guessing." },
    { name: "Proposal", copy: "Scope, commercial terms, decision date, and the next conversation sit on the opportunity.", rule: "Sending a document does not advance a deal; a buyer action does." },
    { name: "Decision", copy: "Approvals, procurement, and revisions are visible, with one person accountable for the next step.", rule: "A decision stage needs a named decision process." },
    { name: "Engagement and expansion", copy: "The won opportunity hands its context into delivery, and later work continues on the same account history.", rule: "The account record should outlive every individual project." },
  ],
  principles: [
    { title: "Relationships stay visible", copy: "Key contacts, introducers, and stakeholder history belong to the firm, while ownership remains clear." },
    { title: "Proposals have next steps", copy: "Every live proposal carries a date, owner, and buyer action. Sent is a status, not a plan." },
    { title: "Sales context reaches delivery", copy: "The handoff records the outcome sold, boundaries agreed, and people involved before work starts." },
    { title: "Repeat work stays connected", copy: "New engagements build on the account's previous projects, conversations, and open opportunities." },
  ],
  steps: [
    { title: "Trace", copy: "We walk recent pursuits from referral or enquiry through proposal, decision, and delivery handoff." },
    { title: "Define", copy: "Your team agrees what each stage means, who owns it, and what evidence moves it forward." },
    { title: "Configure", copy: "We build the pipelines, account view, proposal follow-up, and practical reporting around those decisions." },
    { title: "Adopt", copy: "The team runs live pursuits through the system and adjusts anything that creates work without clarity." },
  ],
  deliverables: ["A written pursuit lifecycle with stage definitions and ownership", "A proposal pipeline with clear next steps and decision dates", "A structured sales-to-delivery handoff", "Account history designed for repeat engagements and referrals", "A review rhythm the practice can run without Revlyn"],
  honest: [
    { title: "Relationships cannot be automated", copy: "A CRM can preserve context and prompt follow-up. It cannot create trust or replace a useful conversation." },
    { title: "Partners still need to update it", copy: "The system can make updates quick and focused, but no tool can infer every offline conversation accurately." },
    { title: "Forecasts need stage discipline", copy: "A clean dashboard will not fix proposals left open because nobody wants to mark them lost." },
  ],
  mistakes: [
    { title: "Every conversation becomes a deal", copy: "Early relationships crowd the forecast before there is a defined need or decision." },
    { title: "Proposal sent means nearly won", copy: "The pipeline advances when a file leaves the inbox, even when the buyer has made no commitment." },
    { title: "Delivery starts without the sale", copy: "Important promises and stakeholder context disappear between the winning conversation and kickoff." },
    { title: "Each project starts from zero", copy: "Past work, referrals, and expansion opportunities are scattered across individual inboxes." },
  ],
  faqs: [
    { question: "Will this make partner-led selling too rigid?", answer: "No. The goal is a small set of shared facts and next steps, not a script for relationships. We remove fields and stages that do not help a real decision." },
    { question: "Can proposals be tracked without changing our document tool?", answer: "Usually. The CRM can track status, value, decision date, and next action while your existing proposal tool continues to create the document." },
    { question: "How does the handoff to delivery work?", answer: "We define the few pieces of context delivery needs before kickoff and make them part of closing the opportunity." },
    { question: "Can you improve an existing HubSpot setup?", answer: "Yes. We can review the current pipelines and account records, then keep what works and change only the parts that create confusion." },
  ],
  ctaTitle: "Keep the relationship. Lose the guesswork.",
  ctaCopy: "Show us how one recent pursuit moved from introduction to delivery. We will identify where context and follow-up were lost.",
  accent: "mint",
};

export const Route = createFileRoute("/industries/consulting")({
  head: () => ({ meta: [
    { title: "CRM for Consulting Firms | Revlyn" },
    { name: "description", content: "CRM for consulting firms: manage relationship-led pursuits, proposals, delivery handoffs, referrals, and repeat engagements in one account history." },
    { property: "og:title", content: "CRM for Consulting Firms | Revlyn" },
    { property: "og:description", content: "Manage relationship-led pursuits, proposals, delivery handoffs, referrals, and repeat engagements in one account history." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://revlyn.io/industries/consulting" },
    { name: "twitter:card", content: "summary_large_image" },
    { "script:ld+json": breadcrumbSchema([{ name: "Industries", path: "/industries" }, { name: "CRM for Consulting Firms", path: "/industries/consulting" }]) },
  ], links: [{ rel: "canonical", href: "https://revlyn.io/industries/consulting" }] }),
  component: () => <IndustryDetailPage content={content} />,
});