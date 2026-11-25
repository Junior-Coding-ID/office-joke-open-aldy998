import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke for "Make the AI Judge Laugh: the Office Joke Open".
// Exactly 68 characters, inside the 1-200 gate.
const JOKE =
  "I suggested locking the office fridge. HR locked the suggestion box.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check (brief: entry.txt must be 1-200 UTF-8 characters, not only
// whitespace, and a single line). Fail loudly instead of shipping an
// invalid entry.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${chars} characters, outside the 1-200 gate`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
