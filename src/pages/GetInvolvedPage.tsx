import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Check, EnvelopeSimple } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { CONTACT_EMAIL, KOMMUNITY_URL } from "../content/site";
import { applyHref, applySteps, committeeOpen, COMMITTEE_FORM_URL, expectations, roles } from "../content/committee";
import { useReveal } from "../hooks/useReveal";

const GetInvolvedPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);
  const applyExternal = COMMITTEE_FORM_URL !== null;

  return (
    <div ref={ref}>
      <section className="container-page pb-20 pt-14 md:pb-28 md:pt-20" aria-labelledby="involved-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <p className="kicker mb-6">There is a place for you here</p>
            <h1 id="involved-heading" className="text-[length:var(--text-display)] leading-[1.0]">Join the movement.</h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-git-muted lg:col-span-5">
            Join the kommunity to learn alongside other students, or help shape its future as part of the founding
            committee.
          </p>
        </div>
      </section>

      {/* Two paths — equal halves on md. */}
      <section className="container-page pb-24 md:pb-36" aria-label="Ways to get involved">
        <div className="grid gap-4 md:grid-cols-2" data-reveal-stagger>
          <article className="bezel">
            <div className="bezel-core flex flex-col">
              <div className="relative aspect-[16/10]">
                <Photo slot="learner" width={900} sizes="(min-width: 768px) 45vw, 100vw" className="absolute inset-0" alt="A student working on a laptop" />
              </div>
              <div className="flex flex-grow flex-col p-8 sm:p-10">
                <h2 className="text-[length:var(--text-h2)]">Join GiT</h2>
                <p className="mb-10 mt-4 flex-grow leading-relaxed text-git-muted">
                  Become a general member to get access to our workshops, bootcamps, and community events. We welcome
                  students from all departments and backgrounds.
                </p>
                <CtaLink href={KOMMUNITY_URL} className="self-start">Join the Kommunity</CtaLink>
              </div>
            </div>
          </article>

          <article className="bezel">
            <div className="bezel-core dark-section flex h-full flex-col bg-git-dark p-8 sm:p-10">
              {committeeOpen && (
                <p className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-git-ice">
                  <span className="h-1.5 w-1.5 rounded-full bg-git-ice" aria-hidden="true" />
                  Applications open
                </p>
              )}
              <h2 className="text-[length:var(--text-h2)]">Founding committee</h2>
              <p className="mt-4 flex-grow leading-relaxed text-git-dark-muted">
                We are recruiting for {roles.length} roles to build the foundation of GiT. If you can lead, organise, and
                execute, there is a seat for you at the table.
              </p>
              <p className="mb-10 mt-8 font-heading text-[clamp(4rem,3rem+4vw,6.5rem)] font-bold italic leading-none tracking-[-0.05em] text-white" aria-hidden="true">
                {roles.length} roles
              </p>
              <CtaLink to="#committee" icon={ArrowDown} className="self-start">See the roles</CtaLink>
            </div>
          </article>
        </div>
      </section>

      {/* Committee call */}
      <section id="committee" className="chapter bg-git-surface-2/60" aria-labelledby="committee-heading">
        <div className="container-page">
          <div className="mb-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5" data-reveal>
              <p className="kicker mb-5">Founding committee</p>
              <h2 id="committee-heading" className="section-heading">Help build GiT from day one.</h2>
              <p className="section-subheading">
                The founding committee sets how GiT runs for every cohort that follows. Here is what we look for and how
                to apply.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7" data-reveal-stagger>
              <div className="bezel">
                <div className="bezel-core h-full p-7 sm:p-8">
                  <h3 className="text-xl">What we expect</h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {expectations.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-git-body">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-git-surface-2 text-git-link">
                          <Icon icon={Check} size={12} weight="bold" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bezel">
                <div className="bezel-core h-full p-7 sm:p-8">
                  <h3 className="text-xl">How to apply</h3>
                  <ol className="mt-5 flex flex-col gap-5">
                    {applySteps.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="font-heading text-lg font-bold italic text-git-link" aria-hidden="true">0{i + 1}</span>
                        <div>
                          <p className="font-semibold text-git-title">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-git-muted">{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* 9 roles: 3 × 3 on md and up, so no empty cells. */}
          <ul className="grid gap-4 md:grid-cols-3" data-reveal-stagger>
            {roles.map((role) => (
              <li key={role.title} className="bezel bezel-hover group">
                <article className="bezel-core flex h-full flex-col p-7">
                  <h3 className="text-[length:var(--text-h3)] leading-tight">{role.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-git-muted">{role.summary}</p>
                  <ul className="mt-5 flex flex-grow flex-col gap-2 border-t border-git-border pt-5">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-git-body">
                        <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-git-link" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {committeeOpen && (
                    <a
                      href={applyHref(role.title)}
                      {...(applyExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-git-link"
                    >
                      Apply as {role.title}
                      {applyExternal && <span className="sr-only"> (opens in a new tab)</span>}
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-git-surface-2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                        <Icon icon={ArrowUpRight} size={14} />
                      </span>
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ul>

          {committeeOpen && (
            <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center" data-reveal>
              <p className="max-w-xl text-git-muted">
                Not sure which role fits? Apply anyway and tell us what you are good at. We will help you find your seat.
              </p>
              <CtaLink href={applyHref()} icon={applyExternal ? undefined : EnvelopeSimple}>Apply to the committee</CtaLink>
            </div>
          )}
        </div>
      </section>

      <section id="partner" className="px-2 pt-24 sm:px-3 md:pt-36" aria-labelledby="partner-heading">
        <div className="dark-section relative overflow-hidden rounded-[1.5rem] md:rounded-[2.25rem]">
          <Photo
            slot="panel"
            width={1600}
            tone="duotone"
            decorative
            className="absolute inset-0"
            shade="absolute inset-0 bg-[#010552]/70"
          />
          <div className="container-page relative py-24 text-center md:py-32" data-reveal>
            <h2 id="partner-heading" className="mx-auto max-w-3xl text-[length:var(--text-display)] leading-[1.02] text-white">
              Want to partner with us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-git-light">
              Learn how your organisation can support the next generation of tech leaders at the University of Ibadan.
            </p>
            <div className="mt-10 flex justify-center">
              <CtaLink href={`mailto:${CONTACT_EMAIL}?subject=Sponsorship%20enquiry`} variant="light" icon={EnvelopeSimple}>
                Request the prospectus
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
