/* ConcursIT · Trivial */
(function () {
  'use strict';
  const { t, esc } = CI;
  const Q = CIQuiz;
  const BANK = CI_TRIVIAL;

  CI.addI18n({
    es: {
      'tr.title': 'Trivial', 'tr.mode': 'Modalidad', 'tr.board': 'Tablero (por equipos)', 'tr.cards': 'Solo fichas de preguntas', 'tr.nTeams': 'Equipos', 'tr.timer': 'Tiempo para responder',
      'tr.cardsNote': 'En el modo fichas eliges la categoría y sale una pregunta, para jugar con un tablero físico o repasar en voz alta.',
      'tr.roll': 'Tirar el dado', 'tr.rolled': 'Ha salido un {n}: elige casilla en el tablero.', 'tr.toRoll': 'Turno de {n}: tira el dado.', 'tr.again': '¡Tira otra vez!',
      'tr.choose': 'Estás en el centro: elige la categoría.', 'tr.final': 'PREGUNTA FINAL', 'tr.wedge': '¡Quesito de {c}!', 'tr.show': 'Mostrar respuesta',
      'tr.gotIt': 'Ha acertado', 'tr.missed': 'Ha fallado', 'tr.continue': 'Continuar', 'tr.timeUp': '¡Tiempo!', 'tr.winner': '¡{n} gana la partida!',
      'tr.cat': 'Categoría', 'tr.newCard': 'Otra pregunta', 'tr.legend': 'Categorías', 'tr.wedges': 'Quesitos', 'tr.hint': 'Con los seis quesitos, ve al centro con la tirada exacta y responde la pregunta final.',
      'tr.rollSq': 'Tira otra vez', 'tr.hub': 'Centro', 'tr.left': '{n} preguntas sin salir en esta categoría',
    },
    en: {
      'tr.title': 'Trivia', 'tr.mode': 'Mode', 'tr.board': 'Board (teams)', 'tr.cards': 'Question cards only', 'tr.nTeams': 'Teams', 'tr.timer': 'Time to answer',
      'tr.cardsNote': 'In cards mode you pick a category and get a question, to play with a physical board or review out loud.',
      'tr.roll': 'Roll the die', 'tr.rolled': 'You rolled a {n}: pick a square on the board.', 'tr.toRoll': '{n}\'s turn: roll the die.', 'tr.again': 'Roll again!',
      'tr.choose': 'You are in the centre: choose the category.', 'tr.final': 'FINAL QUESTION', 'tr.wedge': 'Wedge for {c}!', 'tr.show': 'Show answer',
      'tr.gotIt': 'Got it right', 'tr.missed': 'Got it wrong', 'tr.continue': 'Continue', 'tr.timeUp': 'Time\'s up!', 'tr.winner': '{n} wins the game!',
      'tr.cat': 'Category', 'tr.newCard': 'Another question', 'tr.legend': 'Categories', 'tr.wedges': 'Wedges', 'tr.hint': 'With all six wedges, reach the centre with the exact roll and answer the final question.',
      'tr.rollSq': 'Roll again', 'tr.hub': 'Centre', 'tr.left': '{n} questions not yet asked in this category',
    },
  });

  let cfg = Object.assign({ mode: 'board', teams: 2, names: [], timer: 30 }, safeJson(CI.store.get('trivial')));
  let g = null, timer = null, msg = '', reveal = null, cardsState = null;
  const app = () => document.getElementById('trivialApp');
  function safeJson(s) { try { return JSON.parse(s) || {}; } catch (e) { return {}; } }
  const tname = (i) => (cfg.names[i] || '').trim() || t('c.team', { n: i + 1 });
  const catColor = (c) => BANK[c].color;
  const catName = (c) => BANK[c].name;

  // ───────────── Configuración ─────────────
  function setup() {
    stopTimer(); g = null; cardsState = null;
    app().innerHTML = `<section class="panel setup">
      <div class="panel-title">${esc(t('tr.title'))}</div>
      <div class="row">
        <div class="field"><label class="label" for="trMode">${esc(t('tr.mode'))}</label><select class="select" id="trMode"><option value="board">${esc(t('tr.board'))}</option><option value="cards"${cfg.mode === 'cards' ? ' selected' : ''}>${esc(t('tr.cards'))}</option></select></div>
        <div class="field" id="trTeamsBox"><label class="label" for="trTeams">${esc(t('tr.nTeams'))}</label><select class="select" id="trTeams">${[2, 3, 4, 5, 6].map(n => `<option value="${n}"${n === cfg.teams ? ' selected' : ''}>${n}</option>`).join('')}</select></div>
        <div class="field"><label class="label" for="trTimer">${esc(t('tr.timer'))}</label><select class="select" id="trTimer">${[0, 20, 30, 45, 60].map(s => `<option value="${s}"${s === cfg.timer ? ' selected' : ''}>${esc(s ? t('c.seconds', { n: s }) : t('c.noTimer'))}</option>`).join('')}</select></div>
      </div>
      <div class="teams" id="trNames"></div>
      <p class="muted small" id="trCardsNote" style="margin-top:8px">${esc(t('tr.cardsNote'))}</p>
      <div class="btns" style="margin-top:12px"><button class="btn big-btn" type="button" id="trStart">${esc(t('c.start'))}</button></div>
      <p class="muted small" style="margin-top:10px">${esc(CI.lang() === 'en' ? t('c.contentEs') : '')}</p>
    </section>`;
    const $ = (id) => document.getElementById(id);
    const sync = () => {
      const board = $('trMode').value === 'board';
      $('trTeamsBox').hidden = !board; $('trCardsNote').hidden = board;
      const n = +$('trTeams').value;
      $('trNames').innerHTML = board ? Array.from({ length: n }, (_, i) => `<label class="team-chip"><span class="dot" style="background:${CI.TEAM_COLORS[i]}"></span><input class="input" data-i="${i}" maxlength="24" value="${esc(cfg.names[i] || '')}" placeholder="${esc(t('c.team', { n: i + 1 }))}"></label>`).join('') : '';
    };
    $('trMode').onchange = sync; $('trTeams').onchange = sync; sync();
    $('trStart').onclick = () => {
      cfg.mode = $('trMode').value; cfg.teams = +$('trTeams').value; cfg.timer = +$('trTimer').value;
      document.querySelectorAll('#trNames input').forEach(inp => { cfg.names[+inp.dataset.i] = inp.value; });
      CI.store.set('trivial', JSON.stringify(cfg));
      if (cfg.mode === 'cards') startCards(); else startBoard();
    };
  }

  // ───────────── Tablero SVG ─────────────
  const C = 400, R_IN = 318, R_OUT = 392, STEP = 360 / 42;
  const pol = (r, deg) => [C + r * Math.cos(deg * Math.PI / 180), C + r * Math.sin(deg * Math.PI / 180)];
  const ang = (i) => -90 + i * STEP; // centro de la casilla i del anillo
  function arc(r1, r2, a0, a1) {
    const [x1, y1] = pol(r2, a0), [x2, y2] = pol(r2, a1), [x3, y3] = pol(r1, a1), [x4, y4] = pol(r1, a0);
    return `M${x1.toFixed(1)},${y1.toFixed(1)} A${r2},${r2} 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)} L${x3.toFixed(1)},${y3.toFixed(1)} A${r1},${r1} 0 0 0 ${x4.toFixed(1)},${y4.toFixed(1)} Z`;
  }
  // Centro geométrico de cada casilla, para colocar las fichas.
  function centerOf(id) {
    if (id === 'c') return [C, C];
    if (id[0] === 'r') return pol((R_IN + R_OUT) / 2, ang(+id.slice(1)));
    const [k, j] = id.slice(1).split('_').map(Number);
    return pol(R_IN - 34 - (j - 1) * 48, ang(k * 7));
  }
  function boardSvg() {
    const b = g.board, opts = new Set(g.phase === 'move' ? g.options : []);
    const fill = (n) => n.type === 'roll' ? '#f8fafc' : n.type === 'hub' ? 'var(--panel2)' : catColor(n.cat);
    let out = '';
    for (let i = 0; i < 42; i++) {
      const n = b.nodes['r' + i], id = 'r' + i;
      const extra = n.type === 'hq' ? 6 : 0;
      out += `<path class="sq${opts.has(id) ? ' opt' : ''}" data-node="${id}" d="${arc(R_IN - extra, R_OUT + extra, ang(i) - STEP / 2 + 0.6, ang(i) + STEP / 2 - 0.6)}" fill="${fill(n)}"><title>${esc(n.type === 'roll' ? t('tr.rollSq') : catName(n.cat))}</title></path>`;
      const [x, y] = pol((R_IN + R_OUT) / 2, ang(i));
      if (n.type === 'hq') out += `<text class="lbl" x="${x.toFixed(1)}" y="${y.toFixed(1)}" style="font-size:20px">★</text>`;
      if (n.type === 'roll') out += `<text class="lbl" x="${x.toFixed(1)}" y="${y.toFixed(1)}" style="font-size:18px">↻</text>`;
    }
    for (let k = 0; k < 6; k++) for (let j = 1; j <= 5; j++) {
      const id = `s${k}_${j}`, n = b.nodes[id], [x, y] = centerOf(id), a = ang(k * 7) + 90;
      out += `<rect class="sq${opts.has(id) ? ' opt' : ''}" data-node="${id}" x="${(x - 21).toFixed(1)}" y="${(y - 22).toFixed(1)}" width="42" height="44" rx="4" transform="rotate(${a.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${fill(n)}"><title>${esc(catName(n.cat))}</title></rect>`;
    }
    out += `<circle class="sq${opts.has('c') ? ' opt' : ''}" data-node="c" cx="${C}" cy="${C}" r="70" fill="var(--panel2)"><title>${esc(t('tr.hub'))}</title></circle>`;
    for (let k = 0; k < 6; k++) { const [x1, y1] = pol(70, ang(k * 7) - 30), [x2, y2] = pol(70, ang(k * 7) + 30); out += `<path d="M${C},${C} L${x1.toFixed(1)},${y1.toFixed(1)} A70,70 0 0 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${catColor(k)}" opacity=".85" pointer-events="none"></path>`; }
    out += `<circle cx="${C}" cy="${C}" r="30" fill="var(--panel)" pointer-events="none"></circle><text class="lbl" x="${C}" y="${C}" style="fill:var(--accent);font-size:22px">★</text>`;
    // Fichas
    const OFF = [[-12, -12], [12, -12], [-12, 12], [12, 12], [0, -20], [0, 20]];
    const at = {};
    g.teams.forEach((tm, i) => { (at[tm.pos] = at[tm.pos] || []).push(i); });
    for (const [pos, list] of Object.entries(at)) {
      const [x, y] = centerOf(pos);
      list.forEach((i, k) => {
        const [dx, dy] = list.length > 1 ? OFF[k] : [0, 0];
        out += `<circle class="tok" cx="${(x + dx).toFixed(1)}" cy="${(y + dy).toFixed(1)}" r="${i === g.turn ? 13 : 11}" fill="${CI.TEAM_COLORS[i]}"></circle><text class="toktxt" x="${(x + dx).toFixed(1)}" y="${(y + dy).toFixed(1)}">${i + 1}</text>`;
      });
    }
    return `<svg class="board" viewBox="0 0 800 800" role="img" aria-label="${esc(t('tr.title'))}">${out}</svg>`;
  }
  function wedgePie(tm) {
    let s = '';
    for (let k = 0; k < 6; k++) {
      const a0 = -90 + k * 60, a1 = a0 + 60, p = (a) => [17 + 15 * Math.cos(a * Math.PI / 180), 17 + 15 * Math.sin(a * Math.PI / 180)];
      const [x1, y1] = p(a0), [x2, y2] = p(a1);
      s += `<path d="M17,17 L${x1.toFixed(2)},${y1.toFixed(2)} A15,15 0 0 1 ${x2.toFixed(2)},${y2.toFixed(2)} Z" fill="${tm.wedges[k] ? catColor(k) : 'var(--panel)'}" stroke="var(--border)" stroke-width="1"><title>${esc(catName(k))}</title></path>`;
    }
    return `<svg viewBox="0 0 34 34" aria-label="${esc(t('tr.wedges'))}: ${tm.wedges.filter(Boolean).length}/6">${s}</svg>`;
  }

  // ───────────── Partida con tablero ─────────────
  function startBoard() {
    g = Q.trivial(BANK, Array.from({ length: cfg.teams }, (_, i) => tname(i)));
    msg = t('tr.toRoll', { n: tname(0) }); reveal = null;
    render();
  }
  function stopTimer() { if (timer) timer.stop(); timer = null; }

  function questionHtml() {
    const qn = g.question, L = ['A', 'B', 'C', 'D'];
    const head = qn.final ? t('tr.final') : catName(g.cat);
    const done = reveal != null;
    return `<section class="qcard" id="trQ">
      <div class="qhead" style="background:${catColor(g.cat)}"><span>${esc(head)}</span><span>${esc(tname(g.turn))}</span>${cfg.timer && !done ? `<span class="timer" id="trTimer"></span>` : ''}</div>
      <div class="qbody">
        <p class="qtext">${esc(qn.q)}</p>
        <div class="opts">${qn.options.map((o, i) => `<button class="opt${done && i === qn.correct ? ' right' : ''}${done && reveal.picked === i && i !== qn.correct ? ' wrong' : ''}" type="button" data-o="${i}" ${done ? 'disabled' : ''}><span class="k">${L[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
        ${done ? `<div class="notice ${reveal.picked == null ? '' : reveal.picked === qn.correct ? 'ok' : 'bad'}">${reveal.timeUp ? `<b>${esc(t('tr.timeUp'))}</b> ` : ''}${reveal.picked != null ? `<b>${esc(reveal.picked === qn.correct ? t('c.correct') : t('c.incorrect'))}</b> ` : ''}${esc(qn.e)}</div>
          <div class="btns">${reveal.picked == null ? `<button class="btn" type="button" id="trGot">${esc(t('tr.gotIt'))}</button><button class="btn ghost" type="button" id="trMiss">${esc(t('tr.missed'))}</button>` : `<button class="btn" type="button" id="trCont">${esc(t('tr.continue'))}</button>`}</div>`
          : `<div class="btns"><button class="btn ghost small" type="button" id="trShow">${esc(t('tr.show'))}</button></div>`}
      </div></section>`;
  }

  function render() {
    if (!g) return;
    const tm = g.teams[g.turn];
    let side = '';
    if (g.phase === 'over') {
      side = `<section class="panel" style="text-align:center"><div class="result-banner">${esc(t('tr.winner', { n: tname(g.winner) }))}</div>
        <div class="btns" style="justify-content:center;margin-top:12px"><button class="btn" type="button" id="trAgain">${esc(t('c.again'))}</button><button class="btn ghost" type="button" id="trSetup">${esc(t('c.setup'))}</button></div></section>`;
    } else if (g.phase === 'answer') side = questionHtml();
    else if (g.phase === 'chooseCat') side = `<section class="panel"><p style="margin-bottom:10px">${esc(t('tr.choose'))}</p><div class="opts">${BANK.map((c, k) => `<button class="opt" type="button" data-cat="${k}" style="border-left:8px solid ${c.color}">${esc(c.name)}</button>`).join('')}</div></section>`;
    else side = `<section class="panel" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">
        <div class="dice" id="trDice">${g.roll && g.phase === 'move' ? g.roll : '?'}</div>
        <div style="flex:1 1 180px;min-width:0"><p id="trMsg">${esc(msg)}</p>
        ${g.phase === 'roll' ? `<button class="btn big-btn" type="button" id="trRoll" style="margin-top:8px">${esc(t('tr.roll'))}</button>` : ''}</div>
      </section>`;
    app().innerHTML = `<div class="game">
      <div class="panel" style="padding:10px" id="trBoard">${boardSvg()}</div>
      <div style="display:flex;flex-direction:column;gap:12px;min-width:0">
        <div class="teams">${g.teams.map((x, i) => `<div class="team-chip${i === g.turn && g.phase !== 'over' ? ' on' : ''}"><span class="dot" style="background:${CI.TEAM_COLORS[i]}"></span><b>${esc(x.name)}</b>${wedgePie(x)}</div>`).join('')}</div>
        ${side}
        <details class="sec"><summary>${esc(t('tr.legend'))}</summary><div class="body"><ul style="list-style:none;display:grid;gap:4px">${BANK.map(c => `<li><span class="dot" style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${c.color};margin-right:6px"></span>${esc(c.name)}</li>`).join('')}</ul><p class="muted small">${esc(t('tr.hint'))}</p></div></details>
        ${g.phase !== 'over' ? `<div class="btns"><button class="btn ghost small" type="button" id="trExit">${esc(t('c.setup'))}</button></div>` : ''}
      </div></div>`;
    bind();
    if (g.phase === 'answer' && reveal == null && cfg.timer) runTimer();
  }

  function runTimer() {
    stopTimer();
    timer = CI.countdown(cfg.timer, (left) => {
      const el = document.getElementById('trTimer');
      if (el) { el.textContent = left; el.classList.toggle('low', left <= 5); }
    }, () => { if (g && g.phase === 'answer' && reveal == null) { reveal = { picked: null, timeUp: true }; render(); } });
  }

  function bind() {
    const $ = (id) => document.getElementById(id);
    if ($('trRoll')) $('trRoll').onclick = () => {
      const d = $('trDice'); d.classList.add('rolling'); $('trRoll').disabled = true;
      setTimeout(() => { const n = Q.roll(g); msg = t('tr.rolled', { n }); render(); }, 450);
    };
    app().querySelectorAll('.sq.opt').forEach(el => { el.onclick = () => onMove(el.dataset.node); });
    app().querySelectorAll('[data-cat]').forEach(el => { el.onclick = () => { Q.chooseCat(g, +el.dataset.cat); reveal = null; render(); }; });
    app().querySelectorAll('[data-o]').forEach(el => { el.onclick = () => { stopTimer(); reveal = { picked: +el.dataset.o }; render(); }; });
    if ($('trShow')) $('trShow').onclick = () => { stopTimer(); reveal = { picked: null }; render(); };
    if ($('trGot')) $('trGot').onclick = () => finish(true);
    if ($('trMiss')) $('trMiss').onclick = () => finish(false);
    if ($('trCont')) $('trCont').onclick = () => finish(reveal.picked === g.question.correct);
    if ($('trAgain')) $('trAgain').onclick = startBoard;
    if ($('trSetup')) $('trSetup').onclick = setup;
    if ($('trExit')) $('trExit').onclick = () => { stopTimer(); setup(); };
  }
  function onMove(node) {
    const r = Q.move(g, node);
    if (!r) return;
    reveal = null;
    if (r === 'roll') msg = t('tr.again');
    render();
    if (r === 'question' || r === 'final') { const q = document.getElementById('trQ'); if (q && window.innerWidth < 900) q.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
  function finish(correct) {
    const cat = g.cat;
    const r = Q.answer(g, correct);
    reveal = null;
    if (!r) return;
    if (r.winner != null) { render(); return; }
    msg = r.wedge ? t('tr.wedge', { c: catName(cat) }) + ' ' + t('tr.again') : correct ? t('tr.again') : t('tr.toRoll', { n: tname(g.turn) });
    render();
  }

  // ───────────── Modo fichas ─────────────
  function startCards() {
    const rand = Q.rng();
    cardsState = { rand, decks: BANK.map(c => Q.deck(c.questions, rand)), cat: null, card: null, picked: null, shown: false };
    renderCards();
  }
  function renderCards() {
    const s = cardsState, L = ['A', 'B', 'C', 'D'];
    const cats = `<div class="opts" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))">${BANK.map((c, k) => `<button class="opt" type="button" data-cc="${k}" style="border-left:8px solid ${c.color}">${esc(c.name)}</button>`).join('')}</div>`;
    let card = '';
    if (s.card) {
      const done = s.shown;
      card = `<section class="qcard"><div class="qhead" style="background:${catColor(s.cat)}"><span>${esc(catName(s.cat))}</span>${cfg.timer && !done ? `<span class="timer" id="trTimer"></span>` : ''}</div><div class="qbody">
        <p class="qtext">${esc(s.card.q)}</p>
        <div class="opts">${s.card.options.map((o, i) => `<button class="opt${done && i === s.card.correct ? ' right' : ''}${done && s.picked === i && i !== s.card.correct ? ' wrong' : ''}" type="button" data-co="${i}" ${done ? 'disabled' : ''}><span class="k">${L[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
        ${done ? `<div class="notice ${s.picked == null ? '' : s.picked === s.card.correct ? 'ok' : 'bad'}">${esc(s.card.e)}</div>` : `<div class="btns"><button class="btn ghost small" type="button" id="tcShow">${esc(t('tr.show'))}</button></div>`}
        <p class="muted small">${esc(t('tr.left', { n: s.decks[s.cat].left() }))}</p>
      </div></section>`;
    }
    app().innerHTML = `<section class="panel"><div class="panel-title">${esc(t('tr.cat'))}<button class="btn ghost small" type="button" id="tcSetup">${esc(t('c.setup'))}</button></div>${cats}</section>${card}`;
    app().querySelectorAll('[data-cc]').forEach(b => { b.onclick = () => { stopTimer(); s.cat = +b.dataset.cc; s.card = Q.card(s.decks[s.cat].next().item, s.rand); s.picked = null; s.shown = false; renderCards(); }; });
    app().querySelectorAll('[data-co]').forEach(b => { b.onclick = () => { stopTimer(); s.picked = +b.dataset.co; s.shown = true; renderCards(); }; });
    const sh = document.getElementById('tcShow'); if (sh) sh.onclick = () => { stopTimer(); s.shown = true; renderCards(); };
    document.getElementById('tcSetup').onclick = setup;
    if (s.card && !s.shown && cfg.timer) timer = CI.countdown(cfg.timer, (left) => { const el = document.getElementById('trTimer'); if (el) { el.textContent = left; el.classList.toggle('low', left <= 5); } }, () => { s.shown = true; renderCards(); });
  }

  document.addEventListener('DOMContentLoaded', setup);
  document.addEventListener('ci:lang', () => { if (cardsState) renderCards(); else if (g) render(); else setup(); });
  document.addEventListener('ci:tab', (e) => { if (e.detail !== 'trivial') stopTimer(); else if (g && g.phase === 'answer' && reveal == null && cfg.timer) runTimer(); });
})();
