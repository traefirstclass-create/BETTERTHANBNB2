import { Container } from "@/components/ui/Container";

const FAQS = [
  {
    q: "Do I need to already own or lease a rental property?",
    a: "No. The course teaches the arbitrage model from the beginning, including how to find and get approved for a lease you can sublease as a short-term rental.",
  },
  {
    q: "Is this self-paced?",
    a: "Yes. All 8 modules unlock as soon as you enroll, and you keep access to work through them on your own schedule.",
  },
  {
    q: "How do I access the course after I buy?",
    a: "Right after checkout you'll be prompted to create your account. Once it's set up, every module is available in your student portal.",
  },
  {
    q: "What if short-term rentals aren't allowed where I live?",
    a: "Module 2 covers how to evaluate a market's regulations before you commit, and Module 8 covers staying compliant as rules change.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-10 text-center font-display text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl border border-cream/10 bg-ink-soft p-5"
              >
                <summary className="cursor-pointer list-none font-medium text-cream marker:content-none">
                  {q}
                </summary>
                <p className="mt-3 text-sm text-cream/60">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
