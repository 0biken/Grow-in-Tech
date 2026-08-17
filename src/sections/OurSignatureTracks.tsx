import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const tracks = [
  {
    title: "Hackathons & Build Nights",
    description:
      "Collaborative sprints where members design, prototype, and build solutions together over the weekend.",
    cta: { label: "Join Next Build", to: "/register" },
    image: "/images/Hackathon.png",
  },
  {
    title: "Workshops & Bootcamps",
    description:
      "Hands-on sessions covering web development, UI/UX design, AI, and more to level up your skills.",
    cta: { label: "View Schedule", to: "/programs" },
    image: "/images/Accelerator.png",
  },
  {
    title: "Open Source Projects",
    description:
      "Contribute to real-world projects, build your portfolio, and collaborate with the community on GitHub.",
    cta: { label: "Explore Projects", to: "/get-involved" },
    image: "/images/Mentership.png",
  },
];

const AUTOPLAY_MS = 6000;

const OurSignatureTracks = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const go = useCallback(
    (next: number) => setIndex((next + tracks.length) % tracks.length),
    []
  );

  /* Autoplay stops on hover, on keyboard focus, and whenever motion is
     reduced. Previously a bare 4s interval yanked the copy away mid-sentence
     with no way to stop it — a WCAG 2.2.2 failure, not just an irritation. */
  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % tracks.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion]);

  useGSAP(
    () => {
      if (prefersReducedMotion || !panelRef.current) return;
      // Targets a class, not `#animate` — four elements shared that id, so the
      // selector only ever matched the first and the rest never animated.
      gsap.fromTo(
        panelRef.current.querySelectorAll(".track-reveal"),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power2.out" }
      );
    },
    { dependencies: [index, prefersReducedMotion], scope: panelRef }
  );

  const track = tracks[index];

  return (
    <section
      className="container-page py-16 sm:py-20"
      aria-roledescription="carousel"
      aria-label="What we do"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <h2 className="section-heading">What We Do</h2>
      <p className="section-subheading mx-auto max-w-xl">
        Three ways to learn, build, and connect.
      </p>

      <div
        ref={panelRef}
        className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        aria-live={paused ? "polite" : "off"}
      >
        <div className="order-2 lg:order-1">
          <h3 className="track-reveal text-[length:var(--text-h2)] font-bold text-git-white">
            {track.title}
          </h3>
          <p className="track-reveal mt-4 font-sans text-lg leading-relaxed text-git-muted">
            {track.description}
          </p>
          <Link
            to={track.cta.to}
            className="track-reveal mt-7 inline-block rounded-full bg-git-accent-solid px-7 py-3 font-sans text-base font-bold text-git-white transition-colors duration-150 hover:bg-git-accent-hover"
          >
            {track.cta.label}
          </Link>

          {/* Real buttons: focusable, keyboard-operable, labelled, and they
              expose which slide is current. Previously bare <li onClick>. */}
          <div className="mt-9 flex items-center gap-4">
            <div className="flex gap-2.5" role="tablist" aria-label="Choose a track">
              {tracks.map((t, i) => (
                <button
                  key={t.title}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={t.title}
                  onClick={() => go(i)}
                  // 24px-tall hit area around an 8px visual bar — the bar
                  // alone was well under the minimum touch target.
                  className="group flex h-6 min-w-6 items-center justify-center"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-10 bg-git-accent"
                        : "w-5 bg-git-border group-hover:bg-git-muted"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="ml-auto flex gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous track"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-git-border text-git-light transition-colors duration-150 hover:bg-git-surface-2"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next track"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-git-border text-git-light transition-colors duration-150 hover:bg-git-surface-2"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="track-reveal order-1 lg:order-2">
          <img
            src={track.image}
            alt=""
            loading="lazy"
            className="mx-auto w-full max-w-[470px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSignatureTracks;
