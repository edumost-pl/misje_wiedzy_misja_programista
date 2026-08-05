window.CHAPTER_04 = {
  id: 4,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "What Is Linux?",
  icon: "chip",
  learn: [
    "What an operating system is, in plain words",
    "Why Linux is a family of systems, not \"one button\"",
    "What the kernel does between hardware and programs",
  ],
  content: [
    {
      type: "text",
      text: "You arrive at a concert.",
    },
    {
      type: "text",
      text: "Violins. Drums. Trumpets.",
    },
    {
      type: "text",
      text: "Each musician plays their part.",
    },
    {
      type: "text",
      text: "But without a **conductor**, you get noise — not music.",
    },
    {
      type: "text",
      text: "Something is already running on your Pi's screen. Who's in charge of all of it \"under the hood\"?",
    },
    {
      type: "text",
      text: "Maybe you're thinking: *\"The green board just does magic, right?\"*",
    },
    {
      type: "text",
      text: "No. The board is the instrument. The **operating system** is the conductor.",
    },
    {
      type: "image",
      src: "nf04-a",
      alt: "Diagram: computer and operating system.",
      caption: "The OS is the invisible conductor of the whole orchestra.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Orchestra conductor silhouette metaphor rendered as realistic 3D: conductor directing musicians while computer hardware sits in foreground, bright concert hall lighting simplified to studio white",
    },
    {
      type: "h2",
      text: "The computer's conductor",
    },
    {
      type: "text",
      text: "Picture an orchestra: violins, drums, trumpets. Without a conductor, everyone plays their own thing — and you get noise.",
    },
    {
      type: "text",
      text: "The **operating system** (OS for short) is the computer's conductor. It tells programs: here's the processor, here's memory, here's the screen, here's the disk.",
    },
    {
      type: "text",
      text: "Without an OS, bare hardware is almost useless for everyday work. You have parts — but no easy rules for using them.",
    },
    {
      type: "think",
      id: "q1",
      question: "An operating system is there to…",
      options: [
        { id: "a", text: "just decorate the case with a sticker" },
        { id: "b", text: "manage hardware and let programs run" },
        { id: "c", text: "replace the charging cable" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: the OS **manages hardware and programs**. Without it, a computer isn't a useful everyday tool.",
    },
    {
      type: "h2",
      text: "A big family, not one game",
    },
    {
      type: "text",
      text: "Picture a last name in your class.",
    },
    {
      type: "text",
      text: "Smith — lots of different people. But they share the same last name.",
    },
    {
      type: "text",
      text: "Maybe you're thinking: *\"Is it one program — one button?\"*",
    },
    {
      type: "text",
      text: "Actually **Linux** is a **family** of operating systems. They share the same \"heart,\" but have different \"faces\" and sets of programs.",
    },
    {
      type: "text",
      text: "Raspberry Pi OS, Ubuntu, and many others are relatives in this big family.",
    },
    {
      type: "image",
      src: "nf04-b",
      alt: "The Linux family of systems.",
      caption: "One heart — many different builds.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Several colorful Linux distro logos replaced by abstract friendly penguin-family shapes on light shelves, same heart icon connecting them, bright educational infographic style in 3D",
    },
    {
      type: "think",
      id: "q2",
      question: "Linux exists…",
      options: [
        { id: "a", text: "only on the Raspberry Pi" },
        { id: "b", text: "in many places: servers, PCs, part of phones…" },
        { id: "c", text: "only in a computer museum" },
      ],
      answer: "b",
    },
    {
      type: "text",
      text: "Think about where else a system like this might live, if not just on a small board.",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Linux runs on **Internet servers**, supercomputers, PCs, and even inside Android phones (they use a Linux kernel too). The Pi is a handy way to learn it — but not the only place.",
    },
    {
      type: "h2",
      text: "The heart inside",
    },
    {
      type: "text",
      text: "Picture a three-story house.",
    },
    {
      type: "text",
      text: "On the bottom — foundation and walls (**hardware**).",
    },
    {
      type: "text",
      text: "In the middle — electricity and plumbing (**the kernel**).",
    },
    {
      type: "text",
      text: "On top — furniture and people (**programs**).",
    },
    {
      type: "text",
      text: "Picture a house.",
    },
    {
      type: "text",
      text: "Guests knock on the door: \"Turn on the light!\" \"Save this file!\" \"Send it over the network!\"",
    },
    {
      type: "text",
      text: "One person answers **every** knock — and goes to the \"hardware\" to carry out the request.",
    },
    {
      type: "text",
      text: "In Linux, this \"doorman\" is called the **kernel**. Programs don't barge into the processor on their own — they ask the kernel.",
    },
    {
      type: "image",
      src: "nf04-c",
      alt: "Layers: hardware, kernel, programs.",
      caption: "Hardware → kernel → programs.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Three clear horizontal layers: circuit board bottom, glowing kernel core middle, app icons top, bright isometric 3D cutaway, labels absent",
    },
    {
      type: "ul",
      items: [
        "🔩 **Hardware** — the board, processor, memory, ports",
        "❤️ **Kernel** — the heart of the OS, manages hardware",
        "📦 **Programs** — browser, games, servers, learning tools",
      ],
    },
    {
      type: "text",
      text: "When you understand these layers, everything else gets clearer. You see what you're actually dealing with.",
    },
    {
      type: "fact",
      title: "Did you know?",
      text: "Much of the Internet runs on Linux servers. When you open a website, Linux is already working behind the scenes somewhere far away.",
    },
    {
      type: "image",
      src: "nf04-d",
      alt: "Servers and Linux in the world.",
      caption: "Linux is often invisible — but very busy.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Server room aisle with blinking rack lights but bright overhead lighting, child looking through glass wall in wonder, realistic data center glimpse",
    },
    {
      type: "h2",
      text: "Why does an administrator need this?",
    },
    {
      type: "text",
      text: "An admin doesn't just \"press buttons.\" They understand: files, users, processes, network — all of that lives **inside the OS**.",
    },
    {
      type: "text",
      text: "That's why the next chapters are hands-on practice on your Pi. First — meet one specific \"member\" of this family.",
    },
    {
      type: "h2",
      text: "The big picture",
    },
    {
      type: "ul",
      items: [
        "**What is it?** Linux is a family of operating systems with a shared kernel.",
        "**Why?** So a computer can run programs and manage hardware.",
        "**How to think about it?** Layers: hardware → kernel → programs.",
      ],
    },
    {
      type: "try",
      title: "🔍 Investigation: who's the conductor?",
      body: "On your Pi (or with an adult), try to notice:",
      checklist: [
        "Where can you see the system is already running (desktop, menu, windows)?",
        "One program you can open",
        "That without the system (empty card) none of this would exist",
        "In one sentence, say: who's the \"conductor\" here — the board or the OS?",
      ],
      footer: "If you answered \"the OS,\" you got this chapter.",
    },
    {
      type: "draw",
      text: "Draw three shelves stacked on top of each other and label them: hardware / kernel / programs.",
    },
    {
      type: "diary",
      lines: [
        "What metaphor would you use to explain an OS to a friend?",
        "What surprised you about Linux?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "Linux exists only on the Raspberry Pi.",
          truth:
            "Linux is everywhere: servers, PCs, science machines. The Pi is a handy door into that world.",
        },
        {
          title: "Mistake #2",
          myth: "The OS is just wallpaper on the screen.",
          truth:
            "Wallpaper is a tiny detail. The OS manages memory, files, network, and running programs.",
        },
        {
          title: "Mistake #3",
          myth: "You can learn administration without knowing what an OS is.",
          truth:
            "Every command and service lives \"on top of\" the OS. Without that foundation, it's easy to get lost.",
        },
      ],
    },
    {
      type: "text",
      text: "You know: behind the screen works a conductor — an operating system from a big family.",
    },
    {
      type: "text",
      text: "Game servers on the network run on systems like this — and your future game world on the Pi will have this \"conductor\" too.",
    },
    {
      type: "text",
      text: "But which specific \"member\" is sitting on your Pi?",
    },
    {
      type: "text",
      text: "Next — meet its face.",
    },
  ],
  remember: [
    "The OS is the computer's conductor",
    "Linux is a family of systems",
    "The kernel talks to hardware",
    "The Pi is one way to learn Linux",
  ],
  commands: [],
  glossary: [
    {
      term: "Operating system (OS)",
      def: "The main system that manages hardware and programs.",
    },
    {
      term: "Linux",
      def: "A family of operating systems with a shared kernel.",
    },
    {
      term: "Kernel",
      def: "The heart of the OS; manages the processor, memory, and devices.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Linux is…",
      options: [
        "a family of operating systems",
        "just one game",
        "a type of charger",
      ],
      answer: 0,
      hint: "Think about Windows/macOS: Linux is in the same league.",
      explanation: "Linux is a family of OSes. Raspberry Pi OS and others are built around the Linux kernel.",
    },
    {
      type: "tf",
      text: "An operating system manages hardware and programs.",
      answer: true,
      hint: "Think back to the conductor.",
      explanation: "Yes. The OS gives programs access to the computer's resources.",
    },
    {
      type: "fill",
      prompt: "What is the \"heart\" of the OS that manages hardware called?",
      answer: "kernel",
      hint: "Same word in English.",
      explanation: "The kernel is the central part of the OS.",
    },
    {
      type: "whatif",
      prompt: "What happens without an operating system?",
      hint: "An orchestra with no conductor.",
      explanation: "Without an OS, normal work with files and programs is nearly impossible.",
      sample: "There's no easy way to run programs or manage hardware.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Find the mistake: \"Linux exists only on the Raspberry Pi.\"",
      hint: "Where else have you heard about Linux or Android?",
      explanation: "The Pi is one path. Linux is much bigger.",
      sample: "Linux runs on servers, PCs, and more.",
      optional: true,
    },
  ],
  next: 5,
};
