import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/public/ContactPage";
import { pageSeo } from "@/lib/seo";
export const Route = createFileRoute("/contact")({
  head: () => pageSeo("Contact", "Discuss Blitz Element products, services and your customer operations needs.", "/contact"),
  component: () => <ContactPage demo={false} />,
});
