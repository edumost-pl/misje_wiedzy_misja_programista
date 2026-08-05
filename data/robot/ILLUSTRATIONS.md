# Misja Robot — prompty ilustracji

Dokument dla generowania / regeneracji **40 scen** książki 3 (v2: legenda Iskry, Iskra jako bohater, łuk drużyny).


## Audyt plików (stan)

| | |
|---|---|
| Sceny w rozdziałach 1–10 | **40** (po 4 na rozdział) |
| Pliki `.png` / `.webp` | **jeszcze nie wygenerowane** — tylko nazwy + prompty |
| Duplikaty `src` | brak |
| Folder docelowy | `assets/illustrations/scenes/{name}.webp` (+ `.png`) |

### Uwagi jakości (przy generacji)
- **Max** jak w serii: niebieski hoodie, brązowe włosy/oczy; siostra młodsza (fioletowa bluzka); Tata spokojny mentor.
- **Iskra** = mały robot-bohater (nie „anonimowy robot”): niebieska antenka jak wykrzyknik, naklejka iskry od Leny; na początku martwa rama, potem coraz bardziej „żywa” (dioda, ruch, kamera, pewność).
- **Lena** (~10): szkicownik, rysuje wszędzie (serwetki, pudełka, marginesy).
- **Kuba** (~10): śrubokręt, konstrukcja.
- **Sara** (~10): laptop z naklejkami, widzi błędy.
- **Pan Witek**: starszy, życzliwy nauczyciel techniki, siwe włosy, ciepłe oczy — strażnik Nagrody Iskry / legendy.
- **Alfa**: pewni siebie, drogi sprzęt — **nie złoczyńcy** (finał: gratulacje, kawa).
- **Turbo** / **Geniusz**: szybkość vs wolna precyzja.
- **No text** na plakatach, tablicach wyników, UI, medalach (kształty OK, czytelne litery NIE).
- Cliffhangery (4. obraz) — wieczór / tajemnica / napięcie przed kolejnym etapem Iskry.
- Paleta: ciepły pomarańcz + teal warsztatu / sali gimnastycznej (nie fiolet-AI default).

## Style lock (doklejaj na początek każdego promptu)

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10.
```

Prompty są też w polu `prompt` przy chunkach obrazków w `chapterXX.js` (silnik → `<!-- IMAGE ... PROMPT -->`).

### Spójność Iskry (wizualnie)
| Etap | Wygląd Iskry |
|------|----------------|
| R1 | pusta rama / zestaw |
| R2 | ciało + mrugnięcie diody (po baterii) |
| R3 | koła + ruch (jeszcze „ślepa”) |
| R4+ | kamera „oczy” |
| R5+ | pewniejsza jazda / reguły |
| R8–10 | pełna Iskra + naklejka iskry |


## Rozdział 1: Konkurs!

### poster-robot-contest

_Scena 1_

Caption: Plakat konkursu i szept o Nagrodzie Iskry.

Plik: `assets/illustrations/scenes/poster-robot-contest.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. School hallway crooked robot contest poster; Max curious; students whispering; warm daylight; hint of mystery legend mood.
```

### team-forms-classroom

_Scena 2_

Caption: Max prosi nieznajomych do drużyny.

Plik: `assets/illustrations/scenes/team-forms-classroom.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Classroom: awkward Max inviting girl Lena about 10 with sketchbook drawing on everything boy Kuba about 10 with screwdriver girl Sara about 10 with laptop stickers; rivals in background; first meeting tension; warm school light.
```

### empty-robot-kit-home

_Scena 3_

Caption: Max mówi do pustej Iskry w domu.

Plik: `assets/illustrations/scenes/empty-robot-kit-home.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Max at home desk talking softly to empty robot kit frame named Iskra; notebook; warm lamp; emotional beginning.
```

### cliff-01-deadline-kit

_Cliffhanger_

Caption: W warsztacie stary plakat z robotem Iskra.

Plik: `assets/illustrations/scenes/cliff-01-deadline-kit.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: old faded photo/poster of legendary alumni robot Iskra on workshop wall; Max noticing connection to their robot name; warm mystery glow.
```

## Rozdział 2: Budujemy Iskrę

### workshop-build-frame

_Scena 1_

Caption: Drużyna buduje Iskrę w warsztacie.

Plik: `assets/illustrations/scenes/workshop-build-frame.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Workshop team building robot Iskra: boy Kuba about 10 with screwdriver girl Lena about 10 with sketchbook drawing on everything drawing on napkin girl Sara about 10 with laptop stickers checking steps Max tightening screws; warm busy scene.
```

### robot-iskra-lifeless

_Scena 2_

Caption: Iskra nie rusza — odkrycie baterii.

Plik: `assets/illustrations/scenes/robot-iskra-lifeless.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Robot Iskra standing still; Max discovering unplugged battery pack nearby; team surprised funny aha moment; warm workshop.
```

### rivals-peek-alfa

_Scena 3_

Caption: Alfa zagląda — pewni siebie, nie wrogowie.

Plik: `assets/illustrations/scenes/rivals-peek-alfa.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Alfa team peeking confidently through workshop door; not mean just self-assured; Max team with powered Iskra LED blink; warm contrast.
```

### cliff-02-how-to-move

_Cliffhanger_

Caption: Iskra mruga — czas na ruch.

Plik: `assets/illustrations/scenes/cliff-02-how-to-move.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger: Iskra LED blink; motor box unopened; question of real movement ahead; warm workshop suspense.
```

## Rozdział 3: Iskra rusza

### iskra-first-motors

_Scena 1_

Caption: Iskra rusza po raz pierwszy.

Plik: `assets/illustrations/scenes/iskra-first-motors.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Robot Iskra first motor test rolling crooked on workshop floor; team excited nervous; Lena cardboard arrows; dynamic warm scene.
```

### fix-after-crash

_Scena 2_

Caption: Po kraksie — naprawa i rozmowa.

Plik: `assets/illustrations/scenes/fix-after-crash.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. After minor crash Max calming Iskra; boy Kuba about 10 with screwdriver fixing wheel girl Sara about 10 with laptop stickers adjusting code; team tension then talking; warm repair scene.
```

### turbo-speed-blind

_Scena 3_

Caption: Turbo szybkie, Iskra jeszcze „ślepa”.

Plik: `assets/illustrations/scenes/turbo-speed-blind.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Hallway Turbo team with stopwatch racing past; Max team with Iskra realizing need for camera eyes; contrast speed vs vision.
```

### cliff-03-needs-eyes

_Cliffhanger_

Caption: Iskra jedzie — ale nie widzi.

Plik: `assets/illustrations/scenes/cliff-03-needs-eyes.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger: Iskra rolling; empty camera mount; question of vision ahead; warm suspense.
```

## Rozdział 4: Iskra widzi

### iskra-camera-mount

_Scena 1_

Caption: Montaż kamery Iskry.

Plik: `assets/illustrations/scenes/iskra-camera-mount.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Mounting small camera on robot Iskra; Sara laptop gray preview; Lena sticker spark; workshop focus warm light.
```

### tune-vision-threshold

_Scena 2_

Caption: Odkrycie: folia na obiektywie.

Plik: `assets/illustrations/scenes/tune-vision-threshold.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Max peeling protective film off camera lens; Sara laptop suddenly showing clear image; team funny relief aha moment.
```

### genius-slow-contrast

_Scena 3_

Caption: Geniusz wolny, Iskra dopiero widzi.

Plik: `assets/illustrations/scenes/genius-slow-contrast.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Geniusz team slow precise robot vs Max team Iskra with working camera; contrast thinking speed; warm school tech room.
```

### cliff-04-needs-brain

_Cliffhanger_

Caption: Iskra widzi — czy rozumie?

Plik: `assets/illustrations/scenes/cliff-04-needs-brain.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger: Iskra camera feed showing obstacles; question of decision brain; warm glowing screen.
```

## Rozdział 5: Iskra myśli

### rules-on-whiteboard

_Scena 1_

Caption: Reguły Iskry na tablicy.

Plik: `assets/illustrations/scenes/rules-on-whiteboard.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Whiteboard IF-THEN rules for robot Iskra; Sara writing Kuba checking Lena colorful margin doodles; team learning together.
```

### iskra-chooses-path

_Scena 2_

Caption: Iskra wybiera drogę.

Plik: `assets/illustrations/scenes/iskra-chooses-path.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Robot Iskra successfully avoiding cardboard obstacle using simple rules; team cheering; warm triumphant workshop.
```

### alfa-brag-cloud-ai

_Scena 3_

Caption: Alfa chwali chmurę, my — reguły.

Plik: `assets/illustrations/scenes/alfa-brag-cloud-ai.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Alfa team showing cloud AI tablet; Max team proud with simple whiteboard rules; not hostile rivalry warm school scene.
```

### cliff-05-track-day

_Cliffhanger_

Caption: Jutro tor przeszkód.

Plik: `assets/illustrations/scenes/cliff-05-track-day.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger evening: school obstacle track silhouette through window; Iskra ready; anticipation warm sunset.
```

## Rozdział 6: Pierwszy test

### obstacle-track-test

_Scena 1_

Caption: Iskra na torze — pierwszy test.

Plik: `assets/illustrations/scenes/obstacle-track-test.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. School obstacle track; robot Iskra at start line; rival teams; Max hand on Iskra; crowd energy warm gym colors.
```

### rivals-results-board

_Scena 2_

Caption: Tablica wyników — Alfa szybkie, Iskra solidna.

Plik: `assets/illustrations/scenes/rivals-results-board.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Results board gym; Alfa fast time Turbo blind bump Geniusz slow; Iskra mid solid checkmark; warm competition.
```

### suspicious-grinding-noise

_Scena 3_

Caption: Skrzypienie — luźna nakładka.

Plik: `assets/illustrations/scenes/suspicious-grinding-noise.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Kuba under Iskra finding loose wheel cover rubbing frame; grinding detail; team worried but focused warm light.
```

### cliff-06-something-wrong

_Cliffhanger_

Caption: Coś jest nie tak z Iskrą.

Plik: `assets/illustrations/scenes/cliff-06-something-wrong.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger evening: Iskra on table; loose part highlighted; finał countdown calendar; tense warm workshop.
```

## Rozdział 7: Awaria

### iskra-wont-start

_Scena 1_

Caption: Iskra nie wstaje — dzień przed finałem.

Plik: `assets/illustrations/scenes/iskra-wont-start.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Morning crisis robot Iskra completely still on table; Max worried pressing button; team panic; dark windows warm lamp focus.
```

### panic-then-divide

_Scena 2_

Caption: Podział ról bez paniki.

Plik: `assets/illustrations/scenes/panic-then-divide.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Team calmly dividing tasks around silent Iskra; girl Sara about 10 with laptop stickers laptop boy Kuba about 10 with screwdriver wires girl Lena about 10 with sketchbook drawing on everything sketch on sleeve Max coordinating; unity under stress.
```

### three-faults-found

_Scena 3_

Caption: Trzy usterki — jedna Iskra.

Plik: `assets/illustrations/scenes/three-faults-found.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Three small faults laid out: loose cable shifted sensor unsaved file; team fixing Iskra together; hopeful tension.
```

### cliff-07-need-each-other

_Cliffhanger_

Caption: Iskra wciąż milczy — na razie.

Plik: `assets/illustrations/scenes/cliff-07-need-each-other.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger: hands connecting last cable to Iskra; LED about to blink question; night before final warm dramatic.
```

## Rozdział 8: Naprawiamy razem

### team-repair-night

_Scena 1_

Caption: Nocna naprawa Iskry — razem.

Plik: `assets/illustrations/scenes/team-repair-night.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Night workshop team repairing robot Iskra together; focused unity; warm lamp; parts organized; emotional teamwork climax building.
```

### iskra-lives-again

_Scena 2_

Caption: Iskra znów jedzie.

Plik: `assets/illustrations/scenes/iskra-lives-again.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Robot Iskra rolling again after repair; team exhausted happy; small obstacle avoided; spark sticker visible warm triumph.
```

### quiet-rival-respect

_Scena 3_

Caption: Alfa przynosi kawę — szacunek.

Plik: `assets/illustrations/scenes/quiet-rival-respect.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Alfa team bringing thermos coffee to Max team respectfully not mean; Iskra in background ready; warm human moment rivals.
```

### cliff-08-final-tomorrow

_Cliffhanger_

Caption: Jutro wielki finał.

Plik: `assets/illustrations/scenes/cliff-08-final-tomorrow.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger dawn: gym doors opening; Iskra on cart ready; final day banner abstract; golden anticipation.
```

## Rozdział 9: Wielki finał

### final-arena-crowd

_Scena 1_

Caption: Finał — Iskra na starcie.

Plik: `assets/illustrations/scenes/final-arena-crowd.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Packed school gym final; robot Iskra at start line; Max hand on Iskra; crowd banners warm epic children book.
```

### iskra-final-run

_Scena 2_

Caption: Iskra na torze — finałowy przejazd.

Plik: `assets/illustrations/scenes/iskra-final-run.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Dynamic Iskra navigating obstacle course final run; focused team trackside; warm motion blur children's illustration.
```

### team-presentation

_Scena 3_

Caption: Prezentacja drużyny i Iskry.

Plik: `assets/illustrations/scenes/team-presentation.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Team presentation stage: Max speaking Sara rules Lena napkin sketch Kuba holding screw Iskra beside them; proud warm scene.
```

### cliff-09-waiting-verdict

_Cliffhanger_

Caption: Ogłoszenie wyników.

Plik: `assets/illustrations/scenes/cliff-09-waiting-verdict.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Cliffhanger: judges at table; Pan Witek with Nagroda Iskry envelope; teams waiting; warm suspense spotlight.
```

## Rozdział 10: Nagroda

### awards-announcement

_Scena 1_

Caption: Ogłoszenie — Alfa gratuluje.

Plik: `assets/illustrations/scenes/awards-announcement.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Gym awards; Alfa leader shaking Max hand congratulating first not mean; warm respectful rivals; crowd applauding.
```

### iskra-team-award

_Scena 2_

Caption: Nagroda Iskry dla drużyny Maksa.

Plik: `assets/illustrations/scenes/iskra-team-award.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Pan Witek presenting Nagroda Iskry to Max team; old alumni poster; Iskra beside them; emotional warm gym spotlight.
```

### family-home-after-contest

_Scena 3_

Caption: Dom po konkursie — Iskra zostaje.

Plik: `assets/illustrations/scenes/family-home-after-contest.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Max home evening family sofa Iskra small model on shelf; warm relief; sister joking; peaceful closure children's book.
```

### cliff-10-next-build

_Cliffhanger_

Caption: Nowy początek — dziel się wiedzą.

Plik: `assets/illustrations/scenes/cliff-10-next-build.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm orange-teal workshop and school-gym colors. Vertical composition. No text. No watermark. 16:10. Closing: Max teaching younger kids pointing at Iskra; open workshop door light; series continuation hope warm illustration.
```

---

## Checklist generacji

- [ ] 40 plików `.webp` (+ opcjonalnie `.png`) w `assets/illustrations/scenes/`
- [ ] Nazwy plików = `src` z tabeli powyżej (bez spacji)
- [ ] Max / Lena / Kuba / Sara / Pan Witek / Iskra spójni wizualnie między rozdziałami
- [ ] Brak czytelnego tekstu na ilustracjach
- [ ] Cliffhangery ciemniejsze / bardziej tajemnicze niż sceny 1–3
