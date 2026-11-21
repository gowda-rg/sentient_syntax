export type TraceImprint = {
  id: string;
  raw: string;
  createdAt: string;
};

const STORAGE_KEY = "sentient_syntax_traces";

export function loadTraces(): TraceImprint[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as TraceImprint[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveTraces(traces: TraceImprint[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(traces));
}

export function addTrace(text: string): TraceImprint {
  const imprint: TraceImprint = {
    id: crypto.randomUUID(),
    raw: text,
    createdAt: new Date().toISOString(),
  };
  const next = [...loadTraces(), imprint];
  saveTraces(next);
  return imprint;
}

export function removeTrace(id: string): void {
  saveTraces(loadTraces().filter((t) => t.id !== id));
}

export function clearTraces(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function formatNotesForCopy(traces: TraceImprint[], includeTime: boolean): string {
  if (includeTime) {
    return traces
      .map((t, i) => `${i + 1}. [${new Date(t.createdAt).toLocaleString()}]\n${t.raw}`)
      .join("\n\n---\n\n");
  }
  return traces.map((t) => t.raw).join("\n\n");
}