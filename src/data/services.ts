export type Service = {
  slug: string;
  name: string;
  icon: string;
  overview: string;
  benefits: string[];
  process: { step: string; description: string }[];
  deliverables: string[];
  timeline: string;
};

const standardProcess = (a: string, b: string, c: string, d: string) => [
  { step: "Discovery", description: a },
  { step: "Design", description: b },
  { step: "Build", description: c },
  { step: "Launch & iterate", description: d },
];

export const services: Service[] = [
  {
    slug: "ai-website-development",
    name: "AI Website Development",
    icon: "Globe",
    overview:
      "High-performance marketing sites with AI search, personalised content blocks and conversion instrumentation from day one.",
    benefits: [
      "Sub-1s largest contentful paint on mobile",
      "Personalised hero and CTA by segment",
      "Built-in AI assistant trained on your content",
      "Editable by marketing without developer tickets",
    ],
    process: standardProcess(
      "Positioning workshop, competitor teardown and conversion audit of the current site.",
      "Design system, wireframes and high-fidelity pages reviewed in a live prototype.",
      "Component build, CMS wiring, AI assistant training and analytics instrumentation.",
      "Launch, Core Web Vitals verification and a 90-day experimentation roadmap.",
    ),
    deliverables: ["Design system in Figma", "Production Next-gen React site", "CMS + editor training", "Analytics & experiment plan"],
    timeline: "4–8 weeks",
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    icon: "Code2",
    overview:
      "Bespoke internal platforms and customer-facing products engineered for scale, security and long-term maintainability.",
    benefits: [
      "Systems shaped around your real operating model",
      "Typed, tested codebases your team can own",
      "Cloud-native architecture with cost guardrails",
      "Documentation and handover included",
    ],
    process: standardProcess(
      "Process mapping, technical discovery and success metrics agreed with stakeholders.",
      "Solution architecture, data model and interface design validated with end users.",
      "Two-week delivery increments with demos, automated tests and staged environments.",
      "Production rollout, monitoring, runbooks and optional managed support.",
    ),
    deliverables: ["Solution architecture", "Production application", "Test suite & CI/CD", "Runbooks and handover"],
    timeline: "8–20 weeks",
  },
  {
    slug: "crm-development",
    name: "CRM Development",
    icon: "Users",
    overview:
      "Implementation, migration and deep customisation of Blitz CRM around how your revenue team actually sells.",
    benefits: [
      "Clean migration with no lost history",
      "Pipeline stages matched to your sales motion",
      "Automated hygiene rules and reporting",
      "Adoption programme for every rep",
    ],
    process: standardProcess(
      "Audit of current CRM, data quality assessment and revenue process interviews.",
      "Object model, pipeline design, permission matrix and dashboard specification.",
      "Configuration, data migration, integrations and automation build.",
      "Team enablement, adoption tracking and a 30/60/90 optimisation plan.",
    ),
    deliverables: ["Configured CRM instance", "Migrated and deduplicated data", "Automation library", "Enablement sessions"],
    timeline: "3–8 weeks",
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    icon: "Bot",
    overview:
      "Custom conversational agents trained on your knowledge, connected to your systems and governed by clear guardrails.",
    benefits: [
      "Deflect the majority of repetitive questions",
      "Answers grounded in approved sources",
      "Actions like booking, ordering and lookups",
      "Continuous tuning from real transcripts",
    ],
    process: standardProcess(
      "Intent analysis from existing tickets, chats and calls to size the opportunity.",
      "Conversation design, tone guide, escalation rules and success metrics.",
      "Knowledge ingestion, tool integration, evaluation suite and staged rollout.",
      "Weekly answer-quality reviews and knowledge gap remediation.",
    ),
    deliverables: ["Trained agent", "Conversation design doc", "Evaluation dashboard", "Escalation playbook"],
    timeline: "2–6 weeks",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    icon: "Workflow",
    overview:
      "We find the expensive manual work in your operation and replace it with reliable, observable automated workflows.",
    benefits: [
      "Documented ROI per automated workflow",
      "Exception handling designed in, not bolted on",
      "Works across legacy and modern systems",
      "Owned by ops, supported by engineering",
    ],
    process: standardProcess(
      "Time-and-motion study across teams to rank workflows by hours and error cost.",
      "Workflow blueprints with decision logic, failure paths and human checkpoints.",
      "Build, test with production-shaped data, then run in shadow mode.",
      "Cut over, monitor run health and expand to the next workflow tier.",
    ),
    deliverables: ["Automation opportunity map", "Live workflows", "Monitoring dashboard", "Ops training"],
    timeline: "3–10 weeks",
  },
  {
    slug: "ai-seo",
    name: "AI SEO",
    icon: "Search",
    overview:
      "Technical SEO, entity-driven content and AI-search visibility so you appear in both classic results and AI answers.",
    benefits: [
      "Structured data that AI answer engines can cite",
      "Topic clusters built from real demand data",
      "Technical debt cleared at the template level",
      "Reporting tied to pipeline, not vanity traffic",
    ],
    process: standardProcess(
      "Crawl, index and entity audit plus competitive share-of-search analysis.",
      "Information architecture, cluster plan and schema strategy.",
      "Template fixes, content production and internal linking implementation.",
      "Monthly reporting on rankings, AI citations and assisted revenue.",
    ),
    deliverables: ["Technical audit", "Content roadmap", "Schema implementation", "Monthly performance reviews"],
    timeline: "Ongoing, 3-month minimum",
  },
  {
    slug: "ai-mobile-apps",
    name: "AI Mobile Apps",
    icon: "Smartphone",
    overview:
      "Cross-platform iOS and Android apps with on-device intelligence, offline resilience and app-store-ready polish.",
    benefits: [
      "One codebase, native-quality experience",
      "Offline-first data sync",
      "AI features that respect privacy budgets",
      "Store submission handled end to end",
    ],
    process: standardProcess(
      "User research, platform decision and feature prioritisation against business goals.",
      "Native interaction design, prototype testing and accessibility review.",
      "Build with automated device testing and staged TestFlight/Play releases.",
      "Store launch, crash monitoring and release-train planning.",
    ),
    deliverables: ["iOS + Android apps", "Design system", "Release pipeline", "Store listings"],
    timeline: "10–16 weeks",
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    icon: "PenTool",
    overview:
      "Product and brand design that turns complex software into interfaces people understand in seconds.",
    benefits: [
      "Fewer support tickets from confused users",
      "Consistent design system across products",
      "Accessibility built to WCAG 2.2 AA",
      "Design that engineers can implement exactly",
    ],
    process: standardProcess(
      "Heuristic review, usability testing and journey mapping of current experience.",
      "Concepts, interaction patterns and a tokenised design system.",
      "Component specs, prototypes and engineering pairing during implementation.",
      "Post-launch usability testing and iteration backlog.",
    ),
    deliverables: ["Research findings", "Design system", "Interactive prototypes", "Implementation specs"],
    timeline: "3–8 weeks",
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    icon: "Cloud",
    overview:
      "Cloud architecture, migration and cost optimisation on AWS, Google Cloud and Azure with security baked in.",
    benefits: [
      "Predictable infrastructure spend",
      "Infrastructure as code, no snowflake servers",
      "Zero-downtime migration paths",
      "Compliance-ready logging and controls",
    ],
    process: standardProcess(
      "Current-state assessment, dependency mapping and risk register.",
      "Target architecture, landing zone design and migration wave plan.",
      "Automated provisioning, migration rehearsals and cutover execution.",
      "Cost tuning, alerting and quarterly architecture reviews.",
    ),
    deliverables: ["Target architecture", "IaC repository", "Migration runbook", "Cost optimisation report"],
    timeline: "6–14 weeks",
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    icon: "Wrench",
    overview:
      "Proactive upkeep for the software you already run: dependency updates, performance work and security patching.",
    benefits: [
      "Vulnerabilities patched within SLA",
      "Performance regressions caught early",
      "Predictable monthly cost",
      "A named engineer who knows your stack",
    ],
    process: standardProcess(
      "Codebase health check, dependency and vulnerability inventory.",
      "Maintenance plan with SLAs, escalation paths and change windows.",
      "Scheduled patch cycles, refactors and performance improvements.",
      "Monthly health reports and roadmap recommendations.",
    ),
    deliverables: ["Health report", "Patch cadence", "Performance budget", "Monthly review"],
    timeline: "Monthly retainer",
  },
  {
    slug: "support",
    name: "Support",
    icon: "LifeBuoy",
    overview:
      "Tiered technical support for your team and your customers, with response times you can put in a contract.",
    benefits: [
      "15-minute response on critical incidents",
      "Shared Slack channel with your engineers",
      "Root cause analysis on every P1",
      "Coverage across time zones",
    ],
    process: standardProcess(
      "Service scope, severity definitions and contact matrix agreed.",
      "Runbook creation, monitoring hooks and on-call rota design.",
      "Live support desk with ticketing, paging and status communication.",
      "Incident reviews and quarterly service improvement plans.",
    ),
    deliverables: ["Support SLA", "Runbooks", "Incident reports", "Quarterly reviews"],
    timeline: "Monthly retainer",
  },
  {
    slug: "hosting",
    name: "Hosting",
    icon: "Server",
    overview:
      "Managed, monitored hosting on global edge infrastructure with backups, failover and transparent uptime reporting.",
    benefits: [
      "99.99% uptime target with status transparency",
      "Automated encrypted backups and restore drills",
      "Global edge delivery for fast page loads",
      "DDoS protection and WAF included",
    ],
    process: standardProcess(
      "Traffic profile, compliance and residency requirements captured.",
      "Environment topology, scaling policy and backup strategy designed.",
      "Provisioning, migration, monitoring and alert routing configured.",
      "Ongoing capacity reviews and restore testing.",
    ),
    deliverables: ["Managed environments", "Backup & DR plan", "Monitoring dashboards", "Uptime reporting"],
    timeline: "Monthly retainer",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
