import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const require = createRequire(import.meta.url);
global.window = global;

const REMOVE_DUPLICATE_PRIORITY = [
  "draw",
  "tf",
  "mc",
  "match",
  "fill",
  "whatif",
  "error",
  "explain",
];

function trimChecks(checks, chapterId) {
  const light = chapterId <= 3 || chapterId >= 21;
  const coreTarget = light ? 2 : 3;
  const totalTarget = light ? 4 : 5;
  const remaining = checks.map((c) => ({ ...c }));

  while (remaining.length > totalTarget) {
    let removed = false;
    for (const type of REMOVE_DUPLICATE_PRIORITY) {
      const indices = remaining
        .map((c, i) => (c.type === type ? i : -1))
        .filter((i) => i >= 0);
      if (type === "draw" && indices.length) {
        remaining.splice(indices[0], 1);
        removed = true;
        break;
      }
      if (indices.length > 1) {
        remaining.splice(indices[indices.length - 1], 1);
        removed = true;
        break;
      }
    }
    if (!removed) remaining.pop();
  }

  return remaining.map((item, index) => {
    const next = { ...item };
    if (index >= coreTarget) next.optional = true;
    else delete next.optional;
    return next;
  });
}

function jsString(value) {
  if (value === undefined || value === null) return '""';
  return JSON.stringify(value);
}

function formatCheckItem(item, indent = "    ") {
  const lines = [`${indent}{`, `${indent}  type: ${jsString(item.type)},`];
  const fields = [
    "prompt",
    "text",
    "options",
    "answer",
    "hint",
    "explanation",
    "sample",
    "answerLabel",
    "pairs",
    "left",
    "right",
  ];
  for (const key of fields) {
    if (item[key] === undefined) continue;
    if (Array.isArray(item[key])) {
      lines.push(`${indent}  ${key}: [`);
      item[key].forEach((v) => {
        if (Array.isArray(v)) {
          lines.push(
            `${indent}    [${v.map((x) => jsString(x)).join(", ")}],`
          );
        } else if (typeof v === "object" && v !== null) {
          lines.push(
            `${indent}    { left: ${jsString(v.left)}, right: ${jsString(v.right)} },`
          );
        } else {
          lines.push(`${indent}    ${jsString(v)},`);
        }
      });
      lines.push(`${indent}  ],`);
    } else {
      lines.push(`${indent}  ${key}: ${jsString(item[key])},`);
    }
  }
  if (item.optional) lines.push(`${indent}  optional: true,`);
  lines.push(`${indent}},`);
  return lines.join("\n");
}

function replaceCheckSection(filePath, newChecks) {
  const text = fs.readFileSync(filePath, "utf8");
  const start = text.indexOf("  check: [");
  if (start < 0) throw new Error(`No check section in ${filePath}`);
  const end = text.indexOf("\n  ],", start);
  if (end < 0) throw new Error(`No check end in ${filePath}`);
  const block =
    "  check: [\n" + newChecks.map((c) => formatCheckItem(c)).join("\n") + "\n  ],";
  fs.writeFileSync(filePath, text.slice(0, start) + block + text.slice(end + "\n  ],".length));
}

for (let i = 1; i <= 22; i++) {
  const id = String(i).padStart(2, "0");
  const key = `CHAPTER_${id}`;
  const filePath = path.join(root, "data/sysadmin", `chapter${id}.js`);
  delete global[key];
  require(filePath);
  const chapter = global[key];
  const trimmed = trimChecks(chapter.check || [], i);
  replaceCheckSection(filePath, trimmed);
  console.log(`ch${id}: ${chapter.check.length} -> ${trimmed.length} (${trimmed.filter((x) => x.optional).length} optional)`);
}
