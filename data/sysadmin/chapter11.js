window.CHAPTER_11 = {
  id: 11,
  bookId: "sysadmin",
  part: 3,
  partTitle: "Системний адміністратор",
  title: "Користувачі",
  icon: "search",
  learn: [
    "Чому в системі є різні «особи»",
    "Хто ти зараз — команда whoami",
    "Навіщо розділяти акаунти",
  ],
  content: [
    {
      type: "text",
      text: "Проєкт «Мій світ» готовий — але Pi все одно питає: **хто ти?** Не «дитина з кімнати», а **ім’я в системі**.",
    },
    {
      type: "text",
      text: "Ти приходиш додому.",
    },
    {
      type: "text",
      text: "У тебе є **свій ключ** від кімнати.",
    },
    {
      type: "text",
      text: "У мами — свій. У брата — свій. У бабусі — свій.",
    },
    {
      type: "text",
      text: "Кожен заходить у **свою** кімнату. Ніхто не плутає чужі речі зі своїми.",
    },
    {
      type: "text",
      text: "Стоп. **Хто я в системі?** І чому комп’ютер теж «знає людей поіменно»?",
    },
    {
      type: "text",
      text: "Можливо, ти подумав: *«Комп’ютер же просто машина. Навіщо йому імена?»*",
    },
    {
      type: "text",
      text: "Бо на одному Pi можуть працювати **різні люди** — або одна людина в різний час. Система пам’ятає, **хто зараз сидить за клавіатурою**.",
    },
    {
      type: "image",
      src: "nf11-a",
      alt: "Різні ключі від різних кімнат",
      caption: "Кожен житель — свій ключ і своя кімната.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Apartment building cutaway each flat has different colored door and key, bright friendly architecture model",
    },
    {
      type: "h2",
      text: "Будинок з мітками",
    },
    {
      type: "text",
      text: "Уяви великий будинок.",
    },
    {
      type: "text",
      text: "На дверях кімнат — **мітки з іменами**: «Оля», «Максим», «Гість».",
    },
    {
      type: "text",
      text: "У Linux так само: кожен, хто користується системою, має **обліковий запис** — **користувача**.",
    },
    {
      type: "text",
      text: "У твоєму Pi за замовчуванням часто є користувач **pi**. Це «ім’я на дверях» твоєї домашньої папки.",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Навіть коли ти один біля Pi, система все одно знає, під чиїм іменем ти увійшов. Це не для галочки — від імені залежать права.",
    },
    {
      type: "h2",
      text: "Спочатку ідея — потім команда",
    },
    {
      type: "text",
      text: "Уяви: ти в костюмі на святі. Хтось підходить: «**А ти хто?**»",
    },
    {
      type: "text",
      text: "Система робить те саме. Перед тим як дати тобі ключі від «кімнат», вона хоче знати **ім’я**.",
    },
    {
      type: "text",
      text: "Є команда‑дзеркало: **whoami** — «хто я зараз?»",
    },
    {
      type: "text",
      text: "Вона друкує ім’я на твоєму «ключі» — те, що стоїть **до `@`** у `pi@raspberrypi`.",
    },
    {
      type: "code",
      text: "# Дізнатися, хто я зараз у системі\npi@raspberrypi:~$ whoami\n\n# Приклад відповіді\npi",
    },
    {
      type: "text",
      text: "Подивись на запрошення терміналу: **`pi@raspberrypi`**. Літери **до `@`** — це і є твоє ім’я в системі.",
    },
    {
      type: "think",
      id: "q1",
      question: "Команда whoami показує…",
      options: [
        { id: "a", text: "ім’я поточного користувача" },
        { id: "b", text: "температуру процесора" },
        { id: "c", text: "швидкість інтернету" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Так: **whoami** друкує логін користувача — «хто я зараз».",
    },
    {
      type: "image",
      src: "nf11-b",
      alt: "whoami у терміналі",
      caption: "whoami — дзеркало: «хто я?»",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal with whoami command output showing username blurred, mirror reflection of child in monitor glass optional, bright",
    },
    {
      type: "h2",
      text: "Навіщо різні акаунти?",
    },
    {
      type: "text",
      text: "Уяви, що всі в родині користуються **одним ключем** і **однією кімнатою**.",
    },
    {
      type: "text",
      text: "Хтось переставив речі. Хтось видалив чужий файл. Хтось змінив налаштування — і ніхто не знає, хто.",
    },
    {
      type: "text",
      text: "Окремі акаунти допомагають:",
    },
    {
      type: "ul",
      items: [
        "**Розділити файли** — у кожного своя домашня папка",
        "**Розділити відповідальність** — видно, хто що зробив",
        "**Розділити права** — не кожен може все",
      ],
    },
    {
      type: "image",
      src: "nf11-c",
      alt: "Окремі акаунти — окремі кімнати",
      caption: "Окремі імена — менше плутанини.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Two user profile icons on login screen blurred, shared family desk with two chairs, bright home",
    },
    {
      type: "h2",
      text: "Звичайний користувач і адміністратор",
    },
    {
      type: "text",
      text: "У будинку є **звичайні мешканці** і є **господар**, у якого ключ від усіх дверей.",
    },
    {
      type: "text",
      text: "Звичайний користувач працює зі своїми файлами. **Адміністратор** може змінювати систему для всіх — ставити програми, правити захищені файли.",
    },
    {
      type: "text",
      text: "На Raspberry Pi користувач `pi` часто може стати «господарем» на хвилину — але про це в наступному розділі.",
    },
    {
      type: "text",
      text: "Головне зараз: **знай, хто ти**. Адмін не гадає — він перевіряє.",
    },
    {
      type: "image",
      src: "nf11-d",
      alt: "Звичайний користувач і адміністратор",
      caption: "Різні ролі — різні можливості.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Costume party rack with admin badge, guest badge, realistic props on bright hook wall, metaphor for permissions",
    },
    {
      type: "fact",
      title: "Паролі — секрет",
      text: "Кожен акаунт захищений паролем. Паролі не клеять на монітор і не діляться «бо зручно».",
    },
    {
      type: "try",
      title: "🔍 Дослідження: хто я?",
      body: "Перевір, як система «бачить» тебе зараз.",
      checklist: [
        "Відкрий термінал",
        "Введи `whoami` і натисни Enter",
        "Що відповіла система?",
        "Подивись на запрошення: що написано до `@`?",
        "Запиши ім’я в щоденник",
        "Поясни другові, навіщо різні користувачі — своїми словами",
      ],
      footer: "Якщо знаєш своє ім’я в системі — ти вже не анонім.",
    },
    {
      type: "draw",
      text: "Намалюй будинок: три кімнати з мітками (pi, мама, гість). Під кожною — «свій ключ».",
    },
    {
      type: "diary",
      lines: [
        "Яке ім’я показала команда whoami?",
        "Навіщо, на твою думку, не всім зручно мати один пароль?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "У Linux усі дії робить один анонім без імені.",
          truth: "Кожен сеанс належить конкретному користувачеві.",
        },
        {
          title: "Помилка №2",
          myth: "Пароль можна клеїти на монітор.",
          truth: "Паролі тримають у секреті.",
        },
        {
          title: "Помилка №3",
          myth: "Усім зручно ділити один пароль адміна.",
          truth: "Окремі акаунти безпечніші й відповідальніші.",
        },
      ],
    },
    {
      type: "text",
      text: "Ти знаєш, **хто ти** в системі. Далі — **права доступу**: хто що може читати, змінювати й запускати.",
    },
  ],
  remember: [
    "Кожен сеанс належить користувачеві",
    "whoami показує твоє ім’я в системі",
    "Окремі акаунти — окремі файли й відповідальність",
    "Адміністратор має більше прав — і більше обережності",
  ],
  commands: [
    { cmd: "whoami", does: "Показує поточного користувача" },
  ],
  glossary: [
    {
      term: "whoami",
      def: "Команда «хто я в системі».",
    },
    {
      term: "Користувач",
      def: "Обліковий запис людини або служби в Linux.",
    },
    {
      term: "Логін",
      def: "Ім’я користувача при вході в систему (наприклад, pi).",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Команда whoami показує…",
      options: [
        "ім’я поточного користувача",
        "температуру",
        "швидкість інтернету",
      ],
      answer: 0,
      hint: "Хто я?",
      explanation: "whoami друкує логін користувача.",
    },
    {
      type: "tf",
      text: "У Linux кожен сеанс належить конкретному користувачеві.",
      answer: true,
      hint: "Не анонім.",
      explanation: "Система завжди знає, хто працює.",
    },
    {
      type: "fill",
      prompt: "Команда «хто я в системі»:",
      answer: "whoami",
      hint: "who + am + i",
      explanation: "whoami — дзеркало поточного користувача.",
    },
    {
      type: "whatif",
      prompt: "Усі в родині користуються одним паролем адміна. Що може піти не так?",
      hint: "Хто видалив файл?",
      explanation: "Окремі акаунти дають відповідальність.",
      sample: "Ніхто не знає, хто що змінив. Пароль легко витекти.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Знайди помилку: «У Linux немає імен — усі анонімні».",
      hint: "whoami",
      explanation: "Система завжди знає, хто працює.",
      sample: "Кожен сеанс має користувача.",
      optional: true,
    },
  ],
  next: 12,
};
