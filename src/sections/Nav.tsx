"use client";

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
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    const focusableElements = menuRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };
    
    window.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener('keydown', handleTab);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 flex flex-col items-center justify-center md:top-3 w-full">
      <nav
        aria-label="Main"
        className={[
          "w-full md:w-auto relative z-50",
          "transition-all duration-300",
          "border border-git-border md:rounded-full",
          scrolled || menuOpen
            ? "bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-xl",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-12 px-5 py-3 md:px-6 md:py-2.5">
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
                <NavLink to={link.path} end={link.path === "/"} className="group relative block py-2 text-sm font-medium transition-colors duration-150 after:absolute after:bottom-0.5 after:left-0 after:h-px after:bg-git-accent after:transition-all after:duration-200">
                  {({ isActive }) => (
                    <span className={isActive ? "text-git-title after:w-full inline-block" : "text-git-muted hover:text-git-title after:w-0 hover:after:w-full inline-block"}>
                      <span className="relative overflow-hidden h-[1.4em] inline-block leading-[1.4em] align-bottom">
                        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                          <span>{link.name}</span>
                          <span className={isActive ? "text-git-title" : "text-git-title"}>{link.name}</span>
                        </span>
                      </span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/register"
            className="hidden shrink-0 btn-primary md:inline-flex"
          >
            Join GiT
          </NavLink>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-git-title transition-colors duration-150 hover:bg-git-surface-2 md:hidden"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-[2px] w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className="fixed inset-0 z-40 bg-white px-5 pt-28 pb-6 md:hidden flex flex-col"
      >
        <ul className="flex flex-col gap-6 mt-8">
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
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center btn-primary justify-center text-lg py-4"
          >
            Join GiT
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Nav;

