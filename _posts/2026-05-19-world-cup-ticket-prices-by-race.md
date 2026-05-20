---
layout: post
title:  "Black and Latino Families are Largely Shut Out of the World Cup"
subtitle: "Black and Latino families face steeper barriers to attending the 2026 World Cup"
date: 2026-05-20,
Categories: [Inequality, New Analyses]
tags: [inequality, visualization, affordability, race, new analyses]
author: "Cyrus O'Brien"
---
### Black and Latino families are largely shut out of the World Cup

The World Cup is being held in North America for the first time in 32 years — and the ticket prices are unaffordable for most Americans. But racial and economic inequality results in Black and Latino households facing especially steep barriers to attending "the Greatest Show on Earth" than white households.

* 93% of Black U.S. households and 93% of Latino households can't afford the cheapest resale tickets to the World Cup Final at MetLife Stadium, compared to 80% of White households.
* 87% of Black households and 87% of Latino households can't afford the cheapest face value tickets to the final, compared to 69% of White households.
* In 1994, the picture was also unequal: roughly 64% of Black and Latino households couldn't afford World Cup Final resale tickets, compared to 36% of White households.

The charts below show how ticket affordability has changed from 1994 to 2026, broken down by race. 

<style>
  /* Base desktop height; grows via postMessage once charts render */
  #world-cup-affordability-race-iframe { min-height: 1100px; }
  /* On mobile the charts stack to a single column — pre-size tall enough */
  @media (max-width: 620px) {
    #world-cup-affordability-race-iframe { min-height: 2500px; }
  }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="world-cup-affordability-race-iframe"
    src="/assets/html/world-cup-affordability-by-race.html"
    title="World Cup ticket affordability bar charts by race, comparing 1994 and 2026"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('world-cup-affordability-race-iframe');
      if (!el) return;
      // Only ever grow the iframe, never shrink it — guards against early
      // sendHeight calls that fire before charts have fully rendered
      var newH = Math.max(520, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

Keep in mind that this affordability metric is based just on **ticket prices**. Travel, parking, food, concessions, and other expenses related to attending a World Cup match are not included. [ESPN](https://www.espn.com/soccer/story/_/id/48259964/cost-2026-world-cup-how-much-usmnt-fan-spend) estimated that the cost for a USMNT fan to attend the group games would near $15,000 and the cost to follow a team through the whole tournament at more than $34,000.

* 92% of Black U.S. households and 90% of Latino households couldn't afford to send a single member to all the USMNT group games, compared to 79% of White households.
* 97% of Black households and 96% of Latino households couldn't afford to follow a team through the whole World Cup even if they liquidated all their checking accounts, compared to 89% of White households.

### Takeaways

Black families overall experience greater financial stability than in 1994. You can see this reflected in these charts showing that a higher percentage of Black families can afford face-value tickets now compared to 1994. (The cheapest face-value tickets are about the same price, adjusted for inflation.) 

But Black families’ increased financial stability hasn’t resulted in increased access to World Cup tickets as they can actually be bought on the market. In 1994, 64% of Black families couldn’t afford to attend the Final (cheapest resale tickets available) and in 2026 **93% can’t afford to attend the final**. 

The takeaway here is one you’ll read frequently at In *Our* Economy: **We’re living in an economy shaped by and for the wealthiest. Even people who are working hard, saving, doing everything right - and making real progress at at lest some level - are priced out, squeezed, and excluded from experiences that used to be more accessible.**


### Methodology and sources

I conducted online research to find the best apples-to-apples comparisons for ticket prices. All face value prices are published at [The World Cup Guide](https://theworldcupguide.com/how-much-are-world-cup-tickets-since-1994/). Resale ticket prices are based on searches for USMNT games and Mexico games on StubHub and do not include the 15% transaction fee. I found resale ticket prices for the 1994 World Cup referenced in a number of Facebook and Reddit conversations and include links in the table below.

To determine if a family or household could afford tickets, I analyzed raw microdata from the 1995 and 2022 Survey of Consumer Finances (SCF). I updated all 1994 dollars to 2022 dollars for this analysis. I decided to leave 2026 dollars as 2026 dollars because, though inflation has been significant, experts believe that wages and savings have not kept pace with inflation. As a result, these estimates probably *underestimate* the number of families who can't afford tickets. I defined the cost of each match as the cost of having one ticket per adult and per child in the primary economic unit (which excludes non-spouse and non-partner adults). A household was defined as not being able to afford a ticket if the cost of tickets for a match exceeded the amount of money they held in all their checking accounts combined.

Race and ethnicity in the SCF is based on self-identification by the household's primary respondent. "Latino" includes households of any race who identify as Hispanic or Latino.

Those of you who are interested in confidence intervals can see them below in this chart. The data were analyzed in R using Thomas Lumley's R packages [survey](https://cran.r-project.org/package=survey) and [mitools](https://cran.r-project.org/package=mitools). Special thanks to Antony Damico who wrote a custom function I used for multiple imputation for the SCF.

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
  .ci-table .race-white  { color: #6B4F9E; font-weight: 500; }
  .ci-table .race-black  { color: #4A90A4; font-weight: 500; }
  .ci-table .race-latino { color: #E8944A; font-weight: 500; }
  .ci-table .year-1994 { color: #555; }
  .ci-table .year-2026 { color: #555; }
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script>
(function() {
  const YEAR_MAP = { "1995": "1994", "2022": "2026" };
  const RACE_ORDER = ["White", "Black", "Latino"];

  d3.csv("/assets/data/world-cup-affordability-by-race.csv").then(raw => {
    const data = raw.map(d => ({
      results: +d.results,
      se:      +d.se,
      lower:   +d["(lower"],
      upper:   +d["upper)"],
      year:    YEAR_MAP[d.year.trim()] || d.year.trim(),
      category: d.category.trim(),
      race: d.race.trim()
    }));

    const categories = [...new Set(data.map(d => d.category))];

    let html = `<table class="ci-table">
    <caption>Racial Disparities in World Cup Ticket Unaffordability (with 95% Confidence Intervals)</caption>
    <thead>
      <tr>
        <th>Category</th>
        <th>Race</th>
        <th>Year</th>
        <th>Estimate</th>
        <th>95% CI Lower</th>
        <th>95% CI Upper</th>
        <th>Std. Error</th>
      </tr>
    </thead>
    <tbody>`;

    categories.forEach(category => {
      const catRows = data.filter(d => d.category === category);
      let firstInCat = true;

      RACE_ORDER.forEach(race => {
        const raceRows = catRows.filter(d => d.race === race);
        const raceCls = race === "White" ? "race-white" : race === "Black" ? "race-black" : "race-latino";
        let firstInRace = true;

        raceRows.forEach(d => {
          const yearCls = d.year === "1994" ? "year-1994" : "year-2026";
          html += `<tr>
            <td>${firstInCat ? category : ''}</td>
            <td class="${raceCls}">${firstInRace ? race : ''}</td>
            <td class="${yearCls}">${d.year}</td>
            <td>${d.results.toFixed(1)}%</td>
            <td>${d.lower.toFixed(1)}%</td>
            <td>${d.upper.toFixed(1)}%</td>
            <td>${d.se.toFixed(3)}</td>
          </tr>`;
          firstInCat = false;
          firstInRace = false;
        });
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
