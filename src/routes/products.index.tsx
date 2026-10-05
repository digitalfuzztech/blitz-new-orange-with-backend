import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { PageHero, CTASection } from "@/components/common/PageHero";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — The BlitzElement AI Platform" },
      {
        name: "description",
        content:
          "Eleven connected products: Blitz CRM, Inbox, AI Chatbot, Voice, Automation, Analytics, Booking, Marketing, Commerce, Docs and Workspace.",
      },
      { property: "og:title", content: "Products — The BlitzElement AI Platform" },
      {
        property: "og:description",
        content: "Explore the eleven products that make up the BlitzElement AI business platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const groups = ["Engage", "Operate", "Grow"] as const;

const groupCopy: Record<(typeof groups)[number], string> = {
  Engage: "Meet customers on every channel with agents that actually resolve things.",
  Operate: "Run the work behind the conversation — bookings, documents, workflows and reporting.",
  Grow: "Turn relationships and data into pipeline, revenue and retention.",
};

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={<>Eleven products, one <span className="text-gradient">connected system</span></>}
        description="Each product stands on its own. Together they share one customer record, one permission model and one bill — which is why teams that start with one rarely stop there."
      />

      {groups.map((group) => (
        <Section key={group}>
          <SectionHeading align="left" eyebrow={group} title={groupCopy[group]} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.category === group)
              .map((product, i) => (
                <Reveal key={product.slug} delay={(i % 3) * 0.06} className="h-full">
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="surface-card group flex h-full flex-col p-6"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-secondary/60">
                      <Icon name={product.icon} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.tagline}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {product.metrics.slice(0, 2).map((m) => (
                        <li
                          key={m.label}
                          className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          <span className="font-semibold text-foreground">{m.value}</span> {m.label}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                      Explore {product.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              ))}
          </div>
        </Section>
      ))}

      <CTASection
        title="Not sure which product to start with?"
        description="Tell us the problem you are trying to solve and we will show you the shortest path to a measurable result."
      />
    </>
  );
}
