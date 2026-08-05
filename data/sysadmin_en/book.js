/* Book — Mission Admin (kids nonfiction, EN · Amazon-ready) */
window.BOOK_SYSADMIN_EN = {
  id: "sysadmin_en",
  number: 12,
  title: "Mission Admin",
  tagline: "Understand a real computer — then host your own game world",
  subtitle: "Raspberry Pi 5 · Linux · terminal · networks · your own server",
  theme:
    "Kids nonfiction · not “memorize Linux” — understand how a real computer works",
  lang: "en",
  format: "nonfiction",
  icon: "minecraft",
  color: "#0F766E",
  colorSoft: "#CCFBF1",
  accent: "#115E59",
  rating: 5,
  chaptersCount: 22,
  readingMinutes: 180,
  level: "Ages 10–12",
  description:
    "A friend is waiting for an invite to your game world. This book takes you from a Raspberry Pi to your own server — and it works in class **without a Pi**: every chapter has a full Track B practice path.",
  amazon: {
    subtitleLong:
      "A Hands-On Raspberry Pi Guide for Ages 10–12: Linux, the Terminal, Networks, and Hosting a Private Game Server at Home",
    disclaimer:
      "This is an unofficial educational guide. It is not affiliated with, endorsed by, or sponsored by Mojang Studios, Microsoft, or the Raspberry Pi Foundation. Game names are used only to describe software young readers may already know.",
    keywords: [
      "raspberry pi for kids",
      "linux for beginners kids",
      "kids coding nonfiction",
      "game server raspberry pi",
      "STEM ages 10-12",
      "terminal tutorial children",
      "home lab kids",
    ],
  },
  frontMatter: {
    preface:
      "This book is not about “studying Linux.” It is about **understanding a real computer** — and building **your own game world** on a Raspberry Pi 5 that friends can join. You will not memorize dry rules. You will walk the admin path: board → system → terminal → files → network → server.",
    withAdult:
      "This book is made for **family projects** and **school clubs**. An adult nearby is normal: plug in the Pi together, turn on SSH together, start the server together. You learn and decide; the adult watches safety, network rules, and permissions.",
    withoutPi:
      "No Raspberry Pi yet? **Every chapter** has an **“In class without a Pi”** block — not a shortcut, but **full practice**: paper terminals, a school PC, role-play. One Pi for the whole class can be a demo at the end — understanding does not depend on how many boards you own.",
    howToUse: [
      "Choose a track: **A — Pi in your hands** or **B — class without a Pi** (see the block in every chapter).",
      "Read in small bites — one chapter at a time, no rushing.",
      "“Check yourself”: **3 questions** required; **2 bonus** optional (not a test).",
      "“Try it now” — on a Pi; without a Pi — use **“In class without a Pi”** below.",
      "Fill in the 📒 Admin Journal — it counts as practice even without commands.",
      "When needed — **with an adult**: power, network, sudo, Java, server setup.",
    ],
    legalNote:
      "Trademark notice: Minecraft® is a trademark of Mojang Synergies AB / Microsoft. Raspberry Pi® is a trademark of the Raspberry Pi Foundation. This book is an independent educational work and is not affiliated with those companies. Cover art does not use official logos, character marks, or branded packaging.",
  },
  backMatter: {
    glossaryNote:
      "The full glossary collects terms from every chapter. Short definitions for quick reminders.",
    indexNote:
      "The subject index helps you find a topic fast: Pi, Linux, commands, SSH, game server files.",
  },
  parts: [
    { id: 1, title: "What Is a Raspberry Pi?", chapters: [1, 2, 3] },
    { id: 2, title: "Tour of the Board", chapters: [4, 5, 6, 7, 8, 9, 10] },
    { id: 3, title: "First Boot", chapters: [11, 12, 13, 14] },
    { id: 4, title: "What Is Linux?", chapters: [15, 16, 17] },
    { id: 5, title: "Raspberry Pi OS", chapters: [18, 19, 20] },
    { id: 6, title: "The Terminal", chapters: [21, 22] },
  ],
  chapters: [
    { id: 1, title: "What Is a Raspberry Pi?", icon: "pi", part: 1 },
    { id: 2, title: "A Tour of the Board", icon: "electronics", part: 1 },
    { id: 3, title: "First Boot", icon: "led", part: 1 },
    { id: 4, title: "What Is Linux?", icon: "chip", part: 2 },
    { id: 5, title: "Raspberry Pi OS", icon: "pi", part: 2 },
    { id: 6, title: "The Terminal", icon: "terminal", part: 2 },
    { id: 7, title: "Navigating Folders", icon: "folder", part: 2 },
    { id: 8, title: "Creating Folders", icon: "folder", part: 2 },
    { id: 9, title: "Working With Files", icon: "code", part: 2 },
    { id: 10, title: "The nano Editor", icon: "code", part: 2 },
    { id: 11, title: "Users", icon: "search", part: 3 },
    { id: 12, title: "Access Permissions", icon: "search", part: 3 },
    { id: 13, title: "Processes", icon: "chip", part: 3 },
    { id: 14, title: "Finding Files", icon: "search", part: 3 },
    { id: 15, title: "The Internet", icon: "server", part: 4 },
    { id: 16, title: "SSH", icon: "server", part: 4 },
    { id: 17, title: "Servers", icon: "server", part: 4 },
    { id: 18, title: "Installing the Server", icon: "minecraft", part: 5 },
    { id: 19, title: "Configuration", icon: "minecraft", part: 5 },
    { id: 20, title: "Starting the Server", icon: "minecraft", part: 5 },
    { id: 21, title: "More Raspberry Pi Projects", icon: "rocket", part: 6 },
    { id: 22, title: "Your Admin Path", icon: "diploma", part: 6 },
  ],
};
