/* ConcursIT · ¿Quién dijo qué? */
(function () {
  'use strict';
  const { t, esc } = CI;
  const Q = CIQuiz;

  CI.addI18n({
    es: {
      'fr.title': '¿Quién dijo qué?', 'fr.rounds': 'Frases por partida', 'fr.all': 'Todas ({n})', 'fr.teams': 'Equipos (1 = en solitario)',
      'fr.q': '¿Quién lo dijo?', 'fr.of': 'Frase {i} de {n}', 'fr.turn': 'Turno de {n}', 'fr.right': '¡Correcto! Es de {a}.', 'fr.wrongA': 'No: es de {a}.',
      'fr.myth': 'Se suele atribuir a {m}, pero es de {a}.', 'fr.source': 'Fuente (cita original)', 'fr.note': 'Las frases están traducidas y resumidas al español; la fuente enlaza al original.',
      'fr.end': 'Fin de la partida', 'fr.score': '{n} de {t} aciertos', 'fr.win': 'Gana {n}', 'fr.tie': 'Empate',
    },
    en: {
      'fr.title': 'Who said it?', 'fr.rounds': 'Quotes per game', 'fr.all': 'All ({n})', 'fr.teams': 'Teams (1 = solo)',
      'fr.q': 'Who said it?', 'fr.of': 'Quote {i} of {n}', 'fr.turn': '{n}\'s turn', 'fr.right': 'Correct! It was {a}.', 'fr.wrongA': 'No: it was {a}.',
      'fr.myth': 'Usually attributed to {m}, but it was {a}.', 'fr.source': 'Source (original quote)', 'fr.note': 'Quotes are translated and summarised in Spanish; the source links to the original.',
      'fr.end': 'Game over', 'fr.score': '{n} of {t} correct', 'fr.win': '{n} wins', 'fr.tie': 'Draw',
    },
  });

  let cfg = Object.assign({ rounds: 10, teams: 1, names: [] }, safeJson(CI.store.get('frases')));
  let st = null;
  const app = () => document.getElementById('frasesApp');
  function safeJson(s) { try { return JSON.parse(s) || {}; } catch (e) { return {}; } }
  const tname = (i) => cfg.teams === 1 ? '' : ((cfg.names[i] || '').trim() || t('c.team', { n: i + 1 }));

  function setup() {
    st = null;
    const N = CI_FRASES.length;
    app().innerHTML = `<section class="panel setup">
      <div class="panel-title">${esc(t('fr.title'))}</div>
      <div class="row">
        <div class="field"><label class="label" for="frN">${esc(t('fr.rounds'))}</label><select class="select" id="frN">${[5, 10, 15, 20, N].map(n => `<option value="${n}"${n === cfg.rounds ? ' selected' : ''}>${esc(n === N ? t('fr.all', { n: N }) : String(n))}</option>`).join('')}</select></div>
        <div class="field"><label class="label" for="frT">${esc(t('fr.teams'))}</label><select class="select" id="frT">${[1, 2, 3, 4, 5, 6].map(n => `<option value="${n}"${n === cfg.teams ? ' selected' : ''}>${n}</option>`).join('')}</select></div>
      </div>
      <div class="teams" id="frNames"></div>
      <div class="btns" style="margin-top:12px"><button class="btn big-btn" type="button" id="frStart">${esc(t('c.start'))}</button></div>
      <p class="muted small" style="margin-top:10px">${esc(t('fr.note'))}</p>
    </section>`;
    const $ = (id) => document.getElementById(id);
    const names = () => {
      const n = +$('frT').value;
      $('frNames').innerHTML = n === 1 ? '' : Array.from({ length: n }, (_, i) => `<label class="team-chip"><span class="dot" style="background:${CI.TEAM_COLORS[i]}"></span><input class="input" data-i="${i}" maxlength="24" value="${esc(cfg.names[i] || '')}" placeholder="${esc(t('c.team', { n: i + 1 }))}"></label>`).join('');
    };
    $('frT').onchange = names; names();
    $('frStart').onclick = () => {
      cfg.rounds = +$('frN').value; cfg.teams = +$('frT').value;
      document.querySelectorAll('#frNames input').forEach(inp => { cfg.names[+inp.dataset.i] = inp.value; });
      CI.store.set('frases', JSON.stringify(cfg));
      start();
    };
  }

  function start() {
    const rand = Q.rng();
    const order = Q.shuffle(CI_FRASES, rand).slice(0, Math.min(cfg.rounds, CI_FRASES.length));
    st = { rand, order, i: 0, turn: 0, score: Array(cfg.teams).fill(0), round: null, answered: null };
    next();
  }
  function next() {
    if (st.i >= st.order.length) { renderEnd(); return; }
    st.round = Q.quoteRound(CI_FRASES, st.order[st.i], st.rand);
    st.answered = null;
    render();
  }
  function render() {
    const r = st.round, f = r.item, done = st.answered != null;
    const L = ['A', 'B', 'C', 'D'];
    const color = cfg.teams > 1 ? CI.TEAM_COLORS[st.turn] : 'var(--accent)';
    let fb = '';
    if (done) {
      const ok = st.answered === r.correct;
      const picked = r.options[st.answered];
      fb = `<div class="notice ${ok ? 'ok' : 'bad'}"><b>${esc(ok ? t('fr.right', { a: f.autor }) : t('fr.wrongA', { a: f.autor }))}</b> <span class="muted">${esc(f.ctx)}</span>
        ${f.myth ? `<p style="margin-top:6px">${esc(t('fr.myth', { m: f.myth, a: f.autor }))}</p>` : ''}
        <p class="small" style="margin-top:6px"><a href="${esc(f.src)}" target="_blank" rel="noopener">${esc(t('fr.source'))}</a></p></div>`;
    }
    app().innerHTML = `
      ${cfg.teams > 1 ? `<div class="teams">${st.score.map((s, i) => `<div class="team-chip${i === st.turn ? ' on' : ''}"><span class="dot" style="background:${CI.TEAM_COLORS[i]}"></span><b>${esc(tname(i))}</b><span class="pts">${s}</span></div>`).join('')}</div>` : ''}
      <section class="qcard">
        <div class="qhead" style="background:${color}"><span>${esc(t('fr.of', { i: st.i + 1, n: st.order.length }))}</span>${cfg.teams > 1 ? `<span>${esc(t('fr.turn', { n: tname(st.turn) }))}</span>` : `<span>✔ ${st.score[0]}</span>`}</div>
        <div class="qbody">
          <p class="quote">«${esc(f.es)}»</p>
          <div class="tag muted">${esc(t('fr.q'))}</div>
          <div class="opts">${r.options.map((o, i) => `<button class="opt${done && i === r.correct ? ' right' : ''}${done && i === st.answered && i !== r.correct ? ' wrong' : ''}" type="button" data-o="${i}" ${done ? 'disabled' : ''}><span class="k">${L[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
          ${fb}
          ${done ? `<div class="btns"><button class="btn big-btn" type="button" id="frNext">${esc(t('c.next'))}</button></div>` : ''}
        </div>
      </section>`;
    app().querySelectorAll('[data-o]').forEach(b => { b.onclick = () => choose(+b.dataset.o); });
    const nx = document.getElementById('frNext');
    if (nx) { nx.onclick = () => { st.i++; if (cfg.teams > 1) st.turn = (st.turn + 1) % cfg.teams; next(); }; nx.focus(); }
  }
  function choose(i) {
    if (st.answered != null) return;
    st.answered = i;
    if (i === st.round.correct) st.score[st.turn]++;
    render();
  }
  function renderEnd() {
    const max = Math.max(...st.score), win = st.score.filter(s => s === max).length > 1 ? -1 : st.score.indexOf(max);
    app().innerHTML = `<section class="panel" style="display:flex;flex-direction:column;gap:12px;align-items:center">
      <div class="result-banner">${esc(t('fr.end'))}</div>
      ${cfg.teams === 1 ? `<p class="h2">${esc(t('fr.score', { n: st.score[0], t: st.order.length }))}</p>` : `<p class="h2">${esc(win === -1 ? t('fr.tie') : t('fr.win', { n: tname(win) }))}</p>
        <div class="teams" style="width:100%">${st.score.map((s, i) => `<div class="team-chip"><span class="dot" style="background:${CI.TEAM_COLORS[i]}"></span><b>${esc(tname(i))}</b><span class="pts">${s}</span></div>`).join('')}</div>`}
      <div class="btns"><button class="btn" type="button" id="frAgain">${esc(t('c.again'))}</button><button class="btn ghost" type="button" id="frSetup">${esc(t('c.setup'))}</button></div>
    </section>`;
    document.getElementById('frAgain').onclick = start;
    document.getElementById('frSetup').onclick = setup;
  }

  document.addEventListener('DOMContentLoaded', setup);
  document.addEventListener('ci:lang', () => { if (!st) setup(); else if (st.i >= st.order.length) renderEnd(); else render(); });
})();
