/* ==========================================================
   NISRINA TAMARA LUBIS — PORTFOLIO
   i18n.js — bilingual (Indonesian / English) content switch.
   Default language: Indonesian ("id"). Loaded before main.js.
   ========================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'nisrina-lang';
  var DEFAULT_LANG = 'id';

  /* Every visible string that can be swapped. The "id" value equals what
     is already written in index.html (the page's default markup), and
     "en" is shown when the visitor switches language. Job titles,
     personal name, and technology/tool names are intentionally left
     untagged in index.html and are not listed here. */
  var translations = {
    'a11y.skip': { id: 'Lewati ke konten', en: 'Skip to content' },

    'nav.home': { id: 'Beranda', en: 'Home' },
    'nav.about': { id: 'Tentang', en: 'About' },
    'nav.experience': { id: 'Pengalaman', en: 'Experience' },
    'nav.skills': { id: 'Keahlian', en: 'Skills' },
    'nav.contact': { id: 'Kontak', en: 'Contact' },
    'nav.cta': { id: 'Mari Terhubung', en: "Let's Connect" },

    'hero.eyebrow': { id: 'Rekayasa Backend & Full Stack, Kepemimpinan Tim', en: 'Backend & Full Stack Engineering, Team Leadership' },
    'hero.headline': {
      id: 'Saya memimpin tim.<br>\n          Saya membangun sistem.<br>\n          Saya menyelesaikan masalah.',
      en: 'I lead teams.<br>\n          I build systems.<br>\n          I solve problems.'
    },
    'hero.sub': {
      id: 'IT Supervisor dan Full Stack Web Developer yang fokus mengubah\n          kebutuhan bisnis menjadi solusi digital yang andal.',
      en: 'IT Supervisor and Full Stack Web Developer focused on turning business\n          needs into reliable digital solutions.'
    },
    'hero.cta1': { id: 'Lihat Pengalaman Saya', en: 'View My Experience' },
    'hero.scroll': { id: 'Gulir', en: 'Scroll' },

    'about.eyebrow': { id: 'Tentang', en: 'About' },
    'about.headline': { id: 'Lebih dari sekadar developer.', en: 'More than a developer.' },
    'about.sub': { id: 'Pemimpin teknis yang memahami manusia sekaligus sistem.', en: 'A technical leader who understands both people and systems.' },
    'about.p1': {
      id: 'Nisrina memiliki 7+ tahun pengalaman di bidang IT, termasuk 2+ tahun\n          sebagai Supervisor yang memimpin tim developer dalam pengembangan dan\n          pemeliharaan 15+ produk aplikasi secara end-to-end.',
      en: 'Nisrina has 7+ years of experience in IT, including 2+ years as a\n          Supervisor leading a developer team through the end-to-end\n          development and maintenance of 15+ application products.'
    },
    'about.p2': {
      id: 'Keseharian kerjanya meliputi task planning, monitoring KPI, code\n          review, implementasi langsung, pertemuan dengan klien, requirement\n          gathering, koordinasi stakeholder, project ownership, dan melatih\n          developer baru saat onboarding.',
      en: "Her day-to-day spans task planning, KPI monitoring, code review,\n          hands-on implementation, client meetings, requirement gathering,\n          stakeholder coordination, project ownership, and training new\n          developers as they onboard."
    },
    'about.p3': {
      id: 'Ia juga merancang dan membangun dua tools internal dari nol — aplikasi\n          Task Management dan aplikasi Finance — yang dipakai setiap hari oleh\n          timnya sendiri.',
      en: 'She has also designed and built two internal tools from the ground\n          up — a Task Management application and a Finance application —\n          used daily inside her own team.'
    },
    'about.stat1': { id: 'Tahun Pengalaman', en: 'Years Experience' },
    'about.stat2': { id: 'Tahun sebagai Supervisor', en: 'Years as Supervisor' },
    'about.stat3': { id: 'Produk Aplikasi', en: 'Application Products' },
    'about.stat4': { id: 'Aplikasi Internal', en: 'Internal Applications' },

    'identity.eyebrow': { id: 'Cara ia bekerja', en: 'How she works' },
    'identity.headline': { id: 'Tiga cara menggambarkan orang yang sama.', en: 'Three ways to describe the same person.' },
    'identity.staffLabel': { id: 'Identifikasi Staf', en: 'Staff Identification' },
    'identity.title1': { id: 'Pimpin', en: 'Lead' },
    'identity.title2': { id: 'Bangun', en: 'Build' },
    'identity.title3': { id: 'Hubungkan', en: 'Connect' },
    'identity.dept1': { id: 'Divisi Kepemimpinan Tim', en: 'Team Leadership Division' },
    'identity.dept2': { id: 'Divisi Rekayasa', en: 'Engineering Division' },
    'identity.dept3': { id: 'Divisi Hubungan Klien', en: 'Client Relations Division' },
    'identity.lead1': { id: 'Kepemimpinan Tim', en: 'Team Leadership' },
    'identity.lead2': { id: 'Perencanaan Tugas', en: 'Task Planning' },
    'identity.lead3': { id: 'Monitoring KPI & Sprint', en: 'KPI & Sprint Monitoring' },
    'identity.lead4': { id: 'Code Review', en: 'Code Review' },
    'identity.lead5': { id: 'Kontrol Kualitas', en: 'Quality Control' },
    'identity.lead6': { id: 'Onboarding & Pelatihan', en: 'Onboarding & Training' },
    'identity.lead7': { id: 'Implementasi SOP', en: 'SOP Implementation' },
    'identity.conn1': { id: 'Pengumpulan Kebutuhan', en: 'Requirement Gathering' },
    'identity.conn2': { id: 'Komunikasi Klien Korporat', en: 'Corporate Client Communication' },
    'identity.conn3': { id: 'Manajemen Stakeholder', en: 'Stakeholder Management' },
    'identity.conn4': { id: 'Koordinasi Lintas Fungsi', en: 'Cross-functional Coordination' },
    'identity.conn5': { id: 'Integrasi ERP', en: 'ERP Integration' },
    'identity.conn6': { id: 'Staging Database', en: 'Staging Database' },
    'identity.conn7': { id: 'Dukungan Onsite', en: 'Onsite Support' },

    'journey.eyebrow': { id: 'Perjalanan Karier', en: 'Career Journey' },
    'journey.headline': { id: 'Dari administrasi hingga memimpin tim pengembangan.', en: 'From administration to leading a development team.' },
    'journey.tag1': { id: 'Kepemimpinan', en: 'Leadership' },
    'journey.period1': { id: 'Januari 2024 — Sekarang', en: 'January 2024 — Present' },
    'journey.sup1': { id: 'Memimpin dan memonitor tim developer', en: 'Leads and monitors a team of developers' },
    'journey.sup2': { id: 'Mengelola 15+ produk aplikasi', en: 'Manages 15+ application products' },
    'journey.sup3': { id: 'Menangani task planning dan review KPI bulanan', en: 'Handles task planning and monthly KPI reviews' },
    'journey.sup4': { id: 'Menjadi PIC teknis untuk klien korporat', en: 'Acts as the technical PIC for corporate clients' },
    'journey.sup5': { id: 'Menjalankan requirement gathering bersama stakeholder', en: 'Runs requirement gathering with stakeholders' },
    'journey.sup6': { id: 'Mengawasi distribusi bug dan request ke tim', en: 'Oversees bug and request distribution to the team' },
    'journey.sup7': { id: 'Melakukan code review sebelum rilis', en: 'Performs code review before release' },
    'journey.sup8': { id: 'Menyusun SOP dan alur kerja proyek', en: 'Builds SOPs and project workflows' },
    'journey.sup9': { id: 'Melatih dan meng-onboarding developer baru', en: 'Trains and onboards new developers' },
    'journey.sup10': { id: 'Memegang project ownership end-to-end, dari kontrak hingga go-live', en: 'Owns projects end-to-end, from contract to go-live' },
    'journey.sup11': { id: 'Merancang konsep metode Staging Database sebagai bridging system', en: 'Designing the concept of a Staging Database method as a bridging system' },
    'journey.sup12': { id: 'Mengawasi batch processing dan integrasi data', en: 'Oversees batch processing and data integration' },
    'journey.tag2': { id: 'Pengembangan', en: 'Development' },
    'journey.period2': { id: 'Januari 2019 — Desember 2023', en: 'January 2019 — December 2023' },
    'journey.dev1': { id: 'Mengembangkan aplikasi PHP/MySQL untuk klien korporat', en: 'Developed PHP/MySQL applications for corporate clients' },
    'journey.dev2': { id: 'Membangun sistem IT Inventory untuk Kepabeanan (regulasi PMK Bea Cukai)', en: 'Built an IT Inventory system for Customs (PMK Bea Cukai regulatory)' },
    'journey.dev3': { id: 'Mengikuti ketentuan regulasi PMK Bea Cukai', en: 'Followed PMK Bea Cukai regulatory requirements' },
    'journey.dev4': { id: 'Merancang alur integrasi ERP', en: 'Designed ERP integration workflows' },
    'journey.dev5': { id: 'Membangun Temporary Database untuk sinkronisasi push-pull harian', en: 'Built a Temporary Database for daily push-pull sync' },
    'journey.dev6': { id: 'Membangun frontend responsif dengan HTML/CSS/JavaScript', en: 'Built responsive frontends with HTML/CSS/JavaScript' },
    'journey.dev7': { id: 'Menggunakan Bootstrap dan AJAX di berbagai proyek', en: 'Used Bootstrap and AJAX across projects' },
    'journey.dev8': { id: 'Bekerja dalam arsitektur MVC', en: 'Worked within MVC architecture' },
    'journey.dev9': { id: 'Mengoptimalkan query MySQL untuk performa', en: 'Optimized MySQL queries for performance' },
    'journey.tag3': { id: 'Administrasi', en: 'Administration' },
    'journey.period3': { id: 'Januari 2017 — Desember 2017', en: 'January 2017 — December 2017' },
    'journey.adm1': { id: 'Menangani administrasi sekolah', en: 'Handled school administration' },
    'journey.adm2': { id: 'Mengelola arsip dan data', en: 'Managed records and data' },
    'journey.adm3': { id: 'Mencatat inventaris', en: 'Tracked inventory' },
    'journey.adm4': { id: 'Mengelola dokumentasi', en: 'Managed documentation' },
    'journey.adm5': { id: 'Memfasilitasi komunikasi dengan stakeholder', en: 'Facilitated communication with stakeholders' },

    'contrib.eyebrow': { id: 'Kontribusi Terpilih', en: 'Selected Contributions' },
    'contrib.headline': { id: 'Sistem yang dibangun dan dipelihara sepanjang perjalanan.', en: 'Systems built and maintained along the way.' },
    'contrib.title1': { id: 'Sistem Manajemen Tugas', en: 'Task Management System' },
    'contrib.desc1': {
      id: 'Aplikasi internal berbasis PHP/MySQL untuk mencatat dan\n            mendistribusikan request developer — dibangun untuk menggantikan\n            koordinasi manual lewat WhatsApp dengan alur kerja yang lebih terstruktur.',
      en: 'An internal PHP/MySQL application for logging and distributing\n            developer requests — built to replace manual WhatsApp\n            coordination with a structured workflow.'
    },
    'contrib.title2': { id: 'Aplikasi Internal Keuangan', en: 'Finance Internal Application' },
    'contrib.desc2': {
      id: "Aplikasi berbasis PHP/MySQL yang dibangun untuk mendukung proses\n            keuangan internal perusahaan.",
      en: "A PHP/MySQL application built to support the company's internal\n            finance processes."
    },
    'contrib.title3': { id: 'Sistem Inventaris TI & Kepabeanan', en: 'IT Inventory & Customs System' },
    'contrib.desc3': {
      id: 'Sistem IT Inventory Kepabeanan yang dibangun untuk klien korporat,\n            mencakup PO/GR, Sales Order/GI, Manufacturing, Transfer Orders,\n            Stock Adjustment, Stock Opname, dokumen kepabeanan, dan akuntansi dasar.',
      en: 'A customs (Kepabeanan) IT Inventory system built for corporate\n            clients, covering PO/GR, Sales Order/GI, Manufacturing, Transfer\n            Orders, Stock Adjustment, Stock Opname, customs documentation,\n            and basic accounting.'
    },
    'contrib.title4': { id: 'Integrasi Data ERP', en: 'ERP Data Integration' },
    'contrib.desc4': {
      id: "Merancang ruang lingkup dan spesifikasi sistem web Add-on I-Gateway dan \n merancang konsep metode Staging Database sebagai bridging system \n untuk mengarahkan tim pengembang dalam membangun data mirroring ke sistem IT Inventory.",
      en: "Designed the project scope, system specifications,\n and Staging Database architecture for the Add-on I-Gateway\n web application to direct the development team in building a data mirroring system\n for IT Inventory."
    },
    'contrib.title5': { id: 'Perancangan Ruang Lingkup & Alur Sistem', en: 'Project Scope & Requirements Planning' },
    'contrib.desc5': {
      id: 'Menyusun ruang lingkup proyek aplikasi, mulai dari perancangan flowchart \n alur kerja hingga pemetaan estimasi timeline pelaksanaan.',
      en: 'Defining the application project scope, from designing \n workflow flowcharts to mapping execution timeline estimates.'
    },

    'skills.eyebrow': { id: 'Keahlian Teknis', en: 'Technical Skills' },
    'skills.headline': { id: 'Rangkaian keahlian untuk coding maupun koordinasi.', en: 'A toolkit built for both code and coordination.' },
    'skills.group4': { id: 'Integrasi', en: 'Integration' },
    'skills.group5': { id: 'Manajemen', en: 'Management' },
    'skills.group6': { id: 'Kepemimpinan', en: 'Leadership' },
    'skills.group7': { id: 'Klien', en: 'Client' },
    'skills.int1': { id: 'Integrasi ERP', en: 'ERP Integration' },
    'skills.int2': { id: 'Push-Pull Data Harian', en: 'Daily Data Push-Pull' },
    'skills.int3': { id: 'Staging Database', en: 'Staging Database' },
    'skills.mgmt1': { id: 'Perencanaan Tugas', en: 'Task Planning' },
    'skills.mgmt2': { id: 'Monitoring KPI', en: 'KPI Monitoring' },
    'skills.mgmt3': { id: 'Monitoring Sprint', en: 'Sprint Monitoring' },
    'skills.mgmt4': { id: 'Identifikasi Risiko', en: 'Risk Identification' },
    'skills.mgmt5': { id: 'Implementasi SOP', en: 'SOP Implementation' },
    'skills.mgmt6': { id: 'Pelaporan Progres', en: 'Progress Reporting' },
    'skills.lead1': { id: 'Kepemimpinan Tim', en: 'Team Leadership' },
    'skills.lead3': { id: 'Kontrol Kualitas', en: 'Quality Control' },
    'skills.lead5': { id: 'Pelatihan', en: 'Training' },
    'skills.lead6': { id: 'Berbagi Pengetahuan', en: 'Knowledge Sharing' },
    'skills.client1': { id: 'Pengumpulan Kebutuhan', en: 'Requirement Gathering' },
    'skills.client2': { id: 'PIC Klien Korporat', en: 'Corporate Client PIC' },
    'skills.client3': { id: 'Koordinasi Stakeholder', en: 'Stakeholder Coordination' },
    'skills.client4': { id: 'Dukungan Onsite', en: 'Onsite Support' },

    'education.eyebrow': { id: 'Pendidikan', en: 'Education' },
    'education.gpa': { id: 'IPK 3.92', en: 'GPA 3.92' },

    'contact.headline': {
      id: 'Mari membangun<br>sistem yang lebih baik bersama.',
      en: "Let's build better<br>systems together."
    },
    'contact.sub': { id: 'Punya proyek, tantangan teknis, atau peluang yang ingin dibicarakan?', en: 'Have a project, technical challenge, or opportunity in mind?' },
    'contact.labelPhone': { id: 'Telepon', en: 'Phone' },
    'contact.labelLocation': { id: 'Lokasi', en: 'Location' },
    'shared.portfolio': { id: 'Portofolio', en: 'Portfolio' },
    'contact.formName': { id: 'Nama', en: 'Name' },
    'contact.formMessage': { id: 'Pesan', en: 'Message' },
    'contact.formSubmit': { id: 'Kirim Pesan', en: 'Send Message' },
    'contact.formNote': {
      id: "Formulir ini belum mengirim email — mengirim hanya akan menampilkan konfirmasi.",
      en: "This form doesn't send email yet — submitting will show a confirmation only."
    },
    'contact.formSuccess': {
      id: 'Terima kasih — pesan Anda telah dicatat. Nisrina akan segera menghubungi Anda kembali.',
      en: 'Thanks — your message has been noted. Nisrina will get back to you soon.'
    }
  };

  /* Form validation messages used by js/form.js, keyed the same way. */
  var formMessages = {
    nameRequired: { id: 'Mohon isi nama Anda.', en: 'Please enter your name.' },
    emailInvalid: { id: 'Mohon isi alamat email yang valid.', en: 'Please enter a valid email address.' },
    messageTooShort: { id: 'Pesan minimal 10 karakter.', en: 'Message should be at least 10 characters.' },
    sending: { id: 'Mengirim...', en: 'Sending...' }
  };

  function getStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage may be unavailable (e.g. privacy mode); fail silently */
    }
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        el.textContent = entry[lang];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var entry = translations[key];
      if (entry && entry[lang] !== undefined) {
        el.innerHTML = entry[lang];
      }
    });

    var otherLang = lang === 'id' ? 'en' : 'id';
    var toggleLabel = otherLang === 'en' ? 'EN' : 'ID';
    var toggleAria = otherLang === 'en' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia';

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.setAttribute('data-lang-current', lang);
      btn.setAttribute('aria-label', toggleAria);
      btn.textContent = btn.classList.contains('lang-toggle-mobile')
        ? (otherLang === 'en' ? 'English (EN)' : 'Bahasa Indonesia (ID)')
        : toggleLabel;
    });

    storeLang(lang);
  }

  function toggleLanguage() {
    var current = document.documentElement.lang === 'en' ? 'en' : 'id';
    applyLanguage(current === 'id' ? 'en' : 'id');
  }

  var initialLang = getStoredLang() === 'en' ? 'en' : DEFAULT_LANG;
  applyLanguage(initialLang);

  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', toggleLanguage);
  });

  /* Exposed so js/form.js can show validation messages in the current
     language without duplicating the dictionary. */
  window.NisrinaI18n = {
    getLang: function () {
      return document.documentElement.lang === 'en' ? 'en' : 'id';
    },
    t: function (key) {
      var lang = window.NisrinaI18n.getLang();
      var entry = formMessages[key];
      return entry ? entry[lang] : '';
    }
  };

})();
