---
layout: post
title:  "Middle class millionaires?"
subtitle: "How to talk to Boomers about inequality"
date: 2025-04-14
categories: [Inequality, Interactives]
tags: [wealth, inequality, billionaires, visualization, interactive, games, new analyses]
author: "Cyrus O'Brien"
---

My dad retired recently after a long and successful career in public higher education. He's always been an assiduous saver. He shops at discount grocery stores and still drives the 2001 Toyota Carolla he got as a hand-me-down from his mom nearly 20 years ago. He's managed to save a decent nest egg and he's justifiably proud. When he told his oldest friend a few yours ago that he was going to be able to retire with some financial security, his friend smiled said, "We're all just middle class millionaires."

For Boomers like my dad, having a million bucks was a big deal. It still is today &ndash; 96% of Black families don't have a million dollars &ndash;. And because money makes money in capitalism, a million bucks invested conservatively earns $50,000 a year, which is more than what the typical Black family earns in a year through blood, sweat, and tears. The $50,000 in passive income that a million dollars makes is more than 35% percent of U.S. households.[^1] But it doesn't even begin to compare to the wealth of the ultra-wealthy.


<div class="viz-container">
  <iframe
    id="wealth-bubbles-iframe"
    src="/assets/html/wealth-bubbles.html"
    title="Interactive wealth comparison: you vs. the world's poorest billionaire"
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

I created this blog post because some affluent people think that their affluence gives them shared interests with the billionaire class. They look at the balance in their 401ks and think that taxing the rich means taxing them. They may not be *entirely* wrong, but the political power of the billionaire class depends in large part on their ability to convince normal people that they have overlapping interests. In reality, we're all being squeezed in our economy.

If you know a "middle class millionaire" who starts to think that their affluence makes their interests are aligned with the ultra wealthy, share this visualization with them. 


[^1]: My analysis of the 2022 Survey of Consumer Finances, using the public data.
