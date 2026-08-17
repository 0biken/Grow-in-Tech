import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Condense the bar once the hero starts leaving. The previous GSAP version
     drove `width: 60% -> 40%` off a ScrollTrigger bound to the nav itself —
     a fixed element never moves relative to the viewport, so it could not
     fire, and animating the width of a content-sized flex row would have
     crushed the links if it had. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Escape closes; lock background scroll while the panel is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative block py-2 text-sm font-medium transition-colors duration-150",
      "after:absolute after:bottom-0.5 after:left-0 after:h-px after:bg-git-accent",
      "after:transition-all after:duration-200",
      isActive
        ? "text-git-white after:w-full"
        : "text-git-muted hover:text-git-white after:w-0 hover:after:w-full",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center md:top-3">
      <nav
        aria-label="Main"
        className={[
          "w-full md:w-auto",
          "transition-[background-color,border-color,box-shadow] duration-300",
          "border-b border-git-border/60 md:rounded-full md:border",
          scrolled || menuOpen
            ? "bg-git-base/85 backdrop-blur-xl md:border-git-border md:shadow-lg md:shadow-black/20"
            : "bg-git-base/60 backdrop-blur-md md:border-white/10",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-8 px-5 py-3 md:px-6 md:py-2.5">
          <NavLink
            to="/"
            className="shrink-0"
            aria-label="Grow In Tech — home"
          >
            <img
              src="/images/20260725_180307.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-auto md:h-10"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} end={link.path === "/"} className={linkClass}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/register"
            className="hidden shrink-0 rounded-full bg-git-accent-solid px-5 py-2 text-sm font-bold text-git-white transition-colors duration-150 hover:bg-git-accent-hover md:inline-block"
          >
            Register
          </NavLink>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-git-white transition-colors duration-150 hover:bg-white/10 md:hidden"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          hidden={!menuOpen}
          className="border-t border-git-border/60 px-5 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-3 text-base font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-git-accent/15 text-git-white"
                        : "text-git-muted hover:bg-white/5 hover:text-git-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/register"
            className="mt-4 block rounded-full bg-git-accent-solid px-5 py-3 text-center text-base font-bold text-git-white transition-colors duration-150 hover:bg-git-accent-hover"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
