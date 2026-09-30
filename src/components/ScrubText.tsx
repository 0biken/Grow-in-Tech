import { Fragment, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Large statement whose words brighten one by one as it scrolls through the
 * viewport. Strings are split into words; other nodes (inline photos) scrub
 * as a single word.
 */
export default function ScrubText({ parts, className = "" }: { parts: ReactNode[]; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !ref.current) return;
      gsap.fromTo(
        ref.current.querySelectorAll(".scrub-word"),
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: "top 82%", end: "bottom 55%", scrub: 0.4 },
        }
      );
    },
    { scope: ref, dependencies: [prefersReducedMotion], revertOnUpdate: true }
  );

  return (
    <p ref={ref} className={className}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>
            {part.split(/(\s+)/).map((word, j) =>
              /^\s+$/.test(word) || word === "" ? word : <span key={j} className="scrub-word">{word}</span>
            )}
          </Fragment>
        ) : (
          <span key={i} className="scrub-word">{part}</span>
        )
      )}
    </p>
  );
}
