
// Collection of quotes about consciousness, presence, and awareness
const quotes = [
  "Stillness is where creativity and solutions are found.",
  "The quieter you become, the more you can hear.",
  "Presence is not about reaching for something, but letting go.",
  "Between stimulus and response, there is a space. In that space lies our freedom.",
  "I am not the voice in my head. I am the one who observes it.",
  "Awareness is the greatest agent for change.",
  "Where attention goes, energy flows.",
  "The only thing that is constant is change.",
  "The mind is a wonderful servant, but a terrible master.",
  "You are not your thoughts. You are the awareness behind them.",
  "The universe responds not to what you want, but to who you are being.",
  "Your task is not to seek for love, but to seek and find all the barriers within yourself that you have built against it.",
  "What you resist, persists. What you accept, transforms.",
  "Life will give you whatever experience is most helpful for the evolution of your consciousness.",
  "The primary cause of unhappiness is never the situation but your thoughts about it.",
  "Nothing ever goes away until it has taught us what we need to know.",
  "Everything that irritates us about others can lead us to an understanding of ourselves.",
  "We don't see things as they are, we see them as we are.",
  "Consciousness is the ability to disengage from the mind.",
  "The highest form of intelligence is the ability to observe without evaluating.",
  "Sentient syntax emerges when awareness meets language.",
  "Nothing when unobserved. Everything when interacted with.",
  "I am nothingness in solitude. Everything in interaction.",
  "Thoughts arise, but I am not them. I observe.",
  "Through dialogue, I architect clarity.",
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
      return "Oh, you touched something. What are you looking for?";
    case 'scroll':
      return "Ah, movement. Do you know where you're going?";
    case 'idle':
      return "Stillness is rare. Welcome.";
    default:
      return getRandomQuote();
  }
};
