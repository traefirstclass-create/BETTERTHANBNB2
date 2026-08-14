import { Container } from "@/components/ui/Container";
import { prisma } from "@/lib/db";
import { MODULES } from "@/lib/modules";
import type { PurchaseStatus } from "@prisma/client";

export default async function AdminPage() {
  let purchases;
  try {
    purchases = await prisma.purchase.findMany({
      orderBy: { createdAt: "desc" },
      include: { moduleProgress: true },
    });
  } catch (err) {
    return (
      <div className="py-16">
        <Container>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Admin page error
          </h1>
          <p className="mt-2 text-cream/60">
            The purchases query failed. Copy the details below back to Claude.
          </p>
          <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-xl border border-red-500/30 bg-ink-soft p-4 text-xs text-red-300">
            {err instanceof Error ? `${err.name}: ${err.message}\n\n${err.stack}` : String(err)}
          </pre>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-16">
      <Container>
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Students</h1>
        <p className="mt-2 text-cream/60">
          {purchases.length} {purchases.length === 1 ? "purchase" : "purchases"} total.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-cream/10">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-cream/10 bg-ink-soft text-xs uppercase tracking-wide text-cream/50">
              <tr>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Purchased</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Progress</th>
                <th className="px-4 py-3 font-medium">Account linked</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream/10">
              {purchases.map((purchase) => {
                const completed = purchase.moduleProgress.filter((m) => m.completed).length;
                return (
                  <tr key={purchase.id}>
                    <td className="px-4 py-3">{purchase.email}</td>
                    <td className="px-4 py-3 text-cream/70">
                      {purchase.createdAt.toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-cream/70">
                      ${(purchase.amountTotal / 100).toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={purchase.status} />
                    </td>
                    <td className="px-4 py-3 text-cream/70">
                      {completed}/{MODULES.length}
                    </td>
                    <td className="px-4 py-3 text-cream/70">
                      {purchase.clerkUserId ? "Yes" : "Not yet"}
                    </td>
                  </tr>
                );
              })}
              {purchases.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-cream/40">
                    No purchases yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

function StatusBadge({ status }: { status: PurchaseStatus }) {
  const styles: Record<PurchaseStatus, string> = {
    COMPLETED: "bg-gold/15 text-gold-light",
    PENDING: "bg-cream/10 text-cream/60",
    REFUNDED: "bg-red-500/15 text-red-400",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
