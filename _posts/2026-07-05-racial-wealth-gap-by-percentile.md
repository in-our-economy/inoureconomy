---
layout: post
title:  "The Racial Wealth Gap Like You've Never Seen It Before"
subtitle: "New angles on racial inequality as our nation turns 250"
date: 2026-07-05
categories: [Inequality, New Analyses]
tags: [inequality, visualization, race, wealth gap, new analyses]
author: "Cyrus O'Brien"
---

### *"The blessings in which you, this day, rejoice, are not enjoyed in common."*

I had a great time skipping the semiquincentennial yesterday and instead re-reading Frederick Douglass's [What to the Slave Is the 4th of July?](https://masshumanities.org/files/programs/douglass/speech_abridged_med.pdf). Since my first reading of his 1852 speech (I think when I was in high school), it's reinforced my sense of alienation from mainstream American nationalism. This year, what strikes me is that a similar sense of alienation seems widely shared. D.C. residents are fleeing the city's July 4 celebrations; the media elite are questioning the direction of the country; and my friends, family, and neighbors are approaching the celebrations with far more national shame - and much less national pride - than in previous years.

My guess is that this section resonates more widely today than in years past:

> To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity; your sounds of rejoicing are empty and heartless; your denunciations of tyrants, brass fronted impudence; your shouts of liberty and equality, hollow mockery; your prayers and hymns, your sermons and thanksgivings, with all your religious parade, and solemnity, are, to him, mere bombast, fraud, deception, impiety, and hypocrisy — a thin veil to cover up crimes which would disgrace a nation of savages. 

Fraud, deception, and hypocrisy certainly seem rampant, even if the savagery of a cage fight at the White House shows how far some of our national elements are from any sense of disgrace.

<div class="editorial-figure">
  <img src="/assets/images/frederick-douglass.jpeg" alt="Photographic portrait of Frederick Douglass, seated, circa 1879">
</div>
<div class="editorial-caption">
  <span class="caption-text">The great Frederick Douglass, circa 1879. Cabinet card portrait from the Frank W. Legg Photographic Collection of Portraits of Nineteenth-Century Notables.</span>
  <span class="caption-credit">Credit: <a href="https://catalog.archives.gov/id/558770">National Archives Identifier 558770</a></span>
</div>


What jumped out at me for the first time, though, was this section:

> I say it with a sad sense of the disparity between us. I am not included within the pale of this glorious anniversary! Your high independence only reveals the immeasurable distance between us. The blessings in which you, this day, rejoice, are not enjoyed in common. The rich inheritance of justice, liberty, prosperity and independence, bequeathed by your fathers, is shared by you, not by me.

And so I'm writing a new blog post showing you entirely new angles on the racial wealth gap. Here it is.

### The typical White household has six times as much wealth as the typical Black household

If you've seen data on the racial wealth gap before, you've probably seen some version of this: three bars, one for White households, one for Black households, one for Latino households, showing the median net worth of each.

* The median White household has a net worth of about **$284,000**.
* The median Black household has a net worth of about **$45,200** — less than a sixth as much.
* The median Latino household has a net worth of about **$64,000** — less than a quarter as much.

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="networth-median-bar-iframe"
    src="/assets/html/networth-median-bar-by-race.html"
    title="Bar chart of median net worth by race"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden; min-height: 480px;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('networth-median-bar-iframe');
      if (!el) return;
      var newH = Math.max(400, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

This chart is powerful in its simplicity and ease of communication. **The typical White household has about six times as much wealth as the typical Black household.** But there are many more things we can say.

### Inequality is literally off the charts

The chart below plots net worth at every percentile from the 1st to the 99th, for White, Black, and Latino households. Because inequality is so extreme, you can't really see what's going on in this chart without zooming in. Pinch or scroll to push the wealthiest off the chart and see what's happening at the percentiles where the vast majority of us live. (If you're reading this on Substack, head on over to [InOurEconomy.org](https://inoureconomy.org) for an interactive version.)

Starting at the 50th percentile, you'll see the same results as are in the bar chart above. But move up or down to see how the wealth gap changes at different places. For instance, a typical working-class White family (25th percentile) has $65k, while a typical working-class Black family has less than $2k. **In other words, at the lower end of the wealth bracket, the racial wealth gap is not 6x but 35x.** Zoom around a bit and use your pointer to explore the wealth gap at different percentiles.


<style>
  #networth-line-zoom-iframe { min-height: 620px; }
  @media (max-width: 620px) { #networth-line-zoom-iframe { min-height: 660px; } }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="networth-line-zoom-iframe"
    src="/assets/html/networth-line-zoom-by-race.html"
    title="Zoomable multi-series line chart of net worth by percentile and race"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('networth-line-zoom-iframe');
      if (!el) return;
      var newH = Math.max(520, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

* Roughly **17% of Black households** and **8% of Latino households** have negative net worth (they owe more than they own), compared to about **6% of White households**.
* The gap isn't just about the top of the distribution — it's present starting near the very bottom. By the 10th percentile, White households already have positive net worth (about $5,500) while the typical Black household in that range is roughly **$11,800 in debt**.
* And the gap widens as you move up. At the 90th percentile, White households have about **$2.53 million**, compared to about **$516,000** for Black households and **$519,000** for Latino households — a much bigger dollar gap than at the median.

### A different way to see the gap: same net worth, different percentile

The chart above answers "what's the net worth at percentile X?" This next one flips the question around: **for a given net worth, what percentile does that put you at, depending on your race?**

Move your mouse (or your finger, on mobile) left and right across the chart. A vertical line will track your cursor, showing you where that net worth level falls on each of the three curves. I had to use a log scale to make this chart legible - the log scale deals with exponential growth well, converting the hockey stick curve you see in the chart above into a more linear chart here. In a better country, we would be able to visualize inequality on a linear scale, but such is the scale of inequality that it's just not possible. 

<style>
  #networth-pointer-iframe { min-height: 660px; }
  @media (max-width: 620px) { #networth-pointer-iframe { min-height: 700px; } }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <iframe
    id="networth-pointer-iframe"
    src="/assets/html/networth-pointer-compare-by-race-swapped-axes.html"
    title="Interactive chart comparing net worth percentiles across race"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('networth-pointer-iframe');
      if (!el) return;
      var newH = Math.max(560, e.data.iframeHeight);
      if (newH > el.offsetHeight) el.style.height = newH + 'px';
    }
  });
</script>

Try hovering around $45,200 — the Black median from the bar chart above. That same net worth lands white households at only around the **22nd percentile** of their own distribution. In other words: the net worth that makes a Black household "typical" would make a white household one of the more financially precarious white households in the country. The same is roughly true for the Latino median of about $64,000, which lands around the **25th percentile** of the white distribution.

Zoom in around $1 million and you'll see that 22% of white families have a net worth in excess of $1 million, compared to just 4% of Black and Latino families. 

That's the real shape of the gap. It's not just that the middle of one distribution is lower than the middle of another — it's that the middle of the Black and Latino wealth distributions sits closer to the *bottom quarter* of the white wealth distribution.

### Why this matters

The median-only bar chart isn't wrong, but it invites a misreading: that the racial wealth gap is a single, fixed multiple — Black and Latino households have "about a sixth" of what white households have, everywhere, always. The truth is that the gap changes substantially depending on whether you're looking at poorer, average, or wealthier households. The wealthiest white families (95th percentile) have more than $4 million more than wealthy Black and Latino families. 

None of this is inevitable. It's the result of policy choices — from redlining and exclusion from federal homeownership programs to unequal access to credit and inherited wealth — that concentrated asset-building among white families for generations. The wealth gap you see in this data isn't a gap that has anything to do with intrinsic characteristics of white, Black, or Latino people. 

**It has everything to do with policies that have allowed a very few people to grow fantastically rich while keeping the rest of us - Black Americans in particular - from enjoying in common the wealth of a nation.**

### Methodology and sources

This analysis uses raw microdata from the 2022 Survey of Consumer Finances (SCF), conducted by the Federal Reserve Board. The SCF is widely considered the gold standard for data on household wealth and financial assets in the United States.

Net worth is calculated at the 1st through 99th percentile, in 1-point increments, separately for households whose primary respondent self-identifies as white, Black, or Hispanic/Latino (referred to here as "Latino," and inclusive of any race). Percentiles were estimated using Thomas Lumley's R packages [survey](https://cran.r-project.org/package=survey) and [mitools](https://cran.r-project.org/package=mitools) to properly account for the SCF's multiple-imputation design.

Those of you who are interested in confidence intervals can see them below, for every fifth percentile plus the 99th.

<div id="networth-ci-table-container" style="overflow-x: auto; -webkit-overflow-scrolling: touch;"></div>

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
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>
<script>
(function() {
  const RACE_ORDER = ["White", "Black", "Latino"];
  const RACE_LABEL = { "white": "White", "Black": "Black", "Latino": "Latino" };
  const TARGET_PERCENTILES = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99];

  function formatMoney(v) {
    const sign = v < 0 ? "-" : "";
    const abs = Math.abs(v);
    if (abs >= 1e6) return sign + "$" + (abs / 1e6).toFixed(2) + "M";
    if (abs >= 1e3) return sign + "$" + Math.round(abs / 1e3) + "k";
    return sign + "$" + Math.round(abs);
  }

  d3.csv("/assets/data/networth-quantiles-by-race-2022.csv").then(raw => {
    const data = raw.map(d => ({
      race: RACE_LABEL[d.race.trim()] || d.race.trim(),
      percentile: Math.round(+d.percentile * 100),
      value: +d.results,
      lower: +d["(lower"],
      upper: +d["upper)"],
      se: +d.se
    })).filter(d => RACE_ORDER.includes(d.race) && TARGET_PERCENTILES.includes(d.percentile));

    let html = `<table class="ci-table">
    <caption>Net Worth by Percentile and Race, with 95% Confidence Intervals (2022 SCF)</caption>
    <thead>
      <tr>
        <th>Percentile</th>
        <th>Race</th>
        <th>Estimate</th>
        <th>95% CI Lower</th>
        <th>95% CI Upper</th>
        <th>Std. Error</th>
      </tr>
    </thead>
    <tbody>`;

    TARGET_PERCENTILES.forEach(p => {
      let firstInPercentile = true;
      RACE_ORDER.forEach(race => {
        const d = data.find(row => row.percentile === p && row.race === race);
        if (!d) return;
        const raceCls = race === "White" ? "race-white" : race === "Black" ? "race-black" : "race-latino";
        html += `<tr>
          <td>${firstInPercentile ? p + "th" : ""}</td>
          <td class="${raceCls}">${race}</td>
          <td>${formatMoney(d.value)}</td>
          <td>${formatMoney(d.lower)}</td>
          <td>${formatMoney(d.upper)}</td>
          <td>${formatMoney(d.se)}</td>
        </tr>`;
        firstInPercentile = false;
      });
    });

    html += '</tbody></table>';
    document.getElementById('networth-ci-table-container').innerHTML = html;
  });
})();
</script>

*The visualizations above are built with D3.js and Observable Plot. There are no trackers.*
