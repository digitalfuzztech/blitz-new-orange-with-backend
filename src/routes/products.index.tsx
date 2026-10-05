import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { PageHero, CTASection } from "@/components/common/PageHero";
import { ProductComparison } from "@/components/products/ProductComparison";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      {
        title:
          "Products — WhatsApp Automation, AI CRM & All In One | BlitzElement",
      },
      {
        name: "description",
        content:
          "Explore WhatsApp Automation, AI Powered CRM and All In One: three BlitzElement products for smarter customer communication and operations.",
      },
      {
        property: "og:title",
        content: "Three AI products for smarter business | BlitzElement",
      },
      {
        property: "og:description",
        content:
          "Start with WhatsApp automation or AI-powered CRM, then bring everything together with All In One.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Three AI products. One path to{" "}
            <span className="text-gradient">smarter business.</span>
          </>
        }
        description="Start with focused WhatsApp automation or an AI-powered CRM. Move to All In One when you are ready to connect communication, customer management and advanced workflows."
      />

      <Section>
        <SectionHeading
          eyebrow="Choose your starting point"
          title="Built around the customer operation you need today"
          description="Each product has a clear job. All In One brings both focused products together on one connected BlitzElement foundation."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.08} className="h-full">
              <Link
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="surface-card group relative flex h-full flex-col p-7"
              >
                {product.badge && (
                  <span className="absolute top-5 right-5 rounded-full bg-foreground px-3 py-1 text-[10px] font-semibold tracking-wide text-background uppercase">
                    {product.badge}
                  </span>
                )}
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/20 bg-accent text-secondary">
                  <Icon name={product.icon} className="h-5 w-5" />
                </span>
                <p className="mt-6 text-xs font-semibold tracking-wide text-secondary uppercase">
                  {product.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">{product.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <p className="mt-5 text-sm font-medium">{product.audience}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {product.highlights.slice(0, 5).map((highlight) => (
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
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                  Learn more
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Grow without starting over"
            title="Start with what you need. Upgrade when your business grows."
            description="Begin with WhatsApp Automation or AI Powered CRM. Move to All In One when you need both, while keeping the same BlitzElement business identity and customer context."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {["WhatsApp Automation", "AI Powered CRM", "All In One"].map(
              (step, index) => (
                <div key={step} className="surface-card p-5">
                  <span className="font-display text-xs text-secondary">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{step}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {index < 2
                      ? "A focused product that can be your starting point."
                      : "The complete platform when communication and CRM need to work together."}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </Section>

      <Section id="compare" tone="soft">
        <SectionHeading
          eyebrow="Compare products"
          title="Choose the right level of customer operations"
          description="The comparison scrolls horizontally on smaller screens so every product remains easy to evaluate."
        />
        <div className="mt-12">
          <ProductComparison />
        </div>
      </Section>

      <CTASection
        title="Not sure which product fits first?"
        primaryLabel="Explore AI Powered CRM"
        primaryTo="/products/ai-powered-crm"
        description="Explore each product in detail, then talk with our team when you are ready to plan the right starting point."
        secondaryLabel="Explore WhatsApp Automation"
        secondaryTo="/products/whatsapp-automation"
      />
    </>
  );
}
