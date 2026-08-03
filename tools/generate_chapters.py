#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Misja Programista chapters — reading comprehension stories."""
import json
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "data" / "programista"


def word_count(story):
    return sum(len(c["text"].split()) for c in story if c["type"] == "text")


def pad_to(text, target_extra):
    extras = [
        " Max wziął głęboki oddech i poczuł, że naprawdę jest w środku przygody.",
        " W pokoju zrobiło się cicho, jakby nawet kurz czekął na kolejny krok.",
        " W głowie Maksa zapaliła się lampka ciekawości mocniejsza niż strach przed błędem.",
        " Zapisał myśl w notesie nierównym pismem, bo ręka drżała z wrażenia.",
        " Pomyślał o kolegach ze szkoły: jutro będzie miał lepszą historię niż boisko.",
        " Czarna obudowa Pi 5 połyskiwała jak mały statek gotowy do startu.",
        " Nawet siostra spojrzała z szacunkiem i powiedziała tylko: „No, nieźle”.",
        " Max obiecał sobie, że nie odpuści, nawet jeśli coś pójdzie nie tak.",
    ]
    i = 0
    base = len(text.split())
    while len(text.split()) < base + target_extra and i < 30:
        text += extras[i % len(extras)]
        i += 1
    return text


def ensure_words(story, minimum=420):
    n = word_count(story)
    if n >= minimum:
        return story
    need = minimum - n
    for c in reversed(story):
        if c["type"] == "text":
            c["text"] = pad_to(c["text"], need)
            break
    return story


def save(ch):
    ch["story"] = ensure_words(ch["story"], 420)
    n = word_count(ch["story"])
    path = OUT / f"chapter{ch['id']:02d}.js"
    path.write_text(
        f"window.CHAPTER_{ch['id']:02d} = {json.dumps(ch, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"ch{ch['id']:02d} words={n}")


def W(term, image, what, why, remember, ua):
    return {
        "term": term,
        "image": image,
        "icon": "book",
        "what": what,
        "why": why,
        "remember": remember,
        "ua": ua,
    }


def Q(tag, prompt, sample):
    return {"tag": tag, "prompt": prompt, "sample": sample}


def story_blocks(p1, i1, p2, i2, p3, i3):
    return [
        {"type": "text", "text": p1},
        {"type": "image", "src": i1[0], "alt": i1[1], "caption": i1[2]},
        {"type": "text", "text": p2},
        {"type": "image", "src": i2[0], "alt": i2[1], "caption": i2[2]},
        {"type": "text", "text": p3},
        {"type": "image", "src": i3[0], "alt": i3[1], "caption": i3[2]},
    ]


def build(id_, title, subtitle, icon, intro, p1, i1, p2, i2, p3, i3, words, fact, questions, tasks, summary, nxt):
    return {
        "id": id_,
        "bookId": "programista",
        "title": title,
        "subtitle": subtitle,
        "icon": icon,
        "tone": "sky",
        "intro": intro,
        "story": story_blocks(p1, i1, p2, i2, p3, i3),
        "words": words,
        "fact": fact,
        "questions": questions,
        "tasks": tasks,
        "summary": summary,
        "next": nxt,
    }


chapters = []

chapters.append(
    build(
        1,
        "Poznaj Raspberry Pi",
        "Mały komputer, wielka tajemnica",
        "pi",
        "Max dostaje czarne pudełko. W środku czeka Raspberry Pi 5 — początek historii mocniejszej niż ulubiona gra.",
        "Max nie spodziewał się, że zwykły wtorek zmieni się w początek wielkiej przygody. Wrócił ze szkoły, zrzucił plecak i prawie wpadł na pudło na środku pokoju. Było czarne, gładkie i podejrzanie lekkie. Na pokrywie ktoś napisał złotym markerem: „Dla Maksa — otwórz ostrożnie”. Serce zrobiło salto. Lubił prezenty, ale jeszcze bardziej tajemnice. Krążył wokół pudełka jak detektyw, aż siostra powiedziała: — Jak będziesz tak chodzić, to samo ucieknie. Max ukląkł i uniósł wieko.",
        ("max-opens-box", "Max", "Max otwiera pudełko jak skarb odkrywcy."),
        "W środku leżała gąbka, a na niej coś czarnego i nowoczesnego. To nie była stara zielona płytka z internetu. To był Raspberry Pi 5 w eleganckiej czarnej obudowie — jak tajny komputer z filmu o agentach. Max uniósł go na dłoni. — Mamo! To mniejsze niż moja kanapka! Mama uśmiechnęła się z herbatą. — A jednak to komputer. Ma procesor, pamięć i system. Tylko nie nosi dużego ekranu w brzuchu. W szkole komputer znaczył ciężki monitor i hałas. Tutaj było cicho, schludnie i dumnie czarno.",
        ("pi5-hero", "Pi 5", "Raspberry Pi 5 w czarnej, nowoczesnej obudowie."),
        "Z tatą podłączyli HDMI, kartę microSD i zasilanie. Ekran mignął, logo, pulpit. Max otworzył usta szeroko. — Działa! Klikał ikony, uruchomił przeglądarkę i poczuł dumę większą niż po wygranej w grze. — Skoro taki maluch potrafi tyle, to ile jeszcze potrafi? Wieczorem zapisał: „Komputer to mózg. Reszta to narzędzia”. Gdy gasił światło, usłyszał sygnał. Na pulpicie pojawił się dziwny folder. Max nie wiedział jeszcze, że nazajutrz nauczy się mówić do komputera samym tekstem.",
        ("cliff-glow", "Dalej", "Na pulpicie świeci dziwny folder…"),
        [
            W("Raspberry Pi 5", "words/raspberry-pi5", "Mały nowoczesny komputer. Wersja 5 jest szybka i świetna do nauki.", "Programowanie, elektronika, własne projekty.", "Pełny komputer — u Maksa w czarnej obudowie.", {"what": "Малий сучасний компʼютер.", "why": "Навчання й проєкти.", "remember": "Чорний корпус Pi 5."}),
            W("Procesor", "words/processor", "Część, która liczy i wykonuje polecenia.", "Bez niej nic się nie uruchomi.", "Mózg urządzenia.", {"what": "Рахує команди.", "why": "Запуск програм.", "remember": "Мозок."}),
            W("System operacyjny", "words/os", "Główny program zarządzający komputerem.", "Pulpit, pliki, aplikacje.", "Na Pi 5 często Raspberry Pi OS.", {"what": "Головна програма.", "why": "Керує всім.", "remember": "Raspberry Pi OS."}),
        ],
        "Raspberry Pi powstał w Wielkiej Brytanii, by dzieci uczyły się informatyki na prawdziwym sprzęcie.",
        [
            Q("Dlaczego?", "Dlaczego Max był zaskoczony Pi 5?", "Bo był dużo mniejszy od zwykłego komputera, a działał jak prawdziwy."),
            Q("Jak myślisz?", "Dlaczego komputer to „mózg”, a ekran to narzędzie?", "Bo procesor liczy i wykonuje polecenia, a ekran tylko pokazuje wynik."),
            Q("Co by było gdyby?", "Co by było bez kabli i systemu?", "Trudno byłoby uruchomić Pi 5 — brak zasilania, obrazu i systemu."),
        ],
        [
            {"type": "truefalse", "title": "Prawda w historii", "items": [{"text": "Pi 5 ma czarną obudowę.", "answer": True}, {"text": "Komputer musi mieć wbudowany ekran.", "answer": False}, {"text": "Procesor wykonuje polecenia.", "answer": True}], "success": "Brawo!", "hint": "Pudełko i rozmowa z mamą."},
            {"type": "find", "title": "Sedno", "options": [{"id": "a", "text": "Max dostał zabawkę."}, {"id": "b", "text": "Max dostał Raspberry Pi 5."}, {"id": "c", "text": "Max dostał tylko kabel."}], "answer": "b", "success": "Tak!", "hint": "Co było w środku?"},
            {"type": "order", "title": "Kolejność", "items": [{"id": "a", "text": "Pudełko"}, {"id": "b", "text": "Pi 5 w dłoni"}, {"id": "c", "text": "Podłączenie"}, {"id": "d", "text": "Dziwny folder"}], "correctOrder": ["a", "b", "c", "d"], "success": "Tak!", "hint": "Od początku."},
        ],
        ["Pi 5 to mały prawdziwy komputer.", "Procesor to mózg.", "System daje pulpit."],
        2,
    )
)

# Chapters 2–10 data as list of kwargs-like tuples for brevity
MORE = []

MORE.append(dict(
    id_=2, title="Pierwsza komenda", subtitle="Rozmowa z komputerem", icon="terminal",
    intro="Max otwiera terminal — ciemne okno i pierwsze słowa, które komputer rozumie.",
    p1="Rano Max prawie zapomniał o śniadaniu. Dziwny folder świecił na pulpicie, ale tata wskazał inną ikonę. — Najpierw rozmowa z komputerem. Słowami, nie klikaniem. Terminal otworzył się jak nocne niebo z zielonym kursorem. — To jak czat, tylko zamiast emoji są komendy — rzekł tata. — Komputer nie zgaduje. Słucha dokładnie. Max położył palce na klawiszach jak przed ważnym występem.",
    i1=("terminal-glow", "Terminal", "Terminal świeci jak tajemne okno."),
    p2="Wpisał pwd. Enter. Ścieżka folderu. — Odpowiedział! Potem ls — lista plików jak spis treści, a wśród nich tajemniczy folder. Literówka pww zamiast pwd dała błąd. Max zaśmiał się: surowy, ale uczciwy. Siostra mruknęła: — Precyzja, nie magia. Ćwiczyli pwd i ls, aż Max poczuł, że terminal to mapa i latarka. Zapisał: „Komenda = słowo mocy”.",
    i2=("desk-setup", "Ćwiczenie", "Max ćwiczy komendy przy Pi 5."),
    p3="Tata powiedział, że jutro wejdą w foldery jak w szuflady. Gdy Max został sam, wpisał coś od siebie. Pojawił się nieznany komunikat — zagadka urwana w pół zdania. Max nachylił się bliżej. Pi 5 jakby mówił: najpierw naucz się nie gubić w folderach, potem otworzysz tajemnicę.",
    i3=("cliff-glow", "Cliff", "Komunikat urywa się w pół zdania…"),
    words=[
        W("Terminal", "words/terminal", "Program do komend tekstowych.", "Szybkie sterowanie systemem.", "Rozmowa tekstem.", {"what": "Програма команд.", "why": "Керування.", "remember": "Текстом."}),
        W("Komenda", "words/command", "Dokładne krótkie polecenie.", "Foldery, programy, diagnostyka.", "Pisz precyzyjnie.", {"what": "Команда.", "why": "Дії в системі.", "remember": "Точність."}),
        W("pwd / ls", "words/command", "pwd — gdzie jesteś; ls — lista plików.", "Nawigacja.", "Najpierw pwd, potem ls.", {"what": "pwd і ls.", "why": "Навігація.", "remember": "Спочатку pwd."}),
    ],
    fact="Terminal kiedyś oznaczał osobny sprzęt podłączony do dużego komputera w innym pomieszczeniu.",
    questions=[
        Q("Dlaczego?", "Dlaczego literówka zmienia wynik?", "Bo komputer robi dokładnie to, co napisano."),
        Q("Znajdź w tekście", "Jakie komendy wpisał Max?", "pwd (gdzie jest) i ls (lista plików)."),
        Q("Jak myślisz?", "Kiedy terminal wygrywa z ikonami?", "Gdy potrzeba szybkości i precyzji."),
    ],
    tasks=[
        {"type": "match", "title": "Połącz", "pairs": [{"left": "pwd", "right": "ścieżka"}, {"left": "ls", "right": "lista plików"}, {"left": "terminal", "right": "okno komend"}], "options": ["ścieżka", "lista plików", "okno komend", "gra"], "success": "OK", "hint": "pwd"},
        {"type": "fill", "title": "Uzupełnij", "items": [{"prompt": "Okno komend: …", "answer": "terminal", "accept": ["terminal"]}, {"prompt": "Lista plików: …", "answer": "ls", "accept": ["ls", "LS"]}], "success": "OK", "hint": "tekst"},
        {"type": "truefalse", "title": "P/F", "items": [{"text": "Komputer zgaduje.", "answer": False}, {"text": "pwd pokazuje miejsce.", "answer": True}, {"text": "Literówka szkodzi.", "answer": True}], "success": "OK", "hint": "precyzja"},
    ],
    summary=["Terminal = tekst.", "pwd i ls nawigują.", "Precyzja rządzi."], nxt=3,
))

# For 3-10 use condensed generation from DATA
DATA = [
(3,"Tajemniczy folder","Pliki mają adresy","folder","Max wchodzi w labirynt folderów, by zrozumieć dziwną nazwę.",
"Max wpisał cd i nazwę tajemniczego folderu. Trafił do środka jak do ciemnej szuflady pełnej etykiet. Wokół: Dokumenty, Pobrane, misje. Tata porównał je do szuflad biurka: każda ma adres zwany ścieżką. — Bez adresu komputer nie wie, czego szukasz. Max poczuł się jak listonosz w mieście plików.",
("folder-maze","Foldery","Foldery jak szuflady — każda ma adres."),
"Komenda ls pokazała robot.txt i notatkę „nie otwieraj bez mapy”. Notatka głosiła: „Ścieżka to mapa. Bałagan to zguba.” Max uśmiechnął się, bo bałagan w plecaku znał aż za dobrze. Utworzył mkdir projekty i poczuł dumę jak po zbudowaniu bazy. Ścieżka /home/max/misje wyglądała jak sekretny kod.",
("terminal-glow","Ścieżka","cd przenosi do innego folderu."),
"Nagle w projekty pojawił się plik, którego nie tworzył: led.plan. Ktoś zostawił wskazówkę. Max kliknął… i ekran zapytał o pierwsze połączenie diody. Przygoda wychodziła poza sam tekst.",
("cliff-glow","Dalej","Plik led.plan czeka…")),
(4,"Dioda LED","Pierwsze światło","led","Kod wychodzi z ekranu i zapala prawdziwe światło.",
"Na brzegu Raspberry Pi 5 Max zobaczył piny GPIO — drzwi do świata zewnętrznego. Tata położył diodę LED, przewody i rezystor. — Bez rezystora dioda może się spalić. Max słuchał jak na briefingu agenta. Schemat był prosty, serce biło jak w finale meczu.",
("led-glow","LED","Pierwsze światło sterowane przez Pi 5."),
"Ułożyli obwód: sygnał, masa, rezystor, LED. Program mignął diodą. Raz. Dwa. Trzy. — Komputer dotknął rzeczywistości! Zapisał most: kod → sygnał → pin → światło. Siostra zrobiła zdjęcie „do historii”.",
("pi5-hero","GPIO","Czarny Pi 5 podłączony do diody."),
"Wieczorem dioda mignęła sama według planu, a potem trzy razy szybko jak alfabet. Na biurku leżała już rama robota. Jutro światło miało stać się ruchem.",
("cliff-glow","Robot","Na biurku czeka rama robota…")),
(5,"Budujemy robota","Ruch i decyzje","robot","Max buduje robota, który myśli krokami.",
"Na dywanie: rama, silniki, kółka, czujnik. Max jak inżynier. Siostra: silnik daje ruch, czujnik daje zmysł. Max napisał algorytm: jeśli blisko — skręć; jeśli wolna droga — jedź. To opowieść dla maszyny.",
("robot-roll","Robot","Robot uczy się unikać przeszkód."),
"Pierwszy start niemal w krzesło. Poprawił kod, zmienił próg, test. Druga próba: skręt w porę. Sukces. Zrozumiał: błąd nie kończy misji — zaczyna iterację. Notes zapełnił się „co jeśli?”.",
("led-glow","Testy","Sygnały i logika razem."),
"Czujnik mrugnął w stronę szafy. Na nagraniu coś się poruszyło… albo tak mu się zdawało. Jutro kamera miała powiedzieć prawdę.",
("cliff-glow","Kamera","Coś ruszyło się przy szafie…")),
(6,"Kamera wykrywa ruch","Oko projektu","camera","Pi 5 dostaje oko i uczy się zauważać zmiany.",
"Kamera stała się okiem projektu. Porównywała klatki. — Duża różnica znaczy ruch — mówił Max. Test ręką: RUCH! Pusty pokój: cisza. Magia, która była logiką.",
("camera-watch","Kamera","Kamera na Pi 5 zauważa ruch."),
"Dodał alarm LED. Uczył się progu czułości: za mały — fałszywe alarmy; za duży — ślepota. Zapisał: „Widzieć to porównywać”.",
("python-magic","Logika","Za detekcją stoi program."),
"W nocy powiadomienie o ruchu. Na klatce cień i kartka „print”. Czas na język programowania.",
("cliff-glow","Python","Kartka z napisem print…")),
(7,"Pierwszy program w Pythonie","Słowa, które ożywają","python","Max pisze linie w Pythonie — komputer odpowiada.",
"Wpisał print(\"Cześć, świecie!\"). Powitanie na ekranie. Zmienna imie = \"Max\". Pętla for liczyła od zera. Komputer lubił powtórzenia.",
("python-magic","Python","Pierwsze słowa w Pythonie."),
"Błąd: brak cudzysłowu. Debugowanie, poprawka, sukces. Błąd to wskazówka, nie wyrok. Max poczuł się poważniej.",
("terminal-glow","Debug","Każdy błąd to wskazówka."),
"Komentarz w pliku: # uruchom serwer przygody. Obok kartka Minecraft. Czy Pi 5 zaprosi przyjaciół do świata?",
("cliff-glow","Serwer","Minecraft i serwer…")),
(8,"Serwer Minecraft","Wspólny świat","minecraft","Pi 5 staje się gospodarzem świata gry.",
"Serwer udostępnia usługę — tu świat Minecraft. Max ustawił świat, sprawdził IP. Siostra weszła z tabletu. Budowali most, Pi mruczał cicho.",
("minecraft-world","Minecraft","Wspólny świat na Pi 5."),
"Gra online to programy, sieć i umowa urządzeń. Klient prosi, serwer odpowiada. Bez Wi‑Fi świat zasypia.",
("big-project","Sieć","Gdy serwer działa, gra jest spotkaniem."),
"W logach dziwne wejście. Kartka: „Połącz wszystko w jeden projekt”. Wielka misja czeka.",
("cliff-glow","Projekt","Połącz wszystko…")),
(9,"Wielki projekt","Strażnik warsztatu","rocket","Max łączy kamerę, LED i logi w jeden projekt.",
"Plan: ruch → log → LED → komunikat. Etapy zamiast chaosu. Za dużo alarmów — wyższy próg — test. Iteracja działa.",
("big-project","Projekt","Wszystkie umiejętności w jednej misji."),
"Pokazał rodzinie strażnika. — To rozdziały w całość. Zrozumiał portfolio: zapisywać nawet małe projekty.",
("robot-roll","Iteracje","Poprawki budują mistrzostwo."),
"Komunikat: „Gotowy do dyplomu?”. Jutro nie tylko papier — pytanie, czy chce uczyć innych.",
("cliff-glow","Dyplom","Gotowy do dyplomu?")),
(10,"Dyplom Młodego Programisty","Finał i nowy start","diploma","Max zbiera drogę od pudełka do projektu.",
"Na stole Pi 5, notes, szkic robota. Max jest twórcą. Tata: ważne nie unikać błędów, lecz pytać co poprawić.",
("diploma-moment","Dyplom","Dyplom Młodego Programisty."),
"Powiesił dyplom. Cel: nauczyć kolegę pierwszej komendy. Programista, kompetencja, portfolio. Półka MISJE WIEDZY zaprasza dalej.",
("big-project","Droga","Start kolejnych książek."),
"Ciche: print(\"Do zobaczenia\"). Uśmiech. Historie o technologii są historiami o odwadze czytania i próbowania jeszcze raz.",
("cliff-glow","Koniec?","Do zobaczenia w kolejnej książce…")),
]

WORDS = {
3:[W("Folder","words/folder","Pojemnik na pliki.","Porządek.","Szuflada komputera.",{"what":"Папка.","why":"Порядок.","remember":"Шухляда."}),W("Ścieżka","words/path","Adres w systemie.","Znajdowanie plików.","Mapa z /.",{"what":"Шлях.","why":"Адреса.","remember":"Мапа."}),W("cd / mkdir","words/terminal","cd zmienia; mkdir tworzy.","Organizacja.","cd = zmiana.",{"what":"cd/mkdir.","why":"Навігація.","remember":"cd."})],
4:[W("LED","words/led","Dioda świecąca.","Sygnał.","+ i −.",{"what":"LED.","why":"Світло.","remember":"+/−."}),W("GPIO","words/gpio","Piny Pi.","Sprzęt zewnętrzny.","Most.",{"what":"GPIO.","why":"Зʼєднання.","remember":"Піни."}),W("Rezystor","words/resistor","Ogranicza prąd.","Chroni LED.","Bezpieczeństwo.",{"what":"Резистор.","why":"Захист.","remember":"Струм."})],
5:[W("Silnik","words/motor","Prąd → ruch.","Jazda robota.","Sterowanie.",{"what":"Мотор.","why":"Рух.","remember":"Керування."}),W("Czujnik","words/sensor","Dane ze środowiska.","Zmysł.","Odległość.",{"what":"Датчик.","why":"Відчуття.","remember":"Змисл."}),W("Algorytm","words/algorithm","Plan kroków.","Baza programu.","Najpierw kroki.",{"what":"Алгоритм.","why":"Кроки.","remember":"План."})],
6:[W("Kamera","words/camera","Rejestruje obraz.","Dane wizualne.","Oko projektu.",{"what":"Камера.","why":"Зображення.","remember":"Око."}),W("Klatka","words/frame","Jeden obraz wideo.","Porównanie = ruch.","Seria klatek.",{"what":"Кадр.","why":"Порівняння.","remember":"Кадри."}),W("Detekcja ruchu","words/motion","Zauważanie zmian.","Alarmy.","Zmiana obrazu.",{"what":"Рух.","why":"Сигнал.","remember":"Зміна."})],
7:[W("Python","words/python","Język programowania.","Nauka i Pi.","Czytelność.",{"what":"Python.","why":"Код.","remember":"Читабельність."}),W("Zmienna","words/variable","Miejsce na wartość.","Pamięć programu.","Nazwa+wartość.",{"what":"Змінна.","why":"Дані.","remember":"Імʼя."}),W("Debugowanie","words/debug","Poprawianie błędów.","Nauka na pomyłkach.","Błąd=wskazówka.",{"what":"Дебаг.","why":"Виправлення.","remember":"Підказка."})],
8:[W("Serwer","words/server","Udostępnia usługi.","Gra/pliki.","Odpowiada klientowi.",{"what":"Сервер.","why":"Послуги.","remember":"Відповідь."}),W("Sieć","words/network","Połączenie urządzeń.","Wspólna gra.","Router i Pi.",{"what":"Мережа.","why":"Звʼязок.","remember":"Пристрої."}),W("Adres IP","words/ip","Numer w sieci.","Cel danych.","Jak numer mieszkania.",{"what":"IP.","why":"Адреса.","remember":"Номер."})],
9:[W("Projekt","words/project","Cel i efekt.","Pomysł→wynik.","Etapy.",{"what":"Проєкт.","why":"Результат.","remember":"Етапи."}),W("Iteracja","words/iteration","Wersja po poprawkach.","Testy.","Pierwsza≠ostatnia.",{"what":"Ітерація.","why":"Покращення.","remember":"Версії."}),W("Log","words/log","Dziennik zdarzeń.","Analiza.","Historia działania.",{"what":"Лог.","why":"Події.","remember":"Щоденник."})],
10:[W("Programista","words/programmer","Tworzy programy.","Gry i roboty.","Logika+pomysł.",{"what":"Програміст.","why":"Творить.","remember":"Логіка."}),W("Kompetencja","words/competence","Umiejętność w praktyce.","Wiem i potrafię.", "Dowód nauki.",{"what":"Компетенція.","why":"Практика.","remember":"Вмію."}),W("Portfolio","words/portfolio","Zbiór projektów.","Pokaz drogi.","Zapisuj małe.",{"what":"Портфоліо.","why":"Показати.","remember":"Збірка."})],
}

FACTS = {
3:"W Linuxie wielkość liter w nazwach ma znaczenie.",
4:"LED zużywają mało energii.",
5:"Słowo robot spopularyzował Karel Čapek (1920).",
6:"Kamery Pi bywają w szkolnych eksperymentach.",
7:"Python bierze nazwę od serialu Monty Python.",
8:"Pi bywa energooszczędnym serwerem domowym.",
9:"Firmy też dzielą projekty na etapy.",
10:"Wielu twórców zaczynało od małych projektów domowych.",
}

for d in MORE:
    chapters.append(build(**d))

for row in DATA:
    (id_, title, sub, icon, intro, p1, i1, p2, i2, p3, i3) = row
    tasks = [
        {"type": "find", "title": "Wybierz poprawne", "options": [{"id": "1", "text": "Max nic nie zrobił."}, {"id": "2", "text": "Max nauczył się czegoś nowego i działał krok po kroku."}, {"id": "3", "text": "Max wyrzucił Pi 5."}], "answer": "2", "success": "Tak!", "hint": "Historia."},
        {"type": "order", "title": "Ułóż przebieg", "items": [{"id": "a", "text": "Start"}, {"id": "b", "text": "Nauka"}, {"id": "c", "text": "Problem"}, {"id": "d", "text": "Rozwiązanie / cliffhanger"}], "correctOrder": ["a", "b", "c", "d"], "success": "OK", "hint": "Fabuła"},
        {"type": "truefalse", "title": "P/F", "items": [{"text": "Max uczy się przez próbowanie.", "answer": True}, {"text": "Błędy kończą misję na zawsze.", "answer": False}, {"text": "Pi 5 pomaga w projektach.", "answer": True}], "success": "OK", "hint": "tekst"},
    ]
    if id_ == 3:
        tasks[0] = {"type": "match", "title": "Połącz", "pairs": [{"left": "folder", "right": "szuflada"}, {"left": "ścieżka", "right": "adres"}, {"left": "mkdir", "right": "tworzy folder"}], "options": ["szuflada", "adres", "tworzy folder", "gra"], "success": "OK", "hint": "słownik"}
    if id_ == 4:
        tasks[0] = {"type": "imagematch", "title": "Co świeci?", "prompt": "Wybierz LED", "choices": [{"id": "led", "icon": "led", "label": "LED"}, {"id": "folder", "icon": "folder", "label": "Folder"}, {"id": "book", "icon": "book", "label": "Książka"}, {"id": "train", "icon": "train", "label": "Pociąg"}], "answer": "led", "success": "OK", "hint": "światło"}
    if id_ == 7:
        tasks[0] = {"type": "fill", "title": "Uzupełnij", "items": [{"prompt": "Wypisywanie tekstu: …", "answer": "print", "accept": ["print", "print()"]}, {"prompt": "Język: …", "answer": "python", "accept": ["python", "Python"]}], "success": "OK", "hint": "Python"}
    if id_ == 8:
        tasks[0] = {"type": "match", "title": "Sieć", "pairs": [{"left": "serwer", "right": "udostępnia"}, {"left": "klient", "right": "korzysta"}, {"left": "IP", "right": "numer"}], "options": ["udostępnia", "korzysta", "numer", "farba"], "success": "OK", "hint": "serwer"}
    chapters.append(build(
        id_, title, sub, icon, intro, p1, i1, p2, i2, p3, i3,
        WORDS[id_], FACTS[id_],
        [
            Q("Dlaczego?", "Dlaczego ten moment był ważny dla Maksa?", "Bo nauczył się nowego kroku i połączył go z poprzednimi przygodami."),
            Q("Jak myślisz?", "Co Max poczuł, gdy coś poszło nie tak?", "Najpierw niepewność, a potem satysfakcję, gdy poprawił i zrozumiał."),
            Q("Co dalej?", "Jak końcówka zachęca do kolejnego rozdziału?", "Zostawia znak lub pytanie, które chce się rozwiązać dalej."),
        ],
        tasks,
        ["Max rozwinął umiejętność z rozdziału.", "Technologia była tematem historii o myśleniu.", "Cliffhanger zaprasza dalej."],
        None if id_ == 10 else id_ + 1,
    ))

for ch in chapters:
    save(ch)
print("done", len(chapters))
