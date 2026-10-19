/* ConcursIT · motor del rosco de Pasapalabra. Sin DOM: funciona igual en Node.
   Una o dos personas (duelo), cada una con su rosco y su tiempo. Las letras pasadas vuelven en la
   siguiente vuelta y el rosco no termina mientras quede alguna pendiente y tiempo. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CIRosco = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Mayúsculas, sin tildes ni diéresis (la Ñ se respeta), sin espacios, guiones ni signos.
  function norm(s) {
    return String(s || '').toUpperCase().replace(/Ñ/g, '\u0001').normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/\u0001/g, 'Ñ').replace(/[^A-Z0-9Ñ]/g, '');
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 99;
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  // 'ok' exacta · 'typo' una errata en palabras de 6 letras o más · 'wrong'
  function check(input, word, opts) {
    const u = norm(input);
    if (!u) return 'wrong';
    const all = [word.answer].concat(word.alt || []).map(norm);
    if (all.includes(u)) return 'ok';
    if (!opts || opts.typos !== false) for (const a of all) if (a.length >= 6 && lev(u, a) === 1) return 'typo';
    return 'wrong';
  }
  // Cumple la regla del programa: empieza por la letra o la contiene.
  function followsRule(word) {
    const a = norm(word.answer);
    return word.rule === 'e' ? a.startsWith(word.letter) : a.includes(word.letter);
  }

  function create(rosco, opts) {
    opts = Object.assign({ players: 1, time: 240, typos: true }, opts || {});
    const mk = () => ({ words: rosco.words.map(w => Object.assign({}, w, { status: 'pending', given: '' })), idx: 0, time: opts.time, ok: 0, ko: 0 });
    const g = { rosco, opts, players: Array.from({ length: opts.players }, mk), turn: 0, over: false, last: null };
    return g;
  }
  const pending = (p) => p.words.filter(w => w.status === 'pending' || w.status === 'passed').length;
  const active = (g) => g.players[g.turn];
  function done(p) { return p.time <= 0 || pending(p) === 0; }

  // Siguiente letra pendiente o pasada después de la actual (dando la vuelta). Si solo queda la actual, se queda en ella.
  function advance(p) {
    const n = p.words.length;
    for (let k = 1; k <= n; k++) {
      const i = (p.idx + k) % n;
      const s = p.words[i].status;
      if (s === 'pending' || s === 'passed') { p.idx = i; return true; }
    }
    return false;
  }
  function current(g) { const p = active(g); return done(p) ? null : p.words[p.idx]; }

  // En el duelo, al fallar o pasar palabra el turno pasa al rival (si aún puede jugar).
  function switchTurn(g) {
    if (g.players.length < 2) return;
    const other = 1 - g.turn;
    if (!done(g.players[other])) g.turn = other;
  }
  function settle(g) { g.over = g.players.every(done); return g; }

  function answer(g, text) {
    if (g.over) return null;
    const p = active(g), w = p.words[p.idx];
    if (!w || done(p)) return null;
    const v = check(text, w, g.opts);
    w.given = String(text || '');
    if (v === 'wrong') { w.status = 'wrong'; p.ko++; } else { w.status = 'ok'; w.typo = v === 'typo'; p.ok++; }
    g.last = { player: g.turn, index: p.idx, verdict: v, word: w };
    advance(p);
    if (v === 'wrong') switchTurn(g);
    return settle(g), g.last;
  }
  function pass(g) {
    if (g.over) return null;
    const p = active(g), w = p.words[p.idx];
    if (!w || done(p)) return null;
    w.status = 'passed';
    g.last = { player: g.turn, index: p.idx, verdict: 'pass', word: w };
    advance(p);
    switchTurn(g);
    return settle(g), g.last;
  }
  // El profesor da por buena la última respuesta fallada (y el turno vuelve a quien la dio, si cambió).
  function override(g) {
    const L = g.last;
    if (!L || L.verdict !== 'wrong') return false;
    const p = g.players[L.player], w = p.words[L.index];
    if (w.status !== 'wrong') return false;
    w.status = 'ok'; w.overridden = true; p.ko--; p.ok++;
    L.verdict = 'ok';
    if (!done(p)) g.turn = L.player;
    g.over = false; settle(g);
    return true;
  }
  // Resta tiempo al jugador que tiene el turno. Al agotarse, pasa el turno al rival.
  function tick(g, seconds) {
    if (g.over) return g;
    const p = active(g);
    p.time = Math.max(0, p.time - seconds);
    if (p.time === 0) switchTurn(g);
    return settle(g);
  }
  function score(g) { return g.players.map(p => ({ ok: p.ok, ko: p.ko, pending: pending(p), time: p.time })); }
  // Ganador: más aciertos; a igualdad, menos fallos (como en el programa).
  function winner(g) {
    if (g.players.length < 2 || !g.over) return null;
    const [a, b] = g.players;
    if (a.ok !== b.ok) return a.ok > b.ok ? 0 : 1;
    if (a.ko !== b.ko) return a.ko < b.ko ? 0 : 1;
    return -1;
  }

  return { norm, check, followsRule, create, current, answer, pass, override, tick, score, winner, pending, done };
});
