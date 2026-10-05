import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, CornerDownLeft } from "lucide-react";
import { Icon } from "@/components/common/Icon";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { caseStudies } from "@/data/case-studies";
import { isRouteLive } from "@/components/common/SmartLink";

type Entry = { title: string; group: string; subtitle: string; to: string; params?: Record<string, string>; icon: string };

const allEntries: Entry[] = [
  { title: "Home", group: "Pages", subtitle: "AI business infrastructure", to: "/", icon: "Home" },
  { title: "Pricing", group: "Pages", subtitle: "Plans and comparison", to: "/pricing", icon: "CreditCard" },
  { title: "About", group: "Pages", subtitle: "Mission, values and team", to: "/about", icon: "Building" },
  { title: "Contact", group: "Pages", subtitle: "Talk to sales or support", to: "/contact", icon: "Mail" },
  { title: "Careers", group: "Pages", subtitle: "Open roles and benefits", to: "/careers", icon: "Briefcase" },
  { title: "Resources", group: "Pages", subtitle: "Guides, docs and downloads", to: "/resources", icon: "Library" },
  ...products.map((p) => ({ title: p.name, group: "Products", subtitle: p.tagline, to: "/products/$slug", params: { slug: p.slug }, icon: p.icon })),
  ...services.map((s) => ({ title: s.name, group: "Services", subtitle: s.overview.slice(0, 70) + "…", to: "/services/$slug", params: { slug: s.slug }, icon: s.icon })),
  ...solutions.map((s) => ({ title: s.problem, group: "Solutions", subtitle: s.headline, to: "/solutions/$slug", params: { slug: s.slug }, icon: s.icon })),
  ...industries.map((i) => ({ title: i.name, group: "Industries", subtitle: i.headline, to: "/industries/$slug", params: { slug: i.slug }, icon: i.icon })),
  ...caseStudies.map((c) => ({ title: c.title, group: "Case studies", subtitle: c.client, to: "/case-studies/$slug", params: { slug: c.slug }, icon: "Trophy" })),
  ...posts.map((p) => ({ title: p.title, group: "Blog", subtitle: p.category, to: "/blog/$slug", params: { slug: p.slug }, icon: "Newspaper" })),
];

const entries: Entry[] = allEntries.filter((e) => isRouteLive(e.to));

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? entries.filter((e) => (e.title + e.subtitle + e.group).toLowerCase().includes(q))
      : entries.slice(0, 8);
    return list.slice(0, 14);
  }, [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center p-4 pt-[12vh]">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className="animate-in fade-in zoom-in-95 relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-popover shadow-[var(--shadow-soft)] duration-150"
      >
        <div className="flex items-center gap-3 border-b border-border px-5">
          <Search className="h-4.5 w-4.5 shrink-0 text-muted-foreground" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, services, industries, articles…"
            aria-label="Search query"
            className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="hidden shrink-0 rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:block">
            ESC
          </kbd>
        </div>
        <ul className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-4 py-10 text-center text-sm text-muted-foreground">
              No matches for “{query}”. Try “chatbot”, “healthcare” or “automation”.
            </li>
          )}
          {results.map((entry) => (
            <li key={entry.group + entry.title}>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigate({ to: entry.to, params: entry.params as never });
                }}
                className="group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors hover:bg-surface"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-surface text-secondary">
                  <Icon name={entry.icon} className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{entry.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{entry.subtitle}</span>
                </span>
                <span className="hidden shrink-0 text-[10px] tracking-wide text-muted-foreground uppercase sm:block">
                  {entry.group}
                </span>
                <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
