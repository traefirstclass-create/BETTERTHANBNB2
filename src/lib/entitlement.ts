import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import type { Purchase, ModuleProgress } from "@prisma/client";

export type PurchaseWithProgress = Purchase & { moduleProgress: ModuleProgress[] };

/**
 * Resolves purchase access for the signed-in Clerk user. Looks up by
 * clerkUserId first (the fast path once linked), then falls back to the
 * account's primary email — covering buyers who paid before creating an
 * account — and lazily backfills clerkUserId on that row when it matches.
 */
export async function getEntitlementForCurrentUser(): Promise<PurchaseWithProgress | null> {
  const { userId } = await auth();
  if (!userId) return null;

  const byClerkId = await prisma.purchase.findUnique({
    where: { clerkUserId: userId },
    include: { moduleProgress: true },
  });
  if (byClerkId) return byClerkId;

  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress?.toLowerCase();
  if (!email) return null;

  const byEmail = await prisma.purchase.findUnique({ where: { email } });
  if (!byEmail) return null;

  return prisma.purchase.update({
    where: { id: byEmail.id },
    data: { clerkUserId: userId },
    include: { moduleProgress: true },
  });
}
