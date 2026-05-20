---
layout: post
title:  "You may be surprised by the financial precarity of people who rent their homes"
subtitle: "1 in 4 renting households has less than $200 in cash savings"
date: 2026-05-20
categories: [Inequality, New Analyses]
tags: [inequality, visualization, affordability, new analyses]
author: "Cyrus O'Brien"
---

### Most renters have very little liquidity

Renting a home is already expensive — but what's less visible is how little financial cushion most renters have. A quarter of renting households in the United States have less than $200 in cash savings, and nearly half have less than $1,000.

* **1 in 4 renting households has less than $200 in cash savings.**
* **42% of renting households have less than $1,000 in cash savings.**
* The median renting household has about $1,500 in cash savings — enough to cover a single month's rent in most American cities, but not much else.

These numbers come from my analysis of the Survey of Consumer Finances and were originally published in a non-profit organization's repor. They paint a picture of extreme financial vulnerability among a wide swath of U.S households. For many of the one-third of Americans who rent their homes, an unexpected car repair, a medical bill, or a missed paycheck could precipitate a crisis.

The chart below lets you explore the distribution of cash savings and net worth among renters compared to all households. You can zoom in on different parts of the distribution to see just how thin the financial margins are.

<style>
  /* Style the Observable form inputs to match the site */
  #observablehq-viewof-form-f629b048 form,
  .observablehq form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1.5rem;
    align-items: center;
    margin: 1rem 0 1.25rem;
    padding: 0.75rem 1rem;
    background: #f8f8f8;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    font-size: 0.88rem;
    color: #333;
  }

  #observablehq-viewof-form-f629b048 label,
  .observablehq form label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 500;
    cursor: pointer;
    white-space: wrap;
  }

  #observablehq-viewof-form-f629b048 select,
  .observablehq form select {
    padding: 0.3rem 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    font-size: 0.86rem;
    color: #333;
    cursor: pointer;
    min-width: 160px;
  }

  #observablehq-viewof-form-f629b048 input[type="checkbox"],
  .observablehq form input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #4A90A4;
  }

  #observablehq-viewof-form-f629b048 input[type="range"],
  .observablehq form input[type="range"] {
    cursor: pointer;
    accent-color: #4A90A4;
    min-width: 120px;
  }

  /* Observable inspector overrides */
  .observablehq--inspect { display: none; }
</style>

<div class="viz-wrapper" style="margin: 2rem 0;">
  <div id="observablehq-title_renters_by_race-f629b048"></div>
  <div id="observablehq-viewof-form-f629b048"></div>
  <div id="observablehq-cash_savings_chart-f629b048"></div>
  <p style="font-size: 0.75rem; color: #888; margin-top: 0.5rem;">Credit: <a href="https://asj.allianceforsafetyandjustice.org/the-keys-to-safety/">The Keys to Safety, by the Alliance for Safety and Justice</a></p>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
  <script type="module">
  import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
  import define from "https://api.observablehq.com/d/cb245a31ca3ab573.js?v=4";
  new Runtime().module(define, name => {
    if (name === "title_renters_by_race") return new Inspector(document.querySelector("#observablehq-title_renters_by_race-f629b048"));
    if (name === "viewof form") return new Inspector(document.querySelector("#observablehq-viewof-form-f629b048"));
    if (name === "cash_savings_chart") return new Inspector(document.querySelector("#observablehq-cash_savings_chart-f629b048"));
    return ["cash_savings_chart_tall","renters_toggle","cash_savings_chart_annotated","cash_savings_chart_for_pdf_not_annotated"].includes(name);
  });
  </script>
</div>

### Why this matters

The image you see in some media of renters as young professionals saving up for a down payment doesn't match reality for most U.S. renters. Renting is often not a choice — it's the only option for families who can't come up with a down payment, can't qualify for a mortgage, or live in markets where homeownership is simply out of reach.

And while the costs of renting keep rising — rents have increased dramatically over the past decade — wages for many renters have not kept pace. The result is a large and growing share of the population living one bad month away from serious financial trouble.

The takeaway here is one you'll read frequently at In *Our* Economy: **We're living in an economy shaped by and for the wealthiest. Even people who are working hard and doing everything right are operating with almost no financial margin.**

### Methodology and sources

This analysis uses raw microdata from the 2022 Survey of Consumer Finances (SCF), conducted by the Federal Reserve Board. The SCF is widely considered the gold standard for data on household wealth and financial assets in the United States.

"Cash savings" replicates a measure published by the [Harvard Joint Center for Housing Studies](https://asj.allianceforsafetyandjustice.org/the-keys-to-safety-full-text/#:~:text=https%3A//www.jchs.harvard.edu/sites/default/files/reports/files/Harvard_JCHS_The_State_of_the_Nations_Housing_2023.pdf).

You can read the full methodology in the [The Keys to Safety](https://asj.allianceforsafetyandjustice.org/the-keys-to-safety/).

*The visualization above is built with the JavaScript library Observable. There are no trackers.*
