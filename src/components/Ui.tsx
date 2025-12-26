import Link from "next/link";

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`border-t border-white/20 ${className}`} />;
}

export function GhostButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center border border-white/40 bg-black/20 px-8 py-3 text-xs tracking-[0.22em] text-white/85 hover:text-white hover:border-white/60";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${className}`} type="button">
      {children}
    </button>
  );
}

export function SolidButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={[
        "inline-flex items-center justify-center border border-white/40 bg-white/90 px-10 py-3 text-xs tracking-[0.22em] text-black hover:bg-white",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
