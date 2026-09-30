import Hero from "../sections/Hero";
import Manifesto from "../sections/Manifesto";
import Formats from "../sections/Formats";
import Marquee from "../components/Marquee";
import OurImpact from "../sections/OurImpact";
import SkillUpRecap from "../sections/SkillUpRecap";
import Sponsor from "../sections/Sponsor";

const skills = ["Design", "Code", "Building with AI", "Copywriting", "Marketing", "Automation", "Finance", "Community"];

const Home = () => (
  <div className="bg-git-base">
    <Hero />
    <Manifesto />
    <Formats />
    <div className="pb-24 md:pb-36">
      <Marquee items={skills} label="Skills we learn together" />
    </div>
    <OurImpact />
    <div className="pt-24 md:pt-36">
      <SkillUpRecap />
    </div>
    <Sponsor />
  </div>
);

export default Home;
