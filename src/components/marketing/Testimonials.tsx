import { Container } from "@/components/ui/Container";

const PLACEHOLDER_SLOTS = [1, 2, 3];

/**
 * Structural placeholder only. Swap these three slots for real student
 * quotes/names before launch. Left visibly marked as placeholders rather
 * than filled with invented reviews.
 */
export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
            What Students Say
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Real results, coming soon
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {PLACEHOLDER_SLOTS.map((slot) => (
            <div
              key={slot}
              className="rounded-2xl border border-dashed border-cream/20 bg-ink-soft/60 p-6 text-sm text-cream/40"
            >
              <p>
                Testimonial placeholder #{slot}. Replace with a real
                student quote and name before this page goes live.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
