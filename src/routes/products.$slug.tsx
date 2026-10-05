import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { CTASection } from "@/components/common/PageHero";
import { getProduct, products, type Product } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found — BlitzElement" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.tagline} | BlitzElement`;
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
  const related = product.relatedProductSlug
    ? products.filter((item) => item.slug === product.relatedProductSlug)
    : products.filter((item) => item.slug !== product.slug);

  return (
    <>
      <header className="relative overflow-hidden border-b border-border bg-background">
        <div className="aurora opacity-70" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <Section className="relative py-16 md:py-24">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All products
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-secondary uppercase">
                <Icon name={product.icon} className="h-3.5 w-3.5" />
                {product.label}
              </span>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg font-medium text-secondary">
                {product.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/products"
                  hash="compare"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  Compare products
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                {related[0] && (
                  <Link
                    to="/products/$slug"
                    params={{ slug: related[0].slug }}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-semibold transition-colors hover:border-primary/40 hover:bg-accent"
                  >
                    Explore {related[0].name}
                  </Link>
                )}
              </div>
            </div>
            <aside className="surface-card p-7" aria-label="Product highlights">
              {product.badge && (
                <span className="rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold tracking-wide text-background uppercase">
                  {product.badge}
                </span>
              )}
              <h2 className="mt-4 text-lg font-semibold">Designed for</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {product.audience}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>
      </header>

      <Section>
        <SectionHeading
          eyebrow="Core capabilities"
          title={`What ${product.name} is designed to do`}
          description="A clear product definition for the future BlitzElement platform. Availability and implementation scope will be confirmed during rollout planning."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {product.features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 4) * 0.05}>
              <article className="surface-card h-full p-6">
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who it is for"
              title="Built for a clear business situation"
            />
            <ul className="mt-8 space-y-3">
              {product.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground"
                >
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="A practical customer operations journey"
            />
            <ol className="mt-8 space-y-4">
              {product.journey.map((step, index) => (
                <li key={step.title} className="surface-card flex gap-4 p-5">
                  <span className="font-display text-xs font-semibold text-secondary">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="surface-card grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <SectionHeading
            align="left"
            eyebrow="Benefits"
            title="What improves for your team"
          />
          <ul className="space-y-4">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <Check
                  className="mt-0.5 h-4.5 w-4.5 shrink-0 text-success"
                  aria-hidden
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="soft">
          <SectionHeading
            align="left"
            eyebrow={
              product.relatedProductSlug
                ? "Upgrade path"
                : "Focused starting points"
            }
            title={product.relatedPrompt}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                to="/products/$slug"
                params={{ slug: item.slug }}
                className="surface-card group flex items-center gap-4 p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-accent text-secondary">
                  <Icon name={item.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {item.tagline}
                  </span>
                </span>
                <ArrowRight
                  className="ml-auto h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title={product.relatedPrompt}
        description="Explore the planned capabilities and choose the right fit for your team. Availability and pricing will be confirmed before launch."
        primaryLabel="Compare products"
        primaryTo="/products"
        secondaryLabel="View all products"
        secondaryTo="/products"
      />
    </>
  );
}
