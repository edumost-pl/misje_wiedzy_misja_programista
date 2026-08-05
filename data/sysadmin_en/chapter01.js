window.CHAPTER_01 = {
  id: 1,
  bookId: "sysadmin_en",
  part: 1,
  partTitle: "Meet the Raspberry Pi",
  title: "What Is a Raspberry Pi?",
  icon: "pi",
  learn: [
    "What the Raspberry Pi 5 is",
    "Why small size doesn't mean \"not real\"",
    "Why it's called a single-board computer",
  ],
  content: [
    {
      type: "text",
      text: "You play games on a tablet.",
    },
    {
      type: "text",
      text: "You watch videos.",
    },
    {
      type: "text",
      text: "You text a friend.",
    },
    {
      type: "text",
      text: "That's a **computer**, right?",
    },
    {
      type: "text",
      text: "Now imagine someone hands you something **the size of a credit card**. No case. No screen built into the board itself. Just a green circuit board covered in tiny parts.",
    },
    {
      type: "fact",
      title: "No Pi yet? That's fine",
      text: "If you don't have a board yet — **keep going**. Read, draw, answer the questions. At the end of this part you'll find a **\"Class Without a Pi\"** block with a full classroom practice path.",
    },
    {
      type: "text",
      text: "Wait. Is this actually a computer — or just a \"scrap of electronics from something bigger\"?",
    },
    {
      type: "text",
      text: "Maybe you're thinking: *\"How is that possible? It's smaller than a phone! And where's the screen?\"*",
    },
    
    {
      type: "image",
      src: "nf00-hero",
      alt: "Raspberry Pi 5 on a desk.",
      caption: "Here it is: the Raspberry Pi 5 — small, but not a toy.",
      prompt: "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi 5 board centered on a light wooden desk, HDMI cable and microSD card beside it, child's hands reaching toward the board with curiosity, shallow depth of field, wonder mood",
    },
    {
      type: "h2",
      text: "Real doesn't mean \"big\"",
    },
    {
      type: "text",
      text: "Picture two musicians.",
    },
    {
      type: "text",
      text: "One plays a huge grand piano in a concert hall. The other plays a small keyboard on a desk.",
    },
    {
      type: "text",
      text: "Different sizes. But both **make music**. Both are real instruments.",
    },
    {
      type: "text",
      text: "Computers work the same way.",
    },
    {
      type: "text",
      text: "What makes something a computer isn't the size of its case. What matters is whether it can **run programs**, **store data**, and **connect to a network**.",
    },
    {
      type: "text",
      text: "This little device is called the **Raspberry Pi 5**. And it can do all of that.",
    },
    {
      type: "text",
      text: "You can use it to:",
    },
    {
      type: "ul",
      items: [
        "🌍 browse websites on the Internet",
        "🎮 run games and game worlds",
        "🤖 control a robot or LEDs",
        "📷 build a home camera",
        "🏠 help a smart home system work",
        "🎵 listen to music and watch videos",
        "💻 learn to work like a real computer administrator",
      ],
    },
    {
      type: "text",
      text: "Your friend already plays on other people's game servers and asks: \"When will **your** world be ready?\" You can build that kind of world on a Pi too — but first you need to understand **how a computer actually works**.",
    },
    {
      type: "text",
      text: "So **the Raspberry Pi is a real computer**. Just a very compact one.",
    },
    {
      type: "think",
      id: "q1",
      question: "So what do you think: a Raspberry Pi is…",
      options: [
        { id: "a", text: "just a toy" },
        { id: "b", text: "a real computer" },
        { id: "c", text: "a toaster" },
      ],
      answer: "b",
    },
    {
      type: "text",
      text: "Don't rush. Think about it: what makes something a computer — a fancy case, or the ability to run programs?",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: the Raspberry Pi is a **real computer**. A toy can't run serious programs or manage projects. A Pi can. A toaster can't either (thankfully).",
    },
    {
      type: "h2",
      text: "What's inside a big computer?",
    },
    {
      type: "text",
      text: "Picture a big laptop.",
    },
    {
      type: "text",
      text: "On the outside — a case, a screen, a keyboard.",
    },
    {
      type: "text",
      text: "On the inside — a board with a processor, memory, and ports.",
    },
    {
      type: "text",
      text: "The Raspberry Pi is like someone **pulled the important parts out** for you to see. No big shell around them. But the \"brain\" and the \"hands\" for plugging things in are all there.",
    },
    {
      type: "text",
      text: "You connect the screen and keyboard **separately** — just like with a regular computer. The board itself is already a computer.",
    },
    {
      type: "image",
      src: "nf01-size",
      alt: "A small Raspberry Pi next to a large desktop computer.",
      caption: "Small size isn't a weakness. It's what modern technology makes possible.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi 5 placed next to a large desktop PC tower on the same bright desk, clear size contrast, both devices well lit, educational comparison shot",
    },
    {
      type: "h2",
      text: "One board — a whole computer",
    },
    {
      type: "text",
      text: "Imagine: computers once **filled an entire room**.",
    },
    {
      type: "text",
      text: "Then a cabinet. Then a suitcase. Then a pocket.",
    },
    {
      type: "text",
      text: "Engineers asked: \"What if we put **everything important** on one small board?\"",
    },
    {
      type: "text",
      text: "That's how the **single-board computer** was born — not a toy, but **technology squeezed down** to the size of your palm.",
    },
    {
      type: "text",
      text: "\"Single-board\" doesn't mean \"weak.\" It means all the important parts are in one place, compact and out in the open.",
    },
    {
      type: "fact",
      title: "Wow!",
      text: "Computers weren't always pocket-sized. Once they filled **entire rooms**. Then a cabinet. Then a suitcase. Today some fit in your palm. The Raspberry Pi is one of them.",
    },
    {
      type: "text",
      text: "Students use them. Programmers and engineers use them. Even scientists use them in serious projects.",
    },
    {
      type: "image",
      src: "nf01-hero",
      alt: "Raspberry Pi 5 on a desk with cables.",
      caption: "Small tool — big possibilities.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Complete Raspberry Pi 5 learning station: board, monitor, keyboard, mouse, neat cable management, cheerful bright home desk, ready to work",
    },
    {
      type: "fact",
      title: "Did you know?",
      text: "Today the Raspberry Pi isn't just used in classrooms. You can find it:",
      items: [
        "🚀 in science and space projects",
        "🏭 in factories and workshops",
        "🏫 in schools and clubs",
        "🤖 in robots and DIY builds",
        "🏠 in smart home systems",
      ],
    },
    {
      type: "h2",
      text: "The big picture",
    },
    {
      type: "ul",
      items: [
        "**What is it?** The Raspberry Pi 5 is a real single-board computer.",
        "**Why so small?** Modern parts fit on one board.",
        "**Why in this book?** To learn computer administration hands-on.",
      ],
    },
    {
      type: "try",
      title: "🔍 Investigation: what do you see?",
      body: "This isn't \"just look.\" This is an eyes-on check.",
      checklist: [
        "If you have a Pi (or a photo), find the processor and the ports along the edges",
        "Say out loud: \"This is a computer, not a toy\"",
        "Show an adult where the board is and where the screen connects (there's no screen on the board — and that's normal)",
        "Write in your diary: what surprised you most?",
      ],
      footer: "If you see board = computer, you're looking at it the right way.",
    },
    {
      type: "draw",
      text: "Draw the Raspberry Pi as a rectangle and label it in big letters: \"COMPUTER.\"",
    },
    {
      type: "diary",
      lines: [
        "What surprised you most in this chapter?",
        "In one sentence: why do you want a Raspberry Pi?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "The Raspberry Pi is too small to be a real computer.",
          truth:
            "Size doesn't decide. A computer is something that can run programs and work with data.",
        },
        {
          title: "Mistake #2",
          myth: "No screen on the board means it's not a computer.",
          truth:
            "You connect the screen and keyboard separately. The board itself is already a computer.",
        },
        {
          title: "Mistake #3",
          myth: "Single-board = weak toy.",
          truth:
            "\"Single-board\" means a compact layout of parts, not \"not real.\"",
        },
      ],
    },
    {
      type: "text",
      text: "Now you know the main idea: the Raspberry Pi is a **real computer**, even though it's small.",
    },
    {
      type: "text",
      text: "But around that green board there's a bunch of holes and ports.",
    },
    {
      type: "text",
      text: "What plugs in where? Next up — a tour of the board's \"doors.\"",
    },
  ],
  remember: [
    "Raspberry Pi 5 is a real computer",
    "Small ≠ not real",
    "Single-board = parts on one board",
    "Screen and keyboard plug in separately",
  ],
  commands: [],
  glossary: [
    {
      term: "Raspberry Pi 5",
      def: "A small single-board computer about the size of a credit card.",
    },
    {
      term: "Single-board computer",
      def: "A computer with almost all its main parts on one board.",
    },
    {
      term: "Mini computer",
      def: "A full computer in a very small package.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "The Raspberry Pi 5 is…",
      options: [
        "a calculator",
        "a real mini computer",
        "headphones",
      ],
      answer: 1,
      hint: "Think back to the main idea after the board photo.",
      explanation: "The Raspberry Pi 5 is a real single-board computer, even though it's small.",
    },
    {
      type: "tf",
      text: "If there's no screen on the board, it's not a computer.",
      answer: false,
      hint: "Is the screen part of the \"face\" or the \"brain\"?",
      explanation: "Not true. You connect the screen separately. The board is already a computer.",
    },
    {
      type: "error",
      prompt: "Find the mistake: \"Small = not a computer.\"",
      hint: "What matters more: the case or what it can do?",
      explanation: "Computers are defined by what they can do, not the size of their case.",
      sample: "Size doesn't determine whether something is a computer.",
      optional: true,
    },
    {
      type: "explain",
      prompt: "In your own words: how is the Pi like a big PC, and how is it different on the outside?",
      hint: "Brain vs. case.",
      explanation: "Inside, the same computer ideas apply; on the outside — a compact, open board.",
      sample: "Similar in what it can do; different in size and the open board with no case.",
      optional: true,
    },
  ],
  next: 2,
};
