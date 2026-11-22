# sentient_syntax

Source for **[sentientsyntax.com](https://www.sentientsyntax.com/)** — Darshan RG’s portfolio site (experience, projects, writing, skills, contact).

## Site

| Section | Content |
|---------|---------|
| Overview | Profile, resume (PDF), links |
| Experience | Employment history with company links |
| Projects | Engineering and selected repos |
| Writing | Substack and research archive |
| Skills | Stack groupings |
| Interview | Coming soon — disclosed AI representative (no live chat yet) |

Static SPA; content is driven by `src/content/siteKnowledge.ts` (aligned with the professional knowledge base in the workspace monorepo).

**Also on the site:** brief staged entry before the hub loads; optional on-device quick notes (`localStorage`, copy-out only — nothing sent to a server).

## Stack

React 18 · TypeScript · Vite 5 · Tailwind CSS · React Router

## Develop

```bash
npm install
npm run dev
npm run build
npm run preview
```

Production build output: `dist/`.

## Repository

https://github.com/gowda-rg/sentient_syntax