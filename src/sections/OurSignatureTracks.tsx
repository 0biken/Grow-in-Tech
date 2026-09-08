import BrandPanel from "../components/BrandPanel";
import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    title: "Hackathons & Build Nights",
    description:
      "Collaborative sprints where members design, prototype, and build solutions together over the weekend.",
    cta: { label: "Learn more", to: "/programs" },
    image: "/images/Hackathon.png",
    category: "Hackathon",
  },
  {
    title: "Workshops & Bootcamps",
    description:
      "Hands-on sessions covering web development, UI/UX design, AI, and more to level up your skills.",
    cta: { label: "Learn more", to: "/programs" },
    image: "/images/Accelerator.png",
    category: "Workshop",
  },
  {
    title: "Open Source Projects",
    description:
      "Contribute to real-world projects, build your portfolio, and collaborate with the community on GitHub.",
    cta: { label: "Learn more", to: "/get-involved" },
    image: "/images/Mentership.png",
    category: "Open Source",
  },
];

const OurSignatureTracks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".track-card-reveal");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
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
    <section className="py-24 bg-git-base" aria-label="What we do" ref={containerRef}>
      <div className="container-page">
        <p className="section-eyebrow mb-2">OUR SIGNATURE TRACKS</p>
        <h2 className="section-heading text-git-title">Three ways to learn, build, and connect.</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div key={track.title} className="track-card-reveal glass-card overflow-hidden flex flex-col group">
              <BrandPanel variant={index} />
              <div className="p-6 flex flex-col flex-grow items-start">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full text-git-accent bg-git-accent-soft">
                  {track.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-git-title">
                  {track.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-git-muted flex-grow">
                  {track.description}
                </p>
                <Link
                  to={track.cta.to}
                  className="mt-6 inline-flex items-center font-sans font-semibold text-git-accent group-hover/link:text-git-accent-hover transition-colors"
                >
                  {track.cta.label}
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-[2px]">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSignatureTracks;
