import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomeSplash from "./components/WelcomeSplash";
import ClerkAuthGate from "./components/ClerkAuthGate";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy-loaded route components — each becomes its own JS chunk so the initial
// bundle stays small and pages load on demand.
const Analytics = lazy(() => import("./pages/Dashboard/Analytics"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Profile = lazy(() => import("./pages/Profile"));
const FormElements = lazy(() => import("./pages/Form/FormElements"));
const FormLayout = lazy(() => import("./pages/Form/FormLayout"));
const Tables = lazy(() => import("./pages/Tables"));
const Settings = lazy(() => import("./pages/Settings"));
const Chart = lazy(() => import("./pages/Chart"));
const Alerts = lazy(() => import("./pages/UiElements/Alerts"));
const Buttons = lazy(() => import("./pages/UiElements/Buttons"));
const SignIn = lazy(() => import("./pages/Authentication/SignIn"));
const SignUp = lazy(() => import("./pages/Authentication/SignUp"));
const ClerkSignIn = lazy(() => import("./pages/ClerkSignIn"));
const ClerkSignUp = lazy(() => import("./pages/ClerkSignUp"));
const Intro = lazy(() => import("./pages/Intro"));
const SitePage = lazy(() => import("./pages/SitePage"));

const clerkEnabled = Boolean(
  import.meta.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
    import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
);

/** Lightweight fallback shown while a lazy route chunk is loading. */
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

/**
 * Routes + footer + welcome splash (splash hidden on Clerk auth pages).
 */
function AppRoutesBody() {
  const location = useLocation();
  const onClerkAuthPage = location.pathname.startsWith("/auth/clerk");
  const onLegacyAuthPage =
    !clerkEnabled && location.pathname.startsWith("/auth");
  const [splashDismissed, setSplashDismissed] = useState(false);

  const showSplash =
    !splashDismissed && !onClerkAuthPage && !onLegacyAuthPage;

  return (
    <>
      {showSplash && (
        <WelcomeSplash onContinue={() => setSplashDismissed(true)} />
      )}
      <ErrorBoundary>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route exact path="/" element={<Analytics />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/site/:slug" element={<SitePage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forms/form-elements" element={<FormElements />} />
            <Route path="/forms/form-layout" element={<FormLayout />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/ui/alerts" element={<Alerts />} />
            <Route path="/ui/buttons" element={<Buttons />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/clerk/sign-in/*" element={<ClerkSignIn />} />
            <Route path="/auth/clerk/sign-up/*" element={<ClerkSignUp />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return null;
  }

  const body = <AppRoutesBody />;

  return clerkEnabled ? <ClerkAuthGate>{body}</ClerkAuthGate> : body;
};

export default App;
