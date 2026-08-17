import { Outlet } from "react-router-dom";
import Nav from "../sections/Nav";
import Footer from "../sections/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-git-base font-sans text-git-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-git-accent-solid focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-git-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="flex-1 pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
