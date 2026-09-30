import { getPhoto, type PhotoSlot } from "../content/photos";

type PhotoProps = {
  slot: PhotoSlot;
  /** Rendered width hint used to request the right stock size. */
  width?: number;
  sizes?: string;
  alt?: string;
  /** Decorative photos get empty alt text. */
  decorative?: boolean;
  tone?: "natural" | "mono" | "duotone";
  /**
   * Stock-photo credit. "plain" drops the links, for photos inside a link.
   * Use "none" only when the page credits the photo elsewhere.
   */
  credit?: "overlay" | "plain" | "none";
  /** Where the credit sits; use "top" when card text occupies the bottom. */
  creditPosition?: "top" | "bottom";
  /** Class for an overlay painted above the image but below the credit. */
  shade?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * Brand-treated photo. Real GiT photos load from src/assets/community; until
 * then an illustrative stock photo is shown with a visible credit.
 */
export default function Photo({
  slot,
  width = 1200,
  sizes = "100vw",
  alt,
  decorative = false,
  tone = "natural",
  credit = "overlay",
  creditPosition = "bottom",
  shade,
  priority = false,
  className = "",
  imgClassName = "",
}: PhotoProps) {
  const photo = getPhoto(slot, width, alt);

  return (
    <figure className={`photo photo-${tone} ${className}`}>
      <img
        src={photo.src}
        srcSet={photo.srcSet}
        sizes={photo.srcSet ? sizes : undefined}
        alt={decorative ? "" : photo.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={imgClassName}
      />
      {shade && <div className={shade} aria-hidden="true" />}
      {photo.credit && credit !== "none" && (
        <figcaption
          className={`photo-credit ${creditPosition === "top" ? "photo-credit-top" : ""}`}
          // Inside a link the credit would pollute the link's name; the image is decorative there.
          aria-hidden={credit === "plain" || undefined}
        >
          {credit === "plain" ? (
            <>Illustrative photo · {photo.credit.name} / Unsplash</>
          ) : (
            <>
              Illustrative photo ·{" "}
              <a href={photo.credit.href} target="_blank" rel="noopener noreferrer">
                {photo.credit.name}
              </a>
              {" / "}
              <a href="https://unsplash.com/?utm_source=grow_in_tech&utm_medium=referral" target="_blank" rel="noopener noreferrer">
                Unsplash
              </a>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
