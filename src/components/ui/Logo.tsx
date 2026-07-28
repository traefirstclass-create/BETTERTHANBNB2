import Image from "next/image";

export function LogoMark({ className = "h-9" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Better Than BNB"
      width={1226}
      height={1497}
      className={`w-auto ${className}`}
    />
  );
}

export function Logo({
  className = "",
  wordmarkClassName = "text-xl",
  markClassName = "h-9",
}: {
  className?: string;
  wordmarkClassName?: string;
  markClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-display font-semibold tracking-wide ${wordmarkClassName}`}
      >
        <span className="text-gold-gradient">BETTER THAN</span>{" "}
        <span>BNB</span>
      </span>
    </span>
  );
}
