export type Industry = {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  description: string;
  useCases: string[];
  stat: { label: string; value: string };
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    headline: "Patient experience without the admin burden",
    description:
      "Clinics and providers use BlitzElement to handle appointment demand, triage enquiries and keep records accurate while staying inside strict privacy rules.",
    useCases: ["24/7 appointment booking and rescheduling", "Automated recall and follow-up reminders", "Insurance and intake document processing", "Secure patient messaging across channels"],
    stat: { label: "Reduction in no-shows", value: "47%" },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    headline: "Respond to every enquiry in seconds",
    description:
      "Agencies capture portal leads instantly, qualify buyers automatically and keep viewings, offers and follow-ups moving without manual chasing.",
    useCases: ["Instant portal lead qualification", "Automated viewing scheduling", "Property matching by buyer profile", "Vendor reporting generated automatically"],
    stat: { label: "Faster lead response", value: "94%" },
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    headline: "Support students at enrolment scale",
    description:
      "Institutions answer admissions questions around the clock, guide applicants through requirements and keep student services responsive during peak periods.",
    useCases: ["Admissions Q&A in 42 languages", "Application status automation", "Course advisory chat agents", "Alumni and donor engagement campaigns"],
    stat: { label: "Admissions queries automated", value: "68%" },
  },
  {
    slug: "travel",
    name: "Travel",
    icon: "Plane",
    headline: "Serve travellers across time zones",
    description:
      "Travel agencies and operators quote faster, handle disruption communications automatically and upsell relevant extras at the right moment.",
    useCases: ["Itinerary quoting and confirmation", "Disruption notifications at scale", "Multilingual traveller support", "Post-trip review and rebooking campaigns"],
    stat: { label: "Quote turnaround", value: "8 min" },
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "Hotel",
    headline: "A concierge that never sleeps",
    description:
      "Hotels and groups convert direct bookings, handle guest requests instantly and lift review scores with consistent, personalised service.",
    useCases: ["Direct booking assistant", "In-stay guest request routing", "Upsell offers by guest segment", "Automated review response drafting"],
    stat: { label: "Direct booking uplift", value: "+27%" },
  },
  {
    slug: "retail",
    name: "Retail",
    icon: "ShoppingBag",
    headline: "Commerce support that scales with peak",
    description:
      "Retailers handle order enquiries, returns and product questions automatically while marketing runs personalised campaigns off live behaviour.",
    useCases: ["Order status and returns automation", "Product discovery assistant", "Abandoned cart recovery on WhatsApp", "Peak-season support surge handling"],
    stat: { label: "Support cost per order", value: "-58%" },
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "UtensilsCrossed",
    headline: "Fill tables, not phone lines",
    description:
      "Restaurant groups take reservations by voice and chat, manage waitlists intelligently and bring guests back with timely campaigns.",
    useCases: ["AI voice reservations", "Waitlist and cancellation recovery", "Group and event enquiry handling", "Loyalty campaigns by visit frequency"],
    stat: { label: "Calls answered", value: "100%" },
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    headline: "Keep projects and paperwork in sync",
    description:
      "Contractors automate quoting, subcontractor coordination and site documentation so margin is visible before the job ends.",
    useCases: ["Quote and tender document generation", "Subcontractor scheduling workflows", "Site report capture and summarisation", "Live project margin tracking"],
    stat: { label: "Admin hours per project", value: "-40%" },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    headline: "Bill more of the day",
    description:
      "Consultancies, agencies and firms cut non-billable admin, keep clients informed automatically and protect delivery margin.",
    useCases: ["Client onboarding automation", "AI status reporting to clients", "Proposal generation from past work", "Utilisation and margin dashboards"],
    stat: { label: "Non-billable time", value: "-33%" },
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "Landmark",
    headline: "Compliance-grade automation",
    description:
      "Financial services teams automate document-heavy processes with full audit trails, permissions and data residency controls.",
    useCases: ["KYC document extraction and checks", "Client onboarding workflows", "Regulated communications archiving", "Portfolio reporting automation"],
    stat: { label: "Onboarding time", value: "-52%" },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    headline: "From shop floor to forecast",
    description:
      "Manufacturers connect production, supply chain and commercial data to spot issues earlier and quote with confidence.",
    useCases: ["RFQ intake and quoting automation", "Supplier communication workflows", "Maintenance ticket routing", "Production and demand analytics"],
    stat: { label: "Quote-to-order cycle", value: "-36%" },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
