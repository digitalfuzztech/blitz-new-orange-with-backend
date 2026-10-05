export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  label: string;
  audience: string;
  features: { title: string; description: string }[];
  highlights: string[];
  benefits: string[];
  useCases: string[];
  journey: { title: string; description: string }[];
  pricingLabel: string;
  pricingDescription: string;
  pricingFeatures: string[];
  badge?: string;
  relatedProductSlug?: string;
  relatedPrompt: string;
};

export const products: Product[] = [
  {
    slug: "whatsapp-automation",
    name: "WhatsApp Automation",
    shortName: "WhatsApp",
    tagline:
      "Turn WhatsApp into an intelligent customer service and sales channel",
    description:
      "Automate customer communication on WhatsApp with AI while giving your team full visibility and a simple path to take over any conversation.",
    icon: "MessageCircle",
    label: "Focused automation",
    audience:
      "Businesses that handle a high volume of enquiries, support questions or sales conversations through WhatsApp.",
    features: [
      {
        title: "AI-powered WhatsApp chatbot",
        description:
          "Answer routine questions from approved business knowledge at any hour.",
      },
      {
        title: "Shared WhatsApp inbox",
        description:
          "Give the team one place to monitor, assign and respond to customer conversations.",
      },
      {
        title: "Human takeover",
        description:
          "Move between AI and human conversation modes while preserving the full context.",
      },
      {
        title: "Business knowledge training",
        description:
          "Ground answers in your services, policies, FAQs and operating information.",
      },
      {
        title: "Lead and inquiry capture",
        description:
          "Collect customer details and the reason for each enquiry during the conversation.",
      },
      {
        title: "Conversation history",
        description:
          "Keep a searchable record for follow-up, quality review and team continuity.",
      },
      {
        title: "Multi-language communication",
        description:
          "Support customers across languages while keeping team workflows consistent.",
      },
      {
        title: "Conversation analytics",
        description:
          "Understand enquiry themes, response activity and where human help is needed.",
      },
    ],
    highlights: [
      "24/7 automated replies",
      "AI and human modes",
      "Shared team access",
      "Knowledge-based FAQ answers",
      "Lead capture",
      "Basic conversation analytics",
    ],
    benefits: [
      "Respond consistently outside normal business hours",
      "Let people step in whenever judgment or empathy is required",
      "Give staff shared context instead of isolated phone conversations",
      "Capture useful inquiry details before a team member follows up",
    ],
    useCases: [
      "Customer support teams managing repeat questions",
      "Sales teams qualifying inbound WhatsApp enquiries",
      "Appointment-led businesses handling availability questions",
      "Growing teams that need shared access to customer conversations",
    ],
    journey: [
      {
        title: "Connect your business knowledge",
        description: "Define approved answers, policies and escalation rules.",
      },
      {
        title: "AI handles the first response",
        description:
          "Customers receive immediate, grounded answers on WhatsApp.",
      },
      {
        title: "Capture the inquiry",
        description:
          "Key customer details and intent are recorded with the conversation.",
      },
      {
        title: "Bring in your team",
        description:
          "A person can monitor, take over and continue with the full history.",
      },
    ],
    pricingLabel: "Contact us",
    pricingDescription:
      "For businesses focused on automated WhatsApp communication and human handover.",
    pricingFeatures: [
      "AI WhatsApp chatbot",
      "Shared conversation inbox",
      "Human takeover",
      "Business knowledge training",
      "Lead capture and history",
    ],
    relatedProductSlug: "all-in-one",
    relatedPrompt: "Need customer management too? Explore All In One.",
  },
  {
    slug: "ai-powered-crm",
    name: "AI Powered CRM",
    shortName: "AI CRM",
    tagline: "Manage customers, leads and follow-up with AI-assisted clarity",
    description:
      "Give your team a structured customer and sales system with AI summaries, lead insights and suggested next steps built into the workflow.",
    icon: "UsersRound",
    label: "Customer intelligence",
    audience:
      "Businesses that need a dependable system for contacts, leads, pipeline activity and relationship follow-up.",
    features: [
      {
        title: "Customer and contact management",
        description:
          "Organize customer records, contact details, notes and relationship context.",
      },
      {
        title: "Lead management",
        description:
          "Capture, assign and progress leads through clear stages and ownership.",
      },
      {
        title: "Sales pipeline",
        description:
          "See opportunities by stage, owner and next action in one shared view.",
      },
      {
        title: "Tasks and follow-ups",
        description:
          "Keep calls, appointments and next steps attached to the customer record.",
      },
      {
        title: "Customer activity history",
        description:
          "Review notes, changes and interactions without piecing together separate tools.",
      },
      {
        title: "AI customer summaries",
        description:
          "Turn customer activity into concise context before the next interaction.",
      },
      {
        title: "AI lead insights",
        description:
          "Highlight useful patterns and suggested follow-ups for the team to review.",
      },
      {
        title: "CRM analytics",
        description:
          "Track pipeline health, activity and customer-management trends from the dashboard.",
      },
    ],
    highlights: [
      "Customer database",
      "Lead stages and pipeline",
      "Tasks and follow-ups",
      "AI customer summaries",
      "Team collaboration",
      "CRM analytics",
    ],
    benefits: [
      "Keep customer information in one structured workspace",
      "Make ownership and next actions clear across the team",
      "Give staff concise context before customer follow-up",
      "Build a more consistent sales and relationship-management process",
    ],
    useCases: [
      "Sales teams replacing disconnected lead spreadsheets",
      "Account teams coordinating customer follow-up",
      "Service businesses tracking appointments and relationship history",
      "Managers who need a clear view of pipeline and team activity",
    ],
    journey: [
      {
        title: "Create one customer record",
        description:
          "Bring contact details, notes and ownership into a shared system.",
      },
      {
        title: "Organize leads and relationships",
        description:
          "Use stages, tasks and activity history to keep work moving.",
      },
      {
        title: "Add AI-assisted context",
        description:
          "Review summaries, insights and suggested follow-ups before acting.",
      },
      {
        title: "Manage from the dashboard",
        description:
          "Monitor customer activity and pipeline movement in one place.",
      },
    ],
    pricingLabel: "Contact us",
    pricingDescription:
      "For businesses that need structured customer, lead and sales management.",
    pricingFeatures: [
      "Customer and contact database",
      "Lead stages and sales pipeline",
      "Tasks, notes and follow-ups",
      "AI summaries and lead insights",
      "Dashboard and CRM analytics",
    ],
    relatedProductSlug: "all-in-one",
    relatedPrompt:
      "Want CRM and customer conversations together? Explore All In One.",
  },
  {
    slug: "all-in-one",
    name: "All In One",
    shortName: "All In One",
    tagline: "One AI-powered workspace for your complete customer operation",
    description:
      "Bring WhatsApp communication, CRM, automation, knowledge and customer intelligence into one connected workspace designed to grow with your business.",
    icon: "Layers3",
    label: "Complete platform",
    badge: "Complete Platform",
    audience:
      "Businesses that want customer communication, CRM and advanced AI workflows to operate as one connected system.",
    features: [
      {
        title: "Everything in WhatsApp Automation",
        description:
          "AI replies, team inbox, human takeover, knowledge training and conversation history.",
      },
      {
        title: "Everything in AI Powered CRM",
        description:
          "Contacts, leads, pipeline, follow-ups, activity history and AI-assisted customer management.",
      },
      {
        title: "Unified AI-powered inbox",
        description:
          "Connect conversations and customer records in a shared operating view.",
      },
      {
        title: "Conversation-to-CRM synchronization",
        description:
          "Keep useful customer context aligned between communication and CRM workflows.",
      },
      {
        title: "Advanced automation",
        description:
          "Design multi-step customer workflows with clear points for human review.",
      },
      {
        title: "Customer journey visibility",
        description:
          "Understand the relationship from first conversation through ongoing activity.",
      },
      {
        title: "Advanced analytics and AI insights",
        description:
          "Bring communication, lead and operational signals into a broader business view.",
      },
      {
        title: "Future-ready integrations",
        description:
          "Built to support future communication channels and connected business tools as the platform expands.",
      },
    ],
    highlights: [
      "WhatsApp Automation included",
      "AI Powered CRM included",
      "Unified customer context",
      "Advanced automations",
      "AI business insights",
      "Future-ready integrations",
    ],
    benefits: [
      "Run communication and customer management from one business workspace",
      "Keep conversation context connected to leads and customer relationships",
      "Coordinate AI automation with clear human ownership",
      "Adopt a foundation designed to support more channels and integrations over time",
    ],
    useCases: [
      "Customer operations teams that need communication and CRM together",
      "Growing businesses consolidating fragmented customer tools",
      "Teams designing connected lead qualification and follow-up workflows",
      "Leaders who need one view across customer activity and operations",
    ],
    journey: [
      {
        title: "Unify customer entry points",
        description:
          "Bring WhatsApp conversations and captured enquiries into one workspace.",
      },
      {
        title: "Create connected customer context",
        description:
          "Keep CRM records, ownership and conversation history aligned.",
      },
      {
        title: "Automate with human control",
        description:
          "Use AI workflows while giving the team clear review and takeover points.",
      },
      {
        title: "Grow on one foundation",
        description:
          "Add future-ready channels, integrations and insights without changing the business workspace.",
      },
    ],
    pricingLabel: "Custom pricing",
    pricingDescription:
      "For businesses ready to combine communication, CRM and advanced AI workflows.",
    pricingFeatures: [
      "Everything in both focused products",
      "Unified AI-powered inbox",
      "Conversation-to-CRM workflows",
      "Advanced automation and analytics",
      "Future-ready integrations",
    ],
    relatedPrompt: "One complete customer operations platform.",
  },
];

export type ComparisonValue =
  "Included" | "Not included" | "Advanced" | "Future-ready";

export type ComparisonRow = {
  feature: string;
  whatsappAutomation: ComparisonValue;
  aiPoweredCrm: ComparisonValue;
  allInOne: ComparisonValue;
};

export const productComparison: ComparisonRow[] = [
  {
    feature: "AI WhatsApp chatbot",
    whatsappAutomation: "Included",
    aiPoweredCrm: "Not included",
    allInOne: "Included",
  },
  {
    feature: "WhatsApp inbox",
    whatsappAutomation: "Included",
    aiPoweredCrm: "Not included",
    allInOne: "Included",
  },
  {
    feature: "Human takeover",
    whatsappAutomation: "Included",
    aiPoweredCrm: "Not included",
    allInOne: "Included",
  },
  {
    feature: "Business knowledge",
    whatsappAutomation: "Included",
    aiPoweredCrm: "Not included",
    allInOne: "Advanced",
  },
  {
    feature: "Contacts and leads",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Included",
    allInOne: "Included",
  },
  {
    feature: "Sales pipeline",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Included",
    allInOne: "Included",
  },
  {
    feature: "Tasks and follow-ups",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Included",
    allInOne: "Included",
  },
  {
    feature: "AI CRM insights",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Included",
    allInOne: "Advanced",
  },
  {
    feature: "Unified customer inbox",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Not included",
    allInOne: "Included",
  },
  {
    feature: "Advanced automations",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Not included",
    allInOne: "Advanced",
  },
  {
    feature: "Conversation-to-CRM",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Not included",
    allInOne: "Included",
  },
  {
    feature: "Advanced analytics",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Included",
    allInOne: "Advanced",
  },
  {
    feature: "External integrations",
    whatsappAutomation: "Not included",
    aiPoweredCrm: "Not included",
    allInOne: "Future-ready",
  },
];

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);
