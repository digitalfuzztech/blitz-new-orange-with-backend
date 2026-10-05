import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { PageHero, CTASection } from "@/components/common/PageHero";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries — AI Built for How You Operate | BlitzElement" },
      { name: "description", content: "Healthcare, real estate, education, travel, hospitality, retail, restaurants, construction, professional services, finance and manufacturing." },
      { property: "og:title", content: "Industries — AI Built for How You Operate" },
      { property: "og:description", content: "Eleven industries with pre-shaped workflows, compliance and integrations." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>AI shaped around <span className="text-gradient">your operating reality</span></>}
        description="A clinic does not run like a restaurant, and neither runs like a factory. Our deployments start from your workflows, vocabulary and regulatory constraints."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 3) * 0.06} className="h-full">
              <Link to="/industries/$slug" params={{ slug: industry.slug }} className="surface-card group flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-secondary/60">
                  <Icon name={industry.icon} />
                </span>
                <h2 className="mt-5 text-lg font-semibold">{industry.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{industry.headline}</p>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                  <span>
                    <span className="font-display block text-2xl font-semibold text-gradient">{industry.stat.value}</span>
                    <span className="block text-[11px] text-muted-foreground">{industry.stat.label}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-secondary transition-transform group-hover:translate-x-1" aria-hidden />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection title="See a deployment from your sector" description="We will walk you through a live configuration from a company that looks like yours." />
    </>
  );
}
