window.CHAPTER_02 = {
  id: 2,
  bookId: "lego",
  title: "Taśma Produkcyjna",
  subtitle: "Koła zębate i ruch",
  icon: "settings",
  tone: "sky",
  intro: "Drużyna próbuje uruchomić pierwszą taśmę i odkrywa, jak działa przekładnia.",
  story: [
    { type: "text", text: "W sterowni pachniało olejem i kurzem. Taśma stała nieruchomo jak zamarznięta rzeka." },
    { type: "text", text: "Kuba od razu: — To da się naprawić. Chyba..." },
    { type: "text", text: "Dziadek uniósł młotek i roześmiał się: — Spokojnie. Najpierw głowa, potem narzędzia." },
    { type: "image", src: "conveyor-room-start", alt: "Dzieci przy starej taśmie.", caption: "Pierwsza próba uruchomienia taśmy.", prompt: "Warm cinematic children's illustration, old toy factory control room, Max Kuba Lena with grandfather near stopped conveyor, dusty gears, curious faces." },
    { type: "text", text: "Sara zauważyła, że małe koło obraca się w złą stronę. Lena narysowała strzałki na kartce." },
    { type: "text", text: "Max przekręcił jedno koło zębate o jeden ząbek. Klik." },
    { type: "image", src: "gear-direction-fix", alt: "Korekta kierunku kół.", caption: "Jeden ząbek zmienia cały kierunek ruchu.", prompt: "Close-up of interlocking gears, Max hand adjusting one gear tooth, Lena sketching arrows, precise engineering moment." },
    { type: "text", text: "Taśma ruszyła powoli. Potem pewniej. Małe drewniane klocki pojechały dalej." },
    { type: "image", src: "first-moving-conveyor", alt: "Taśma rusza.", caption: "Taśma produkcyjna znów działa.", prompt: "Toy conveyor belt moving wooden toy blocks in old factory, kids cheering, warm light and dust particles." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Jedna mała zmiana może poruszyć całą maszynę.”" },
    { type: "text", text: "***MISJA 2 — UKOŃCZONA***" },
    { type: "image", src: "cliff-02-missing-part-bin", alt: "Pusta skrzynka na części.", caption: "W skrzynce brakuje ważnej części.", prompt: "Cliffhanger: labeled parts bin with one empty slot, worried kids in background, mystery in workshop light." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Gdy taśma stanęła, winny był jeden ząbek. Mechanizmy uczą pokory: drobiazg zmienia wszystko.”" }
  ],
  words: [
    { term: "Przekładnia", icon: "book", what: "Układ kół zębatych przenoszących ruch.", why: "Zmienia kierunek i siłę.", remember: "Koło napędza koło.", ua: { what: "Передача.", why: "Передає рух.", remember: "Шестерні." } },
    { term: "Ząbek", icon: "book", what: "Wypustka na kole zębatym.", why: "Łączy się z innym kołem.", remember: "Musi pasować.", ua: { what: "Зубець.", why: "Зчеплення.", remember: "Точність." } },
    { term: "Kierunek", icon: "book", what: "Strona ruchu.", why: "Błędny kierunek blokuje linię.", remember: "Sprawdź strzałki.", ua: { what: "Напрямок.", why: "Рух.", remember: "Стрілки." } }
  ],
  fact: "W przekładniach nawet jedno źle ustawione koło potrafi zatrzymać cały układ.",
  questions: [
    { tag: "Z tekstu", prompt: "Co pomogło uruchomić taśmę?", sample: "Poprawienie jednego koła zębatego o ząbek." },
    { tag: "Z tekstu", prompt: "Co powiedział dziadek o młotku?", sample: "Najpierw głowa, potem narzędzia." },
    { tag: "Z tekstu", prompt: "Co robiła Lena?", sample: "Rysowała strzałki kierunku." },
    { tag: "Z tekstu", prompt: "Co odkryli na końcu?", sample: "Brak ważnej części w skrzynce." },
    { tag: "O temacie", prompt: "Po co są przekładnie?", sample: "Aby przenosić ruch i zmieniać kierunek." },
    { tag: "O temacie", prompt: "Dlaczego drobiazgi są ważne?", sample: "Bo mała część wpływa na cały mechanizm." },
    { tag: "O temacie", prompt: "Czemu nie warto naprawiać na siłę?", sample: "Bo bez zrozumienia można pogorszyć problem." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Taśma na początku stała.", answer: true }, { text: "Dziadek kazał od razu użyć młotka.", answer: false }, { text: "Kuba mówi: To da się naprawić.", answer: true }, { text: "Lena rysuje strzałki.", answer: true }, { text: "Nie brakowało żadnej części.", answer: false }, { text: "Jeden ząbek miał znaczenie.", answer: true }, { text: "Taśma ruszyła.", answer: true } ], success: "Brawo!", hint: "historia" },
    { type: "match", title: "Połącz", pairs: [ { left: "Przekładnia", right: "koła zębate" }, { left: "Ząbek", right: "mały element koła" }, { left: "Dziadek", right: "najpierw głowa" }, { left: "Taśma", right: "transport zabawek" } ], options: ["koła zębate", "mały element koła", "najpierw głowa", "transport zabawek", "deszcz"], success: "Dobrze!", hint: "pojęcia" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Układ kół to ...", answer: "przekładnia", accept: ["przekładnia", "Przekładnia"] }, { prompt: "Najpierw ..., potem narzędzia.", answer: "głowa", accept: ["głowa", "Głowa"] }, { prompt: "Brakowało jednej ...", answer: "części", accept: ["części", "część"] } ], success: "Super!", hint: "tekst" },
    { type: "order", title: "Kolejność", items: [ { id: "a", text: "Taśma stoi" }, { id: "b", text: "Sprawdzają koła" }, { id: "c", text: "Poprawiają ząbek" }, { id: "d", text: "Taśma rusza" } ], correctOrder: ["a", "b", "c", "d"], success: "Tak!", hint: "etapy" },
    { type: "find", typeLabel: "Co dalej?", title: "Pusta skrzynka części oznacza...", options: [ { id: "a", text: "nową zagadkę" }, { id: "b", text: "koniec fabryki" }, { id: "c", text: "brak problemu" } ], answer: "a", success: "Dokładnie!", hint: "cliff" },
    { type: "find", typeLabel: "Błąd", title: "FAŁSZ?", options: [ { id: "a", text: "Jeden ząbek może zmienić ruch" }, { id: "b", text: "Pośpiech jest najważniejszy" }, { id: "c", text: "Dziadek uczy myślenia" } ], answer: "b", success: "Tak!", hint: "motto" },
    { type: "imagematch", title: "Ikona", prompt: "Wskaż ikonę rozdziału:", choices: [ { id: "settings", icon: "settings", label: "settings" }, { id: "rocket", icon: "rocket", label: "rocket" }, { id: "dino", icon: "dino", label: "dino" } ], answer: "settings", success: "Brawo!", hint: "mechanika" },
    { type: "open", typeLabel: "Kreatywne", title: "Mały detal", prompt: "Narysuj albo opisz koło zębate z 6 ząbkami.", sample: "Koło ma równe ząbki i obraca się w prawo.", success: "Świetnie!", hint: "" },
    { type: "open", typeLabel: "Praktyczne", title: "Checklista", prompt: "Wypisz 3 kroki przed uruchomieniem taśmy.", sample: "Sprawdź koła, kierunek, brakujące części.", success: "Dobrze!", hint: "" },
    { type: "find", typeLabel: "Cytat", title: "Kto powiedział: „Spokojnie”?", options: [ { id: "a", text: "Dziadek" }, { id: "b", text: "Max" }, { id: "c", text: "Lena" } ], answer: "a", success: "Tak!", hint: "mentor" }
  ],
  summary: ["Taśma rusza dzięki poprawce przekładni.", "Drużyna działa spokojniej.", "Brakuje części do kolejnego etapu."],
  next: 3
};
