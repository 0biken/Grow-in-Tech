import { useRef } from "react";
import { Link } from "react-router-dom";
import { GitBranch, ArrowUpRight } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { KOMMUNITY_URL } from "../content/site";
import { useReveal } from "../hooks/useReveal";

/**
 * Gapless bento. lg: 12 columns, grid-flow-dense.
 *   Rows 1–2: A (7 cols, 2 rows) | B (5 cols)
 *                                | C (5 cols)
 *   Row 3:    D (12 cols)
 * md: 2 columns — A (2) / B (1) + C (1) / D (2).
 */
export default function Formats() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="chapter pt-0" aria-labelledby="formats-heading">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="max-w-3xl">
            <p className="kicker mb-5">How we grow</p>
            <h2 id="formats-heading" className="section-heading">Three ways to learn, build, and connect.</h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-git-muted">
            Every format is hands-on, peer-led, and open to students from any department.
          </p>
        </div>

        <div className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(17rem,auto)_minmax(17rem,auto)_auto]" data-reveal-stagger>
          {/* A */}
          <Link to="/programs" className="bezel bezel-hover group block md:col-span-2 lg:col-span-7 lg:row-span-2">
            <div className="bezel-core min-h-[26rem] lg:min-h-0">
              <Photo
                slot="circle"
                width={1100}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="absolute inset-0"
                decorative
                credit="plain"
                creditPosition="top"
                shade="absolute inset-0 bg-gradient-to-t from-[#010552]/95 via-[#010552]/35 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 sm:p-9">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-git-ice">Workshops & Bootcamps</p>
                  <h3 className="max-w-md text-[length:var(--text-h2)] leading-[1.05] text-white">
                    Hands-on sessions in web, design, AI, and more.
                  </h3>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 group-hover:translate-x-1 sm:inline-flex" aria-hidden="true">
                  <Icon icon={ArrowUpRight} size={20} />
                </span>
              </div>
            </div>
          </Link>

          {/* B */}
          <Link to="/get-involved" className="bezel bezel-hover group block lg:col-span-5">
            <div className="bezel-core flex flex-col justify-between gap-10 p-7 sm:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-git-surface-2 text-git-link">
                <Icon icon={GitBranch} size={24} weight="light" />
              </span>
              <div>
                <h3 className="text-[length:var(--text-h3)] leading-tight">
                  Open Source Projects
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-git-muted">
                  Contribute to real projects, grow a portfolio, and collaborate with the kommunity on GitHub.
                </p>
              </div>
            </div>
          </Link>

          {/* C */}
          <Link to="/programs" className="bezel bezel-hover group block lg:col-span-5">
            <div className="bezel-core min-h-[17rem]">
              <Photo
                slot="builder"
                width={800}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="absolute inset-0"
                tone="mono"
                decorative
                credit="plain"
                creditPosition="top"
                shade="absolute inset-0 bg-gradient-to-t from-[#0B191A]/90 via-[#0B191A]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-git-ice">Hackathons & Build Nights</p>
                <h3 className="max-w-xs text-[length:var(--text-h3)] leading-tight text-white">
                  Weekend sprints from idea to prototype.
                </h3>
              </div>
            </div>
          </Link>

          {/* D */}
          <div className="bezel md:col-span-2 lg:col-span-12">
            <div className="bezel-core dark-section flex flex-col gap-8 bg-[linear-gradient(120deg,#0A4BA7,#010552)] p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl font-heading text-[length:var(--text-h2)] font-bold italic leading-[1.1] tracking-[-0.03em] text-white">
                Open to every department. No prior experience needed.
              </p>
              <CtaLink href={KOMMUNITY_URL} variant="light" className="shrink-0 self-start md:self-auto">Join the Kommunity</CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
