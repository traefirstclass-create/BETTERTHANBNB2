import Stripe from "stripe";

let cachedClient: Stripe | null = null;

// Lazily constructed so importing this module (e.g. during Next.js's build-time
// page-data collection) never requires STRIPE_SECRET_KEY to already be set.
export function getStripe(): Stripe {
  if (!cachedClient) {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    cachedClient = new Stripe(secretKey, {
      apiVersion: "2026-06-24.dahlia",
    });
  }
  return cachedClient;
}
