import PageHeader from "@/components/PageHeader";
import Logo from "@/components/Logo";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-5 pt-32 pb-24">
      {/* Header */}
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="h-[2px] w-10 bg-white/70" />
        <PageHeader title="ABOUT" />
      </div>

      {/* Content */}
      <section className="mx-auto mt-16 max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Left: quote + text */}
          <div>
            <blockquote className="heading-font text-xl leading-8 text-white/75 md:text-2xl">
              “Replace this quote with your press quote. Keep it roughly the same
              line length as the mock.”
            </blockquote>

            <div className="mt-4 text-xs tracking-[0.18em] text-white/45">
              - The MetaMag -
            </div>

            <div className="mt-10 space-y-6 text-sm leading-6 text-white/60">
              <p>
                Replace this paragraph with your bio. Keep a similar density to
                the mock so the layout holds.
              </p>
              <p>
                Add additional paragraph content here. This section is designed
                to be long-form, like the mock.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="md:justify-self-end">
            <div className="w-full max-w-[480px] border border-white/10 bg-black/20 p-3">
              <img
                src="/assets/about-photo.jpg"
                alt="About"
                className="h-auto w-full opacity-95"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
