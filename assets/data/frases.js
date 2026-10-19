/* ConcursIT · ¿Quién dijo qué? Frases de la informática traducidas y resumidas al español (no son citas literales).
   Cada una: es (frase en español), autor, ctx (dónde o cuándo), src (página de Wikiquote donde está la cita original),
   chk (fragmento corto del original que un script busca en esa página; sec, la sección donde debe estar) y, si procede, myth (a quién se le suele atribuir mal). */
(function (root) {
  const W = (p) => 'https://en.wikiquote.org/wiki/' + p;
  root.CI_FRASES = [
    { es: 'La seguridad es un proceso, no un producto.', autor: 'Bruce Schneier', ctx: 'Experto en criptografía, 2000', src: 'https://www.schneier.com/crypto-gram/archives/2000/0515.html', chk: 'process, not a product' },
    { es: 'La mejor forma de predecir el futuro es inventarlo.', autor: 'Alan Kay', ctx: 'Pionero de la programación orientada a objetos, 1971', src: W('Alan_Kay'), chk: 'invent it' },
    { es: 'El software se está comiendo el mundo.', autor: 'Marc Andreessen', ctx: 'Cocreador de Mosaic y Netscape, 2011', src: W('Marc_Andreessen'), chk: 'eating the world' },
    { es: 'Es más fácil pedir perdón que pedir permiso.', autor: 'Grace Hopper', ctx: 'Pionera de la programación y del COBOL', src: W('Grace_Hopper'), chk: 'forgiveness' },
    { es: 'La frase más peligrosa es «siempre lo hemos hecho así».', autor: 'Grace Hopper', ctx: 'Pionera de la programación y del COBOL', src: W('Grace_Hopper'), chk: 'always done it this way' },
    { es: 'Hablar es barato. Enséñame el código.', autor: 'Linus Torvalds', ctx: 'Creador de Linux, en una lista de correo, 2000', src: W('Linus_Torvalds'), chk: 'show me the code' },
    { es: 'Con suficientes ojos, todos los errores son superficiales.', autor: 'Eric S. Raymond', ctx: '«La catedral y el bazar», 1997 (la llamó ley de Linus)', src: W('Eric_S._Raymond'), chk: 'enough eyeballs' },
    { es: 'La optimización prematura es la raíz de todos los males.', autor: 'Donald Knuth', ctx: 'Autor de «The Art of Computer Programming», 1974', src: W('Donald_Knuth'), chk: 'root of all evil' },
    { es: 'Las pruebas demuestran que hay errores, nunca que no los haya.', autor: 'Edsger W. Dijkstra', ctx: 'Premio Turing 1972', src: W('Edsger_W._Dijkstra'), chk: 'absence of bugs' },
    { es: 'El único sistema realmente seguro está apagado, enterrado en hormigón y vigilado por guardias armados.', autor: 'Gene Spafford', ctx: 'Profesor de seguridad informática en Purdue', src: W('Gene_Spafford'), chk: 'lead-lined room' },
    { es: 'Depurar es el doble de difícil que escribir el código: si lo escribes lo más ingenioso que sabes, no serás capaz de depurarlo.', autor: 'Brian Kernighan', ctx: 'Coautor de «El lenguaje de programación C»', src: W('Brian_Kernighan'), chk: 'twice as hard' },
    { es: 'Cualquiera escribe código que entiende una máquina; los buenos programadores lo escriben para que lo entiendan las personas.', autor: 'Martin Fowler', ctx: '«Refactoring», 1999', src: W('Martin_Fowler'), chk: 'humans can understand' },
    { es: 'En C es fácil pegarse un tiro en el pie; en C++ cuesta más, pero cuando pasa te vuelas la pierna entera.', autor: 'Bjarne Stroustrup', ctx: 'Creador de C++', src: W('Bjarne_Stroustrup'), chk: 'shoot yourself in the foot' },
    { es: 'En caso de duda, usa la fuerza bruta.', autor: 'Ken Thompson', ctx: 'Cocreador de Unix', src: W('Ken_Thompson'), chk: 'use brute force' },
    { es: 'Cualquier tecnología lo bastante avanzada es indistinguible de la magia.', autor: 'Arthur C. Clarke', ctx: 'Escritor de ciencia ficción, tercera ley de Clarke', src: W('Arthur_C._Clarke'), chk: 'indistinguishable from magic' },
    { es: 'Esto es para todo el mundo.', autor: 'Tim Berners-Lee', ctx: 'Creador de la web, en la inauguración de los Juegos de Londres 2012', src: W('Tim_Berners-Lee'), chk: 'This is for everyone' },
    { es: 'Decir que no te importa la privacidad porque no tienes nada que ocultar es como decir que no te importa la libertad de expresión porque no tienes nada que decir.', autor: 'Edward Snowden', ctx: 'Extécnico de la NSA, 2015', src: W('Edward_Snowden'), chk: 'nothing to hide' },
    { es: 'Muévete rápido y rompe cosas.', autor: 'Mark Zuckerberg', ctx: 'Lema interno de Facebook', src: W('Mark_Zuckerberg'), chk: 'Move fast and break things' },
    { es: 'Solo vemos un poco hacia delante, pero vemos mucho que hacer.', autor: 'Alan Turing', ctx: '«Computing Machinery and Intelligence», 1950', src: W('Alan_Turing'), chk: 'short distance ahead' },
    { es: 'Las tres virtudes del programador son la pereza, la impaciencia y la soberbia.', autor: 'Larry Wall', ctx: 'Creador de Perl', src: W('Larry_Wall'), chk: 'impatience' },
    { es: 'Software libre es cuestión de libertad, no de precio: «libre» como en libertad de expresión, no como en barra libre.', autor: 'Richard Stallman', ctx: 'Fundador del proyecto GNU', src: W('Richard_Stallman'), chk: 'free beer' },
    { es: 'Unix es un sistema sencillo, pero hace falta ser un genio para entender su sencillez.', autor: 'Dennis Ritchie', ctx: 'Cocreador de Unix y de C', src: W('Dennis_Ritchie'), chk: 'genius to understand' },
    { es: 'La máquina analítica no pretende crear nada por sí misma: solo hace lo que sepamos ordenarle.', autor: 'Ada Lovelace', ctx: 'Notas sobre la máquina analítica de Babbage, 1843', src: W('Ada_Lovelace'), chk: 'no pretensions' },
    { es: 'Todo lo que se pueda automatizar, se automatizará.', autor: 'Shoshana Zuboff', ctx: '«In the Age of the Smart Machine», 1988 (ley de Zuboff)', src: W('Shoshana_Zuboff'), chk: 'automated' },
    { es: 'Sé amable con los empollones: lo más probable es que acabes trabajando para uno.', autor: 'Charles J. Sykes', ctx: '«50 Rules Kids Won\'t Learn in School», 2007', src: W('Bill_Gates') + '#Misattributed', chk: 'nice to nerds', sec: 'Misattributed', myth: 'Bill Gates' },
    { es: 'Linux solo es gratis si tu tiempo no vale nada.', autor: 'Jamie Zawinski', ctx: 'Programador de Netscape, 1998', src: W('Jamie_Zawinski'), chk: 'time has no value', myth: 'Steve Ballmer' },
    { es: 'Saber es poder.', autor: 'Francis Bacon', ctx: '«Meditationes Sacrae», 1597 (escribió «conocimiento», no «información»)', src: W('Francis_Bacon'), chk: 'potestas est' },
    { es: 'Seguid hambrientos, seguid alocados.', autor: 'Steve Jobs', ctx: 'Discurso en Stanford, 2005 (lo tomó del último número del Whole Earth Catalog)', src: W('Steve_Jobs'), chk: 'Stay hungry' },
  ];
})(typeof self !== 'undefined' ? self : this);
if (typeof module === 'object' && module.exports) module.exports = (typeof self !== 'undefined' ? self : this).CI_FRASES;
