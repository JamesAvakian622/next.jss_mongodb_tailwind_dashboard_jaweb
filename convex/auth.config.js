/**
 * Convex auth configuration.
 *
 * Tells the Convex deployment to trust JWTs issued by your Clerk instance,
 * so `ConvexProviderWithClerk` on the frontend produces tokens this backend
 * will accept.
 *
 * The `domain` value is your Clerk Frontend API URL (e.g.
 * https://clerk.your-app.com or https://<slug>.clerk.accounts.dev).
 *
 * Set CLERK_JWT_ISSUER_DOMAIN as an environment variable on your Convex
 * deployment with `npx convex env set CLERK_JWT_ISSUER_DOMAIN <url>`.
 */
export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};
