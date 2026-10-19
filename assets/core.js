/* ConcursIT · núcleo común: marca, idioma, tema, modo proyector, pestañas y utilidades. Sin dependencias. */
(function () {
  'use strict';

  const WEB = 'https://www.unfantasmaenelsistema.com';
  const REPO = 'https://github.com/unfantasmaenelsistema/ConcursIT';
  const TABS = ['inicio', 'trivial', 'rosco', 'frases'];

  // ───────────────────────── Almacenamiento ─────────────────────────
  const PREFIX = 'ci_';
  const store = {
    get(k) { try { return localStorage.getItem(PREFIX + k); } catch (e) { return null; } },
    set(k, v) { try { if (v == null || v === '') localStorage.removeItem(PREFIX + k); else localStorage.setItem(PREFIX + k, v); } catch (e) { /* modo privado */ } },
  };

  // ───────────────────────── Idioma ─────────────────────────
  const DICT = { es: {}, en: {} };
  let lang = store.get('lang') || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
  if (!DICT[lang]) lang = 'es';
  function addI18n(d) { for (const l of Object.keys(DICT)) Object.assign(DICT[l], d[l] || {}); }
  function t(key, vars) {
    let s = DICT[lang][key];
    if (s == null) s = DICT.es[key];
    if (s == null) return key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
    return s;
  }
  function has(key) { return DICT[lang][key] != null || DICT.es[key] != null; }
  function applyI18n(root) {
    root = root || document;
    root.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
    root.querySelectorAll('[data-t-html]').forEach(el => { el.innerHTML = t(el.dataset.tHtml); });
    root.querySelectorAll('[data-t-ph]').forEach(el => { el.placeholder = t(el.dataset.tPh); });
    root.querySelectorAll('[data-t-title]').forEach(el => { el.title = t(el.dataset.tTitle); });
    root.querySelectorAll('[data-t-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.tAria)); });
    document.documentElement.lang = lang;
    document.title = (current && current !== 'inicio' ? t('nav.' + current) + ' · ' : '') + 'ConcursIT · Un Fantasma en el Sistema';
  }
  function setLang(l) {
    if (!DICT[l] || l === lang) return;
    lang = l; store.set('lang', l);
    applyI18n(); renderChrome();
    document.dispatchEvent(new CustomEvent('ci:lang', { detail: l }));
  }

  // ───────────────────────── Tema ─────────────────────────
  function theme() { return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function setTheme(th) {
    document.documentElement.setAttribute('data-theme', th);
    store.set('theme', th); renderChrome();
    document.dispatchEvent(new CustomEvent('ci:theme', { detail: th }));
  }

  // ───────────────────────── Utilidades ─────────────────────────
  function esc(s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  let toastTimer;
  function toast(msg, ms) {
    let el = document.getElementById('ciToast');
    if (!el) { el = document.createElement('div'); el.id = 'ciToast'; el.className = 'toast'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite'); document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), ms || 2600);
  }
  function download(name, content, type) {
    const blob = content instanceof Blob ? content : new Blob([content], { type: type || 'application/octet-stream' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }
  async function copyText(text) {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand('copy'); } catch (e2) { /* nada */ }
      ta.remove();
    }
    toast(ok ? t('c.copied') : t('c.copyFail'));
    return ok;
  }
  const num = (n) => Number(n).toLocaleString(lang === 'es' ? 'es-ES' : 'en-GB');

  // ───────────────────────── Pestañas ─────────────────────────
  let current = null;
  function go(tab) {
    if (location.hash !== '#' + tab) location.hash = tab; else show(tab);
  }
  function show(tab) {
    if (!TABS.includes(tab)) tab = 'inicio';
    current = tab;
    document.querySelectorAll('[data-tab]').forEach(s => { s.hidden = s.dataset.tab !== tab; });
    renderChrome(); applyI18n();
    document.dispatchEvent(new CustomEvent('ci:tab', { detail: tab }));
    window.scrollTo({ top: 0 });
  }
  window.addEventListener('hashchange', () => show(location.hash.slice(1)));

  // ───────────────────────── Textos comunes ─────────────────────────
  addI18n({
    es: {
      'brand.sub': 'UN FANTASMA EN EL SISTEMA · JUEGOS DE CLASE',
      'nav.inicio': 'Inicio', 'nav.trivial': 'Trivial', 'nav.rosco': 'Pasapalabra', 'nav.frases': '¿Quién dijo qué?',
      'chip.themeTitle': 'Cambiar entre tema claro y oscuro', 'chip.langTitle': 'Switch to English',
      'chip.big': 'Modo proyector: letra grande', 'chip.full': 'Pantalla completa',
      'foot.text': 'Gratis y de código abierto. Funciona en el navegador, sin cuentas ni servidor.', 'foot.source': 'Código fuente',
      'c.start': 'Empezar', 'c.next': 'Siguiente', 'c.again': 'Jugar otra vez', 'c.setup': 'Volver a la configuración', 'c.yes': 'Sí', 'c.no': 'No',
      'c.team': 'Equipo {n}', 'c.teams': 'Equipos', 'c.player': 'Jugador {n}', 'c.correct': '¡Correcto!', 'c.incorrect': 'Incorrecto', 'c.time': 'Tiempo',
      'c.pause': 'Pausa', 'c.resume': 'Seguir', 'c.noTimer': 'Sin límite', 'c.seconds': '{n} s', 'c.contentEs': 'Las preguntas están en español.',
      'c.copied': 'Copiado', 'c.copyFail': 'No se pudo copiar',
    },
    en: {
      'brand.sub': 'UN FANTASMA EN EL SISTEMA · CLASSROOM GAMES',
      'nav.inicio': 'Home', 'nav.trivial': 'Trivia', 'nav.rosco': 'Word wheel', 'nav.frases': 'Who said it?',
      'chip.themeTitle': 'Switch between light and dark theme', 'chip.langTitle': 'Cambiar a español',
      'chip.big': 'Projector mode: large text', 'chip.full': 'Full screen',
      'foot.text': 'Free and open source. It runs in the browser, with no accounts or server.', 'foot.source': 'Source code',
      'c.start': 'Start', 'c.next': 'Next', 'c.again': 'Play again', 'c.setup': 'Back to settings', 'c.yes': 'Yes', 'c.no': 'No',
      'c.team': 'Team {n}', 'c.teams': 'Teams', 'c.player': 'Player {n}', 'c.correct': 'Correct!', 'c.incorrect': 'Wrong', 'c.time': 'Time',
      'c.pause': 'Pause', 'c.resume': 'Resume', 'c.noTimer': 'No limit', 'c.seconds': '{n} s', 'c.contentEs': 'The questions are in Spanish.',
      'c.copied': 'Copied', 'c.copyFail': 'Could not copy',
    },
  });

  // Modo proyector (letra más grande) y pantalla completa, pensados para jugar en clase.
  function big() { return document.documentElement.classList.contains('big'); }
  function setBig(on) { document.documentElement.classList.toggle('big', on); store.set('big', on ? '1' : ''); renderChrome(); }
  if (store.get('big')) document.documentElement.classList.add('big');
  function toggleFull() {
    try { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); } catch (e) { /* no disponible */ }
  }

  // Cuenta atrás que se puede pausar: onTick(segundos que quedan), onEnd().
  function countdown(seconds, onTick, onEnd) {
    let left = seconds, id = null, paused = false;
    const stop = () => { clearInterval(id); id = null; };
    const step = () => { if (paused) return; left = Math.max(0, left - 1); onTick(left); if (left <= 0) { stop(); if (onEnd) onEnd(); } };
    onTick(left);
    id = setInterval(step, 1000);
    return { stop, pause() { paused = true; }, resume() { paused = false; }, get paused() { return paused; }, get left() { return left; } };
  }
  const TEAM_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#f97316'];

  function renderChrome() {
    const top = document.getElementById('ciTop');
    if (top) {
      top.innerHTML = `
        <a class="ci-brand" href="#inicio">
          <img src="assets/ghost.png" alt="Un Fantasma en el Sistema" width="42" height="42">
          <span><b>CONCURS<span>IT</span></b><small>${esc(t('brand.sub'))}</small></span>
        </a>
        <nav class="ci-nav" aria-label="ConcursIT">
          ${TABS.map(id => `<a href="#${id}"${id === current ? ' aria-current="page"' : ''}>${esc(t('nav.' + id))}</a>`).join('')}
        </nav>
        <div class="ci-controls">
          <a class="chip" href="${WEB}" target="_blank" rel="noopener">[ WEB ]</a>
          <button class="chip${big() ? ' on' : ''}" id="ciBigBtn" type="button" title="${esc(t('chip.big'))}" aria-label="${esc(t('chip.big'))}" aria-pressed="${big()}">A+</button>
          <button class="chip" id="ciFullBtn" type="button" title="${esc(t('chip.full'))}" aria-label="${esc(t('chip.full'))}">⛶</button>
          <button class="chip" id="ciLangBtn" type="button" title="${esc(t('chip.langTitle'))}">${lang === 'es' ? 'EN' : 'ES'}</button>
          <button class="chip" id="ciThemeBtn" type="button" title="${esc(t('chip.themeTitle'))}" aria-label="${esc(t('chip.themeTitle'))}">${theme() === 'dark' ? '☀' : '☾'}</button>
        </div>`;
      top.querySelector('#ciLangBtn').onclick = () => setLang(lang === 'es' ? 'en' : 'es');
      top.querySelector('#ciThemeBtn').onclick = () => setTheme(theme() === 'dark' ? 'light' : 'dark');
      top.querySelector('#ciBigBtn').onclick = () => setBig(!big());
      top.querySelector('#ciFullBtn').onclick = toggleFull;
    }
    const foot = document.getElementById('ciFoot');
    if (foot) {
      foot.innerHTML = `
        <span>© ${new Date().getFullYear()} Un Fantasma en el Sistema · ${esc(t('foot.text'))}</span>
        <span class="links">
          <a href="${WEB}" target="_blank" rel="noopener">unfantasmaenelsistema.com</a>
          <a href="${REPO}" target="_blank" rel="noopener">${esc(t('foot.source'))} (MIT)</a>
        </span>`;
    }
  }

  window.CI = { store, t, has, addI18n, applyI18n, setLang, lang: () => lang, theme, setTheme, esc, toast, download, copyText, num, countdown, TEAM_COLORS, go, tab: () => current };

  document.addEventListener('DOMContentLoaded', () => { show(location.hash.slice(1) || 'inicio'); });
})();
