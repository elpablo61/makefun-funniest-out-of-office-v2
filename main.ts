import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "Back Monday. I left my inbox with my grandmother. She has replied to everyone and invited three of them to lunch.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-140 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
console.log(ENTRY);
