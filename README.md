# sentient_syntax

**Sentient Syntax** — hiring portfolio for [sentientsyntax.com](https://www.sentientsyntax.com/).

Single-screen hub: cosmic background, glass panels, center focus (no long vertical resume page). Copy aligns with `../portfolio-resume/professional-knowledge-base/` in the monorepo workspace.

## Features

- **Viewport hub** — Overview, Experience, Projects, **Writing**, Skills, Contact via sidebar + tabs; search jumps to a role, project, or writing destination
- **Horizontal rails** — switch jobs and code/conceptual projects without leaving the center focus (no Shipped/Active labels; conceptual items use subtle shape cues)
- **Writing** — Substack and GitHub Pages in their own section (`writingDestinations` in `siteKnowledge.ts`), not duplicated on the project rail
- **Glass UI** — translucent cards over neural / star / cosmic layers (dark only)
- **Resume** — `public/Darshan_RG_Full_Stack_AI_Engineer_Resume_v1.pdf` (download from Overview / Contact)
- **Brand** — `public/favicon.svg` (SS monogram; not the old Lovable `.ico`)

## Stack

| Layer | Choice |
|-------|--------|
| Build | Vite 5 + `@vitejs/plugin-react-swc` |
| UI | React 18, TypeScript, React Router 6 |
| Styling | Tailwind 3 (`darshan` tokens + CSS variables in `src/index.css`) |
| Toasts | Sonner |

Removed from the original Lovable scaffold: shadcn/Radix bulk, Supabase, TanStack Query, admin route.

## Develop

```bash
npm install
npm run dev      # http://localhost:8080 (host: true for LAN)
npm run build    # tsc -p tsconfig.app.json + vite build → dist/
npm run preview
npm run lint
```

Node: see `.nvmrc` (LTS recommended).

## Project layout

```
public/
  favicon.svg
  Darshan_RG_Full_Stack_AI_Engineer_Resume_v1.pdf
src/
  content/siteKnowledge.ts    # Site copy (sync from PKB)
  components/
    PortfolioHub.tsx            # Main hub UI
    AppearanceSidebar.tsx     # Section nav + brand
    NeuralBackground.tsx, StarField.tsx, CosmicBackground.tsx
  pages/Index.tsx             # Background + immersion gate
```

## Config

| File | Role |
|------|------|
| `tsconfig.app.json` | App typecheck (`npm run build`) |
| `tsconfig.json` | Project references only |
| `vite.config.ts` | Port 8080, `@/` → `src/` |
| `tailwind.config.ts` | `darshan` color scales |

## Deploy

Static output: `dist/`. Ensure `public/` assets (resume, favicon) are included. Set production host to serve `index.html` for SPA routes.

After changes:

```bash
npm run build
git add -A
git commit -m "Describe your change"
git push origin main
```

Remote: `https://github.com/gowda-rg/sentient_syntax.git` (`origin/main`).

## Canonical career data

Edit `portfolio-resume/professional-knowledge-base/`, then update `src/content/siteKnowledge.ts` (ingest script planned for v1.1).

## License

Personal project — Gowda RG.