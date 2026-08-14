import { BuyButton } from "@/components/marketing/BuyButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,164,65,0.14),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-5 rounded-full border border-gold/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
          Taught by Rasheen Castell, Owner of 813BNB
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
          Turn One Lease Into a{" "}
          <span className="text-gold-gradient">Short-Term Rental Business</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/70 sm:text-xl">
          Better Than BNB is the step-by-step arbitrage system Rasheen used to
          go from a single sublease to a growing portfolio, without buying
          any real estate.
        </p>
        <div className="mt-10">
          <BuyButton />
        </div>
        <a
          href="#curriculum"
          className="mt-6 text-sm text-cream/50 underline underline-offset-4 hover:text-cream/80"
        >
          See what&rsquo;s inside the 8 modules
        </a>
      </div>
    </section>
  );
}
