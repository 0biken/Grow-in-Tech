import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Declarative scroll motion for everything inside `scope`:
 *
 * - `data-reveal`          fades and rises once as it enters the viewport
 * - `data-reveal-stagger`  does the same for each direct child, in sequence
 * - `data-scale-in`        grows from 90% to full size, scrubbed to scroll
 *
 * Content is visible by default; motion is skipped under reduced motion.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const root = scope.current;
      if (prefersReducedMotion || !root) return;

      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
          duration: 1,
          ease: "expo.out",
          delay: Number(el.dataset.reveal) || 0,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 32,
          duration: 1,
          ease: "expo.out",
          stagger: 0.08,
          scrollTrigger: { trigger: group, start: "top 88%", once: true },
        });
      });

      root.querySelectorAll<HTMLElement>("[data-scale-in]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.9 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "top 35%", scrub: 0.6 } }
        );
      });
    },
    { scope, dependencies: [prefersReducedMotion], revertOnUpdate: true }
  );
}
