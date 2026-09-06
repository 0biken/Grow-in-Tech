import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../sections/Hero";
import Sponsor from "../sections/Sponsor";
import OurImpact from "../sections/OurImpact";
import OurSignatureTracks from "../sections/OurSignatureTracks";
import FilterTabs from "../components/FilterTabs";
import ProjectCard from "../components/ProjectCard";

const DUMMY_PROJECTS = [
  {
    title: "EcoTrack",
    category: "Hackathon",
    description: "An app that helps users track and reduce their carbon footprint through daily habits and community challenges.",
    result: "Winner, GreenTech Hackathon",
    image: "/images/Hackathon.png",
    link: "#",
  },
  {
    title: "Code for Good Web App",
    category: "Open Source",
    description: "A centralized platform connecting non-profits with developers who want to contribute their skills pro-bono.",
    result: "50+ contributors",
    image: "/images/Mentership.png",
    link: "#",
  },
  {
    title: "Intro to React",
    category: "Workshop",
    description: "A comprehensive beginner-friendly workshop teaching modern React concepts, hooks, and state management.",
    result: "200+ attendees",
    image: "/images/Accelerator.png",
    link: "#",
  },
  {
    title: "HealthConnect",
    category: "Hackathon",
    description: "A tele-health platform designed to connect patients in rural areas with healthcare professionals securely.",
    result: "Runner up, HealthTech Hack",
    image: "/images/Hackathon.png",
    link: "#",
  },
  {
    title: "GiT UI Library",
    category: "Open Source",
    description: "A modular, accessible UI component library built for the community, by the community.",
    result: "Used by 15+ internal projects",
    image: "/images/Mentership.png",
    link: "#",
  },
  {
    title: "Advanced TypeScript",
    category: "Workshop",
    description: "Deep dive into generics, utility types, and advanced type inference techniques for robust applications.",
    result: "Highly rated (4.9/5)",
    image: "/images/Accelerator.png",
    link: "#",
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterTabs = ["All", "Hackathon", "Workshop", "Open Source"];

  const filteredProjects = activeFilter === "All"
    ? DUMMY_PROJECTS
    : DUMMY_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-git-base">
      <div className="container-page pt-4">
        <Hero />
      </div>

      <Sponsor />
      <OurImpact />
      <OurSignatureTracks />

      {/* Projects & Initiatives */}
      <section className="py-24 container-page">
        <div className="mb-10">
          <p className="section-eyebrow mb-2">PROJECTS & INITIATIVES</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="section-heading text-git-title">What we're building</h2>
            <FilterTabs
              tabs={filterTabs}
              activeTab={activeFilter}
              onTabChange={setActiveFilter}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* Featured event */}
      <section className="container-page pb-24">
        <div className="glass-card flex flex-col gap-8 p-8 sm:p-12 md:flex-row md:items-center md:justify-between border-git-accent/20">
          <div className="md:max-w-xl">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-git-accent mb-4">
              Featured Event
            </p>
            <h2 className="text-[length:var(--text-h2)] font-heading font-bold text-git-title">
              Digital Skill Up 2026
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-git-muted">
              Six specialised tracks to equip you with in-demand digital skills. Join us for a transformative learning experience.
            </p>
            <Link
              to="/programs"
              className="btn-primary mt-8 inline-block"
            >
              Learn More
            </Link>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-git-surface-2 rounded-2xl border border-git-border">
            <span className="font-heading text-3xl font-extrabold text-git-accent">OCT</span>
            <span className="font-heading text-6xl font-extrabold text-git-title">15</span>
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
              <Link to="/get-involved" className="btn-primary">
                Join Kommunity
              </Link>
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
