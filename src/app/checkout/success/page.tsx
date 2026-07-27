import Link from "next/link";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { getStripe } from "@/lib/stripe";
import { Container } from "@/components/ui/Container";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const { userId } = await auth();

  if (userId) {
    return (
      <SuccessMessage
        heading="You're in."
        body={
          <>
            Your purchase is linked to your account.{" "}
            <Link href="/portal" className="text-gold-light underline">
              Go to your course
            </Link>
            .
          </>
        }
      />
    );
  }

  if (!sessionId) {
    return (
      <SuccessMessage
        heading="Payment received"
        body="Create your account to access the course."
        cta={{ href: "/sign-up", label: "Create your account" }}
      />
    );
  }

  const session = await getStripe().checkout.sessions.retrieve(sessionId);
  const email = session.customer_details?.email;

  if (!email) {
    return (
      <SuccessMessage
        heading="Payment received"
        body="Create your account to access the course."
        cta={{ href: "/sign-up", label: "Create your account" }}
      />
    );
  }

  const client = await clerkClient();
  const existing = await client.users.getUserList({ emailAddress: [email] });
  const hasAccount = existing.totalCount > 0;

  return (
    <SuccessMessage
      heading="Payment received"
      body={
        hasAccount
          ? "We found an account with this email — sign in to access your course."
          : "One more step — create your account to access the course."
      }
      cta={{
        href: hasAccount
          ? `/sign-in?email=${encodeURIComponent(email)}`
          : `/sign-up?email=${encodeURIComponent(email)}`,
        label: hasAccount ? "Sign in" : "Create your account",
      }}
    />
  );
}

function SuccessMessage({
  heading,
  body,
  cta,
}: {
  heading: string;
  body: React.ReactNode;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <Container className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold">{heading}</h1>
        <p className="mt-3 text-cream/60">{body}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-8 inline-block rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-ink"
          >
            {cta.label}
          </Link>
        )}
      </Container>
    </div>
  );
}
