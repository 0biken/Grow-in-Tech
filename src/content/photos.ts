/**
 * Photo slots.
 *
 * Each slot resolves to a real GiT photo when one exists in
 * `src/assets/community/<slot>.(jpg|jpeg|png|webp|avif)`, otherwise to an
 * illustrative Unsplash photo. Illustrative photos are always credited and
 * captioned so they never read as GiT events (see BRAND_GUIDE.md, Imagery).
 */
const localPhotos = import.meta.glob<string>("../assets/community/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

export type PhotoSlot =
  | "hero"
  | "circle"
  | "friends"
  | "stage"
  | "panel"
  | "learner"
  | "builder"
  | "crowd"
  | "portrait"
  | "together";

type StockPhoto = { id: string; photographer: string; username: string; alt: string };

const stock: Record<PhotoSlot, StockPhoto> = {
  hero: { id: "1655720348590-c739c860beed", photographer: "Iwaria Inc.", username: "iwaria", alt: "Students sitting on outdoor steps with laptops" },
  circle: { id: "1655720357872-ce227e4164ba", photographer: "Iwaria Inc.", username: "iwaria", alt: "Three young women talking over a laptop" },
  friends: { id: "1648301033733-44554c74ec50", photographer: "Creab ThePolymath", username: "cr_eab", alt: "Friends leaning over a balcony together" },
  stage: { id: "1744973149714-46786187c6aa", photographer: "Lisa Marie Theck", username: "lisa_marie_theck", alt: "A speaker holding a microphone" },
  panel: { id: "1776039325163-f45315a484f3", photographer: "Dwayne joe", username: "spliff_dj_joe", alt: "Panel discussion in a bright room" },
  learner: { id: "1675250719891-37d4747c9e3d", photographer: "Akinyemi Gbadamosi", username: "mhyk3y", alt: "A woman working on a laptop" },
  builder: { id: "1541178735493-479c1a27ed24", photographer: "X", username: "disruptxn", alt: "A young man working on a laptop" },
  crowd: { id: "1755705152670-0cfe7829fd0e", photographer: "Ufoma Ojo", username: "ladyufoma001", alt: "A group of friends laughing outdoors" },
  portrait: { id: "1771412198236-c2a5a5778fb8", photographer: "Mudadi Saidi", username: "mudadisaidi", alt: "A young woman holding a laptop" },
  together: { id: "1589483232748-515c025575bc", photographer: "Siviwe Kapteyn", username: "kaps_snaps", alt: "Three friends smiling together, in black and white" },
};

export type ResolvedPhoto = {
  src: string;
  srcSet?: string;
  alt: string;
  /** Present only for illustrative stock photos. */
  credit?: { name: string; href: string };
};

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=72`;

export function getPhoto(slot: PhotoSlot, width = 1200, alt?: string): ResolvedPhoto {
  const local = Object.entries(localPhotos).find(([path]) => path.split("/").pop()?.split(".")[0] === slot)?.[1];
  const photo = stock[slot];
  if (local) return { src: local, alt: alt ?? photo.alt };

  return {
    src: unsplash(photo.id, width),
    srcSet: [0.5, 1, 1.6].map((scale) => `${unsplash(photo.id, Math.round(width * scale))} ${Math.round(width * scale)}w`).join(", "),
    alt: alt ?? photo.alt,
    credit: {
      name: photo.photographer,
      href: `https://unsplash.com/@${photo.username}?utm_source=grow_in_tech&utm_medium=referral`,
    },
  };
}
