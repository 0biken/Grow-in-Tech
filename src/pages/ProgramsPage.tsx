import { useRef } from "react";
import { ArrowDown } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { DSU_2026, tracks } from "../content/digitalSkillUp";
import { KOMMUNITY_URL } from "../content/site";
import { useReveal } from "../hooks/useReveal";

const byTitle = Object.fromEntries(tracks.map((track) => [track.title, track]));

/** Hypothetical scenarios illustrating each skill; not accounts of real GiT members. */
const caseStudies = [
  {
    title: "Digital Marketing",
    advantage: "Audience & Zero-Cost Distribution",
    caseStudy:
      "A campus founder developed a student marketplace app but had zero users. By applying organic content funnels, campus-specific micro-influencer strategies, and algorithmic TikTok hooks, she onboarded 2,400 active UI students in 3 weeks with zero advertising budget.",
    tip: "Distribution eats product for breakfast. Even the most brilliant software dies in obscurity without a deliberate marketing engine.",
    keyMetric: "0 Budget → 2,400+ Active Users"
  },
  {
    title: "Copywriting",
    advantage: "High-Ticket Conversion & Persuasion",
    caseStudy:
      "A student freelancer was pitching international clients for technical writing and getting ignored with generic proposals. After rewriting his cold outreach and portfolio with benefit-driven hooks and objection-handling copy, his response rate jumped from 3% to 28%, landing him two $800/mo retainer clients.",
    tip: "Features tell, benefits sell. People don't buy your service; they buy the transformation and certainty your words deliver.",
    keyMetric: "3% → 28% Cold Pitch Response Rate"
  },
  {
    title: "Graphics Design",
    advantage: "Instant Trust & Perceived Value",
    caseStudy:
      "A group of engineering students built an AI tool for exam prep but their MVP looked unpolished and untrustworthy. A design overhaul—clean typography, cohesive color palette, and sleek mockups—helped them win a $1,500 hackathon grant because judges immediately trusted their execution quality.",
    tip: "Users judge your credibility in the first 50 milliseconds. Exceptional design is how you signal excellence before a user reads a single line of text.",
    keyMetric: "Instant Credibility → $1,500 Grant Win"
  },
  {
    title: "Building with AI",
    advantage: "Speed of Execution with AI",
    caseStudy:
      "A non-technical economics major had an idea for an automated CGPA calculator and academic progress tracker for UI students. Instead of waiting 6 months to learn syntax from scratch, he used AI coding assistants and natural language prompting to ship a live, responsive web app in 36 hours.",
    tip: "You no longer need a 4-year computer science degree to ship software. Master problem decomposition and let AI act as your junior engineering team.",
    keyMetric: "Concept to Live Web App in 36 Hours"
  },
  {
    title: "Automation",
    advantage: "10x Output & Time Multiplication",
    caseStudy:
      "A student society executive spent 5 hours every Monday manually checking payment receipts, updating spreadsheets, and sending confirmation emails. By building a 3-step automation workflow linking Google Forms, webhooks, and email triggers, registrations are verified in 2 seconds with zero human error.",
    tip: "Never do manually what code can do on autopilot. If you repeat a digital task more than twice, automate it immediately.",
    keyMetric: "5 Hours Weekly Chores → 2 Seconds Auto"
  },
  {
    title: "Financial Literacy",
    advantage: "Wealth Preservation & Equity Protection",
    caseStudy:
      "A student who started earning remote freelance income in dollars quickly fell into panic when tax and currency fluctuation ate into his earnings. Financial literacy training taught him how to hedge currency risk, budget for operational runway, and retain equity when approached by outside investors.",
    tip: "Revenue is vanity, profit is sanity, but cash flow is reality. Earning money is half the battle; knowing how to keep, protect, and multiply it guarantees independence.",
    keyMetric: "Avoided Bad Equity Dilution & Currency Losses"
  },
];

const stack = [
  { skill: "Building with AI", why: "To build fast" },
  { skill: "Graphics", why: "To look premium" },
  { skill: "Copywriting", why: "To persuade" },
  { skill: "Marketing", why: "To reach crowds" },
  { skill: "Automation", why: "To scale" },
  { skill: "Finance", why: "To keep wealth" },
];

const ProgramsPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <div ref={ref} className="bg-git-base">
      {/* Editorial split */}
      <section className="container-page pb-24 pt-14 md:pb-36 md:pt-20" aria-labelledby="programs-heading">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <p className="kicker mb-6">Wrapped · {DSU_2026.dates}</p>
            <h1 id="programs-heading" className="text-[length:var(--text-display)] leading-[1.0]">
              {DSU_2026.name} has wrapped.
            </h1>
            <p className="mt-6 font-heading text-[length:var(--text-h3)] font-bold italic leading-snug tracking-[-0.02em] text-git-link">
              {DSU_2026.theme} — {DSU_2026.tagline}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-git-muted">
              {DSU_2026.hosts} ran six hands-on masterclass tracks, {DSU_2026.format.toLowerCase()}, to help students move
              from consuming technology to creating with it. Here is what we covered, and why it matters.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={KOMMUNITY_URL}>Hear about the next edition</CtaLink>
              <CtaLink to="#why-tech-skills" variant="ghost" icon={ArrowDown}>Why these skills</CtaLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="bezel" data-scale-in>
              <div className="bezel-core aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Photo slot="panel" width={1100} sizes="(min-width: 1024px) 45vw, 100vw" className="absolute inset-0" alt="A panel discussion in progress" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks: 3 x 2 on lg, 2 x 3 on sm, so no empty cells. */}
      <section id="tracks" className="container-page pb-24 md:pb-36" aria-labelledby="tracks-heading">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="kicker mb-5">What we covered</p>
            <h2 id="tracks-heading" className="section-heading">The six masterclass tracks</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-git-muted">Three practical sessions per track, each built around real, hands-on work.</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {tracks.map((track, i) => (
            <li key={track.title} className="bezel">
              <article className="bezel-core flex flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-git-surface-2 text-git-link">
                    <Icon icon={track.icon} size={24} weight="light" />
                  </span>
                  <span className="font-heading text-sm font-bold italic text-git-muted" aria-hidden="true">0{i + 1}</span>
                </div>
                <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-git-link">{track.category}</p>
                <h3 className="mt-2 text-[length:var(--text-h3)] leading-tight">{track.title}</h3>
                <p className="mt-3 flex-grow text-[0.95rem] leading-relaxed text-git-muted">{track.description}</p>
                <p className="mt-6 border-t border-git-border pt-5 text-sm leading-relaxed text-git-body">
                  <span className="font-semibold text-git-title">Takeaway: </span>{track.takeaway}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      {/* Why these skills: sticky split */}
      <section id="why-tech-skills" className="chapter bg-git-surface-2/60" aria-labelledby="why-heading">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32" data-reveal>
              <p className="kicker mb-5">The intelligent creator advantage</p>
              <h2 id="why-heading" className="section-heading max-w-md">Why learn tech skills?</h2>
              <p className="section-subheading max-w-md">
                A certificate says what you studied. Skills prove what you can build, communicate, and deliver. These
                illustrative scenarios show what each track makes possible.
              </p>
            </div>
          </div>

          <ol className="flex flex-col gap-4 lg:col-span-7">
            {caseStudies.map((item) => (
              <li key={item.title} className="bezel" data-reveal>
                <article className="bezel-core p-7 sm:p-9">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-git-surface-2 text-git-link">
                      <Icon icon={byTitle[item.title].icon} size={22} weight="light" />
                    </span>
                    <div>
                      <h3 className="text-xl leading-tight">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-git-link">{item.advantage}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-git-muted">Illustrative scenario</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-git-body">{item.caseStudy}</p>
                  <p className="mt-5 inline-flex rounded-full bg-git-surface-2 px-4 py-1.5 text-sm font-semibold text-git-title">{item.keyMetric}</p>
                  <blockquote className="mt-6 border-l-2 border-git-accent pl-4 text-[0.95rem] italic leading-relaxed text-git-muted">
                    {item.tip}
                  </blockquote>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skill stacking */}
      <section className="px-2 pt-24 sm:px-3 md:pt-36" aria-labelledby="formula-heading">
        <div className="dark-section relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(160deg,#0A4BA7_0%,#010552_70%)] py-20 md:rounded-[2.25rem] md:py-28">
          <div className="container-page relative text-center" data-reveal>
            <p className="kicker mb-5 justify-center">The multiplier effect</p>
            <h2 id="formula-heading" className="mx-auto max-w-4xl text-[length:var(--text-display)] leading-[1.02] text-white">1 + 1 = 10</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-git-light">
              Skills compound. The most valuable creators stack them to build advantages nobody else can copy.
            </p>
            <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {stack.map((item) => (
                <li key={item.skill} className="rounded-2xl border border-white/15 bg-white/[0.06] px-3 py-5">
                  <p className="text-sm font-semibold text-white">{item.skill}</p>
                  <p className="mt-1 text-sm text-git-ice">{item.why}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CtaLink href={KOMMUNITY_URL} variant="light">Join the Kommunity</CtaLink>
              <CtaLink to="/get-involved" variant="ghost-dark" icon={null}>Get involved</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
