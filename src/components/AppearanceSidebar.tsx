import { siteBrand } from "@/content/siteKnowledge";

export type HubSection =
  | "home"
  | "experience"
  | "projects"
  | "writing"
  | "skills"
  | "interview"
  | "contact";

export const hubSections: { id: HubSection; label: string; shortLabel: string }[] = [
  { id: "home", label: "Overview", shortLabel: "Home" },
  { id: "experience", label: "Experience", shortLabel: "Work" },
  { id: "projects", label: "Projects", shortLabel: "Projects" },
  { id: "writing", label: "Writing", shortLabel: "Write" },
  { id: "skills", label: "Skills", shortLabel: "Skills" },
  { id: "interview", label: "Interview", shortLabel: "Rep" },
  { id: "contact", label: "Contact", shortLabel: "Contact" },
];

type Props = {
  section: HubSection;
  onSection: (s: HubSection) => void;
};

export default function AppearanceSidebar({ section, onSection }: Props) {
  return (
    <aside
      className="appearance-sidebar appearance-sidebar-hub hidden md:flex md:flex-col"
      aria-label="Site navigation"
    >
      <div className="sidebar-brand">
        <img
          src={siteBrand.logoSrc}
          alt={siteBrand.logoAlt}
          width={32}
          height={32}
          className="sidebar-brand-mark brand-logo"
          decoding="async"
        />
        <span className="sidebar-brand-text">Sentient Syntax</span>
      </div>
      <nav className="appearance-nav">
        <p className="appearance-heading">Sections</p>
        <ul className="appearance-nav-list">
          {hubSections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                className={`appearance-nav-link appearance-nav-btn w-full text-left ${section === s.id ? "appearance-nav-active" : ""}`}
                onClick={() => onSection(s.id)}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}