window.CHAPTER_21 = {
  id: 21,
  bookId: "sysadmin",
  part: 6,
  partTitle: "Що далі?",
  title: "Інші проєкти Raspberry Pi",
  icon: "chip",
  learn: [
    "Які ще шляхи відкриває Pi після Minecraft",
    "Як обирати наступний проєкт",
    "Чому вміння адміна універсальні",
  ],
  content: [
    {
      type: "text",
      text: "Сервер Minecraft уже був.",
    },
    {
      type: "text",
      text: "Друзі зайшли. Ти все перевірив. Ти — адмін.",
    },
    {
      type: "text",
      text: "І раптом тисне питання: *«А що ще вміє ця маленька плата?»*",
    },
    {
      type: "text",
      text: "Відповідь: дуже багато. Minecraft — лише одна станція на карті.",
    },
    {
      type: "image",
      src: "nf21-a",
      alt: "Карта ідей Pi",
      caption: "Один комп’ютер — багато доріг.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic map on desk with paths to robot, media center, weather station icons, Pi at start point, bright",
    },
    {
      type: "h2",
      text: "Карта можливостей",
    },
    {
      type: "ul",
      items: [
        "🏠 домашній помічник: світло, датчики, нагадування",
        "📚 медіацентр: фільми й музика в кімнаті",
        "🔬 мінілабораторія: вимірювання, досліди",
        "🤖 роботи й кнопки через GPIO",
        "🌐 маленький вебсайт або файловий сервер для сім’ї",
      ],
    },
    {
      type: "text",
      text: "Не треба робити все й одразу. Вибери **одне** цікаве.",
    },
    {
      type: "think",
      id: "q1",
      question: "Як краще обирати наступний проєкт?",
      options: [
        { id: "a", text: "те, що справді цікаво і по силах зараз" },
        { id: "b", text: "усі 50 ідей за одну ніч" },
        { id: "c", text: "лише те, що кричить інтернет без пояснень" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: цікавість + посильність. Адмін росте кроками.",
    },
    {
      type: "h2",
      text: "Твої універсальні суперсили",
    },
    {
      type: "text",
      text: "Уяви рюкзак мандрівника.",
    },
    {
      type: "text",
      text: "У ньому не 500 міток на речах — а **вміння**: знайти дорогу, відкрити двері, прочитати знак, запитати «де я?»",
    },
    {
      type: "text",
      text: "Термінал, папки, nano, права, пошук, мережа, логи — це не «лише для Minecraft». Це **мова** майже будь‑якого Linux‑проєкту.",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Коли змінюється проєкт, часто лишається той самий ритуал: зрозуміти проблему → спробувати → перевірити → записати.",
    },
    {
      type: "image",
      src: "nf21-b",
      alt: "Різні проєкти",
      caption: "Різні цілі — схожі інструменти адміна.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Collage desk: Pi with GPIO wires, small screen, sensor module, same terminal skills, bright maker space",
    },
    {
      type: "image",
      src: "nf21-c",
      alt: "Вибір одного шляху",
      caption: "Один наступний крок кращий за сто мрій.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child pointing at one chosen project card among many on table, decision moment, bright",
    },
    {
      type: "image",
      src: "nf21-d",
      alt: "Дослідження далі",
      caption: "Книга кінчається. Цікавість — ні.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Closed book on desk but Pi project glowing with LED next to open notebook, curiosity continues, bright window",
    },
    {
      type: "try",
      title: "🔍 Дослідження карти",
      body: "Без обов’язкових команд — план.",
      checklist: [
        "Випиши 3 ідеї проєктів, які тобі цікаві",
        "Викресли ті, що потребують купувати все й одразу",
        "Залиш одну ідею «на цей місяць»",
        "Які вміння з книги тобі вже знадобляться для неї?",
      ],
      footer: "Ти обрав курс. Це вже адмінське рішення.",
    },
    {
      type: "draw",
      text: "Намалюй карту островів-проєктів і познач зірочкою свій наступний острів.",
    },
    {
      type: "diary",
      lines: [
        "Який проєкт обереш наступним і чому?",
        "Яка звичка адміна допоможе в будь‑якому проєкті?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Після Minecraft більше нічого цікавого немає.",
          truth: "Pi відкриває цілу карту ідей.",
        },
        {
          title: "Помилка №2",
          myth: "Треба робити все одночасно.",
          truth: "Один наступний крок сильніший за хаос.",
        },
        {
          title: "Помилка №3",
          myth: "Старі команди більше не знадобляться.",
          truth: "Термінал і файли потрібні майже всюди.",
        },
      ],
    },
    {
      type: "text",
      text: "Карта перед тобою.",
    },
    {
      type: "text",
      text: "Залишилось забрати з книги найважливіше: **твій шлях адміна**.",
    },
  ],
  remember: [
    "Pi — не лише Minecraft",
    "Обирай один наступний проєкт",
    "Уміння адміна переносяться",
    "Цікавість важливіша за список галочок",
  ],
  commands: [],
  glossary: [
    {
      term: "Проєкт",
      def: "Конкретна справа з метою, кроками й перевіркою результату.",
    },
    {
      term: "GPIO",
      def: "Контакти на платі для підключення кнопок, датчиків, світла.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Що робити після великого проєкту?",
      options: [
        "обрати один наступний цікавий крок",
        "забути термінал назавжди",
        "викинути Pi",
      ],
      answer: 0,
      hint: "Карта островів.",
      explanation: "Ріст — кроками.",
    },
    {
      type: "tf",
      text: "Команди термінала корисні й поза Minecraft.",
      answer: true,
      hint: "Універсальна мова.",
      explanation: "Так. Linux‑навички переносяться.",
    },
    {
      type: "whatif",
      prompt: "Очей розбігається від 20 ідей. Що зробити?",
      hint: "Менше — чіткіше.",
      explanation: "Фокус допомагає дійти до кінця.",
      sample: "Обрати одну посильну на найближчий час.",
      optional: true,
    },
    {
      type: "explain",
      prompt: "Назви 2 проєкти Pi крім ігрового сервера.",
      hint: "Карта можливостей.",
      explanation: "Варіантів багато.",
      sample: "Медіацентр, датчики, сайт, робот…",
      optional: true,
    },
  ],
  next: 22,
};
