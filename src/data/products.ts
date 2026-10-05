export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  category: "Engage" | "Operate" | "Grow";
  features: { title: string; description: string }[];
  benefits: string[];
  metrics: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "blitz-crm",
    name: "Blitz CRM",
    tagline: "AI-powered customer relationship management",
    description:
      "A CRM that thinks ahead. Blitz CRM enriches every contact, scores every deal and writes the follow-up before your team asks for it.",
    icon: "Users",
    category: "Grow",
    features: [
      { title: "Predictive deal scoring", description: "Models trained on your closed-won history rank pipeline by real probability, not gut feel." },
      { title: "Auto-enriched contacts", description: "Firmographics, tech stack and intent signals attach themselves to every new record." },
      { title: "Conversation intelligence", description: "Calls and emails are summarised into next steps, risks and stakeholder maps." },
      { title: "Revenue forecasting", description: "Roll-up forecasts by rep, region and segment with confidence intervals you can defend." },
      { title: "Pipeline automations", description: "Stage changes trigger tasks, sequences and approvals without a single manual click." },
      { title: "Native inbox sync", description: "Two-way sync with Blitz Inbox, Gmail and Outlook keeps context in one timeline." },
    ],
    benefits: [
      "38% faster sales cycles across mid-market teams",
      "Zero manual data entry for reps",
      "One source of truth for revenue reporting",
      "SOC 2 Type II controls on every record",
    ],
    metrics: [
      { label: "Faster sales cycle", value: "38%" },
      { label: "Forecast accuracy", value: "94%" },
      { label: "Admin hours saved / rep", value: "6h/wk" },
    ],
  },
  {
    slug: "blitz-inbox",
    name: "Blitz Inbox",
    tagline: "One inbox for WhatsApp, Messenger, Instagram, Email and Live Chat",
    description:
      "Every customer conversation in one thread, with AI drafting replies, routing by intent and translating in 42 languages.",
    icon: "Inbox",
    category: "Engage",
    features: [
      { title: "Unified omnichannel thread", description: "WhatsApp, Instagram, Messenger, email, SMS and live chat merge into one customer timeline." },
      { title: "AI reply drafting", description: "Suggested responses grounded in your knowledge base, tone and past resolutions." },
      { title: "Intent-based routing", description: "Messages reach the right team in under two seconds with priority and sentiment tags." },
      { title: "Shared team views", description: "Assignments, mentions, private notes and SLA timers built for high-volume teams." },
      { title: "Live translation", description: "Agents write in their language, customers read in theirs across 42 languages." },
      { title: "CSAT + QA scoring", description: "Automatic quality reviews on 100% of conversations, not a 2% sample." },
    ],
    benefits: [
      "First response time under 30 seconds",
      "One licence covers every channel",
      "Full audit trail for compliance teams",
      "Handover between AI and human in one click",
    ],
    metrics: [
      { label: "First response", value: "<30s" },
      { label: "Channels unified", value: "8" },
      { label: "Languages", value: "42" },
    ],
  },
  {
    slug: "blitz-ai-chatbot",
    name: "Blitz AI Chatbot",
    tagline: "A trainable AI agent that knows your business",
    description:
      "Train on your documents, website and product catalogue. Deploy in minutes. Resolve up to 74% of inbound questions without a human.",
    icon: "Bot",
    category: "Engage",
    features: [
      { title: "Train on your sources", description: "PDFs, websites, Notion, help centres and product feeds indexed with citations." },
      { title: "Guardrails and tone", description: "Define what the agent can promise, refuse and escalate — enforced at runtime." },
      { title: "Actions, not just answers", description: "Book meetings, check orders and update records through secure tool calls." },
      { title: "Multi-surface deploy", description: "Website widget, WhatsApp, in-app SDK and Slack from a single configuration." },
      { title: "Answer analytics", description: "See deflection rate, unanswered topics and knowledge gaps every week." },
      { title: "Human handover", description: "Seamless escalation into Blitz Inbox with full transcript and suggested resolution." },
    ],
    benefits: [
      "74% average automated resolution rate",
      "24/7 coverage with no headcount increase",
      "Grounded answers with source citations",
      "Deploys in under an afternoon",
    ],
    metrics: [
      { label: "Auto-resolution", value: "74%" },
      { label: "Setup time", value: "1 day" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    slug: "blitz-automation",
    name: "Blitz Automation",
    tagline: "Workflow automation with an AI reasoning layer",
    description:
      "Visually build workflows that span your CRM, finance stack, spreadsheets and internal APIs — with AI steps that handle the messy middle.",
    icon: "Workflow",
    category: "Operate",
    features: [
      { title: "Visual builder", description: "Drag-and-drop triggers, branches, loops and approvals with live test runs." },
      { title: "AI decision steps", description: "Classify, extract and summarise unstructured inputs inside any workflow." },
      { title: "300+ connectors", description: "Stripe, Xero, HubSpot, Slack, Shopify, Google Workspace and generic REST." },
      { title: "Human-in-the-loop", description: "Route exceptions to a person with full context, then resume automatically." },
      { title: "Version control", description: "Branch, review and roll back workflows like code with full change history." },
      { title: "Observability", description: "Every run traced step-by-step with retries, latency and cost breakdowns." },
    ],
    benefits: [
      "Average 21 hours of manual work removed weekly",
      "Errors caught before they hit customers",
      "No engineering ticket required",
      "Enterprise approvals and audit logs built in",
    ],
    metrics: [
      { label: "Hours saved / week", value: "21" },
      { label: "Connectors", value: "300+" },
      { label: "Run success rate", value: "99.7%" },
    ],
  },
  {
    slug: "blitz-booking",
    name: "Blitz Booking",
    tagline: "Appointment scheduling that fills itself",
    description:
      "Real-time availability, smart reminders and AI rescheduling for clinics, salons, agencies, hotels and field teams.",
    icon: "CalendarCheck",
    category: "Engage",
    features: [
      { title: "Live availability", description: "Multi-resource, multi-location calendars that never double book." },
      { title: "Smart reminders", description: "WhatsApp, SMS and email sequences tuned to cut no-shows." },
      { title: "AI rescheduling", description: "Cancellations trigger an instant offer to your waitlist." },
      { title: "Payments and deposits", description: "Collect deposits at booking to protect high-value slots." },
      { title: "Round-robin routing", description: "Distribute demand by skill, language, territory or workload." },
      { title: "Embedded anywhere", description: "Booking pages, website embeds, chatbot flows and QR check-in." },
    ],
    benefits: [
      "No-shows down by an average of 47%",
      "Waitlist recovers cancelled revenue automatically",
      "Works across locations and time zones",
      "Calendar sync with Google and Microsoft 365",
    ],
    metrics: [
      { label: "Fewer no-shows", value: "47%" },
      { label: "Booking time", value: "18s" },
      { label: "Calendar sync", value: "Real-time" },
    ],
  },
  {
    slug: "blitz-analytics",
    name: "Blitz Analytics",
    tagline: "Business intelligence you can ask questions to",
    description:
      "Connect your data once and get executive dashboards, anomaly alerts and plain-language answers about what changed and why.",
    icon: "BarChart3",
    category: "Grow",
    features: [
      { title: "Ask in plain language", description: "\"Why did retention drop in March?\" returns a charted, sourced answer." },
      { title: "Automated anomaly alerts", description: "Detects breaks in trend before they show up in the monthly review." },
      { title: "Unified data model", description: "Blend CRM, support, billing and product data into governed metrics." },
      { title: "Board-ready dashboards", description: "Shareable, permissioned views with scheduled PDF delivery." },
      { title: "Cohort and funnel analysis", description: "Retention curves, attribution and conversion drop-off out of the box." },
      { title: "Warehouse friendly", description: "Reads from BigQuery, Snowflake, Postgres or Blitz-native storage." },
    ],
    benefits: [
      "Answers in seconds instead of analyst backlog",
      "Single definition for every core metric",
      "Alerts that reach the owner, not a channel",
      "Row-level permissions for regulated teams",
    ],
    metrics: [
      { label: "Time to insight", value: "12s" },
      { label: "Data sources", value: "60+" },
      { label: "Metric drift caught", value: "2.4x" },
    ],
  },
  {
    slug: "blitz-marketing",
    name: "Blitz Marketing",
    tagline: "Email and WhatsApp campaigns with AI segmentation",
    description:
      "Build audiences from behaviour, generate on-brand creative and send campaigns that adapt to each contact's engagement.",
    icon: "Megaphone",
    category: "Grow",
    features: [
      { title: "Behavioural segments", description: "Audiences update in real time from product, CRM and support signals." },
      { title: "On-brand generation", description: "Copy and creative variants generated inside your brand guidelines." },
      { title: "WhatsApp campaigns", description: "Template management, opt-in handling and delivery reporting built in." },
      { title: "Journey builder", description: "Multi-step lifecycle journeys with holdout groups and control cells." },
      { title: "Send-time optimisation", description: "Per-contact timing based on historic open and reply behaviour." },
      { title: "Revenue attribution", description: "Every campaign tied back to pipeline and closed revenue in Blitz CRM." },
    ],
    benefits: [
      "3.1x higher reply rate on WhatsApp than email alone",
      "Creative production time cut by 80%",
      "Compliance-safe opt-in management",
      "Attribution your finance team accepts",
    ],
    metrics: [
      { label: "Reply uplift", value: "3.1x" },
      { label: "Creative time saved", value: "80%" },
      { label: "Deliverability", value: "98.6%" },
    ],
  },
  {
    slug: "blitz-hr",
    name: "Blitz HR",
    tagline: "HR management for fast-moving teams",
    description:
      "Hiring, onboarding, time off, documents and performance in one system that keeps managers accountable and people informed.",
    icon: "UserRoundCheck",
    category: "Operate",
    features: [
      { title: "Applicant tracking", description: "Structured scorecards, AI screening summaries and interview scheduling." },
      { title: "Onboarding journeys", description: "Role-based checklists across IT, finance, legal and the hiring manager." },
      { title: "Time off and attendance", description: "Policies by country, accruals, approvals and calendar visibility." },
      { title: "Document vault", description: "Contracts, certifications and e-signature with expiry reminders." },
      { title: "Performance cycles", description: "Goals, reviews and 1:1 notes that roll into a clear talent picture." },
      { title: "People analytics", description: "Headcount, attrition risk and cost per hire in live dashboards." },
    ],
    benefits: [
      "New hires productive days earlier",
      "Compliance documents never expire silently",
      "Managers prompted, not chased",
      "One record per employee across the lifecycle",
    ],
    metrics: [
      { label: "Faster onboarding", value: "4 days" },
      { label: "Admin reduction", value: "62%" },
      { label: "Policy coverage", value: "30 countries" },
    ],
  },
  {
    slug: "blitz-projects",
    name: "Blitz Projects",
    tagline: "Project management with AI status reporting",
    description:
      "Plan work, track capacity and let AI write the status update from what actually happened in the tasks.",
    icon: "KanbanSquare",
    category: "Operate",
    features: [
      { title: "Boards, lists and timelines", description: "Switch views without losing structure, dependencies or filters." },
      { title: "AI status reports", description: "Weekly client-ready summaries drafted from real task movement." },
      { title: "Capacity planning", description: "See who is over-allocated before the sprint, not after it slips." },
      { title: "Client portals", description: "Share scoped progress views with external stakeholders securely." },
      { title: "Time and budget tracking", description: "Burn rate against budget with margin alerts per project." },
      { title: "Templates", description: "Repeatable delivery playbooks for implementations and retainers." },
    ],
    benefits: [
      "Status meetings replaced by living reports",
      "Delivery margin visible in real time",
      "Fewer missed dependencies",
      "Clients see progress without extra work",
    ],
    metrics: [
      { label: "On-time delivery", value: "+29%" },
      { label: "Reporting time", value: "-90%" },
      { label: "Margin visibility", value: "Live" },
    ],
  },
  {
    slug: "blitz-knowledge",
    name: "Blitz Knowledge",
    tagline: "A knowledge base your AI and your team both read",
    description:
      "One source of truth that powers help centres, internal wikis and every AI answer across the BlitzElement platform.",
    icon: "BookOpen",
    category: "Operate",
    features: [
      { title: "Dual-purpose articles", description: "Publish once for customers, agents and AI retrieval simultaneously." },
      { title: "Freshness scoring", description: "Stale or contradicted content flagged automatically for review." },
      { title: "Gap detection", description: "Unanswered questions from chat turn into suggested article drafts." },
      { title: "Granular permissions", description: "Public, partner and internal spaces with SSO-backed access." },
      { title: "Versioning and approvals", description: "Editorial workflow with reviewers and scheduled publishing." },
      { title: "Multilingual sync", description: "Translations kept in step with the source article automatically." },
    ],
    benefits: [
      "AI answers stay accurate as the business changes",
      "Support ticket deflection improves every month",
      "New agents ramp with less shadowing",
      "One place to update, everywhere to publish",
    ],
    metrics: [
      { label: "Deflection uplift", value: "+41%" },
      { label: "Content freshness", value: "97%" },
      { label: "Languages", value: "42" },
    ],
  },
  {
    slug: "blitz-voice",
    name: "Blitz Voice",
    tagline: "AI voice receptionist that never misses a call",
    description:
      "Natural-sounding voice agents answer, qualify, book and escalate calls around the clock — with full transcripts in your CRM.",
    icon: "PhoneCall",
    category: "Engage",
    features: [
      { title: "Natural conversation", description: "Sub-500ms response with interruption handling and realistic prosody." },
      { title: "Qualify and book", description: "Captures intent, checks availability and confirms appointments live." },
      { title: "Warm transfer", description: "Escalates to a human with a spoken summary of the call so far." },
      { title: "Call intelligence", description: "Transcripts, sentiment and outcomes written straight into Blitz CRM." },
      { title: "Number management", description: "Port existing numbers or provision new ones in 30+ countries." },
      { title: "Compliance recording", description: "Consent prompts, retention rules and regional data residency." },
    ],
    benefits: [
      "Zero missed calls after hours and at peak",
      "Every enquiry captured as a qualified record",
      "Reception cost reduced significantly",
      "Consistent brand voice on every call",
    ],
    metrics: [
      { label: "Calls answered", value: "100%" },
      { label: "Response latency", value: "<500ms" },
      { label: "Countries", value: "30+" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
