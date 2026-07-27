import { Container } from "@/components/ui/Container";
import { Building2, Key, MessagesSquare, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    icon: Key,
    title: "No property purchase required",
    description:
      "Start with a leased unit instead of a mortgage — lower upfront cost, faster first booking.",
  },
  {
    icon: MessagesSquare,
    title: "Real scripts, not theory",
    description:
      "The exact landlord pitches, listing copy, and guest-communication templates Rasheen uses today.",
  },
  {
    icon: Building2,
    title: "Built from an operating business",
    description:
      "Every module comes from running 813BNB, not from someone who only teaches the model.",
  },
  {
    icon: TrendingUp,
    title: "A path to scale, not just one unit",
    description:
      "Learn the systems and cash-flow discipline that let you add a second, third, and tenth unit.",
  },
];

export function Benefits() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-cream/10 bg-ink-soft p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient">
                <Icon className="h-5 w-5 text-ink" />
              </div>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-cream/60">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
