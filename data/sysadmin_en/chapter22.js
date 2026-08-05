window.CHAPTER_22 = {
  id: 22,
  bookId: "sysadmin_en",
  part: 6,
  partTitle: "What's Next?",
  title: "Your Admin Path",
  icon: "flag",
  learn: [
    "The admin ritual to take with you",
    "What matters more than a list of commands",
    "How to keep going without fear",
  ],
  content: [
    {
      type: "text",
      text: "You close the last page.",
    },
    {
      type: "text",
      text: "On the desk — a small Pi. In your head — a pile of new words.",
    },
    {
      type: "fact",
      title: "The main thing is not the Pi on the desk",
      text: "Even if you never started a server, you already know how to **think like an admin**: ask questions, check, stay calm. That matters more than any single command.",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"What if I forget everything?\"*",
    },
    {
      type: "text",
      text: "Do not worry. Admins take **habits** with them, not memorized lists.",
    },
    {
      type: "image",
      src: "nf22-a",
      alt: "End of the book — start of the path",
      caption: "The book ends. The path does not.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child closing book, Raspberry Pi ready on desk, path ahead through bright doorway, hopeful",
    },
    {
      type: "h2",
      text: "A ritual stronger than any command",
    },
    {
      type: "text",
      text: "Imagine a detective.",
    },
    {
      type: "text",
      text: "Something went wrong. A bad detective slams the desk. A good one **stops** and asks five questions:",
    },
    {
      type: "text",
      text: "What happened? Why might it have happened? What can I try carefully? Did it work? What should I write down so I do not forget?",
    },
    {
      type: "ul",
      items: [
        "1. Understand the problem",
        "2. Guess a cause",
        "3. Try carefully",
        "4. Check the result",
        "5. Write down what you learned",
      ],
    },
    {
      type: "text",
      text: "This ritual works with folders, networks, and servers alike.",
    },
    {
      type: "think",
      id: "q1",
      question: "What matters most for a beginner admin?",
      options: [
        { id: "a", text: "the habit of understanding and checking" },
        { id: "b", text: "memorizing 500 commands overnight" },
        { id: "c", text: "never reading error messages" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "Right: the thinking habit. Commands you can look up. Thinking — you cannot.",
    },
    {
      type: "h2",
      text: "Your kit from the road",
    },
    {
      type: "ul",
      items: [
        "Pi — a real computer",
        "Terminal — talking in text",
        "Order in folders and files",
        "Permissions and careful sudo",
        "Processes, search, network, SSH",
        "Server — a service for others",
      ],
    },
    {
      type: "fact",
      title: "Credo",
      text: "An admin is not someone who never makes mistakes. An admin is someone who can stop, read the message, and try again more wisely.",
    },
    {
      type: "image",
      src: "nf22-b",
      alt: "Admin ritual",
      caption: "Understand → try → check → write down.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Young detective with magnifying glass and five step checklist cards on bright cork board, admin ritual metaphor",
    },
    {
      type: "image",
      src: "nf22-c",
      alt: "Confidence",
      caption: "You are not \"just a button-clicker\" anymore.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Confident child typing in terminal while parents watch proudly in background, bright home, growth",
    },
    {
      type: "image",
      src: "nf22-d",
      alt: "Path ahead",
      caption: "The next experiment is waiting.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child carrying Pi to new project table with tools and wires, adventure ahead, sunny room",
    },
    {
      type: "try",
      title: "🔍 Your summary",
      body: "No new commands — an honest talk with yourself.",
      checklist: [
        "Write 5 things you can do now",
        "Write 1 thing that scares you — and one small safe step to try",
        "Pick a date for your next Pi experiment",
        "Say out loud: \"I am an admin who checks\"",
      ],
      footer: "That is the finish line of the book. And the start of your practice.",
    },
    {
      type: "draw",
      text: "Draw two columns: \"I can already\" and \"I want to learn.\" Fill them in.",
    },
    {
      type: "diary",
      lines: [
        "Which admin habit matters most to you?",
        "What will your next small experiment be?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "A real admin knows everything by heart.",
          truth: "A real admin knows how to search, read, and check.",
        },
        {
          title: "Mistake #2",
          myth: "Learning ends when the book ends.",
          truth: "The book gives you a start. Practice comes next.",
        },
        {
          title: "Mistake #3",
          myth: "A mistake means game over.",
          truth: "A mistake is a message you can learn from.",
        },
      ],
    },
    {
      type: "text",
      text: "You walked the path.",
    },
    {
      type: "text",
      text: "Now go experiment — calmly, curiously, with checking.",
    },
  ],
  remember: [
    "Ritual: understand → try → check → write down",
    "Habits beat memorization",
    "A mistake is a clue, not a verdict",
    "The admin path continues after the book",
  ],
  commands: [],
  glossary: [
    {
      term: "Admin ritual",
      def: "A repeatable way to solve problems calmly and with checking.",
    },
    {
      term: "Practice",
      def: "Real tries on your own Pi — not just reading.",
    },
  ],
  check: [
    {
      type: "mc",
      prompt: "What do you take from this book first?",
      options: [
        "the ritual of understanding and checking",
        "fear of the terminal",
        "the habit of ignoring errors",
      ],
      answer: 0,
      hint: "Habit.",
      explanation: "Admin thinking is the main prize.",
    },
    {
      type: "tf",
      text: "Admins never use hints or documentation.",
      answer: false,
      hint: "Searching is normal.",
      explanation: "Actually: knowing how to search is a strength.",
    },
    {
      type: "whatif",
      prompt: "You forgot a command. What now?",
      hint: "No panic.",
      explanation: "The problem and the check matter more than memorization.",
      sample: "Remember the problem, peek at a cheat sheet, check the result.",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"The book ended = I know everything forever\"",
      hint: "The path continues.",
      explanation: "Learning continues through experiments.",
      sample: "The book is a start. Practice comes next.",
      optional: true,
    },
  ],
  next: null,
};
