# Mission Admin — документ стилей для Canva (продажный PDF)

**Версия:** 1.0  
**Книга:** Mission Admin (EN) · серия MISJE WIEDZY · Book 12  
**Аудитория:** 10–12 лет + взрослый рядом  
**Формат продажи:** Gumroad / свой сайт · чтение с экрана + домашний печать A4  
**Язык UI/типографики в PDF:** English  

Этот документ — бриф для сборки **премиум PDF в Canva** (или для дизайнера).  
Текущий Chrome-PDF — рабочий черновик контента. Canva нужна для **обложки, фронт-матера, part-openers и визуального ритма**, а не для ручного переноса всех 220+ страниц текста.

---

## 1. Вердикт по текущему PDF (что править)

| Что уже ок | Что «дешево» для продажи |
|---|---|
| Контент EN, legal, how-to, Parts TOC | Много «голого» белого поля без атмосферы |
| Teal-акцент, читаемый текст | Legal/How-to выглядят как Word, не как книга |
| Фото детей + Pi есть | Part opener: фото сверху, пустота снизу |
| Блоки Think / Fact с левой полосой | Нет «журнального» ритма (герой / две колонки / иконки) |
| Glossary в конце | Нет номеров страниц в Contents |
| | Файл ~230 MB — плохо для Gumroad |

**Правильная стратегия Canva**

1. **Не** переносить все 22 главы вручную в Canva (дорого, хрупко, ад с правками текста).  
2. Сделать в Canva **премиум-оболочку** (8–16 страниц) + **шаблоны разворотов**.  
3. Внутренности глав либо оставить из print-CSS (после сжатия), либо сверстать в Affinity/InDesign по тем же стилям.  
4. Для «Look Inside» / Gumroad preview — отдельный **12–20 page sample** целиком из Canva.

---

## 2. Бренд и палитра

### Цвета (HEX)

| Имя | HEX | Роль |
|---|---|---|
| Ink | `#1A2332` | Основной текст |
| Muted | `#4A5568` | Подписи, мета |
| Teal | `#0F766E` | Акцент бренда, линии, labels |
| Teal soft | `#ECFDF8` | Фон callout / tip |
| Rule | `#D0D5DD` | Тонкие линейки |
| Paper | `#FFFFFF` | Фон страницы |
| Soft sand *(опционально, очень слабо)* | `#F7F8F6` | Фон part-opener / legal, не cream-terracotta |

**Запреты для «премиум»**

- Фиолетовые / indigo градиенты  
- Neon glow, тяжёлые тени, «AI purple»  
- Pill-кнопки и UI-карточки как в веб-приложении  
- Перегруз эмодзи в заголовках (в теле — максимум 1 на блок, лучше иконка SVG)  
- Официальные логотипы Mojang / Microsoft / Raspberry Pi Foundation  

### Шрифты в Canva

Подбери пары, близкие к:

| Роль | Предпочтение | Canva-аналоги |
|---|---|---|
| Display (заголовки) | Fraunces / Playfair-like | **Playfair Display**, **Libre Baskerville**, **Cormorant** |
| Body | Literata / book serif | **Source Serif 4**, **EB Garamond**, **Lora** |
| UI / labels | Nunito / geometric sans | **Nunito**, **DM Sans**, **Manrope** |

Размеры ориентир (A4):

- Название книги на обложке: **42–56 pt**  
- Part title: **32–40 pt**  
- Chapter H1: **26–30 pt**  
- H2: **16–18 pt**  
- Body: **11–12 pt**, leading **1.35–1.45**  
- Label (PART / DID YOU KNOW): **9–10 pt**, uppercase, tracking +40…+80  
- Footer: **8–9 pt**

---

## 3. Формат страницы

- **Размер:** A4 (`210 × 297 mm`)  
- **Поля (домашняя печать):** верх/низ **18–20 mm**, лево/право **16–18 mm**  
- **Bleed:** не нужен для Gumroad digital; если позже KDP — отдельный файл  
- **Экспорт:** PDF Print, качество высокое, **сжать изображения** (цель файла для продажи: **25–60 MB**, не 230 MB)  
- **Цвет:** RGB для экрана; при печати «Best» / включить фоновую графику  

---

## 4. Типы страниц (шаблоны в Canva)

Сделай **отдельные Brand templates** (дублируй, не рисуй с нуля каждый раз).

### A. Cover (1 стр.)

**Композиция одной плоскости:**

1. Full-bleed или почти full-bleed фото (мальчик + Pi + намёк на game world) — **без** мелких стикеров поверх лица.  
2. Внизу тёмная или светлая текстовая полоса **или** чистый белый блок под фото.  
3. Только: серия → badge Book 12 · EN → **Mission Admin** → один tagline → одна строка тем.  
4. Не дублируй длинный description на обложке.

**Canva checklist**

- [ ] Бренд читается без навбара  
- [ ] Один герой-визуал, edge-to-edge  
- [ ] Нет плавающих badge поверх глаз ребёнка  
- [ ] Trademark-safe: нет лого Minecraft / Pi  

### B. Legal (1 стр.)

- Заголовок Legal notice  
- Короткий trademark paragraph  
- © строка  
- Опционально: маленький teal rule + логотип-слово MISJE WIEDZY  
- Не оставляй «пустой лист с абзацем сверху» — добавь мягкий фон `#F7F8F6` или тонкую рамку-поле  

### C. How to use (1–2 стр.)

- Intro blurb (1 абзац)  
- «Read together» callout (левая teal полоса)  
- 5–6 шагов как **нумерованные карточки-строки**, не веб-UI  
- Иконки: track A / track B / journal — простые line icons в Teal  

### D. Contents (1–2 стр.)

- PART заголовок: Teal uppercase + rule  
- Главы: `01  Title .................... 12` (с лидерами и номерами страниц)  
- Можно мини-иконка part слева (Pi / terminal / network / server)  

### E. Part opener (6 стр. — по одной на часть)

Структура:

```
PART N                    (teal label)
Title of part             (huge serif)
[ hero photo 2/3 page ]
one-line mission promise  (optional)
```

Названия Parts (EN):

1. Meet the Raspberry Pi  
2. Linux  
3. System Administrator  
4. Networks  
5. Your Game Server  
6. What's Next?  

Фото: `part-01-pi` … `part-06-next` из `assets/illustrations/rasberi/`.

### F. Chapter start

```
PART N · CHAPTER N / 22
Chapter title
teal underline
What you'll learn (3 bullets)
hero image (доминирует)
body…
```

### G. Body rhythm (повторяемые блоки)

| Блок | Вид в Canva |
|---|---|
| Think / What do you think? | Soft teal bg + left bar + label |
| Answer / Reveal | Тот же, label ANSWER |
| Did you know / Fact | Left bar, без тяжёлой тени |
| Try it now | Checklist rows с □ |
| Admin Journal | Lined area или 2–3 пустые строки |
| Common mistakes | Myth → Truth две колонки |
| Code / terminal | Светлый `#F4F7F6`, mono font, без чёрного «хакерского» окна |
| Check yourself | Отдельная страница; Answers — page break |

**Правило:** блоки = типографика + линия, не «карточки приложения».

### H. Back matter

- Glossary: 2 колонки  
- Index: компактный список  
- Back cover: `cover-back-mission-admin.png` + короткий blurb + «Ages 10–12» + disclaimer одной строкой  

---

## 5. Иллюстрации — политика

1. Один стиль: тёплый свет, реальный ребёнок 10–12, реальный Pi, без логотипов брендов.  
2. **Hero** на старте главы — крупно (высота ~110–130 mm).  
3. Supporting — меньше (~70 mm).  
4. Game-world: только generic voxels / blurred screen — не копировать Minecraft UI/лого.  
5. Не ставить коллажи из 4 мелких картинок на одну страницу.

Папки ассетов:

- Обложки: `assets/covers/cover-front-mission-admin.png`, `cover-back-mission-admin.png`  
- Иллюстрации: `assets/illustrations/rasberi/`  

---

## 6. Workflow Canva (практика)

### Вариант Premium Lite (рекомендуется сначала)

1. Canva Doc/Presentation → Custom size A4.  
2. Собрать **Sample PDF 16 страниц**: cover, legal, how-to, TOC, 1 part opener, 1 полная глава (красиво), glossary teaser, back.  
3. Продать sample / использовать как Gumroad preview.  
4. Полную книгу держать на CSS-print + сжатие **или** поэтапно переносить part-by-part.

### Вариант Premium Full

1. Нанять верстальщика (Canva Pro / Affinity Publisher).  
2. Импорт текста по главам (не копипаст из скриншотов).  
3. Единые компоненты (Brand Kit).  
4. Экспорт PDF/X или high-quality PDF + ручное сжатие изображений до 150–200 dpi для digital.

### Чеклист перед загрузкой на Gumroad

- [ ] Обложка цепляет в thumbnail  
- [ ] Legal + trademark на месте  
- [ ] Contents с номерами страниц  
- [ ] Нет польских ярлыков / битых emoji-квадратов  
- [ ] Файл &lt; 80 MB (лучше &lt; 40 MB)  
- [ ] Preview 10–15% книги бесплатно  
- [ ] Название файла: `Mission-Admin-EN.pdf`  

---

## 7. Ценообразование: сколько может стоить премиум PDF

Ориентиры для **цифрового** kids STEM / coding nonfiction на Gumroad, Etsy, собственном сайте (USD, 2026):

| Класс продукта | Что внутри | Цена покупателю |
|---|---|---|
| Draft / workbook plain | Текст + простые картинки, «как из браузера» | **$7–12** |
| Solid digital book | Чистая вёрстка, обложка, callouts, glossary | **$14–22** |
| **Premium class** | Canva/InDesign качество, сильные фото, part openers, sample+full, сжатый файл | **$24–39** |
| Premium + extras | PDF + printable worksheets + parent guide + updates | **$39–59** |
| Bundle (UA+EN или 2 книги серии) | Два файла / серия | **$49–79** |

**Для Mission Admin (премиум после Canva-полировки) разумный старт:**

- **$27–32** — полная книга (якорь «меньше чем бумажный STEM-гайд»)  
- **$19** — early bird / launch  
- **$9–12** — только sample / first 3 chapters  
- Печать «дома A4» — включена в digital; отдельный **print-ready KDP** — другая SKU (+$0 digital или paperback Amazon отдельно)

**Почему не $9 навсегда:** контент глубокий (22 главы, Pi + Linux + server), возрастная ниша узкая, иллюстрации дорогие. Премиум-цена сигнализирует качество; дешевизна на Gumroad часто читается как low-effort PDF.

**Себестоимость «сделать красиво» (разово):**

| Работа | Оценка |
|---|---|
| Canva sample 16 стр. самим | 1–3 дня |
| Дизайнер: оболочка + 1 глава-эталон | **$150–400** |
| Полная премиум-вёрстка 200+ стр. | **$800–2500+** |
| Сжатие/оптимизация PDF | 1–2 часа |

---

## 8. Копирайт и Amazon/Gumroad safety (коротко)

В PDF обязательно:

> Unofficial educational guide. Not affiliated with Mojang Studios, Microsoft, or the Raspberry Pi Foundation. Minecraft® and Raspberry Pi® are trademarks of their respective owners.

Не использовать официальные логотипы и узнаваемый UI игры на обложке.

---

## 9. Итог одной фразой

**Сейчас:** хороший «print from browser» макет.  
**Для продажи премиум:** Canva (или Publisher) для обложки + фронт + part openers + эталон главы; цена **~$27–35**; полный перенос всех страниц в Canva — только если есть бюджет на профессиональную вёрстку.
