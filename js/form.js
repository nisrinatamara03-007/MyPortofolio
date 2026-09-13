/* ==========================================================
   NISRINA TAMARA LUBIS — PORTFOLIO
   form.js — contact form validation (client-side only,
   no backend/email service is connected — see form-note in HTML)
   ========================================================== */

(function () {
  'use strict';

  var form = document.getElementById('contactForm');
  if (!form) return;

  var successBox = document.getElementById('formSuccess');
  var fields = {
    name: form.querySelector('#name'),
    email: form.querySelector('#email'),
    message: form.querySelector('#message')
  };

  function getFieldWrapper(input) {
    return input.closest('.form-field');
  }

  function getErrorEl(fieldName) {
    return form.querySelector('[data-error-for="' + fieldName + '"]');
  }

  function showError(fieldName, message) {
    var input = fields[fieldName];
    var wrapper = getFieldWrapper(input);
    var errorEl = getErrorEl(fieldName);
    wrapper.classList.add('has-error');
    if (errorEl) errorEl.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(fieldName) {
    var input = fields[fieldName];
    var wrapper = getFieldWrapper(input);
    var errorEl = getErrorEl(fieldName);
    wrapper.classList.remove('has-error');
    if (errorEl) errorEl.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function t(key, fallback) {
    if (window.NisrinaI18n && typeof window.NisrinaI18n.t === 'function') {
      var msg = window.NisrinaI18n.t(key);
      if (msg) return msg;
    }
    return fallback;
  }

  function validateField(fieldName) {
    var input = fields[fieldName];
    var value = input.value.trim();

    if (fieldName === 'name') {
      if (value.length < 2) {
        showError('name', t('nameRequired', 'Please enter your name.'));
        return false;
      }
    }

    if (fieldName === 'email') {
      if (!isValidEmail(value)) {
        showError('email', t('emailInvalid', 'Please enter a valid email address.'));
        return false;
      }
    }

    if (fieldName === 'message') {
      if (value.length < 10) {
        showError('message', t('messageTooShort', 'Message should be at least 10 characters.'));
        return false;
      }
    }

    clearError(fieldName);
    return true;
  }

  /* Validate on blur for immediate, non-annoying feedback */
  Object.keys(fields).forEach(function (fieldName) {
    fields[fieldName].addEventListener('blur', function () {
      validateField(fieldName);
    });
    fields[fieldName].addEventListener('input', function () {
      var wrapper = getFieldWrapper(fields[fieldName]);
      if (wrapper.classList.contains('has-error')) {
        validateField(fieldName);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var validName = validateField('name');
    var validEmail = validateField('email');
    var validMessage = validateField('message');

    if (!validName || !validEmail || !validMessage) {
      var firstInvalid = form.querySelector('.has-error input, .has-error textarea');
      if (firstInvalid) firstInvalid.focus();
      if (successBox) successBox.classList.remove('is-visible');
      return;
    }

    /* No backend or email service is connected to this form.
       We simulate a success state only — nothing is actually sent. */
    var submitBtn = form.querySelector('.form-submit');
    var originalText = submitBtn.querySelector('.btn-text').textContent;

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = t('sending', 'Sending...');

    setTimeout(function () {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = originalText;

      if (successBox) {
        successBox.classList.add('is-visible');
      }
      form.reset();
      Object.keys(fields).forEach(clearError);
    }, 700);
  });

})();
