/** Decorative geometry, not a photograph or claim about a community project. */
export default function BrandPanel({ variant = 0 }: { variant?: number }) {
  return <div className={`brand-panel brand-panel-${variant % 3}`} aria-hidden="true"><span /><span /><span /></div>;
}
