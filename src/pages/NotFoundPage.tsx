import { Link } from "react-router-dom";
import { House } from "@phosphor-icons/react";
import CtaLink from "../components/CtaLink";

export default function NotFoundPage() {
  return (
    <section className="container-page py-10 sm:py-16 lg:py-20" aria-labelledby="not-found-heading">
      <div className="not-found-layout">
        <div className="not-found-art" aria-hidden="true">
          <span className="not-found-caption">ROOM TO EXPLORE</span>
          <span className="not-found-number">404</span>
          <span className="not-found-art-footer">GROW IN TECH <span>KEEP GOING ↗</span></span>
        </div>
        <div className="not-found-content">
          <p className="section-eyebrow mb-4">ERROR 404</p>
          <h1 id="not-found-heading" className="section-heading mb-5 leading-[1.12]">This page took<br className="hidden sm:block" /> a different path.</h1>
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-git-muted">
            We couldn’t find the page you’re looking for. The link may be out of date, or the address may have a typo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CtaLink to="/" icon={House}>Back to home</CtaLink>
            <CtaLink to="/programs" variant="ghost">Explore programs</CtaLink>
          </div>
          <p className="mt-8 text-sm text-git-muted">
            Following a link we shared? <Link to="/contact" className="text-git-accent font-semibold underline underline-offset-4">Let us know</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
