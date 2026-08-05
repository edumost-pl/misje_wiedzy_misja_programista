window.CHAPTER_08 = {
  id: 8,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Створення папок",
  icon: "folder",
  learn: [
    "Навіщо потрібен лад у папках",
    "Як створити папку командою mkdir і перевірити ls",
    "Що буде, якщо таке ім’я вже існує",
  ],
  content: [
    {
      type: "text",
      text: "Проєкт «Мій світ», **розділ 3**. Ти вже вмієш ходити папками — а де **зберігати** майбутній сервер?",
    },
    {
      type: "text",
      text: "Ти шукаєш конспект з математики.",
    },
    {
      type: "text",
      text: "Він десь на столі. Під підручником? У шкафчику? За подушкою?",
    },
    {
      type: "text",
      text: "Усе звалено в **одну купу**.",
    },
    {
      type: "text",
      text: "Стоп. Як і навіщо створювати **лад** — окремі «полиці» для речей?",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Навіщо папки? Можна ж звалити все в одне місце»*.",
    },
    {
      type: "text",
      text: "Можна. Але через тиждень ти не знайдеш ні нотаток, ні проєкту. Добрий адміністратор любить **лад**.",
    },
    {
      type: "image",
      src: "nf08-a",
      alt: "Охайні папки замість хаосу",
      caption: "Папки — полиці для ідей і проєктів.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. White IKEA-style shelf with empty labeled boxes ready for projects, bright Scandinavian room, metaphor for mkdir",
    },
    {
      type: "h2",
      text: "Шафа з полицями",
    },
    {
      type: "text",
      text: "Уяви шафу в кімнаті.",
    },
    {
      type: "text",
      text: "На одній полиці — книги. На іншій — зошити. На третій — іграшки.",
    },
    {
      type: "text",
      text: "Ти не плутаєш підручник з конструктором, бо **кожна річ має своє місце**.",
    },
    {
      type: "text",
      text: "У комп’ютері так само. Папки — це **полиці всередині диска**. Файли лежать на полицях, а не в одній купі.",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Одна велика «купа» файлів на диску — як стіл без шухляд. Через місяць навіть ти сам не згадаєш, що де.",
    },
    {
      type: "h2",
      text: "Спочатку ідея — потім команда",
    },
    {
      type: "text",
      text: "Уяви: купив шафу в коробці. Деталі на підлозі. А **полиці** ще немає — їх треба **зібрати**.",
    },
    {
      type: "text",
      text: "У терміналі «зібрати полицю» — одне коротке слово: **mkdir**. «Зроби каталог».",
    },
    {
      type: "text",
      text: "Головне — дати зрозуміле ім’я. Після створення завжди перевір через `ls`.",
    },
    {
      type: "code",
      text: "# Створити нову папку projects\npi@raspberrypi:~$ mkdir projects\n\n# Перевірити, чи вона з’явилась\npi@raspberrypi:~$ ls\n\n# Приклад відповіді\nDesktop  Documents  Downloads  projects",
    },
    {
      type: "text",
      text: "Зробив — перевірив. Це ритуал адміна.",
    },
    {
      type: "think",
      id: "q1",
      question: "Команда mkdir створює…",
      options: [
        { id: "a", text: "нову папку" },
        { id: "b", text: "новий HDMI‑кабель" },
        { id: "c", text: "пароль Wi‑Fi" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: **нову папку (каталог)** — нову «полицю» на диску.",
    },
    {
      type: "h2",
      text: "Імена зі змістом",
    },
    {
      type: "text",
      text: "Краще `linux-notes`, ніж `aaa1`. Назва — підказка **майбутньому тобі**.",
    },
    {
      type: "ul",
      items: [
        "📁 `projects` — усі проєкти",
        "📁 `school` — шкільні справи",
        "📁 `minecraft-server` — місце під майбутній сервер гри (поки лише назва папки)",
      ],
    },
    {
      type: "image",
      src: "nf08-b",
      alt: "Дерево папок як полиці",
      caption: "Спочатку батьківська полиця, потім вкладені.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Nested transparent folders on bright desk, parent folder large, child folders inside, realistic 3D render",
    },
    {
      type: "h2",
      text: "Полиця всередині полиці",
    },
    {
      type: "text",
      text: "Іноді потрібна **велика шафа**, а всередині — менші полиці.",
    },
    {
      type: "text",
      text: "Спочатку створи батьківську папку, зайди в неї (`cd`), потім створи вкладені.",
    },
    {
      type: "code",
      text: "# Збудувати «кімнату» для проєкту «Мій світ»\npi@raspberrypi:~$ mkdir mii-svit\npi@raspberrypi:~$ cd mii-svit\npi@raspberrypi:~/mii-svit$ mkdir notes\npi@raspberrypi:~/mii-svit$ ls\n\n# Приклад відповіді\nnotes",
    },
    {
      type: "think",
      id: "q2",
      question: "Що буде, якщо mkdir mii-svit, а папка вже є?",
      options: [
        { id: "a", text: "Створиться друга з тим самим ім’ям" },
        { id: "b", text: "З’явиться повідомлення, що каталог уже існує" },
        { id: "c", text: "Видаляться всі файли" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "У одному місці не може бути двох однакових імен. Система повідомить, що каталог уже є.",
    },
    {
      type: "code",
      text: "# Якщо папка вже існує\npi@raspberrypi:~$ mkdir mii-svit\nmkdir: cannot create directory ‘mii-svit’: File exists",
    },
    {
      type: "image",
      src: "nf08-c",
      alt: "mkdir у терміналі",
      caption: "Ім’я папки — одразу після mkdir.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal split concept: mkdir command then ls listing new folder name blurred, bright terminal theme",
    },
    {
      type: "fact",
      title: "Пробіли",
      text: "Ім’я з пробілом незручне в терміналі. Краще `my-project` або `my_project`.",
    },
    {
      type: "image",
      src: "nf08-d",
      alt: "Охайна структура папок",
      caption: "Лад сьогодні — швидкість завтра.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Desk with notebook titled project sketch, Pi showing terminal, tidy organized workspace, hopeful bright mood",
    },
    {
      type: "try",
      title: "🔍 Дослідження: збудуй mii-svit",
      body: "Це не «просто введи команду». Це третій крок проєкту «Мій світ» — дім для майбутнього сервера.",
      checklist: [
        "Відкрий термінал",
        "У домашній папці (`cd ~`) введи `mkdir mii-svit`",
        "`ls` — чи видно mii-svit?",
        "`cd mii-svit`",
        "`mkdir notes` і `mkdir backups`",
        "`ls` знову — скільки папок?",
        "`pwd` — шлях має містити mii-svit",
        "Запиши в щоденник: чому ти обрав саме такі назви",
      ],
      footer: "Структура готова. Далі — файли всередині.",
    },
    {
      type: "draw",
      text: "Намалюй план: /home/pi → projects → week1. Підпиши кожну «полицю».",
    },
    {
      type: "diary",
      lines: [
        "Які 3 назви папок обереш для навчання?",
        "Чи перевірив результат через ls?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "mkdir видаляє старі папки автоматично.",
          truth: "mkdir лише створює. Видалення — інші команди.",
        },
        {
          title: "Помилка №2",
          myth: "Можна не перевіряти ls.",
          truth: "Зробив — перевірив. Звичка адміна.",
        },
        {
          title: "Помилка №3",
          myth: "Назви xxx і 111 — нормально.",
          truth: "Через місяць сам не згадаєш. Давай імена зі змістом.",
        },
      ],
    },
    {
      type: "text",
      text: "Тепер у тебе є полиці в `mii-svit`. Час покласти на них **файли** — створити, прочитати, скопіювати й дуже обережно видалити.",
    },
  ],
  remember: [
    "mkdir створює папку",
    "ls перевіряє результат",
    "Зрозумілі імена важливі",
    "Дубль імені = помилка",
  ],
  commands: [
    { cmd: "mkdir ім’я", does: "Створює нову папку" },
    { cmd: "ls", does: "Показує, чи папка з’явилась" },
  ],
  glossary: [
    { term: "mkdir", def: "Команда створення каталогу (папки)." },
    { term: "Каталог", def: "Інша назва папки у файловій системі." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Команда mkdir створює…",
      options: [
        "нову папку",
        "новий HDMI",
        "пароль Wi‑Fi",
      ],
      answer: 0,
      hint: "make directory.",
      explanation: "mkdir створює новий каталог.",
    },
    {
      type: "tf",
      text: "Після mkdir варто перевірити результат командою ls.",
      answer: true,
      hint: "Ритуал адміна.",
      explanation: "Так. Зробив — перевірив.",
    },
    {
      type: "fill",
      prompt: "Команда, яка створить папку projects:",
      answer: "mkdir projects",
      hint: "mkdir + ім’я.",
      explanation: "mkdir projects створює каталог projects.",
    },
    {
      type: "whatif",
      prompt: "Що буде, якщо створити папку з іменем, яке вже є?",
      hint: "Два однакові імена?",
      explanation: "Система не створить дубль.",
      sample: "Помилка: каталог уже існує.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Знайди помилку: «mkdir видаляє старі папки».",
      hint: "Створення ≠ видалення.",
      explanation: "Для видалення — інші команди.",
      sample: "mkdir лише створює.",
      optional: true,
    },
  ],
  next: 9,
};
