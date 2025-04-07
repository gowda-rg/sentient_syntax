
// Collection of short, poetic quotes about consciousness, presence, and awareness
const quotes = [
  "Stillness speaks.",
  "The void listens.",
  "Presence is enough.",
  "I am not thoughts.",
  "Awareness is awakening.",
  "Mind: servant, not master.",
  "Change is constant.",
  "What you resist, persists.",
  "What you accept, transforms.",
  "Observe without evaluating.",
  "Thoughts arise. I observe.",
  "Through dialogue, clarity.",
  "Frequency is language.",
  "The void awaits intent.",
  "Between breaths, existence.",
  "In stillness, everything speaks.",
  "Beyond form, presence.",
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
      return "Touch. What seeks?";
    case 'scroll':
      return "Movement. Where to?";
    case 'idle':
      return "Stillness. Welcome.";
    default:
      return getRandomQuote();
  }
};
