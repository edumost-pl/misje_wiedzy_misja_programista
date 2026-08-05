window.CHAPTER_20 = {
  id: 20,
  bookId: "sysadmin_en",
  part: 5,
  partTitle: "Your Game Server",
  title: "Starting the Server",
  icon: "minecraft",
  learn: [
    "How to tell the server really started",
    "Why you read logs",
    "How friends join on the same Wi‑Fi",
    "How to stop the server safely",
  ],
  content: [
    {
      type: "text",
      text: "You pressed start.",
    },
    {
      type: "text",
      text: "Lines scroll across the screen.",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"Done! Call everyone!\"*",
    },
    {
      type: "text",
      text: "But wait. Is the server **really** ready — or just making noise with letters?",
    },
    {
      type: "image",
      src: "nf20-a",
      alt: "Launch moment",
      caption: "Noise on the screen ≠ ready. Learn to read the signs.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal scrolling many log lines blurred, child leaning forward reading carefully, suspense but bright room",
    },
    {
      type: "h2",
      text: "Logs — the server's diary",
    },
    {
      type: "text",
      text: "Imagine a ship's logbook.",
    },
    {
      type: "text",
      text: "The captain writes: what happened, what went wrong, when everything is ready.",
    },
    {
      type: "text",
      text: "The server keeps a journal like that — called **logs**.",
    },
    {
      type: "text",
      text: "Admins do not guess. They read logs.",
    },
    {
      type: "think",
      id: "q1",
      question: "Why read logs at startup?",
      options: [
        { id: "a", text: "to spot errors and the \"ready\" moment" },
        { id: "b", text: "to draw wallpaper" },
        { id: "c", text: "to turn off the room lights" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: logs tell the truth about startup.",
    },
    {
      type: "h2",
      text: "Signs it is ready",
    },
    {
      type: "text",
      text: "Imagine an airport.",
    },
    {
      type: "text",
      text: "A plane rumbles on the runway. Passengers are lined up. But the **doors are still closed** — because the pilot has not said \"ready for boarding.\"",
    },
    {
      type: "text",
      text: "In server logs, look for a moment like this: a line such as **Done** — \"world loaded, doors open, waiting for players.\"",
    },
    {
      type: "code",
      text: "# Example startup idea (exact command depends on your build)\npi@raspberrypi:~/minecraft-server$ java -jar server.jar nogui\n\n# Read the lines on screen\n# Look for a ready sign or an error message\n# Do not call friends until you are sure",
    },
    {
      type: "ul",
      items: [
        "✅ A message about successful startup",
        "✅ No red error about Java / EULA / port",
        "✅ You can connect yourself and check the world",
      ],
    },
    {
      type: "image",
      src: "nf20-b",
      alt: "Reading logs",
      caption: "Lines are clues. Read calmly.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Close-up monitor server log with Done line area highlighted blur, calm reading, daylight",
    },
    {
      type: "fact",
      title: "Whoa!",
      text: "Sometimes the first run takes a while — the world is being created. That is not frozen forever — but if minutes pass and there is an error, read it instead of mashing buttons.",
    },
    {
      type: "h2",
      text: "How friends join (same Wi‑Fi)",
    },
    {
      type: "text",
      text: "This is not \"the whole internet.\" It is **one home network**: your Pi and a friend's laptop connected to the same router.",
    },
    {
      type: "diagram",
      title: "Your friend's path to the world",
      layout: "flow",
      items: [
        { label: "Pi IP", text: "Address on the home network (like in the network chapter)" },
        { label: "Direct Connection", text: "In Minecraft: Multiplayer → Direct Connection" },
        { label: "Port 25565", text: "The standard door for Minecraft Server" },
      ],
      caption: "Same Wi‑Fi → Pi address → door 25565 → world.",
    },
    {
      type: "ul",
      items: [
        "On the Pi, check the address: `ip a` (look for `inet`, as before) — for example `192.168.1.42`",
        "Your friend in Minecraft: **Multiplayer** → **Direct Connection**",
        "Enter address and port: `192.168.1.42:25565` (your numbers will differ)",
        "Your friend's Minecraft version must **match** the `server.jar` version",
        "Join **yourself** from your PC first — only then call friends",
      ],
    },
    {
      type: "callout",
      variant: "tip",
      title: "Home only",
      text: "Opening a server to the **whole internet** is a big separate safety topic. In this book we play on **one Wi‑Fi** with family and friends nearby — not opening to the whole internet.",
    },
    {
      type: "fact",
      title: "How many friends can a Pi handle?",
      text: "A small computer comfortably runs about **2–4** players. That is already a party. Ten at once is too heavy for a Pi without stronger hardware.",
    },
    {
      type: "image",
      src: "nf20-c",
      alt: "Connection test",
      caption: "You first. Then friends.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Single child joining blocky sandbox game on same desk as Pi server, solo test before friends, bright",
    },
    {
      type: "h2",
      text: "How to stop the world the right way",
    },
    {
      type: "text",
      text: "Do not pull the power cord while the server is running. Better to tell the world **\"stop\"** in the console — then it saves the world and shuts down calmly.",
    },
    {
      type: "code",
      text: "# In the window where the server is running, type and press Enter:\nstop\n\n# Wait for the shutdown message\n# Only then is it safe to turn off the Pi",
    },
    {
      type: "callout",
      variant: "warning",
      title: "Why not yank the cable?",
      text: "Sudden power-off is like turning off the lights while a notebook is saving. The world can get damaged. The `stop` command is a polite \"goodbye.\"",
    },
    {
      type: "image",
      src: "nf20-d",
      alt: "Server is alive",
      caption: "Ready. Time to celebrate.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Group of kids with laptops celebrating, Pi with green LED, party mood, bright colorful room",
    },
    {
      type: "try",
      title: "🔍 Explore startup",
      body: "**With an adult:**",
      checklist: [
        "Start the server using your guide",
        "Watch the logs for 30–60 seconds",
        "Find either a ready message or an error line",
        "If there is an error — do not panic: copy the line into your journal",
        "Write down the Pi IP (`ip a`) and try Direct Connection: `IP:25565`",
        "If ready — join yourself and check the world",
        "Only then invite 1–2 friends on the same Wi‑Fi",
        "At the end, type `stop` in the server console",
      ],
      footer: "You checked. You did not guess.",
    },
    {
      type: "draw",
      text: "Draw a traffic light: red = error in logs, yellow = still loading, green = Done / ready to play. Next to it — a door labeled 25565.",
    },
    {
      type: "diary",
      lines: [
        "Which log line mattered most?",
        "What address and port did you give your friend for Direct Connection?",
        "Why do we stop the server with the stop command instead of yanking the cable?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "If letters are scrolling, the server is already ready.",
          truth: "Wait for a ready sign or understand the error.",
        },
        {
          title: "Mistake #2",
          myth: "You can ignore logs.",
          truth: "Logs are the main detective at startup.",
        },
        {
          title: "Mistake #3",
          myth: "Call ten friends right away.",
          truth: "Test yourself first. On a Pi, 2–4 players on one Wi‑Fi is comfortable.",
        },
        {
          title: "Mistake #4",
          myth: "To shut down, just pull the plug.",
          truth: "Type `stop` in the console first, then power off.",
        },
      ],
    },
    {
      type: "text",
      text: "The server is alive. You are an admin who checks facts.",
    },
    {
      type: "text",
      text: "What else can this little computer do?",
    },
  ],
  remember: [
    "Startup ≠ \"call everyone\" right away",
    "Logs tell the truth",
    "Look for ready or for an error",
    "Friends: same Wi‑Fi → IP:25565 → Direct Connection",
    "Client and server.jar versions must match",
    "Test alone first; on a Pi, ~2–4 players is comfortable",
    "Shutdown: type stop in the console",
  ],
  commands: [
    { cmd: "java -jar server.jar nogui", does: "Typical server start (adjust for your build)" },
    { cmd: "ip a", does: "Show the Pi's address on the home network" },
    { cmd: "stop", does: "Safely stop the server from its console" },
  ],
  glossary: [
    { term: "Log", def: "A text journal of what a program or server is doing." },
    { term: "Startup", def: "Starting the server and checking that it is really ready." },
    { term: "Port 25565", def: "The standard \"door\" a Minecraft client uses to find the server." },
    { term: "Direct Connection", def: "Joining by IP address in the Multiplayer menu." },
    { term: "stop", def: "Console command that saves the world and shuts down cleanly." },
  ],
  check: [
    {
      type: "mc",
      prompt: "Logs help you…",
      options: [
        "see errors and readiness",
        "make toast",
        "change case color",
      ],
      answer: 0,
      hint: "Ship's log.",
      explanation: "Logs are the truth about startup.",
    },
    {
      type: "tf",
      text: "Scrolling lines always mean the server is ready.",
      answer: false,
      hint: "Noise ≠ finish.",
      explanation: "You need a ready sign or error analysis.",
    },
    {
      type: "whatif",
      prompt: "Logs show an EULA error. What does that hint?",
      hint: "Prep chapter.",
      explanation: "The log points to a skipped step.",
      sample: "Accept the EULA in the agreement file.",
    },
    {
      type: "error",
      prompt: "\"You do not need to read logs\"",
      hint: "Detective.",
      explanation: "Reading logs is a basic habit.",
      sample: "Without logs, an admin is guessing.",
      optional: true,
    },
    {
      type: "explain",
      prompt: "Why does the admin join first, then friends?",
      hint: "Test.",
      explanation: "Check first — guests later.",
      sample: "To verify the world before inviting everyone to a broken server.",
      optional: true,
    },
  ],
  next: 21,
};
