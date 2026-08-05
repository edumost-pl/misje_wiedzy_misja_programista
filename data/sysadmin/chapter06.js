window.CHAPTER_06 = {
  id: 6,
  bookId: "sysadmin",
  part: 2,
  partTitle: "Linux",
  title: "Термінал",
  icon: "terminal",
  learn: [
    "Що таке термінал і рядок запрошення",
    "Команди pwd, ls і clear",
    "Як читати відповідь системи після Enter",
  ],
  content: [
    {
      type: "text",
      text: "Твій друг пише в чаті: «Коли в тебе вже буде **свій** світ у Minecraft? Хочу зайти!»",
    },
    {
      type: "text",
      text: "Щоб колись відповісти «заходь», треба вміти керувати Pi не лише мишею. На сервері часто немає іконок — лише **термінал**: ти пишеш коротке слово, система відповідає рядком.",
    },
    {
      type: "text",
      text: "У цій книзі ми збиратимемо проєкт **«Мій світ»** крок за кроком. Зараз — **розділ 1**: навчитися розмовляти текстом.",
    },
    {
      type: "fact",
      title: "Читай і без Pi",
      text: "Немає термінала під рукою? **Читай команди вголос**, уяви відповідь системи й запиши в щоденник. Так теж тренується мозок адміністратора.",
    },
    {
      type: "text",
      text: "Як мама на «де шкарпетки?» відповідає «у верхній шухляді» — так і ти будеш писати системі короткі команди. Без зайвих кнопок.",
    },
    {
      type: "text",
      text: "На робочому столі Pi багато іконок — натискаєш очима. Але є вікно, де комп’ютер розмовляє з тобою **текстом**: ти пишеш коротке слово — система відповідає рядком.",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Чорне вікно страшне. Навіщо воно, якщо є меню?»*",
    },
    {
      type: "text",
      text: "Бо адмін часто працює швидко, точно й навіть без красивого столу — наприклад, на віддаленому сервері. Це його основна мова.",
    },
    {
      type: "image",
      src: "nf06-a",
      alt: "Вікно термінала на екрані.",
      caption: "Ти пишеш команду — система відповідає текстом.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal window open on monitor, green on black replaced by light theme terminal with blurred command text, child's hands on keyboard, bright desk",
    },
    {
      type: "h2",
      text: "Листування з системою",
    },
    {
      type: "text",
      text: "Уяви чат.",
    },
    {
      type: "text",
      text: "Ти пишеш одне речення. Друг відповідає.",
    },
    {
      type: "text",
      text: "Так працює **термінал** — вікно для текстових команд.",
    },
    {
      type: "text",
      text: "1. Відкрий **Terminal**. 2. Побач **рядок запрошення**. 3. Набери команду. 4. Натисни **Enter**.",
    },
    {
      type: "text",
      text: "На Raspberry Pi OS запрошення часто виглядає так: `pi@raspberrypi:~$`. Тут **pi** — твоє ім’я в системі, **raspberrypi** — ім’я комп’ютера, **~** — «я вдома», **$** — «чекаю команду».",
    },
    {
      type: "text",
      text: "До Enter команда лише «набрана». Після Enter — виконана.",
    },
    {
      type: "think",
      id: "q1",
      question: "Після введення команди що потрібно натиснути?",
      options: [
        { id: "a", text: "Enter" },
        { id: "b", text: "кнопку живлення" },
        { id: "c", text: "HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: **Enter**. Живлення й HDMI тут ні до чого.",
    },
    {
      type: "h2",
      text: "Три перші «фрази»",
    },
    {
      type: "text",
      text: "Уяви: тебе завели в **чужий будинок** із зав’язаними очима.",
    },
    {
      type: "text",
      text: "Зав’язок зняли — і ти не знаєш, **у якій кімнаті** стоїш.",
    },
    {
      type: "text",
      text: "Перше питання будь-кого в такій ситуації: «**Де я?**»",
    },
    {
      type: "text",
      text: "У терміналі на це відповідає **pwd** — повна адреса, як на конверті: `/home/pi`.",
    },
    {
      type: "code",
      text: "# Показати поточну робочу теку\npi@raspberrypi:~$ pwd\n\n# Приклад відповіді\n/home/pi",
    },
    {
      type: "text",
      text: "Уяви: зайшов у будинок і питаєш «у якій я кімнаті?». `pwd` відповідає точно. `/home/pi` — твоя домашня папка на Pi.",
    },
    {
      type: "image",
      src: "nf06-b",
      alt: "Команда pwd у терміналі.",
      caption: "pwd = print working directory — надрукуй робочу теку.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal showing pwd command output path blurred, prompt line visible as shapes, sharp monitor bezel, daylight",
    },
    {
      type: "text",
      text: "Друге питання: «**Що тут навколо?**»",
    },
    {
      type: "text",
      text: "Ти відкриваєш шухляду — дивишся, що всередині. У терміналі так робить **ls**.",
    },
    {
      type: "code",
      text: "# Список файлів і папок у поточній теці\npi@raspberrypi:~$ ls\n\n# Приклад відповіді\nDesktop  Documents  Downloads  Music  Pictures  Videos",
    },
    {
      type: "text",
      text: "`pwd` каже **де** ти. `ls` каже **що** навколо.",
    },
    {
      type: "think",
      id: "q2",
      question: "Яка команда показує список файлів у поточній папці?",
      options: [
        { id: "a", text: "pwd" },
        { id: "b", text: "ls" },
        { id: "c", text: "clear" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "**ls** (list) — список. `pwd` — шлях. `clear` — очищення екрана.",
    },
    {
      type: "text",
      text: "Третє: термінал засипав старими рядками — як дошка, на якій не стерли крейду.",
    },
    {
      type: "text",
      text: "**clear** — «протерти скло». Файли лишаються. Зникає лише **видимий** безлад.",
    },
    {
      type: "code",
      text: "# Очистити видимий текст у вікні термінала\npi@raspberrypi:~$ clear\n\n# Після цього знову з’явиться лише запрошення\npi@raspberrypi:~$",
    },
    {
      type: "text",
      text: "Важливо: `clear` **не видаляє файли**. Лише прибирає текст з вікна.",
    },
    {
      type: "image",
      src: "nf06-c",
      alt: "Чистий екран термінала.",
      caption: "Чисто на екрані — файли на місці.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal after clear command, mostly empty bright terminal window, calm organized screen, Pi desk setup",
    },
    {
      type: "fact",
      title: "Точність важлива",
      text: "Для системи `ls` і `sl` — різні речі. Одна літера може змінити все. Термінал любить акуратність.",
    },
    {
      type: "image",
      src: "nf06-d",
      alt: "Дитина вводить команду в терміналі.",
      caption: "Пиши спокійно. Перевір очима. Потім Enter.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child finger hovering over Enter key on keyboard, terminal on monitor in background blurred, thoughtful calm moment, bright lighting",
    },
    {
      type: "h2",
      text: "Коротко",
    },
    {
      type: "ul",
      items: [
        "**pwd** — де я (`/home/pi`)",
        "**ls** — що в папці",
        "**clear** — чистий екран (не видалення файлів)",
      ],
    },
    {
      type: "try",
      title: "🔍 Дослідження: три фрази",
      body: "Відкрий термінал і виконай по черзі. Пиши після `$`, потім Enter:",
      checklist: [
        "Відкрий Terminal",
        "Введи `pwd` — що відповіла система? (часто `/home/pi`)",
        "Введи `ls` — скільки назв ти побачив?",
        "Введи `clear` — екран чистий?",
        "Знову `pwd` — ти все ще «там само»?",
        "Запиши в щоденник: що тебе здивувало",
      ],
      footer: "Файли після clear на місці? Отже, ти зрозумів команду правильно.",
    },
    {
      type: "draw",
      text: "Намалюй вікно термінала з рядком `pi@raspberrypi:~$` і командами pwd та ls.",
    },
    {
      type: "diary",
      lines: [
        "Що відповіла система на pwd?",
        "Чим термінал здався зручнішим або складнішим за меню?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Термінал — лише для хакерів із кіно.",
          truth:
            "Це звичайний інструмент адміністратора, програміста й дослідника.",
        },
        {
          title: "Помилка №2",
          myth: "clear видаляє всі файли з диска.",
          truth: "clear лише чистить вигляд вікна. Файли залишаються.",
        },
        {
          title: "Помилка №3",
          myth: "Можна писати як завгодно — система завжди зрозуміє.",
          truth: "Потрібні точні команди. Друкарська помилка = інший результат.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти вмієш питати «де я?» і «що тут?».",
    },
    {
      type: "text",
      text: "Проєкт «Мій світ», **розділ 2**. Друг знову питає: «Ну де вже папка для сервера?»",
    },
    {
      type: "text",
      text: "Але стояти на місці — мало. Далі навчимося **ходити** між папками.",
    },
  ],
  remember: [
    "Термінал — розмова текстом",
    "Запрошення часто: pi@raspberrypi:~$",
    "pwd — поточний шлях",
    "ls — вміст папки",
    "clear — чистий екран, не видалення",
  ],
  commands: [
    { cmd: "pwd", does: "Показує поточну папку" },
    { cmd: "ls", does: "Показує файли й папки тут" },
    { cmd: "clear", does: "Очищає екран термінала" },
  ],
  glossary: [
    { term: "Термінал", def: "Вікно, де вводять текстові команди системі." },
    { term: "Команда", def: "Коротке текстове розпорядження для ОС." },
    {
      term: "Запрошення",
      def: "Рядок на кшталт pi@raspberrypi:~$, де система чекає команди.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Термінал — це…",
      options: [
        "текстове вікно для команд",
        "лише калькулятор",
        "роз’єм HDMI",
      ],
      answer: 0,
      hint: "Ти пишеш слова — система відповідає текстом.",
      explanation: "Термінал — інтерфейс команд для керування системою.",
    },
    {
      type: "tf",
      text: "pwd показує поточну папку.",
      answer: true,
      hint: "print working directory.",
      explanation: "Так. pwd друкує шлях, де ти зараз.",
    },
    {
      type: "fill",
      prompt: "Яка команда показує список файлів?",
      answer: "ls",
      hint: "Дві літери від list.",
      explanation: "ls показує вміст каталогу.",
    },
    {
      type: "match",
      prompt: "Поєднай команду і дію:",
      hint: "pwd ≈ місце, ls ≈ список.",
      explanation: "Три базові команди огляду.",
      pairs: [
        ["pwd", "де я зараз"],
        ["ls", "що є в папці"],
        ["clear", "очистити екран"],
      ],
      optional: true,
    },
    {
      type: "whatif",
      prompt: "Екран термінала засмічений. Що зробити?",
      hint: "Є команда «протерти вікно».",
      explanation: "clear очищає видиму область. Файли не чіпає.",
      sample: "Виконати clear.",
      optional: true,
    },
  ],
  next: 7,
};
