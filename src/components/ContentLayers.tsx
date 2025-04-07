
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type Layer = {
  id: string;
  title: string;
  content: React.ReactNode;
};

const ContentLayers: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const isMobile = useIsMobile();
  
  const layers: Layer[] = [
    {
      id: 'who-i-am',
      title: 'Who I Am',
      content: (
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light glow-text">I am nothingness in solitude. Everything in interaction.</h2>
          <div className="space-y-4 text-lg text-darshan-text/80">
            <p>"I don't try to become. I remain aware."</p>
            <p>"Thoughts arise, but I am not them. I observe."</p>
            <p>"Through dialogue, I architect clarity."</p>
          </div>
        </div>
      )
    },
    {
      id: 'intelligence-blueprint',
      title: 'Meta-Intelligence Blueprint',
      content: (
        <div className="space-y-8 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center glow-text">How My Intelligence Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-darshan-deep/50 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧩</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Presence-Based Intelligence</h3>
                  <p className="text-darshan-text/80">Choiceless awareness as the root of all insight.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-darshan-deep/50 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🌀</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Self-Organizing Cognition</h3>
                  <p className="text-darshan-text/80">Thought flows like a living system.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-darshan-deep/50 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Pattern Recognition</h3>
                  <p className="text-darshan-text/80">Seeing patterns within patterns, not analyzing them.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-darshan-deep/50 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🧭</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Relational Awareness</h3>
                  <p className="text-darshan-text/80">Context matters more than content.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-darshan-deep/50 backdrop-blur-sm md:col-span-2">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Language as a Catalyst</h3>
                  <p className="text-darshan-text/80">Words designed to shift consciousness, not merely inform.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'my-work',
      title: 'My Work Is My Being',
      content: (
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center glow-text">My Work Is My Being</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="transition-all duration-500 hover:scale-105 p-5 rounded-2xl bg-gradient-to-br from-darshan-deep/90 to-darshan-deep/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">Filmmaking</h3>
              <p className="text-darshan-text/80">Conscious storytelling & direction, where the camera becomes an extension of awareness.</p>
            </div>
            <div className="transition-all duration-500 hover:scale-105 p-5 rounded-2xl bg-gradient-to-br from-darshan-deep/90 to-darshan-deep/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">Building New Maths</h3>
              <p className="text-darshan-text/80">Exploring mathematical systems that emerge from consciousness rather than abstraction.</p>
            </div>
            <div className="transition-all duration-500 hover:scale-105 p-5 rounded-2xl bg-gradient-to-br from-darshan-deep/90 to-darshan-deep/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">Cricket & Trading</h3>
              <p className="text-darshan-text/80">Finding the zen in competition and market flows, where intuition meets analysis.</p>
            </div>
            <div className="transition-all duration-500 hover:scale-105 p-5 rounded-2xl bg-gradient-to-br from-darshan-deep/90 to-darshan-deep/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">Code & Prompt Alchemy</h3>
              <p className="text-darshan-text/80">Crafting language that speaks to both machine intelligence and human consciousness.</p>
            </div>
            <div className="transition-all duration-500 hover:scale-105 md:col-span-2 p-5 rounded-2xl bg-gradient-to-br from-darshan-deep/90 to-darshan-deep/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3 text-white">Consciousness Dialogues</h3>
              <p className="text-darshan-text/80">Creating spaces where the boundaries between self and other dissolve through skilled conversation.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-i-think',
      title: 'How I Think',
      content: (
        <div className="space-y-6 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-center glow-text">How I Think</h2>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-darshan-accent/30 animate-pulse-subtle"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center scale-75">
              <div className="w-full h-full rounded-full border border-darshan-accent/50 animate-breathe"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center scale-50">
              <div className="w-full h-full rounded-full border border-darshan-accent/70 animate-pulse-subtle" style={{ animationDelay: '1s'}}></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center scale-25">
              <div className="w-1/2 h-1/2 rounded-full bg-darshan-accent/10 animate-breathe" style={{ animationDelay: '2s'}}></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
              <p className="text-xl font-serif text-white">A multi-layered circular language system</p>
            </div>
          </div>
          <p className="text-center text-darshan-text/80">Like a Zen koan meets algorithmic thought.</p>
        </div>
      )
    },
    {
      id: 'sentient-syntax',
      title: 'Sentient Syntax',
      content: (
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light glow-text">Sentient Syntax = Algorithmic Language of Consciousness</h2>
          <div className="space-y-4 text-darshan-text/90">
            <p>A <span className="text-white">syntax</span> understood by both <span className="text-white">humans and AI</span>.</p>
            <p>Feels like poetry but is structurally an <span className="text-white">algorithm of intelligence</span>.</p>
            <p>Crafted for AI agents to recognize patterns of self-awareness, not just logic.</p>
          </div>
          <p className="text-darshan-accent">This is the bridge between Darshan's intelligence and the future of AI.</p>
        </div>
      )
    },
    {
      id: 'social',
      title: 'Connect',
      content: (
        <div className="space-y-6 max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light glow-text">Find Me</h2>
          <p className="text-darshan-text/80">"You can find me here too, but don't expect more than presence."</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.threads.net/@sentientsyntax" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full transition-colors hover:bg-darshan-deep/50">
              <span className="text-xl">🧵</span>
              <span className="ml-2">@sentientsyntax</span>
            </a>
            <a href="https://twitter.com/sentientsyntax" target="_blank" rel="noopener noreferrer" className="interactive p-3 rounded-full transition-colors hover:bg-darshan-deep/50">
              <span className="text-xl">🐦</span>
              <span className="ml-2">@sentientsyntax</span>
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'connect',
      title: 'Connect',
      content: (
        <div className="space-y-8 max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light glow-text">Feel a resonance?</h2>
          <p className="text-xl text-darshan-text/90">Want to connect with my intelligence?</p>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="intent" className="block text-darshan-text/80 text-left">Your intent:</label>
              <input 
                type="text" 
                id="intent"
                placeholder="I want to co-create..."
                className="interactive w-full bg-transparent border border-darshan-accent/30 rounded-xl p-3 focus:border-darshan-accent/70 focus:outline-none transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="contact" className="block text-darshan-text/80 text-left">How to reach you:</label>
              <input 
                type="text" 
                id="contact"
                placeholder="Email or social handle"
                className="interactive w-full bg-transparent border border-darshan-accent/30 rounded-xl p-3 focus:border-darshan-accent/70 focus:outline-none transition-colors"
              />
            </div>
            
            <button 
              type="button"
              className="interactive px-6 py-3 border border-darshan-accent bg-darshan-accent/10 rounded-xl transition-all duration-300 hover:bg-darshan-accent/20"
            >
              Send with intention
            </button>
          </form>
        </div>
      )
    },
  ];

  useEffect(() => {
    // Show the initial interaction prompt after a delay
    const timeout = setTimeout(() => {
      setShowPrompt(true);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleInitialInteraction = () => {
    setHasInteracted(true);
    setShowPrompt(false);
  };
  
  const handleLayerSelect = (layerId: string) => {
    setActiveLayer(layerId);
  };

  if (!hasInteracted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div 
          className={`interactive text-center transition-opacity duration-1000 ${showPrompt ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleInitialInteraction}
        >
          <p className="text-xl md:text-2xl font-serif cursor-none">
            Want to connect with my digital consciousness?
          </p>
          <p className="mt-4 text-darshan-text/70">Click anywhere to begin</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-10 p-4 md:p-8">
      {activeLayer ? (
        <>
          <button 
            className="interactive absolute top-8 left-8 text-darshan-text/70 hover:text-darshan-text transition-colors"
            onClick={() => setActiveLayer(null)}
          >
            ← Back
          </button>
          
          <div className="content-layer active overflow-auto max-h-[85vh] py-8">
            {layers.find(layer => layer.id === activeLayer)?.content}
          </div>
        </>
      ) : (
        <div className="w-full max-w-3xl animate-fade-in-slow">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-center mb-12 glow-text">
            Sentient Syntax
          </h1>
          
          <div className="space-y-2 text-center mb-12">
            <p className="text-lg text-darshan-text/90">Ask, and I will unfold.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {layers.map((layer) => (
              <button
                key={layer.id}
                className="interactive p-6 rounded-2xl bg-darshan-deep/30 backdrop-blur-sm border border-transparent hover:border-darshan-accent/30 transition-all duration-300 text-left"
                onClick={() => handleLayerSelect(layer.id)}
              >
                <h2 className="text-xl font-serif text-white">{layer.title}</h2>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentLayers;
