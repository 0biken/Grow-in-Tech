import { useRef } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { CONTACT_EMAIL, KOMMUNITY_URL } from "../content/site";
import { useReveal } from "../hooks/useReveal";

const roles = [
  "Lead & Co-Lead",
  "General Secretary",
  "Technical Lead",
  "PR/Marketing Lead",
  "Programmes Lead",
  "Design Lead",
  "Finance Lead",
  "Community Manager",
];

const GetInvolvedPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

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
              <h2 className="text-[length:var(--text-h2)]">Founding committee</h2>
              <p className="mt-4 leading-relaxed text-git-dark-muted">
                We are recruiting for nine essential roles to build the foundation of GiT. If you can lead, organise, and
                execute, apply today.
              </p>
              <ul className="mb-10 mt-8 grid flex-grow grid-cols-1 content-start gap-2 sm:grid-cols-2">
                {roles.map((role) => (
                  <li key={role} className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm text-git-light">
                    {role}
                  </li>
                ))}
              </ul>
              <CtaLink to="/contact" className="self-start">Contact us to apply</CtaLink>
            </div>
          </article>
        </div>
      </section>

      <section className="px-2 sm:px-3" aria-labelledby="partner-heading">
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
