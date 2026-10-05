import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Sparkles, ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem("be-announcement-dismissed") === "1") setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="theme-dark relative z-50 overflow-hidden border-b border-border bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-2.5 sm:px-8">
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 text-center text-xs font-medium text-foreground sm:text-sm">
          <Sparkles
            className="hidden h-4 w-4 shrink-0 text-primary sm:block"
            aria-hidden
          />
          <span className="truncate">
            Blitz Voice 2.0 is live — sub-500ms AI receptionists in 30 countries.
          </span>
          <Link
            to="/products/$slug"
            params={{ slug: "blitz-voice" }}
            className="hidden shrink-0 items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-white sm:inline-flex"
          >
            See what's new
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            window.localStorage.setItem("be-announcement-dismissed", "1");
          }}
          className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss announcement"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
