import { PageHero } from "@/components/common/PageHero";
import { Section } from "@/components/common/Section";
import { InquiryForm } from "./InquiryForm";
import { site } from "@/data/site";

export function ContactPage({ demo = false }: { demo?: boolean }) {
  return <>
    <PageHero eyebrow={demo ? "Book demo" : "Contact"} title={demo ? "See what fits your customer operation" : "Let's talk about your next step"} description={demo ? "Explore WhatsApp Automation, AI Powered CRM or All In One with your business needs in mind." : "Talk with us about products, custom software, services or a support question."} />
    <Section><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
      <aside className="space-y-6">
        <h2 className="text-2xl font-semibold">{demo ? "A conversation around your business" : "Reach the right team"}</h2>
        <p className="text-muted-foreground leading-relaxed">{demo ? "Share your current process, the problems your team faces and the product you want to explore. Any walkthrough will be arranged directly; this page does not reserve a calendar slot." : "Use the existing company email contacts below. Online inquiry submission is not active yet."}</p>
        <div className="surface-card p-6"><h3 className="font-semibold">Products and sales</h3><a className="mt-2 block break-all text-secondary underline" href={`mailto:${site.email.sales}`}>{site.email.sales}</a></div>
        <div className="surface-card p-6"><h3 className="font-semibold">Support and general questions</h3><a className="mt-2 block break-all text-secondary underline" href={`mailto:${site.email.support}`}>{site.email.support}</a></div>
        {demo && <ul className="space-y-3 text-sm text-muted-foreground"><li>Find the best product starting point</li><li>Discuss the planned capabilities and rollout</li><li>Understand the upgrade path to All In One</li></ul>}
      </aside>
      <InquiryForm demo={demo} />
    </div></Section>
  </>;
}

