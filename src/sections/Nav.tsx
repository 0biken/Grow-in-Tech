import { Sun, Moon } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import BrandLogo from "../components/BrandLogo";
import CtaLink from "../components/CtaLink";
import { KOMMUNITY_URL } from "../content/site";
import { useEffect, useState, useRef, type CSSProperties } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Events", path: "/events" },
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
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    try { localStorage.setItem("theme", newTheme); } catch { /* Storage may be unavailable. */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", newTheme === "dark" ? "#0B191A" : "#FFFFFF");
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // A sentinel at the top of the document flips the nav style once it scrolls away.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
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
    <>
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-10 w-px" />
      <header className="sticky top-3 z-50 flex w-full justify-center px-3">
        <nav
          aria-label="Main"
          className={[
            "relative w-full max-w-[64rem] rounded-full border backdrop-blur-xl",
            "transition-[background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            scrolled
              ? "border-git-border-hover bg-git-surface/85 shadow-[0_18px_40px_-24px_rgba(1,5,82,0.35)]"
              : "border-git-border bg-git-surface/70",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-6 py-2 pl-5 pr-2">
            <NavLink to="/" className="shrink-0" aria-label="Grow In Tech — home">
              <BrandLogo className="text-git-title" />
            </NavLink>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      [
                        "block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                        isActive ? "bg-git-surface-2 text-git-title" : "text-git-muted hover:text-git-title",
                      ].join(" ")
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                aria-pressed={theme === "dark"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-git-title transition-colors duration-300 hover:bg-git-surface-2"
              >
                <Icon icon={theme === "light" ? Moon : Sun} size={20} />
              </button>

              <CtaLink href={KOMMUNITY_URL} className="hidden lg:inline-flex">Join GiT</CtaLink>

              {/* Mobile trigger */}
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
                aria-haspopup="dialog"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-git-surface-2 text-git-title lg:hidden"
              >
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <span className="absolute left-0 top-0 block h-[1.5px] w-5 bg-current" />
                  <span className="absolute bottom-0 left-0 block h-[1.5px] w-3.5 bg-current" />
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
          className="mobile-menu text-git-title"
        >
          <div className="flex items-center justify-between gap-4 rounded-full border border-git-border bg-git-surface/80 py-2 pl-5 pr-2">
            <BrandLogo className="text-git-title" />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              autoFocus
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-git-surface-2 text-git-title"
            >
              {/* The two bars from the trigger, crossed. */}
              <span className="relative block h-5 w-5" aria-hidden="true">
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
          <ul className="menu-stagger mt-14 flex flex-col gap-2 px-2">
            {navLinks.map((link, i) => (
              <li key={link.name} style={{ "--i": i } as CSSProperties}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 font-heading text-[2.75rem] font-bold italic leading-none tracking-tight transition-colors duration-300 ${
                      isActive ? "text-git-link" : "text-git-title hover:text-git-link"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="menu-stagger mt-12 px-2">
            <div style={{ "--i": navLinks.length } as CSSProperties}>
              <CtaLink href={KOMMUNITY_URL} className="w-full justify-between" onClick={() => setMenuOpen(false)}>
                Join the Kommunity
              </CtaLink>
            </div>
          </div>
        </dialog>
      </header>
    </>
  );
};

export default Nav;
