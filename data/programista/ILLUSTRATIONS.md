# Misja Programista — prompty ilustracji

Dokument dla generowania / regeneracji 40 scen książki 1.

## Audyt plików (stan)

| | |
|---|---|
| Sceny w rozdziałach 1–10 | **40** (po 4 na rozdział) |
| Pliki `.png` + `.webp` | **wszystkie 40 obecne** — brak braków |
| Duplikaty `src` w rozdziałach | brak |
| Nieużywane w książce (legacy) | `cliffhanger-glow`, `max-big-project` |

**Folder:** `assets/illustrations/scenes/{name}.webp` (+ `.png`).

### Uwagi jakości (przy regeneracji)
- Istniejące pliki są kompletne i podpięte; część ma czytelny tekst na ubraniach/plakatach/dyplomie — w nowych generacjach trzymaj regułę **No text**.
- Trzymaj spójność: Max = niebieski hoodie, brązowe oczy, brązowe włosy; siostra młodsza, fioletowa bluzka; Tata spokojny mentor.
- Sceny 1–3 dnia/ciepłe; cliffhangery (4. obraz każdego rozdziału) — wieczór / tajemnica.
- Raspberry Pi 5: mała czarna płytka/obudowa, nie laptop zamiast Pi.

## Style lock (doklejaj na początek każdego promptu)

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10.
```

W HTML/JSON można też trzymać prompt w polu `prompt` przy chunku obrazka (silnik wrzuca do `<!-- IMAGE ... PROMPT -->`).


## Rozdział 1: Poznaj Raspberry Pi

### max-opens-box

_Scena 1_

Caption: Max otwiera tajemnicze pudełko w swoim pokoju.

Plik: `assets/illustrations/scenes/max-opens-box.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max kneeling on bedroom floor opening a black gift box with gold ribbon; warm golden glow from inside revealing a small Raspberry Pi board; wonder on his face; evening cozy kid room with robots toys books skateboard; magical discovery mood.
```

### dad-helps-setup

_Scena 2_

Caption: Tata pomaga podłączyć komputer przy biurku.

Plik: `assets/illustrations/scenes/dad-helps-setup.webp`


```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater at wooden desk connecting cables to Raspberry Pi 5 in black case; monitor showing Linux desktop; blue desk lamp; notebook and beginner's guide nearby; proud mentoring moment; warm sunset through window.
```

### max-amazed-desktop

_Scena 3_

Caption: Max odkrywa pulpit Raspberry Pi 5.

Plik: `assets/illustrations/scenes/max-amazed-desktop.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Close on Max at desk staring in amazement at Raspberry Pi desktop on monitor; hands on keyboard; warm lamp light; raspberry logo subtle on device; joyful discovery; detailed children's room background.
```

### cliff-01-mystery-folder

_Cliffhanger_

Caption: Na pulpicie pojawia się tajemniczy folder…

Plik: `assets/illustrations/scenes/cliff-01-mystery-folder.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: Max at desk staring at glowing mysterious folder icon on dark desktop; cool blue-purple screen glow on his face; warm lamp; suspenseful wonder; cozy bedroom night.
```


## Rozdział 2: Pierwsza komenda

### max-at-terminal

_Scena 1_

Caption: Max rozmawia z komputerem przez terminal.

Plik: `assets/illustrations/scenes/max-at-terminal.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max at desk facing a black terminal window with green command-line text (blurred/no readable words); fingers above keyboard; curious focused expression; Raspberry Pi nearby; warm daytime desk light.
```

### max-practice-commands

_Scena 2_

Caption: Max ćwiczy pierwsze komendy — pwd i ls.

Plik: `assets/illustrations/scenes/max-practice-commands.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max practicing at terminal, notebook open with simple command doodles; concentrated smile; Pi on desk; sister silhouette in doorway commenting like a sports announcer; bright warm room.
```

### max-sees-file-list

_Scena 3_

Caption: Na ekranie pojawia się lista plików jak spis treści.

Plik: `assets/illustrations/scenes/max-sees-file-list.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max pointing excitedly at monitor showing a simple file list interface (icons only, no readable filenames); discovery joy; warm lamp; tidy tech desk with Pi.
```

### cliff-02-half-message

_Cliffhanger_

Caption: W terminalu urywa się zagadkowy komunikat…

Plik: `assets/illustrations/scenes/cliff-02-half-message.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: terminal screen with a mysterious unfinished glowing message cut off mid-line (no readable text); Max leaning in shocked; blue screen glow; warm lamp; suspense.
```


## Rozdział 3: Tajemniczy folder

### max-exploring-folders

_Scena 1_

Caption: Max odkrywa foldery jak szuflady z adresami.

Plik: `assets/illustrations/scenes/max-exploring-folders.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max exploring folders on screen imagined as glowing drawers/cabinets metaphor softly overlaid; focused curious expression; daytime desk; Pi and sticky notes.
```

### max-creates-folder

_Scena 2_

Caption: Max tworzy folder projekty — nową bazę pomysłów.

Plik: `assets/illustrations/scenes/max-creates-folder.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max creating a new folder on Raspberry Pi desktop; triumphant small smile; notebook labeled projects nearby; warm daylight; dad watching encouragingly in background.
```

### sister-sticker-notes

_Scena 3_

Caption: Siostra daje Maksowi naklejkę na notes z mapą.

Plik: `assets/illustrations/scenes/sister-sticker-notes.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max's younger sister about 8 years old with ponytail, playful expression, purple top sticking a colorful sticker onto Max's explorer notebook; both laughing; map-like doodles on notebook cover (no readable words); cozy bedroom afternoon.
```

### cliff-03-led-plan

_Cliffhanger_

Caption: W folderze pojawia się plik led.plan…

Plik: `assets/illustrations/scenes/cliff-03-led-plan.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: mysterious glowing file icon for an LED plan on screen; Max reading with wide eyes; small LED and jumper wires on desk; suspenseful blue glow.
```


## Rozdział 4: Pierwsze światło

### max-led-light

_Scena 1_

Caption: Pierwsza dioda LED ożywa na biurku Maksa.

Plik: `assets/illustrations/scenes/max-led-light.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. First glowing LED on breadboard connected to Raspberry Pi GPIO with jumper wires and resistor; Max watching the tiny light with awe; warm desk lamp; close detailed electronics scene.
```

### max-writes-led-bridge

_Scena 2_

Caption: Max zapisuje most: kod → sygnał → pin → światło.

Plik: `assets/illustrations/scenes/max-writes-led-bridge.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max writing in notebook a simple bridge diagram: code to signal to pin to light (symbols only, no readable text); LED glowing beside Pi; focused learning mood; warm light.
```

### max-led-tempo-test

_Scena 3_

Caption: Max zmienia tempo mrugania diody.

Plik: `assets/illustrations/scenes/max-led-tempo-test.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max testing LED blink tempo, finger on keyboard, LED mid-blink glow; stopwatch or sister counting nearby; playful experiment; bright room.
```

### cliff-04-robot-frame

_Cliffhanger_

Caption: Na biurku pojawia się rama robota…

Plik: `assets/illustrations/scenes/cliff-04-robot-frame.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: small unfinished robot chassis/frame appearing on desk beside glowing LED project; Max surprised; mysterious warm-cool lighting; next mission mood.
```


## Rozdział 5: Pierwszy robot

### max-with-robot

_Scena 1_

Caption: Max buduje robota na dywanie.

Plik: `assets/illustrations/scenes/max-with-robot.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max kneeling on carpet building a small DIY wheeled robot with blue glowing eye sensors; screwdriver in hand; Raspberry Pi in robot body; bright daytime window light; joyful maker scene.
```

### max-fixes-robot-code

_Scena 2_

Caption: Max poprawia kod po prawie-wypadku na krzesło.

Plik: `assets/illustrations/scenes/max-fixes-robot-code.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max at laptop fixing robot code after near-crash into chair; robot paused nearby; determined expression; notebook open; warm afternoon light.
```

### max-robot-box-test

_Scena 3_

Caption: Test numer trzy — robot omija pudło na dywanie.

Plik: `assets/illustrations/scenes/max-robot-box-test.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Robot successfully driving around a cardboard box obstacle on carpet; Max cheering; sister filming like a sports commentator; bright playful test scene.
```

### cliff-05-sensor-glow

_Cliffhanger_

Caption: Czujnik mrugnął nietypowo w stronę szafy…

Plik: `assets/illustrations/scenes/cliff-05-sensor-glow.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: robot distance sensor glowing oddly toward a closet/wardrobe; Max watching from bed doorway; mysterious blue sensor light; suspense.
```


## Rozdział 6: Oczy robota

### max-camera-motion

_Scena 1_

Caption: Kamera patrzy na dywan. Pierwszy test detekcji ruchu.

Plik: `assets/illustrations/scenes/max-camera-motion.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max setting up a small camera module on a stand aimed at carpet; first motion-detection test; green detection hint on screen (no readable UI text); daytime; curious focus.
```

### max-tunes-camera

_Scena 2_

Caption: Max ustawia czułość kamery — za dużo i za mało alarmów.

Plik: `assets/illustrations/scenes/max-tunes-camera.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max adjusting camera sensitivity on screen while sister waves exaggeratedly; cat silhouette in hallway; trial-and-error humor; warm room.
```

### max-motion-triggers-led

_Scena 3_

Caption: Ruch w kadrze → dioda miga. Oko mówi, światło odpowiada.

Plik: `assets/illustrations/scenes/max-motion-triggers-led.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Camera detects motion and LED blinks in sync; Max and sister celebrating; Pi, camera, LED wired together; clear cause-effect moment; bright light.
```

### cliff-06-print-card

_Cliffhanger_

Caption: Na biurku kartka z jednym słowem: print

Plik: `assets/illustrations/scenes/cliff-06-print-card.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: thin mysterious card on desk with a single glowing word suggestion (abstract glyph, no readable letters); Max reading by lamp; Python adventure foreshadowing.
```


## Rozdział 7: Pierwszy własny program

### max-coding-python

_Scena 1_

Caption: Pierwszy program w Pythonie ożywa na ekranie.

Plik: `assets/illustrations/scenes/max-coding-python.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max at editor writing first Python program; screen shows a friendly hello output (blurred letters); amazed smile; Pi on desk; warm golden lamp light.
```

### max-debugs-python

_Scena 2_

Caption: Literówka. Czerwony komunikat. Max czyta błąd jak mapę.

Plik: `assets/illustrations/scenes/max-debugs-python.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Red error highlight on screen (no readable text); Max reading error like a detective map; tense then hopeful; notebook with arrows; focused debug mood.
```

### dad-explains-debug

_Scena 3_

Caption: Tata i Max czytają komunikat błędu razem.

Plik: `assets/illustrations/scenes/dad-explains-debug.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater side by side reading an error message together; patient mentoring; warm lamp; calm problem-solving atmosphere.
```

### cliff-07-server-comment

_Cliffhanger_

Caption: Komentarz w kodzie: # zaprosić kogoś do wspólnego świata

Plik: `assets/illustrations/scenes/cliff-07-server-comment.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: code editor with a mysterious comment line glowing (symbols only); hint of inviting someone to a shared world; Max thoughtful; blue screen glow.
```


## Rozdział 8: Własny świat Minecraft

### max-minecraft-server

_Scena 1_

Caption: Wspólna gra — serwer działa w domu Maksa.

Plik: `assets/illustrations/scenes/max-minecraft-server.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Raspberry Pi 5 running as home game server; Max starting a shared blocky world on monitor; excited; cables neat; daytime; server host mood.
```

### sister-minecraft-bridge

_Scena 2_

Caption: Max i siostra budują most w dwóch miejscach naraz.

Plik: `assets/illustrations/scenes/sister-minecraft-bridge.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max and younger sister about 8 years old with ponytail, playful expression, purple top building the same bridge together — Max on PC, sister on tablet showing matching blocky world; Pi board on desk; warm sunlight; teamwork joy.
```

### max-checks-server-logs

_Scena 3_

Caption: Max sprawdza logi i temperaturę Pi 5.

Plik: `assets/illustrations/scenes/max-checks-server-logs.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. After play, Max checking server logs and Pi temperature on screen; calm proud expression; warm evening desk; engineering reflection.
```

### cliff-08-connect-note

_Cliffhanger_

Caption: Kartka: Połącz wszystko w jeden projekt…

Plik: `assets/illustrations/scenes/cliff-08-connect-note.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: handwritten-looking mystery note on desk saying to connect everything into one project (abstract marks, no readable text); Max swallowing hard; LED camera robot props nearby.
```


## Rozdział 9: Wielki projekt

### max-project-plan

_Scena 1_

Caption: Max układa plan strażnika na dywanie.

Plik: `assets/illustrations/scenes/max-project-plan.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max on carpet arranging colorful sticky-note plan for a workshop guardian project: motion to log to LED; cards and sketches (no readable words); determined planner mood; daytime.
```

### max-iterates-project

_Scena 2_

Caption: Poprawki, testy, kolejna wersja — iteracja.

Plik: `assets/illustrations/scenes/max-iterates-project.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max iterating: testing camera+LED project, adjusting threshold, multiple notebook versions stacked; focused maker energy; warm light.
```

### family-tests-guard

_Scena 3_

Caption: Strażnik warsztatu przechodzi rodzinny test.

Plik: `assets/illustrations/scenes/family-tests-guard.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Family test: warm Polish mom, shoulder-length brown hair, soft smile, casual home clothes walks through camera frame, LED blinks, Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater and sister watch proudly; workshop guardian demo; cozy evening showcase.
```

### cliff-09-diploma-ready

_Cliffhanger_

Caption: Komunikat: Gotowy do dyplomu?

Plik: `assets/illustrations/scenes/cliff-09-diploma-ready.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: Pi screen showing mysterious diploma question glow; Max looking at dad; emotional suspense; warm-cool lighting.
```


## Rozdział 10: Dyplom Młodego Programisty

### max-diploma

_Scena 1_

Caption: Dyplom Młodego Programisty — chwila dumy.

Plik: `assets/illustrations/scenes/max-diploma.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Proud Max holding Young Programmer diploma (seal and ribbon, text unreadable/blurred); kind Polish dad about 40, short brown hair, calm smile, casual sweater and warm Polish mom, shoulder-length brown hair, soft smile, casual home clothes clapping in doorway; Pi on desk; warm celebration lighting; achievement joy.
```

### max-sets-learning-goal

_Scena 2_

Caption: Max wiesza dyplom i zapisuje cel: nauczyć kolegę.

Plik: `assets/illustrations/scenes/max-sets-learning-goal.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max hanging diploma above desk and writing a learning goal in notebook: teach a friend first command (handwriting abstract); quiet resolve; soft morning light.
```

### bookshelf-next-missions

_Scena 3_

Caption: Półka MISJE WIEDZY czeka na kolejne historie.

Plik: `assets/illustrations/scenes/bookshelf-next-missions.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Bookshelf of MISJE WIEDZY series spines waiting (titles abstract/no readable text); Max touching his finished book spine gently; hopeful next-adventure mood; warm room.
```

### cliff-10-goodbye-print

_Cliffhanger_

Caption: print("Do zobaczenia") — do kolejnej książki…

Plik: `assets/illustrations/scenes/cliff-10-goodbye-print.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Soft ending cliffhanger: Raspberry Pi monitor shows a friendly farewell print output (blurred); Max in doorway smiling back; warm lamp; hopeful goodbye to next book.
```


## Legacy (nieużywane w aktualnych rozdziałach)

### cliffhanger-glow

Caption: (stary uniwersalny cliffhanger — Max w piżamie przy świecącym ekranie).

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Night bedroom; Max in pajamas leaning toward glowing computer screen in wonder; warm lamp vs cool blue monitor; mysterious discovery mood; no specific mission props.
```

### max-big-project

Caption: (stara scena „dużego projektu” / night-light board — zastąpiona przez `family-tests-guard` / plan strażnika).

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors. Detailed cozy bedroom workshop environment. Vertical composition. No text. No watermark. 16:10. Max proudly showing parents a homemade electronics night-light board with glowing LEDs on desk; notebook nearby; warm celebration; family pride.
```

## Checklist generacji

1. Użyj style lock + unikalnego ogona sceny.
2. Zapisz jako `{src}.png` i skonwertuj do `{src}.webp`.
3. Podgląd: czy Max / Pi / nastrój (dzień vs cliff) się zgadzają.
4. Odrzuć generacje z czytelnym tekstem na UI, dyplomie, plakatach.
