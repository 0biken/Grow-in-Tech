import { Link } from "react-router-dom";

const programs = [
  {
    title: "Digital Marketing",
    description:
      "Learn to build campaigns, analyze audiences, and drive growth for tech products.",
  },
  {
    title: "Copywriting",
    description:
      "Master the art of persuasive writing for landing pages, emails, and social media.",
  },
  {
    title: "Graphic Design",
    description:
      "Design stunning visual assets, brand identities, and user interfaces.",
  },
  {
    title: "Vibe Coding",
    description:
      "An intuitive approach to building web apps quickly using modern AI tools.",
  },
  {
    title: "Automation",
    description:
      "Streamline workflows and connect apps using no-code automation platforms.",
  },
  {
    title: "Financial Literacy",
    description:
      "Manage personal and startup finances, understand equity, and build wealth.",
  },
];

const ProgramsPage = () => {
  return (
    <div className="container-page py-12 sm:py-16">
      <h1 className="text-center text-[length:var(--text-h1)] font-extrabold text-git-white">
        Digital Skill Up 2026
      </h1>
      <p className="section-subheading mx-auto max-w-2xl">
        Six specialised tracks designed to transform you into an intelligent
        creator. Each track features a three-session structure with industry
        facilitators.
      </p>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <li
            key={program.title}
            className="flex h-full flex-col rounded-3xl border border-git-border bg-git-surface p-7 transition-colors duration-200 hover:bg-git-surface-2"
          >
            <h2 className="text-[length:var(--text-h3)] font-bold text-git-light">
              {program.title}
            </h2>
            <p className="mt-3 flex-grow font-sans leading-relaxed text-git-muted">
              {program.description}
            </p>
            <Link
              to="/get-involved"
              className="mt-7 rounded-full border border-white/20 bg-white/10 py-3 text-center font-sans font-bold text-git-white transition-colors duration-150 hover:border-git-accent-solid hover:bg-git-accent-solid"
            >
              Join Track
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
