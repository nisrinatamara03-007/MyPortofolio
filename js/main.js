/* ==========================================================
   NISRINA TAMARA LUBIS — PORTFOLIO
   main.js — navigation, mobile menu, active link, back-to-top
   ========================================================== */

(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  var backToTop = document.getElementById('backToTop');
  var navLinks = document.querySelectorAll('[data-nav]');
  var sections = document.querySelectorAll('main section[id]');

  /* ---------- Navbar scroll state ---------- */
  function updateNavState() {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }

    if (backToTop) {
      if (window.scrollY > 600) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', updateNavState, { passive: true });
  updateNavState();

  /* ---------- Mobile menu ---------- */
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  /* Close mobile menu whenever a nav link is used */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileMenu();
    });
  });

  /* Close mobile menu with Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
      navToggle.focus();
    }
  });

  /* ---------- Active nav link on scroll ---------- */
  var desktopLinks = document.querySelectorAll('.nav-link[data-nav]');

  function setActiveLink() {
    var scrollPos = window.scrollY + 140;
    var currentId = sections.length ? sections[0].id : null;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    desktopLinks.forEach(function (link) {
      var href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === currentId);
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Back to top ---------- */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Hero video mute/unmute toggle ---------- */
  var heroVideo = document.querySelector('.hero-video');
  var heroVideoToggle = document.getElementById('heroVideoToggle');

  if (heroVideo && heroVideoToggle) {
    heroVideoToggle.addEventListener('click', function () {
      heroVideo.muted = !heroVideo.muted;
      var isUnmuted = !heroVideo.muted;
      heroVideoToggle.setAttribute('aria-pressed', String(isUnmuted));
      heroVideoToggle.setAttribute('aria-label', isUnmuted ? 'Mute video' : 'Unmute video');
    });
  }

})();
