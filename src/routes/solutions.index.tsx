import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { PageHero, CTASection } from "@/components/common/PageHero";
import { solutions } from "@/data/solutions";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — Start From the Problem | BlitzElement" },
      {
        name: "description",
        content:
          "More leads, better support, automated operations, higher sales, lower cost, AI transformation and modernization — mapped to the products that solve them.",
      },
      { property: "og:title", content: "Solutions — Start From the Problem" },
      {
        property: "og:description",
        content: "Seven common business problems and the exact BlitzElement approach to each.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Start from the problem, <span className="text-gradient">not the software</span></>}
        description="Pick the outcome you are accountable for this quarter. We will show you the approach, the products involved and the numbers other teams have achieved."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={(i % 2) * 0.08} className="h-full">
              <Link
                to="/solutions/$slug"
                params={{ slug: solution.slug }}
                className="surface-card group flex h-full flex-col p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-secondary/60">
                    <Icon name={solution.icon} />
                  </span>
                  <h2 className="text-lg font-semibold">{solution.problem}</h2>
                </div>
                <p className="mt-4 text-base font-medium text-secondary">{solution.headline}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {solution.outcome.map((o) => (
                    <div key={o.label}>
                      <dd className="font-display text-xl font-semibold text-gradient">{o.value}</dd>
                      <dt className="mt-1 text-[11px] leading-tight text-muted-foreground">{o.label}</dt>
                    </div>
                  ))}
                </dl>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  See the approach
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Tell us what you are trying to fix" description="Thirty minutes with our solutions team is usually enough to know whether we can help — and how quickly." />
    </>
  );
}
