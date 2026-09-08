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
      <AnnouncementBar />
      <Nav />
      <main id="main" className="flex-1 pt-4 lg:pt-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
