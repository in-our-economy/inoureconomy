---
layout: post
title:  "The poorest billionaire is far too rich"
subtitle: "And Elon Musk's wealth is a crime"
date: 2025-05-12
categories: [Inequality, Interactives]
tags: [wealth, inequality, billionaires, visualization, interactive, games, new analyses]
author: "Cyrus O'Brien"
---

Here's an interactive visualization that allows you to put the wealth of the poorest in perspective. Enter a number that is meaningful to you &ndash; maybe how much you hope to save for retirement, how much money you'd have if you were insanely wealthy, anything you like. Then you'll see how this compares to the wealth of the poorest billionaire. As a final step, you see how your idea of wealth compares to the world's richest man, Elon Musk.

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

The area of each circle is proportional to dollar amount. Your circle is the reference — everything else is scaled relative to it. At typical retirement savings ($500k–$2M), the billion-dollar circle is already enormous. Add Elon Musk's $428 billion, and your circle becomes a speck that needs a label and an arrow just to be visible.[^1]

That's not a flaw in the visualization. That's the point. 

Actually the visualization &ndash; like so many other things &ndash; is skewed in the billionaires' favor, as I set your value to be a minimum of one pixel. Unless you chose a very large value or are working on a very large screen, your bubble is likely inflated &ndash; to the size of one pixel. (The visualization can be a bit glitchy with values less than $500k)


## Why does this matter?

Wealth at the scale of billions or hundreds of billions of dollars is *qualitatively* different from mere affluence. A person with $500,000 in savings has security. A person with $5 million has enough to live a affluent lifestyle indefinitely. A person with $500 million has the ability to change the lives of everyone in their city. Billionaires have the power to totally reshape our world and our society &ndash; and that's exactly what they've done.



*The visualization above is built with plain SVG and JavaScript — no tracking, no data collection, no cookies.*

[^1]: Elon Musk's net worth was reported in *[Forbes 400: The Definitive Ranking of America's Richest People 2025](https://www.forbes.com/forbes-400/)*. An archived version is available at the [Way Back Machine](https://web.archive.org/web/20260201000000*/https://www.forbes.com/forbes-400/).