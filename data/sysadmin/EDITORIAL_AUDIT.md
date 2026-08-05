# EDITORIAL_AUDIT — Місія Адміністратор

Редакційний план верстки (DK / Usborne). **Не змінює структуру 22 розділів** — задає spread-ритм для друку та ілюстрацій.

| Поле | Значення |
|------|----------|
| Орієнтовний обсяг | ~146 сторінок A4 (друк) |
| Ілюстрації зараз | 87 слотів у тексті |
| Ціль DK | +60 supporting, 6 part openers, обкладинка |
| Папка арту | `assets/illustrations/rasberi/` |
| Нові block types | `spread`, `callout`, `wow`, `diagram` — див. BOOK_SPEC |

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
| 1 | 7–8 | `part-01-pi` | Pi в долоні |
| 2 | 28 | `part-02-linux` | Термінал як діалог |
| 3 | 73 | `part-03-admin` | Ключі й замки |
| 4 | 99 | `part-04-net` | Дороги між будинками |
| 5 | 117 | `part-05-mc` | Minecraft на Pi |
| 6 | 135 | `part-06-next` | Карта проєктів |

---

## Розділ 1. Що таке Raspberry Pi (Частина 1) · стор. 9–14

**Крючок:** Планшет vs картка — це взагалі комп'ютер?

**Gap (редакція):** Додати nf01-scale (монета). Opener як spread block.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 9–10 | Opener spread | nf00-hero | Scale inset: монета | wow: Pi на МКС | Hero full-bleed + callouts 1–3 на платі |
| S | 11 | Справжній ≠ великий | nf01-size | Compare: рояль vs синтезатор | think → reveal | Comparison scale Pi vs ПК |
| S | 12 | Що всередині ПК | — | Cutaway ПК | diagram: CPU/RAM/диск | Exploded view desktop (concept) |
| S | 13 | Одна плата | nf01-hero | Timeline стиснення | fact: одноплатний | Complete station photo |
| S | 14 | Підсумок + практика | — | Icon checklist | try + diary | Мінімум тексту, максимум чекліст |

### Page-by-page (деталізація)

#### Spread 1 · Opener spread (стор. 9–10)

- **Hero Illustration:** `nf00-hero` — Hero full-bleed + callouts 1–3 на платі
- **Supporting:** Scale inset: монета
- **Inserts:** wow: Pi на МКС
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Справжній ≠ великий (стор. 11)

- **Hero Illustration:** `nf01-size` — Comparison scale Pi vs ПК
- **Supporting:** Compare: рояль vs синтезатор
- **Inserts:** think → reveal
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Що всередині ПК (стор. 12)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Cutaway ПК
- **Inserts:** diagram: CPU/RAM/диск
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Одна плата (стор. 13)

- **Hero Illustration:** `nf01-hero` — Complete station photo
- **Supporting:** Timeline стиснення
- **Inserts:** fact: одноплатний
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Підсумок + практика (стор. 14)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Icon checklist
- **Inserts:** try + diary
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 2. Екскурсія по платі (Частина 1) · стор. 15–20

**Крючок:** Будинок з дверима — куди який кабель?

**Gap (редакція):** Annotated hero обов'язковий для DK.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 15–16 | Карта портів | nf02-ports | Top-view annotated | callout ×6 портів | Hero top-down, numbered callouts |
| S | 17 | Живлення | nf02-power | Macro USB-C | callout warning | Macro + «не плутай з USB мишки» |
| S | 18 | Картинка | nf02-hdmi | Monitor inset | wow: очі назовні | Cable path diagram |
| S | 19 | GPIO | nf02-gpio | Pin diagram | callout safety | Macro GPIO + warning badge |
| S | 20 | Карта в голові | — | Mini map icon | draw + try | Infographic «6 дверей» |

### Page-by-page (деталізація)

#### Spread 1 · Карта портів (стор. 15–16)

- **Hero Illustration:** `nf02-ports` — Hero top-down, numbered callouts
- **Supporting:** Top-view annotated
- **Inserts:** callout ×6 портів
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Живлення (стор. 17)

- **Hero Illustration:** `nf02-power` — Macro + «не плутай з USB мишки»
- **Supporting:** Macro USB-C
- **Inserts:** callout warning
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Картинка (стор. 18)

- **Hero Illustration:** `nf02-hdmi` — Cable path diagram
- **Supporting:** Monitor inset
- **Inserts:** wow: очі назовні
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · GPIO (стор. 19)

- **Hero Illustration:** `nf02-gpio` — Macro GPIO + warning badge
- **Supporting:** Pin diagram
- **Inserts:** callout safety
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Карта в голові (стор. 20)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Mini map icon
- **Inserts:** draw + try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 3. Перший запуск (Частина 1) · стор. 21–27

**Крючок:** Гра без правил — microSD як книжка

**Gap (редакція):** Flowchart «чорний екран» — новий diagram block.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 21–22 | Книжка на картці | nf03-sdwrite | microSD macro | wow: ключ від квартири | Adult+child, Imager setup |
| S | 23 | Кабелі | nf03-cables | Checklist icons | diagram: порядок підключення | Checklist infographic |
| S | 24 | Увімкнення | nf03-boot | LED close-up | callout: енергія останньою | Boot screen (blur text) |
| S | 25–26 | Перемога | nf03-desktop | Smile reaction | fact | Hero payoff desktop |
| S | 27 | Чорний екран | — | Flowchart | errors + try | Troubleshooting decision tree |

### Page-by-page (деталізація)

#### Spread 1 · Книжка на картці (стор. 21–22)

- **Hero Illustration:** `nf03-sdwrite` — Adult+child, Imager setup
- **Supporting:** microSD macro
- **Inserts:** wow: ключ від квартири
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Кабелі (стор. 23)

- **Hero Illustration:** `nf03-cables` — Checklist infographic
- **Supporting:** Checklist icons
- **Inserts:** diagram: порядок підключення
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Увімкнення (стор. 24)

- **Hero Illustration:** `nf03-boot` — Boot screen (blur text)
- **Supporting:** LED close-up
- **Inserts:** callout: енергія останньою
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Перемога (стор. 25–26)

- **Hero Illustration:** `nf03-desktop` — Hero payoff desktop
- **Supporting:** Smile reaction
- **Inserts:** fact
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Чорний екран (стор. 27)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Flowchart
- **Inserts:** errors + try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 4. Що таке Linux (Частина 2) · стор. 29–34

**Крючок:** Концерт без диригента = шум

**Gap (редакція):** Cutaway на пол-розворота.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 29–30 | Диригент | nf04-a | Orchestra wide | wow | Concept conductor + OS metaphor |
| S | 31 | Родина Linux | nf04-b | Tree diagram | diagram: дерево дистрибутивів | Linux family tree |
| S | 32 | Шари | nf04-c | Cutaway | diagram stack | Залізо→ядро→програми cutaway |
| S | 33 | Навіщо адміну | — | Server room | fact: інтернет на Linux | nf04-d datacenter |
| S | 34 | Підсумок | — | — | try + check | 3-icon recap |

### Page-by-page (деталізація)

#### Spread 1 · Диригент (стор. 29–30)

- **Hero Illustration:** `nf04-a` — Concept conductor + OS metaphor
- **Supporting:** Orchestra wide
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Родина Linux (стор. 31)

- **Hero Illustration:** `nf04-b` — Linux family tree
- **Supporting:** Tree diagram
- **Inserts:** diagram: дерево дистрибутивів
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Шари (стор. 32)

- **Hero Illustration:** `nf04-c` — Залізо→ядро→програми cutaway
- **Supporting:** Cutaway
- **Inserts:** diagram stack
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Навіщо адміну (стор. 33)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Server room
- **Inserts:** fact: інтернет на Linux
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Підсумок (стор. 34)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** —
- **Inserts:** try + check
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 5. Raspberry Pi OS (Частина 2) · стор. 35–40

**Крючок:** Нове місто — де меню?

**Gap (редакція):** +1 wow про оновлення.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 35–36 | Обличчя системи | nf05-a | Desktop wide | spread: tour desktop | Screenshot tour callouts |
| S | 37 | Меню | nf05-b | Menu zoom | callout ×4 іконки | Annotated menu corner |
| S | 38 | Карта міста | nf05-c | 3D city map | diagram: клік→програма | City map metaphor |
| S | 39 | Дослідження | nf05-d | Child at desk | try | Photo practice |
| S | 40 | Оновлення | — | Shield icon | callout: турбота | Update = health metaphor |

### Page-by-page (деталізація)

#### Spread 1 · Обличчя системи (стор. 35–36)

- **Hero Illustration:** `nf05-a` — Screenshot tour callouts
- **Supporting:** Desktop wide
- **Inserts:** spread: tour desktop
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Меню (стор. 37)

- **Hero Illustration:** `nf05-b` — Annotated menu corner
- **Supporting:** Menu zoom
- **Inserts:** callout ×4 іконки
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Карта міста (стор. 38)

- **Hero Illustration:** `nf05-c` — City map metaphor
- **Supporting:** 3D city map
- **Inserts:** diagram: клік→програма
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Дослідження (стор. 39)

- **Hero Illustration:** `nf05-d` — Photo practice
- **Supporting:** Child at desk
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Оновлення (стор. 40)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Shield icon
- **Inserts:** callout: турбота
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 6. Термінал (Частина 2) · стор. 41–47

**Крючок:** Друг чекає Minecraft — треба писати системі

**Gap (редакція):** Прибрати мета «розділ 1» з тексту. Tease Minecraft на spread.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 41–42 | Листування | nf06-a | Dialogue bubbles | spread: terminal dialogue | Command→response screen |
| S | 43 | pwd | nf06-b | Path graphic | callout: де я? | pwd output annotated |
| S | 44 | ls + clear | nf06-c | Before/after | code blocks | Split screen ls/clear |
| S | 45 | Enter | nf06-d | Finger on key | fact | Calm before Enter macro |
| S | 46–47 | Практика | — | — | try + errors | Checklist ritual |

### Page-by-page (деталізація)

#### Spread 1 · Листування (стор. 41–42)

- **Hero Illustration:** `nf06-a` — Command→response screen
- **Supporting:** Dialogue bubbles
- **Inserts:** spread: terminal dialogue
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · pwd (стор. 43)

- **Hero Illustration:** `nf06-b` — pwd output annotated
- **Supporting:** Path graphic
- **Inserts:** callout: де я?
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · ls + clear (стор. 44)

- **Hero Illustration:** `nf06-c` — Split screen ls/clear
- **Supporting:** Before/after
- **Inserts:** code blocks
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Enter (стор. 45)

- **Hero Illustration:** `nf06-d` — Calm before Enter macro
- **Supporting:** Finger on key
- **Inserts:** fact
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Практика (стор. 46–47)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** —
- **Inserts:** try + errors
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 7. Навігація папками (Частина 2) · стор. 48–53

**Крючок:** ТРЦ — як дійти до магазину іграшок?

**Gap (редакція):** +2 fact/wow (зараз 0).

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 48–49 | Місто папок | nf07-a | Dollhouse/city | diagram: FS city | Aerial city map FS |
| S | 50 | cd | nf07-b | Door threshold | code cd | Terminal cd annotated |
| S | 51 | cd .. | — | Stairs icon | callout | Up one level diagram |
| S | 52 | Загубився | nf07-c | Sticky note tree | wow + try | Calm child + pwd ritual |
| S | 53 | Дерево | nf07-d | Tree graphic | draw | Folder tree infographic |

### Page-by-page (деталізація)

#### Spread 1 · Місто папок (стор. 48–49)

- **Hero Illustration:** `nf07-a` — Aerial city map FS
- **Supporting:** Dollhouse/city
- **Inserts:** diagram: FS city
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · cd (стор. 50)

- **Hero Illustration:** `nf07-b` — Terminal cd annotated
- **Supporting:** Door threshold
- **Inserts:** code cd
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · cd .. (стор. 51)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Stairs icon
- **Inserts:** callout
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Загубився (стор. 52)

- **Hero Illustration:** `nf07-c` — Calm child + pwd ritual
- **Supporting:** Sticky note tree
- **Inserts:** wow + try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Дерево (стор. 53)

- **Hero Illustration:** `nf07-d` — Folder tree infographic
- **Supporting:** Tree graphic
- **Inserts:** draw
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 8. Створення папок (Частина 2) · стор. 54–59

**Крючок:** Хаос на столі — полиця IKEA

**Gap (редакція):** Перейменувати h2 «Спочатку ідея».

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 54–55 | Полиці | nf08-a | Shelf photo | spread: mii-svit | IKEA shelf metaphor |
| S | 56 | mkdir | nf08-c | Terminal | code | mkdir→ls sequence |
| S | 57 | Імена | — | Good/bad names | callout naming | Do/don't name chips |
| S | 58 | Вкладеність | nf08-b | Nested boxes | diagram | Nested folders 3D |
| S | 59 | Лад | nf08-d | Notebook | try + diary | mii-svit folder payoff |

### Page-by-page (деталізація)

#### Spread 1 · Полиці (стор. 54–55)

- **Hero Illustration:** `nf08-a` — IKEA shelf metaphor
- **Supporting:** Shelf photo
- **Inserts:** spread: mii-svit
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · mkdir (стор. 56)

- **Hero Illustration:** `nf08-c` — mkdir→ls sequence
- **Supporting:** Terminal
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Імена (стор. 57)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Good/bad names
- **Inserts:** callout naming
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Вкладеність (стор. 58)

- **Hero Illustration:** `nf08-b` — Nested folders 3D
- **Supporting:** Nested boxes
- **Inserts:** diagram
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Лад (стор. 59)

- **Hero Illustration:** `nf08-d` — mii-svit folder payoff
- **Supporting:** Notebook
- **Inserts:** try + diary
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 9. Робота з файлами (Частина 2) · стор. 60–65

**Крючок:** Сторінка з ім'ям — touch, cat, cp, rm

**Gap (редакція):** compare block для cp vs mv.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 60–61 | Сторінка даних | nf09-a | Paper stack | wow | Named pages metaphor |
| S | 62 | cat | nf09-b | Read-only icon | code | cat screen |
| S | 63 | cp | nf09-d | Twins | compare diagram | Two notebooks side by side |
| S | 64 | rm | nf09-c | No undo | callout warning | Trash without recycle |
| S | 65 | Практика | — | — | try + errors | Safety checklist |

### Page-by-page (деталізація)

#### Spread 1 · Сторінка даних (стор. 60–61)

- **Hero Illustration:** `nf09-a` — Named pages metaphor
- **Supporting:** Paper stack
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · cat (стор. 62)

- **Hero Illustration:** `nf09-b` — cat screen
- **Supporting:** Read-only icon
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · cp (стор. 63)

- **Hero Illustration:** `nf09-d` — Two notebooks side by side
- **Supporting:** Twins
- **Inserts:** compare diagram
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · rm (стор. 64)

- **Hero Illustration:** `nf09-c` — Trash without recycle
- **Supporting:** No undo
- **Inserts:** callout warning
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Практика (стор. 65)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** —
- **Inserts:** try + errors
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 10. Редактор nano (Частина 2) · стор. 66–72

**Крючок:** Темна кімната — лише клавіатура

**Gap (редакція):** Найсильніший DK-розділ Part 2 — зробити зразковим.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 66–67 | Блокнот | nf10-a | nf10-nano-window.jpg | spread: nano tour | Real screenshot + labels ^O ^X |
| S | 68 | world-rules | — | File icon | code nano | mii-svit payoff |
| S | 69 | Зберегти | nf10-d | Ctrl macro | callout shortcuts | Keyboard Ctrl close-up |
| S | 70 | Перевірка | nf10-c | cat verify | diagram: цикл | open→edit→save→cat |
| S | 71–72 | Шпаргалка | — | Shortcut table | try + diary | Hotkey infographic |

### Page-by-page (деталізація)

#### Spread 1 · Блокнот (стор. 66–67)

- **Hero Illustration:** `nf10-a` — Real screenshot + labels ^O ^X
- **Supporting:** nf10-nano-window.jpg
- **Inserts:** spread: nano tour
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · world-rules (стор. 68)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** File icon
- **Inserts:** code nano
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Зберегти (стор. 69)

- **Hero Illustration:** `nf10-d` — Keyboard Ctrl close-up
- **Supporting:** Ctrl macro
- **Inserts:** callout shortcuts
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Перевірка (стор. 70)

- **Hero Illustration:** `nf10-c` — open→edit→save→cat
- **Supporting:** cat verify
- **Inserts:** diagram: цикл
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Шпаргалка (стор. 71–72)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Shortcut table
- **Inserts:** try + diary
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 11. Користувачі (Частина 3) · стор. 74–79

**Крючок:** Свій ключ від кімнати — whoami

**Gap (редакція):** Multi-user diagram на spread.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 74–75 | Квартири | nf11-a | Building cutaway | spread | Apartment building users |
| S | 76 | whoami | nf11-b | Mirror | code | Terminal whoami |
| S | 77 | Окремі імена | nf11-c | Login screen | fact | Two profiles photo |
| S | 78 | Ролі | nf11-d | Badges | diagram roles | Costume party permissions |
| S | 79 | Практика | — | — | try | Family account sketch |

### Page-by-page (деталізація)

#### Spread 1 · Квартири (стор. 74–75)

- **Hero Illustration:** `nf11-a` — Apartment building users
- **Supporting:** Building cutaway
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · whoami (стор. 76)

- **Hero Illustration:** `nf11-b` — Terminal whoami
- **Supporting:** Mirror
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Окремі імена (стор. 77)

- **Hero Illustration:** `nf11-c` — Two profiles photo
- **Supporting:** Login screen
- **Inserts:** fact
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Ролі (стор. 78)

- **Hero Illustration:** `nf11-d` — Costume party permissions
- **Supporting:** Badges
- **Inserts:** diagram roles
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Практика (стор. 79)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** —
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 12. Права доступу (Частина 3) · стор. 80–85

**Крючок:** Різні ключі — різні двері

**Gap (редакція):** rwx infographic обов'язковий.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 80–81 | Ключі | nf12-a | Key macro | spread | Keys on board photo |
| S | 82 | ls -l | nf12-b | Magnifier | diagram rwx | Permission string annotated |
| S | 83 | Denied | nf12-c | Shield | errors | Permission denied screen |
| S | 84 | sudo | nf12-d | Master key | callout safety | Master key one-minute metaphor |
| S | 85 | Практика | — | — | try + check | rwx cheat sheet |

### Page-by-page (деталізація)

#### Spread 1 · Ключі (стор. 80–81)

- **Hero Illustration:** `nf12-a` — Keys on board photo
- **Supporting:** Key macro
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · ls -l (стор. 82)

- **Hero Illustration:** `nf12-b` — Permission string annotated
- **Supporting:** Magnifier
- **Inserts:** diagram rwx
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Denied (стор. 83)

- **Hero Illustration:** `nf12-c` — Permission denied screen
- **Supporting:** Shield
- **Inserts:** errors
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · sudo (стор. 84)

- **Hero Illustration:** `nf12-d` — Master key one-minute metaphor
- **Supporting:** Master key
- **Inserts:** callout safety
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Практика (стор. 85)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** —
- **Inserts:** try + check
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 13. Процеси (Частина 3) · стор. 86–92

**Крючок:** Minecraft + браузер + музика «одночасно»

**Gap (редакція):** Додати conductor cutaway illustration.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 86–87 | Жонглер | nf13-a | Pi below | wow | Juggler full spread |
| S | 88 | Багато вікон | nf13-b | Multi app | fact | Busy desktop photo |
| S | 89 | ps | nf13-c | Camera snapshot | code | ps = photo metaphor |
| S | 90 | top | nf13-d | Live list | callout | top/htop blur screen |
| S | 91–92 | Диригент CPU | — | Orchestra CPU | diagram + try | Conductor cutaway NEW |

### Page-by-page (деталізація)

#### Spread 1 · Жонглер (стор. 86–87)

- **Hero Illustration:** `nf13-a` — Juggler full spread
- **Supporting:** Pi below
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Багато вікон (стор. 88)

- **Hero Illustration:** `nf13-b` — Busy desktop photo
- **Supporting:** Multi app
- **Inserts:** fact
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · ps (стор. 89)

- **Hero Illustration:** `nf13-c` — ps = photo metaphor
- **Supporting:** Camera snapshot
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · top (стор. 90)

- **Hero Illustration:** `nf13-d` — top/htop blur screen
- **Supporting:** Live list
- **Inserts:** callout
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Диригент CPU (стор. 91–92)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Orchestra CPU
- **Inserts:** diagram + try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 14. Пошук файлів (Частина 3) · стор. 93–98

**Крючок:** 800 сторінок — знайди Minecraft

**Gap (редакція):** Decision tree diagram — ключ для DK.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 93–94 | Два ліхтарики | nf14-a | Toolbox | spread | find vs grep tools |
| S | 95 | find | nf14-b | Flashlight files | code | find paths screen |
| S | 96 | grep | nf14-c | Book highlight | wow | grep inside pages |
| S | 97 | Інцидент | nf14-d | Clock | try | Admin search calm |
| S | 98 | Дерево рішень | — | Flowchart | diagram decision | find OR grep flowchart NEW |

### Page-by-page (деталізація)

#### Spread 1 · Два ліхтарики (стор. 93–94)

- **Hero Illustration:** `nf14-a` — find vs grep tools
- **Supporting:** Toolbox
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · find (стор. 95)

- **Hero Illustration:** `nf14-b` — find paths screen
- **Supporting:** Flashlight files
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · grep (стор. 96)

- **Hero Illustration:** `nf14-c` — grep inside pages
- **Supporting:** Book highlight
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Інцидент (стор. 97)

- **Hero Illustration:** `nf14-d` — Admin search calm
- **Supporting:** Clock
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Дерево рішень (стор. 98)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Flowchart
- **Inserts:** diagram decision
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 15. Інтернет (Частина 4) · стор. 100–105

**Крючок:** Крутиться колесо — де застрягло?

**Gap (редакція):** Network road map — нова ілюстрація.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 100–101 | Колесо | nf15-a | Spinner | spread | Loading frustration photo |
| S | 102 | IP адреса | nf15-b | Apartment doors | diagram | Address = flat number |
| S | 103 | ping | nf15-c | Mountain echo | wow | Echo metaphor photo |
| S | 104 | ip a + ping | nf15-d | Terminal | code | Two commands screen |
| S | 105 | Wi‑Fi ≠ internet | — | Road network NEW | diagram roads | Pi→router→internet map |

### Page-by-page (деталізація)

#### Spread 1 · Колесо (стор. 100–101)

- **Hero Illustration:** `nf15-a` — Loading frustration photo
- **Supporting:** Spinner
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · IP адреса (стор. 102)

- **Hero Illustration:** `nf15-b` — Address = flat number
- **Supporting:** Apartment doors
- **Inserts:** diagram
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · ping (стор. 103)

- **Hero Illustration:** `nf15-c` — Echo metaphor photo
- **Supporting:** Mountain echo
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · ip a + ping (стор. 104)

- **Hero Illustration:** `nf15-d` — Two commands screen
- **Supporting:** Terminal
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Wi‑Fi ≠ internet (стор. 105)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Road network NEW
- **Inserts:** diagram roads
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 16. SSH (Частина 4) · стор. 106–111

**Крючок:** Pi в іншій кімнаті — як написати?

**Gap (редакція):** nf16-b на весь розворот.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 106–107 | Відстань | nf16-a | Room split | spread | Pi shelf + laptop desk |
| S | 108 | Тунель | nf16-b | Tin cans FULL | wow | SSH tunnel hero FULL SPREAD |
| S | 109 | Headless | nf16-c | LED only | code ssh | No monitor Pi |
| S | 110 | Безпека | nf16-d | Lock+key | callout | SSH key USB |
| S | 111 | Практика | — | — | try + errors | Connection checklist |

### Page-by-page (деталізація)

#### Spread 1 · Відстань (стор. 106–107)

- **Hero Illustration:** `nf16-a` — Pi shelf + laptop desk
- **Supporting:** Room split
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Тунель (стор. 108)

- **Hero Illustration:** `nf16-b` — SSH tunnel hero FULL SPREAD
- **Supporting:** Tin cans FULL
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Headless (стор. 109)

- **Hero Illustration:** `nf16-c` — No monitor Pi
- **Supporting:** LED only
- **Inserts:** code ssh
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Безпека (стор. 110)

- **Hero Illustration:** `nf16-d` — SSH key USB
- **Supporting:** Lock+key
- **Inserts:** callout
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Практика (стор. 111)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** —
- **Inserts:** try + errors
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 17. Сервери (Частина 4) · стор. 112–116

**Крючок:** Хто тримає світ Minecraft?

**Gap (редакція):** Розширити до 6 сторінок; kitchen cutaway.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 112–113 | Гравець vs кухня | nf17-a | Split scene | spread | Player foreground Pi background |
| S | 114 | Кухня | nf17-b | Kitchen cutaway NEW | diagram client/server | Restaurant kitchen metaphor |
| S | 115 | Надійність | nf17-c | Checklist | callout | Prep before party |
| S | 116 | Клієнт↔сервер | nf17-d | Arrows | try + wow | Two-arrow infographic |

### Page-by-page (деталізація)

#### Spread 1 · Гравець vs кухня (стор. 112–113)

- **Hero Illustration:** `nf17-a` — Player foreground Pi background
- **Supporting:** Split scene
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Кухня (стор. 114)

- **Hero Illustration:** `nf17-b` — Restaurant kitchen metaphor
- **Supporting:** Kitchen cutaway NEW
- **Inserts:** diagram client/server
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Надійність (стор. 115)

- **Hero Illustration:** `nf17-c` — Prep before party
- **Supporting:** Checklist
- **Inserts:** callout
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Клієнт↔сервер (стор. 116)

- **Hero Illustration:** `nf17-d` — Two-arrow infographic
- **Supporting:** Arrows
- **Inserts:** try + wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 18. Встановлення сервера (Частина 5) · стор. 118–123

**Крючок:** Кухня готова? Java → server.jar

**Gap (редакція):** Mojang disclaimer. Step strip infographic.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 118–119 | Кухня→торт | nf18-a | Minecraft tease | spread COMMERCE | Kitchen metaphor hero |
| S | 120 | Java | nf18-b | java -version | code | Java check screen |
| S | 121 | Папка | nf18-c | Folder tree | callout | minecraft-server tidy |
| S | 122 | Встановлення | nf18-d | jar icon | fact EULA tease | Install with adult |
| S | 123 | Практика | — | Step icons | try + disclaimer | 5-step install strip NEW |

### Page-by-page (деталізація)

#### Spread 1 · Кухня→торт (стор. 118–119)

- **Hero Illustration:** `nf18-a` — Kitchen metaphor hero
- **Supporting:** Minecraft tease
- **Inserts:** spread COMMERCE
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Java (стор. 120)

- **Hero Illustration:** `nf18-b` — Java check screen
- **Supporting:** java -version
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Папка (стор. 121)

- **Hero Illustration:** `nf18-c` — minecraft-server tidy
- **Supporting:** Folder tree
- **Inserts:** callout
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Встановлення (стор. 122)

- **Hero Illustration:** `nf18-d` — Install with adult
- **Supporting:** jar icon
- **Inserts:** fact EULA tease
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Практика (стор. 123)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Step icons
- **Inserts:** try + disclaimer
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 19. Налаштування (Частина 5) · стор. 124–128

**Крючок:** Конституція світу — server.properties

**Gap (редакція):** +1 wow про один параметр за раз.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 124–125 | Закони світу | nf19-a | Rule book | spread | Constitution metaphor |
| S | 126 | nano config | nf19-b | Properties blur | code | server.properties annotated |
| S | 127 | Backup | nf19-c | Twin folders | callout | cp .bak safety |
| S | 128 | Справедлива гра | nf19-d | Friends play | try | Happy multiplayer photo |

### Page-by-page (деталізація)

#### Spread 1 · Закони світу (стор. 124–125)

- **Hero Illustration:** `nf19-a` — Constitution metaphor
- **Supporting:** Rule book
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · nano config (стор. 126)

- **Hero Illustration:** `nf19-b` — server.properties annotated
- **Supporting:** Properties blur
- **Inserts:** code
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Backup (стор. 127)

- **Hero Illustration:** `nf19-c` — cp .bak safety
- **Supporting:** Twin folders
- **Inserts:** callout
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Справедлива гра (стор. 128)

- **Hero Illustration:** `nf19-d` — Happy multiplayer photo
- **Supporting:** Friends play
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 20. Запуск сервера (Частина 5) · стор. 129–134

**Крючок:** Шум на екрані ≠ готово

**Gap (редакція):** nf20-d — задник / Amazon preview.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 129–130 | Логи | nf20-a | Log scroll | spread | Reading logs tension |
| S | 131 | Done | nf20-b | Airplane doors | wow Done | Done line highlighted blur |
| S | 132 | Соло-тест | nf20-c | One player | try | Solo join test |
| S | 133–134 | Свято | nf20-d | Confetti | diary PAYOFF | Friends celebrate HERO MARKETING |

### Page-by-page (деталізація)

#### Spread 1 · Логи (стор. 129–130)

- **Hero Illustration:** `nf20-a` — Reading logs tension
- **Supporting:** Log scroll
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Done (стор. 131)

- **Hero Illustration:** `nf20-b` — Done line highlighted blur
- **Supporting:** Airplane doors
- **Inserts:** wow Done
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Соло-тест (стор. 132)

- **Hero Illustration:** `nf20-c` — Solo join test
- **Supporting:** One player
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Свято (стор. 133–134)

- **Hero Illustration:** `nf20-d` — Friends celebrate HERO MARKETING
- **Supporting:** Confetti
- **Inserts:** diary PAYOFF
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 21. Інші проєкти Pi (Частина 6) · стор. 136–140

**Крючок:** Minecraft — лише одна станція

**Gap (редакція):** Printable project picker worksheet.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 136–137 | Карта | nf21-a | Map full | spread | Project islands map FULL |
| S | 138 | Навички | nf21-b | Maker desk | fact | GPIO/media/robot collage |
| S | 139 | Один крок | nf21-c | Choice cards | try | Pick one path |
| S | 140 | Цікавість | nf21-d | Open book | wow | Book ends curiosity not |

### Page-by-page (деталізація)

#### Spread 1 · Карта (стор. 136–137)

- **Hero Illustration:** `nf21-a` — Project islands map FULL
- **Supporting:** Map full
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Навички (стор. 138)

- **Hero Illustration:** `nf21-b` — GPIO/media/robot collage
- **Supporting:** Maker desk
- **Inserts:** fact
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Один крок (стор. 139)

- **Hero Illustration:** `nf21-c` — Pick one path
- **Supporting:** Choice cards
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Цікавість (стор. 140)

- **Hero Illustration:** `nf21-d` — Book ends curiosity not
- **Supporting:** Open book
- **Inserts:** wow
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Розділ 22. Твій шлях адміністратора (Частина 6) · стор. 141–146

**Крючок:** Забути команди — не страшно

**Gap (редакція):** Certificate printable для Etsy/TPT.

| Spread | Стор. | Назва | Hero | Supporting | Вставки | Візуал для художника |
|--------|-------|-------|------|------------|---------|----------------------|
| S | 141–142 | Фінал | nf22-a | Doorway light | spread | Book close Pi ready |
| S | 143 | Детектив | nf22-b | 5 questions | diagram ritual | Detective ritual board |
| S | 144 | Не кнопкотиск | nf22-c | Typing confident | fact | Growth photo |
| S | 145 | Наступний крок | nf22-d | Tools | try | Next experiment |
| S | 146 | Сертифікат | — | Certificate NEW | draw printable | Young admin certificate bonus |

### Page-by-page (деталізація)

#### Spread 1 · Фінал (стор. 141–142)

- **Hero Illustration:** `nf22-a` — Book close Pi ready
- **Supporting:** Doorway light
- **Inserts:** spread
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 2 · Детектив (стор. 143)

- **Hero Illustration:** `nf22-b` — Detective ritual board
- **Supporting:** 5 questions
- **Inserts:** diagram ritual
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 3 · Не кнопкотиск (стор. 144)

- **Hero Illustration:** `nf22-c` — Growth photo
- **Supporting:** Typing confident
- **Inserts:** fact
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 4 · Наступний крок (стор. 145)

- **Hero Illustration:** `nf22-d` — Next experiment
- **Supporting:** Tools
- **Inserts:** try
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

#### Spread 5 · Сертифікат (стор. 146)

- **Hero Illustration:** — (текст/діаграма)
- **Supporting:** Certificate NEW
- **Inserts:** draw printable
- **Macro / Infographic / Callout:** за потреби з колонки visual
- **Емоція:** здивування → ясність → «я можу»

---

## Зведена оцінка (після плану)

| Критерій | Було | Після виконання плану |
|----------|------|------------------------|
| Комерційний потенціал | 7,5 | 9 |
| Візуальний потенціал | 4 | 8,5 |
| DK-рівень | 5,5 | 8 |
| Usborne-рівень | 7 | 8,5 |

**Наступний крок:** згенерувати [ILLUSTRATION_WAVE1.md](./ILLUSTRATION_WAVE1.md) (30 пріоритетних файлів).

