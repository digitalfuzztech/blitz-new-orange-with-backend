import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/common/PageHero";
import { solutions, type Solution } from "@/data/solutions";
import { products } from "@/data/products";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }): { solution: Solution } => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Solution not found — BlitzElement" }, { name: "robots", content: "noindex" }] };
    }
    const { solution } = loaderData;
    const title = `${solution.problem} — ${solution.headline} | BlitzElement`;
    return {
      meta: [
        { title },
        { name: "description", content: solution.description },
        { property: "og:title", content: title },
        { property: "og:description", content: solution.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/solutions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData() as { solution: Solution };
  const linked = products.filter((p) => solution.products.includes(p.slug));

  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="aurora opacity-45" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <Section className="relative py-16 md:py-24">
          <Link to="/solutions" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All solutions
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase">
                <Icon name={solution.icon} className="h-3.5 w-3.5" /> {solution.problem}
              </span>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">{solution.headline}</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{solution.description}</p>
            </div>
            <div className="glass rounded-3xl p-7">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">Typical results</p>
              <dl className="mt-5 space-y-4">
                {solution.outcome.map((o) => (
                  <div key={o.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <dd className="font-display text-3xl font-semibold text-gradient">{o.value}</dd>
                    <dt className="mt-1 text-xs text-muted-foreground">{o.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Symptoms" title="You probably recognise this" />
            <ul className="mt-8 space-y-3">
              {solution.symptoms.map((s) => (
                <li key={s} className="flex gap-3 rounded-2xl border border-border bg-surface/50 p-4 text-sm text-muted-foreground">
                  <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-destructive" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Approach" title="How we fix it" />
            <ol className="mt-8 space-y-4">
              {solution.approach.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.08}>
                  <li className="surface-card p-6">
                    <span className="font-display text-xs text-secondary">0{i + 1}</span>
                    <h3 className="mt-1 text-base font-semibold">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading align="left" eyebrow="Products involved" title="What this is built on" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {linked.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="surface-card group flex items-center gap-3 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-secondary">
                <Icon name={p.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{p.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{p.tagline}</span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title="Put a number on this problem with us" />
    </>
  );
}
