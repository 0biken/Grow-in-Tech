const Sponsor = () => (
  <section className="py-16 sm:py-20" aria-labelledby="partners-heading">
    <div className="container-page">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left">
        <div className="bezel shrink-0 [--bezel-radius:1.5rem]">
          <div className="bezel-core p-3">
            <img
              src="/images/jci-ui.jpg"
              alt="JCI Nigeria, University of Ibadan"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
            />
          </div>
        </div>
        <div>
          <h2 id="partners-heading" className="text-xs font-medium uppercase not-italic tracking-[0.18em] text-git-link [font-family:var(--font-sans)]">
            In partnership with
          </h2>
          <p className="mt-2 max-w-md text-base leading-relaxed text-git-muted">
            JCI Nigeria, University of Ibadan — co-host of Digital Skill Up 2026.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsor;
