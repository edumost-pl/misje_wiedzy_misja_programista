window.CHAPTER_18 = {
  id: 18,
  bookId: "sysadmin_en",
  part: 5,
  partTitle: "Your Game Server",
  title: "Installing the Server",
  icon: "minecraft",
  learn: [
    "Why you check Java first",
    "How to keep the server in a clear folder and where server.jar comes from",
    "Why the EULA agreement matters",
  ],
  content: [
    {
      type: "text",
      text: "You want **your own** Minecraft server.",
    },
    {
      type: "text",
      text: "A world for friends. Your rules. Your \"kitchen\" on the shelf.",
    },
    {
      type: "text",
      text: "Remember the **\"My World\"** project? The `my-world` folder and `world-rules.txt` file are already waiting. Now a **real** server is moving in.",
    },
    {
      type: "text",
      text: "You can already picture everyone logging in and building together.",
    },
    {
      type: "text",
      text: "Stop. Is the **kitchen** ready yet?",
    },
    {
      type: "text",
      text: "Can you really just \"double-click\" and the world appears?",
    },
    {
      type: "text",
      text: "Admins do not work that way. First they check: **Do you have the right tools?** **Where do the files live?** **Did you agree to the rules?**",
    },
    {
      type: "image",
      src: "nf18-a",
      alt: "Getting ready for the server",
      caption: "Kitchen first — then cake.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Bright kitchen stove off then oven ready, ingredients laid out, metaphor for Java before Minecraft server",
    },
    {
      type: "h2",
      text: "Is the \"stove\" on?",
    },
    {
      type: "text",
      text: "Imagine you want to bake a cake.",
    },
    {
      type: "text",
      text: "Would you try to bake a cake on a **cold** stove?",
    },
    {
      type: "text",
      text: "The batter stays raw. Minecraft Server will not \"bake\" without its hot stove either.",
    },
    {
      type: "text",
      text: "In the Linux world, that stove is called **Java**. To check it is like touching the stove with your hand: `java -version`.",
    },
    {
      type: "code",
      text: "# Check whether Java is installed and which version\npi@raspberrypi:~$ java -version\n\n# If the command is not found — install Java first (with an adult)\n# Then check again",
    },
    {
      type: "text",
      text: "If you see a version number — the \"stove\" is on. If you get \"command not found\" — install Java **with an adult** first.",
    },
    {
      type: "think",
      id: "q1",
      question: "Before installing a server, people often check…",
      options: [
        { id: "a", text: "java -version" },
        { id: "b", text: "the color of the sticker on the Pi" },
        { id: "c", text: "only the speaker volume" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: Java — the \"stove\" for the server — must be there and you need to know the version.",
    },
    {
      type: "image",
      src: "nf18-b",
      alt: "Checking Java",
      caption: "The kitchen is ready when you have the right tool.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal java -version output blurred, success checkmark sticky note on monitor frame, bright",
    },
    {
      type: "h2",
      text: "Where does the \"recipe\" live?",
    },
    {
      type: "text",
      text: "Imagine a kitchen where everything is scattered in cabinets with no labels.",
    },
    {
      type: "text",
      text: "A month later you cannot find the flour or the pan.",
    },
    {
      type: "text",
      text: "A server needs a **clear home** too — one folder you will come back to again and again.",
    },
    {
      type: "code",
      text: "# Create a folder for the server\npi@raspberrypi:~$ mkdir ~/minecraft-server\n\n# Go into it\npi@raspberrypi:~$ cd ~/minecraft-server\n\n# Check where you are\npi@raspberrypi:~/minecraft-server$ pwd",
    },
    {
      type: "text",
      text: "Remember the path. An admin returns here often — to configure, start, and read logs.",
    },
    {
      type: "h2",
      text: "Where does server.jar come from?",
    },
    {
      type: "text",
      text: "You have a folder. But the **server itself** is a file like `server.jar` — the program that runs the world.",
    },
    {
      type: "text",
      text: "You do not pull it \"out of thin air.\" **With an adult:**",
    },
    {
      type: "ul",
      items: [
        "1. Find the **official** Minecraft Server download source (the Mojang / Minecraft site) — not a random link from chat",
        "2. Download the server file for the right **version** (the same one your friends use in the game)",
        "3. Put it in `~/minecraft-server` and check with `ls` — can you see `server.jar` (or whatever name your guide uses)?",
      ],
    },
    {
      type: "text",
      text: "The first run often **creates** world files and `eula.txt`. That is normal — the kitchen sets out its own dishes.",
    },
    {
      type: "fact",
      title: "Good to know",
      text: "Minecraft and Minecraft Server are products of Mojang Studios (Microsoft). In this book we teach **how a server works on a Pi** — we do not replace the official rules. Always read the EULA and install files **only with an adult** from an **official download source**. This is an unofficial educational guide.",
    },
    {
      type: "callout",
      variant: "tip",
      title: "Version = version",
      text: "If your friend has Minecraft 1.21 but the server is a different version — they often \"cannot join.\" Agree on the **same** version first.",
    },
    {
      type: "h2",
      text: "Game rules — the EULA",
    },
    {
      type: "text",
      text: "Before starting, the server asks you to **accept the license rules** — the EULA.",
    },
    {
      type: "text",
      text: "It is like signing \"I agree to play by the rules.\"",
    },
    {
      type: "text",
      text: "Usually in `eula.txt` you change a flag to show agreement — **only if you (with an adult) really do agree**.",
    },
    {
      type: "text",
      text: "Without that, the server may refuse to start.",
    },
    {
      type: "think",
      id: "q2",
      question: "Why read the EULA?",
      options: [
        { id: "a", text: "because without agreeing the server may not start properly" },
        { id: "b", text: "because that heats up Ethernet" },
        { id: "c", text: "because HDMI requires it" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Without accepting the EULA, startup often stops. This is not decoration — it is a requirement.",
    },
    {
      type: "image",
      src: "nf18-c",
      alt: "Server files",
      caption: "A tidy folder means less chaos.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Desk folder organizer with dedicated minecraft-server directory label blurred, Pi and monitor, tidy bright setup",
    },
    {
      type: "fact",
      title: "Admin checklist",
      text: "Java → folder → `server.jar` → EULA → only then start. Skip a step and you crash at the starting line.",
    },
    {
      type: "ul",
      items: [
        "**What is it?** Java — the \"stove\" for Minecraft Server",
        "**Where?** One clear folder + the `server.jar` file",
        "**Why the EULA?** Official agreement to the rules",
        "**Like in real life?** Kitchen first, then cake",
      ],
    },
    {
      type: "image",
      src: "nf18-d",
      alt: "Ready for configuration",
      caption: "Installation is the foundation.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Download folder with jar file icon blurred, child and adult hands pointing together, supervised install, bright",
    },
    {
      type: "try",
      title: "🔍 Explore: is the kitchen ready?",
      body: "This is foundation work — not \"just start it.\"",
      checklist: [
        "Run `java -version` — write down what you see",
        "If the command is missing — install Java **with an adult**",
        "Create `mkdir ~/minecraft-server` and `cd` into it",
        "Check `pwd` — is the path clear?",
        "**With an adult**, download `server.jar` from an official source into this folder",
        "`ls` — can you see the server file?",
        "**With an adult**, prepare the EULA (after the first run or per your guide)",
        "Write in your journal: what is ready, what is still needed, and **which game version**",
      ],
      footer: "Without a foundation, \"just start it\" often fails.",
    },
    {
      type: "draw",
      text: "Draw a checklist: Java → folder → server.jar → EULA.",
    },
    {
      type: "diary",
      lines: [
        "What did java -version show?",
        "What is the path to your server folder? Do you already have server.jar?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "You can ignore requirements and click randomly.",
          truth: "Dependencies and structure come first.",
        },
        {
          title: "Mistake #2",
          myth: "The folder can be named anything and get lost.",
          truth: "Keep a clear, memorable path.",
        },
        {
          title: "Mistake #3",
          myth: "Nobody needs the EULA.",
          truth: "Without agreeing, the server may not start.",
        },
      ],
    },
    {
      type: "text",
      text: "The kitchen is ready. The \"stove\" is on. You found a place for the recipe. The rules are signed.",
    },
    {
      type: "text",
      text: "But **what** should the world look like? How many players? Which mode?",
    },
    {
      type: "text",
      text: "Next up — **setting the rules** in text config files.",
    },
  ],
  remember: [
    "Check java -version first",
    "Clear folder + server.jar from an official source",
    "Game version = server version",
    "The EULA is required",
    "Order beats chaos",
  ],
  commands: [
    { cmd: "java -version", does: "Checks whether Java is installed" },
    { cmd: "mkdir ~/minecraft-server", does: "Creates the project folder" },
    { cmd: "ls ~/minecraft-server", does: "Checks whether server files are in place" },
  ],
  glossary: [
    {
      term: "Java",
      def: "The runtime many Minecraft Server builds need to run.",
    },
    {
      term: "server.jar",
      def: "The Minecraft server program file (placed in your project folder).",
    },
    {
      term: "EULA",
      def: "The license agreement — without accepting it, the server may not start.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Before installing, people often check…",
      options: [
        "java -version",
        "sticker color",
        "volume",
      ],
      answer: 0,
      hint: "Runtime",
      explanation: "Minecraft Server runs on Java.",
    },
    {
      type: "tf",
      text: "Installation is just double-clicking with no requirements.",
      answer: false,
      hint: "Dependencies",
      explanation: "You need Java, a folder, and structure.",
    },
    {
      type: "fill",
      prompt: "Command to check Java:",
      answer: "java -version",
      hint: "java and version",
      explanation: "Shows the version.",
    },
    {
      type: "whatif",
      prompt: "java -version says the command is not found?",
      hint: "Dependency first",
      explanation: "Without Java the server will not start.",
      sample: "Install Java and check again.",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"You can drop files in a random folder and forget them\"",
      hint: "Admins come back",
      explanation: "A clear path saves hours.",
      sample: "Keep a clear, memorable path.",
      optional: true,
    },
  ],
  next: 19,
};
