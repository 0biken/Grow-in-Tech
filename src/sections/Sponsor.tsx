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
  <li className="flex h-16 w-52 shrink-0 items-center justify-center opacity-50 transition-opacity hover:opacity-100 px-4">
    <span className="truncate font-heading text-base font-semibold text-git-caption">
      {name}
    </span>
  </li>
);

const Sponsor = () => (
  <section className="py-16 sm:py-20" aria-labelledby="partners-heading">
    <div className="container-page">
      <div className="divider mb-12"></div>
      <p id="partners-heading" className="section-eyebrow text-center mb-8">
        TRUSTED BY
      </p>
    </div>

    <div
      className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] bg-transparent"
      role="group"
      aria-label="Partner organisations"
    >
      <ul className="flex w-max shrink-0 animate-(--animate-marquee) gap-4 pr-4">
        {partners.map((name, i) => (
          <Tile key={`${name}-${i}`} name={name} />
        ))}
      </ul>
      <ul
        aria-hidden="true"
        className="flex w-max shrink-0 animate-(--animate-marquee) gap-4 pr-4"
      >
        {partners.map((name, i) => (
          <Tile key={`dup-${name}-${i}`} name={name} />
        ))}
      </ul>
    </div>
  </section>
);

export default Sponsor;
