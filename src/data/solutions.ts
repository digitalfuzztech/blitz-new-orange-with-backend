export type Solution = {
  slug: string;
  problem: string;
  headline: string;
  icon: string;
  description: string;
  symptoms: string[];
  approach: { title: string; description: string }[];
  outcome: { label: string; value: string }[];
  products: string[];
};

export const solutions: Solution[] = [
  {
    slug: "need-more-leads",
    problem: "Need more leads",
    headline: "Turn attention into qualified pipeline",
    icon: "Target",
    description:
      "Capture more of the demand you already generate, qualify it instantly and route it to the right person while intent is still hot.",
    symptoms: [
      "Website traffic that never converts",
      "Enquiries answered hours after they arrive",
      "Marketing spend with unclear return",
    ],
    approach: [
      { title: "Instant capture", description: "AI chat and voice agents engage every visitor and caller in under a second." },
      { title: "Automatic qualification", description: "Budget, timeline and fit scored before a human is involved." },
      { title: "Speed-to-lead routing", description: "Qualified leads reach the right rep with context attached." },
    ],
    outcome: [
      { label: "More qualified leads", value: "+64%" },
      { label: "Speed to first reply", value: "<60s" },
      { label: "Cost per lead", value: "-31%" },
    ],
    products: ["blitz-ai-chatbot", "blitz-crm", "blitz-marketing"],
  },
  {
    slug: "improve-customer-support",
    problem: "Improve customer support",
    headline: "Faster answers, calmer teams",
    icon: "Headphones",
    description:
      "Unify every channel, automate the repetitive majority and give agents the context they need to resolve the rest on first contact.",
    symptoms: [
      "Queues that spike and never fully clear",
      "Customers repeating themselves across channels",
      "Quality reviewed on a tiny sample of tickets",
    ],
    approach: [
      { title: "One omnichannel queue", description: "Every message, call and chat in a single prioritised inbox." },
      { title: "Automate tier one", description: "Grounded AI answers resolve the repeatable questions instantly." },
      { title: "Coach with data", description: "Automatic QA on 100% of conversations highlights training needs." },
    ],
    outcome: [
      { label: "Tickets deflected", value: "74%" },
      { label: "CSAT improvement", value: "+22pts" },
      { label: "Handle time", value: "-38%" },
    ],
    products: ["blitz-inbox", "blitz-ai-chatbot", "blitz-knowledge"],
  },
  {
    slug: "automate-operations",
    problem: "Automate operations",
    headline: "Remove the manual middle of your business",
    icon: "Workflow",
    description:
      "Identify the workflows quietly consuming your team's week and replace them with observable automation that handles exceptions properly.",
    symptoms: [
      "Copy-paste between systems all day",
      "Spreadsheets holding critical processes together",
      "Errors discovered by customers first",
    ],
    approach: [
      { title: "Map the work", description: "Time-and-motion analysis ranks workflows by hours and error cost." },
      { title: "Automate with guardrails", description: "AI steps handle unstructured inputs, humans approve edge cases." },
      { title: "Measure every run", description: "Traces, retries and cost per run visible to the process owner." },
    ],
    outcome: [
      { label: "Hours returned weekly", value: "21" },
      { label: "Process error rate", value: "-86%" },
      { label: "Run success rate", value: "99.7%" },
    ],
    products: ["blitz-automation", "blitz-projects", "blitz-analytics"],
  },
  {
    slug: "increase-sales",
    problem: "Increase sales",
    headline: "Help every rep sell like your best rep",
    icon: "TrendingUp",
    description:
      "Prioritise the deals that will actually close, remove admin from the sales day and follow up with a consistency humans cannot sustain alone.",
    symptoms: [
      "Forecasts that move dramatically at month end",
      "Reps spending more time in the CRM than with buyers",
      "Follow-up that stops after the second attempt",
    ],
    approach: [
      { title: "Score the pipeline", description: "Predictive models rank deals on real closed-won patterns." },
      { title: "Automate the admin", description: "Notes, next steps and updates written from the conversation." },
      { title: "Never drop follow-up", description: "Multi-channel sequences persist across email and WhatsApp." },
    ],
    outcome: [
      { label: "Win rate", value: "+19%" },
      { label: "Sales cycle", value: "-38%" },
      { label: "Selling time per rep", value: "+6h/wk" },
    ],
    products: ["blitz-crm", "blitz-marketing", "blitz-analytics"],
  },
  {
    slug: "reduce-costs",
    problem: "Reduce costs",
    headline: "Grow output without growing headcount",
    icon: "PiggyBank",
    description:
      "Consolidate overlapping tools, automate low-value work and put a clear cost per outcome on every operational process.",
    symptoms: [
      "A dozen subscriptions doing similar jobs",
      "Headcount added to keep up with volume",
      "No visibility of cost per ticket or per order",
    ],
    approach: [
      { title: "Consolidate the stack", description: "Replace overlapping tools with one platform and one contract." },
      { title: "Automate high-volume work", description: "Deflect and automate the tasks that scale with volume." },
      { title: "Track unit economics", description: "Cost per conversation, booking and order reported live." },
    ],
    outcome: [
      { label: "Tool spend", value: "-34%" },
      { label: "Cost per conversation", value: "-58%" },
      { label: "Payback period", value: "4.2 months" },
    ],
    products: ["blitz-inbox", "blitz-automation", "blitz-analytics"],
  },
  {
    slug: "ai-transformation",
    problem: "AI transformation",
    headline: "Move from AI pilots to production value",
    icon: "Sparkles",
    description:
      "A structured programme that takes you from scattered experiments to governed, measurable AI running inside core processes.",
    symptoms: [
      "Promising pilots that never reach production",
      "No agreed measure of AI value",
      "Security and legal blocking rollout",
    ],
    approach: [
      { title: "Opportunity portfolio", description: "Rank use cases by value, feasibility and risk with your leadership team." },
      { title: "Governed delivery", description: "Evaluation suites, guardrails and audit trails from the first build." },
      { title: "Capability transfer", description: "Your team is trained to operate and extend what we ship." },
    ],
    outcome: [
      { label: "Use cases in production", value: "9 of 12" },
      { label: "Time to first value", value: "6 weeks" },
      { label: "Documented ROI", value: "5.4x" },
    ],
    products: ["blitz-automation", "blitz-knowledge", "blitz-analytics"],
  },
  {
    slug: "digital-modernization",
    problem: "Digital modernization",
    headline: "Retire the systems holding you back",
    icon: "RefreshCw",
    description:
      "Migrate legacy platforms without pausing the business, using staged cutovers, parallel running and a clear rollback path.",
    symptoms: [
      "Software nobody left in the company can change",
      "Integrations built on brittle exports",
      "Compliance risk from unsupported versions",
    ],
    approach: [
      { title: "Assess and de-risk", description: "Dependency mapping, data quality review and rollback design." },
      { title: "Strangle, don't rewrite", description: "Move capability by capability while the old system keeps running." },
      { title: "Modern foundations", description: "Cloud-native, typed, tested and documented for the next decade." },
    ],
    outcome: [
      { label: "Migration downtime", value: "0 hours" },
      { label: "Maintenance cost", value: "-45%" },
      { label: "Release frequency", value: "12x" },
    ],
    products: ["blitz-automation", "blitz-projects", "blitz-crm"],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
