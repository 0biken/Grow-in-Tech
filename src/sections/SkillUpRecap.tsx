import { useRef, useState } from "react";
import { Icon } from "../components/Icon";
import CtaLink from "../components/CtaLink";
import { DSU_2026, tracks } from "../content/digitalSkillUp";
import { KOMMUNITY_URL } from "../content/site";
import { useReveal } from "../hooks/useReveal";

/**
 * Recap of the (finished) flagship event. On large screens the six tracks form
 * a horizontal accordion; hover, focus, or tap opens a slice. Below lg they
 * stack as a plain list with everything visible.
 */
export default function SkillUpRecap() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useReveal(ref);

  return (
    <section ref={ref} className="px-2 sm:px-3" aria-labelledby="recap-heading">
      <div className="dark-section chapter relative overflow-hidden rounded-[1.5rem] bg-git-dark md:rounded-[2.25rem]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_0%,rgba(21,143,252,0.28),transparent_70%),radial-gradient(50%_60%_at_0%_100%,rgba(10,75,167,0.35),transparent_70%)]"
          aria-hidden="true"
        />
        <div className="container-page relative">
          <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
            <div className="lg:col-span-7">
              <p className="kicker mb-5">Wrapped · {DSU_2026.dates}</p>
              <h2 id="recap-heading" className="section-heading">
                {DSU_2026.name}: {DSU_2026.theme}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-git-dark-muted sm:text-lg">
                {DSU_2026.hosts} brought six practical tracks online for three days, free for every student. Thank you to
                every trainer and learner who showed up.
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-3 lg:h-[30rem] lg:flex-row" data-reveal-stagger>
            {tracks.map((track, i) => {
              const open = active === i;
              return (
                <li
                  key={track.title}
                  className={`bezel bezel-dark min-w-0 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "lg:grow-[4]" : "lg:grow"} lg:basis-0`}
                  onMouseEnter={() => setActive(i)}
                >
                  <div className="bezel-core">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="flex h-full w-full flex-col justify-between gap-8 p-6 text-left sm:p-7"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="font-heading text-sm font-bold italic text-git-ice">0{i + 1}</span>
                        <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${open ? "bg-git-ice text-git-dark" : "bg-white/10 text-git-ice"}`}>
                          <Icon icon={track.icon} size={22} weight="light" />
                        </span>
                      </span>

                      <span className="block">
                        <span className={`block font-heading text-2xl font-bold italic leading-tight tracking-[-0.02em] text-white lg:whitespace-nowrap ${open ? "" : "lg:[writing-mode:vertical-rl] lg:rotate-180"}`}>
                          {track.title}
                        </span>
                        <span className={`mt-4 block max-w-sm transition-opacity duration-500 ${open ? "lg:opacity-100 lg:delay-200" : "lg:pointer-events-none lg:absolute lg:opacity-0"}`}>
                          <span className="block text-xs font-medium uppercase tracking-[0.16em] text-git-ice">{track.category}</span>
                          <span className="mt-3 block text-[0.95rem] leading-relaxed text-git-light">{track.description}</span>
                        </span>
                      </span>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center" data-reveal>
            <p className="max-w-xl text-base leading-relaxed text-git-light">
              Missed it? The next edition is announced in the Kommunity first.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href={KOMMUNITY_URL}>Get the next announcement</CtaLink>
              <CtaLink to="/programs" variant="ghost-dark" icon={null}>Full recap</CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
