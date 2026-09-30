/** Slow typographic ribbon. The duplicate row is hidden from assistive tech. */
export default function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="marquee-item">
          {item}
          <span className="marquee-dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="region" aria-label={label}>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
