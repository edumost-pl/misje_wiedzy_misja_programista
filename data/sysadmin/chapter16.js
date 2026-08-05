window.CHAPTER_16 = {
  id: 16,
  bookId: "sysadmin",
  part: 4,
  partTitle: "Мережі",
  title: "SSH",
  icon: "server",
  learn: [
    "Як розмовляти з Pi без монітора",
    "Як виглядає команда ssh user@host",
    "Базова безпека віддаленого доступу",
  ],
  content: [
    {
      type: "text",
      text: "Твій Pi стоїть у **іншій кімнаті**.",
    },
    {
      type: "text",
      text: "Без монітора. Без клавіатури. Просто маленька зелена плата на полиці.",
    },
    {
      type: "text",
      text: "А тобі треба сказати їй: «Перевір, чи працює сервер».",
    },
    {
      type: "text",
      text: "Стоп. Як **розмовляти** з комп’ютером, до якого не дістатися руками?",
    },
    {
      type: "text",
      text: "Невже тягнути HDMI‑кабель через усю квартиру?",
    },
    {
      type: "image",
      src: "nf16-a",
      alt: "Pi в іншій кімнаті",
      caption: "Плата далеко — але ти хочеш їй «написати».",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi on shelf across room, child at laptop on desk, distance between devices, bright home",
    },
    {
      type: "h2",
      text: "Тунель через стіну",
    },
    {
      type: "text",
      text: "Уяви **трубку**, яка проходить крізь стіну.",
    },
    {
      type: "text",
      text: "Ти говориш у свій кінець — а Pi чує на своєму. І навпаки.",
    },
    {
      type: "text",
      text: "Тільки це не звичайна трубка. Це **захищений канал** через домашню мережу.",
    },
    {
      type: "text",
      text: "Ти пишеш команди на своєму ноутбуку — вони виконуються **на Pi**. Ніби ти сидиш прямо перед його екраном.",
    },
    {
      type: "text",
      text: "Такий спосіб називають **SSH** — Secure Shell, «захищена оболонка».",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "SSH — стандарт для керування серверами без монітора. Саме так адміни працюють із машинами в інших кімнатах, містах і дата‑центрах.",
    },
    {
      type: "think",
      id: "q1",
      question: "SSH потрібен, щоб…",
      options: [
        { id: "a", text: "безпечно керувати комп’ютером на відстані" },
        { id: "b", text: "варити чай" },
        { id: "c", text: "малювати на HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: захищений віддалений термінал — трубка через мережу.",
    },
    {
      type: "image",
      src: "nf16-b",
      alt: "SSH‑тунель",
      caption: "Захищений канал команд по мережі.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two tin cans connected by glowing string tunnel between laptop and Pi, realistic props bright studio, SSH metaphor",
    },
    {
      type: "h2",
      text: "Спочатку ідея — потім команда",
    },
    {
      type: "text",
      text: "Уяви **дві банки зі шнурком** крізь стіну.",
    },
    {
      type: "text",
      text: "Ти шепочеш в одну — друг чує в іншій. **Без** того, щоб бігти в сусідню кімнату.",
    },
    {
      type: "text",
      text: "Так працює **SSH**: твій ноутбук — одна банка, Pi в іншій кімнаті — друга. Формула проста:",
    },
    {
      type: "text",
      text: "**користувач** @ **адреса Pi**",
    },
    {
      type: "code",
      text: "# Підключитися до Pi по мережі\npi@raspberrypi:~$ ssh pi@192.168.1.42\n\n# 192.168.1.42 — приклад! Підстав свою адресу з ip a\n# Після входу ти «на Pi», навіть якщо сидиш за ноутбуком",
    },
    {
      type: "text",
      text: "Спочатку ім’я користувача, потім **`@`**, потім адреса хоста.",
    },
    {
      type: "text",
      text: "Цифри — **приклад**. Підстав адресу, яку побачив раніше в `ip a`.",
    },
    {
      type: "text",
      text: "Для цього потрібно: **мережа між пристроями** і **увімкнений SSH на Pi** (разом із дорослим).",
    },
    {
      type: "image",
      src: "nf16-c",
      alt: "Headless Pi",
      caption: "Сервер без монітора керують через SSH.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi without monitor, only power and Ethernet LEDs, laptop on desk showing SSH session blurred, bright",
    },
    {
      type: "h2",
      text: "Якщо «відмова з’єднання»",
    },
    {
      type: "text",
      text: "Іноді замість входу бачиш **Connection refused** — «відмовлено».",
    },
    {
      type: "text",
      text: "Не панікуй. Це не означає «плату на смітник».",
    },
    {
      type: "text",
      text: "Часто означає одне з трьох:",
    },
    {
      type: "ul",
      items: [
        "На Pi **не увімкнений** SSH‑сервіс",
        "**Неправильна адреса** — перевір ip a",
        "Пристрої **не в одній мережі** — перевір Wi‑Fi",
      ],
    },
    {
      type: "think",
      id: "q2",
      question: "Для SSH потрібна…",
      options: [
        { id: "a", text: "мережа між пристроями" },
        { id: "b", text: "лише наклейка на корпусі" },
        { id: "c", text: "обов’язково тостер" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Без мережі «трубка» не з’єднається. Спочатку перевір адресу й шлях.",
    },
    {
      type: "h2",
      text: "Важливе правило доброго адміна",
    },
    {
      type: "text",
      text: "SSH — потужний інструмент. Як ключ від усіх дверей.",
    },
    {
      type: "text",
      text: "Слабкий пароль і відкритий доступ в увесь інтернет — запрошення для зловмисників.",
    },
    {
      type: "text",
      text: "Для навчання: **домашня мережа**, **сильний пароль**, **разом із дорослим**.",
    },
    {
      type: "fact",
      title: "Безпека",
      text: "Headless Pi — Pi без монітора. Саме так працюють сервери: маленький, тихий, керований віддалено.",
    },
    {
      type: "image",
      src: "nf16-d",
      alt: "Безпечний доступ",
      caption: "Сильна автентифікація — частина роботи адміна.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Strong padlock on network cable metaphor, SSH key USB dongle on bright desk, security without fear mood",
    },
    {
      type: "try",
      title: "🔍 Дослідження: трубка через стіну",
      body: "Це полювання за першим віддаленим входом.",
      checklist: [
        "Дізнайся адресу Pi (`ip a`) — запиши її",
        "Разом із дорослим увімкни SSH у налаштуваннях Raspberry Pi OS",
        "З іншого комп’ютера в тій самій мережі спробуй `ssh користувач@IP`",
        "Якщо відмова — перевір: сервіс, адресу, мережу",
        "Якщо вийшло — введи `pwd` на Pi і переконайся, що ти «там»",
        "Запиши в щоденник: що допомогло або що завадило",
      ],
      footer: "Навіть невдала спроба вчить діагностиці.",
    },
    {
      type: "draw",
      text: "Намалюй ноутбук і Pi в різних кімнатах. Між ними — тунель SSH.",
    },
    {
      type: "diary",
      lines: [
        "Навіщо тобі SSH особисто?",
        "Яку адресу має твій Pi?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Пароль 1234 і відкритий інтернет — нормально.",
          truth: "Потрібні сильні паролі/ключі й обережний доступ.",
        },
        {
          title: "Помилка №2",
          myth: "SSH працює без мережі.",
          truth: "Потрібен шлях між пристроями.",
        },
        {
          title: "Помилка №3",
          myth: "Connection refused = викидай плату.",
          truth: "Спочатку сервіс, адреса, мережа.",
        },
      ],
    },
    {
      type: "text",
      text: "Тепер ти вмієш **заходити на Pi з іншої кімнати** — без HDMI через всю квартиру.",
    },
    {
      type: "text",
      text: "Але навіщо взагалі тримати комп’ютер увімкненим без монітора?",
    },
    {
      type: "text",
      text: "Бо він може **обслуговувати інших**. Далі — хто такий сервер і навіщо він потрібен.",
    },
  ],
  remember: [
    "SSH — захищена «трубка» через мережу",
    "Форма: ssh user@host",
    "Потрібна мережа й увімкнений сервіс",
    "Безпека паролів важлива",
    "Headless — Pi без монітора, керований віддалено",
  ],
  commands: [
    { cmd: "ssh user@host", does: "Відкриває SSH‑сесію" },
  ],
  glossary: [
    {
      term: "SSH",
      def: "Протокол захищеного віддаленого доступу до термінала.",
    },
    {
      term: "Хост",
      def: "Комп’ютер, до якого підключаються.",
    },
    {
      term: "Headless",
      def: "Комп’ютер без монітора, керований віддалено.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "SSH потрібен, щоб…",
      options: [
        "керувати на відстані",
        "варити чай",
        "малювати HDMI",
      ],
      answer: 0,
      hint: "Secure Shell",
      explanation: "Захищений віддалений термінал.",
    },
    {
      type: "tf",
      text: "Для SSH потрібна мережа.",
      answer: true,
      hint: "Шлях між пристроями",
      explanation: "Так.",
    },
    {
      type: "fill",
      prompt: "Команда початку SSH‑сесії:",
      answer: "ssh",
      hint: "3 літери",
      explanation: "ssh user@host.",
    },
    {
      type: "whatif",
      prompt: "Connection refused — що перевірити?",
      hint: "Ніхто не слухає?",
      explanation: "Сервіс/адреса/мережа.",
      sample: "SSH‑сервіс, IP, мережу",
      optional: true,
    },
    {
      type: "error",
      prompt: "«Пароль 1234 і відкритий інтернет — ок»",
      hint: "Безпека",
      explanation: "Сильна автентифікація потрібна.",
      sample: "Небезпечно.",
      optional: true,
    },
  ],
  next: 17,
};
