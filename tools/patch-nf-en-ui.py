#!/usr/bin/env python3
"""Make nonfiction UI chrome language-aware (UA vs EN)."""
from pathlib import Path

path = Path(__file__).resolve().parents[1] / "script.js"
text = path.read_text(encoding="utf-8")

old = "  var activeIllustrationBookId = null;\n\n  var BOOK_ILLUSTRATION_FOLDERS"
if "function nfT(" not in text:
    if old not in text:
        raise SystemExit("helpers anchor missing")
    text = text.replace(
        old,
        """  var activeIllustrationBookId = null;
  var activeNfLang = "uk";

  function setActiveNfBook(book) {
    if (book && book.id) activeIllustrationBookId = book.id;
    activeNfLang = book && book.lang === "en" ? "en" : "uk";
  }

  function nfT(uk, en) {
    return activeNfLang === "en" ? en : uk;
  }

  var BOOK_ILLUSTRATION_FOLDERS""",
        1,
    )
    print("added nfT helpers")
else:
    print("helpers already present")

repls = [
    (
        """    activeIllustrationBookId = book.id;
    var en = book.lang === "en";
    document.title =
      (en ? "Chapter " : "Розділ ")""",
        """    setActiveNfBook(book);
    var en = book.lang === "en";
    document.title =
      (en ? "Chapter " : "Розділ ")""",
    ),
    (
        """  function paintNonfictionBook(root, book, meta) {
    var en = book.lang === "en";
    document.title =""",
        """  function paintNonfictionBook(root, book, meta) {
    setActiveNfBook(book);
    var en = book.lang === "en";
    document.title =""",
    ),
    (
        """        activeIllustrationBookId = book.id;
        var chapters = [];""",
        """        setActiveNfBook(book);
        var chapters = [];""",
    ),
    (
        """  function paintChapter(root, book, chapter) {
    activeIllustrationBookId = book.id;
    if (book.format === "nonfiction") {
      paintNonfictionChapter(root, book, chapter);
      return;
    }""",
        """  function paintChapter(root, book, chapter) {
    setActiveNfBook(book);
    if (book.format === "nonfiction") {
      paintNonfictionChapter(root, book, chapter);
      return;
    }""",
    ),
]

for a, b in repls:
    if a in text:
        text = text.replace(a, b, 1)
        print("wired setActiveNfBook")
    else:
        print("skip setActive (already or missing):", a[:40].replace("\n", " "))


def sub(old, new, label):
    global text
    if old not in text:
        print("MISSING", label)
        return False
    text = text.replace(old, new)
    print("ok", label)
    return True


# Think / reveal — try both apostrophe forms
think_variants = [
    "Не поспішай. Відповідь з’явиться трохи нижче.",
    "Не поспішай. Відповідь з'явиться трохи нижче.",
]
for hint in think_variants:
    old_think = (
        """            '"><div class="nf-rubric">🤔 Як ти думаєш?</div><p>' +
            formatInlineNF(b.question) +
            '</p><div class="nf-options">' +
            opts +
            "</div><p class=\\"nf-hint\\">"""
        + hint
        + """</p></div>"
"""
    )
    # Actual file uses: "</div><p class=\"nf-hint\">...</p></div>"
    old_think = (
        "            '\"><div class=\"nf-rubric\">🤔 Як ти думаєш?</div><p>' +\n"
        "            formatInlineNF(b.question) +\n"
        "            '</p><div class=\"nf-options\">' +\n"
        "            opts +\n"
        '            "</div><p class=\\"nf-hint\\">' + hint + '</p></div>"\n'
    )
    new_think = (
        "            '\"><div class=\"nf-rubric\">' +\n"
        '            nfT("🤔 Як ти думаєш?", "🤔 What do you think?") +\n'
        '            "</div><p>" +\n'
        "            formatInlineNF(b.question) +\n"
        "            '</p><div class=\"nf-options\">' +\n"
        "            opts +\n"
        "            '</div><p class=\"nf-hint\">' +\n"
        "            nfT(\n"
        f'              "{hint}",\n'
        '              "Don\'t rush. The answer will appear below."\n'
        "            ) +\n"
        '            "</p></div>"\n'
    )
    if old_think in text:
        text = text.replace(old_think, new_think, 1)
        print("ok think")
        break
else:
    print("MISSING think block")

sub(
    """            '"><div class="nf-rubric">✅ Відповідь</div><p>' +
            formatInlineNF(b.text) +
            "</p></div>"
""",
    """            '"><div class="nf-rubric">' +
            nfT("✅ Відповідь", "✅ Answer") +
            "</div><p>" +
            formatInlineNF(b.text) +
            "</p></div>"
""",
    "reveal",
)

sub(
    """          tryBody +=
            '<p class="nf-try-nopi"><strong>Немає Pi?</strong> Виконай блок <strong>«У класі без Pi»</strong> нижче — це повноцінна заміна.</p>';
          return (
            '<div class="nf-try"><div class="nf-rubric">' +
            escapeHtml(b.title || "⌨ Спробуй зараз") +
            "</div>" +
""",
    """          tryBody +=
            '<p class="nf-try-nopi"><strong>' +
            nfT("Немає Pi?", "No Pi?") +
            "</strong> " +
            nfT(
              "Виконай блок <strong>«У класі без Pi»</strong> нижче — це повноцінна заміна.",
              "Use the <strong>In class without a Pi</strong> block below — it is a full replacement."
            ) +
            "</p>";
          return (
            '<div class="nf-try"><div class="nf-rubric">' +
            escapeHtml(b.title || nfT("⌨ Спробуй зараз", "⌨ Try it now")) +
            "</div>" +
""",
    "try",
)

subs_simple = [
    (
        'escapeHtml(b.title || "✨ Це дивовижно!")',
        'escapeHtml(b.title || nfT("✨ Це дивовижно!", "✨ Wow!"))',
        "wow",
    ),
    (
        'escapeHtml(b.title || "Цікавий факт")',
        'escapeHtml(b.title || nfT("Цікавий факт", "Fun fact"))',
        "fact",
    ),
    (
        """            '<div class="nf-diary"><div class="nf-rubric">📒 Щоденник адміністратора</div>' +
""",
        """            '<div class="nf-diary"><div class="nf-rubric">' +
            nfT("📒 Щоденник адміністратора", "📒 Admin Journal") +
            "</div>" +
""",
        "diary",
    ),
    (
        """            '<div class="nf-draw"><div class="nf-rubric">✏ Намалюй</div><p>' +
""",
        """            '<div class="nf-draw"><div class="nf-rubric">' +
            nfT("✏ Намалюй", "✏ Draw") +
            "</div><p>" +
""",
        "draw",
    ),
    (
        'escapeHtml(it.title || "Помилка")',
        'escapeHtml(it.title || nfT("Помилка", "Mistake"))',
        "error-title",
    ),
    (
        """            '<div class="nf-errors"><div class="nf-rubric">⚠ Типові помилки</div><ul class="nf-errors-list">' +
""",
        """            '<div class="nf-errors"><div class="nf-rubric">' +
            nfT("⚠ Типові помилки", "⚠ Common mistakes") +
            '</div><ul class="nf-errors-list">' +
""",
        "errors",
    ),
    (
        """            '<div class="nf-project"><div class="nf-rubric">🔧 Мініпроєкт</div><h3>' +
""",
        """            '<div class="nf-project"><div class="nf-rubric">' +
            nfT("🔧 Мініпроєкт", "🔧 Mini project") +
            "</div><h3>" +
""",
        "project",
    ),
    (
        'var nwBody = escapeHtml(b.body || "Привіт, nano!");',
        'var nwBody = escapeHtml(b.body || nfT("Привіт, nano!", "Hello, nano!"));',
        "nano-body",
    ),
    (
        """            '<div class="nf-nano" role="img" aria-label="Вигляд вікна редактора nano">' +
""",
        """            '<div class="nf-nano" role="img" aria-label="' +
            nfT("Вигляд вікна редактора nano", "nano editor window") +
            '">' +
""",
        "nano-aria",
    ),
    (
        """            "<div><b>^G</b> Довідка</div><div><b>^O</b> Зберегти</div><div><b>^W</b> Пошук</div><div><b>^K</b> Вирізати</div>" +
            "<div><b>^X</b> Вийти</div><div><b>^R</b> Читати файл</div><div><b>^U</b> Вставити</div><div><b>^C</b> Позиція</div>" +
""",
        """            (activeNfLang === "en"
              ? "<div><b>^G</b> Help</div><div><b>^O</b> Write Out</div><div><b>^W</b> Where Is</div><div><b>^K</b> Cut</div>" +
                "<div><b>^X</b> Exit</div><div><b>^R</b> Read File</div><div><b>^U</b> Paste</div><div><b>^C</b> Location</div>"
              : "<div><b>^G</b> Довідка</div><div><b>^O</b> Зберегти</div><div><b>^W</b> Пошук</div><div><b>^K</b> Вирізати</div>" +
                "<div><b>^X</b> Вийти</div><div><b>^R</b> Читати файл</div><div><b>^U</b> Вставити</div><div><b>^C</b> Позиція</div>") +
""",
        "nano-footer",
    ),
    (
        """            '<figure class="story-image" role="button" tabindex="0" aria-label="Збільшити">' +
""",
        """            '<figure class="story-image" role="button" tabindex="0" aria-label="' +
            nfT("Збільшити", "Enlarge") +
            '">' +
""",
        "enlarge",
    ),
    (
        """      ? '<figure class="nf-spread__hero story-image" role="button" tabindex="0" aria-label="Збільшити">' +
""",
        """      ? '<figure class="nf-spread__hero story-image" role="button" tabindex="0" aria-label="' +
        nfT("Збільшити", "Enlarge") +
        '">' +
""",
        "enlarge-spread",
    ),
    (
        'return item.answer ? "Правда" : "Неправда";',
        'return item.answer ? nfT("Правда", "True") : nfT("Неправда", "False");',
        "tf",
    ),
    (
        'return item.answerLabel || "Твій малюнок (перевір за поясненням)";',
        'return item.answerLabel || nfT("Твій малюнок (перевір за поясненням)", "Your drawing (check against the explanation)");',
        "draw-label",
    ),
    (
        'escapeHtml(prompt || "Поєднай пари:")',
        'escapeHtml(prompt || nfT("Поєднай пари:", "Match the pairs:"))',
        "match-prompt",
    ),
    (
        """        '</p><div class="nf-check-match"><div><p class="nf-muted">Ліва колонка</p><ul>' +""",
        """        '</p><div class="nf-check-match"><div><p class="nf-muted">' +
        nfT("Ліва колонка", "Left column") +
        "</p><ul>" +""",
        "left-col",
    ),
    (
        """        '</ul></div><div><p class="nf-muted">Права колонка (перемішана)</p><ul>' +""",
        """        '</ul></div><div><p class="nf-muted">' +
        nfT("Права колонка (перемішана)", "Right column (shuffled)") +
        "</p><ul>" +""",
        "right-col",
    ),
    (
        'var hint = item.hint || "Пригадай головну ідею цього розділу.";',
        'var hint = item.hint || nfT("Пригадай головну ідею цього розділу.", "Remember the main idea of this chapter.");',
        "hint-default",
    ),
    (
        """      '.</span><div><p class="nf-check-answer-label">Правильна відповідь:</p><p class="nf-check-answer-value">' +""",
        """      '.</span><div><p class="nf-check-answer-label">' +
      nfT("Правильна відповідь:", "Correct answer:") +
      '</p><p class="nf-check-answer-value">' +""",
        "correct-answer",
    ),
]

for a, b, label in subs_simple:
    # replace all occurrences for shared patterns like Помилка / wow
    if a not in text:
        print("MISSING", label)
    else:
        text = text.replace(a, b)
        print("ok", label)

# optional badge — both apostrophes
for core in ["обов’язково для себе", "обов'язково для себе"]:
    old_badge = f"""      ? '<span class="nf-check-optional">бонус — за бажанням</span>'
      : '<span class="nf-check-core">{core}</span>';"""
    new_badge = f"""      ? '<span class="nf-check-optional">' +
        nfT("бонус — за бажанням", "bonus — optional") +
        "</span>"
      : '<span class="nf-check-core">' +
        nfT("{core}", "required for you") +
        "</span>";"""
    if old_badge in text:
        text = text.replace(old_badge, new_badge, 1)
        print("ok badge")
        break
else:
    print("MISSING badge")

# renderNFCheck lead
old_leads = []
for obl in ["обов’язково", "обов'язково"]:
    old_leads.append(
        f"""    if (!items.length) {{
      return '<p class="nf-muted">У цьому розділі перевірочних питань немає.</p>';
    }}
    var coreCount = items.filter(function (x) {{
      return !x.optional;
    }}).length;
    var bonusCount = items.length - coreCount;
    var lead =
      "Це не іспит. Спочатку " +
      coreCount +
      " питання — {obl} для себе";
    if (bonusCount) {{
      lead += "; ще " + bonusCount + " — бонус, якщо є сили";
    }}
    if (forPdf) {{
      lead += ". Спочатку відповідай сам — підказки нижче, ключ відповідей на наступній сторінці.";
    }} else {{
      lead += ". Підказки відкриті нижче; відповіді — коли сам спробуєш.";
    }}"""
    )

new_lead = """    if (!items.length) {
      return (
        '<p class="nf-muted">' +
        nfT(
          "У цьому розділі перевірочних питань немає.",
          "This chapter has no check questions."
        ) +
        "</p>"
      );
    }
    var coreCount = items.filter(function (x) {
      return !x.optional;
    }).length;
    var bonusCount = items.length - coreCount;
    var lead;
    if (activeNfLang === "en") {
      lead =
        "This is not a test. First " +
        coreCount +
        " question(s) — required for you";
      if (bonusCount) {
        lead += "; plus " + bonusCount + " bonus if you have energy";
      }
      lead += forPdf
        ? ". Answer yourself first — hints below, answer key on the next page."
        : ". Hints are open below; answers when you have tried.";
    } else {
      lead =
        "Це не іспит. Спочатку " +
        coreCount +
        " питання — обов’язково для себе";
      if (bonusCount) {
        lead += "; ще " + bonusCount + " — бонус, якщо є сили";
      }
      if (forPdf) {
        lead += ". Спочатку відповідай сам — підказки нижче, ключ відповідей на наступній сторінці.";
      } else {
        lead += ". Підказки відкриті нижче; відповіді — коли сам спробуєш.";
      }
    }"""

for ol in old_leads:
    if ol in text:
        text = text.replace(ol, new_lead, 1)
        print("ok check-lead")
        break
else:
    print("MISSING check-lead")

# panel titles
panel_subs = [
    ('"<h3>💡 Підказки</h3>"', '"<h3>💡 " + nfT("Підказки", "Hints") + "</h3>"'),
    (
        '"<summary>💡 Підказки</summary>"',
        '"<summary>💡 " + nfT("Підказки", "Hints") + "</summary>"',
    ),
    ('"<h3>✅ Відповіді</h3>"', '"<h3>✅ " + nfT("Відповіді", "Answers") + "</h3>"'),
    (
        '"<summary>✅ Відповіді</summary>"',
        '"<summary>✅ " + nfT("Відповіді", "Answers") + "</summary>"',
    ),
    (
        '\'<p class="nf-muted">Підказки лише спрямовують — вони не розкривають повну відповідь.</p>\' +',
        '\'<p class="nf-muted">\' +\n'
        "        nfT(\n"
        '          "Підказки лише спрямовують — вони не розкривають повну відповідь.",\n'
        '          "Hints only nudge you — they do not give the full answer."\n'
        "        ) +\n"
        '        "</p>" +',
    ),
    (
        '\'<p class="nf-muted nf-check-answers-note">Відкривай цей блок лише після власної спроби. У друкованій версії він на окремій сторінці.</p>\' +',
        '\'<p class="nf-muted nf-check-answers-note">\' +\n'
        "        nfT(\n"
        '          "Відкривай цей блок лише після власної спроби. У друкованій версії він на окремій сторінці.",\n'
        '          "Open this only after you try yourself. In print, it is on a separate page."\n'
        "        ) +\n"
        '        "</p>" +',
    ),
    (
        '\'<p class="nf-muted">Відкривай лише після власної спроби.</p>\' +',
        '\'<p class="nf-muted">\' +\n'
        '      nfT("Відкривай лише після власної спроби.", "Open only after you try yourself.") +\n'
        '      "</p>" +',
    ),
]
for a, b in panel_subs:
    n = text.count(a)
    text = text.replace(a, b)
    print("panel", n, a[:40])

# PDF content chrome
pdf_subs = [
    (
        '"<p><strong>Як ти думаєш?</strong> "',
        '"<p><strong>" + nfT("Як ти думаєш?", "What do you think?") + "</strong> "',
    ),
    (
        'escapeHtml(b.title || "Спробуй зараз")',
        'escapeHtml(b.title || nfT("Спробуй зараз", "Try it now"))',
    ),
    (
        'escapeHtml(b.title || "Підказка")',
        'escapeHtml(b.title || nfT("Підказка", "Tip"))',
    ),
    (
        'escapeHtml(b.title || "Схема")',
        'escapeHtml(b.title || nfT("Схема", "Diagram"))',
    ),
    (
        '"<p><strong>Щоденник адміністратора</strong></p><ul>"',
        '"<p><strong>" + nfT("Щоденник адміністратора", "Admin Journal") + "</strong></p><ul>"',
    ),
    (
        '"<p><strong>Намалюй:</strong> "',
        '"<p><strong>" + nfT("Намалюй:", "Draw:") + "</strong> "',
    ),
    (
        '"<p><strong>Типові помилки</strong></p><ul>"',
        '"<p><strong>" + nfT("Типові помилки", "Common mistakes") + "</strong></p><ul>"',
    ),
    (
        '"<h2>Що ти дізнаєшся</h2><ul>"',
        '"<h2>" + nfT("Що ти дізнаєшся", "What you\'ll learn") + "</h2><ul>"',
    ),
    (
        '"<h2>Запам’ятай</h2><ul>"',
        '"<h2>" + nfT("Запам’ятай", "Remember") + "</h2><ul>"',
    ),
    (
        '"<h2>Перевір себе</h2>"',
        '"<h2>" + nfT("Перевір себе", "Check yourself") + "</h2>"',
    ),
]
for a, b in pdf_subs:
    n = text.count(a)
    if n:
        text = text.replace(a, b)
    print("pdf", n, a[:50])

# Also patch remaining Запам'ятай with straight apostrophe
text = text.replace(
    '"<h2>Запам\'ятай</h2><ul>"',
    '"<h2>" + nfT("Запам\'ятай", "Remember") + "</h2><ul>"',
)

path.write_text(text, encoding="utf-8")
print("WROTE", path)
print("has nfT", "function nfT(" in text)
print("has What do you think", "What do you think?" in text)
print("has Admin Journal", "Admin Journal" in text)
