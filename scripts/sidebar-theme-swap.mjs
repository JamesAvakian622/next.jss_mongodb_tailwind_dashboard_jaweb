// Bulk-replace hard-coded sidebar colors with theme-aware pairs.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(__dirname, "..", "src", "components", "Sidebar.jsx");

let s = readFileSync(path, "utf8");
const before = s;

// Root <aside>: black surface in dark, white surface in light.
s = s.replace(
  /(\babsolute left-0 top-0 z-9999 flex h-screen w-72\.5 flex-col overflow-y-hidden )bg-black( duration-300 ease-linear dark:bg-boxdark)/,
  "$1bg-white$2"
);

// Cool Jimmy logo ring: dark borders look weird on white. Soften them.
s = s.replace(
  /border-2 border-white\/20 object-cover shadow-md ring-2 ring-white\/10/g,
  "border-2 border-black/10 object-cover shadow-md ring-2 ring-black/5 dark:border-white/20 dark:ring-white/10"
);

// "Cool Jimmy" tagline link.
s = s.replace(
  /text-base font-medium text-bodydark1 underline-offset-2 hover:text-white hover:underline dark:text-bodydark2/g,
  "text-base font-medium text-black/70 underline-offset-2 hover:text-black hover:underline dark:text-bodydark2 dark:hover:text-white"
);

// Section heading "MENU".
s = s.replace(
  /text-sm font-semibold text-bodydark2/g,
  "text-sm font-semibold text-black/60 dark:text-bodydark2"
);

// Accordion group buttons (About / Work / Media headings).
s = s.replace(
  /text-xs font-semibold uppercase tracking-wider text-bodydark2 hover:text-white/g,
  "text-xs font-semibold uppercase tracking-wider text-black/60 hover:text-black dark:text-bodydark2 dark:hover:text-white"
);

// Generic nav-link rows.
s = s.replace(
  /font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4/g,
  "font-medium text-body hover:bg-gray-2 dark:text-bodydark1 dark:hover:bg-meta-4 duration-300 ease-in-out"
);

// Active state pill.
s = s.replace(/bg-graydark dark:bg-meta-4/g, "bg-gray-2 dark:bg-meta-4");

// Sub-item nav links.
s = s.replace(
  /font-medium text-bodydark2 duration-300 ease-in-out hover:text-white/g,
  "font-medium text-body hover:text-black dark:text-bodydark2 dark:hover:text-white duration-300 ease-in-out"
);

// Active sub-item override.
s = s.replace(
  /\(isActive && "!text-white"\)/g,
  '(isActive && "!text-black dark:!text-white")'
);

// Divider between groups.
s = s.replace(
  /border-strokedark\/40/g,
  "border-stroke dark:border-strokedark/40"
);

if (s === before) {
  console.error("No replacements made — patterns may have changed.");
  process.exit(1);
}

writeFileSync(path, s);
console.log("Sidebar updated.");
