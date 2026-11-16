/*
 * Shared page behavior — loaded with `defer` on every page.
 * Requires assets/js/theme.js to have run first (it defines __toggleTheme).
 */
(function () {
  // Theme toggle button
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      if (typeof window.__toggleTheme === 'function') window.__toggleTheme();
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
