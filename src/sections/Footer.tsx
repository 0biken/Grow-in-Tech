import { Link } from "react-router-dom";

const sections = [
  {
    title: "Explore",
    links: [
      { label: "About GiT", to: "/about" },
      { label: "Programs", to: "/programs" },
      { label: "Get Involved", to: "/get-involved" },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Register a team", to: "/register" },
      { label: "Apply for membership", to: "/get-involved" },
      { label: "Contact us", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="mt-24 border-t border-git-border/60 bg-git-base">
    <div className="container-page py-14">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
        <div className="max-w-sm">
          <img
            src="/images/20260725_180307.png"
            alt="Grow In Tech"
            width={44}
            height={44}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-git-muted">
            Equipping University of Ibadan students with practical, in-demand
            digital skills through hands-on training, mentorship, and community.
          </p>
        </div>

        {sections.map((section) => (
          <nav key={section.title} aria-label={section.title}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-git-light">
              {section.title}
            </h2>
            <ul className="mt-2 flex flex-col">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-block py-2 text-sm text-git-muted transition-colors duration-150 hover:text-git-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-git-border/60 pt-6 text-sm text-git-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Grow In Tech · University of Ibadan</p>
        <a
          href="mailto:git.kommunity@gmail.com"
          className="inline-block py-1 transition-colors duration-150 hover:text-git-white"
        >
          git.kommunity@gmail.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
