import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ImpactCard, { type ImpactStat } from "../components/ImpactCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

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

const OurImpact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".impact-card-reveal");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { dependencies: [prefersReducedMotion], revertOnUpdate: true, scope: containerRef }
  );

  return (
    <section className="py-24 md:py-32 bg-git-base" ref={containerRef}>
      <div className="container-page">
        <div className="text-left">
          <p className="section-eyebrow mb-2">OUR IMPACT</p>
          <h2 className="section-heading text-git-title">What the community has built</h2>
          <p className="section-subheading mt-4 max-w-xl">
            What the community has built across four years of programmes, hackathons, and conferences.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`impact-card-reveal ${stat.wide ? "lg:col-span-2" : ""}`}
            >
              <ImpactCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
