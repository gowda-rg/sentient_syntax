import { useEffect, useState } from "react";
import NeuralBackground from "@/components/NeuralBackground";
import StarField from "@/components/StarField";
import CosmicBackground from "@/components/CosmicBackground";
import PortfolioHub from "@/components/PortfolioHub";
import ParticipatoryLine from "@/components/ParticipatoryLine";
import EmergenceCollector from "@/components/EmergenceCollector";
import { useIsMobile } from "@/hooks/use-mobile";

const LOADER_MS = 800;
const BACKGROUND_DWELL_MS = 6200;
const REPEAT_DWELL_MS = 4500;
const SKIP_DWELL_SESSION_KEY = "sentient_syntax_dwell_seen";
const MOTION_OPACITY = 0.58;

type EntryPhase = "void" | "dwell" | "land";

const Index = () => {
  const [phase, setPhase] = useState<EntryPhase>("void");
  const isMobile = useIsMobile();

  useEffect(() => {
    const seen = sessionStorage.getItem(SKIP_DWELL_SESSION_KEY) === "1";
    const dwellMs = seen ? REPEAT_DWELL_MS : BACKGROUND_DWELL_MS;

    const dwellTimer = setTimeout(() => setPhase("dwell"), LOADER_MS);
    const landTimer = setTimeout(() => {
      setPhase("land");
      sessionStorage.setItem(SKIP_DWELL_SESSION_KEY, "1");
    }, LOADER_MS + dwellMs);

    return () => {
      clearTimeout(dwellTimer);
      clearTimeout(landTimer);
    };
  }, []);

  const ambientLines = phase === "dwell" || phase === "land";

  return (
    <main className="void-canvas relative min-h-screen w-full">
      <div className="void-vignette pointer-events-none" aria-hidden />
      <div className="motion-layer" style={{ opacity: MOTION_OPACITY }}>
        <NeuralBackground />
      </div>
      <div className="motion-layer" style={{ opacity: MOTION_OPACITY * 0.85 }}>
        <StarField />
      </div>
      {!isMobile && (
        <div className="motion-layer" style={{ opacity: MOTION_OPACITY * 0.6 }}>
          <CosmicBackground />
        </div>
      )}

      <ParticipatoryLine active={ambientLines} />
      <EmergenceCollector active={phase !== "void"} />

      {phase === "void" && (
        <div className="void-gate fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border border-white/15 border-t-white/55 animate-spin" />
        </div>
      )}

      {phase === "land" && <PortfolioHub immersed />}
    </main>
  );
};

export default Index;