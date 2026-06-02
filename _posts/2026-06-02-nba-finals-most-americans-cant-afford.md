---
layout: post
title:  "Most Americans Can't Afford to Attend the NBA Finals"
subtitle: "71% of U.S. households can't afford nosebleed seats — up from 24% in 1994"
date: 2026-06-02
categories: [Inequality, New Analyses]
tags: [inequality, visualization, affordability, race, new analyses]
author: "Cyrus O'Brien"
---
### The NBA Finals have become unaffordable for most Americans

The NBA Finals are one of the most-watched sporting events in America — but for most families, attending in person is simply out of reach. My analysis finds that **71% of U.S. households can't afford even the cheapest nosebleed seats** to the NBA Finals today. In 1994, that number was just 24%.

* **71% of U.S. households** can't afford nosebleed seats at the 2026 NBA Finals.
* In 1994, only **24% of U.S. households** were priced out of the same seats.
* That's nearly a **tripling** of unaffordability in three decades.

The chart below shows how sharply the inaffordabilty of nosebleed seats has increased since 1994.

<style>
  #nba-overall-iframe { min-height: 520px; }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="nba-overall-iframe"
    src="/assets/html/nba-finals-affordability.html"
    title="Bar chart comparing share of U.S. households that cannot afford NBA Finals nosebleed seats, 1994 vs. 2026"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('nba-overall-iframe');
      if (!el) return;
      var newH = Math.max(380, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

### The racial divide is even starker

The aggregate numbers are striking, but they mask even deeper disparities by race. Black and Latino families are largely shut out of the NBA Finals — an event in which Black players make up the overwhelming majority of athletes.

* **87% of Black households** and **86% of Latino households** can't afford nosebleed seats in 2026.
* In 1994, 51% of Black households and 46% of Latino households were priced out.
* Even white households have seen a dramatic decline: unaffordability has risen from 18% to 68%.

<style>
  #nba-race-iframe { min-height: 580px; }
  @media (max-width: 620px) {
    #nba-race-iframe { min-height: 1100px; }
  }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="nba-race-iframe"
    src="/assets/html/nba-finals-affordability-by-race.html"
    title="Bar charts comparing NBA Finals nosebleed seat unaffordability by race, 1994 vs. 2026"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('nba-race-iframe');
      if (!el) return;
      var newH = Math.max(380, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

### Why this matters

The NBA has deep roots in Black American communities. The league's players are predominantly Black, its cultural influence on music, fashion, and identity is undeniable — and yet the people who built that culture are increasingly priced out of experiencing it live. This is what economic exclusion looks like in practice: a sport that draws on Black talent and culture has become, for most Black families, something you watch on television rather than in person.

More broadly, the NBA Finals are a microcosm of a wider story: the experiences and events that define American culture and society are steadily becoming the exclusive province of the wealthy. Working families have been squeezed out of mainstream activities.

The takeaway here is one you'll read frequently at In *Our* Economy: **We're living in an economy shaped by and for the wealthiest. Even people who are working hard and doing everything right are priced out of experiences that used to be within reach.**

### Methodology and sources

This analysis compares ticket prices at NBA Finals events at Madison Square Garden in 2026 to 1994. To determine whether a household could afford tickets, I analyzed raw microdata from the 1994 and 2022 Survey of Consumer Finances (SCF), conducted by the Federal Reserve Board. A household was defined as unable to afford a ticket if the cost of nosebleed seats for all adults and children in the primary economic unit exceeded the household's total checking account balances. All 1994 and 2026 prices were converted to 2022 dollars for comparison. Because wages and savings have not fully kept pace with recent inflation, these estimates likely *underestimate* current unaffordability.

The data were analyzed in R using Thomas Lumley's [survey](https://cran.r-project.org/package=survey) and [mitools](https://cran.r-project.org/package=mitools) packages. Special thanks to Antony Damico for the multiple imputation function used with the SCF.

For ticket prices, I used the cheapest available nosebleed seats. For game one in 2026, this was [$4,391](/assets/images/msg-ticket-prices.png). Prices for the 1994 Finals are from [Nina Prater's reporting in New York Magazine](https://nymag.com/intelligencer/article/knicks-finals-tickets-msg-already-crazy-expensive.html.)

Those interested in confidence intervals can see the full estimates below.

<div id="ci-table-container" style="overflow-x: auto; -webkit-overflow-scrolling: touch;"></div>

<style>
  .ci-table {
    width: 100%;
    min-width: 480px;
    font-size: 0.82rem;
  }
  .ci-table caption {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: left;
    color: #1a1a2e;
  }
  .ci-table th {
    background: #f5f5f5;
    text-align: left;
    padding: 0.45rem 0.6rem;
    border-bottom: 2px solid #ccc;
    font-weight: 600;
    color: #333;
  }
  .ci-table td {
    padding: 0.4rem 0.6rem;
    border-bottom: 1px solid #e8e8e8;
    color: #444;
  }
  .ci-table tr:last-child td {
    border-bottom: 2px solid #ccc;
  }
  .ci-table .year-1994 { color: #4A90A4; font-weight: 500; }
  .ci-table .year-2026 { color: #D4574E; font-weight: 500; }
  .ci-table .race-white  { color: #6B4F9E; font-weight: 500; }
  .ci-table .race-black  { color: #4A90A4; font-weight: 500; }
  .ci-table .race-latino { color: #E8944A; font-weight: 500; }
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script>
(function() {
  const pct = v => (v * 100).toFixed(1) + "%";

  // Overall table
  d3.csv("/assets/data/nba-finals-affordability.csv").then(raw => {
    const data = raw.map(d => ({
      results: +d.results,
      se:      +d.se,
      lower:   +d["(lower"],
      upper:   +d["upper)"],
      year:    d.name.trim() === "1994" ? "1994" : "2026"
    }));

    // By-race table
    d3.csv("/assets/data/nba-finals-affordability-by-race.csv").then(rawRace => {
      const raceData = rawRace.map(d => ({
        results: +d.results,
        se:      +d.se,
        lower:   +d["(lower"],
        upper:   +d["upper)"],
        year:    +d.year === 1994 ? "1994" : "2026",
        race:    d.race.trim()
      }));

      const RACE_ORDER = ["White", "Black", "Latino"];

      let html = `<table class="ci-table">
      <caption>NBA Finals Nosebleed Seat Unaffordability (with 95% Confidence Intervals)</caption>
      <thead>
        <tr>
          <th>Group</th>
          <th>Year</th>
          <th>Estimate</th>
          <th>95% CI Lower</th>
          <th>95% CI Upper</th>
          <th>Std. Error</th>
        </tr>
      </thead>
      <tbody>`;

      // All households rows
      data.forEach((d, i) => {
        const cls = d.year === "1994" ? "year-1994" : "year-2026";
        html += `<tr>
          <td>${i === 0 ? "<strong>All Households</strong>" : ""}</td>
          <td class="${cls}">${d.year}</td>
          <td class="${cls}">${pct(d.results)}</td>
          <td>${pct(d.lower)}</td>
          <td>${pct(d.upper)}</td>
          <td>${d.se.toFixed(4)}</td>
        </tr>`;
      });

      // By-race rows
      RACE_ORDER.forEach(race => {
        const rows = raceData.filter(d => d.race === race);
        const raceCls = race === "White" ? "race-white" : race === "Black" ? "race-black" : "race-latino";
        rows.forEach((d, i) => {
          const yrCls = d.year === "1994" ? "year-1994" : "year-2026";
          html += `<tr>
            <td>${i === 0 ? `<span class="${raceCls}">${race}</span>` : ""}</td>
            <td class="${yrCls}">${d.year}</td>
            <td class="${yrCls}">${pct(d.results)}</td>
            <td>${pct(d.lower)}</td>
            <td>${pct(d.upper)}</td>
            <td>${d.se.toFixed(4)}</td>
          </tr>`;
        });
      });

      html += '</tbody></table>';
      document.getElementById('ci-table-container').innerHTML = html;
    });
  });
})();
</script>

*The visualizations above are built with the JavaScript library Observable Plot. There are no trackers.*
