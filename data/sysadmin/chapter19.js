window.CHAPTER_19 = {
  id: 19,
  bookId: "sysadmin",
  part: 5,
  partTitle: "Minecraft",
  title: "Налаштування",
  icon: "minecraft",
  learn: [
    "Чому світ гри має правила",
    "Як перенести ідеї з world-rules.txt у server.properties",
    "Як обережно змінювати конфіг",
  ],
  content: [
    {
      type: "text",
      text: "Друзі зайшли на твій сервер.",
    },
    {
      type: "text",
      text: "І раптом: хтось у креативі ламає все підряд. Або гравців занадто багато. Або світ не той режим.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Треба кричати в чат!»*",
    },
    {
      type: "text",
      text: "Адмін робить інакше. Він іде в **правила світу** — текстовий файл налаштувань.",
    },
    {
      type: "image",
      src: "nf19-a",
      alt: "Правила світу",
      caption: "Світ слухається правил. Правила — у файлі.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Open book of rules on desk next to blurred Minecraft-style block toys, bright, laws not chaos",
    },
    {
      type: "h2",
      text: "Конституція світу",
    },
    {
      type: "text",
      text: "Уяви країну без законів.",
    },
    {
      type: "text",
      text: "Хтось ламає, хтось кричить, ніхто не знає правил. Хаос.",
    },
    {
      type: "text",
      text: "У Minecraft Server є **конституція** — звичайний текстовий файл із правилами: скільки гравців, який режим, що дозволено.",
    },
    {
      type: "text",
      text: "Його часто називають `server.properties`. Пам’ятаєш nano? Саме ним адмін **править закони** світу.",
    },
    {
      type: "wow",
      title: "✨ Це дивовижно!",
      text: "Пам’ятаєш `~/mii-svit/world-rules.txt`? Ти вже **написав** правила світу словами. Тепер ті самі ідеї стають **рядками** в `server.properties` — і гра їх слухається.",
    },
    {
      type: "diagram",
      title: "Від зошита до законів сервера",
      layout: "flow",
      items: [
        { label: "world-rules.txt", text: "«Макс. гравців: 5. Не ламати чужі будівлі.»" },
        { label: "server.properties", text: "max-players=5 і інші рядки, які розуміє сервер" },
        { label: "Світ у грі", text: "Друзі бачать правила вже в Minecraft" },
      ],
      caption: "Спочатку думка → потім рядок у файлі → потім поведінка світу.",
    },
    {
      type: "think",
      id: "q1",
      question: "Навіщо читати конфіг перед змінами?",
      options: [
        { id: "a", text: "щоб розуміти, що змінюєш" },
        { id: "b", text: "щоб вимкнути сонце" },
        { id: "c", text: "щоб нагріти картку" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: спочатку зрозумій рядок — потім міняй.",
    },
    {
      type: "h2",
      text: "Чотири рядки, які люблять діти",
    },
    {
      type: "text",
      text: "Не треба міняти **все**. Для старту достатньо зрозуміти кілька правил:",
    },
    {
      type: "ul",
      items: [
        "`max-players=5` — скільки друзів може бути одночасно (як у твоєму `world-rules.txt`)",
        "`gamemode=survival` — режим: виживання (`survival`) або креатив (`creative`)",
        "`difficulty=easy` — складність: `peaceful` / `easy` / `normal` / `hard`",
        "`pvp=true` — чи можна битись гравцям між собою (`true` = так, `false` = ні)",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Бонус для назви світу",
      text: "`motd=Мій світ на Pi` — короткий текст, який іноді видно в списку серверів. Можна написати веселу назву.",
    },
    {
      type: "code",
      text: "# Приклад фрагмента (рядки в твоєму файлі можуть трохи відрізнятися)\n# max-players=5\n# gamemode=survival\n# difficulty=easy\n# pvp=true\n# motd=Mii Svit",
    },
    {
      type: "h2",
      text: "Обережне редагування",
    },
    {
      type: "code",
      text: "# Зайти в папку сервера й відкрити конфіг\npi@raspberrypi:~/minecraft-server$ nano server.properties\n\n# Зміни лише те, що розумієш\n# Ctrl+O → Enter → Ctrl+X\n# Після змін сервер зазвичай треба перезапустити",
    },
    {
      type: "ul",
      items: [
        "Міняй по одному параметру",
        "Записуй, що змінив",
        "Не видаляй випадкові рядки «для краси»",
      ],
    },
    {
      type: "image",
      src: "nf19-b",
      alt: "Редагування server.properties",
      caption: "Текст → збереження → перевірка.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. nano editor open on server.properties file, property lines blurred, save workflow, bright monitor",
    },
    {
      type: "fact",
      title: "Рятувальний круг",
      text: "Перед великою зміною зроби копію файла (`cp server.properties server.properties.bak`). Якщо щось піде не так — повернеш старі правила.",
    },
    {
      type: "image",
      src: "nf19-c",
      alt: "Копія конфігу",
      caption: "Копія = страховка.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Two identical file folders one marked backup with copy icon, bright desk, safety net metaphor",
    },
    {
      type: "image",
      src: "nf19-d",
      alt: "Правила для друзів",
      caption: "Хороші правила — спокійна гра.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Two children at laptops smiling, Pi server on shelf, fair play mood, bright living room",
    },
    {
      type: "try",
      title: "🔍 Дослідження правил",
      body: "Якщо файл server.properties уже є:",
      checklist: [
        "`cd ~/minecraft-server`",
        "`ls` — чи видно server.properties?",
        "`cp server.properties server.properties.bak`",
        "`nano server.properties` — знайди max-players, gamemode, difficulty, pvp",
        "Відкрий також `cat ~/mii-svit/world-rules.txt` — порівняй зі своїми правилами",
        "Не зберігай хаотичні зміни — спочатку просто подивись",
        "Вийди (Ctrl+X). Запиши в щоденник: яке правило з зошита перенесеш у конфіг першим",
      ],
      footer: "Дивитись ≠ одразу ламати. Адмін читає перед дією.",
    },
    {
      type: "draw",
      text: "Намалюй стрілку: world-rules.txt → server.properties → світ у грі. Підпиши три правила.",
    },
    {
      type: "diary",
      lines: [
        "Яке правило з world-rules.txt ти перенесеш у server.properties першим?",
        "Навіщо копія конфігу перед змінами?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Можна міняти всі рядки навмання.",
          truth: "Міняй лише зрозуміле. Інакше світ «зламається».",
        },
        {
          title: "Помилка №2",
          myth: "Конфіг не треба зберігати в nano.",
          truth: "Без збереження зміни зникнуть.",
        },
        {
          title: "Помилка №3",
          myth: "Копія файла — зайва справа.",
          truth: "Копія рятує, коли експеримент не вдався.",
        },
      ],
    },
    {
      type: "text",
      text: "Правила готові на папері.",
    },
    {
      type: "text",
      text: "Далі — найхвилюючіше: чи сервер **справді** живий?",
    },
  ],
  remember: [
    "world-rules.txt — ідеї; server.properties — закони для гри",
    "Старт: max-players, gamemode, difficulty, pvp",
    "Читай → міняй обережно → зберігай",
    "Робіть копію перед великими змінами",
    "Після змін зазвичай потрібен перезапуск",
  ],
  commands: [
    { cmd: "nano server.properties", does: "Редагувати налаштування сервера" },
    { cmd: "cp server.properties server.properties.bak", does: "Зробити копію конфігу" },
    { cmd: "cat ~/mii-svit/world-rules.txt", does: "Згадати свої правила зі зошита проєкту" },
  ],
  glossary: [
    { term: "Конфіг", def: "Файл із налаштуваннями програми чи сервера." },
    { term: "server.properties", def: "Типовий файл правил Minecraft Server." },
    { term: "gamemode", def: "Режим гри (наприклад survival або creative)." },
    { term: "pvp", def: "Чи можуть гравці битись один з одним." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Конфіг сервера — це переважно…",
      options: [
        "текстові правила",
        "HDMI‑кабель",
        "колір корпуса",
      ],
      answer: 0,
      hint: "nano знову в справі.",
      explanation: "Багато налаштувань — звичайний текст.",
    },
    {
      type: "tf",
      text: "Перед великою зміною варто зробити копію конфігу.",
      answer: true,
      hint: "Страховка.",
      explanation: "Так. Легше повернутися.",
    },
    {
      type: "fill",
      prompt: "Типовий файл налаштувань Minecraft Server:",
      answer: "server.properties",
      hint: "properties.",
      explanation: "server.properties тримає багато правил.",
    },
    {
      type: "whatif",
      prompt: "Після правок світ «з’їхав з глузду». Що зробити?",
      hint: "bak.",
      explanation: "Копія рятує експеримент.",
      sample: "Повернути копію конфігу й перезапустити.",
      optional: true,
    },
    {
      type: "error",
      prompt: "«Міняй усі рядки одразу — так швидше»",
      hint: "Менше хаосу.",
      explanation: "Малі кроки — менше сюрпризів.",
      sample: "Краще по одному й з розумінням.",
      optional: true,
    },
  ],
  next: 20,
};
