# Better Than BNB

Landing page, checkout, and student portal for **Better Than BNB**, a short-term rental arbitrage course by Rasheen Castell (owner of 813BNB).

- **Framework:** Next.js (App Router, TypeScript, Tailwind CSS)
- **Auth:** [Clerk](https://clerk.com)
- **Payments:** [Stripe Checkout](https://stripe.com) (one-time payment)
- **Database:** Postgres via [Prisma](https://www.prisma.io): stores purchase/entitlement records and per-module progress. Clerk owns user identity; there is no local `User` table.
- **Video:** placeholder player for now (`src/components/video/VideoPlayer.tsx`); swap in a real provider (Mux, Cloudflare Stream, Vimeo) later without restructuring routes or the schema.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and fill in the values (see below).
3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Environment variables

See [`.env.example`](./.env.example). You'll need:

- A **Clerk** app (test/dev instance for local development).
- A **Stripe** account with a one-time $497 Price created for the course, plus a webhook endpoint.
- A **Postgres** database (e.g. Vercel Postgres / Neon). `DATABASE_URL` is the pooled connection used at runtime; `DIRECT_URL` is the direct connection used only for running migrations.

## Testing the checkout + webhook flow locally

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Copy the printed `whsec_...` into `STRIPE_WEBHOOK_SECRET` in `.env.local`, then complete a test purchase with card `4242 4242 4242 4242` (any future expiry, any CVC).

## Deployment (Vercel)

- Add all env vars from `.env.example` to the Vercel project (per environment).
- Add a second Stripe webhook endpoint in the Stripe Dashboard pointing at `https://<your-domain>/api/webhooks/stripe`, and use that endpoint's own signing secret in production; it's different from the `stripe listen` secret used locally.
