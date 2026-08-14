import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { isAdminEmail } from "@/lib/admin";

export async function Header() {
  const user = await currentUser();
  const isAdmin = isAdminEmail(user?.primaryEmailAddress?.emailAddress);

  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-ink/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/">
          <Logo wordmarkClassName="text-base" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-cream/70 sm:flex">
          <a href="#curriculum" className="hover:text-cream">
            Curriculum
          </a>
          <a href="#about" className="hover:text-cream">
            About
          </a>
          <a href="#faq" className="hover:text-cream">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Show when="signed-in">
            {isAdmin && (
              <Link
                href="/admin"
                className="text-sm font-medium text-cream/80 hover:text-cream"
              >
                Admin
              </Link>
            )}
            <Link
              href="/portal"
              className="text-sm font-medium text-cream/80 hover:text-cream"
            >
              Portal
            </Link>
            <UserButton />
          </Show>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-sm font-medium text-cream/80 hover:text-cream">
                Sign In
              </button>
            </SignInButton>
          </Show>
        </div>
      </Container>
    </header>
  );
}
