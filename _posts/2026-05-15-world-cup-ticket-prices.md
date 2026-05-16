---
layout: post
title:  "How Many American Families Can Afford to Attend the World Cup?"
subtitle: "2026 is not 1994"
date: 2025-05-14
categories: [Inequality, New Analyses]
tags: [inequality, visualization, affordability, new analyses]
author: "Cyrus O'Brien"
---

Most Americans can't afford to attend the World Cup. 


Donald Trump just [told the world](https://www.pbs.org/newshour/politics/watch-i-dont-think-about-americans-financial-situation-when-negotiating-with-iran-trump-says), "I don't think about Americans' financial situation."

Okay, the whole quote gives context that he doesn't think about our financial situations when he's negotiating an end to the war he started with Iran. It's understandable that gas prices shouldn't dictate war and peace, but I wish he *had* thought about all the obvious ramifications before he elected to kill thousands of people - and spend at least [$29 billion](https://www.npr.org/2026/05/13/g-s1-121812/up-first-newsletter-war-iran-marty-makary-student-education-scorecard-trump-pardons) of your dollars doing so. 

But Trump doesn't think about your financial situation because he doesn't have to. With a wealth of [$6.5 billion](https://www.forbes.com/sites/danalexander/article/the-definitive-networth-of-donaldtrump/), he's living in a different economy from you and me. 

In the interactive below, enter how much money you have, or you wish to have, or really any number you feel like. Then see how it compares to Trump's wealth. 


<div class="viz-container">
  <iframe
    id="wealth-bubbles-iframe"
    src="/assets/html/wealth-bubbles-trump.html"
    title="Interactive wealth comparison: your savings vs. Trump's"
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

The area of each circle is proportional to dollar amount. Your circle is the reference — everything else is scaled relative to it. Trump and the other members of the billionaire class have wealth that is beyond the scale of your imagination. Imagine spending $6,500 a day, every day. Donald Trump could do that and not run out of money until April 11, 4764. That's not a typo. That's why he doesn't think about your finances. 



*The visualization above is built with plain SVG and JavaScript — no tracking, no data collection, no cookies.*
