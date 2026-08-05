window.CHAPTER_09 = {
  id: 9,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Робота з файлами",
  icon: "code",
  learn: [
    "Створити й прочитати файл (touch, cat)",
    "Скопіювати й перейменувати (cp, mv)",
    "Обережно видаляти (rm)",
  ],
  content: [
    {
      type: "text",
      text: "Проєкт «Мій світ», **розділ 4**. У `mii-svit` порожньо — як кімната без меблів. Треба перші **файли**: правила світу, нотатки, список друзів.",
    },
    {
      type: "text",
      text: "У тебе є шкільний зошит.",
    },
    {
      type: "text",
      text: "Ти хочеш записати нотатку. Скопіювати сторінку для друга. Перейменувати чернетку. Або — обережно — викинути старий черновик.",
    },
    {
      type: "text",
      text: "На столі це просто. А **як керувати файлами в терміналі без страху?**",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Тут багато команд. Якщо помилюся — все зникне!»*",
    },
    {
      type: "text",
      text: "Саме тому йдемо **повільно й обережно**: створити → прочитати → копіювати → перейменувати → видалити (лише коли впевнений).",
    },
    {
      type: "image",
      src: "nf09-a",
      alt: "Файли в папці як зошити на полиці",
      caption: "Файл — іменована «сторінка» з даними.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Stack of realistic paper pages with tab labels as files, top page named like a document, bright desk",
    },
    {
      type: "h2",
      text: "Чистий аркуш",
    },
    {
      type: "text",
      text: "Уяви чистий аркуш з наклейкою‑назвою.",
    },
    {
      type: "text",
      text: "Поки на ньому нічого немає — але **ім’я вже є**. Так працює порожній файл.",
    },
    {
      type: "text",
      text: "Команда **touch** створює такий «чистий аркуш» — порожній файл із назвою.",
    },
    {
      type: "code",
      text: "# Створити порожній файл world-rules.txt\npi@raspberrypi:~/mii-svit$ touch world-rules.txt\n\n# Перевірити список\npi@raspberrypi:~/mii-svit$ ls\n\n# Приклад відповіді\nbackups  notes  world-rules.txt",
    },
    {
      type: "h2",
      text: "Прочитати — не стерти",
    },
    {
      type: "text",
      text: "Уяви: ти в сусідній кімнаті. Мама кричить крізь двері: «**Що ти там написав у зошиті?**»",
    },
    {
      type: "text",
      text: "Вона **не заходить** і **не рве** сторінки. Вона лише **читає вголос**.",
    },
    {
      type: "text",
      text: "У терміналі так само працює **cat** — подивитися текст, нічого не зламавши.",
    },
    {
      type: "code",
      text: "# Показати вміст файлу (поки порожній — нічого не виведе)\npi@raspberrypi:~/mii-svit$ cat world-rules.txt\n\n# Якщо у файлі є текст, побачиш його під командою\npi@raspberrypi:~/mii-svit$ cat world-rules.txt\nМакс. гравців: 5. Не ламати чужі будівлі.",
    },
    {
      type: "think",
      id: "q1",
      question: "Команда cat…",
      options: [
        { id: "a", text: "видаляє файл" },
        { id: "b", text: "показує вміст файлу" },
        { id: "c", text: "створює папку" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "**cat** показує вміст. Для видалення — зовсім інша команда.",
    },
    {
      type: "image",
      src: "nf09-b",
      alt: "Читання файлу",
      caption: "cat = подивитися текст, не чіпати.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal displaying cat command output, text lines blurred, read-only mood, bright monitor",
    },
    {
      type: "h2",
      text: "Копія рятує",
    },
    {
      type: "text",
      text: "Уяви: ти хочеш спробувати щось ризиковане зі сторінкою.",
    },
    {
      type: "text",
      text: "Розумний крок — **спочатку зробити копію**. Оригінал лишається цілим.",
    },
    {
      type: "text",
      text: "Команда **cp** копіює файл. Два файли — два «аркуші» з однаковим текстом.",
    },
    {
      type: "code",
      text: "# Скопіювати world-rules.txt → world-rules-backup.txt\npi@raspberrypi:~/mii-svit$ cp world-rules.txt world-rules-backup.txt\npi@raspberrypi:~/mii-svit$ ls\n\n# Приклад відповіді\nbackups  notes  world-rules-backup.txt  world-rules.txt",
    },
    {
      type: "h2",
      text: "Нова назвка на зошиті",
    },
    {
      type: "text",
      text: "Іноді треба не копію, а **нове ім’я** — перейменувати чернетку.",
    },
    {
      type: "text",
      text: "Команда **mv** переміщує або перейменовує. У тій самій папці це часто просто нове ім’я на тому самому «аркуші».",
    },
    {
      type: "code",
      text: "# Перейменувати копію на rules-draft.txt\npi@raspberrypi:~/mii-svit$ mv world-rules-backup.txt rules-draft.txt\npi@raspberrypi:~/mii-svit$ ls\n\n# Приклад відповіді\nbackups  notes  rules-draft.txt  world-rules.txt",
    },
    {
      type: "h2",
      text: "Стоп-кран: rm",
    },
    {
      type: "text",
      text: "А ось **найнебезпечніша** дія — видалити.",
    },
    {
      type: "text",
      text: "У терміналі **rm** часто **не питає** «ти впевнений?». Немає великої кнопки «Скасувати», як у редакторі.",
    },
    {
      type: "text",
      text: "Тому перед rm зроби `ls` і перевір ім’я **двічі**.",
    },
    {
      type: "code",
      text: "# Спочатку подивись список\npi@raspberrypi:~/mii-svit$ ls\nbackups  notes  rules-draft.txt  world-rules.txt\n\n# Видали лише чернетку (rules-draft.txt), не оригінал!\npi@raspberrypi:~/mii-svit$ rm rules-draft.txt\npi@raspberrypi:~/mii-svit$ ls\nbackups  notes  world-rules.txt",
    },
    {
      type: "think",
      id: "q2",
      question: "Перед rm найкраще…",
      options: [
        { id: "a", text: "заплющити очі" },
        { id: "b", text: "перевірити ім’я через ls" },
        { id: "c", text: "вимкнути монітор" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Спочатку **ls**. Адмін дивиться — потім діє.",
    },
    {
      type: "image",
      src: "nf09-c",
      alt: "Обережне видалення",
      caption: "rm без Undo — як викинути зошит без кошика.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic trash bin with NO undo arrow, crumpled paper falling in, bright warning but not scary, clear metaphor",
    },
    {
      type: "fact",
      title: "Копія рятує",
      text: "Перед ризикованою дією зроби cp. Тренуйся на копіях, не на єдиному важливому файлі.",
    },
    {
      type: "image",
      src: "nf09-d",
      alt: "Копія файлу",
      caption: "cp створює двійника — оригінал цілий.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two identical notebooks side by side on bright desk, one labeled original one copy, realistic stationery photo",
    },
    {
      type: "try",
      title: "🔍 Дослідження: безпечний цикл",
      body: "Пройди весь шлях від створення до обережного видалення — на копії, не на важливому.",
      checklist: [
        "Відкрий термінал, перейди в папку проєкту (`cd ~/mii-svit` або створи її)",
        "`touch practice.txt` — чистий аркуш",
        "`cp practice.txt practice2.txt` — копія",
        "`mv practice2.txt practice-old.txt` — перейменувати копію",
        "`cat practice.txt` — оригінал на місці?",
        "`ls` — подивись імена уважно",
        "`rm practice-old.txt` — видали лише копію!",
        "`ls` знову — practice.txt лишився?",
        "Запиши в щоденник: яка команда найнебезпечніша?",
      ],
      footer: "Оригінал на місці — ти обережний адмін.",
    },
    {
      type: "draw",
      text: "Схема: файл → cp → копія; файл → rm → зникнення. Підпиши стрілки.",
    },
    {
      type: "diary",
      lines: [
        "Яка команда найнебезпечніша і чому?",
        "Який ритуал перед rm?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "cat видаляє текст.",
          truth: "cat лише показує вміст.",
        },
        {
          title: "Помилка №2",
          myth: "rm завжди питає підтвердження.",
          truth: "Звичайний rm може видалити одразу.",
        },
        {
          title: "Помилка №3",
          myth: "Тренуй rm на важливих файлах.",
          truth: "Тренуйся на копіях.",
        },
      ],
    },
    {
      type: "text",
      text: "У `mii-svit` уже є `world-rules.txt` — але всередині порожньо. Як **записати правила світу** текстом?",
    },
  ],
  remember: [
    "touch створює",
    "cat читає",
    "cp копіює",
    "mv переміщує/перейменовує",
    "rm видаляє обережно",
  ],
  commands: [
    { cmd: "touch файл", does: "Створює порожній файл" },
    { cmd: "cat файл", does: "Показує вміст" },
    { cmd: "cp з до", does: "Копіює" },
    { cmd: "mv з до", does: "Переміщує/перейменовує" },
    { cmd: "rm файл", does: "Видаляє (обережно!)" },
  ],
  glossary: [
    { term: "Файл", def: "Іменований набір даних." },
    { term: "rm", def: "Команда видалення." },
  ],
  check: [
    {
      type: "match",
      prompt: "Поєднай:",
      hint: "rm обережно",
      explanation: "Базовий набір.",
      pairs: [
        ["touch", "створити"],
        ["cat", "показати"],
        ["cp", "скопіювати"],
        ["mv", "перемістити/перейменувати"],
        ["rm", "видалити"],
      ],
    },
    {
      type: "tf",
      text: "Звичайний rm завжди питає підтвердження.",
      answer: false,
      hint: "Чи завжди питає?",
      explanation: "Ні. Перевіряй ім’я.",
    },
    {
      type: "fill",
      prompt: "Команда копіювання:",
      answer: "cp",
      hint: "від copy",
      explanation: "cp створює копію.",
    },
    {
      type: "whatif",
      prompt: "rm важливого файлу без копії?",
      hint: "Немає великої кнопки скасувати.",
      explanation: "Видалення часто незворотне.",
      sample: "Може зникнути без Undo.",
      optional: true,
    },
    {
      type: "error",
      prompt: "«cat видаляє текст»",
      hint: "cat≈показати",
      explanation: "Для видалення — rm.",
      sample: "cat показує.",
      optional: true,
    },
  ],
  next: 10,
};
