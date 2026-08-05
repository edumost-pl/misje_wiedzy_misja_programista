window.CHAPTER_17 = {
  id: 17,
  bookId: "sysadmin",
  part: 4,
  partTitle: "Мережі",
  title: "Сервери",
  icon: "server",
  learn: [
    "Хто «тримає» світ, поки ти граєш",
    "Що таке сервер і клієнт простими словами",
    "Чому Pi може бути сервером",
  ],
  content: [
    {
      type: "text",
      text: "Ти заходиш у Minecraft з другом.",
    },
    {
      type: "text",
      text: "Будуєте. Бігаєте. Смієтесь у голос.",
    },
    {
      type: "text",
      text: "Але стоп.",
    },
    {
      type: "text",
      text: "Хто тримає цей спільний світ, поки ви обидва в грі?",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Чарівник? Хмара? Сама гра?»*",
    },
    {
      type: "text",
      text: "Часто це окремий комп’ютер (або програма), який **обслуговує** гравців.",
    },
    {
      type: "image",
      src: "nf17-a",
      alt: "Хто тримає світ гри",
      caption: "Ти граєш. Хтось інший тримає сцену.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child playing game on laptop foreground, Raspberry Pi with Ethernet in background on shelf, bright room",
    },
    {
      type: "h2",
      text: "Кухня і гості",
    },
    {
      type: "text",
      text: "Уяви свято.",
    },
    {
      type: "text",
      text: "Гості просять сік, торт, музику.",
    },
    {
      type: "text",
      text: "На кухні хтось готує й подає.",
    },
    {
      type: "text",
      text: "Гості — це **клієнти**. Вони просять.",
    },
    {
      type: "text",
      text: "Кухня — це **сервер**. Він відповідає послугою.",
    },
    {
      type: "text",
      text: "Сайт, файли, гра, пошта — усюди та сама ідея: хтось просить, хтось обслуговує.",
    },
    {
      type: "think",
      id: "q1",
      question: "У цій аналогії сервер — це…",
      options: [
        { id: "a", text: "кухня, яка готує й подає" },
        { id: "b", text: "гість із порожньою тарілкою" },
        { id: "c", text: "дзвінок у двері без причини" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: сервер обслуговує. Клієнт користується послугою.",
    },
    {
      type: "h2",
      text: "Чому Pi може бути «кухнею»?",
    },
    {
      type: "text",
      text: "Бо Pi — справжній комп’ютер. Він може тримати послугу для інших пристроїв у мережі.",
    },
    {
      type: "text",
      text: "Наприклад — ігровий світ Minecraft для друзів удома.",
    },
    {
      type: "ul",
      items: [
        "🌐 веб‑сервер — віддає сторінки",
        "📁 файловий — ділиться файлами",
        "🎮 ігровий — тримає світ Minecraft",
        "🔐 віддаленого доступу — дає керувати комп’ютером здалеку",
      ],
    },
    {
      type: "image",
      src: "nf17-b",
      alt: "Pi як сервер",
      caption: "Маленька плата — велика роль «кухні».",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Restaurant kitchen metaphor: small Pi board on counter like chef station, plates ready, bright clean kitchen",
    },
    {
      type: "fact",
      title: "Важливо",
      text: "Сервер любить стабільність: живлення, мережа, порядок у файлах. Як кухня під час свята — хаос тут дорого коштує.",
    },
    {
      type: "image",
      src: "nf17-c",
      alt: "Стабільність сервера",
      caption: "Спочатку надійність — потім вечірка.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Checklist clipboard with checkmarks, server rack toy and Pi, preparation before party balloons in background bright",
    },
    {
      type: "image",
      src: "nf17-d",
      alt: "Приклади серверів",
      caption: "Послуга різної форми — одна ідея.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two realistic 3D arrows: laptop client requesting, Pi server responding, bright infographic on white",
    },
    {
      type: "try",
      title: "🔍 Дослідження навколо",
      body: "Без команд — спостереження в житті.",
      checklist: [
        "Назви 3 «сервери», якими користуєшся (сайт, гра, відео…)",
        "Хто в кожному випадку клієнт — ти чи програма на телефоні?",
        "Чому серверу важливо не вимикатися посеред гри?",
        "Запиши одну причину, чому Pi зручний для домашнього сервера",
      ],
      footer: "Ти вже бачиш сервери щодня — тепер знаєш їхнє ім’я.",
    },
    {
      type: "draw",
      text: "Намалюй: клієнт (ти) → стрілка «прошу» → сервер (Pi) → стрілка «ось світ».",
    },
    {
      type: "diary",
      lines: [
        "Який сервер ти найчастіше «просиш» у житті?",
        "Чому для сервера важлива стабільність живлення?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Сервер — це лише гучна кімната з миготливими лампами.",
          truth: "Сервер — роль: обслуговувати інших. Навіть маленька плата може.",
        },
        {
          title: "Помилка №2",
          myth: "Клієнт і сервер — одне й те саме.",
          truth: "Клієнт просить. Сервер відповідає.",
        },
        {
          title: "Помилка №3",
          myth: "Якщо сервер увімкнений, мережа не потрібна.",
          truth: "Без зв’язку клієнт не дотягнеться до послуги.",
        },
      ],
    },
    {
      type: "text",
      text: "Ідея сервера зрозуміла.",
    },
    {
      type: "text",
      text: "Готовий ставити свій? Далі — підготовка фундаменту для Minecraft Server.",
    },
  ],
  remember: [
    "Сервер обслуговує, клієнт користується",
    "Pi може бути домашнім сервером",
    "Стабільність важлива",
    "Minecraft онлайн — приклад послуги",
  ],
  commands: [],
  glossary: [
    { term: "Сервер", def: "Комп’ютер або програма, що надає послугу іншим." },
    { term: "Клієнт", def: "Той, хто просить і користується послугою." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Сервер — це…",
      options: [
        "той, хто надає послугу іншим",
        "лише ігровий диск",
        "кнопка живлення",
      ],
      answer: 0,
      hint: "Кухня на святі.",
      explanation: "Сервер обслуговує клієнтів.",
    },
    {
      type: "tf",
      text: "Клієнт надсилає запит, сервер відповідає.",
      answer: true,
      hint: "Прошу → отримую.",
      explanation: "Класична модель клієнт–сервер.",
    },
    {
      type: "fill",
      prompt: "Хто користується послугою сервера?",
      answer: "клієнт",
      hint: "Гість на святі.",
      explanation: "Клієнт просить і отримує послугу.",
    },
    {
      type: "whatif",
      prompt: "Сервер увімкнений, а мережа обірвана. Що з грою онлайн?",
      hint: "Кухня є, двері зачинені.",
      explanation: "Потрібні і сервер, і шлях до нього.",
      sample: "Клієнти не зможуть нормально підключитись.",
      optional: true,
    },
    {
      type: "error",
      prompt: "«Сервер = лише гучна кімната»",
      hint: "Не розмір, а робота.",
      explanation: "Маленький комп’ютер теж може бути сервером.",
      sample: "Сервер — роль обслуговування, навіть на Pi.",
      optional: true,
    },
  ],
  next: 18,
};
