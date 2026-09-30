import RouteEffects from "./RouteEffects";
import { Outlet } from "react-router-dom";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";
import AnnouncementBar from "./AnnouncementBar";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-git-base font-sans text-git-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-git-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-git-dark"
      >
        Skip to content
      </a>
      <RouteEffects />
      <AnnouncementBar />
      <Nav />
      {/* clip (not hidden) keeps sticky descendants working while preventing sideways scroll. */}
      <main id="main" tabIndex={-1} className="w-full max-w-full flex-1 overflow-x-clip pt-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
