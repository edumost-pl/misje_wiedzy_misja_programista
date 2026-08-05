window.CHAPTER_16 = {
  id: 16,
  bookId: "sysadmin_en",
  part: 4,
  partTitle: "Networks",
  title: "SSH",
  icon: "server",
  learn: [
    "How to talk to the Pi without a monitor",
    "What the ssh user@host command looks like",
    "Basic security for remote access",
  ],
  content: [
    {
      type: "text",
      text: "Your Pi sits in **another room**.",
    },
    {
      type: "text",
      text: "No monitor. No keyboard. Just a small green board on a shelf.",
    },
    {
      type: "text",
      text: "But you need to tell it: \"Check if the server is running.\"",
    },
    {
      type: "text",
      text: "Wait. How do you **talk** to a computer you cannot reach with your hands?",
    },
    {
      type: "text",
      text: "Are you supposed to drag an HDMI cable across the whole apartment?",
    },
    {
      type: "image",
      src: "nf16-a",
      alt: "Pi in another room",
      caption: "The board is far away — but you want to \"message\" it.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi on shelf across room, child at laptop on desk, distance between devices, bright home",
    },
    {
      type: "h2",
      text: "A tunnel through the wall",
    },
    {
      type: "text",
      text: "Picture a **tube** that goes through a wall.",
    },
    {
      type: "text",
      text: "You speak into your end — the Pi hears at its end. And the other way around.",
    },
    {
      type: "text",
      text: "Only it is not an ordinary tube. It is a **protected channel** through the home network.",
    },
    {
      type: "text",
      text: "You type commands on your laptop — they run **on the Pi**. As if you were sitting right in front of its screen.",
    },
    {
      type: "text",
      text: "This method is called **SSH** — Secure Shell, a \"protected shell.\"",
    },
    {
      type: "fact",
      title: "Wow!",
      text: "SSH is the standard for managing servers without a monitor. That is how admins work with machines in other rooms, other cities, and data centers.",
    },
    {
      type: "think",
      id: "q1",
      question: "You use SSH to…",
      options: [
        { id: "a", text: "safely control a computer from far away" },
        { id: "b", text: "make tea" },
        { id: "c", text: "draw on HDMI" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Yes: a protected remote terminal — a tube through the network.",
    },
    {
      type: "image",
      src: "nf16-b",
      alt: "SSH tunnel",
      caption: "A protected channel for commands over the network.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two tin cans connected by glowing string tunnel between laptop and Pi, realistic props bright studio, SSH metaphor",
    },
    {
      type: "h2",
      text: "Idea first — command second",
    },
    {
      type: "text",
      text: "Picture **two cans connected by a string** through a wall.",
    },
    {
      type: "text",
      text: "You whisper into one — your friend hears in the other. **Without** running to the next room.",
    },
    {
      type: "text",
      text: "That is how **SSH** works: your laptop is one can, the Pi in the other room is the other. The formula is simple:",
    },
    {
      type: "text",
      text: "**user** @ **Pi's address**",
    },
    {
      type: "code",
      text: "# Connect to the Pi over the network\npi@raspberrypi:~$ ssh pi@192.168.1.42\n\n# 192.168.1.42 is an example! Use your address from ip a\n# After login you are \"on the Pi,\" even from your laptop",
    },
    {
      type: "text",
      text: "First the username, then **`@`**, then the host address.",
    },
    {
      type: "text",
      text: "The numbers are an **example**. Use the address you saw earlier in `ip a`.",
    },
    {
      type: "text",
      text: "You need: **a network between the devices** and **SSH turned on on the Pi** (with a grown-up).",
    },
    {
      type: "image",
      src: "nf16-c",
      alt: "Headless Pi",
      caption: "A server without a monitor is managed through SSH.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Raspberry Pi without monitor, only power and Ethernet LEDs, laptop on desk showing SSH session blurred, bright",
    },
    {
      type: "h2",
      text: "If you see \"connection refused\"",
    },
    {
      type: "text",
      text: "Sometimes instead of logging in you see **Connection refused**.",
    },
    {
      type: "text",
      text: "Do not panic. That does not mean \"throw the board away.\"",
    },
    {
      type: "text",
      text: "It often means one of three things:",
    },
    {
      type: "ul",
      items: [
        "The **SSH service is not turned on** on the Pi",
        "**Wrong address** — check ip a",
        "The devices are **not on the same network** — check Wi‑Fi",
      ],
    },
    {
      type: "think",
      id: "q2",
      question: "SSH needs…",
      options: [
        { id: "a", text: "a network between the devices" },
        { id: "b", text: "only a sticker on the case" },
        { id: "c", text: "a toaster, required" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Without a network the \"tube\" cannot connect. Check the address and path first.",
    },
    {
      type: "h2",
      text: "An important rule for a good admin",
    },
    {
      type: "text",
      text: "SSH is a powerful tool. Like a key to every door.",
    },
    {
      type: "text",
      text: "A weak password and open access to the whole internet is an invitation for attackers.",
    },
    {
      type: "text",
      text: "For learning: **home network**, **strong password**, **with a grown-up**.",
    },
    {
      type: "fact",
      title: "Security",
      text: "Headless Pi — a Pi without a monitor. That is how servers work: small, quiet, managed from afar.",
    },
    {
      type: "image",
      src: "nf16-d",
      alt: "Safe access",
      caption: "Strong authentication is part of an admin's job.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Strong padlock on network cable metaphor, SSH key USB dongle on bright desk, security without fear mood",
    },
    {
      type: "try",
      title: "🔍 Investigation: a tube through the wall",
      body: "This is a hunt for your first remote login.",
      checklist: [
        "Find the Pi's address (`ip a`) — write it down",
        "With a grown-up, turn on SSH in Raspberry Pi OS settings",
        "From another computer on the same network try `ssh user@IP`",
        "If refused — check: service, address, network",
        "If it worked — type `pwd` on the Pi and confirm you are \"there\"",
        "Write in your journal: what helped or what got in the way",
      ],
      footer: "Even a failed try teaches you diagnosis.",
    },
    {
      type: "draw",
      text: "Draw a laptop and a Pi in different rooms. Between them — an SSH tunnel.",
    },
    {
      type: "diary",
      lines: [
        "Why do you personally need SSH?",
        "What address does your Pi have?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "Password 1234 and open internet access is fine.",
          truth: "You need strong passwords/keys and careful access.",
        },
        {
          title: "Mistake #2",
          myth: "SSH works without a network.",
          truth: "You need a path between the devices.",
        },
        {
          title: "Mistake #3",
          myth: "Connection refused = throw away the board.",
          truth: "Check service, address, and network first.",
        },
      ],
    },
    {
      type: "text",
      text: "Now you know how to **log into the Pi from another room** — without HDMI across the apartment.",
    },
    {
      type: "text",
      text: "But why keep a computer running without a monitor at all?",
    },
    {
      type: "text",
      text: "Because it can **serve others**. Next — what a server is and why you need one.",
    },
  ],
  remember: [
    "SSH — a protected \"tube\" through the network",
    "Form: ssh user@host",
    "You need a network and the service turned on",
    "Password security matters",
    "Headless — Pi without a monitor, managed remotely",
  ],
  commands: [
    { cmd: "ssh user@host", does: "Opens an SSH session" },
  ],
  glossary: [
    {
      term: "SSH",
      def: "A protocol for secure remote access to the terminal.",
    },
    {
      term: "Host",
      def: "The computer you connect to.",
    },
    {
      term: "Headless",
      def: "A computer without a monitor, managed remotely.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "You use SSH to…",
      options: [
        "control from far away",
        "make tea",
        "draw on HDMI",
      ],
      answer: 0,
      hint: "Secure Shell",
      explanation: "A protected remote terminal.",
    },
    {
      type: "tf",
      text: "SSH needs a network.",
      answer: true,
      hint: "Path between devices",
      explanation: "Yes.",
    },
    {
      type: "fill",
      prompt: "Command to start an SSH session:",
      answer: "ssh",
      hint: "3 letters",
      explanation: "ssh user@host.",
    },
    {
      type: "whatif",
      prompt: "Connection refused — what do you check?",
      hint: "Nobody listening?",
      explanation: "Service/address/network.",
      sample: "SSH service, IP, network",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"Password 1234 and open internet is OK\"",
      hint: "Security",
      explanation: "Strong authentication is needed.",
      sample: "Not safe.",
      optional: true,
    },
  ],
  next: 17,
};
