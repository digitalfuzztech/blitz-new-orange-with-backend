import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Route sections that actually exist in src/routes today. */
const LIVE_SECTIONS = ["products", "services", "solutions", "industries"];

export function isRouteLive(to?: string) {
  if (!to) return false;
  if (to === "/") return true;
  const section = to.split("/").filter(Boolean)[0];
  return LIVE_SECTIONS.includes(section ?? "");
}

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-border bg-surface/70 px-1.5 py-0.5 text-[9px] leading-[1.5] font-medium tracking-wide text-muted-foreground uppercase",
        className,
      )}
    >
      Coming soon
    </span>
  );
}

/**
 * Renders a real router Link when the target route exists.
 * Otherwise renders a non-interactive element with a subtle "Coming soon" badge.
 */
export function SmartLink({
  to,
  params,
  children,
  className,
  activeProps,
  onMouseEnter,
  onClick,
  badgeClassName,
  showBadge = true,
  "aria-label": ariaLabel,
}: {
  to: string;
  params?: Record<string, string> | undefined;
  children: ReactNode;
  className?: string | undefined;
  activeProps?: { className?: string } | undefined;
  onMouseEnter?: (() => void) | undefined;
  onClick?: (() => void) | undefined;
  badgeClassName?: string | undefined;
  showBadge?: boolean | undefined;
  "aria-label"?: string | undefined;
}) {
  if (!isRouteLive(to)) {
    return (
      <span
        aria-disabled="true"
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        className={cn("cursor-not-allowed opacity-60", className)}
      >
        {children}
        {showBadge ? <ComingSoonBadge className={cn("ml-2", badgeClassName)} /> : null}
      </span>
    );
  }

  return (
    <Link
      to={to}
      params={params as never}
      className={className}
      {...(activeProps ? { activeProps } : {})}
      {...(onMouseEnter ? { onMouseEnter } : {})}
      {...(onClick ? { onClick } : {})}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      {children}
    </Link>
  );
}
