import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "ja-calendar-day-events";

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota */
  }
}

/**
 * Per-day entries: key "YYYY-MM-DD" → { subject, time, where }
 */
export function useCalendarDayEvents() {
  const [byDay, setByDay] = useState(readStore);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) setByDay(readStore());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setDay = useCallback((dateKey, payload) => {
    setByDay((prev) => {
      const next = { ...prev, [dateKey]: { ...payload } };
      writeStore(next);
      return next;
    });
  }, []);

  const clearDay = useCallback((dateKey) => {
    setByDay((prev) => {
      const next = { ...prev };
      delete next[dateKey];
      writeStore(next);
      return next;
    });
  }, []);

  const getDay = useCallback(
    (dateKey) => byDay[dateKey] || null,
    [byDay]
  );

  return { byDay, setDay, clearDay, getDay };
}

export function dateKeyFromParts(year, monthIndex, day) {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

/** Sunday = 0 … Saturday = 6 */
export function buildMonthWeeks(year, monthIndex) {
  const first = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export const WEEK_LABELS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
