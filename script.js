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

  function illPath(name) {
    // Book scenes: WebP only in assets/illustrations/scenes/
    if (name.indexOf(".") !== -1) {
      if (name.indexOf("/") === -1) return "assets/illustrations/scenes/" + name;
      return "assets/illustrations/" + name;
    }
    return "assets/illustrations/scenes/" + name + ".webp";
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
          '<span class="book-spine__num">Książka ' +
          book.number +
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
          escapeHtml(book.subtitle) +
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

  function paintBook(root, book, meta) {
    document.title = "Książka " + book.number + " · " + book.title + " · MISJE WIEDZY";
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
          (done ? "✓" : ch.id) +
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
      '<a class="back-link" href="index.html">← Półka z książkami</a>' +
      '<section class="book-cover" style="--book-color:' +
      book.color +
      ";--book-accent:" +
      book.accent +
      '">' +
      '<div class="book-cover__badge">Książka ' +
      book.number +
      "</div>" +
      '<img class="book-cover__icon" src="' +
      iconPath(book.icon) +
      '" alt="">' +
      "<h1>" +
      escapeHtml(book.title) +
      "</h1>" +
      '<p class="book-cover__sub">' +
      escapeHtml(book.subtitle) +
      "</p>" +
      '<div class="book-cover__stars" aria-label="Ocena">' +
      starsHtml(book.rating) +
      "</div>" +
      '<div class="book-cover__stats">' +
      "<div><strong>" +
      book.chaptersCount +
      "</strong><span>rozdziałów</span></div>" +
      "<div><strong>~" +
      book.readingMinutes +
      " min</strong><span>czas czytania</span></div>" +
      "<div><strong>" +
      escapeHtml(book.level) +
      "</strong><span>poziom</span></div>" +
      "</div>" +
      "</section>" +
      '<section class="book-panel">' +
      "<h2>Krótki opis</h2>" +
      "<p>" +
      escapeHtml(book.description) +
      "</p>" +
      "</section>" +
      '<section class="book-panel book-hero">' +
      '<img src="' +
      iconPath(book.hero.icon) +
      '" alt="">' +
      "<div><h2>Bohater · " +
      escapeHtml(book.hero.name) +
      "</h2><p>" +
      escapeHtml(book.hero.bio) +
      "</p></div>" +
      "</section>" +
      '<section class="book-panel">' +
      "<h2>Spis treści</h2>" +
      '<div class="toc-list">' +
      toc +
      "</div>" +
      "</section>" +
      '<div class="book-actions">' +
      '<a class="btn btn--primary btn--wide" href="chapter.html?book=' +
      book.id +
      "&id=" +
      firstOpen +
      '">▶ Rozpocznij książkę</a>' +
      '<button type="button" class="btn btn--ghost btn--wide" data-export-pdf="' +
      book.id +
      '">📄 Zapisz książkę jako PDF (A4)</button>' +
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

  function renderWords(words) {
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
          return (
            '<article class="word-card">' +
            artBlock +
            '<div class="word-card__body">' +
            '<h3 class="word-card__term">' +
            escapeHtml(w.term) +
            "</h3>" +
            '<div class="word-block"><h4>Co to jest?</h4><p>' +
            escapeHtml(w.what) +
            "</p></div>" +
            '<div class="word-block"><h4>Do czego służy?</h4><p>' +
            escapeHtml(w.why) +
            "</p></div>" +
            '<div class="word-block"><h4>Zapamiętaj</h4><p>' +
            escapeHtml(w.remember) +
            "</p></div>" +
            '<div class="ua-panel"><button type="button" class="ua-toggle" aria-expanded="false" data-ua-toggle>Pokaż po ukraińsku</button>' +
            '<div class="ua-content" data-ua-content hidden>' +
            "<p><strong>Що це?</strong> " +
            escapeHtml(w.ua.what) +
            "</p><p><strong>Навіщо?</strong> " +
            escapeHtml(w.ua.why) +
            "</p><p><strong>Запамʼятай</strong> " +
            escapeHtml(w.ua.remember) +
            "</p></div></div></div></article>"
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

  function paintChapter(root, book, chapter) {
    document.title =
      "Rozdział " + chapter.id + " · " + chapter.title + " · " + book.title;
    document.documentElement.style.setProperty("--book-color", book.color);

    var nextHref =
      chapter.next != null
        ? "chapter.html?book=" + book.id + "&id=" + chapter.next
        : "book.html?id=" + book.id;
    var nextLabel =
      chapter.next != null ? "Następny rozdział →" : "Wróć do spisu treści";

    root.innerHTML =
      '<div class="lesson-nav">' +
      '<a class="back-link" href="book.html?id=' +
      book.id +
      '">← Spis treści</a>' +
      '<div class="lesson-nav__right">' +
      '<button type="button" class="btn btn--ghost btn--pdf" data-export-pdf="' +
      book.id +
      '">📄 PDF</button>' +
      '<span style="font-family:var(--font-ui);font-weight:800;color:var(--ink-soft)">Rozdział ' +
      chapter.id +
      " / " +
      book.chaptersCount +
      "</span></div></div>" +
      '<header class="chapter-open">' +
      '<p class="chapter-open__label">Rozdział ' +
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
      '<section class="words"><h2 class="section-break">Nowe słowa</h2>' +
      renderWords(chapter.words) +
      "</section>" +
      '<aside class="fact"><img src="' +
      iconPath("lightbulb") +
      '" alt=""><div><h3>Ciekawostka</h3><p>' +
      escapeHtml(chapter.fact) +
      "</p></div></aside>" +
      '<section class="questions"><h2 class="section-break">Pytania do myślenia</h2>' +
      renderQuestions(chapter.questions) +
      "</section>" +
      '<section class="tasks"><h2 class="section-break">Zadania</h2>' +
      chapter.tasks
        .map(function (t, i) {
          return renderTask(t, i);
        })
        .join("") +
      "</section>" +
      '<section class="summary"><h2>Czego się nauczyłeś?</h2><ul>' +
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
      '">Spis treści książki</a>' +
      '<button type="button" class="btn btn--ghost btn--wide" data-export-pdf="' +
      book.id +
      '">📄 Zapisz książkę jako PDF (A4)</button></div></section>';
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

  function buildBookPdfDocument(book, chapters) {
    var color = book.color || "#1D6FD8";
    var toc =
      "<ol>" +
      book.chapters
        .map(function (ch) {
          return (
            "<li>Rozdział " +
            ch.id +
            " — " +
            escapeHtml(ch.title) +
            "</li>"
          );
        })
        .join("") +
      "</ol>";

    var chaptersHtml = chapters
      .map(function (ch, idx) {
        return (
          '<article class="book-pdf__chapter" style="' +
          (idx === 0 ? "" : "") +
          '">' +
          '<p class="book-pdf__ch-label">Rozdział ' +
          ch.id +
          " z " +
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
          "<h2>Nowe słowa</h2>" +
          '<div class="book-pdf__words">' +
          pdfWordsHtml(ch.words) +
          "</div></section>" +
          '<section class="book-pdf__section">' +
          '<div class="book-pdf__fact"><h3>Ciekawostka</h3><p>' +
          escapeHtml(ch.fact || "") +
          "</p></div>" +
          "<h2>Pytania do myślenia</h2>" +
          '<div class="book-pdf__questions">' +
          pdfQuestionsHtml(ch.questions) +
          "</div></section>" +
          '<section class="book-pdf__section book-pdf__summary">' +
          "<h2>Czego się nauczyłeś?</h2><ul>" +
          (ch.summary || [])
            .map(function (s) {
              return "<li>" + escapeHtml(s) + "</li>";
            })
            .join("") +
          "</ul></section>" +
          '<p class="book-pdf__footer">MISJE WIEDZY · ' +
          escapeHtml(book.title) +
          " · Rozdział " +
          ch.id +
          "</p>" +
          "</article>"
        );
      })
      .join("");

    var base = absoluteAssetUrl("./");
    return (
      "<!DOCTYPE html><html lang=\"pl\"><head><meta charset=\"UTF-8\">" +
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
      '<button type="button" id="pdf-print">Zapisz / drukuj PDF</button>' +
      '<button type="button" class="secondary" id="pdf-close">Zamknij</button>' +
      "<span>A4 · tekst 12 pt · każdy rozdział od nowej strony</span>" +
      "</div>" +
      '<div class="book-pdf">' +
      '<header class="book-pdf__cover" style="color:' +
      color +
      '">' +
      '<p class="book-pdf__series">MISJE WIEDZY</p>' +
      '<div class="book-pdf__badge">Książka ' +
      book.number +
      "</div>" +
      "<h1>" +
      escapeHtml(book.title) +
      "</h1>" +
      '<p class="book-pdf__sub">' +
      escapeHtml(book.subtitle || "") +
      "</p>" +
      '<p class="book-pdf__meta">' +
      escapeHtml(book.level || "") +
      " · " +
      book.chaptersCount +
      " rozdziałów · ~" +
      book.readingMinutes +
      " min</p>" +
      '<p class="book-pdf__desc">' +
      escapeHtml(book.description || "") +
      "</p>" +
      "</header>" +
      '<section class="book-pdf__toc"><h2>Spis treści</h2>' +
      toc +
      "</section>" +
      chaptersHtml +
      "</div>" +
      "<script>" +
      "document.getElementById('pdf-print').onclick=function(){window.print()};" +
      "document.getElementById('pdf-close').onclick=function(){window.close()};" +
      "window.addEventListener('load',function(){" +
      "var imgs=[].slice.call(document.images);" +
      "Promise.all(imgs.map(function(img){return img.complete?Promise.resolve():new Promise(function(r){img.onload=img.onerror=r})}))" +
      ".then(function(){setTimeout(function(){window.print()},400)});" +
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
