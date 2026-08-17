const values = [
  "Practical over theoretical",
  "Community first",
  "Accessibility",
  "Credibility",
];

const trackRecord = [
  { event: "Innotech 2.0", year: "2021", attendees: "600" },
  { event: "Innotech 3.0", year: "2022", attendees: "800" },
  { event: "Tech-X Conference", year: "2022", attendees: "1,200" },
  { event: "Classroom to Career", year: "2023", attendees: "1,200" },
  { event: "QUACINTO 1.0", year: "—", attendees: "300" },
];

const AboutPage = () => {
  return (
    <div className="container-page max-w-4xl py-12 sm:py-16">
      <h1 className="text-center text-[length:var(--text-h1)] font-extrabold text-git-white">
        About GiT
      </h1>

      <section className="mt-14">
        <h2 className="text-[length:var(--text-h3)] font-bold text-git-accent">
          Mission
        </h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-git-muted">
          To equip students with practical, in-demand digital skills through
          hands-on training, mentorship, and community — regardless of
          department or prior technical background.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-[length:var(--text-h3)] font-bold text-git-accent">
          Vision
        </h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-git-muted">
          A generation of University of Ibadan students confidently building,
          creating, and competing in the digital and AI-driven economy.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-[length:var(--text-h3)] font-bold text-git-accent">
          Core Values
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {values.map((value) => (
            <li
              key={value}
              className="rounded-full border border-git-border bg-git-surface px-5 py-2.5 font-sans text-sm font-medium text-git-light"
            >
              {value}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-[length:var(--text-h3)] font-bold text-git-accent">
          Track Record
        </h2>
        {/* Wide tables scroll inside their own container rather than forcing
            the page body to scroll horizontally on phones. */}
        <div className="mt-5 overflow-x-auto rounded-2xl border border-git-border bg-git-surface">
          <table className="w-full min-w-[30rem] border-collapse text-left font-sans">
            <caption className="sr-only">
              GiT events by year and recorded attendance
            </caption>
            <thead>
              <tr className="bg-git-surface-2">
                <th scope="col" className="border-b border-git-border p-4 font-bold text-git-white">
                  Event
                </th>
                <th scope="col" className="border-b border-git-border p-4 font-bold text-git-white">
                  Year
                </th>
                <th scope="col" className="border-b border-git-border p-4 font-bold text-git-white">
                  Attendees
                </th>
              </tr>
            </thead>
            <tbody>
              {trackRecord.map((row) => (
                <tr key={row.event} className="border-b border-git-border/50">
                  <td className="p-4 text-git-white">{row.event}</td>
                  <td className="p-4 text-git-muted">{row.year}</td>
                  <td className="p-4 text-git-light">{row.attendees}</td>
                </tr>
              ))}
              <tr className="bg-git-accent/10">
                <td className="p-4 font-bold text-git-white" colSpan={2}>
                  Total Impact
                </td>
                <td className="p-4 font-bold text-git-light">4,100+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-[length:var(--text-h3)] font-bold text-git-accent">
          Founding Team
        </h2>
        <p className="mt-4 font-sans text-git-muted">
          Profiles coming soon — committee selections are in progress.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
