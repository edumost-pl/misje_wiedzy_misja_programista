window.CHAPTER_06 = {
  id: 6,
  bookId: "lego",
  title: "Automatyczna Sortownia",
  subtitle: "Rynny, pochylnie i kierowanie ruchem",
  icon: "flow",
  tone: "sky",
  intro: "Dzieci uruchamiają system, który rozdziela zabawki na różne linie.",
  story: [
    { type: "text", text: "Sortownia wyglądała jak labirynt rynien. Każda zabawka miała trafić do innego pudełka." },
    { type: "image", src: "sorting-hall-overview", alt: "Sortownia.", caption: "Labirynt rynien i prowadnic.", prompt: "Old toy sorting hall with ramps and chutes, children looking at branching paths." },
    { type: "text", text: "Sara zauważyła, że jedna pochylnia jest zbyt stroma. Auta spadały zbyt szybko." },
    { type: "text", text: "Kuba dodał prowadnicę. Lena zaznaczyła kolorem nowe trasy." },
    { type: "image", src: "ramp-angle-adjust", alt: "Zmiana kąta pochylni.", caption: "Mniejszy kąt daje większą kontrolę.", prompt: "Children adjusting ramp angle and side guide rails for toy sorting machine." },
    { type: "text", text: "Po poprawce kulki i auta jechały spokojnie do odpowiednich skrzynek." },
    { type: "image", src: "sorting-success", alt: "Sortowanie działa.", caption: "Sortownia rozdziela zabawki poprawnie.", prompt: "Toy balls and cars sorted into separate bins by mechanical channels, kids smiling." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Kierunek i prędkość trzeba oswoić, nie pokonać siłą.”" },
    { type: "text", text: "***MISJA 6 — UKOŃCZONA***" },
    { type: "image", src: "cliff-06-all-lines-stop", alt: "Lampka awarii.", caption: "Nagle wszystkie linie stają.", prompt: "Cliffhanger: red warning lamp in old factory as all conveyor lines stop at once." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Gdy kulki wypadały z rynny, winny był kąt. Czasem milimetr zmiany jest lepszy niż godzina siłowania.”" }
  ],
  words: [
    { term: "Pochylnia", icon: "book", what: "Nachylona powierzchnia dla ruchu obiektów.", why: "Steruje prędkością.", remember: "Kąt ma znaczenie.", ua: { what: "Похила площина.", why: "Керує рухом.", remember: "Кут." } },
    { term: "Prowadnica", icon: "book", what: "Element trzymający obiekt na trasie.", why: "Zapobiega wypadaniu.", remember: "Utrzymuj tor ruchu.", ua: { what: "Напрямна.", why: "Тримає траєкторію.", remember: "Контроль." } },
    { term: "Sortowanie", icon: "book", what: "Rozdzielanie elementów według cech.", why: "Usprawnia pracę fabryki.", remember: "Każdy obiekt ma swój tor.", ua: { what: "Сортування.", why: "Порядок.", remember: "Окремі траси." } }
  ],
  fact: "Kąt nachylenia wpływa na prędkość — mniejszy kąt zwykle daje większą kontrolę ruchu.",
  questions: [
    { tag: "Z tekstu", prompt: "Co było nie tak z sortownią?", sample: "Jedna pochylnia była zbyt stroma." },
    { tag: "Z tekstu", prompt: "Jak drużyna to naprawiła?", sample: "Zmieniła kąt i dodała prowadnicę." },
    { tag: "Z tekstu", prompt: "Co stało się na końcu?", sample: "Wszystkie linie nagle stanęły." },
    { tag: "Z tekstu", prompt: "Jaki był wniosek Maksa?", sample: "Kierunek i prędkość trzeba kontrolować." },
    { tag: "O temacie", prompt: "Po co prowadnica?", sample: "Aby elementy nie wypadały z toru." },
    { tag: "O temacie", prompt: "Dlaczego kąt jest ważny?", sample: "Zmienia szybkość i stabilność ruchu." },
    { tag: "O temacie", prompt: "Co sugeruje cliffhanger?", sample: "Nadchodzi wielka awaria." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Najpierw obserwacja, potem działanie.", answer: true }, { text: "Pośpiech jest najlepszym narzędziem.", answer: false }, { text: "Drużyna szuka przyczyn.", answer: true }, { text: "Błędy mogą czegoś nauczyć.", answer: true }, { text: "Motto książki promuje zgadywanie.", answer: false }, { text: "Dziennik inżyniera daje wskazówki.", answer: true }, { text: "Każdy mechanizm ma swój powód.", answer: true } ], success: "Brawo!", hint: "tekst" },
    { type: "match", title: "Połącz", pairs: [ { left: "obserwacja", right: "uważne patrzenie" }, { left: "diagnoza", right: "szukanie przyczyny" }, { left: "mechanizm", right: "współpraca części" }, { left: "inżynier", right: "myślenie" } ], options: ["uważne patrzenie", "szukanie przyczyny", "współpraca części", "myślenie", "przypadek"], success: "Dobrze!", hint: "pojęcia" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najpierw ...", answer: "obserwuje", accept: ["obserwuje", "Obserwuje"] }, { prompt: "Każdy mechanizm ma swój ...", answer: "powód", accept: ["powód", "Powód", "powod", "Powod"] }, { prompt: "Szukanie źródła błędu to ...", answer: "diagnoza", accept: ["diagnoza", "Diagnoza"] } ], success: "Super!", hint: "motto" },
    { type: "open", typeLabel: "Praktyczne", title: "Mój plan", prompt: "Wypisz 3 kroki naprawy bez pośpiechu.", sample: "Obserwuję, sprawdzam przyczynę, testuję.", success: "Świetnie!", hint: "" }
  ],
  summary: ["Sortownia działa.", "Kąt i prowadnice mają znaczenie.", "Nagle wszystko staje."],
  next: 7
};
