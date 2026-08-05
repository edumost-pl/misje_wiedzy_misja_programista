window.CHAPTER_17 = {
  id: 17,
  bookId: "sysadmin_en",
  part: 4,
  partTitle: "Networks",
  title: "Servers",
  icon: "server",
  learn: [
    "Who \"holds\" the world while you play",
    "What a server and client are — in plain words",
    "Why a Pi can be a server",
  ],
  content: [
    {
      type: "text",
      text: "You join Minecraft with a friend.",
    },
    {
      type: "text",
      text: "You build. You run around. You laugh out loud.",
    },
    {
      type: "text",
      text: "But wait.",
    },
    {
      type: "text",
      text: "Who is holding this shared world while you are both in the game?",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"A wizard? The cloud? The game itself?\"*",
    },
    {
      type: "text",
      text: "Often it is a separate computer (or program) that **serves** the players.",
    },
    {
      type: "image",
      src: "nf17-a",
      alt: "Who holds the game world",
      caption: "You play. Someone else holds the stage.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child at laptop, blocky game world on a monitor blurred, Raspberry Pi with Ethernet on shelf in background, bright room",
    },
    {
      type: "h2",
      text: "The kitchen and the guests",
    },
    {
      type: "text",
      text: "Picture a party.",
    },
    {
      type: "text",
      text: "Guests ask for juice, cake, music.",
    },
    {
      type: "text",
      text: "In the kitchen, someone cooks and serves.",
    },
    {
      type: "text",
      text: "The guests are **clients**. They ask.",
    },
    {
      type: "text",
      text: "The kitchen is the **server**. It answers with a service.",
    },
    {
      type: "text",
      text: "Websites, files, games, email — same idea everywhere: someone asks, someone serves.",
    },
    {
      type: "think",
      id: "q1",
      question: "In this analogy, the server is…",
      options: [
        { id: "a", text: "the kitchen that cooks and serves" },
        { id: "b", text: "a guest with an empty plate" },
        { id: "c", text: "a doorbell ring for no reason" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Yes: the server serves. The client uses the service.",
    },
    {
      type: "h2",
      text: "Why can a Pi be the \"kitchen\"?",
    },
    {
      type: "text",
      text: "Because a Pi is a real computer. It can hold a service for other devices on the network.",
    },
    {
      type: "text",
      text: "For example — a Minecraft game world for friends at home.",
    },
    {
      type: "ul",
      items: [
        "🌐 web server — serves web pages",
        "📁 file server — shares files",
        "🎮 game server — holds a Minecraft world",
        "🔐 remote access — lets you control a computer from far away",
      ],
    },
    {
      type: "image",
      src: "nf17-b",
      alt: "Pi as a server",
      caption: "A small board — a big \"kitchen\" role.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Restaurant kitchen metaphor: small Pi board on counter like chef station, plates ready, bright clean kitchen",
    },
    {
      type: "fact",
      title: "Important",
      text: "A server loves stability: power, network, tidy files. Like a kitchen during a party — chaos here gets expensive.",
    },
    {
      type: "image",
      src: "nf17-c",
      alt: "Server stability",
      caption: "Reliability first — then the party.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Checklist clipboard with checkmarks, server rack toy and Pi, preparation before party balloons in background bright",
    },
    {
      type: "image",
      src: "nf17-d",
      alt: "Examples of servers",
      caption: "Different kinds of service — one idea.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two realistic 3D arrows: laptop client requesting, Pi server responding, bright infographic on white",
    },
    {
      type: "try",
      title: "🔍 Look around investigation",
      body: "No commands — real-life observation.",
      checklist: [
        "Name 3 \"servers\" you use (website, game, video…)",
        "In each case, who is the client — you or an app on your phone?",
        "Why does a server need to stay on during a game?",
        "Write one reason a Pi is handy for a home server",
      ],
      footer: "You already use servers every day — now you know their name.",
    },
    {
      type: "draw",
      text: "Draw: client (you) → arrow \"I ask\" → server (Pi) → arrow \"here's the world.\"",
    },
    {
      type: "diary",
      lines: [
        "Which server do you \"ask\" most often in real life?",
        "Why does stable power matter for a server?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "A server is only a loud room with blinking lights.",
          truth: "A server is a role: serving others. Even a small board can do it.",
        },
        {
          title: "Mistake #2",
          myth: "Client and server are the same thing.",
          truth: "The client asks. The server answers.",
        },
        {
          title: "Mistake #3",
          myth: "If the server is on, you do not need a network.",
          truth: "Without a connection, the client cannot reach the service.",
        },
      ],
    },
    {
      type: "text",
      text: "The idea of a server makes sense now.",
    },
    {
      type: "text",
      text: "Ready to set up your own? Next — laying the foundation for a Minecraft server.",
    },
  ],
  remember: [
    "The server serves, the client uses",
    "A Pi can be a home server",
    "Stability matters",
    "Online Minecraft is an example of a service",
  ],
  commands: [],
  glossary: [
    { term: "Server", def: "A computer or program that provides a service to others." },
    { term: "Client", def: "Whoever asks for and uses the service." },
  ],
  check: [
    {
      type: "mc",
      prompt: "A server is…",
      options: [
        "whoever provides a service to others",
        "only a game disc",
        "the power button",
      ],
      answer: 0,
      hint: "Kitchen at a party.",
      explanation: "A server serves clients.",
    },
    {
      type: "tf",
      text: "The client sends a request, the server responds.",
      answer: true,
      hint: "Ask → receive.",
      explanation: "Classic client–server model.",
    },
    {
      type: "fill",
      prompt: "Who uses the server's service?",
      answer: "client",
      hint: "Guest at a party.",
      explanation: "The client asks and receives the service.",
    },
    {
      type: "whatif",
      prompt: "The server is on, but the network is cut. What happens to online play?",
      hint: "Kitchen exists, doors are locked.",
      explanation: "You need both the server and a path to it.",
      sample: "Clients will not be able to connect properly.",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"Server = only a loud room\"",
      hint: "Not size — job.",
      explanation: "A small computer can be a server too.",
      sample: "A server is a serving role, even on a Pi.",
      optional: true,
    },
  ],
  next: 18,
};
