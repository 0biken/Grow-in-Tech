import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import { Icon } from "./Icon";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-git-dark text-git-white">
      <div className="container-page flex min-h-9 items-center justify-center gap-3 py-2 pr-12 text-center text-xs sm:text-sm">
        <span>Digital Skill Up 2026 has wrapped. Thank you for learning with us.</span>
        <Link to="/programs" className="shrink-0 font-semibold text-git-ice underline underline-offset-2 hover:text-git-white">
          See the recap
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-git-dark-muted transition-colors duration-300 hover:bg-white/10 hover:text-git-white"
        aria-label="Close announcement"
      >
        <Icon icon={X} size={14} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
