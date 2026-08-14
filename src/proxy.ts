import { clerkMiddleware } from "@clerk/nextjs/server";

// Auth checks live at the resource level (see src/app/portal/layout.tsx),
// per Clerk's current guidance: path-based matching here can diverge from
// how Next.js actually routes a request. This proxy only establishes the
// Clerk request context so `auth()` works in Server Components/routes.
export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
