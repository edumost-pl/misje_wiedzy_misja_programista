window.CHAPTER_15 = {
  id: 15,
  bookId: "sysadmin",
  part: 4,
  partTitle: "Мережі",
  title: "Інтернет",
  icon: "server",
  learn: [
    "Як перевірити, чи Pi «бачить» мережу",
    "Що таке адреса пристрою в мережі — простими словами",
    "Як перевірити зв’язок (ping) і зупинити його",
  ],
  content: [
    {
      type: "text",
      text: "Ти відкриваєш відео на Pi.",
    },
    {
      type: "text",
      text: "Крутиться колесо. Крутиться. Крутиться.",
    },
    {
      type: "text",
      text: "Стоп. **Інтернет зламався?** Чи просто **наш Pi** не може дістатися до нього?",
    },
    {
      type: "fact",
      title: "Разом із дорослим",
      text: "Перевірка мережі — гарний момент **попросити дорослого**: роутер, Wi‑Fi, кабель. Ти вчишся діагностувати; дорослий допомагає там, де потрібен доступ до «дорослих» налаштувань.",
    },
    {
      type: "text",
      text: "Це не одне й те саме.",
    },
    {
      type: "text",
      text: "Можливо, Wi‑Fi «підключений», але шлях далі обірваний. Можливо, адреса зникла. Можливо, все добре — просто сайт повільний.",
    },
    {
      type: "text",
      text: "Хороший адмін не кричить «все зламалось!». Він **перевіряє крок за кроком**.",
    },
    {
      type: "image",
      src: "nf15-a",
      alt: "Відео не завантажується",
      caption: "Крутиться колесо — але де саме застрягло?",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Monitor with loading spinner blurred, Ethernet cable to Pi, troubleshooting network, bright not frustrating dark room",
    },
    {
      type: "h2",
      text: "Адреса дому в мережі",
    },
    {
      type: "text",
      text: "Уяви великий будинок із багатьма квартирами.",
    },
    {
      type: "text",
      text: "Щоб доставити лист, потрібна **адреса**: будинок, під’їзд, квартира.",
    },
    {
      type: "text",
      text: "У мережі те саме. Кожен пристрій має **адресу** — числа, за якими інші знаходять його в домашній мережі.",
    },
    {
      type: "text",
      text: "Уяви: ти замовив піцу. Кур’єр стоїть під будинком і кричить: «**Який у вас номер квартири?**»",
    },
    {
      type: "text",
      text: "Без номера — навіть найсмачніша піца **ніколи не знайде** тебе.",
    },
    {
      type: "text",
      text: "У мережі номер квартири — це **адреса** Pi. Дізнатися її допомагає **ip a** — «паспорт» мережевих з’єднань.",
    },
    {
      type: "code",
      text: "# Подивитися мережеві інтерфейси та адреси\npi@raspberrypi:~$ ip a\n\n# Шукай рядок inet — це адреса в мережі\n# (у тебе будуть інші числа)\n#     inet 192.168.1.42/24 ...",
    },
    {
      type: "text",
      text: "Не треба розуміти кожен рядок одразу.",
    },
    {
      type: "text",
      text: "Головне відкриття: **чи є адреса взагалі?** Якщо ні — спочатку вирішуй це, а не лайся на «весь інтернет».",
    },
    {
      type: "think",
      id: "q1",
      question: "Перед тим як «кричати в інтернет», адмін спочатку перевіряє…",
      options: [
        { id: "a", text: "чи є у Pi адреса в мережі" },
        { id: "b", text: "колір корпуса плати" },
        { id: "c", text: "довжину HDMI‑кабеля" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: спочатку «паспорт» — чи Pi взагалі в мережі.",
    },
    {
      type: "image",
      src: "nf15-b",
      alt: "Адреса в мережі",
      caption: "Без адреси лист не знайде квартиру.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic apartment building facade with door numbers, one door highlighted, mail envelope, bright street photography style",
    },
    {
      type: "h2",
      text: "«Ау!» у мережу",
    },
    {
      type: "text",
      text: "Адреса є. Добре.",
    },
    {
      type: "text",
      text: "Але чи **дорога далі відкрита**?",
    },
    {
      type: "text",
      text: "Уяви, що ти стоїш у дворі й кричиш «**Ау!**» у гори. Якщо чуєш луну — зв’язок є. Якщо тиша — щось між тобою й горами.",
    },
    {
      type: "text",
      text: "Є команда, яка надсилає маленькі «ау!» і чекає, чи повернеться **луна**.",
    },
    {
      type: "text",
      text: "Її звати **ping**.",
    },
    {
      type: "code",
      text: "# Надіслати 4 тестові пакети й почекати відповіді\npi@raspberrypi:~$ ping -c 4 8.8.8.8\n\n# Якщо бачиш time=... — луна прийшла\n# Якщо ping без -c — зупини Ctrl+C",
    },
    {
      type: "text",
      text: "Ключ **`-c 4`** означає «лише 4 спроби». Без обмеження команда може йти довго — тоді зупини **Ctrl+C**.",
    },
    {
      type: "think",
      id: "q2",
      question: "Команда «ау в мережу» перевіряє…",
      options: [
        { id: "a", text: "чи є відповідь від вузла в мережі" },
        { id: "b", text: "температуру microSD" },
        { id: "c", text: "яскравість екрана" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Так: досяжність і затримка відповіді — як луна з гор.",
    },
    {
      type: "image",
      src: "nf15-c",
      alt: "Перевірка зв’язку",
      caption: "Луна з мережі — або тиша.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Child shouting across bright mountain valley, echo wave visualized lightly, playful network metaphor",
    },
    {
      type: "h2",
      text: "Wi‑Fi ≠ інтернет",
    },
    {
      type: "text",
      text: "Можна бути в домашній мережі без виходу «назовні».",
    },
    {
      type: "text",
      text: "Можна мати Wi‑Fi іконку, але адреса зникла.",
    },
    {
      type: "text",
      text: "Тому адмін не вірить одній іконці. Він перевіряє: **адреса → луна → далі**.",
    },
    {
      type: "fact",
      title: "Не завжди «ау» = правда",
      text: "Деякі сервери не відповідають на тестові пакети. Відсутність відповіді не завжди означає «інтернету немає». Але це все одно корисна підказка.",
    },
    {
      type: "ul",
      items: [
        "**Що це?** Адреса — «квартира» пристрою в мережі",
        "**Навіщо?** Щоб знати, чи Pi взагалі «в домі»",
        "**Як перевірити далі?** Надіслати «ау» і почекати луну",
        "**Як у житті?** Спочатку перевір, чи працює розетка, потім — чи горить лампочка",
      ],
    },
    {
      type: "image",
      src: "nf15-d",
      alt: "Діагностика мережі",
      caption: "Спочатку локально, потім далі.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal showing ip a and ping commands, network lines blurred, Pi with Ethernet connected, bright",
    },
    {
      type: "try",
      title: "🔍 Дослідження: де застрягло відео?",
      body: "Це не «просто введи команду». Це розслідування.",
      checklist: [
        "Відкрий термінал",
        "Введи `ip a` — чи є адреса (рядок inet)?",
        "Запиши в щоденник: адреса є чи ні",
        "Введи `ping -c 4 8.8.8.8`",
        "Була відповідь (time=...) чи тиша?",
        "Якщо ping без -c — зупини Ctrl+C",
        "Запиши висновок: проблема в Pi, в домашній мережі чи далі?",
      ],
      footer: "Ти вже діагностуєш мережу як справжній адмін.",
    },
    {
      type: "draw",
      text: "Намалюй: Pi → роутер → інтернет. Підпиши, де перевіряєш «адресу», а де — «луна».",
    },
    {
      type: "diary",
      lines: [
        "Яку адресу ти побачив (або «немає»)?",
        "Що показала перевірка «ау в мережу»?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Немає відповіді на «ау» — інтернету ніколи не існувало.",
          truth: "Іноді відповіді блокують; перевір інші ознаки.",
        },
        {
          title: "Помилка №2",
          myth: "Достатньо лише Wi‑Fi іконки.",
          truth: "Іконка ≠ перевірена адреса й шлях.",
        },
        {
          title: "Помилка №3",
          myth: "Команду «ау» можна лишати назавжди без зупинки.",
          truth: "Краще -c N або Ctrl+C.",
        },
      ],
    },
    {
      type: "text",
      text: "Тепер ти вмієш перевірити: **чи Pi в мережі** і **чи дорога далі відкрита**.",
    },
    {
      type: "text",
      text: "Але що, якщо Pi лежить у **іншій кімнаті** — без монітора?",
    },
    {
      type: "text",
      text: "Як тоді з ним розмовляти? Дізнаєшся в наступному розділі.",
    },
  ],
  remember: [
    "Спочатку адреса — потім «ау в мережу»",
    "ip a — мій «паспорт» у мережі",
    "ping — перевірка луни",
    "Ctrl+C зупиняє",
    "Wi‑Fi ≠ завжди інтернет",
  ],
  commands: [
    { cmd: "ip a", does: "Показує інтерфейси та адреси" },
    { cmd: "ping -c 4 адреса", does: "Перевіряє відповідь мережі" },
    { cmd: "Ctrl+C", does: "Зупиняє поточну команду" },
  ],
  glossary: [
    {
      term: "IP‑адреса",
      def: "Адреса пристрою в мережі — як номер квартири.",
    },
    {
      term: "ping",
      def: "Перевірка, чи відповідає вузол — як «ау!» у гори.",
    },
    {
      term: "Роутер",
      def: "Пристрій‑міст між домом і великим інтернетом.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "ping перевіряє…",
      options: [
        "відповідь вузла в мережі",
        "температуру SD",
        "яскравість",
      ],
      answer: 0,
      hint: "Ау в мережу",
      explanation: "Тестові пакети й луна.",
    },
    {
      type: "tf",
      text: "ip a допомагає побачити мережеві адреси.",
      answer: true,
      hint: "ip address",
      explanation: "Так.",
    },
    {
      type: "fill",
      prompt: "Коротка назва адреси в мережі:",
      answer: "IP",
      hint: "Дві літери",
      explanation: "Internet Protocol.",
    },
    {
      type: "whatif",
      prompt: "Сайт не відкривається. З чого почати?",
      hint: "Спочатку локально",
      explanation: "Діагностика знизу вгору.",
      sample: "ip a, потім ping шлюзу/8.8.8.8",
      optional: true,
    },
    {
      type: "error",
      prompt: "«Немає ping = немає інтернету назавжди»",
      hint: "Не один тест",
      explanation: "Перевіряй ширше.",
      sample: "Ping можуть блокувати.",
      optional: true,
    },
  ],
  next: 16,
};
