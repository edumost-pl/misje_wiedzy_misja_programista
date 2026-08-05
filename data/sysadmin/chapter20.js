window.CHAPTER_20 = {
  id: 20,
  bookId: "sysadmin",
  part: 5,
  partTitle: "Minecraft",
  title: "Запуск сервера",
  icon: "minecraft",
  learn: [
    "Як зрозуміти, що сервер справді запустився",
    "Навіщо читати логи",
    "Як друзі заходять у тій самій Wi‑Fi",
    "Як безпечно зупинити сервер",
  ],
  content: [
    {
      type: "text",
      text: "Ти натиснув запуск.",
    },
    {
      type: "text",
      text: "Екран біжить рядками.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Уже все! Кличте всіх!»*",
    },
    {
      type: "text",
      text: "Але стоп. Чи сервер **справді** готовий — чи лише шумить літерами?",
    },
    {
      type: "image",
      src: "nf20-a",
      alt: "Момент запуску",
      caption: "Шум на екрані ≠ готовність. Треба вміти читати знаки.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal scrolling many log lines blurred, child leaning forward reading carefully, suspense but bright room",
    },
    {
      type: "h2",
      text: "Логи — щоденник сервера",
    },
    {
      type: "text",
      text: "Уяви корабельний журнал.",
    },
    {
      type: "text",
      text: "Капітан записує: що сталось, що пішло не так, коли все готове.",
    },
    {
      type: "text",
      text: "У сервера такий журнал називають **логами**.",
    },
    {
      type: "text",
      text: "Адмін не ворожить. Він читає логи.",
    },
    {
      type: "think",
      id: "q1",
      question: "Навіщо логи при запуску?",
      options: [
        { id: "a", text: "щоб побачити помилки й момент «готово»" },
        { id: "b", text: "щоб намалювати шпалери" },
        { id: "c", text: "щоб вимкнути світло в кімнаті" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: логи розповідають правду про запуск.",
    },
    {
      type: "h2",
      text: "Ознаки готовності",
    },
    {
      type: "text",
      text: "Уяви аеропорт.",
    },
    {
      type: "text",
      text: "Літак гуде на злітній смузі. Пасажири вже зібрались. Але **двері ще зачинені** — бо пілот не сказав «готові до посадки».",
    },
    {
      type: "text",
      text: "У логах сервера шукай такий момент: рядок на кшталт **Done** — «світ зібраний, двері відчинені, чекаю гравців».",
    },
    {
      type: "code",
      text: "# Приклад ідеї запуску (точна команда залежить від твоєї збірки)\npi@raspberrypi:~/minecraft-server$ java -jar server.jar nogui\n\n# Читай рядки на екрані\n# Шукай ознаку готовності або текст помилки\n# Не клич друзів, доки не впевнений",
    },
    {
      type: "ul",
      items: [
        "✅ Є повідомлення про успішний старт",
        "✅ Немає червоної помилки про Java / EULA / порт",
        "✅ Ти можеш підключитись сам і перевірити світ",
      ],
    },
    {
      type: "image",
      src: "nf20-b",
      alt: "Читання логів",
      caption: "Рядки — підказки. Читай спокійно.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Close-up monitor server log with Done line area highlighted blur, calm reading, daylight",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Іноді перший запуск довгий: світ створюється. Це не зависання назавжди — але якщо хвилини йдуть і є помилка, читай її, а не тисни все підряд.",
    },
    {
      type: "h2",
      text: "Як друзі заходять (та сама Wi‑Fi)",
    },
    {
      type: "text",
      text: "Це не «весь інтернет». Це **одна домашня мережа**: твій Pi і ноутбук друга підключені до того самого роутера.",
    },
    {
      type: "diagram",
      title: "Шлях друга до світу",
      layout: "flow",
      items: [
        { label: "IP Pi", text: "Адреса в домашній мережі (як у розділі про мережу)" },
        { label: "Пряме підключення", text: "У Minecraft: Multiplayer → Direct Connection" },
        { label: "Порт 25565", text: "Стандартні двері Minecraft Server" },
      ],
      caption: "Одна Wi‑Fi → адреса Pi → двері 25565 → світ.",
    },
    {
      type: "ul",
      items: [
        "На Pi подивись адресу: `ip a` (шукай `inet`, як раніше) — наприклад `192.168.1.42`",
        "Друг у Minecraft: **Multiplayer** → **Direct Connection** (пряме підключення)",
        "Вводить адресу й порт: `192.168.1.42:25565` (у вас числа інші)",
        "Версія Minecraft у друга має **збігатися** з версією `server.jar`",
        "Спочатку зайди **сам** зі свого ПК — лише потім клич друзів",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Лише вдома",
      text: "Відкривати сервер «на весь інтернет» — окрема велика тема безпеки. У цій книзі ми граємо **в одній Wi‑Fi** з родиною й друзями поруч.",
    },
    {
      type: "fact",
      title: "Скільки друзів витримає Pi?",
      text: "Маленький комп’ютер комфортно тягне приблизно **2–4** гравці. Це вже свято. Десять одночасно — занадто важко для Pi без потужнішого заліза.",
    },
    {
      type: "image",
      src: "nf20-c",
      alt: "Тест підключення",
      caption: "Спочатку ти сам. Потім друзі.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Single child joining Minecraft on same desk as Pi server, solo test before friends, bright",
    },
    {
      type: "h2",
      text: "Як зупинити світ правильно",
    },
    {
      type: "text",
      text: "Не вимикай живлення «з розетки», поки сервер працює. Краще сказати світу **«стоп»** у консолі — тоді він збереже світ і вийде спокійно.",
    },
    {
      type: "code",
      text: "# У вікні, де крутиться сервер, набери й натисни Enter:\nstop\n\n# Чекай повідомлення про зупинку\n# Лише потім можна спокійно вимкнути Pi",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Чому не рвати кабель?",
      text: "Раптове вимкнення — як вимкнути світло під час збереження зошита. Світ може пошкодитись. Команда `stop` — ввічливе «до побачення».",
    },
    {
      type: "image",
      src: "nf20-d",
      alt: "Сервер живий",
      caption: "Готово. Свято можна починати.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Group of kids with laptops celebrating, Pi with green LED, party mood, bright colorful room",
    },
    {
      type: "try",
      title: "🔍 Дослідження запуску",
      body: "Разом із дорослим:",
      checklist: [
        "Запусти сервер за вашою інструкцією",
        "Подивись логи 30–60 секунд",
        "Знайди або повідомлення готовності, або текст помилки",
        "Якщо помилка — не панікуй: перепиши рядок у щоденник",
        "Запиши IP Pi (`ip a`) і спробуй Direct Connection: `IP:25565`",
        "Якщо готово — зайди сам і перевір світ",
        "Лише потім клич 1–2 друзів у тій самій Wi‑Fi",
        "Наприкінці набери `stop` у консолі сервера",
      ],
      footer: "Ти перевірив. Не вгадав.",
    },
    {
      type: "draw",
      text: "Намалюй світлофор: червоний = помилка в логах, жовтий = ще грузиться, зелений = Done / можна грати. Поруч — двері з номером 25565.",
    },
    {
      type: "diary",
      lines: [
        "Який рядок у логах був найважливішим?",
        "Яку адресу й порт ти дав другу для Direct Connection?",
        "Чому зупиняємо сервер командою stop, а не висмикуючи кабель?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Якщо літери біжать — сервер уже готовий.",
          truth: "Треба дочекатися ознаки готовності або зрозуміти помилку.",
        },
        {
          title: "Помилка №2",
          myth: "Логи можна ігнорувати.",
          truth: "Логи — головний детектив запуску.",
        },
        {
          title: "Помилка №3",
          myth: "Краще одразу кликати 10 друзів.",
          truth: "Спочатку перевірь сам. На Pi комфортно 2–4 гравці в одній Wi‑Fi.",
        },
        {
          title: "Помилка №4",
          myth: "Щоб вимкнути — достатньо висмикнути кабель.",
          truth: "Спочатку `stop` у консолі, потім вимикання.",
        },
      ],
    },
    {
      type: "text",
      text: "Сервер живий. Ти — адмін, який перевіряє факти.",
    },
    {
      type: "text",
      text: "А що ще вміє цей маленький комп’ютер?",
    },
  ],
  remember: [
    "Запуск ≠ одразу «кличте всіх»",
    "Логи розповідають правду",
    "Шукай готовність або помилку",
    "Друзі: та сама Wi‑Fi → IP:25565 → Direct Connection",
    "Версії клієнта й server.jar мають збігатися",
    "Спочатку тест самому; на Pi комфортно ~2–4 гравці",
    "Зупинка: команда stop у консолі",
  ],
  commands: [
    { cmd: "java -jar server.jar nogui", does: "Типовий запуск сервера (уточнюй під свою збірку)" },
    { cmd: "ip a", does: "Подивитися адресу Pi в домашній мережі" },
    { cmd: "stop", does: "Безпечно зупинити сервер із його консолі" },
  ],
  glossary: [
    { term: "Лог", def: "Текстовий журнал того, що робить програма чи сервер." },
    { term: "Запуск", def: "Старт сервера й перевірка, що він справді готовий." },
    { term: "Порт 25565", def: "Стандартні «двері», через які клієнт Minecraft знаходить сервер." },
    { term: "Direct Connection", def: "Пряме підключення за IP-адресою в меню Multiplayer." },
    { term: "stop", def: "Команда в консолі сервера, щоб зберегти світ і вимкнутись спокійно." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Логи потрібні, щоб…",
      options: [
        "бачити помилки й готовність",
        "смажити тости",
        "міняти колір корпуса",
      ],
      answer: 0,
      hint: "Корабельний журнал.",
      explanation: "Логи — джерело правди про запуск.",
    },
    {
      type: "tf",
      text: "Біг рядків на екрані завжди означає, що сервер уже готовий.",
      answer: false,
      hint: "Шум ≠ фініш.",
      explanation: "Треба ознака готовності або аналіз помилки.",
    },
    {
      type: "whatif",
      prompt: "У логах помилка про EULA. Що це натякає?",
      hint: "Попередній розділ підготовки.",
      explanation: "Лог підказує, який крок пропущено.",
      sample: "Потрібно прийняти EULA в файлі згоди.",
    },
    {
      type: "error",
      prompt: "«Логи можна не читати»",
      hint: "Детектив.",
      explanation: "Читання логів — базова звичка.",
      sample: "Без логів адмін ворожить.",
      optional: true,
    },
    {
      type: "explain",
      prompt: "Чому спочатку заходить адмін, а потім друзі?",
      hint: "Тест.",
      explanation: "Спочатку перевірка — потім гості.",
      sample: "Щоб перевірити світ і не запрошувати всіх у зламаний сервер.",
      optional: true,
    },
  ],
  next: 21,
};
