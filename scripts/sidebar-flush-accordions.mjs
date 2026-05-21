// Remove top-margin spacers on the three accordion buttons so closed
// accordions sit at the same row spacing as the rest of the sidebar.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(__dirname, "..", "src", "components", "Sidebar.jsx");

const before = readFileSync(path, "utf8");
let after = before;

// First accordion (Work) used mt-4. Drop it.
after = after.replaceAll(
  "group relative mt-4 flex w-full items-center justify-between rounded-sm",
  "group relative flex w-full items-center justify-between rounded-sm"
);

// Second + third accordions (About / Media) used mt-3. Drop those too.
after = after.replaceAll(
  "group relative mt-3 flex w-full items-center justify-between rounded-sm",
  "group relative flex w-full items-center justify-between rounded-sm"
);

if (after === before) {
  console.error("No replacements made.");
  process.exit(1);
}

writeFileSync(path, after);
console.log("Sidebar accordion top-margin spacers removed.");
