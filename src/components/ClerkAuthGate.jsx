import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

/**
 * When Clerk is enabled: unauthenticated users only see /auth/clerk/* routes.
 * Authenticated users proceed to the main app (splash + routes).
 */
export default function ClerkAuthGate({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();
  const onClerkAuthRoute = location.pathname.startsWith("/auth/clerk");

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-gray-2 dark:bg-boxdark-2">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm font-medium text-body dark:text-bodydark">
          Signing you in…
        </p>
      </div>
    );
  }

  if (!isSignedIn && !onClerkAuthRoute) {
    return <Navigate to="/auth/clerk/sign-in" replace />;
  }

  return children;
}
