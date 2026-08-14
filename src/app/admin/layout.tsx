import type { ReactNode } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { isAdminEmail } from "@/lib/admin";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  if (!isAdminEmail(user?.primaryEmailAddress?.emailAddress)) {
    redirect("/portal");
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cream/10 bg-ink/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/admin">
            <Logo wordmarkClassName="text-base" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/portal"
              className="text-sm font-medium text-cream/80 hover:text-cream"
            >
              Portal
            </Link>
            <UserButton />
          </div>
        </Container>
      </header>
      <main className="flex-1">{children}</main>
    </>
  );
}
