import Logo from "@/components/Logo";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pt-32">
      <div className="h-[2px] w-10 bg-white/70" />
      <h1 className="heading-font mt-6 text-3xl tracking-[0.22em] md:text-4xl">
        {title}
      </h1>
      <Logo className="mt-6 opacity-80" />
    </div>
  );
}
