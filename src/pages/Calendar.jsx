import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import {
  useCalendarDayEvents,
  dateKeyFromParts,
  buildMonthWeeks,
  WEEK_LABELS_SHORT,
} from "../hooks/useCalendarDayEvents";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DayModal({
  open,
  onClose,
  dateLabel,
  subject,
  time,
  where,
  onSubject,
  onTime,
  onWhere,
  onSave,
  onClear,
}) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open, onClose]);

  useEffect(() => {
    if (open && panelRef.current) {
      const first = panelRef.current.querySelector("input, textarea, button");
      first?.focus?.();
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cal-day-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close"
      />
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-md rounded-sm border border-stroke bg-white p-6 shadow-2 dark:border-strokedark dark:bg-boxdark"
      >
        <h2
          id="cal-day-title"
          className="mb-4 text-lg font-semibold text-black dark:text-white"
        >
          {dateLabel}
        </h2>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1.5 block text-sm font-medium text-black dark:text-white"
              htmlFor="cal-subject"
            >
              Subject
            </label>
            <input
              id="cal-subject"
              type="text"
              value={subject}
              onChange={(e) => onSubject(e.target.value)}
              className="w-full rounded border border-stroke bg-transparent px-4 py-2.5 text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
              placeholder="Event title"
            />
          </div>
          <div>
            <label
              className="mb-1.5 block text-sm font-medium text-black dark:text-white"
              htmlFor="cal-time"
            >
              Time
            </label>
            <input
              id="cal-time"
              type="text"
              value={time}
              onChange={(e) => onTime(e.target.value)}
              className="w-full rounded border border-stroke bg-transparent px-4 py-2.5 text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
              placeholder="e.g. 2:00 PM – 3:30 PM"
            />
          </div>
          <div>
            <label
              className="mb-1.5 block text-sm font-medium text-black dark:text-white"
              htmlFor="cal-where"
            >
              Where
            </label>
            <input
              id="cal-where"
              type="text"
              value={where}
              onChange={(e) => onWhere(e.target.value)}
              className="w-full rounded border border-stroke bg-transparent px-4 py-2.5 text-black outline-none focus:border-primary dark:border-strokedark dark:text-white"
              placeholder="Address or link"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClear}
            className="rounded border border-stroke px-4 py-2 text-sm font-medium text-black hover:bg-gray-2 dark:border-strokedark dark:text-white dark:hover:bg-meta-4"
          >
            Clear day
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-stroke px-4 py-2 text-sm font-medium text-black hover:bg-gray-2 dark:border-strokedark dark:text-white dark:hover:bg-meta-4"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function MiniMonth({
  year,
  monthIndex,
  onPickDay,
  getDay,
  highlight,
}) {
  const weeks = buildMonthWeeks(year, monthIndex);

  return (
    <div
      className={`rounded-sm border bg-white p-3 shadow-1 dark:bg-boxdark sm:p-4 ${
        highlight
          ? "border-primary ring-2 ring-primary dark:border-primary"
          : "border-stroke dark:border-strokedark"
      }`}
    >
      <h3 className="mb-2 text-center text-sm font-semibold text-black dark:text-white sm:text-base">
        {MONTH_NAMES[monthIndex]} {year}
      </h3>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium text-body dark:text-bodydark sm:text-xs">
        {WEEK_LABELS_SHORT.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="mt-1 space-y-0.5">
        {weeks.map((row, ri) => (
          <div key={ri} className="grid grid-cols-7 gap-0.5">
            {row.map((day, di) => {
              if (day === null) {
                return (
                  <div
                    key={`e-${ri}-${di}`}
                    className="min-h-[1.75rem] sm:min-h-[2rem]"
                  />
                );
              }
              const key = dateKeyFromParts(year, monthIndex, day);
              const entry = getDay(key);
              const has = Boolean(
                entry &&
                  (entry.subject?.trim() ||
                    entry.time?.trim() ||
                    entry.where?.trim())
              );

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onPickDay(year, monthIndex, day)}
                  title={
                    has
                      ? `${entry.subject || "Event"} — ${entry.time || ""} @ ${entry.where || ""}`
                      : `Add details for ${key}`
                  }
                  className={`relative flex min-h-[1.75rem] flex-col items-center justify-start rounded-sm border border-transparent px-0.5 py-0.5 text-[10px] transition hover:border-primary hover:bg-gray-2 dark:hover:bg-meta-4 sm:min-h-[2rem] sm:text-xs ${
                    has
                      ? "bg-primary/15 font-semibold text-primary dark:bg-primary/25"
                      : "text-black dark:text-white"
                  }`}
                >
                  <span>{day}</span>
                  {has && (
                    <span className="mt-0.5 line-clamp-2 w-full text-left text-[9px] font-normal leading-tight text-body dark:text-bodydark sm:text-[10px]">
                      {entry.subject || "·"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

const Calendar = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [focusMonth, setFocusMonth] = useState(now.getMonth());
  const { getDay, setDay, clearDay } = useCalendarDayEvents();

  const goPrevMonth = () => {
    if (focusMonth === 0) {
      setYear((y) => y - 1);
      setFocusMonth(11);
    } else {
      setFocusMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (focusMonth === 11) {
      setYear((y) => y + 1);
      setFocusMonth(0);
    } else {
      setFocusMonth((m) => m + 1);
    }
  };

  const goThisMonth = () => {
    const d = new Date();
    setYear(d.getFullYear());
    setFocusMonth(d.getMonth());
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [where, setWhere] = useState("");

  const openForDay = (y, m, d) => {
    const key = dateKeyFromParts(y, m, d);
    setActiveKey(key);
    const e = getDay(key);
    setSubject(e?.subject ?? "");
    setTime(e?.time ?? "");
    setWhere(e?.where ?? "");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveKey(null);
  };

  const handleSave = () => {
    if (!activeKey) return;
    setDay(activeKey, { subject, time, where });
    closeModal();
  };

  const handleClear = () => {
    if (!activeKey) return;
    clearDay(activeKey);
    setSubject("");
    setTime("");
    setWhere("");
    closeModal();
  };

  const modalDateLabel = activeKey
    ? new Date(activeKey + "T12:00:00").toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Calendar" />

      <div className="mb-6 flex flex-col gap-4 rounded-sm border border-stroke bg-white px-4 py-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <span aria-hidden>←</span>
            Back to dashboard
          </Link>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <p className="text-xs uppercase tracking-wide text-body dark:text-bodydark">
              Month &amp; year
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
              <button
                type="button"
                onClick={goPrevMonth}
                className="rounded border border-stroke px-3 py-1.5 text-sm font-medium text-black hover:bg-gray-2 dark:border-strokedark dark:text-white dark:hover:bg-meta-4"
                aria-label="Previous month"
              >
                ←
              </button>
              <span className="min-w-[12rem] text-center text-xl font-semibold tracking-tight text-black dark:text-white sm:text-2xl">
                {MONTH_NAMES[focusMonth]} {year}
              </span>
              <button
                type="button"
                onClick={goNextMonth}
                className="rounded border border-stroke px-3 py-1.5 text-sm font-medium text-black hover:bg-gray-2 dark:border-strokedark dark:text-white dark:hover:bg-meta-4"
                aria-label="Next month"
              >
                →
              </button>
            </div>
            <button
              type="button"
              onClick={goThisMonth}
              className="text-xs font-medium text-primary hover:underline"
            >
              Jump to this month
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-stroke pt-4 dark:border-strokedark sm:flex-row sm:items-center">
          <p className="text-sm text-body dark:text-bodydark">
            Click any day to set <strong>Subject</strong>, <strong>Time</strong>,
            and <strong>Where</strong>. Data is saved in this browser only.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs text-body dark:text-bodydark">
              Year:
            </span>
            <button
              type="button"
              onClick={() => setYear((y) => y - 1)}
              className="rounded border border-stroke px-3 py-1.5 text-sm font-medium text-black hover:bg-gray-2 dark:border-strokedark dark:text-white dark:hover:bg-meta-4"
              aria-label="Previous year"
            >
              ←
            </button>
            <span className="min-w-[3rem] text-center text-lg font-semibold text-black dark:text-white">
              {year}
            </span>
            <button
              type="button"
              onClick={() => setYear((y) => y + 1)}
              className="rounded border border-stroke px-3 py-1.5 text-sm font-medium text-black hover:bg-gray-2 dark:border-strokedark dark:text-white dark:hover:bg-meta-4"
              aria-label="Next year"
            >
              →
            </button>
            <button
              type="button"
              onClick={() => setYear(new Date().getFullYear())}
              className="rounded bg-primary px-3 py-1.5 text-sm font-medium text-white hover:bg-opacity-90"
            >
              This year
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {MONTH_NAMES.map((_, monthIndex) => (
          <MiniMonth
            key={`${year}-${monthIndex}`}
            year={year}
            monthIndex={monthIndex}
            onPickDay={openForDay}
            getDay={getDay}
            highlight={monthIndex === focusMonth}
          />
        ))}
      </div>

      <DayModal
        open={modalOpen}
        onClose={closeModal}
        dateLabel={modalDateLabel}
        subject={subject}
        time={time}
        where={where}
        onSubject={setSubject}
        onTime={setTime}
        onWhere={setWhere}
        onSave={handleSave}
        onClear={handleClear}
      />
    </DefaultLayout>
  );
};

export default Calendar;
