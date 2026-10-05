import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { SmartLink, isRouteLive } from "@/components/common/SmartLink";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "@/components/common/Icon";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

type MegaItem = { label: string; description: string; to: string; params?: Record<string, string>; icon: string };

const productItems: MegaItem[] = products.map((p) => ({
  label: p.name,
  description: p.tagline,
  to: "/products/$slug",
  params: { slug: p.slug },
  icon: p.icon,
}));

const serviceItems: MegaItem[] = services.map((s) => ({
  label: s.name,
  description: s.overview.split(".")[0] + ".",
  to: "/services/$slug",
  params: { slug: s.slug },
  icon: s.icon,
}));

const solutionItems: MegaItem[] = solutions.map((s) => ({
  label: s.problem,
  description: s.headline,
  to: "/solutions/$slug",
  params: { slug: s.slug },
  icon: s.icon,
}));

const industryItems: MegaItem[] = industries.map((i) => ({
  label: i.name,
  description: i.headline,
  to: "/industries/$slug",
  params: { slug: i.slug },
  icon: i.icon,
}));

const resourceItems: MegaItem[] = [
  { label: "Blog", description: "Field notes on AI, automation and delivery", to: "/blog", icon: "Newspaper" },
  { label: "Case Studies", description: "Measured outcomes from real deployments", to: "/case-studies", icon: "Trophy" },
  { label: "Guides", description: "Playbooks for rolling out AI safely", to: "/resources", icon: "BookOpen" },
  { label: "Documentation", description: "API references and integration guides", to: "/resources", icon: "Code2" },
  { label: "FAQs", description: "Answers on security, pricing and rollout", to: "/resources", icon: "CircleHelp" },
  { label: "Downloads", description: "Templates, checklists and reports", to: "/resources", icon: "Download" },
];

const menus: { label: string; to?: string; items?: MegaItem[]; columns?: number }[] = [
  { label: "Products", items: productItems, columns: 3 },
  { label: "Services", items: serviceItems, columns: 3 },
  { label: "Solutions", items: solutionItems, columns: 2 },
  { label: "Industries", items: industryItems, columns: 3 },
  { label: "Resources", items: resourceItems, columns: 2 },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "glass border-b border-border"
          : "border-b border-border/70 bg-background/90 backdrop-blur-sm",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 sm:px-8" aria-label="Main">
        <Logo />

        <ul className="ml-6 hidden flex-1 items-center gap-1 lg:flex">
          {menus
            .filter((menu) => menu.items || isRouteLive(menu.to))
            .map((menu) => (
            <li key={menu.label} className="relative">
              {menu.items ? (
                <button
                  type="button"
                  onMouseEnter={() => setOpenMenu(menu.label)}
                  onClick={() => setOpenMenu(openMenu === menu.label ? null : menu.label)}
                  aria-expanded={openMenu === menu.label}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    openMenu === menu.label
                      ? "bg-accent text-secondary"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground",
                  )}
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      openMenu === menu.label && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
              ) : (
                <SmartLink
                  to={menu.to!}
                  onMouseEnter={() => setOpenMenu(null)}
                  className="inline-flex items-center rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  activeProps={{ className: "bg-accent text-secondary" }}
                  badgeClassName="ml-1.5 px-1.5 py-0 text-[9px] leading-[1.4]"
                >
                  {menu.label}
                </SmartLink>
              )}
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            aria-label="Search the site"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-secondary"
          >
            <Search className="h-4 w-4" aria-hidden />
          </button>
          <SmartLink
            to="/book-demo"
            showBadge={false}
            className="group hidden h-9 items-center gap-1.5 rounded-full bg-[image:var(--gradient-brand)] px-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition-transform hover:-translate-y-0.5 hover:scale-[1.03] sm:inline-flex"
          >
            Book demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </SmartLink>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Mega menu */}
      {menus.map((menu) =>
        menu.items && openMenu === menu.label ? (
          <div
            key={menu.label}
            className="absolute inset-x-0 top-full hidden lg:block"
            onMouseEnter={() => setOpenMenu(menu.label)}
          >
            <div className="mx-auto max-w-7xl px-5 pb-6 sm:px-8">
              <div className="animate-in fade-in slide-in-from-top-2 overflow-hidden rounded-3xl border border-border bg-popover/98 p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl duration-200">
                <div
                  className={cn(
                    "grid gap-1.5",
                    menu.columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3",
                  )}
                >
                  {menu.items.map((item) => (
                    <SmartLink
                      key={item.label + item.to}
                      to={item.to}
                      params={item.params}
                      showBadge={false}
                      className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-accent"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-surface text-secondary transition-colors group-hover:border-primary/40 group-hover:bg-white">
                        <Icon name={item.icon} className="h-4.5 w-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{item.label}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                    </SmartLink>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground">
                    Not sure where to start? Our team will map the highest-value use case for you.
                  </p>
                  <SmartLink
                    to="/book-demo"
                    showBadge={false}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:underline"
                  >
                    Book a demo <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </SmartLink>
                </div>
              </div>
            </div>
          </div>
        ) : null,
      )}

      {/* Mobile drawer */}
      {/* Mobile drawer */}
      {mobileOpen &&
          createPortal(
              <div className="fixed inset-0 z-[99999] lg:hidden">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Drawer */}
                <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm overflow-y-auto border-l border-border bg-background shadow-2xl">

                  {/* Header */}
                  <div className="sticky top-0 flex h-16 items-center justify-between border-b border-border bg-background px-5">
                    <Logo />

                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      aria-label="Close menu"
                      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-1 px-5 py-6">
                    {menus.map((menu) =>
                        menu.items ? (
                            <div key={menu.label} className="border-b border-border/60">
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileSection(
                                    mobileSection === menu.label
                                      ? null
                                      : menu.label,
                                  )
                                }
                                className="flex w-full items-center justify-between py-3.5 text-left text-base font-medium"
                              >
                                {menu.label}

                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 transition-transform",
                                    mobileSection === menu.label && "rotate-180",
                                  )}
                                />
                              </button>

                              {mobileSection === menu.label && (
                                <ul className="pb-3">
                                  {menu.items.map((item) => (
                                    <li key={item.label}>
                                      <SmartLink
                                        to={item.to}
                                        params={item.params}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                                      >
                                          <Icon
                                            name={item.icon}
                                            className="h-4 w-4 shrink-0 text-secondary"
                                          />
                                        {item.label}
                                      </SmartLink>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <SmartLink
                              key={menu.label}
                              to={menu.to!}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center border-b border-border/60 py-3.5 text-base font-medium"
                            >
                              {menu.label}
                            </SmartLink>
                          )
                    )}

                    <div className="flex flex-col gap-3 pt-6">
                      <SmartLink
                          to="/book-demo"
                          showBadge={false}
                          onClick={() => setMobileOpen(false)}
                          className="inline-flex h-12 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] text-sm font-semibold text-primary-foreground"
                      >
                        Book Demo
                      </SmartLink>

                      <SmartLink
                          to="/contact"
                          showBadge={false}
                          onClick={() => setMobileOpen(false)}
                          className="inline-flex h-12 items-center justify-center rounded-full border border-border text-sm font-semibold"
                      >
                        Contact Sales
                      </SmartLink>
                    </div>
                  </div>
                </div>
              </div>,
              document.body
          )}
    </div>
  );
}
