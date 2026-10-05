export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  role: string;
  date: string;
  readingTime: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const categories = [
  "AI Strategy",
  "Automation",
  "Customer Experience",
  "Engineering",
  "Product",
];

export const posts: Post[] = [
  {
    slug: "ai-agents-production-2026",
    title: "What separates AI pilots from AI in production",
    excerpt:
      "Most AI projects fail after the demo. The difference is rarely the model — it is evaluation, guardrails and ownership.",
    category: "AI Strategy",
    author: "Elena Vasquez",
    role: "Chief Technology Officer",
    date: "2026-07-22",
    readingTime: "8 min read",
    body: [
      {
        heading: "The demo is the easy part",
        paragraphs: [
          "Every organisation we work with can produce an impressive AI demo within a fortnight. Very few can produce an AI system that runs unattended for a quarter without a human quietly cleaning up behind it. The gap between those two states is where almost all AI budget disappears.",
          "The reason is structural. A demo optimises for a happy path in front of an audience. A production system has to handle malformed inputs, ambiguous intent, upstream outages and the customer who asks something nobody anticipated — at three in the morning, without supervision.",
        ],
      },
      {
        heading: "Evaluation before expansion",
        paragraphs: [
          "The single strongest predictor of an AI programme reaching production is whether the team built an evaluation suite before they built features. Not a vibes check in a shared document — a versioned set of real inputs with expected behaviours that runs on every change.",
          "Teams with evaluation suites ship faster because they can change prompts, models and retrieval strategies without fear. Teams without them freeze after the first production incident and never regain momentum.",
        ],
      },
      {
        heading: "Guardrails are product decisions",
        paragraphs: [
          "What your AI is allowed to promise is a commercial decision, not a technical one. Refund thresholds, discount authority, medical or legal disclaimers and escalation triggers should be written by the people accountable for them and enforced in code.",
          "When guardrails are explicit, legal and compliance teams stop being blockers and start being contributors. That single change typically shortens time to production by months.",
        ],
      },
      {
        heading: "Somebody has to own it",
        paragraphs: [
          "An AI system is not a project that finishes. Knowledge goes stale, products change and customers find new ways to ask for things. The programmes that keep delivering value have a named owner reviewing answer quality every week and a clear path from a bad answer to an updated source.",
          "Assign that ownership before launch. Retrofitting it after quality has degraded is significantly harder than establishing it from day one.",
        ],
      },
    ],
  },
  {
    slug: "unified-inbox-economics",
    title: "The economics of a unified customer inbox",
    excerpt:
      "Channel sprawl is expensive in ways that never appear on a single line of your budget. Here is how to quantify it.",
    category: "Customer Experience",
    author: "Marcus Chen",
    role: "VP of Customer Success",
    date: "2026-06-30",
    readingTime: "6 min read",
    body: [
      {
        heading: "Where the money actually goes",
        paragraphs: [
          "Most support leaders can tell you their headcount cost and their software cost. Very few can tell you the cost of context switching, duplicate handling and the resolution that happened twice because two agents answered the same customer on two channels.",
          "In audits across mid-market teams, we consistently find between 18% and 26% of agent time consumed by work that only exists because channels are separate systems.",
        ],
      },
      {
        heading: "A simple model",
        paragraphs: [
          "Take your monthly conversation volume, multiply by average handle time, and add the duplicate rate you can measure by matching customer identifiers across tools. That number is your channel tax. For a team of twenty agents it is usually the cost of three to five full-time roles.",
          "Consolidation pays that back before you count any AI deflection at all. Automation then compounds on a cleaner base, because a single timeline gives the model the context it needs to answer correctly.",
        ],
      },
      {
        heading: "What to measure after consolidation",
        paragraphs: [
          "Track first response time, first contact resolution and reopen rate — not just ticket count. Ticket volume often rises after consolidation simply because conversations that were previously invisible now get counted.",
          "The healthy pattern is flat or rising volume with falling handle time and falling reopens. That combination means you are capturing more demand and resolving it more cleanly.",
        ],
      },
    ],
  },
  {
    slug: "automation-roi-framework",
    title: "A practical framework for ranking automation opportunities",
    excerpt:
      "Not every manual process deserves automating. This scoring model tells you which ones do, in about an hour.",
    category: "Automation",
    author: "Priya Raghunathan",
    role: "Head of Delivery",
    date: "2026-06-11",
    readingTime: "7 min read",
    body: [
      {
        heading: "Score on four axes",
        paragraphs: [
          "Rate every candidate process on volume, time per instance, error cost and variability. The first three multiply into annual value. Variability divides it, because highly variable processes cost far more to automate reliably.",
          "This deliberately penalises the exciting, complicated processes and rewards the boring, high-volume ones. That is correct. Boring and high volume is where automation returns cash quickly.",
        ],
      },
      {
        heading: "Design for exceptions first",
        paragraphs: [
          "The failure mode of automation programmes is a workflow that handles 90% of cases and dumps the remaining 10% into a queue nobody owns. Design the exception path before the happy path: who sees it, with what context, and how the workflow resumes.",
          "When exceptions route cleanly to a person with full context, a 90% automation rate is genuinely excellent. Without that, it is a new source of hidden work.",
        ],
      },
      {
        heading: "Run in shadow mode",
        paragraphs: [
          "Before cutover, run the automation alongside the manual process and compare outputs for two weeks. Disagreements are your test cases. This step routinely surfaces undocumented business rules that nobody would have described in a workshop.",
        ],
      },
    ],
  },
  {
    slug: "designing-for-ai-search",
    title: "Designing websites that AI answer engines will cite",
    excerpt:
      "Ranking is no longer the whole game. Being quotable by an answer engine is a distinct discipline.",
    category: "AI Strategy",
    author: "Jonas Ferreira",
    role: "Head of Growth",
    date: "2026-05-19",
    readingTime: "5 min read",
    body: [
      {
        heading: "Answer engines reward structure",
        paragraphs: [
          "Answer engines extract claims, not vibes. Pages with clear headings, explicit definitions, dated facts and structured data are dramatically more likely to be cited than pages that bury the same information in narrative prose.",
          "Write the direct answer first, then the nuance. This helps human readers too, which is why the practice survives every algorithm change.",
        ],
      },
      {
        heading: "Entities over keywords",
        paragraphs: [
          "Model your site around the things your business genuinely is — products, services, locations, people — and connect them with schema. Keyword density is irrelevant; unambiguous entity relationships are not.",
        ],
      },
      {
        heading: "Measure citations, not just clicks",
        paragraphs: [
          "Track how often your brand appears in AI answers for your core questions. It is a leading indicator: citation share tends to move months before assisted revenue does.",
        ],
      },
    ],
  },
  {
    slug: "typed-end-to-end",
    title: "Why we build every product typed end to end",
    excerpt:
      "Types are not developer luxury. They are the cheapest form of documentation and the fastest form of testing.",
    category: "Engineering",
    author: "Elena Vasquez",
    role: "Chief Technology Officer",
    date: "2026-04-28",
    readingTime: "6 min read",
    body: [
      {
        heading: "The handover test",
        paragraphs: [
          "We judge a codebase by how quickly a new engineer can make a safe change. Types collapse that time, because the compiler answers the questions a newcomer would otherwise ask in Slack.",
          "For client work this matters even more than for our own products. We hand systems over. A typed codebase is a codebase a client team can actually own.",
        ],
      },
      {
        heading: "Where types earn their keep",
        paragraphs: [
          "The boundaries: API responses, database rows, form payloads and feature flags. Typing internal helper functions is pleasant; typing boundaries is what prevents production incidents.",
          "We generate types from the schema wherever possible so the contract cannot drift silently.",
        ],
      },
    ],
  },
  {
    slug: "voice-agents-hospitality",
    title: "What we learned deploying voice agents in hospitality",
    excerpt:
      "Ninety days of live calls across fourteen hotels taught us more about conversation design than any benchmark.",
    category: "Product",
    author: "Isabel Moreau",
    role: "Principal Product Manager",
    date: "2026-03-14",
    readingTime: "9 min read",
    body: [
      {
        heading: "Latency is the whole experience",
        paragraphs: [
          "Callers forgive an imperfect answer far more readily than a pause. Anything over roughly 700 milliseconds reads as a dropped line, and people start talking over the agent.",
          "We rebuilt our pipeline around streaming at every stage and moved the interruption handler to the edge. Perceived quality improved more from that change than from any model upgrade.",
        ],
      },
      {
        heading: "Say what you are",
        paragraphs: [
          "Agents that open by identifying themselves as an assistant get better outcomes than agents that imitate a person. Callers adjust their phrasing, ask more direct questions and complain less about mistakes.",
        ],
      },
      {
        heading: "Design the handover, not just the answer",
        paragraphs: [
          "The most valuable feature we shipped was the spoken summary passed to a human on transfer. It removed the moment where a frustrated caller has to repeat everything — which was, by a wide margin, the biggest driver of poor call sentiment.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
