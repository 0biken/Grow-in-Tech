import ImpactCard, { type ImpactStat } from "../components/ImpactCard";

const stats: ImpactStat[] = [
  {
    value: 5000,
    suffix: "+",
    label: "attendees",
    description: "Students, investors, and corporate leaders from across Nigeria",
    image: "/images/connect.svg",
    wide: true,
  },
  {
    value: 1000,
    suffix: "+",
    label: "students trained",
    description: "In innovation, leadership, and emerging technologies",
    image: "/images/cert.svg",
  },
  {
    value: 100,
    suffix: "+",
    label: "developers competing",
    description: "In hackathons and accelerator challenges",
    image: "/images/laptop.svg",
  },
  {
    value: 7000,
    suffix: "+",
    label: "student registrations",
    description: "Across multiple cohorts and universities",
    image: "/images/email.svg",
  },
];

const OurImpact = () => (
  <section className="container-page py-16 sm:py-20">
    <h2 className="section-heading">Our Impact</h2>
    <p className="section-subheading mx-auto max-w-xl">
      What the community has built across four years of programmes, hackathons,
      and conferences.
    </p>

    {/* Single column on phones. The previous `grid-cols-[2fr_1fr]` carried no
        breakpoint, so a 375px viewport got a two-column grid with 30px
        headings inside a ~120px column. */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <ImpactCard key={stat.label} stat={stat} />
      ))}
    </div>
  </section>
);

export default OurImpact;
