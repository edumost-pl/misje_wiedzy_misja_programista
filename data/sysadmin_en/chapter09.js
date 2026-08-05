window.CHAPTER_09 = {
  id: 9,
  bookId: "sysadmin_en",
  part: 2,
  partTitle: "Linux",
  title: "Working With Files",
  icon: "code",
  learn: [
    "Create and read a file (touch, cat)",
    "Copy and rename (cp, mv)",
    "Delete carefully (rm)",
  ],
  content: [
    {
      type: "text",
      text: "Project \"My World,\" **Part 4**. Inside `my-world` it is empty — like a room with no furniture. You need your first **files**: world rules, notes, a friends list.",
    },
    {
      type: "text",
      text: "You have a school notebook.",
    },
    {
      type: "text",
      text: "You want to write a note. Copy a page for a friend. Rename a draft. Or — carefully — throw away an old rough draft.",
    },
    {
      type: "text",
      text: "On a desk, that is easy. But **how do you manage files in the terminal without fear?**",
    },
    {
      type: "text",
      text: "Maybe you thought: *\"There are so many commands. If I mess up, everything will disappear!\"*",
    },
    {
      type: "text",
      text: "That is exactly why we go **slow and careful**: create → read → copy → rename → delete (only when you are sure).",
    },
    {
      type: "image",
      src: "nf09-a",
      alt: "Files in a folder like notebooks on a shelf",
      caption: "A file is a named \"page\" of data.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Stack of realistic paper pages with tab labels as files, top page named like a document, bright desk",
    },
    {
      type: "h2",
      text: "A Blank Page",
    },
    {
      type: "text",
      text: "Picture a blank sheet with a name sticker on it.",
    },
    {
      type: "text",
      text: "Nothing is written on it yet — but the **name is already there**. That is how an empty file works.",
    },
    {
      type: "text",
      text: "The **touch** command creates that \"blank page\" — an empty file with a name.",
    },
    {
      type: "code",
      text: "# Create an empty world-rules.txt file\npi@raspberrypi:~/my-world$ touch world-rules.txt\n\n# Check the list\npi@raspberrypi:~/my-world$ ls\n\n# Example response\nbackups  notes  world-rules.txt",
    },
    {
      type: "h2",
      text: "Read — Do Not Erase",
    },
    {
      type: "text",
      text: "Picture this: you are in the next room. Mom calls through the door: \"**What did you write in your notebook?**\"",
    },
    {
      type: "text",
      text: "She does **not come in** and she does **not tear out pages**. She just **reads aloud**.",
    },
    {
      type: "text",
      text: "In the terminal, **cat** works the same way — look at the text without breaking anything.",
    },
    {
      type: "code",
      text: "# Show the file contents (empty for now — nothing prints)\npi@raspberrypi:~/my-world$ cat world-rules.txt\n\n# If the file has text, you will see it below the command\npi@raspberrypi:~/my-world$ cat world-rules.txt\nMax players: 5. Do not break other people's builds.",
    },
    {
      type: "think",
      id: "q1",
      question: "The cat command…",
      options: [
        { id: "a", text: "deletes a file" },
        { id: "b", text: "shows the file contents" },
        { id: "c", text: "creates a folder" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q1",
      text: "**cat** shows the contents. Deleting takes a completely different command.",
    },
    {
      type: "image",
      src: "nf09-b",
      alt: "Reading a file",
      caption: "cat = look at text, do not touch.",
      prompt:
        "Photorealistic close-up of a computer monitor in a bright sunlit room, sharp image, screen content softly blurred so no readable text. Light desk with Raspberry Pi nearby. No logos, no watermark. Vertical 16:10 aspect ratio. Terminal displaying cat command output, text lines blurred, read-only mood, bright monitor",
    },
    {
      type: "h2",
      text: "A Copy Saves You",
    },
    {
      type: "text",
      text: "Picture this: you want to try something risky with a page.",
    },
    {
      type: "text",
      text: "The smart move — **make a copy first**. The original stays safe.",
    },
    {
      type: "text",
      text: "The **cp** command copies a file. Two files — two \"pages\" with the same text.",
    },
    {
      type: "code",
      text: "# Copy world-rules.txt → world-rules-backup.txt\npi@raspberrypi:~/my-world$ cp world-rules.txt world-rules-backup.txt\npi@raspberrypi:~/my-world$ ls\n\n# Example response\nbackups  notes  world-rules-backup.txt  world-rules.txt",
    },
    {
      type: "h2",
      text: "A New Label on the Notebook",
    },
    {
      type: "text",
      text: "Sometimes you do not need a copy — you need a **new name** for a draft.",
    },
    {
      type: "text",
      text: "The **mv** command moves or renames. In the same folder, that often means a new name on the same \"page.\"",
    },
    {
      type: "code",
      text: "# Rename the copy to rules-draft.txt\npi@raspberrypi:~/my-world$ mv world-rules-backup.txt rules-draft.txt\npi@raspberrypi:~/my-world$ ls\n\n# Example response\nbackups  notes  rules-draft.txt  world-rules.txt",
    },
    {
      type: "h2",
      text: "Emergency Brake: rm",
    },
    {
      type: "text",
      text: "Now for the **most dangerous** action — delete.",
    },
    {
      type: "text",
      text: "In the terminal, **rm** often does **not ask** \"Are you sure?\" There is no big Undo button like in an editor.",
    },
    {
      type: "text",
      text: "So before rm, run `ls` and double-check the name.",
    },
    {
      type: "code",
      text: "# First look at the list\npi@raspberrypi:~/my-world$ ls\nbackups  notes  rules-draft.txt  world-rules.txt\n\n# Delete only the draft (rules-draft.txt), not the original!\npi@raspberrypi:~/my-world$ rm rules-draft.txt\npi@raspberrypi:~/my-world$ ls\nbackups  notes  world-rules.txt",
    },
    {
      type: "think",
      id: "q2",
      question: "Before rm, the best move is to…",
      options: [
        { id: "a", text: "close your eyes" },
        { id: "b", text: "check the name with ls" },
        { id: "c", text: "turn off the monitor" },
      ],
      answer: "b",
    },
    {
      type: "reveal",
      thinkId: "q2",
      text: "**ls** first. An admin looks — then acts.",
    },
    {
      type: "image",
      src: "nf09-c",
      alt: "Careful deletion",
      caption: "rm has no Undo — like tossing a notebook with no recycle bin.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Realistic trash bin with NO undo arrow, crumpled paper falling in, bright warning but not scary, clear metaphor",
    },
    {
      type: "fact",
      title: "A Copy Saves You",
      text: "Before a risky action, run cp. Practice on copies, not on your one important file.",
    },
    {
      type: "image",
      src: "nf09-d",
      alt: "Copying a file",
      caption: "cp makes a twin — the original stays whole.",
      prompt:
        "Photorealistic 3D educational render, bright soft studio lighting, white and light gray surfaces, crystal-clear materials, children's nonfiction ages 10-12. Clean, optimistic, well-lit. No readable text, no watermark. Vertical 16:10 aspect ratio. Two identical notebooks side by side on bright desk, one labeled original one copy, realistic stationery photo",
    },
    {
      type: "try",
      title: "🔍 Explore: Safe Cycle",
      body: "Walk through the whole path from creating to carefully deleting — on a copy, not on something important.",
      checklist: [
        "Open the terminal, go to your project folder (`cd ~/my-world` or create it)",
        "`touch practice.txt` — blank page",
        "`cp practice.txt practice2.txt` — copy",
        "`mv practice2.txt practice-old.txt` — rename the copy",
        "`cat practice.txt` — is the original still there?",
        "`ls` — look at the names carefully",
        "`rm practice-old.txt` — delete only the copy!",
        "`ls` again — is practice.txt still there?",
        "Write in your journal: which command is the most dangerous?",
      ],
      footer: "Original still there — you are a careful admin.",
    },
    {
      type: "draw",
      text: "Diagram: file → cp → copy; file → rm → gone. Label the arrows.",
    },
    {
      type: "diary",
      lines: [
        "Which command is the most dangerous and why?",
        "What is your ritual before rm?",
      ],
    },
    {
      type: "errors",
      items: [
        {
          title: "Mistake #1",
          myth: "cat deletes text.",
          truth: "cat only shows the contents.",
        },
        {
          title: "Mistake #2",
          myth: "rm always asks for confirmation.",
          truth: "Plain rm can delete right away.",
        },
        {
          title: "Mistake #3",
          myth: "Practice rm on important files.",
          truth: "Practice on copies.",
        },
      ],
    },
    {
      type: "text",
      text: "`my-world` already has `world-rules.txt` — but it is empty inside. How do you **write the world rules** as text?",
    },
  ],
  remember: [
    "touch creates",
    "cat reads",
    "cp copies",
    "mv moves/renames",
    "rm deletes carefully",
  ],
  commands: [
    { cmd: "touch file", does: "Creates an empty file" },
    { cmd: "cat file", does: "Shows the contents" },
    { cmd: "cp from to", does: "Copies" },
    { cmd: "mv from to", does: "Moves/renames" },
    { cmd: "rm file", does: "Deletes (careful!)" },
  ],
  glossary: [
    { term: "File", def: "A named bundle of data." },
    { term: "rm", def: "The delete command." },
  ],
  check: [
    {
      type: "match",
      prompt: "Match them up:",
      hint: "rm = careful",
      explanation: "The basic set.",
      pairs: [
        ["touch", "create"],
        ["cat", "show"],
        ["cp", "copy"],
        ["mv", "move/rename"],
        ["rm", "delete"],
      ],
    },
    {
      type: "tf",
      text: "Plain rm always asks for confirmation.",
      answer: false,
      hint: "Does it always ask?",
      explanation: "No. Check the name.",
    },
    {
      type: "fill",
      prompt: "The copy command:",
      answer: "cp",
      hint: "from copy",
      explanation: "cp creates a copy.",
    },
    {
      type: "whatif",
      prompt: "rm on an important file with no backup?",
      hint: "No big Undo button.",
      explanation: "Deletion is often permanent.",
      sample: "It can vanish with no Undo.",
      optional: true,
    },
    {
      type: "error",
      prompt: "\"cat deletes text\"",
      hint: "cat ≈ show",
      explanation: "Use rm to delete.",
      sample: "cat shows.",
      optional: true,
    },
  ],
  next: 10,
};
