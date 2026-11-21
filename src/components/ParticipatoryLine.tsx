import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  firstLineDelayMs,
  nextLineDelayMs,
  nextParticipatoryCue,
  type LineMotion,
} from "@/content/participatoryLines";

type Props = {
  active: boolean;
};

const motionDurationMs: Record<LineMotion, number> = {
  "fall-fast": 4200,
  "fall-medium": 5600,
  "fall-slow": 7200,
  "rise-fast": 4800,
  "rise-medium": 6400,
  "rise-slow": 8200,
};

export default function ParticipatoryLine({ active }: Props) {
  const [line, setLine] = useState<{ text: string; motion: LineMotion; key: number } | null>(null);
  const prevText = useRef<string | undefined>();
  const sequenceIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const hideRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (!active) {
      setLine(null);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const showCue = (delay: number) => {
      timeoutRef.current = setTimeout(() => {
        const { cue, nextIndex } = nextParticipatoryCue(sequenceIndex.current, prevText.current);
        sequenceIndex.current = nextIndex;
        prevText.current = cue.text;
        setLine({ text: cue.text, motion: cue.motion, key: Date.now() });

        const dwell = reducedMotion ? 6500 : motionDurationMs[cue.motion];
        hideRef.current = setTimeout(() => {
          setLine(null);
          showCue(nextLineDelayMs());
        }, dwell);
      }, delay);
    };

    showCue(firstLineDelayMs);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideRef.current) clearTimeout(hideRef.current);
    };
  }, [active]);

  if (!active) return null;

  return createPortal(
    <div className="participatory-line-layer" aria-live="polite">
      {line && (
        <p key={line.key} className={`participatory-line participatory-line--${line.motion}`}>
          {line.text}
        </p>
      )}
    </div>,
    document.body,
  );
}