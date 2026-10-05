import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoImage from "@/assets/logo-white.png";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="BlitzElement home"
    >
      <img src={LogoImage} alt="Blitz Elements Logo" className="h-10 w-auto" />
      {!compact && (
        <span className="font-display text-lg font-semibold tracking-tight">
          Blitz <span className="text-gradient">Elements</span>
        </span>
      )}
    </Link>
  );
}
