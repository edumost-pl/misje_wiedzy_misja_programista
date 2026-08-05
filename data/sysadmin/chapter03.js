window.CHAPTER_03 = {
  id: 3,
  bookId: "sysadmin",
  part: 1,
  partTitle: "Знайомство з Raspberry Pi",
  title: "Перший запуск",
  icon: "led",
  learn: [
    "Навіщо потрібна картка microSD з системою",
    "Як записати Raspberry Pi OS і зібрати Pi до старту",
    "Що перевірити, якщо екран чорний",
  ],
  content: [
    {
      type: "text",
      text: "Ти купив нову гру.",
    },
    {
      type: "text",
      text: "Коробка красива. Фігурки на столі.",
    },
    {
      type: "text",
      text: "Але **правил гри** всередині немає.",
    },
    {
      type: "text",
      text: "Що буде? Ніхто не знає, з чого почати.",
    },
    {
      type: "text",
      text: "Raspberry Pi — справжній комп’ютер. На ньому є «двері» для кабелів. Але без **правил гри** він теж не знає, що робити після ввімкнення.",
    },
    {
      type: "text",
      text: "Як Pi вперше починає працювати?",
    },
    {
      type: "text",
      text: "Можливо, руки вже тягнуться встромити живлення. *«Ну ж бо!»*",
    },
    {
      type: "text",
      text: "Стривай. Адміністратор спочатку готує сцену.",
    },
    {
      type: "image",
      src: "nf03-boot",
      alt: "Перший запуск Raspberry Pi.",
      caption: "Перший старт — коли система вперше з’являється на екрані.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Monitor showing Raspberry Pi OS boot splash or loading screen with colors softly blurred, Pi LED lit, first boot excitement, bright room",
    },
    {
      type: "h2",
      text: "Книжка на маленькій картці",
    },
    {
      type: "text",
      text: "Пам’ятаєш таємничий слот на платі?",
    },
    {
      type: "text",
      text: "Туди вставляють картку **microSD**.",
    },
    {
      type: "text",
      text: "Уяви книжку. Якщо всі сторінки порожні — читати нічого.",
    },
    {
      type: "text",
      text: "Так само Pi: без «книжки» на microSD він не знає, з чого почати після ввімкнення.",
    },
    {
      type: "text",
      text: "На картку спочатку записують **операційну систему** — головну програму комп’ютера. Це і є ті «правила гри».",
    },
    {
      type: "text",
      text: "Для Raspberry Pi часто обирають **Raspberry Pi OS**. Саме вона каже платі: як показувати екран, як відкривати файли, як запускати інші програми.",
    },
    {
      type: "text",
      text: "Тобто **microSD — не просто сховище фото**. На ній «живе» операційна система.",
    },
    {
      type: "think",
      id: "q1",
      question: "Що важливіше зробити РАНІШЕ?",
      options: [
        { id: "a", text: "Спочатку живлення — система з’явиться сама" },
        { id: "b", text: "Спочатку система на microSD, потім збірка й живлення" },
        { id: "c", text: "Лише навушники" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Спочатку **система на microSD**. Живлення без «книжки» часто дає чорний екран і плутанину.",
    },
    {
      type: "h2",
      text: "Як записати «книжку»",
    },
    {
      type: "text",
      text: "Уяви, що ти переписуєш правила гри з великого зошита на маленьку картку.",
    },
    {
      type: "text",
      text: "Запис роблять на **іншому комп’ютері** програмою на кшталт **Raspberry Pi Imager**: обираєш Raspberry Pi OS, обираєш картку — і чекаєш завершення.",
    },
    {
      type: "image",
      src: "nf03-sdwrite",
      alt: "Запис системи на microSD.",
      caption: "Спочатку система на картці — потім картка в Pi.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Laptop with microSD card in USB adapter, Raspberry Pi Imager style setup suggested without logos, adult and child hands together, bright desk, preparation step",
    },
    {
      type: "text",
      text: "Коли запис готовий, картку обережно вставляють у слот. Ребром. До клацання. Без зайвої сили.",
    },
    {
      type: "h2",
      text: "Очі й руки на місці",
    },
    {
      type: "text",
      text: "Уяви актора на сцені.",
    },
    {
      type: "text",
      text: "Сценарій є. Але без світла й мікрофона глядач нічого не побачить.",
    },
    {
      type: "text",
      text: "Підключи те, без чого тобі важко вчитися:",
    },
    {
      type: "ul",
      items: [
        "🖥️ **HDMI** — на монітор",
        "⌨️ **USB** — клавіатура",
        "🖱️ **USB** — мишка",
      ],
    },
    {
      type: "image",
      src: "nf03-cables",
      alt: "Кабелі до Raspberry Pi.",
      caption: "Кабелі на місці — сцена майже готова.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi 5 with HDMI, keyboard, mouse, Ethernet cables all connected but power not yet plugged, tidy checklist-ready desk, bright daylight",
    },
    {
      type: "text",
      text: "Мережу можна налаштувати й пізніше. Для першого запуску головне — система, екран і спосіб щось натиснути.",
    },
    {
      type: "h2",
      text: "Енергія — останньою",
    },
    {
      type: "text",
      text: "Уяви, що ти натискаєш кнопку «Старт» на змаганні.",
    },
    {
      type: "text",
      text: "Краще, щоб усі учасники вже стояли на місці.",
    },
    {
      type: "text",
      text: "І лише тепер — **USB‑C**, живлення.",
    },
    {
      type: "text",
      text: "Чому останнім? Бо щойно з’являється енергія, Pi починає читати картку й стартувати. Краще, щоб до цього моменту все потрібне вже було на місці.",
    },
    {
      type: "think",
      id: "q2",
      question: "Що під’єднати ДО живлення?",
      options: [
        { id: "a", text: "Нічого — спочатку завжди струм" },
        { id: "b", text: "Картку з ОС і (бажано) HDMI з клавіатурою" },
        { id: "c", text: "Лише Bluetooth‑навушники" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "До живлення — **microSD із системою** і зазвичай екран + клавіатура.",
    },
    {
      type: "h2",
      text: "Що відбувається після ввімкнення?",
    },
    {
      type: "text",
      text: "Уяви будильник.",
    },
    {
      type: "text",
      text: "Він дзвенить — і тіло **прокидається**: очі, руки, голос.",
    },
    {
      type: "text",
      text: "Натискання живлення — будильник для Pi. Плата «прокидається», читає microSD — і за кілька секунд на екрані з’являється **перше обличчя** системи: завантаження, потім робочий стіл Raspberry Pi OS.",
    },
    {
      type: "image",
      src: "nf03-desktop",
      alt: "Робочий стіл після першого запуску.",
      caption: "Ось він — перший екран системи.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Monitor displaying Raspberry Pi OS desktop, icons and wallpaper softly blurred, success moment, Pi visible below monitor, cheerful bright setup",
    },
    {
      type: "text",
      text: "Система може попросити мову, країну, пароль, Wi‑Fi. Пройди кроки спокійно.",
    },
    {
      type: "fact",
      title: "Ого!",
      text: "Перше завантаження — як перший день у новій школі. Трохи незнайомо, але скоро стане звичним.",
    },
    {
      type: "h2",
      text: "А якщо екран чорний?",
    },
    {
      type: "text",
      text: "Уяви, що ти увімкнув ліхтарик — а світла немає.",
    },
    {
      type: "text",
      text: "Перша думка не «викинути ліхтарик». А «перевірити батарейку».",
    },
    {
      type: "text",
      text: "Не панікуй. Адміністратор починає з **простого**:",
    },
    {
      type: "ul",
      items: [
        "Чи вставлена microSD із записаною Raspberry Pi OS?",
        "Чи HDMI у правильних портах?",
        "Чи монітор увімкнений на потрібний вхід?",
        "Чи живлення справді підключене?",
      ],
    },
    {
      type: "text",
      text: "Більшість «поломки» на першому запуску — порожня картка, кривий кабель або слабке живлення.",
    },
    {
      type: "fact",
      title: "Золоте правило",
      text: "Перевіряй просте спочатку. Так працюють хороші адміністратори.",
    },
    {
      type: "h2",
      text: "Коротко про головне",
    },
    {
      type: "ul",
      items: [
        "**Що це?** Перший запуск — завантаження системи з microSD.",
        "**Навіщо microSD?** На ній «живе» операційна система.",
        "**Як?** Imager → картка в слот → HDMI/клавіатура → живлення останнім → спокійна діагностика.",
      ],
    },
    {
      type: "try",
      title: "🔍 Дослідження: чи готова сцена?",
      body: "Перед живленням перевір очима:",
      checklist: [
        "На microSD записана Raspberry Pi OS?",
        "Картка вставлена в слот?",
        "HDMI підключений?",
        "Клавіатура (і мишка) у USB?",
        "Лише тепер — USB‑C живлення",
        "Що ти побачив на екрані? Запиши одне слово",
      ],
      footer: "Скільки пунктів було готово до живлення?",
    },
    {
      type: "project",
      title: "Робоче місце адміністратора",
      steps: [
        "Поклади Pi так, щоб бачити роз’єми.",
        "Підпиши в зошиті порядок: картка → кабелі → живлення.",
        "Після успішного входу запиши, що спрацювало з першого разу.",
      ],
    },
    {
      type: "draw",
      text: "Намалюй 4 кроки: запис ОС → microSD у Pi → кабелі → живлення.",
    },
    {
      type: "diary",
      lines: [
        "Що було найхвилюючішим у першому запуску?",
        "Якщо екран був чорний — що перевірив першим?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Помилка №1",
          myth: "Спочатку завжди вмикай живлення.",
          truth: "Спочатку картка з ОС і потрібні кабелі. Живлення — останнім.",
        },
        {
          title: "Помилка №2",
          myth: "Порожня картка теж підійде.",
          truth: "Спочатку запис Raspberry Pi OS. Інакше читати нічого.",
        },
        {
          title: "Помилка №3",
          myth: "Чорний екран = плата зламана, викидаю.",
          truth: "Спочатку microSD, HDMI, монітор, живлення.",
        },
      ],
    },
    {
      type: "text",
      text: "Вітаю: комп’ютер живий. На екрані — система.",
    },
    {
      type: "text",
      text: "Одна спроба — і Pi вже «прокинувся». Це перший крок до майбутнього проєкту **«Мій світ»** — але спочатку треба зрозуміти, хто тут диригент.",
    },
    {
      type: "text",
      text: "Але хто насправді керує всім цим «під капотом»?",
    },
    {
      type: "text",
      text: "Далі — знайомство з невидимим диригентом.",
    },
  ],
  remember: [
    "ОС зазвичай на microSD",
    "Спочатку запис системи, потім запуск",
    "Живлення — останнім",
    "Чорний екран: перевіряй просте спочатку",
  ],
  commands: [],
  glossary: [
    {
      term: "Raspberry Pi OS",
      def: "Операційна система, яку часто ставлять на Raspberry Pi.",
    },
    {
      term: "microSD",
      def: "Картка, на якій зазвичай зберігається операційна система Pi.",
    },
    {
      term: "Операційна система",
      def: "Головна програма, без якої комп’ютер не знає, як працювати.",
    },
    {
      term: "Imager",
      def: "Програма для запису системи на картку пам’яті.",
    },
    {
      term: "Завантаження",
      def: "Старт системи з носія після ввімкнення.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Що зробити перед увімкненням живлення?",
      options: [
        "підготувати ОС на картці й зібрати кабелі",
        "одразу смикати дроти навмання",
        "зламати microSD",
      ],
      answer: 0,
      hint: "Книжка → очі/руки → енергія.",
      explanation: "Спочатку система й підключення, живлення в кінці.",
    },
    {
      type: "tf",
      text: "Живлення завжди підключають першим, ще до картки.",
      answer: false,
      hint: "Живлення останнім.",
      explanation: "Спочатку картка й кабелі, потім енергія.",
    },
    {
      type: "fill",
      prompt: "ОС, яку часто ставлять на Pi:",
      answer: "Raspberry Pi OS",
      hint: "Pi + OS.",
      explanation: "Офіційна зручна система для плати.",
      optional: true,
    },
    {
      type: "whatif",
      prompt: "Вставили порожню картку. Що станеться?",
      hint: "Порожня книжка.",
      explanation: "Без ОС нічого читати.",
      sample: "Pi не завантажиться нормально.",
      optional: true,
    },
  ],
  next: 4,
};
