import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { ProgressCheckbox } from "@/components/portal/ProgressCheckbox";
import { MODULES, getModuleById } from "@/lib/modules";
import { getEntitlementForCurrentUser } from "@/lib/entitlement";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  const id = Number(moduleId);
  const courseModule = getModuleById(id);
  if (!courseModule) notFound();

  const entitlement = await getEntitlementForCurrentUser();
  const completed =
    entitlement?.moduleProgress.some((p) => p.moduleId === id && p.completed) ?? false;

  const prevModule = getModuleById(id - 1);
  const nextModule = getModuleById(id + 1);

  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <Link
          href="/portal"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-cream/50 hover:text-cream/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all modules
        </Link>

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
          Module {String(courseModule.id).padStart(2, "0")} of {MODULES.length}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          {courseModule.title}
        </h1>
        <p className="mt-3 text-cream/60">{courseModule.description}</p>

        <div className="mt-8">
          <VideoPlayer source={courseModule.videoSource} />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <ProgressCheckbox moduleId={courseModule.id} initialCompleted={completed} />
          <div className="flex gap-3">
            {prevModule && (
              <Link
                href={`/portal/modules/${prevModule.id}`}
                className="flex items-center gap-1.5 rounded-full border border-cream/15 px-4 py-2.5 text-sm text-cream/70 hover:border-gold/40"
              >
                <ArrowLeft className="h-4 w-4" />
                Prev
              </Link>
            )}
            {nextModule && (
              <Link
                href={`/portal/modules/${nextModule.id}`}
                className="flex items-center gap-1.5 rounded-full border border-cream/15 px-4 py-2.5 text-sm text-cream/70 hover:border-gold/40"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
