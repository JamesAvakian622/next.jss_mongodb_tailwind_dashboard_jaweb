import React from "react";
import CoolJimmyLogo from "../images/cool-jimmy-logo.png";

/**
 * Welcome splash overlay.
 *
 * Shown once on first visit (until the user clicks Continue). The
 * Cool Jimmy image fills the viewport behind a centered slate card
 * with the title, the name, and a Continue button.
 */
export default function WelcomeSplash({ onContinue }) {
  return (
    <div
      className="fixed inset-0 z-999999 flex items-center justify-center overflow-hidden bg-black p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-splash-title"
    >
      {/* Welcome card */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-slate-600/70 bg-slate-700/85 px-8 py-12 text-center shadow-2xl backdrop-blur-sm">
        <h1
          id="welcome-splash-title"
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Welcome To My Website
        </h1>
        <p className="mt-3 text-3xl font-extrabold tracking-tight text-blue-500 sm:text-4xl">
          James Avakian
        </p>

        {/* Logo at its natural size */}
        <img
          src={CoolJimmyLogo}
          alt="Cool Jimmy logo"
          className="mx-auto mt-6 h-auto w-auto"
        />

        <button
          type="button"
          onClick={onContinue}
          className="mt-8 rounded-lg bg-sky-500 px-8 py-3 text-base font-semibold text-white shadow-xl ring-1 ring-white/40 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-slate-700"
        >
          Continue to website
        </button>
      </div>
    </div>
  );
}
