import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Sponsor from "../sections/Sponsor";
import OurImpact from "../sections/OurImpact";
import OurSignatureTracks from "../sections/OurSignatureTracks";

const Home = () => {
  return (
    <>
      <div className="container-page pt-4">
        <Hero />
      </div>

      <Sponsor />
      <OurImpact />
      <OurSignatureTracks />

      {/* Featured event */}
      <section className="container-page py-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-git-accent/30 bg-gradient-to-br from-git-accent/20 to-git-surface p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-2xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-git-light">
              Featured Event
            </p>
            <h2 className="mt-3 text-[length:var(--text-h2)] font-bold text-git-white">
              Digital Skill Up 2026
            </h2>
            <p className="mt-3 font-sans leading-relaxed text-git-muted">
              Six specialised tracks to equip you with in-demand digital skills.
            </p>
          </div>
          <Link
            to="/programs"
            className="shrink-0 rounded-full bg-git-accent-solid px-8 py-3.5 text-center font-sans font-bold text-git-white transition-colors duration-150 hover:bg-git-accent-hover"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container-page py-16 text-center sm:py-20">
        <h2 className="text-[length:var(--text-h1)] font-bold text-git-white">
          Ready to make an impact?
        </h2>
        <p className="section-subheading mx-auto max-w-lg">
          Join the community, or help shape it as part of the founding committee.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/get-involved"
            className="rounded-full bg-git-accent-solid px-8 py-3.5 font-sans font-bold text-git-white transition-colors duration-150 hover:bg-git-accent-hover"
          >
            Join Kommunity
          </Link>
          <Link
            to="/get-involved"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 font-sans font-bold text-git-white transition-colors duration-150 hover:bg-white/20"
          >
            Apply for Committee
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
