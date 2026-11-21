import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  addTrace,
  clearTraces,
  formatNotesForCopy,
  loadTraces,
  removeTrace,
  type TraceImprint,
} from "@/lib/traceStorage";

type Props = {
  active: boolean;
};

export default function EmergenceCollector({ active }: Props) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [notes, setNotes] = useState<TraceImprint[]>([]);
  const [copyFeedback, setCopyFeedback] = useState<"time" | "plain" | null>(null);
  const draftRef = useRef<HTMLTextAreaElement>(null);

  const refresh = useCallback(() => setNotes(loadTraces()), []);

  useEffect(() => {
    if (active) refresh();
  }, [active, refresh]);

  useEffect(() => {
    if (open) draftRef.current?.focus();
  }, [open]);

  const saveNote = () => {
    const text = draft.trim();
    if (!text) return;
    addTrace(text);
    setDraft("");
    refresh();
    draftRef.current?.focus();
  };

  const copyAll = async (includeTime: boolean) => {
    if (notes.length === 0) return;
    try {
      await navigator.clipboard.writeText(formatNotesForCopy(notes, includeTime));
      setCopyFeedback(includeTime ? "time" : "plain");
      window.setTimeout(() => setCopyFeedback(null), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  if (!active) return null;

  return createPortal(
    <div className="note-collector-root">
      {open && (
        <div
          id="note-collector-panel"
          className="note-collector-panel hire-card"
          role="dialog"
          aria-label="Quick notes"
        >
          <header className="note-collector-header">
            <h2 className="note-collector-title">Quick notes</h2>
            <p className="note-collector-hint">Stored on this device only — not sent anywhere.</p>
          </header>

          <div className="note-collector-scroll">
            {notes.length === 0 ? (
              <p className="note-collector-empty">No notes yet.</p>
            ) : (
              <ul className="note-collector-list">
                {notes.map((n) => (
                  <li key={n.id} className="note-collector-item">
                    <p className="note-collector-item-text">{n.raw}</p>
                    <div className="note-collector-item-meta">
                      <span className="text-xs hire-muted">{new Date(n.createdAt).toLocaleString()}</span>
                      <button
                        type="button"
                        className="hire-link text-xs"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(n.raw);
                          } catch {
                            /* ignore */
                          }
                        }}
                      >
                        Copy
                      </button>
                      <button
                        type="button"
                        className="hire-link text-xs"
                        onClick={() => {
                          removeTrace(n.id);
                          refresh();
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {notes.length > 0 && (
              <div className="note-collector-copy-row">
                <button type="button" className="hire-link text-xs" onClick={() => copyAll(true)}>
                  {copyFeedback === "time" ? "Copied" : "Copy all with times"}
                </button>
                <button type="button" className="hire-link text-xs" onClick={() => copyAll(false)}>
                  {copyFeedback === "plain" ? "Copied" : "Copy text only"}
                </button>
                <button
                  type="button"
                  className="hire-link text-xs"
                  onClick={() => {
                    if (window.confirm("Clear all notes on this device?")) {
                      clearTraces();
                      refresh();
                    }
                  }}
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          <footer className="note-collector-compose">
            <label className="sr-only" htmlFor="note-draft">
              Write a note
            </label>
            <textarea
              ref={draftRef}
              id="note-draft"
              className="note-collector-input hire-input"
              rows={2}
              placeholder="Type a thought…"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) saveNote();
              }}
            />
            <div className="note-collector-compose-bar">
              <button
                type="button"
                className="note-collector-save hire-link text-sm"
                onClick={saveNote}
                disabled={!draft.trim()}
              >
                Save
              </button>
              <span className="note-collector-kbd hire-muted">Ctrl+Enter</span>
            </div>
          </footer>
        </div>
      )}

      <button
        type="button"
        className="note-collector-fab"
        aria-expanded={open}
        aria-controls="note-collector-panel"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Note"}
      </button>
    </div>,
    document.body,
  );
}