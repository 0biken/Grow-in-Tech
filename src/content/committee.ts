import { CONTACT_EMAIL } from "./site";

/**
 * Founding committee call.
 *
 * DRAFT: role summaries, responsibilities, and expectations below are
 * starting points for the GiT lead to confirm or rewrite before launch.
 */

/** Set to a form URL (e.g. Google Forms) to replace the email application. */
export const COMMITTEE_FORM_URL: string | null = null;

export const committeeOpen = true;

export type Role = {
  title: string;
  summary: string;
  responsibilities: string[];
};

export const roles: Role[] = [
  {
    title: "Lead",
    summary: "Sets direction and keeps GiT accountable to its mission.",
    responsibilities: ["Chair committee meetings", "Represent GiT to partners and faculty", "Own the yearly plan"],
  },
  {
    title: "Co-Lead",
    summary: "Partners with the Lead and keeps day-to-day work moving.",
    responsibilities: ["Coordinate the other leads", "Track deadlines across projects", "Step in for the Lead"],
  },
  {
    title: "General Secretary",
    summary: "Keeps the records, minutes, and communication in order.",
    responsibilities: ["Take and share minutes", "Manage official correspondence", "Keep member records"],
  },
  {
    title: "Technical Lead",
    summary: "Owns GiT's technical work, from this website to build nights.",
    responsibilities: ["Maintain the website and tools", "Run hackathons and build nights", "Guide open source projects"],
  },
  {
    title: "PR/Marketing Lead",
    summary: "Tells GiT's story and grows the kommunity.",
    responsibilities: ["Run social channels", "Plan event publicity", "Shape GiT's public voice"],
  },
  {
    title: "Programmes Lead",
    summary: "Designs the learning: tracks, workshops, and sessions.",
    responsibilities: ["Plan programme calendars", "Recruit and brief facilitators", "Gather learner feedback"],
  },
  {
    title: "Design Lead",
    summary: "Keeps everything GiT makes looking and feeling like GiT.",
    responsibilities: ["Create event and social graphics", "Look after the brand guide", "Support teams with design"],
  },
  {
    title: "Finance Lead",
    summary: "Manages GiT's budget, sponsorships, and spending.",
    responsibilities: ["Keep the budget and accounts", "Track sponsorship commitments", "Report on spending"],
  },
  {
    title: "Community Manager",
    summary: "Looks after members so everyone feels they belong.",
    responsibilities: ["Welcome and support new members", "Moderate kommunity spaces", "Organise member meetups"],
  },
];

export const expectations = [
  "A current University of Ibadan student, from any faculty or level",
  "Able to commit a few hours each week through the founding year",
  "Comfortable working in a team and showing up for meetings",
  "No prior technical experience required for non-technical roles",
];

export const applySteps = [
  { title: "Pick a role", body: "Choose the role that fits you best. You can name a second choice." },
  { title: "Send your application", body: "Tell us your name, department, level, the role, why you want it, and any links to your work." },
  { title: "Have a short chat", body: "Shortlisted applicants meet the team for a quick conversation." },
];

/** Where an application for `role` goes: the form if set, otherwise a prefilled email. */
export function applyHref(role?: string): string {
  if (COMMITTEE_FORM_URL) return COMMITTEE_FORM_URL;
  const subject = encodeURIComponent(`Founding committee application${role ? `: ${role}` : ""}`);
  const body = encodeURIComponent(
    [
      "Name:",
      "Department and level:",
      `Role${role ? "" : " (and a second choice, if any)"}: ${role ?? ""}`,
      "Why this role:",
      "Links to your work (optional):",
    ].join("\n")
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
