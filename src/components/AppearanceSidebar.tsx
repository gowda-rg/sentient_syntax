export type HubSection = "home" | "experience" | "projects" | "skills" | "contact";

const sections: { id: HubSection; label: string }[] = [
  { id: "home", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

type Props = {
  section: HubSection;
  onSection: (s: HubSection) => void;
};

export default function AppearanceSidebar({ section, onSection }: Props) {
  return (
    <aside className="appearance-sidebar appearance-sidebar-hub" aria-label="Site navigation">
      <div className="sidebar-brand">
        <img src="/favicon.svg" alt="" width={28} height={28} className="sidebar-brand-mark" />
        <span className="sidebar-brand-text">Sentient Syntax</span>
      </div>
      <nav className="appearance-nav">
        <p className="appearance-heading">Sections</p>
        <ul className="appearance-nav-list">
          {sections.map((s) => (
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