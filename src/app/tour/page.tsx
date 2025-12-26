
import PageHeader from "@/components/PageHeader";
import Logo from "@/components/Logo";
import { TOUR_DATES } from "@/app/data/tour";

export default function TourPage() {
  return (
    <main className="min-h-screen px-5 pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="h-[2px] w-10 bg-white/70" />
        <PageHeader title="TOUR DATES" />
      </div>

      {/* Divider */}
      <div className="mx-auto mt-16 max-w-4xl border-t border-white/20" />

      {/* Dates */}
      <div className="mx-auto max-w-4xl divide-y divide-white/15">
        {TOUR_DATES.map((show, i) => (
          <div
            key={i}
            className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center"
          >
            <div>
              <div className="text-xs tracking-[0.18em] text-white/60">
                {show.date}
              </div>
              <div className="mt-2 tracking-[0.14em]">
                <span className="text-white/90">{show.venue}</span>
                <span className="text-white/50"> / {show.city}</span>
              </div>
            </div>

            <a
              href={show.ticketsUrl}
              className="border border-white/40 px-8 py-3 text-xs tracking-[0.22em] opacity-90 hover:opacity-100"
            >
              BUY TICKETS
            </a>
          </div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="mx-auto mt-10 max-w-4xl border-t border-white/20" />
    </main>
  );
}
