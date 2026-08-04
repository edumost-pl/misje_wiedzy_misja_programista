window.CHAPTER_08 = {
  id: 8,
  bookId: "lego",
  title: "Fabryka Znów Żyje",
  subtitle: "Wielki finał",
  icon: "rocket",
  tone: "sky",
  intro: "Po naprawie wszystkie mechanizmy ruszają jednocześnie.",
  story: [
    { type: "text", text: "W sterowni panowała cisza. Max położył rękę na dźwigni głównej." },
    { type: "image", src: "main-lever-pull", alt: "Pociągnięcie dźwigni.", caption: "Max uruchamia główną dźwignię.", prompt: "Final scene in old toy factory control room, Max pulling main lever with team and grandfather watching." },
    { type: "text", text: "Trzy... dwa... jeden..." },
    { type: "text", text: "Taśmy ruszyły. Dźwig podniósł skrzynię. Sortownia zagrała metalicznym rytmem. Lampy rozbłysły." },
    { type: "image", src: "factory-all-systems-go", alt: "Fabryka działa.", caption: "Wszystkie działy fabryki pracują razem.", prompt: "Old toy factory fully alive: conveyors moving toys, crane lifting crates, sorting channels active, warm magical engineering finale." },
    { type: "text", text: "Z bramy wyjechał pierwszy wózek z zabawkami. Dziadek miał mokre oczy." },
    { type: "text", text: "— Pamiętacie? — spytał. — Najlepszy konstruktor najpierw obserwuje." },
    { type: "image", src: "grandfather-proud-finale", alt: "Dziadek dumny z drużyny.", caption: "Dziadek i drużyna świętują uruchomienie fabryki.", prompt: "Grandfather smiling proudly with Max, Kuba, Lena, Sara in revived toy factory, warm emotional ending." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Mechanizmy ożywają, kiedy ludzie słuchają, myślą i działają razem.”" },
    { type: "text", text: "***MISJA 8 — UKOŃCZONA***" },
    { type: "image", src: "cliff-08-museum-opening", alt: "Otwarcie muzeum.", caption: "Fabryka jutro otwiera się jako muzeum.", prompt: "Closing cliff: restored toy factory gate prepared for museum opening, dawn light, hopeful future." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Maszyny to tylko połowa pracy. Druga połowa to ludzie, którzy umieją pytać: dlaczego? Jeśli pytają, fabryka żyje.”" }
  ],
  words: [
    { term: "Synchronizacja", icon: "book", what: "Wspólne działanie wielu mechanizmów.", why: "Pozwala fabryce pracować płynnie.", remember: "Razem znaczy mocniej.", ua: { what: "Синхронізація.", why: "Погоджена робота.", remember: "Разом." } },
    { term: "Sekwencja", icon: "book", what: "Ustalona kolejność działań.", why: "Chroni przed chaosem.", remember: "Krok po kroku.", ua: { what: "Послідовність.", why: "Порядок.", remember: "Кроки." } },
    { term: "Muzeum", icon: "book", what: "Miejsce pamięci i nauki.", why: "Pokazuje historię innym.", remember: "Wiedza zostaje.", ua: { what: "Музей.", why: "Пам'ять.", remember: "Історія." } }
  ],
  fact: "Wielkie systemy działają najlepiej, gdy wszystkie elementy startują w dobrej kolejności.",
  questions: [
    { tag: "Z tekstu", prompt: "Co uruchomił Max?", sample: "Główną dźwignię fabryki." },
    { tag: "Z tekstu", prompt: "Co zaczęło działać razem?", sample: "Taśma, dźwig, sortownia i lampy." },
    { tag: "Z tekstu", prompt: "Co powiedział dziadek?", sample: "Najlepszy konstruktor najpierw obserwuje." },
    { tag: "Z tekstu", prompt: "Jak kończy się książka?", sample: "Fabryka żyje i otwiera się jako muzeum." },
    { tag: "O temacie", prompt: "Po co jest sekwencja uruchamiania?", sample: "Żeby system działał bez chaosu." },
    { tag: "O temacie", prompt: "Co jest ważne oprócz maszyn?", sample: "Ludzie, którzy myślą i współpracują." },
    { tag: "O temacie", prompt: "Jaka jest główna idea książki?", sample: "Najpierw obserwacja i zrozumienie przyczyny." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Najpierw obserwacja, potem działanie.", answer: true }, { text: "Pośpiech jest najlepszym narzędziem.", answer: false }, { text: "Drużyna szuka przyczyn.", answer: true }, { text: "Błędy mogą czegoś nauczyć.", answer: true }, { text: "Motto książki promuje zgadywanie.", answer: false }, { text: "Dziennik inżyniera daje wskazówki.", answer: true }, { text: "Każdy mechanizm ma swój powód.", answer: true } ], success: "Brawo!", hint: "tekst" },
    { type: "match", title: "Połącz", pairs: [ { left: "obserwacja", right: "uważne patrzenie" }, { left: "diagnoza", right: "szukanie przyczyny" }, { left: "mechanizm", right: "współpraca części" }, { left: "inżynier", right: "myślenie" } ], options: ["uważne patrzenie", "szukanie przyczyny", "współpraca części", "myślenie", "przypadek"], success: "Dobrze!", hint: "pojęcia" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najpierw ...", answer: "obserwuje", accept: ["obserwuje", "Obserwuje"] }, { prompt: "Każdy mechanizm ma swój ...", answer: "powód", accept: ["powód", "Powód", "powod", "Powod"] }, { prompt: "Szukanie źródła błędu to ...", answer: "diagnoza", accept: ["diagnoza", "Diagnoza"] } ], success: "Super!", hint: "motto" },
    { type: "open", typeLabel: "Praktyczne", title: "Mój plan", prompt: "Wypisz 3 kroki naprawy bez pośpiechu.", sample: "Obserwuję, sprawdzam przyczynę, testuję.", success: "Świetnie!", hint: "" }
  ],
  summary: ["Fabryka ISKRA znów działa.", "Drużyna kończy misję sukcesem.", "Muzeum otwiera nowy rozdział historii."],
  next: null
};
