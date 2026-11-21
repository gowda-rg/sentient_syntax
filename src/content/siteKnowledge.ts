/**
 * Site copy — sync with portfolio-resume/professional-knowledge-base/
 */

export type ProjectKind = "engineering" | "site" | "conceptual";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  kind: ProjectKind;
  description: string;
  stack: string[];
  links: ProjectLink[];
};

export type WritingDestination = {
  id: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Primary places to read essays and published notes (not mixed into the project rail). */
export const writingDestinations: WritingDestination[] = [
  {
    id: "substack",
    title: "Substack — RG Gowda",
    description: "Essays on applied AI, coherence, and human–AI interaction.",
    href: "https://substack.com/@rgowda",
    linkLabel: "Read on Substack",
  },
  {
    id: "github-pages",
    title: "gowda-rg.github.io",
    description: "Long-form notes and text-heavy docs published on GitHub Pages.",
    href: "https://gowda-rg.github.io/",
    linkLabel: "Open site",
    secondaryHref: "https://github.com/gowda-rg/gowda-rg.github.io",
    secondaryLabel: "Repository",
  },
];

const projectRailExclude = new Set(["substack", "docs-github-io"]);

/** Public site URL and brand asset (sync with index.html canonical / OG). */
export const siteBrand = {
  siteUrl: "https://www.sentientsyntax.com/",
  logoSrc: "/logo.jpeg",
  logoAlt: "Sentient Syntax",
};

/** Interview rep — PKB PRJ-004; UI honest about coming-soon; no live chat until shipped. */
export const interviewRepresentative = {
  title: "AI interview representative",
  badge: "Coming soon",
  summary:
    "Grounded Q&A over documented experience, projects, and evidence — AI-labeled, with answers tied to cited portfolio sources.",
  planned: [
    "Role-fit exploration from structured career data and project context.",
    "Questions on stack, employment history, and selected engineering work.",
    "Cited responses from portfolio and knowledge-base sources.",
  ],
  releaseStatus: [
    "Conversational UI arrives in a future release.",
    "All responses labeled as AI-generated.",
  ],
  availableNow: {
    label: "Available now",
    items: [
      "Resume (PDF) on Overview and Contact.",
      "Email or LinkedIn to connect with Darshan RG.",
    ],
  },
  pkRef: "Professional knowledge base (in development)",
};

export const profile = {
  name: "Darshan RG",
  title: "Full Stack AI Engineer",
  subtitle: "React · REST · MySQL · Python ML · Applied AI",
  location: "Bengaluru, India",
  email: "darshanrgs45@gmail.com",
  linkedin: "https://www.linkedin.com/in/gowda-rg/",
  summary:
    "Full Stack AI Engineer with production experience at Tevatel, developing React-based portals, integrating telephony REST APIs, and working with SQL-backed CRM systems. Builds independent solutions across machine learning, telemetry analytics, simulation platforms, and applied AI, combining full-stack engineering with practical ML experimentation and research-driven development.",
  resumeFile: "/Darshan_RG_Full_Stack_AI_Engineer_Resume_v1.pdf",
  resumeLabel: "Download resume (PDF)",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gowda-rg/" },
    { label: "GitHub", href: "https://github.com/gowda-rg" },
    { label: "Email", href: "mailto:darshanrgs45@gmail.com" },
  ],
};

export const employments = [
  {
    id: "tevatel",
    company: "Tevatel",
    companyUrl: "https://tevatel.com/",
    role: "Full Stack Developer",
    period: "Oct 2023 – Aug 2024",
    location: "Chennai",
    product: "Doocti — cloud contact-center platform",
    bullets: [
      "Maintained and extended React.js agent and admin portals.",
      "Integrated REST APIs with dialer, reporting, and shared backend services.",
      "Built SQL-backed features: lists, filters, dashboards, call logs, and CRM-style modules.",
      "Worked with telephony dialer APIs (click-to-call, agent status, call disposition).",
    ],
    stack: ["React", "JavaScript", "REST APIs", "NodeJS", "MySQL"],
  },
  {
    id: "glucowear",
    company: "Office Solution AI Labs",
    companyUrl: "https://innovationalofficesolution.com/",
    role: "Backend Developer Intern",
    period: "Jul – Sep 2023",
    location: "Bengaluru",
    product: "GlucoWear — wearable app backend (foundations)",
    bullets: [
      "Set up Node/Express backend structure, schemas, and API scaffolding from design documents.",
      "Worked on AWS-oriented setup for future device data sync (no production patient data).",
    ],
    stack: ["Node.js", "Express", "MongoDB", "REST", "AWS"],
  },
  {
    id: "10x",
    company: "10x Academy",
    companyUrl: "https://www.the10xacademy.com/",
    role: "Full Stack Training & Peer Mentoring",
    period: "Jun 2022 – Jun 2023",
    location: "Hyderabad",
    product: "Structured full-stack training program",
    bullets: [
      "Completed full-stack and DSA curriculum; built assignment and portfolio projects.",
      "Mentored newer batches in one-to-one technical sessions.",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express"],
  },
  {
    id: "dot",
    company: "(dot).efficiently",
    companyUrl: "https://efficiently.com/",
    role: "Estimation Associate",
    period: "Sep 2021 – Apr 2022",
    location: "Hyderabad",
    product: "US construction quantity takeoffs",
    bullets: [
      "Roofing and siding takeoffs from architectural drawings using Bluebeam Revu.",
      "Delivered quantity outputs for 10+ US residential projects.",
    ],
    stack: ["Bluebeam Revu", "Technical drawings", "Quantity takeoffs"],
  },
];

/** From PKB / source-registry — engineering + research + docs + writing */
export const projectCatalog: ProjectItem[] = [
  {
    id: "solar",
    name: "Solar Plant Intelligence",
    kind: "engineering",
    description:
      "Telemetry ingestion, validation, and day-ahead forecasting. FastAPI, PostgreSQL, React, scikit-learn.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "scikit-learn"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/solar-plant-intelligence" }],
  },
  {
    id: "3dice",
    name: "Three-Dice Simulation Platform",
    kind: "engineering",
    description:
      "Seeded dice runs, permutation outcome taxonomy, SQLite persistence, and analytics UI (TypeScript / Next.js stack).",
    stack: ["TypeScript", "Next.js", "Fastify", "SQLite", "Chart.js"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/3dice-sim" }],
  },
  {
    id: "agentiq",
    name: "AgentIQ",
    kind: "engineering",
    description: "Contact-center–inspired metrics and ML experiments; early repo.",
    stack: ["Python", "Pandas", "FastAPI"],
    links: [],

  },
  {
    id: "sentient-syntax",
    name: "Sentient Syntax",
    kind: "site",
    description: "This portfolio site and structured career content (React, TypeScript, Vite).",
    stack: ["React", "TypeScript", "Vite"],
    links: [
      { label: "Live site", href: "https://www.sentientsyntax.com/" },
      { label: "Repository", href: "https://github.com/gowda-rg/sentient_syntax" },
    ],
  },
  {
    id: "my-agent",
    name: "My-Agent / professional knowledge base",
    kind: "engineering",
    description:
      "Structured professional knowledge and RAG-oriented outputs; interview representative on the roadmap (Interview section).",
    stack: ["React", "Python", "RAG"],
    links: [
      { label: "Repository", href: "https://github.com/gowda-rg/sentient_syntax" },
      { label: "Knowledge base", href: "https://github.com/gowda-rg/gowda-rg.github.io" },
    ],
  },
  {
    id: "postsymbolic",
    name: "PostSymbolic Alignment Framework",
    kind: "conceptual",
    description: "Longitudinal human–AI interaction and semantic alignment experiments.",
    stack: ["Python", "LLM APIs"],
    links: [{ label: "Repository", href: "https://github.com/gowda-ss/PostSymbolic-Alignment-Framework" }],
  },
  {
    id: "fourth-word",
    name: "Fourth Word",
    kind: "conceptual",
    description: "Exploration tied to Substack essays and coherence-oriented LLM use.",
    stack: ["Essays", "LLM workflows"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/fourth_word" }],
  },
  {
    id: "perceptual-anchoring",
    name: "Perceptual Anchoring",
    kind: "conceptual",
    description: "Human-centered framing for stable perception in long AI sessions.",
    stack: ["Notes", "Prototypes"],
    links: [{ label: "Repository", href: "https://github.com/gowda-ss/perceptual-anchoring" }],
  },
  {
    id: "docs-github-io",
    name: "gowda-rg.github.io",
    kind: "conceptual",
    description: "Text-heavy docs and notes (GitHub Pages source repo).",
    stack: ["Markdown", "GitHub Pages"],
    links: [
      { label: "Site", href: "https://gowda-rg.github.io/" },
      { label: "Repository", href: "https://github.com/gowda-rg/gowda-rg.github.io" },
    ],
  },
  {
    id: "substack",
    name: "Substack — RG Gowda",
    kind: "conceptual",
    description: "Essays on applied AI, coherence, and human–AI interaction.",
    stack: ["Writing"],
    links: [{ label: "Substack", href: "https://substack.com/@rgowda" }],
  },
];

/** Software first, then conceptual repos — single sideways rail (hub writing links stay separate). */
export function projectsForRail(): ProjectItem[] {
  const software = projectCatalog.filter((p) => p.kind === "engineering" || p.kind === "site");
  const conceptual = projectCatalog.filter((p) => p.kind === "conceptual");
  return [...software, ...conceptual.filter((p) => !projectRailExclude.has(p.id))];
}

export const skillGroups = [
  { label: "Frontend", items: ["React", "JavaScript", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "Fastify", "REST APIs"] },
  { label: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Pandas"] },
  { label: "ML", items: ["scikit-learn", "Time-series basics"] },
];