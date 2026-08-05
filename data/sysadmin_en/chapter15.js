window.CHAPTER_15 = {
  id: 15,
  bookId: "sysadmin_en",
  part: 4,
  partTitle: "Networks",
  title: "The Internet",
  icon: "server",
  learn: [
    "How to check if the Pi \"sees\" the network",
    "What a device address on the network is — in plain words",
    "How to test the connection (ping) and stop it",
  ],
  content: [
    {
      type: "text",
      text: "You open a video on the Pi.",
    },
    {
      type: "text",
      text: "The spinner turns. And turns. And turns.",
    },
    {
      type: "text",
      text: "Wait. **Is the internet broken?** Or is it just **our Pi** that cannot reach it?",
    },
    {
      type: "fact",
      title: "With a grown-up",
      text: "Checking the network is a good time to **ask a grown-up for help**: router, Wi‑Fi, cable. You are learning to diagnose; a grown-up helps where \"grown-up settings\" are needed.",
    },
    {
      type: "text",
      text: "Those are not the same thing.",
    },
    {
      type: "text",
      text: "Maybe Wi‑Fi says \"connected,\" but the path beyond is cut off. Maybe the address disappeared. Maybe everything is fine — the site is just slow.",
    },
    {
      type: "text",
      text: "A good admin does not yell \"everything is broken!\" They **check step by step**.",
    },
    {
      type: "image",
      src: "nf15-a",
      alt: "Video will not load",
      caption: "The spinner keeps turning — but where is it stuck?",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Monitor with loading spinner blurred, Ethernet cable to Pi, troubleshooting network, bright not frustrating dark room",
    },
    {
      type: "h2",
      text: "A home address on the network",
    },
    {
      type: "text",
      text: "Picture a big apartment building with many units.",
    },
    {
      type: "text",
      text: "To deliver a letter, you need an **address**: building, entrance, apartment.",
    },
    {
      type: "text",
      text: "On a network it works the same way. Each device has an **address** — numbers that others use to find it on the home network.",
    },
    {
      type: "text",
      text: "Picture this: you ordered pizza. The driver stands outside and shouts: \"**What's your apartment number?**\"",
    },
    {
      type: "text",
      text: "Without a number — even the best pizza **will never find you**.",
    },
    {
      type: "text",
      text: "On the network, the apartment number is the Pi's **address**. **ip a** helps you find it — a \"passport\" of network connections.",
    },
    {
      type: "code",
      text: "# Show network interfaces and addresses\npi@raspberrypi:~$ ip a\n\n# Look for the inet line — that is your address on the network\n# (your numbers will differ)\n#     inet 192.168.1.42/24 ...",
    },
    {
      type: "text",
      text: "You do not need to understand every line right away.",
    },
    {
      type: "text",
      text: "The big discovery: **is there an address at all?** If not — fix that first, instead of blaming \"the whole internet.\"",
    },
    {
      type: "think",
      id: "q1",
      question: "Before \"yelling at the internet,\" an admin first checks…",
      options: [
        { id: "a", text: "whether the Pi has an address on the network" },
        { id: "b", text: "the color of the board's case" },
        { id: "c", text: "the length of the HDMI cable" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: first the \"passport\" — is the Pi on the network at all?",
    },
    {
      type: "image",
      src: "nf15-b",
      alt: "Address on the network",
      caption: "Without an address, the letter cannot find the apartment.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic apartment building facade with door numbers, one door highlighted, mail envelope, bright street photography style",
    },
    {
      type: "h2",
      text: "\"Hello!\" on the network",
    },
    {
      type: "text",
      text: "You have an address. Good.",
    },
    {
      type: "text",
      text: "But is the **road open** beyond that?",
    },
    {
      type: "text",
      text: "Picture standing in a yard and shouting \"**Hello!**\" toward the mountains. If you hear an echo — the connection works. If there is silence — something is between you and the mountains.",
    },
    {
      type: "text",
      text: "There is a command that sends tiny \"hellos\" and waits to see if an **echo** comes back.",
    },
    {
      type: "text",
      text: "It is called **ping**.",
    },
    {
      type: "code",
      text: "# Send 4 test packets and wait for a reply\npi@raspberrypi:~$ ping -c 4 8.8.8.8\n\n# If you see time=... — the echo came back\n# If ping runs without -c — stop with Ctrl+C",
    },
    {
      type: "text",
      text: "The **`-c 4`** flag means \"only 4 tries.\" Without a limit, the command can run a long time — then stop it with **Ctrl+C**.",
    },
    {
      type: "think",
      id: "q2",
      question: "The \"hello on the network\" command checks…",
      options: [
        { id: "a", text: "whether a node on the network replies" },
        { id: "b", text: "the microSD temperature" },
        { id: "c", text: "screen brightness" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Yes: reachability and reply delay — like an echo from the mountains.",
    },
    {
      type: "image",
      src: "nf15-c",
      alt: "Testing the connection",
      caption: "An echo from the network — or silence.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Child shouting across bright mountain valley, echo wave visualized lightly, playful network metaphor",
    },
    {
      type: "h2",
      text: "Wi‑Fi ≠ the internet",
    },
    {
      type: "text",
      text: "You can be on the home network without a path \"outside.\"",
    },
    {
      type: "text",
      text: "You can have a Wi‑Fi icon but no address.",
    },
    {
      type: "text",
      text: "So an admin does not trust one icon. They check: **address → echo → then further**.",
    },
    {
      type: "fact",
      title: "Echo is not always the whole truth",
      text: "Some servers do not reply to test packets. No reply does not always mean \"there is no internet.\" But it is still a useful clue.",
    },
    {
      type: "ul",
      items: [
        "**What is it?** An address — a device's \"apartment\" on the network",
        "**Why care?** To know if the Pi is \"home\" at all",
        "**How to check next?** Send a \"hello\" and wait for an echo",
        "**Like in real life?** First check if the outlet works, then if the lamp is on",
      ],
    },
    {
      type: "image",
      src: "nf15-d",
      alt: "Network diagnosis",
      caption: "Local first, then further out.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal showing ip a and ping commands, network lines blurred, Pi with Ethernet connected, bright",
    },
    {
      type: "try",
      title: "🔍 Investigation: where is the video stuck?",
      body: "This is not \"just type a command.\" This is an investigation.",
      checklist: [
        "Open the terminal",
        "Type `ip a` — is there an address (an inet line)?",
        "Write in your journal: address yes or no",
        "Type `ping -c 4 8.8.8.8`",
        "Was there a reply (time=...) or silence?",
        "If ping runs without -c — stop with Ctrl+C",
        "Write your conclusion: problem on the Pi, home network, or further out?",
      ],
      footer: "You are already diagnosing the network like a real admin.",
    },
    {
      type: "draw",
      text: "Draw: Pi → router → internet. Label where you check the \"address\" and where you check the \"echo.\"",
    },
    {
      type: "diary",
      lines: [
        "What address did you see (or \"none\")?",
        "What did the \"hello on the network\" test show?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "No echo reply means the internet never existed.",
          truth: "Sometimes replies are blocked; check other signs too.",
        },
        {
          title: "Mistake #2",
          myth: "The Wi‑Fi icon alone is enough.",
          truth: "An icon ≠ a verified address and path.",
        },
        {
          title: "Mistake #3",
          myth: "You can leave the \"hello\" command running forever.",
          truth: "Better use -c N or Ctrl+C.",
        },
      ],
    },
    {
      type: "text",
      text: "Now you know how to check: **is the Pi on the network** and **is the road open beyond**.",
    },
    {
      type: "text",
      text: "But what if the Pi sits in **another room** — with no monitor?",
    },
    {
      type: "text",
      text: "How do you talk to it then? You will find out in the next chapter.",
    },
  ],
  remember: [
    "Address first — then \"hello on the network\"",
    "ip a — my network \"passport\"",
    "ping — echo test",
    "Ctrl+C stops it",
    "Wi‑Fi ≠ always the internet",
  ],
  commands: [
    { cmd: "ip a", does: "Shows interfaces and addresses" },
    { cmd: "ping -c 4 address", does: "Tests whether the network replies" },
    { cmd: "Ctrl+C", does: "Stops the current command" },
  ],
  glossary: [
    {
      term: "IP address",
      def: "A device's address on the network — like an apartment number.",
    },
    {
      term: "ping",
      def: "A test of whether a node replies — like \"Hello!\" in the mountains.",
    },
    {
      term: "Router",
      def: "The device that bridges your home and the big internet.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "ping checks…",
      options: [
        "whether a node on the network replies",
        "SD card temperature",
        "brightness",
      ],
      answer: 0,
      hint: "Hello on the network",
      explanation: "Test packets and echo.",
    },
    {
      type: "tf",
      text: "ip a helps you see network addresses.",
      answer: true,
      hint: "ip address",
      explanation: "Yes.",
    },
    {
      type: "fill",
      prompt: "Short name for an address on the network:",
      answer: "IP",
      hint: "Two letters",
      explanation: "Internet Protocol.",
    },
    {
      type: "whatif",
      prompt: "A site will not open. Where do you start?",
      hint: "Local first",
      explanation: "Diagnose from the bottom up.",
      sample: "ip a, then ping the gateway/8.8.8.8",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"No ping = no internet forever\"",
      hint: "Not one test",
      explanation: "Check more broadly.",
      sample: "Ping can be blocked.",
      optional: true,
    },
  ],
  next: 16,
};
