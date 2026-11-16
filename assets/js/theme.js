/*
 * Theme bootstrap — loaded in <head> without defer so the correct theme is
 * applied before first paint (no flash of the wrong theme).
 *
 * Order of precedence:
 *   1. The visitor's saved choice (localStorage, persists across visits)
 *   2. Their operating-system preference (prefers-color-scheme)
 *   3. Dark (site default)
 */
(function () {
  var STORAGE_KEY = 'siteTheme';
  var root = document.documentElement;

  function apply(theme) {
    if (theme === 'light') root.classList.add('theme-light');
    else root.classList.remove('theme-light');
  }

  function saved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  var stored = saved();
  if (stored === 'light' || stored === 'dark') {
    apply(stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    apply('light');
  } else {
    apply('dark');
  }

  window.__setTheme = function (theme) {
    apply(theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  };

  window.__toggleTheme = function () {
    window.__setTheme(root.classList.contains('theme-light') ? 'dark' : 'light');
  };
})();
