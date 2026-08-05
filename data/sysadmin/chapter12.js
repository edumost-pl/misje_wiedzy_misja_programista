window.CHAPTER_12 = {
  id: 12,
  bookId: "sysadmin",
  part: 3,
  partTitle: "Системний адміністратор",
  title: "Права доступу",
  icon: "search",
  learn: [
    "Що означають права читати / писати / запускати",
    "Як побачити права командою ls -l",
    "Що таке sudo і коли його обережно використовувати",
  ],
  content: [
    {
      type: "text",
      text: "Ти підходиш до дверей у школі.",
    },
    {
      type: "text",
      text: "Тягнеш ручку — **замок**. Не відчиняється.",
    },
    {
      type: "text",
      text: "На табличці: «Лише для вчителів».",
    },
    {
      type: "text",
      text: "Стоп. **Хто що може робити з файлом?** Чому термінал іноді каже **Permission denied**?",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Linux зламався! Чому не пускає?»*",
    },
    {
      type: "text",
      text: "Ні. Це не поломка. Це **захист** — як замок на дверях. У системі є **права доступу**: хто може **читати**, **писати** чи **запускати** файл.",
    },
    {
      type: "image",
      src: "nf12-a",
      alt: "Замок на дверях — права доступу",
      caption: "Різні ключі — різні двері.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Three different keys on light wooden board each matching different colored door locks, sharp product photo",
    },
    {
      type: "h2",
      text: "Три замочки на кожних дверях",
    },
    {
      type: "text",
      text: "Уяви, що на кожному файлі — **три маленькі замочки**.",
    },
    {
      type: "text",
      text: "Один — «можна **читати**» (r). Другий — «можна **писати / змінювати**» (w). Третій — «можна **запускати**» (x).",
    },
    {
      type: "text",
      text: "Замочки стоять у **трьох групах**: для **власника** файлу, для **групи** і для **інших**.",
    },
    {
      type: "text",
      text: "Тому рядок прав виглядає як загадка з дев’яти літер — три групи по три.",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Папка з правом x — це «можна заходити всередину». Без x папка як кімната з замком: бачиш назву, але не зайдеш.",
    },
    {
      type: "h2",
      text: "Лупа на замки",
    },
    {
      type: "text",
      text: "Уяви сейф із трьома замками на кожній шухляді.",
    },
    {
      type: "text",
      text: "Звичайний `ls` показує лише **наклейку** «Шухляда №3». А хто має ключ — не видно.",
    },
    {
      type: "text",
      text: "Додай **`-l`** — і з’являється **лупа**: r, w, x — хто може читати, писати, заходити всередину.",
    },
    {
      type: "code",
      text: "# Докладний список файлів із правами\npi@raspberrypi:~$ ls -l\n\n# Приклад рядка (скорочено)\n-rw-r--r-- 1 pi pi 120 Mar 10 18:01 notes.txt\ndrwxr-xr-x 2 pi pi 4096 Mar 10 18:02 projects",
    },
    {
      type: "text",
      text: "На початку рядка — «код замка». Літери означають:",
    },
    {
      type: "ul",
      items: [
        "**r** — read (читати)",
        "**w** — write (писати / змінювати)",
        "**x** — execute (запускати / заходити в папку)",
        "**`-`** — цього права немає",
      ],
    },
    {
      type: "think",
      id: "q1",
      question: "Права доступу визначають…",
      options: [
        { id: "a", text: "хто що може робити з файлом" },
        { id: "b", text: "колір корпуса Pi" },
        { id: "c", text: "довжину HDMI‑кабеля" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: хто читає, пише, виконує — як хто має ключ від яких дверей.",
    },
    {
      type: "image",
      src: "nf12-b",
      alt: "ls -l у терміналі",
      caption: "ls -l — довгий список із «кодами замків».",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal ls -l output with permission string rwx blurred but shape visible, bright terminal, magnifying glass prop on desk",
    },
    {
      type: "h2",
      text: "Permission denied — замок спрацював",
    },
    {
      type: "text",
      text: "Якщо ти спробуєш змінити файл, до якого немає права писати, система відповість **Permission denied**.",
    },
    {
      type: "text",
      text: "Це означає: «**У тебе немає ключа** від цих дверей». Не ламай — зрозумій.",
    },
    {
      type: "code",
      text: "# Приклад: немає дозволу (не повторюй навмання з системними файлами!)\npi@raspberrypi:~$ cat /etc/shadow\ncat: /etc/shadow: Permission denied",
    },
    {
      type: "image",
      src: "nf12-c",
      alt: "Permission denied",
      caption: "Замок спрацював — система охороняє важливе.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal error message Permission denied line blurred, red text suggested without readable words, bright screen not dark hacker style",
    },
    {
      type: "h2",
      text: "Ключ майстра: sudo",
    },
    {
      type: "text",
      text: "Уяви: тобі 10 років. Двері в електрощитову **зачинені на ключ**.",
    },
    {
      type: "text",
      text: "Але поруч стоїть **дорослий майстер**. Ти просиш: «Відкрий на хвилинку — треба оновити систему».",
    },
    {
      type: "text",
      text: "У Linux такий «ключ майстра на одну справу» називається **sudo** — superuser do.",
    },
    {
      type: "text",
      text: "Взяв → зробив **одну** команду → ключ повернув. Не носи його завжди в кишені.",
    },
    {
      type: "code",
      text: "# Формат: sudo + звичайна команда\npi@raspberrypi:~$ sudo apt update\n\n# Система може попросити пароль користувача pi\n# [sudo] password for pi:\n# (коли друкуєш пароль — символи часто не видно. Це нормально.)",
    },
    {
      type: "text",
      text: "На Raspberry Pi користувач `pi` часто має право користуватися `sudo`. Після правильного пароля команда виконується з правами адміністратора — **лише ця одна команда**.",
    },
    {
      type: "ul",
      items: [
        "✅ **Коли можна:** оновлення системи, встановлення пакета за інструкцією, дія, яку ти розумієш",
        "⛔ **Коли не можна:** «просто так», невідома команда з інтернету, експерименти з `rm` і системними папками",
      ],
    },
    {
      type: "think",
      id: "q2",
      question: "sudo потрібен, щоб…",
      options: [
        { id: "a", text: "обережно виконати одну команду з правами адміністратора" },
        { id: "b", text: "змінити колір шпалер назавжди" },
        { id: "c", text: "вимкнути Enter" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "**sudo** дає права адміністратора на **одну** команду. Після неї ти знову звичайний користувач.",
    },
    {
      type: "code",
      text: "# Оновити список доступних програм (потрібен інтернет)\npi@raspberrypi:~$ sudo apt update\n\n# Якщо все добре — побачиш рядки про завантаження списків\n# Hit:1 http://… InRelease\n# Reading package lists... Done",
    },
    {
      type: "fact",
      title: "Ключ майстра",
      text: "sudo — як взяти ключ від серверної кімнати на одну хвилину. Взяв → зробив справу → ключ повернув.",
    },
    {
      type: "image",
      src: "nf12-d",
      alt: "sudo — ключ майстра",
      caption: "sudo — сильний інструмент. Сила потребує уваги.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Master key on keyring separate from regular house keys, bright macro, adult supervision mood, responsible tool",
    },
    {
      type: "try",
      title: "🔍 Дослідження: замочки й ключі",
      body: "Подивись на права своїх файлів — без небезпечних експериментів.",
      checklist: [
        "Відкрий термінал",
        "`ls -l` у домашній папці — знайди літери r, w, x",
        "Порівняй рядок звичайного файлу й папки (папка часто починається з `d`)",
        "Прочитай уголос: «sudo роблю лише коли розумію навіщо»",
        "Якщо з дорослим можна: `sudo apt update` — і подивись, що відповіла система",
        "Запиши в щоденник: що означає Permission denied твоїми словами?",
      ],
      footer: "Не експериментуй із sudo rm і системними шляхами.",
    },
    {
      type: "draw",
      text: "Намалюй три замочки: власник / група / інші. Підпиши r, w, x.",
    },
    {
      type: "diary",
      lines: [
        "Що означає Permission denied твоїми словами?",
        "Коли б ти попросив допомогу дорослого перед sudo?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Завжди працюй через sudo — так простіше.",
          truth: "sudo лише коли треба. Зайві права = більший ризик.",
        },
        {
          title: "Помилка №2",
          myth: "Permission denied означає, що Linux зламався.",
          truth: "Часто це просто захист прав — замок спрацював.",
        },
        {
          title: "Помилка №3",
          myth: "sudo робить тебе адміністратором назавжди.",
          truth: "Права підвищуються лише для однієї команди.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти вже знаєш, хто ти в системі і які в тебе ключі. Далі подивимось, **які програми зараз біжать** — процеси.",
    },
  ],
  remember: [
    "ls -l показує права доступу",
    "r / w / x — читати / писати / запускати",
    "Permission denied — часто захист, не поломка",
    "sudo — виконати одну команду як адміністратор",
    "sudo лише коли розумієш навіщо",
  ],
  commands: [
    { cmd: "ls -l", does: "Докладний список із правами" },
    { cmd: "sudo команда", does: "Виконати як адміністратор (обережно)" },
    { cmd: "sudo apt update", does: "Оновити списки пакетів (приклад)" },
  ],
  glossary: [
    {
      term: "Права доступу",
      def: "Правила, хто що може робити з файлом чи папкою.",
    },
    {
      term: "sudo",
      def: "Команда «зроби як суперкористувач» — права адміна на одну дію.",
    },
    {
      term: "Суперкористувач",
      def: "Адміністратор системи з найвищими правами (часто root).",
    },
    { term: "ls -l", def: "Довгий список файлів із правами." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Права доступу визначають…",
      options: [
        "хто що може робити з файлом",
        "колір корпуса",
        "довжину HDMI",
      ],
      answer: 0,
      hint: "Замки на дверях файлів.",
      explanation: "Так: хто читає, пише, виконує.",
    },
    {
      type: "tf",
      text: "sudo підвищує права лише для однієї команди.",
      answer: true,
      hint: "Не назавжди.",
      explanation: "Після команди ти знову звичайний користувач.",
    },
    {
      type: "fill",
      prompt: "Команда докладного списку з правами:",
      answer: "ls -l",
      hint: "ls і літера «довго».",
      explanation: "ls -l показує права, власника, розмір.",
    },
    {
      type: "whatif",
      prompt: "Побачив Permission denied. Що подумати першим?",
      hint: "Це часто замок, не аварія.",
      explanation: "Спочатку зрозумій повідомлення, потім вирішуй, чи потрібен sudo.",
      sample: "Можливо, немає прав. Не ламай систему — зрозумій захист.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Знайди помилку: «Завжди пиши sudo перед будь‑якою командою».",
      hint: "Сила ≠ звичка навмання.",
      explanation: "Зайві права небезпечні.",
      sample: "sudo лише коли треба і коли розумієш дію.",
      optional: true,
    },
  ],
  next: 13,
};
