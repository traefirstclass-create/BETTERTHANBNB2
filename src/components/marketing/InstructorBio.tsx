import { Container } from "@/components/ui/Container";

export function InstructorBio() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-2xl border border-cream/10 bg-ink-soft p-8 sm:grid-cols-[auto_1fr] sm:p-10">
          <div className="mx-auto h-32 w-32 shrink-0 rounded-full bg-gold-gradient sm:mx-0" />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              Your Instructor
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Rasheen Castale
            </h2>
            <p className="mt-4 text-cream/70">
              Rasheen Castale is the owner of 813BNB, a short-term rental
              arbitrage business built without owning a single property.
              After learning the model firsthand — landlord conversations,
              furnishing on a budget, and the systems to run units remotely —
              Rasheen turned that operating playbook into Better Than BNB, so
              other operators can skip the trial and error.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
