import { useState } from "react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-git-dark text-git-white relative">
      <div className="container-page flex min-h-8 items-center justify-center gap-3 py-1.5 text-center text-xs sm:text-sm px-10">
        <span>ANNOUNCING: Digital Skill Up : The Intelligent Creator — 6 Masterclass Tracks</span>
        <Link to="/programs#tracks" className="shrink-0 font-semibold text-git-ice underline underline-offset-2 hover:text-git-white">
          Register Now
        </Link>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-git-dark-muted hover:text-git-white transition-colors"
        aria-label="Close announcement"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
