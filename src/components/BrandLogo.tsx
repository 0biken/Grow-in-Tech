/** Original boxed artwork, framed to its alpha bounds with a CSS mask. */
export default function BrandLogo({ className = "", labelled = false }: { className?: string; labelled?: boolean }) {
  return <span className={`brand-logo ${className}`} role={labelled ? "img" : undefined} aria-label={labelled ? "Grow In Tech" : undefined} aria-hidden={labelled ? undefined : true} />;
}
