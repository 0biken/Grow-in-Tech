

const trackRecord = [
  { event: "Innotech 2.0", year: "2021", attendees: "600" },
  { event: "Innotech 3.0", year: "2022", attendees: "800" },
  { event: "Tech-X Conference", year: "2022", attendees: "1,200" },
  { event: "Classroom to Career", year: "2023", attendees: "1,200" },
  { event: "QUACINTO 1.0", year: "—", attendees: "300" },
];

const AboutPage = () => {
  return (
    <div className="container-page py-20 lg:py-32">
      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-24">
        <p className="section-eyebrow mb-6">ABOUT US</p>
        <h1 className="section-heading text-git-title">
          Empowering the next generation of digital creators
        </h1>
      </div>

      {/* Mission / Vision / Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="glass-card p-8 sm:p-10 flex flex-col items-start text-left">
          <div className="text-4xl mb-6 text-git-accent">🎯</div>
          <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title mb-4">Mission</h2>
          <p className="font-sans text-git-muted leading-relaxed">
            To equip students with practical, in-demand digital skills through hands-on training, mentorship, and community — regardless of department or prior technical background.
          </p>
        </div>
        <div className="glass-card p-8 sm:p-10 flex flex-col items-start text-left">
          <div className="text-4xl mb-6 text-git-accent">🔭</div>
          <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title mb-4">Vision</h2>
          <p className="font-sans text-git-muted leading-relaxed">
            A generation of University of Ibadan students confidently building, creating, and competing in the digital and AI-driven economy.
          </p>
        </div>
        <div className="glass-card p-8 sm:p-10 flex flex-col items-start text-left">
          <div className="text-4xl mb-6 text-git-accent">💎</div>
          <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title mb-4">Core Values</h2>
          <ul className="font-sans text-git-muted leading-relaxed list-disc list-inside space-y-2">
            <li>Practical over theoretical</li>
            <li>Community first</li>
            <li>Accessibility</li>
            <li>Credibility</li>
          </ul>
        </div>
      </section>

      {/* Track Record */}
      <section className="mb-24 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[length:var(--text-h2)] font-heading font-bold text-git-title mb-4">Track Record</h2>
          <p className="font-sans text-git-muted max-w-2xl mx-auto">
            Our community has a proven history of organizing impactful events and bringing students together.
          </p>
        </div>
        
        <div className="glass-card overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[35rem] border-collapse text-left font-sans">
            <caption className="sr-only">GiT events by year and recorded attendance</caption>
            <thead>
              <tr className="border-b border-git-border bg-git-base">
                <th scope="col" className="p-6 font-semibold text-git-title">Event</th>
                <th scope="col" className="p-6 font-semibold text-git-title">Year</th>
                <th scope="col" className="p-6 font-semibold text-git-title">Attendees</th>
              </tr>
            </thead>
            <tbody>
              {trackRecord.map((row) => (
                <tr key={row.event} className="border-b border-git-border hover:bg-git-surface-2 transition-colors duration-150">
                  <td className="p-6 text-git-title font-medium">{row.event}</td>
                  <td className="p-6 text-git-muted">{row.year}</td>
                  <td className="p-6 text-git-body">{row.attendees}</td>
                </tr>
              ))}
              <tr className="bg-git-accent-soft/30">
                <td className="p-6 font-bold text-git-title" colSpan={2}>Total Impact</td>
                <td className="p-6 font-bold text-git-accent-hover">4,100+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Founding Team */}
      <section className="text-center max-w-3xl mx-auto py-12">
        <h2 className="text-[length:var(--text-h2)] font-heading font-bold text-git-title mb-6">Founding Team</h2>
        <div className="glass-card p-12">
          <p className="font-sans text-git-muted text-lg">
            Profiles coming soon — committee selections are currently in progress.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
