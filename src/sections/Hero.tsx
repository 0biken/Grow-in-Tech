import { CaretDown } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const elements = [eyebrowRef.current, headlineRef.current, taglineRef.current, buttonsRef.current, scrollIndicatorRef.current];
      
      gsap.fromTo(
        elements,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: "power3.out" }
      );
    },
    { scope: heroRef, dependencies: [prefersReducedMotion], revertOnUpdate: true }
  );

  return (
    <section
      ref={heroRef}
      className="brand-hero relative isolate flex w-full flex-col items-center justify-center overflow-hidden dark-section"
    >

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <p
          ref={eyebrowRef}
          className="section-eyebrow tracking-widest text-git-accent mb-6 uppercase"
        >
          University of Ibadan
        </p>

        <h1
          ref={headlineRef}
          className="font-heading font-bold hero-title uppercase tracking-tighter text-git-white mb-6 leading-none"
        >
          Grow In Tech
        </h1>

        <p
          ref={taglineRef}
          className="mx-auto max-w-2xl text-base sm:text-lg text-git-light mb-8"
        >
          Practical, in-demand digital skills through hands-on training,
          mentorship, and community — regardless of department or prior
          technical background.
        </p>

        <div ref={buttonsRef} className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="https://chat.whatsapp.com/EoZRm6mqTG2AYHAp9O2SIM?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Join Kommunity
          </a>
          <Link to="/programs" className="btn-ghost-dark">
            See Programs
          </Link>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-git-dark-muted"
      >
        <span className="text-sm font-sans uppercase tracking-widest">
          Scroll
        </span>
        <Icon icon={CaretDown} size={24} className="mt-1" />
      </div>
    </section>
  );
}
