window.CHAPTER_05 = {
  id: 5,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Raspberry Pi OS",
  icon: "pi",
  learn: [
    "Чим Raspberry Pi OS відрізняється від «просто Linux»",
    "Навіщо потрібен робочий стіл",
    "Де шукати меню, налаштування й програми",
  ],
  content: [
    {
      type: "text",
      text: "Ти переїхав у нове місто.",
    },
    {
      type: "text",
      text: "На карті — багато вулиць.",
    },
    {
      type: "text",
      text: "Але одне місто зручніше для життя, інше — для заводу.",
    },
    {
      type: "text",
      text: "У великій **родині Linux** теж є різні «міста». Кожне зібране для своїх цілей.",
    },
    {
      type: "text",
      text: "На твоїй платі живе одне з них — **Raspberry Pi OS**.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Якщо це Linux, чому окрема назва?»*",
    },
    {
      type: "image",
      src: "nf05-a",
      alt: "Робочий стіл Raspberry Pi OS.",
      caption: "Ось знайоме «обличчя» системи на екрані.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Full monitor showing Raspberry Pi OS desktop wallpaper and menu bar, UI softly blurred, bright monitor in sunlit room, welcoming first look",
    },
    {
      type: "h2",
      text: "Готовий дім, а не голі стіни",
    },
    {
      type: "text",
      text: "Уяви два будинки.",
    },
    {
      type: "text",
      text: "В одному — лише стіни й дах. У другому — меблі, світло, кухня, двері з підписами.",
    },
    {
      type: "text",
      text: "«Голе» ядро Linux — ще не зручний дім. **Збірка** додає стіни, двері й меблі: робочий стіл, програми, налаштування Wi‑Fi, мову…",
    },
    {
      type: "text",
      text: "**Raspberry Pi OS** — дім, зібраний саме для Raspberry Pi: драйвери, меню, програми, налаштування.",
    },
    {
      type: "text",
      text: "Це не «інший всесвіт». Це **збірка Linux**, зручно зібрана для твоєї плати.",
    },
    {
      type: "think",
      id: "q1",
      question: "Raspberry Pi OS — це…",
      options: [
        { id: "a", text: "операційна система (збірка Linux) для Raspberry Pi" },
        { id: "b", text: "назва зарядного кабелю" },
        { id: "c", text: "тип HDMI‑роз’єму" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: це **ОС для Raspberry Pi**, побудована на Linux. Не кабель і не роз’єм.",
    },
    {
      type: "h2",
      text: "Стіл — карта міста",
    },
    {
      type: "text",
      text: "Уяви телефон.",
    },
    {
      type: "text",
      text: "На екрані — іконки. Натиснув — відкрилась програма.",
    },
    {
      type: "text",
      text: "Уяви, що ти **вперше** в великому місті.",
    },
    {
      type: "text",
      text: "Без карти — лише хаос вулиць. А потім хтось дає тобі **план з кнопками**: «Ось браузер. Ось файли. Ось налаштування».",
    },
    {
      type: "text",
      text: "Такий план на екрані Pi називають **робочим столом** — керування системою **очима**, без терміналу.",
    },
    {
      type: "image",
      src: "nf05-b",
      alt: "Меню й іконки на робочому столі.",
      caption: "Меню — карта програм. Знайди його куток на екрані.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Close-up of Raspberry Pi OS application menu open, icons blurred, cursor hovering, menu corner highlighted by natural light on screen",
    },
    {
      type: "think",
      id: "q2",
      question: "Робочий стіл потрібен…",
      options: [
        { id: "a", text: "лише щоб малювати шпалери" },
        { id: "b", text: "щоб зручно відкривати програми й налаштування" },
        { id: "c", text: "щоб замінити зарядний кабель" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Стіл — зручний спосіб **керувати системою очима**. Шпалери — приємність, не головне.",
    },
    {
      type: "h2",
      text: "Що варто знайти на столі",
    },
    {
      type: "ul",
      items: [
        "📋 меню програм",
        "⚙️ налаштування (звук, екран, мережа)",
        "🌐 браузер",
        "📁 файловий менеджер (папки очима)",
      ],
    },
    {
      type: "image",
      src: "nf05-c",
      alt: "Робочий стіл із відкритими вікнами.",
      caption: "Стіл показує систему так, ніби карта міста.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic 3D miniature city map on desk next to real monitor, buttons on map correspond to app icons concept, bright tabletop, playful but sharp",
    },
    {
      type: "h2",
      text: "Оновлення — турбота, не покарання",
    },
    {
      type: "text",
      text: "Уяви велосипед.",
    },
    {
      type: "text",
      text: "Іноді треба підкачати колеса й підтягнути гайки.",
    },
    {
      type: "text",
      text: "Іноді система пропонує **оновлення**. Це не «щоб набриднути».",
    },
    {
      type: "text",
      text: "Оновлення приносять виправлення помилок, покращення безпеки й нові можливості. Адмін ставиться до них як до догляду за інструментом.",
    },
    {
      type: "fact",
      title: "Чи знаєш ти?",
      text: "Raspberry Pi OS зібрана так, щоб навчання було приємним: багато інструментів уже «в коробці».",
    },
    {
      type: "image",
      src: "nf05-d",
      alt: "Дитина досліджує меню Raspberry Pi OS.",
      caption: "Досліджуй меню спокійно — це твоя карта.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child exploring Raspberry Pi desktop with mouse, calm focused expression, bright home learning corner, monitor and Pi visible",
    },
    {
      type: "h2",
      text: "Коротко про головне",
    },
    {
      type: "ul",
      items: [
        "**Що це?** Raspberry Pi OS — Linux‑збірка для плати Pi.",
        "**Навіщо?** Щоб одразу мати зручний стіл і інструменти.",
        "**Що вміти зараз?** Знайти меню, програми й налаштування.",
      ],
    },
    {
      type: "try",
      title: "🔍 Дослідження: знайди на столі",
      body: "На Raspberry Pi OS спробуй знайти очима:",
      checklist: [
        "Меню програм — де воно?",
        "Налаштування (звук, екран, мережа)",
        "Браузер",
        "Вікно з папками (файловий менеджер)",
        "Що здалося найзручнішим? Запиши одне слово",
      ],
      footer: "Стіл уже твій друг. Але є ще один спосіб розмовляти з системою…",
    },
    {
      type: "draw",
      text: "Намалюй екран столу: меню, кілька іконок і одне вікно програми.",
    },
    {
      type: "diary",
      lines: [
        "Що на робочому столі здалося найзручнішим?",
        "Чим стіл схожий на телефон, а чим — ні?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Pi OS і Linux — абсолютно різні речі без зв’язку.",
          truth:
            "Raspberry Pi OS побудована на Linux. Linux — основа, Pi OS — зручна збірка для плати.",
        },
        {
          title: "Помилка №2",
          myth: "Робочий стіл — лише для малювання шпалер.",
          truth:
            "Стіл — спосіб відкривати програми й налаштування. Це справжнє керування системою очима.",
        },
        {
          title: "Помилка №3",
          myth: "Оновлення завжди лише все ламають.",
          truth:
            "Оновлення часто захищають і покращують систему. Роби їх усвідомлено.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти вмієш керувати Pi очима — через стіл.",
    },
    {
      type: "text",
      text: "А на телефоні лягає повідомлення від друга: «Ну що, **твій** Minecraft‑світ коли буде? Я чекаю!»",
    },
    {
      type: "text",
      text: "Щоб відповісти не «не знаю», а «скоро» — треба навчитися розмовляти з Pi **словами**. Так почнеться проєкт **«Мій світ»**.",
    },
    {
      type: "text",
      text: "Наступний розділ — перша фраза в терміналі.",
    },
  ],
  remember: [
    "Pi OS — Linux‑збірка для Raspberry Pi",
    "Стіл — керування очима",
    "Меню й налаштування — твоя карта",
    "Оновлення — турбота про систему",
  ],
  commands: [],
  glossary: [
    {
      term: "Raspberry Pi OS",
      def: "Операційна система (збірка Linux) для Raspberry Pi.",
    },
    {
      term: "Робочий стіл",
      def: "Графічний екран із меню й іконками для керування програмами.",
    },
    {
      term: "Збірка (дистрибутив)",
      def: "Готовий «комплект» Linux: ядро + програми + налаштування.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Raspberry Pi OS — це…",
      options: [
        "операційна система для Raspberry Pi",
        "назва зарядки",
        "тип HDMI‑кабелю",
      ],
      answer: 0,
      hint: "OS = operating system.",
      explanation: "Це ОС, підготовлена для плат Raspberry Pi.",
    },
    {
      type: "tf",
      text: "Робочий стіл потрібен лише для малювання шпалер.",
      answer: false,
      hint: "Що ще є на столі?",
      explanation: "Стіл — спосіб відкривати програми й налаштування.",
    },
    {
      type: "error",
      prompt: "«Pi OS і Linux — без жодного зв’язку»",
      hint: "Яке ядро?",
      explanation: "Pi OS — дистрибутив Linux для плати.",
      sample: "Pi OS побудована на Linux.",
    },
    {
      type: "explain",
      prompt: "Чим зручний робочий стіл для новачка?",
      hint: "Кнопки й картинки.",
      explanation: "Стіл робить систему зрозумілою без команд.",
      sample: "Усе видно очима: меню, іконки, налаштування.",
      optional: true,
    },
    {
      type: "whatif",
      prompt: "Не видно знайомих іконок. Що зробити?",
      hint: "Майстер налаштування.",
      explanation: "Система може просити мову, мережу, оновлення.",
      sample: "Завершити перше налаштування й переконатися, що це Pi OS.",
      optional: true,
    },
  ],
  next: 6,
};
