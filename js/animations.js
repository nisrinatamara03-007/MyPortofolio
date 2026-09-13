/* ==========================================================
   NISRINA TAMARA LUBIS — PORTFOLIO
   animations.js — hero video autoplay, scroll reveal, timeline, counters
   ========================================================== */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero intro video ---------- */
  /* No preloader/skip step: the hero video autoplays muted + looped on
     every page load, per the requested behavior. If the visitor prefers
     reduced motion, we keep the poster frame visible instead of playing. */
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    if (prefersReducedMotion) {
      heroVideo.pause();
      heroVideo.removeAttribute('autoplay');
    } else {
      heroVideo.play().catch(function () {
        /* Autoplay can still be blocked by some browsers/extensions;
           the poster image remains visible as a graceful fallback. */
      });
    }
  }

  /* ---------- Scroll reveal via IntersectionObserver ---------- */
  var revealTargets = document.querySelectorAll(
    '.reveal-up, .identity-cards, .contrib-grid, .skill-wall, .timeline-item'
  );

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach(function (target) {
      observer.observe(target);
    });
  } else {
    /* No IO support or reduced motion: show everything immediately */
    revealTargets.forEach(function (target) {
      target.classList.add('is-visible');
    });
  }

  /* ---------- Timeline expand/collapse ---------- */
  var timelineToggles = document.querySelectorAll('[data-timeline-toggle]');

  function setPanelHeight(panel, expanded) {
    if (expanded) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = '0px';
    }
  }

  timelineToggles.forEach(function (toggle) {
    var panel = toggle.parentElement.querySelector('[data-timeline-panel]');
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    setPanelHeight(panel, expanded);

    toggle.addEventListener('click', function () {
      var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      setPanelHeight(panel, !isExpanded);
    });
  });

  /* Recalculate open panel heights on resize (text reflow) */
  window.addEventListener('resize', function () {
    timelineToggles.forEach(function (toggle) {
      var panel = toggle.parentElement.querySelector('[data-timeline-panel]');
      if (toggle.getAttribute('aria-expanded') === 'true') {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Animated statistics ---------- */
  var statNumbers = document.querySelectorAll('.stat-number');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';

    if (prefersReducedMotion) {
      el.textContent = target + suffix;
      return;
    }

    var duration = 1100;
    var startTime = null;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    statNumbers.forEach(function (el) {
      statObserver.observe(el);
    });
  } else {
    statNumbers.forEach(animateCount);
  }

})();
