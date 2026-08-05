window.CHAPTER_05 = {
  id: 5,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "Raspberry Pi OS",
  icon: "pi",
  learn: [
    "How Raspberry Pi OS is different from \"just Linux\"",
    "Why the desktop matters",
    "Where to find the menu, settings, and programs",
  ],
  content: [
    {
      type: "text",
      text: "You move to a new city.",
    },
    {
      type: "text",
      text: "The map shows lots of streets.",
    },
    {
      type: "text",
      text: "But one city is easier to live in. Another is built for factories.",
    },
    {
      type: "text",
      text: "In the big **Linux family**, there are different \"cities\" too. Each is built for its own purpose.",
    },
    {
      type: "text",
      text: "On your board lives one of them — **Raspberry Pi OS**.",
    },
    {
      type: "text",
      text: "Maybe you're thinking: *\"If it's Linux, why a separate name?\"*",
    },
    {
      type: "image",
      src: "nf05-a",
      alt: "Raspberry Pi OS desktop.",
      caption: "Here's the familiar \"face\" of the system on screen.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Full monitor showing Raspberry Pi OS desktop wallpaper and menu bar, UI softly blurred, bright monitor in sunlit room, welcoming first look",
    },
    {
      type: "h2",
      text: "A ready home, not bare walls",
    },
    {
      type: "text",
      text: "Picture two houses.",
    },
    {
      type: "text",
      text: "One has only walls and a roof. The other has furniture, lights, a kitchen, and labeled doors.",
    },
    {
      type: "text",
      text: "A \"bare\" Linux kernel isn't a comfortable home yet. A **distribution** adds walls, doors, and furniture: a desktop, programs, Wi‑Fi settings, language…",
    },
    {
      type: "text",
      text: "**Raspberry Pi OS** is a home built specifically for the Raspberry Pi: drivers, menu, programs, settings.",
    },
    {
      type: "text",
      text: "It's not \"a different universe.\" It's a **Linux build**, neatly packaged for your board.",
    },
    {
      type: "think",
      id: "q1",
      question: "Raspberry Pi OS is…",
      options: [
        { id: "a", text: "an operating system (Linux build) for the Raspberry Pi" },
        { id: "b", text: "the name of a charging cable" },
        { id: "c", text: "a type of HDMI port" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: it's an **OS for the Raspberry Pi**, built on Linux. Not a cable and not a port.",
    },
    {
      type: "h2",
      text: "The desktop — a map of the city",
    },
    {
      type: "text",
      text: "Picture a phone.",
    },
    {
      type: "text",
      text: "Icons on the screen. Tap one — a program opens.",
    },
    {
      type: "text",
      text: "Now picture visiting a **big city for the first time**.",
    },
    {
      type: "text",
      text: "Without a map — just chaos of streets. Then someone hands you a **plan with buttons**: \"Here's the browser. Here are files. Here are settings.\"",
    },
    {
      type: "text",
      text: "That plan on the Pi screen is called the **desktop** — a way to control the system **with your eyes**, without the terminal.",
    },
    {
      type: "image",
      src: "nf05-b",
      alt: "Menu and icons on the desktop.",
      caption: "The menu is a map of programs. Find its corner on screen.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Close-up of Raspberry Pi OS application menu open, icons blurred, cursor hovering, menu corner highlighted by natural light on screen",
    },
    {
      type: "think",
      id: "q2",
      question: "The desktop is for…",
      options: [
        { id: "a", text: "just drawing wallpaper" },
        { id: "b", text: "opening programs and settings easily" },
        { id: "c", text: "replacing the charging cable" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "The desktop is a handy way to **control the system with your eyes**. Wallpaper is a nice extra, not the main point.",
    },
    {
      type: "h2",
      text: "What to find on the desktop",
    },
    {
      type: "ul",
      items: [
        "📋 program menu",
        "⚙️ settings (sound, display, network)",
        "🌐 browser",
        "📁 file manager (folders you can see)",
      ],
    },
    {
      type: "image",
      src: "nf05-c",
      alt: "Desktop with open windows.",
      caption: "The desktop shows the system like a city map.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic 3D miniature city map on desk next to real monitor, buttons on map correspond to app icons concept, bright tabletop, playful but sharp",
    },
    {
      type: "h2",
      text: "Updates — care, not punishment",
    },
    {
      type: "text",
      text: "Picture a bicycle.",
    },
    {
      type: "text",
      text: "Sometimes you pump the tires and tighten the bolts.",
    },
    {
      type: "text",
      text: "Sometimes the system offers **updates**. That's not \"to annoy you.\"",
    },
    {
      type: "text",
      text: "Updates bring bug fixes, security improvements, and new features. An admin treats them like taking care of a tool.",
    },
    {
      type: "fact",
      title: "Did you know?",
      text: "Raspberry Pi OS is built so learning feels good: lots of tools are already \"in the box.\"",
    },
    {
      type: "image",
      src: "nf05-d",
      alt: "A kid exploring the Raspberry Pi OS menu.",
      caption: "Explore the menu calmly — it's your map.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child exploring Raspberry Pi desktop with mouse, calm focused expression, bright home learning corner, monitor and Pi visible",
    },
    {
      type: "h2",
      text: "The big picture",
    },
    {
      type: "ul",
      items: [
        "**What is it?** Raspberry Pi OS is a Linux build for the Pi board.",
        "**Why?** So you get a handy desktop and tools right away.",
        "**What to know now?** Find the menu, programs, and settings.",
      ],
    },
    {
      type: "try",
      title: "🔍 Investigation: find it on the desktop",
      body: "On Raspberry Pi OS, try to find with your eyes:",
      checklist: [
        "Program menu — where is it?",
        "Settings (sound, display, network)",
        "Browser",
        "A window with folders (file manager)",
        "What felt easiest? Write one word",
      ],
      footer: "The desktop is already your friend. But there's another way to talk to the system…",
    },
    {
      type: "draw",
      text: "Draw a desktop screen: menu, a few icons, and one program window.",
    },
    {
      type: "diary",
      lines: [
        "What on the desktop felt easiest to use?",
        "How is the desktop like a phone, and how is it different?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "Pi OS and Linux are totally unrelated.",
          truth:
            "Raspberry Pi OS is built on Linux. Linux is the foundation; Pi OS is a handy build for the board.",
        },
        {
          title: "Mistake #2",
          myth: "The desktop is only for drawing wallpaper.",
          truth:
            "The desktop is how you open programs and settings. That's real system control with your eyes.",
        },
        {
          title: "Mistake #3",
          myth: "Updates always break everything.",
          truth:
            "Updates often protect and improve the system. Do them thoughtfully.",
        },
      ],
    },
    {
      type: "text",
      text: "You can control the Pi with your eyes — through the desktop.",
    },
    {
      type: "text",
      text: "Then your phone buzzes with a message from a friend: \"So when's **your** game world gonna be ready? I'm waiting!\"",
    },
    {
      type: "text",
      text: "To answer \"soon\" instead of \"I don't know,\" you need to learn to talk to the Pi **in words**. That's how the **\"My World\"** project begins.",
    },
    {
      type: "text",
      text: "Next chapter — your first sentence in the terminal.",
    },
  ],
  remember: [
    "Pi OS is a Linux build for Raspberry Pi",
    "The desktop is control with your eyes",
    "Menu and settings are your map",
    "Updates are care for the system",
  ],
  commands: [],
  glossary: [
    {
      term: "Raspberry Pi OS",
      def: "The operating system (Linux build) for Raspberry Pi.",
    },
    {
      term: "Desktop",
      def: "The graphical screen with a menu and icons for running programs.",
    },
    {
      term: "Distribution (distro)",
      def: "A ready-made Linux \"bundle\": kernel + programs + settings.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Raspberry Pi OS is…",
      options: [
        "an operating system for Raspberry Pi",
        "the name of a charger",
        "a type of HDMI cable",
      ],
      answer: 0,
      hint: "OS = operating system.",
      explanation: "It's an OS prepared for Raspberry Pi boards.",
    },
    {
      type: "tf",
      text: "The desktop is only for drawing wallpaper.",
      answer: false,
      hint: "What else is on the desktop?",
      explanation: "The desktop is how you open programs and settings.",
    },
    {
      type: "error",
      prompt: "\"Pi OS and Linux have no connection at all\"",
      hint: "Which kernel?",
      explanation: "Pi OS is a Linux distribution for the board.",
      sample: "Pi OS is built on Linux.",
    },
    {
      type: "explain",
      prompt: "Why is the desktop handy for a beginner?",
      hint: "Buttons and pictures.",
      explanation: "The desktop makes the system clear without commands.",
      sample: "Everything is visible: menu, icons, settings.",
      optional: true,
    },
    {
      type: "whatif",
      prompt: "You don't see familiar icons. What do you do?",
      hint: "Setup wizard.",
      explanation: "The system may ask for language, network, and updates.",
      sample: "Finish first-time setup and confirm it's Pi OS.",
      optional: true,
    },
  ],
  next: 6,
};
