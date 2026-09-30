import ScrubText from "../components/ScrubText";
import { getPhoto, type PhotoSlot } from "../content/photos";

/** Plain <img> so the pill stays valid inside the paragraph. */
const pill = (slot: PhotoSlot) => (
  <span className="inline-photo photo photo-mono" aria-hidden="true">
    <img src={getPhoto(slot, 240).src} alt="" loading="lazy" decoding="async" />
  </span>
);

const inlineSlots: PhotoSlot[] = ["portrait", "learner", "friends"];

export default function Manifesto() {
  const credits = inlineSlots.map((slot) => getPhoto(slot).credit).filter((credit) => credit !== undefined);

  return (
    <section className="chapter" aria-label="Who we are">
      <div className="container-page">
        <ScrubText
          className="mx-auto max-w-6xl font-heading text-[length:var(--text-statement)] font-bold italic leading-[1.12] tracking-[-0.03em] text-git-title"
          parts={[
            "We are medics and economists, artists and engineers",
            pill("portrait"),
            "first-time coders and seasoned builders — learning out loud",
            pill("learner"),
            "building side by side, and pulling each other",
            pill("friends"),
            "into the digital economy.",
          ]}
        />
        {credits.length > 0 && (
          <p className="mx-auto mt-10 max-w-6xl text-xs text-git-muted">
            Inline photos are illustrative, by{" "}
            {credits.map((credit, i) => (
              <span key={credit.href}>
                <a href={credit.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{credit.name}</a>
                {i < credits.length - 1 ? ", " : ""}
              </span>
            ))}{" "}
            on Unsplash.
          </p>
        )}
      </div>
    </section>
  );
}
