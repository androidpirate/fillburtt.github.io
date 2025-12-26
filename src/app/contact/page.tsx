"use client";

import Logo from "@/components/Logo";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

function TextField({
  label,
  required,
  type = "text",
}: {
  label: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs tracking-[0.18em] text-white/55">
        {label} {required ? "*" : ""}
      </div>
      <input
        type={type}
        required={required}
        className="w-full border border-white/25 bg-black/20 px-4 py-3 text-sm text-white/85 outline-none focus:border-white/50"
      />
    </label>
  );
}

function TextArea({ label }: { label: string }) {
  return (
    <label className="block">
      <div className="mb-2 text-xs tracking-[0.18em] text-white/55">{label}</div>
      <textarea
        rows={5}
        className="w-full resize-none border border-white/25 bg-black/20 px-4 py-3 text-sm text-white/85 outline-none focus:border-white/50"
      />
    </label>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen px-5 pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="h-[2px] w-10 bg-white/70" />
        <PageHeader title="CONTACT" />
      </div>

      {/* Form */}
      <section className="mx-auto mt-16 max-w-3xl">
        <div className="text-center text-xs tracking-[0.28em] text-white/70">
          DROP US A LINE
        </div>

        <form
          className="mx-auto mt-10 max-w-2xl space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField label="First Name" required />
          <TextField label="Last Name" required />
          <TextField label="Email" required type="email" />
          <TextField label="Phone" />

          <TextArea label="Leave us a message..." />

          <div className="pt-2">
            <button
              type="submit"
              className="border border-white/40 bg-white/90 px-10 py-3 text-xs tracking-[0.22em] text-black hover:bg-white"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Management / Booking */}
      <section className="mx-auto mt-20 max-w-3xl text-center">
        <div className="space-y-14">
          <div>
            <div className="heading-font text-lg tracking-[0.22em]">MANAGEMENT</div>
            <div className="mt-4 text-sm text-white/70">
              <div className="tracking-[0.12em] text-white/80">KAREN BLANCHE</div>
              <div className="mt-2">info@mysite.com</div>
              <div className="mt-1">Tel: 123-456-7890</div>
            </div>
          </div>

          <div>
            <div className="heading-font text-lg tracking-[0.22em]">BOOKING</div>
            <div className="mt-4 text-sm text-white/70">
              <div className="tracking-[0.12em] text-white/80">THE BOOKERZ, DANIEL KU</div>
              <div className="mt-2">info@mysite.com</div>
              <div className="mt-1">Tel: 123-456-7890</div>
            </div>
          </div>
        </div>

        {/* Bottom social row / footer note */}
        <div className="mx-auto mt-16 max-w-xl border-t border-white/15 pt-10 text-xs text-white/50">
          <div className="mb-3 tracking-[0.18em]">Follow us on:</div>
          <div className="flex items-center justify-center gap-5 text-white/75">
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
          <div className="mt-10 text-[11px] text-white/35">
            © {new Date().getFullYear()} fillburtt
          </div>
        </div>
      </section>
    </main>
  );
}
