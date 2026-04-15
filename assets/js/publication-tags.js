(function () {
  function initPublicationTags() {
    var board = document.querySelector("[data-publication-tag-board]");
    if (!board) {
      return;
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
    var allLabel = isZh ? "全部论文" : "All Papers";
    var title = isZh ? "按主题筛选" : "Filter by topic";
    var description = isZh
      ? "默认视图显示全部论文。点击主题标签可快速定位相关方向；选择多个标签时取并集。"
      : "Default view shows all papers. Click a topic tag to jump straight to one theme; selecting multiple tags uses union matching.";

    board.hidden = false;
    board.innerHTML = "";
    board.classList.add("publication-filter-card");

    var heading = document.createElement("div");
    heading.className = "publication-filter-title";
    heading.textContent = title;
    board.appendChild(heading);

    var desc = document.createElement("div");
    desc.className = "publication-filter-description";
    desc.textContent = description;
    board.appendChild(desc);

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

    var summary = document.createElement("div");
    summary.className = "publication-filter-summary";
    board.appendChild(summary);

    var activeTags = [];

    function toggleTag(tagId) {
      var index = activeTags.indexOf(tagId);
      if (index === -1) {
        activeTags.push(tagId);
      } else {
        activeTags.splice(index, 1);
      }
    }

    function applyFilter() {
      var visibleCount = 0;
      items.forEach(function (item) {
        var tagIds = item.dataset.tagIds ? item.dataset.tagIds.split(" ") : [];
        var visible = !activeTags.length || activeTags.some(function (tagId) {
          return tagIds.indexOf(tagId) !== -1;
        });
        item.hidden = !visible;
        if (visible) {
          visibleCount += 1;
        }
      });

      Array.prototype.forEach.call(board.querySelectorAll(".tag-filter"), function (button) {
        var tagId = button.dataset.tagId;
        button.classList.toggle("is-active", tagId === "" ? activeTags.length === 0 : activeTags.indexOf(tagId) !== -1);
      });

      Array.prototype.forEach.call(document.querySelectorAll(".pub-chip[data-tag-id]"), function (chip) {
        chip.classList.toggle("is-active", activeTags.indexOf(chip.dataset.tagId) !== -1);
      });

      if (!activeTags.length) {
        summary.textContent = isZh ? "当前显示全部论文。" : "Showing all papers.";
        return;
      }

      var selectedLabels = activeTags.map(function (tagId) {
        return labels[tagId];
      }).join(isZh ? "、" : " + ");

      summary.textContent = isZh
        ? "当前显示 " + visibleCount + " 篇包含任一所选标签 “" + selectedLabels + "” 的论文。"
        : "Showing " + visibleCount + " papers tagged with any of " + selectedLabels + ".";
    }

    board.addEventListener("click", function (event) {
      var button = event.target.closest(".tag-filter");
      if (!button) {
        return;
      }
      if (!button.dataset.tagId) {
        activeTags = [];
      } else {
        toggleTag(button.dataset.tagId);
      }
      applyFilter();
    });

    document.addEventListener("click", function (event) {
      var chip = event.target.closest(".pub-chip[data-tag-id]");
      if (!chip) {
        return;
      }
      toggleTag(chip.dataset.tagId);
      applyFilter();
      board.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    applyFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPublicationTags);
  } else {
    initPublicationTags();
  }
})();
