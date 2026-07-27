import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getEntitlementForCurrentUser } from "@/lib/entitlement";
import { getModuleById } from "@/lib/modules";

export async function POST(req: Request) {
  const entitlement = await getEntitlementForCurrentUser();
  if (!entitlement) {
    return NextResponse.json({ error: "No purchase found" }, { status: 403 });
  }

  const body = await req.json();
  const moduleId = Number(body.moduleId);
  const completed = Boolean(body.completed);

  if (!getModuleById(moduleId)) {
    return NextResponse.json({ error: "Invalid module" }, { status: 400 });
  }

  await prisma.moduleProgress.upsert({
    where: {
      purchaseId_moduleId: { purchaseId: entitlement.id, moduleId },
    },
    create: {
      purchaseId: entitlement.id,
      moduleId,
      completed,
      completedAt: completed ? new Date() : null,
    },
    update: {
      completed,
      completedAt: completed ? new Date() : null,
    },
  });

  return NextResponse.json({ ok: true });
}
