import Logo from "@/components/Logo";
import PageHeader from "@/components/PageHeader";
import { RELEASES } from "@/app/data/media";
import {
  Music2,          // Spotify placeholder icon
  Apple,           // Apple Music icon
  Youtube,         // YouTube Music icon
  AudioLines      // SoundCloud placeholder icon
} from "lucide-react";

const PLATFORM_ICON = {
  Spotify: Music2,
  "Apple Music": Apple,
  "YouTube Music": Youtube,
  SoundCloud: AudioLines,
} as const;


type Platform = {
  name: string;
  href: string;
  Icon: React.ElementType;
};

type Release = {
  label: string;
  title: string;
  description: string;
  coverSrc: string;
  platforms: Platform[];
  tracklist?: { n: number; name: string; length: string }[];
};

function PlatformLinks({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {platforms.map((p) => {
        const Icon = p.Icon;
        return (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 bg-black/20 px-3 py-2 text-xs tracking-[0.14em] text-white/80 hover:text-white"
            aria-label={p.name}
          >
            <Icon size={16} />
            {p.name}
          </a>
        );
      })}
    </div>
  );
}

export default function MediaPage() {
  return (
    <main className="min-h-screen pb-24">
      <PageHeader title="MEDIA" />

      <section className="mx-auto max-w-6xl px-5 pt-16">
        {RELEASES.map((r) => (
          <div key={r.title} className="mx-auto max-w-5xl">
            {/* Top divider like the mock */}
            <div className="border-t border-white/20" />

            <div className="grid gap-10 py-12 md:grid-cols-2 md:items-start">
              {/* Left column: text */}
              <div className="md:pt-4">
                <div className="text-xs tracking-[0.22em] text-white/60">
                  {r.label}
                </div>

                <h2 className="mt-3 text-3xl tracking-[0.14em] md:text-4xl">
                  {r.title}
                </h2>

                <p className="mt-5 max-w-prose text-sm leading-6 text-white/70">
                  {r.description}
                </p>
              </div>

              {/* Right column: cover + actions */}
              <div className="md:justify-self-end">
                <div className="mb-4 flex gap-3">
                  <button className="border border-white/25 bg-black/20 px-5 py-2 text-xs tracking-[0.18em] text-white/80 hover:text-white">
                    BUY ALBUM
                  </button>
                  <button className="border border-white/25 bg-black/20 px-5 py-2 text-xs tracking-[0.18em] text-white/80 hover:text-white">
                    SHARE
                  </button>
                </div>

                <div className="w-full max-w-[420px] border border-white/10 bg-black/20 p-3">
                  <img
                    src={r.coverSrc}
                    alt={`${r.title} cover`}
                    className="h-auto w-full"
                  />
                </div>

                {/* Replaces media player with platform icons */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
  {(Object.keys(PLATFORM_ICON) as Array<keyof typeof PLATFORM_ICON>).map(
    (name) => {
      const url = r.links?.[name];
      if (!url) return null;
      const Icon = PLATFORM_ICON[name];

      return (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-white/20 bg-black/20 px-3 py-2 text-xs tracking-[0.14em] text-white/80 hover:text-white"
          aria-label={name}
        >
          <Icon size={16} />
          {name}
        </a>
      );
    }
  )}
</div>


              </div>
            </div>

            {/* Bottom divider like the mock */}
            <div className="border-t border-white/20" />
          </div>
        ))}
      </section>
    </main>
  );
}
