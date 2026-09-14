import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Digital skills for University of Ibadan students",
  "/about": "About",
  "/programs": "Programs",
  "/get-involved": "Get involved",
  "/contact": "Contact",
};

/** Coordinate focus and scroll after the new route (and any menu dismissal) renders. */
export default function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const firstRender = useRef(true);
  const positions = useRef(new Map<string, number>());

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const pathname = location.pathname.replace(/\/+$/, "") || "/";
    document.title = `${pageTitles[pathname] ?? "404 — Page not found"} | Grow In Tech (GiT)`;
    const frame = requestAnimationFrame(() => {
      let hash = location.hash.slice(1);
      try { hash = decodeURIComponent(hash); } catch { /* Treat malformed hashes literally. */ }
      const target = hash ? document.getElementById(hash) : null;
      const focusTarget = target?.querySelector<HTMLElement>("h1, h2, h3") ?? target
        ?? document.querySelector<HTMLElement>("main h1") ?? document.querySelector<HTMLElement>("main");
      if (focusTarget && (!firstRender.current || target)) {
        focusTarget.setAttribute("tabindex", "-1");
        focusTarget.focus({ preventScroll: true });
      }
      firstRender.current = false;
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
      } else {
        const top = navigationType === "POP" ? positions.current.get(location.key) ?? 0 : 0;
        window.scrollTo({ top, behavior: "instant" });
      }
    });
    const savedPositions = positions.current;
    return () => {
      cancelAnimationFrame(frame);
      savedPositions.set(location.key, window.scrollY);
    };
  }, [location.key, location.pathname, location.hash, navigationType]);

  return null;
}

