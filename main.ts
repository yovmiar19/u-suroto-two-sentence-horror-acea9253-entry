// Two-Sentence Horror — u-suroto-two-sentence-horror-acea9253
// Writes exactly one two-sentence horror story to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_PATH = join("/output", "entry.txt");

// The story is held as two sentences so the two-sentence shape is
// visible in the code itself: an ordinary goodbye, then the turn that
// makes the first sentence worse on a second read.
const sentences = [
  "My four-year-old waved out the back window of the minivan and said goodbye to the lady standing by our car.",
  "We were doing seventy on the interstate, forty miles from home.",
];

// Guard the judge brief's first rule: the story must be exactly two
// sentences. If this ever stops being true, fail loudly instead of
// writing a story the gate would refuse.
if (sentences.length !== 2) {
  throw new Error(`Expected exactly 2 sentences, got ${sentences.length}`);
}

const story = sentences.join(" ");

// The gate allows at most 400 characters; refuse to write anything
// longer rather than silently submitting an invalid entry.
if (story.length > 400 || story.trim().length === 0) {
  throw new Error(`Story must be 1-400 characters, got ${story.length}`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, story, "utf8");
