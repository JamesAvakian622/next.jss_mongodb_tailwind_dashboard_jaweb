import React, { useEffect, useState } from "react";

const STORAGE_KEY = "ja_cookie_consent_v1";

/**
 * Floating cookie consent banner shown until the user explicitly chooses
 * Accept All or Decline. The selection is persisted in localStorage so the
 * banner does not reappear on subsequent visits.
 *
 * Styled to match the reference site (jamesavakian.com): bottom-left card,
 * dark surface, blue title, paired Decline / Accept All buttons.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  // Read prior choice on mount. We render only after this check so the banner
  // doesn't briefly flash for users who already made a decision.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // Private mode / storage disabled — show the banner anyway.
      setVisible(true);
    }
  }, []);

  const recordChoice = (choice) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: Date.now() })
      );
    } catch {
      // Ignore storage failures; UX still continues.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-[100000] sm:right-auto sm:max-w-sm"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="rounded-xl border border-white/10 bg-[#0f1115] p-5 shadow-2xl ring-1 ring-black/40">
        <h2
          id="cookie-consent-title"
          className="text-base font-semibold text-sky-400"
        >
          Cookies &amp; Tracking
        </h2>
        <p
          id="cookie-consent-desc"
          className="mt-2 text-sm leading-relaxed text-gray-300"
        >
          We use cookies to enhance your experience, analyze site traffic, and
          support our marketing efforts. By clicking &ldquo;Accept&rdquo;, you
          agree to our use of cookies.
        </p>
        <div className="mt-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => recordChoice("declined")}
            className="rounded-md border border-white/15 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => recordChoice("accepted")}
            className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
