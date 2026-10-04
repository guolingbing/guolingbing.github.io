(function () {
  'use strict';

  var years = Array.prototype.slice.call(document.querySelectorAll('#publication-years details'));
  var toggle = document.getElementById('toggle-publications');

  function updateToggle() {
    if (!toggle) return;
    toggle.textContent = years.every(function (year) { return year.open; })
      ? 'Collapse all years' : 'Expand all years';
  }

  if (toggle && years.length) {
    toggle.hidden = false;
    toggle.addEventListener('click', function () {
      var expand = !years.every(function (year) { return year.open; });
      years.forEach(function (year) { year.open = expand; });
      updateToggle();
    });
    years.forEach(function (year) { year.addEventListener('toggle', updateToggle); });
  }

  // Open a collapsed year when following an in-page link or a bookmarked URL.
  function revealHash() {
    var hash;
    try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch (_) { return; }
    var aliases = { 'about-me': 'biography', '-publications': 'publications', '-educations': 'biography', '-education--work-experience': 'biography' };
    var target = document.getElementById(aliases[hash] || hash);
    if (!target) return;
    var details = target.closest('details');
    if (details) details.open = true;
    window.requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
  }

  window.addEventListener('hashchange', revealHash);
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href*="#"]');
    if (!link) return;
    var url = new URL(link.href, window.location.href);
    if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash === window.location.hash) {
      revealHash();
    }
  });
  if (window.location.hash) revealHash();
})();
