/**
 * NOTE: every tile below is still a placeholder — the source data has no real
 * partner names or marks. Swap `partners` for the real list before launch;
 * a credibility section that reads "Logo" seven times undercuts the claim it
 * is making.
 */
const partners = [
  "Partner One",
  "Partner Two",
  "Partner Three",
  "Partner Four",
  "Partner Five",
  "Partner Six",
  "Partner Seven",
];

const Tile = ({ name }: { name: string }) => (
  <li className="flex h-16 w-52 shrink-0 items-center justify-center rounded-xl border border-git-border/70 bg-git-surface px-4">
    <span className="truncate font-heading text-base font-semibold text-git-muted">
      {name}
    </span>
  </li>
);

const Sponsor = () => (
  <section className="py-16 sm:py-20" aria-labelledby="partners-heading">
    <div className="container-page">
      <h2 id="partners-heading" className="section-heading">
        Our Partners
      </h2>
    </div>

    {/* The track holds two copies so the 50% translate loops seamlessly. The
        duplicate is aria-hidden — the previous GSAP version cloned nodes into
        the live DOM, so assistive tech announced every partner twice. */}
    <div
      className="relative mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      role="group"
      aria-label="Partner organisations"
    >
      <ul className="flex w-max shrink-0 animate-(--animate-marquee) gap-4 pr-4">
        {partners.map((name) => (
          <Tile key={name} name={name} />
        ))}
      </ul>
      <ul
        aria-hidden="true"
        className="flex w-max shrink-0 animate-(--animate-marquee) gap-4 pr-4"
      >
        {partners.map((name) => (
          <Tile key={name} name={name} />
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsor;
