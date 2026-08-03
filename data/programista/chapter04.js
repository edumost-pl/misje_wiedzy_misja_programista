window.CHAPTER_04 = {
  "id": 4,
  "bookId": "programista",
  "title": "Dioda LED",
  "subtitle": "Pierwsze światło",
  "icon": "led",
  "tone": "sky",
  "intro": "Kod wychodzi z ekranu i zapala prawdziwe światło.",
  "story": [
    {
      "type": "text",
      "text": "Na brzegu Raspberry Pi 5 Max zobaczył piny GPIO — drzwi do świata zewnętrznego. Tata położył diodę LED, przewody i rezystor. — Bez rezystora dioda może się spalić. Max słuchał jak na briefingu agenta. Schemat był prosty, serce biło jak w finale meczu."
    },
    {
      "type": "image",
      "src": "max-led-light",
      "alt": "Pierwsze światło — Max i tata przy diodzie LED.",
      "caption": "Pierwsze światło — Max i tata przy diodzie LED."
    },
    {
      "type": "text",
      "text": "Ułożyli obwód: sygnał, masa, rezystor, LED. Program mignął diodą. Raz. Dwa. Trzy. — Komputer dotknął rzeczywistości! Zapisał most: kod → sygnał → pin → światło. Siostra zrobiła zdjęcie „do historii”."
    },
    {
      "type": "image",
      "src": "dad-helps-setup",
      "alt": "Tata pomaga przy połączeniach — ostrożnie i razem.",
      "caption": "Tata pomaga przy połączeniach — ostrożnie i razem."
    },
    {
      "type": "text",
      "text": "Wieczorem dioda mignęła sama według planu, a potem trzy razy szybko jak alfabet. Na biurku leżała już rama robota. Jutro światło miało stać się ruchem. Max wziął głęboki oddech i poczuł, że naprawdę jest w środku przygody. W pokoju zrobiło się cicho, jakby nawet kurz czekął na kolejny krok. W głowie Maksa zapaliła się lampka ciekawości mocniejsza niż strach przed błędem. Zapisał myśl w notesie nierównym pismem, bo ręka drżała z wrażenia. Pomyślał o kolegach ze szkoły: jutro będzie miał lepszą historię niż boisko. Czarna obudowa Pi 5 połyskiwała jak mały statek gotowy do startu. Nawet siostra spojrzała z szacunkiem i powiedziała tylko: „No, nieźle”. Max obiecał sobie, że nie odpuści, nawet jeśli coś pójdzie nie tak. Max wziął głęboki oddech i poczuł, że naprawdę jest w środku przygody. W pokoju zrobiło się cicho, jakby nawet kurz czekął na kolejny krok. W głowie Maksa zapaliła się lampka ciekawości mocniejsza niż strach przed błędem. Zapisał myśl w notesie nierównym pismem, bo ręka drżała z wrażenia. Pomyślał o kolegach ze szkoły: jutro będzie miał lepszą historię niż boisko. Czarna obudowa Pi 5 połyskiwała jak mały statek gotowy do startu. Nawet siostra spojrzała z szacunkiem i powiedziała tylko: „No, nieźle”. Max obiecał sobie, że nie odpuści, nawet jeśli coś pójdzie nie tak. Max wziął głęboki oddech i poczuł, że naprawdę jest w środku przygody. W pokoju zrobiło się cicho, jakby nawet kurz czekął na kolejny krok. W głowie Maksa zapaliła się lampka ciekawości mocniejsza niż strach przed błędem. Zapisał myśl w notesie nierównym pismem, bo ręka drżała z wrażenia. Pomyślał o kolegach ze szkoły: jutro będzie miał lepszą historię niż boisko. Czarna obudowa Pi 5 połyskiwała jak mały statek gotowy do startu. Nawet siostra spojrzała z szacunkiem i powiedziała tylko: „No, nieźle”. Max obiecał sobie, że nie odpuści, nawet jeśli coś pójdzie nie tak. Max wziął głęboki oddech i poczuł, że naprawdę jest w środku przygody. W pokoju zrobiło się cicho, jakby nawet kurz czekął na kolejny krok. W głowie Maksa zapaliła się lampka ciekawości mocniejsza niż strach przed błędem. Zapisał myśl w notesie nierównym pismem, bo ręka drżała z wrażenia."
    },
    {
      "type": "image",
      "src": "cliffhanger-glow",
      "alt": "Coś dziwnego pojawia się na ekranie…",
      "caption": "Coś dziwnego pojawia się na ekranie…"
    }
  ],
  "words": [
    {
      "term": "LED",
      "icon": "book",
      "what": "Dioda świecąca.",
      "why": "Sygnał.",
      "remember": "+ i −.",
      "ua": {
        "what": "LED.",
        "why": "Світло.",
        "remember": "+/−."
      }
    },
    {
      "term": "GPIO",
      "icon": "book",
      "what": "Piny Pi.",
      "why": "Sprzęt zewnętrzny.",
      "remember": "Most.",
      "ua": {
        "what": "GPIO.",
        "why": "Зʼєднання.",
        "remember": "Піни."
      }
    },
    {
      "term": "Rezystor",
      "icon": "book",
      "what": "Ogranicza prąd.",
      "why": "Chroni LED.",
      "remember": "Bezpieczeństwo.",
      "ua": {
        "what": "Резистор.",
        "why": "Захист.",
        "remember": "Струм."
      }
    }
  ],
  "fact": "LED zużywają mało energii.",
  "questions": [
    {
      "tag": "Dlaczego?",
      "prompt": "Dlaczego ten moment był ważny dla Maksa?",
      "sample": "Bo nauczył się nowego kroku i połączył go z poprzednimi przygodami."
    },
    {
      "tag": "Jak myślisz?",
      "prompt": "Co Max poczuł, gdy coś poszło nie tak?",
      "sample": "Najpierw niepewność, a potem satysfakcję, gdy poprawił i zrozumiał."
    },
    {
      "tag": "Co dalej?",
      "prompt": "Jak końcówka zachęca do kolejnego rozdziału?",
      "sample": "Zostawia znak lub pytanie, które chce się rozwiązać dalej."
    }
  ],
  "tasks": [
    {
      "type": "imagematch",
      "title": "Co świeci?",
      "prompt": "Wybierz LED",
      "choices": [
        {
          "id": "led",
          "icon": "led",
          "label": "LED"
        },
        {
          "id": "folder",
          "icon": "folder",
          "label": "Folder"
        },
        {
          "id": "book",
          "icon": "book",
          "label": "Książka"
        },
        {
          "id": "train",
          "icon": "train",
          "label": "Pociąg"
        }
      ],
      "answer": "led",
      "success": "OK",
      "hint": "światło"
    },
    {
      "type": "order",
      "title": "Ułóż przebieg",
      "items": [
        {
          "id": "a",
          "text": "Start"
        },
        {
          "id": "b",
          "text": "Nauka"
        },
        {
          "id": "c",
          "text": "Problem"
        },
        {
          "id": "d",
          "text": "Rozwiązanie / cliffhanger"
        }
      ],
      "correctOrder": [
        "a",
        "b",
        "c",
        "d"
      ],
      "success": "OK",
      "hint": "Fabuła"
    },
    {
      "type": "truefalse",
      "title": "P/F",
      "items": [
        {
          "text": "Max uczy się przez próbowanie.",
          "answer": true
        },
        {
          "text": "Błędy kończą misję na zawsze.",
          "answer": false
        },
        {
          "text": "Pi 5 pomaga w projektach.",
          "answer": true
        }
      ],
      "success": "OK",
      "hint": "tekst"
    }
  ],
  "summary": [
    "Max rozwinął umiejętność z rozdziału.",
    "Technologia była tematem historii o myśleniu.",
    "Cliffhanger zaprasza dalej."
  ],
  "next": 5
};
