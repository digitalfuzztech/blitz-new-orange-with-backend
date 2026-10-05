import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import LogoImage from "@/assets/logo-white.png";

export function Logo({
  className,
  compact = false,
  variant = "light",
}: {
  className?: string;
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="BlitzElement home"
    >
      <span
        className={cn(
          "grid h-10 w-10 shrink-0 place-items-center rounded-xl",
          variant === "light"
            ? "bg-primary shadow-[var(--shadow-elevated)]"
            : "bg-white/10",
        )}
      >
        <img src={LogoImage} alt="" className="h-8 w-8 object-contain" />
      </span>
      {!compact && (
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-tight",
            variant === "dark" && "text-white",
          )}
        >
          Blitz{" "}
          <span
            className={variant === "dark" ? "text-primary" : "text-gradient"}
          >
            Elements
          </span>
        </span>
      )}
    </Link>
  );
}
