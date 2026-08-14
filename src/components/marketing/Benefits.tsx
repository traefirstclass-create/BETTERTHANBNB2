import { Container } from "@/components/ui/Container";
import { Building2, Key, MessagesSquare, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    icon: Key,
    title: "No property purchase required",
    description:
      "Partner with property owners instead of buying real estate: lower upfront cost, faster first booking.",
  },
  {
    icon: MessagesSquare,
    title: "Real partnership scripts, not theory",
    description:
      "The exact property-owner pitches, marketing posts, and guest-communication templates Rasheen uses today.",
  },
  {
    icon: Building2,
    title: "Skip Airbnb's fees and rules",
    description:
      "Learn the direct cash-rental model Rasheen runs instead, built from operating 813BNB, not theory.",
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
