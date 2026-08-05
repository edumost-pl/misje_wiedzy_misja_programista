window.CHAPTER_12 = {
  id: 12,
  bookId: "sysadmin_en",
  part: 3,
  partTitle: "System Administrator",
  title: "Access Permissions",
  icon: "search",
  learn: [
    "What read / write / execute permissions mean",
    "How to see permissions with ls -l",
    "What sudo is and when to use it carefully",
  ],
  content: [
    {
      type: "text",
      text: "You walk up to a door at school.",
    },
    {
      type: "text",
      text: "You pull the handle — **locked**. It will not open.",
    },
    {
      type: "text",
      text: "The sign says: \"Teachers only.\"",
    },
    {
      type: "text",
      text: "Stop. **Who can do what with a file?** Why does the terminal sometimes say **Permission denied**?",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"Linux is broken! Why won't it let me in?\"*",
    },
    {
      type: "text",
      text: "No. That is not a breakdown. It is **protection** — like a lock on a door. The system has **access permissions**: who can **read**, **write**, or **run** a file.",
    },
    {
      type: "image",
      src: "nf12-a",
      alt: "A lock on a door — access permissions",
      caption: "Different keys — different doors.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Three different keys on light wooden board each matching different colored door locks, sharp product photo",
    },
    {
      type: "h2",
      text: "Three Locks on Every Door",
    },
    {
      type: "text",
      text: "Imagine **three little locks** on every file.",
    },
    {
      type: "text",
      text: "One — \"you may **read**\" (r). Another — \"you may **write / change**\" (w). A third — \"you may **run**\" (x).",
    },
    {
      type: "text",
      text: "The locks come in **three groups**: for the file **owner**, for the **group**, and for **everyone else**.",
    },
    {
      type: "text",
      text: "That is why a permission string looks like a puzzle of nine letters — three groups of three.",
    },
    {
      type: "fact",
      title: "Whoa!",
      text: "A folder with x permission is \"you may go inside.\" Without x, the folder is like a locked room: you see the name, but you cannot enter.",
    },
    {
      type: "h2",
      text: "Magnifying Glass on the Locks",
    },
    {
      type: "text",
      text: "Picture a safe with three locks on every drawer.",
    },
    {
      type: "text",
      text: "Plain `ls` only shows the **label** \"Drawer #3.\" It does not show who has the key.",
    },
    {
      type: "text",
      text: "Add **`-l`** — and you get a **magnifying glass**: r, w, x — who can read, write, and go inside.",
    },
    {
      type: "code",
      text: "# Detailed file list with permissions\npi@raspberrypi:~$ ls -l\n\n# Example line (shortened)\n-rw-r--r-- 1 pi pi 120 Mar 10 18:01 notes.txt\ndrwxr-xr-x 2 pi pi 4096 Mar 10 18:02 projects",
    },
    {
      type: "text",
      text: "At the start of each line — the \"lock code.\" The letters mean:",
    },
    {
      type: "ul",
      items: [
        "**r** — read",
        "**w** — write / change",
        "**x** — execute / enter a folder",
        "**`-`** — this permission is not granted",
      ],
    },
    {
      type: "think",
      id: "q1",
      question: "Access permissions decide…",
      options: [
        { id: "a", text: "who can do what with a file" },
        { id: "b", text: "the color of the Pi case" },
        { id: "c", text: "the length of the HDMI cable" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Yes: who reads, writes, and runs — like who has a key to which doors.",
    },
    {
      type: "image",
      src: "nf12-b",
      alt: "ls -l in the terminal",
      caption: "ls -l — a long list with \"lock codes.\"",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal ls -l output with permission string rwx blurred but shape visible, bright terminal, magnifying glass prop on desk",
    },
    {
      type: "h2",
      text: "Permission Denied — the Lock Worked",
    },
    {
      type: "text",
      text: "If you try to change a file you are not allowed to write to, the system answers **Permission denied**.",
    },
    {
      type: "text",
      text: "That means: \"**You do not have the key** to this door.\" Do not force it — understand it.",
    },
    {
      type: "code",
      text: "# Example: no permission (do not blindly repeat with system files!)\npi@raspberrypi:~$ cat /etc/shadow\ncat: /etc/shadow: Permission denied",
    },
    {
      type: "image",
      src: "nf12-c",
      alt: "Permission denied",
      caption: "The lock worked — the system is guarding something important.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal error message Permission denied line blurred, red text suggested without readable words, bright screen not dark hacker style",
    },
    {
      type: "h2",
      text: "The Master Key: sudo",
    },
    {
      type: "text",
      text: "Picture this: you are 10 years old. The door to the electrical room is **locked**.",
    },
    {
      type: "text",
      text: "But a **grown-up technician** is nearby. You ask: \"Open it for a minute — I need to update the system.\"",
    },
    {
      type: "text",
      text: "In Linux, that \"master key for one job\" is called **sudo** — superuser do.",
    },
    {
      type: "text",
      text: "Borrow it → run **one** command → give it back. Do not carry it in your pocket all day.",
    },
    {
      type: "code",
      text: "# Format: sudo + a normal command\npi@raspberrypi:~$ sudo apt update\n\n# The system may ask for the pi user's password\n# [sudo] password for pi:\n# (when you type the password, characters often stay hidden. That is normal.)",
    },
    {
      type: "text",
      text: "On Raspberry Pi, the `pi` user often has permission to use `sudo`. After the correct password, the command runs with administrator powers — **only that one command**.",
    },
    {
      type: "ul",
      items: [
        "✅ **When it is OK:** system updates, installing a package from instructions, an action you understand",
        "⛔ **When it is not OK:** \"just because,\" an unknown command from the internet, experiments with `rm` and system folders",
      ],
    },
    {
      type: "think",
      id: "q2",
      question: "sudo is for…",
      options: [
        { id: "a", text: "carefully running one command with admin powers" },
        { id: "b", text: "changing wallpaper forever" },
        { id: "c", text: "turning off Enter" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "**sudo** gives administrator powers for **one** command. After that, you are a regular user again.",
    },
    {
      type: "code",
      text: "# Update the list of available programs (needs internet)\npi@raspberrypi:~$ sudo apt update\n\n# If all goes well, you will see lines about downloading lists\n# Hit:1 http://… InRelease\n# Reading package lists... Done",
    },
    {
      type: "fact",
      title: "Master Key",
      text: "sudo is like borrowing the key to the server room for one minute. Borrow → do the job → give it back.",
    },
    {
      type: "image",
      src: "nf12-d",
      alt: "sudo — the master key",
      caption: "sudo is a powerful tool. Power needs attention.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Master key on keyring separate from regular house keys, bright macro, adult supervision mood, responsible tool",
    },
    {
      type: "try",
      title: "🔍 Explore: Locks and Keys",
      body: "Look at the permissions on your own files — no risky experiments.",
      checklist: [
        "Open the terminal",
        "`ls -l` in your home folder — find the letters r, w, x",
        "Compare a regular file line and a folder line (folders often start with `d`)",
        "Say out loud: \"I only use sudo when I know why\"",
        "If a grown-up says it is OK: `sudo apt update` — and see what the system answers",
        "Write in your journal: what does Permission denied mean in your own words?",
      ],
      footer: "Do not experiment with sudo rm and system paths.",
    },
    {
      type: "draw",
      text: "Draw three locks: owner / group / others. Label r, w, x.",
    },
    {
      type: "diary",
      lines: [
        "What does Permission denied mean in your own words?",
        "When would you ask a grown-up for help before using sudo?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "Always use sudo — it is easier.",
          truth: "sudo only when you need it. Extra power = extra risk.",
        },
        {
          title: "Mistake #2",
          myth: "Permission denied means Linux is broken.",
          truth: "Often it is just permission protection — the lock worked.",
        },
        {
          title: "Mistake #3",
          myth: "sudo makes you an administrator forever.",
          truth: "Power goes up only for one command.",
        },
      ],
    },
    {
      type: "text",
      text: "You already know who you are in the system and what keys you have. Next we will look at **which programs are running right now** — processes.",
    },
  ],
  remember: [
    "ls -l shows access permissions",
    "r / w / x — read / write / run",
    "Permission denied — often protection, not a breakdown",
    "sudo — run one command as administrator",
    "sudo only when you know why",
  ],
  commands: [
    { cmd: "ls -l", does: "Detailed list with permissions" },
    { cmd: "sudo command", does: "Run as administrator (careful)" },
    { cmd: "sudo apt update", does: "Update package lists (example)" },
  ],
  glossary: [
    {
      term: "Access permissions",
      def: "Rules for who can do what with a file or folder.",
    },
    {
      term: "sudo",
      def: "The \"do as superuser\" command — admin powers for one action.",
    },
    {
      term: "Superuser",
      def: "The system administrator with the highest powers (often root).",
    },
    { term: "ls -l", def: "Long file list with permissions." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Access permissions decide…",
      options: [
        "who can do what with a file",
        "the case color",
        "HDMI cable length",
      ],
      answer: 0,
      hint: "Locks on file doors.",
      explanation: "Yes: who reads, writes, and runs.",
    },
    {
      type: "tf",
      text: "sudo raises permissions only for one command.",
      answer: true,
      hint: "Not forever.",
      explanation: "After the command, you are a regular user again.",
    },
    {
      type: "fill",
      prompt: "Command for a detailed list with permissions:",
      answer: "ls -l",
      hint: "ls and the letter for \"long.\"",
      explanation: "ls -l shows permissions, owner, and size.",
    },
    {
      type: "whatif",
      prompt: "You see Permission denied. What do you think first?",
      hint: "Often a lock, not a crash.",
      explanation: "First understand the message, then decide if sudo is needed.",
      sample: "Maybe you lack permission. Do not break the system — understand the protection.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Spot the mistake: \"Always type sudo before every command.\"",
      hint: "Power ≠ random habit.",
      explanation: "Extra power is dangerous.",
      sample: "sudo only when needed and when you understand the action.",
      optional: true,
    },
  ],
  next: 13,
};
