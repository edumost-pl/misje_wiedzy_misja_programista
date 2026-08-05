#!/usr/bin/env node
/**
 * Синхронізує промпти з image-prompts.js → chapter*.js + ILLUSTRATIONS.md
 * Usage: node tools/sync-sysadmin-image-prompts.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dataDir = path.join(root, "data", "sysadmin");

global.window = global;
await import(pathToFileURL(path.join(dataDir, "image-prompts.js")).href);

const { SYSADMIN_IMAGE_STYLE, SYSADMIN_IMAGE_PROMPTS } = global;

function buildPrompt(entry) {
  const prefix = SYSADMIN_IMAGE_STYLE[entry.style] || SYSADMIN_IMAGE_STYLE.photo;
  return `${prefix} ${entry.scene}`;
}

// Collect captions from chapters
const chapterMeta = {};
for (let i = 1; i <= 22; i++) {
  const n = String(i).padStart(2, "0");
  delete global[`CHAPTER_${n}`];
  await import(pathToFileURL(path.join(dataDir, `chapter${n}.js`)).href);
  chapterMeta[n] = global[`CHAPTER_${n}`];
}

let updatedChapters = 0;
let missingInMap = [];

for (let i = 1; i <= 22; i++) {
  const n = String(i).padStart(2, "0");
  const filePath = path.join(dataDir, `chapter${n}.js`);
  let src = fs.readFileSync(filePath, "utf8");
  const ch = chapterMeta[n];
  let changed = false;

  for (const block of ch.content) {
    if (block.type !== "image" || !block.src) continue;
    const base = block.src.replace(/\.(webp|jpg|jpeg|png)$/i, "");
    if (block.src.includes(".") && !SYSADMIN_IMAGE_PROMPTS[base]) continue; // real photo e.g. nf10-nano-window.jpg
    const entry = SYSADMIN_IMAGE_PROMPTS[base];
    if (!entry) {
      missingInMap.push(`${n}:${block.src}`);
      continue;
    }
    const prompt = buildPrompt(entry).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const re = new RegExp(
      `(src:\\s*"${block.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?prompt:\\s*)"(?:[^"\\\\]|\\\\.)*"|(src:\\s*"${block.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?)(\\n\\s*\\})`,
      "m"
    );
    if (/prompt:\s*"/.test(src.slice(src.indexOf(`src: "${block.src}"`)))) {
      const newSrc = src.replace(
        new RegExp(
          `(src:\\s*"${block.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?prompt:\\s*)"(?:[^"\\\\]|\\\\.)*"`,
          "m"
        ),
        `$1"${prompt}"`
      );
      if (newSrc !== src) {
        src = newSrc;
        changed = true;
      }
    } else if (block.src === "nf00-hero" || !block.prompt) {
      const insertRe = new RegExp(
        `(src:\\s*"${block.src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?caption:\\s*"(?:[^"\\\\]|\\\\.)*",)\\n`,
        "m"
      );
      const newSrc = src.replace(insertRe, `$1\n      prompt:\n        "${prompt}",\n`);
      if (newSrc !== src) {
        src = newSrc;
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, src);
    updatedChapters++;
  }
}

// Build ILLUSTRATIONS.md
const lines = [
  "# Місія Адміністратор — ILLUSTRATIONS.md",
  "",
  "Фотореалістичний стиль: **яскраве денне світло, чіткість, без темних тонів.**",
  "",
  "**Папка:** `assets/illustrations/scenes/{src}.webp`",
  "",
  "**Джерело правди:** `data/sysadmin/image-prompts.js` — синхронізувати: `node tools/sync-sysadmin-image-prompts.mjs`",
  "",
  "## Стилі",
  "",
  "| Ключ | Коли |",
  "|------|------|",
  "| `photo` | Pi, стіл, дитина, кабелі |",
  "| `screen` | Монітор, термінал (текст розмитий) |",
  "| `macro` | Крупний план портів, GPIO |",
  "| `concept` | Метафори, схеми, 3D |",
  "",
  "**Реальне фото (не AI):** `nf10-nano-window.jpg` — скріншот nano.",
  "",
];

for (let i = 1; i <= 22; i++) {
  const n = String(i).padStart(2, "0");
  const ch = chapterMeta[n];
  lines.push(`## Розділ ${i}: ${ch.title}`);
  lines.push("");
  for (const block of ch.content) {
    if (block.type !== "image") continue;
    const base = block.src.replace(/\.(webp|jpg|jpeg|png)$/i, "");
    lines.push(`### ${block.src}`);
    lines.push("");
    lines.push(`**Де в тексті:** ${SYSADMIN_IMAGE_PROMPTS[base]?.placement || "—"}`);
    lines.push("");
    lines.push(`**Caption:** ${block.caption || block.alt || ""}`);
    lines.push("");
    if (block.src.includes(".") && !SYSADMIN_IMAGE_PROMPTS[base]) {
      lines.push("```");
      lines.push("(реальний скріншот — промпт не потрібен)");
      lines.push("```");
    } else {
      const entry = SYSADMIN_IMAGE_PROMPTS[base];
      lines.push("```");
      lines.push(entry ? buildPrompt(entry) : "(промпт відсутній у image-prompts.js)");
      lines.push("```");
    }
    lines.push("");
  }
}

fs.writeFileSync(path.join(dataDir, "ILLUSTRATIONS.md"), lines.join("\n"));

console.log(`Updated ${updatedChapters} chapter files`);
if (missingInMap.length) console.log("Missing in map:", missingInMap.join(", "));
console.log("ILLUSTRATIONS.md regenerated");
