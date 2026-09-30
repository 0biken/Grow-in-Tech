import { useRef } from "react";
import CountUp from "../components/CountUp";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { useReveal } from "../hooks/useReveal";

const stats = [
  { value: 5000, suffix: "+", label: "attendees", description: "Students, investors, and corporate leaders from across Nigeria." },
  { value: 1000, suffix: "+", label: "students trained", description: "In innovation, leadership, and emerging technologies." },
  { value: 100, suffix: "+", label: "developers competing", description: "In hackathons and accelerator challenges." },
  { value: 7000, suffix: "+", label: "student registrations", description: "Across multiple cohorts and universities." },
];

/** Sticky split: the heading holds its place while the evidence scrolls past. */
const OurImpact = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="chapter bg-git-surface-2/60" aria-labelledby="impact-heading">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="kicker mb-5">Our impact</p>
            <h2 id="impact-heading" className="section-heading max-w-md">Four years of showing up for each other.</h2>
            <p className="section-subheading max-w-md">
              Programmes, hackathons, and conferences that brought UI students into rooms with the people and skills
              that move careers forward.
            </p>
            <div className="mt-10">
              <CtaLink to="/about" variant="ghost">Read our story</CtaLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7">
          <div className="bezel" data-scale-in>
            <div className="bezel-core aspect-[16/10]">
              <Photo slot="stage" width={1000} sizes="(min-width: 1024px) 55vw, 100vw" className="absolute inset-0" tone="mono" alt="A speaker addressing an audience" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-reveal-stagger>
            {stats.slice(0, 2).map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>

          <div className="bezel" data-scale-in>
            <div className="bezel-core aspect-[16/10]">
              <Photo slot="crowd" width={1000} sizes="(min-width: 1024px) 55vw, 100vw" className="absolute inset-0" tone="natural" alt="A group of friends laughing together" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-reveal-stagger>
            {stats.slice(2).map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

function StatCard({ value, suffix, label, description }: (typeof stats)[number]) {
  return (
    <article className="bezel">
      <div className="bezel-core flex flex-col gap-6 p-7 sm:p-8">
        <p className="font-heading text-[clamp(2.75rem,1.6rem+3vw,4rem)] font-bold italic leading-none tracking-[-0.04em] text-git-link">
          <CountUp end={value} suffix={suffix} />
        </p>
        <div>
          <h3 className="text-lg leading-tight">{label}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-git-muted">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default OurImpact;
