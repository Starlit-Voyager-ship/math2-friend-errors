/* 数二错题清单：只做按知识点 / 题型的静态整理 */
(function () {
  "use strict";

  var DATA = window.ERROR_LENS_DATA || { chapters: [], questions: [] };
  var PRACTICE = window.ERROR_LENS_PRACTICE === true;
  var SHOW_PROOF = window.ERROR_LENS_SHOW_PROOF === true;
  var STORAGE_PREFIX = window.ERROR_LENS_STORAGE_PREFIX || "errorLens.math2.practice";
  var FOOT_LABEL = window.ERROR_LENS_FOOT_LABEL || (PRACTICE ? "做题版，无答案" : "证明题不计入主清单");
  var DONE_KEY = STORAGE_PREFIX + ".done.v1";
  var WRONG_KEY = STORAGE_PREFIX + ".wrong.v1";
  var DEFER_KEY = STORAGE_PREFIX + ".defer.v1";
  var ACTIVITY_KEY = STORAGE_PREFIX + ".activity.v1";
  var DONE = new Set();
  var WRONG = new Set();
  var DEFER = new Set();
  var ACTIVITY = {};
  try {
    var savedDone = JSON.parse(localStorage.getItem(DONE_KEY) || "[]");
    if (Array.isArray(savedDone)) savedDone.forEach(function (item) { DONE.add(String(item)); });
    var savedWrong = JSON.parse(localStorage.getItem(WRONG_KEY) || "[]");
    if (Array.isArray(savedWrong)) savedWrong.forEach(function (item) { WRONG.add(String(item)); });
    var savedDefer = JSON.parse(localStorage.getItem(DEFER_KEY) || "[]");
    if (Array.isArray(savedDefer)) savedDefer.forEach(function (item) { DEFER.add(String(item)); });
    var savedActivity = JSON.parse(localStorage.getItem(ACTIVITY_KEY) || "{}");
    if (savedActivity && typeof savedActivity === "object") {
      Object.keys(savedActivity).forEach(function (day) {
        if (Array.isArray(savedActivity[day])) {
          ACTIVITY[day] = Array.from(new Set(savedActivity[day].map(String)));
        }
      });
    }
  } catch (error) {
    // 本地存储不可用时，只在本次页面内记状态。
  }
  var CHAPTERS = DATA.chapters || [];
  var ALL = (DATA.questions || []).slice();
  var CHAPTER_BY_ID = {};
  CHAPTERS.forEach(function (c) { CHAPTER_BY_ID[c.id] = c; });
  document.body.classList.toggle("practice", PRACTICE);
  document.body.classList.toggle("empty-data", !ALL.length);

  var TYPE_ORDER = { "选择题": 0, "填空题": 1, "解答题": 2 };
  var MIXED_PROOF = new Set(["2012-21", "2013-20", "2016-21", "2017-22", "2018-21", "2020-23"]);

  function key(q) { return q.year + "-" + q.no; }
  function isDone(q) { return PRACTICE && DONE.has(key(q)); }
  function isWrong(q) { return PRACTICE && WRONG.has(key(q)); }
  function isDeferred(q) { return PRACTICE && DEFER.has(key(q)); }
  function saveDone() {
    try {
      localStorage.setItem(DONE_KEY, JSON.stringify(Array.from(DONE)));
    } catch (error) {
      // 忽略存储失败，不让标记操作报错。
    }
  }
  function saveWrong() {
    try {
      localStorage.setItem(WRONG_KEY, JSON.stringify(Array.from(WRONG)));
    } catch (error) {
      // 忽略存储失败，不让标记操作报错。
    }
  }
  function saveDefer() {
    try {
      localStorage.setItem(DEFER_KEY, JSON.stringify(Array.from(DEFER)));
    } catch (error) {
      // 忽略存储失败，不让标记操作报错。
    }
  }
  function saveActivity() {
    try {
      localStorage.setItem(ACTIVITY_KEY, JSON.stringify(ACTIVITY));
    } catch (error) {
      // 忽略存储失败，不让标记操作报错。
    }
  }
  function dateKey(date) {
    var d = date || new Date();
    var month = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + month + "-" + day;
  }
  function recordReview(id) {
    var today = dateKey();
    if (!Array.isArray(ACTIVITY[today])) ACTIVITY[today] = [];
    if (!ACTIVITY[today].includes(id)) {
      ACTIVITY[today].push(id);
      saveActivity();
    }
  }
  function markQuestion(status, id) {
    if (status === "done") {
      if (DONE.has(id)) {
        DONE.delete(id);
      } else {
        DONE.add(id);
        WRONG.delete(id);
        DEFER.delete(id);
        recordReview(id);
      }
    } else if (status === "defer") {
      if (DEFER.has(id)) {
        DEFER.delete(id);
      } else {
        DEFER.add(id);
        DONE.delete(id);
        WRONG.delete(id);
      }
    } else {
      if (WRONG.has(id)) {
        WRONG.delete(id);
      } else {
        WRONG.add(id);
        DONE.delete(id);
        DEFER.delete(id);
        recordReview(id);
      }
    }
    saveDone();
    saveWrong();
    saveDefer();
    render();
  }
  function markedCount(set) {
    return QUESTIONS.filter(function (q) { return set.has(key(q)); }).length;
  }
  function todayCount() {
    return (ACTIVITY[dateKey()] || []).length;
  }
  function isProof(q) { return /证明/.test(q.stem); }
  function primaryKp(q) { return (q.kps && q.kps[0]) || "待整理"; }
  function chapterName(q) {
    var c = CHAPTER_BY_ID[q.chapter];
    return c ? c.name : "待整理";
  }
  function chapterIndex(q) {
    var c = CHAPTER_BY_ID[q.chapter];
    return c ? Number(c.index) || 99 : 99;
  }
  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function byYearNo(a, b) {
    return a.year - b.year || Number(a.no) - Number(b.no);
  }

  function preview(stem) {
    var text = String(stem || "")
      .replace(/（本题满分[^）]*）/g, "")
      .replace(/\$\$[\s\S]*?\$\$/g, " … ")
      .replace(/\$[^$]*\$/g, " … ")
      .replace(/\\[a-zA-Z]+/g, " ")
      .replace(/[{}\\]/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\s*…\s*/g, " … ")
      .replace(/[，,]\s*\d+(?:\s*[，,]\s*\d+)*\s*[）)]/g, "）")
      .trim();
    if (!text.replace(/…/g, "").trim()) return "";
    if (text.replace(/[^\u4e00-\u9fa5]/g, "").length < 4) return "";
    return text.length > 58 ? text.slice(0, 58) + "…" : text;
  }

  var QUESTIONS = ALL.map(function (q) {
    return Object.assign({}, q, {
      proof: isProof(q),
      mixedProof: isProof(q) && MIXED_PROOF.has(key(q))
    });
  });
  var ACTIVE = QUESTIONS.filter(function (q) { return !q.proof; });
  var PROOF = (PRACTICE && !SHOW_PROOF) ? [] : QUESTIONS.filter(function (q) { return q.proof; });

  var state = {
    tab: "kp",
    year: "all",
    chapter: "all",
    q: "",
    onlyUndone: false
  };

  var el = {
    tabs: document.getElementById("tabs"),
    year: document.getElementById("filterYear"),
    chapter: document.getElementById("filterChapter"),
    search: document.getElementById("filterSearch"),
    count: document.getElementById("resultCount"),
    list: document.getElementById("list")
  };

  function uniqueYears() {
    var years = {};
    QUESTIONS.forEach(function (q) { years[q.year] = true; });
    return Object.keys(years).map(Number).sort(function (a, b) { return b - a; });
  }

  function usedChapters() {
    var ids = {};
    QUESTIONS.forEach(function (q) { ids[q.chapter] = true; });
    return CHAPTERS.filter(function (c) { return ids[c.id]; });
  }

  function fillFilters() {
    el.year.innerHTML = '<option value="all">全部年份</option>' +
      uniqueYears().map(function (y) {
        return '<option value="' + y + '">' + y + ' 年</option>';
      }).join("");

    el.chapter.innerHTML = '<option value="all">全部章节</option>' +
      usedChapters().map(function (c) {
        return '<option value="' + c.id + '">' + escapeHtml(c.name) + "</option>";
      }).join("");
  }

  function filtered(base) {
    var q = state.q.trim().toLowerCase();
    return base.filter(function (item) {
      if (state.year !== "all" && String(item.year) !== state.year) return false;
      if (state.chapter !== "all" && item.chapter !== state.chapter) return false;
      if (PRACTICE && state.onlyUndone && DONE.has(key(item))) return false;
      if (q) {
        var text = (item.stem + " " + (item.kps || []).join(" ") + " " + item.answer + " " + item.year + " " + item.no).toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }

  function tabCounts() {
    return { kp: ACTIVE.length, type: ACTIVE.length, proof: PROOF.length };
  }

  function renderTabs() {
    var counts = tabCounts();
    var tabs = [
      { id: "kp", name: "按知识点", count: counts.kp },
      { id: "type", name: "按题型", count: counts.type }
    ];
    if (!PRACTICE) tabs.push({ id: "proof", name: "证明题", count: counts.proof });
    else if (SHOW_PROOF) tabs.push({ id: "proof", name: "证明题", count: counts.proof });
    el.tabs.innerHTML = tabs.map(function (t) {
      return '<button type="button" class="tab' + (state.tab === t.id ? " active" : "") +
        '" data-tab="' + t.id + '">' + t.name + ' <span>' + t.count + "</span></button>";
    }).join("");
  }

  function summaryRows() {
    var counts = { "选择题": 0, "填空题": 0, "解答题": 0 };
    ACTIVE.forEach(function (q) { counts[q.type] = (counts[q.type] || 0) + 1; });
    return counts;
  }

  function renderStats() {
    var counts = summaryRows();
    var stats = document.getElementById("stats");
    if (PRACTICE) {
      stats.innerHTML =
        '<span><b>' + ACTIVE.length + "</b> 做题</span>" +
        '<span><b>' + markedCount(DONE) + "</b> 已完成</span>" +
        '<span><b>' + markedCount(WRONG) + "</b> 再做错</span>" +
        '<span><b>' + markedCount(DEFER) + "</b> 以后再做</span>" +
        '<span class="stats-types">' + counts["选择题"] + " 选择 · " + counts["填空题"] + " 填空 · " + counts["解答题"] + " 解答</span>";
    } else {
      stats.innerHTML =
        '<span><b>' + ACTIVE.length + "</b> 在学</span>" +
        '<span><b>' + PROOF.length + "</b> 证明题已排除</span>" +
        '<span><b>' + ALL.length + "</b> 总题数</span>" +
        '<span class="stats-types">' + counts["选择题"] + " 选择 · " + counts["填空题"] + " 填空 · " + counts["解答题"] + " 解答</span>";
    }
    var totalEl = document.getElementById("totalCount");
    if (totalEl) totalEl.textContent = ALL.length;
    var foot = document.getElementById("footNote");
    if (foot) {
      foot.textContent = "共 " + ALL.length + " 道 · " + FOOT_LABEL;
    }
  }

  function optionsHtml(q) {
    if (!q.options || !q.options.length) return "";
    var letters = ["A", "B", "C", "D", "E", "F"];
    return '<span class="options">' + q.options.map(function (opt, i) {
      return '<span class="option"><span>' + letters[i] + "</span>" + opt + "</span>";
    }).join("") + "</span>";
  }

  function questionHtml(q, showKps) {
    var kps = q.kps || [];
    var done = isDone(q);
    var wrong = isWrong(q);
    var deferred = isDeferred(q);
    var meta = (done ? "✓ 已完成 · " : wrong ? "✗ 再做错 · " : deferred ? "⏸ 以后再做 · " : "") +
      chapterName(q) + (showKps ? " · " + kps.join(" / ") : "");
    var answerBlock = PRACTICE ? "" :
      '<div class="answer"><span>答案</span><div>' + (q.answer || "待补") + "</div></div>";
    var analysis = !PRACTICE && q.analysis && !/^解析暂略/.test(q.analysis)
      ? '<div class="analysis">' + q.analysis + "</div>"
      : "";
    var markBlock = PRACTICE
      ? '<div class="mark-row">' +
          '<button type="button" class="done-toggle' + (done ? " is-done" : "") +
            '" data-mark="done" data-key="' + key(q) + '"><span class="done-box">' + (done ? "✓" : "") + "</span>" +
            "<span>" + (done ? "已做对 · 取消" : "做对了，标记完成") + "</span></button>" +
          '<button type="button" class="wrong-toggle' + (wrong ? " is-wrong" : "") +
            '" data-mark="wrong" data-key="' + key(q) + '"><span class="done-box">' + (wrong ? "✗" : "") + "</span>" +
            "<span>" + (wrong ? "已标再做错 · 取消" : "又做错了，标出来") + "</span></button>" +
          '<button type="button" class="defer-toggle' + (deferred ? " is-deferred" : "") +
            '" data-mark="defer" data-key="' + key(q) + '" title="太难了，以后再做"><span class="done-box">' + (deferred ? "⏸" : "") + "</span>" +
            "<span>" + (deferred ? "已放以后 · 取消" : "以后再做") + "</span></button>" +
        "</div>"
      : "";
    return '<details class="q' + (q.proof ? " is-proof" : "") + (done ? " is-done" : "") + (wrong ? " is-wrong" : "") + (deferred ? " is-deferred" : "") + '">' +
      '<summary>' +
        '<span class="q-no"><b>' + q.year + "</b><em>" + escapeHtml(q.no) + "</em></span>" +
        '<span class="q-main"><strong>' + escapeHtml(preview(q.stem) || "点开查看完整题目") + "</strong>" +
          '<small>' + escapeHtml(meta) + "</small></span>" +
        '<span class="q-type">' + escapeHtml(q.type) + "</span>" +
      "</summary>" +
      '<div class="q-detail">' +
        '<div class="stem">' + q.stem + "</div>" +
        optionsHtml(q) +
        markBlock +
        answerBlock +
        analysis +
      "</div>" +
    "</details>";
  }

  function groupHtml(title, meta, items, showKps) {
    return '<section class="group">' +
      '<header class="group-head"><div><h2>' + escapeHtml(title) + "</h2>" +
        (meta ? '<p>' + escapeHtml(meta) + "</p>" : "") + "</div>" +
        '<span class="group-count">' + items.length + " 道</span></header>" +
      '<div class="q-list">' + items.map(function (q) { return questionHtml(q, showKps); }).join("") + "</div>" +
    "</section>";
  }

  function renderByKp(items) {
    var map = {};
    items.forEach(function (q) {
      var k = primaryKp(q);
      if (!map[k]) map[k] = [];
      map[k].push(q);
    });
    var groups = Object.entries(map).map(function (entry) {
      var qs = entry[1].sort(function (a, b) {
        return TYPE_ORDER[a.type] - TYPE_ORDER[b.type] || byYearNo(a, b);
      });
      return {
        name: entry[0],
        items: qs,
        chapters: Array.from(new Set(qs.map(function (q) { return chapterName(q); }))).join(" / ")
      };
    }).sort(function (a, b) {
      return b.items.length - a.items.length || a.name.localeCompare(b.name, "zh-CN");
    });
    if (!groups.length) return emptyHtml();
    return groups.map(function (g) {
      return groupHtml(g.name, g.chapters, g.items, false);
    }).join("");
  }

  function renderByType(items) {
    var order = ["选择题", "填空题", "解答题"];
    var html = "";
    order.forEach(function (type) {
      var list = items.filter(function (q) { return q.type === type; }).sort(function (a, b) {
        return chapterIndex(a) - chapterIndex(b) || byYearNo(a, b);
      });
      if (list.length) html += groupHtml(type, "按章节和年份排列", list, true);
    });
    return html || emptyHtml();
  }

  function renderProof(items) {
    var pure = items.filter(function (q) { return !q.mixedProof; }).sort(byYearNo);
    var mixed = items.filter(function (q) { return q.mixedProof; }).sort(byYearNo);
    var html = '<div class="notice"><strong>证明题不进入主清单。</strong>' +
      "纯证明题直接跳过；含计算小问的题目标了“可做计算部分”，想拿步骤分可以只看前半段。</div>";
    if (pure.length) html += groupHtml("纯证明", "不学，直接跳过", pure, true);
    if (mixed.length) html += groupHtml("含计算小问", "证明小问跳过，可做前面的计算", mixed, true);
    return html || (html + emptyHtml());
  }

  function emptyHtml() {
    if (!ALL.length) {
      return '<div class="empty">' +
        escapeHtml(window.ERROR_LENS_EMPTY_TEXT || "还没有题目。把错题清单给我，整理后这里会自动出现。") +
        "</div>";
    }
    if (PRACTICE && state.onlyUndone && ACTIVE.every(function (q) { return DONE.has(key(q)); })) {
      return '<div class="empty">这 ' + ACTIVE.length + ' 道都标记完成了。取消“只看未完成”可以回看。</div>';
    }
    return '<div class="empty">没有匹配的题。换一个年份、章节或关键词试试。</div>';
  }

  function renderDaily() {
    var todayEl = document.getElementById("todayReviewed");
    var listEl = document.getElementById("dailyList");
    if (!todayEl || !listEl) return;

    var today = dateKey();
    var week = ["日", "一", "二", "三", "四", "五", "六"];
    var days = Object.keys(ACTIVITY)
      .filter(function (day) { return Array.isArray(ACTIVITY[day]) && ACTIVITY[day].length; })
      .sort()
      .reverse();

    todayEl.textContent = todayCount();
    if (!days.length) {
      listEl.innerHTML = '<div class="daily-empty">还没有记录。做完一题并标记后，这里会按天累计。</div>';
      return;
    }

    listEl.innerHTML = days.map(function (day) {
      var parts = day.split("-").map(Number);
      var date = new Date(parts[0], parts[1] - 1, parts[2]);
      var label = day === today
        ? "今天"
        : parts[1] + "." + parts[2] + " 周" + week[date.getDay()];
      return '<div class="daily-item"><span>' + escapeHtml(label) + "</span><b>" +
        ACTIVITY[day].length + " 题</b></div>";
    }).join("");
  }

  function render() {
    renderTabs();
    renderStats();
    var base = state.tab === "proof" && PROOF.length ? PROOF : ACTIVE;
    var items = filtered(base);

    if (state.tab === "kp") el.list.innerHTML = renderByKp(items);
    else if (state.tab === "type") el.list.innerHTML = renderByType(items);
    else el.list.innerHTML = renderProof(items);

    renderDaily();
    var label = state.tab === "proof" && PROOF.length ? "证明题" : (PRACTICE ? "做题" : "在学");
    el.count.textContent = "显示 " + items.length + " 道 · " + label +
      (items.length !== (state.tab === "proof" ? PROOF.length : ACTIVE.length)
        ? "（已筛选）" : "");

    if (window.renderMathInElement) {
      window.renderMathInElement(el.list, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  el.tabs.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-tab]");
    if (!btn) return;
    state.tab = btn.dataset.tab;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  el.year.addEventListener("change", function () { state.year = el.year.value; render(); });
  el.chapter.addEventListener("change", function () { state.chapter = el.chapter.value; render(); });
  el.search.addEventListener("input", function () { state.q = el.search.value; render(); });

  el.list.addEventListener("click", function (event) {
    var markButton = event.target.closest("[data-mark]");
    if (!markButton) return;
    event.preventDefault();
    markQuestion(markButton.dataset.mark, markButton.dataset.key);
  });

  var onlyUndone = document.getElementById("onlyUndone");
  if (onlyUndone) {
    onlyUndone.addEventListener("change", function () {
      state.onlyUndone = onlyUndone.checked;
      render();
    });
  }

  var resetDone = document.getElementById("resetDone");
  if (resetDone) {
    resetDone.addEventListener("click", function () {
      if (!DONE.size && !WRONG.size && !DEFER.size) return;
      if (!window.confirm("清空做对、再做错、以后再做标记？每日复习记录会保留。")) return;
      DONE.clear();
      WRONG.clear();
      DEFER.clear();
      saveDone();
      saveWrong();
      saveDefer();
      render();
    });
  }

  fillFilters();
  render();
})();
