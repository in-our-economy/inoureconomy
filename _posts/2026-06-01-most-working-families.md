---
layout: post
title:  "Most working families couldn't afford food and rent for a single month if their income were interrupted"
subtitle: "More than half of working households are living paycheck to paycheck — and the numbers are far worse for Black and Latino families"
date: 2026-06-01
categories: [Inequality, New Analyses]
tags: [inequality, affordability, race, new analyses]
author: "Cyrus O'Brien"
---

### Most working families have almost no financial cushion

Work is supposed to provide economic security. But for the majority of working households in the United States, a single missed paycheck — a layoff, a medical emergency, an unexpected car repair — could make it impossible to pay for food and housing at the same time.

My analysis of the 2022 Survey of Consumer Finances finds that **more than half of all working households don't have enough cash savings to cover one month of food and rent** if their income were interrupted. The numbers are even starker when broken down by race:

* **76% of working Latino families** can't cover a single month of food and housing from savings.
* **71% of working Black families** face the same situation.
* **52% of all working households** — regardless of race — are living this close to the edge.
* Even among white working families, the most financially stable group, **44% couldn't cover a month of food and housing** without a paycheck.

<style>
  #working-families-iframe { min-height: 700px; }
  @media (max-width: 600px) {
    #working-families-iframe { min-height: 780px; }
  }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="working-families-iframe"
    src="/assets/html/working-families-cant-afford-food-and-rent.html"
    title="Bar chart showing share of working households unable to cover one month of food and rent from savings, by race"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('working-families-iframe');
      if (!el) return;
      var newH = Math.max(400, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

### Why this matters

The image of the American worker as someone steadily building savings and climbing toward financial security doesn't match the reality for most families. These are people who are working — earning income, paying taxes, participating in the economy — and still living one bad month away from a serious crisis.

This isn't a story about individual choices or financial mismanagement. It's a story about an economy that extracts enormous value from working people while returning too little.

The racial disparities in these numbers reflect compounding disadvantages. Black and Latino workers are more likely to work in lower-wage jobs, face discrimination in hiring and wages, and have less access to wealth-building assets like homeownership. Financial fragility is not evenly distributed — it follows the contours of historical and ongoing inequality.

The takeaway here is one you'll read frequently at In *Our* Economy: **We're living in an economy shaped by and for the wealthiest. Even people who are working hard and doing everything right are operating with almost no financial margin.**

### Methodology and sources

This analysis uses raw microdata from the 2022 Survey of Consumer Finances (SCF), conducted by the Federal Reserve Board. The SCF is widely considered the gold standard for data on household wealth and financial assets in the United States. The data were analyzed in R using Thomas Lumley's [survey](https://cran.r-project.org/package=survey) and [mitools](https://cran.r-project.org/package=mitools) packages.

"Working households" are households where the SCF reference person is listed as participating in the labor force. A household is counted as unable to afford food and rent if their monthly expenditures for food and housing exceed their total cash savings (checking accounts, savings accounts, and prepaid cards). "Cash savings" here resembles a measure published by the [Harvard Joint Center for Housing Studies](https://www.jchs.harvard.edu/sites/default/files/reports/files/Harvard_JCHS_The_State_of_the_Nations_Housing_2023.pdf), but is modified to include prepaid cards.

Race and ethnicity are based on self-identification by the household's primary respondent. "Latino" includes households of any race who identify as Hispanic or Latino. "Other" includes households not identifying as white, Black, or Latino.

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
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script>
(function() {
  const GROUP_ORDER = ["All Working Households", "White", "Other", "Black", "Latino"];

  d3.csv("/assets/data/working_families_cant_afford_food_and_rent.csv").then(raw => {
    const data = raw.map(d => ({
      group:   d.group.trim(),
      results: +d.results,
      se:      +d.se,
      lower:   +d["(lower"],
      upper:   +d["upper)"],
      missInfo: d.missInfo ? d.missInfo.trim() : ""
    }));

    const pct = v => (v * 100).toFixed(1) + "%";

    const sorted = GROUP_ORDER
      .map(g => data.find(d => d.group === g))
      .filter(Boolean);

    let html = `<table class="ci-table">
    <caption>Share of Working Households Unable to Cover One Month of Food and Rent (with 95% Confidence Intervals)</caption>
    <thead>
      <tr>
        <th>Group</th>
        <th>Estimate</th>
        <th>95% CI Lower</th>
        <th>95% CI Upper</th>
        <th>Std. Error</th>
      </tr>
    </thead>
    <tbody>`;

    sorted.forEach(d => {
      html += `<tr>
        <td><strong>${d.group}</strong></td>
        <td>${pct(d.results)}</td>
        <td>${pct(d.lower)}</td>
        <td>${pct(d.upper)}</td>
        <td>${d.se.toFixed(4)}</td>
      </tr>`;
    });

    html += '</tbody></table>';
    document.getElementById('ci-table-container').innerHTML = html;
  });
})();
</script>

*The visualization above is built with the JavaScript library Observable Plot. There are no trackers.*
