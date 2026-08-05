window.CHAPTER_19 = {
  id: 19,
  bookId: "sysadmin_en",
  part: 5,
  partTitle: "Your Game Server",
  title: "Configuration",
  icon: "minecraft",
  learn: [
    "Why a game world needs rules",
    "How to move ideas from world-rules.txt into server.properties",
    "How to edit config files carefully",
  ],
  content: [
    {
      type: "text",
      text: "Your friends joined your server.",
    },
    {
      type: "text",
      text: "And then — someone in creative mode breaks everything. Or there are too many players. Or the world is the wrong mode.",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"I need to yell in chat!\"*",
    },
    {
      type: "text",
      text: "Admins do something else. They go to the **world rules** — a text settings file.",
    },
    {
      type: "image",
      src: "nf19-a",
      alt: "World rules",
      caption: "The world follows rules. Rules live in a file.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Open book of rules on desk next to blurred generic blocky toy cubes, bright, laws not chaos",
    },
    {
      type: "h2",
      text: "The world's constitution",
    },
    {
      type: "text",
      text: "Imagine a country with no laws.",
    },
    {
      type: "text",
      text: "Someone breaks things, someone yells, nobody knows the rules. Chaos.",
    },
    {
      type: "text",
      text: "Minecraft Server has a **constitution** — a plain text file with rules: how many players, which mode, what is allowed.",
    },
    {
      type: "text",
      text: "It is often called `server.properties`. Remember nano? That is how an admin **writes the laws** of the world.",
    },
    {
      type: "wow",
      title: "✨ That is amazing!",
      text: "Remember `~/my-world/world-rules.txt`? You already **wrote** world rules in your own words. Now those same ideas become **lines** in `server.properties` — and the game listens.",
    },
    {
      type: "diagram",
      title: "From notebook to server laws",
      layout: "flow",
      items: [
        { label: "world-rules.txt", text: "\"Max players: 5. Do not break other people's builds.\"" },
        { label: "server.properties", text: "max-players=5 and other lines the server understands" },
        { label: "World in the game", text: "Friends see the rules inside Minecraft" },
      ],
      caption: "First the idea → then a line in the file → then how the world behaves.",
    },
    {
      type: "think",
      id: "q1",
      question: "Why read the config before changing it?",
      options: [
        { id: "a", text: "so you understand what you are changing" },
        { id: "b", text: "to turn off the sun" },
        { id: "c", text: "to heat up the SD card" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: understand the line first — then change it.",
    },
    {
      type: "h2",
      text: "Four lines kids love",
    },
    {
      type: "text",
      text: "You do not need to change **everything**. To get started, understand a few rules:",
    },
    {
      type: "ul",
      items: [
        "`max-players=5` — how many friends can be online at once (like in your `world-rules.txt`)",
        "`gamemode=survival` — game mode: survival (`survival`) or creative (`creative`)",
        "`difficulty=easy` — difficulty: `peaceful` / `easy` / `normal` / `hard`",
        "`pvp=true` — whether players can fight each other (`true` = yes, `false` = no)",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Bonus: world name",
      text: "`motd=My World on Pi` — short text that sometimes shows in the server list. You can pick a fun name.",
    },
    {
      type: "code",
      text: "# Example snippet (lines in your file may look slightly different)\n# max-players=5\n# gamemode=survival\n# difficulty=easy\n# pvp=true\n# motd=My World on Pi",
    },
    {
      type: "h2",
      text: "Editing carefully",
    },
    {
      type: "code",
      text: "# Go to the server folder and open the config\npi@raspberrypi:~/minecraft-server$ nano server.properties\n\n# Change only what you understand\n# Ctrl+O → Enter → Ctrl+X\n# After changes you usually need to restart the server",
    },
    {
      type: "ul",
      items: [
        "Change one setting at a time",
        "Write down what you changed",
        "Do not delete random lines \"to make it look clean\"",
      ],
    },
    {
      type: "image",
      src: "nf19-b",
      alt: "Editing server.properties",
      caption: "Text → save → check.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. nano editor open on server.properties file, property lines blurred, save workflow, bright monitor",
    },
    {
      type: "fact",
      title: "Life ring",
      text: "Before a big change, copy the file (`cp server.properties server.properties.bak`). If something goes wrong — you can bring back the old rules.",
    },
    {
      type: "image",
      src: "nf19-c",
      alt: "Config backup",
      caption: "A copy = insurance.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Two identical file folders one marked backup with copy icon, bright desk, safety net metaphor",
    },
    {
      type: "image",
      src: "nf19-d",
      alt: "Rules for friends",
      caption: "Good rules = calm play.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Two children at laptops smiling, Pi server on shelf, fair play mood, bright living room",
    },
    {
      type: "try",
      title: "🔍 Explore the rules",
      body: "If you already have a server.properties file:",
      checklist: [
        "`cd ~/minecraft-server`",
        "`ls` — can you see server.properties?",
        "`cp server.properties server.properties.bak`",
        "`nano server.properties` — find max-players, gamemode, difficulty, pvp",
        "Also open `cat ~/my-world/world-rules.txt` — compare with your written rules",
        "Do not save messy changes yet — just look first",
        "Exit (Ctrl+X). Write in your journal: which notebook rule will you move into the config first?",
      ],
      footer: "Looking ≠ breaking things right away. Admins read before they act.",
    },
    {
      type: "draw",
      text: "Draw an arrow: world-rules.txt → server.properties → world in the game. Label three rules.",
    },
    {
      type: "diary",
      lines: [
        "Which rule from world-rules.txt will you move into server.properties first?",
        "Why make a copy of the config before changes?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "You can change every line randomly.",
          truth: "Change only what you understand. Otherwise the world \"breaks.\"",
        },
        {
          title: "Mistake #2",
          myth: "You do not need to save in nano.",
          truth: "Without saving, your changes disappear.",
        },
        {
          title: "Mistake #3",
          myth: "A file copy is extra work.",
          truth: "A copy saves you when an experiment fails.",
        },
      ],
    },
    {
      type: "text",
      text: "The rules are ready on paper.",
    },
    {
      type: "text",
      text: "Next — the most exciting part: is the server **really** alive?",
    },
  ],
  remember: [
    "world-rules.txt = ideas; server.properties = laws for the game",
    "Start with: max-players, gamemode, difficulty, pvp",
    "Read → change carefully → save",
    "Make a copy before big changes",
    "After changes you usually need a restart",
  ],
  commands: [
    { cmd: "nano server.properties", does: "Edit server settings" },
    { cmd: "cp server.properties server.properties.bak", does: "Make a backup copy of the config" },
    { cmd: "cat ~/my-world/world-rules.txt", does: "Review your rules from the project notebook" },
  ],
  glossary: [
    { term: "Config", def: "A file with settings for a program or server." },
    { term: "server.properties", def: "The usual rules file for Minecraft Server." },
    { term: "gamemode", def: "Game mode (for example survival or creative)." },
    { term: "pvp", def: "Whether players can fight each other." },
  ],
  check: [
    {
      type: "mc",
      prompt: "A server config is mostly…",
      options: [
        "text rules",
        "an HDMI cable",
        "case color",
      ],
      answer: 0,
      hint: "nano again.",
      explanation: "Many settings are plain text.",
    },
    {
      type: "tf",
      text: "Before a big change, you should copy the config file.",
      answer: true,
      hint: "Insurance.",
      explanation: "Yes. Easier to go back.",
    },
    {
      type: "fill",
      prompt: "Typical Minecraft Server settings file:",
      answer: "server.properties",
      hint: "properties.",
      explanation: "server.properties holds many rules.",
    },
    {
      type: "whatif",
      prompt: "After edits the world \"went crazy.\" What now?",
      hint: "bak.",
      explanation: "A copy saves a failed experiment.",
      sample: "Restore the config copy and restart.",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"Change every line at once — it is faster\"",
      hint: "Less chaos.",
      explanation: "Small steps mean fewer surprises.",
      sample: "Better one at a time, with understanding.",
      optional: true,
    },
  ],
  next: 20,
};
