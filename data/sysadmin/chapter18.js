window.CHAPTER_18 = {
  id: 18,
  bookId: "sysadmin",
  part: 5,
  partTitle: "Minecraft",
  title: "Встановлення сервера",
  icon: "minecraft",
  learn: [
    "Чому спочатку перевіряють Java",
    "Як тримати сервер у зрозумілій папці й звідки береться server.jar",
    "Навіщо потрібна згода EULA",
  ],
  content: [
    {
      type: "text",
      text: "Ти хочеш **свій** Minecraft‑сервер.",
    },
    {
      type: "text",
      text: "Світ для друзів. Свої правила. Твоя «кухня» на полиці.",
    },
    {
      type: "text",
      text: "Пам’ятаєш проєкт **«Мій світ»**? Папка `mii-svit` і файл `world-rules.txt` уже чекають. Тепер туди прийде **справжній** сервер.",
    },
    {
      type: "text",
      text: "Ти вже уявляєш, як усі заходять і будують разом.",
    },
    {
      type: "text",
      text: "Стоп. А **кухня** вже готова?",
    },
    {
      type: "text",
      text: "Невже можна просто «двічі клікнути» — і світ з’явиться?",
    },
    {
      type: "text",
      text: "Адмін так не робить. Спочатку перевіряє: **чи є потрібні інструменти**, **де лежать файли**, **чи погодився з правилами**.",
    },
    {
      type: "image",
      src: "nf18-a",
      alt: "Підготовка до сервера",
      caption: "Спочатку кухня — потім торт.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Bright kitchen stove off then oven ready, ingredients laid out, metaphor for Java before Minecraft server",
    },
    {
      type: "h2",
      text: "Чи є «плита»?",
    },
    {
      type: "text",
      text: "Уяви, що хочеш пекти торт.",
    },
    {
      type: "text",
      text: "Спробуєш пекти торт на **холодній** плиті?",
    },
    {
      type: "text",
      text: "Тісто лишиться сирим. Minecraft Server теж не «запечеться» без своєї гарячої плити.",
    },
    {
      type: "text",
      text: "У світі Linux вона називається **Java**. Перевірити її — як торкнутися плити рукою: `java -version`.",
    },
    {
      type: "code",
      text: "# Перевірити, чи є Java і яка версія\npi@raspberrypi:~$ java -version\n\n# Якщо команда не знайдена — спочатку встанови Java (з дорослим)\n# Потім перевір знову",
    },
    {
      type: "text",
      text: "Якщо бачиш номер версії — «плита» є. Якщо «command not found» — спочатку встанови Java разом із дорослим.",
    },
    {
      type: "think",
      id: "q1",
      question: "Перед встановленням сервера часто перевіряють…",
      options: [
        { id: "a", text: "java -version" },
        { id: "b", text: "колір стікера на Pi" },
        { id: "c", text: "лише гучність колонок" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: наявність і версію Java — «плити» для сервера.",
    },
    {
      type: "image",
      src: "nf18-b",
      alt: "Перевірка Java",
      caption: "Кухня готова, якщо є потрібний інструмент.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal java -version output blurred, success checkmark sticky note on monitor frame, bright",
    },
    {
      type: "h2",
      text: "Де лежить «рецепт»?",
    },
    {
      type: "text",
      text: "Уяви кухню, де все розкидано по шкафах без підписів.",
    },
    {
      type: "text",
      text: "Через місяць ти не знайдеш ні борошна, ні форми.",
    },
    {
      type: "text",
      text: "Сервер теж потребує **зрозумілого місця** — одну папку, куди повертатимешся знову і знову.",
    },
    {
      type: "code",
      text: "# Створити папку для сервера\npi@raspberrypi:~$ mkdir ~/minecraft-server\n\n# Зайти в неї\npi@raspberrypi:~$ cd ~/minecraft-server\n\n# Перевірити, де ти\npi@raspberrypi:~/minecraft-server$ pwd",
    },
    {
      type: "text",
      text: "Запам’ятай шлях. Адмін повертається сюди часто — налаштовувати, запускати, читати логи.",
    },
    {
      type: "h2",
      text: "Звідки береться server.jar?",
    },
    {
      type: "text",
      text: "Папка є. А **сам сервер** — це файл на кшталт `server.jar` (програма світу).",
    },
    {
      type: "text",
      text: "Його не «витягують із повітря». Разом із дорослим:",
    },
    {
      type: "ul",
      items: [
        "1. Знайдіть **офіційне** джерело для Minecraft Server (сайт Mojang / Minecraft) — не випадкове посилання з чату",
        "2. Завантажте файл сервера потрібної **версії** (такої ж, як у грі в друзів)",
        "3. Покладіть його в `~/minecraft-server` і перевірте: `ls` — чи видно `server.jar` (або ім’я з вашої інструкції)",
      ],
    },
    {
      type: "text",
      text: "Перший запуск часто **створює** файли світу й `eula.txt`. Це нормально: кухня розкладає посуд сама.",
    },
    {
      type: "fact",
      title: "Важливо знати",
      text: "Minecraft і Minecraft Server — продукти Mojang Studios (Microsoft). У цій книзі ми вчимо **як працює сервер на Pi**, а не замінюємо офіційні правила. Завжди читай EULA і встановлюй файли **лише з дорослим** з офіційного джерела.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Версія = версія",
      text: "Якщо в друга Minecraft 1.21, а сервер іншої версії — часто «не заходить». Спочатку домовтесь про **однакову** версію.",
    },
    {
      type: "h2",
      text: "Правила гри — EULA",
    },
    {
      type: "text",
      text: "Перед стартом сервер просить **прийняти правила ліцензії** — EULA.",
    },
    {
      type: "text",
      text: "Це як підписати «я погоджуюсь грати за правилами».",
    },
    {
      type: "text",
      text: "Зазвичай у файлі `eula.txt` треба змінити прапорець на згоду — **лише якщо ти (з дорослим) справді погоджуєшся**.",
    },
    {
      type: "text",
      text: "Без цього сервер може відмовитися стартувати.",
    },
    {
      type: "think",
      id: "q2",
      question: "Навіщо читати EULA?",
      options: [
        { id: "a", text: "бо без згоди сервер може не запуститися коректно" },
        { id: "b", text: "бо так гріється Ethernet" },
        { id: "c", text: "бо вимагає HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Без прийняття EULA запуск часто зупиняється. Це не прикраса — це умова.",
    },
    {
      type: "image",
      src: "nf18-c",
      alt: "Файли сервера",
      caption: "Порядок папки зменшує хаос.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Desk folder organizer with dedicated minecraft-server directory label blurred, Pi and monitor, tidy bright setup",
    },
    {
      type: "fact",
      title: "Чеклист адміна",
      text: "Java → папка → `server.jar` → EULA → лише потім запуск. Пропуск кроку = падіння на старті.",
    },
    {
      type: "ul",
      items: [
        "**Що це?** Java — «плита» для Minecraft Server",
        "**Де?** Окрема зрозуміла папка + файл `server.jar`",
        "**Навіщо EULA?** Офіційна згода з правилами",
        "**Як у житті?** Спочатку кухня, потім торт",
      ],
    },
    {
      type: "image",
      src: "nf18-d",
      alt: "Готовність до налаштувань",
      caption: "Встановлення — фундамент.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Download folder with jar file icon blurred, child and adult hands pointing together, supervised install, bright",
    },
    {
      type: "try",
      title: "🔍 Дослідження: чи готова кухня?",
      body: "Це підготовка фундаменту — без «просто запуск».",
      checklist: [
        "Введи `java -version` — запиши результат",
        "Якщо команди немає — разом із дорослим встанови Java",
        "Створи `mkdir ~/minecraft-server` і зайди `cd` туди",
        "Перевір `pwd` — шлях зрозумілий?",
        "Разом із дорослим завантажте `server.jar` з офіційного джерела в цю папку",
        "`ls` — чи видно файл сервера?",
        "Разом із дорослим підготуйте EULA (після першого запуску або за інструкцією)",
        "Запиши в щоденник: що готово, що ще треба, **яка версія** гри",
      ],
      footer: "Без фундаменту «просто запуск» часто падає.",
    },
    {
      type: "draw",
      text: "Намалюй чеклист: Java → папка → server.jar → EULA.",
    },
    {
      type: "diary",
      lines: [
        "Що показав java -version?",
        "Який шлях до папки сервера? Чи є вже server.jar?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Можна ігнорувати вимоги й клікати навмання.",
          truth: "Спочатку залежності й структура.",
        },
        {
          title: "Помилка №2",
          myth: "Папка може називатись як завгодно й губитись.",
          truth: "Тримай зрозумілий шлях.",
        },
        {
          title: "Помилка №3",
          myth: "EULA нікому не потрібна.",
          truth: "Без згоди сервер може не стартувати.",
        },
      ],
    },
    {
      type: "text",
      text: "Кухня готова. «Плита» є. Місце для рецепта знайдено. Правила підписано.",
    },
    {
      type: "text",
      text: "Але **як** має виглядати світ? Скільки гравців? Який режим?",
    },
    {
      type: "text",
      text: "Далі — **налаштування правил** у текстових конфігах.",
    },
  ],
  remember: [
    "Спочатку java -version",
    "Зрозуміла папка + server.jar з офіційного джерела",
    "Версія гри = версія сервера",
    "EULA потрібна",
    "Порядок > хаос",
  ],
  commands: [
    { cmd: "java -version", does: "Перевіряє наявність Java" },
    { cmd: "mkdir ~/minecraft-server", does: "Створює папку проєкту" },
    { cmd: "ls ~/minecraft-server", does: "Перевіряє, чи на місці файли сервера" },
  ],
  glossary: [
    {
      term: "Java",
      def: "Середовище, потрібне багатьом Minecraft Server.",
    },
    {
      term: "server.jar",
      def: "Файл програми сервера Minecraft (кладуть у папку проєкту).",
    },
    {
      term: "EULA",
      def: "Ліцензійна згода, без якої сервер може не стартувати.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Перед встановленням часто перевіряють…",
      options: [
        "java -version",
        "колір стікера",
        "гучність",
      ],
      answer: 0,
      hint: "Середовище",
      explanation: "Minecraft Server на Java.",
    },
    {
      type: "tf",
      text: "Встановлення — лише подвійний клік без вимог.",
      answer: false,
      hint: "Залежності",
      explanation: "Потрібні Java, місце, структура.",
    },
    {
      type: "fill",
      prompt: "Команда перевірки Java:",
      answer: "java -version",
      hint: "java і version",
      explanation: "Показує версію.",
    },
    {
      type: "whatif",
      prompt: "java -version каже, що команди немає?",
      hint: "Спочатку залежність",
      explanation: "Без Java сервер не стартує.",
      sample: "Встановити Java й перевірити знову.",
      optional: true,
    },
    {
      type: "error",
      prompt: "«Можна кинути файли в випадкову папку й забути»",
      hint: "Адмін повертається",
      explanation: "Шлях економить години.",
      sample: "Тримай зрозумілий шлях.",
      optional: true,
    },
  ],
  next: 19,
};
