import React from "react";

const programs = [
  {
    title: "Digital Marketing",
    description: "Learn to build campaigns, analyze audiences, and drive growth for tech products.",
    color: "bg-git-accent",
    link: "https://forms.gle/79hqwjfPJrNXRRyf9"
  },
  {
    title: "Copywriting",
    description: "Master the art of persuasive writing for landing pages, emails, and social media.",
    color: "bg-git-sage",
    link: "https://forms.gle/RNXKeDCPnt2iS9no8"
  },
  {
    title: "Graphic Design",
    description: "Design stunning visual assets, brand identities, and user interfaces.",
    color: "bg-git-ocean",
    link: "https://forms.gle/dHryemBXjvbUaX4h6"
  },
  {
    title: "Vibe Coding",
    description: "An intuitive approach to building web apps quickly using modern AI tools.",
    color: "bg-git-forest",
    link: "https://forms.gle/zcZ39HQyNMaP65MW6"
  },
  {
    title: "Automation",
    description: "Streamline workflows and connect apps using no-code automation platforms.",
    color: "bg-git-yellow",
    link: "https://forms.gle/8QgzFQ7Pd8F7Ezhe9"
  },
  {
    title: "Financial Literacy",
    description: "Manage personal and startup finances, understand equity, and build wealth.",
    color: "bg-[#7C3AED]",
    link: "https://forms.gle/sACU5y985mM597Dt6"
  },
];

const ProgramsPage = () => {
  return (
    <div className="container-page py-20 lg:py-32">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <p className="section-eyebrow mb-6">PROGRAMS</p>
        <h1 className="section-heading text-git-title mb-8">
          Digital Skill Up 2026
        </h1>
        <p className="section-subheading mx-auto max-w-2xl">
          Six specialised tracks designed to transform you into an intelligent
          creator. Each track features a three-session structure with industry
          facilitators.
        </p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <li
            key={program.title}
            className="flex flex-col relative overflow-hidden glass-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${program.color}`} />
            
            <h2 className="mt-4 font-heading text-xl font-bold text-git-title -tracking-[0.03em]">
              {program.title}
            </h2>
            <p className="mt-4 flex-grow font-sans text-git-muted leading-relaxed">
              {program.description}
            </p>
            <a
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 font-sans font-semibold text-git-accent hover:text-git-accent-hover transition-colors inline-flex items-center gap-2"
            >
              Register Now <span aria-hidden="true">&rarr;</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
