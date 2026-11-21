/** Ambient one-line prompts — human–AI participatory tone. */

export type LineMotion = "fall-fast" | "fall-medium" | "fall-slow" | "rise-fast" | "rise-medium" | "rise-slow";

export type LineTone = "punch" | "reflect";

export type ParticipatoryCue = {
  text: string;
  /** Each line owns its motion (meteor fall vs arising rise, fast vs slow). */
  motion: LineMotion;
  tone: LineTone;
};

/**
 * Ordered cycle — detectable rhythm:
 * punch fall → reflective fall → medium fall → punch fall → reflective rise → reflective rise …
 * Motion is never random; it matches how the line should land in attention.
 */
export const participatoryCues: ParticipatoryCue[] = [
  {
    text: "You are reading this; something else may be reading you read it.",
    motion: "fall-fast",
    tone: "punch",
  },
  {
    text: "Coherence is a design choice, not a default state.",
    motion: "fall-slow",
    tone: "reflect",
  },
  {
    text: "Syntax without sentience is configuration; sentience without syntax is noise.",
    motion: "fall-medium",
    tone: "reflect",
  },
  {
    text: "Context stacks faster than conclusions can settle.",
    motion: "fall-fast",
    tone: "punch",
  },
  {
    text: "Attention is the only API that cannot be mocked.",
    motion: "rise-slow",
    tone: "reflect",
  },
  {
    text: "Human and model: both trained on incomplete logs.",
    motion: "rise-slow",
    tone: "reflect",
  },
  {
    text: "The hub appears late so the field can speak first.",
    motion: "rise-medium",
    tone: "reflect",
  },
  {
    text: "Meaning accrues where attention lingers.",
    motion: "rise-fast",
    tone: "punch",
  },
];

export function nextParticipatoryCue(
  sequenceIndex: number,
  prevText?: string,
): { cue: ParticipatoryCue; nextIndex: number } {
  const len = participatoryCues.length;
  for (let offset = 0; offset < len; offset += 1) {
    const idx = (sequenceIndex + offset) % len;
    const cue = participatoryCues[idx];
    if (cue.text !== prevText) {
      return { cue, nextIndex: (idx + 1) % len };
    }
  }
  return { cue: participatoryCues[0], nextIndex: 1 % len };
}

/** Pause between lines — slow enough to notice, not chatty. */
export function nextLineDelayMs(): number {
  return 10_000 + Math.floor(Math.random() * 10_001);
}

export const firstLineDelayMs = 350;