window.CHAPTER_08 = {
  id: 8,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "Creating Folders",
  icon: "folder",
  learn: [
    "Why folders need to stay organized",
    "How to create a folder with mkdir and check with ls",
    "What happens if that name already exists",
  ],
  content: [
    {
      type: "text",
      text: "Project \"My World,\" **Part 3**. You already know how to walk between folders — but **where** will you store your future server?",
    },
    {
      type: "text",
      text: "You are looking for your math notes.",
    },
    {
      type: "text",
      text: "They are somewhere on the desk. Under the textbook? In a drawer? Behind a pillow?",
    },
    {
      type: "text",
      text: "Everything is piled in **one heap**.",
    },
    {
      type: "text",
      text: "Stop. How and why do you create **order** — separate \"shelves\" for your stuff?",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"Why folders? I can just dump everything in one place.\"*",
    },
    {
      type: "text",
      text: "You can. But in a week you will not find your notes or your project. A good administrator loves **order**.",
    },
    {
      type: "image",
      src: "nf08-a",
      alt: "Neat folders instead of chaos",
      caption: "Folders are shelves for ideas and projects.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. White IKEA-style shelf with empty labeled boxes ready for projects, bright Scandinavian room, metaphor for mkdir",
    },
    {
      type: "h2",
      text: "A Closet With Shelves",
    },
    {
      type: "text",
      text: "Picture a closet in your room.",
    },
    {
      type: "text",
      text: "One shelf holds books. Another holds notebooks. A third holds toys.",
    },
    {
      type: "text",
      text: "You do not mix up a textbook with a building set, because **everything has its own place**.",
    },
    {
      type: "text",
      text: "A computer works the same way. Folders are **shelves inside the disk**. Files sit on shelves — not in one heap.",
    },
    {
      type: "fact",
      title: "Whoa!",
      text: "One giant \"heap\" of files on a disk is like a desk with no drawers. After a month, even you will not remember what is where.",
    },
    {
      type: "h2",
      text: "Idea First — Command Second",
    },
    {
      type: "text",
      text: "Picture this: you bought a closet in a box. The pieces are on the floor. But the **shelves** are not built yet — you have to **assemble** them.",
    },
    {
      type: "text",
      text: "In the terminal, \"building a shelf\" is one short word: **mkdir**. \"Make a directory.\"",
    },
    {
      type: "text",
      text: "The key is giving it a clear name. After you create it, always check with `ls`.",
    },
    {
      type: "code",
      text: "# Create a new projects folder\npi@raspberrypi:~$ mkdir projects\n\n# Check that it showed up\npi@raspberrypi:~$ ls\n\n# Example response\nDesktop  Documents  Downloads  projects",
    },
    {
      type: "text",
      text: "Do it — then check it. That is the admin ritual.",
    },
    {
      type: "think",
      id: "q1",
      question: "The mkdir command creates…",
      options: [
        { id: "a", text: "a new folder" },
        { id: "b", text: "a new HDMI cable" },
        { id: "c", text: "a Wi‑Fi password" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Yes: **a new folder (directory)** — a new \"shelf\" on the disk.",
    },
    {
      type: "h2",
      text: "Names That Mean Something",
    },
    {
      type: "text",
      text: "`linux-notes` beats `aaa1`. The name is a hint for **future you**.",
    },
    {
      type: "ul",
      items: [
        "📁 `projects` — all your projects",
        "📁 `school` — school stuff",
        "📁 `game-server` — a spot for your future game server (just a folder name for now)",
      ],
    },
    {
      type: "image",
      src: "nf08-b",
      alt: "A folder tree like shelves",
      caption: "Build the parent shelf first, then the nested ones.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Nested transparent folders on bright desk, parent folder large, child folders inside, realistic 3D render",
    },
    {
      type: "h2",
      text: "A Shelf Inside a Shelf",
    },
    {
      type: "text",
      text: "Sometimes you need a **big closet**, and inside it — smaller shelves.",
    },
    {
      type: "text",
      text: "First create the parent folder, go inside (`cd`), then create the nested ones.",
    },
    {
      type: "code",
      text: "# Build the \"room\" for the \"My World\" project\npi@raspberrypi:~$ mkdir my-world\npi@raspberrypi:~$ cd my-world\npi@raspberrypi:~/my-world$ mkdir notes\npi@raspberrypi:~/my-world$ ls\n\n# Example response\nnotes",
    },
    {
      type: "think",
      id: "q2",
      question: "What happens if you run mkdir my-world when that folder already exists?",
      options: [
        { id: "a", text: "A second folder with the same name appears" },
        { id: "b", text: "A message says the directory already exists" },
        { id: "c", text: "All files get deleted" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Two identical names cannot live in the same place. The system will tell you the directory already exists.",
    },
    {
      type: "code",
      text: "# If the folder already exists\npi@raspberrypi:~$ mkdir my-world\nmkdir: cannot create directory 'my-world': File exists",
    },
    {
      type: "image",
      src: "nf08-c",
      alt: "mkdir in the terminal",
      caption: "The folder name goes right after mkdir.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal split concept: mkdir command then ls listing new folder name blurred, bright terminal theme",
    },
    {
      type: "fact",
      title: "Spaces",
      text: "A name with a space is awkward in the terminal. Better: `my-project` or `my_project`.",
    },
    {
      type: "image",
      src: "nf08-d",
      alt: "A tidy folder structure",
      caption: "Order today — speed tomorrow.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Desk with notebook titled project sketch, Pi showing terminal, tidy organized workspace, hopeful bright mood",
    },
    {
      type: "try",
      title: "🔍 Explore: Build my-world",
      body: "This is not \"just type a command.\" This is step three of the \"My World\" project — a home for your future server.",
      checklist: [
        "Open the terminal",
        "In your home folder (`cd ~`), type `mkdir my-world`",
        "`ls` — can you see my-world?",
        "`cd my-world`",
        "`mkdir notes` and `mkdir backups`",
        "`ls` again — how many folders?",
        "`pwd` — the path should include my-world",
        "Write in your journal: why did you pick those names?",
      ],
      footer: "Structure ready. Next — files inside.",
    },
    {
      type: "draw",
      text: "Draw a plan: /home/pi → projects → week1. Label each \"shelf.\"",
    },
    {
      type: "diary",
      lines: [
        "What 3 folder names will you use for practice?",
        "Did you check the result with ls?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "mkdir automatically deletes old folders.",
          truth: "mkdir only creates. Deleting takes other commands.",
        },
        {
          title: "Mistake #2",
          myth: "You can skip checking with ls.",
          truth: "Do it — then check it. Admin habit.",
        },
        {
          title: "Mistake #3",
          myth: "Names like xxx and 111 are fine.",
          truth: "In a month you will not remember. Pick names that mean something.",
        },
      ],
    },
    {
      type: "text",
      text: "Now you have shelves in `my-world`. Time to put **files** on them — create, read, copy, and very carefully delete.",
    },
  ],
  remember: [
    "mkdir creates a folder",
    "ls checks the result",
    "Clear names matter",
    "Duplicate name = error",
  ],
  commands: [
    { cmd: "mkdir name", does: "Creates a new folder" },
    { cmd: "ls", does: "Shows whether the folder appeared" },
  ],
  glossary: [
    { term: "mkdir", def: "The command that creates a directory (folder)." },
    { term: "Directory", def: "Another word for folder in the file system." },
  ],
  check: [
    {
      type: "mc",
      prompt: "The mkdir command creates…",
      options: [
        "a new folder",
        "a new HDMI cable",
        "a Wi‑Fi password",
      ],
      answer: 0,
      hint: "make directory.",
      explanation: "mkdir creates a new directory.",
    },
    {
      type: "tf",
      text: "After mkdir, you should check the result with ls.",
      answer: true,
      hint: "Admin ritual.",
      explanation: "Yes. Do it — then check it.",
    },
    {
      type: "fill",
      prompt: "Command to create a projects folder:",
      answer: "mkdir projects",
      hint: "mkdir + name.",
      explanation: "mkdir projects creates the projects directory.",
    },
    {
      type: "whatif",
      prompt: "What happens if you create a folder with a name that already exists?",
      hint: "Two identical names?",
      explanation: "The system will not create a duplicate.",
      sample: "Error: directory already exists.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Spot the mistake: \"mkdir deletes old folders.\"",
      hint: "Creating ≠ deleting.",
      explanation: "Other commands handle deletion.",
      sample: "mkdir only creates.",
      optional: true,
    },
  ],
  next: 9,
};
