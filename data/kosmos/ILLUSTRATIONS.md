# Misja Kosmos — prompty ilustracji

Dokument dla generowania 40 scen książki 2 (architektura jak w Misji Programista).

## Audyt plików (stan)

| | |
|---|---|
| Sceny w rozdziałach 1–10 | **40** (po 4 na rozdział) |
| Pliki `.png` / `.webp` | **jeszcze nie wygenerowane** — tylko nazwy + prompty |
| Duplikaty `src` | brak |
| Folder docelowy | `assets/illustrations/scenes/{name}.webp` (+ `.png`) |

### Uwagi jakości (przy generacji)
- Trzymaj spójność postaci z książką 1: Max = niebieski hoodie, brązowe oczy/włosy; siostra młodsza, fioletowa bluzka; Tata spokojny mentor; Mama ciepła.
- **No text** na UI, listach, plakatach, mapach (kształty gwiazd OK, czytelne napisy NIE).
- Sceny dzienne / ciepłe vs cliffhangery (4. obraz) — wieczór, tajemnica, miękkie światło lampy.
- Temat: strych, balkon, teleskop, niebo, ogród (Słońce bezpiecznie), obserwatorium — nie laboratorium Pi.
- Słońce: nigdy motyw „patrzenia prosto w Słońce okiem/teleskopem”; tylko bezpieczna projekcja/filtry.

## Style lock (doklejaj na początek każdego promptu)

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10.
```

Prompty są też w polu `prompt` przy chunkach obrazków w `chapterXX.js` (silnik → `<!-- IMAGE ... PROMPT -->`).


## Rozdział 1: Skrzynia dziadka

### grandpa-chest

_Scena 1_

Caption: Max otwiera starą drewnianą skrzynię na strychu.

Plik: `assets/illustrations/scenes/grandpa-chest.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Dusty attic afternoon. Max kneeling opening an old dark wooden chest with brass fittings; golden sunlight through small attic window; leather astronomy journal, rolled star map, velvet pouch with glass lens, brass compass inside; wonder and family treasure mood.
```

### grandpa-letter-attic

_Scena 2_

Caption: Max czyta list dziadka przy świetle strychowego okna.

Plik: `assets/illustrations/scenes/grandpa-letter-attic.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max sitting by attic window reading an old handwritten letter from grandfather; warm golden light on his face; open wooden chest beside him; emotional quiet wonder; kind Polish dad about 40, short brown hair, calm smile, casual sweater softly visible in background.
```

### star-map-and-lens

_Scena 3_

Caption: Mapa nieba, dziennik i soczewka na pokrywie skrzyni.

Plik: `assets/illustrations/scenes/star-map-and-lens.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Close still-life on chest lid: unrolled vintage star map with constellation dots, leather astronomy journal, strange glass lens in open velvet pouch; Max's hands nearby; warm attic light; curious children's book detail shot.
```

### cliff-01-first-star

_Cliffhanger_

Caption: Pierwsza gwiazda za oknem Maksa — misja się zaczyna.

Plik: `assets/illustrations/scenes/cliff-01-first-star.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: Max at bedroom desk with grandfather's journal and star map, looking out window at the first bright star in twilight sky; soft mysterious warm lamp light; beginning of astronomy mission mood.
```


## Rozdział 2: Pierwsza noc z teleskopem

### first-telescope-night

_Scena 1_

Caption: Max przy pierwszym teleskopie na balkonie.

Plik: `assets/illustrations/scenes/first-telescope-night.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max on apartment balcony at night using a vintage telescope; warm house lights behind him; starry sky above; wonder on his face; cozy family home; soft bright-enough night lighting for a children's book.
```

### north-star-finding

_Scena 2_

Caption: Max szuka Gwiazdy Polarnej na mapie i na niebie.

Plik: `assets/illustrations/scenes/north-star-finding.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max and younger sister about 8 years old with ponytail, playful expression, purple top on balcony comparing an old star map to the night sky, pointing toward the North Star; telescope nearby; curious focused expressions; warm porch light.
```

### constellation-big-dipper

_Scena 3_

Caption: Wielki Wóz nad domem Maksa.

Plik: `assets/illustrations/scenes/constellation-big-dipper.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Night sky above a Polish suburban house showing the Big Dipper constellation faintly suggested (no readable labels); Max looking up in awe from balcony; soft painterly children's book night scene with warm windows.
```

### cliff-02-silver-disc

_Cliffhanger_

Caption: W dzienniku wskazówka o srebrnej tarczy.

Plik: `assets/illustrations/scenes/cliff-02-silver-disc.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: Max reading grandfather's journal by warm lamp; margin sketch of a silver disc/Moon; mysterious evening mood; telescope silhouette by window; suspenseful curiosity.
```


## Rozdział 3: Tajemnica Księżyca

### moon-observation

_Scena 1_

Caption: Max obserwuje Księżyc przez teleskop.

Plik: `assets/illustrations/scenes/moon-observation.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max looking through telescope at a large detailed Moon in the night sky; craters faintly visible; balcony setting; awe and focus; soft night lighting with warm window glow.
```

### moon-craters-close

_Scena 2_

Caption: Kratery na powierzchni Księżyca.

Plik: `assets/illustrations/scenes/moon-craters-close.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Dramatic children's book view of Moon surface with visible craters through telescope perspective; Max's eye reflected faintly in eyepiece edge; wonder; detailed painterly style; no readable text.
```

### moon-phases-journal

_Scena 3_

Caption: Max rysuje fazy Księżyca w dzienniku.

Plik: `assets/illustrations/scenes/moon-phases-journal.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max at desk at night drawing moon phases in grandfather's journal; sketches of crescent and full moon as simple shapes (no readable labels); warm lamp light; cozy focused mood; telescope by window.
```

### cliff-03-go-to-source

_Cliffhanger_

Caption: Wskazówka: idź do źródła światła.

Plik: `assets/illustrations/scenes/cliff-03-go-to-source.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: Max reading a journal note pointing toward a sketched bright sun (abstract glow, no readable words); mysterious warm glow; curious expression; next-mission suspense; closed shutters hint.
```


## Rozdział 4: Bezpieczne Słońce

### safe-sun-observation

_Scena 1_

Caption: Bezpieczna obserwacja Słońca z tatą.

Plik: `assets/illustrations/scenes/safe-sun-observation.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater in sunny garden safely projecting the Sun's image onto paper using a simple pinhole/projection setup; special solar glasses nearby; bright warm daylight; educational careful family moment; never looking directly at the Sun.
```

### sun-energy-garden

_Scena 2_

Caption: Słoneczne ciepło i światło w ogrodzie Maksa.

Plik: `assets/illustrations/scenes/sun-energy-garden.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Sunny garden: Max noticing plants and warm sunlight; warm Polish mom, shoulder-length brown hair, soft smile, casual home clothes nearby with watering can; soft educational wonder about solar energy for life; bright cheerful daytime; no diagrams with text.
```

### sun-day-night-model

_Scena 3_

Caption: Max rozumie dzień i noc.

Plik: `assets/illustrations/scenes/sun-day-night-model.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater at table demonstrating day and night with a ball and flashlight; one hemisphere lit, the other in shadow; Max's face lighting up with understanding; warm indoor daylight.
```

### cliff-04-planet-sketch

_Cliffhanger_

Caption: Szkic planet wokół Słońca w dzienniku.

Plik: `assets/illustrations/scenes/cliff-04-planet-sketch.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: open journal page with simple sketch of Sun and orbiting planet circles (abstract, no readable labels); Max looking thoughtful; warm lamp; foreshadowing the planetary family.
```


## Rozdział 5: Rodzina planet

### solar-system-map

_Scena 1_

Caption: Domowy model Układu Słonecznego na dywanie.

Plik: `assets/illustrations/scenes/solar-system-map.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Daytime living-room carpet: Max arranging a homemade Solar System model with a big yellow balloon as the Sun and fruits/balls as planets; younger sister about 8 years old with ponytail, playful expression, purple top wearing playful pasta 'rings' as Saturn joke; bright joyful maker energy.
```

### planets-order-notebook

_Scena 2_

Caption: Max zapisuje kolejność planet.

Plik: `assets/illustrations/scenes/planets-order-notebook.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max writing planet order in notebook with simple doodle circles (no readable planet names as clear text); concentrated correcting a mistake; warm afternoon light; colorful balls nearby.
```

### mars-jupiter-sky-talk

_Scena 3_

Caption: Rodzina rozmawia o planetach pod niebem.

Plik: `assets/illustrations/scenes/mars-jupiter-sky-talk.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Family on balcony under clear evening sky talking about bright planets; Max pointing; kind Polish dad about 40, short brown hair, calm smile, casual sweater calm mentor; soft twilight; telescope nearby; wonder without panic.
```

### cliff-05-rocket-sketch

_Cliffhanger_

Caption: Szkic rakiety w dzienniku dziadka.

Plik: `assets/illustrations/scenes/cliff-05-rocket-sketch.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: journal page with a sleek rocket sketch (no readable text); Max swallowing hard with excitement; warm-cool lighting; next mission mood.
```


## Rozdział 6: Start rakiety

### rocket-blueprint

_Scena 1_

Caption: Max studiuje schemat rakiety dziadka.

Plik: `assets/illustrations/scenes/rocket-blueprint.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max at desk studying grandfather's simple rocket blueprint drawing (labels as abstract marks only); notebook, bottle parts nearby; focused daytime learning; curious builder mood.
```

### bottle-rocket-launch

_Scena 2_

Caption: Start domowej rakiety w ogrodzie.

Plik: `assets/illustrations/scenes/bottle-rocket-launch.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Outdoor garden launch of a small bottle rocket; Max and younger sister about 8 years old with ponytail, playful expression, purple top counting down safely at a distance; kind Polish dad about 40, short brown hair, calm smile, casual sweater supervising; splash of water thrust; bright daylight; joyful experiment (not dangerous fireworks).
```

### rocket-stages-drawing

_Scena 3_

Caption: Max rysuje stopnie rakiety.

Plik: `assets/illustrations/scenes/rocket-stages-drawing.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max drawing rocket stages as stacked sections in journal; understanding stages as chapters of a journey; warm desk lamp; thoughtful smile.
```

### cliff-06-helmet-note

_Cliffhanger_

Caption: Wskazówka o hełmie astronauty.

Plik: `assets/illustrations/scenes/cliff-06-helmet-note.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: journal hint with astronaut helmet sketch and a tiny station bead on a thread (no readable text); Max thoughtful; blue-warm mystery light.
```


## Rozdział 7: Ludzie wśród gwiazd

### astronauts-iss-journal

_Scena 1_

Caption: Max poznaje astronautów i ISS.

Plik: `assets/illustrations/scenes/astronauts-iss-journal.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max at desk studying journal photos/sketches of astronauts in white suits and a space station on orbit (blurred/no readable logos); awe; warm lamp; sister in background with a playful plastic-bowl 'helmet' joke.
```

### astronaut-training-imagine

_Scena 2_

Caption: Max wyobraża sobie trening astronauty.

Plik: `assets/illustrations/scenes/astronaut-training-imagine.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Imaginative children's book scene: Max picturing astronaut training — gentle spin/pool practice as soft dream overlay in bedroom; determined hopeful expression; warm colors.
```

### earth-from-orbit-dream

_Scena 3_

Caption: Max wyobraża sobie Ziemię z orbity.

Plik: `assets/illustrations/scenes/earth-from-orbit-dream.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max eyes closed dreaming of Earth from orbit: blue oceans, white clouds, thin atmosphere glow; emotional quiet wonder; soft cosmic blues and warm room lamp blend.
```

### cliff-07-islands-of-light

_Cliffhanger_

Caption: Wskazówka o wyspach światła.

Plik: `assets/illustrations/scenes/cliff-07-islands-of-light.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Night cliffhanger: journal drawing of glowing islands of light on a dark ocean (galaxies metaphor); Max on balcony looking up; city glow vs sky; mysterious larger-scale mood.
```


## Rozdział 8: Wyspy światła

### milky-way-balcony

_Scena 1_

Caption: Max patrzy na Drogę Mleczną.

Plik: `assets/illustrations/scenes/milky-way-balcony.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max on balcony under a clearer night sky seeing the Milky Way as a soft pale river of stars; kind Polish dad about 40, short brown hair, calm smile, casual sweater nearby after turning off garden light; awe; painterly night; no readable labels.
```

### nebula-journal-art

_Scena 2_

Caption: Mgławica w dzienniku dziadka.

Plik: `assets/illustrations/scenes/nebula-journal-art.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Close on grandfather's journal art of colorful nebulas like patient paint spills in space; Max's hands holding the page; warm lamp; wonder.
```

### black-hole-concept-safe

_Scena 3_

Caption: Max rozmawia z tatą o czarnej dziurze.

Plik: `assets/illustrations/scenes/black-hole-concept-safe.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Calm educational moment: Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater talking about a carefully drawn dark circle concept in journal marked as 'extreme — far away'; reassuring, not scary horror; warm safe lighting.
```

### cliff-08-map-to-observatory

_Cliffhanger_

Caption: Mapa do starego miejsca dziadka.

Plik: `assets/illustrations/scenes/cliff-08-map-to-observatory.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Evening cliffhanger: small hand-drawn map with a cross beyond town (no readable street names); Max realizing the path to grandfather's observatory; emotional suspense; warm lamp.
```


## Rozdział 9: Obserwatorium

### clues-on-floor

_Scena 1_

Caption: Max składa wskazówki w jedną mapę misji.

Plik: `assets/illustrations/scenes/clues-on-floor.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max on floor assembling mission clues: letter, star map, notes, sketches into one path; focused detective mood; daytime bedroom; soft family presence.
```

### old-observatory

_Scena 2_

Caption: Stare obserwatorium dziadka o zmierzchu.

Plik: `assets/illustrations/scenes/old-observatory.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Family approaching a small old observatory with a dome at dusk outside town; golden-blue twilight; emotional discovery; Max holding the journal; kind Polish dad about 40, short brown hair, calm smile, casual sweater warm Polish mom, shoulder-length brown hair, soft smile, casual home clothes younger sister about 8 years old with ponytail, playful expression, purple top nearby; cinematic children's book scene.
```

### observatory-dome-open

_Scena 3_

Caption: Max otwiera kopułę obserwatorium.

Plik: `assets/illustrations/scenes/observatory-dome-open.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Inside old observatory, Max and kind Polish dad about 40, short brown hair, calm smile, casual sweater opening the dome to the starry sky; large vintage telescope ready; wonder and emotion; soft dramatic lighting.
```

### cliff-09-final-envelope

_Cliffhanger_

Caption: Ostatnia koperta w obserwatorium.

Plik: `assets/illustrations/scenes/cliff-09-final-envelope.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Close emotional cliffhanger: Max holding a final sealed envelope in the observatory; starlight through dome; warm lamp; suspenseful tender pause before opening.
```


## Rozdział 10: Największy skarb

### grandpa-final-letter

_Scena 1_

Caption: Max czyta ostatni list dziadka.

Plik: `assets/illustrations/scenes/grandpa-final-letter.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Emotional finale: Max reading grandfather's final letter under observatory dome starlight; gentle smile; warm lamp; deeply touching children's book moment; no readable letter text.
```

### family-under-dome

_Scena 2_

Caption: Rodzina razem pod kopułą obserwatorium.

Plik: `assets/illustrations/scenes/family-under-dome.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max, younger sister about 8 years old with ponytail, playful expression, purple top, warm Polish mom, shoulder-length brown hair, soft smile, casual home clothes and kind Polish dad about 40, short brown hair, calm smile, casual sweater together under the open observatory dome looking at stars; tender family warmth; hopeful ending; soft starlight and lamplight.
```

### max-looks-at-sky-finale

_Scena 3_

Caption: Max patrzy w niebo z nowym spokojem.

Plik: `assets/illustrations/scenes/max-looks-at-sky-finale.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Max standing outside the old observatory looking up at a rich starry sky with quiet confidence and joy; family nearby; warm emotional finale; cinematic children's book ending.
```

### cliff-10-next-question

_Cliffhanger_

Caption: Do zobaczenia pod kolejnym niebem…

Plik: `assets/illustrations/scenes/cliff-10-next-question.webp`

```
Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text on clothes). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm colors mixed with cool night-sky blues. Detailed cozy Polish family home and attic/balcony/observatory environments. Vertical composition. No text. No watermark. 16:10. Soft hopeful ending image: closed observatory door with a small star sticker (no readable text); Max walking away looking up; night sky full of questions and light; wonder, not sadness; invitation to the next book.
```


## Checklist generacji

1. Style lock + unikalny ogon sceny.
2. Zapisz `{src}.png` → skonwertuj do `{src}.webp`.
3. Sprawdź: Max / nastrój (dzień vs cliff) / brak czytelnego tekstu.
4. Słońce tylko bezpiecznie; czarna dziura bez horroru.
5. Po wrzuceniu plików — podgląd w `chapter.html?book=kosmos&id=N`.
