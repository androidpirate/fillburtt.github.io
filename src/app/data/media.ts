export type MediaPlatform =
  | "Spotify"
  | "Apple Music"
  | "YouTube Music"
  | "SoundCloud";

export type Release = {
  label: string;         // e.g. "THE NEW ALBUM"
  title: string;         // e.g. "RAGING CLOUDS"
  description: string;
  coverSrc: string;      // in /public/assets
  buyUrl?: string;
  shareUrl?: string;
  links: Partial<Record<MediaPlatform, string>>;
};

export const RELEASES: Release[] = [
  {
    label: "THE NEW ALBUM",
    title: "RAGING CLOUDS",
    description:
      "Replace this with your album description. Keep similar length to preserve the mock layout.",
    coverSrc: "/assets/album-cover.jpg",
    buyUrl: "#",
    shareUrl: "#",
    links: {
      Spotify: "#",
      "Apple Music": "#",
      "YouTube Music": "#",
      SoundCloud: "#",
    },
  },
];
