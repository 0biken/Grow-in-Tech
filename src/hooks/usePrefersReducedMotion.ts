import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tracks the user's reduced-motion preference and reacts to changes at runtime
 * (the OS setting can be toggled while the page is open).
 *
 * CSS handles transitions and keyframes via the media query in App.css; this
 * hook exists for the motion CSS can't reach — GSAP timelines, the marquee,
 * and the carousel's autoplay interval.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return prefersReduced;
}

export default usePrefersReducedMotion;
