/* ==========================================================================
   In Our Economy — main.js
   ========================================================================== */

(function () {
  'use strict';

  // ── Dark Mode ─────────────────────────────────────────────────────────────

  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  function getStoredTheme() {
    return localStorage.getItem('theme');
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function initTheme() {
    const stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }

  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
      // Re-render charts if on data page
      if (window.dataPageCharts) renderDataCharts();
    });
  }

  // Watch system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!getStoredTheme()) setTheme(e.matches ? 'dark' : 'light');
  });

  // ── Mobile Nav ───────────────────────────────────────────────────────────

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open', !expanded);
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  }

  // ── Typewriter Effect ────────────────────────────────────────────────────

  const typewriterEl = document.getElementById('typewriter');
  const phrases = window.typewriterPhrases || ['economics', 'policy', 'data'];

  if (typewriterEl) {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let pause = false;

    function tick() {
      const phrase = phrases[phraseIndex % phrases.length];

      if (!isDeleting) {
        typewriterEl.textContent = phrase.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === phrase.length) {
          pause = true;
          setTimeout(function () {
            pause = false;
            isDeleting = true;
            tick();
          }, 2200);
          return;
        }
      } else {
        typewriterEl.textContent = phrase.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex++;
        }
      }

      const speed = isDeleting ? 50 : 80;
      setTimeout(tick, speed);
    }

    // Start after a short delay
    setTimeout(tick, 600);
  }

  // ── Hero Mini-chart ───────────────────────────────────────────────────────

  const heroCanvas = document.getElementById('heroChart');

  if (heroCanvas && typeof Chart !== 'undefined') {
    const labels = ['2000', '2004', '2008', '2012', '2016', '2020', '2024'];
    const data1 = [47, 52, 44, 58, 63, 55, 72];
    const data2 = [38, 35, 28, 42, 48, 39, 61];

    const isDark = () => html.getAttribute('data-theme') === 'dark';
    const textColor = () => isDark() ? '#8892aa' : '#6b7280';
    const gridColor = () => isDark() ? '#2a2f42' : '#e5e7ef';

    new Chart(heroCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Top 10%',
            data: data1,
            borderColor: '#5b6af0',
            backgroundColor: 'rgba(91,106,240,0.08)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          },
          {
            label: 'Bottom 50%',
            data: data2,
            borderColor: '#f06050',
            backgroundColor: 'rgba(240,96,80,0.06)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1200, easing: 'easeInOutQuart' },
        plugins: {
          legend: {
            labels: { color: textColor(), font: { family: 'Inter', size: 11 }, boxWidth: 12 }
          },
          tooltip: { mode: 'index', intersect: false }
        },
        scales: {
          x: {
            grid: { color: gridColor() },
            ticks: { color: textColor(), font: { family: 'Inter', size: 10 } }
          },
          y: {
            grid: { color: gridColor() },
            ticks: { color: textColor(), font: { family: 'Inter', size: 10 }, callback: v => v + '%' }
          }
        }
      }
    });
  }

  // ── Data Page Charts ─────────────────────────────────────────────────────

  function getChartDefaults() {
    const isDark = html.getAttribute('data-theme') === 'dark';
    return {
      isDark,
      textColor:  isDark ? '#8892aa' : '#6b7280',
      gridColor:  isDark ? '#2a2f42' : '#e5e7ef',
      bgCard:     isDark ? '#1c2030' : '#ffffff',
    };
  }

  let inequalityChart = null;

  function renderDataCharts() {
    const d = getChartDefaults();

    // ── 1. Inequality Line/Bar chart ───────────────────────────────────────
    const inequalityCanvas = document.getElementById('inequalityChart');
    if (inequalityCanvas) {
      if (inequalityChart) { inequalityChart.destroy(); inequalityChart = null; }

      const ineqLabels = [
        '1920','1930','1940','1950','1960','1970','1980','1990','2000','2010','2019'
      ];
      const ineqData = [17.7, 19.5, 15.8, 11.0, 10.0, 9.5, 11.0, 14.0, 17.8, 17.5, 19.1];

      inequalityChart = new Chart(inequalityCanvas, {
        type: currentIneqType || 'line',
        data: {
          labels: ineqLabels,
          datasets: [{
            label: 'Top 1% Income Share',
            data: ineqData,
            borderColor: '#5b6af0',
            backgroundColor: currentIneqType === 'bar'
              ? 'rgba(91,106,240,0.7)'
              : 'rgba(91,106,240,0.10)',
            fill: currentIneqType !== 'bar',
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            borderWidth: 2,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: d.textColor, font: { family: 'Inter', size: 12 } } },
            tooltip: { mode: 'index', intersect: false, callbacks: { label: c => ' ' + c.parsed.y + '%' } }
          },
          scales: {
            x: { grid: { color: d.gridColor }, ticks: { color: d.textColor, font: { family: 'Inter' } } },
            y: {
              grid: { color: d.gridColor },
              ticks: { color: d.textColor, font: { family: 'Inter' }, callback: v => v + '%' },
              min: 6, max: 24,
            }
          }
        }
      });
    }

    // ── 2. Wage Growth Bar chart ───────────────────────────────────────────
    const wageCanvas = document.getElementById('wageChart');
    if (wageCanvas) {
      const wageLabels = ['10th', '20th', '30th', '40th', '50th', '60th', '70th', '80th', '90th', '95th'];
      const wageData  = [18.7, 24.2, 28.1, 32.9, 40.3, 47.5, 58.2, 71.4, 96.2, 132.8];
      const barColors = wageData.map(v =>
        v < 40 ? 'rgba(240,96,80,0.80)' : v < 70 ? 'rgba(245,185,66,0.80)' : 'rgba(52,201,160,0.80)'
      );

      new Chart(wageCanvas, {
        type: 'bar',
        data: {
          labels: wageLabels,
          datasets: [{
            label: 'Cumulative wage growth 1979–2022',
            data: wageData,
            backgroundColor: barColors,
            borderRadius: 6,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: d.textColor, font: { family: 'Inter', size: 12 } } },
            tooltip: { callbacks: { label: c => ' +' + c.parsed.y + '%' } }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: d.textColor, font: { family: 'Inter' } } },
            y: {
              grid: { color: d.gridColor },
              ticks: { color: d.textColor, font: { family: 'Inter' }, callback: v => '+' + v + '%' }
            }
          }
        }
      });
    }

    // ── 3. Federal Budget Doughnut ─────────────────────────────────────────
    const budgetCanvas = document.getElementById('budgetChart');
    if (budgetCanvas) {
      new Chart(budgetCanvas, {
        type: 'doughnut',
        data: {
          labels: ['Social Security', 'Health', 'Defense', 'Net Interest', 'Other'],
          datasets: [{
            data: [21, 28, 13, 11, 27],
            backgroundColor: ['#5b6af0','#34c9a0','#f06050','#f5b942','#a78bfa'],
            borderWidth: 2,
            borderColor: d.bgCard,
            hoverOffset: 8,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: d.textColor, font: { family: 'Inter', size: 11 }, padding: 12 }
            },
            tooltip: { callbacks: { label: c => ' ' + c.label + ': ' + c.parsed + '%' } }
          }
        }
      });
    }

    // ── 4. Unemployment by Education Bar ──────────────────────────────────
    const educCanvas = document.getElementById('educChart');
    if (educCanvas) {
      new Chart(educCanvas, {
        type: 'bar',
        data: {
          labels: ['< HS', 'HS grad', 'Some college', "Bachelor's", 'Advanced'],
          datasets: [{
            label: 'Unemployment rate 2023',
            data: [5.5, 3.9, 3.4, 2.2, 1.8],
            backgroundColor: ['#f06050','#f5b942','#5b6af0','#34c9a0','#34c9a0'],
            borderRadius: 6,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: c => ' ' + c.parsed.x + '%' } }
          },
          scales: {
            x: {
              grid: { color: d.gridColor },
              ticks: { color: d.textColor, font: { family: 'Inter' }, callback: v => v + '%' }
            },
            y: { grid: { display: false }, ticks: { color: d.textColor, font: { family: 'Inter' } } }
          }
        }
      });
    }

    // ── 5. Housing Scatter ────────────────────────────────────────────────
    const housingCanvas = document.getElementById('housingChart');
    if (housingCanvas) {
      // Simulated metro-area data points
      const metros = [
        {x: 42, y: 55, label: 'Miami'}, {x: 55, y: 51, label: 'Los Angeles'},
        {x: 68, y: 48, label: 'New York'}, {x: 72, y: 42, label: 'San Francisco'},
        {x: 38, y: 58, label: 'Memphis'}, {x: 46, y: 52, label: 'Orlando'},
        {x: 60, y: 44, label: 'Boston'}, {x: 58, y: 46, label: 'Denver'},
        {x: 52, y: 49, label: 'Atlanta'}, {x: 65, y: 41, label: 'Seattle'},
        {x: 75, y: 38, label: 'San Jose'}, {x: 44, y: 54, label: 'Phoenix'},
        {x: 61, y: 43, label: 'Minneapolis'}, {x: 35, y: 60, label: 'Detroit'},
        {x: 50, y: 50, label: 'Chicago'}, {x: 67, y: 40, label: 'Washington DC'},
      ];

      new Chart(housingCanvas, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Metro areas',
            data: metros,
            backgroundColor: 'rgba(91,106,240,0.65)',
            pointRadius: 7,
            pointHoverRadius: 10,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: c => ' ' + c.raw.label + ' — Median income: $' + c.raw.x + 'k, Cost-burdened: ' + c.raw.y + '%'
              }
            }
          },
          scales: {
            x: {
              grid: { color: d.gridColor },
              ticks: { color: d.textColor, font: { family: 'Inter' }, callback: v => '$' + v + 'k' },
              title: { display: true, text: 'Median Household Income', color: d.textColor, font: { family: 'Inter', size: 12 } }
            },
            y: {
              grid: { color: d.gridColor },
              ticks: { color: d.textColor, font: { family: 'Inter' }, callback: v => v + '%' },
              title: { display: true, text: '% of Renters Cost-Burdened', color: d.textColor, font: { family: 'Inter', size: 12 } }
            }
          }
        }
      });
    }
  }

  // Chart type toggle for inequality chart
  let currentIneqType = 'line';

  document.querySelectorAll('.chart-btn[data-chart="ineq"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.chart-btn[data-chart="ineq"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentIneqType = btn.dataset.type;
      if (inequalityChart) { inequalityChart.destroy(); inequalityChart = null; }
      renderDataCharts();
    });
  });

  // Load Chart.js lazily when the data page is open
  if (window.dataPageCharts || document.getElementById('heroChart')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    script.onload = function () {
      if (window.dataPageCharts) renderDataCharts();
      // Re-try hero chart after Chart.js loads
      if (document.getElementById('heroChart')) {
        // trigger the already-written heroChart init
        const evt = new Event('chartsReady');
        document.dispatchEvent(evt);
      }
    };
    document.head.appendChild(script);
  }

  document.addEventListener('chartsReady', function () {
    const heroCanvas2 = document.getElementById('heroChart');
    if (!heroCanvas2) return;
    const d = getChartDefaults();
    const labels = ['2000', '2004', '2008', '2012', '2016', '2020', '2024'];
    new Chart(heroCanvas2, {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: 'Top 10%', data: [47,52,44,58,63,55,72], borderColor: '#5b6af0', backgroundColor: 'rgba(91,106,240,0.08)', fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2 },
          { label: 'Bottom 50%', data: [38,35,28,42,48,39,61], borderColor: '#f06050', backgroundColor: 'rgba(240,96,80,0.06)', fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1200 },
        plugins: { legend: { labels: { color: d.textColor, font: { family: 'Inter', size: 11 }, boxWidth: 12 } } },
        scales: {
          x: { grid: { color: d.gridColor }, ticks: { color: d.textColor, font: { family: 'Inter', size: 10 } } },
          y: { grid: { color: d.gridColor }, ticks: { color: d.textColor, font: { family: 'Inter', size: 10 }, callback: v => v + '%' } }
        }
      }
    });
  });

  // ── Blog Search & Filter ──────────────────────────────────────────────────

  const searchInput = document.getElementById('post-search');
  const postList = document.getElementById('post-list');
  const noResults = document.getElementById('no-results');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let activeFilter = 'all';

  function filterPosts() {
    if (!postList) return;
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const items = postList.querySelectorAll('.post-list-item');
    let visible = 0;

    items.forEach(function (item) {
      const title = item.dataset.title || '';
      const excerpt = item.dataset.excerpt || '';
      const categories = item.dataset.categories || '';

      const matchesSearch = !query || title.includes(query) || excerpt.includes(query);
      const matchesFilter = activeFilter === 'all' || categories.includes(activeFilter);

      const show = matchesSearch && matchesFilter;
      item.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterPosts);
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      filterPosts();
    });
  });

  // ── Table of Contents ─────────────────────────────────────────────────────

  const tocContainer = document.getElementById('toc');
  const postContent = document.querySelector('.post-content');

  if (tocContainer && postContent) {
    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length > 1) {
      headings.forEach(function (h, i) {
        if (!h.id) h.id = 'heading-' + i;
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        a.className = h.tagName === 'H3' ? 'toc-h3' : '';
        tocContainer.appendChild(a);
      });

      // Highlight active heading on scroll
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          const id = entry.target.id;
          const tocLink = tocContainer.querySelector('a[href="#' + id + '"]');
          if (tocLink) tocLink.classList.toggle('active', entry.isIntersecting);
        });
      }, { rootMargin: '-10% 0px -80% 0px' });

      headings.forEach(h => observer.observe(h));
    } else {
      // Hide sidebar if no headings
      const sidebar = document.querySelector('.post-sidebar');
      if (sidebar) sidebar.style.display = 'none';
    }
  }

  // ── Animate elements on scroll ───────────────────────────────────────────

  if ('IntersectionObserver' in window) {
    const animateEls = document.querySelectorAll('.post-card, .chart-block, .post-list-item');
    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    animateEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      fadeObserver.observe(el);
    });
  }

})();
