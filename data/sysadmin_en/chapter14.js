window.CHAPTER_14 = {
  id: 14,
  bookId: "sysadmin_en",
  part: 3,
  partTitle: "System Administrator",
  title: "Finding Files",
  icon: "search",
  learn: [
    "When to use find",
    "When to use grep",
    "How not to mix up file search and text search",
  ],
  content: [
    {
      type: "text",
      text: "Yesterday you wrote an important note on the Pi.",
    },
    {
      type: "text",
      text: "Today you open the terminal — and **cannot find the file**.",
    },
    {
      type: "text",
      text: "You open one folder. Then another. Then a third. You run `ls` — **nothing**.",
    },
    {
      type: "text",
      text: "Wait. **Where did my file go?** And how do you find **text inside** a file if you only remember one phrase?",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"Folders are useless — I'll lose stuff anyway.\"*",
    },
    {
      type: "text",
      text: "Folders help. But when you have **lots** of files, you need **detective tools** — two different \"flashlights.\"",
    },
    {
      type: "image",
      src: "nf14-a",
      alt: "Detective searching for a lost file",
      caption: "Different puzzles — different tools.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two tools on bright desk: flashlight for filenames, magnifying glass for page text, realistic product shot",
    },
    {
      type: "h2",
      text: "Two flashlights",
    },
    {
      type: "text",
      text: "Picture yourself as a detective in a big house with hundreds of drawers.",
    },
    {
      type: "text",
      text: "One flashlight shines on **labels on the drawers** — file names. That is **find**.",
    },
    {
      type: "text",
      text: "The other flashlight looks **inside** the drawers — searching for words in text. That is **grep**.",
    },
    {
      type: "text",
      text: "Remember the **name** — find. Remember a **phrase inside** — grep.",
    },
    {
      type: "fact",
      title: "Wow!",
      text: "Admins search every day: logs, configs, scripts. Without find and grep you can flip through folders for hours — like you did today.",
    },
    {
      type: "h2",
      text: "A library with no end",
    },
    {
      type: "text",
      text: "Picture a library.",
    },
    {
      type: "text",
      text: "Hundreds of shelves. Thousands of books. And somewhere in there is **one** — `world-rules.txt`.",
    },
    {
      type: "text",
      text: "Will you pull down **every** book and check the spine?",
    },
    {
      type: "text",
      text: "Probably not. You ask a **librarian** to run the shelves for you.",
    },
    {
      type: "text",
      text: "Linux has that librarian. Its name is **find**.",
    },
    {
      type: "text",
      text: "You give a condition — for example, \"all `.txt` files\" — and it returns a list. The dot `.` means \"start **here**,\" from the current folder.",
    },
    {
      type: "code",
      text: "# Find all .txt files from the current folder\npi@raspberrypi:~/my-world$ find . -name \"*.txt\"\n\n# Example output\n./notes/world-rules.txt\n./backups/rules-old.txt",
    },
    {
      type: "text",
      text: "`-name` means \"search by name.\" The librarian does not read the books — it finds the **right shelf**.",
    },
    {
      type: "think",
      id: "q1",
      question: "You use find to…",
      options: [
        { id: "a", text: "search for files by conditions (for example, by name)" },
        { id: "b", text: "charge the Pi" },
        { id: "c", text: "change an LED" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "find searches for **files** in the folder tree — a flashlight on labels.",
    },
    {
      type: "image",
      src: "nf14-b",
      alt: "Search by name",
      caption: "find — a flashlight on file names.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal find command output listing file paths blurred, folder tree on sticky note beside keyboard",
    },
    {
      type: "h2",
      text: "An 800-page book",
    },
    {
      type: "text",
      text: "Someone hands you a book with **800 pages**.",
    },
    {
      type: "text",
      text: "And says: \"Find **every** place where the word *Minecraft* appears.\"",
    },
    {
      type: "text",
      text: "Will you read the whole book from cover to cover?",
    },
    {
      type: "text",
      text: "Probably not.",
    },
    {
      type: "text",
      text: "**Linux won't either.**",
    },
    {
      type: "text",
      text: "It uses a special helper that **flips pages in seconds** and shows only the lines you need.",
    },
    {
      type: "text",
      text: "Its name is **grep**.",
    },
    {
      type: "code",
      text: "# Search for the word Minecraft in the rules file\npi@raspberrypi:~/my-world$ grep -n Minecraft notes/world-rules.txt\n\n# Example output\n2:World for friends. Mode: Minecraft survival.",
    },
    {
      type: "text",
      text: "The **`-n`** flag adds the **page number** — more precisely, the line number. Like a bookmark: \"look, here it is!\"",
    },
    {
      type: "think",
      id: "q2",
      question: "You remember a phrase inside a file, but not the file name. What makes more sense?",
      options: [
        { id: "a", text: "grep (text search)" },
        { id: "b", text: "only clear" },
        { id: "c", text: "break the HDMI cable" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "For **content** — grep. For a **name** — find. Do not mix up the flashlights!",
    },
    {
      type: "image",
      src: "nf14-c",
      alt: "Searching inside text",
      caption: "grep — a flashlight inside files.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal grep command with matching lines highlighted blur, open book with highlighted word metaphor on desk",
    },
    {
      type: "h2",
      text: "Stronger together",
    },
    {
      type: "text",
      text: "Sometimes **find** locates files first, and **grep** checks what's inside them.",
    },
    {
      type: "text",
      text: "Like a detective: first find the suspicious \"drawers,\" then look inside.",
    },
    {
      type: "code",
      text: "# First find all .txt files\npi@raspberrypi:~/my-world$ find . -name \"*.txt\"\n./notes/world-rules.txt\n./backups/rules-old.txt\n\n# Then search for a word in one of them\npi@raspberrypi:~/my-world$ grep -n Minecraft notes/world-rules.txt\n2:World for friends. Mode: Minecraft survival.",
    },
    {
      type: "fact",
      title: "A little humor",
      text: "grep does not write a new book. It only **highlights lines** where your word appears — like a fluorescent marker in that same 800-page book.",
    },
    {
      type: "image",
      src: "nf14-d",
      alt: "Order in chaos",
      caption: "Fast search saves you during incidents.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child admin searching urgently but calmly at Pi terminal, bright room, clock on wall suggests quick fix",
    },
    {
      type: "try",
      title: "🔍 Investigation: five-minute detective",
      body: "Become a detective in your practice folder.",
      checklist: [
        "Open the terminal, go to `~/learning` (or create the folder)",
        "`touch clue.txt` and with `nano clue.txt` write the word banana",
        "`grep -n banana clue.txt` — what did it show?",
        "`find . -name \"clue.txt\"` — where is the file?",
        "Explain the difference between the two commands to a friend in your own words",
        "Write in your journal: when will you pick find, and when grep?",
      ],
      footer: "You are already choosing the right tool for the puzzle.",
    },
    {
      type: "draw",
      text: "Draw a folder tree and two flashlights: find (on names) and grep (inside).",
    },
    {
      type: "diary",
      lines: [
        "When will you choose find?",
        "When will you choose grep?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "grep always creates new files.",
          truth: "It searches and shows matches.",
        },
        {
          title: "Mistake #2",
          myth: "find and grep are the same thing.",
          truth: "Names vs text inside.",
        },
        {
          title: "Mistake #3",
          myth: "An admin never needs search.",
          truth: "Logs and configs get searched all the time.",
        },
      ],
    },
    {
      type: "text",
      text: "Your local detective is ready. Next we step into the **network** — where the Pi meets other computers.",
    },
  ],
  remember: [
    "find — files by name",
    "grep — text inside",
    "Pick the tool for the puzzle",
    "Searching is a basic admin skill",
  ],
  commands: [
    {
      cmd: "find . -name \"*.txt\"",
      does: "Finds txt files from the current folder",
    },
    {
      cmd: "grep -n word file",
      does: "Search for a word in a file with line numbers",
    },
  ],
  glossary: [
    {
      term: "find",
      def: "Search for files in the folder tree.",
    },
    {
      term: "grep",
      def: "Search for text inside files.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "You use find to…",
      options: [
        "search for files",
        "charge the Pi",
        "change an LED",
      ],
      answer: 0,
      hint: "Flashlight on names.",
      explanation: "find walks the folder tree.",
    },
    {
      type: "tf",
      text: "grep searches for lines of text inside files.",
      answer: true,
      hint: "Flashlight inside.",
      explanation: "Yes. grep is for content.",
    },
    {
      type: "fill",
      prompt: "Command to search for files in the tree:",
      answer: "find",
      hint: "4 letters",
      explanation: "find searches by conditions.",
    },
    {
      type: "whatif",
      prompt: "You remember a phrase, not a name — what do you pick?",
      hint: "Content, not the label.",
      explanation: "grep searches text inside.",
      sample: "grep",
      optional: true,
    },
    {
      type: "match",
      prompt: "Match them up:",
      hint: "Two flashlights.",
      explanation: "Different tools — different puzzles.",
      pairs: [
        ["find", "file by name"],
        ["grep", "line in text"],
        ["ls", "current folder"],
      ],
      optional: true,
    },
  ],
  next: 15,
};
