#!/usr/bin/env node
/**
 * Generates data/sysadmin/EDITORIAL_AUDIT.md
 * Run: node tools/generate-editorial-audit.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "../data/sysadmin/EDITORIAL_AUDIT.md");

const PAGE_START = {
  front: 1,
  ch1: 9,
};

const chapters = [
  {
    n: 1,
    title: "Що таке Raspberry Pi",
    part: 1,
    pages: "9–14",
    hook: "Планшет vs картка — це взагалі комп'ютер?",
    spreads: [
      { p: "9–10", name: "Opener spread", hero: "nf00-hero", support: ["Scale inset: монета"], insert: "wow: Pi на МКС", visual: "Hero full-bleed + callouts 1–3 на платі" },
      { p: "11", name: "Справжній ≠ великий", hero: "nf01-size", support: ["Compare: рояль vs синтезатор"], insert: "think → reveal", visual: "Comparison scale Pi vs ПК" },
      { p: "12", name: "Що всередині ПК", hero: "—", support: ["Cutaway ПК"], insert: "diagram: CPU/RAM/диск", visual: "Exploded view desktop (concept)" },
      { p: "13", name: "Одна плата", hero: "nf01-hero", support: ["Timeline стиснення"], insert: "fact: одноплатний", visual: "Complete station photo" },
      { p: "14", name: "Підсумок + практика", hero: "—", support: ["Icon checklist"], insert: "try + diary", visual: "Мінімум тексту, максимум чекліст" },
    ],
    gaps: "Додати nf01-scale (монета). Opener як spread block.",
  },
  {
    n: 2,
    title: "Екскурсія по платі",
    part: 1,
    pages: "15–20",
    hook: "Будинок з дверима — куди який кабель?",
    spreads: [
      { p: "15–16", name: "Карта портів", hero: "nf02-ports", support: ["Top-view annotated"], insert: "callout ×6 портів", visual: "Hero top-down, numbered callouts" },
      { p: "17", name: "Живлення", hero: "nf02-power", support: ["Macro USB-C"], insert: "callout warning", visual: "Macro + «не плутай з USB мишки»" },
      { p: "18", name: "Картинка", hero: "nf02-hdmi", support: ["Monitor inset"], insert: "wow: очі назовні", visual: "Cable path diagram" },
      { p: "19", name: "GPIO", hero: "nf02-gpio", support: ["Pin diagram"], insert: "callout safety", visual: "Macro GPIO + warning badge" },
      { p: "20", name: "Карта в голові", hero: "—", support: ["Mini map icon"], insert: "draw + try", visual: "Infographic «6 дверей»" },
    ],
    gaps: "Annotated hero обов'язковий для DK.",
  },
  {
    n: 3,
    title: "Перший запуск",
    part: 1,
    pages: "21–27",
    hook: "Гра без правил — microSD як книжка",
    spreads: [
      { p: "21–22", name: "Книжка на картці", hero: "nf03-sdwrite", support: ["microSD macro"], insert: "wow: ключ від квартири", visual: "Adult+child, Imager setup" },
      { p: "23", name: "Кабелі", hero: "nf03-cables", support: ["Checklist icons"], insert: "diagram: порядок підключення", visual: "Checklist infographic" },
      { p: "24", name: "Увімкнення", hero: "nf03-boot", support: ["LED close-up"], insert: "callout: енергія останньою", visual: "Boot screen (blur text)" },
      { p: "25–26", name: "Перемога", hero: "nf03-desktop", support: ["Smile reaction"], insert: "fact", visual: "Hero payoff desktop" },
      { p: "27", name: "Чорний екран", hero: "—", support: ["Flowchart"], insert: "errors + try", visual: "Troubleshooting decision tree" },
    ],
    gaps: "Flowchart «чорний екран» — новий diagram block.",
  },
  {
    n: 4,
    title: "Що таке Linux",
    part: 2,
    pages: "29–34",
    hook: "Концерт без диригента = шум",
    spreads: [
      { p: "29–30", name: "Диригент", hero: "nf04-a", support: ["Orchestra wide"], insert: "wow", visual: "Concept conductor + OS metaphor" },
      { p: "31", name: "Родина Linux", hero: "nf04-b", support: ["Tree diagram"], insert: "diagram: дерево дистрибутивів", visual: "Linux family tree" },
      { p: "32", name: "Шари", hero: "nf04-c", support: ["Cutaway"], insert: "diagram stack", visual: "Залізо→ядро→програми cutaway" },
      { p: "33", name: "Навіщо адміну", hero: "—", support: ["Server room"], insert: "fact: інтернет на Linux", visual: "nf04-d datacenter" },
      { p: "34", name: "Підсумок", hero: "—", support: ["—"], insert: "try + check", visual: "3-icon recap" },
    ],
    gaps: "Cutaway на пол-розворота.",
  },
  {
    n: 5,
    title: "Raspberry Pi OS",
    part: 2,
    pages: "35–40",
    hook: "Нове місто — де меню?",
    spreads: [
      { p: "35–36", name: "Обличчя системи", hero: "nf05-a", support: ["Desktop wide"], insert: "spread: tour desktop", visual: "Screenshot tour callouts" },
      { p: "37", name: "Меню", hero: "nf05-b", support: ["Menu zoom"], insert: "callout ×4 іконки", visual: "Annotated menu corner" },
      { p: "38", name: "Карта міста", hero: "nf05-c", support: ["3D city map"], insert: "diagram: клік→програма", visual: "City map metaphor" },
      { p: "39", name: "Дослідження", hero: "nf05-d", support: ["Child at desk"], insert: "try", visual: "Photo practice" },
      { p: "40", name: "Оновлення", hero: "—", support: ["Shield icon"], insert: "callout: турбота", visual: "Update = health metaphor" },
    ],
    gaps: "+1 wow про оновлення.",
  },
  {
    n: 6,
    title: "Термінал",
    part: 2,
    pages: "41–47",
    hook: "Друг чекає Minecraft — треба писати системі",
    spreads: [
      { p: "41–42", name: "Листування", hero: "nf06-a", support: ["Dialogue bubbles"], insert: "spread: terminal dialogue", visual: "Command→response screen" },
      { p: "43", name: "pwd", hero: "nf06-b", support: ["Path graphic"], insert: "callout: де я?", visual: "pwd output annotated" },
      { p: "44", name: "ls + clear", hero: "nf06-c", support: ["Before/after"], insert: "code blocks", visual: "Split screen ls/clear" },
      { p: "45", name: "Enter", hero: "nf06-d", support: ["Finger on key"], insert: "fact", visual: "Calm before Enter macro" },
      { p: "46–47", name: "Практика", hero: "—", support: ["—"], insert: "try + errors", visual: "Checklist ritual" },
    ],
    gaps: "Прибрати мета «розділ 1» з тексту. Tease Minecraft на spread.",
  },
  {
    n: 7,
    title: "Навігація папками",
    part: 2,
    pages: "48–53",
    hook: "ТРЦ — як дійти до магазину іграшок?",
    spreads: [
      { p: "48–49", name: "Місто папок", hero: "nf07-a", support: ["Dollhouse/city"], insert: "diagram: FS city", visual: "Aerial city map FS" },
      { p: "50", name: "cd", hero: "nf07-b", support: ["Door threshold"], insert: "code cd", visual: "Terminal cd annotated" },
      { p: "51", name: "cd ..", hero: "—", support: ["Stairs icon"], insert: "callout", visual: "Up one level diagram" },
      { p: "52", name: "Загубився", hero: "nf07-c", support: ["Sticky note tree"], insert: "wow + try", visual: "Calm child + pwd ritual" },
      { p: "53", name: "Дерево", hero: "nf07-d", support: ["Tree graphic"], insert: "draw", visual: "Folder tree infographic" },
    ],
    gaps: "+2 fact/wow (зараз 0).",
  },
  {
    n: 8,
    title: "Створення папок",
    part: 2,
    pages: "54–59",
    hook: "Хаос на столі — полиця IKEA",
    spreads: [
      { p: "54–55", name: "Полиці", hero: "nf08-a", support: ["Shelf photo"], insert: "spread: mii-svit", visual: "IKEA shelf metaphor" },
      { p: "56", name: "mkdir", hero: "nf08-c", support: ["Terminal"], insert: "code", visual: "mkdir→ls sequence" },
      { p: "57", name: "Імена", hero: "—", support: ["Good/bad names"], insert: "callout naming", visual: "Do/don't name chips" },
      { p: "58", name: "Вкладеність", hero: "nf08-b", support: ["Nested boxes"], insert: "diagram", visual: "Nested folders 3D" },
      { p: "59", name: "Лад", hero: "nf08-d", support: ["Notebook"], insert: "try + diary", visual: "mii-svit folder payoff" },
    ],
    gaps: "Перейменувати h2 «Спочатку ідея».",
  },
  {
    n: 9,
    title: "Робота з файлами",
    part: 2,
    pages: "60–65",
    hook: "Сторінка з ім'ям — touch, cat, cp, rm",
    spreads: [
      { p: "60–61", name: "Сторінка даних", hero: "nf09-a", support: ["Paper stack"], insert: "wow", visual: "Named pages metaphor" },
      { p: "62", name: "cat", hero: "nf09-b", support: ["Read-only icon"], insert: "code", visual: "cat screen" },
      { p: "63", name: "cp", hero: "nf09-d", support: ["Twins"], insert: "compare diagram", visual: "Two notebooks side by side" },
      { p: "64", name: "rm", hero: "nf09-c", support: ["No undo"], insert: "callout warning", visual: "Trash without recycle" },
      { p: "65", name: "Практика", hero: "—", support: ["—"], insert: "try + errors", visual: "Safety checklist" },
    ],
    gaps: "compare block для cp vs mv.",
  },
  {
    n: 10,
    title: "Редактор nano",
    part: 2,
    pages: "66–72",
    hook: "Темна кімната — лише клавіатура",
    spreads: [
      { p: "66–67", name: "Блокнот", hero: "nf10-a", support: ["nf10-nano-window.jpg"], insert: "spread: nano tour", visual: "Real screenshot + labels ^O ^X" },
      { p: "68", name: "world-rules", hero: "—", support: ["File icon"], insert: "code nano", visual: "mii-svit payoff" },
      { p: "69", name: "Зберегти", hero: "nf10-d", support: ["Ctrl macro"], insert: "callout shortcuts", visual: "Keyboard Ctrl close-up" },
      { p: "70", name: "Перевірка", hero: "nf10-c", support: ["cat verify"], insert: "diagram: цикл", visual: "open→edit→save→cat" },
      { p: "71–72", name: "Шпаргалка", hero: "—", support: ["Shortcut table"], insert: "try + diary", visual: "Hotkey infographic" },
    ],
    gaps: "Найсильніший DK-розділ Part 2 — зробити зразковим.",
  },
  {
    n: 11,
    title: "Користувачі",
    part: 3,
    pages: "74–79",
    hook: "Свій ключ від кімнати — whoami",
    spreads: [
      { p: "74–75", name: "Квартири", hero: "nf11-a", support: ["Building cutaway"], insert: "spread", visual: "Apartment building users" },
      { p: "76", name: "whoami", hero: "nf11-b", support: ["Mirror"], insert: "code", visual: "Terminal whoami" },
      { p: "77", name: "Окремі імена", hero: "nf11-c", support: ["Login screen"], insert: "fact", visual: "Two profiles photo" },
      { p: "78", name: "Ролі", hero: "nf11-d", support: ["Badges"], insert: "diagram roles", visual: "Costume party permissions" },
      { p: "79", name: "Практика", hero: "—", support: ["—"], insert: "try", visual: "Family account sketch" },
    ],
    gaps: "Multi-user diagram на spread.",
  },
  {
    n: 12,
    title: "Права доступу",
    part: 3,
    pages: "80–85",
    hook: "Різні ключі — різні двері",
    spreads: [
      { p: "80–81", name: "Ключі", hero: "nf12-a", support: ["Key macro"], insert: "spread", visual: "Keys on board photo" },
      { p: "82", name: "ls -l", hero: "nf12-b", support: ["Magnifier"], insert: "diagram rwx", visual: "Permission string annotated" },
      { p: "83", name: "Denied", hero: "nf12-c", support: ["Shield"], insert: "errors", visual: "Permission denied screen" },
      { p: "84", name: "sudo", hero: "nf12-d", support: ["Master key"], insert: "callout safety", visual: "Master key one-minute metaphor" },
      { p: "85", name: "Практика", hero: "—", support: ["—"], insert: "try + check", visual: "rwx cheat sheet" },
    ],
    gaps: "rwx infographic обов'язковий.",
  },
  {
    n: 13,
    title: "Процеси",
    part: 3,
    pages: "86–92",
    hook: "Minecraft + браузер + музика «одночасно»",
    spreads: [
      { p: "86–87", name: "Жонглер", hero: "nf13-a", support: ["Pi below"], insert: "wow", visual: "Juggler full spread" },
      { p: "88", name: "Багато вікон", hero: "nf13-b", support: ["Multi app"], insert: "fact", visual: "Busy desktop photo" },
      { p: "89", name: "ps", hero: "nf13-c", support: ["Camera snapshot"], insert: "code", visual: "ps = photo metaphor" },
      { p: "90", name: "top", hero: "nf13-d", support: ["Live list"], insert: "callout", visual: "top/htop blur screen" },
      { p: "91–92", name: "Диригент CPU", hero: "—", support: ["Orchestra CPU"], insert: "diagram + try", visual: "Conductor cutaway NEW" },
    ],
    gaps: "Додати conductor cutaway illustration.",
  },
  {
    n: 14,
    title: "Пошук файлів",
    part: 3,
    pages: "93–98",
    hook: "800 сторінок — знайди Minecraft",
    spreads: [
      { p: "93–94", name: "Два ліхтарики", hero: "nf14-a", support: ["Toolbox"], insert: "spread", visual: "find vs grep tools" },
      { p: "95", name: "find", hero: "nf14-b", support: ["Flashlight files"], insert: "code", visual: "find paths screen" },
      { p: "96", name: "grep", hero: "nf14-c", support: ["Book highlight"], insert: "wow", visual: "grep inside pages" },
      { p: "97", name: "Інцидент", hero: "nf14-d", support: ["Clock"], insert: "try", visual: "Admin search calm" },
      { p: "98", name: "Дерево рішень", hero: "—", support: ["Flowchart"], insert: "diagram decision", visual: "find OR grep flowchart NEW" },
    ],
    gaps: "Decision tree diagram — ключ для DK.",
  },
  {
    n: 15,
    title: "Інтернет",
    part: 4,
    pages: "100–105",
    hook: "Крутиться колесо — де застрягло?",
    spreads: [
      { p: "100–101", name: "Колесо", hero: "nf15-a", support: ["Spinner"], insert: "spread", visual: "Loading frustration photo" },
      { p: "102", name: "IP адреса", hero: "nf15-b", support: ["Apartment doors"], insert: "diagram", visual: "Address = flat number" },
      { p: "103", name: "ping", hero: "nf15-c", support: ["Mountain echo"], insert: "wow", visual: "Echo metaphor photo" },
      { p: "104", name: "ip a + ping", hero: "nf15-d", support: ["Terminal"], insert: "code", visual: "Two commands screen" },
      { p: "105", name: "Wi‑Fi ≠ internet", hero: "—", support: ["Road network NEW"], insert: "diagram roads", visual: "Pi→router→internet map" },
    ],
    gaps: "Network road map — нова ілюстрація.",
  },
  {
    n: 16,
    title: "SSH",
    part: 4,
    pages: "106–111",
    hook: "Pi в іншій кімнаті — як написати?",
    spreads: [
      { p: "106–107", name: "Відстань", hero: "nf16-a", support: ["Room split"], insert: "spread", visual: "Pi shelf + laptop desk" },
      { p: "108", name: "Тунель", hero: "nf16-b", support: ["Tin cans FULL"], insert: "wow", visual: "SSH tunnel hero FULL SPREAD" },
      { p: "109", name: "Headless", hero: "nf16-c", support: ["LED only"], insert: "code ssh", visual: "No monitor Pi" },
      { p: "110", name: "Безпека", hero: "nf16-d", support: ["Lock+key"], insert: "callout", visual: "SSH key USB" },
      { p: "111", name: "Практика", hero: "—", support: ["—"], insert: "try + errors", visual: "Connection checklist" },
    ],
    gaps: "nf16-b на весь розворот.",
  },
  {
    n: 17,
    title: "Сервери",
    part: 4,
    pages: "112–116",
    hook: "Хто тримає світ Minecraft?",
    spreads: [
      { p: "112–113", name: "Гравець vs кухня", hero: "nf17-a", support: ["Split scene"], insert: "spread", visual: "Player foreground Pi background" },
      { p: "114", name: "Кухня", hero: "nf17-b", support: ["Kitchen cutaway NEW"], insert: "diagram client/server", visual: "Restaurant kitchen metaphor" },
      { p: "115", name: "Надійність", hero: "nf17-c", support: ["Checklist"], insert: "callout", visual: "Prep before party" },
      { p: "116", name: "Клієнт↔сервер", hero: "nf17-d", support: ["Arrows"], insert: "try + wow", visual: "Two-arrow infographic" },
    ],
    gaps: "Розширити до 6 сторінок; kitchen cutaway.",
  },
  {
    n: 18,
    title: "Встановлення сервера",
    part: 5,
    pages: "118–123",
    hook: "Кухня готова? Java → server.jar",
    spreads: [
      { p: "118–119", name: "Кухня→торт", hero: "nf18-a", support: ["Minecraft tease"], insert: "spread COMMERCE", visual: "Kitchen metaphor hero" },
      { p: "120", name: "Java", hero: "nf18-b", support: ["java -version"], insert: "code", visual: "Java check screen" },
      { p: "121", name: "Папка", hero: "nf18-c", support: ["Folder tree"], insert: "callout", visual: "minecraft-server tidy" },
      { p: "122", name: "Встановлення", hero: "nf18-d", support: ["jar icon"], insert: "fact EULA tease", visual: "Install with adult" },
      { p: "123", name: "Практика", hero: "—", support: ["Step icons"], insert: "try + disclaimer", visual: "5-step install strip NEW" },
    ],
    gaps: "Mojang disclaimer. Step strip infographic.",
  },
  {
    n: 19,
    title: "Налаштування",
    part: 5,
    pages: "124–128",
    hook: "Конституція світу — server.properties",
    spreads: [
      { p: "124–125", name: "Закони світу", hero: "nf19-a", support: ["Rule book"], insert: "spread", visual: "Constitution metaphor" },
      { p: "126", name: "nano config", hero: "nf19-b", support: ["Properties blur"], insert: "code", visual: "server.properties annotated" },
      { p: "127", name: "Backup", hero: "nf19-c", support: ["Twin folders"], insert: "callout", visual: "cp .bak safety" },
      { p: "128", name: "Справедлива гра", hero: "nf19-d", support: ["Friends play"], insert: "try", visual: "Happy multiplayer photo" },
    ],
    gaps: "+1 wow про один параметр за раз.",
  },
  {
    n: 20,
    title: "Запуск сервера",
    part: 5,
    pages: "129–134",
    hook: "Шум на екрані ≠ готово",
    spreads: [
      { p: "129–130", name: "Логи", hero: "nf20-a", support: ["Log scroll"], insert: "spread", visual: "Reading logs tension" },
      { p: "131", name: "Done", hero: "nf20-b", support: ["Airplane doors"], insert: "wow Done", visual: "Done line highlighted blur" },
      { p: "132", name: "Соло-тест", hero: "nf20-c", support: ["One player"], insert: "try", visual: "Solo join test" },
      { p: "133–134", name: "Свято", hero: "nf20-d", support: ["Confetti"], insert: "diary PAYOFF", visual: "Friends celebrate HERO MARKETING" },
    ],
    gaps: "nf20-d — задник / Amazon preview.",
  },
  {
    n: 21,
    title: "Інші проєкти Pi",
    part: 6,
    pages: "136–140",
    hook: "Minecraft — лише одна станція",
    spreads: [
      { p: "136–137", name: "Карта", hero: "nf21-a", support: ["Map full"], insert: "spread", visual: "Project islands map FULL" },
      { p: "138", name: "Навички", hero: "nf21-b", support: ["Maker desk"], insert: "fact", visual: "GPIO/media/robot collage" },
      { p: "139", name: "Один крок", hero: "nf21-c", support: ["Choice cards"], insert: "try", visual: "Pick one path" },
      { p: "140", name: "Цікавість", hero: "nf21-d", support: ["Open book"], insert: "wow", visual: "Book ends curiosity not" },
    ],
    gaps: "Printable project picker worksheet.",
  },
  {
    n: 22,
    title: "Твій шлях адміністратора",
    part: 6,
    pages: "141–146",
    hook: "Забути команди — не страшно",
    spreads: [
      { p: "141–142", name: "Фінал", hero: "nf22-a", support: ["Doorway light"], insert: "spread", visual: "Book close Pi ready" },
      { p: "143", name: "Детектив", hero: "nf22-b", support: ["5 questions"], insert: "diagram ritual", visual: "Detective ritual board" },
      { p: "144", name: "Не кнопкотиск", hero: "nf22-c", support: ["Typing confident"], insert: "fact", visual: "Growth photo" },
      { p: "145", name: "Наступний крок", hero: "nf22-d", support: ["Tools"], insert: "try", visual: "Next experiment" },
      { p: "146", name: "Сертифікат", hero: "—", support: ["Certificate NEW"], insert: "draw printable", visual: "Young admin certificate bonus" },
    ],
    gaps: "Certificate printable для Etsy/TPT.",
  },
];

let md = `# EDITORIAL_AUDIT — Місія Адміністратор

Редакційний план верстки (DK / Usborne). **Не змінює структуру 22 розділів** — задає spread-ритм для друку та ілюстрацій.

| Поле | Значення |
|------|----------|
| Орієнтовний обсяг | ~146 сторінок A4 (друк) |
| Ілюстрації зараз | 87 слотів у тексті |
| Ціль DK | +60 supporting, 6 part openers, обкладинка |
| Папка арту | \`assets/illustrations/rasberi/\` |
| Нові block types | \`spread\`, \`callout\`, \`wow\`, \`diagram\` — див. BOOK_SPEC |

## Легенда spread-елементів

| Елемент | Призначення |
|---------|-------------|
| **Hero** | 50–70% розвороту, продає книгу |
| **Supporting** | macro, inset, порівняння |
| **insert** | wow / callout / diagram / think / try |
| **visual** | технічний опис кадру для художника |

## Part openers (нові, поза розділами)

| Part | Стор. | Hero | Метафора |
|------|-------|------|----------|
| 1 | 7–8 | \`part-01-pi\` | Pi в долоні |
| 2 | 28 | \`part-02-linux\` | Термінал як діалог |
| 3 | 73 | \`part-03-admin\` | Ключі й замки |
| 4 | 99 | \`part-04-net\` | Дороги між будинками |
| 5 | 117 | \`part-05-mc\` | Minecraft на Pi |
| 6 | 135 | \`part-06-next\` | Карта проєктів |

---

`;

for (const ch of chapters) {
  md += `## Розділ ${ch.n}. ${ch.title} (Частина ${ch.part}) · стор. ${ch.pages}\n\n`;
  md += `**Крючок:** ${ch.hook}\n\n`;
  md += `**Gap (редакція):** ${ch.gaps}\n\n`;
  md += `| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |\n`;
  md += `|--------|-------|-------|------|------------|---------|----------------------|\n`;
  for (const s of ch.spreads) {
    md += `| S | ${s.p} | ${s.name} | ${s.hero} | ${s.support.join("; ")} | ${s.insert} | ${s.visual} |\n`;
  }
  md += `\n### Page-by-page (деталізація)\n\n`;
  ch.spreads.forEach((s, i) => {
    md += `#### Spread ${i + 1} · ${s.name} (стор. ${s.p})\n\n`;
    md += `- **Hero Illustration:** ${s.hero === "—" ? "— (текст/діаграма)" : `\`${s.hero}\` — ${s.visual}`}\n`;
    md += `- **Supporting:** ${s.support.join(", ")}\n`;
    md += `- **Inserts:** ${s.insert}\n`;
    md += `- **Macro / Infographic / Callout:** за потреби з колонки visual\n`;
    md += `- **Емоція:** здивування → ясність → «я можу»\n\n`;
  });
  md += `---\n\n`;
}

md += `## Зведена оцінка (після плану)

| Критерій | Було | Після виконання плану |
|----------|------|------------------------|
| Комерційний потенціал | 7,5 | 9 |
| Візуальний потенціал | 4 | 8,5 |
| DK-рівень | 5,5 | 8 |
| Usborne-рівень | 7 | 8,5 |

**Наступний крок:** згенерувати [ILLUSTRATION_WAVE1.md](./ILLUSTRATION_WAVE1.md) (30 пріоритетних файлів).

`;

fs.writeFileSync(out, md);
console.log("Wrote", out);
