import { Megaphone, PencilCircle, Palette, Robot, Lightning, CurrencyDollar, type Icon } from "@phosphor-icons/react";

/** Digital Skill Up 2026 (JCIN UI × GiT) ran online, 16–18 September 2026. */
export const DSU_2026 = {
  name: "Digital Skill Up 2026",
  theme: "The Intelligent Creator Workshop",
  tagline: "Digital Skills for The AI Era.",
  dates: "16–18 September 2026",
  format: "Fully online and free",
  hosts: "JCIN UI × Grow In Tech",
};

export type Track = {
  title: string;
  icon: Icon;
  category: string;
  description: string;
  takeaway: string;
};

export const tracks: Track[] = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    category: "Distribution & Growth",
    description: "Audience acquisition, campaign analytics, social algorithms, and organic growth strategies for tech ventures and products.",
    takeaway: "Build distribution channels that reach real people without an ad budget.",
  },
  {
    title: "Copywriting",
    icon: PencilCircle,
    category: "Persuasion & Sales",
    description: "Psychological hooks, landing page storytelling, email marketing, and conversion copywriting.",
    takeaway: "Turn passive readers into buyers, community members, and backers.",
  },
  {
    title: "Graphics Design",
    icon: Palette,
    category: "Visual Identity & UI",
    description: "Visual systems, brand identities, pitch assets, and modern interface layouts using Figma and industry tools.",
    takeaway: "Signal credibility before anyone reads a word.",
  },
  {
    title: "Building with AI",
    icon: Robot,
    category: "AI & Rapid Prototyping",
    description: "Building and deploying web apps quickly with AI coding agents, natural language prompting, and modern frameworks.",
    takeaway: "Turn a software idea into something live, without waiting years to learn syntax.",
  },
  {
    title: "Automation",
    icon: Lightning,
    category: "Systems & Leverage",
    description: "Streamlining repetitive digital tasks, connecting apps with APIs, and no-code workflows that run on their own.",
    takeaway: "Hand the busywork to systems and spend your hours on what matters.",
  },
  {
    title: "Financial Literacy",
    icon: CurrencyDollar,
    category: "Wealth & Equity",
    description: "Personal and startup finance, cross-border freelance income, equity allocation, budgeting, and long-term compounding.",
    takeaway: "Keep what you earn and structure ownership wisely.",
  },
];
