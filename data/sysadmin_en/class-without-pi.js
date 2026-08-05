/* Track B — class / club without a Raspberry Pi */
window.SYSADMIN_CLASS_WITHOUT_PI = {
  forClass:
    "The book **still works without a Pi**. Every chapter has an **\"In class without a Pi\"** block — full practice instead of the board: paper exercises, a school computer, role-play, discussion. One Pi for the whole class can be a **demo** at the end of a lesson — but that is not required to understand the ideas.",
  tracks: [
    {
      id: "pi",
      label: "Track A — Pi in your hands",
      text: "Full hands-on practice: \"Try it now\" on the board at home or in club.",
    },
    {
      id: "class",
      label: "Track B — In class without a Pi",
      text: "\"In class without a Pi\" block + journal + \"Check yourself\" questions. Same content, different tools.",
    },
  ],
  sharedTools: [
    "📒 Admin Journal (notebook)",
    "🖨 Printed Pi board diagram (chapters 1–2)",
    "💻 School PC / laptop with Linux, macOS, or Windows (chapters 4–16)",
    "📄 Paper \"terminal\" — graph paper sheet (chapters 6–10)",
  ],
  chapters: {
    1: {
      outcome: "Understands that a computer is about what it can do, not how big the case is.",
      checklist: [
        "Compare a tablet, phone, and school PC: what can they all do?",
        "On a Pi photo, find the \"brain\" (board) and name three things a computer can do.",
        "In your journal: one sentence — how is a Pi like your phone?",
      ],
    },
    2: {
      outcome: "Tells ports apart and knows what they are for.",
      checklist: [
        "On a printed board diagram, label: power, HDMI, USB, network.",
        "On the school PC, find the equivalents: USB, screen, network (Wi‑Fi or cable).",
        "In your journal: which \"door\" matters most for a Minecraft server? Why?",
      ],
    },
    3: {
      outcome: "Understands the chain: card → OS → power on.",
      checklist: [
        "Put step cards in order: write OS → insert card → HDMI → power.",
        "Discuss in pairs: where is the OS \"stored\" on a phone?",
        "In your journal: three things you would check first if the screen stays black.",
      ],
    },
    4: {
      outcome: "Sees the OS as the conductor between hardware and programs.",
      checklist: [
        "Name the OS on three devices in class (PC, phone, tablet).",
        "Play \"orchestra\": one conductor (OS), others are programs; what happens without a conductor?",
        "In your journal: why is Linux a family, not one single program?",
      ],
    },
    5: {
      outcome: "Finds your way around the desktop and menu.",
      checklist: [
        "On the school PC, find: program menu, Documents folder, settings.",
        "Compare with a Raspberry Pi OS screenshot: what looks similar?",
        "In your journal: why update the system, in simple words?",
      ],
    },
    6: {
      outcome: "Understands the \"command → reply\" dialog in the terminal.",
      checklist: [
        "Paper terminal: teacher says `pwd`, `ls` — students write imaginary replies.",
        "Or on a school PC: Terminal (Mac/Linux) / PowerShell — safely run `pwd` and `ls`.",
        "In your journal: how is a terminal like a short text message conversation?",
      ],
    },
    7: {
      outcome: "Imagines folder paths as an address.",
      checklist: [
        "Draw a tree: Home → Room → Closet. Label the path to the \"shelf.\"",
        "On a paper terminal, walk through: `cd test` → `cd 1` → `cd ..` — write the path after each step.",
        "In your journal: what does `cd ~` do in one sentence?",
      ],
    },
    8: {
      outcome: "Understands folder order and the mkdir command.",
      checklist: [
        "With paper \"folders,\" build `my-world` with nested `notes` and `backups`.",
        "On a PC, create the same structure in Documents with the mouse.",
        "In your journal: why is `my-project` better than `aaa1`?",
      ],
    },
    9: {
      outcome: "Tells create, read, copy, and delete apart.",
      checklist: [
        "Sticker files: `touch` = new sticker; `cat` = read aloud; `cp` = duplicate.",
        "Careful: `rm` on a copy, not the original — check the name twice.",
        "In your journal: why do people run `ls` before `rm`?",
      ],
    },
    10: {
      outcome: "Knows the save / exit ritual in an editor.",
      checklist: [
        "On paper \"nano\": write `world-rules.txt`, label Ctrl+O and Ctrl+X.",
        "On a PC: Notepad — same ritual \"wrote → saved → closed.\"",
        "In your journal: two rules for your Minecraft world.",
      ],
    },
    11: {
      outcome: "Understands that the system has usernames.",
      checklist: [
        "Each student is a \"user\" with a name; `whoami` = say your name out loud.",
        "Discuss: why separate accounts at home and at school?",
        "In your journal: why does an admin need to know who is in the system?",
      ],
    },
    12: {
      outcome: "Sees permissions as locks on doors.",
      checklist: [
        "File cards: who can read / write / run? Stick on r, w, x labels.",
        "Role-play: \"Permission denied\" — what next (do not break things — ask)?",
        "In your journal: when do you need an adult and `sudo`?",
      ],
    },
    13: {
      outcome: "Understands that a computer juggles many jobs.",
      checklist: [
        "On the school PC, open Task Manager / Activity Monitor.",
        "Play \"juggler\": three tasks — which one \"drops\" if the Pi is overloaded?",
        "In your journal: how is `ps` like a photo and `top` like a video?",
      ],
    },
    14: {
      outcome: "Tells find (file) and grep (text inside) apart.",
      checklist: [
        "Hide a folder in class — `find` = locate the folder by name.",
        "In a paragraph, find a word — that is `grep`.",
        "In your journal: when would you use find, and when grep?",
      ],
    },
    15: {
      outcome: "Checks the connection instead of guessing.",
      checklist: [
        "On the school PC with a teacher: `ip a` or `ipconfig` — is there an address?",
        "Ping the school site or `8.8.8.8` — is there a reply?",
        "In your journal: how is ping like shouting \"Hello!\" in the mountains?",
      ],
    },
    16: {
      outcome: "Understands SSH as a conversation over the network.",
      checklist: [
        "Two chairs: \"Pi in another room\" — pass commands on paper (like ssh).",
        "Discuss: why not shout passwords in class?",
        "In your journal: three rules for safe SSH.",
      ],
    },
    17: {
      outcome: "Tells client and server apart.",
      checklist: [
        "Role-play: one person holds \"the world in a box\" (server), others come over (clients).",
        "Compare with Minecraft: who holds the world while you play?",
        "In your journal: why can a Pi be a server?",
      ],
    },
    18: {
      outcome: "Understands prep: Java, folder, server.jar, EULA.",
      checklist: [
        "On paper, draw a `minecraft-server` folder and a `server.jar` file next to EULA.",
        "Read an EULA excerpt out loud — discuss with an adult what \"agreement\" means.",
        "In your journal: three steps before the first server start (where jar comes from, version, folder).",
      ],
    },
    19: {
      outcome: "Sees config as text rules for the world.",
      checklist: [
        "On paper \"server.properties\": max-players, gamemode, difficulty, pvp — your own values.",
        "Compare with `world-rules.txt` from chapter 10 — what matches?",
        "In your journal: one rule that will protect the world from chaos.",
      ],
    },
    20: {
      outcome: "Reads logs, knows LAN join and safe stop.",
      checklist: [
        "Teacher gives a sample log — find the \"Done\" line / an error.",
        "On paper: IP:25565 → Direct Connection; why versions must match.",
        "Role-play: someone says \"pull the plug\" — class answers with the `stop` command.",
        "In your journal: what will you do if the server will not start?",
      ],
    },
    21: {
      outcome: "Sees the Pi as a start, not a finish line.",
      checklist: [
        "Brainstorm poster: 5 Pi project ideas (camera, robot, server…).",
        "Pick one and explain which book skills you will need.",
        "In your journal: which project after Minecraft?",
      ],
    },
    22: {
      outcome: "Takes admin habits, not memorization.",
      checklist: [
        "Build your \"admin ritual\" in 5 steps (ask → check → write → stay calm → ask for help).",
        "Underline three chapters in your notebook that stuck even without a Pi.",
        "In your journal: a letter to yourself in one year — what kind of admin do you want to be?",
      ],
    },
  },
};
