import { Container } from "@/components/ui/Container";
import { MODULES } from "@/lib/modules";
import { Lock } from "lucide-react";

export function CurriculumPreview() {
  return (
    <section id="curriculum" className="py-20">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
            The Curriculum
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            8 modules, start to scale
          </h2>
          <p className="mt-4 text-cream/60">
            Every module unlocks the moment you enroll. Work through it at
            your own pace, in order or by whatever comes up next in your
            business.
          </p>
        </div>
        <ol className="mx-auto grid max-w-3xl gap-4">
          {MODULES.map((courseModule) => (
            <li
              key={courseModule.id}
              className="flex items-start gap-4 rounded-xl border border-cream/10 bg-ink-soft p-5"
            >
              <span className="font-display text-2xl font-semibold text-gold-gradient">
                {String(courseModule.id).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">
                  {courseModule.title}
                </h3>
                <p className="mt-1 text-sm text-cream/60">
                  {courseModule.description}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1.5 pt-1 text-xs text-cream/40">
                <Lock className="h-3.5 w-3.5" />
                {courseModule.duration}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
