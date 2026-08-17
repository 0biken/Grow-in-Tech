import CountUp from "./CountUp";

export type ImpactStat = {
  value: number;
  suffix: string;
  label: string;
  description: string;
  image: string;
  /** Spans two columns on large screens. */
  wide?: boolean;
};

/**
 * Replaces card1/Card2/card3/Card4 — four near-identical files whose only real
 * differences were percentage paddings (3%/3%, 3%/3%, 15%/7%, 7%/7%) applied
 * to containers of three different widths, so no two cards shared an interior
 * rhythm. Spacing now comes off the shared scale.
 */
const ImpactCard = ({ stat }: { stat: ImpactStat }) => (
  <article
    className={`flex h-full flex-col justify-between gap-6 rounded-3xl border border-git-border/70 bg-git-surface p-6 transition-colors duration-200 hover:bg-git-surface-2 sm:p-8 ${
      stat.wide ? "sm:col-span-2" : ""
    }`}
  >
    <div>
      <p className="font-heading text-[length:var(--text-h2)] font-extrabold leading-none text-git-white">
        <CountUp end={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-2 font-heading text-lg font-bold text-git-light">
        {stat.label}
      </p>
      <p className="mt-3 font-sans text-base leading-relaxed text-git-muted">
        {stat.description}
      </p>
    </div>

    <img
      src={stat.image}
      alt=""
      loading="lazy"
      className="h-32 w-full self-end object-contain object-right sm:h-36"
    />
  </article>
);

export default ImpactCard;
