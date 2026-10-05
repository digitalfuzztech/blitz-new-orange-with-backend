import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { Icon } from "@/components/common/Icon";
import { PageHero, CTASection } from "@/components/common/PageHero";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AI Engineering, Design & Delivery | BlitzElement" },
      {
        name: "description",
        content:
          "AI websites, custom software, CRM development, chatbots, automation, AI SEO, mobile apps, UI/UX, cloud, maintenance, support and hosting.",
      },
      { property: "og:title", content: "Services — AI Engineering, Design & Delivery" },
      {
        property: "og:description",
        content: "Twelve delivery services covering strategy, build, launch and long-term operation of AI systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Engineering and design teams that <span className="text-gradient">ship</span></>}
        description="Product strategy, design and engineering for companies adopting AI seriously. Fixed scope, named team, agreed metrics — and a handover that leaves your people in control."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06} className="h-full">
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="surface-card group flex h-full flex-col p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-secondary/60">
                  <Icon name={service.icon} />
                </span>
                <h2 className="mt-5 text-lg font-semibold">{service.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.overview}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-xs text-muted-foreground">{service.timeline}</span>
                  <span className="inline-flex items-center gap-1.5 font-medium text-secondary">
                    Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="How we engage"
          title="Three ways to work with us"
          description="Pick the model that fits your team's capacity today — you can change it later."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { title: "Project", description: "Fixed scope and price for a defined outcome, typically four to twelve weeks.", detail: "Best for launches" },
            { title: "Embedded pod", description: "A cross-functional squad working inside your process on a rolling quarterly basis.", detail: "Best for roadmaps" },
            { title: "Managed platform", description: "We run, monitor and improve your BlitzElement deployment against agreed SLAs.", detail: "Best for scale" },
          ].map((model, i) => (
            <Reveal key={model.title} delay={i * 0.08} className="h-full">
              <div className="surface-card h-full p-7">
                <p className="text-xs tracking-wide text-secondary uppercase">{model.detail}</p>
                <h3 className="mt-3 text-xl font-semibold">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Have a project in mind?" description="Send us the brief. We will come back with an approach, a timeline and an honest view of whether we are the right team." />
    </>
  );
}
