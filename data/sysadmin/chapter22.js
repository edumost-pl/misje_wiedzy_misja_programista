window.CHAPTER_22 = {
  id: 22,
  bookId: "sysadmin",
  part: 6,
  partTitle: "Що далі?",
  title: "Твій шлях адміністратора",
  icon: "flag",
  learn: [
    "Який ритуал адміна забрати з собою",
    "Що важливіше за список команд",
    "Як продовжувати шлях без страху",
  ],
  content: [
    {
      type: "text",
      text: "Ти закриваєш останню сторінку.",
    },
    {
      type: "text",
      text: "На столі — маленький Pi. У голові — купа нових слів.",
    },
    {
      type: "fact",
      title: "Головне — не Pi на столі",
      text: "Навіть якщо сервер ще не запускався, ти вже вмієш **думати як адмін**: питати, перевіряти, не панікувати. Це важливіше за будь-яку команду.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«А раптом я все забуду?»*",
    },
    {
      type: "text",
      text: "Не бійся. Адмін забирає з собою не зубріння, а **звички**.",
    },
    {
      type: "image",
      src: "nf22-a",
      alt: "Кінець книги — початок шляху",
      caption: "Книга кінчається. Шлях — ні.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child closing book, Raspberry Pi ready on desk, path ahead through bright doorway, hopeful",
    },
    {
      type: "h2",
      text: "Ритуал, сильніший за будь‑яку команду",
    },
    {
      type: "text",
      text: "Уяви детектива.",
    },
    {
      type: "text",
      text: "Щось пішло не так. Поганий детектив б’є кулаком по столу. Добрий — **зупиняється** і ставить п’ять питань:",
    },
    {
      type: "text",
      text: "Що сталось? Чому могло статися? Що спробувати обережно? Чи спрацювало? Що записати, щоб не забути?",
    },
    {
      type: "ul",
      items: [
        "1. Зрозуміти проблему",
        "2. Припустити причину",
        "3. Спробувати обережно",
        "4. Перевірити результат",
        "5. Записати, що дізнався",
      ],
    },
    {
      type: "text",
      text: "Цей ритуал працює і з папками, і з мережею, і з сервером.",
    },
    {
      type: "think",
      id: "q1",
      question: "Що важливіше для адміна-початківця?",
      options: [
        { id: "a", text: "звичка розуміти й перевіряти" },
        { id: "b", text: "запам’ятати 500 команд за ніч" },
        { id: "c", text: "ніколи не читати повідомлення помилок" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: звичка мислити. Команди можна підглянути. Мислення — ні.",
    },
    {
      type: "h2",
      text: "Твій набір із дороги",
    },
    {
      type: "ul",
      items: [
        "Pi — справжній комп’ютер",
        "Термінал — розмова текстом",
        "Порядок у папках і файлах",
        "Права й обережний sudo",
        "Процеси, пошук, мережа, SSH",
        "Сервер — послуга для інших",
      ],
    },
    {
      type: "fact",
      title: "Кредо",
      text: "Адмін не той, хто ніколи не помиляється. Адмін той, хто вміє зупинитись, прочитати повідомлення й спробувати знову розумніше.",
    },
    {
      type: "image",
      src: "nf22-b",
      alt: "Ритуал адміна",
      caption: "Зрозуміти → спробувати → перевірити → записати.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Young detective with magnifying glass and five step checklist cards on bright cork board, admin ritual metaphor",
    },
    {
      type: "image",
      src: "nf22-c",
      alt: "Впевненість",
      caption: "Ти вже не «просто користувач кнопок».",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Confident child typing in terminal while parents watch proudly in background, bright home, growth",
    },
    {
      type: "image",
      src: "nf22-d",
      alt: "Далі шлях",
      caption: "Наступний експеримент чекає.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child carrying Pi to new project table with tools and wires, adventure ahead, sunny room",
    },
    {
      type: "try",
      title: "🔍 Твій підсумок",
      body: "Без нових команд — чесна розмова з собою.",
      checklist: [
        "Напиши 5 речей, які вмієш тепер",
        "Напиши 1 річ, яку боїшся — і маленький крок, як спробувати безпечно",
        "Обери дату наступного експерименту на Pi",
        "Скажи вголос: «Я адмін, який перевіряє»",
      ],
      footer: "Це і є фініш книги. І старт твоєї практики.",
    },
    {
      type: "draw",
      text: "Намалюй два стовпчики: «Вже вмію» і «Хочу вивчити». Заповни.",
    },
    {
      type: "diary",
      lines: [
        "Яка звичка адміна для тебе найважливіша?",
        "Який буде твій наступний маленький експеримент?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Справжній адмін усе знає напам’ять.",
          truth: "Справжній адмін уміє шукати, читати й перевіряти.",
        },
        {
          title: "Помилка №2",
          myth: "Після книги навчання закінчене.",
          truth: "Книга дає старт. Далі — практика.",
        },
        {
          title: "Помилка №3",
          myth: "Помилка = кінець.",
          truth: "Помилка = повідомлення, з якого вчаться.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти пройшов шлях.",
    },
    {
      type: "text",
      text: "Тепер іди й експериментуй — спокійно, цікаво, з перевіркою.",
    },
  ],
  remember: [
    "Ритуал: зрозуміти → спробувати → перевірити → записати",
    "Звички важливіші за зубріння",
    "Помилка — підказка, не вирок",
    "Шлях адміна триває після книги",
  ],
  commands: [],
  glossary: [
    {
      term: "Ритуал адміна",
      def: "Повторюваний спосіб вирішувати проблеми спокійно й перевірено.",
    },
    {
      term: "Практика",
      def: "Справжні спроби на своєму Pi, не лише читання.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Що забрати з книги в першу чергу?",
      options: [
        "ритуал розуміти й перевіряти",
        "страх перед терміналом",
        "звичку ігнорувати помилки",
      ],
      answer: 0,
      hint: "Звичка.",
      explanation: "Мислення адміна — головний трофей.",
    },
    {
      type: "tf",
      text: "Адмін ніколи не користується підказками й документацією.",
      answer: false,
      hint: "Шукати — нормально.",
      explanation: "Навпаки: вміти шукати — сила.",
    },
    {
      type: "whatif",
      prompt: "Забув команду. Що робити?",
      hint: "Не паніка.",
      explanation: "Важлива проблема й перевірка, не зубріння.",
      sample: "Пригадати проблему, підглянути шпаргалку, перевірити результат.",
      optional: true,
    },
    {
      type: "error",
      prompt: "«Книга закінчилась = я все знаю назавжди»",
      hint: "Шлях триває.",
      explanation: "Навчання продовжується експериментами.",
      sample: "Книга — старт. Далі практика.",
      optional: true,
    },
  ],
  next: null,
};
