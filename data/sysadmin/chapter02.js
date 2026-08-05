window.CHAPTER_02 = {
  id: 2,
  bookId: "sysadmin",
  part: 1,
  partTitle: "Знайомство з Raspberry Pi",
  title: "Екскурсія по платі",
  icon: "electronics",
  learn: [
    "Які роз’єми є на Raspberry Pi 5",
    "Чим живлення відрізняється від USB для мишки",
    "Де картинка, мережа, електроніка й слот для картки",
  ],
  content: [
    {
      type: "text",
      text: "Ти приходиш у новий будинок.",
    },
    {
      type: "text",
      text: "Перед тобою — багато дверей.",
    },
    {
      type: "text",
      text: "Одні ведуть на кухню. Інші — у ванну. Ще одні — на балкон.",
    },
    {
      type: "text",
      text: "Якщо не знаєш, куди яка двері — легко потрапити не туди.",
    },
    {
      type: "text",
      text: "У Raspberry Pi теж є «двері». Тільки вони називаються **роз’єми** — маленькі порти по краях зеленої плати.",
    },
    {
      type: "text",
      text: "Спочатку плата може здаватися хаотичною: дірочки, гребінці, порти. Ніби місто без назв вулиць.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Навіщо все це запам’ятовувати?»*",
    },
    {
      type: "text",
      text: "Тому що адміністратор не тикає кабелі навмання. Він знає: **куди** і **навіщо**.",
    },
    {
      type: "image",
      src: "nf02-ports",
      alt: "Роз’єми Raspberry Pi 5.",
      caption: "Карта екскурсії: роз’єми по краях плати.",
      prompt:
        "Photorealistic macro product photography, bright diffused studio light, extreme sharpness on hardware details, clean white background. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Close-up of Raspberry Pi 5 edge showing USB-C, USB-A, Ethernet, micro-HDMI ports, each port clearly visible, annotated feel without text, top-down angle",
    },
    {
      type: "h2",
      text: "Двері для енергії",
    },
    {
      type: "text",
      text: "Уяви ліхтарик.",
    },
    {
      type: "text",
      text: "Без батарейки він красивий — але темний.",
    },
    {
      type: "text",
      text: "Комп’ютер без енергії — так само.",
    },
    {
      type: "text",
      text: "На Raspberry Pi 5 енергію подають через **USB‑C**. Він схожий на зарядку багатьох сучасних телефонів.",
    },
    {
      type: "text",
      text: "Це **двері для живлення** — саме сюди йде струм, щоб плата працювала.",
    },
    {
      type: "image",
      src: "nf02-power",
      alt: "Кабель живлення USB‑C.",
      caption: "USB‑C — двері для живлення плати.",
      prompt:
        "Photorealistic macro product photography, bright diffused studio light, extreme sharpness on hardware details, clean white background. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. USB-C power cable plugging into Raspberry Pi 5 power port, bright studio light, sharp connector detail, safe correct orientation",
    },
    {
      type: "think",
      id: "q1",
      question: "Який роз’єм дає Raspberry Pi живлення?",
      options: [
        { id: "a", text: "Ethernet" },
        { id: "b", text: "USB‑C" },
        { id: "c", text: "GPIO" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Живлення — через **USB‑C**. Ethernet — мережа. GPIO — контакти для електроніки.",
    },
    {
      type: "text",
      text: "На платі є й інші USB‑порти. Вони **не для живлення самої плати**. Туди підключають мишку, клавіатуру, флешку.",
    },
    {
      type: "text",
      text: "Запам’ятай: **USB‑C живить Pi**. Звичайні **USB** — «руки» для гаджетів.",
    },
    {
      type: "h2",
      text: "Двері для картинки",
    },
    {
      type: "text",
      text: "Уяви телевізор без антени.",
    },
    {
      type: "text",
      text: "Екран є — а картинки немає.",
    },
    {
      type: "text",
      text: "На платі Pi немає вбудованого екрана. Картинку виводять через **HDMI** (на Pi 5 часто **micro‑HDMI**).",
    },
    {
      type: "text",
      text: "Кабель іде від плати до монітора або телевізора. Це **очі комп’ютера**, винесені назовні.",
    },
    {
      type: "image",
      src: "nf02-hdmi",
      alt: "HDMI до монітора.",
      caption: "HDMI — очі комп’ютера, винесені назовні.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. micro-HDMI cable connecting Raspberry Pi 5 to a bright monitor on a desk, cable path clearly visible, daylight room",
    },
    {
      type: "think",
      id: "q2",
      question: "HDMI потрібен, щоб…",
      options: [
        { id: "a", text: "підключити мишку" },
        { id: "b", text: "передати зображення на монітор" },
        { id: "c", text: "зарядити плату" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "HDMI — про **картинку**. Мишка — через USB. Живлення — через USB‑C.",
    },
    {
      type: "fact",
      title: "Чи знаєш ти?",
      text: "На Raspberry Pi 5 часто є **два** роз’єми micro‑HDMI — можна підключити навіть два екрани.",
    },
    {
      type: "h2",
      text: "Двері для рук",
    },
    {
      type: "text",
      text: "Уяви, що ти хочеш щось натиснути — але рук немає.",
    },
    {
      type: "text",
      text: "Клавіатура, мишка, флешка — зазвичай у **USB**‑порти:",
    },
    {
      type: "ul",
      items: [
        "⌨️ клавіатура — писати",
        "🖱️ мишка — натискати й рухати курсор",
        "💾 флешка — переносити файли",
      ],
    },
    {
      type: "h2",
      text: "Двері в Інтернет",
    },
    {
      type: "text",
      text: "Уяви листа без пошти.",
    },
    {
      type: "text",
      text: "Його нікуди не доставлять.",
    },
    {
      type: "text",
      text: "**Ethernet** — квадратний роз’єм для мережевого кабелю. Це дротова дорога в мережу.",
    },
    {
      type: "text",
      text: "Не плутай із зарядкою! Ethernet передає дані, а не живить плату.",
    },
    {
      type: "text",
      text: "На багатьох Pi також є **Wi‑Fi** і **Bluetooth** — бездротові двері. Кабель не завжди потрібен, але Ethernet інколи стабільніший.",
    },
    {
      type: "h2",
      text: "Таємничий слот",
    },
    {
      type: "text",
      text: "Знайди маленький слот збоку.",
    },
    {
      type: "text",
      text: "Уяви **ключ від квартири**, який носиш завжди з собою.",
    },
    {
      type: "text",
      text: "Без нього двері є — а зайти не можна. **microSD** для Pi — такий ключ: у слоті лежить «книжка» з операційною системою.",
    },
    {
      type: "text",
      text: "Поки що запам’ятай лише **місце**. Як у будинку є двері, куди кладуть ключ — але ти ще не знаєш, що саме відкриває цей ключ.",
    },
    {
      type: "text",
      text: "Незабаром ти дізнаєшся, **навіщо потрібна ця маленька картка** — і чому без неї екскурсія ще не закінчена.",
    },
    {
      type: "h2",
      text: "Двері до електроніки",
    },
    {
      type: "text",
      text: "Уяви конструктор з дротиками.",
    },
    {
      type: "text",
      text: "Довгий ряд штирків на платі — **GPIO**. Через них Pi може керувати світлодіодами, кнопками, датчиками, частинами робота.",
    },
    {
      type: "image",
      src: "nf02-gpio",
      alt: "Контакти GPIO.",
      caption: "GPIO — двері до електроніки. Дивись, не тикай металом навмання.",
      prompt:
        "Photorealistic macro product photography, bright diffused studio light, extreme sharpness on hardware details, clean white background. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. GPIO pin header on Raspberry Pi 5 in sharp macro focus, clean pins, gentle warning mood but bright lighting, no hands touching pins",
    },
    {
      type: "text",
      text: "Поки що просто знайди GPIO очима. Схеми й безпеку вивчимо пізніше, коли дійдемо до саморобок.",
    },
    {
      type: "think",
      id: "q3",
      question: "GPIO потрібен, щоб…",
      options: [
        { id: "a", text: "підключити монітор" },
        { id: "b", text: "під’єднати електроніку й датчики" },
        { id: "c", text: "дати платі живлення замість USB‑C" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q3",
      text: "GPIO — для **електроніки**. Монітор — HDMI. Живлення — USB‑C.",
    },
    {
      type: "h2",
      text: "Маленька карта в голові",
    },
    {
      type: "ul",
      items: [
        "⚡ **USB‑C** — живлення плати",
        "🖥️ **HDMI** — картинка",
        "🔌 **USB** — мишка, клавіатура, флешка",
        "🌐 **Ethernet / Wi‑Fi** — мережа",
        "📶 **Bluetooth** — бездротові гаджети поруч",
        "💾 **слот microSD** — місце для картки пам’яті",
        "🤖 **GPIO** — електроніка",
      ],
    },
    {
      type: "try",
      title: "🔍 Дослідження: знайди двері",
      body: "Пройди екскурсію очима (або пальцем по фото):",
      checklist: [
        "Знайди USB‑C — де «їжа» для плати?",
        "Знайди HDMI — де «очі»?",
        "Знайди хоча б один USB — де «руки»?",
        "Знайди Ethernet — де «дорога в мережу»?",
        "Знайди слот для картки — де «таємничий ключ»?",
        "Знайди GPIO — де «двері до електроніки»?",
        "Скільки зупинок знайшов без підказки?",
      ],
      footer: "Кожні двері ведуть у свій світ. Ти вже бачиш карту.",
    },
    {
      type: "draw",
      text: "Намалюй плату й підпиши: USB‑C, HDMI, Ethernet, слот для картки.",
    },
    {
      type: "diary",
      lines: [
        "Який роз’єм запам’ятався найкраще — і чому?",
        "Якою метафорою поясниш HDMI другові?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Будь‑який USB на платі підходить, щоб її живити.",
          truth: "Плату живлять через **USB‑C**. Інші USB — для гаджетів.",
        },
        {
          title: "Помилка №2",
          myth: "Ethernet — це теж зарядка.",
          truth: "Ethernet — дорога для даних, не для живлення.",
        },
        {
          title: "Помилка №3",
          myth: "GPIO можна одразу тикати скріпкою.",
          truth: "Може бути коротке замикання. Спочатку вчаться схемам.",
        },
      ],
    },
    {
      type: "text",
      text: "Тепер плата вже не зелена загадка. Ти бачиш **двері**.",
    },
    {
      type: "text",
      text: "Екран, мережа, пам’ять — саме ці «двері» знадобляться, коли одного дня ти збереш **свій ігровий світ** на Pi.",
    },
    {
      type: "text",
      text: "А от навіщо саме та маленька картка в слоті — і як Pi вперше «прокидається»?",
    },
    {
      type: "text",
      text: "Це наступна таємниця.",
    },
  ],
  remember: [
    "USB‑C — живлення плати",
    "HDMI — зображення",
    "USB — мишка й клавіатура",
    "Ethernet / Wi‑Fi — мережа",
    "Слот microSD — місце для картки",
    "GPIO — електроніка",
  ],
  commands: [],
  glossary: [
    { term: "USB‑C", def: "Роз’єм живлення Raspberry Pi 5." },
    { term: "HDMI / micro‑HDMI", def: "Роз’єм для зображення на монітор." },
    { term: "USB", def: "Порти для мишки, клавіатури, флешки." },
    { term: "Ethernet", def: "Роз’єм дротової мережі." },
    { term: "GPIO", def: "Контакти для електроніки й датчиків." },
    {
      term: "Слот microSD",
      def: "Місце на платі, куди вставляють картку пам’яті.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Живлення Pi 5 зазвичай через…",
      options: [
        "Ethernet",
        "USB‑C",
        "GPIO",
      ],
      answer: 1,
      hint: "Схоже на зарядку телефону.",
      explanation: "Pi 5 живиться через USB‑C.",
    },
    {
      type: "match",
      prompt: "Поєднай роз’єм і роль:",
      hint: "HDMI завжди про відео.",
      explanation: "Кожні двері ведуть у свій світ.",
      pairs: [
        ["USB‑C", "живлення плати"],
        ["HDMI", "картинка на монітор"],
        ["USB", "мишка / клавіатура"],
        ["Ethernet", "мережа по кабелю"],
        ["GPIO", "електроніка"],
      ],
    },
    {
      type: "tf",
      text: "HDMI потрібен, щоб підключити мишку.",
      answer: false,
      hint: "Мишка — рука.",
      explanation: "Мишку підключають через USB. HDMI — картинка.",
      optional: true,
    },
    {
      type: "fill",
      prompt: "Ряд контактів для датчиків називається…",
      answer: "GPIO",
      hint: "Чотири літери.",
      explanation: "GPIO — контакти для електроніки.",
      optional: true,
    },
  ],
  next: 3,
};
