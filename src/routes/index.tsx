import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronRight,
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
import { clientLogos, faqs, stats, testimonials } from "@/data/site";
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
      { title: "Blitz Elements — WhatsApp Automation, AI CRM & Customer Operations" },
      {
        name: "description",
        content:
          "Automate WhatsApp conversations, manage customers and leads with AI Powered CRM, or bring both together with BlitzElement All In One.",
      },
      { property: "og:title", content: "Blitz Elements — Three AI products for customer operations" },
      {
        property: "og:description",
        content:
          "Explore WhatsApp Automation, AI Powered CRM and the complete All In One customer operations platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const whyPoints = [
  { icon: "Fingerprint", title: "One business identity", description: "Begin with a focused product and keep one BlitzElement foundation as your customer operation grows." },
  { icon: "BrainCircuit", title: "AI inside customer operations", description: "Communication, customer context and suggested actions are designed to work as one operating flow." },
  { icon: "UserRoundCheck", title: "Human and AI collaboration", description: "Give AI the repeatable work while people retain visibility, judgment and a clear takeover path." },
  { icon: "Layers", title: "Start small and upgrade", description: "Choose WhatsApp Automation or AI Powered CRM first, then move to All In One when you need both." },
];

const featureGrid = [
  { icon: "MessageCircle", title: "AI communication", description: "Use approved business knowledge to support customer conversations with a clear human takeover path." },
  { icon: "BrainCircuit", title: "Customer intelligence", description: "Turn customer activity into summaries, useful context and suggested next steps." },
  { icon: "Database", title: "Unified customer data", description: "Keep contacts, leads, notes and relationship history organized around one customer record." },
  { icon: "Workflow", title: "Automated workflows", description: "Connect repeatable customer tasks while preserving clear points for human judgment." },
  { icon: "UsersRound", title: "Team collaboration", description: "Share ownership, conversation context, tasks and follow-up across the people serving each customer." },
  { icon: "Gauge", title: "Actionable analytics", description: "Understand conversation activity, pipeline movement and customer operations from one business view." },
];

const workflowSteps = [
  { title: "Connect", description: "A customer contacts your business through WhatsApp.", icon: "MessageCircle" },
  { title: "Respond", description: "AI handles the first response using approved business knowledge.", icon: "Bot" },
  { title: "Capture", description: "Useful customer and lead details stay attached to the inquiry.", icon: "Inbox" },
  { title: "Take over", description: "Your team steps in when a conversation needs human judgment.", icon: "UserRoundCheck" },
  { title: "Track", description: "CRM stages, notes and follow-up keep the relationship moving.", icon: "UsersRound" },
  { title: "Improve", description: "AI-assisted insights help the team plan the next best action.", icon: "BrainCircuit" },
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
              WhatsApp Automation · AI Powered CRM · All In One
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
            Automate customer conversations, manage every lead and run your customer operation with AI. Start with
            the product you need today, then grow into one connected BlitzElement workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/products"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              Explore products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link
              to="/products/$slug"
              params={{ slug: "all-in-one" }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface/50 px-7 text-sm font-semibold backdrop-blur transition-colors hover:border-secondary/60 hover:bg-surface"
            >
              Explore All In One
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            {["WhatsApp communication", "AI-powered CRM", "One upgrade path"].map((item) => (
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
          title="The foundations of an intelligent customer operation"
          description="Communication, customer data, workflows and team context designed around three clear BlitzElement products."
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
          description="A customer operations journey that keeps AI assistance and human judgment connected."
        />
        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
        title="Start with what you need. Upgrade when your business grows."
        description="Choose focused WhatsApp automation, an AI-powered CRM or the complete All In One platform. Your path stays on one BlitzElement business foundation."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 0.06} className="h-full">
            <Link
              to="/products/$slug"
              params={{ slug: product.slug }}
              className="surface-card group relative flex h-full flex-col p-7"
            >
              {product.badge && (
                <span className="mb-4 self-start rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold tracking-wide text-background uppercase">
                  {product.badge}
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-primary/20 bg-accent text-secondary">
                  <Icon name={product.icon} />
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] tracking-wide text-muted-foreground uppercase">
                  {product.label}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <p className="mt-5 text-xs font-semibold tracking-wide text-secondary uppercase">Best for</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.audience}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {product.highlights.slice(0, 4).map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>
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
              A customer starts on WhatsApp. AI handles the first response, captures the enquiry and keeps the
              conversation ready for a person to take over. In All In One, that context can continue into CRM and
              follow-up workflows.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "AI responds from approved business knowledge",
                "Lead details stay with the conversation",
                "A team member can take over with full context",
                "Customer history connects to the CRM record",
                "Follow-up and insights support the next action",
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
              { time: "Step 01", label: "Message received on WhatsApp", detail: "A customer asks a product or service question." },
              { time: "Step 02", label: "AI drafts the first response", detail: "The answer is grounded in approved business knowledge." },
              { time: "Step 03", label: "Inquiry details captured", detail: "Customer details and intent remain attached to the conversation." },
              { time: "Step 04", label: "Human takes over when needed", detail: "The team continues with the full history and AI-generated context." },
              { time: "Step 05", label: "Customer relationship continues", detail: "All In One keeps conversation and CRM follow-up connected." },
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
        title="Choose the product that matches your next step"
        description="Final public prices are still being defined. Explore the product scope now and contact the BlitzElement team when you are ready to plan a rollout."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 0.08} className="h-full">
            <div
              className={`surface-card relative flex h-full flex-col p-7 ${
                product.badge ? "border-primary/60 shadow-[var(--shadow-elevated)]" : ""
              }`}
            >
              {product.badge && (
                <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-[10px] font-semibold tracking-wide text-primary-foreground uppercase">
                  {product.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{product.pricingDescription}</p>
              <p className="font-display mt-6 text-3xl font-semibold">{product.pricingLabel}</p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {product.pricingFeatures.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                className={`mt-7 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:scale-[1.02] ${
                  product.badge
                    ? "bg-[image:var(--gradient-brand)] text-primary-foreground"
                    : "border border-border hover:bg-surface"
                }`}
              >
                Explore {product.name}
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-success" aria-hidden />
        Product pages describe the planned commercial scope. Purchasing and subscriptions are not active yet.
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
