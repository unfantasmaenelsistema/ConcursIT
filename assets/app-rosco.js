/* ConcursIT · Pasapalabra */
(function () {
  'use strict';
  const { t, esc } = CI;
  const R = CIRosco;

  CI.addI18n({
    es: {
      'ro.title': 'Pasapalabra', 'ro.which': 'Rosco', 'ro.mode': 'Modalidad', 'ro.solo': 'Individual', 'ro.duel': 'Duelo (2 jugadores)', 'ro.names': 'Nombres',
      'ro.time': 'Tiempo por jugador', 'ro.typos': 'Aceptar erratas leves (una letra en palabras largas)',
      'ro.start': 'Empezar rosco', 'ro.empieza': 'EMPIEZA POR LA {l}', 'ro.contiene': 'CONTIENE LA {l}', 'ro.ph': 'Escribe la respuesta…',
      'ro.send': 'Responder', 'ro.pass': 'Pasapalabra', 'ro.ok': '¡Correcto!', 'ro.typo': 'Aceptada con una errata: era «{a}».', 'ro.ko': 'No. Era «{a}».',
      'ro.override': 'Dar por buena', 'ro.overridden': 'Dada por buena.', 'ro.turn': 'Turno de {n}', 'ro.passed': 'Pasapalabra.',
      'ro.hits': 'Aciertos', 'ro.fails': 'Fallos', 'ro.left': 'Pendientes', 'ro.end': '¡Fin del rosco!', 'ro.full': '¡PLENO! Rosco completo sin fallos.',
      'ro.win': 'Gana {n}', 'ro.tie': 'Empate', 'ro.summary': 'Resumen', 'ro.letter': 'Letra', 'ro.answer': 'Respuesta', 'ro.given': 'Respondido', 'ro.state': 'Estado',
      'ro.s.ok': 'acierto', 'ro.s.wrong': 'fallo', 'ro.s.passed': 'sin responder', 'ro.s.pending': 'sin responder', 'ro.quit': 'Terminar', 'ro.timeUp': 'Se acabó el tiempo de {n}.',
    },
    en: {
      'ro.title': 'Word wheel', 'ro.which': 'Wheel', 'ro.mode': 'Mode', 'ro.solo': 'Solo', 'ro.duel': 'Duel (2 players)', 'ro.names': 'Names',
      'ro.time': 'Time per player', 'ro.typos': 'Accept small typos (one letter in long words)',
      'ro.start': 'Start wheel', 'ro.empieza': 'STARTS WITH {l}', 'ro.contiene': 'CONTAINS {l}', 'ro.ph': 'Type the answer…',
      'ro.send': 'Answer', 'ro.pass': 'Pass', 'ro.ok': 'Correct!', 'ro.typo': 'Accepted with a typo: it was “{a}”.', 'ro.ko': 'No. It was “{a}”.',
      'ro.override': 'Accept anyway', 'ro.overridden': 'Accepted.', 'ro.turn': '{n}\'s turn', 'ro.passed': 'Passed.',
      'ro.hits': 'Correct', 'ro.fails': 'Wrong', 'ro.left': 'Pending', 'ro.end': 'Wheel finished!', 'ro.full': 'PERFECT! Full wheel without mistakes.',
      'ro.win': '{n} wins', 'ro.tie': 'Draw', 'ro.summary': 'Summary', 'ro.letter': 'Letter', 'ro.answer': 'Answer', 'ro.given': 'Given', 'ro.state': 'Result',
      'ro.s.ok': 'correct', 'ro.s.wrong': 'wrong', 'ro.s.passed': 'unanswered', 'ro.s.pending': 'unanswered', 'ro.quit': 'Finish', 'ro.timeUp': '{n} ran out of time.',
    },
  });

  const COLORS = { pending: '#2563eb', passed: '#64748b', ok: '#16a34a', wrong: '#dc2626', current: '#f59e0b' };
  const TIMES = [120, 180, 240, 300, 0];
  let cfg = Object.assign({ rosco: 'seginf', players: 1, names: ['', ''], time: 240, typos: true }, safeJson(CI.store.get('rosco')));
  let g = null, timer = null, paused = false, feedback = null;
  const app = () => document.getElementById('roscoApp');
  function safeJson(s) { try { return JSON.parse(s) || {}; } catch (e) { return {}; } }
  const pname = (i) => (cfg.names[i] || '').trim() || t('c.player', { n: i + 1 });

  // ───────────── Configuración ─────────────
  function setup() {
    stopTimer(); g = null;
    app().innerHTML = `<section class="panel setup">
      <div class="panel-title">${esc(t('ro.title'))}</div>
      <div class="row">
        <div class="field"><label class="label" for="roWhich">${esc(t('ro.which'))}</label><select class="select" id="roWhich">${CI_ROSCOS.map(r => `<option value="${r.id}"${r.id === cfg.rosco ? ' selected' : ''}>${esc(r.name)}</option>`).join('')}</select></div>
        <div class="field"><label class="label" for="roMode">${esc(t('ro.mode'))}</label><select class="select" id="roMode"><option value="1">${esc(t('ro.solo'))}</option><option value="2"${cfg.players === 2 ? ' selected' : ''}>${esc(t('ro.duel'))}</option></select></div>
        <div class="field"><label class="label" for="roTime">${esc(t('ro.time'))}</label><select class="select" id="roTime">${TIMES.map(s => `<option value="${s}"${s === cfg.time ? ' selected' : ''}>${esc(s ? t('c.seconds', { n: s }) : t('c.noTimer'))}</option>`).join('')}</select></div>
      </div>
      <div class="row">
        <div class="field"><label class="label" for="roN0">${esc(t('ro.names'))}</label><input class="input" id="roN0" maxlength="30" value="${esc(cfg.names[0])}" placeholder="${esc(t('c.player', { n: 1 }))}"></div>
        <div class="field" id="roN1box"${cfg.players === 2 ? '' : ' hidden'}><label class="label" for="roN1">&nbsp;</label><input class="input" id="roN1" maxlength="30" value="${esc(cfg.names[1])}" placeholder="${esc(t('c.player', { n: 2 }))}"></div>
      </div>
      <label class="check" style="margin:6px 0 14px"><input type="checkbox" id="roTypos"${cfg.typos ? ' checked' : ''}> ${esc(t('ro.typos'))}</label>
      <div class="btns"><button class="btn big-btn" type="button" id="roStart">${esc(t('ro.start'))}</button></div>
      <p class="muted small" style="margin-top:10px">${esc(CI.lang() === 'en' ? t('c.contentEs') : '')}</p>
    </section>`;
    const $ = (id) => document.getElementById(id);
    $('roMode').onchange = () => { $('roN1box').hidden = $('roMode').value !== '2'; };
    $('roStart').onclick = () => {
      cfg = { rosco: $('roWhich').value, players: +$('roMode').value, names: [$('roN0').value, $('roN1').value], time: +$('roTime').value, typos: $('roTypos').checked };
      CI.store.set('rosco', JSON.stringify(cfg));
      start();
    };
  }

  // ───────────── Partida ─────────────
  function start() {
    const rosco = CI_ROSCOS.find(r => r.id === cfg.rosco) || CI_ROSCOS[0];
    g = R.create(rosco, { players: cfg.players, time: cfg.time || 1e9, typos: cfg.typos });
    feedback = null; paused = false;
    renderPlay();
    startTimer();
  }
  function startTimer() {
    stopTimer();
    if (!cfg.time) return;
    timer = setInterval(() => {
      if (paused || !g || g.over) return;
      const before = g.turn, who = pname(before);
      R.tick(g, 1);
      if (g.players[before].time === 0 && (g.turn !== before || g.over)) feedback = { kind: 'info', text: t('ro.timeUp', { n: who }) };
      if (g.over) { stopTimer(); renderEnd(); return; }
      if (g.turn !== before) renderPlay(); else updateClock();
    }, 1000);
  }
  function stopTimer() { clearInterval(timer); timer = null; }

  function svgRosco(p, active) {
    const n = p.words.length, cx = 200, cy = 200, rad = 172;
    const cur = active && !R.done(p) ? p.idx : -1;
    const dots = p.words.map((w, i) => {
      const a = (i / n) * Math.PI * 2 - Math.PI / 2;
      const x = cx + rad * Math.cos(a), y = cy + rad * Math.sin(a);
      const col = i === cur ? COLORS.current : COLORS[w.status] || COLORS.pending;
      const r = i === cur ? 21 : 17;
      return `<g><circle class="l" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${col}"></circle><text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${i === cur ? 19 : 16}">${esc(w.letter)}</text></g>`;
    }).join('');
    const sc = { ok: p.ok, ko: p.ko };
    const time = cfg.time ? Math.ceil(p.time) : null;
    return `<svg class="rosco" viewBox="0 0 400 400" role="img" aria-label="${esc(t('ro.hits'))} ${sc.ok}, ${esc(t('ro.fails'))} ${sc.ko}">
      <circle cx="200" cy="200" r="150" fill="var(--panel2)" stroke="var(--border)"></circle>
      ${dots}
      <text x="200" y="${time != null ? 168 : 190}" font-size="64" style="fill:var(--accent);font-family:var(--display)">${cur >= 0 ? esc(p.words[cur].letter) : R.done(p) ? '✓' : '·'}</text>
      ${time != null ? `<text x="200" y="228" font-size="34" class="clk" style="fill:${time <= 15 ? '#dc2626' : 'var(--text)'};font-family:var(--display)">${time}</text>` : ''}
      <text x="200" y="${time != null ? 262 : 240}" font-size="18" style="fill:var(--muted);font-family:var(--mono)">✔ ${sc.ok} · ✘ ${sc.ko}</text>
    </svg>`;
  }

  function renderPlay() {
    if (!g) return;
    if (g.over) { renderEnd(); return; }
    const p = g.players[g.turn], w = R.current(g);
    const fb = feedback ? `<div class="notice ${feedback.kind}" id="roFb">${esc(feedback.text)}${feedback.override ? ` <button class="btn small" type="button" id="roOverride">${esc(t('ro.override'))}</button>` : ''}</div>` : '';
    app().innerHTML = `
      <div class="rosco-wrap${g.players.length > 1 ? ' duel' : ''}">${g.players.map((pl, i) => `<div class="rosco-box${i === g.turn ? ' on' : ''}" style="order:${i === g.turn ? 0 : 1}"><h3>${esc(pname(i))}</h3>${svgRosco(pl, i === g.turn)}</div>`).join('')}</div>
      <section class="panel" style="display:flex;flex-direction:column;gap:12px">
        ${g.players.length > 1 ? `<div class="tag" style="color:var(--accent)">${esc(t('ro.turn', { n: pname(g.turn) }))}</div>` : ''}
        <div class="rule">${esc(t(w.rule === 'e' ? 'ro.empieza' : 'ro.contiene', { l: w.letter }))}</div>
        <p class="def">${esc(w.def)}</p>
        <form class="answer-row" id="roForm" autocomplete="off">
          <input class="input" id="roIn" placeholder="${esc(t('ro.ph'))}" autocapitalize="characters" spellcheck="false" ${paused ? 'disabled' : ''}>
          <button class="btn big-btn" type="submit" ${paused ? 'disabled' : ''}>${esc(t('ro.send'))}</button>
          <button class="btn ghost big-btn" type="button" id="roPass" ${paused ? 'disabled' : ''}>${esc(t('ro.pass'))}</button>
        </form>
        ${fb}
        <div class="btns">
          ${cfg.time ? `<button class="btn ghost small" type="button" id="roPause">${esc(paused ? t('c.resume') : t('c.pause'))}</button>` : ''}
          <button class="btn ghost small" type="button" id="roQuit">${esc(t('ro.quit'))}</button>
        </div>
      </section>`;
    const $ = (id) => document.getElementById(id);
    $('roForm').onsubmit = (e) => { e.preventDefault(); doAnswer($('roIn').value); };
    $('roPass').onclick = () => { const who = g.turn; R.pass(g); feedback = { kind: 'info', text: t('ro.passed') + (g.turn !== who ? ' ' + t('ro.turn', { n: pname(g.turn) }) : '') }; renderPlay(); };
    if ($('roOverride')) $('roOverride').onclick = () => { if (R.override(g)) { feedback = { kind: 'ok', text: t('ro.overridden') }; renderPlay(); } };
    if ($('roPause')) $('roPause').onclick = () => { paused = !paused; renderPlay(); };
    $('roQuit').onclick = () => { g.over = true; stopTimer(); renderEnd(); };
    if (!paused) $('roIn').focus();
  }
  function updateClock() {
    // Redibuja solo el rosco activo para no perder lo que se está escribiendo.
    const boxes = app().querySelectorAll('.rosco-box');
    if (!boxes.length) return;
    const box = boxes[g.turn];
    box.querySelector('svg').outerHTML = svgRosco(g.players[g.turn], true);
  }

  function doAnswer(text) {
    if (!text.trim()) return;
    const who = g.turn;
    const r = R.answer(g, text);
    if (!r) return;
    const a = r.word.answer;
    if (r.verdict === 'ok') feedback = { kind: 'ok', text: t('ro.ok') };
    else if (r.verdict === 'typo') feedback = { kind: 'ok', text: t('ro.typo', { a }) };
    else feedback = { kind: 'bad', text: t('ro.ko', { a }) + (g.turn !== who ? ' ' + t('ro.turn', { n: pname(g.turn) }) : ''), override: true };
    if (g.over) { stopTimer(); renderEnd(); return; }
    renderPlay();
  }

  function renderEnd() {
    stopTimer();
    const w = R.winner(g);
    const solo = g.players.length === 1;
    const full = solo && g.players[0].ok === 27;
    const banner = full ? t('ro.full') : solo ? t('ro.end') : w === -1 ? t('ro.tie') : w == null ? t('ro.end') : t('ro.win', { n: pname(w) });
    const ST = { ok: 'ok', wrong: 'bad', passed: 'info', pending: 'info' };
    app().innerHTML = `
      <section class="panel" style="display:flex;flex-direction:column;gap:12px;align-items:center">
        <div class="result-banner">${esc(banner)}</div>
        <div class="scoreline">${g.players.map((p, i) => `<span><b>${esc(pname(i))}</b>: ✔ ${p.ok} · ✘ ${p.ko} · … ${R.pending(p)}</span>`).join('')}</div>
        <div class="btns"><button class="btn" type="button" id="roAgain">${esc(t('c.again'))}</button><button class="btn ghost" type="button" id="roSetup">${esc(t('c.setup'))}</button></div>
      </section>
      <div class="rosco-wrap">${g.players.map((p, i) => `<div class="rosco-box">${svgRosco(p, false)}</div>`).join('')}</div>
      ${g.players.map((p, i) => `<details class="sec"${i === 0 ? ' open' : ''}><summary>${esc(t('ro.summary'))} · ${esc(pname(i))}</summary><div class="body"><div class="tbl-wrap"><table class="tbl">
        <thead><tr><th>${esc(t('ro.letter'))}</th><th>${esc(t('ro.answer'))}</th><th>${esc(t('ro.given'))}</th><th>${esc(t('ro.state'))}</th></tr></thead><tbody>
        ${p.words.map(x => `<tr><td class="mono">${esc(x.letter)}</td><td><b>${esc(x.answer)}</b><div class="muted small">${esc(x.def)}</div></td><td class="mono">${esc(x.given || '—')}</td><td><span class="lvl ${ST[x.status]}">${esc(t('ro.s.' + x.status))}</span></td></tr>`).join('')}
        </tbody></table></div></div></details>`).join('')}`;
    document.getElementById('roAgain').onclick = start;
    document.getElementById('roSetup').onclick = setup;
  }

  document.addEventListener('DOMContentLoaded', setup);
  document.addEventListener('ci:lang', () => { if (!g) setup(); else if (g.over) renderEnd(); else renderPlay(); });
  // Al salir de la pestaña se pausa el reloj.
  document.addEventListener('ci:tab', (e) => {
    if (!g || g.over) return;
    if (e.detail !== 'rosco' && cfg.time) paused = true;
    else if (e.detail === 'rosco') renderPlay();
  });
})();
