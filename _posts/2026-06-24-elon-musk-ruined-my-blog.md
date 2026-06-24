---
layout: post
title:  "Elon Musk Just Ruined My Blog"
subtitle: "SpaceX's IPO minted the world's first trillionaire — and made my data visualizations obsolete"
date: 2026-06-24
categories: [Inequality, Billionaires, Interactives]
tags: [wealth, inequality, billionaires, Elon Musk, SpaceX, visualization, new analyses]
author: "Cyrus O'Brien"
---

I had a perfectly decent start to blogging. Nice charts. Clean visualizations. An interactive that showed just how obscenely rich Elon Musk is. Then SpaceX went public and Musk's net worth exploded so fast it rendered parts of my blog obselete just one month into this whole experiment.

Last week, Musk took his company SpaceX public. As Musky investors threw their savings into SpaceX stock, the stock price soared, giving Musk a net worth of **$1.4 trillion**. 

The moment didn't last long. After an initial influx of money (apparently largely from "retail investors") cooler heads prevailed and the stock plummeted. Still, SpaceX is worth a ton of money and Musk's networth is now estimated to be **$957 billion**. His wealth has no precedent in human history and is only possible because of economic policy decisions.

## An Updated Visualization

I've updated the visualization below to reflect Musk's current estimated net worth of approximately **$957 billion**. I've also removed a small design concession I'd made in the original: previously, I set a minimum bubble size of one pixel for the user's value, so that even very small amounts of money would be faintly visible on screen. I've dropped that floor entirely. If your bubble is too small to see, you won't see it.

<div class="viz-container">
  <iframe
    id="wealth-bubbles-957b-iframe"
    src="/assets/html/wealth-bubbles-957b.html"
    title="Interactive wealth comparison: your savings vs. Elon Musk's wealth at $957 billion"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; min-height: 520px; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('wealth-bubbles-957b-iframe');
      if (el) el.style.height = Math.max(520, e.data.iframeHeight) + 'px';
    }
  });
</script>

*The visualization above is built with plain SVG and JavaScript — no tracking, no data collection, no cookies. Musk's net worth figure of $957 billion reflects estimates as of late June 2026, following the partial correction from the post-IPO peak.*
