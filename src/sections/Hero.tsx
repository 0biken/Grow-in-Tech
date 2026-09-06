import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ParticleBackground from "../components/ParticleBackground";
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

      const tl = gsap.timeline();

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.2
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          0.4
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          0.8
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          1.0
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          1.4
        );
        
      gsap.to(".scroll-chevron", {
        y: 8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: heroRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-git-dark dark-section"
    >
      <ParticleBackground />

      <div className="container-page relative z-10 flex flex-col items-center text-center">
        <p
          ref={eyebrowRef}
          className="section-eyebrow tracking-widest text-git-accent mb-6 uppercase"
        >
          University of Ibadan
        </p>

        <h1
          ref={headlineRef}
          className="font-heading font-800 text-[length:var(--text-display-xl)] uppercase tracking-tighter text-git-white mb-8 leading-none"
        >
          Grow In Tech
        </h1>

        <p
          ref={taglineRef}
          className="mx-auto max-w-2xl text-lg text-git-dark-muted mb-10"
        >
          Practical, in-demand digital skills through hands-on training,
          mentorship, and community — regardless of department or prior
          technical background.
        </p>

        <div ref={buttonsRef} className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link to="/get-involved" className="btn-primary">
            Join Kommunity
          </Link>
          <Link to="/programs" className="btn-ghost-dark">
            See Programs
          </Link>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-git-dark-muted"
      >
        <span className="text-sm font-sans uppercase tracking-widest">
          Scroll
        </span>
        <svg
          className="scroll-chevron h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
