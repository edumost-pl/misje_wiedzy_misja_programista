window.CHAPTER_04 = {
  id: 4,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Що таке Linux",
  icon: "chip",
  learn: [
    "Що таке операційна система простими словами",
    "Чому Linux — це родина систем, а не «одна кнопка»",
    "Що робить ядро між залізом і програмами",
  ],
  content: [
    {
      type: "text",
      text: "Ти прийшов на концерт.",
    },
    {
      type: "text",
      text: "Скрипки. Барабани. Труби.",
    },
    {
      type: "text",
      text: "Кожен музикант грає своє.",
    },
    {
      type: "text",
      text: "Але без **диригента** виходить шум, а не музика.",
    },
    {
      type: "text",
      text: "На твоєму Pi вже щось працює на екрані. Хто керує всім цим «під капотом»?",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Це ж просто зелена плата робить магію?»*",
    },
    {
      type: "text",
      text: "Ні. Плата — це інструменти. А **операційна система** — диригент.",
    },
    {
      type: "image",
      src: "nf04-a",
      alt: "Схема: комп’ютер і операційна система.",
      caption: "ОС — невидимий диригент усього оркестру.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Orchestra conductor silhouette metaphor rendered as realistic 3D: conductor directing musicians while computer hardware sits in foreground, bright concert hall lighting simplified to studio white",
    },
    {
      type: "h2",
      text: "Диригент комп’ютера",
    },
    {
      type: "text",
      text: "Уяви оркестр: скрипки, барабани, труби. Без диригента кожен грає своє — і виходить шум.",
    },
    {
      type: "text",
      text: "**Операційна система** (коротко — **ОС**) — диригент комп’ютера. Вона каже програмам: ось процесор, ось пам’ять, ось екран, ось диск.",
    },
    {
      type: "text",
      text: "Без ОС «голе» залізо майже марне для звичайної роботи. Є деталі — немає зручних правил гри.",
    },
    {
      type: "think",
      id: "q1",
      question: "Операційна система потрібна, щоб…",
      options: [
        { id: "a", text: "лише прикрасити корпус наклейкою" },
        { id: "b", text: "керувати залізом і давати програмам працювати" },
        { id: "c", text: "замінити зарядний кабель" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: ОС **керує залізом і програмами**. Без неї комп’ютер не стає зручним інструментом.",
    },
    {
      type: "h2",
      text: "Велика родина, а не одна гра",
    },
    {
      type: "text",
      text: "Уяви прізвище в класі.",
    },
    {
      type: "text",
      text: "Коваленко — багато різних людей. Але в них спільне прізвище.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Це якась одна програма — одна кнопка?»*",
    },
    {
      type: "text",
      text: "Насправді **Linux** — це **родина** операційних систем. У них спільне «серце», але різні «обличчя» й набори програм.",
    },
    {
      type: "text",
      text: "Raspberry Pi OS, Ubuntu та багато інших — родичі в цій великій родині.",
    },
    {
      type: "image",
      src: "nf04-b",
      alt: "Родина систем Linux.",
      caption: "Одне серце — багато різних збірок.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Several colorful Linux distro logos replaced by abstract friendly penguin-family shapes on light shelves, same heart icon connecting them, bright educational infographic style in 3D",
    },
    {
      type: "think",
      id: "q2",
      question: "Linux існує…",
      options: [
        { id: "a", text: "лише на Raspberry Pi" },
        { id: "b", text: "у багатьох місцях: сервери, ПК, частина телефонів…" },
        { id: "c", text: "тільки в музеї комп’ютерів" },
      ],
      answer: "b",
    },
    {
      type: "text",
      text: "Подумай, де ще могла б жити система, якщо не лише на маленькій платі.",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Linux працює на **серверах інтернету**, суперкомп’ютерах, ПК і навіть у світі Android (там теж є ядро Linux). Pi — зручний спосіб його вивчити, але не єдине місце.",
    },
    {
      type: "h2",
      text: "Серце всередині",
    },
    {
      type: "text",
      text: "Уяви будинок з трьох поверхів.",
    },
    {
      type: "text",
      text: "Внизу — фундамент і стіни (**залізо**).",
    },
    {
      type: "text",
      text: "Посередині — електрика й водопровід (**ядро**).",
    },
    {
      type: "text",
      text: "Зверху — меблі й люди (**програми**).",
    },
    {
      type: "text",
      text: "Уяви будинок.",
    },
    {
      type: "text",
      text: "Гості стукають у двері: «Дай мені світло!», «Запиши файл!», «Надішли в мережу!»",
    },
    {
      type: "text",
      text: "Хтось один відповідає на **кожне** стукання — і йде до «заліза» виконувати прохання.",
    },
    {
      type: "text",
      text: "У Linux цей «двірник» називається **ядром** (kernel). Програми не лізуть у процесор самі — вони просять ядро.",
    },
    {
      type: "image",
      src: "nf04-c",
      alt: "Шари: залізо, ядро, програми.",
      caption: "Залізо → ядро → програми.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Three clear horizontal layers: circuit board bottom, glowing kernel core middle, app icons top, bright isometric 3D cutaway, labels absent",
    },
    {
      type: "ul",
      items: [
        "🔩 **Залізо** — плата, процесор, пам’ять, роз’єми",
        "❤️ **Ядро** — серце ОС, керує залізом",
        "📦 **Програми** — браузер, ігри, сервери, навчальні інструменти",
      ],
    },
    {
      type: "text",
      text: "Коли ти розумієш ці шари, далі все стає зрозумілішим. Ти бачиш, з ким насправді маєш справу.",
    },
    {
      type: "fact",
      title: "Чи знаєш ти?",
      text: "Велика частина інтернету крутиться на серверах з Linux. Коли ти відкриваєш сайт, десь далеко Linux уже працює за лаштунками.",
    },
    {
      type: "image",
      src: "nf04-d",
      alt: "Сервери й Linux у світі.",
      caption: "Linux часто невидимий — але дуже зайнятий.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Server room aisle with blinking rack lights but bright overhead lighting, child looking through glass wall in wonder, realistic data center glimpse",
    },
    {
      type: "h2",
      text: "Навіщо це адміністратору?",
    },
    {
      type: "text",
      text: "Адмін не просто «натискає кнопки». Він розуміє: файли, користувачі, процеси, мережа — усе це живе **всередині ОС**.",
    },
    {
      type: "text",
      text: "Саме тому наступні розділи будуть про практику на твоєму Pi. Спочатку — конкретна «особа» з цієї родини.",
    },
    {
      type: "h2",
      text: "Коротко про головне",
    },
    {
      type: "ul",
      items: [
        "**Що це?** Linux — родина ОС зі спільним ядром.",
        "**Навіщо?** Щоб комп’ютер умів запускати програми й керувати залізом.",
        "**Як зрозуміти?** Шари: залізо → ядро → програми.",
      ],
    },
    {
      type: "try",
      title: "🔍 Дослідження: хто диригент?",
      body: "На своєму Pi (або з дорослим) спробуй помітити:",
      checklist: [
        "Де видно, що система вже працює (стіл, меню, вікна)?",
        "Одну програму, яку ти можеш відкрити",
        "Що без системи (порожня картка) цього всього не було б",
        "Одним реченням скажи: хто тут «диригент» — плата чи ОС?",
      ],
      footer: "Якщо відповів «ОС» — ти зрозумів розділ.",
    },
    {
      type: "draw",
      text: "Намалюй три полиці одна над одною й підпиши: залізо / ядро / програми.",
    },
    {
      type: "diary",
      lines: [
        "Якою метафорою ти поясниш ОС другу?",
        "Що тебе здивувало про Linux?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Linux існує лише на Raspberry Pi.",
          truth:
            "Linux скрізь: сервери, ПК, наукові машини. Pi — зручна навчальна двері в цей світ.",
        },
        {
          title: "Помилка №2",
          myth: "ОС — це просто шпалери на екрані.",
          truth:
            "Шпалери — дрібниця. ОС керує пам’яттю, файлами, мережею й запуском програм.",
        },
        {
          title: "Помилка №3",
          myth: "Можна вивчити адміністрування, ігноруючи, що таке ОС.",
          truth:
            "Усі команди й сервіси живуть «поверх» ОС. Без цієї основи легко заплутатися.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти знаєш: за екраном працює диригент — операційна система з великої родини.",
    },
    {
      type: "text",
      text: "Саме на таких системах крутяться **сервери ігор** у мережі — і твій майбутній Minecraft‑світ на Pi теж матиме цього «диригента».",
    },
    {
      type: "text",
      text: "Але яка саме «особа» сидить на твоєму Pi?",
    },
    {
      type: "text",
      text: "Далі — знайомство з її обличчям.",
    },
  ],
  remember: [
    "ОС — диригент комп’ютера",
    "Linux — родина систем",
    "Ядро розмовляє із залізом",
    "Pi — один зі способів вивчити Linux",
  ],
  commands: [],
  glossary: [
    {
      term: "Операційна система (ОС)",
      def: "Головна система, що керує залізом і програмами.",
    },
    {
      term: "Linux",
      def: "Родина операційних систем зі спільним ядром.",
    },
    {
      term: "Ядро",
      def: "Серце ОС; керує процесором, пам’яттю, пристроями.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Linux — це…",
      options: [
        "родина операційних систем",
        "лише одна гра",
        "тип зарядки",
      ],
      answer: 0,
      hint: "Подумай про Windows/macOS: Linux у тій самій «лізі».",
      explanation: "Linux — сімейство ОС. Raspberry Pi OS і інші побудовані навколо ядра Linux.",
    },
    {
      type: "tf",
      text: "Операційна система керує залізом і програмами.",
      answer: true,
      hint: "Згадай диригента.",
      explanation: "Так. ОС дає програмам доступ до ресурсів комп’ютера.",
    },
    {
      type: "fill",
      prompt: "Як називають «серце» ОС, що керує залізом?",
      answer: "ядро",
      hint: "Англійською — kernel.",
      explanation: "Ядро — центральна частина ОС.",
    },
    {
      type: "whatif",
      prompt: "Що буде без операційної системи?",
      hint: "Оркестр без диригента.",
      explanation: "Без ОС звичайна робота з файлами й програмами майже неможлива.",
      sample: "Немає зручного способу запускати програми й керувати залізом.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Знайди помилку: «Linux існує лише на Raspberry Pi».",
      hint: "Де ще ти чув про Linux чи Android?",
      explanation: "Pi — один шлях. Linux набагато ширший.",
      sample: "Linux працює на серверах, ПК тощо.",
      optional: true,
    },
  ],
  next: 5,
};
