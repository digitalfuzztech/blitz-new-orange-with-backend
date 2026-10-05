export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
  quote: { text: string; author: string; role: string };
  duration: string;
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-hotels",
    client: "Meridian Hotel Group",
    industry: "Hospitality",
    title: "27% more direct bookings across 14 properties",
    summary:
      "A European hotel group replaced fragmented reservation channels with a unified AI concierge and direct booking assistant.",
    challenge:
      "Meridian relied on OTAs for 71% of bookings and lost margin on every reservation. Guest requests arrived across six channels with no shared history, and front-desk teams could not keep up during check-in peaks.",
    approach: [
      "Unified email, WhatsApp, Instagram and phone into Blitz Inbox with per-property routing.",
      "Deployed Blitz Voice to answer overflow calls, quote availability and confirm bookings in four languages.",
      "Trained Blitz AI Chatbot on rate plans, amenities and local recommendations for the direct booking flow.",
      "Connected reservation data to Blitz Analytics for live channel-mix and RevPAR reporting.",
    ],
    results: [
      { label: "Direct bookings", value: "+27%" },
      { label: "OTA commission saved", value: "€1.4M/yr" },
      { label: "Guest response time", value: "22s" },
      { label: "Review score", value: "4.3 → 4.7" },
    ],
    quote: {
      text: "We stopped renting our guest relationship from booking portals. The assistant answers faster than our best receptionist and never takes a night off.",
      author: "Isabel Moreau",
      role: "Group Commercial Director, Meridian Hotel Group",
    },
    duration: "11 weeks",
    services: ["AI Chatbots", "AI Automation", "Custom Software"],
  },
  {
    slug: "northwell-clinics",
    client: "Northwell Family Clinics",
    industry: "Healthcare",
    title: "Cutting no-shows by 47% across 32 clinics",
    summary:
      "A primary care network automated booking, reminders and waitlist recovery while meeting strict patient data requirements.",
    challenge:
      "Reception teams handled 9,000 calls a week. Roughly one in five appointments was missed, and empty slots were rarely refilled because staff had no time to work the waitlist.",
    approach: [
      "Rolled out Blitz Booking with multi-clinic, multi-clinician availability rules.",
      "Automated reminder sequences over SMS and WhatsApp tuned per appointment type.",
      "Built AI waitlist recovery that offers cancelled slots to matched patients within 60 seconds.",
      "Configured regional data residency, consent capture and full audit logging.",
    ],
    results: [
      { label: "No-show rate", value: "-47%" },
      { label: "Slots recovered monthly", value: "3,100" },
      { label: "Reception call volume", value: "-61%" },
      { label: "Patient satisfaction", value: "+18pts" },
    ],
    quote: {
      text: "Reclaiming three thousand appointment slots a month changed our capacity planning entirely. Our teams finally spend their time with patients in the room.",
      author: "Dr. Amara Osei",
      role: "Chief Operating Officer, Northwell Family Clinics",
    },
    duration: "14 weeks",
    services: ["AI Automation", "Custom Software", "Support"],
  },
  {
    slug: "vantage-realty",
    client: "Vantage Realty Partners",
    industry: "Real Estate",
    title: "From 4 hours to 90 seconds on lead response",
    summary:
      "A 180-agent brokerage rebuilt its lead pipeline so every portal enquiry is qualified and routed instantly.",
    challenge:
      "Portal leads landed in a shared mailbox and were often picked up hours later. Agents worked from personal spreadsheets, and management had no reliable view of conversion by source.",
    approach: [
      "Implemented Blitz CRM with a property-matching data model and territory-based routing.",
      "Added an AI qualification agent that captures budget, timeline and financing status on first contact.",
      "Automated viewing scheduling with calendar sync across every agent.",
      "Built vendor reporting that generates weekly activity summaries automatically.",
    ],
    results: [
      { label: "Lead response time", value: "4h → 90s" },
      { label: "Viewings booked", value: "+64%" },
      { label: "Conversion to offer", value: "+22%" },
      { label: "Admin per agent", value: "-7h/wk" },
    ],
    quote: {
      text: "Speed decides who wins a listing enquiry. We now respond before our competitors have opened the email.",
      author: "Daniel Whitcombe",
      role: "Managing Partner, Vantage Realty Partners",
    },
    duration: "8 weeks",
    services: ["CRM Development", "AI Chatbots", "AI Automation"],
  },
  {
    slug: "kestrel-commerce",
    client: "Kestrel Commerce",
    industry: "Retail",
    title: "Handling Black Friday with the same support team",
    summary:
      "A multi-brand ecommerce operator absorbed a 6x volume spike without temporary hires.",
    challenge:
      "Peak season historically required 40 seasonal agents. Response times still stretched past 30 hours, and returns processing created a backlog that lasted into January.",
    approach: [
      "Deployed Blitz AI Chatbot trained on order policies, product data and returns rules.",
      "Automated order status, tracking and returns initiation end to end.",
      "Routed only exceptions to human agents through Blitz Inbox with full context.",
      "Instrumented cost per conversation and deflection rate in Blitz Analytics.",
    ],
    results: [
      { label: "Tickets deflected", value: "78%" },
      { label: "Seasonal hires avoided", value: "40" },
      { label: "First response", value: "26s" },
      { label: "Support cost per order", value: "-58%" },
    ],
    quote: {
      text: "Our busiest week of the year was the calmest it has ever been in the support team.",
      author: "Priya Raghunathan",
      role: "VP Customer Experience, Kestrel Commerce",
    },
    duration: "6 weeks",
    services: ["AI Chatbots", "AI Automation", "Cloud Solutions"],
  },
  {
    slug: "arclight-manufacturing",
    client: "Arclight Manufacturing",
    industry: "Manufacturing",
    title: "Quote-to-order cycle cut by 36%",
    summary:
      "A precision components manufacturer automated RFQ intake and pricing, clearing a chronic quoting backlog.",
    challenge:
      "RFQs arrived as email attachments in a dozen formats. Engineers spent two days per quote extracting specifications, and 30% of enquiries expired before a response was sent.",
    approach: [
      "Built an AI intake workflow that extracts specifications from PDFs, drawings and spreadsheets.",
      "Automated pricing against material costs, machine capacity and historical margin.",
      "Added a human approval checkpoint for quotes above a configurable value threshold.",
      "Surfaced win rate by product family and customer in Blitz Analytics.",
    ],
    results: [
      { label: "Quote-to-order cycle", value: "-36%" },
      { label: "RFQs answered", value: "100%" },
      { label: "Engineering hours freed", value: "62/wk" },
      { label: "Quote win rate", value: "+14%" },
    ],
    quote: {
      text: "We were losing work simply by being slow to reply. Now every enquiry gets a priced response the same day.",
      author: "Markus Lindqvist",
      role: "Operations Director, Arclight Manufacturing",
    },
    duration: "12 weeks",
    services: ["AI Automation", "Custom Software", "Maintenance"],
  },
  {
    slug: "helios-education",
    client: "Helios Institute",
    industry: "Education",
    title: "68% of admissions questions answered automatically",
    summary:
      "An international education provider scaled admissions support across 14 markets without adding staff.",
    challenge:
      "Applicants asked the same 200 questions in 11 languages. The admissions team answered during office hours only, and drop-off between enquiry and application was 58%.",
    approach: [
      "Consolidated policies and course data into Blitz Knowledge as a single source of truth.",
      "Launched a multilingual admissions agent across web, WhatsApp and the student portal.",
      "Automated application status updates and document reminders.",
      "Tracked enquiry-to-enrolment conversion by market in Blitz Analytics.",
    ],
    results: [
      { label: "Questions automated", value: "68%" },
      { label: "Enquiry-to-application", value: "+31%" },
      { label: "Languages supported", value: "11" },
      { label: "Out-of-hours coverage", value: "24/7" },
    ],
    quote: {
      text: "Prospective students in other time zones now get accurate answers immediately, in their own language.",
      author: "Sofia Almeida",
      role: "Director of Admissions, Helios Institute",
    },
    duration: "9 weeks",
    services: ["AI Chatbots", "AI SEO", "Support"],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
