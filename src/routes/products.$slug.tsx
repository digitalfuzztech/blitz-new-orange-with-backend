import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/common/PageHero";
import { products, type Product } from "@/data/products";
import { SmartLink } from "@/components/common/SmartLink";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — BlitzElement" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.tagline}`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <header className="relative overflow-hidden border-b border-border">
        <div className="aurora opacity-45" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <Section className="relative py-16 md:py-24">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All products
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase">
                {product.category}
              </span>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-secondary">{product.tagline}</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <SmartLink
                  to="/book-demo"
                  showBadge={false}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Book a demo <ArrowRight className="h-4 w-4" aria-hidden />
                </SmartLink>
                <SmartLink
                  to="/pricing"
                  showBadge={false}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/60 px-7 text-sm font-semibold hover:bg-surface"
                >
                  View pricing
                </SmartLink>
              </div>
            </div>
            <div className="glass rounded-3xl p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Icon name={product.icon} className="h-6 w-6" />
              </span>
              <dl className="mt-7 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {product.metrics.map((m) => (
                  <div key={m.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <dd className="font-display text-3xl font-semibold text-gradient">{m.value}</dd>
                    <dt className="mt-1 text-xs text-muted-foreground">{m.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>
      </header>

      <Section>
        <SectionHeading eyebrow="Capabilities" title={`What ${product.name} does`} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.06}>
              <article className="surface-card h-full p-6">
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="surface-card grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <SectionHeading align="left" eyebrow="Outcomes" title="What changes for your team" />
          <ul className="space-y-4">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading align="left" eyebrow="Works well with" title="Pairs naturally with" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="surface-card group flex items-center gap-3 p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-secondary">
                <Icon name={p.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{p.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{p.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection title={`See ${product.name} on your data`} />
    </>
  );
}
