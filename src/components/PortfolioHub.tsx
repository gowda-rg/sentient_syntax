import { useMemo, useState, type ReactNode } from "react";
import AppearanceSidebar, { hubSections, type HubSection } from "@/components/AppearanceSidebar";
import {
  profile,
  employments,
  projectCatalog,
  projectsForRail,
  skillGroups,
  writingDestinations,
  interviewRepresentative,
  siteBrand,
  type ProjectItem,
} from "@/content/siteKnowledge";

const card = "hire-card";

type SearchHit =
  | { type: "job"; id: string; title: string; sub: string }
  | { type: "project"; id: string; title: string; sub: string }
  | { type: "writing"; id: string; title: string; sub: string }
  | { type: "interview"; id: string; title: string; sub: string };

function buildSearchHits(): SearchHit[] {
  const jobs = employments.map((e) => ({
    type: "job" as const,
    id: e.id,
    title: e.company,
    sub: `${e.role} · ${e.period}`,
  }));
  const projects = projectCatalog.map((p) => ({
    type: "project" as const,
    id: p.id,
    title: p.name,
    sub: p.stack.slice(0, 2).join(" · "),
  }));
  const writing = writingDestinations.map((w) => ({
    type: "writing" as const,
    id: w.id,
    title: w.title,
    sub: "Writing",
  }));
  const interview = [
    {
      type: "interview" as const,
      id: "interview",
      title: interviewRepresentative.title,
      sub: interviewRepresentative.badge,
    },
  ];
  return [...jobs, ...projects, ...writing, ...interview];
}

type PortfolioHubProps = {
  immersed?: boolean;
};

export default function PortfolioHub({ immersed = true }: PortfolioHubProps) {
  const [section, setSection] = useState<HubSection>("home");
  const [jobId, setJobId] = useState(employments[0]?.id ?? "");
  const [projectId, setProjectId] = useState(projectCatalog[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  const hits = useMemo(() => buildSearchHits(), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return hits.filter((h) => h.title.toLowerCase().includes(q) || h.sub.toLowerCase().includes(q)).slice(0, 8);
  }, [hits, query]);

  const job = employments.find((e) => e.id === jobId) ?? employments[0];
  const project = projectCatalog.find((p) => p.id === projectId) ?? projectCatalog[0];

  const pickHit = (hit: SearchHit) => {
    if (hit.type === "job") {
      setJobId(hit.id);
      setSection("experience");
    } else if (hit.type === "writing") {
      setSection("writing");
    } else if (hit.type === "interview") {
      setSection("interview");
    } else {
      setProjectId(hit.id);
      setSection("projects");
    }
    setQuery("");
    setSearchOpen(false);
  };

  return (
    <div className={`viewport-hub ${immersed ? "hire-descend" : "opacity-0"}`}>
      <AppearanceSidebar section={section} onSection={setSection} />

      <div className="hub-main">
        <header className="hub-toolbar">
          <div className="hub-mobile-brand md:hidden">
            <img
              src={siteBrand.logoSrc}
              alt={siteBrand.logoAlt}
              width={28}
              height={28}
              className="sidebar-brand-mark brand-logo"
              decoding="async"
            />
            <span className="sidebar-brand-text">Sentient Syntax</span>
          </div>
          <div className="hub-search-wrap">
            <label className="sr-only" htmlFor="portfolio-search">
              Search roles and projects
            </label>
            <input
              id="portfolio-search"
              type="search"
              placeholder="Search company or project…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              className="hub-search"
              autoComplete="off"
            />
            {searchOpen && query && filtered.length > 0 && (
              <ul className="hub-search-results" role="listbox">
                {filtered.map((hit) => (
                  <li key={`${hit.type}-${hit.id}`}>
                    <button type="button" className="hub-search-hit" onClick={() => pickHit(hit)}>
                      <span className="font-medium">{hit.title}</span>
                      <span className="text-xs hire-muted">{hit.sub}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hub-tabs hidden md:flex" role="tablist">
            {hubSections.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={section === s.id}
                className={`hub-tab ${section === s.id ? "hub-tab-active" : ""}`}
                onClick={() => setSection(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </header>

        <div className="focus-stage" role="tabpanel">
          {section === "home" && (
            <HomeFocus
              onExploreWriting={() => setSection("writing")}
              onExploreInterview={() => setSection("interview")}
            />
          )}
          {section === "experience" && job && (
            <ExperienceFocus job={job} jobId={jobId} onSelect={setJobId} />
          )}
          {section === "projects" && project && (
            <ProjectFocus project={project} projectId={projectId} onSelect={setProjectId} />
          )}
          {section === "writing" && <WritingFocus />}
          {section === "skills" && <SkillsFocus />}
          {section === "interview" && <InterviewFocus onContact={() => setSection("contact")} />}
          {section === "contact" && <ContactFocus onInterview={() => setSection("interview")} />}
        </div>
      </div>

      <nav className="hub-bottom-nav md:hidden" aria-label="Sections">
        {hubSections.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`hub-bottom-tab ${section === s.id ? "hub-bottom-tab-active" : ""}`}
            aria-current={section === s.id ? "page" : undefined}
            onClick={() => {
              setSection(s.id);
              setSearchOpen(false);
            }}
          >
            {s.shortLabel}
          </button>
        ))}
      </nav>
    </div>
  );
}

function HomeFocus({
  onExploreWriting,
  onExploreInterview,
}: {
  onExploreWriting: () => void;
  onExploreInterview: () => void;
}) {
  return (
    <article className={`${card} focus-panel focus-panel--home overview-panel`}>
      <h1 className="hire-display overview-name">{profile.name}</h1>
      <p className="overview-title">{profile.title}</p>
      <p className="overview-subtitle">{profile.subtitle}</p>
      <p className="overview-location">{profile.location}</p>
      <p className="overview-summary">{profile.summary}</p>
      <div className="overview-actions">
        <a href={profile.resumeFile} download className="hire-button overview-resume">
          {profile.resumeLabel}
        </a>
        <nav className="overview-links" aria-label="Profiles">
          {profile.links.map((l, i) => (
            <span key={l.href} className="overview-link-item">
              {i > 0 && <span className="overview-sep" aria-hidden>|</span>}
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            </span>
          ))}
        </nav>
        <p className="overview-writing">
          Essays and notes —{" "}
          <button type="button" className="overview-writing-btn" onClick={onExploreWriting}>
            explore writing
          </button>
          {" · "}
          <button type="button" className="overview-writing-btn" onClick={onExploreInterview}>
            AI interview rep (soon)
          </button>
        </p>
      </div>
    </article>
  );
}

function ExperienceFocus({
  job,
  jobId,
  onSelect,
}: {
  job: (typeof employments)[0];
  jobId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="focus-stack">
      <article className={`${card} focus-panel focus-panel--detail`}>
        <header className="space-y-1">
          <div className="flex flex-wrap justify-between gap-2 items-baseline">
            {job.companyUrl ? (
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-[var(--fg)] hire-link experience-company-link"
              >
                {job.company}
              </a>
            ) : (
              <h2 className="text-xl font-semibold text-[var(--fg)]">{job.company}</h2>
            )}
            <span className="text-sm hire-muted tabular-nums">{job.period}</span>
          </div>
          <p className="hire-subhead">{job.role}</p>
          <p className="text-sm hire-muted experience-meta">
            <span>{job.location}</span>
            <span className="experience-meta-sep" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <span>{job.product}</span>
          </p>
        </header>
        <ul className="list-disc pl-5 mt-4 space-y-1.5 hire-body">
          {job.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <TagRow tags={job.stack} className="mt-4" />
      </article>
      <HorizontalRail label="Other roles">
        {employments.map((e) => (
          <button
            key={e.id}
            type="button"
            className={`rail-chip rail-chip--stack ${e.id === jobId ? "rail-chip-active" : ""}`}
            onClick={() => onSelect(e.id)}
          >
            <span className="rail-chip-title">{e.company}</span>
            <span className="rail-chip-meta">{e.period}</span>
          </button>
        ))}
      </HorizontalRail>
    </div>
  );
}

function ProjectFocus({
  project,
  projectId,
  onSelect,
}: {
  project: ProjectItem;
  projectId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="focus-stack">
      <article className={`${card} focus-panel focus-panel--detail project-shape project-shape--${project.kind}`}>
        <header>
          <h2 className="text-xl font-semibold leading-snug">{project.name}</h2>
        </header>
        <p className="hire-body mt-3">{project.description}</p>
        <TagRow tags={project.stack} className="mt-3" />
        <div className="flex flex-wrap gap-3 mt-4">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="hire-link">
              {l.label}
            </a>
          ))}
        </div>
      </article>
      <HorizontalRail label="Projects — scroll sideways">
        {projectsForRail().map((p) => (
          <button
            key={p.id}
            type="button"
            className={`rail-chip rail-chip--project project-shape project-shape--${p.kind} ${p.id === projectId ? "rail-chip-active" : ""}`}
            onClick={() => onSelect(p.id)}
            title={p.name}
          >
            <span className="rail-chip-title">{p.name}</span>
          </button>
        ))}
      </HorizontalRail>
    </div>
  );
}

function WritingFocus() {
  return (
    <article className={`${card} focus-panel focus-panel--writing`}>
      <header className="writing-focus-header">
        <h2 className="hire-section-title text-xl">Explore writing</h2>
        <p className="hire-body text-sm mt-2">
          Long-form essays on Substack and published notes on GitHub Pages — separate from code projects.
        </p>
      </header>
      <div className="writing-explore-grid">
        {writingDestinations.map((w) => (
          <div
            key={w.id}
            className="writing-destination project-shape project-shape--conceptual"
          >
            <h3 className="writing-destination-title">{w.title}</h3>
            <p className="hire-body text-sm mt-2">{w.description}</p>
            <div className="writing-destination-links">
              <a href={w.href} target="_blank" rel="noopener noreferrer" className="hire-link">
                {w.linkLabel}
              </a>
              {w.secondaryHref && w.secondaryLabel && (
                <a href={w.secondaryHref} target="_blank" rel="noopener noreferrer" className="hire-link">
                  {w.secondaryLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function InterviewFocus({ onContact }: { onContact: () => void }) {
  const ir = interviewRepresentative;
  return (
    <article className={`${card} focus-panel focus-panel--compact interview-panel`}>
      <div className="interview-panel-header">
        <h2 className="hire-section-title text-xl">{ir.title}</h2>
        <span className="hire-badge">{ir.badge}</span>
      </div>
      <p className="hire-body mt-3">{ir.summary}</p>

      <h3 className="hire-label mt-5 mb-2">Planned for hiring teams</h3>
      <ul className="list-disc pl-5 space-y-1.5 hire-body text-sm">
        {ir.forHiring.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <h3 className="hire-label mt-4 mb-2">Not available yet</h3>
      <ul className="list-disc pl-5 space-y-1.5 hire-body text-sm hire-muted">
        {ir.notYet.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-white/10">
        <p className="hire-label mb-2">{ir.now.label}</p>
        <ul className="list-disc pl-5 space-y-1 hire-body text-sm">
          {ir.now.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <button type="button" className="hire-button mt-4 text-sm" onClick={onContact}>
          Go to contact
        </button>
      </div>

      <p className="text-xs hire-muted mt-4">{ir.pkRef}</p>
    </article>
  );
}

function SkillsFocus() {
  return (
    <article className={`${card} focus-panel focus-panel--compact`}>
      <h2 className="hire-section-title text-xl mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <p className="hire-label mb-2">{g.label}</p>
            <TagRow tags={g.items} />
          </div>
        ))}
      </div>
    </article>
  );
}

function ContactFocus({ onInterview }: { onInterview: () => void }) {
  return (
    <article className={`${card} focus-panel focus-panel--compact`}>
      <h2 className="hire-section-title text-xl mb-3">Contact</h2>
      <p className="hire-body mb-4">Email or LinkedIn for hiring and engineering conversations.</p>
      <ul className="space-y-3">
        <li>
          <a href={`mailto:${profile.email}`} className="hire-link text-base">
            {profile.email}
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hire-link text-base">
            LinkedIn — linkedin.com/in/gowda-rg
          </a>
        </li>
        <li>
          <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="hire-link">
            View resume (PDF)
          </a>
        </li>
      </ul>
      <p className="hire-muted text-sm mt-6 pt-4 border-t border-white/10">
        <button type="button" className="overview-writing-btn" onClick={onInterview}>
          AI interview representative
        </button>{" "}
        ({interviewRepresentative.badge.toLowerCase()}) · Writing section for essays and notes.
      </p>
    </article>
  );
}

function TagRow({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((t) => (
        <span key={t} className="hire-tag">
          {t}
        </span>
      ))}
    </div>
  );
}

function HorizontalRail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="horizontal-rail-wrap">
      <p className="text-xs hire-muted mb-1 px-1">{label}</p>
      <div className="horizontal-rail" role="list">
        {children}
      </div>
    </div>
  );
}