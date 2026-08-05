window.CHAPTER_13 = {
  id: 13,
  bookId: "sysadmin_en",
  part: 3,
  partTitle: "System Administrator",
  title: "Processes",
  icon: "chip",
  learn: [
    "How a computer does many things \"at once\"",
    "What a process is — in plain words",
    "How to peek at the task list with ps and top",
  ],
  content: [
    {
      type: "text",
      text: "You opened Minecraft.",
    },
    {
      type: "text",
      text: "Then a browser with a video.",
    },
    {
      type: "text",
      text: "Then you turned on music.",
    },
    {
      type: "text",
      text: "And everything runs… as if **all at once**.",
    },
    {
      type: "text",
      text: "Wait. How is that possible?",
    },
    {
      type: "text",
      text: "Are there tiny helpers inside the Raspberry Pi — one playing, one scrolling pages, one spinning songs?",
    },
    {
      type: "image",
      src: "nf13-a",
      alt: "Several programs on one screen",
      caption: "Lots of jobs. One small computer. How does it keep up?",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic juggler keeping many colorful balls in air, one Pi board on table below, bright circus-white studio, multitasking metaphor",
    },
    {
      type: "h2",
      text: "The juggler's secret",
    },
    {
      type: "text",
      text: "Picture a juggler with three balls.",
    },
    {
      type: "text",
      text: "They only have **two hands**. But three balls are in the air.",
    },
    {
      type: "text",
      text: "They do not hold all of them at once. They switch very fast: toss one — catch another — toss again.",
    },
    {
      type: "text",
      text: "Your eyes see \"everything together.\" In reality, the hands work **one at a time** — just very quickly.",
    },
    {
      type: "text",
      text: "A computer works almost the same way.",
    },
    {
      type: "fact",
      title: "Wow!",
      text: "The processor often \"juggles\" tasks thousands of times per second. To you it looks like everything happens at once. To the chip, it is a fast line.",
    },
    {
      type: "h2",
      text: "Each program is its own job",
    },
    {
      type: "text",
      text: "Every time you start a program, the computer gets a new **job**.",
    },
    {
      type: "text",
      text: "Minecraft — one job.",
    },
    {
      type: "text",
      text: "The browser — another.",
    },
    {
      type: "text",
      text: "Music — a third.",
    },
    {
      type: "text",
      text: "Even when you have nothing open, the Pi already has its own \"quiet\" jobs: keeping time, watching the network, managing the screen…",
    },
    {
      type: "text",
      text: "The computer calls these jobs **processes** — the \"balls in the air\" right now.",
    },
    {
      type: "text",
      text: "The Pi does not shout \"this is too hard!\" It just **juggles**. A good admin learns to see: **who** is catching all the balls right now?",
    },
    {
      type: "think",
      id: "q1",
      question: "If you open a game and a browser together, what is the minimum number of processes from those two programs?",
      options: [
        { id: "a", text: "at least two — one per program" },
        { id: "b", text: "always exactly zero" },
        { id: "c", text: "only one for the whole computer, forever" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: each running program gives the computer its own job — its own process. (Sometimes one program starts even more, but the main idea is — there can be many.)",
    },
    {
      type: "image",
      src: "nf13-b",
      alt: "Juggler and processes",
      caption: "One Pi — many jobs in the air.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi 5 with monitor showing multiple blurred app windows concept, busy but organized bright desk",
    },
    {
      type: "h2",
      text: "Why does an admin need to know this?",
    },
    {
      type: "text",
      text: "Picture a kitchen. Soup is boiling. A pan starts to burn. Someone forgot the kettle.",
    },
    {
      type: "text",
      text: "A good cook does not yell: \"The kitchen is broken!\" They ask: **what exactly is on the stove right now?**",
    },
    {
      type: "text",
      text: "Same with a Raspberry Pi.",
    },
    {
      type: "text",
      text: "When it suddenly feels \"slow,\" an admin does not panic. They ask: **which job ate all the power?**",
    },
    {
      type: "ul",
      items: [
        "**What is it?** A process — a program working right now",
        "**Why care?** To see who is loading the computer",
        "**Where to look?** In a special list in the terminal",
        "**Like in real life?** A classroom chore board: who is doing what",
      ],
    },
    {
      type: "h2",
      text: "Idea first — command second",
    },
    {
      type: "text",
      text: "You already know the secret.",
    },
    {
      type: "text",
      text: "Now you can peek at the **job list** on your Pi.",
    },
    {
      type: "text",
      text: "There is a command that takes a **photo** of the kitchen: what is on the stove this second.",
    },
    {
      type: "text",
      text: "It is short: `ps`.",
    },
    {
      type: "code",
      text: "# Take a \"photo\" of processes right now\npi@raspberrypi:~$ ps\n\n# Example output (your lines will differ)\n  PID TTY          TIME CMD\n  812 pts/0    00:00:00 bash\n  901 pts/0    00:00:00 ps",
    },
    {
      type: "text",
      text: "You do not need to understand every letter the first time.",
    },
    {
      type: "text",
      text: "The big discovery: **here they are — live jobs**. Each row is like one ball in the juggler's hands.",
    },
    {
      type: "text",
      text: "The **CMD** column often shows the program name. That is where to look for something familiar.",
    },
    {
      type: "image",
      src: "nf13-c",
      alt: "Process list in the terminal",
      caption: "ps — a snapshot. Not a movie, a single frame.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal ps command listing processes, rows blurred, snapshot moment, bright screen",
    },
    {
      type: "h2",
      text: "What if you want \"video\"?",
    },
    {
      type: "text",
      text: "`ps` is a photo. There is also a command that updates the list **live**, like a camera.",
    },
    {
      type: "text",
      text: "It is called `top` (the most active ones show up at the top).",
    },
    {
      type: "code",
      text: "# Live view of processes\npi@raspberrypi:~$ top\n\n# Numbers keep changing. That is normal.\n# To get back to the normal terminal — press q",
    },
    {
      type: "text",
      text: "Watch for a few seconds. See how the numbers change.",
    },
    {
      type: "text",
      text: "Then press **`q`** — short for quiet / quit — to exit.",
    },
    {
      type: "think",
      id: "q2",
      question: "How is ps different from top?",
      options: [
        { id: "a", text: "ps — a snapshot in one moment; top — live updates" },
        { id: "b", text: "ps turns off the internet" },
        { id: "c", text: "top only draws wallpaper" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Exactly: **photo** vs **video**. Different tools — same idea: see the processes.",
    },
    {
      type: "fact",
      title: "A little humor",
      text: "The top command is not about \"top 10 songs.\" Though the list at the top really does look like a hit parade: who is loudest in the kitchen right now.",
    },
    {
      type: "image",
      src: "nf13-d",
      alt: "Be careful with processes",
      caption: "Many processes are system helpers. You do not need to \"kick out\" all of them.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal top or htop style process list, colorful bars blurred, calm monitoring not panic, bright theme",
    },
    {
      type: "h2",
      text: "An important rule for a good admin",
    },
    {
      type: "text",
      text: "The list will have many rows you do not recognize.",
    },
    {
      type: "text",
      text: "That is normal.",
    },
    {
      type: "text",
      text: "Many processes are like school security, the clock, and hallway lights. They are needed even if you never started them yourself.",
    },
    {
      type: "text",
      text: "So the rule is simple: **look and understand first. Do not shut down everything at random.**",
    },
    {
      type: "try",
      title: "🔍 Investigation: who is in the kitchen right now?",
      body: "This is not \"just type a command.\" This is a hunt for discovery.",
      checklist: [
        "Open the terminal",
        "Type `ps` and press Enter",
        "What did you see? How many rows?",
        "Did you recognize at least one name in the CMD column?",
        "Now type `top`",
        "Watch for 5–10 seconds: what changes?",
        "Press `q` to exit",
        "Write one word in your journal: what surprised you",
      ],
      footer: "If you recognized even one program — you are already reading the system's language.",
    },
    {
      type: "draw",
      text: "Draw a juggler with three balls. Label the balls: Minecraft, Browser, Music. In the middle write: Pi.",
    },
    {
      type: "diary",
      lines: [
        "In your own words: what is a process?",
        "Why might the Pi feel \"slow\" even when the board itself is fine?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "If a process is in the list — shut it down right away.",
          truth: "Many processes are needed by the system itself. Look first.",
        },
        {
          title: "Mistake #2",
          myth: "top freezes forever and there is no way out.",
          truth: "Usually the q key helps.",
        },
        {
          title: "Mistake #3",
          myth: "A slow Pi always means a broken board.",
          truth: "Often one job is just using a lot of the computer's power.",
        },
      ],
    },
    {
      type: "text",
      text: "Now you know the secret of \"at once\": the computer juggles **processes**.",
    },
    {
      type: "text",
      text: "But what if the file you need is lost among hundreds of others?",
    },
    {
      type: "text",
      text: "Next we become search detectives.",
    },
  ],
  remember: [
    "The computer switches between jobs fast — like a juggler",
    "A process is a program running right now",
    "ps — a photo of the process list",
    "top — live \"video\" (exit: q)",
    "Do not touch unfamiliar processes on purpose",
  ],
  commands: [
    { cmd: "ps", does: "Show a snapshot of processes right now" },
    { cmd: "top", does: "Watch processes live (q to exit)" },
  ],
  glossary: [
    {
      term: "Process",
      def: "A computer job: a program that is running right now.",
    },
    {
      term: "ps",
      def: "Photo command: shows the process list at this moment.",
    },
    {
      term: "top",
      def: "Video command: updates the process list on screen.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "A process is…",
      options: [
        "a program running right now",
        "a USB-C port",
        "a folder name on stickers",
      ],
      answer: 0,
      hint: "Think of the juggler's balls.",
      explanation: "A process is a live job from a running program.",
    },
    {
      type: "tf",
      text: "A computer often does many things by switching between them quickly.",
      answer: true,
      hint: "Juggler and balls.",
      explanation: "Yes. It looks like everything at once, but inside it is a fast line.",
    },
    {
      type: "fill",
      prompt: "The \"photo\" command for the process list:",
      answer: "ps",
      hint: "Two letters.",
      explanation: "ps shows a snapshot at this moment.",
    },
    {
      type: "whatif",
      prompt: "The Pi got slow. Where does an admin start thinking?",
      hint: "Not \"the board is broken\" — \"who is in the kitchen?\"",
      explanation: "First figure out which job is loading the system.",
      sample: "Look at which processes are busy right now (ps or top).",
      optional: true,
    },
    {
      type: "error",
      prompt: "Spot the mistake: \"Every process in the list should be shut down.\"",
      hint: "School security and the clock.",
      explanation: "Look and understand. Do not shut things down at random.",
      sample: "No. Many processes are needed by the system.",
      optional: true,
    },
  ],
  next: 14,
};
