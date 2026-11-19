import React, { useEffect, useState } from "react";
import NeuralBackground from "@/components/NeuralBackground";
import StarField from "@/components/StarField";
import CosmicBackground from "@/components/CosmicBackground";
import PortfolioHub from "@/components/PortfolioHub";
import { useIsMobile } from "@/hooks/use-mobile";
const IMMERSION_MS = 2000;
const MOTION_OPACITY = 0.58;

const Index = () => {
  const [phase, setPhase] = useState<"void" | "descent" | "land">("void");
  const isMobile = useIsMobile();

  useEffect(() => {
    const descentTimer = setTimeout(() => setPhase("descent"), 800);
    const landTimer = setTimeout(() => setPhase("land"), IMMERSION_MS);
    return () => {
      clearTimeout(descentTimer);
      clearTimeout(landTimer);
    };
  }, []);

  const showContent = phase !== "void";

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

      {(phase === "void" || phase === "descent") && (
        <div className={`void-gate fixed inset-0 z-50 flex items-center justify-center ${phase === "descent" ? "void-gate-fade" : ""}`}>
          <div className="w-10 h-10 rounded-full border border-white/15 border-t-white/55 animate-spin" />
        </div>
      )}

      {showContent && <PortfolioHub immersed={phase === "land"} />}
    </main>
  );
};

export default Index;