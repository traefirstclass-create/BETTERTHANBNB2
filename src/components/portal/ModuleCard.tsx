import Link from "next/link";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import type { CourseModule } from "@/lib/modules";

export function ModuleCard({
  courseModule,
  completed,
}: {
  courseModule: CourseModule;
  completed: boolean;
}) {
  return (
    <Link
      href={`/portal/modules/${courseModule.id}`}
      className="flex items-center gap-4 rounded-xl border border-cream/10 bg-ink-soft p-5 transition hover:border-gold/30"
    >
      <span className="font-display text-2xl font-semibold text-gold-gradient">
        {String(courseModule.id).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold">{courseModule.title}</h3>
        <p className="mt-1 text-sm text-cream/60">{courseModule.description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2 text-cream/40">
        {completed ? (
          <CheckCircle2 className="h-6 w-6 text-gold" />
        ) : (
          <PlayCircle className="h-6 w-6" />
        )}
      </div>
    </Link>
  );
}

export function ProgressSummary({
  total,
  completed,
}: {
  total: number;
  completed: number;
}) {
  return (
    <div className="mb-8 flex items-center gap-3 text-sm text-cream/60">
      <Circle className="h-4 w-4 text-gold" fill={completed === total ? "currentColor" : "none"} />
      {completed} of {total} modules completed
    </div>
  );
}
