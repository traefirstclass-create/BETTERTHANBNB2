import { Container } from "@/components/ui/Container";
import { BuyButton } from "@/components/marketing/BuyButton";
import { Check } from "lucide-react";

const INCLUDED = [
  "All 8 course modules, unlocked immediately",
  "Lifetime access to your student portal",
  "Property partnership scripts and agreements",
  "Progress tracking as you complete each module",
];

export function PricingCta() {
  return (
    <section id="pricing" className="py-20">
      <Container className="flex justify-center">
        <div className="w-full max-w-lg rounded-2xl border border-gold/30 bg-ink-soft p-8 text-center sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
            Founding Cohort Price
          </p>
          <p className="mt-4 font-display text-5xl font-bold">
            $497
            <span className="ml-2 text-base font-normal text-cream/50">
              one-time
            </span>
          </p>
          <p className="mt-2 text-xs text-cream/40">
            Price rises to $997 as enrollment fills. Lock in the founding rate now.
          </p>
          <ul className="mx-auto mt-8 flex max-w-xs flex-col gap-3 text-left text-sm text-cream/70">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <BuyButton />
          </div>
        </div>
      </Container>
    </section>
  );
}
