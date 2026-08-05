/* MISJE WIEDZY · platforma biblioteki */
(function () {
  "use strict";

  var STORAGE_KEY = "misje_wiedzy_library_v1";

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { books: {} };
      var data = JSON.parse(raw);
      return { books: data.books && typeof data.books === "object" ? data.books : {} };
    } catch (e) {
      return { books: {} };
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getBookProgress(bookId) {
    var data = loadProgress();
    if (!data.books[bookId]) data.books[bookId] = { completed: [] };
    return data.books[bookId];
  }

  function markChapterComplete(bookId, chapterId) {
    var data = loadProgress();
    if (!data.books[bookId]) data.books[bookId] = { completed: [] };
    var list = data.books[bookId].completed;
    var id = Number(chapterId);
    if (list.indexOf(id) === -1) {
      list.push(id);
      list.sort(function (a, b) {
        return a - b;
      });
      saveProgress(data);
    }
    return data.books[bookId];
  }

  function chapterDone(bookId, chapterId) {
    return getBookProgress(bookId).completed.indexOf(Number(chapterId)) !== -1;
  }

  function progressRatio(bookId, total) {
    var done = getBookProgress(bookId).completed.length;
    return total ? done / total : 0;
  }

  function showToast(message) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("is-show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      el.classList.remove("is-show");
    }, 2400);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Inline story formatting (safe: no raw HTML from content).
   * **tekst**     → pogrubienie
   * *tekst*       → kursywa
   * ***tekst***   → pogrubiona kursywa
   * „tekst”       → zapis/cytat (.is-note) — pogrubiona kursywa
   */
  function formatStoryInline(str) {
    var s = String(str || "");
    var out = "";
    var re =
      /\*\*\*([\s\S]+?)\*\*\*|\*\*([\s\S]+?)\*\*|\*((?:[^*\n]|\*(?!\*))+?)\*|„([^”]+)”/g;
    var last = 0;
    var m;
    while ((m = re.exec(s)) !== null) {
      out += escapeHtml(s.slice(last, m.index));
      if (m[1] != null) {
        out += '<strong><em class="is-note">' + escapeHtml(m[1]) + "</em></strong>";
      } else if (m[2] != null) {
        out += "<strong>" + escapeHtml(m[2]) + "</strong>";
      } else if (m[3] != null) {
        out += "<em>" + escapeHtml(m[3]) + "</em>";
      } else if (m[4] != null) {
        out +=
          '<span class="is-note">„' + escapeHtml(m[4]) + "”</span>";
      }
      last = re.lastIndex;
    }
    out += escapeHtml(s.slice(last));
    return out;
  }

  function iconPath(name) {
    return "assets/icons/" + name + ".svg";
  }

  var activeIllustrationBookId = null;
  var activeNfLang = "uk";

  function setActiveNfBook(book) {
    if (book && book.id) activeIllustrationBookId = book.id;
    activeNfLang = book && book.lang === "en" ? "en" : "uk";
  }

  function nfT(uk, en) {
    return activeNfLang === "en" ? en : uk;
  }

  var BOOK_ILLUSTRATION_FOLDERS = {
    sysadmin: "rasberi",
    sysadmin_en: "rasberi",
  };

  function isSysadminBook(bookId) {
    return bookId === "sysadmin" || bookId === "sysadmin_en";
  }

  function loadSysadminExtras(bookId) {
    if (!isSysadminBook(bookId)) return Promise.resolve();
    var p = loadScript("data/" + bookId + "/class-without-pi.js");
    if (bookId === "sysadmin_en") {
      p = p
        .then(function () {
          return loadScript("data/sysadmin_en/glossary.js");
        })
        .then(function () {
          return loadScript("data/sysadmin_en/index.js");
        });
    }
    return p;
  }

  function renderMergedGlossaryHtml(book) {
    if (book.lang !== "en") return "";
    var gloss = window.BOOK_SYSADMIN_EN_GLOSSARY || [];
    var idx = window.BOOK_SYSADMIN_EN_INDEX || [];
    if (!gloss.length && !idx.length) return "";
    var glossHtml = gloss.length
      ? "<h3>Glossary</h3><dl class=\"nf-glossary-list\">" +
        gloss
          .map(function (g) {
            return (
              "<dt>" +
              escapeHtml(g.term) +
              "</dt><dd>" +
              escapeHtml(g.def) +
              "</dd>"
            );
          })
          .join("") +
        "</dl>"
      : "";
    var indexHtml = idx.length
      ? "<h3>Subject index</h3><ul class=\"nf-index-list\">" +
        idx
          .map(function (row) {
            return (
              "<li><strong>" +
              escapeHtml(row.term) +
              "</strong> — ch. " +
              (row.chapterIds || []).join(", ") +
              "</li>"
            );
          })
          .join("") +
        "</ul>"
      : "";
    return glossHtml + indexHtml;
  }

  function illustrationFolder(bookId) {
    return BOOK_ILLUSTRATION_FOLDERS[bookId] || "scenes";
  }

  function illPath(name, bookId) {
    bookId = bookId || activeIllustrationBookId;
    var folder = illustrationFolder(bookId);
    var base = "assets/illustrations/" + folder + "/";
    if (name.indexOf(".") !== -1) {
      if (name.indexOf("/") === -1) return base + name;
      return "assets/illustrations/" + name;
    }
    return base + name + ".webp";
  }

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function starsHtml(rating) {
    var html = "";
    for (var i = 1; i <= 5; i++) {
      html += i <= rating ? "⭐" : "☆";
    }
    return html;
  }

  function setProgressUI(bookId, total) {
    var ring = document.querySelector("[data-progress-ring]");
    var label = document.querySelector("[data-progress-label]");
    var done = getBookProgress(bookId).completed.length;
    var pct = Math.round(progressRatio(bookId, total) * 100);
    if (ring) ring.style.setProperty("--p", String(pct));
    if (label) label.textContent = done + " / " + total;
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = function () {
        reject(new Error("Nie wczytano: " + src));
      };
      document.head.appendChild(s);
    });
  }

  /* ——— LIBRARY (index) ——— */
  function renderLibrary() {
    if (!window.LIBRARY) return;
    var shelf = document.getElementById("book-shelf");
    if (!shelf) return;

    shelf.innerHTML = window.LIBRARY.books
      .map(function (book, i) {
        var total = book.chapters;
        var done = getBookProgress(book.id).completed.length;
        var pct = Math.round((done / total) * 100) || 0;
        var ready = book.status === "ready";
        var href = ready ? "book.html?id=" + book.id : "#";
        var badge = ready
          ? done === total && total > 0
            ? "Ukończona"
            : done > 0
              ? "W trakcie · " + done + "/" + total
              : "Gotowa do czytania"
          : "Wkrótce";

        return (
          '<a class="book-spine' +
          (ready ? "" : " is-soon") +
          '" href="' +
          href +
          '" data-book="' +
          book.id +
          '" style="--book-color:' +
          book.color +
          ";--book-soft:" +
          book.colorSoft +
          ";--book-accent:" +
          book.accent +
          ";animation-delay:" +
          i * 0.05 +
          's">' +
          '<div class="book-spine__cover">' +
          '<span class="book-spine__num">' +
          (book.lang === "uk" ? "Книга " : "Książka ") +
          book.number +
          (book.lang === "uk" ? " · UA" : "") +
          "</span>" +
          '<img src="' +
          iconPath(book.icon) +
          '" alt="">' +
          "</div>" +
          '<div class="book-spine__body">' +
          "<h2>" +
          escapeHtml(book.title) +
          "</h2>" +
          "<p>" +
          escapeHtml(book.tagline || book.subtitle) +
          "</p>" +
          '<div class="book-spine__meta">' +
          "<span>" +
          book.chapters +
          " rozdziałów</span>" +
          "<span>" +
          escapeHtml(badge) +
          "</span>" +
          "</div>" +
          (ready
            ? '<div class="book-spine__bar"><span style="width:' + pct + '%"></span></div>'
            : "") +
          "</div>" +
          "</a>"
        );
      })
      .join("");

    shelf.addEventListener("click", function (e) {
      var soon = e.target.closest(".book-spine.is-soon");
      if (soon) {
        e.preventDefault();
        showToast("Ta książka pojawi się wkrótce na półce!");
      }
    });
  }

  /* ——— BOOK COVER + TOC ——— */
  function renderBookPage() {
    var bookId = qs("id") || "programista";
    var meta = window.LIBRARY && window.LIBRARY.getBook(bookId);
    var root = document.getElementById("book-root");
    if (!root) return;

    if (!meta || meta.status !== "ready") {
      root.innerHTML =
        '<div class="panel"><h2>Ta książka jeszcze nie jest dostępna</h2>' +
        '<p>Wróć na półkę i wybierz gotową pozycję.</p>' +
        '<p><a class="btn btn--primary" href="index.html">← Półka z książkami</a></p></div>';
      return;
    }

    loadScript("data/" + bookId + "/book.js")
      .then(function () {
        return loadSysadminExtras(bookId);
      })
      .then(function () {
        var book =
          window["BOOK_" + bookId.toUpperCase()] ||
          window.BOOK_PROGRAMISTA;
        if (!book) throw new Error("Brak danych książki");
        paintBook(root, book, meta);
        setProgressUI(book.id, book.chaptersCount);
      })
      .catch(function (err) {
        root.innerHTML =
          '<div class="panel"><h2>Ups!</h2><p>' +
          escapeHtml(err.message) +
          '</p><a href="index.html">Wróć na półkę</a></div>';
      });
  }

  function paintNonfictionBook(root, book, meta) {
    setActiveNfBook(book);
    var en = book.lang === "en";
    document.title =
      (en ? "Book " : "Книга ") + book.number + " · " + book.title + " · MISJE WIEDZY";
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        (book.tagline ? book.tagline + " — " : "") + (book.description || "").replace(/\*\*/g, "")
      );
    }
    document.documentElement.style.setProperty("--book-color", book.color);
    document.documentElement.style.setProperty("--book-soft", book.colorSoft);
    document.documentElement.style.setProperty("--book-accent", book.accent);

    var firstOpen = 1;
    for (var i = 1; i <= book.chaptersCount; i++) {
      if (!chapterDone(book.id, i)) {
        firstOpen = i;
        break;
      }
      if (i === book.chaptersCount) firstOpen = 1;
    }

    var partsHtml = (book.parts || [])
      .map(function (part) {
        var items = book.chapters
          .filter(function (ch) {
            return part.chapters.indexOf(ch.id) !== -1;
          })
          .map(function (ch) {
            var done = chapterDone(book.id, ch.id);
            return (
              '<a class="toc-item' +
              (done ? " is-done" : "") +
              '" href="chapter.html?book=' +
              book.id +
              "&id=" +
              ch.id +
              '"><span class="toc-item__num">' +
              ch.id +
              '</span><img src="' +
              iconPath(ch.icon) +
              '" alt=""><span>' +
              escapeHtml(ch.title) +
              "</span></a>"
            );
          })
          .join("");
        return (
          '<div class="nf-part-block"><h3>' +
          (en ? "Part " : "Частина ") +
          part.id +
          ". " +
          escapeHtml(part.title) +
          '</h3><div class="toc-list">' +
          items +
          "</div></div>"
        );
      })
      .join("");

    var how = ((book.frontMatter && book.frontMatter.howToUse) || [])
      .map(function (x) {
        return "<li>" + escapeHtml(x) + "</li>";
      })
      .join("");
    var withAdult = (book.frontMatter && book.frontMatter.withAdult) || "";
    var withoutPi = (book.frontMatter && book.frontMatter.withoutPi) || "";
    var classTrack = window.SYSADMIN_CLASS_WITHOUT_PI || null;
    var forClass = (classTrack && classTrack.forClass) || "";

    root.innerHTML =
      '<a class="back-link" href="index.html">' +
      (en ? "← Book shelf" : "← Полиця з книгами") +
      "</a>" +
      '<section class="book-cover" style="--book-color:' +
      book.color +
      ";--book-accent:" +
      book.accent +
      '">' +
      '<div class="book-cover__badge">' +
      (en ? "Book " : "Книга ") +
      book.number +
      (en ? " · EN · Pi + Linux + game server" : " · UA · Minecraft + Linux") +
      "</div>" +
      '<img class="book-cover__icon" src="' +
      iconPath(book.icon) +
      '" alt="">' +
      "<h1>" +
      escapeHtml(book.title) +
      "</h1>" +
      (book.tagline
        ? '<p class="book-cover__tagline">' + escapeHtml(book.tagline) + "</p>"
        : "") +
      '<p class="book-cover__sub">' +
      escapeHtml(book.subtitle) +
      "</p>" +
      '<div class="book-cover__stars">' +
      starsHtml(book.rating) +
      "</div>" +
      '<div class="book-cover__stats">' +
      "<div><strong>" +
      book.chaptersCount +
      "</strong><span>" +
      (en ? "chapters" : "розділів") +
      "</span></div>" +
      "<div><strong>~" +
      book.readingMinutes +
      " min</strong><span>" +
      (en ? "reading time" : "час читання") +
      "</span></div>" +
      "<div><strong>" +
      escapeHtml(book.level) +
      "</strong><span>" +
      (en ? "ages" : "вік") +
      "</span></div></div></section>" +
      '<section class="book-panel"><h2>' +
      (en ? "Preface" : "Передмова") +
      "</h2><p>" +
      formatInlineNF((book.frontMatter && book.frontMatter.preface) || book.description) +
      "</p></section>" +
      (book.frontMatter && book.frontMatter.legalNote
        ? '<section class="book-panel"><h2>' +
          (en ? "Trademark notice" : "Правова нотатка") +
          "</h2><p>" +
          formatInlineNF(book.frontMatter.legalNote) +
          "</p></section>"
        : "") +
      (withAdult
        ? '<section class="book-panel book-panel--warm"><h2>' +
          (en ? "👨‍👩‍👧 Read together" : "👨‍👩‍👧 Читай разом") +
          "</h2><p>" +
          formatInlineNF(withAdult) +
          "</p></section>"
        : "") +
      (withoutPi
        ? '<section class="book-panel book-panel--warm"><h2>' +
          (en ? "🌱 No Pi yet?" : "🌱 Немає Pi зараз?") +
          "</h2><p>" +
          formatInlineNF(withoutPi) +
          "</p></section>"
        : "") +
      (forClass
        ? '<section class="book-panel book-panel--class"><h2>' +
          (en ? "🏫 For class without a Pi" : "🏫 Для класу без Pi") +
          "</h2><p>" +
          formatInlineNF(forClass) +
          "</p>" +
          (classTrack && classTrack.tracks
            ? '<div class="nf-tracks">' +
              classTrack.tracks
                .map(function (t) {
                  return (
                    '<div class="nf-track"><strong>' +
                    escapeHtml(t.label) +
                    "</strong><p>" +
                    formatInlineNF(t.text) +
                    "</p></div>"
                  );
                })
                .join("") +
              "</div>"
            : "") +
          (classTrack && classTrack.sharedTools
            ? "<h3>" +
              (en ? "Shared Track B tools" : "Спільні інструменти треку B") +
              "</h3><ul>" +
              classTrack.sharedTools
                .map(function (x) {
                  return "<li>" + formatInlineNF(x) + "</li>";
                })
                .join("") +
              "</ul>"
            : "") +
          "</section>"
        : "") +
      '<section class="book-panel"><h2>' +
      (en ? "How to use this book" : "Як користуватися книгою") +
      "</h2><ul>" +
      how +
      "</ul></section>" +
      '<section class="book-panel"><h2>' +
      (en ? "About this book" : "Короткий опис") +
      "</h2><p>" +
      escapeHtml(book.description) +
      "</p></section>" +
      '<section class="book-panel"><h2>' +
      (en ? "Contents" : "Зміст") +
      "</h2>" +
      partsHtml +
      "</section>" +
      '<section class="book-panel"><h2>' +
      (en ? "Glossary & index" : "Словник і покажчик") +
      "</h2><p>" +
      escapeHtml((book.backMatter && book.backMatter.glossaryNote) || "") +
      "</p><p>" +
      escapeHtml((book.backMatter && book.backMatter.indexNote) || "") +
      "</p>" +
      renderMergedGlossaryHtml(book) +
      "</section>" +
      '<div class="book-actions">' +
      '<a class="btn btn--primary btn--wide" href="chapter.html?book=' +
      book.id +
      "&id=" +
      firstOpen +
      '">' +
      (en ? "▶ Start the book" : "▶ Почати книгу") +
      "</a>" +
      '<button type="button" class="btn btn--ghost btn--wide" data-export-pdf="' +
      book.id +
      '">' +
      (en ? "📄 Save book as PDF (A4)" : "📄 Зберегти книгу як PDF (A4)") +
      "</button></div>";

    var pdfBtn = root.querySelector("[data-export-pdf]");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", function () {
        exportBookPdf(book.id);
      });
    }
  }

  function paintBook(root, book, meta) {
    if (book.format === "nonfiction") {
      paintNonfictionBook(root, book, meta);
      return;
    }
    var uk = book.lang === "uk";
    document.title =
      (uk ? "Книга " : "Książka ") +
      book.number +
      " · " +
      book.title +
      " · MISJE WIEDZY";
    document.documentElement.style.setProperty("--book-color", book.color);
    document.documentElement.style.setProperty("--book-soft", book.colorSoft);
    document.documentElement.style.setProperty("--book-accent", book.accent);

    var firstOpen = 1;
    for (var i = 1; i <= book.chaptersCount; i++) {
      if (!chapterDone(book.id, i)) {
        firstOpen = i;
        break;
      }
      if (i === book.chaptersCount) firstOpen = 1;
    }

    var toc = book.chapters
      .map(function (ch) {
        var done = chapterDone(book.id, ch.id);
        return (
          '<a class="toc-item' +
          (done ? " is-done" : "") +
          '" href="chapter.html?book=' +
          book.id +
          "&id=" +
          ch.id +
          '">' +
          '<span class="toc-item__num">' +
          ch.id +
          "</span>" +
          '<img src="' +
          iconPath(ch.icon) +
          '" alt="">' +
          "<span>" +
          escapeHtml(ch.title) +
          "</span>" +
          "</a>"
        );
      })
      .join("");

    root.innerHTML =
      '<a class="back-link" href="index.html">' +
      (uk ? "← Полиця з книгами" : "← Półka z książkami") +
      "</a>" +
      '<section class="book-cover" style="--book-color:' +
      book.color +
      ";--book-accent:" +
      book.accent +
      '">' +
      '<div class="book-cover__badge">' +
      (uk ? "Книга " : "Książka ") +
      book.number +
      (uk ? " · UA" : "") +
      "</div>" +
      '<img class="book-cover__icon" src="' +
      iconPath(book.icon) +
      '" alt="">' +
      "<h1>" +
      escapeHtml(book.title) +
      "</h1>" +
      (book.tagline
        ? '<p class="book-cover__tagline">' + escapeHtml(book.tagline) + "</p>"
        : "") +
      '<p class="book-cover__sub">' +
      escapeHtml(book.subtitle) +
      "</p>" +
      '<div class="book-cover__stars" aria-label="' +
      (uk ? "Оцінка" : "Ocena") +
      '">' +
      starsHtml(book.rating) +
      "</div>" +
      '<div class="book-cover__stats">' +
      "<div><strong>" +
      book.chaptersCount +
      "</strong><span>" +
      (uk ? "розділів" : "rozdziałów") +
      "</span></div>" +
      "<div><strong>~" +
      book.readingMinutes +
      " min</strong><span>" +
      (uk ? "час читання" : "czas czytania") +
      "</span></div>" +
      "<div><strong>" +
      escapeHtml(book.level) +
      "</strong><span>" +
      (uk ? "вік" : "poziom") +
      "</span></div>" +
      "</div>" +
      "</section>" +
      '<section class="book-panel">' +
      "<h2>" +
      (uk ? "Короткий опис" : "Krótki opis") +
      "</h2>" +
      "<p>" +
      escapeHtml(book.description) +
      "</p>" +
      "</section>" +
      '<section class="book-panel book-hero">' +
      '<img src="' +
      iconPath(book.hero.icon) +
      '" alt="">' +
      "<div><h2>" +
      (uk ? "Для кого · " : "Bohater · ") +
      escapeHtml(book.hero.name) +
      "</h2><p>" +
      escapeHtml(book.hero.bio) +
      "</p></div>" +
      "</section>" +
      '<section class="book-panel">' +
      "<h2>" +
      (uk ? "Зміст" : "Spis treści") +
      "</h2>" +
      '<div class="toc-list">' +
      toc +
      "</div>" +
      "</section>" +
      '<div class="book-actions">' +
      '<a class="btn btn--primary btn--wide" href="chapter.html?book=' +
      book.id +
      "&id=" +
      firstOpen +
      '">' +
      (uk ? "▶ Почати книгу" : "▶ Rozpocznij książkę") +
      "</a>" +
      '<button type="button" class="btn btn--ghost btn--wide" data-export-pdf="' +
      book.id +
      '">' +
      (uk ? "📄 Зберегти книгу як PDF (A4)" : "📄 Zapisz książkę jako PDF (A4)") +
      "</button>" +
      "</div>";
    var pdfBtn = root.querySelector("[data-export-pdf]");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", function () {
        exportBookPdf(book.id);
      });
    }
  }

  /* ——— CHAPTER ——— */
  function normalize(str) {
    return String(str)
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function renderStory(story) {
    return story
      .map(function (chunk) {
        if (chunk.type === "image") {
          var webp = illPath(chunk.src);
          var imgComment = "<!-- IMAGE: " + String(chunk.src || "") + " -->";
          if (chunk.prompt) {
            imgComment =
              "<!-- IMAGE: " +
              String(chunk.src || "") +
              "\n\nPROMPT:\n\n" +
              String(chunk.prompt) +
              "\n-->";
          }
          return (
            imgComment +
            '<figure class="story-image" role="button" tabindex="0" aria-label="Powiększ ilustrację">' +
            '<img src="' +
            webp +
            '" alt="' +
            escapeHtml(chunk.alt || "") +
            '" loading="lazy">' +
            (chunk.caption
              ? "<figcaption>" + escapeHtml(chunk.caption) + "</figcaption>"
              : "") +
            "</figure>"
          );
        }
        // Split into short paragraphs; dialogues (lines starting with — or -) get own lines
        var raw = String(chunk.text || "");
        var parts = raw.split(/\n+/).map(function (s) {
          return s.trim();
        }).filter(Boolean);
        if (parts.length === 0 && raw.trim()) parts = [raw.trim()];
        var paras = parts
          .map(function (line) {
            var isDialogue = /^[—\-–]/.test(line);
            return (
              '<p' +
              (isDialogue ? ' class="is-dialogue"' : "") +
              ">" +
              formatStoryInline(line) +
              "</p>"
            );
          })
          .join("");
        return '<div class="story-chunk">' + paras + "</div>";
      })
      .join("");
  }

  function renderWords(words, uk) {
    return (
      '<div class="word-grid">' +
      words
        .map(function (w) {
          var art = w.image
            ? w.image.indexOf("words/") === 0
              ? "assets/illustrations/" + w.image.replace(/\.(svg|png|webp)$/i, "") + ".webp"
              : illPath(w.image)
            : "";
          var artBlock = art
            ? '<img class="word-card__art" src="' +
              art +
              '" alt="' +
              escapeHtml(w.term) +
              '" loading="lazy" onerror="this.style.display=\'none\'">'
            : '<div class="word-card__art word-card__art--empty" aria-hidden="true"></div>';
          var whatL = uk ? "Що це?" : "Co to jest?";
          var whyL = uk ? "Навіщо?" : "Do czego służy?";
          var remL = uk ? "Запам’ятай" : "Zapamiętaj";
          var uaBlock = uk
            ? ""
            : '<div class="ua-panel"><button type="button" class="ua-toggle" aria-expanded="false" data-ua-toggle>Pokaż po ukraińsku</button>' +
              '<div class="ua-content" data-ua-content hidden>' +
              "<p><strong>Що це?</strong> " +
              escapeHtml((w.ua && w.ua.what) || w.what) +
              "</p><p><strong>Навіщо?</strong> " +
              escapeHtml((w.ua && w.ua.why) || w.why) +
              "</p><p><strong>Запамʼятай</strong> " +
              escapeHtml((w.ua && w.ua.remember) || w.remember) +
              "</p></div></div>";
          return (
            '<article class="word-card">' +
            artBlock +
            '<div class="word-card__body">' +
            '<h3 class="word-card__term">' +
            escapeHtml(w.term) +
            "</h3>" +
            '<div class="word-block"><h4>' +
            whatL +
            "</h4><p>" +
            escapeHtml(w.what) +
            "</p></div>" +
            '<div class="word-block"><h4>' +
            whyL +
            "</h4><p>" +
            escapeHtml(w.why) +
            "</p></div>" +
            '<div class="word-block"><h4>' +
            remL +
            "</h4><p>" +
            escapeHtml(w.remember) +
            "</p></div>" +
            uaBlock +
            "</div></article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderQuestions(questions) {
    return questions
      .map(function (q) {
        return (
          '<div class="question-card"><div class="question-card__tag">' +
          escapeHtml(q.tag || "Pomyśl") +
          "</div><p>" +
          escapeHtml(q.prompt) +
          '</p><button type="button" class="answer-toggle" aria-expanded="false" data-answer-toggle>Pokaż przykładową odpowiedź</button>' +
          '<div class="answer-sample" data-answer-sample hidden>' +
          escapeHtml(q.sample) +
          "</div></div>"
        );
      })
      .join("");
  }

  function renderTask(task, index) {
    var typeLabel = {
      truefalse: "Prawda / Fałsz",
      match: "Połącz",
      fill: "Uzupełnij",
      order: "Ułóż kolejność",
      imagematch: "Dopasuj obrazek",
      find: "Wybierz odpowiedź",
      open: "Zadanie otwarte",
    };
    var body = "";
    if (task.typeLabel) typeLabel[task.type] = task.typeLabel;

    if (task.type === "truefalse") {
      body =
        '<div class="tf-list">' +
        task.items
          .map(function (item, i) {
            return (
              '<div class="tf-item" data-tf="' +
              i +
              '"><span>' +
              escapeHtml(item.text) +
              '</span><div class="tf-btns">' +
              '<button type="button" class="chip-btn" data-val="true">Prawda</button>' +
              '<button type="button" class="chip-btn" data-val="false">Fałsz</button>' +
              "</div></div>"
            );
          })
          .join("") +
        "</div>";
    }
    if (task.type === "match") {
      var options = task.options
        .map(function (o) {
          return '<option value="' + escapeHtml(o) + '">' + escapeHtml(o) + "</option>";
        })
        .join("");
      body =
        '<div class="match-grid">' +
        task.pairs
          .map(function (p, i) {
            return (
              '<div class="match-row" data-match="' +
              i +
              '"><span>' +
              escapeHtml(p.left) +
              '</span><select><option value="">— wybierz —</option>' +
              options +
              "</select></div>"
            );
          })
          .join("") +
        "</div>";
    }
    if (task.type === "fill") {
      body =
        '<div class="fill-list">' +
        task.items
          .map(function (item, i) {
            return (
              '<div class="fill-row" data-fill="' +
              i +
              '"><span>' +
              escapeHtml(item.prompt) +
              '</span><input type="text" autocomplete="off" placeholder="…"></div>'
            );
          })
          .join("") +
        "</div>";
    }
    if (task.type === "order") {
      body =
        '<div class="order-list">' +
        task.items
          .map(function (item) {
            var opts = "";
            for (var n = 1; n <= task.items.length; n++) {
              opts += '<option value="' + n + '">' + n + "</option>";
            }
            return (
              '<div class="order-item" data-order-id="' +
              escapeHtml(item.id) +
              '"><span>' +
              escapeHtml(item.text) +
              "</span><select>" +
              opts +
              "</select></div>"
            );
          })
          .join("") +
        "</div>";
    }
    if (task.type === "imagematch") {
      body =
        '<p style="margin-top:0;color:var(--ink-soft);font-weight:700">' +
        escapeHtml(task.prompt) +
        '</p><div class="image-match">' +
        task.choices
          .map(function (c) {
            return (
              '<button type="button" class="image-match__item" data-img="' +
              escapeHtml(c.id) +
              '"><img src="' +
              iconPath(c.icon) +
              '" alt=""><div>' +
              escapeHtml(c.label) +
              "</div></button>"
            );
          })
          .join("") +
        "</div>";
    }
    if (task.type === "find") {
      body =
        '<div class="find-options">' +
        task.options
          .map(function (o) {
            return (
              '<label><input type="radio" name="find-' +
              index +
              '" value="' +
              escapeHtml(o.id) +
              '"><span>' +
              escapeHtml(o.text) +
              "</span></label>"
            );
          })
          .join("") +
        "</div>";
    }
    if (task.type === "open") {
      body =
        '<p style="margin:0 0 0.75rem;color:var(--ink-soft)">' +
        escapeHtml(task.prompt || "") +
        '</p><button type="button" class="answer-toggle" aria-expanded="false" data-answer-toggle>Pokaż przykład / wskazówkę</button>' +
        '<div class="answer-sample" data-answer-sample hidden>' +
        escapeHtml(task.sample || "") +
        "</div>";
    }

    return (
      '<section class="task" data-task-index="' +
      index +
      '" data-task-type="' +
      task.type +
      '"><div class="task__type">' +
      (typeLabel[task.type] || task.type) +
      "</div><h3>" +
      escapeHtml(task.title) +
      "</h3>" +
      body +
      (task.type === "open"
        ? ""
        : '<div class="task-actions"><button type="button" class="btn btn--primary" data-check-task>Sprawdź</button></div>') +
      '<div class="feedback" data-feedback></div></section>'
    );
  }

  function checkTask(taskEl, task) {
    var feedback = taskEl.querySelector("[data-feedback]");
    var ok = false;

    if (task.type === "truefalse") {
      ok = true;
      var answered = 0;
      task.items.forEach(function (item, i) {
        var row = taskEl.querySelector('[data-tf="' + i + '"]');
        var selected = row.querySelector(".chip-btn.is-selected");
        if (!selected) {
          ok = false;
          return;
        }
        answered++;
        var val = selected.getAttribute("data-val") === "true";
        row.querySelectorAll(".chip-btn").forEach(function (b) {
          b.classList.remove("is-correct", "is-wrong");
        });
        if (val === item.answer) selected.classList.add("is-correct");
        else {
          selected.classList.add("is-wrong");
          ok = false;
        }
      });
      if (answered !== task.items.length) ok = false;
    }
    if (task.type === "match") {
      ok = true;
      task.pairs.forEach(function (p, i) {
        var sel = taskEl.querySelector('[data-match="' + i + '"] select');
        if (!sel || sel.value !== p.right) ok = false;
      });
    }
    if (task.type === "fill") {
      ok = true;
      task.items.forEach(function (item, i) {
        var input = taskEl.querySelector('[data-fill="' + i + '"] input');
        var val = normalize(input.value);
        var accepted = (item.accept || [item.answer]).map(normalize);
        if (accepted.indexOf(val) === -1) ok = false;
      });
    }
    if (task.type === "order") {
      ok = true;
      task.correctOrder.forEach(function (id, idx) {
        var row = taskEl.querySelector('[data-order-id="' + id + '"] select');
        if (!row || Number(row.value) !== idx + 1) ok = false;
      });
    }
    if (task.type === "imagematch") {
      var chosen = taskEl.querySelector(".image-match__item.is-selected");
      taskEl.querySelectorAll(".image-match__item").forEach(function (el) {
        el.classList.remove("is-correct", "is-wrong");
      });
      if (!chosen) ok = false;
      else if (chosen.getAttribute("data-img") === task.answer) {
        chosen.classList.add("is-correct");
        ok = true;
      } else {
        chosen.classList.add("is-wrong");
        ok = false;
      }
    }
    if (task.type === "find") {
      var radio = taskEl.querySelector('input[type="radio"]:checked');
      ok = !!(radio && radio.value === task.answer);
    }
    if (task.type === "open") {
      ok = true;
    }

    if (ok) {
      feedback.textContent = task.success || "Świetnie!";
      feedback.className = "feedback is-ok";
    } else {
      feedback.textContent = task.hint || "Spróbuj jeszcze raz.";
      feedback.className = "feedback is-bad";
    }
    return ok;
  }

  function ensureLightbox() {
    var box = document.getElementById("story-lightbox");
    if (box) return box;
    box = document.createElement("div");
    box.id = "story-lightbox";
    box.className = "story-lightbox";
    box.hidden = true;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Powiększona ilustracja");
    box.innerHTML =
      '<button type="button" class="story-lightbox__close" aria-label="Zamknij">×</button>' +
      '<img class="story-lightbox__img" alt="">';
    document.body.appendChild(box);

    function closeLightbox() {
      box.hidden = true;
      box.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      box.querySelector(".story-lightbox__img").removeAttribute("src");
    }

    box.addEventListener("click", function () {
      closeLightbox();
    });
    box.querySelector(".story-lightbox__close").addEventListener("click", function (e) {
      e.stopPropagation();
      closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !box.hidden) closeLightbox();
    });
    return box;
  }

  function openLightbox(img) {
    var box = ensureLightbox();
    var full = box.querySelector(".story-lightbox__img");
    full.src = img.currentSrc || img.src;
    full.alt = img.alt || "";
    box.hidden = false;
    box.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  }

  function bindImageLightbox() {
    document.querySelectorAll(".story-image").forEach(function (figure) {
      function toggle() {
        var img = figure.querySelector("img");
        if (!img) return;
        openLightbox(img);
      }
      figure.addEventListener("click", function (e) {
        if (e.target.closest("figcaption")) return;
        toggle();
      });
      figure.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  function bindChapter(chapter, bookId, total) {
    bindImageLightbox();
    document.querySelectorAll("[data-export-pdf]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        exportBookPdf(btn.getAttribute("data-export-pdf") || bookId);
      });
    });
    document.querySelectorAll("[data-ua-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var panel = btn.parentElement.querySelector("[data-ua-content]");
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        btn.textContent = open ? "Pokaż po ukraińsku" : "Ukryj tłumaczenie";
        if (panel) {
          panel.hidden = open;
          panel.classList.toggle("is-open", !open);
        }
      });
    });

    document.querySelectorAll("[data-answer-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sample = btn.parentElement.querySelector("[data-answer-sample]");
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        btn.textContent = open
          ? "Pokaż przykładową odpowiedź"
          : "Ukryj przykładową odpowiedź";
        if (sample) {
          sample.hidden = open;
          sample.classList.toggle("is-open", !open);
        }
      });
    });

    document.querySelectorAll(".tf-btns .chip-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var row = btn.closest(".tf-item");
        row.querySelectorAll(".chip-btn").forEach(function (b) {
          b.classList.remove("is-selected", "is-correct", "is-wrong");
        });
        btn.classList.add("is-selected");
      });
    });

    document.querySelectorAll(".image-match__item").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".image-match");
        wrap.querySelectorAll(".image-match__item").forEach(function (b) {
          b.classList.remove("is-selected", "is-correct", "is-wrong");
        });
        btn.classList.add("is-selected");
      });
    });

    document.querySelectorAll("[data-check-task]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var taskEl = btn.closest(".task");
        var idx = Number(taskEl.getAttribute("data-task-index"));
        checkTask(taskEl, chapter.tasks[idx]);
      });
    });

    var nextBtn = document.querySelector("[data-next-chapter]");
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        markChapterComplete(bookId, chapter.id);
        setProgressUI(bookId, total);
        showToast("Rozdział " + chapter.id + " ukończony! ✓");
        var href = nextBtn.getAttribute("href");
        setTimeout(function () {
          window.location.href = href;
        }, 650);
      });
    }
  }

  function renderChapterPage() {
    var bookId = qs("book") || "programista";
    var chapterId = parseInt(qs("id") || "1", 10);
    var root = document.getElementById("chapter-root");
    var meta = window.LIBRARY && window.LIBRARY.getBook(bookId);

    if (!meta || meta.status !== "ready") {
      root.innerHTML =
        '<div class="panel"><h2>Książka niedostępna</h2><a href="index.html">Wróć na półkę</a></div>';
      return;
    }

    var label = document.querySelector("[data-chapter-book-label]");
    if (label) label.textContent = meta.title;

    Promise.all([
      loadScript("data/" + bookId + "/book.js"),
      loadSysadminExtras(bookId),
      loadScript(
        "data/" + bookId + "/chapter" + String(chapterId).padStart(2, "0") + ".js"
      ),
    ])
      .then(function () {
        var book =
          window["BOOK_" + bookId.toUpperCase()] || window.BOOK_PROGRAMISTA;
        var chapter = window["CHAPTER_" + String(chapterId).padStart(2, "0")];
        if (!chapter) throw new Error("Brak rozdziału " + chapterId);
        paintChapter(root, book, chapter);
        setProgressUI(bookId, book.chaptersCount);
        bindChapter(chapter, bookId, book.chaptersCount);
      })
      .catch(function (err) {
        root.innerHTML =
          '<div class="panel"><h2>Ups!</h2><p>' +
          escapeHtml(err.message) +
          '</p><a href="book.html?id=' +
          bookId +
          '">Wróć do książki</a></div>';
      });
  }


  function formatInlineNF(text) {
    return escapeHtml(String(text || ""))
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  /** Terminal/code block: UA comments (#…), prompt user@host:path$ cmd, output lines. */
  function formatNFCode(text) {
    return String(text || "")
      .split("\n")
      .map(function (line) {
        var esc = escapeHtml(line);
        if (/^\s*#/.test(line)) {
          return '<span class="nf-code-comment">' + esc + "</span>";
        }
        var m = line.match(/^(\S+@\S+:\S+\$)(\s*)(.*)$/);
        if (m) {
          return (
            '<span class="nf-code-prompt">' +
            escapeHtml(m[1]) +
            "</span>" +
            escapeHtml(m[2]) +
            (m[3]
              ? '<span class="nf-code-cmd">' + escapeHtml(m[3]) + "</span>"
              : "")
          );
        }
        if (line.trim() === "") return "";
        return '<span class="nf-code-out">' + esc + "</span>";
      })
      .join("\n");
  }

  function renderNFCodeBlock(b) {
    return (
      '<pre class="nf-code" data-lang="terminal"><code>' +
      formatNFCode(b.text) +
      "</code></pre>"
    );
  }

  function renderNFCallout(b) {
    var variant = b.variant || "note";
    return (
      '<aside class="nf-callout nf-callout--' +
      escapeHtml(variant) +
      '">' +
      (b.point
        ? '<span class="nf-callout__point" aria-hidden="true">' +
          escapeHtml(b.point) +
          "</span>"
        : "") +
      '<div class="nf-callout__body">' +
      (b.title
        ? '<p class="nf-callout__title">' + escapeHtml(b.title) + "</p>"
        : "") +
      (b.text ? "<p>" + formatInlineNF(b.text) + "</p>" : "") +
      "</div></aside>"
    );
  }

  function renderNFWow(b) {
    return (
      '<aside class="nf-wow">' +
      '<div class="nf-rubric">' +
      escapeHtml(b.title || nfT("✨ Це дивовижно!", "✨ Wow!")) +
      "</div>" +
      (b.text ? "<p>" + formatInlineNF(b.text) + "</p>" : "") +
      "</aside>"
    );
  }

  function renderNFDiagram(b) {
    var layout = b.layout || "stack";
    var items = (b.items || [])
      .map(function (it, idx) {
        var label = typeof it === "string" ? it : it.label || "";
        var text = typeof it === "string" ? "" : it.text || "";
        return (
          '<div class="nf-diagram__item">' +
          '<span class="nf-diagram__num" aria-hidden="true">' +
          (idx + 1) +
          "</span>" +
          '<div class="nf-diagram__content">' +
          (label ? "<strong>" + formatInlineNF(label) + "</strong>" : "") +
          (text ? "<p>" + formatInlineNF(text) + "</p>" : "") +
          "</div></div>"
        );
      })
      .join("");
    return (
      '<figure class="nf-diagram nf-diagram--' +
      escapeHtml(layout) +
      '">' +
      (b.title ? '<figcaption class="nf-diagram__title">' + escapeHtml(b.title) + "</figcaption>" : "") +
      '<div class="nf-diagram__grid">' +
      items +
      "</div>" +
      (b.caption ? '<p class="nf-diagram__caption">' + escapeHtml(b.caption) + "</p>" : "") +
      "</figure>"
    );
  }

  function renderNFSpread(b) {
    var layout = b.layout || "hero-right";
    var hero = b.hero || {};
    var heroSrc = hero.src ? illPath(hero.src) : "";
    var heroHtml = heroSrc
      ? '<figure class="nf-spread__hero story-image" role="button" tabindex="0" aria-label="' +
        nfT("Збільшити", "Enlarge") +
        '">' +
        '<img src="' +
        heroSrc +
        '" alt="' +
        escapeHtml(hero.alt || "") +
        '" loading="lazy">' +
        (hero.caption ? "<figcaption>" + escapeHtml(hero.caption) + "</figcaption>" : "") +
        "</figure>"
      : "";
    var callouts = (b.callouts || [])
      .map(function (c) {
        return (
          '<li class="nf-spread__callout">' +
          '<span class="nf-spread__callout-num" aria-hidden="true">' +
          escapeHtml(String(c.num || "")) +
          "</span>" +
          "<span>" +
          formatInlineNF(c.text || "") +
          "</span></li>"
        );
      })
      .join("");
    var supporting = (b.supporting || [])
      .map(function (s) {
        if (!s.src) return "";
        return (
          '<figure class="nf-spread__support">' +
          '<img src="' +
          illPath(s.src) +
          '" alt="' +
          escapeHtml(s.alt || "") +
          '" loading="lazy">' +
          (s.caption ? "<figcaption>" + escapeHtml(s.caption) + "</figcaption>" : "") +
          "</figure>"
        );
      })
      .join("");
    return (
      '<section class="nf-spread nf-spread--' +
      escapeHtml(layout) +
      '">' +
      '<div class="nf-spread__text">' +
      (b.kicker ? '<p class="nf-spread__kicker">' + escapeHtml(b.kicker) + "</p>" : "") +
      (b.title ? '<h2 class="nf-spread__title">' + escapeHtml(b.title) + "</h2>" : "") +
      (b.lead ? '<p class="nf-spread__lead">' + formatInlineNF(b.lead) + "</p>" : "") +
      (b.body ? '<div class="nf-spread__body">' + formatInlineNF(b.body) + "</div>" : "") +
      (callouts ? '<ol class="nf-spread__callouts">' + callouts + "</ol>" : "") +
      "</div>" +
      '<div class="nf-spread__media">' +
      heroHtml +
      supporting +
      "</div>" +
      (b.foot ? '<p class="nf-spread__foot">' + formatInlineNF(b.foot) + "</p>" : "") +
      "</section>"
    );
  }

  function renderNFContent(blocks) {
    return (blocks || [])
      .map(function (b) {
        if (b.type === "text") {
          return '<div class="nf-text"><p>' + formatInlineNF(b.text) + "</p></div>";
        }
        if (b.type === "ul" || b.type === "list") {
          var listItems = (b.items || [])
            .map(function (it) {
              return "<li>" + formatInlineNF(it) + "</li>";
            })
            .join("");
          return '<ul class="nf-ul">' + listItems + "</ul>";
        }
        if (b.type === "h2") {
          return "<h2 class=\"nf-h2\">" + escapeHtml(b.text) + "</h2>";
        }
        if (b.type === "image") {
          var src = illPath(b.src);
          return (
            '<figure class="story-image" role="button" tabindex="0" aria-label="' +
            nfT("Збільшити", "Enlarge") +
            '">' +
            '<img src="' + src + '" alt="' + escapeHtml(b.alt || "") + '" loading="lazy">' +
            (b.caption ? "<figcaption>" + escapeHtml(b.caption) + "</figcaption>" : "") +
            "</figure>"
          );
        }
        if (b.type === "code" || b.type === "terminal") {
          return renderNFCodeBlock(b);
        }
        if (b.type === "nanowindow") {
          var nwFile = escapeHtml(b.file || "hello.txt");
          var nwBody = escapeHtml(b.body || nfT("Привіт, nano!", "Hello, nano!"));
          var nwStatus = escapeHtml(b.status || "New File");
          var nwMod = b.modified ? '<span class="nf-nano-mod">Modified</span>' : "";
          return (
            '<figure class="nf-nano-wrap">' +
            '<div class="nf-nano" role="img" aria-label="' +
            nfT("Вигляд вікна редактора nano", "nano editor window") +
            '">' +
            '<div class="nf-nano-titlebar"><span class="nf-nano-dots" aria-hidden="true"></span><span class="nf-nano-title">pi@raspberrypi: nano</span></div>' +
            '<div class="nf-nano-header"><span>GNU nano</span><span class="nf-nano-file">' +
            nwFile +
            "</span>" +
            nwMod +
            "</div>" +
            '<div class="nf-nano-body"><span class="nf-nano-text">' +
            nwBody +
            '</span><span class="nf-nano-cursor" aria-hidden="true"></span></div>' +
            '<div class="nf-nano-status">[ ' +
            nwStatus +
            " ]</div>" +
            '<div class="nf-nano-footer">' +
            (activeNfLang === "en"
              ? "<div><b>^G</b> Help</div><div><b>^O</b> Write Out</div><div><b>^W</b> Where Is</div><div><b>^K</b> Cut</div>" +
                "<div><b>^X</b> Exit</div><div><b>^R</b> Read File</div><div><b>^U</b> Paste</div><div><b>^C</b> Location</div>"
              : "<div><b>^G</b> Довідка</div><div><b>^O</b> Зберегти</div><div><b>^W</b> Пошук</div><div><b>^K</b> Вирізати</div>" +
                "<div><b>^X</b> Вийти</div><div><b>^R</b> Читати файл</div><div><b>^U</b> Вставити</div><div><b>^C</b> Позиція</div>") +
            "</div></div>" +
            (b.caption
              ? "<figcaption>" + escapeHtml(b.caption) + "</figcaption>"
              : "") +
            "</figure>"
          );
        }
        if (b.type === "think") {
          var opts = (b.options || [])
            .map(function (o) {
              return (
                '<label class="nf-option"><input type="radio" name="think-' +
                escapeHtml(b.id) +
                '" value="' +
                escapeHtml(o.id) +
                '"> <span>' +
                escapeHtml(o.text) +
                "</span></label>"
              );
            })
            .join("");
          return (
            '<div class="nf-think" data-think-id="' +
            escapeHtml(b.id) +
            '" data-answer="' +
            escapeHtml(b.answer || "") +
            '"><div class="nf-rubric">' +
            nfT("🤔 Як ти думаєш?", "🤔 What do you think?") +
            "</div><p>" +
            formatInlineNF(b.question) +
            '</p><div class="nf-options">' +
            opts +
            '</div><p class="nf-hint">' +
            nfT(
              "Не поспішай. Відповідь з’явиться трохи нижче.",
              "Don't rush. The answer will appear below."
            ) +
            "</p></div>"
          );
        }
        if (b.type === "reveal") {
          return (
            '<div class="nf-reveal" data-reveal-for="' +
            escapeHtml(b.thinkId || "") +
            '"><div class="nf-rubric">' +
            nfT("✅ Відповідь", "✅ Answer") +
            "</div><p>" +
            formatInlineNF(b.text) +
            "</p></div>"
          );
        }
        if (b.type === "try") {
          var tryBody = b.body ? "<div>" + formatInlineNF(b.body) + "</div>" : "";
          var tryList = "";
          if (b.checklist && b.checklist.length) {
            tryList =
              '<ul class="nf-checklist">' +
              b.checklist
                .map(function (it) {
                  return (
                    '<li><span class="nf-check-box" aria-hidden="true">□</span> ' +
                    formatInlineNF(it) +
                    "</li>"
                  );
                })
                .join("") +
              "</ul>";
          }
          if (b.footer) {
            tryBody += "<p class=\"nf-try-footer\">" + formatInlineNF(b.footer) + "</p>";
          }
          tryBody +=
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
            tryBody +
            tryList +
            "</div>"
          );
        }
        if (b.type === "fact") {
          var factExtra = "";
          if (b.items && b.items.length) {
            factExtra =
              '<ul class="nf-ul nf-fact-list">' +
              b.items
                .map(function (it) {
                  return "<li>" + formatInlineNF(it) + "</li>";
                })
                .join("") +
              "</ul>";
          }
          return (
            '<aside class="nf-fact"><div class="nf-rubric">💡 ' +
            escapeHtml(b.title || nfT("Цікавий факт", "Fun fact")) +
            "</div>" +
            (b.text ? "<p>" + formatInlineNF(b.text) + "</p>" : "") +
            factExtra +
            "</aside>"
          );
        }
        if (b.type === "callout") {
          return renderNFCallout(b);
        }
        if (b.type === "wow") {
          return renderNFWow(b);
        }
        if (b.type === "diagram") {
          return renderNFDiagram(b);
        }
        if (b.type === "spread") {
          return renderNFSpread(b);
        }
        if (b.type === "diary") {
          var lines = (b.lines || [])
            .map(function (line) {
              return (
                "<p>" +
                escapeHtml(line) +
                '</p><div class="nf-lines" aria-hidden="true"><span></span><span></span></div>'
              );
            })
            .join("");
          return (
            '<div class="nf-diary"><div class="nf-rubric">' +
            nfT("📒 Щоденник адміністратора", "📒 Admin Journal") +
            "</div>" +
            lines +
            "</div>"
          );
        }
        if (b.type === "draw") {
          return (
            '<div class="nf-draw"><div class="nf-rubric">' +
            nfT("✏ Намалюй", "✏ Draw") +
            "</div><p>" +
            formatInlineNF(b.text) +
            "</p><div class=\"nf-draw-box\"></div></div>"
          );
        }
        if (b.type === "errors") {
          var items = (b.items || [])
            .map(function (it) {
              if (typeof it === "string") {
                return "<li>" + formatInlineNF(it) + "</li>";
              }
              return (
                '<li class="nf-error-item"><p class="nf-error-myth"><strong>❌ ' +
                escapeHtml(it.title || nfT("Помилка", "Mistake")) +
                "</strong></p><p class=\"nf-error-quote\">«" +
                formatInlineNF(it.myth || "") +
                "»</p><p class=\"nf-error-truth\">" +
                formatInlineNF(it.truth || "") +
                "</p></li>"
              );
            })
            .join("");
          return (
            '<div class="nf-errors"><div class="nf-rubric">' +
            nfT("⚠ Типові помилки", "⚠ Common mistakes") +
            '</div><ul class="nf-errors-list">' +
            items +
            "</ul></div>"
          );
        }
        if (b.type === "project") {
          var steps = (b.steps || [])
            .map(function (st) {
              return "<li>" + formatInlineNF(st) + "</li>";
            })
            .join("");
          return (
            '<div class="nf-project"><div class="nf-rubric">' +
            nfT("🔧 Мініпроєкт", "🔧 Mini project") +
            "</div><h3>" +
            escapeHtml(b.title || "") +
            "</h3><ol>" +
            steps +
            "</ol></div>"
          );
        }
        return "";
      })
      .join("");
  }

  function nfCheckPrompt(item) {
    if (item.type === "tf") return item.text || item.prompt || "";
    return item.prompt || item.text || "";
  }

  function nfCheckCorrectLabel(item) {
    if (item.type === "mc" && item.options) {
      return item.options[item.answer];
    }
    if (item.type === "tf") {
      return item.answer ? nfT("Правда", "True") : nfT("Неправда", "False");
    }
    if (item.type === "match" && item.pairs) {
      return item.pairs
        .map(function (pr) {
          return pr[0] + " → " + pr[1];
        })
        .join("; ");
    }
    if (item.type === "draw") {
      return item.answerLabel || nfT("Твій малюнок (перевір за поясненням)", "Your drawing (check against the explanation)");
    }
    return item.answer || item.sample || item.answerLabel || "";
  }

  function renderNFCheckQuestion(item, i) {
    var n = i + 1;
    var body = "";
    var prompt = nfCheckPrompt(item);
    var badge = item.optional
      ? '<span class="nf-check-optional">' +
        nfT("бонус — за бажанням", "bonus — optional") +
        "</span>"
      : '<span class="nf-check-core">' +
        nfT("обов’язково для себе", "required for you") +
        "</span>";

    if (item.type === "mc") {
      body =
        '<p class="nf-check-prompt">' +
        badge +
        " " +
        escapeHtml(prompt) +
        '</p><ul class="nf-check-opts">' +
        (item.options || [])
          .map(function (o) {
            return '<li><span class="nf-check-bullet" aria-hidden="true">○</span> ' + escapeHtml(o) + "</li>";
          })
          .join("") +
        "</ul>";
    } else if (item.type === "tf") {
      body =
        '<p class="nf-check-prompt">' +
        badge +
        " <strong>" +
        nfT("Правда чи неправда?", "True or false?") +
        "</strong><br>" +
        escapeHtml(prompt) +
        '</p><ul class="nf-check-opts">' +
        '<li><span class="nf-check-bullet" aria-hidden="true">○</span> ' +
        nfT("Правда", "True") +
        "</li>" +
        '<li><span class="nf-check-bullet" aria-hidden="true">○</span> ' +
        nfT("Неправда", "False") +
        "</li>" +
        "</ul>";
    } else if (item.type === "fill") {
      body =
        '<p class="nf-check-prompt">' +
        badge +
        " " +
        escapeHtml(prompt) +
        '</p><p class="nf-check-blank">____________________</p>';
    } else if (item.type === "whatif" || item.type === "error" || item.type === "explain") {
      body =
        '<p class="nf-check-prompt">' +
        badge +
        " " +
        escapeHtml(prompt) +
        '</p><div class="nf-lines"><span></span><span></span><span></span></div>';
    } else if (item.type === "draw") {
      body =
        '<p class="nf-check-prompt">' +
        badge +
        " " +
        escapeHtml(prompt) +
        '</p><div class="nf-draw-box"></div>';
    } else if (item.type === "match") {
      var left = (item.pairs || []).map(function (pr) {
        return pr[0];
      });
      var right = (item.pairs || [])
        .map(function (pr) {
          return pr[1];
        })
        .slice()
        .reverse();
      body =
        '<p class="nf-check-prompt">' +
        badge +
        " " +
        escapeHtml(prompt || nfT("Поєднай пари:", "Match the pairs:")) +
        '</p><div class="nf-check-match"><div><p class="nf-muted">' +
        nfT("Ліва колонка", "Left column") +
        "</p><ul>" +
        left
          .map(function (x) {
            return "<li>" + escapeHtml(x) + "</li>";
          })
          .join("") +
        '</ul></div><div><p class="nf-muted">' +
        nfT("Права колонка (перемішана)", "Right column (shuffled)") +
        "</p><ul>" +
        right
          .map(function (x) {
            return "<li>" + escapeHtml(x) + "</li>";
          })
          .join("") +
        "</ul></div></div>";
    } else {
      body =
        "<p class=\"nf-check-prompt\">" +
        escapeHtml(prompt) +
        '</p><div class="nf-lines"><span></span><span></span></div>';
    }

    return (
      '<div class="nf-check-item"><span class="nf-check-num">' +
      n +
      ".</span><div>" +
      body +
      "</div></div>"
    );
  }

  function renderNFCheckHint(item, i) {
    var hint = item.hint || nfT("Пригадай головну ідею цього розділу.", "Remember the main idea of this chapter.");
    return (
      '<div class="nf-check-hint-item"><span class="nf-check-num">' +
      (i + 1) +
      ".</span><p>" +
      escapeHtml(hint) +
      "</p></div>"
    );
  }

  function renderNFCheckAnswer(item, i) {
    var label = nfCheckCorrectLabel(item);
    var why = item.explanation || item.sample || "";
    var mark = item.type === "tf" && item.answer === false ? "❌" : "✅";
    return (
      '<div class="nf-check-answer-item"><span class="nf-check-num">' +
      (i + 1) +
      '.</span><div><p class="nf-check-answer-label">' +
      nfT("Правильна відповідь:", "Correct answer:") +
      '</p><p class="nf-check-answer-value">' +
      mark +
      " " +
      escapeHtml(String(label)) +
      ".</p>" +
      (why ? "<p class=\"nf-check-why\">" + escapeHtml(why) + "</p>" : "") +
      "</div></div>"
    );
  }

  function renderClassWithoutPi(chapterId, book) {
    var data = window.SYSADMIN_CLASS_WITHOUT_PI;
    if (!data || !data.chapters || !data.chapters[chapterId]) return "";
    var ch = data.chapters[chapterId];
    var en = book && book.lang === "en";
    var list =
      '<ul class="nf-checklist nf-class-checklist">' +
      (ch.checklist || [])
        .map(function (it) {
          return (
            '<li><span class="nf-check-box" aria-hidden="true">□</span> ' +
            formatInlineNF(it) +
            "</li>"
          );
        })
        .join("") +
      "</ul>";
    return (
      '<section class="nf-class-track"><h2>' +
      (en ? "🏫 In class without a Pi" : "🏫 У класі без Pi") +
      "</h2>" +
      '<p class="nf-class-lead">' +
      (en
        ? "Track B — full practice without a board. <strong>Lesson outcome:</strong> "
        : "Трек B — повноцінна практика без плати. <strong>Результат уроку:</strong> ") +
      formatInlineNF(ch.outcome) +
      "</p>" +
      list +
      '<p class="nf-class-note">' +
      (en
        ? "Only one Pi for the whole class? Demo it at the end — kids already learn the ideas from this block."
        : "Один Pi на весь клас? Покажи демо в кінці — але розуміння діти вже отримають із цього блоку.") +
      "</p></section>"
    );
  }

  function renderNFCheck(check, opts) {
    opts = opts || {};
    var forPdf = !!opts.forPdf;
    var items = check || [];
    if (!items.length) {
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
    }
    var questions =
      '<p class="nf-check-lead">' +
      lead +
      "</p>" +
      '<div class="nf-check-list">' +
      items.map(renderNFCheckQuestion).join("") +
      "</div>";
    var hintsBlock =
      '<div class="nf-check-hints-list">' +
      items.map(renderNFCheckHint).join("") +
      "</div>";
    var answersBlock =
      '<div class="nf-check-answers-list">' +
      items.map(renderNFCheckAnswer).join("") +
      "</div>";
    if (forPdf) {
      return (
        questions +
        '<section class="nf-check-section nf-check-hints nf-check-hints--pdf">' +
        "<h3>💡 " + nfT("Підказки", "Hints") + "</h3>" +
        '<p class="nf-muted">' +
        nfT(
          "Підказки лише спрямовують — вони не розкривають повну відповідь.",
          "Hints only nudge you — they do not give the full answer."
        ) +
        "</p>" +
        hintsBlock +
        "</section>" +
        '<section class="nf-check-section nf-check-answers nf-check-answers--pdf">' +
        "<h3>✅ " + nfT("Відповіді", "Answers") + "</h3>" +
        '<p class="nf-muted nf-check-answers-note">' +
        nfT(
          "Відкривай цей блок лише після власної спроби. У друкованій версії він на окремій сторінці.",
          "Open this only after you try yourself. In print, it is on a separate page."
        ) +
        "</p>" +
        answersBlock +
        "</section>"
      );
    }
    return (
      questions +
      '<details class="nf-check-panel nf-check-hints" open>' +
      "<summary>💡 " + nfT("Підказки", "Hints") + "</summary>" +
      '<p class="nf-muted">' +
        nfT(
          "Підказки лише спрямовують — вони не розкривають повну відповідь.",
          "Hints only nudge you — they do not give the full answer."
        ) +
        "</p>" +
      hintsBlock +
      "</details>" +
      '<details class="nf-check-panel nf-check-answers">' +
      "<summary>✅ " + nfT("Відповіді", "Answers") + "</summary>" +
      '<p class="nf-muted">' +
      nfT("Відкривай лише після власної спроби.", "Open only after you try yourself.") +
      "</p>" +
      answersBlock +
      "</details>"
    );
  }

  function paintNonfictionChapter(root, book, chapter) {
    setActiveNfBook(book);
    var en = book.lang === "en";
    document.title =
      (en ? "Chapter " : "Розділ ") +
      chapter.id +
      " · " +
      chapter.title +
      " · " +
      book.title;
    document.documentElement.style.setProperty("--book-color", book.color);

    var nextHref =
      chapter.next != null
        ? "chapter.html?book=" + book.id + "&id=" + chapter.next
        : "book.html?id=" + book.id;
    var nextLabel =
      chapter.next != null
        ? en
          ? "Next chapter →"
          : "Наступний розділ →"
        : en
          ? "Back to contents"
          : "До змісту книги";

    var learn = (chapter.learn || [])
      .map(function (x) {
        return "<li>" + escapeHtml(x) + "</li>";
      })
      .join("");

    var cmds =
      (chapter.commands || []).length === 0
        ? en
          ? '<p class="nf-muted">No new terminal commands in this chapter.</p>'
          : '<p class="nf-muted">У цьому розділі нових команд термінала немає.</p>'
        : '<table class="nf-table"><thead><tr><th>' +
          (en ? "Command" : "Команда") +
          "</th><th>" +
          (en ? "What it does" : "Що робить") +
          "</th></tr></thead><tbody>" +
          chapter.commands
            .map(function (c) {
              return (
                "<tr><td><code>" +
                escapeHtml(c.cmd) +
                "</code></td><td>" +
                escapeHtml(c.does) +
                "</td></tr>"
              );
            })
            .join("") +
          "</tbody></table>";

    var gloss = (chapter.glossary || [])
      .map(function (g) {
        return (
          '<div class="nf-gloss-item"><strong>' +
          escapeHtml(g.term) +
          "</strong><p>" +
          escapeHtml(g.def) +
          "</p></div>"
        );
      })
      .join("");

    var rem = (chapter.remember || [])
      .map(function (r) {
        return "<li>" + escapeHtml(r) + "</li>";
      })
      .join("");

    root.innerHTML =
      '<div class="lesson-nav">' +
      '<a class="back-link" href="book.html?id=' +
      book.id +
      '">' +
      (en ? "← Contents" : "← Зміст") +
      "</a>" +
      '<div class="lesson-nav__right">' +
      '<button type="button" class="btn btn--ghost btn--pdf" data-export-pdf="' +
      book.id +
      '">📄 PDF</button>' +
      "<span>" +
      (en ? "Chapter " : "Розділ ") +
      chapter.id +
      " / " +
      book.chaptersCount +
      "</span></div></div>" +
      '<header class="chapter-open nf-open">' +
      '<p class="chapter-open__label">' +
      (en ? "Part " : "Частина ") +
      chapter.part +
      " · " +
      escapeHtml(chapter.partTitle || "") +
      "</p><h1>" +
      escapeHtml(chapter.title) +
      "</h1></header>" +
      '<section class="nf-learn"><h2>📌 ' +
      (en ? "What you'll learn" : "Що ти дізнаєшся") +
      "</h2><ul>" +
      learn +
      "</ul></section>" +
      '<section class="nf-body">' +
      renderNFContent(chapter.content) +
      renderClassWithoutPi(chapter.id, book) +
      "</section>" +
      '<section class="nf-end"><h2>📌 ' +
      (en ? "Remember" : "Запам’ятай") +
      "</h2><ul>" +
      rem +
      "</ul></section>" +
      '<section class="nf-end"><h2>💻 ' +
      (en ? "Commands you learned today" : "Команди, які ти сьогодні вивчив") +
      "</h2>" +
      cmds +
      "</section>" +
      '<section class="nf-end"><h2>📖 ' +
      (en ? "New words" : "Нові слова") +
      '</h2><div class="nf-gloss">' +
      gloss +
      "</div></section>" +
      '<section class="nf-end"><h2>✅ ' +
      (en ? "Check yourself" : "Перевір себе") +
      "</h2>" +
      renderNFCheck(chapter.check) +
      "</section>" +
      '<div class="summary__actions" style="margin-top:2rem">' +
      '<a class="btn btn--coral btn--wide" href="' +
      nextHref +
      '" data-next-chapter>' +
      nextLabel +
      '</a><a class="btn btn--ghost btn--wide" href="book.html?id=' +
      book.id +
      '">' +
      (en ? "Book contents" : "Зміст книги") +
      "</a>" +
      '<button type="button" class="btn btn--ghost btn--wide" data-export-pdf="' +
      book.id +
      '">' +
      (en ? "📄 Save book as PDF (A4)" : "📄 Зберегти книгу як PDF (A4)") +
      "</button></div>";
  }

  function paintChapter(root, book, chapter) {
    setActiveNfBook(book);
    if (book.format === "nonfiction") {
      paintNonfictionChapter(root, book, chapter);
      return;
    }
    var uk = book.lang === "uk";
    document.title =
      (uk ? "Розділ " : "Rozdział ") +
      chapter.id +
      " · " +
      chapter.title +
      " · " +
      book.title;
    document.documentElement.style.setProperty("--book-color", book.color);

    var nextHref =
      chapter.next != null
        ? "chapter.html?book=" + book.id + "&id=" + chapter.next
        : "book.html?id=" + book.id;
    var nextLabel =
      chapter.next != null
        ? uk
          ? "Наступний розділ →"
          : "Następny rozdział →"
        : uk
          ? "Повернутися до змісту"
          : "Wróć do spisu treści";

    root.innerHTML =
      '<div class="lesson-nav">' +
      '<a class="back-link" href="book.html?id=' +
      book.id +
      '">' +
      (uk ? "← Зміст" : "← Spis treści") +
      "</a>" +
      '<div class="lesson-nav__right">' +
      '<button type="button" class="btn btn--ghost btn--pdf" data-export-pdf="' +
      book.id +
      '">📄 PDF</button>' +
      '<span style="font-family:var(--font-ui);font-weight:800;color:var(--ink-soft)">' +
      (uk ? "Розділ " : "Rozdział ") +
      chapter.id +
      " / " +
      book.chaptersCount +
      "</span></div></div>" +
      '<header class="chapter-open">' +
      '<p class="chapter-open__label">' +
      (uk ? "Розділ " : "Rozdział ") +
      chapter.id +
      " · " +
      escapeHtml(chapter.subtitle || "") +
      "</p><h1>" +
      escapeHtml(chapter.title) +
      '</h1><p class="chapter-open__lead">' +
      escapeHtml(chapter.intro) +
      "</p></header>" +
      '<section class="story">' +
      renderStory(chapter.story) +
      "</section>" +
      '<section class="words"><h2 class="section-break">' +
      (uk ? "Запам’ятай" : "Nowe słowa") +
      "</h2>" +
      renderWords(chapter.words, uk) +
      "</section>" +
      '<aside class="fact"><img src="' +
      iconPath("lightbulb") +
      '" alt=""><div><h3>' +
      (uk ? "Цікавий факт" : "Ciekawostka") +
      "</h3><p>" +
      escapeHtml(chapter.fact) +
      "</p></div></aside>" +
      '<section class="questions"><h2 class="section-break">' +
      (uk ? "Перевір себе" : "Pytania do myślenia") +
      "</h2>" +
      renderQuestions(chapter.questions) +
      "</section>" +
      '<section class="tasks"><h2 class="section-break">' +
      (uk ? "Практика і завдання" : "Zadania") +
      "</h2>" +
      chapter.tasks
        .map(function (t, i) {
          return renderTask(t, i);
        })
        .join("") +
      "</section>" +
      '<section class="summary"><h2>' +
      (uk ? "Чого ти навчився?" : "Czego się nauczyłeś?") +
      "</h2><ul>" +
      chapter.summary
        .map(function (s) {
          return "<li>" + escapeHtml(s) + "</li>";
        })
        .join("") +
      '</ul><div class="summary__actions">' +
      '<a class="btn btn--coral btn--wide" href="' +
      nextHref +
      '" data-next-chapter>' +
      nextLabel +
      '</a><a class="btn btn--ghost btn--wide" href="book.html?id=' +
      book.id +
      '">' +
      (uk ? "Зміст книги" : "Spis treści książki") +
      "</a>" +
      '<button type="button" class="btn btn--ghost btn--wide" data-export-pdf="' +
      book.id +
      '">' +
      (uk ? "📄 Зберегти книгу як PDF (A4)" : "📄 Zapisz książkę jako PDF (A4)") +
      "</button></div></section>";
  }

  function absoluteAssetUrl(relPath) {
    try {
      return new URL(relPath, document.baseURI || window.location.href).href;
    } catch (e) {
      return relPath;
    }
  }

  function pdfStoryHtml(story) {
    return (story || [])
      .map(function (chunk) {
        if (chunk.type === "image") {
          var src = absoluteAssetUrl(illPath(chunk.src));
          return (
            "<figure><img src=\"" +
            src +
            '" alt="' +
            escapeHtml(chunk.alt || "") +
            '">' +
            (chunk.caption
              ? "<figcaption>" + escapeHtml(chunk.caption) + "</figcaption>"
              : "") +
            "</figure>"
          );
        }
        var raw = String(chunk.text || "");
        var parts = raw
          .split(/\n+/)
          .map(function (s) {
            return s.trim();
          })
          .filter(Boolean);
        if (!parts.length && raw.trim()) parts = [raw.trim()];
        return parts
          .map(function (line) {
            var isDialogue = /^[—\-–]/.test(line);
            return (
              '<p' +
              (isDialogue ? ' class="is-dialogue"' : "") +
              ">" +
              formatStoryInline(line) +
              "</p>"
            );
          })
          .join("");
      })
      .join("");
  }

  function pdfNonfictionHtml(chapter, bookId) {
    var book =
      window["BOOK_" + String(bookId || "").toUpperCase()] ||
      window.BOOK_SYSADMIN_EN ||
      window.BOOK_SYSADMIN ||
      null;
    var html = "";
    var heroUsed = false;
    if (chapter.learn && chapter.learn.length) {
      html +=
        "<h2>" +
        nfT("Що ти дізнаєшся", "What you'll learn") +
        "</h2><ul>" +
        chapter.learn
          .map(function (x) {
            return "<li>" + escapeHtml(x) + "</li>";
          })
          .join("") +
        "</ul>";
    }
    html += (chapter.content || [])
      .map(function (b) {
        if (b.type === "image") {
          var heroClass = !heroUsed ? " book-pdf__hero" : "";
          heroUsed = true;
          return (
            '<figure class="' +
            heroClass.trim() +
            '"><img src="' +
            absoluteAssetUrl(illPath(b.src, bookId)) +
            '" alt="' +
            escapeHtml(b.alt || "") +
            '">' +
            (b.caption
              ? "<figcaption>" + escapeHtml(b.caption) + "</figcaption>"
              : "") +
            "</figure>"
          );
        }
        if (b.type === "text") {
          return "<p>" + formatInlineNF(b.text) + "</p>";
        }
        if (b.type === "reveal") {
          return (
            '<aside class="nf-print-block nf-print-block--reveal"><p class="nf-print-label">' +
            nfT("Відповідь", "Answer") +
            "</p><p>" +
            formatInlineNF(b.text) +
            "</p></aside>"
          );
        }
        if (b.type === "ul" || b.type === "list") {
          return (
            "<ul>" +
            (b.items || [])
              .map(function (it) {
                return "<li>" + formatInlineNF(it) + "</li>";
              })
              .join("") +
            "</ul>"
          );
        }
        if (b.type === "h2") return "<h2>" + escapeHtml(b.text) + "</h2>";
        if (b.type === "code" || b.type === "terminal") {
          return (
            '<pre class="nf-code"><code>' + formatNFCode(b.text) + "</code></pre>"
          );
        }
        if (b.type === "nanowindow") {
          return (
            '<aside class="nf-print-block"><p class="nf-print-label">' +
            nfT("Вікно nano", "nano window") +
            "</p><p><code>" +
            escapeHtml(b.file || "hello.txt") +
            "</code> — " +
            escapeHtml(b.body || "") +
            "</p></aside>"
          );
        }
        if (b.type === "think") {
          return (
            '<aside class="nf-print-block nf-print-block--think"><p class="nf-print-label">' +
            nfT("Як ти думаєш?", "What do you think?") +
            "</p><p>" +
            formatInlineNF(b.question) +
            "</p><ul>" +
            (b.options || [])
              .map(function (o) {
                return "<li>" + escapeHtml(o.text) + "</li>";
              })
              .join("") +
            "</ul></aside>"
          );
        }
        if (b.type === "try") {
          return (
            '<aside class="nf-print-block nf-print-block--try"><p class="nf-print-label">' +
            escapeHtml(b.title || nfT("Спробуй зараз", "Try it now")) +
            "</p>" +
            (b.body ? "<p>" + formatInlineNF(b.body) + "</p>" : "") +
            (b.checklist && b.checklist.length
              ? "<ul>" +
                b.checklist
                  .map(function (it) {
                    return "<li>□ " + formatInlineNF(it) + "</li>";
                  })
                  .join("") +
                "</ul>"
              : "") +
            (b.footer ? "<p>" + formatInlineNF(b.footer) + "</p>" : "") +
            "</aside>"
          );
        }
        if (b.type === "fact") {
          return (
            '<aside class="nf-print-block nf-print-block--fact"><p class="nf-print-label">' +
            escapeHtml(b.title || nfT("Цікавий факт", "Fun fact")) +
            "</p>" +
            (b.text ? "<p>" + formatInlineNF(b.text) + "</p>" : "") +
            (b.items && b.items.length
              ? "<ul>" +
                b.items
                  .map(function (it) {
                    return "<li>" + formatInlineNF(it) + "</li>";
                  })
                  .join("") +
                "</ul>"
              : "") +
            "</aside>"
          );
        }
        if (b.type === "callout") {
          return (
            '<aside class="nf-print-block nf-print-block--callout"><p class="nf-print-label">' +
            escapeHtml(b.title || nfT("Підказка", "Tip")) +
            "</p><p>" +
            formatInlineNF(b.text || "") +
            "</p></aside>"
          );
        }
        if (b.type === "wow") {
          return (
            '<aside class="nf-print-block nf-print-block--wow"><p class="nf-print-label">' +
            escapeHtml(b.title || nfT("✨ Це дивовижно!", "✨ Wow!")) +
            "</p><p>" +
            formatInlineNF(b.text || "") +
            "</p></aside>"
          );
        }
        if (b.type === "diagram") {
          return (
            '<aside class="nf-print-block nf-print-block--diagram"><p class="nf-print-label">' +
            escapeHtml(b.title || nfT("Схема", "Diagram")) +
            "</p><ul>" +
            (b.items || [])
              .map(function (it) {
                var label = typeof it === "string" ? it : it.label || "";
                var text = typeof it === "string" ? "" : it.text || "";
                return (
                  "<li><strong>" +
                  formatInlineNF(label) +
                  "</strong> " +
                  formatInlineNF(text) +
                  "</li>"
                );
              })
              .join("") +
            "</ul>" +
            (b.caption ? "<p><em>" + escapeHtml(b.caption) + "</em></p>" : "") +
            "</aside>"
          );
        }
        if (b.type === "spread") {
          var spreadHero = b.hero || {};
          var spreadImg = spreadHero.src
            ? '<figure class="book-pdf__hero"><img src="' +
              absoluteAssetUrl(illPath(spreadHero.src, bookId)) +
              '" alt="' +
              escapeHtml(spreadHero.alt || "") +
              '">' +
              (spreadHero.caption
                ? "<figcaption>" + escapeHtml(spreadHero.caption) + "</figcaption>"
                : "") +
              "</figure>"
            : "";
          return (
            (b.title ? "<h2>" + escapeHtml(b.title) + "</h2>" : "") +
            (b.lead ? "<p>" + formatInlineNF(b.lead) + "</p>" : "") +
            (b.body ? "<p>" + formatInlineNF(b.body) + "</p>" : "") +
            spreadImg +
            (b.callouts && b.callouts.length
              ? "<ol>" +
                b.callouts
                  .map(function (c) {
                    return "<li>" + formatInlineNF(c.text || "") + "</li>";
                  })
                  .join("") +
                "</ol>"
              : "")
          );
        }
        if (b.type === "diary") {
          return (
            '<aside class="nf-print-block nf-print-block--diary"><p class="nf-print-label">' +
            nfT("Щоденник адміністратора", "Admin Journal") +
            "</p><ul>" +
            (b.lines || [])
              .map(function (l) {
                return "<li>" + escapeHtml(l) + "</li>";
              })
              .join("") +
            "</ul></aside>"
          );
        }
        if (b.type === "draw") {
          return (
            '<aside class="nf-print-block nf-print-block--draw"><p class="nf-print-label">' +
            nfT("Намалюй", "Draw") +
            "</p><p>" +
            formatInlineNF(b.text) +
            "</p></aside>"
          );
        }
        if (b.type === "errors") {
          return (
            '<aside class="nf-print-block nf-print-block--errors"><p class="nf-print-label">' +
            nfT("Типові помилки", "Common mistakes") +
            "</p><ul>" +
            (b.items || [])
              .map(function (it) {
                if (typeof it === "string") {
                  return "<li>" + formatInlineNF(it) + "</li>";
                }
                return (
                  "<li><strong>" +
                  escapeHtml(it.title || nfT("Помилка", "Mistake")) +
                  "</strong> «" +
                  formatInlineNF(it.myth || "") +
                  "» — " +
                  formatInlineNF(it.truth || "") +
                  "</li>"
                );
              })
              .join("") +
            "</ul></aside>"
          );
        }
        if (b.type === "project") {
          return (
            '<aside class="nf-print-block"><p class="nf-print-label">' +
            nfT("Мініпроєкт", "Mini project") +
            "</p><p><strong>" +
            escapeHtml(b.title || "") +
            "</strong></p><ol>" +
            (b.steps || [])
              .map(function (st) {
                return "<li>" + formatInlineNF(st) + "</li>";
              })
              .join("") +
            "</ol></aside>"
          );
        }
        return "";
      })
      .join("");
    if (chapter.remember && chapter.remember.length) {
      html +=
        "<h2>" +
        nfT("Запам’ятай", "Remember") +
        "</h2><ul>" +
        chapter.remember
          .map(function (r) {
            return "<li>" + escapeHtml(r) + "</li>";
          })
          .join("") +
        "</ul>";
    }
    if (chapter.commands && chapter.commands.length) {
      html +=
        "<h2>" +
        nfT("Команди", "Commands") +
        "</h2><ul>" +
        chapter.commands
          .map(function (c) {
            return (
              "<li><code>" +
              escapeHtml(c.cmd) +
              "</code> — " +
              escapeHtml(c.does) +
              "</li>"
            );
          })
          .join("") +
        "</ul>";
    }
    if (chapter.glossary && chapter.glossary.length) {
      html +=
        "<h2>" +
        nfT("Нові слова", "New words") +
        "</h2><ul>" +
        chapter.glossary
          .map(function (g) {
            return (
              "<li><strong>" +
              escapeHtml(g.term) +
              "</strong> — " +
              escapeHtml(g.def) +
              "</li>"
            );
          })
          .join("") +
        "</ul>";
    }
    if (chapter.check && chapter.check.length) {
      html +=
        "<h2>" +
        nfT("Перевір себе", "Check yourself") +
        "</h2>" +
        renderNFCheck(chapter.check, { forPdf: true });
    }
    html += renderClassWithoutPi(chapter.id, book);
    return html;
  }

  function pdfWordsHtml(words) {
    return (words || [])
      .map(function (w) {
        return (
          '<div class="book-pdf__word"><h3>' +
          escapeHtml(w.term) +
          '</h3><p><span class="label">Co to jest?</span> ' +
          escapeHtml(w.what) +
          '</p><p><span class="label">Do czego służy?</span> ' +
          escapeHtml(w.why) +
          '</p><p><span class="label">Zapamiętaj</span> ' +
          escapeHtml(w.remember) +
          "</p></div>"
        );
      })
      .join("");
  }

  function pdfQuestionsHtml(questions) {
    return (
      "<ol>" +
      (questions || [])
        .map(function (q) {
          return (
            "<li><span class=\"tag\">" +
            escapeHtml(q.tag || "") +
            "</span><br>" +
            escapeHtml(q.prompt) +
            "</li>"
          );
        })
        .join("") +
      "</ol>"
    );
  }

  function pdfPartArtSrc(partId) {
    var map = {
      1: "part-01-pi",
      2: "part-02-linux",
      3: "part-03-admin",
      4: "part-04-net",
      5: "part-05-mc",
      6: "part-06-next",
    };
    var key = map[partId];
    return key ? absoluteAssetUrl(illPath(key)) : "";
  }

  function buildBookPdfDocument(book, chapters) {
    var color = book.color || "#0F766E";
    var base = new URL("./", window.location.href).href;
    var enPdf = book.lang === "en";
    var ukPdf = book.lang === "uk";
    var isSysadmin = isSysadminBook(book.id);
    var langAttr = enPdf ? "en" : ukPdf ? "uk" : "pl";

    var coverFront = isSysadmin
      ? absoluteAssetUrl("assets/covers/cover-front-mission-admin.png")
      : "";
    var coverBack = isSysadmin
      ? absoluteAssetUrl("assets/covers/cover-back-mission-admin.png")
      : "";

    var parts = book.parts || [];
    var tocHtml = "";
    if (parts.length) {
      tocHtml = parts
        .map(function (part) {
          var items = (book.chapters || [])
            .filter(function (ch) {
              return part.chapters && part.chapters.indexOf(ch.id) !== -1;
            })
            .map(function (ch) {
              return (
                "<li>" +
                ch.id +
                ". " +
                escapeHtml(ch.title) +
                "</li>"
              );
            })
            .join("");
          return (
            '<div class="book-pdf__toc-part"><h3>' +
            (enPdf ? "Part " : ukPdf ? "Частина " : "Część ") +
            part.id +
            ". " +
            escapeHtml(part.title) +
            "</h3><ol>" +
            items +
            "</ol></div>"
          );
        })
        .join("");
    } else {
      tocHtml =
        "<ol>" +
        (book.chapters || [])
          .map(function (ch) {
            return (
              "<li>" +
              (enPdf ? "Chapter " : ukPdf ? "Розділ " : "Rozdział ") +
              ch.id +
              " — " +
              escapeHtml(ch.title) +
              "</li>"
            );
          })
          .join("") +
        "</ol>";
    }

    var chapterById = {};
    chapters.forEach(function (ch) {
      chapterById[ch.id] = ch;
    });

    var bodyHtml = "";
    var emitted = {};

    function chapterArticle(ch) {
      if (!ch || emitted[ch.id]) return "";
      emitted[ch.id] = true;
      if (book.format === "nonfiction") {
        return (
          '<article class="book-pdf__chapter">' +
          '<p class="book-pdf__ch-label">' +
          (enPdf ? "Part " : "Частина ") +
          (ch.part || "") +
          (enPdf ? " · Chapter " : " · Розділ ") +
          ch.id +
          " / " +
          book.chaptersCount +
          "</p>" +
          "<h1>" +
          escapeHtml(ch.title) +
          "</h1>" +
          '<div class="book-pdf__story">' +
          pdfNonfictionHtml(ch, book.id) +
          "</div>" +
          '<p class="book-pdf__footer">' +
          escapeHtml(book.title) +
          (enPdf ? " · Chapter " : " · Розділ ") +
          ch.id +
          "</p></article>"
        );
      }
      return (
        '<article class="book-pdf__chapter">' +
        '<p class="book-pdf__ch-label">' +
        (enPdf ? "Chapter " : "Rozdział ") +
        ch.id +
        " / " +
        book.chaptersCount +
        "</p>" +
        "<h1>" +
        escapeHtml(ch.title) +
        "</h1>" +
        (ch.subtitle
          ? '<p class="book-pdf__ch-sub">' + escapeHtml(ch.subtitle) + "</p>"
          : "") +
        (ch.intro
          ? '<p class="book-pdf__intro">' + escapeHtml(ch.intro) + "</p>"
          : "") +
        '<div class="book-pdf__story">' +
        pdfStoryHtml(ch.story) +
        "</div>" +
        '<section class="book-pdf__section">' +
        "<h2>" +
        (enPdf ? "New words" : "Nowe słowa") +
        "</h2>" +
        '<div class="book-pdf__words">' +
        pdfWordsHtml(ch.words) +
        "</div></section>" +
        '<section class="book-pdf__section">' +
        '<div class="book-pdf__fact"><h3>' +
        (enPdf ? "Fun fact" : "Ciekawostka") +
        "</h3><p>" +
        escapeHtml(ch.fact || "") +
        "</p></div>" +
        "<h2>" +
        (enPdf ? "Think about it" : "Pytania do myślenia") +
        "</h2>" +
        '<div class="book-pdf__questions">' +
        pdfQuestionsHtml(ch.questions) +
        "</div></section>" +
        '<section class="book-pdf__section book-pdf__summary">' +
        "<h2>" +
        (enPdf ? "What you learned" : "Czego się nauczyłeś?") +
        "</h2><ul>" +
        (ch.summary || [])
          .map(function (s) {
            return "<li>" + escapeHtml(s) + "</li>";
          })
          .join("") +
        "</ul></section>" +
        '<p class="book-pdf__footer">' +
        escapeHtml(book.title) +
        (enPdf ? " · Chapter " : " · Rozdział ") +
        ch.id +
        "</p></article>"
      );
    }

    if (parts.length && book.format === "nonfiction") {
      parts.forEach(function (part) {
        var art = pdfPartArtSrc(part.id);
        bodyHtml +=
          '<section class="book-pdf__part">' +
          '<p class="book-pdf__part-label">' +
          (enPdf ? "Part " : "Частина ") +
          part.id +
          "</p>" +
          "<h1>" +
          escapeHtml(part.title) +
          "</h1>" +
          (art
            ? '<figure><img src="' +
              art +
              '" alt="' +
              escapeHtml(part.title) +
              '"></figure>'
            : "") +
          '<p class="book-pdf__footer">' +
          escapeHtml(book.title) +
          "</p></section>";
        (part.chapters || []).forEach(function (cid) {
          bodyHtml += chapterArticle(chapterById[cid]);
        });
      });
    } else {
      chapters.forEach(function (ch) {
        bodyHtml += chapterArticle(ch);
      });
    }

    if (isSysadmin && enPdf) {
      bodyHtml +=
        '<article class="book-pdf__backmatter book-pdf__chapter"><h1>Glossary &amp; index</h1><div class="book-pdf__story">' +
        renderMergedGlossaryHtml(book) +
        "</div>" +
        '<p class="book-pdf__footer">' +
        escapeHtml(book.title) +
        "</p></article>";
    } else if (isSysadmin && ukPdf && book.backMatter) {
      bodyHtml +=
        '<article class="book-pdf__backmatter book-pdf__chapter"><h1>Словник і покажчик</h1><div class="book-pdf__story"><p>' +
        escapeHtml((book.backMatter && book.backMatter.glossaryNote) || "") +
        "</p><p>" +
        escapeHtml((book.backMatter && book.backMatter.indexNote) || "") +
        "</p></div>" +
        '<p class="book-pdf__footer">' +
        escapeHtml(book.title) +
        "</p></article>";
    }

    var fm = book.frontMatter || {};
    var howList = (fm.howToUse || [])
      .map(function (x) {
        return "<li>" + escapeHtml(x.replace(/\*\*/g, "")) + "</li>";
      })
      .join("");

    var legalHtml = "";
    if (fm.legalNote || isSysadmin) {
      legalHtml =
        '<section class="book-pdf__legal"><h2>' +
        (enPdf ? "Legal notice" : "Правова нотатка") +
        "</h2><p>" +
        escapeHtml(
          fm.legalNote ||
            (enPdf
              ? "Unofficial educational guide. Not affiliated with Mojang Studios, Microsoft, or the Raspberry Pi Foundation."
              : "Неофіційний навчальний посібник. Не пов’язаний із Mojang Studios, Microsoft чи Raspberry Pi Foundation.")
        ) +
        '</p><p class="book-pdf__copyright">' +
        (enPdf
          ? "© Mission Admin · MISJE WIEDZY · For personal and classroom use."
          : "© Місія Адміністратор · MISJE WIEDZY · Для особистого й класного використання.") +
        "</p>" +
        '<p class="book-pdf__footer">' +
        escapeHtml(book.title) +
        "</p></section>";
    }

    var frontHtml =
      '<section class="book-pdf__front"><h2>' +
      (enPdf ? "How to use this book" : "Як користуватися книгою") +
      "</h2>" +
      (fm.preface
        ? "<p>" + escapeHtml(String(fm.preface).replace(/\*\*/g, "")) + "</p>"
        : "") +
      (fm.withAdult
        ? "<p><strong>" +
          (enPdf ? "Read together: " : "Разом із дорослим: ") +
          "</strong>" +
          escapeHtml(String(fm.withAdult).replace(/\*\*/g, "")) +
          "</p>"
        : "") +
      (howList ? "<ul>" + howList + "</ul>" : "") +
      '<p class="book-pdf__footer">' +
      escapeHtml(book.title) +
      "</p></section>";

    var coverHtml =
      '<header class="book-pdf__cover" style="color:' +
      color +
      '">' +
      (coverFront
        ? '<div class="book-pdf__cover-art"><img src="' +
          coverFront +
          '" alt="' +
          escapeHtml(book.title) +
          '"></div>'
        : "") +
      '<div class="book-pdf__cover-text">' +
      '<p class="book-pdf__series">MISJE WIEDZY</p>' +
      '<div class="book-pdf__badge">' +
      (enPdf ? "Book " : ukPdf ? "Книга " : "Książka ") +
      book.number +
      (enPdf ? " · EN" : ukPdf ? " · UA" : "") +
      "</div>" +
      "<h1>" +
      escapeHtml(book.title) +
      "</h1>" +
      (book.tagline
        ? '<p class="book-pdf__tagline">' + escapeHtml(book.tagline) + "</p>"
        : "") +
      '<p class="book-pdf__sub">' +
      escapeHtml(book.subtitle || "") +
      "</p>" +
      '<p class="book-pdf__meta">' +
      escapeHtml(book.level || "") +
      " · " +
      book.chaptersCount +
      (enPdf ? " chapters" : ukPdf ? " розділів" : " rozdziałów") +
      " · ~" +
      book.readingMinutes +
      " min</p>" +
      (book.description
        ? '<p class="book-pdf__desc">' +
          escapeHtml(String(book.description).replace(/\*\*/g, "")) +
          "</p>"
        : "") +
      "</div></header>";

    var backHtml = coverBack
      ? '<section class="book-pdf__back"><div class="book-pdf__back-art"><img src="' +
        coverBack +
        '" alt="' +
        (enPdf ? "Back cover" : "Задня обкладинка") +
        '"></div></section>'
      : "";

    var toolbarPrint = enPdf
      ? "Save / print PDF"
      : ukPdf
        ? "Зберегти / друкувати PDF"
        : "Zapisz / drukuj PDF";
    var toolbarClose = enPdf ? "Close" : ukPdf ? "Закрити" : "Zamknij";
    var toolbarHint = enPdf
      ? "A4 · 12 pt · each chapter starts on a new page · enable Background graphics"
      : ukPdf
        ? "A4 · 12 pt · кожен розділ з нової сторінки · увімкни графіку фону"
        : "A4 · tekst 12 pt · każdy rozdział od nowej strony";
    var tocTitle = enPdf ? "Contents" : ukPdf ? "Зміст" : "Spis treści";

    return (
      "<!DOCTYPE html><html lang=\"" +
      langAttr +
      "\"><head><meta charset=\"UTF-8\">" +
      "<title>" +
      escapeHtml(book.title) +
      " · PDF</title>" +
      '<base href="' +
      base +
      '">' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Literata:opsz,wght@7..72,500;7..72,600;7..72,700&family=Nunito:wght@600;700;800&display=swap">' +
      '<link rel="stylesheet" href="' +
      absoluteAssetUrl("print-book.css") +
      '">' +
      "</head><body>" +
      '<div class="pdf-toolbar">' +
      '<button type="button" id="pdf-print">' +
      toolbarPrint +
      "</button>" +
      '<button type="button" class="secondary" id="pdf-close">' +
      toolbarClose +
      "</button>" +
      "<span>" +
      toolbarHint +
      "</span>" +
      "</div>" +
      '<div class="book-pdf">' +
      coverHtml +
      legalHtml +
      frontHtml +
      '<section class="book-pdf__toc"><h2>' +
      tocTitle +
      "</h2>" +
      tocHtml +
      '<p class="book-pdf__footer">' +
      escapeHtml(book.title) +
      "</p></section>" +
      bodyHtml +
      backHtml +
      "</div>" +
      "<script>" +
      "document.getElementById('pdf-print').onclick=function(){window.print()};" +
      "document.getElementById('pdf-close').onclick=function(){window.close()};" +
      "window.addEventListener('load',function(){" +
      "var imgs=[].slice.call(document.images);" +
      "Promise.all(imgs.map(function(img){return img.complete?Promise.resolve():new Promise(function(r){img.onload=img.onerror=r})}))" +
      ".then(function(){setTimeout(function(){window.print()},600)});" +
      "});" +
      "<\/script>" +
      "</body></html>"
    );
  }

  function exportBookPdf(bookId) {
    var btn = document.querySelector('[data-export-pdf="' + bookId + '"]');
    var prevLabel = btn ? btn.textContent : "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Przygotowuję PDF…";
    }

    loadScript("data/" + bookId + "/book.js")
      .then(function () {
        return loadSysadminExtras(bookId);
      })
      .then(function () {
        var book =
          window["BOOK_" + bookId.toUpperCase()] || window.BOOK_PROGRAMISTA;
        if (!book) throw new Error("Brak danych książki");
        var loads = [];
        for (var i = 1; i <= book.chaptersCount; i++) {
          loads.push(
            loadScript(
              "data/" +
                bookId +
                "/chapter" +
                String(i).padStart(2, "0") +
                ".js"
            )
          );
        }
        return Promise.all(loads).then(function () {
          return book;
        });
      })
      .then(function (book) {
        setActiveNfBook(book);
        var chapters = [];
        for (var i = 1; i <= book.chaptersCount; i++) {
          var ch = window["CHAPTER_" + String(i).padStart(2, "0")];
          if (!ch) throw new Error("Brak rozdziału " + i);
          chapters.push(ch);
        }
        var html = buildBookPdfDocument(book, chapters);
        var win = window.open("", "_blank");
        if (!win) {
          throw new Error(
            "Przeglądarka zablokowała okno. Pozwól na wyskakujące okna i spróbuj ponownie."
          );
        }
        win.document.open();
        win.document.write(html);
        win.document.close();
      })
      .catch(function (err) {
        alert(err.message || "Nie udało się przygotować PDF.");
      })
      .then(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = prevLabel;
        }
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "library") renderLibrary();
    if (page === "book") renderBookPage();
    if (page === "chapter") renderChapterPage();
  });
})();
