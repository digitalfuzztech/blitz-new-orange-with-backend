import { useState } from "react";
import { SmartLink } from "@/components/common/SmartLink";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "@/components/common/Icon";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { site } from "@/data/site";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="theme-dark relative overflow-hidden border-t border-border bg-background text-foreground">
      <div className="aurora opacity-35" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div className="space-y-6">
            <Logo variant="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.tagline}. We build the AI systems that run customer engagement, revenue and operations for
              2,400+ companies worldwide.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                {site.address.line1}, {site.address.city}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-foreground">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a href={`mailto:${site.email.sales}`} className="hover:text-foreground">
                  {site.email.sales}
                </a>
              </p>
            </div>
            <ul className="flex gap-2">
              {site.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.name}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-secondary/50 hover:text-foreground"
                  >
                    <Icon name={social.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Products">
              {products.slice(0, 7).map((p) => (
                <FooterLink key={p.slug} to="/products/$slug" params={{ slug: p.slug }}>
                  {p.name}
                </FooterLink>
              ))}
              <FooterLink to="/products">All products</FooterLink>
            </FooterColumn>

            <FooterColumn title="Services">
              {services.slice(0, 7).map((s) => (
                <FooterLink key={s.slug} to="/services/$slug" params={{ slug: s.slug }}>
                  {s.name}
                </FooterLink>
              ))}
              <FooterLink to="/services">All services</FooterLink>
            </FooterColumn>

            <FooterColumn title="Solutions">
              {solutions.map((s) => (
                <FooterLink key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }}>
                  {s.problem}
                </FooterLink>
              ))}
            </FooterColumn>

            <div className="space-y-8">
              <FooterColumn title="Industries">
                {industries.slice(0, 6).map((i) => (
                  <FooterLink key={i.slug} to="/industries/$slug" params={{ slug: i.slug }}>
                    {i.name}
                  </FooterLink>
                ))}
                <FooterLink to="/industries">All industries</FooterLink>
              </FooterColumn>
              <FooterColumn title="Company">
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/case-studies">Case studies</FooterLink>
                <FooterLink to="/blog">Blog</FooterLink>
                <FooterLink to="/resources">Resources</FooterLink>
                <FooterLink to="/careers">Careers</FooterLink>
                <FooterLink to="/pricing">Pricing</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-border bg-surface/70 p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h3 className="text-xl font-semibold">The BlitzElement Brief</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              One email a month on applied AI, automation economics and what we learn shipping to production. No
              fluff, unsubscribe anytime.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubscribed(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Work email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="h-12 flex-1 rounded-full border border-input bg-background px-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {subscribed ? (
                <>
                  <Check className="h-4 w-4" aria-hidden /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <ArrowRight className="h-4 w-4" aria-hidden />
                </>
              )}
            </button>
          </form>
          {subscribed && (
            <p role="status" className="text-xs text-success lg:col-span-2">
              Thanks — check your inbox to confirm your subscription.
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BlitzElement, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <SmartLink to="/privacy" showBadge={false} className="hover:text-foreground">
                Privacy Policy
              </SmartLink>
            </li>
            <li>
              <SmartLink to="/terms" showBadge={false} className="hover:text-foreground">
                Terms
              </SmartLink>
            </li>
            <li>
              <SmartLink to="/cookie-policy" showBadge={false} className="hover:text-foreground">
                Cookie Policy
              </SmartLink>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
              All systems operational
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wider text-foreground uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  to,
  params,
  children,
}: {
  to: string;
  params?: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <li>
      <SmartLink
        to={to}
        {...(params ? { params } : {})}
        className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
        badgeClassName="ml-0"
      >
        {children}
      </SmartLink>
    </li>
  );
}
