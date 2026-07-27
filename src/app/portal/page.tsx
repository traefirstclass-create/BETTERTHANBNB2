import { Container } from "@/components/ui/Container";
import { ModuleCard, ProgressSummary } from "@/components/portal/ModuleCard";
import { MODULES } from "@/lib/modules";
import { getEntitlementForCurrentUser } from "@/lib/entitlement";

export default async function PortalPage() {
  const entitlement = await getEntitlementForCurrentUser();
  const completedIds = new Set(
    entitlement?.moduleProgress.filter((p) => p.completed).map((p) => p.moduleId) ?? []
  );

  return (
    <div className="py-16">
      <Container>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">
          Your Course
        </h1>
        <p className="mt-2 text-cream/60">
          Welcome back. Pick up where you left off.
        </p>
        <div className="mt-8">
          <ProgressSummary total={MODULES.length} completed={completedIds.size} />
        </div>
        <div className="flex flex-col gap-4">
          {MODULES.map((courseModule) => (
            <ModuleCard
              key={courseModule.id}
              courseModule={courseModule}
              completed={completedIds.has(courseModule.id)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
