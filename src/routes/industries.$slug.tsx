import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/common/PageHero";
import { industries, type Industry } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { ComingSoonBadge } from "@/components/common/SmartLink";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }): { industry: Industry } => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Industry not found — BlitzElement" }, { name: "robots", content: "noindex" }] };
    }
    const { industry } = loaderData;
    const title = `AI for ${industry.name} — ${industry.headline} | BlitzElement`;
    return {
      meta: [
        { title },
        { name: "description", content: industry.description },
        { property: "og:title", content: title },
        { property: "og:description", content: industry.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData() as { industry: Industry };
  const related = caseStudies.filter((c) => c.industry.toLowerCase() === industry.name.toLowerCase());

  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="aurora opacity-45" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <Section className="relative py-16 md:py-24">
          <Link to="/industries" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All industries
          </Link>
          <div className="mt-8 max-w-3xl">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Icon name={industry.icon} className="h-6 w-6" />
            </span>
            <p className="mt-6 text-sm tracking-wide text-secondary uppercase">{industry.name}</p>
            <h1 className="mt-3 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">{industry.headline}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{industry.description}</p>
          </div>
        </Section>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <SectionHeading align="left" eyebrow="Use cases" title="Where teams start" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {industry.useCases.map((u, i) => (
                <Reveal key={u} delay={i * 0.06}>
                  <li className="surface-card flex h-full gap-3 p-5 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success" aria-hidden />
                    {u}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="glass h-fit rounded-3xl p-7">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Benchmark</p>
            <p className="font-display mt-4 text-5xl font-semibold text-gradient">{industry.stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{industry.stat.label}</p>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Median result across {industry.name.toLowerCase()} deployments in the last twelve months.
            </p>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="pt-0">
          <SectionHeading align="left" eyebrow="Proof" title={`${industry.name} case studies`} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((c) => (
              <div key={c.slug} className="surface-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs text-muted-foreground">{c.client}</p>
                  <ComingSoonBadge />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <CTASection title={`Talk to our ${industry.name.toLowerCase()} team`} />
    </>
  );
}
