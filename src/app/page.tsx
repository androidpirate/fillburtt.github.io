import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 text-center">

        <div className="home-font mt-2 text-4xl tracking-[0.18em] md:text-6xl">
          fillburtt
        </div>

        {/* Optional: replace with your real logo mark later */}
        <div className="mt-10 flex justify-center">
        <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/25">
        <span className="heading-font text-white/75" style={{ fontSize: 64 }}>
      f
    </span>
  </div>
</div>


        <Link
          href="/tour"
          className="mt-10 inline-flex items-center justify-center border border-white/40 px-10 py-4 text-sm tracking-[0.22em] opacity-90 hover:opacity-100">
          Tour Tickets
        </Link>
      </div>
    </main>
  );
}
