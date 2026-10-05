import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/common/PageHero";
import { services, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found — BlitzElement" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const title = `${service.name} — BlitzElement Services`;
    return {
      meta: [
        { title },
        { name: "description", content: service.overview },
        { property: "og:title", content: title },
        { property: "og:description", content: service.overview },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };

  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="aurora opacity-45" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <Section className="relative py-16 md:py-24">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All services
          </Link>
          <div className="mt-8 max-w-3xl">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{service.overview}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-muted-foreground">
              Typical timeline · <span className="font-semibold text-foreground">{service.timeline}</span>
            </p>
          </div>
        </Section>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading align="left" eyebrow="Why teams buy this" title="What you get out of it" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.06}>
                <li className="surface-card flex h-full gap-3 p-5 text-sm leading-relaxed text-muted-foreground">
                  <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success" aria-hidden />
                  {benefit}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Process" title="How the engagement runs" />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <li className="surface-card relative h-full p-6">
                <span className="font-display text-xs text-secondary">Step 0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold">{step.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="pt-0">
        <div className="surface-card grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <SectionHeading align="left" eyebrow="Deliverables" title="What lands in your hands" />
          <ul className="space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex gap-3 border-b border-border pb-3 text-sm text-muted-foreground last:border-0">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading align="left" eyebrow="Other services" title="Explore more" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="surface-card group flex items-center gap-3 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-secondary">
                <Icon name={s.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{s.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{s.timeline}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title={`Start a ${service.name.toLowerCase()} engagement`} />
    </>
  );
}
