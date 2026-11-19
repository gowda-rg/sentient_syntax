/**
 * Site copy — sync with portfolio-resume/professional-knowledge-base/
 */

export type ProjectKind = "engineering" | "research" | "docs" | "writing" | "site";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  kind: ProjectKind;
  status: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
};

export const profile = {
  name: "Gowda RG",
  title: "Full Stack AI Engineer",
  subtitle: "React · REST · SQL · Python ML · Applied AI",
  location: "Bengaluru, India",
  email: "darshanrgs56@gmail.com",
  linkedin: "https://www.linkedin.com/in/gowda-rg/",
  summary:
    "Full-stack engineer with production contact-center experience at Tevatel (React portals, telephony REST, SQL CRM). Independent work spans ML telemetry, simulation platforms, portfolio systems, and documented research repos.",
  resumeFile: "/Darshan_RG_Full_Stack_AI_Engineer_Resume_v1.pdf",
  resumeLabel: "Download resume (PDF)",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gowda-rg/" },
    { label: "GitHub", href: "https://github.com/gowda-rg" },
    { label: "Email", href: "mailto:darshanrgs56@gmail.com" },
  ],
};

export const employments = [
  {
    id: "tevatel",
    company: "Tevatel",
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
    stack: ["React", "JavaScript", "REST APIs", "SQL", "MySQL"],
  },
  {
    id: "glucowear",
    company: "Office Solution AI Labs",
    role: "Backend Developer Intern",
    period: "Jul – Sep 2023",
    location: "Remote",
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
    role: "Full Stack Training & Peer Mentoring",
    period: "Jun 2022 – Jun 2023",
    location: "Hyderabad",
    product: "Training program (not employment)",
    bullets: [
      "Completed full-stack and DSA curriculum; built assignment and portfolio projects.",
      "Mentored newer batches in one-to-one technical sessions.",
    ],
    stack: ["JavaScript", "React", "Node.js", "Express"],
  },
  {
    id: "dot",
    company: "(dot).efficiently",
    role: "Project Estimation Associate",
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
    status: "Active",
    description:
      "Telemetry ingestion, validation, and day-ahead forecasting. FastAPI, PostgreSQL, React, scikit-learn.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "scikit-learn"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/solar-plant-intelligence" }],
  },
  {
    id: "3dice",
    name: "Three-Dice Simulation Platform",
    kind: "engineering",
    status: "Shipped",
    description:
      "Seeded dice runs, permutation outcome taxonomy, SQLite persistence, and analytics UI (TypeScript / Next.js stack).",
    stack: ["TypeScript", "Next.js", "Fastify", "SQLite", "Chart.js"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/3dice-sim" }],
  },
  {
    id: "agentiq",
    name: "AgentIQ",
    kind: "engineering",
    status: "In progress",
    description: "Contact-center–inspired metrics and ML experiments; early repo.",
    stack: ["Python", "Pandas", "FastAPI"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/AgentIQ" }],
  },
  {
    id: "sentient-syntax",
    name: "Sentient Syntax",
    kind: "site",
    status: "Active",
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
    status: "In progress",
    description: "Structured professional knowledge, portfolio outputs, and future disclosed interview representative.",
    stack: ["React", "Python", "RAG"],
    links: [
      { label: "Repository", href: "https://github.com/gowda-rg/sentient_syntax" },
      { label: "Knowledge base", href: "https://github.com/gowda-rg/gowda-rg.github.io" },
    ],
  },
  {
    id: "postsymbolic",
    name: "PostSymbolic Alignment Framework",
    kind: "research",
    status: "Research prototype",
    description: "Longitudinal human–AI interaction and semantic alignment experiments.",
    stack: ["Python", "LLM APIs"],
    links: [{ label: "Repository", href: "https://github.com/gowda-ss/PostSymbolic-Alignment-Framework" }],
  },
  {
    id: "fourth-word",
    name: "Fourth Word",
    kind: "research",
    status: "Research prototype",
    description: "Exploration tied to Substack essays and coherence-oriented LLM use.",
    stack: ["Documentation", "LLM workflows"],
    links: [{ label: "Repository", href: "https://github.com/gowda-rg/fourth_word" }],
  },
  {
    id: "perceptual-anchoring",
    name: "Perceptual Anchoring",
    kind: "research",
    status: "Research prototype",
    description: "Human-centered framing for stable perception in long AI sessions.",
    stack: ["Research notes", "Prototypes"],
    links: [{ label: "Repository", href: "https://github.com/gowda-ss/perceptual-anchoring" }],
  },
  {
    id: "docs-github-io",
    name: "GitHub Pages documentation",
    kind: "docs",
    status: "Published",
    description: "Text-heavy documentation and research notes (gowda-rg.github.io source repo).",
    stack: ["Markdown", "GitHub Pages"],
    links: [
      { label: "Site", href: "https://gowda-rg.github.io/" },
      { label: "Repository", href: "https://github.com/gowda-rg/gowda-rg.github.io" },
    ],
  },
  {
    id: "substack",
    name: "Substack — RG Gowda",
    kind: "writing",
    status: "Ongoing",
    description: "Essays on applied AI, coherence, and human–AI interaction.",
    stack: ["Writing"],
    links: [{ label: "Substack", href: "https://substack.com/@rgowda" }],
  },
];

export const projectSections: { title: string; kinds: ProjectKind[] }[] = [
  { title: "Engineering & apps", kinds: ["engineering", "site"] },
  { title: "Research repositories", kinds: ["research"] },
  { title: "Documentation & writing", kinds: ["docs", "writing"] },
];

export const skillGroups = [
  { label: "Frontend", items: ["React", "JavaScript", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs"] },
  { label: "Data", items: ["SQL", "PostgreSQL", "MongoDB", "Pandas"] },
  { label: "ML", items: ["scikit-learn", "Time-series basics"] },
];