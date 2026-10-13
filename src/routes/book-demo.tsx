import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/public/ContactPage";
import { pageSeo } from "@/lib/seo";
export const Route = createFileRoute("/book-demo")({
  head: () => pageSeo("Book a demo", "Discuss Blitz Element products, services and your customer operations needs.", "/book-demo"),
  component: () => <ContactPage demo={true} />,
});
