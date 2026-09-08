# Grow In Tech: website brand guide

This is the current implementation reference for GiT's website. The user-supplied **GIT.pdf** (seven-page visual deck) and **20260725_180307.png** are the visual sources. The existing **GiT_Website_PRD.pdf** remains the functional reference. Both PDFs are preserved unchanged. Where their visual descriptions differ, this guide follows the deck and records the web adaptations below.

## Identity demonstrated in the deck

- A boxed GIT wordmark with fixed letterforms, frame, and proportions (pages 1, 3, 4, 6, 7).
- Near-black, vivid blue, ice blue, and white. White or ice-blue marks on dark backgrounds; a near-black mark on ice blue.
- A vertical vivid-blue-to-deep-navy gradient (pages 4 and 6).
- Nimbus Sans L Bold Italic headlines (page 5).
- Event photography, including a monochrome treatment with a white mark (pages 2 and 3). This sample is a visual reference, not evidence of a GiT event.

## Web palette

The source PDF contains raster artwork, not a color specification. These are sampled approximations, not claimed original production values.

| Role | Value | Application |
| --- | --- | --- |
| Near-black | `#0B191A` | Footer, dark theme, primary text on light surfaces |
| Vivid blue | `#158FFC` | Hero gradient, decorative accents, selected filter backgrounds |
| Ice blue | `#B6DFFF` | Light accent surfaces, text/buttons on dark backgrounds |
| White | `#FFFFFF` | Main light surface and high-contrast text |
| Deep navy | `#010552` | Gradient endpoint |
| Accessible blue | `#0A4BA7` | Light-theme links and white-text buttons; gradient midpoint |

The accessible blue is a web adaptation. Use `linear-gradient(180deg, #158FFC 0%, #0A4BA7 48%, #010552 100%)` for the hero. Do not introduce unrelated teal, green, purple, or yellow decorative accents.

Supporting web surfaces are `#EEF7FF`, `#DDEEFF`, `#10272E`, and `#183640`. Light-theme body/muted text uses `#304750` / `#516773`. Dark-theme body text is `#EAF5FF`, with ice-blue secondary text. These supporting colors are implementation choices rather than deck swatches.

Use white text on accessible blue; near-black text on vivid blue or ice blue. Use accessible blue text on white/ice-blue surfaces. Do not use white small text on vivid blue. Check actual rendered contrast, especially on gradients and translucent surfaces: at least 4.5:1 for normal text, 3:1 for large text and meaningful control boundaries. Visible keyboard focus is required in both themes.

## Typography and spacing

Nimbus font files are not supplied. The approved web substitute is `Arial, Helvetica, sans-serif`, bold (700) and italic for headings. This is a substitution, not an assertion that the fonts are identical. Body copy and controls retain bundled Inter, with regular body weight and medium/semibold emphasis. Do not italicize navigation, form labels, or long paragraphs.

Use fluid headline sizes, tight headline spacing, and generous paragraph line height. The home display title scales from 3.2rem to 7rem; interior headings use the existing fluid heading tokens. Keep paragraph measure around 65 characters. Preserve room around italic glyphs so they are not clipped.

The website alternates a dark/blue hero and footer with white/ice-blue content, while retaining the dark theme. Page containers keep 1.5rem mobile padding, expanding on larger screens. The home headline and both CTAs must remain visible at 390px-wide phone and 1366x768 laptop sizes without arbitrary full-screen height pushing actions below the fold.

## Logo implementation

`public/images/git-mark.png` is a byte-for-byte copy of the supplied PNG. Do not redraw, stretch, skew, rotate, add shadows to, or alter the frame/letter spacing of the mark.

The PNG is 3264x1836 with substantial transparent padding. Its alpha bounds are x=797, y=524, width=1656, height=799. `BrandLogo` uses a CSS alpha mask sized and positioned to these bounds, retaining the exact artwork at a 1656:799 ratio. No image pixels are edited. The favicon embeds the same image in a square near-black SVG wrapper.

Web defaults: display at 88px wide in navigation and footer, with at least 12px clear space on all sides. This minimum size and spacing are web-specific rules, not measurements from the deck. Use near-black on light surfaces and white/ice blue on dark ones. Supply one accessible name on the enclosing home link or logo component; avoid announcing decorative duplicates.

## Imagery and motion

Use real, verified community photography when it is available. Monochrome imagery is directly supported by the deck; brand-blue duotone is an optional PRD-derived treatment. Preserve image context and do not imply stock or sample photographs depict GiT activities.

Until verified photography is available, use the site's simple blue/ice-blue geometric panels as decoration, marked `aria-hidden`. These panels are web adaptations, not additional logo marks. Do not repeat the logo as a background pattern. Avoid colorful clip art, emoji badges, particle networks, circuit-board motifs, and terminal styling.

Keep restrained scroll reveals, navigation feedback, and the existing announcement/partner marquee patterns. Respect reduced-motion settings; all content must remain readable without animation. Do not animate the logo's proportions.

## Maintenance and scope

Shared tokens and treatments live in `src/App.css`; reusable logo and geometry live in `src/components`. Existing routes, registration/community destinations, copy, and filters are retained. Content verification, placeholder replacement, contact delivery, and new pages are separate workstreams. No backend or public API is introduced by this alignment.

Before shipping a visual change, check all routes in both themes at 390px, 768px, and 1440px; check the home hero at 1366x768, keyboard focus, menu resizing, theme persistence, reduced motion, links, and contrast. Run `npm run build` and `npm run lint`.
