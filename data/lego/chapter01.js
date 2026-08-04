window.CHAPTER_01 = {
  id: 1,
  bookId: "lego",
  title: "Zamknięte Wrota",
  subtitle: "Pierwszy krok do tajemnicy fabryki",
  icon: "search",
  tone: "sky",
  intro: "Max przyjeżdża do dziadka i widzi zamkniętą Fabrykę Zabawek ISKRA.",
  story: [
    { type: "text", text: "Wiosenne wakacje zaczęły się cicho. Max jechał z rodzicami do dziadka przez małe miasteczko." },
    { type: "text", text: "Przy starej ulicy stał ogromny budynek. Nad bramą wisiała rdza: Fabryka Zabawek „ISKRA”." },
    { type: "text", text: "— Dlaczego jest zamknięta? — zapytał Max." },
    { type: "text", text: "Dziadek uśmiechnął się: — Dawno temu powstawały tu najpiękniejsze zabawki. Teraz mało kto pamięta, jak działały maszyny." },
    {
      type: "image",
      src: "lego-factory-rusty-gate",
      alt: "Stara brama fabryki ISKRA.",
      caption: "Stara brama Fabryki Zabawek ISKRA.",
      prompt: "Warm cinematic children's book illustration. Ten-year-old Polish boy Max with messy brown hair, expressive brown eyes, bright blue hoodie (no readable text). Soft painterly style. High-end children's book illustration. Disney/Pixar quality. Warm spring light. Vertical composition. No text. No watermark. 16:10. Max and grandfather in front of huge old toy factory gate with rust and mystery mood."
    },
    { type: "text", text: "Następnego dnia przyszło pismo: fabryka ma stać się muzeum. Najpierw trzeba sprawdzić mechanizmy." },
    { type: "text", text: "— Pomożesz? — zapytał dziadek." },
    { type: "text", text: "— Jasne! — odpowiedział Max, choć serce biło mu szybciej." },
    {
      type: "image",
      src: "letter-and-old-key",
      alt: "List i stary klucz do fabryki.",
      caption: "List o muzeum i stary klucz do bramy.",
      prompt: "Warm cinematic children's book illustration, close shot of old envelope, brass key, dusty workshop table, grandfather hand and Max hand reaching together, cozy engineering mystery."
    },
    { type: "text", text: "Weszli do hali. Kurz tańczył w promieniach słońca. Ogromne taśmy, koła i dźwignie milczały." },
    { type: "text", text: "Na ścianie wisiała tabliczka: „Nie naprawiaj na siłę. Najpierw zrozum.”" },
    {
      type: "image",
      src: "first-hall-machines",
      alt: "Pierwsza hala pełna starych maszyn.",
      caption: "Dzieci widzą pierwszy dział pełen starych mechanizmów.",
      prompt: "Wide old factory hall, dusty conveyors and gears, Max with two friends Kuba and Lena entering with flashlights, wonder and caution."
    },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Tu wszystko ma sens. Trzeba tylko go znaleźć.”" },
    { type: "text", text: "***MISJA 1 — UKOŃCZONA***" },
    {
      type: "image",
      src: "cliff-01-locked-control-room",
      alt: "Zamknięte drzwi do sterowni.",
      caption: "Za halą czekają zamknięte drzwi do sterowni.",
      prompt: "Cliffhanger evening light in old toy factory corridor, locked control room door, glowing indicator lamp, Max looking curious."
    },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Młody praktykant chciał wymienić cały pas. Wystarczyło wyczyścić jedno łożysko. Najpierw przyczyna, potem narzędzie.”" }
  ],
  words: [
    { term: "Mechanizm", icon: "book", what: "Układ części, które współpracują.", why: "Bez współpracy nie działa.", remember: "Części muszą pasować.", ua: { what: "Механізм.", why: "Частини разом.", remember: "Сумісність." } },
    { term: "Obserwacja", icon: "book", what: "Uważne patrzenie przed działaniem.", why: "Pomaga znaleźć przyczynę.", remember: "Najpierw patrz.", ua: { what: "Спостереження.", why: "Причина.", remember: "Спочатку дивись." } },
    { term: "Diagnoza", icon: "book", what: "Szukanie źródła problemu.", why: "Naprawa jest wtedy celna.", remember: "Nie zgaduj.", ua: { what: "Діагноз.", why: "Джерело проблеми.", remember: "Не вгадай." } }
  ],
  fact: "W starych fabrykach często działa zasada: mała usterka może zatrzymać wielką maszynę.",
  questions: [
    { tag: "Z tekstu", prompt: "Jak nazywała się fabryka?", sample: "Fabryka Zabawek ISKRA." },
    { tag: "Z tekstu", prompt: "Po co Max z dziadkiem weszli do hali?", sample: "By sprawdzić mechanizmy przed otwarciem muzeum." },
    { tag: "Z tekstu", prompt: "Co było napisane na tabliczce?", sample: "Nie naprawiaj na siłę. Najpierw zrozum." },
    { tag: "Z tekstu", prompt: "Co mówi wpis inżyniera?", sample: "Najpierw szukać przyczyny, potem naprawiać." },
    { tag: "O temacie", prompt: "Czemu obserwacja jest ważna?", sample: "Bo pomaga znaleźć prawdziwą przyczynę problemu." },
    { tag: "O temacie", prompt: "Czy zawsze trzeba od razu wymieniać część?", sample: "Nie, czasem wystarczy ją oczyścić lub poprawić." },
    { tag: "O temacie", prompt: "Jaki jest główny wróg w tej historii?", sample: "Czas, awarie i błędy, a nie złoczyńca." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Fabryka nazywa się ISKRA.", answer: true }, { text: "Dziadek zabronił Maxowi pomagać.", answer: false }, { text: "W hali było dużo starych maszyn.", answer: true }, { text: "Tabliczka zachęcała do pośpiechu.", answer: false }, { text: "List dotyczył muzeum.", answer: true }, { text: "Max przestraszył się i uciekł.", answer: false }, { text: "Wpis inżyniera mówi o szukaniu przyczyny.", answer: true } ], success: "Brawo!", hint: "sprawdź treść" },
    { type: "match", title: "Połącz", pairs: [ { left: "Fabryka ISKRA", right: "stary budynek" }, { left: "Diagnoza", right: "szukanie przyczyny" }, { left: "Dziadek", right: "inżynier" }, { left: "Motto", right: "najpierw zrozum" } ], options: ["stary budynek", "szukanie przyczyny", "inżynier", "najpierw zrozum", "kolor farby"], success: "Dobrze!", hint: "pamiętaj motto" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najpierw ... , potem naprawa.", answer: "obserwacja", accept: ["obserwacja", "Obserwacja"] }, { prompt: "Fabryka nazywa się ...", answer: "ISKRA", accept: ["ISKRA", "Iskra"] }, { prompt: "Szukanie źródła problemu to ...", answer: "diagnoza", accept: ["diagnoza", "Diagnoza"] } ], success: "Super!", hint: "słowa z rozdziału" },
    { type: "order", title: "Kolejność wydarzeń", items: [ { id: "a", text: "Max widzi fabrykę" }, { id: "b", text: "Przychodzi list o muzeum" }, { id: "c", text: "Wchodzą do hali" }, { id: "d", text: "Czytają tabliczkę" } ], correctOrder: ["a", "b", "c", "d"], success: "Tak!", hint: "co było najpierw?" },
    { type: "find", typeLabel: "Co dalej?", title: "Zamknięte drzwi sterowni sugerują...", options: [ { id: "a", text: "kolejną zagadkę" }, { id: "b", text: "koniec historii" }, { id: "c", text: "wyjazd do domu" } ], answer: "a", success: "Dokładnie!", hint: "cliffhanger" },
    { type: "find", typeLabel: "Znajdź błąd", title: "Które zdanie jest FAŁSZYWE?", options: [ { id: "a", text: "Najpierw trzeba zrozumieć mechanizm" }, { id: "b", text: "Pośpiech pomaga znaleźć przyczynę" }, { id: "c", text: "Fabryka ma zostać muzeum" } ], answer: "b", success: "Masz to!", hint: "motto" },
    { type: "imagematch", title: "Dopasuj ikonę", prompt: "Ikona rozdziału:", choices: [ { id: "search", icon: "search", label: "search" }, { id: "robot", icon: "robot", label: "robot" }, { id: "dino", icon: "dino", label: "dino" } ], answer: "search", success: "Brawo!", hint: "szukamy przyczyn" },
    { type: "open", typeLabel: "Kreatywne", title: "Twoje motto", prompt: "Wymyśl jedno zdanie dla młodego konstruktora.", sample: "Najpierw patrzę, potem działam.", success: "Świetnie!", hint: "" },
    { type: "open", typeLabel: "Praktyczne", title: "Plan wejścia", prompt: "Wypisz 3 rzeczy, które sprawdzisz w starej hali.", sample: "Zasilanie, pasy, koła zębate.", success: "Dobrze!", hint: "" },
    { type: "find", typeLabel: "Cytat", title: "Kto powiedział: „Pomożesz?”", options: [ { id: "a", text: "Dziadek" }, { id: "b", text: "Kuba" }, { id: "c", text: "Lena" } ], answer: "a", success: "Tak!", hint: "początek misji" }
  ],
  summary: ["Max trafia do starej fabryki ISKRA.", "Motto: najpierw zrozum.", "Czeka zamknięta sterownia."],
  next: 2
};
