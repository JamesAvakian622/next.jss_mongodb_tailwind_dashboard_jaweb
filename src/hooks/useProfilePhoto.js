import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "ja-dashboard-profile-photo";
const CHANGE_EVENT = "ja-profile-photo-changed";

export function readStoredProfilePhoto() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

function notifyPhotoChanged() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Custom avatar image persisted in localStorage; overrides optional external URL (e.g. Clerk).
 */
export function useProfilePhoto(externalUrl) {
  const [customUrl, setCustomUrl] = useState(readStoredProfilePhoto);

  useEffect(() => {
    const sync = () => setCustomUrl(readStoredProfilePhoto());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const persist = useCallback((dataUrl) => {
    try {
      if (dataUrl) localStorage.setItem(STORAGE_KEY, dataUrl);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore quota */
    }
    setCustomUrl(dataUrl || "");
    notifyPhotoChanged();
  }, []);

  const setFromFile = useCallback(
    (file) => {
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") persist(result);
      };
      reader.readAsDataURL(file);
    },
    [persist]
  );

  const resolvedSrc = customUrl || externalUrl || null;

  return {
    resolvedSrc,
    setFromFile,
    clearCustom: () => persist(""),
    hasCustom: Boolean(customUrl),
  };
}
