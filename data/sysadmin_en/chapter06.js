window.CHAPTER_06 = {
  id: 6,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "The Terminal",
  icon: "terminal",
  learn: [
    "What the terminal and prompt are",
    "The commands pwd, ls, and clear",
    "How to read the system's reply after Enter",
  ],
  content: [
    {
      type: "text",
      text: "Your friend texts: \"When will you have **your own** game world ready? I want to join!\"",
    },
    {
      type: "text",
      text: "To someday answer \"come on in,\" you need to control the Pi with more than a mouse. On a server there are often no icons — just a **terminal**: you type a short word, the system replies with a line.",
    },
    {
      type: "text",
      text: "In this book we'll build the **\"My World\"** project step by step. Right now — **Part 1**: learn to talk in text.",
    },
    {
      type: "fact",
      title: "Read along without a Pi",
      text: "No terminal handy? **Read the commands out loud**, imagine the system's reply, and write in your diary. That still trains an administrator's brain.",
    },
    {
      type: "text",
      text: "Like when you ask Mom \"where are my socks?\" and she says \"top drawer\" — you'll write short commands to the system. No extra buttons.",
    },
    {
      type: "text",
      text: "On the Pi desktop there are lots of icons — click with your eyes. But there's also a window where the computer talks to you **in text**: you type a short word — the system replies with a line.",
    },
    {
      type: "text",
      text: "Maybe you're thinking: *\"A black window looks scary. Why bother if there's a menu?\"*",
    },
    {
      type: "text",
      text: "Because admins often work fast, precisely, and even without a pretty desktop — on a remote server, for example. This is their main language.",
    },
    {
      type: "image",
      src: "nf06-a",
      alt: "Terminal window on screen.",
      caption: "You type a command — the system replies in text.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal window open on monitor, green on black replaced by light theme terminal with blurred command text, child's hands on keyboard, bright desk",
    },
    {
      type: "h2",
      text: "Texting the system",
    },
    {
      type: "text",
      text: "Picture a chat.",
    },
    {
      type: "text",
      text: "You write one sentence. Your friend replies.",
    },
    {
      type: "text",
      text: "That's how the **terminal** works — a window for text commands.",
    },
    {
      type: "text",
      text: "1. Open **Terminal**. 2. See the **prompt**. 3. Type a command. 4. Press **Enter**.",
    },
    {
      type: "text",
      text: "On Raspberry Pi OS the prompt often looks like: `pi@raspberrypi:~$`. Here **pi** is your username, **raspberrypi** is the computer's name, **~** means \"I'm home,\" and **$** means \"waiting for a command.\"",
    },
    {
      type: "text",
      text: "Before Enter, the command is just typed. After Enter — it runs.",
    },
    {
      type: "think",
      id: "q1",
      question: "After typing a command, what do you press?",
      options: [
        { id: "a", text: "Enter" },
        { id: "b", text: "the power button" },
        { id: "c", text: "HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: **Enter**. Power and HDMI have nothing to do with this.",
    },
    {
      type: "h2",
      text: "Three first \"phrases\"",
    },
    {
      type: "text",
      text: "Picture being led into a **strange house** with a blindfold on.",
    },
    {
      type: "text",
      text: "They take it off — and you don't know **which room** you're in.",
    },
    {
      type: "text",
      text: "Anyone's first question: \"**Where am I?**\"",
    },
    {
      type: "text",
      text: "In the terminal, **pwd** answers that — the full address, like on an envelope: `/home/pi`.",
    },
    {
      type: "code",
      text: "# Show the current working folder\npi@raspberrypi:~$ pwd\n\n# Example reply\n/home/pi",
    },
    {
      type: "text",
      text: "Picture walking into a house and asking \"which room am I in?\" `pwd` answers exactly. `/home/pi` is your home folder on the Pi.",
    },
    {
      type: "image",
      src: "nf06-b",
      alt: "The pwd command in the terminal.",
      caption: "pwd = print working directory — print your working folder.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal showing pwd command output path blurred, prompt line visible as shapes, sharp monitor bezel, daylight",
    },
    {
      type: "text",
      text: "Second question: \"**What's around me?**\"",
    },
    {
      type: "text",
      text: "You open a drawer — look inside. In the terminal, **ls** does that.",
    },
    {
      type: "code",
      text: "# List files and folders in the current directory\npi@raspberrypi:~$ ls\n\n# Example reply\nDesktop  Documents  Downloads  Music  Pictures  Videos",
    },
    {
      type: "text",
      text: "`pwd` tells you **where** you are. `ls` tells you **what's** around you.",
    },
    {
      type: "think",
      id: "q2",
      question: "Which command shows a list of files in the current folder?",
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
      text: "**ls** (list) — a list. `pwd` — the path. `clear` — clears the screen.",
    },
    {
      type: "text",
      text: "Third: the terminal is covered in old lines — like a chalkboard nobody wiped.",
    },
    {
      type: "text",
      text: "**clear** — \"wipe the glass.\" Files stay put. Only the **visible** mess disappears.",
    },
    {
      type: "code",
      text: "# Clear visible text in the terminal window\npi@raspberrypi:~$ clear\n\n# After that, only the prompt appears again\npi@raspberrypi:~$",
    },
    {
      type: "text",
      text: "Important: `clear` **does not delete files**. It only removes text from the window.",
    },
    {
      type: "image",
      src: "nf06-c",
      alt: "Clean terminal screen.",
      caption: "Clean on screen — files still in place.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal after clear command, mostly empty bright terminal window, calm organized screen, Pi desk setup",
    },
    {
      type: "fact",
      title: "Precision matters",
      text: "To the system, `ls` and `sl` are different things. One letter can change everything. The terminal loves accuracy.",
    },
    {
      type: "image",
      src: "nf06-d",
      alt: "A kid typing a command in the terminal.",
      caption: "Type calmly. Check with your eyes. Then Enter.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child finger hovering over Enter key on keyboard, terminal on monitor in background blurred, thoughtful calm moment, bright lighting",
    },
    {
      type: "h2",
      text: "Quick recap",
    },
    {
      type: "ul",
      items: [
        "**pwd** — where am I (`/home/pi`)",
        "**ls** — what's in the folder",
        "**clear** — clean screen (not deleting files)",
      ],
    },
    {
      type: "try",
      title: "🔍 Investigation: three phrases",
      body: "Open the terminal and run these one by one. Type after `$`, then Enter:",
      checklist: [
        "Open Terminal",
        "Type `pwd` — what did the system reply? (often `/home/pi`)",
        "Type `ls` — how many names did you see?",
        "Type `clear` — is the screen clean?",
        "Type `pwd` again — are you still \"in the same place\"?",
        "Write in your diary: what surprised you",
      ],
      footer: "Files still there after clear? Then you understood the command.",
    },
    {
      type: "draw",
      text: "Draw a terminal window with the line `pi@raspberrypi:~$` and the commands pwd and ls.",
    },
    {
      type: "diary",
      lines: [
        "What did the system reply to pwd?",
        "Did the terminal feel easier or harder than the menu?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "The terminal is only for movie hackers.",
          truth:
            "It's a normal tool for administrators, programmers, and explorers.",
        },
        {
          title: "Mistake #2",
          myth: "clear deletes all files on the disk.",
          truth: "clear only cleans what you see in the window. Files stay.",
        },
        {
          title: "Mistake #3",
          myth: "You can type whatever — the system always understands.",
          truth: "Commands must be exact. A typo = a different result.",
        },
      ],
    },
    {
      type: "text",
      text: "You know how to ask \"where am I?\" and \"what's here?\"",
    },
    {
      type: "text",
      text: "The **\"My World\"** project, **Part 2**. Your friend asks again: \"So where's the server folder already?\"",
    },
    {
      type: "text",
      text: "But standing still isn't enough. Next we'll learn to **walk** between folders.",
    },
  ],
  remember: [
    "The terminal is a text conversation",
    "Prompt is often: pi@raspberrypi:~$",
    "pwd — current path",
    "ls — folder contents",
    "clear — clean screen, not delete",
  ],
  commands: [
    { cmd: "pwd", does: "Shows the current folder" },
    { cmd: "ls", does: "Shows files and folders here" },
    { cmd: "clear", does: "Clears the terminal screen" },
  ],
  glossary: [
    { term: "Terminal", def: "A window where you type text commands for the system." },
    { term: "Command", def: "A short text instruction for the OS." },
    {
      term: "Prompt",
      def: "A line like pi@raspberrypi:~$ where the system waits for a command.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "The terminal is…",
      options: [
        "a text window for commands",
        "just a calculator",
        "an HDMI port",
      ],
      answer: 0,
      hint: "You type words — the system replies in text.",
      explanation: "The terminal is a command interface for controlling the system.",
    },
    {
      type: "tf",
      text: "pwd shows the current folder.",
      answer: true,
      hint: "print working directory.",
      explanation: "Yes. pwd prints the path where you are now.",
    },
    {
      type: "fill",
      prompt: "Which command shows a list of files?",
      answer: "ls",
      hint: "Two letters from list.",
      explanation: "ls shows the contents of a directory.",
    },
    {
      type: "match",
      prompt: "Match each command to what it does:",
      hint: "pwd ≈ place, ls ≈ list.",
      explanation: "Three basic look-around commands.",
      pairs: [
        ["pwd", "where I am now"],
        ["ls", "what's in the folder"],
        ["clear", "clear the screen"],
      ],
      optional: true,
    },
    {
      type: "whatif",
      prompt: "The terminal screen is cluttered. What do you do?",
      hint: "There's a command to \"wipe the window.\"",
      explanation: "clear cleans the visible area. It doesn't touch files.",
      sample: "Run clear.",
      optional: true,
    },
  ],
  next: 7,
};
