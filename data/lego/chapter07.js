window.CHAPTER_07 = {
  id: 7,
  bookId: "lego",
  title: "Wielka Awaria",
  subtitle: "Inżynierski detektyw",
  icon: "electronics",
  tone: "sky",
  intro: "Prawie wszystko działa. Jedna mała usterka zatrzymuje całą fabrykę.",
  story: [
    { type: "text", text: "Lampy migały. Taśmy stały. Dźwig milczał. Sortownia zamarła." },
    { type: "image", src: "full-stop-factory", alt: "Cała fabryka stoi.", caption: "Jedna awaria zatrzymała wszystkie działy.", prompt: "Old toy factory with all lines stopped, warning lights, kids worried but focused." },
    { type: "text", text: "Max podzielił zadania: Sara sprawdza sygnał, Kuba mechanikę, Lena przepływ trasy, dziadek dokumentację." },
    { type: "text", text: "Kuba: — To da się naprawić... chyba. Ale najpierw znajdźmy źródło." },
    { type: "image", src: "detective-diagnosis-board", alt: "Tablica diagnozy.", caption: "Drużyna zbiera ślady i hipotezy.", prompt: "Children and grandfather building diagnosis board with arrows, sketches, machine parts, detective engineering vibe." },
    { type: "text", text: "Okazało się, że winna była mała sprężynka w przełączniku głównym. Bez niej sygnał nie wracał." },
    { type: "image", src: "tiny-spring-found", alt: "Znaleziona sprężynka.", caption: "Mała sprężynka była kluczem do awarii.", prompt: "Close-up tiny spring in old switch mechanism, Max holding it with tweezers, relief moment." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Największe awarie czasem mają najmniejszą przyczynę.”" },
    { type: "text", text: "***MISJA 7 — UKOŃCZONA***" },
    { type: "image", src: "cliff-07-main-lever-ready", alt: "Główna dźwignia startu.", caption: "Przed nimi wspólne uruchomienie całej fabryki.", prompt: "Cliffhanger main startup lever in control room, everyone ready around it, suspenseful warm glow." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Przez dzień wymienialiśmy silniki. Winna była sprężynka. Pamiętaj: skala skutku nie mówi o skali przyczyny.”" }
  ],
  words: [
    { term: "Awaria", icon: "book", what: "Nagłe zatrzymanie działania.", why: "Wymaga szybkiej diagnozy.", remember: "Spokój najpierw.", ua: { what: "Аварія.", why: "Зупинка.", remember: "Спокій." } },
    { term: "Hipoteza", icon: "book", what: "Przypuszczenie o przyczynie.", why: "Porządkuje szukanie.", remember: "Sprawdzaj po kolei.", ua: { what: "Гіпотеза.", why: "Версія.", remember: "Перевірка." } },
    { term: "Przełącznik", icon: "book", what: "Element zmieniający stan obwodu.", why: "Steruje uruchamianiem.", remember: "Małe części, duży efekt.", ua: { what: "Перемикач.", why: "Керує ланцюгом.", remember: "Деталь." } }
  ],
  fact: "W diagnostyce technicznej często pomaga dzielenie problemu na małe kroki i sprawdzanie hipotez jedna po drugiej.",
  questions: [
    { tag: "Z tekstu", prompt: "Co zatrzymało fabrykę?", sample: "Awaria związana z małą sprężynką." },
    { tag: "Z tekstu", prompt: "Jak Max zorganizował pracę?", sample: "Podzielił zadania między członków drużyny." },
    { tag: "Z tekstu", prompt: "Jaka część była winna?", sample: "Sprężynka w przełączniku głównym." },
    { tag: "Z tekstu", prompt: "Co było cliffhangerem?", sample: "Główna dźwignia startu całej fabryki." },
    { tag: "O temacie", prompt: "Po co hipotezy?", sample: "By logicznie sprawdzać możliwe przyczyny." },
    { tag: "O temacie", prompt: "Dlaczego mała część bywa kluczowa?", sample: "Bo może wpływać na cały system." },
    { tag: "O temacie", prompt: "Jaka cecha pomogła drużynie?", sample: "Spokój i współpraca." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Najpierw obserwacja, potem działanie.", answer: true }, { text: "Pośpiech jest najlepszym narzędziem.", answer: false }, { text: "Drużyna szuka przyczyn.", answer: true }, { text: "Błędy mogą czegoś nauczyć.", answer: true }, { text: "Motto książki promuje zgadywanie.", answer: false }, { text: "Dziennik inżyniera daje wskazówki.", answer: true }, { text: "Każdy mechanizm ma swój powód.", answer: true } ], success: "Brawo!", hint: "tekst" },
    { type: "match", title: "Połącz", pairs: [ { left: "obserwacja", right: "uważne patrzenie" }, { left: "diagnoza", right: "szukanie przyczyny" }, { left: "mechanizm", right: "współpraca części" }, { left: "inżynier", right: "myślenie" } ], options: ["uważne patrzenie", "szukanie przyczyny", "współpraca części", "myślenie", "przypadek"], success: "Dobrze!", hint: "pojęcia" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najpierw ...", answer: "obserwuje", accept: ["obserwuje", "Obserwuje"] }, { prompt: "Każdy mechanizm ma swój ...", answer: "powód", accept: ["powód", "Powód", "powod", "Powod"] }, { prompt: "Szukanie źródła błędu to ...", answer: "diagnoza", accept: ["diagnoza", "Diagnoza"] } ], success: "Super!", hint: "motto" },
    { type: "open", typeLabel: "Praktyczne", title: "Mój plan", prompt: "Wypisz 3 kroki naprawy bez pośpiechu.", sample: "Obserwuję, sprawdzam przyczynę, testuję.", success: "Świetnie!", hint: "" }
  ],
  summary: ["Drużyna rozwiązuje wielką awarię.", "Przyczyną była mała sprężynka.", "Czas uruchomić całą fabrykę."],
  next: 8
};
