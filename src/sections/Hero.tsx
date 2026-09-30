import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Photo from "../components/Photo";
import CtaLink from "../components/CtaLink";
import { KOMMUNITY_URL } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".hero-shell > .photo img", { scale: 1.12 }, { scale: 1, duration: 2.2 }, 0)
        .from(".hero-line", { yPercent: 110, duration: 1.2, stagger: 0.1 }, 0.15)
        .from(".hero-fade", { opacity: 0, y: 20, duration: 1, stagger: 0.08 }, 0.55);
    },
    { scope: heroRef, dependencies: [prefersReducedMotion], revertOnUpdate: true }
  );

  return (
    <section ref={heroRef} className="px-2 sm:px-3" aria-labelledby="hero-heading">
      <div className="hero-shell dark-section">
        <Photo slot="hero" width={1920} priority tone="natural" sizes="100vw" decorative shade="hero-wash" />

        <div className="container-page flex flex-col items-center pb-16 pt-24 text-center md:py-28">
          <p className="hero-fade mb-7 text-sm font-medium tracking-[0.18em] text-git-ice uppercase">
            Grow In Tech · University of Ibadan
          </p>

          <h1 id="hero-heading" className="hero-title mx-auto w-full max-w-6xl">
            <span className="block overflow-hidden pb-[0.08em]"><span className="hero-line block">Every faculty.</span></span>
            <span className="block overflow-hidden pb-[0.08em]"><span className="hero-line block text-git-ice">One kommunity building in tech.</span></span>
          </h1>

          <p className="hero-fade mx-auto mt-7 max-w-2xl text-base leading-relaxed text-git-light sm:text-lg">
            Practical, in-demand digital skills through hands-on training, mentorship, and community — regardless of
            department or prior technical background.
          </p>

          <div className="hero-fade mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <CtaLink href={KOMMUNITY_URL} variant="light">Join the Kommunity</CtaLink>
            <CtaLink to="/programs" variant="ghost-dark" icon={null}>See what we run</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
