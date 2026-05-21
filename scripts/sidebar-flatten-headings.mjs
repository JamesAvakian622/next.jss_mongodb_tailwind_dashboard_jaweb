// One-shot rewrite: drop the bold/uppercase styling on the three accordion
// headings (Work / About / Media) so they match the other nav link names.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(__dirname, "..", "src", "components", "Sidebar.jsx");

const before = readFileSync(path, "utf8");
const after = before.replaceAll(
  "text-base font-semibold uppercase tracking-wider text-black/60 hover:text-black dark:text-bodydark2 dark:hover:text-white",
  "text-base font-medium text-body hover:text-black dark:text-bodydark1 dark:hover:text-white"
);

if (after === before) {
  console.error("No replacements made.");
  process.exit(1);
}

writeFileSync(path, after);
console.log("Sidebar accordion headings flattened.");
