import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const message = "⚡ ANNOUNCING: Digital Skill Up : The Intelligent Creator — 6 Masterclass Tracks — Register Now";
  
  return (
    <div className="bg-git-dark text-git-white overflow-hidden flex w-full">
      <Link 
        to="/programs" 
        className="flex whitespace-nowrap animate-(--animate-marquee-fast) hover:[animation-play-state:paused] py-2 w-max items-center"
      >
        {[...Array(12)].map((_, i) => (
          <span key={i} className="text-xs px-6 font-medium tracking-wide" aria-hidden={i !== 0}>
            {message}
          </span>
        ))}
      </Link>
    </div>
  );
};

export default AnnouncementBar;
