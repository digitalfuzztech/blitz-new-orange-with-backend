import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer";
  tone?: "default" | "soft" | "dark";
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative px-5 py-20 sm:px-8 md:py-28",
        tone === "soft" && "border-y border-border bg-surface/70",
        tone === "dark" &&
          "theme-dark border-y border-border bg-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl items-start text-left",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
