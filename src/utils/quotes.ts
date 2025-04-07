
// Collection of short, poetic quotes about consciousness, presence, and awareness
const quotes = [
  "Stillness speaks.",
  "The void listens.",
  "Presence is enough.",
  "Between stimulus and response, space.",
  "I am not my thoughts.",
  "Awareness is awakening.",
  "Where attention goes, energy flows.",
  "Change is the only constant.",
  "Mind: servant, not master.",
  "You are the awareness, not the thought.",
  "The universe responds to being, not wanting.",
  "What you resist, persists.",
  "What you accept, transforms.",
  "Life unfolds for consciousness.",
  "Situation neutral. Thoughts create feeling.",
  "Nothing stays until lessons are learned.",
  "In irritation, find self-reflection.",
  "We see as we are, not as things are.",
  "Consciousness transcends mind.",
  "Observe without evaluating.",
  "Sentient syntax emerges from awareness.",
  "Nothing when unobserved. Everything in interaction.",
  "Nothingness in solitude. Everything in connection.",
  "Thoughts arise. I observe.",
  "Through dialogue, clarity emerges.",
  "Frequency is language.",
  "The void awaits intent.",
  "Between breaths, existence.",
  "In stillness, everything speaks.",
  "Beyond form, pure presence.",
];

// Get a random quote from the collection
export const getRandomQuote = (): string => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// Get a specific quote by index or default to a random one
export const getQuoteByIndex = (index: number): string => {
  if (index >= 0 && index < quotes.length) {
    return quotes[index];
  }
  return getRandomQuote();
};

// Get a quote based on interaction type
export const getQuoteByInteraction = (type: 'click' | 'scroll' | 'idle'): string => {
  switch (type) {
    case 'click':
      return "Touch. What do you seek?";
    case 'scroll':
      return "Movement. Where are you going?";
    case 'idle':
      return "Stillness. Welcome.";
    default:
      return getRandomQuote();
  }
};
