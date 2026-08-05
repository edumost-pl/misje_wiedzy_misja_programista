window.CHAPTER_14 = {
  id: 14,
  bookId: "sysadmin",
  part: 3,
  partTitle: "Системний адміністратор",
  title: "Пошук файлів",
  icon: "search",
  learn: [
    "Коли брати find",
    "Коли брати grep",
    "Як не плутати пошук файлу й пошук тексту",
  ],
  content: [
    {
      type: "text",
      text: "Вчора ти писав важливу нотатку на Pi.",
    },
    {
      type: "text",
      text: "Сьогодні відкриваєш термінал — і **не можеш знайти файл**.",
    },
    {
      type: "text",
      text: "Ти відкриваєш одну папку. Другу. Третю. Листаєш `ls` — **нічого**.",
    },
    {
      type: "text",
      text: "Стоп. **Куди зник мій файл?** І як знайти **текст** всередині, якщо пам’ятаєш лише одну фразу?",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Папки марні — все одно загублю»*.",
    },
    {
      type: "text",
      text: "Папки допомагають. Але коли файлів стає **багато**, потрібні **детективні інструменти** — два різні «ліхтарики».",
    },
    {
      type: "image",
      src: "nf14-a",
      alt: "Детектив шукає загублений файл",
      caption: "Різні загадки — різні інструменти.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two tools on bright desk: flashlight for filenames, magnifying glass for page text, realistic product shot",
    },
    {
      type: "h2",
      text: "Два ліхтарики",
    },
    {
      type: "text",
      text: "Уяви, що ти детектив у великому будинку з сотнями шухляд.",
    },
    {
      type: "text",
      text: "Один ліхтарик світить на **наклейки на шухлядах** — імена файлів. Це **find**.",
    },
    {
      type: "text",
      text: "Другий ліхтарик заглядає **всередину** шухляд — шукає слова в тексті. Це **grep**.",
    },
    {
      type: "text",
      text: "Пам’ятаєш **ім’я** — find. Пам’ятаєш **фразу всередині** — grep.",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Адмін щодня шукає: логи, конфіги, скрипти. Без find і grep можна годинами листати папки — як ти сьогодні.",
    },
    {
      type: "h2",
      text: "Бібліотека без кінця",
    },
    {
      type: "text",
      text: "Уяви бібліотеку.",
    },
    {
      type: "text",
      text: "Полиць — сотні. Книг — тисячі. І десь там лежить **одна** — `world-rules.txt`.",
    },
    {
      type: "text",
      text: "Ти будеш знімати **кожну** книгу й дивитися на корінець?",
    },
    {
      type: "text",
      text: "Напевно ні. Ти попросиш **бібліотекаря**, який оббігає полиці за тебе.",
    },
    {
      type: "text",
      text: "У Linux такий бібліотекар існує. Його звати **find**.",
    },
    {
      type: "text",
      text: "Ти кажеш умову — наприклад, «усі файли `.txt`» — і він повертає список. Крапка `.` означає «починай **звідси**», з поточної папки.",
    },
    {
      type: "code",
      text: "# Шукати всі .txt файли від поточної папки\npi@raspberrypi:~/mii-svit$ find . -name \"*.txt\"\n\n# Приклад відповіді\n./notes/world-rules.txt\n./backups/rules-old.txt",
    },
    {
      type: "text",
      text: "`-name` — це «шукай за іменем». Бібліотекар не читає книги — він знаходить **правильну полицю**.",
    },
    {
      type: "think",
      id: "q1",
      question: "find потрібен, щоб…",
      options: [
        { id: "a", text: "шукати файли за умовами (наприклад, за іменем)" },
        { id: "b", text: "зарядити Pi" },
        { id: "c", text: "змінити LED" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "find шукає **файли** у дереві каталогів — ліхтарик на наклейки.",
    },
    {
      type: "image",
      src: "nf14-b",
      alt: "Пошук за ім’ям",
      caption: "find — ліхтарик на назви файлів.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal find command output listing file paths blurred, folder tree on sticky note beside keyboard",
    },
    {
      type: "h2",
      text: "Книга на 800 сторінок",
    },
    {
      type: "text",
      text: "Тобі дали книгу на **800 сторінок**.",
    },
    {
      type: "text",
      text: "І сказали: «Знайди **усі** місця, де зустрічається слово *Minecraft*».",
    },
    {
      type: "text",
      text: "Ти будеш читати всю книгу від обкладинки до обкладинки?",
    },
    {
      type: "text",
      text: "Напевно ні.",
    },
    {
      type: "text",
      text: "**Linux теж.**",
    },
    {
      type: "text",
      text: "Він використовує спеціального помічника, який **пролистує сторінки за секунди** і показує лише потрібні рядки.",
    },
    {
      type: "text",
      text: "Його звати **grep**.",
    },
    {
      type: "code",
      text: "# Шукати слово Minecraft у файлі правил\npi@raspberrypi:~/mii-svit$ grep -n Minecraft notes/world-rules.txt\n\n# Приклад відповіді\n2:Світ для друзів. Режим: Minecraft survival.",
    },
    {
      type: "text",
      text: "Прапорець **`-n`** додає **номер сторінки** — точніше, рядка. Як закладка: «дивись, ось тут!»",
    },
    {
      type: "think",
      id: "q2",
      question: "Пам’ятаєш фразу всередині, але не ім’я файлу. Що логічніше?",
      options: [
        { id: "a", text: "grep (пошук тексту)" },
        { id: "b", text: "лише clear" },
        { id: "c", text: "зламати HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Для **вмісту** — grep. Для **імені** — find. Не плутай ліхтарики!",
    },
    {
      type: "image",
      src: "nf14-c",
      alt: "Пошук у тексті",
      caption: "grep — ліхтарик всередину файлів.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal grep command with matching lines highlighted blur, open book with highlighted word metaphor on desk",
    },
    {
      type: "h2",
      text: "Разом сильніші",
    },
    {
      type: "text",
      text: "Іноді спочатку **find** знаходить файли, а **grep** перевіряє їхній вміст.",
    },
    {
      type: "text",
      text: "Як детектив: спочатку знайди підозрілі «шухляди», потім заглянь всередину.",
    },
    {
      type: "code",
      text: "# Спочатку знайти всі .txt\npi@raspberrypi:~/mii-svit$ find . -name \"*.txt\"\n./notes/world-rules.txt\n./backups/rules-old.txt\n\n# Потім шукати слово в одному з них\npi@raspberrypi:~/mii-svit$ grep -n Minecraft notes/world-rules.txt\n2:Світ для друзів. Режим: Minecraft survival.",
    },
    {
      type: "fact",
      title: "Маленький гумор",
      text: "grep не пише нову книгу. Він лише **підсвічує рядки**, де є твоє слово — як флуоресцентний маркер у тій самій книзі на 800 сторінок.",
    },
    {
      type: "image",
      src: "nf14-d",
      alt: "Порядок у хаосі",
      caption: "Швидкий пошук рятує під час інцидентів.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child admin searching urgently but calmly at Pi terminal, bright room, clock on wall suggests quick fix",
    },
    {
      type: "try",
      title: "🔍 Дослідження: детектив на 5 хвилин",
      body: "Стань детективом у своїй навчальній папці.",
      checklist: [
        "Відкрий термінал, перейди в `~/learning` (або створи папку)",
        "`touch clue.txt` і через `nano clue.txt` напиши слово banana",
        "`grep -n banana clue.txt` — що показало?",
        "`find . -name \"clue.txt\"` — де файл?",
        "Поясни другові різницю двох команд своїми словами",
        "Запиши в щоденник: коли обереш find, а коли grep?",
      ],
      footer: "Ти вже обираєш інструмент під загадку.",
    },
    {
      type: "draw",
      text: "Намалюй дерево папок і два ліхтарики: find (на назви) і grep (всередину).",
    },
    {
      type: "diary",
      lines: [
        "Коли обереш find?",
        "Коли обереш grep?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "grep завжди створює нові файли.",
          truth: "Він шукає й показує збіги.",
        },
        {
          title: "Помилка №2",
          myth: "find і grep — одне й те саме.",
          truth: "Імена vs текст усередині.",
        },
        {
          title: "Помилка №3",
          myth: "Пошук адміну не потрібен.",
          truth: "Логи й конфіги шукають постійно.",
        },
      ],
    },
    {
      type: "text",
      text: "Локальний детектив готовий. Далі вийдемо в **мережу** — де Pi зустрічається з іншими комп’ютерами.",
    },
  ],
  remember: [
    "find — файли за ім’ям",
    "grep — текст усередині",
    "Обирай інструмент під загадку",
    "Шукати — базова навичка адміна",
  ],
  commands: [
    {
      cmd: "find . -name \"*.txt\"",
      does: "Шукає txt‑файли від поточної теки",
    },
    {
      cmd: "grep -n слово файл",
      does: "Шукає слово в файлі з номерами рядків",
    },
  ],
  glossary: [
    {
      term: "find",
      def: "Пошук файлів у дереві каталогів.",
    },
    {
      term: "grep",
      def: "Пошук тексту всередині файлів.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "find потрібен, щоб…",
      options: [
        "шукати файли",
        "зарядити Pi",
        "змінити LED",
      ],
      answer: 0,
      hint: "Ліхтарик на імена.",
      explanation: "find обходить дерево папок.",
    },
    {
      type: "tf",
      text: "grep шукає рядки тексту всередині файлів.",
      answer: true,
      hint: "Ліхтарик всередину.",
      explanation: "Так. grep — для вмісту.",
    },
    {
      type: "fill",
      prompt: "Команда пошуку файлів у дереві:",
      answer: "find",
      hint: "4 літери",
      explanation: "find шукає за умовами.",
    },
    {
      type: "whatif",
      prompt: "Пам’ятаєш фразу, не ім’я — що обрати?",
      hint: "Вміст, не наклейка.",
      explanation: "grep шукає текст усередині.",
      sample: "grep",
      optional: true,
    },
    {
      type: "match",
      prompt: "Поєднай:",
      hint: "Два ліхтарики.",
      explanation: "Різні інструменти — різні загадки.",
      pairs: [
        ["find", "файл за ім’ям"],
        ["grep", "рядок у тексті"],
        ["ls", "поточна тека"],
      ],
      optional: true,
    },
  ],
  next: 15,
};
