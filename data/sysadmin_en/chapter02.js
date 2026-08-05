window.CHAPTER_02 = {
  id: 2,
  bookId: "sysadmin_en",
  part: 1,
  partTitle: "Meet the Raspberry Pi",
  title: "A Tour of the Board",
  icon: "electronics",
  learn: [
    "What ports are on the Raspberry Pi 5",
    "How power is different from USB for a mouse",
    "Where video, network, electronics, and the card slot are",
  ],
  content: [
    {
      type: "text",
      text: "You walk into a new house.",
    },
    {
      type: "text",
      text: "In front of you — lots of doors.",
    },
    {
      type: "text",
      text: "One leads to the kitchen. Another to the bathroom. Another to the balcony.",
    },
    {
      type: "text",
      text: "If you don't know which door goes where, it's easy to end up in the wrong place.",
    },
    {
      type: "text",
      text: "The Raspberry Pi has \"doors\" too. They're called **ports** — little connectors around the edges of the green board.",
    },
    {
      type: "text",
      text: "At first the board might look chaotic: holes, pins, ports. Like a city with no street signs.",
    },
    {
      type: "text",
      text: "Maybe you're thinking: *\"Why do I need to remember all this?\"*",
    },
    {
      type: "text",
      text: "Because an administrator doesn't plug cables in at random. They know **where** and **why**.",
    },
    {
      type: "image",
      src: "nf02-ports",
      alt: "Raspberry Pi 5 ports.",
      caption: "Your tour map: ports around the edges of the board.",
      prompt:
        "Photorealistic macro product photography, bright diffused studio light, extreme sharpness on hardware details, clean white background. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Close-up of Raspberry Pi 5 edge showing USB-C, USB-A, Ethernet, micro-HDMI ports, each port clearly visible, annotated feel without text, top-down angle",
    },
    {
      type: "h2",
      text: "Doors for power",
    },
    {
      type: "text",
      text: "Picture a flashlight.",
    },
    {
      type: "text",
      text: "Without a battery, it looks nice — but stays dark.",
    },
    {
      type: "text",
      text: "A computer without power works the same way.",
    },
    {
      type: "text",
      text: "On the Raspberry Pi 5, power comes through **USB‑C**. It looks like the charger for many modern phones.",
    },
    {
      type: "text",
      text: "This is the **power door** — electricity flows here to make the board work.",
    },
    {
      type: "image",
      src: "nf02-power",
      alt: "USB‑C power cable.",
      caption: "USB‑C — the door that powers the board.",
      prompt:
        "Photorealistic macro product photography, bright diffused studio light, extreme sharpness on hardware details, clean white background. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. USB-C power cable plugging into Raspberry Pi 5 power port, bright studio light, sharp connector detail, safe correct orientation",
    },
    {
      type: "think",
      id: "q1",
      question: "Which port gives the Raspberry Pi power?",
      options: [
        { id: "a", text: "Ethernet" },
        { id: "b", text: "USB‑C" },
        { id: "c", text: "GPIO" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Power comes through **USB‑C**. Ethernet is for the network. GPIO is for electronics.",
    },
    {
      type: "text",
      text: "The board has other USB ports too. They **don't power the board itself**. You plug a mouse, keyboard, or flash drive into those.",
    },
    {
      type: "text",
      text: "Remember: **USB‑C powers the Pi**. Regular **USB** ports are \"hands\" for gadgets.",
    },
    {
      type: "h2",
      text: "Doors for the picture",
    },
    {
      type: "text",
      text: "Picture a TV with no antenna.",
    },
    {
      type: "text",
      text: "The screen is there — but there's no picture.",
    },
    {
      type: "text",
      text: "The Pi board has no built-in screen. Video goes out through **HDMI** (on the Pi 5, usually **micro‑HDMI**).",
    },
    {
      type: "text",
      text: "A cable runs from the board to a monitor or TV. These are the computer's **eyes**, brought outside.",
    },
    {
      type: "image",
      src: "nf02-hdmi",
      alt: "HDMI cable to a monitor.",
      caption: "HDMI — the computer's eyes, brought outside.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. micro-HDMI cable connecting Raspberry Pi 5 to a bright monitor on a desk, cable path clearly visible, daylight room",
    },
    {
      type: "think",
      id: "q2",
      question: "HDMI is for…",
      options: [
        { id: "a", text: "plugging in a mouse" },
        { id: "b", text: "sending video to a monitor" },
        { id: "c", text: "charging the board" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "HDMI is about the **picture**. A mouse goes through USB. Power goes through USB‑C.",
    },
    {
      type: "fact",
      title: "Did you know?",
      text: "The Raspberry Pi 5 often has **two** micro‑HDMI ports — you can even connect two screens.",
    },
    {
      type: "h2",
      text: "Doors for hands",
    },
    {
      type: "text",
      text: "Imagine you want to click something — but you have no hands.",
    },
    {
      type: "text",
      text: "Keyboard, mouse, flash drive — those usually go in **USB** ports:",
    },
    {
      type: "ul",
      items: [
        "⌨️ keyboard — for typing",
        "🖱️ mouse — for clicking and moving the cursor",
        "💾 flash drive — for moving files",
      ],
    },
    {
      type: "h2",
      text: "Doors to the Internet",
    },
    {
      type: "text",
      text: "Picture a letter with no post office.",
    },
    {
      type: "text",
      text: "It never gets delivered anywhere.",
    },
    {
      type: "text",
      text: "**Ethernet** is a square port for a network cable. It's a wired road to the network.",
    },
    {
      type: "text",
      text: "Don't mix it up with the charger! Ethernet carries data, not power.",
    },
    {
      type: "text",
      text: "Many Pis also have **Wi‑Fi** and **Bluetooth** — wireless doors. You don't always need a cable, but Ethernet is sometimes more stable.",
    },
    {
      type: "h2",
      text: "The mysterious slot",
    },
    {
      type: "text",
      text: "Find the small slot on the side.",
    },
    {
      type: "text",
      text: "Picture an **apartment key** you always carry with you.",
    },
    {
      type: "text",
      text: "Without it, the door is there — but you can't get in. The **microSD** card for the Pi is that key: the slot holds the \"book\" with the operating system.",
    },
    {
      type: "text",
      text: "For now, just remember the **location**. Like a house has a door where you put the key — but you don't yet know exactly what that key opens.",
    },
    {
      type: "text",
      text: "Soon you'll learn **why that little card matters** — and why the tour isn't over without it.",
    },
    {
      type: "h2",
      text: "Doors to electronics",
    },
    {
      type: "text",
      text: "Picture a building set with little wires.",
    },
    {
      type: "text",
      text: "A long row of pins on the board — that's **GPIO**. Through them the Pi can control LEDs, buttons, sensors, and parts of a robot.",
    },
    {
      type: "image",
      src: "nf02-gpio",
      alt: "GPIO pins.",
      caption: "GPIO — doors to electronics. Look, don't poke metal in at random.",
      prompt:
        "Photorealistic macro product photography, bright diffused studio light, extreme sharpness on hardware details, clean white background. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. GPIO pin header on Raspberry Pi 5 in sharp macro focus, clean pins, gentle warning mood but bright lighting, no hands touching pins",
    },
    {
      type: "text",
      text: "For now, just find the GPIO with your eyes. We'll learn circuits and safety later, when we get to DIY projects.",
    },
    {
      type: "think",
      id: "q3",
      question: "GPIO is for…",
      options: [
        { id: "a", text: "connecting a monitor" },
        { id: "b", text: "hooking up electronics and sensors" },
        { id: "c", text: "powering the board instead of USB‑C" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q3",
      text: "GPIO is for **electronics**. A monitor uses HDMI. Power uses USB‑C.",
    },
    {
      type: "h2",
      text: "A little map in your head",
    },
    {
      type: "ul",
      items: [
        "⚡ **USB‑C** — power for the board",
        "🖥️ **HDMI** — the picture",
        "🔌 **USB** — mouse, keyboard, flash drive",
        "🌐 **Ethernet / Wi‑Fi** — the network",
        "📶 **Bluetooth** — wireless gadgets nearby",
        "💾 **microSD slot** — where the memory card goes",
        "🤖 **GPIO** — electronics",
      ],
    },
    {
      type: "try",
      title: "🔍 Investigation: find the doors",
      body: "Take the tour with your eyes (or a finger on a photo):",
      checklist: [
        "Find USB‑C — where does the board get its \"food\"?",
        "Find HDMI — where are the \"eyes\"?",
        "Find at least one USB port — where are the \"hands\"?",
        "Find Ethernet — where's the \"road to the network\"?",
        "Find the card slot — where's the \"mysterious key\"?",
        "Find GPIO — where are the \"doors to electronics\"?",
        "How many stops did you find without a hint?",
      ],
      footer: "Each door leads to its own world. You can already see the map.",
    },
    {
      type: "draw",
      text: "Draw the board and label: USB‑C, HDMI, Ethernet, and the card slot.",
    },
    {
      type: "diary",
      lines: [
        "Which port stuck in your memory best — and why?",
        "What metaphor would you use to explain HDMI to a friend?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "Any USB port on the board can power it.",
          truth: "The board gets power through **USB‑C**. The other USB ports are for gadgets.",
        },
        {
          title: "Mistake #2",
          myth: "Ethernet is also a charger.",
          truth: "Ethernet is a road for data, not power.",
        },
        {
          title: "Mistake #3",
          myth: "You can poke GPIO with a paper clip right away.",
          truth: "That can cause a short circuit. Learn circuits first.",
        },
      ],
    },
    {
      type: "text",
      text: "The board isn't a green mystery anymore. You can see the **doors**.",
    },
    {
      type: "text",
      text: "Screen, network, memory — those are exactly the \"doors\" you'll need when you someday build **your own game world** on the Pi.",
    },
    {
      type: "text",
      text: "But why that little card in the slot — and how does the Pi \"wake up\" for the first time?",
    },
    {
      type: "text",
      text: "That's the next mystery.",
    },
  ],
  remember: [
    "USB‑C — power for the board",
    "HDMI — video",
    "USB — mouse and keyboard",
    "Ethernet / Wi‑Fi — network",
    "microSD slot — where the card goes",
    "GPIO — electronics",
  ],
  commands: [],
  glossary: [
    { term: "USB‑C", def: "The power port on the Raspberry Pi 5." },
    { term: "HDMI / micro‑HDMI", def: "The port for video on a monitor." },
    { term: "USB", def: "Ports for a mouse, keyboard, or flash drive." },
    { term: "Ethernet", def: "The port for a wired network." },
    { term: "GPIO", def: "Pins for electronics and sensors." },
    {
      term: "microSD slot",
      def: "The spot on the board where you insert the memory card.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "Pi 5 power usually comes through…",
      options: [
        "Ethernet",
        "USB‑C",
        "GPIO",
      ],
      answer: 1,
      hint: "It looks like a phone charger.",
      explanation: "The Pi 5 gets power through USB‑C.",
    },
    {
      type: "match",
      prompt: "Match each port to its job:",
      hint: "HDMI is always about video.",
      explanation: "Each door leads to its own world.",
      pairs: [
        ["USB‑C", "power for the board"],
        ["HDMI", "picture on the monitor"],
        ["USB", "mouse / keyboard"],
        ["Ethernet", "network over cable"],
        ["GPIO", "electronics"],
      ],
    },
    {
      type: "tf",
      text: "HDMI is for plugging in a mouse.",
      answer: false,
      hint: "The mouse is a \"hand.\"",
      explanation: "You plug a mouse into USB. HDMI is for the picture.",
      optional: true,
    },
    {
      type: "fill",
      prompt: "The row of pins for sensors is called…",
      answer: "GPIO",
      hint: "Four letters.",
      explanation: "GPIO — pins for electronics.",
      optional: true,
    },
  ],
  next: 3,
};
