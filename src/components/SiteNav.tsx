"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Instagram, Youtube, Facebook, Music2 } from "lucide-react";
import { SOCIALS } from "@/app/data/socials";


const NAV = [
  { href: "/", label: "HOME" },
  { href: "/tour", label: "TOUR" },
  { href: "/media", label: "MEDIA" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "text-xs tracking-[0.22em] transition-opacity",
        active ? "opacity-100" : "opacity-70 hover:opacity-100",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        {/* Social icons (no Login, no EPK) */}
        <div className="hidden items-center gap-4 md:flex">
          <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100">
            <Facebook size={18} />
          </a>
          <a href="#" aria-label="Instagram" className="opacity-80 hover:opacity-100">
            <Instagram size={18} />
          </a>
          <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100">
            <Youtube size={18} />
          </a>
          <a href="#" aria-label="Spotify" className="opacity-80 hover:opacity-100">
            <Music2 size={18} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/90">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <span className="text-xs tracking-[0.22em] opacity-70">MENU</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>

          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 pt-8">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                {...item}
                onClick={() => setOpen(false)}
              />
            ))}

            <div className="mt-6 flex items-center gap-5 opacity-90">
              <Facebook size={20} />
              <Instagram size={20} />
              <Youtube size={20} />
              <Music2 size={20} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
