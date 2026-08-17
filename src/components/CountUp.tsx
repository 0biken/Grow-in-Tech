import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

/**
 * Counts up to `end` when scrolled into view.
 *
 * The rendered markup starts at the FINAL value rather than zero: if the
 * scroll trigger never fires, JS is slow, or motion is reduced, the page shows
 * the real figure instead of advertising "0+".
 */
export default function CountUp({ end, duration = 2, suffix = "" }: CountUpProps) {
  const el = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !el.current) return;

      const counter = { val: 0 };
      const node = el.current;
      node.textContent = "0" + suffix;

      const anim = gsap.to(counter, {
        val: end,
        duration,
        ease: "power1.out",
        onUpdate: () => {
          node.textContent = Math.floor(counter.val).toLocaleString() + suffix;
        },
        onComplete: () => {
          node.textContent = end.toLocaleString() + suffix;
        },
        scrollTrigger: { trigger: node, start: "top 85%", once: true },
      });

      return () => anim.kill();
    },
    { dependencies: [end, duration, suffix, prefersReducedMotion] }
  );

  return <span ref={el}>{end.toLocaleString() + suffix}</span>;
}
