export default function Logo({
    className = "",
    size = 44,
  }: {
    className?: string;
    size?: number;
  }) {
    return (
      <div
        className={[
          "heading-font select-none leading-none text-white/75",
          className,
        ].join(" ")}
        style={{ fontSize: size }}
        aria-hidden="true"
      >
        f
      </div>
    );
  }
  