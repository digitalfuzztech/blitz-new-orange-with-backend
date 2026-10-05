import { SmartLink } from "@/components/common/SmartLink";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./Section";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("relative overflow-hidden border-b border-border", className)}>
      <div className="aurora opacity-45" aria-hidden />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <Section className="relative py-20 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-secondary" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl md:text-6xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
          {children}
        </div>
      </Section>
    </header>
  );
}

export function CTASection({
  title = "Ready to see BlitzElement on your business?",
  description = "Book a 30-minute demo and we will map your highest-value AI opportunities before you commit to anything.",
  primaryLabel = "Book a demo",
  primaryTo = "/book-demo",
  secondaryLabel = "Talk to sales",
  secondaryTo = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <div className="aurora opacity-60" aria-hidden />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">{title}</h2>
          <p className="text-base text-pretty text-muted-foreground sm:text-lg">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <SmartLink
              to={primaryTo}
              showBadge={false}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </SmartLink>
            <SmartLink
              to={secondaryTo}
              showBadge={false}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface/60 px-7 text-sm font-semibold text-foreground transition-colors hover:border-secondary/60 hover:bg-surface"
            >
              {secondaryLabel}
            </SmartLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
