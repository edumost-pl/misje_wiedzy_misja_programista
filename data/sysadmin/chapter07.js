window.CHAPTER_07 = {
  id: 7,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Навігація папками",
  icon: "folder",
  learn: [
    "Що таке поточна папка",
    "Як переходити командою cd",
    "Що робити, якщо «загубився» у системі",
  ],
  content: [
    {
      type: "text",
      text: "Друг чекає на запрошення. А ти навіть не знаєш, **де** на Pi лежить майбутній проєкт.",
    },
    {
      type: "text",
      text: "Ти в великому торговому центрі.",
    },
    {
      type: "text",
      text: "Зараз ти біля фонтану.",
    },
    {
      type: "text",
      text: "Хочеш потрапити в магазин іграшок — але стоїш на місці.",
    },
    {
      type: "text",
      text: "Треба **піти** в інший коридор.",
    },
    {
      type: "text",
      text: "У комп’ютері так само. Ти завжди «стоїш» у якійсь **папці** — це твоя поточна кімната. Щоб потрапити в іншу — треба **перейти**.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«А навіщо ходити, якщо можна просто дивитися списком?»*",
    },
    {
      type: "text",
      text: "Бо багато справ адміна — саме **в конкретній папці**: створити файл тут, перевірити щось там. Без руху — без дії.",
    },
    {
      type: "image",
      src: "nf07-a",
      alt: "Дерево папок як будинок із кімнатами.",
      caption: "Папки вкладені одна в одну, як кімнати й шафи.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic dollhouse cutaway with nested rooms labeled by folder icons instead of words, bright interior lighting, doors between rooms",
    },
    {
      type: "h2",
      text: "Крок у сусідню кімнату",
    },
    {
      type: "text",
      text: "Уяви коридор із табличками на дверях: «Документи», «Музика», «Проєкт».",
    },
    {
      type: "text",
      text: "Ти стоїш біля однієї дверей — і хочеш у сусідню. Треба **переступити поріг**.",
    },
    {
      type: "text",
      text: "У терміналі це одне коротке слово: **cd** (change directory — «зміни кімнату»).",
    },
    {
      type: "text",
      text: "Після кроку знову `pwd` і `ls`: місце змінилось — і список на стіні теж.",
    },
    {
      type: "text",
      text: "Тепер — спробуй сам.",
    },
    {
      type: "code",
      text: "# Перейти в папку Documents\npi@raspberrypi:~$ cd Documents\n\n# Перевірити, де ти тепер\npi@raspberrypi:~/Documents$ pwd\n\n# Приклад відповіді\n/home/pi/Documents",
    },
    {
      type: "text",
      text: "Зверни увагу: у запрошенні **~** змінився на **~/Documents**. Система підказує, де ти стоїш.",
    },
    {
      type: "think",
      id: "q1",
      question: "Команда cd потрібна, щоб…",
      options: [
        { id: "a", text: "змінити поточну папку" },
        { id: "b", text: "намалювати картинку" },
        { id: "c", text: "вимкнути інтернет" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "**cd** змінює теку, у якій ти «стоїш». Це основа навігації.",
    },
    {
      type: "h2",
      text: "Сходи на поверх вище",
    },
    {
      type: "text",
      text: "Уяви, що зайшов у шафу всередині шафи.",
    },
    {
      type: "text",
      text: "Треба вийти назад — на рівень вище.",
    },
    {
      type: "text",
      text: "Дві крапки **`..`** означають: «батьківська папка» — кімната поверхом вище. Це рятівна команда, коли зайшов надто глибоко.",
    },
    {
      type: "code",
      text: "# Піднятися на один рівень вище\npi@raspberrypi:~/Documents$ cd ..\n\n# Де ти тепер?\npi@raspberrypi:~$ pwd\n\n# Приклад відповіді\n/home/pi",
    },
    {
      type: "image",
      src: "nf07-b",
      alt: "Стрілка вгору до батьківської папки.",
      caption: "cd .. піднімає на один рівень.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal with cd .. command typed, folder path changing visualized in blurred text, bright screen",
    },
    {
      type: "h2",
      text: "Швидко додому",
    },
    {
      type: "text",
      text: "Уяви, що заблукав у незнайомому районі.",
    },
    {
      type: "text",
      text: "Найпростіше — повернутися **додому**.",
    },
    {
      type: "text",
      text: "Домашня папка — твоя «квартира» в системі (`/home/pi`). Швидке повернення:",
    },
    {
      type: "code",
      text: "# Повернутися додому (два зручні способи)\npi@raspberrypi:~/Documents$ cd ~\n\n# Або просто:\npi@raspberrypi:~/Documents$ cd\n\npi@raspberrypi:~$ pwd\n/home/pi",
    },
    {
      type: "text",
      text: "Обидва варіанти часто ведуть додому. Зручно після довгих блукань.",
    },
    {
      type: "h2",
      text: "Загубився? Ритуал адміна",
    },
    {
      type: "text",
      text: "Уяви, що в темному лабіринті втратив орієнтири.",
    },
    {
      type: "text",
      text: "Не бігти навмання. Спочатку — **зупинись і подивись**.",
    },
    {
      type: "ul",
      items: [
        "1. `pwd` — де я?",
        "2. `ls` — що навколо?",
        "3. `cd ..` або `cd ~` — вийти на зрозуміле місце",
      ],
    },
    {
      type: "code",
      text: "# Ритуал орієнтації\npi@raspberrypi:~/Downloads/tmp$ pwd\n/home/pi/Downloads/tmp\npi@raspberrypi:~/Downloads/tmp$ ls\npi@raspberrypi:~/Downloads/tmp$ cd ~\npi@raspberrypi:~$",
    },
    {
      type: "image",
      src: "nf07-c",
      alt: "Компас у файловій системі.",
      caption: "Не панікуй — орієнтуйся командами.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child looking at monitor with terminal, relaxed posture, sticky note with drawn folder tree beside keyboard, encouraging bright study nook",
    },
    {
      type: "think",
      id: "q2",
      question: "cd і ls — це одне й те саме?",
      options: [
        { id: "a", text: "Так, повністю" },
        { id: "b", text: "Ні: cd ходить, ls дивиться" },
        { id: "c", text: "Так, якщо натиснути двічі" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Різні ролі: **cd** змінює місце, **ls** показує вміст. Часто працюють у парі.",
    },
    {
      type: "image",
      src: "nf07-d",
      alt: "Шлях по дереву папок.",
      caption: "Дерево каталогів — карта твоїх переходів.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic 3D tree diagram of nested folders as branches, root at top, bright white background, clean shadows",
    },
    {
      type: "h2",
      text: "Жива прогулянка в терміналі",
    },
    {
      type: "text",
      text: "Ось як виглядає справжня розмова з системою: дивишся (`ls`), заходиш (`cd`), створюєш кімнату (`mkdir`), піднімаєшся (`cd ..`). Це **репетиція** перед папкою `mii-svit` — її збудуємо в наступному розділі. Якщо папки `test` ще немає — спочатку виконай підготовку в блоці нижче.",
    },
    {
      type: "code",
      text: "# Підготовка (один раз): навчальна папка test з кімнатами 1 і 2\npi@raspberrypi:~$ mkdir test\npi@raspberrypi:~$ cd test\npi@raspberrypi:~/test$ mkdir 1\npi@raspberrypi:~/test$ mkdir 2\npi@raspberrypi:~/test$ cd ~\n\n# —— Жива прогулянка (повтори точно так) ——\npi@raspberrypi:~$ ls\nDesktop  Documents  Downloads  Music  Pictures  Public  test\npi@raspberrypi:~$ cd test\npi@raspberrypi:~/test$ ls\n1  2\npi@raspberrypi:~/test$ cd 1\npi@raspberrypi:~/test/1$ ls\npi@raspberrypi:~/test/1$ mkdir test1\npi@raspberrypi:~/test/1$ ls\ntest1\npi@raspberrypi:~/test/1$ cd ..\npi@raspberrypi:~/test$ ls\n1  2",
    },
    {
      type: "text",
      text: "Читай запрошення зліва направо: після `cd test` шлях став `~/test`, після `cd 1` — `~/test/1`, після `cd ..` — знову `~/test`. Команда `mkdir` тут лише коротка практика; глибше про неї — у наступному розділі.",
    },
    {
      type: "try",
      title: "🔍 Дослідження: прогулянка папками",
      body: "Відкрий термінал і зроби той самий маршрут. Після кожного кроку запитай себе: де я зараз?",
      checklist: [
        "Підготовка: `mkdir test`, зайди всередину, `mkdir 1`, `mkdir 2`, потім `cd ~`",
        "`ls` — чи видно `test`?",
        "`cd test` → `ls` (має бути `1` і `2`)",
        "`cd 1` → `ls` (поки порожньо?)",
        "`mkdir test1` → `ls` (з’явилась `test1`?)",
        "`cd ..` → `ls` (знову `1` і `2`?)",
        "Запиши в щоденник: що змінилось у запрошенні після `cd`?",
      ],
      footer: "Ти керуєш рухом. Система лише виконує.",
    },
    {
      type: "draw",
      text: "Намалюй дерево: /home/pi → test → 1 → test1 (і стрілки cd / cd ..).",
    },
    {
      type: "diary",
      lines: [
        "У якій папці ти зараз найчастіше «живеш»?",
        "Що зробиш першим, якщо знову загубишся?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "cd і ls — одне й те саме.",
          truth: "cd змінює місце. ls показує вміст.",
        },
        {
          title: "Помилка №2",
          myth: "Якщо шлях довгий — значить, усе зламалось.",
          truth: "Довгий шлях нормальний. Читай його зліва направо, як адресу.",
        },
        {
          title: "Помилка №3",
          myth: "Загубився — краще вимкнути Pi.",
          truth: "Спочатку pwd, ls, cd .. або cd ~. Вимикання — зайве.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти вмієш ходити кімнатами.",
    },
    {
      type: "text",
      text: "Проєкт «Мій світ», **розділ 3**. Час збудувати **справжню** папку для майбутнього сервера — не тренувальну `test`, а `mii-svit`.",
    },
    {
      type: "text",
      text: "А що, якщо потрібна **нова** кімната — якої ще немає?",
    },
    {
      type: "text",
      text: "Далі — будівництво папок.",
    },
  ],
  remember: [
    "Поточна папка — де ти стоїш",
    "cd — перейти",
    "cd .. — вище",
    "cd ~ — додому (/home/pi)",
    "Загубився: pwd → ls → cd .. / cd ~",
  ],
  commands: [
    { cmd: "cd ім’я", does: "Перейти в папку" },
    { cmd: "cd ..", does: "Піднятися на рівень вище" },
    { cmd: "cd ~", does: "Повернутися додому" },
    { cmd: "pwd", does: "Показати, де ти" },
  ],
  glossary: [
    {
      term: "Поточна папка",
      def: "Каталог, у якому ти зараз перебуваєш у терміналі.",
    },
    { term: "cd", def: "Команда зміни поточної папки." },
    { term: "Батьківська папка", def: "Каталог на рівень вище (cd ..)." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Команда cd потрібна, щоб…",
      options: [
        "змінити поточну папку",
        "намалювати картинку",
        "вимкнути інтернет",
      ],
      answer: 0,
      hint: "change directory.",
      explanation: "cd переміщує тебе в іншу теку.",
    },
    {
      type: "tf",
      text: "cd .. піднімає на рівень вище.",
      answer: true,
      hint: "Дві крапки = батьківська папка.",
      explanation: "Так. cd .. йде вгору по дереву.",
    },
    {
      type: "fill",
      prompt: "Якою командою перевірити, де ти зараз?",
      answer: "pwd",
      hint: "З розділу про термінал.",
      explanation: "pwd показує повний шлях поточної папки.",
    },
    {
      type: "whatif",
      prompt: "Після кількох cd ти загубився. Що робити?",
      hint: "Ритуал орієнтації.",
      explanation: "Спочатку дізнайся місце, потім виходь на зрозумілий рівень.",
      sample: "pwd, потім ls, потім cd .. або cd ~.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Знайди помилку: «cd і ls — одне й те саме».",
      hint: "Рух проти огляду.",
      explanation: "Різні команди з різними ролями.",
      sample: "cd ходить, ls дивиться.",
      optional: true,
    },
  ],
  next: 8,
};
