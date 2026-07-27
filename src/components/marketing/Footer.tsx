import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-cream/40 sm:flex-row">
        <Logo wordmarkClassName="text-sm" />
        <p>&copy; {new Date().getFullYear()} Better Than BNB. All rights reserved.</p>
      </Container>
    </footer>
  );
}
