window.CHAPTER_03 = {
  id: 3,
  bookId: "sysadmin_en",
  part: 1,
  partTitle: "Meet the Raspberry Pi",
  title: "First Boot",
  icon: "led",
  learn: [
    "Why the Pi needs a microSD card with an operating system",
    "How to write Raspberry Pi OS and set up the Pi before starting",
    "What to check if the screen stays black",
  ],
  content: [
    {
      type: "text",
      text: "You bought a new game.",
    },
    {
      type: "text",
      text: "The box looks great. The pieces are on the table.",
    },
    {
      type: "text",
      text: "But there are **no rules** inside.",
    },
    {
      type: "text",
      text: "What happens? Nobody knows where to start.",
    },
    {
      type: "text",
      text: "The Raspberry Pi is a real computer. It has \"doors\" for cables. But without **the rules of the game**, it doesn't know what to do after you turn it on.",
    },
    {
      type: "text",
      text: "How does the Pi start working for the first time?",
    },
    {
      type: "text",
      text: "Maybe your hands are already reaching for the power cable. *\"Come on, let's go!\"*",
    },
    {
      type: "text",
      text: "Hold on. An administrator sets the stage first.",
    },
    {
      type: "image",
      src: "nf03-boot",
      alt: "First boot of a Raspberry Pi.",
      caption: "First boot — when the system appears on screen for the first time.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Monitor showing Raspberry Pi OS boot splash or loading screen with colors softly blurred, Pi LED lit, first boot excitement, bright room",
    },
    {
      type: "h2",
      text: "A book on a tiny card",
    },
    {
      type: "text",
      text: "Remember that mysterious slot on the board?",
    },
    {
      type: "text",
      text: "That's where the **microSD** card goes.",
    },
    {
      type: "text",
      text: "Picture a book. If every page is blank, there's nothing to read.",
    },
    {
      type: "text",
      text: "Same with the Pi: without a \"book\" on the microSD, it doesn't know where to start after you turn it on.",
    },
    {
      type: "text",
      text: "First you write the **operating system** onto the card — the computer's main program. That's the \"rules of the game.\"",
    },
    {
      type: "text",
      text: "For the Raspberry Pi, people often choose **Raspberry Pi OS**. It tells the board how to show the screen, open files, and run other programs.",
    },
    {
      type: "text",
      text: "So **the microSD isn't just photo storage**. The operating system **lives** on it.",
    },
    {
      type: "think",
      id: "q1",
      question: "What should you do FIRST?",
      options: [
        { id: "a", text: "Power first — the system will appear on its own" },
        { id: "b", text: "Put the system on the microSD first, then set up cables, then power" },
        { id: "c", text: "Headphones only" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "First: **system on the microSD**. Power without the \"book\" often means a black screen and confusion.",
    },
    {
      type: "h2",
      text: "How to write the \"book\"",
    },
    {
      type: "text",
      text: "Imagine copying the rules of a game from a big notebook onto a tiny card.",
    },
    {
      type: "text",
      text: "You do this on **another computer** with a program like **Raspberry Pi Imager**: pick Raspberry Pi OS, pick the card, and wait for it to finish.",
    },
    {
      type: "image",
      src: "nf03-sdwrite",
      alt: "Writing the system to a microSD card.",
      caption: "System on the card first — then the card goes in the Pi.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Laptop with microSD card in USB adapter, Raspberry Pi Imager style setup suggested without logos, adult and child hands together, bright desk, preparation step",
    },
    {
      type: "text",
      text: "When the write is done, slide the card carefully into the slot. Label side up. Push until it clicks. Don't force it.",
    },
    {
      type: "h2",
      text: "Eyes and hands in place",
    },
    {
      type: "text",
      text: "Picture an actor on stage.",
    },
    {
      type: "text",
      text: "The script is ready. But without lights and a microphone, the audience can't see or hear anything.",
    },
    {
      type: "text",
      text: "Plug in what you'll need to learn:",
    },
    {
      type: "ul",
      items: [
        "🖥️ **HDMI** — to the monitor",
        "⌨️ **USB** — keyboard",
        "🖱️ **USB** — mouse",
      ],
    },
    {
      type: "image",
      src: "nf03-cables",
      alt: "Cables connected to the Raspberry Pi.",
      caption: "Cables in place — the stage is almost ready.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi 5 with HDMI, keyboard, mouse, Ethernet cables all connected but power not yet plugged, tidy checklist-ready desk, bright daylight",
    },
    {
      type: "text",
      text: "You can set up the network later. For the first boot, what matters most is the system, a screen, and a way to click or type.",
    },
    {
      type: "h2",
      text: "Power goes in last",
    },
    {
      type: "text",
      text: "Picture pressing the \"Start\" button at a race.",
    },
    {
      type: "text",
      text: "Better if every runner is already in position.",
    },
    {
      type: "text",
      text: "Only now — **USB‑C**, power.",
    },
    {
      type: "text",
      text: "Why last? Because the moment power arrives, the Pi starts reading the card and booting up. By then, everything you need should already be connected.",
    },
    {
      type: "think",
      id: "q2",
      question: "What should you connect BEFORE power?",
      options: [
        { id: "a", text: "Nothing — always plug in power first" },
        { id: "b", text: "The OS card and (ideally) HDMI with a keyboard" },
        { id: "c", text: "Bluetooth headphones only" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Before power — **microSD with the system**, and usually a screen + keyboard.",
    },
    {
      type: "h2",
      text: "What happens after you turn it on?",
    },
    {
      type: "text",
      text: "Picture an alarm clock.",
    },
    {
      type: "text",
      text: "It rings — and your body **wakes up**: eyes, hands, voice.",
    },
    {
      type: "text",
      text: "Pressing the power button is the alarm clock for the Pi. The board \"wakes up,\" reads the microSD — and within a few seconds the **first face** of the system appears on screen: loading, then the Raspberry Pi OS desktop.",
    },
    {
      type: "image",
      src: "nf03-desktop",
      alt: "Desktop after the first boot.",
      caption: "There it is — the system's first screen.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Monitor displaying Raspberry Pi OS desktop, icons and wallpaper softly blurred, success moment, Pi visible below monitor, cheerful bright setup",
    },
    {
      type: "text",
      text: "The system may ask for language, country, password, and Wi‑Fi. Go through the steps calmly.",
    },
    {
      type: "fact",
      title: "Wow!",
      text: "The first boot is like the first day at a new school. A little unfamiliar — but soon it'll feel normal.",
    },
    {
      type: "h2",
      text: "What if the screen stays black?",
    },
    {
      type: "text",
      text: "Picture turning on a flashlight — and getting no light.",
    },
    {
      type: "text",
      text: "Your first thought isn't \"throw away the flashlight.\" It's \"check the battery.\"",
    },
    {
      type: "text",
      text: "Don't panic. An administrator starts with the **simple stuff**:",
    },
    {
      type: "ul",
      items: [
        "Is the microSD inserted with Raspberry Pi OS written on it?",
        "Is HDMI plugged into the right ports?",
        "Is the monitor set to the correct input?",
        "Is power actually connected?",
      ],
    },
    {
      type: "text",
      text: "Most \"broken\" first boots are an empty card, a loose cable, or weak power.",
    },
    {
      type: "fact",
      title: "Golden rule",
      text: "Check the simple things first. That's how good administrators work.",
    },
    {
      type: "h2",
      text: "The big picture",
    },
    {
      type: "ul",
      items: [
        "**What is it?** First boot — loading the system from the microSD.",
        "**Why microSD?** The operating system lives on it.",
        "**How?** Imager → card in the slot → HDMI/keyboard → power last → calm troubleshooting.",
      ],
    },
    {
      type: "try",
      title: "🔍 Investigation: is the stage ready?",
      body: "Before power, check with your eyes:",
      checklist: [
        "Is Raspberry Pi OS written on the microSD?",
        "Is the card inserted in the slot?",
        "Is HDMI connected?",
        "Are the keyboard (and mouse) in USB?",
        "Only now — USB‑C power",
        "What did you see on screen? Write one word",
      ],
      footer: "How many items were ready before you plugged in power?",
    },
    {
      type: "project",
      title: "An administrator's workspace",
      steps: [
        "Place the Pi so you can see the ports.",
        "Write the order in your notebook: card → cables → power.",
        "After a successful login, write down what worked on the first try.",
      ],
    },
    {
      type: "draw",
      text: "Draw 4 steps: write the OS → microSD in the Pi → cables → power.",
    },
    {
      type: "diary",
      lines: [
        "What was most exciting about the first boot?",
        "If the screen was black — what did you check first?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "Always turn on power first.",
          truth: "Put the OS card and needed cables in place first. Power goes in last.",
        },
        {
          title: "Mistake #2",
          myth: "An empty card will work fine.",
          truth: "Write Raspberry Pi OS first. Otherwise there's nothing to read.",
        },
        {
          title: "Mistake #3",
          myth: "Black screen = broken board, throw it away.",
          truth: "Check microSD, HDMI, monitor, and power first.",
        },
      ],
    },
    {
      type: "text",
      text: "Congratulations: the computer is alive. There's a system on the screen.",
    },
    {
      type: "text",
      text: "One try — and the Pi has \"woken up.\" That's the first step toward your future **\"My World\"** project — but first you need to understand who's running the show.",
    },
    {
      type: "text",
      text: "But who actually controls all of this \"under the hood\"?",
    },
    {
      type: "text",
      text: "Next — meet the invisible conductor.",
    },
  ],
  remember: [
    "OS usually lives on the microSD",
    "Write the system first, then boot",
    "Power goes in last",
    "Black screen: check the simple things first",
  ],
  commands: [],
  glossary: [
    {
      term: "Raspberry Pi OS",
      def: "The operating system people often install on a Raspberry Pi.",
    },
    {
      term: "microSD",
      def: "The card where the Pi's operating system is usually stored.",
    },
    {
      term: "Operating system",
      def: "The main program without which a computer doesn't know how to work.",
    },
    {
      term: "Imager",
      def: "A program for writing an operating system to a memory card.",
    },
    {
      term: "Boot",
      def: "Starting the system from storage after you turn on power.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "What should you do before plugging in power?",
      options: [
        "prepare the OS on the card and connect cables",
        "yank cables at random right away",
        "break the microSD",
      ],
      answer: 0,
      hint: "Book → eyes/hands → power.",
      explanation: "System and connections first, power last.",
    },
    {
      type: "tf",
      text: "You always plug in power first, before the card.",
      answer: false,
      hint: "Power goes in last.",
      explanation: "Card and cables first, then power.",
    },
    {
      type: "fill",
      prompt: "The OS often installed on a Pi:",
      answer: "Raspberry Pi OS",
      hint: "Pi + OS.",
      explanation: "The official, user-friendly system for the board.",
      optional: true,
    },
    {
      type: "whatif",
      prompt: "You inserted an empty card. What happens?",
      hint: "Empty book.",
      explanation: "Without an OS, there's nothing to read.",
      sample: "The Pi won't boot properly.",
      optional: true,
    },
  ],
  next: 4,
};
