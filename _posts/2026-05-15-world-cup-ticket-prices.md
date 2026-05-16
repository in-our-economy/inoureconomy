---
layout: post
title:  "How Many American Families Can Afford to Attend the World Cup?"
subtitle: "2026 is not 1994"
date: 2025-05-15
categories: [Inequality, New Analyses]
tags: [inequality, visualization, affordability, new analyses]
author: "Cyrus O'Brien"
---

The World Cup is being held in North America for the first time in 32 years, but most American's can't afford to attend.

* 83% of U.S. households can't afford the cheapest tickets available on the resale market to the World Cup Final at Metlife Stadium.
* 73% of U.S. households can't afford the cheapest face value tickets to the final.
* 78% of U.S. households can't afford great seats at a group stage game.
* The only affordable tickets (face value tickets for group games) are practically unavailable because of the lottery operated by FIFA.

The inaffordability of tickets to the 2026 World Cup stands in stark contrast to the last time the U.S. hosted the event in 1994. In 1994 the majority of Americans could afford to attend the final - even if they had to buy a ticket on the resale market. 

The charts below show how the affordibility of ticket prices has changed from 1994 to 2026. There are some assumptions 

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="world-cup-affordability-iframe"
    src="/assets/html/world-cup-affordability.html"
    title="World Cup ticket affordability bar charts comparing 1994 and 2026"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; min-height: 520px; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('world-cup-affordability-iframe');
      if (el) el.style.height = Math.max(520, e.data.iframeHeight) + 'px';
    }
  });
</script>

Keep in mind that this affordability metric is based just on **ticket prices**. Travel, parking, food, concessions, and other expenses related to attending a World Cup match are not included. [ESPN](https://www.espn.com/soccer/story/_/id/48259964/cost-2026-world-cup-how-much-usmnt-fan-spend) estimated that the cost for a USMNT fan to attend the group games would near $15,000 and the cost to follow a team through the whole tournament at more than $34,000. Ninety percent of American households couldn't afford to send a single member to follow a team through the whole World Cup even if they liquidated their all their checking accounts.

### More to come

Later this week I'll be publishing estimates of World Cup affordability for working families and I'll be digging into racial disparities. Want to know how many Black families are able to afford tickets to the World Cup Final? Answers will be at [inoureconomy.org](www.inoureconomy.org) soon. 


### Methodology and sources

I conducted online research to find the best apples-to-apples comparisons for ticket prices. All face value prices are published at [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/). Resale ticket prices are based on searches for USMNT games and Mexico games on StubHub and do not include the 15% transaction fee. I found resale ticket prices for the 1994 World Cup referenced in a number of Facebook and Reddit conversations and include links in the table below.

To determine if a family or household could afford tickets, I analyzed raw microdata from the 1995 and 2022 Survey of Consumer Finances (SCF). I updated all 1994 dollars to 2022 dollars for this analysis. I decided to leave 2026 dollars as 2026 dollars because, though inflation has been significant, experts believe that wages and savings have not kept pace with inflation. As a result, these estimates probably *underestimate* the number of families who can't afford tickets. I defined the cost of each match as the cost of having one ticket per adult and per child in the primary economic unit (which excludes non-spouse and non-partner adults). A household was defined as not being able to afford a ticket if the cost of tickets for a match exceeded the amount of money they held in all their checking accounts combined. 

Those of you who are interested in confidence intervals can see them below in this chart. The data were analyzed in R using Thomas Lumley's R packages [survey](https://cran.r-project.org/package=survey) and [mitools](https://cran.r-project.org/package=mitools). Special thanks to Antony Damico who wrote a custom function I used for multiple imputation for the SCF. 

<div id="ci-table-container"></div>

<style>
  .ci-table {
    width: 100%;
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
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script>
(function() {
  const YEAR_MAP = { "1995": "1994", "2022": "2026" };

  d3.csv("/assets/data/world-cup-affordability-all-households.csv").then(raw => {
    const data = raw.map(d => ({
      results: +d.results,
      se:      +d.se,
      lower:   +d["(lower"],
      upper:   +d["upper)"],
      year:    YEAR_MAP[d.year.trim()] || d.year.trim(),
      category: d.category.trim()
    }));

    const categories = [...new Set(data.map(d => d.category))];

    let html = `<table class="ci-table">
    <caption>How Many Americans CANNOT Afford to Attend the World Cup? (with 95% Confidence Intervals )</caption>
    <thead>
      <tr>
        <th>Category</th>
        <th>Year</th>
        <th>Estimate</th>
        <th>95% CI Lower</th>
        <th>95% CI Upper</th>
        <th>Std. Error</th>
      </tr>
    </thead>
    <tbody>`;

    categories.forEach(category => {
      const rows = data.filter(d => d.category === category);
      rows.forEach((d, i) => {
        const cls = d.year === "1994" ? "year-1994" : "year-2026";
        html += `<tr>
          <td>${i === 0 ? category : ''}</td>
          <td class="${cls}">${d.year}</td>
          <td class="${cls}">${d.results.toFixed(1)}%</td>
          <td>${d.lower.toFixed(1)}%</td>
          <td>${d.upper.toFixed(1)}%</td>
          <td>${d.se.toFixed(3)}</td>
        </tr>`;
      });
    });

    html += '</tbody></table>';
    document.getElementById('ci-table-container').innerHTML = html;
  });
})();
</script>


#### Ticket Prices by Year with Sources

| Ticket Type | Year | Price | Source |
|---|---|---|---|
| World Cup Final (Face Value) | 1994 | $359 | [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/) |
| World Cup Final (Face Value) | 2026 | $4,185 | [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/) |
| Group Stage (Face Value) | 1994 | $50 | [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/) |
| Group Stage (Face Value) | 2026 | $201 | [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/) |
| Round of 16 (Face Value) | 1994 | $70 | [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/) |
| Round of 16 (Face Value) | 2026 | $284 | [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/) |
| USMNT Group Stage (Resale) Cheapest Tickets| 1994 | $100 | I estimated that the resale value was 2x face value based on data published at [No Me Quiero Ir De Aquí](https://nomequieroirdeaqui.com/en/world-cup-ticket-price-history-1994-2026/) |
| USMNT Group Stage (Resale) Cheapest Tickets| 2026 | $1,007 | [My exploration of StubHub on May 15](https://bsky.app/profile/cyrusobrien.bsky.social/post/3mlw624vig22k) |
| MX Group Stage - Best Seats (Resale) | 1994 | $300 | [USA '94 Facebook group](https://www.facebook.com/groups/2603635568/posts/10164370694035569/) |
| MX Group Stage - Best Seats (Resale) | 2026 | $5,817 | [My exploration of StubHub on May 15](https://bsky.app/profile/cyrusobrien.bsky.social/post/3mlwchm74hs2k) |
| World Cup Final (Resale) | 1994 | $400 | [USA '94 Facebook group](https://www.facebook.com/groups/2603635568/posts/10164370694035569/) |
| World Cup Final (Resale) | 2026 | $8,467 | [My exploration of StubHub on May 15](https://bsky.app/profile/cyrusobrien.bsky.social/post/3mlw66ihjis2k) |


*The visualization above is built with the javascript library Observable. There are no trackers.*
