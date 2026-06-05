(function () {
  function getClosestTarget(event, selector) {
    var target = event.target;
    if (!target) {
      return null;
    }
    if (target.nodeType !== 1) {
      target = target.parentElement;
    }
    return target && target.closest ? target.closest(selector) : null;
  }

  function initPublicationTags() {
    var board = document.querySelector("[data-publication-tag-board]");
    if (!board) {
      return;
    }
    if (window.__pubTagsCleanup) {
      window.__pubTagsCleanup();
      window.__pubTagsCleanup = null;
    }

    var items = Array.prototype.slice.call(document.querySelectorAll(".publications .bibliography > li"));
    if (!items.length) {
      return;
    }

    var preferredOrder = [
      "first-author",
      "benchmark",
      "forecasting",
      "anomaly-detection",
      "foundation-model",
      "graph-learning",
      "irregular-time-series",
      "probabilistic-forecasting",
      "survey",
      "exogenous-variables",
      "preprint",
      "ccf-a",
      "spotlight",
      "oral",
      "best-paper",
      "most-influential-paper"
    ];

    var counts = {};
    var labels = {};
    var yearCounts = {};

    items.forEach(function (item) {
      var seen = {};
      var chips = item.querySelectorAll(".pub-chip[data-tag-id]");
      Array.prototype.forEach.call(chips, function (chip) {
        var tagId = chip.getAttribute("data-tag-id");
        if (!tagId || seen[tagId]) {
          return;
        }
        seen[tagId] = true;
        labels[tagId] = labels[tagId] || chip.textContent.trim();
        counts[tagId] = (counts[tagId] || 0) + 1;
      });
      item.dataset.tagIds = Object.keys(seen).join(" ");

      var periodical = item.querySelector(".periodical em");
      var yearMatch = periodical && periodical.textContent.match(/(20\d{2})/);
      if (yearMatch) {
        item.dataset.year = yearMatch[1];
        yearCounts[yearMatch[1]] = (yearCounts[yearMatch[1]] || 0) + 1;
      }
    });

    var tagIds = Object.keys(counts).sort(function (a, b) {
      var ai = preferredOrder.indexOf(a);
      var bi = preferredOrder.indexOf(b);
      if (ai !== -1 || bi !== -1) {
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      }
      return labels[a].localeCompare(labels[b]);
    });

    if (!tagIds.length) {
      return;
    }

    var isZh = document.documentElement.lang && document.documentElement.lang.indexOf("zh") === 0;
    var allLabel = isZh ? "全部主题" : "All Topics";
    var title = isZh ? "按主题筛选" : "Filter by topic";
    var yearTitle = isZh ? "按年份筛选" : "Filter by year";
    var allYearsLabel = isZh ? "全部年份" : "All Years";
    var modeLabel = isZh ? "组合方式" : "Match";
    var modeAnyLabel = isZh ? "任一 (并集)" : "Any (Union)";
    var modeAllLabel = isZh ? "全部 (交集)" : "All (Intersection)";
    var description = isZh
      ? "默认显示全部论文。点击主题或年份标签即可筛选。年份始终取并集（每篇论文只属于一个年份）；其余按下方“组合方式”切换：任一 = 命中任一所选标签即可，全部 = 同时满足所选主题，并落入所选年份。"
      : "Default view shows all papers. Click a topic or year tag to filter. Years always combine as a union (each paper has only one year); everything else follows the “Match” toggle below — Any = match any selected tag, All = match every selected topic and fall within a selected year.";

    board.hidden = false;
    board.innerHTML = "";
    board.classList.add("publication-filter-card");

    var desc = document.createElement("div");
    desc.className = "publication-filter-description";
    desc.textContent = description;
    board.appendChild(desc);

    var modeRow = document.createElement("div");
    modeRow.className = "publication-filter-mode";
    var modeLabelEl = document.createElement("span");
    modeLabelEl.className = "publication-filter-mode-label";
    modeLabelEl.textContent = modeLabel + ":";
    modeRow.appendChild(modeLabelEl);

    var modeGroup = document.createElement("div");
    modeGroup.className = "publication-filter-mode-group";
    var modeAnyButton = document.createElement("button");
    modeAnyButton.type = "button";
    modeAnyButton.className = "tag-filter mode-filter is-active";
    modeAnyButton.dataset.mode = "any";
    modeAnyButton.innerHTML = '<span class="tag-label">' + modeAnyLabel + "</span>";
    var modeAllButton = document.createElement("button");
    modeAllButton.type = "button";
    modeAllButton.className = "tag-filter mode-filter";
    modeAllButton.dataset.mode = "all";
    modeAllButton.innerHTML = '<span class="tag-label">' + modeAllLabel + "</span>";
    modeGroup.appendChild(modeAnyButton);
    modeGroup.appendChild(modeAllButton);
    modeRow.appendChild(modeGroup);
    board.appendChild(modeRow);

    var heading = document.createElement("div");
    heading.className = "publication-filter-title";
    heading.textContent = title;
    board.appendChild(heading);

    var list = document.createElement("div");
    list.className = "publication-filter-list";
    board.appendChild(list);

    var allButton = document.createElement("button");
    allButton.type = "button";
    allButton.className = "tag-filter is-active";
    allButton.dataset.tagId = "";
    allButton.innerHTML = '<span class="tag-label">' + allLabel + '</span><span class="tag-count">' + items.length + "</span>";
    list.appendChild(allButton);

    tagIds.forEach(function (tagId) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "tag-filter";
      button.dataset.tagId = tagId;
      button.innerHTML = '<span class="tag-label">' + labels[tagId] + '</span><span class="tag-count">' + counts[tagId] + "</span>";
      list.appendChild(button);
    });

    var years = Object.keys(yearCounts).sort(function (a, b) { return Number(b) - Number(a); });
    if (years.length > 1) {
      var yearHeading = document.createElement("div");
      yearHeading.className = "publication-filter-title publication-filter-title-secondary";
      yearHeading.textContent = yearTitle;
      board.appendChild(yearHeading);

      var yearList = document.createElement("div");
      yearList.className = "publication-filter-list publication-filter-list-year";
      board.appendChild(yearList);

      var allYearsButton = document.createElement("button");
      allYearsButton.type = "button";
      allYearsButton.className = "tag-filter year-filter is-active";
      allYearsButton.dataset.year = "";
      allYearsButton.innerHTML = '<span class="tag-label">' + allYearsLabel + '</span><span class="tag-count">' + items.length + "</span>";
      yearList.appendChild(allYearsButton);

      years.forEach(function (year) {
        var button = document.createElement("button");
        button.type = "button";
        button.className = "tag-filter year-filter";
        button.dataset.year = year;
        button.innerHTML = '<span class="tag-label">' + year + '</span><span class="tag-count">' + yearCounts[year] + "</span>";
        yearList.appendChild(button);
      });
    }

    var summary = document.createElement("div");
    summary.className = "publication-filter-summary";
    board.appendChild(summary);

    var activeTags = [];
    var activeYears = [];
    var matchMode = "any";

    function toggleTag(tagId) {
      var index = activeTags.indexOf(tagId);
      if (index === -1) {
        activeTags.push(tagId);
      } else {
        activeTags.splice(index, 1);
      }
    }

    function toggleYear(year) {
      var index = activeYears.indexOf(year);
      if (index === -1) {
        activeYears.push(year);
      } else {
        activeYears.splice(index, 1);
      }
    }

    function applyFilter() {
      var visibleCount = 0;
      items.forEach(function (item) {
        var itemTags = item.dataset.tagIds ? item.dataset.tagIds.split(" ") : [];
        var matchesTag;
        if (!activeTags.length) {
          matchesTag = true;
        } else if (matchMode === "all") {
          matchesTag = activeTags.every(function (tagId) {
            return itemTags.indexOf(tagId) !== -1;
          });
        } else {
          matchesTag = activeTags.some(function (tagId) {
            return itemTags.indexOf(tagId) !== -1;
          });
        }
        var matchesYear = !activeYears.length || activeYears.indexOf(item.dataset.year) !== -1;
        var visible;
        if (matchMode === "all") {
          visible = matchesTag && matchesYear;
        } else if (!activeTags.length && !activeYears.length) {
          visible = true;
        } else if (!activeTags.length) {
          visible = matchesYear;
        } else if (!activeYears.length) {
          visible = matchesTag;
        } else {
          visible = matchesTag || matchesYear;
        }
        item.hidden = !visible;
        if (visible) {
          visibleCount += 1;
        }
      });

      Array.prototype.forEach.call(board.querySelectorAll(".tag-filter:not(.year-filter):not(.mode-filter)"), function (button) {
        var tagId = button.dataset.tagId;
        button.classList.toggle("is-active", tagId === "" ? activeTags.length === 0 : activeTags.indexOf(tagId) !== -1);
      });

      Array.prototype.forEach.call(board.querySelectorAll(".year-filter"), function (button) {
        var year = button.dataset.year;
        button.classList.toggle("is-active", year === "" ? activeYears.length === 0 : activeYears.indexOf(year) !== -1);
      });

      Array.prototype.forEach.call(board.querySelectorAll(".mode-filter"), function (button) {
        button.classList.toggle("is-active", button.dataset.mode === matchMode);
      });

      Array.prototype.forEach.call(document.querySelectorAll(".pub-chip[data-tag-id]"), function (chip) {
        chip.classList.toggle("is-active", activeTags.indexOf(chip.dataset.tagId) !== -1);
      });

      if (!activeTags.length && !activeYears.length) {
        summary.textContent = isZh ? "当前显示全部论文。" : "Showing all papers.";
        return;
      }

      var parts = [];
      if (activeTags.length) {
        var topicJoiner = isZh ? (matchMode === "all" ? " 且 " : "、") : (matchMode === "all" ? " AND " : " OR ");
        var selectedLabels = activeTags.map(function (tagId) { return labels[tagId]; }).join(topicJoiner);
        parts.push(isZh ? "标签 " + selectedLabels : "tags " + selectedLabels);
      }
      if (activeYears.length) {
        var selectedYears = activeYears.slice().sort().join(isZh ? "、" : " / ");
        parts.push(isZh ? "年份 " + selectedYears : "year " + selectedYears);
      }
      var groupJoiner = isZh ? (matchMode === "all" ? " 且 " : " 或 ") : (matchMode === "all" ? " AND " : " OR ");

      summary.textContent = isZh
        ? "当前显示 " + visibleCount + " 篇匹配 " + parts.join(groupJoiner) + " 的论文。"
        : "Showing " + visibleCount + " papers matching " + parts.join(groupJoiner) + ".";
    }

    function handleFilterButtonClick(event) {
      var button = getClosestTarget(event, ".tag-filter");
      if (!button) {
        return;
      }
      event.preventDefault();
      if (button.classList.contains("mode-filter")) {
        var nextMode = button.dataset.mode === "all" ? "all" : "any";
        if (nextMode === matchMode) {
          return;
        }
        matchMode = nextMode;
      } else if (button.classList.contains("year-filter")) {
        if (!button.dataset.year) {
          activeYears = [];
        } else {
          toggleYear(button.dataset.year);
        }
      } else if (!button.dataset.tagId) {
        activeTags = [];
      } else {
        toggleTag(button.dataset.tagId);
      }
      applyFilter();
    }

    function handleChipClick(event) {
      var chip = getClosestTarget(event, ".pub-chip[data-tag-id]");
      if (!chip) {
        return;
      }
      event.preventDefault();
      toggleTag(chip.dataset.tagId);
      applyFilter();
      board.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    board.addEventListener("click", handleFilterButtonClick);
    document.addEventListener("click", handleChipClick);

    window.__pubTagsCleanup = function () {
      document.removeEventListener("click", handleChipClick);
    };

    applyFilter();
  }

  window.initPublicationTags = initPublicationTags;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPublicationTags);
  } else {
    initPublicationTags();
  }
})();
