window.CHAPTER_11 = {
  id: 11,
  bookId: "sysadmin_en",
  part: 3,
  partTitle: "System Administrator",
  title: "Users",
  icon: "search",
  learn: [
    "Why the system has different \"people\"",
    "Who you are right now — the whoami command",
    "Why accounts stay separate",
  ],
  content: [
    {
      type: "text",
      text: "The \"My World\" project is ready — but the Pi still asks: **who are you?** Not \"the kid from the bedroom,\" but your **name in the system**.",
    },
    {
      type: "text",
      text: "You come home.",
    },
    {
      type: "text",
      text: "You have **your own key** to your room.",
    },
    {
      type: "text",
      text: "Mom has hers. Your brother has his. Grandma has hers.",
    },
    {
      type: "text",
      text: "Everyone goes into **their own** room. Nobody mixes up someone else's stuff with their own.",
    },
    {
      type: "text",
      text: "Stop. **Who am I in the system?** And why does the computer also \"know people by name\"?",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"It is just a machine. Why does it need names?\"*",
    },
    {
      type: "text",
      text: "Because **different people** can use one Pi — or one person at different times. The system remembers **who is sitting at the keyboard right now**.",
    },
    {
      type: "image",
      src: "nf11-a",
      alt: "Different keys for different rooms",
      caption: "Each person gets their own key and their own room.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Apartment building cutaway each flat has different colored door and key, bright friendly architecture model",
    },
    {
      type: "h2",
      text: "A House With Name Tags",
    },
    {
      type: "text",
      text: "Picture a big house.",
    },
    {
      type: "text",
      text: "On the doors — **name tags**: \"Olivia,\" \"Max,\" \"Guest.\"",
    },
    {
      type: "text",
      text: "Linux works the same way: everyone who uses the system has an **account** — a **user**.",
    },
    {
      type: "text",
      text: "On your Pi, the default user is often **pi**. That is the \"name on the door\" of your home folder.",
    },
    {
      type: "fact",
      title: "Whoa!",
      text: "Even when you are the only one at the Pi, the system still knows which name you logged in with. That is not just for show — your name affects what you are allowed to do.",
    },
    {
      type: "h2",
      text: "Idea First — Command Second",
    },
    {
      type: "text",
      text: "Picture this: you are at a party in costume. Someone walks up: \"**Who are you?**\"",
    },
    {
      type: "text",
      text: "The system does the same thing. Before it gives you keys to \"rooms,\" it wants to know your **name**.",
    },
    {
      type: "text",
      text: "There is a mirror command: **whoami** — \"who am I right now?\"",
    },
    {
      type: "text",
      text: "It prints the name on your \"key\" — the part **before `@`** in `pi@raspberrypi`.",
    },
    {
      type: "code",
      text: "# Find out who you are in the system\npi@raspberrypi:~$ whoami\n\n# Example response\npi",
    },
    {
      type: "text",
      text: "Look at the terminal prompt: **`pi@raspberrypi`**. The letters **before `@`** are your name in the system.",
    },
    {
      type: "think",
      id: "q1",
      question: "The whoami command shows…",
      options: [
        { id: "a", text: "the current user's name" },
        { id: "b", text: "the CPU temperature" },
        { id: "c", text: "internet speed" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Yes: **whoami** prints your login — \"who am I right now.\"",
    },
    {
      type: "image",
      src: "nf11-b",
      alt: "whoami in the terminal",
      caption: "whoami is a mirror: \"who am I?\"",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal with whoami command output showing username blurred, mirror reflection of child in monitor glass optional, bright",
    },
    {
      type: "h2",
      text: "Why Separate Accounts?",
    },
    {
      type: "text",
      text: "Picture everyone in the family sharing **one key** and **one room**.",
    },
    {
      type: "text",
      text: "Someone moved your stuff. Someone deleted someone else's file. Someone changed settings — and nobody knows who.",
    },
    {
      type: "text",
      text: "Separate accounts help you:",
    },
    {
      type: "ul",
      items: [
        "**Keep files separate** — everyone gets their own home folder",
        "**Split responsibility** — you can see who did what",
        "**Split permissions** — not everyone can do everything",
      ],
    },
    {
      type: "image",
      src: "nf11-c",
      alt: "Separate accounts — separate rooms",
      caption: "Separate names — less confusion.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Two user profile icons on login screen blurred, shared family desk with two chairs, bright home",
    },
    {
      type: "h2",
      text: "Regular User and Administrator",
    },
    {
      type: "text",
      text: "In a house there are **regular residents** and there is the **owner**, who has a key to every door.",
    },
    {
      type: "text",
      text: "A regular user works with their own files. An **administrator** can change the system for everyone — install programs, edit protected files.",
    },
    {
      type: "text",
      text: "On Raspberry Pi, the `pi` user can often become the \"owner\" for a minute — but that is in the next section.",
    },
    {
      type: "text",
      text: "For now, the main thing: **know who you are**. An admin does not guess — they check.",
    },
    {
      type: "image",
      src: "nf11-d",
      alt: "Regular user and administrator",
      caption: "Different roles — different powers.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Costume party rack with admin badge, guest badge, realistic props on bright hook wall, metaphor for permissions",
    },
    {
      type: "fact",
      title: "Passwords Stay Secret",
      text: "Every account is protected by a password. Do not tape passwords to the monitor or share them \"because it is easier.\"",
    },
    {
      type: "try",
      title: "🔍 Explore: Who Am I?",
      body: "Check how the system \"sees\" you right now.",
      checklist: [
        "Open the terminal",
        "Type `whoami` and press Enter",
        "What did the system answer?",
        "Look at the prompt: what is written before `@`?",
        "Write the name in your journal",
        "Explain to a friend, in your own words, why different users matter",
      ],
      footer: "If you know your name in the system — you are not anonymous anymore.",
    },
    {
      type: "draw",
      text: "Draw a house: three rooms with labels (pi, mom, guest). Under each — \"own key.\"",
    },
    {
      type: "diary",
      lines: [
        "What name did whoami show?",
        "Why do you think not everyone should share one password?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "In Linux, one anonymous person does everything.",
          truth: "Every session belongs to a specific user.",
        },
        {
          title: "Mistake #2",
          myth: "You can tape your password to the monitor.",
          truth: "Passwords stay secret.",
        },
        {
          title: "Mistake #3",
          myth: "Everyone should share one admin password because it is easier.",
          truth: "Separate accounts are safer and more responsible.",
        },
      ],
    },
    {
      type: "text",
      text: "You know **who you are** in the system. Next — **access permissions**: who can read, change, and run what.",
    },
  ],
  remember: [
    "Every session belongs to a user",
    "whoami shows your name in the system",
    "Separate accounts = separate files and responsibility",
    "An administrator has more power — and more caution",
  ],
  commands: [
    { cmd: "whoami", does: "Shows the current user" },
  ],
  glossary: [
    {
      term: "whoami",
      def: "The \"who am I in the system\" command.",
    },
    {
      term: "User",
      def: "An account for a person or service in Linux.",
    },
    {
      term: "Login",
      def: "Your username when you sign in (for example, pi).",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "The whoami command shows…",
      options: [
        "the current user's name",
        "the temperature",
        "internet speed",
      ],
      answer: 0,
      hint: "Who am I?",
      explanation: "whoami prints your login.",
    },
    {
      type: "tf",
      text: "In Linux, every session belongs to a specific user.",
      answer: true,
      hint: "Not anonymous.",
      explanation: "The system always knows who is working.",
    },
    {
      type: "fill",
      prompt: "The \"who am I in the system\" command:",
      answer: "whoami",
      hint: "who + am + i",
      explanation: "whoami is a mirror of the current user.",
    },
    {
      type: "whatif",
      prompt: "Everyone in the family uses one admin password. What could go wrong?",
      hint: "Who deleted the file?",
      explanation: "Separate accounts create accountability.",
      sample: "Nobody knows who changed what. The password can leak easily.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Spot the mistake: \"Linux has no names — everyone is anonymous.\"",
      hint: "whoami",
      explanation: "The system always knows who is working.",
      sample: "Every session has a user.",
      optional: true,
    },
  ],
  next: 12,
};
