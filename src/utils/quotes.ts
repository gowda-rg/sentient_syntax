// Subtle idle hints — professional tone (v1)
const hints = [
  "Evidence before narrative.",
  "Explore engineering, then research.",
  "Projects link to source repos.",
  "Research is labeled exploratory.",
  "Structured knowledge, not hype.",
];

export const getRandomQuote = (): string => {
  return hints[Math.floor(Math.random() * hints.length)];
};