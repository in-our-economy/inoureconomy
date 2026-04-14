---
layout: post
title: 'On "middle class millionaires" and affluence vs. power'
subtitle: "Even the wealth of very well-off barely tips the scales"
date: 2025-04-14
categories: [Inequality, Games]
tags: [wealth, inequality, billionaires, visualization, interactive]
author: "Cyrus O'Brien"
---

My dad retired recently after a long and successful career in public higher education. He is an assiduous saver &ndash; he shops at discount groceries and still drives the 2001 Toyota Carolla he got as a hand-me-down from his mom nearly 20 years ago. He's managed to save a decent nest egg and he's super proud of it. When he recently accomplished one of his life-long goals &ndash; becoming a millionaire &ndash; and told a friend, his friend smiled said, "We're all just middle class millionaires."

For Boomers like my dad, having a million bucks was a big deal. It still is today &ndash; 96% of Black families don't have a million dollars &ndash; but even the wealth of the very well-off barely tips the scales. 

The visualization below tries to make the gap visceral. Pick an amount &ndash; how much you hope to have when you retire, how much you have in savings, whatever feels meaningful to you &ndash; and see how it compares to a billion dollars. Then add the richest person on the planet to the visualization.

<div class="viz-container">
  <iframe
    id="wealth-bubbles-iframe"
    src="/assets/html/wealth-bubbles.html"
    title="Interactive wealth comparison: your savings vs. billionaire wealth"
    scrolling="no"
    loading="lazy"
    style="width: 100%; border: none; min-height: 520px; border-radius: 8px; overflow: hidden;">
  </iframe>
</div>

<script>
  window.addEventListener('message', function(e) {
    if (e.data && e.data.iframeHeight) {
      var el = document.getElementById('wealth-bubbles-iframe');
      if (el) el.style.height = Math.max(520, e.data.iframeHeight) + 'px';
    }
  });
</script>

## What the circles show

The area of each circle is proportional to dollar amount. Your circle is the reference — everything else is scaled relative to it. At typical retirement savings ($500k–$2M), the billion-dollar circle is already enormous. Add Elon Musk's $428 billion, and your circle becomes a speck that needs a label and an arrow just to be visible.

That's not a flaw in the visualization. That's the point.

## Why does this matter?

Wealth at the scale of billions or hundreds of billions of dollars is *qualitatively* different from mere affluence. A person with $500,000 in savings has security. A person with $5 million has enough to live a affluent lifestyle indefinitely. A person with $500 million has the ability to change the lives of everyone in their city. Billionaires have the power to totally reshape our world and our society &ndash; and that's exactly what they've done.

If you know a middle class millionaire who starts to think that their affluence makes their interests are aligned with the ultra wealthy, share this visualization with them. Odds are are 

---

Sources:
1. *96% of Black families don't have a million dollars.* This is from my analysis of the 2022 Survey of Consumer Finances, using the public data.
2. Elon Musks's networth was reported in *[Forbes 400: The Definitive Ranking of America's Richest People 2025](https://www.forbes.com/forbes-400/)*. An archived version is available at the [Way Back Machine](https://web.archive.org/web/20260201000000*/https://www.forbes.com/forbes-400/). 

---



*The visualization above is built with plain SVG and JavaScript — no tracking, no data collection, no cookies.*
