/**
 * Єдиний стиль ілюстрацій — «Місія Адміністратор»
 * Фотореалізм, яскраве світло, чіткість. Без темних тонів.
 * Синхронізація: node tools/sync-sysadmin-image-prompts.mjs
 */
window.SYSADMIN_IMAGE_STYLE = {
  photo:
    "Same Mission Admin photo shoot / editorial series: bright natural daylight from a large window, clean light wood desk, soft white walls, teal USB/Ethernet cable accents, photorealistic children's STEM nonfiction ages 10-12, high sharpness, airy optimistic DK/Usborne mood. No dark cyberpunk lighting, no purple neon. No logos, no watermark, no creeper, no game character skins, no official game packaging. Softly blurred generic colorful blocky voxel landscapes only when a game world is needed (no UI). Vertical 16:10 aspect ratio.",
  screen:
    "Same Mission Admin photo shoot: photorealistic close-up of a computer monitor in a bright sunlit room, high sharpness, light wood desk, teal accents. The screen content must be CLEARLY READABLE: realistic Raspberry Pi OS desktop or light-theme terminal with legible text (pi@raspberrypi:~$ , pwd, ls, nano). No watermarks. Avoid trademark logos when possible; UI icons may be generic. Vertical 16:10 aspect ratio.",
  concept:
    "Same Mission Admin series: photorealistic 3D educational render, bright soft daylight/studio light, light wood or white surfaces, teal accents, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic. No readable logos, no watermark. Vertical 16:10 aspect ratio.",
  macro:
    "Same Mission Admin series: photorealistic macro product photography, bright diffused daylight, extreme sharpness on hardware details, clean light wood or white background, teal accents. No readable text labels baked in, no logos, no watermark. Vertical 16:10 aspect ratio.",
};

window.SYSADMIN_IMAGE_PROMPTS = {
  "cover-hero": {
    style: "photo",
    placement: "Обкладинка книги — Amazon/KDP/Etsy",
    scene:
      "Raspberry Pi 5 in foreground on light wooden desk, monitor in background showing softly blurred blocky game world, happy child age 11 with headphones, bright sunlit room, premium nonfiction book cover composition, space for title at top",
  },
  "part-01-pi": {
    style: "photo",
    placement: "Part 1 opener — Pi в долоні",
    scene:
      "Child hands holding Raspberry Pi 5 board carefully, bright daylight, shallow depth of field, wonder and care, clean white background blur",
  },
  "part-02-linux": {
    style: "screen",
    placement: "Part 2 opener — термінал як діалог",
    scene:
      "Bright monitor CLEARLY readable light terminal: pi@raspberrypi:~$ pwd then /home/pi, friendly learning mood, Pi desk setup",
  },
  "part-03-admin": {
    style: "concept",
    placement: "Part 3 opener — ключі й замки",
    scene:
      "Collection of different keys and padlocks on bright wooden board, admin security metaphor, sharp product photography",
  },
  "part-04-net": {
    style: "concept",
    placement: "Part 4 opener — мережа доріг",
    scene:
      "Miniature city road network aerial view, houses as network nodes, bright educational diorama style, photorealistic 3D render",
  },
  "part-05-mc": {
    style: "photo",
    placement: "Part 5 opener — Minecraft на Pi",
    scene:
      "Raspberry Pi 5 with Ethernet cable, monitor showing softly blurred block game world, excited child at desk, bright room, payoff moment",
  },
  "part-06-next": {
    style: "concept",
    placement: "Part 6 opener — карта проєктів",
    scene:
      "Treasure map on desk with paths to robot, weather station, media center icons, Pi at start point, bright adventure mood",
  },
  "nf00-hero": {
    style: "photo",
    placement: "Розділ 1 — після питання «це взагалі комп’ютер?», перший погляд на Pi",
    scene:
      "Raspberry Pi 5 board centered on a light wooden desk, HDMI cable and microSD card beside it, child's hands reaching toward the board with curiosity, shallow depth of field, wonder mood",
  },
  "nf01-size": {
    style: "photo",
    placement: "Розділ 1 — аналогія «рояль і синтезатор», контраст розмірів",
    scene:
      "Raspberry Pi 5 placed next to a large desktop PC tower on the same bright desk, clear size contrast, both devices well lit, educational comparison shot",
  },
  "nf01-hero": {
    style: "photo",
    placement: "Розділ 1 — блок «одна плата — цілий комп’ютер», Pi з кабелями",
    scene:
      "Complete Raspberry Pi 5 learning station: board, monitor, keyboard, mouse, neat cable management, cheerful bright home desk, ready to work",
  },
  "nf02-ports": {
    style: "macro",
    placement: "Розділ 2 — після метафори «двері в будинку», карта роз’ємів",
    scene:
      "Close-up of Raspberry Pi 5 edge showing USB-C, USB-A, Ethernet, micro-HDMI ports, each port clearly visible, annotated feel without text, top-down angle",
  },
  "nf02-power": {
    style: "macro",
    placement: "Розділ 2 — USB-C живлення",
    scene:
      "Teal USB-C power cable plugging into Raspberry Pi power port on light wood desk, bright daylight, sharp connector detail",
  },
  "nf02-hdmi": {
    style: "photo",
    placement: "Розділ 2 — HDMI до монітора",
    scene:
      "micro-HDMI cable connecting Raspberry Pi to bright monitor on light wood desk, cable path visible, daylight room, teal accents",
  },
  "nf02-gpio": {
    style: "macro",
    placement: "Розділ 2 — GPIO «двері до електроніки»",
    scene:
      "GPIO pin header on Raspberry Pi resting on light wood desk, sharp macro, bright daylight from window, teal accents, no pure white seamless backdrop",
  },
  "nf03-boot": {
    style: "screen",
    placement: "Розділ 3 — перший старт, будильник для Pi",
    scene:
      "Monitor clearly showing Raspberry Pi OS boot splash with rainbow splash or welcome loading graphics and readable boot text, Pi LED lit, first boot excitement, bright room, screen sharp and legible",
  },
  "nf03-sdwrite": {
    style: "photo",
    placement: "Розділ 3 — запис ОС на microSD",
    scene:
      "Laptop with microSD card in USB adapter, Raspberry Pi Imager style setup suggested without logos, adult and child hands together, bright desk, preparation step",
  },
  "nf03-cables": {
    style: "photo",
    placement: "Розділ 3 — чекліст кабелів перед увімкненням",
    scene:
      "Raspberry Pi 5 with HDMI, keyboard, mouse, Ethernet cables all connected but power not yet plugged, tidy checklist-ready desk, bright daylight",
  },
  "nf03-desktop": {
    style: "screen",
    placement: "Розділ 3 — перший робочий стіл з’явився",
    scene:
      "Monitor clearly displaying Raspberry Pi OS desktop: colorful wallpaper, top menu bar, file manager and terminal icons visible and readable, success moment, Pi visible below monitor, cheerful bright setup",
  },
  "nf04-a": {
    style: "concept",
    placement: "Розділ 4 — ОС як невидимий диригент",
    scene:
      "Raspberry Pi on light wood desk beside a small realistic conductor figurine as OS metaphor, bright daylight editorial, not gray studio concert hall",
  },
  "nf04-b": {
    style: "concept",
    placement: "Розділ 4 — Linux як родина систем",
    scene:
      "Several similar small boards or boxes on a bright shelf as a family of systems, simple shared heart paper sticker, photoreal, no cartoon penguins",
  },
  "nf04-c": {
    style: "concept",
    placement: "Розділ 4 — шари: залізо → ядро → програми",
    scene:
      "Three physical layers on light wood desk: circuit board bottom, glowing core middle, tablet with generic app icons top, photoreal daylight, not isometric toy-3D",
  },
  "nf04-d": {
    style: "photo",
    placement: "Розділ 4 — fact про Linux в інтернеті",
    scene:
      "Child looking through glass at bright data center racks with soft LEDs, wonder mood, bright overhead lighting not dark cyberpunk",
  },
  "nf05-a": {
    style: "screen",
    placement: "Розділ 5 — знайоме обличчя Raspberry Pi OS",
    scene:
      "Full monitor clearly showing Raspberry Pi OS desktop wallpaper, top menu bar with Applications, readable icons for browser terminal files, bright monitor in sunlit room, welcoming first look",
  },
  "nf05-b": {
    style: "screen",
    placement: "Розділ 5 — меню як карта програм",
    scene:
      "Monitor CLEARLY readable Raspberry Pi OS-like Applications menu, light theme Linux desktop, Accessories Programming Internet Preferences, no macOS/Windows chrome",
  },
  "nf05-c": {
    style: "concept",
    placement: "Розділ 5 — стіл як карта міста",
    scene:
      "Paper city map on light wood desk next to real monitor with bright Pi OS-like desktop, photoreal, not plastic toy city",
  },
  "nf05-d": {
    style: "photo",
    placement: "Розділ 5 — дослідження меню",
    scene:
      "Child exploring Raspberry Pi desktop with mouse, calm focused expression, bright home learning corner, monitor and Pi visible",
  },
  "nf06-a": {
    style: "screen",
    placement: "Розділ 6 — діалог «ти пишеш — система відповідає»",
    scene:
      "Light-theme Linux terminal CLEARLY readable: pi@raspberrypi:~$ ls then Desktop Documents Music, child hands on keyboard, light wood desk",
  },
  "nf06-b": {
    style: "screen",
    placement: "Розділ 6 — pwd «де я?»",
    scene:
      "Terminal CLEARLY readable: pi@raspberrypi:~$ pwd then output /home/pi on next line, sharp monitor bezel, daylight",
  },
  "nf06-c": {
    style: "screen",
    placement: "Розділ 6 — clear, чистий екран",
    scene:
      "Terminal after clear: mostly empty light-theme window with only clear prompt pi@raspberrypi:~$ visible and readable, calm organized screen, Pi desk setup",
  },
  "nf06-d": {
    style: "photo",
    placement: "Розділ 6 — пиши спокійно, потім Enter",
    scene:
      "Child finger hovering over Enter key on keyboard, terminal on monitor in background blurred, thoughtful calm moment, bright lighting",
  },
  "nf07-a": {
    style: "concept",
    placement: "Розділ 7 — вкладені папки як кімнати",
    scene:
      "Nested cardboard boxes or wooden trays as folders on light wood desk beside Raspberry Pi, photoreal, not dollhouse toy-3D",
  },
  "nf07-b": {
    style: "screen",
    placement: "Розділ 7 — cd .. піднімає на рівень",
    scene:
      "Terminal CLEARLY readable: pi@raspberrypi:~/mii-svit$ cd .. then new prompt pi@raspberrypi:~$ , bright screen",
  },
  "nf07-c": {
    style: "photo",
    placement: "Розділ 7 — не панікуй, орієнтуйся",
    scene:
      "Child looking at monitor with terminal, relaxed posture, sticky note with drawn folder tree beside keyboard, encouraging bright study nook",
  },
  "nf07-d": {
    style: "concept",
    placement: "Розділ 7 — дерево каталогів",
    scene:
      "Nested wooden trays arranged like a folder tree on light wood desk, Raspberry Pi nearby, photoreal daylight",
  },
  "nf08-a": {
    style: "photo",
    placement: "Розділ 8 — папки як полиці IKEA",
    scene:
      "White IKEA-style shelf with empty labeled boxes ready for projects, bright Scandinavian room, metaphor for mkdir",
  },
  "nf08-b": {
    style: "concept",
    placement: "Розділ 8 — батьківська і вкладені папки",
    scene:
      "Nested transparent folders on bright desk, parent folder large, child folders inside, realistic 3D render",
  },
  "nf08-c": {
    style: "screen",
    placement: "Розділ 8 — mkdir, ім’я з’являється в ls",
    scene:
      "Terminal CLEARLY readable: mkdir mii-svit then ls showing Desktop Documents mii-svit, light theme",
  },
  "nf08-d": {
    style: "photo",
    placement: "Розділ 8 — проєкт «Мій світ», папка mii-svit",
    scene:
      "Desk with notebook titled project sketch, Pi showing terminal, tidy organized workspace, hopeful bright mood",
  },
  "nf09-a": {
    style: "concept",
    placement: "Розділ 9 — файл як іменована сторінка",
    scene:
      "Stack of realistic paper pages with tab labels as files, top page named like a document, bright desk",
  },
  "nf09-b": {
    style: "screen",
    placement: "Розділ 9 — cat читає вміст",
    scene:
      "Terminal CLEARLY readable: pi@raspberrypi:~$ cat world-rules.txt then Max players: 5 and Be kind, light wood desk, Linux only",
  },
  "nf09-c": {
    style: "concept",
    placement: "Розділ 9 — rm без кошика",
    scene:
      "Realistic trash bin with NO undo arrow, crumpled paper falling in, bright warning but not scary, clear metaphor",
  },
  "nf09-d": {
    style: "concept",
    placement: "Розділ 9 — cp створює двійника",
    scene:
      "Two identical notebooks side by side on bright desk, one labeled original one copy, realistic stationery photo",
  },
  "nf10-a": {
    style: "screen",
    placement: "Розділ 10 — вікно nano, текст зверху підказки знизу",
    scene:
      "GNU nano CLEARLY readable light theme: world-rules.txt, Max players: 5, bottom ^O ^X hints, Linux only no Windows chrome",
  },
  "nf10-c": {
    style: "screen",
    placement: "Розділ 10 — перевірка після nano (cat)",
    scene:
      "Terminal CLEARLY readable: pi@raspberrypi:~$ cat world-rules.txt showing Max players: 5 and No griefing, Linux only",
  },
  "nf10-d": {
    style: "photo",
    placement: "Розділ 10 — гарячі клавіші Ctrl",
    scene:
      "Close-up of keyboard with Ctrl key and letter keys sharp, finger pressing Ctrl, bright keyboard, learning shortcuts",
  },
  "nf11-a": {
    style: "concept",
    placement: "Розділ 11 — користувачі як мешканці будинку",
    scene:
      "Raspberry Pi on light wood desk beside a small wooden architectural model with doors (users metaphor), photoreal daylight, not plastic dollhouse 3D",
  },
  "nf11-b": {
    style: "screen",
    placement: "Розділ 11 — whoami «хто я?»",
    scene:
      "Terminal CLEARLY readable: pi@raspberrypi:~$ whoami then output pi, bright room",
  },
  "nf11-c": {
    style: "photo",
    placement: "Розділ 11 — окремі акаунти",
    scene:
      "Two user profile icons on login screen blurred, shared family desk with two chairs, bright home",
  },
  "nf11-d": {
    style: "concept",
    placement: "Розділ 11 — різні ролі різні можливості",
    scene:
      "Three simple badge cards on light wood desk next to Raspberry Pi as roles metaphor, photoreal, not costume party props",
  },
  "nf12-a": {
    style: "concept",
    placement: "Розділ 12 — різні ключі різні двері",
    scene:
      "Three different keys on light wooden board each matching different colored door locks, sharp product photo",
  },
  "nf12-b": {
    style: "screen",
    placement: "Розділ 12 — ls -l довгий список",
    scene:
      "Terminal CLEARLY readable ls -l output with -rw-r--r-- and drwxr-xr-x lines and filenames notes.txt projects, magnifying glass on desk",
  },
  "nf12-c": {
    style: "screen",
    placement: "Розділ 12 — Permission denied",
    scene:
      "Light-theme Linux terminal CLEARLY readable Permission denied after cd /root, bright daylight not dark hacker style",
  },
  "nf12-d": {
    style: "photo",
    placement: "Розділ 12 — sudo ключ майстра",
    scene:
      "Master key on keyring separate from regular house keys, bright macro, adult supervision mood, responsible tool",
  },
  "nf13-a": {
    style: "concept",
    placement: "Розділ 13 — жонглер задач",
    scene:
      "Child hands juggling soft glowing balls above light wood desk with Raspberry Pi visible, processes metaphor, bright daylight, no circus tent",
  },
  "nf13-b": {
    style: "photo",
    placement: "Розділ 13 — один Pi багато завдань",
    scene:
      "Monitor with multiple soft light-theme Linux windows on bright desk with Raspberry Pi, busy but organized, no macOS traffic lights",
  },
  "nf13-c": {
    style: "screen",
    placement: "Розділ 13 — ps миттєве фото",
    scene:
      "Terminal CLEARLY readable ps aux listing with PID USER COMMAND columns and rows like chromium python, bright screen",
  },
  "nf13-d": {
    style: "screen",
    placement: "Розділ 13 — top, не все треба виганяти",
    scene:
      "Terminal CLEARLY readable top or htop style process list with %CPU %MEM and process names, calm monitoring, bright theme",
  },
  "nf14-a": {
    style: "concept",
    placement: "Розділ 14 — find vs grep різні інструменти",
    scene:
      "Two tools on bright desk: flashlight for filenames, magnifying glass for page text, realistic product shot",
  },
  "nf14-b": {
    style: "screen",
    placement: "Розділ 14 — find шукає імена файлів",
    scene:
      "Terminal CLEARLY readable: find . -name "*.txt" then paths ./mii-svit/world-rules.txt ./notes.txt, sticky note beside keyboard",
  },
  "nf14-c": {
    style: "screen",
    placement: "Розділ 14 — grep шукає всередині",
    scene:
      "Terminal CLEARLY readable: grep -n Minecraft world-rules.txt with matching line highlighted in color, open book on desk",
  },
  "nf14-d": {
    style: "photo",
    placement: "Розділ 14 — швидкий пошук при інциденті",
    scene:
      "Child admin searching urgently but calmly at Pi terminal, bright room, clock on wall suggests quick fix",
  },
  "nf15-a": {
    style: "photo",
    placement: "Розділ 15 — «крутиться колесо» завантаження мережі",
    scene:
      "Monitor with loading spinner blurred, Ethernet cable to Pi, troubleshooting network, bright not frustrating dark room",
  },
  "nf15-b": {
    style: "concept",
    placement: "Розділ 15 — IP адреса як адреса квартири",
    scene:
      "Bright daylight apartment facade with door numbers, one door highlighted, IP metaphor, optimistic street photo",
  },
  "nf15-c": {
    style: "concept",
    placement: "Розділ 15 — ping як «Ау!» і луна",
    scene:
      "Child shouting across bright mountain valley, echo wave visualized lightly, playful network metaphor",
  },
  "nf15-d": {
    style: "screen",
    placement: "Розділ 15 — ip a і ping у терміналі",
    scene:
      "Terminal CLEARLY readable ip a showing 192.168.1.42 and ping replies, Pi with teal Ethernet, bright desk",
  },
  "nf16-a": {
    style: "photo",
    placement: "Розділ 16 — Pi далеко, хочеш написати",
    scene:
      "Raspberry Pi on shelf across room, child at laptop on desk, distance between devices, bright home",
  },
  "nf16-b": {
    style: "concept",
    placement: "Розділ 16 — SSH захищений канал",
    scene:
      "Two tin cans with teal-glowing string between laptop and Raspberry Pi on light wood desk, SSH metaphor, photoreal bright",
  },
  "nf16-c": {
    style: "photo",
    placement: "Розділ 16 — headless Pi керують через SSH",
    scene:
      "Raspberry Pi without monitor, only power and Ethernet LEDs, laptop on desk showing SSH session blurred, bright",
  },
  "nf16-d": {
    style: "photo",
    placement: "Розділ 16 — безпека SSH",
    scene:
      "Strong padlock on network cable metaphor, SSH key USB dongle on bright desk, security without fear mood",
  },
  "nf17-a": {
    style: "photo",
    placement: "Розділ 17 — гравець і сервер за лаштунками",
    scene:
      "Child playing game on laptop foreground, Raspberry Pi with Ethernet in background on shelf, bright room",
  },
  "nf17-b": {
    style: "photo",
    placement: "Розділ 17 — Pi як кухня ресторану",
    scene:
      "Raspberry Pi on light wood desk as server station with tiny plate props as gentle kitchen metaphor, laptop client nearby, home STEM desk not restaurant",
  },
  "nf17-c": {
    style: "concept",
    placement: "Розділ 17 — спочатку надійність",
    scene:
      "Raspberry Pi with neat cables ready on light wood desk before friends arrive, soft real balloons optional in background, photoreal bright",
  },
  "nf17-d": {
    style: "concept",
    placement: "Розділ 17 — клієнт і сервер",
    scene:
      "Laptop and Raspberry Pi on same light wood desk with soft teal light path between them, client-server metaphor, photoreal",
  },
  "nf18-a": {
    style: "concept",
    placement: "Розділ 18 — спочатку кухня (Java), потім торт",
    scene:
      "Raspberry Pi on light wood desk with neat blank-labeled jars as server prep ingredients metaphor, bright editorial, not a full kitchen room",
  },
  "nf18-b": {
    style: "screen",
    placement: "Розділ 18 — перевірка Java",
    scene:
      "Monitor CLEARLY readable light-theme Linux terminal: pi@raspberrypi:~$ java -version, NOT Windows prompt, Pi nearby, bright desk",
  },
  "nf18-c": {
    style: "photo",
    placement: "Розділ 18 — папка minecraft-server",
    scene:
      "Folder organizer on light wood desk with Raspberry Pi; monitor shows softly blurred generic blocky voxels only, no sharp game branding",
  },
  "nf18-d": {
    style: "photo",
    placement: "Розділ 18 — встановлення server.jar",
    scene:
      "Child and adult hands pointing at generic jar file in Linux file manager, supervised install, Raspberry Pi nearby, no macOS UI",
  },
  "nf19-a": {
    style: "concept",
    placement: "Розділ 19 — конституція світу",
    scene:
      "Open rules notebook and Raspberry Pi on light wood desk, soft wooden cubes blurred in background, bright daylight, no Minecraft branding",
  },
  "nf19-b": {
    style: "screen",
    placement: "Розділ 19 — nano server.properties",
    scene:
      "Bright daylight monitor showing readable nano-style config edit, light wood desk, Raspberry Pi nearby, not evening lamp mood",
  },
  "nf19-c": {
    style: "photo",
    placement: "Розділ 19 — backup копія конфігу",
    scene:
      "Two identical file folders one marked backup with copy icon, bright desk, safety net metaphor",
  },
  "nf19-d": {
    style: "photo",
    placement: "Розділ 19 — друзі грають за правилами",
    scene:
      "Two children at laptops smiling, Pi server on shelf, fair play mood, bright living room",
  },
  "nf20-a": {
    style: "screen",
    placement: "Розділ 20 — шум на екрані ≠ готовність",
    scene:
      "Child reading monitor with softly blurred scrolling logs, Raspberry Pi nearby, light wood desk, bright suspenseful but sunny room",
  },
  "nf20-b": {
    style: "screen",
    placement: "Розділ 20 — читання логів",
    scene:
      "Close-up monitor CLEARLY readable server log ending with Done (3.421s)! For help type help, calm reading, daylight",
  },
  "nf20-c": {
    style: "photo",
    placement: "Розділ 20 — спочатку ти сам тестуєш",
    scene:
      "Single child joining Minecraft on same desk as Pi server, solo test before friends, bright",
  },
  "nf20-d": {
    style: "photo",
    placement: "Розділ 20 — сервер готовий, свято",
    scene:
      "Group of kids with laptops celebrating, Pi with green LED, party mood, bright colorful room",
  },
  "nf21-a": {
    style: "concept",
    placement: "Розділ 21 — карта проєктів Pi",
    scene:
      "Paper project map on light wood desk with path tokens, Raspberry Pi at start, bright, matching part-06 style",
  },
  "nf21-b": {
    style: "photo",
    placement: "Розділ 21 — різні проєкти, ті самі навички",
    scene:
      "Collage desk: Pi with GPIO wires, small screen, sensor module, same terminal skills, bright maker space",
  },
  "nf21-c": {
    style: "photo",
    placement: "Розділ 21 — один наступний крок",
    scene:
      "Child pointing at one chosen project card among many on table, decision moment, bright",
  },
  "nf21-d": {
    style: "photo",
    placement: "Розділ 21 — цікавість не кінчається",
    scene:
      "Closed book on desk but Pi project glowing with LED next to open notebook, curiosity continues, bright window",
  },
  "nf22-a": {
    style: "photo",
    placement: "Розділ 22 — кінець книги, початок шляху",
    scene:
      "Child closing book, Raspberry Pi ready on desk, path ahead through bright doorway, hopeful",
  },
  "nf22-b": {
    style: "concept",
    placement: "Розділ 22 — ритуал детектива",
    scene:
      "Young detective with magnifying glass and five step checklist cards on bright cork board, admin ritual metaphor",
  },
  "nf22-c": {
    style: "photo",
    placement: "Розділ 22 — вже не просто користувач кнопок",
    scene:
      "Confident child typing in terminal while parents watch proudly in background, bright home, growth",
  },
  "nf22-d": {
    style: "photo",
    placement: "Розділ 22 — наступний експеримент",
    scene:
      "Child carrying Pi to new project table with tools and wires, adventure ahead, sunny room",
  },
};
