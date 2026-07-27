import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    try {
      await handleCheckoutCompleted(session);
    } catch (err) {
      // Log and still return 200 — Stripe retries on non-2xx, and entitlement
      // lookup self-heals by email on the buyer's next portal visit.
      console.error("Failed to record purchase from webhook", err);
    }
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email?.toLowerCase();
  if (!email) {
    console.error("Checkout session completed without a customer email", session.id);
    return;
  }

  const clerkUserId =
    typeof session.metadata?.clerkUserId === "string" ? session.metadata.clerkUserId : null;

  await prisma.purchase.upsert({
    where: { stripeCheckoutSessionId: session.id },
    create: {
      email,
      clerkUserId,
      stripeCustomerId:
        typeof session.customer === "string" ? session.customer : null,
      stripeCheckoutSessionId: session.id,
      stripePaymentIntentId:
        typeof session.payment_intent === "string" ? session.payment_intent : null,
      amountTotal: session.amount_total ?? 0,
      currency: session.currency ?? "usd",
      status: "COMPLETED",
    },
    update: {
      status: "COMPLETED",
    },
  });
}
