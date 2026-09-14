import { Sun, Moon } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import BrandLogo from "../components/BrandLogo";
import { useEffect, useState, useRef } from "react";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const menuRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    try { localStorage.setItem("theme", newTheme); } catch { /* Storage may be unavailable. */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", newTheme === "dark" ? "#0B191A" : "#FFFFFF");
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };

  useEffect(() => {
    const dialog = menuRef.current;
    if (!menuOpen || !dialog) return;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 flex flex-col items-center justify-center lg:top-3 w-full">
      <nav
        aria-label="Main"
        className={[
          "w-full lg:w-auto relative z-50",
          "transition-[background-color,box-shadow] duration-300",
          "border border-git-border lg:rounded-full",
          scrolled || menuOpen
            ? "bg-git-surface/95 shadow-sm backdrop-blur-xl"
            : "bg-git-surface/80 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-6 px-5 py-3 lg:px-6 lg:py-2.5">
          <NavLink
            to="/"
            className="shrink-0"
            aria-label="Grow In Tech — home"
          >
            <BrandLogo className="text-git-title" />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} end={link.path === "/"} className="group relative block py-2 text-sm font-medium transition-colors duration-150 after:absolute after:bottom-0.5 after:left-0 after:h-px after:bg-git-accent after:transition-transform after:duration-200 after:origin-left">
                  {({ isActive }) => (
                    <span className={isActive ? "text-git-title after:w-full after:scale-x-100 inline-block" : "text-git-muted hover:text-git-title after:w-full after:scale-x-0 hover:after:scale-x-100 inline-block"}>
                      <span className="relative overflow-hidden h-[1.4em] inline-block leading-[1.4em] align-bottom">
                        <span className="flex flex-col transition-transform duration-300 motion-safe:group-hover:-translate-y-1/2">
                          <span>{link.name}</span>
                          <span aria-hidden="true" className="text-git-title">{link.name}</span>
                        </span>
                      </span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 lg:gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              aria-pressed={theme === "dark"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-git-title transition-colors duration-150 hover:bg-git-surface-2"
            >
              {theme === "light" ? (
                <Icon icon={Moon} size={20} />
              ) : (
                <Icon icon={Sun} size={20} />
              )}
            </button>

            <NavLink
              to="/programs"
              className="hidden shrink-0 btn-primary lg:inline-flex"
            >
              Join GiT
            </NavLink>

            {/* Mobile trigger */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              aria-haspopup="dialog"
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-git-title transition-colors duration-150 hover:bg-git-surface-2 lg:hidden"
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[calc(50%+6px)]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[2px] w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1/2 -rotate-45" : "-translate-y-[calc(50%-6px)]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      <dialog
        id="mobile-menu"
        ref={menuRef}
        aria-label="Site navigation"
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        className="mobile-menu bg-git-surface text-git-title"
      >
        <div className="flex items-center justify-between gap-4">
          <BrandLogo className="text-git-title" />
          <button type="button" onClick={closeMenu} className="btn-ghost" autoFocus>Close menu <span aria-hidden="true">×</span></button>
        </div>
        <ul className="flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-3xl font-heading font-medium tracking-tight transition-colors duration-150 ${
                    isActive
                      ? "text-git-accent"
                      : "text-git-title hover:text-git-accent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <NavLink
            to="/programs"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center btn-primary justify-center text-lg py-4"
          >
            Join GiT
          </NavLink>
        </div>
      </dialog>
    </header>
  );
};

export default Nav;
