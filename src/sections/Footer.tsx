import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="dark-section bg-git-dark text-git-white">
      {/* MEGA-CTA TOP */}
      <div className="container-page py-20 text-center">
        <h2 className="text-[length:var(--text-display)] font-heading font-bold text-git-white -tracking-[0.03em]">
          Let's build the future of campus tech
        </h2>
        <div className="mt-10">
          <Link to="/get-involved" className="btn-primary">
            Join GiT
          </Link>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px w-full bg-git-dark-border" role="presentation" />

      {/* 4-COLUMN GRID */}
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          <img
            src="/images/20260725_180307.png"
            alt="Grow In Tech"
            className="h-10 w-auto"
          />
          <p className="mt-5 text-sm leading-relaxed text-git-dark-muted">
            Practical, in-demand digital skills through hands-on training, mentorship, and community — regardless of department or prior technical background.
          </p>
          <span className="mt-4 text-xs font-semibold text-git-accent uppercase tracking-widest">
            University of Ibadan
          </span>
        </div>

        <nav aria-label="Explore">
          <h3 className="text-sm font-semibold text-git-light tracking-wide uppercase mb-4">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/about" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">About</Link></li>
            <li><Link to="/programs" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Programs</Link></li>
            <li><Link to="#" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Events</Link></li>
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h3 className="text-sm font-semibold text-git-light tracking-wide uppercase mb-4">
            Connect
          </h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/get-involved" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Get Involved</Link></li>
            <li><Link to="/contact" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Contact</Link></li>
            <li><Link to="/programs" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Register</Link></li>
          </ul>
        </nav>

        <nav aria-label="Follow">
          <h3 className="text-sm font-semibold text-git-light tracking-wide uppercase mb-4">
            Follow
          </h3>
          <ul className="flex flex-col gap-3">
            <li><a href="mailto:git.kommunity@gmail.com" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">git.kommunity@gmail.com</a></li>
            <li><a href="#" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Twitter/X</a></li>
            <li><a href="#" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">LinkedIn</a></li>
            <li><a href="#" className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200">Discord</a></li>
          </ul>
        </nav>
      </div>

      {/* BOTTOM BAR */}
      <div className="container-page border-t border-git-dark-border pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-git-dark-muted">
          © {new Date().getFullYear()} Grow In Tech · University of Ibadan
        </p>
        <button
          onClick={scrollToTop}
          className="text-sm text-git-dark-muted hover:text-git-white transition-colors duration-200 flex items-center gap-2"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
