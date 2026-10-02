/**
 * Every GiT event, in one place. Add new events here; the Events page sorts
 * and groups them. Attendance figures are the recorded numbers from the PRD
 * track record and should only change when the source records do.
 */
export type GitEvent = {
  name: string;
  /** Four-digit year, or null when the record does not say. */
  year: number | null;
  status: "upcoming" | "recent" | "archive";
  /** Human-readable date line. */
  when: string;
  format?: string;
  partner?: string;
  attendees?: number;
  summary?: string;
  /** Internal route for a detail or recap page. */
  to?: string;
};

export const events: GitEvent[] = [
  {
    name: "GiT Code & Culture Summit 2027",
    year: 2027,
    status: "upcoming",
    when: "2027 · Date to be announced",
    summary:
      "Programme, speakers, and partners are being finalised. The Kommunity hears about dates and registration first.",
  },
  {
    name: "Digital Skill Up 2026: The Intelligent Creator Workshop",
    year: 2026,
    status: "recent",
    when: "16–18 September 2026",
    format: "Online, free",
    partner: "JCIN UI",
    summary: "Six hands-on masterclass tracks in digital skills for the AI era, open to every department.",
    to: "/programs",
  },
  { name: "Classroom to Career", year: 2023, status: "archive", when: "2023", attendees: 1200 },
  { name: "Tech-X Conference", year: 2022, status: "archive", when: "2022", attendees: 1200 },
  { name: "Innotech 3.0", year: 2022, status: "archive", when: "2022", attendees: 800 },
  { name: "Innotech 2.0", year: 2021, status: "archive", when: "2021", attendees: 600 },
  { name: "QUACINTO 1.0", year: null, status: "archive", when: "Year not recorded", attendees: 300 },
];

/** Newest first; events without a recorded year go last. */
export const byNewest = (a: GitEvent, b: GitEvent) => (b.year ?? -Infinity) - (a.year ?? -Infinity);

export const archiveTotal = events.reduce((sum, event) => sum + (event.status === "archive" ? event.attendees ?? 0 : 0), 0);
