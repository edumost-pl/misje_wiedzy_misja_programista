window.CHAPTER_21 = {
  id: 21,
  bookId: "sysadmin_en",
  part: 6,
  partTitle: "What's Next?",
  title: "More Raspberry Pi Projects",
  icon: "chip",
  learn: [
    "What paths open after Minecraft",
    "How to pick your next project",
    "Why admin skills work everywhere",
  ],
  content: [
    {
      type: "text",
      text: "You already ran a Minecraft server.",
    },
    {
      type: "text",
      text: "Friends joined. You checked everything. You are an admin.",
    },
    {
      type: "text",
      text: "And then a question pops up: *\"What else can this little board do?\"*",
    },
    {
      type: "text",
      text: "Answer: a lot. Minecraft is just one stop on the map.",
    },
    {
      type: "image",
      src: "nf21-a",
      alt: "Map of Pi ideas",
      caption: "One computer — many roads.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic map on desk with paths to robot, media center, weather station icons, Pi at start point, bright",
    },
    {
      type: "h2",
      text: "Map of possibilities",
    },
    {
      type: "ul",
      items: [
        "🏠 home helper: lights, sensors, reminders",
        "📚 media center: movies and music in your room",
        "🔬 mini lab: measurements and experiments",
        "🤖 robots and buttons through GPIO",
        "🌐 a small website or file server for your family",
      ],
    },
    {
      type: "text",
      text: "You do not have to do everything at once. Pick **one** thing that sounds fun.",
    },
    {
      type: "think",
      id: "q1",
      question: "How do you pick your next project best?",
      options: [
        { id: "a", text: "something you truly care about and can handle now" },
        { id: "b", text: "all 50 ideas in one night" },
        { id: "c", text: "only whatever the internet screams without explanation" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: interest + doable size. Admins grow step by step.",
    },
    {
      type: "h2",
      text: "Your universal superpowers",
    },
    {
      type: "text",
      text: "Imagine a traveler's backpack.",
    },
    {
      type: "text",
      text: "It is not stuffed with 500 labels — it holds **skills**: find the road, open a door, read a sign, ask \"where am I?\"",
    },
    {
      type: "text",
      text: "Terminal, folders, nano, permissions, search, network, logs — that is not \"just for Minecraft.\" It is the **language** of almost any Linux project.",
    },
    {
      type: "fact",
      title: "Whoa!",
      text: "When the project changes, the ritual often stays: understand the problem → try something → check → write it down.",
    },
    {
      type: "image",
      src: "nf21-b",
      alt: "Different projects",
      caption: "Different goals — same admin tools.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Collage desk: Pi with GPIO wires, small screen, sensor module, same terminal skills, bright maker space",
    },
    {
      type: "image",
      src: "nf21-c",
      alt: "Choosing one path",
      caption: "One next step beats a hundred dreams.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child pointing at one chosen project card among many on table, decision moment, bright",
    },
    {
      type: "image",
      src: "nf21-d",
      alt: "Keep exploring",
      caption: "The book ends. Curiosity does not.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Closed book on desk but Pi project glowing with LED next to open notebook, curiosity continues, bright window",
    },
    {
      type: "try",
      title: "🔍 Explore the map",
      body: "No required commands — just a plan.",
      checklist: [
        "List 3 project ideas that sound fun to you",
        "Cross out ones that need buying everything at once",
        "Keep one idea for \"this month\"",
        "Which skills from this book will you already need for it?",
      ],
      footer: "You picked a course. That is an admin decision.",
    },
    {
      type: "draw",
      text: "Draw a map of project islands and mark your next island with a star.",
    },
    {
      type: "diary",
      lines: [
        "Which project will you pick next and why?",
        "Which admin habit will help in any project?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "After Minecraft there is nothing interesting left.",
          truth: "The Pi opens a whole map of ideas.",
        },
        {
          title: "Mistake #2",
          myth: "You have to do everything at once.",
          truth: "One next step beats chaos.",
        },
        {
          title: "Mistake #3",
          myth: "Old commands will never matter again.",
          truth: "Terminal and files show up almost everywhere.",
        },
      ],
    },
    {
      type: "text",
      text: "The map is in front of you.",
    },
    {
      type: "text",
      text: "One thing left: take the most important thing from this book — **your admin path**.",
    },
  ],
  remember: [
    "Pi is not just for Minecraft",
    "Pick one next project",
    "Admin skills transfer",
    "Curiosity beats a checklist of checkmarks",
  ],
  commands: [],
  glossary: [
    {
      term: "Project",
      def: "A concrete goal with steps and a way to check the result.",
    },
    {
      term: "GPIO",
      def: "Pins on the board for buttons, sensors, and lights.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "After a big project, what do you do?",
      options: [
        "pick one interesting next step",
        "forget the terminal forever",
        "throw away the Pi",
      ],
      answer: 0,
      hint: "Island map.",
      explanation: "Growth happens step by step.",
    },
    {
      type: "tf",
      text: "Terminal commands are useful outside Minecraft too.",
      answer: true,
      hint: "Universal language.",
      explanation: "Yes. Linux skills transfer.",
    },
    {
      type: "whatif",
      prompt: "Twenty ideas and your eyes go wide. What now?",
      hint: "Less is clearer.",
      explanation: "Focus helps you finish.",
      sample: "Pick one doable idea for the near future.",
      optional: true,
    },
    {
      type: "explain",
      prompt: "Name 2 Pi projects besides a game server.",
      hint: "Map of possibilities.",
      explanation: "Lots of options.",
      sample: "Media center, sensors, website, robot…",
      optional: true,
    },
  ],
  next: 22,
};
