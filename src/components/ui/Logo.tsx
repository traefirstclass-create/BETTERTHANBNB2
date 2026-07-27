/**
 * Placeholder brand mark: a simple key-and-roofline glyph plus wordmark,
 * built in the gold/bronze palette until the client's actual logo files
 * (PNG/SVG) are dropped into /public and swapped in here.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a5a2b" />
          <stop offset="55%" stopColor="#d9a441" />
          <stop offset="100%" stopColor="#f3d27a" />
        </linearGradient>
      </defs>
      <circle
        cx="16"
        cy="12"
        r="8"
        fill="none"
        stroke="url(#logo-gold)"
        strokeWidth="4"
      />
      <rect x="14" y="19" width="4" height="14" fill="url(#logo-gold)" />
      <path
        d="M4 30 L24 18 L44 30"
        fill="none"
        stroke="url(#logo-gold)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  wordmarkClassName = "text-xl",
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span
        className={`font-display font-semibold tracking-wide ${wordmarkClassName}`}
      >
        <span className="text-gold-gradient">BETTER THAN</span>{" "}
        <span>BNB</span>
      </span>
    </span>
  );
}
