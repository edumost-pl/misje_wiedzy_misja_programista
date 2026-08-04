window.CHAPTER_03 = {
  id: 3,
  bookId: "lego",
  title: "Zagubione Koło",
  subtitle: "Brakujący element",
  icon: "gear",
  tone: "sky",
  intro: "Jedna część zniknęła. Bez niej cała linia staje.",
  story: [
    { type: "text", text: "Skrzynka z częściami miała puste miejsce. Tylko odcisk kurzu po kole." },
    { type: "text", text: "Max: — Nie zgadujemy. Szukamy śladów." },
    { type: "image", src: "missing-gear-slot", alt: "Puste miejsce po kole.", caption: "Brakuje jednego koła zębatego.", prompt: "Old parts box with one empty shaped slot for gear, kids examining clues with flashlight, detective engineering mood." },
    { type: "text", text: "Lena porównała rysunek z maszyną. Sara policzyła ząbki na sąsiednim kole." },
    { type: "text", text: "Kuba: — To da się naprawić... jak znajdziemy właściwy rozmiar." },
    { type: "image", src: "measure-gear-teeth", alt: "Liczenie ząbków.", caption: "Dzieci mierzą i liczą ząbki.", prompt: "Children counting gear teeth and measuring diameter with ruler in old factory workshop, focused teamwork." },
    { type: "text", text: "W magazynie znaleźli trzy koła. Tylko jedno pasowało idealnie." },
    { type: "image", src: "right-gear-fit", alt: "Dobrane koło.", caption: "Właściwe koło pasuje idealnie.", prompt: "Close-up gear fitting perfectly into mechanism, Max and Kuba smiling relief, warm workshop light." },
    { type: "text", text: "📓 NOTATNIK MAKSA: „Nie wszystko, co wygląda podobnie, pasuje.”" },
    { type: "text", text: "***MISJA 3 — UKOŃCZONA***" },
    { type: "image", src: "cliff-03-crane-silent", alt: "Cichy dźwig.", caption: "Kolejny dział: dźwig, który nie podnosi.", prompt: "Cliffhanger old mechanical crane in next hall, hooks hanging still, dramatic warm-cool contrast." },
    { type: "text", text: "📖 Dziennik Głównego Inżyniera: „Praktykant chciał większe koło, bo 'mocniejsze'. Pasował tylko właściwy wymiar. Inżynieria to nie zgadywanka.”" }
  ],
  words: [
    { term: "Wymiar", icon: "book", what: "Dokładny rozmiar części.", why: "Od niego zależy dopasowanie.", remember: "Milimetry robią różnicę.", ua: { what: "Розмір.", why: "Точність.", remember: "Міліметри." } },
    { term: "Dopasowanie", icon: "book", what: "Zgodność elementów.", why: "Bez dopasowania brak ruchu.", remember: "Podobne to nie to samo.", ua: { what: "Підбір.", why: "Сумісність.", remember: "Точно." } },
    { term: "Ślad", icon: "book", what: "Wskazówka po części.", why: "Pomaga znaleźć brakujący element.", remember: "Patrz uważnie.", ua: { what: "Слід.", why: "Підказка.", remember: "Спостерігай." } }
  ],
  fact: "W mechanice nawet różnica jednego milimetra może zmienić działanie przekładni.",
  questions: [
    { tag: "Z tekstu", prompt: "Co zniknęło w rozdziale 3?", sample: "Koło zębate." },
    { tag: "Z tekstu", prompt: "Jak dzieci wybrały część?", sample: "Porównały rysunek i policzyły ząbki." },
    { tag: "Z tekstu", prompt: "Co mówił Kuba?", sample: "To da się naprawić." },
    { tag: "Z tekstu", prompt: "Co czekało w kolejnym dziale?", sample: "Dźwig, który nie podnosił." },
    { tag: "O temacie", prompt: "Dlaczego rozmiar części jest ważny?", sample: "Bo część musi idealnie pasować." },
    { tag: "O temacie", prompt: "Czy można zgadywać przy naprawie?", sample: "Lepiej nie, trzeba mierzyć i sprawdzać." },
    { tag: "O temacie", prompt: "Co rozwija ten rozdział?", sample: "Myślenie przestrzenne i dokładność." }
  ],
  tasks: [
    { type: "truefalse", title: "Prawda czy fałsz?", items: [ { text: "Najpierw obserwacja, potem naprawa.", answer: true }, { text: "Pośpiech zawsze pomaga.", answer: false }, { text: "Drużyna szuka przyczyny.", answer: true }, { text: "Kuba lubi mówić: To da się naprawić.", answer: true }, { text: "Błędy niczego nie uczą.", answer: false }, { text: "Wpis inżyniera daje wskazówkę.", answer: true }, { text: "Każdy mechanizm ma swój powód.", answer: true } ], success: "Brawo!", hint: "treść" },
    { type: "match", title: "Połącz", pairs: [ { left: "obserwacja", right: "szukanie śladów" }, { left: "diagnoza", right: "przyczyna problemu" }, { left: "mechanizm", right: "współpraca części" }, { left: "dziadek", right: "najpierw głowa" } ], options: ["szukanie śladów", "przyczyna problemu", "współpraca części", "najpierw głowa", "hałas"], success: "Dobrze!", hint: "słowa" },
    { type: "fill", title: "Uzupełnij", items: [ { prompt: "Najlepszy konstruktor najpierw ...", answer: "obserwuje", accept: ["obserwuje", "Obserwuje"] }, { prompt: "Szukanie źródła to ...", answer: "diagnoza", accept: ["diagnoza", "Diagnoza"] }, { prompt: "Mechanizm ma swój ...", answer: "powód", accept: ["powód", "Powod", "Powód"] } ], success: "Super!", hint: "motto" },
    { type: "find", typeLabel: "Błąd", title: "Które zdanie jest FAŁSZYWE?", options: [ { id: "a", text: "Warto mierzyć i sprawdzać" }, { id: "b", text: "Wymiana na ślepo jest najlepsza" }, { id: "c", text: "Drużyna pracuje razem" } ], answer: "b", success: "Masz to!", hint: "metoda" },
    { type: "imagematch", title: "Dopasuj ikonę", prompt: "Ikona rozdziału:", choices: [ { id: "gear", icon: "gear", label: "gear" }, { id: "rocket", icon: "rocket", label: "rocket" }, { id: "dino", icon: "dino", label: "dino" } ], answer: "gear", success: "Brawo!", hint: "ikona" },
    { type: "open", typeLabel: "Praktyczne", title: "Twój plan", prompt: "Wypisz 3 kroki diagnozy problemu.", sample: "Obserwuję, mierzę, testuję.", success: "Świetnie!", hint: "" }
  ],
  summary: ["Drużyna znajduje brakujące koło.", "Dokładny wymiar ratuje mechanizm.", "Następny dział: dźwig."],
  next: 4
};
