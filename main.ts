import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line office joke for "Make the AI Judge Laugh: the Office Joke Open".
// Exactly 90 characters, inside the 1-200 gate.
const JOKE =
  "Our budget audit turned into a miracle of teamwork once we remembered Dave quit on Friday.";

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
const bytes = Buffer.byteLength(JOKE + "\n", "utf8");
if (bytes !== 91) {
  throw new Error(`entry is ${bytes} bytes, expected exactly 91`);
}
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
