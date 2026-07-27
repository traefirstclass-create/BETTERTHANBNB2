import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { getEntitlementForCurrentUser } from "@/lib/entitlement";

export default async function PortalLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const entitlement = await getEntitlementForCurrentUser();

  if (!entitlement) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="max-w-md rounded-2xl border border-cream/10 bg-ink-soft p-8 text-center">
          <h1 className="font-display text-2xl font-bold">
            No purchase found on this account
          </h1>
          <p className="mt-3 text-sm text-cream/60">
            We don&rsquo;t see a completed Better Than BNB purchase linked to
            this account yet. If you just paid, this can take a minute to
            sync — otherwise, enroll below.
          </p>
          <Link
            href="/#pricing"
            className="mt-6 inline-block rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-ink"
          >
            View Enrollment
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream/10 bg-ink/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/portal">
            <Logo wordmarkClassName="text-base" />
          </Link>
          <UserButton />
        </Container>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
