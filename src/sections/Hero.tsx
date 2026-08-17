import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[34rem] w-full items-end overflow-hidden rounded-3xl lg:min-h-[calc(100vh-7rem)]">
      {/* Background. `object-cover` + explicit inset is what makes the image
          fill the section at any aspect ratio — previously it was `w-full`
          only, so it sized to its own 1704x994 ratio and left bare background
          below itself on 16:9 viewports. */}
      <img
        src="/images/hero.png"
        alt=""
        width={1704}
        height={994}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* Scrim. The headline previously sat directly on the photograph, so its
          legibility depended on whatever happened to be in that region. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-git-base via-git-base/75 to-git-base/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-git-base/80 to-transparent"
      />

      <div className="w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-git-light">
          Grow In Tech (GiT)
        </p>

        <h1 className="mt-4 max-w-4xl text-[length:var(--text-display)] font-extrabold leading-[1.05] text-git-white">
          A generation of UI students{" "}
          <span className="text-git-accent">building the future</span>
        </h1>

        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-git-light sm:text-lg">
          Practical, in-demand digital skills through hands-on training,
          mentorship, and community — regardless of department or prior
          technical background.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            to="/get-involved"
            className="rounded-full bg-git-accent-solid px-8 py-3.5 text-center font-sans text-base font-bold text-git-white shadow-lg shadow-git-accent/25 transition-colors duration-150 hover:bg-git-accent-hover"
          >
            Join Kommunity
          </Link>
          <Link
            to="/programs"
            className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-center font-sans text-base font-bold text-git-white backdrop-blur-sm transition-colors duration-150 hover:bg-white/20"
          >
            See Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
