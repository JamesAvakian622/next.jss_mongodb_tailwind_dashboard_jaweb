import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import App from "./App";
import CookieConsent from "./components/CookieConsent";
import "./index.css";
import "./satoshi.css";

// Support both NEXT_PUBLIC_* (shared with Next.js projects) and legacy VITE_*
// names. Vite is configured in vite.config.js to expose NEXT_PUBLIC_* vars.
const env = import.meta.env;
const clerkPublishableKey =
  env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || env.VITE_CLERK_PUBLISHABLE_KEY;
const convexUrl = env.NEXT_PUBLIC_CONVEX_URL || env.VITE_CONVEX_URL;

// Single shared Convex client for the whole app.
const convexClient = convexUrl ? new ConvexReactClient(convexUrl) : null;

const appTree = (
  <Router>
    <App />
    {/* Global cookie consent banner — shown on every route, including Clerk sign-in. */}
    <CookieConsent />
  </Router>
);

// Wrap the app in Convex + Clerk when both are configured, Clerk-only when
// only Clerk is set, and bare otherwise (dev convenience).
let wrappedTree = appTree;
if (clerkPublishableKey) {
  wrappedTree = (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      signInUrl="/auth/clerk/sign-in"
      signUpUrl="/auth/clerk/sign-up"
      afterSignOutUrl="/"
    >
      {convexClient ? (
        <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
          {appTree}
        </ConvexProviderWithClerk>
      ) : (
        appTree
      )}
    </ClerkProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{wrappedTree}</React.StrictMode>
);
