// Bump sidebar section / link text sizes in one pass.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(__dirname, "..", "src", "components", "Sidebar.jsx");

let s = readFileSync(path, "utf8");
const before = s;

// Accordion group headings: About / Work / Media — was text-xs, bump to text-base.
s = s.replace(
  /text-xs font-semibold uppercase tracking-wider text-black\/60 hover:text-black dark:text-bodydark2 dark:hover:text-white/g,
  "text-base font-semibold uppercase tracking-wider text-black/60 hover:text-black dark:text-bodydark2 dark:hover:text-white"
);

// Group sub-list rows: was text-sm, bump to text-base. Pattern is unique to
// the sub-list NavLinks under the JA accordions.
s = s.replace(
  /py-1\.5 px-6 text-sm font-medium text-body hover:bg-gray-2/g,
  "py-2 px-6 text-base font-medium text-body hover:bg-gray-2"
);

if (s === before) {
  console.error("No replacements made — patterns may have changed.");
  process.exit(1);
}

writeFileSync(path, s);
console.log("Sidebar text sizes bumped.");
