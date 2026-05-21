// Replace mystingray.com references with my-stingray.com so all four
// occurrences in NavbarMega.jsx update at once. Display labels stay the
// same ("MyStingray", "MyStingray.com" → "My-Stingray.com" for the URL
// shown under the link, and the href uses the real domain).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const path = resolve(
  __dirname,
  "..",
  "src",
  "components",
  "NavbarMega.jsx"
);

const before = readFileSync(path, "utf8");
let after = before;

after = after.replaceAll(
  'href="http://www.MyStingray.com/"',
  'href="http://www.my-stingray.com/"'
);
after = after.replaceAll("MyStingray.com", "my-stingray.com");

if (after === before) {
  console.error("No replacements made.");
  process.exit(1);
}

writeFileSync(path, after);
console.log("MyStingray references updated to my-stingray.com.");
