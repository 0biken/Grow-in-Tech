import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "@phosphor-icons/react";
import BrandLogo from "../components/BrandLogo";
import CtaLink from "../components/CtaLink";
import Photo from "../components/Photo";
import { Icon } from "../components/Icon";
import { CONTACT_EMAIL, KOMMUNITY_URL } from "../content/site";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About", to: "/about" },
      { label: "Programs", to: "/programs" },
      { label: "Events", to: "/events" },
      { label: "Digital Skill Up recap", to: "/programs#tracks" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Get Involved", to: "/get-involved" },
      { label: "Founding committee", to: "/get-involved#committee" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const linkClass = "text-sm text-git-dark-muted transition-colors duration-300 hover:text-git-white";

const Footer = () => {
  const scrollToTop = (event: MouseEvent<HTMLButtonElement>) => {
    const instant = event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heading = document.querySelector<HTMLElement>("main h1");
    heading?.setAttribute("tabindex", "-1");
    heading?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: instant ? "instant" : "smooth" });
  };

  return (
    <footer className="px-2 pb-2 pt-12 sm:px-3 sm:pb-3">
      <div className="dark-section overflow-hidden rounded-[1.5rem] bg-git-dark text-git-white md:rounded-[2.25rem]">
        {/* Closing call to action */}
        <div className="relative">
          <Photo
            slot="together"
            width={1600}
            tone="duotone"
            decorative
            className="absolute inset-0"
            shade="absolute inset-0 bg-gradient-to-b from-[#0B191A]/70 via-[#0B191A]/80 to-[#0B191A]"
          />
          <div className="container-page relative py-28 text-center md:py-40">
            <h2 className="mx-auto max-w-5xl text-[length:var(--text-display)] leading-[1.02] text-white">
              Let&apos;s build the future of campus tech.
            </h2>
            <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CtaLink href={KOMMUNITY_URL} variant="light">Join the Kommunity</CtaLink>
              <CtaLink to="/get-involved#committee" variant="ghost-dark" icon={null}>Help lead GiT</CtaLink>
            </div>
          </div>
        </div>

        <div className="container-page grid grid-cols-1 gap-12 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col items-start lg:col-span-5">
            <BrandLogo className="text-git-ice" labelled />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-git-dark-muted">
              Practical, in-demand digital skills through hands-on training, mentorship, and community — regardless of
              department or prior technical background.
            </p>
            <span className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-git-ice">University of Ibadan</span>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
              <h3 className="mb-5 font-sans text-xs font-medium uppercase not-italic tracking-[0.18em] text-git-light">{column.title}</h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}><Link to={link.to} className={linkClass}>{link.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="Follow" className="lg:col-span-3">
            <h3 className="mb-5 font-sans text-xs font-medium uppercase not-italic tracking-[0.18em] text-git-light">Follow</h3>
            <ul className="flex flex-col gap-3">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a></li>
              <li>
                <a href={KOMMUNITY_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  WhatsApp Kommunity<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container-page flex flex-col items-center justify-between gap-4 border-t border-white/10 pb-8 pt-6 sm:flex-row">
          <p className="text-sm text-git-dark-muted">© {new Date().getFullYear()} Grow In Tech · University of Ibadan</p>
          <button type="button" onClick={scrollToTop} className={`${linkClass} group inline-flex items-center gap-2`}>
            Back to top
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5" aria-hidden="true">
              <Icon icon={ArrowUp} size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
