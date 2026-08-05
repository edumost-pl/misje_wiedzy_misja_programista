window.CHAPTER_10 = {
  id: 10,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Редактор nano",
  icon: "code",
  learn: [
    "Що таке консольний редактор і навіщо він адміну",
    "Як відкрити, змінити, зберегти й вийти з nano",
    "Основні гарячі клавіші (^ = Ctrl)",
  ],
  content: [
    {
      type: "text",
      text: "Проєкт «Мій світ», **розділ 5**. Ти створив `world-rules.txt` — але всередині лише назва. Напиши **справжні правила** світу: скільки гравців, що можна ламати, як васатися.",
    },
    {
      type: "text",
      text: "Ти створив файл world-rules.txt — чистий аркуш із назвою.",
    },
    {
      type: "text",
      text: "Але всередині **нічого немає**. Ти хочеш записати: «Макс. 5 гравців» або «Не ламати чужі будівлі».",
    },
    {
      type: "text",
      text: "Стоп. **Як написати текст усередині файлу прямо в терміналі?**",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Чому не звичайна програма з кнопками й мишкою?»*",
    },
    {
      type: "text",
      text: "Бо на серверах часто є лише **чорне вікно терміналу**. Там немає Word і немає мишки. Адмін пише текст **прямо в терміналі** — спеціальним редактором.",
    },
    {
      type: "image",
      src: "nf10-a",
      alt: "Вікно редактора nano",
      caption: "Текст зверху, підказки команд — знизу.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. GNU nano editor layout on monitor, white title bar and bottom shortcut bar visible, center text blurred, bright screen capture style",
    },
    {
      type: "h2",
      text: "Блокнот у чорному вікні",
    },
    {
      type: "text",
      text: "Уяви: ти на сервері в темній кімнаті.",
    },
    {
      type: "text",
      text: "Немає мишки. Немає Word. Лише **чорне вікно** і клавіатура.",
    },
    {
      type: "text",
      text: "Треба записати правила світу — прямо тут, прямо зараз. Для цього Linux дав простий блокнот: **nano**.",
    },
    {
      type: "text",
      text: "Відкрив — і **одразу друкуєш**. Без дивних режимів. Як аркуш, що чекає на твій текст.",
    },
    {
      type: "ul",
      items: [
        "📝 пишеш і змінюєш звичайний текст",
        "⚙️ правиш файли налаштувань (конфіги)",
        "⌨️ керуєш **клавіатурою** (гарячі клавіші)",
      ],
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Багато налаштувань серверів — звичайні текстові файли. Адмін відкриває їх у nano і править рядок за рядком.",
    },
    {
      type: "h2",
      text: "Відкрити світ правил",
    },
    {
      type: "text",
      text: "Пам’ятаєш `world-rules.txt` з проєкту «Мій світ»? Час записати всередину.",
    },
    {
      type: "text",
      text: "У терміналі набираєш **nano** і ім’я файлу — і чорне вікно стає твоїм блокнотом.",
    },
    {
      type: "code",
      text: "# Відкрити (або створити) файл правил\npi@raspberrypi:~/mii-svit$ nano world-rules.txt",
    },
    {
      type: "text",
      text: "Одразу відкриється **вікно редактора**. Розглянь його спокійно — як карту кімнати:",
    },
    {
      type: "nanowindow",
      file: "world-rules.txt",
      body: "Макс. гравців: 5. Не ламати чужі будівлі.",
      modified: true,
      status: "New File",
      caption: "Так виглядає nano: зверху — ім’я файлу, посередині — твій текст, знизу — шпаргалка команд.",
    },
    {
      type: "ul",
      items: [
        "⬆️ **Верхній білий рядок** — назва редактора, ім’я файлу (`world-rules.txt`) і слово **Modified**, якщо є незбережені зміни",
        "⬛ **Чорне поле в центрі** — місце, де ти пишеш текст (тут: правила світу)",
        "⬜ **Миготливий прямокутник** — курсор: саме сюди потрапить наступна літера",
        "📋 **Рядок `[ New File ]`** — підказка стану (наприклад, що файл новий)",
        "⬇️ **Два ряди внизу** — меню команд. Усе керування — з клавіатури",
      ],
    },
    {
      type: "image",
      src: "nf10-nano-window.jpg",
      alt: "Справжній знімок вікна GNU nano з файлом world-rules.txt",
      caption: "Справжній вигляд nano на екрані. Підказки внизу — твій постійний «меню без мишки».",
    },
    {
      type: "text",
      text: "Важливо: у підказках символ **`^`** означає клавішу **Ctrl**. Тобто `^G` = **Ctrl+G** (довідка), `^O` = **Ctrl+O** (зберегти), `^X` = **Ctrl+X** (вийти).",
    },
    {
      type: "think",
      id: "q1",
      question: "У підказках nano символ ^ означає…",
      options: [
        { id: "a", text: "клавішу Ctrl" },
        { id: "b", text: "кнопку живлення" },
        { id: "c", text: "роз’єм HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: **`^` = Ctrl**. Усе керування — з клавіатури.",
    },
    {
      type: "h2",
      text: "Пиши одразу",
    },
    {
      type: "text",
      text: "Щойно nano відкрився — можна друкувати в чорному полі. Курсор показує місце.",
    },
    {
      type: "text",
      text: "Це головна дружність nano: **не треба спеціально вмикати режим редагування**.",
    },
    {
      type: "h2",
      text: "Зберегти: Ctrl+O",
    },
    {
      type: "text",
      text: "Написав нотатку? Щоб **зберегти зміни й лишитися в редакторі**:",
    },
    {
      type: "ul",
      items: [
        "**Ctrl+O** (Write Out) — зберегти",
        "Перевір ім’я файлу внизу",
        "**Enter** — підтвердити",
      ],
    },
    {
      type: "code",
      text: "# Після Ctrl+O і Enter файл записано на диск\n# Ти все ще всередині nano і можеш писати далі",
    },
    {
      type: "h2",
      text: "Вийти: Ctrl+X",
    },
    {
      type: "text",
      text: "Щоб **вийти** з редактора — **Ctrl+X**.",
    },
    {
      type: "text",
      text: "Якщо файл змінювали, nano запитає щось на кшталт *Save modified buffer?* (зберегти зміни?):",
    },
    {
      type: "ul",
      items: [
        "**Y** — так, зберегти (потім Enter для імені файлу)",
        "**N** — ні, вийти без збереження",
        "**Ctrl+C** — скасувати вихід і лишитися в редакторі",
      ],
    },
    {
      type: "code",
      text: "# Після виходу знову з’явиться звичайне запрошення\npi@raspberrypi:~/mii-svit$",
    },
    {
      type: "think",
      id: "q2",
      question: "Щоб зберегти файл у nano й не закривати його, потрібно…",
      options: [
        { id: "a", text: "Ctrl+O, потім Enter" },
        { id: "b", text: "лише вимкнути Pi" },
        { id: "c", text: "натиснути HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "**Ctrl+O** зберігає. **Ctrl+X** виходить (і може ще раз запитати про збереження).",
    },
    {
      type: "h2",
      text: "Перевір — не вір «на око»",
    },
    {
      type: "text",
      text: "Адмін не вірить «на око». Після nano знову глянь файл:",
    },
    {
      type: "code",
      text: "# Перевірити, що текст справді на диску\npi@raspberrypi:~/mii-svit$ cat world-rules.txt\n\n# Приклад відповіді\nМакс. гравців: 5. Не ламати чужі будівлі. Васатися: MiiSvit2026",
    },
    {
      type: "image",
      src: "nf10-c",
      alt: "Перевірка після nano",
      caption: "Відкрив → змінив → зберіг → перевірив.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal showing cat world-rules.txt after editing, two commands workflow implied, blurred text, bright desk",
    },
    {
      type: "h2",
      text: "Шпаргалка гарячих клавіш",
    },
    {
      type: "ul",
      items: [
        "**Ctrl+O** — зберегти (залишитись у nano)",
        "**Ctrl+X** — вийти",
        "**Ctrl+W** — пошук слова у файлі",
        "**Ctrl+K** — вирізати рядок",
        "**Ctrl+U** — вставити рядок",
        "**Ctrl+G** — довідка всередині nano",
      ],
    },
    {
      type: "fact",
      title: "Не єдиний редактор",
      text: "Є й інші (складніші) редактори. Nano — найдобріший старт. Коли освоїш ритуал збереження й виходу — з конфігами серверів уже не страшно.",
    },
    {
      type: "image",
      src: "nf10-d",
      alt: "Практика nano",
      caption: "Гарячі клавіші — твої кнопки без мишки.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Close-up of keyboard with Ctrl key and letter keys sharp, finger pressing Ctrl, bright keyboard, learning shortcuts",
    },
    {
      type: "try",
      title: "🔍 Дослідження: правила світу в nano",
      body: "П’ятий крок проєкту «Мій світ»: записати правила, якими керуватиметься твій майбутній сервер.",
      checklist: [
        "Відкрий термінал",
        "`cd ~/mii-svit` (або створи: `mkdir -p ~/mii-svit`)",
        "`nano world-rules.txt`",
        "Напиши 2–3 правила для світу (гравці, що можна/не можна)",
        "Ctrl+O → Enter (зберегти)",
        "Додай ще один рядок",
        "Ctrl+X → Y → Enter (зберегти й вийти)",
        "`cat world-rules.txt` — текст на місці?",
        "Бонус: знову `nano world-rules.txt`, Ctrl+W — знайди своє слово",
        "Запиши в щоденник: яка клавіша зберігає, а яка виходить?",
      ],
      footer: "Якщо cat показав твій текст — ти вже пишеш у терміналі.",
    },
    {
      type: "draw",
      text: "Намалюй екран nano: поле тексту зверху й рядок підказок ^O ^X ^W знизу. Підпиши: ^ = Ctrl.",
    },
    {
      type: "diary",
      lines: [
        "Яка клавіша зберігає, а яка виходить?",
        "Чому адміну важливо вміти редагувати текст у терміналі?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "nano завжди зберігає все сам, коли закриваєш вікно.",
          truth: "Потрібен Ctrl+O або відповідь Y при Ctrl+X.",
        },
        {
          title: "Помилка №2",
          myth: "^G означає клавішу з літерою G без Ctrl.",
          truth: "^ = Ctrl. Тобто ^G — це Ctrl+G.",
        },
        {
          title: "Помилка №3",
          myth: "Конфіги серверів не можна чіпати текстом.",
          truth: "Навпаки: багато налаштувань — звичайні текстові файли.",
        },
      ],
    },
    {
      type: "text",
      text: "Частина «Мій світ» готова: папка `mii-svit`, файли, правила в nano. Далі — хто ти в системі й як Pi захищає чужі двері від випадкового ламання.",
    },
  ],
  remember: [
    "nano — простий редактор у терміналі",
    "^ у підказках = клавіша Ctrl",
    "Ctrl+O — зберегти",
    "Ctrl+X — вийти (Y/N якщо були зміни)",
    "Ctrl+W — пошук; Ctrl+K / Ctrl+U — рядок",
    "Після правок перевір через cat",
  ],
  commands: [
    { cmd: "nano файл", does: "Відкрити або створити файл у редакторі" },
    { cmd: "nano -v файл", does: "Відкрити лише для читання" },
    { cmd: "cat файл", does: "Перевірити збережений текст" },
  ],
  glossary: [
    {
      term: "nano",
      def: "Простий консольний текстовий редактор у Linux.",
    },
    {
      term: "Консольний редактор",
      def: "Редактор тексту, яким керують у терміналі з клавіатури.",
    },
    {
      term: "Конфіг",
      def: "Текстовий файл налаштувань програми чи сервера.",
    },
    {
      term: "^ (каретка)",
      def: "У підказках nano означає клавішу Ctrl.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "nano — це…",
      options: [
        "текстовий редактор у терміналі",
        "тип зарядки",
        "гра",
      ],
      answer: 0,
      hint: "Ним правлять текст і конфіги.",
      explanation: "Зручний консольний редактор для початківців.",
    },
    {
      type: "tf",
      text: "У підказках nano символ ^ означає Ctrl.",
      answer: true,
      hint: "^G = ?",
      explanation: "Так. ^G — це Ctrl+G.",
    },
    {
      type: "fill",
      prompt: "Відкрити world-rules.txt у nano:",
      answer: "nano world-rules.txt",
      hint: "редактор + ім’я файлу",
      explanation: "Відкриває існуючий або створює новий файл.",
    },
    {
      type: "whatif",
      prompt: "Натиснув Ctrl+X, а зміни потрібні. Що натиснути?",
      hint: "Save modified buffer?",
      explanation: "Y = зберегти, N = вийти без збереження.",
      sample: "Y, потім Enter для імені файлу.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Знайди помилку: «nano завжди зберігає сам при виході».",
      hint: "Без збереження правки можуть зникнути.",
      explanation: "Збереження — свідома дія адміна.",
      sample: "Потрібен Ctrl+O або підтвердження Y.",
      optional: true,
    },
  ],
  next: 11,
};
