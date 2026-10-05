import { useEffect, useState } from "react";
import { SmartLink } from "@/components/common/SmartLink";
import { ArrowUp, Cookie, MessageCircle, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-100 h-0.5 bg-transparent" aria-hidden>
      <div
        className="h-full bg-[image:var(--gradient-brand)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={cn(
        "fixed right-6 bottom-24 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-card/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-all duration-300 hover:border-primary/60 hover:text-secondary",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" aria-hidden />
    </button>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="animate-in fade-in slide-in-from-bottom-4 fixed right-6 bottom-24 z-50 w-[min(22rem,calc(100vw-3rem))] overflow-hidden rounded-3xl border border-border bg-popover shadow-[var(--shadow-soft)] duration-200">
          <div className="theme-dark flex items-center gap-3 border-b border-border bg-background px-4 py-3.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary">
              <MessageCircle className="h-4.5 w-4.5 text-primary-foreground" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                Blitz Assistant
              </p>
              <p className="text-xs text-muted-foreground">
                Typically replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-muted-foreground hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="space-y-3 px-4 py-4">
            <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface px-3.5 py-2.5 text-sm text-foreground">
              Hi — I'm the BlitzElement assistant. I can explain any product, estimate ROI for your team size, or
              book you a demo. What are you working on?
            </p>
            <div className="flex flex-wrap gap-2">
              <SmartLink to="/pricing" showBadge={false} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-secondary/60 hover:text-foreground">
                See pricing
              </SmartLink>
              <SmartLink to="/products" className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-secondary/60 hover:text-foreground">
                Explore products
              </SmartLink>
              <SmartLink to="/book-demo" showBadge={false} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-secondary/60 hover:text-foreground">
                Book a demo
              </SmartLink>
            </div>
          </div>
          <form
            className="flex items-center gap-2 border-t border-border px-3 py-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="chat-message" className="sr-only">
              Message
            </label>
            <input
              id="chat-message"
              placeholder="Ask a question…"
              className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none focus:border-secondary/60"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="animate-pulse-ring fixed right-6 bottom-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <MessageCircle className="h-5 w-5" aria-hidden />}
      </button>
    </>
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.localStorage.getItem("be-cookie-choice")) return undefined;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);


  const decide = (choice: string) => {
    window.localStorage.setItem("be-cookie-choice", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="animate-in fade-in slide-in-from-bottom-4 fixed inset-x-4 bottom-4 z-90 mx-auto max-w-3xl rounded-2xl border border-border bg-popover/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur-xl duration-300 sm:inset-x-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-secondary">
          <Cookie className="h-5 w-5" aria-hidden />
        </span>
        <p className="min-w-0 flex-1 text-sm text-muted-foreground">
          We use cookies to measure site performance and improve your experience. Read our{" "}
          <SmartLink to="/cookie-policy" showBadge={false} className="text-foreground underline underline-offset-4">
            cookie policy
          </SmartLink>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="h-10 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-surface"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="h-10 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
