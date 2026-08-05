window.CHAPTER_10 = {
  id: 10,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "The nano Editor",
  icon: "code",
  learn: [
    "What a console editor is and why admins need one",
    "How to open, edit, save, and quit nano",
    "Basic shortcuts (^ = Ctrl)",
  ],
  content: [
    {
      type: "text",
      text: "Project \"My World,\" **Part 5**. You created `world-rules.txt` — but inside there is only a name. Write the **real rules** for your world: how many players, what can be broken, how to greet each other.",
    },
    {
      type: "text",
      text: "You created the file world-rules.txt — a blank page with a name.",
    },
    {
      type: "text",
      text: "But **nothing is inside**. You want to write: \"Max 5 players\" or \"Do not break other people's builds.\"",
    },
    {
      type: "text",
      text: "Stop. **How do you write text inside a file right in the terminal?**",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"Why not a normal app with buttons and a mouse?\"*",
    },
    {
      type: "text",
      text: "Because on servers there is often only a **black terminal window**. No Word. No mouse. An admin writes text **right in the terminal** — with a special editor.",
    },
    {
      type: "image",
      src: "nf10-a",
      alt: "The nano editor window",
      caption: "Text on top, command hints at the bottom.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. GNU nano editor layout on monitor, white title bar and bottom shortcut bar visible, center text blurred, bright screen capture style",
    },
    {
      type: "h2",
      text: "A Notepad in a Black Window",
    },
    {
      type: "text",
      text: "Picture this: you are on a server in a dark room.",
    },
    {
      type: "text",
      text: "No mouse. No Word. Just a **black window** and a keyboard.",
    },
    {
      type: "text",
      text: "You need to write world rules — right here, right now. Linux gives you a simple notepad for that: **nano**.",
    },
    {
      type: "text",
      text: "Open it — and **start typing right away**. No weird modes. Like a page waiting for your words.",
    },
    {
      type: "ul",
      items: [
        "📝 write and edit plain text",
        "⚙️ fix config files (settings files)",
        "⌨️ control everything with **keyboard shortcuts**",
      ],
    },
    {
      type: "fact",
      title: "Whoa!",
      text: "A lot of server settings are plain text files. An admin opens them in nano and edits line by line.",
    },
    {
      type: "h2",
      text: "Open the World Rules",
    },
    {
      type: "text",
      text: "Remember `world-rules.txt` from the \"My World\" project? Time to write inside it.",
    },
    {
      type: "text",
      text: "In the terminal, type **nano** and the file name — and the black window becomes your notepad.",
    },
    {
      type: "code",
      text: "# Open (or create) the rules file\npi@raspberrypi:~/my-world$ nano world-rules.txt",
    },
    {
      type: "text",
      text: "The **editor window** opens right away. Look at it calmly — like a room map:",
    },
    {
      type: "nanowindow",
      file: "world-rules.txt",
      body: "Max players: 5. Do not break other people's builds.",
      modified: true,
      status: "New File",
      caption: "This is what nano looks like: file name on top, your text in the middle, command cheat sheet at the bottom.",
    },
    {
      type: "ul",
      items: [
        "⬆️ **White bar at the top** — editor name, file name (`world-rules.txt`), and **Modified** if there are unsaved changes",
        "⬛ **Black field in the center** — where you type (here: world rules)",
        "⬜ **Blinking rectangle** — the cursor: the next letter goes here",
        "📋 **`[ New File ]` line** — a status hint (for example, that the file is new)",
        "⬇️ **Two rows at the bottom** — command menu. Everything is keyboard-controlled",
      ],
    },
    {
      type: "image",
      src: "nf10-nano-window.jpg",
      alt: "A real screenshot of the GNU nano window with world-rules.txt",
      caption: "This is what nano really looks like on screen. The hints at the bottom are your permanent \"menu without a mouse.\"",
    },
    {
      type: "text",
      text: "Important: in the hints, the **`^`** symbol means the **Ctrl** key. So `^G` = **Ctrl+G** (help), `^O` = **Ctrl+O** (save), `^X` = **Ctrl+X** (exit).",
    },
    {
      type: "think",
      id: "q1",
      question: "In nano hints, the ^ symbol means…",
      options: [
        { id: "a", text: "the Ctrl key" },
        { id: "b", text: "the power button" },
        { id: "c", text: "the HDMI port" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Yes: **`^` = Ctrl**. Everything is keyboard-controlled.",
    },
    {
      type: "h2",
      text: "Start Typing Right Away",
    },
    {
      type: "text",
      text: "As soon as nano opens, you can type in the black field. The cursor shows where.",
    },
    {
      type: "text",
      text: "That is nano's main friendliness: **you do not need to switch into a special edit mode**.",
    },
    {
      type: "h2",
      text: "Save: Ctrl+O",
    },
    {
      type: "text",
      text: "Finished writing? To **save your changes and stay in the editor**:",
    },
    {
      type: "ul",
      items: [
        "**Ctrl+O** (Write Out) — save",
        "Check the file name at the bottom",
        "**Enter** — confirm",
      ],
    },
    {
      type: "code",
      text: "# After Ctrl+O and Enter, the file is written to disk\n# You are still inside nano and can keep writing",
    },
    {
      type: "h2",
      text: "Exit: Ctrl+X",
    },
    {
      type: "text",
      text: "To **leave** the editor — **Ctrl+X**.",
    },
    {
      type: "text",
      text: "If you changed the file, nano will ask something like *Save modified buffer?* (save changes?):",
    },
    {
      type: "ul",
      items: [
        "**Y** — yes, save (then Enter for the file name)",
        "**N** — no, exit without saving",
        "**Ctrl+C** — cancel exit and stay in the editor",
      ],
    },
    {
      type: "code",
      text: "# After you exit, the normal prompt comes back\npi@raspberrypi:~/my-world$",
    },
    {
      type: "think",
      id: "q2",
      question: "To save a file in nano without closing it, you need…",
      options: [
        { id: "a", text: "Ctrl+O, then Enter" },
        { id: "b", text: "just shut down the Pi" },
        { id: "c", text: "press the HDMI port" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "**Ctrl+O** saves. **Ctrl+X** exits (and may ask about saving again).",
    },
    {
      type: "h2",
      text: "Check — Do Not Trust Your Eyes Alone",
    },
    {
      type: "text",
      text: "An admin does not trust \"it looks right.\" After nano, look at the file again:",
    },
    {
      type: "code",
      text: "# Check that the text really landed on disk\npi@raspberrypi:~/my-world$ cat world-rules.txt\n\n# Example response\nMax players: 5. Do not break other people's builds. Greeting: MyWorld2026",
    },
    {
      type: "image",
      src: "nf10-c",
      alt: "Checking after nano",
      caption: "Open → edit → save → verify.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal showing cat world-rules.txt after editing, two commands workflow implied, blurred text, bright desk",
    },
    {
      type: "h2",
      text: "Shortcut Cheat Sheet",
    },
    {
      type: "ul",
      items: [
        "**Ctrl+O** — save (stay in nano)",
        "**Ctrl+X** — exit",
        "**Ctrl+W** — search for a word in the file",
        "**Ctrl+K** — cut a line",
        "**Ctrl+U** — paste a line",
        "**Ctrl+G** — help inside nano",
      ],
    },
    {
      type: "fact",
      title: "Not the Only Editor",
      text: "There are others (more complex). Nano is the friendliest start. Once you know the save-and-exit ritual, server configs are not scary.",
    },
    {
      type: "image",
      src: "nf10-d",
      alt: "Practicing nano",
      caption: "Shortcuts are your buttons without a mouse.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Close-up of keyboard with Ctrl key and letter keys sharp, finger pressing Ctrl, bright keyboard, learning shortcuts",
    },
    {
      type: "try",
      title: "🔍 Explore: World Rules in nano",
      body: "Step five of the \"My World\" project: write the rules your future server will follow.",
      checklist: [
        "Open the terminal",
        "`cd ~/my-world` (or create it: `mkdir -p ~/my-world`)",
        "`nano world-rules.txt`",
        "Write 2–3 rules for your world (players, what is allowed / not allowed)",
        "Ctrl+O → Enter (save)",
        "Add one more line",
        "Ctrl+X → Y → Enter (save and exit)",
        "`cat world-rules.txt` — is the text there?",
        "Bonus: `nano world-rules.txt` again, Ctrl+W — find your word",
        "Write in your journal: which key saves, and which key exits?",
      ],
      footer: "If cat showed your text — you are already writing in the terminal.",
    },
    {
      type: "draw",
      text: "Draw a nano screen: text field on top and a hint row ^O ^X ^W at the bottom. Label: ^ = Ctrl.",
    },
    {
      type: "diary",
      lines: [
        "Which key saves, and which key exits?",
        "Why does an admin need to edit text in the terminal?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "nano always saves everything by itself when you close the window.",
          truth: "You need Ctrl+O or Y when you Ctrl+X.",
        },
        {
          title: "Mistake #2",
          myth: "^G means the G key without Ctrl.",
          truth: "^ = Ctrl. So ^G is Ctrl+G.",
        },
        {
          title: "Mistake #3",
          myth: "You cannot touch server configs as text.",
          truth: "Actually: a lot of settings are plain text files.",
        },
      ],
    },
    {
      type: "text",
      text: "The \"My World\" section is ready: the `my-world` folder, files, rules in nano. Next — who you are in the system and how the Pi protects other people's doors from accidental damage.",
    },
  ],
  remember: [
    "nano = simple terminal editor",
    "^ in hints = Ctrl key",
    "Ctrl+O = save",
    "Ctrl+X = exit (Y/N if there were changes)",
    "Ctrl+W = search; Ctrl+K / Ctrl+U = line",
    "After edits, check with cat",
  ],
  commands: [
    { cmd: "nano file", does: "Open or create a file in the editor" },
    { cmd: "nano -v file", does: "Open read-only" },
    { cmd: "cat file", does: "Check saved text" },
  ],
  glossary: [
    {
      term: "nano",
      def: "A simple console text editor in Linux.",
    },
    {
      term: "Console editor",
      def: "A text editor you control in the terminal with a keyboard.",
    },
    {
      term: "Config",
      def: "A text file of settings for a program or server.",
    },
    {
      term: "^ (caret)",
      def: "In nano hints, means the Ctrl key.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "nano is…",
      options: [
        "a text editor in the terminal",
        "a type of charger",
        "a game",
      ],
      answer: 0,
      hint: "You edit text and configs with it.",
      explanation: "A friendly console editor for beginners.",
    },
    {
      type: "tf",
      text: "In nano hints, ^ means Ctrl.",
      answer: true,
      hint: "^G = ?",
      explanation: "Yes. ^G is Ctrl+G.",
    },
    {
      type: "fill",
      prompt: "Open world-rules.txt in nano:",
      answer: "nano world-rules.txt",
      hint: "editor + file name",
      explanation: "Opens an existing file or creates a new one.",
    },
    {
      type: "whatif",
      prompt: "You pressed Ctrl+X but you need your changes. What do you press?",
      hint: "Save modified buffer?",
      explanation: "Y = save, N = exit without saving.",
      sample: "Y, then Enter for the file name.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Spot the mistake: \"nano always saves by itself when you exit.\"",
      hint: "Without saving, edits can vanish.",
      explanation: "Saving is a deliberate admin action.",
      sample: "You need Ctrl+O or Y confirmation.",
      optional: true,
    },
  ],
  next: 11,
};
