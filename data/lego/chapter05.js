window.CHAPTER_05 = {
  id: 5,
  bookId: "lego",
  title: "Most dla Zabawek",
  subtitle: "Stabilność konstrukcji",
  icon: "stem",
  tone: "sky",
  intro: "Tor urywa się nad szczeliną. Trzeba zbudować most dla małych pojazdów.",
  story: [
    { type: "text", text: "Taśma dowiozła zabawki do przerwy w podłodze. Dalej nie było drogi." },
    { type: "image", src: "gap-on-track", alt: "Przerwa na torze.", caption: "Tor kończy się nad szczeliną.", prompt: "Old toy track ending over a gap in factory floor, children observing and planning bridge." },
    { type: "text", text: "Lena narysowała trzy wersje mostu. Kuba chciał najwyższy. Sara wybrała najstabilniejszy." },
    { type: "text", text: "Max położył klocki w trójkąty, a podpory wsunął pod spód." },
    { type: "image", src: "bridge-triangle-design", alt: "Projekt mostu.", caption: "Trójkątne podpory wzmacniają most.", prompt: "Kids building bridge with triangular trusses from construction blocks, engineering teamwork." },
    { type: "text", text: "Pierwsza próba: most drgnął, ale wytrzymał. Druga: dwie cięższe zabawki też przejechały." },
    { type: "image", src: "toys-cross-bridge", alt: "Zabawki przejeżdżają przez most.", caption: "Most działa i wytrzymuje ciężar.", prompt: "Small toy cars crossing newly built bridge in old factory, kids cheering successful test." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Stabilność jest ważniejsza niż wygląd.”" },
    { type: "text", text: "***MISJA 5 — UKOŃCZONA***" },
    { type: "image", src: "cliff-05-sorting-tubes", alt: "Rury sortowni.", caption: "Przed nimi automatyczna sortownia.", prompt: "Cliffhanger with branching chutes and sorting tubes in next hall, mysterious machine waiting." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Najładniejszy most pękł pierwszy. Najprostszy, ale dobrze podparty, pracował latami.”" }
  ],
  words: [
    { term: "Stabilność", icon: "book", what: "Odporność konstrukcji na przechyły.", why: "Chroni przed zawaleniem.", remember: "Dobre podpory to podstawa.", ua: { what: "Стійкість.", why: "Безпека.", remember: "Опора." } },
    { term: "Podpora", icon: "book", what: "Element podtrzymujący most.", why: "Przenosi ciężar.", remember: "Musi stać pewnie.", ua: { what: "Опора.", why: "Тримає вагу.", remember: "Міцність." } },
    { term: "Obciążenie", icon: "book", what: "Ciężar działający na konstrukcję.", why: "Testuje wytrzymałość.", remember: "Sprawdzaj stopniowo.", ua: { what: "Навантаження.", why: "Тест.", remember: "Поступово." } }
  ],
  fact: "Mosty często wykorzystują trójkąty, bo ten kształt dobrze rozkłada siły.",
  questions: [
    { tag: "Z tekstu", prompt: "Co zatrzymało zabawki?", sample: "Przerwa w torze." },
    { tag: "Z tekstu", prompt: "Jaki kształt podpór wybrał Max?", sample: "Trójkątne podpory." },
    { tag: "Z tekstu", prompt: "Co było ważniejsze od wyglądu?", sample: "Stabilność." },
    { tag: "Z tekstu", prompt: "Co czekało dalej?", sample: "Automatyczna sortownia." },
    { tag: "O temacie", prompt: "Po co testować obciążenie?", sample: "Aby sprawdzić, czy most się nie zawali." },
    { tag: "O temacie", prompt: "Czemu trójkąty są mocne?", sample: "Dobrze rozkładają siły." },
    { tag: "O temacie", prompt: "Jaką naukę daje wpis inżyniera?", sample: "Prosty i stabilny projekt bywa najlepszy." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Most był potrzebny do przejazdu.", answer: true }, { text: "Najwyższy most zawsze jest najlepszy.", answer: false }, { text: "Podpory były trójkątne.", answer: true }, { text: "Nie testowali mostu.", answer: false }, { text: "Stabilność była kluczowa.", answer: true }, { text: "Cliffhanger dotyczy sortowni.", answer: true }, { text: "Dziennik chwali pośpiech.", answer: false } ], success: "Brawo!", hint: "sprawdź tekst" },
    { type: "match", title: "Połącz", pairs: [ { left: "stabilność", right: "bezpieczna konstrukcja" }, { left: "podpora", right: "trzyma ciężar" }, { left: "obciążenie", right: "test wytrzymałości" }, { left: "most", right: "droga nad szczeliną" } ], options: ["bezpieczna konstrukcja", "trzyma ciężar", "test wytrzymałości", "droga nad szczeliną", "kolor"], success: "Dobrze!", hint: "pojęcia" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najważniejsza była ...", answer: "stabilność", accept: ["stabilność", "Stabilność"] }, { prompt: "Kształt podpory: ...", answer: "trójkąt", accept: ["trójkąt", "trojkąt", "Trójkąt"] }, { prompt: "Ciężar działający na most to ...", answer: "obciążenie", accept: ["obciążenie", "Obciążenie"] } ], success: "Super!", hint: "słowa" },
    { type: "open", typeLabel: "Praktyczne", title: "Test mostu", prompt: "Wypisz 3 kroki bezpiecznego testowania mostu.", sample: "Lekki test, większy ciężar, obserwacja podpór.", success: "Świetnie!", hint: "" }
  ],
  summary: ["Drużyna buduje stabilny most.", "Zabawki jadą dalej.", "Kolejny etap: sortownia."],
  next: 6
};
