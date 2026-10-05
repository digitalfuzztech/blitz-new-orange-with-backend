import { icons } from "lucide-react";
import { cn } from "@/lib/utils";

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const LucideIcon = icons[name as keyof typeof icons] ?? icons.Sparkles;
  return <LucideIcon className={cn("h-5 w-5", className)} strokeWidth={strokeWidth} aria-hidden />;
}
