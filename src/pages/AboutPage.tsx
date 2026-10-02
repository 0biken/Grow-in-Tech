import { useRef } from "react";
import { Target, Eye, Heart } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { useReveal } from "../hooks/useReveal";

const trackRecord = [
  { event: "Innotech 2.0", year: "2021", attendees: "600" },
  { event: "Innotech 3.0", year: "2022", attendees: "800" },
  { event: "Tech-X Conference", year: "2022", attendees: "1,200" },
  { event: "Classroom to Career", year: "2023", attendees: "1,200" },
  { event: "QUACINTO 1.0", year: "—", attendees: "300" },
];

const pillars = [
  {
    title: "Mission",
    icon: Target,
    body: "To equip students with practical, in-demand digital skills through hands-on training, mentorship, and community — regardless of department or prior technical background.",
  },
  {
    title: "Vision",
    icon: Eye,
    body: "A generation of University of Ibadan students confidently building, creating, and competing in the digital and AI-driven economy.",
  },
];

const values = ["Practical over theoretical", "Community first", "Accessibility", "Credibility"];

const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <div ref={ref}>
      {/* Opening */}
      <section className="container-page pb-20 pt-14 md:pb-28 md:pt-20" aria-labelledby="about-heading">
        <div className="max-w-5xl" data-reveal>
          <p className="kicker mb-6">Grow In Tech, University of Ibadan</p>
          <h1 id="about-heading" className="text-[length:var(--text-display)] leading-[1.0]">
            Empowering the next generation of digital creators.
          </h1>
        </div>
      </section>

      {/* Photo band: 7 + 5 columns */}
      <section className="container-page pb-24 md:pb-36" aria-label="Kommunity photos">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="bezel md:col-span-7" data-scale-in>
            <div className="bezel-core aspect-[4/3] md:aspect-auto md:h-full md:min-h-[26rem]">
              <Photo slot="crowd" width={1100} sizes="(min-width: 768px) 58vw, 100vw" className="absolute inset-0" alt="A group of friends laughing together" />
            </div>
          </div>
          <div className="bezel md:col-span-5" data-scale-in>
            <div className="bezel-core aspect-[4/3] md:aspect-[4/5]">
              <Photo slot="together" width={800} sizes="(min-width: 768px) 40vw, 100vw" className="absolute inset-0" tone="mono" alt="Three friends smiling together" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values — 2 + 2 + 2 of 6 columns on lg. */}
      <section className="container-page pb-24 md:pb-36" aria-label="What we stand for">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
          {pillars.map((pillar) => (
            <article key={pillar.title} className="bezel">
              <div className="bezel-core p-8 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-git-surface-2 text-git-link">
                  <Icon icon={pillar.icon} size={24} weight="light" />
                </span>
                <h2 className="mt-8 text-[length:var(--text-h3)]">{pillar.title}</h2>
                <p className="mt-4 leading-relaxed text-git-muted">{pillar.body}</p>
              </div>
            </article>
          ))}
          <article className="bezel md:col-span-2 lg:col-span-1">
            <div className="bezel-core dark-section bg-git-dark p-8 sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-git-ice">
                <Icon icon={Heart} size={24} weight="light" />
              </span>
              <h2 className="mt-8 text-[length:var(--text-h3)]">Core values</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3 text-git-light">
                    <span className="h-1.5 w-1.5 rotate-45 bg-git-ice" aria-hidden="true" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Track record */}
      <section className="chapter bg-git-surface-2/60" aria-labelledby="record-heading">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" data-reveal>
            <p className="kicker mb-5">Track record</p>
            <h2 id="record-heading" className="section-heading">Rooms we have filled.</h2>
            <p className="section-subheading">
              A proven history of organising impactful events and bringing students together.
            </p>
          </div>

          <div className="bezel lg:col-span-8" data-reveal>
            <div className="bezel-core overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <caption className="sr-only">GiT events by year and recorded attendance</caption>
                <thead>
                  <tr className="border-b border-git-border text-xs uppercase tracking-[0.14em] text-git-muted">
                    <th scope="col" className="px-7 py-5 font-medium">Event</th>
                    <th scope="col" className="px-7 py-5 font-medium">Year</th>
                    <th scope="col" className="px-7 py-5 text-right font-medium">Attendees</th>
                  </tr>
                </thead>
                <tbody>
                  {trackRecord.map((row) => (
                    <tr key={row.event} className="border-b border-git-border transition-colors duration-300 hover:bg-git-surface-2">
                      <th scope="row" className="px-7 py-5 font-heading text-lg font-bold italic text-git-title">{row.event}</th>
                      <td className="px-7 py-5 text-git-muted">{row.year}</td>
                      <td className="px-7 py-5 text-right tabular-nums text-git-body">{row.attendees}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" colSpan={2} className="px-7 py-6 font-semibold text-git-title">Total impact</th>
                    <td className="px-7 py-6 text-right font-heading text-2xl font-bold italic tabular-nums text-git-link">4,100+</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Founding team */}
      <section className="chapter" aria-labelledby="team-heading">
        <div className="container-page">
          <div className="bezel mx-auto max-w-4xl" data-reveal>
            <div className="bezel-core flex flex-col items-start gap-8 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 id="team-heading" className="text-[length:var(--text-h2)]">Founding team</h2>
                <p className="mt-3 max-w-md text-git-muted">
                  Profiles coming soon — committee selections are currently in progress.
                </p>
              </div>
              <CtaLink to="/get-involved" variant="ghost" className="shrink-0">See open roles</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
