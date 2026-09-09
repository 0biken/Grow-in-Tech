# 001 — Establish crisp motion and a single icon system

- **Status**: DONE
- **Commit**: 37fdfed
- **Severity**: MEDIUM
- **Category**: Performance, cohesion, accessibility, and missed opportunities
- **Estimated scope**: 10–14 files, moderate change

## Problem

GiT has a clear blue-and-black visual identity but uses broad transitions in commonly
seen interactive surfaces. These animate unintended properties and make future motion
work harder to keep smooth. The current registrations and partner area are deliberately
static and should remain that way.

```tsx
// src/pages/Home.tsx:45 — current
className="btn-primary text-center justify-center text-base py-3.5 px-7 font-bold shadow-lg hover:shadow-git-accent/25 transition-all"
```

```tsx
// src/pages/ProgramsPage.tsx:209 — current
className="flex flex-col relative overflow-hidden glass-card p-8 sm:p-9 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-git-border"
```

The product also uses text arrows and locally drawn UI marks in several places. Adding
icons ad hoc would create a mixed visual language. The existing `usePrefersReducedMotion`
hook and GSAP reveal pattern are the correct foundations, but they need shared motion
tokens and a single, documented icon family.

## Target

Use `@phosphor-icons/react` as the only UI icon library. Retain GiT and JCI artwork as
image assets. Use 1.5px regular icons at 16px in text links, 20px in controls, and 24px
in feature labels. Icon-only controls must have an accessible name; decorative icons must
be `aria-hidden="true"`.

Add these tokens to `src/App.css` and use them for all new motion:

```css
/* target */
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
}

.btn-primary {
  transition: background-color 200ms ease, color 200ms ease,
    box-shadow 200ms ease, transform 160ms var(--ease-out);
}

@media (hover: hover) and (pointer: fine) {
  .btn-primary:hover { transform: translateY(-2px); }
}

.btn-primary:active { transform: scale(0.97); }

@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover { transform: none; }
  .btn-primary:active { transform: none; }
}
```

Keep the registration banner static. Home reveals should use only `opacity` and
`transform`, run once per session of scrolling, and retain visible content under reduced
motion. Do not add parallax, cursor effects, a marquee, or looped decorative motion.

## Repo conventions to follow

- Motion styles are centralized in `src/App.css`; use that file for tokens and media
  queries rather than adding a second animation stylesheet.
- `src/hooks/usePrefersReducedMotion.ts` is the source of truth for JavaScript motion
  gating.
- `src/sections/Hero.tsx` uses GSAP through `useGSAP`; follow its cleanup pattern for
  one-time reveal timelines.
- `src/sections/OurImpact.tsx` and `src/sections/OurSignatureTracks.tsx` use
  `ScrollTrigger` with `gsap.context`; extend those rather than adding a second animation
  package.

## Steps

1. Install `@phosphor-icons/react` and create `src/components/Icon.tsx`. Export a small
   wrapper that defaults to `weight="regular"`, `size={20}`, and `aria-hidden="true"`.
   Accept an explicit `label` prop; when supplied, render `aria-hidden={undefined}` and
   `aria-label={label}`. Do not add another icon package.
2. Replace visual-only arrows, emoji badges, and hand-drawn UI symbols in navigation,
   programme cards, contact rows, and buttons with named Phosphor icons. Preserve visible
   text on links and buttons. For a compact icon-only control, pass a clear `label` prop.
3. In `src/App.css`, add the exact `--ease-out` and `--ease-in-out` tokens above. Replace
   every `transition-all` in `src/pages/Home.tsx`, `src/pages/ProgramsPage.tsx`,
   `src/components/ImpactCard.tsx`, and `src/sections/Nav.tsx` with the specific
   properties that visibly change. Do not animate layout properties such as width, height,
   padding, margin, top, or left.
4. Update `.btn-primary` and the secondary button treatment to use the exact target
   transitions above. Limit hover transforms to `@media (hover: hover) and (pointer: fine)`.
   Keep press feedback at `scale(0.97)` for 160ms with `var(--ease-out)`.
5. In `src/sections/Hero.tsx`, keep the existing content order and add only one
   transform-and-opacity entrance: eyebrow, heading, body, CTAs. Use an `ease: "power3.out"`
   GSAP timeline; each element may animate for 0.4s and use a 0.06s stagger. If
   `usePrefersReducedMotion()` returns true, set final states immediately.
6. In `src/sections/OurImpact.tsx`, `src/sections/OurSignatureTracks.tsx`, and
   `src/sections/Sponsor.tsx`, apply one-time viewport reveals with `opacity: 0` and
   `transform: translateY(16px)` as the initial state, and final `opacity: 1` with
   `transform: translateY(0)`. Use `ease: "power3.out"`, 0.45s duration, and a 0.06s
   stagger. When reduced motion is enabled, render final states immediately.
7. Preserve `src/components/AnnouncementBar.tsx` as a static text-and-link banner. Do
   not use a repeating text track, `@keyframes marquee`, or automatic horizontal movement.

## Boundaries

- Do not change routes, copy hierarchy, registration URLs, partner assets, or the contact
  email action.
- Do not change the GiT boxed logo or the JCI logo asset.
- Do not add parallax, cursor-following effects, auto-playing carousels, or continuous
  decorative motion.
- If the code differs from the commit stamped above, stop and reconcile this plan before
  making a motion change.

## Verification

- **Mechanical**: Run `npm run lint` and `npm run build`; both must exit successfully.
- **Feel check**: At 390px, 768px, 1366px, and 1440px widths, use mouse and keyboard to
  open/close the navigation, hover and press primary buttons, and follow internal links.
  The response should begin immediately, reverse smoothly if interrupted, and never shift
  surrounding layout.
- **Feel check**: In browser DevTools Animations, slow playback to 10%. Confirm the hero
  reads in order, section cards use a subtle 60ms stagger, and no motion changes width,
  height, margin, padding, top, or left.
- **Feel check**: Emulate `prefers-reduced-motion: reduce`. Confirm all content is visible
  immediately, hover color and focus feedback remain, and transforms are absent.
- **Done when**: There are no `transition-all` classes in `src`, there is one UI icon
  family, the registration banner remains static, and keyboard focus stays high contrast
  in both themes.
