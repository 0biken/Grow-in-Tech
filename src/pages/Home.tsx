import { ArrowRight } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Sponsor from "../sections/Sponsor";
import OurImpact from "../sections/OurImpact";
import OurSignatureTracks from "../sections/OurSignatureTracks";
const Home = () => {
  return (
    <div className="bg-git-base">
      <div className="container-page pt-4">
        <Hero />
      </div>

      {/* Digital Skill Up Coming Announcement Banner */}
      <section className="container-page py-6">
        <div className="dark-section relative overflow-hidden rounded-3xl border border-git-dark-border bg-git-dark p-8 sm:p-12 text-git-white shadow-2xl">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-git-accent/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-git-accent/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-git-accent/10 border border-git-accent/30 text-xs font-bold text-git-accent uppercase tracking-wider mb-4">
                <span className="h-2 w-2 rounded-full bg-git-accent animate-ping" />
                Coming Soon • Flagship Masterclass
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-git-white tracking-tight leading-tight">
                Digital Skill Up 2026 : <br className="hidden sm:inline" />
                <span className="text-git-accent">The Intelligent Creator Workshop</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-git-dark-muted leading-relaxed">
                <span className="text-git-accent font-semibold block mb-2">Digital Skills for The AI Era.</span>
                Empowering students with the most critical high-leverage skills in today&apos;s digital economy: Digital Marketing, Copywriting, Graphics Design, Building with AI, Automation, and Financial Literacy. Learn from top trainers from reputable brands and organizations.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-git-light">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10"> 6 Practical Tracks</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10"> 3-Session Sprints</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10"> Real-World Capstones</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10"> Open to All Departments</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                to="/programs"
                className="btn-primary text-center justify-center text-base py-3.5 px-7 font-bold shadow-lg hover:shadow-git-accent/25"
              >
                Explore Tracks &amp; Register <Icon icon={ArrowRight} size={20} weight="bold" />
              </Link>
              <Link
                to="/programs#why-tech-skills"
                className="btn-ghost-dark text-center justify-center text-sm py-3 px-6"
              >
                Why Learn These Skills?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Sponsor />
      <OurImpact />
      <OurSignatureTracks />

      {/* Featured event */}
      <section className="container-page pb-24">
        <div className="glass-card flex flex-col gap-8 p-8 sm:p-12 md:flex-row md:items-center md:justify-between border-git-accent/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-git-accent" />
          <div className="md:max-w-xl">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-git-accent mb-3 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-git-accent" />
              Flagship Learning Series
            </p>
            <h2 className="text-[length:var(--text-h2)] font-heading font-extrabold text-git-title">
              Digital Skill Up 2026 : The Intelligent Creator Workshop
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-git-muted">
              <span className="text-git-title font-semibold">Digital Skills for The AI Era.</span> Discover how learning modern digital skills provides immediate leverage for student founders, freelancers, and innovators. Six tracks with direct mentorship from top industry trainers. Premium training, fully online and 100% free.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/programs"
                className="btn-primary inline-flex"
              >
                View 6 Tracks &amp; Register <Icon icon={ArrowRight} size={20} weight="bold" />
              </Link>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-8 bg-git-surface-2 rounded-2xl border border-git-border shadow-sm text-center">
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-git-accent">SEP 16-18, 2026</span>
            <span className="font-heading text-5xl font-extrabold text-git-title mt-1">ONLINE</span>
            <span className="font-sans text-xs font-semibold text-git-muted mt-2">100% Free Premium Training</span>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-16 px-6">
        <div className="dark-section bg-git-dark rounded-3xl py-24 text-center">
          <div className="container-page">
            <h2 className="text-[length:var(--text-display)] font-heading font-bold text-git-white">
              Ready to make an impact?
            </h2>
            <p className="section-subheading mx-auto max-w-lg mt-6 text-git-light">
              Join the community, or help shape it as part of the founding committee.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://chat.whatsapp.com/EoZRm6mqTG2AYHAp9O2SIM?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join Kommunity
              </a>
              <Link to="/get-involved" className="btn-ghost-dark">
                Apply for Committee
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
