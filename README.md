# ConcursIT

**Juegos de clase de informática y ciberseguridad, gratis y en el navegador** · *Free computing and cybersecurity classroom games, right in your browser*

👉 **https://unfantasmaenelsistema.github.io/ConcursIT/**

| Juego | Qué hace | Antes |
|---|---|---|
| 🎲 [Trivial](https://unfantasmaenelsistema.github.io/ConcursIT/#trivial) | De 2 a 6 equipos sobre un tablero propio (anillo de 42 casillas, seis radios y casilla central): se tira el dado, se elige casilla y se responde una pregunta de su categoría. Quien acierta en un «quesito» se lo lleva y sigue tirando; con los seis, gana respondiendo en el centro. 340 preguntas en 6 categorías, opciones barajadas, sin repetir hasta agotar la categoría, cronómetro opcional y modo oral (el profesor marca si han acertado). Modo «fichas» para jugar con un tablero físico. | Trivial-IT |
| 🔤 [Pasapalabra](https://unfantasmaenelsistema.github.io/ConcursIT/#rosco) | El rosco de la A a la Z en seis temas (hardware, informática general, redes, seguridad de la información, seguridad informática y sistemas operativos), en solitario o en duelo de dos jugadores con su reloj cada uno. Las letras pasadas vuelven en la siguiente vuelta, se ignoran tildes y mayúsculas, se acepta una errata en palabras largas (desactivable) y el profesor puede «dar por buena» una respuesta. | Pasapalabra (Mis Roscos de Repaso) |
| 💬 [¿Quién dijo qué?](https://unfantasmaenelsistema.github.io/ConcursIT/#frases) | 28 frases célebres de la informática, en solitario o por equipos. Cada una enlaza a la fuente de la cita original y, cuando una frase suele atribuirse a otra persona, esa persona aparece como opción trampa y se explica. | QuienDijoQue |

Pensado para proyectar en clase: botón **A+** (letra grande) y **⛶** (pantalla completa). La interfaz está en **español e inglés** y tiene tema **claro u oscuro**; las preguntas están en español.

## Qué se ha corregido respecto a los juegos originales

- **Pasapalabra:** 59 de las 162 definiciones no cumplían su letra («empieza por la A» con respuesta DISPONIBILIDAD, «contiene la Ñ» con BROADCAST, «empieza por la Z» con DMZ…). Había además errores de contenido (fórmulas en LaTeX que se veían como `$10^9$`, una memoria «GDDRX» que no existe, el yottabyte confundido con 2⁸⁰, la DMZ y la puerta de enlace mal definidas, VPN repetida en dos letras). Los seis roscos se han reescrito; una prueba comprueba que cada respuesta cumple su regla, que no se repiten y que la definición no da la respuesta. En el móvil, 23 de las 27 letras quedaban fuera del círculo, y al pasar la última letra pendiente el rosco terminaba sin dejar responderla.
- **Trivial:** la respuesta correcta era la B en 269 de las 349 preguntas (el 77 %; en Sistemas, 71 de 80), así que contestar siempre B bastaba para ganar. Ahora las opciones se barajan en cada pregunta. También salían preguntas repetidas (se elegían al azar con reemplazo). Se han corregido preguntas ambiguas (SNMP 161/162, SMTP 465/587, colisiones de hash) y erróneas (la latencia definida como tiempo de ida y vuelta, el «banner grabbing» como sinónimo de su contramedida), y quitado nueve preguntas repetidas entre categorías. El tablero era una foto del tablero original del juego comercial; ahora es un tablero propio dibujado en SVG y jugable.
- **¿Quién dijo qué?:** varias frases estaban atribuidas a quien no las dijo (por ejemplo, la de ser amable con los empollones no es de Bill Gates sino de Charles J. Sykes, y la de que Linux solo es gratis si tu tiempo no vale nada es de Jamie Zawinski, no de Steve Ballmer) y otras no tienen fuente conocida. Se han dejado solo las que se pueden comprobar.

## Privacidad

Web estática en GitHub Pages: sin servidor, cuentas ni analítica. Los nombres de equipos y las opciones se guardan solo en el `localStorage` de tu navegador (prefijo `ci_`).

## Detalles técnicos

- HTML, CSS y JavaScript sin compilar ni dependencias.
- Contenido en `assets/data/`: `roscos.js` (cada letra con su regla «empieza»/«contiene», respuesta y alternativas aceptadas), `trivial.js` (pregunta, respuesta correcta, tres incorrectas y explicación) y `frases.js` (frase traducida y resumida al español, autor, contexto y fuente).
- Motores sin DOM en `assets/engine/`, que funcionan igual en Node: `rosco.js` (comparación tolerante, vueltas, duelo, tiempo y «dar por buena») y `quiz.js` (mazos sin repetición, opciones barajadas, tablero como grafo con movimientos de tirada exacta sin retroceder, partida del Trivial y rondas de frases).
- Probado con Node (las reglas de los 162 roscos, el banco de preguntas, el reparto uniforme de la respuesta correcta en las cuatro posiciones, el tablero y los motores), con Playwright (los tres juegos de principio a fin en español, inglés y móvil) y con un script que comprueba cada frase en su fuente.
- Las frases están traducidas y resumidas por nosotros; el enlace de cada una lleva a la cita original.

```
index.html             página única con las pestañas (#inicio #trivial #rosco #frases)
assets/core.js         marca, ES/EN, tema, modo proyector, pestañas y utilidades
assets/app-*.js        interfaz de cada juego
assets/engine/*.js     motores sin DOM
assets/data/*.js       roscos, preguntas y frases
```

Para probarlo en local: `python -m http.server` en la carpeta y abre `http://localhost:8000`.

---

## English

**ConcursIT** merges three classroom games. **Trivia** is played by 2–6 teams on our own SVG board with a die, wedges and a final question in the centre (340 questions in 6 categories, shuffled options, no repeats, optional timer, an oral mode and a cards-only mode for physical boards). **Word wheel** is the A-to-Z “rosco” from the Spanish TV show Pasapalabra, with six topics, solo or duel mode with a clock per player, passed letters coming back, accent and typo tolerance and a teacher override. **Who said it?** has 28 famous computing quotes, each linking to its source, with common misattributions shown as trap answers and explained. The interface is in Spanish and English; the questions are in Spanish. Everything runs in your browser.

## Licencia · License

Código bajo licencia [MIT](LICENSE).
