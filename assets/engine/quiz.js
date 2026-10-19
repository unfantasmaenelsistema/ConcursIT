/* ConcursIT · motores del Trivial y de «¿Quién dijo qué?». Sin DOM: funcionan igual en Node.
   - Mazos sin repetición: no vuelve a salir una pregunta hasta agotar la categoría.
   - Las opciones se barajan en cada tirada (en el banco original la correcta era la B en el 77 % de los casos).
   - Tablero propio: anillo de 42 casillas con 6 «quesitos», 6 radios de 5 casillas y la casilla central. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CIQuiz = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Generador con semilla (mulberry32) para poder repetir partidas en las pruebas.
  function rng(seed) {
    let a = (seed == null ? (Math.random() * 2 ** 32) : seed) >>> 0;
    return function () { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function shuffle(arr, rand) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // Mazo: reparte los elementos en orden aleatorio y vuelve a barajar al terminar
  // (sin que el primero del nuevo mazo sea el último del anterior).
  function deck(items, rand) {
    let order = [], pos = 0, last = -1;
    const refill = () => { order = shuffle(items.map((_, i) => i), rand); if (order.length > 1 && order[0] === last) order.push(order.shift()); pos = 0; };
    refill();
    return {
      next() { if (pos >= order.length) refill(); last = order[pos++]; return { item: items[last], index: last }; },
      left() { return order.length - pos; },
      size: items.length,
    };
  }

  // Pregunta del Trivial con sus cuatro opciones barajadas.
  function card(q, rand) {
    const options = shuffle([q.a].concat(q.w), rand);
    return { q: q.q, options, correct: options.indexOf(q.a), e: q.e };
  }

  // ───────────── Tablero ─────────────
  const RING = 42, SPOKE = 5;
  function board() {
    const nodes = {}, adj = {};
    const link = (a, b) => { (adj[a] = adj[a] || []).push(b); (adj[b] = adj[b] || []).push(a); };
    for (let i = 0; i < RING; i++) {
      const k = Math.floor(i / 7), o = i % 7;
      // Tras cada quesito: las otras cinco categorías y una casilla de «tira otra vez».
      const pattern = [null, 1, 2, 'roll', 3, 4, 5];
      nodes['r' + i] = o === 0 ? { id: 'r' + i, type: 'hq', cat: k } : pattern[o] === 'roll' ? { id: 'r' + i, type: 'roll' } : { id: 'r' + i, type: 'cat', cat: (k + pattern[o]) % 6 };
      link('r' + i, 'r' + ((i + 1) % RING));
    }
    nodes.c = { id: 'c', type: 'hub' };
    for (let k = 0; k < 6; k++) {
      let prev = 'r' + k * 7;
      for (let j = 1; j <= SPOKE; j++) {
        const id = `s${k}_${j}`;
        nodes[id] = { id, type: 'cat', cat: (k + j) % 6 };
        link(prev, id);
        prev = id;
      }
      link(prev, 'c');
    }
    return { nodes, adj };
  }
  // Casillas a las que se llega con exactamente n pasos sin pisar dos veces la misma casilla en la tirada.
  function moves(b, from, n) {
    const out = new Set();
    const walk = (node, left, seen) => {
      if (left === 0) { out.add(node); return; }
      for (const nx of b.adj[node]) if (!seen.has(nx)) { seen.add(nx); walk(nx, left - 1, seen); seen.delete(nx); }
    };
    walk(from, n, new Set([from]));
    return Array.from(out);
  }

  // ───────────── Partida de Trivial ─────────────
  function trivial(bank, teams, opts) {
    opts = opts || {};
    const rand = rng(opts.seed);
    const b = board();
    const decks = bank.map(c => deck(c.questions, rand));
    const g = {
      bank, board: b, rand, decks,
      teams: teams.map(name => ({ name, pos: 'c', wedges: [false, false, false, false, false, false], ok: 0, ko: 0 })),
      turn: 0, phase: 'roll', roll: null, options: [], question: null, cat: null, square: null, winner: null, history: [],
    };
    return g;
  }
  const team = (g) => g.teams[g.turn];
  const allWedges = (t) => t.wedges.every(Boolean);
  function doRoll(g, value) {
    if (g.phase !== 'roll') return null;
    g.roll = value || 1 + Math.floor(g.rand() * 6);
    g.options = moves(g.board, team(g).pos, g.roll);
    g.phase = 'move';
    return g.roll;
  }
  // Mover la ficha. Devuelve lo que toca: 'question', 'chooseCat' (centro sin todos los quesitos) o 'roll' (tira otra vez).
  function move(g, node) {
    if (g.phase !== 'move' || !g.options.includes(node)) return null;
    const t = team(g);
    t.pos = node;
    const sq = g.board.nodes[node];
    g.square = sq;
    if (sq.type === 'roll') { g.phase = 'roll'; return 'roll'; }
    if (sq.type === 'hub') {
      if (allWedges(t)) { ask(g, Math.floor(g.rand() * 6), true); return 'final'; }
      g.phase = 'chooseCat'; return 'chooseCat';
    }
    ask(g, sq.cat, false);
    return 'question';
  }
  function ask(g, cat, final) {
    g.cat = cat;
    g.question = card(g.decks[cat].next().item, g.rand);
    g.question.final = !!final;
    g.phase = 'answer';
    return g.question;
  }
  function chooseCat(g, cat) { if (g.phase !== 'chooseCat') return null; return ask(g, cat, false); }
  // Resultado: true acierto, false fallo. Acierto: sigue el mismo equipo; en un quesito, lo gana; en el centro con los seis, gana la partida.
  function answer(g, correct) {
    if (g.phase !== 'answer') return null;
    const t = team(g), sq = g.square;
    let wedge = false;
    g.history.push({ team: g.turn, cat: g.cat, correct: !!correct });
    if (correct) {
      t.ok++;
      if (g.question.final) { g.winner = g.turn; g.phase = 'over'; return { correct: true, winner: g.turn }; }
      if (sq && sq.type === 'hq' && !t.wedges[sq.cat]) { t.wedges[sq.cat] = true; wedge = true; }
      g.phase = 'roll';
    } else {
      t.ko++;
      g.turn = (g.turn + 1) % g.teams.length;
      g.phase = 'roll';
    }
    g.question = null;
    return { correct: !!correct, wedge };
  }

  // ───────────── ¿Quién dijo qué? ─────────────
  // Cuatro autores: el correcto, el de la atribución errónea típica (si la hay) y otros al azar.
  function quoteRound(items, item, rand) {
    const authors = Array.from(new Set(items.map(x => x.autor))).filter(a => a !== item.autor);
    const opts = [item.autor];
    if (item.myth) opts.push(item.myth);
    for (const a of shuffle(authors, rand)) { if (opts.length >= 4) break; if (!opts.includes(a)) opts.push(a); }
    const options = shuffle(opts, rand);
    return { item, options, correct: options.indexOf(item.autor) };
  }

  return { rng, shuffle, deck, card, board, moves, trivial, roll: doRoll, move, chooseCat, answer, ask, quoteRound, allWedges };
});
