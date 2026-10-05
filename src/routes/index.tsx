import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Play,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/common/Section";
import { CountUp, Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/common/PageHero";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { clientLogos, faqs, pricingTiers, stats, testimonials } from "@/data/site";
import { ComingSoonBadge, SmartLink } from "@/components/common/SmartLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blitz Elements — AI Business Infrastructure for Modern Companies" },
      {
        name: "description",
        content:
          "AI CRM, omnichannel inbox, chat and voice agents, automation and analytics in one platform. 2,400+ businesses automate 74% of customer conversations with BlitzElement.",
      },
      { property: "og:title", content: "Blitz Elements — AI Business Infrastructure" },
      {
        property: "og:description",
        content:
          "One platform for AI customer engagement, revenue and operations. Deploy in days, measure in weeks.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const whyPoints = [
  { icon: "Rocket", title: "Live in days, not quarters", description: "Pre-built agents, connectors and workflows mean your first automation ships in the first week." },
  { icon: "ShieldCheck", title: "Enterprise trust by default", description: "SOC 2 Type II, GDPR, regional data residency, SSO and full audit logging on every plan tier." },
  { icon: "Layers", title: "One platform, not eleven tools", description: "Inbox, CRM, booking, marketing, analytics and voice share one data model and one contract." },
  { icon: "LineChart", title: "Value you can measure", description: "Every workflow reports hours saved, cost per outcome and revenue influenced — audited monthly." },
];

const featureGrid = [
  { icon: "Bot", title: "Grounded AI agents", description: "Answer from your approved knowledge with citations, guardrails and clean human handover." },
  { icon: "MessagesSquare", title: "Omnichannel by default", description: "WhatsApp, Instagram, Messenger, email, SMS, live chat and voice in one prioritised queue." },
  { icon: "Workflow", title: "Automation with judgment", description: "AI steps classify, extract and decide; humans approve only the genuine exceptions." },
  { icon: "Database", title: "One customer record", description: "Every conversation, booking, deal and invoice attached to a single, permissioned timeline." },
  { icon: "Gauge", title: "Real-time intelligence", description: "Ask questions in plain language and get charted, sourced answers in seconds." },
  { icon: "Plug", title: "300+ integrations", description: "Salesforce, HubSpot, Stripe, Shopify, Xero, Microsoft 365 and any REST endpoint." },
];

const workflowSteps = [
  { title: "Capture", description: "A customer messages, calls or submits a form on any channel.", icon: "Inbox" },
  { title: "Understand", description: "Intent, sentiment, language and account context resolved in under a second.", icon: "BrainCircuit" },
  { title: "Act", description: "The agent answers, books, updates records or triggers a workflow with tools.", icon: "Zap" },
  { title: "Escalate", description: "Edge cases route to the right human with a full summary attached.", icon: "UserRoundCheck" },
  { title: "Learn", description: "Every outcome scored, gaps flagged, knowledge updated automatically.", icon: "RefreshCw" },
];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsBand />
      <Features />
      <WorkflowSection />
      <WhySection />
      <EcosystemSection />
      <IndustriesSection />
      <AutomationShowcase />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <PricingPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="aurora opacity-90" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <Section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent/80 px-3.5 py-1.5 text-xs font-medium text-secondary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-secondary" aria-hidden />
              Blitz Voice 2.0 · sub-500ms AI receptionists
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl leading-[1.03] font-semibold text-balance sm:text-6xl md:text-7xl"
          >
            AI business infrastructure for <span className="text-gradient">modern companies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            One platform to engage customers, automate operations and grow revenue. BlitzElement runs the
            conversations, workflows and intelligence behind 2,400+ businesses — from five-person teams to global
            enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <SmartLink
              to="/book-demo"
              showBadge={false}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </SmartLink>
            <Link
              to="/products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-7 text-sm font-semibold backdrop-blur transition-colors hover:border-secondary/60 hover:bg-surface"
            >
              <Play className="h-4 w-4 text-secondary" aria-hidden />
              Explore the platform
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            {["No credit card required", "14-day full-feature trial", "SOC 2 Type II certified"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-success" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-16">
          <DashboardMockup />
        </div>
      </Section>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-b border-border bg-card py-10">
      <p className="text-center text-xs tracking-widest text-muted-foreground uppercase">
        Trusted by teams in hospitality, healthcare, real estate, retail and finance
      </p>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-14 pr-14">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <li
              key={logo + i}
              className="font-display text-lg font-semibold whitespace-nowrap text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatsBand() {
  return (
    <Section className="py-14 md:py-16">
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="h-full">
            <div className="surface-card h-full p-6">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="font-display mt-3 text-4xl font-semibold text-gradient">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}

function Features() {
  return (
    <Section tone="soft">
      <SectionHeading
        eyebrow="Platform"
        title="Everything a modern company needs to run on AI"
        description="Not a chatbot bolted onto old software. A connected system where conversations, records, workflows and analytics share the same foundation."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featureGrid.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.06} className="h-full">
            <article className="surface-card group h-full p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-secondary/60">
                <Icon name={feature.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WorkflowSection() {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative">
        <SectionHeading
          eyebrow="How it works"
          title="The AI workflow behind every customer interaction"
          description="Five stages, running continuously, with a person involved exactly where judgment is required."
        />
        <ol className="mt-14 grid gap-4 lg:grid-cols-5">
          {workflowSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="h-full">
              <li className="surface-card relative h-full p-5">
                <span className="absolute top-5 right-5 font-display text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <Icon name={step.icon} className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

function WhySection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why BlitzElement"
            title="Built for teams that have to show results"
            description="We are engineers and operators, not a reseller of someone else's model. Everything we ship is designed to survive a finance review."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <SmartLink
              to="/about"
              showBadge={false}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:bg-surface"
            >
              About the company <ArrowRight className="h-4 w-4" aria-hidden />
            </SmartLink>
            <SmartLink
              to="/case-studies"
              showBadge={false}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              See the results
            </SmartLink>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {whyPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08} className="h-full">
              <li className="surface-card h-full p-6">
                <Icon name={point.icon} className="h-6 w-6 text-secondary" />
                <h3 className="mt-4 text-base font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function EcosystemSection() {
  return (
    <Section tone="soft">
      <SectionHeading
        eyebrow="Product ecosystem"
        title="Eleven products. One platform contract."
        description="Start with the product that solves today's problem. Add the rest when you are ready — the data and permissions already line up."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 0.06} className="h-full">
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="surface-card group flex h-full flex-col p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-secondary/60">
                  <Icon name={product.icon} />
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] tracking-wide text-muted-foreground uppercase">
                  {product.category}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function IndustriesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Industries"
        title="Configured for how your industry actually operates"
        description="Workflows, terminology, compliance and integrations pre-shaped for eleven sectors — then tuned to your business."
      />
      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) => (
          <Reveal key={industry.slug} delay={(i % 4) * 0.05} className="h-full">
            <Link
              to="/industries/$slug"
              params={{ slug: industry.slug }}
              className="surface-card group flex h-full items-center gap-3 p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-secondary">
                <Icon name={industry.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{industry.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{industry.stat.value} {industry.stat.label.toLowerCase()}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AutomationShowcase() {
  return (
    <Section tone="dark">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-10">
        <div className="aurora opacity-30" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Automation showcase</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold text-balance sm:text-4xl">
              Watch a single enquiry run the whole business
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A WhatsApp message arrives at 11:42pm. Nobody is working. Eleven seconds later the customer has an
              answer, a confirmed appointment and a deposit receipt — and your team wakes up to a clean record.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Intent understood and account matched instantly",
                "Availability checked across three locations",
                "Deposit collected and receipt issued",
                "CRM, calendar and reminder sequence updated",
                "Manager notified only if something needs approval",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/solutions/$slug"
              params={{ slug: "automate-operations" }}
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              See automation in detail <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ol className="relative space-y-3 border-l border-border pl-6">
            {[
              { time: "23:42:01", label: "Message received on WhatsApp", detail: "Customer asks to book a table for six on Saturday." },
              { time: "23:42:02", label: "Intent + account resolved", detail: "Returning guest matched, preferences loaded from Blitz CRM." },
              { time: "23:42:05", label: "Availability checked", detail: "Blitz Booking finds 19:30 across two locations." },
              { time: "23:42:09", label: "Booking confirmed", detail: "Deposit taken via Stripe, confirmation sent in guest's language." },
              { time: "23:42:12", label: "Systems updated", detail: "CRM note, reminder sequence and staffing forecast all written." },
            ].map((step, i) => (
              <Reveal key={step.time} delay={i * 0.1} className="h-full">
                <li className="relative rounded-2xl border border-border bg-surface/60 p-4">
                  <span className="absolute top-6 -left-[1.85rem] h-3 w-3 rounded-full border-2 border-background bg-secondary" aria-hidden />
                  <p className="font-display text-xs text-secondary">{step.time}</p>
                  <p className="mt-1 text-sm font-semibold">{step.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Customers"
        title="Results our customers were happy to put their name to"
        description="Every quote below comes from a live deployment with numbers we agreed together before we started."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={(i % 2) * 0.08} className="h-full">
            <figure className="surface-card flex h-full flex-col p-7">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-chart-5 text-chart-5" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-pretty">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="font-display grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-sm font-semibold text-primary-foreground">
                  {t.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.author}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CaseStudiesPreview() {
  return (
    <Section tone="soft">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Case studies"
          title="Deployments, measured"
          description="Six to fourteen weeks from kickoff to reported outcome."
        />
        <SmartLink
          to="/case-studies"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-secondary hover:underline"
        >
          All case studies <ArrowRight className="h-4 w-4" aria-hidden />
        </SmartLink>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {caseStudies.slice(0, 3).map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.08} className="h-full">
            <SmartLink
              to="/case-studies/$slug"
              params={{ slug: study.slug }}
              showBadge={false}
              className="surface-card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden bg-[image:var(--gradient-brand)] opacity-90">
                <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
                <p className="font-display absolute bottom-4 left-5 text-3xl font-semibold text-primary-foreground">
                  {study.results[0]?.value}
                </p>
                <p className="absolute bottom-4 right-5 text-xs text-primary-foreground/80">{study.industry}</p>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-muted-foreground">{study.client}</p>
                <h3 className="mt-2 text-lg leading-snug font-semibold">{study.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                  Read case study
                  <ComingSoonBadge />
                </span>
              </div>
            </SmartLink>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function PricingPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Pricing"
        title="Transparent plans that scale with usage, not licences"
        description="One workspace price covers every channel. Upgrade when the value is proven, not before."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.08} className="h-full">
            <div
              className={`surface-card relative flex h-full flex-col p-7 ${
                tier.highlight ? "border-primary/60 shadow-[var(--shadow-elevated)]" : ""
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <p className="font-display mt-6 text-4xl font-semibold">
                {tier.monthly === 0 ? "Custom" : `$${tier.monthly}`}
                {tier.monthly !== 0 && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <SmartLink
                to="/pricing"
                showBadge={false}
                className={`mt-7 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:scale-[1.02] ${
                  tier.highlight
                    ? "bg-[image:var(--gradient-brand)] text-primary-foreground"
                    : "border border-border hover:bg-surface"
                }`}
              >
                {tier.cta}
              </SmartLink>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-success" aria-hidden />
        All plans include SOC 2 Type II controls, encryption at rest and in transit, and no model training on your data.
      </p>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section tone="soft">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions we get in the first call"
          description="If yours isn't here, our team will answer it directly — usually within the hour."
        />
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
