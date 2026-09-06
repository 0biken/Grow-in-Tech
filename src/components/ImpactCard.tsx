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

const ImpactCard = ({ stat }: { stat: ImpactStat }) => (
  <article className="glass-card flex h-full flex-col justify-between gap-6 p-8 transition-all duration-300">
    <div>
      <p className="font-heading text-[length:var(--text-h2)] font-extrabold leading-none text-git-accent">
        <CountUp end={stat.value} suffix={stat.suffix} />
      </p>
      <p className="mt-2 font-heading text-lg font-bold text-git-title">
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
