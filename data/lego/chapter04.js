window.CHAPTER_04 = {
  id: 4,
  bookId: "lego",
  title: "Dźwig",
  subtitle: "Ramię, bloczek i przeciwwaga",
  icon: "construction",
  tone: "sky",
  intro: "Ciężka skrzynia blokuje przejazd. Dzieci budują dźwig.",
  story: [
    { type: "text", text: "W czwartym dziale stała ogromna skrzynia z kołami. Bez jej przesunięcia fabryka nie ruszy dalej." },
    { type: "image", src: "heavy-box-crane-hall", alt: "Ciężka skrzynia.", caption: "Skrzynia blokuje drogę.", prompt: "Old toy factory hall, heavy crate blocking track, kids planning with chalk sketches." },
    { type: "text", text: "Dziadek pokazał stary żuraw. Lina była dobra, ale ramię nie miało równowagi." },
    { type: "text", text: "Lena narysowała trójkąt podpory. Kuba dołożył przeciwwagę z metalowych klocków." },
    { type: "image", src: "crane-lever-build", alt: "Budowa dźwigu.", caption: "Ramię dźwigu i przeciwwaga.", prompt: "Kids assembling simple crane with lever and counterweight using toy engineering parts, focused teamwork." },
    { type: "text", text: "Max pociągnął linę. Skrzynia drgnęła. Sara krzyknęła: — Działa!" },
    { type: "image", src: "crate-lift-success", alt: "Skrzynia podniesiona.", caption: "Dźwig podnosi ciężki ładunek.", prompt: "Mechanical crane lifting heavy crate, excited children, warm sparks of dust in light beams." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Siła to nie tylko mięśnie. To też dobry pomysł.”" },
    { type: "text", text: "***MISJA 4 — UKOŃCZONA***" },
    { type: "image", src: "cliff-04-broken-bridge-model", alt: "Model mostu.", caption: "Następny dział potrzebuje mostu.", prompt: "Cliffhanger: toy track ends at gap with broken mini bridge model, suspense for next chapter." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Kiedy praktykant szarpał linę, ładunek stał. Gdy dodał przeciwwagę, ruszył lekko. Dobra dźwignia oszczędza siły.”" }
  ],
  words: [
    { term: "Dźwignia", icon: "book", what: "Prosty mechanizm wzmacniający siłę.", why: "Ułatwia podnoszenie.", remember: "Dobre ramię = mniej wysiłku.", ua: { what: "Важіль.", why: "Підсилює силу.", remember: "Плече." } },
    { term: "Przeciwwaga", icon: "book", what: "Ciężar równoważący ładunek.", why: "Stabilizuje dźwig.", remember: "Równowaga to bezpieczeństwo.", ua: { what: "Противага.", why: "Баланс.", remember: "Стійкість." } },
    { term: "Bloczek", icon: "book", what: "Kółko z rowkiem dla liny.", why: "Ułatwia zmianę kierunku ciągnięcia.", remember: "Lina pracuje mądrzej.", ua: { what: "Блок.", why: "Полегшує підйом.", remember: "Мотузка." } }
  ],
  fact: "Dźwigi używają dźwigni i przeciwwag, aby bezpiecznie podnosić ciężkie rzeczy.",
  questions: [
    { tag: "Z tekstu", prompt: "Co blokowało przejazd?", sample: "Ciężka skrzynia." },
    { tag: "Z tekstu", prompt: "Jak dzieci ulepszyły dźwig?", sample: "Dodały przeciwwagę i poprawiły konstrukcję." },
    { tag: "Z tekstu", prompt: "Kto narysował podporę?", sample: "Lena." },
    { tag: "Z tekstu", prompt: "Co było cliffhangerem?", sample: "Dział z mostem." },
    { tag: "O temacie", prompt: "Po co przeciwwaga?", sample: "Żeby zrównoważyć ciężar i ułatwić podnoszenie." },
    { tag: "O temacie", prompt: "Czy siła to tylko mięśnie?", sample: "Nie, ważny jest też mechanizm." },
    { tag: "O temacie", prompt: "Jaką zasadę przypomina wpis inżyniera?", sample: "Najpierw pomysł i zrozumienie, potem siła." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Najpierw obserwacja, potem naprawa.", answer: true }, { text: "Pośpiech zawsze pomaga.", answer: false }, { text: "Drużyna szuka przyczyny.", answer: true }, { text: "Kuba lubi mówić: To da się naprawić.", answer: true }, { text: "Błędy niczego nie uczą.", answer: false }, { text: "Wpis inżyniera daje wskazówkę.", answer: true }, { text: "Każdy mechanizm ma swój powód.", answer: true } ], success: "Brawo!", hint: "treść" },
    { type: "match", title: "Połącz", pairs: [ { left: "obserwacja", right: "szukanie śladów" }, { left: "diagnoza", right: "przyczyna problemu" }, { left: "mechanizm", right: "współpraca części" }, { left: "dziadek", right: "najpierw głowa" } ], options: ["szukanie śladów", "przyczyna problemu", "współpraca części", "najpierw głowa", "hałas"], success: "Dobrze!", hint: "słowa" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najlepszy konstruktor najpierw ...", answer: "obserwuje", accept: ["obserwuje", "Obserwuje"] }, { prompt: "Szukanie źródła to ...", answer: "diagnoza", accept: ["diagnoza", "Diagnoza"] }, { prompt: "Mechanizm ma swój ...", answer: "powód", accept: ["powód", "Powod", "Powód"] } ], success: "Super!", hint: "motto" },
    { type: "find", typeLabel: "Błąd", title: "Które zdanie jest FAŁSZYWE?", options: [ { id: "a", text: "Warto mierzyć i sprawdzać" }, { id: "b", text: "Wymiana na ślepo jest najlepsza" }, { id: "c", text: "Drużyna pracuje razem" } ], answer: "b", success: "Masz to!", hint: "metoda" },
    { type: "imagematch", title: "Dopasuj ikonę", prompt: "Ikona rozdziału:", choices: [ { id: "construction", icon: "construction", label: "construction" }, { id: "rocket", icon: "rocket", label: "rocket" }, { id: "dino", icon: "dino", label: "dino" } ], answer: "construction", success: "Brawo!", hint: "ikona" },
    { type: "open", typeLabel: "Praktyczne", title: "Twój plan", prompt: "Wypisz 3 kroki diagnozy problemu.", sample: "Obserwuję, mierzę, testuję.", success: "Świetnie!", hint: "" }
  ],
  summary: ["Dźwig podnosi skrzynię.", "Przeciwwaga daje równowagę.", "Następny etap: most."],
  next: 5
};
