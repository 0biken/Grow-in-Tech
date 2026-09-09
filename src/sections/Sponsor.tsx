import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
const Sponsor = () => {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;
      
      const elements = gsap.utils.toArray<HTMLElement>(".sponsor-reveal");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
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
  <section ref={containerRef} className="py-16 sm:py-20 sponsor-reveal" aria-labelledby="partners-heading">
    <div className="container-page">
      <div className="divider mb-12"></div>
      <p id="partners-heading" className="section-eyebrow text-center mb-8">
        PARTNER
      </p>
      <div className="mx-auto flex max-w-sm items-center justify-center rounded-2xl border border-git-border bg-git-surface p-6 sm:p-8">
        <img
          src="/images/jci-ui.jpg"
          alt="JCI Nigeria, University of Ibadan"
          width={1280}
          height={1280}
          loading="lazy"
          className="h-24 w-24 rounded-xl object-cover sm:h-28 sm:w-28"
        />
      </div>
    </div>
  </section>
  );
};

export default Sponsor;
