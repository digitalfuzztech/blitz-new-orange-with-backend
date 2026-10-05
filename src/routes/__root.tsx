import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SearchModal } from "@/components/layout/SearchModal";
import { ChatWidget, CookieConsent, ScrollProgress, ScrollToTop } from "@/components/layout/SiteChrome";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-[70dvh] items-center justify-center overflow-hidden px-5">
      <div className="aurora opacity-40" aria-hidden />
      <div className="relative max-w-lg text-center">
        <p className="font-display text-8xl font-semibold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-semibold">This page has been automated away</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Try the products overview, or search the site
          from the navigation bar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Back to home
          </Link>
          <Link
            to="/products"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:bg-surface"
          >
            Explore products
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70dvh] items-center justify-center px-5">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Blitz Elements — AI Business Infrastructure" },
      {
        name: "description",
        content:
          "Blitz Elements offers WhatsApp Automation, AI Powered CRM and All In One for intelligent customer communication and operations.",
      },
      { name: "author", content: "BlitzElements" },
      { name: "theme-color", content: "#FAFAF9" },
      { property: "og:site_name", content: "BlitzElements" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BlitzElements",
          url: "/",
          description: "AI Business Infrastructure for Modern Companies",
          sameAs: ["https://www.linkedin.com/", "https://x.com/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollToTop />
      <ChatWidget />
      <CookieConsent />
    </QueryClientProvider>
  );
}
