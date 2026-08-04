# MISJE WIEDZY — Misja Programista
# Biblia projektu (seria / książka 1)

Dokument obowiązujący dla wszystkich rozdziałów.  
Rozdziały **1–4** są wzorem jakości. Każdy kolejny musi być napisany tak, jakby powstał od tego samego autora.

---

## 1. Co to za książka

- **Gatunek:** powieść przygodowa dla dzieci 8–14 lat z elementami edukacyjnymi.
- **Nie jest:** podręcznikiem, instrukcją, encyklopedią, kursem online.
- **Cel czytelniczy:** „Jeszcze tylko jeden rozdział…”
- **Cel edukacyjny (ukryty):** Raspberry Pi, Linux (terminal, foldery), elektronika, robotyka, Python, sieć — poprzez historię.
- **Zasada nadrzędna:** historia > teoria. Teoria wynika z wydarzeń, nigdy odwrotnie.

---

## 2. Bohaterowie

### Max (ok. 10 lat)
- Ciekawy, naturalny, mówi jak dziecko (nie jak mały profesor).
- Myli się, waha się, sam dochodzi do wniosków.
- Z rozdziału na rozdział: odważniejszy, pewniejszy, bardziej samodzielny.
- Uczy się przez działanie (Enter, kabel, test, poprawka).

### Tata (mentor)
- Tłumaczy **porównaniami** i **pytaniami**, nigdy wykładem.
- Spokojny, cierpliwy.
- **Powiedzonka (powtarzalne):**
  - „Dobre zagadki lubią przygotowanych.”
  - „Jeśli wiesz, gdzie jesteś, łatwiej iść dalej.”
  - „A od kiedy odkrywcy boją się nowych drzwi?”

### Mama
- Odwaga, ciepłe krótkie komentarze, ciekawość.
- **Nie** tłumaczy techniki.
- Pojawia się regularnie (nie znika na całe rozdziały).

### Siostra
- Inteligentna, zabawna, droczy się, zawsze po stronie Maksa.
- Nigdy złośliwa.
- Często „nagrywa / komentuje” jak sportowy komentator.

### Nieznany (tajemnica serii)
- Zostawia foldery, pliki, kartki, statusy misji.
- **Nie zdradzać tożsamości** przed rozdziałami końcowymi.
- Stopniowe ślady: `Autor: ???` → `Autor: Nieznany` → coraz bliżej / nowe misje.

---

## 3. Styl narracji

| Zasada | Opis |
|--------|------|
| Akapity | 1–3 zdania |
| Dialog | zawsze osobny akapit, linia z `—` |
| Po ilustracji | zawsze nowa scena |
| Emocje | przez działanie, nie etykietę („Przełknął ślinę”, nie „Bał się”) |
| Humor | z bohaterów, ~co pół strony |
| Running joke | zaginiona skarpetka — **max. raz na 2–3 rozdziały** |
| Technika | wydarzenie → pytanie → krótkie wyjaśnienie |
| Notatnik | na końcu: `📓 NOTATNIK MAKSA` (dziennik odkrywcy, nie ściąga) |
| Misja | `***MISJA N — UKOŃCZONA***` + skill + cliffhanger kolejnej misji |

Wyróżnienia w tekście: `**pojęcie**`, komendy `***pwd***`, cytaty notesu w `„…”`.

---

## 4. Łuk fabuły (książka 1)

Jedna wielka misja. Każdy rozdział = poziom gry.

| R | Tytuł | Odkrycie / umiejętność | Ślad Nieznanego |
|---|--------|-------------------------|-----------------|
| 1 | Poznaj Raspberry Pi | Pi 5, procesor, system | Folder **MISJA 1** |
| 2 | Pierwsza komenda | Terminal, pwd, ls | Urwany komunikat, **Autor: ???** |
| 3 | Tajemniczy folder | Folder, ścieżka, cd, mkdir | **led.plan**, Autor: Nieznany |
| 4 | Pierwsze światło | GPIO, LED, rezystor | **MISJA 5** + rama robota |
| 5 | Pierwszy robot | Silnik, czujnik, algorytm | Ruch / kamera „na później” |
| 6 | Oczy robota | Kamera, detekcja ruchu | Ślad → Python (`print`) |
| 7 | Pierwszy własny program | Python, zmienna, debug | Serwer / Minecraft |
| 8 | Własny świat Minecraft | Serwer, sieć, IP | „Połącz wszystko” |
| 9 | Wielki projekt | Projekt, iteracja, logi | Dyplom? |
| 10 | Dyplom Młodego Programisty | Podsumowanie, dzielenie się | Domknięcie tajemnicy / nowy start |

Pytania czytelnika przez całą książkę:
- Kto przygotował misje?
- Kim jest Nieznany?
- Dlaczego wybrał Maksa?

---

## 5. Rozwój umiejętności (progresja)

```
orientacja (pulpit)
  → rozmowa (terminal)
    → nawigacja (foldery/ścieżki)
      → wyjście w świat (GPIO/LED)
        → ruch (robot)
          → widzenie (kamera)
            → język (Python)
              → usługa (serwer)
                → synteza (projekt)
                  → tożsamość (dyplom / dzielenie się)
```

Każda umiejętność **musi** pojawić się w scenie, zanim trafi do notatnika/słownika.

---

## 6. Struktura rozdziału (checklist)

1. Intro (1–2 zdania haka)
2. Most z poprzedniego cliffhangera
3. Scena + ilustracja (×4) — po obrazku nowa scena
4. Humor postaci
5. Małe wahanie / Enter / klik
6. Małe zwycięstwo
7. `📓 NOTATNIK MAKSA`
8. `***MISJA N — UKOŃCZONA***` + skill
9. Cliffhanger (kolejna misja / ślad Nieznanego)
10. Słowa (3) + fact + pytania (7: 4 „Z tekstu” + 3 „O temacie”)
11. Zadania (~10–12, zróżnicowane typy)

---

## 7. Humor — reguły

- Z dialogu / zachowania, nie z komentarza narratora-dorosłego.
- Unikać meta (np. „cliffhanger”) i żargonu niedziecięcego.
- Skarpetka: R1 (tło), R3–4 (lekko), potem znów za 2–3 rozdziały (np. robot / pudełko).

---

## 8. Zadania — typy dozwolone w silniku

`truefalse`, `match`, `fill`, `order`, `find` (+ `typeLabel`), `imagematch`, `open`.

Cel: ~10–12 aktywności + 7 pytań do myślenia.

---

## 9. Status zgodności (audyt)

| Rozdział | Zgodność z biblią | Uwagi |
|----------|-------------------|--------|
| 1–3 | ✅ wzór | Styl, misja, Nieznany, zadania rozszerzone |
| 4 Pierwsze światło | ✅ | Zgodny z biblią |
| 5 Pierwszy robot | ✅ | Przepisany według biblii |
| 6 Oczy robota | ✅ | Kamera, detekcja, cliffhanger `print` |
| 7 Pierwszy własny program | ✅ | Python, zmienna, debug → serwer |
| 8 Własny świat Minecraft | ✅ | Serwer/IP/sieć, skarpetka, MISJA 9 |
| 9 Wielki projekt | ✅ | Strażnik, iteracja, cliffhanger dyplomu |
| 10 Dyplom… | ✅ | Reveal: Tata = Nieznany; dzielenie się |

**Wniosek:** książka 1 **ukończona** według biblii (rozdziały 1–10).
