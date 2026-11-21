# AGENTS.md — sentient_syntax

## Role

Maintain this SPA portal. **Career truth** lives in `../portfolio-resume/professional-knowledge-base/` — update `src/content/siteKnowledge.ts` when canonical records change (until auto-ingest exists).

## Rules

- **Public ship:** commits and live copy stay neutral — see `../.cursor/rules/public-artifacts.mdc`, `../AGENTS.md`, skill `public-ship` (`~/.cursor/skills/public-ship/SKILL.md` + `agent-drills.md`).
- Do not claim live RAG or interview chat until implemented with disclosure + citations.
- Preserve entry UX: void (first visit) → hub grid → room → back.
- Keep dependencies minimal; no re-adding full shadcn without need.
- No secrets in client code (removed legacy admin password).

## Content sync

Mirror: identity, engineering projects, journey, research links from PKB `INDEX.md` and evidence registry.

## Build

`npm run build` must pass before deploy.