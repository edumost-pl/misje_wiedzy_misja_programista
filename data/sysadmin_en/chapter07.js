window.CHAPTER_07 = {
  id: 7,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "Navigating Folders",
  icon: "folder",
  learn: [
    "What the current folder is",
    "How to move with the cd command",
    "What to do if you get lost in the system",
  ],
  content: [
    {
      type: "text",
      text: "Your friend is waiting for an invite. And you do not even know **where** on the Pi your future project lives.",
    },
    {
      type: "text",
      text: "You are in a huge shopping mall.",
    },
    {
      type: "text",
      text: "Right now you are standing by the fountain.",
    },
    {
      type: "text",
      text: "You want to reach the toy store — but you are standing still.",
    },
    {
      type: "text",
      text: "You need to **walk** down a different hallway.",
    },
    {
      type: "text",
      text: "A computer works the same way. You are always \"standing\" in some **folder** — your current room. To get to another one, you have to **move**.",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"Why walk around if I can just look at a list?\"*",
    },
    {
      type: "text",
      text: "Because a lot of admin work happens **in a specific folder**: create a file here, check something there. No movement — no action.",
    },
    {
      type: "image",
      src: "nf07-a",
      alt: "A folder tree like a house with rooms.",
      caption: "Folders nest inside one another, like rooms and closets.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic dollhouse cutaway with nested rooms labeled by folder icons instead of words, bright interior lighting, doors between rooms",
    },
    {
      type: "h2",
      text: "Step Into the Next Room",
    },
    {
      type: "text",
      text: "Picture a hallway with signs on the doors: \"Documents,\" \"Music,\" \"Project.\"",
    },
    {
      type: "text",
      text: "You are standing at one door — and you want the next one. You need to **step over the threshold**.",
    },
    {
      type: "text",
      text: "In the terminal, that is one short word: **cd** (change directory — \"change rooms\").",
    },
    {
      type: "text",
      text: "After you move, run `pwd` and `ls` again: your location changed — and so did the list on the wall.",
    },
    {
      type: "text",
      text: "Now — try it yourself.",
    },
    {
      type: "code",
      text: "# Go into the Documents folder\npi@raspberrypi:~$ cd Documents\n\n# Check where you are now\npi@raspberrypi:~/Documents$ pwd\n\n# Example response\n/home/pi/Documents",
    },
    {
      type: "text",
      text: "Notice: in the prompt, **~** changed to **~/Documents**. The system is telling you where you are standing.",
    },
    {
      type: "think",
      id: "q1",
      question: "You use the cd command to…",
      options: [
        { id: "a", text: "change the current folder" },
        { id: "b", text: "draw a picture" },
        { id: "c", text: "turn off the internet" },
      ],
      answer: "a",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "**cd** changes the folder where you are \"standing.\" That is the foundation of navigation.",
    },
    {
      type: "h2",
      text: "Stairs to the Floor Above",
    },
    {
      type: "text",
      text: "Imagine you walked into a closet inside a closet.",
    },
    {
      type: "text",
      text: "You need to go back — one level up.",
    },
    {
      type: "text",
      text: "Two dots **`..`** mean \"parent folder\" — the room one floor above. This is your rescue command when you went too deep.",
    },
    {
      type: "code",
      text: "# Go up one level\npi@raspberrypi:~/Documents$ cd ..\n\n# Where are you now?\npi@raspberrypi:~$ pwd\n\n# Example response\n/home/pi",
    },
    {
      type: "image",
      src: "nf07-b",
      alt: "An arrow pointing up to the parent folder.",
      caption: "cd .. goes up one level.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal with cd .. command typed, folder path changing visualized in blurred text, bright screen",
    },
    {
      type: "h2",
      text: "Fast Way Home",
    },
    {
      type: "text",
      text: "Imagine you got lost in an unfamiliar neighborhood.",
    },
    {
      type: "text",
      text: "The easiest fix — go **home**.",
    },
    {
      type: "text",
      text: "Your home folder is your \"apartment\" in the system (`/home/pi`). A quick way back:",
    },
    {
      type: "code",
      text: "# Go home (two easy ways)\npi@raspberrypi:~/Documents$ cd ~\n\n# Or simply:\npi@raspberrypi:~/Documents$ cd\n\npi@raspberrypi:~$ pwd\n/home/pi",
    },
    {
      type: "text",
      text: "Both options usually take you home. Handy after a long wander.",
    },
    {
      type: "h2",
      text: "Lost? The Admin Ritual",
    },
    {
      type: "text",
      text: "Imagine you lost your bearings in a dark maze.",
    },
    {
      type: "text",
      text: "Do not run blindly. First — **stop and look**.",
    },
    {
      type: "ul",
      items: [
        "1. `pwd` — where am I?",
        "2. `ls` — what is around me?",
        "3. `cd ..` or `cd ~` — get back to a place you understand",
      ],
    },
    {
      type: "code",
      text: "# Orientation ritual\npi@raspberrypi:~/Downloads/tmp$ pwd\n/home/pi/Downloads/tmp\npi@raspberrypi:~/Downloads/tmp$ ls\npi@raspberrypi:~/Downloads/tmp$ cd ~\npi@raspberrypi:~$",
    },
    {
      type: "image",
      src: "nf07-c",
      alt: "A compass in the file system.",
      caption: "Do not panic — navigate with commands.",
      prompt:
        "Photorealistic editorial photograph for children's educational nonfiction, ages 10-12. Bright natural daylight from a window, high sharpness, clean light wood desk, soft white walls, airy atmosphere. No dark shadows, no moody lighting. No readable text, no logos, no watermark. Vertical 16:10 aspect ratio. Child looking at monitor with terminal, relaxed posture, sticky note with drawn folder tree beside keyboard, encouraging bright study nook",
    },
    {
      type: "think",
      id: "q2",
      question: "Are cd and ls the same thing?",
      options: [
        { id: "a", text: "Yes, completely" },
        { id: "b", text: "No: cd moves, ls looks" },
        { id: "c", text: "Yes, if you press twice" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "Different jobs: **cd** changes your place, **ls** shows what is inside. They often work as a pair.",
    },
    {
      type: "image",
      src: "nf07-d",
      alt: "A path through a folder tree.",
      caption: "The directory tree is a map of your moves.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic 3D tree diagram of nested folders as branches, root at top, bright white background, clean shadows",
    },
    {
      type: "h2",
      text: "A Live Walk in the Terminal",
    },
    {
      type: "text",
      text: "Here is what a real conversation with the system looks like: look (`ls`), enter (`cd`), build a room (`mkdir`), climb back up (`cd ..`). This is **practice** before the `my-world` folder — we will build that in the next section. If the `test` folder does not exist yet, run the setup block below first.",
    },
    {
      type: "code",
      text: "# Setup (once): practice folder test with rooms 1 and 2\npi@raspberrypi:~$ mkdir test\npi@raspberrypi:~$ cd test\npi@raspberrypi:~/test$ mkdir 1\npi@raspberrypi:~/test$ mkdir 2\npi@raspberrypi:~/test$ cd ~\n\n# —— Live walk (repeat exactly) ——\npi@raspberrypi:~$ ls\nDesktop  Documents  Downloads  Music  Pictures  Public  test\npi@raspberrypi:~$ cd test\npi@raspberrypi:~/test$ ls\n1  2\npi@raspberrypi:~/test$ cd 1\npi@raspberrypi:~/test/1$ ls\npi@raspberrypi:~/test/1$ mkdir test1\npi@raspberrypi:~/test/1$ ls\ntest1\npi@raspberrypi:~/test/1$ cd ..\npi@raspberrypi:~/test$ ls\n1  2",
    },
    {
      type: "text",
      text: "Read the prompt from left to right: after `cd test` the path became `~/test`, after `cd 1` it became `~/test/1`, and after `cd ..` it went back to `~/test`. The `mkdir` command here is just quick practice; the next section goes deeper.",
    },
    {
      type: "try",
      title: "🔍 Explore: Folder Walk",
      body: "Open the terminal and follow the same route. After each step, ask yourself: where am I right now?",
      checklist: [
        "Setup: `mkdir test`, go inside, `mkdir 1`, `mkdir 2`, then `cd ~`",
        "`ls` — can you see `test`?",
        "`cd test` → `ls` (you should see `1` and `2`)",
        "`cd 1` → `ls` (empty for now?)",
        "`mkdir test1` → `ls` (did `test1` appear?)",
        "`cd ..` → `ls` (back to `1` and `2`?)",
        "Write in your journal: what changed in the prompt after `cd`?",
      ],
      footer: "You control the movement. The system just follows.",
    },
    {
      type: "draw",
      text: "Draw a tree: /home/pi → test → 1 → test1 (with cd / cd .. arrows).",
    },
    {
      type: "diary",
      lines: [
        "Which folder do you \"live in\" most often right now?",
        "What will you do first if you get lost again?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "cd and ls are the same thing.",
          truth: "cd changes your place. ls shows what is inside.",
        },
        {
          title: "Mistake #2",
          myth: "If the path is long, something must be broken.",
          truth: "A long path is normal. Read it left to right, like an address.",
        },
        {
          title: "Mistake #3",
          myth: "If you get lost, shut down the Pi.",
          truth: "Try pwd, ls, cd .. or cd ~ first. Powering off is overkill.",
        },
      ],
    },
    {
      type: "text",
      text: "You know how to walk between rooms.",
    },
    {
      type: "text",
      text: "Project \"My World,\" **Part 3**. Time to build the **real** folder for your future server — not the practice `test` folder, but `my-world`.",
    },
    {
      type: "text",
      text: "But what if you need a **new** room — one that does not exist yet?",
    },
    {
      type: "text",
      text: "Next up — building folders.",
    },
  ],
  remember: [
    "Current folder = where you are standing",
    "cd = go there",
    "cd .. = go up",
    "cd ~ = go home (/home/pi)",
    "Lost: pwd → ls → cd .. / cd ~",
  ],
  commands: [
    { cmd: "cd name", does: "Go into a folder" },
    { cmd: "cd ..", does: "Go up one level" },
    { cmd: "cd ~", does: "Go home" },
    { cmd: "pwd", does: "Show where you are" },
  ],
  glossary: [
    {
      term: "Current folder",
      def: "The directory where you are right now in the terminal.",
    },
    { term: "cd", def: "The command that changes your current folder." },
    { term: "Parent folder", def: "The directory one level up (cd ..)." },
  ],
  check: [
    {
      type: "mc",
      prompt: "You use the cd command to…",
      options: [
        "change the current folder",
        "draw a picture",
        "turn off the internet",
      ],
      answer: 0,
      hint: "change directory.",
      explanation: "cd moves you into a different folder.",
    },
    {
      type: "tf",
      text: "cd .. goes up one level.",
      answer: true,
      hint: "Two dots = parent folder.",
      explanation: "Yes. cd .. moves up the tree.",
    },
    {
      type: "fill",
      prompt: "Which command checks where you are right now?",
      answer: "pwd",
      hint: "From the terminal chapter.",
      explanation: "pwd shows the full path of your current folder.",
    },
    {
      type: "whatif",
      prompt: "After several cd commands you are lost. What do you do?",
      hint: "The orientation ritual.",
      explanation: "First find out where you are, then move to a level you understand.",
      sample: "pwd, then ls, then cd .. or cd ~.",
      optional: true,
    },
    {
      type: "error",
      prompt: "Spot the mistake: \"cd and ls are the same thing.\"",
      hint: "Moving vs. looking.",
      explanation: "Different commands, different jobs.",
      sample: "cd moves, ls looks.",
      optional: true,
    },
  ],
  next: 8,
};
