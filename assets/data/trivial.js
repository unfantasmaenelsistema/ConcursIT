/* ConcursIT · banco del Trivial (6 categorías). Formato: q pregunta, a respuesta correcta, w tres incorrectas, e explicación.
   Las opciones se barajan al mostrarlas. Generado a partir de Trivial-IT con las correcciones de la revisión. */
(function (root) {
  root.CI_TRIVIAL = [
 {
  "id": "arquitectura",
  "name": "Arquitectura de PC",
  "color": "#E53935",
  "questions": [
   {
    "q": "¿Qué componente se considera el 'cerebro' del ordenador, encargado de ejecutar las instrucciones de los programas?",
    "a": "Unidad Central de Procesamiento (CPU)",
    "w": [
     "Memoria RAM",
     "Disco Duro",
     "Tarjeta Gráfica"
    ],
    "e": "La CPU (Unidad Central de Procesamiento) interpreta y ejecuta las instrucciones básicas que hacen funcionar a una computadora."
   },
   {
    "q": "¿Cuál de los siguientes es un tipo de memoria volátil que pierde su información al apagar el equipo?",
    "a": "Memoria RAM",
    "w": [
     "SSD",
     "Disco Duro HDD",
     "Memoria ROM"
    ],
    "e": "La RAM (Random Access Memory) es volátil; se utiliza para almacenar datos temporales que el procesador necesita de inmediato."
   },
   {
    "q": "¿Qué tipo de conector se utiliza comúnmente hoy en día para conectar discos duros internos y SSDs a la placa base?",
    "a": "SATA",
    "w": [
     "IDE",
     "SCSI",
     "VGA"
    ],
    "e": "SATA (Serial ATA) es la interfaz estándar para la transferencia de datos entre la placa base y los dispositivos de almacenamiento."
   },
   {
    "q": "¿Qué función cumple la Fuente de Alimentación en un PC?",
    "a": "Convertir corriente alterna en corriente continua para los componentes",
    "w": [
     "Almacenar archivos",
     "Procesar gráficos",
     "Enfriar el procesador"
    ],
    "e": "La fuente de alimentación transforma la corriente de la red eléctrica en los voltajes adecuados para el funcionamiento del hardware."
   },
   {
    "q": "¿A qué nos referimos con el término 'Overclocking'?",
    "a": "Aumentar la velocidad de reloj de un componente por encima de las especificaciones del fabricante",
    "w": [
     "Limpiar el polvo del PC",
     "Instalar más memoria RAM",
     "Reducir el consumo de energía"
    ],
    "e": "El overclocking busca obtener un rendimiento superior al estándar, aunque aumenta el calor generado."
   },
   {
    "q": "¿Qué significan las siglas BIOS?",
    "a": "Basic Input Output System",
    "w": [
     "Binary Input Output System",
     "Basic Internal Operating System",
     "Binary Internal Output System"
    ],
    "e": "El BIOS es el firmware que se ejecuta al encender el ordenador para inicializar el hardware."
   },
   {
    "q": "¿Cuál es la principal diferencia entre un HDD y un SSD?",
    "a": "El SSD no tiene partes móviles y es mucho más rápido",
    "w": [
     "El HDD es más rápido",
     "El SSD utiliza discos magnéticos",
     "El HDD es más caro"
    ],
    "e": "Los SSD utilizan memoria flash, lo que les permite tiempos de acceso casi instantáneos comparados con los discos mecánicos HDD."
   },
   {
    "q": "¿Qué componente se encarga de procesar los datos para mostrarlos en el monitor?",
    "a": "Tarjeta Gráfica (GPU)",
    "w": [
     "Memoria RAM",
     "Tarjeta de Sonido",
     "Tarjeta de Red"
    ],
    "e": "La GPU está diseñada específicamente para el procesamiento de gráficos y vídeo."
   },
   {
    "q": "¿En qué unidad se mide habitualmente la frecuencia de un procesador?",
    "a": "Gigahercios (GHz)",
    "w": [
     "Bytes",
     "Vatios",
     "Voltios"
    ],
    "e": "Los GHz indican cuántos ciclos de procesamiento puede realizar el procesador por segundo."
   },
   {
    "q": "¿Cuál es la función de la Pasta Térmica?",
    "a": "Mejorar la transferencia de calor entre el procesador y el disipador",
    "w": [
     "Pegar el procesador a la placa",
     "Conducir la electricidad",
     "Aislar los componentes"
    ],
    "e": "La pasta térmica rellena las imperfecciones microscópicas entre el chip y el metal del disipador para evacuar el calor eficientemente."
   },
   {
    "q": "¿Qué significa 'Dual Channel' en relación a la memoria RAM?",
    "a": "Una tecnología que permite el acceso a dos módulos de RAM simultáneamente doblando el ancho de banda",
    "w": [
     "Tener dos sistemas operativos",
     "Usar dos tarjetas gráficas",
     "Conectar la RAM al disco duro"
    ],
    "e": "Al instalar módulos en parejas compatibles, el sistema puede mover datos más rápido entre la CPU y la RAM."
   },
   {
    "q": "¿Cuál de estos componentes NO se encuentra directamente en la placa base?",
    "a": "Monitor",
    "w": [
     "Ranuras PCI Express",
     "Chipset",
     "Zócalo del procesador"
    ],
    "e": "El monitor es un periférico de salida externo, no un componente interno soldado o pinchado en la placa."
   },
   {
    "q": "¿Qué es el 'Socket' o Zócalo de una placa base?",
    "a": "El lugar donde se instala el procesador",
    "w": [
     "El conector de internet",
     "El conector de la fuente de alimentación",
     "Donde se pone la pila"
    ],
    "e": "El socket debe ser compatible físicamente con el modelo específico de procesador que se vaya a usar."
   },
   {
    "q": "¿Para qué sirve la pila de botón (CMOS) en la placa base?",
    "a": "Para mantener la configuración del BIOS y la hora del sistema cuando el PC está apagado",
    "w": [
     "Para que el PC funcione sin electricidad",
     "Para dar más potencia al procesador",
     "Para iluminar los LEDs"
    ],
    "e": "Sin esta pila, el ordenador perdería la fecha y la hora cada vez que se desconectara de la corriente."
   },
   {
    "q": "¿Cuál de estos es un periférico de entrada?",
    "a": "Un teclado",
    "w": [
     "Un monitor",
     "Una impresora",
     "Un altavoz"
    ],
    "e": "Los periféricos de entrada permiten al usuario enviar información al ordenador."
   },
   {
    "q": "¿Cuál es la función principal del Chipset en la placa base?",
    "a": "Gestionar las comunicaciones entre el procesador y el resto de los componentes",
    "w": [
     "Almacenar archivos de usuario",
     "Proporcionar energía a los ventiladores",
     "Determinar la resolución del monitor"
    ],
    "e": "El chipset actúa como un centro de control que coordina el flujo de datos entre la CPU, la RAM y los periféricos."
   },
   {
    "q": "¿Qué significa que un procesador tenga 4 núcleos (quad-core)?",
    "a": "Que tiene 4 cerebros independientes que pueden realizar tareas simultáneas",
    "w": [
     "Que es 4 veces más grande",
     "Que necesita 4 ventiladores",
     "Que solo puede abrir 4 programas"
    ],
    "e": "Tener múltiples núcleos mejora el rendimiento en multitarea y en aplicaciones optimizadas para ello."
   },
   {
    "q": "¿Qué tipo de software es el que controla directamente el hardware y permite la comunicación entre el hardware y los programas de usuario?",
    "a": "Sistema Operativo",
    "w": [
     "Navegador",
     "Antivirus",
     "Editor de texto"
    ],
    "e": "El SO actúa como capa intermedia, gestionando los recursos de hardware para las aplicaciones."
   },
   {
    "q": "¿Qué sucede si el procesador alcanza una temperatura demasiado elevada?",
    "a": "Se activa el 'Thermal Throttling' para bajar la velocidad y protegerse, o se apaga",
    "w": [
     "El ordenador va más rápido",
     "Se descarga la batería",
     "El disco duro se borra"
    ],
    "e": "Los procesadores modernos reducen su frecuencia automáticamente si detectan sobrecalentamiento para evitar daños permanentes."
   },
   {
    "q": "¿Cuál de estos es un puerto de salida de video digital?",
    "a": "HDMI",
    "w": [
     "VGA",
     "PS/2",
     "Jack 3.5mm"
    ],
    "e": "HDMI y DisplayPort son los estándares actuales para audio y vídeo digital de alta definición."
   },
   {
    "q": "¿Qué unidad se utiliza para medir el almacenamiento de datos en un disco duro?",
    "a": "Terabytes (TB) o Gigabytes (GB)",
    "w": [
     "Hercios",
     "Voltios",
     "Amperios"
    ],
    "e": "Los bytes indican la capacidad de retención de información del dispositivo."
   },
   {
    "q": "¿Qué componente es fundamental para un usuario que se dedica al gaming o edición de video profesional?",
    "a": "Una GPU (Tarjeta Gráfica) potente",
    "w": [
     "Tarjeta de red de fibra",
     "Un lector de tarjetas SD",
     "Una caja con muchas luces"
    ],
    "e": "Estas tareas requieren un procesamiento gráfico masivo que solo una GPU dedicada puede ofrecer eficientemente."
   },
   {
    "q": "¿Qué es el 'Firmware'?",
    "a": "Software incrustado en el hardware que controla su funcionamiento básico",
    "w": [
     "Software que se puede borrar fácilmente",
     "Un tipo de virus",
     "Un programa para hacer hojas de cálculo"
    ],
    "e": "Es el código de bajo nivel que permite que el dispositivo 'sepa' cómo operar consigo mismo."
   },
   {
    "q": "¿Cómo se llama el proceso de cargar el sistema operativo en la memoria al encender el PC?",
    "a": "Booteo o Arranque",
    "w": [
     "Compilación",
     "Descarga",
     "Instalación"
    ],
    "e": "El 'booting' es la secuencia inicial desde que pulsas el botón hasta que aparece el escritorio."
   },
   {
    "q": "¿Cuál de estos dispositivos es tanto de entrada como de salida?",
    "a": "Pantalla táctil",
    "w": [
     "Escáner",
     "Ratón",
     "Webcam"
    ],
    "e": "La pantalla táctil permite ver información (salida) y dar órdenes tocándola (entrada)."
   },
   {
    "q": "¿Qué significan las siglas USB?",
    "a": "Universal Serial Bus",
    "w": [
     "United Serial Bus",
     "Universal System Binary",
     "Unit Serial Binary"
    ],
    "e": "Es el estándar de conexión más extendido para conectar casi cualquier tipo de periférico."
   },
   {
    "q": "¿Qué componente de la CPU se encarga de realizar las operaciones matemáticas y lógicas?",
    "a": "Unidad Aritmético Lógica (ALU)",
    "w": [
     "Unidad de Control",
     "Registros",
     "Memoria Caché"
    ],
    "e": "La ALU es la parte del procesador que suma, resta y compara valores binarios."
   },
   {
    "q": "¿Qué es la Memoria Caché del procesador?",
    "a": "Una memoria muy rápida y pequeña situada cerca del núcleo para acelerar el acceso a datos frecuentes",
    "w": [
     "Memoria para guardar fotos",
     "La memoria del disco duro",
     "Un lugar donde se guardan los virus"
    ],
    "e": "La caché evita que el procesador tenga que esperar a la RAM, que es mucho más lenta en comparación."
   },
   {
    "q": "¿Para qué sirve un SAI (Sistema de Alimentación Ininterrumpida)?",
    "a": "Para proteger el PC de subidas de tensión y permitir que siga encendido unos minutos si se va la luz",
    "w": [
     "Para navegar más rápido por internet",
     "Para conectar dos monitores",
     "Para enfriar la caja del PC"
    ],
    "e": "El SAI (o UPS en inglés) ofrece protección eléctrica y tiempo de respaldo mediante baterías internas."
   },
   {
    "q": "¿Qué indica la certificación '80 Plus' en una fuente de alimentación?",
    "a": "Que tiene una eficiencia energética superior al 80%",
    "w": [
     "Que tiene más de 80 cables",
     "Que dura 80 años",
     "Que puede alimentar 80 ordenadores"
    ],
    "e": "Indica que la fuente desperdicia poco calor y aprovecha mejor la electricidad de la pared."
   },
   {
    "q": "¿Cuál es el propósito de los ventiladores de la caja (chasis)?",
    "a": "Crear un flujo de aire constante para expulsar el aire caliente y meter aire fresco",
    "w": [
     "Hacer ruido",
     "Limpiar el polvo automáticamente",
     "Decorar el interior"
    ],
    "e": "Un buen flujo de aire es vital para que los componentes internos no se degraden por el calor."
   },
   {
    "q": "¿Qué es un formato de placa base 'ATX'?",
    "a": "Un estándar de dimensiones y disposición de los componentes en la placa base",
    "w": [
     "Un tipo de procesador",
     "Una marca de discos duros",
     "Un conector de monitor"
    ],
    "e": "ATX es el tamaño estándar más común para PCs de sobremesa domésticos y profesionales."
   },
   {
    "q": "¿Qué función tiene el bus de datos en un sistema informático?",
    "a": "Transportar la información entre los distintos componentes",
    "w": [
     "Transportar la electricidad",
     "Conectar el PC a la red eléctrica",
     "Sujetar la placa base al chasis"
    ],
    "e": "Los buses son las autopistas por donde viajan los bits dentro de la placa base."
   },
   {
    "q": "¿Cuál es la diferencia entre un bus serie y un bus paralelo?",
    "a": "El bus serie transmite los bits uno tras otro, el paralelo varios a la vez por múltiples hilos",
    "w": [
     "El bus serie es siempre más rápido",
     "El bus paralelo ya no existe",
     "El bus serie solo sirve para el ratón"
    ],
    "e": "Aunque parezca contradictorio, hoy en día los buses serie (como el PCIe) son mucho más rápidos que los antiguos buses paralelos."
   },
   {
    "q": "¿Qué tipo de memoria es la ROM?",
    "a": "Memoria de solo lectura y no volátil",
    "w": [
     "Memoria de acceso aleatorio y volátil",
     "Memoria para guardar juegos",
     "Memoria que se borra al apagar el PC"
    ],
    "e": "La ROM (Read Only Memory) contiene instrucciones que no deben cambiarse ni borrarse al quitar la energía."
   },
   {
    "q": "¿Qué es el 'Form Factor' de un disco duro de 2.5 pulgadas?",
    "a": "Su tamaño físico, típico de portátiles y SSDs estándar",
    "w": [
     "Su capacidad",
     "Su velocidad de rotación",
     "El tipo de cable que usa"
    ],
    "e": "2.5 pulgadas es el tamaño estándar para SSDs y discos duros de ordenadores portátiles."
   },
   {
    "q": "¿Qué significa 'Plug and Play'?",
    "a": "Conectar y listo (el sistema reconoce el hardware automáticamente sin configuración manual)",
    "w": [
     "Jugar a juegos antiguos",
     "Desconectar componentes en caliente",
     "Un tipo de cable de red"
    ],
    "e": "Es la tecnología que permite que Windows o Linux reconozcan un ratón o USB nada más conectarlo."
   },
   {
    "q": "¿Qué componente necesitamos instalar si queremos que nuestro PC de sobremesa se conecte a internet sin cables?",
    "a": "Una tarjeta de red Wi-Fi o adaptador USB Wi-Fi",
    "w": [
     "Un cable Ethernet",
     "Un módem de 56k",
     "Una antena de televisión"
    ],
    "e": "La tarjeta de red inalámbrica permite la comunicación mediante ondas de radio con el router."
   },
   {
    "q": "¿Cuál de estos componentes genera más calor en un ordenador de alto rendimiento?",
    "a": "El procesador (CPU) y la Tarjeta Gráfica (GPU)",
    "w": [
     "La memoria RAM",
     "El teclado",
     "La pila del BIOS"
    ],
    "e": "Debido a los millones de transistores conmutando a altas frecuencias, la CPU y la GPU son los puntos más calientes."
   },
   {
    "q": "¿Qué es la arquitectura de 64 bits?",
    "a": "Un sistema que puede procesar datos en bloques de 64 bits y direccionar mucha más memoria RAM",
    "w": [
     "Un procesador que tiene 64 núcleos",
     "Un monitor con 64 colores",
     "Un disco duro de 64 GB"
    ],
    "e": "La arquitectura x64 permite usar más de 4GB de RAM, superando la limitación de los sistemas de 32 bits."
   },
   {
    "q": "¿Qué es el 'Bottleneck' o Cuello de Botella en un PC?",
    "a": "Cuando un componente limita el rendimiento general del sistema por ser mucho más lento que los demás",
    "w": [
     "Cuando se rompe una pieza",
     "Cuando la caja es muy pequeña",
     "Cuando el PC hace mucho ruido"
    ],
    "e": "Por ejemplo, poner una tarjeta gráfica potentísima con un procesador muy antiguo genera un cuello de botella."
   },
   {
    "q": "¿Qué función tiene el escáner?",
    "a": "Digitalizar imágenes o documentos físicos para introducirlos en el PC",
    "w": [
     "Imprimir documentos",
     "Escuchar música",
     "Mover el puntero"
    ],
    "e": "El escáner convierte un documento en papel en un archivo digital de imagen."
   },
   {
    "q": "¿Qué significan las siglas SSD?",
    "a": "Solid State Drive",
    "w": [
     "Super Speed Disk",
     "System Storage Device",
     "Secure Static Drive"
    ],
    "e": "Se traduce como Unidad de Estado Sólido, porque no tiene partes mecánicas en movimiento."
   },
   {
    "q": "¿Qué es un 'Driver' o controlador de dispositivo?",
    "a": "Software que permite al sistema operativo comunicarse con un hardware específico",
    "w": [
     "El dueño del ordenador",
     "Un programa para conducir coches",
     "Un tipo de cable"
    ],
    "e": "Sin el driver adecuado, el sistema operativo no sabe cómo dar instrucciones a una impresora o tarjeta de sonido."
   },
   {
    "q": "¿Qué es el overclocking de la memoria RAM (XMP/DOCP)?",
    "a": "Cargar perfiles de configuración para que la RAM funcione a su velocidad máxima publicitada",
    "w": [
     "Borrar la memoria",
     "Hacer que la RAM sea de mayor capacidad",
     "Cambiar la RAM de sitio"
    ],
    "e": "Los perfiles XMP permiten que la RAM funcione a velocidades superiores al estándar base de JEDEC de forma segura."
   },
   {
    "q": "¿Qué es la resolución de pantalla?",
    "a": "El número de píxeles que se pueden mostrar en pantalla (ej. 1920x1080)",
    "w": [
     "El tamaño físico del monitor en pulgadas",
     "El peso del monitor",
     "La marca de la pantalla"
    ],
    "e": "A mayor resolución, más nitidez y espacio de trabajo tenemos en el escritorio."
   },
   {
    "q": "¿Qué es un procesador con gráficos integrados (APU)?",
    "a": "Un procesador que incluye una GPU dentro del mismo chip, permitiendo dar imagen sin tarjeta externa",
    "w": [
     "Un procesador que no necesita ventilador",
     "Un procesador para dibujar",
     "Un procesador que se conecta al monitor por USB"
    ],
    "e": "Es ideal para ordenadores de oficina o portátiles básicos donde no se requiere gran potencia gráfica."
   },
   {
    "q": "¿Cuál de estos puertos se utiliza para conectar periféricos de audio como auriculares o altavoces?",
    "a": "Jack 3.5mm",
    "w": [
     "Puerto Serie",
     "Puerto Paralelo",
     "VGA"
    ],
    "e": "El conector Jack es el estándar analógico para audio doméstico."
   },
   {
    "q": "¿Qué es la tecnología 'Hyper-Threading' de Intel?",
    "a": "Permitir que un solo núcleo físico trabaje en dos hilos de procesamiento a la vez",
    "w": [
     "Hacer el procesador más pequeño",
     "Enfriar el PC con agua",
     "Aumentar el tamaño de la caché"
    ],
    "e": "Permite un mejor aprovechamiento de los recursos del procesador en tareas pesadas."
   },
   {
    "q": "¿Qué es el 'Thermal Throttling'?",
    "a": "La reducción automática de velocidad de un componente para evitar daños por exceso de calor",
    "w": [
     "Cuando el ventilador gira muy rápido",
     "Un tipo de pasta térmica",
     "Limpiar el PC con aire comprimido"
    ],
    "e": "Es una medida de seguridad vital para la longevidad de la CPU y la GPU."
   },
   {
    "q": "¿Para qué sirve el puerto Ethernet (RJ45)?",
    "a": "Para conectar el ordenador a una red mediante cable",
    "w": [
     "Para conectar el teclado",
     "Para cargar el móvil",
     "Para conectar el monitor"
    ],
    "e": "La conexión por cable suele ser más estable y rápida que el Wi-Fi."
   },
   {
    "q": "¿Qué es un disco duro externo?",
    "a": "Una unidad de almacenamiento situada en una carcasa fuera de la caja del PC, conectada normalmente por USB",
    "w": [
     "Un disco que está roto",
     "La memoria RAM",
     "Un disco que solo funciona en internet"
    ],
    "e": "Son muy útiles para copias de seguridad y para transportar grandes cantidades de datos."
   },
   {
    "q": "¿Qué significan las siglas CPU?",
    "a": "Central Processing Unit",
    "w": [
     "Computer Personal Unit",
     "Control Process Utility",
     "Central Power Unit"
    ],
    "e": "Es el componente principal que ejecuta las instrucciones de los programas."
   },
   {
    "q": "¿Qué es un 'Benchmark'?",
    "a": "Una prueba de rendimiento para comparar la potencia de distintos componentes de hardware",
    "w": [
     "Un banco para sentarse a programar",
     "Un virus de publicidad",
     "Un tipo de teclado"
    ],
    "e": "Programas como Cinebench o 3DMark se usan para ver qué puntuación obtiene un PC."
   },
   {
    "q": "¿Qué es la realidad virtual (desde el punto de vista del hardware)?",
    "a": "Un sistema de cascos y sensores que crean un entorno digital inmersivo",
    "w": [
     "Ver la tele muy cerca",
     "Un monitor muy grande",
     "Un tipo de juego de texto"
    ],
    "e": "Requiere una gran potencia de cálculo gráfico para mantener la fluidez y evitar mareos."
   },
   {
    "q": "¿Qué es el Ray Tracing?",
    "a": "Una tecnología de renderizado que simula el comportamiento físico de la luz para lograr gráficos hiperrealistas",
    "w": [
     "Una marca de impresoras",
     "Dibujar con el ratón",
     "Un conector de antena"
    ],
    "e": "Permite reflejos, sombras e iluminación global mucho más naturales en juegos y películas."
   },
   {
    "q": "¿Qué es un ratón óptico?",
    "a": "Un ratón que usa un sensor LED o láser para detectar el movimiento",
    "w": [
     "Un ratón que usa una bola",
     "Un ratón que se maneja con la vista",
     "Un ratón que no tiene botones"
    ],
    "e": "Son más precisos y requieren menos mantenimiento que los antiguos ratones de bola."
   },
   {
    "q": "¿Cuál es la función del disipador?",
    "a": "Absorber el calor del procesador y distribuirlo hacia las aletas metálicas para que el ventilador lo enfríe",
    "w": [
     "Dar energía al PC",
     "Almacenar datos temporales",
     "Aumentar el volumen del sonido"
    ],
    "e": "Suele ser una pieza de aluminio o cobre con muchas láminas para maximizar la superficie de enfriamiento."
   },
   {
    "q": "¿Qué es un teclado mecánico?",
    "a": "Un teclado donde cada tecla tiene su propio interruptor (switch) físico individual",
    "w": [
     "Un teclado que funciona con vapor",
     "Un teclado muy barato",
     "Un teclado que no tiene letras"
    ],
    "e": "Son muy valorados por su durabilidad y la sensación táctil al escribir."
   },
   {
    "q": "¿Qué es una estación de trabajo (Workstation)?",
    "a": "Un ordenador de altas prestaciones diseñado para tareas profesionales pesadas como ingeniería o diseño 3D",
    "w": [
     "Un sitio para dejar el café",
     "Un ordenador portátil pequeño",
     "Una consola de videojuegos"
    ],
    "e": "Suelen usar componentes con mayor fiabilidad y potencia que los PCs domésticos (ej. procesadores Xeon)."
   },
   {
    "q": "¿Qué es la refrigeración líquida?",
    "a": "Un sistema que usa un líquido refrigerante y un radiador para enfriar los componentes de forma más eficiente y silenciosa",
    "w": [
     "Echarle agua al PC por encima",
     "Meter el PC en la nevera",
     "Un tipo de refresco"
    ],
    "e": "Es muy popular en PCs de gama alta y entusiastas del overclocking."
   },
   {
    "q": "¿Qué es el 'Lid' o esparcidor de calor integrado (IHS) de un procesador?",
    "a": "La chapa metálica superior del procesador que protege el chip y ayuda a transmitir el calor al disipador",
    "w": [
     "La caja del procesador",
     "Un tipo de cable",
     "El manual de instrucciones"
    ],
    "e": "Es la superficie plana donde aplicamos la pasta térmica."
   },
   {
    "q": "¿Qué es un 'Barebone'?",
    "a": "Un ordenador que viene solo con la placa y la fuente, a falta de RAM, disco y CPU",
    "w": [
     "Un procesador muy potente",
     "Un virus que borra archivos",
     "Un tipo de altavoz"
    ],
    "e": "Permiten al usuario elegir los componentes clave según sus necesidades."
   },
   {
    "q": "¿Qué es la 'Latencia' en la memoria RAM?",
    "a": "El tiempo de retraso entre que se solicita un dato y este se entrega",
    "w": [
     "La capacidad total",
     "La altura de la tarjeta",
     "El color de la RAM"
    ],
    "e": "Se mide en ciclos de reloj (CL). A menor latencia, mayor rapidez de respuesta."
   },
   {
    "q": "¿Qué es el puerto Thunderbolt?",
    "a": "Una interfaz de alta velocidad que combina transferencia de datos, video y carga en un solo cable",
    "w": [
     "Un puerto que solo sirve para cargar",
     "Un puerto antiguo de impresora",
     "Un tipo de ventilador"
    ],
    "e": "Es muy común en equipos Apple y portátiles de gama alta por su gran versatilidad."
   },
   {
    "q": "¿Qué es el 'Coil Whine'?",
    "a": "Un ruido eléctrico agudo producido por las vibraciones de las bobinas en componentes como gráficas o fuentes",
    "w": [
     "Un programa de música",
     "Un tipo de cable de red",
     "Cuando el PC se apaga solo"
    ],
    "e": "No suele ser peligroso para el hardware, pero puede resultar muy molesto para el usuario."
   },
   {
    "q": "¿Qué es un sistema de 32 bits (x86)?",
    "a": "Una arquitectura que, sin extensiones, solo puede direccionar 4 GB de memoria",
    "w": [
     "Un sistema muy moderno",
     "Un sistema con 32 ventiladores",
     "Un procesador de 32 núcleos"
    ],
    "e": "Con 32 bits se pueden direccionar 2³² bytes = 4 GB. Hoy está en desuso a favor de los 64 bits."
   },
   {
    "q": "¿Qué es la memoria VRAM?",
    "a": "Memoria de acceso aleatorio dedicada exclusivamente a la tarjeta gráfica",
    "w": [
     "Memoria para guardar videos",
     "La memoria del disco duro",
     "Un tipo de memoria ROM"
    ],
    "e": "La Video RAM almacena las texturas y datos necesarios para renderizar las imágenes en pantalla."
   },
   {
    "q": "¿Qué es un panel 'IPS' en un monitor?",
    "a": "Un tipo de pantalla que ofrece mejores colores y ángulos de visión",
    "w": [
     "Un panel que consume mucho",
     "Una pantalla en blanco y negro",
     "Un protector de pantalla"
    ],
    "e": "In-Plane Switching es la tecnología preferida por diseñadores por su fidelidad de color."
   },
   {
    "q": "¿Qué es el 'Input Lag'?",
    "a": "El retraso entre que realizas una acción (clic, tecla) y esta se refleja en la pantalla",
    "w": [
     "Cuando internet va lento",
     "Un tipo de teclado",
     "Cuando el PC no enciende"
    ],
    "e": "Es un factor crítico para jugadores competitivos, que buscan el menor retraso posible."
   },
   {
    "q": "¿Qué es un puerto DisplayPort?",
    "a": "Una interfaz digital de audio y video competidora del HDMI, común en entornos profesionales y gaming",
    "w": [
     "Un puerto para el ratón",
     "Un conector de alimentación",
     "Donde se conectan los altavoces"
    ],
    "e": "Suele ofrecer mayores anchos de banda para altas frecuencias de refresco."
   },
   {
    "q": "¿Qué es el TDP (Thermal Design Power)?",
    "a": "La cantidad máxima de calor que el sistema de refrigeración debe ser capaz de disipar (medido en vatios)",
    "w": [
     "La velocidad del procesador",
     "El precio del procesador",
     "El tamaño del ventilador"
    ],
    "e": "Sirve para elegir un disipador y una fuente de alimentación adecuados."
   },
   {
    "q": "¿Qué es una placa base 'Mini-ITX'?",
    "a": "El formato de placa base más pequeño, para PCs muy compactos",
    "w": [
     "Una placa para servidores",
     "Una placa que no tiene conectores",
     "Una placa base gigante"
    ],
    "e": "Ideal para equipos de salón (HTPC) o escritorios con poco espacio."
   },
   {
    "q": "¿Qué es el 'Cable Management' o gestión de cables?",
    "a": "Organizar los cables dentro de la caja para mejorar la estética y el flujo de aire",
    "w": [
     "Esconder los cables debajo de la mesa",
     "Vender cables",
     "Un tipo de conector"
    ],
    "e": "Un interior despejado facilita la refrigeración y el mantenimiento del equipo."
   },
   {
    "q": "¿Qué es un 'Solid State Hybrid Drive' (SSHD)?",
    "a": "Un disco duro mecánico que incluye una pequeña cantidad de memoria flash para acelerar el arranque",
    "w": [
     "Un disco que vuela",
     "Un tipo de RAM",
     "Un disco que no se puede borrar"
    ],
    "e": "Era una solución intermedia económica entre el HDD y el SSD, hoy en día poco común."
   },
   {
    "q": "¿Qué es la BIOS UEFI?",
    "a": "La evolución moderna de la BIOS, con interfaz gráfica, soporte para ratón y discos de más de 2TB",
    "w": [
     "Un sistema operativo",
     "Un programa de dibujo",
     "Un tipo de disco duro"
    ],
    "e": "UEFI es el estándar actual que sustituye a la antigua y limitada BIOS heredada."
   },
   {
    "q": "¿Qué es una tarjeta de sonido dedicada?",
    "a": "Un componente opcional para mejorar la calidad de audio y ofrecer más conexiones que la integrada en placa",
    "w": [
     "Unos altavoces",
     "Un programa para grabar música",
     "Un micrófono"
    ],
    "e": "Muy utilizada por audiófilos y profesionales de la producción musical."
   }
  ]
 },
 {
  "id": "sistemas",
  "name": "Sistemas operativos",
  "color": "#1E88E5",
  "questions": [
   {
    "q": "¿Qué es el Kernel?",
    "a": "El núcleo del sistema operativo",
    "w": [
     "La interfaz de usuario",
     "Un editor de texto",
     "Un driver de video"
    ],
    "e": "El Kernel gestiona el hardware y los recursos básicos del sistema."
   },
   {
    "q": "¿Qué tipo de software es un Sistema Operativo?",
    "a": "Sistema",
    "w": [
     "Aplicación",
     "Firmware",
     "Utilidad"
    ],
    "e": "Es el software base que permite que otros programas funcionen."
   },
   {
    "q": "¿Qué significa GUI?",
    "a": "Graphical User Interface",
    "w": [
     "General User Input",
     "Global Unit Interface",
     "Graph Utility Interaction"
    ],
    "e": "Es la interfaz gráfica basada en iconos y ventanas."
   },
   {
    "q": "¿Qué es un proceso?",
    "a": "Un programa en ejecución",
    "w": [
     "Un archivo en el disco",
     "Una carpeta",
     "Una señal eléctrica"
    ],
    "e": "Un proceso es una instancia activa de un programa con recursos asignados."
   },
   {
    "q": "¿Cuál es la función principal de la Memoria Virtual?",
    "a": "Simular más RAM usando el disco duro",
    "w": [
     "Acelerar la CPU",
     "Limpiar virus",
     "Guardar fotos"
    ],
    "e": "Permite ejecutar programas que requieren más memoria de la físicamente disponible."
   },
   {
    "q": "¿Qué es el 'Deadlock' (Interbloqueo)?",
    "a": "Dos procesos que se bloquean mutuamente esperando recursos",
    "w": [
     "Un virus rápido",
     "Un error de pantalla azul",
     "Un tipo de contraseña"
    ],
    "e": "Ocurre cuando ninguno de los dos procesos puede avanzar porque el otro tiene lo que necesita."
   },
   {
    "q": "¿Qué sistema de archivos es nativo de Windows?",
    "a": "NTFS",
    "w": [
     "EXT4",
     "APFS",
     "FAT16"
    ],
    "e": "New Technology File System es el estándar moderno de Windows."
   },
   {
    "q": "¿Qué comando en Linux lista archivos?",
    "a": "ls",
    "w": [
     "dir",
     "list",
     "show"
    ],
    "e": "ls es el comando estándar para listar contenidos en directorios Linux."
   },
   {
    "q": "¿Qué es una interrupción (Interrupt)?",
    "a": "Una señal al procesador para atención inmediata",
    "w": [
     "Un fallo de luz",
     "Un reinicio",
     "Un cable roto"
    ],
    "e": "Permite al hardware comunicarse con la CPU para pedir atención."
   },
   {
    "q": "¿Qué es el 'Multitasking'?",
    "a": "Ejecutar varias tareas 'simultáneamente'",
    "w": [
     "Tener muchas CPUs",
     "Instalar dos SO",
     "Muchos usuarios"
    ],
    "e": "El SO alterna rápidamente entre procesos para dar sensación de simultaneidad."
   },
   {
    "q": "¿Qué es un Thread (Hilo)?",
    "a": "La unidad más pequeña de ejecución",
    "w": [
     "Un cable",
     "Un virus",
     "Un puerto USB"
    ],
    "e": "Un proceso puede tener múltiples hilos compartiendo el mismo espacio de memoria."
   },
   {
    "q": "¿Qué hace el Planificador de Procesos (Scheduler)?",
    "a": "Decide qué proceso usa la CPU y cuándo",
    "w": [
     "Borra archivos",
     "Dibuja ventanas",
     "Controla el mouse"
    ],
    "e": "Optimiza el uso del procesador repartiendo el tiempo entre tareas."
   },
   {
    "q": "¿Qué es una 'System Call' (Llamada al Sistema)?",
    "a": "Interfaz entre un programa y el kernel",
    "w": [
     "Un teléfono",
     "Un error de RAM",
     "Un comando de red"
    ],
    "e": "Es el método que usan las apps para pedir servicios al SO."
   },
   {
    "q": "¿Qué es el 'Paging' (Paginación)?",
    "a": "Dividir la memoria en trozos de tamaño fijo",
    "w": [
     "Leer libros",
     "Navegar web",
     "Limpiar el disco"
    ],
    "e": "Técnica de gestión de memoria que evita la fragmentación externa."
   },
   {
    "q": "¿Qué significa CLI?",
    "a": "Command Line Interface",
    "w": [
     "Core Link Internet",
     "Common Logic Interaction",
     "Center Line Info"
    ],
    "e": "Interfaz de línea de comandos, basada en texto."
   },
   {
    "q": "¿Qué sistema de archivos es típico en Linux?",
    "a": "EXT4",
    "w": [
     "NTFS",
     "HFS+",
     "FAT32"
    ],
    "e": "EXT4 es el estándar más extendido en distribuciones Linux."
   },
   {
    "q": "¿Qué es un Driver (Controlador)?",
    "a": "Software que permite al SO hablar con el hardware",
    "w": [
     "Un monitor",
     "Un virus",
     "Un técnico"
    ],
    "e": "Sin drivers, el SO no sabría cómo usar una impresora o tarjeta gráfica."
   },
   {
    "q": "¿Qué es el BIOS/UEFI?",
    "a": "Firmware que inicia el hardware al arrancar",
    "w": [
     "Un antivirus",
     "Un driver",
     "Un juego"
    ],
    "e": "Se encarga de la configuración inicial y de cargar el SO."
   },
   {
    "q": "¿Qué es el 'Root' en Linux?",
    "a": "El superusuario con control total",
    "w": [
     "Una carpeta",
     "Un error de disco",
     "El nombre del PC"
    ],
    "e": "Usuario con ID 0 que tiene permisos para cualquier operación."
   },
   {
    "q": "¿Qué es un Sistema de Tiempo Real (RTOS)?",
    "a": "SO donde el tiempo de respuesta es crítico y garantizado",
    "w": [
     "Un SO muy rápido",
     "Un reloj",
     "Windows 10"
    ],
    "e": "Usado en control industrial, medicina o aviación."
   },
   {
    "q": "¿Qué es el 'Swap space'?",
    "a": "Espacio en disco usado como extensión de RAM",
    "w": [
     "Memoria RAM",
     "Un puerto",
     "Una red"
    ],
    "e": "Se usa cuando la RAM física está llena."
   },
   {
    "q": "¿Qué comando cambia permisos en Linux?",
    "a": "chmod",
    "w": [
     "chown",
     "chperm",
     "perms"
    ],
    "e": "Change Mode se usa para definir lectura, escritura y ejecución."
   },
   {
    "q": "¿Qué es un Microkernel?",
    "a": "Un kernel pequeño con solo servicios esenciales",
    "w": [
     "Un virus",
     "Un procesador",
     "Un SO para móviles"
    ],
    "e": "Busca mayor estabilidad moviendo servicios a espacio de usuario."
   },
   {
    "q": "¿Qué es un Proceso Huérfano?",
    "a": "Proceso cuyo padre ha terminado",
    "w": [
     "Un proceso sin CPU",
     "Un virus",
     "Un proceso borrado"
    ],
    "e": "Suele ser adoptado por el proceso 'init'."
   },
   {
    "q": "¿Qué es un Proceso Zombie?",
    "a": "Proceso que terminó pero sigue en la tabla de procesos",
    "w": [
     "Un virus",
     "Un proceso lento",
     "Un proceso que no muere"
    ],
    "e": "Ha finalizado pero espera que su padre lea su código de salida."
   },
   {
    "q": "¿Qué es el Algoritmo Round Robin?",
    "a": "Planificación circular que asigna turnos de tiempo fijo",
    "w": [
     "Un juego",
     "Un cifrado",
     "Un sistema de archivos"
    ],
    "e": "Asigna un 'quantum' de tiempo a cada proceso por turnos."
   },
   {
    "q": "¿Qué hace el comando 'top' en Linux?",
    "a": "Muestra procesos en tiempo real y consumo",
    "w": [
     "Borra archivos",
     "Apaga el PC",
     "Muestra la hora"
    ],
    "e": "Es el monitor de sistema por excelencia en terminal."
   },
   {
    "q": "¿Qué es la Fragmentación?",
    "a": "Datos esparcidos de forma no contigua en memoria/disco",
    "w": [
     "Un disco roto",
     "Un virus",
     "Borrar archivos"
    ],
    "e": "Degrada el rendimiento al obligar a más saltos de lectura."
   },
   {
    "q": "¿Qué es el MBR?",
    "a": "Master Boot Record (sector de arranque)",
    "w": [
     "Memoria RAM",
     "Un driver",
     "Un comando"
    ],
    "e": "Contiene la tabla de particiones y el código de inicio."
   },
   {
    "q": "¿Qué es un Sistema Operativo de Red?",
    "a": "SO diseñado para gestionar recursos en una red",
    "w": [
     "Internet",
     "Un router",
     "Un cable"
    ],
    "e": "Como Windows Server o variantes de Linux para servidores."
   },
   {
    "q": "¿Qué significa POSIX?",
    "a": "Estándar de interoperabilidad para SO tipo Unix",
    "w": [
     "Un virus",
     "Un comando",
     "Un tipo de disco"
    ],
    "e": "Define interfaces para que el código sea portable entre sistemas."
   },
   {
    "q": "¿Qué es el Registry (Registro) en Windows?",
    "a": "Base de datos jerárquica de configuraciones",
    "w": [
     "Un bloc de notas",
     "Un virus",
     "Un log de errores"
    ],
    "e": "Almacena opciones del SO y de las aplicaciones."
   },
   {
    "q": "¿Qué hace el comando 'grep'?",
    "a": "Busca patrones de texto dentro de archivos",
    "w": [
     "Borra",
     "Copia",
     "Mueve"
    ],
    "e": "Es una herramienta fundamental de filtrado en Unix/Linux."
   },
   {
    "q": "¿Qué es una partición?",
    "a": "División lógica de una unidad de almacenamiento física",
    "w": [
     "Un disco nuevo",
     "Un cable",
     "Un tipo de RAM"
    ],
    "e": "Permite tener varios sistemas o separar datos en un mismo disco."
   },
   {
    "q": "¿Qué es el Spooling?",
    "a": "Buffer para tareas que esperan un dispositivo lento (ej: impresora)",
    "w": [
     "Un virus",
     "Acelerar CPU",
     "Internet"
    ],
    "e": "Simultaneous Peripheral Operations On-Line."
   },
   {
    "q": "¿Qué es un Shell?",
    "a": "Programa que interpreta comandos del usuario",
    "w": [
     "Una cáscara",
     "Un virus",
     "El hardware"
    ],
    "e": "Es la capa que envuelve al kernel para interactuar con el usuario."
   },
   {
    "q": "¿Qué es 'sudo'?",
    "a": "Ejecutar comando con privilegios de superusuario",
    "w": [
     "Un comando para apagar",
     "Un virus",
     "Una marca de PC"
    ],
    "e": "SuperUser DO."
   },
   {
    "q": "¿Qué es el Archivo de Paginación (pagefile.sys)?",
    "a": "Archivo de Windows usado como memoria virtual",
    "w": [
     "Un virus",
     "Un driver",
     "Un log"
    ],
    "e": "Es donde Windows guarda las páginas de memoria que no caben en RAM."
   },
   {
    "q": "¿Qué es la Multiprocesación?",
    "a": "Uso de dos o más CPUs en un mismo sistema",
    "w": [
     "Muchas tareas",
     "Internet rápido",
     "Muchas ventanas"
    ],
    "e": "Permite ejecución física paralela real."
   },
   {
    "q": "¿Qué es el Directorio Raíz?",
    "a": "C:\\ o /",
    "w": [
     "Mis Documentos",
     "Papelera",
     "Escritorio"
    ],
    "e": "El nivel más alto en la jerarquía de archivos."
   },
   {
    "q": "¿Qué es una Variable de Entorno?",
    "a": "Valor dinámico que afecta el comportamiento de procesos",
    "w": [
     "Un virus",
     "Una carpeta",
     "Un driver"
    ],
    "e": "Ejemplo: PATH, que dice dónde buscar ejecutables."
   },
   {
    "q": "¿Qué es un Sistema Monolítico?",
    "a": "SO donde todo el kernel se ejecuta en un solo espacio",
    "w": [
     "SO antiguo",
     "Un virus",
     "Un PC grande"
    ],
    "e": "Linux es un ejemplo de kernel monolítico (aunque modular)."
   },
   {
    "q": "¿Qué es el tiempo de respuesta?",
    "a": "Tiempo desde que se envía una tarea hasta que empieza",
    "w": [
     "Velocidad de internet",
     "Tiempo de descarga",
     "Encender el PC"
    ],
    "e": "Métrica clave en sistemas interactivos."
   },
   {
    "q": "¿Qué es un Semáforo en SO?",
    "a": "Mecanismo de sincronización para evitar condiciones de carrera",
    "w": [
     "Una luz",
     "Un virus",
     "Un cable"
    ],
    "e": "Controla el acceso de múltiples procesos a recursos comunes."
   },
   {
    "q": "¿Qué es el 'Context Switching'?",
    "a": "Proceso de guardar estado de una tarea para cargar otra",
    "w": [
     "Cambiar de usuario",
     "Cambiar de monitor",
     "Formatear"
    ],
    "e": "Es costoso en términos de CPU pero esencial para multitarea."
   },
   {
    "q": "¿Qué es la Fragmentación Externa?",
    "a": "Huecos de memoria libres demasiado pequeños para ser usados",
    "w": [
     "Disco roto",
     "Un virus",
     "Pérdida de datos"
    ],
    "e": "Se soluciona con compactación o paginación."
   },
   {
    "q": "¿Qué es el 'Thrashing' (Hiperpaginación)?",
    "a": "El SO pasa más tiempo moviendo páginas que ejecutando",
    "w": [
     "Internet rápido",
     "Un virus",
     "Borrar archivos"
    ],
    "e": "Ocurre cuando la RAM es muy insuficiente."
   },
   {
    "q": "¿Qué es un Enlace Simbólico (Symlink)?",
    "a": "Acceso directo que apunta a otra ruta de archivo",
    "w": [
     "Un virus",
     "Una copia",
     "Un driver"
    ],
    "e": "Es un archivo especial que contiene una ruta."
   },
   {
    "q": "¿Qué hace el comando 'ps'?",
    "a": "Informa sobre procesos actuales",
    "w": [
     "Borra",
     "Copia",
     "Imprime"
    ],
    "e": "Process Status."
   },
   {
    "q": "¿Qué es el algoritmo FIFO?",
    "a": "Primero en entrar, primero en salir",
    "w": [
     "El más rápido primero",
     "El más pequeño primero",
     "Aleatorio"
    ],
    "e": "First-In, First-Out. Simple pero no siempre óptimo."
   },
   {
    "q": "¿Qué es un Daemon (Demonio)?",
    "a": "Proceso de fondo que no interactúa con el usuario",
    "w": [
     "Un virus",
     "Un error",
     "Un juego"
    ],
    "e": "Suelen encargarse de servicios de red, impresión, etc."
   },
   {
    "q": "¿Qué es el archivo '/etc/passwd'?",
    "a": "Almacena información básica de cuentas de usuario",
    "w": [
     "Un virus",
     "Una contraseña",
     "Un log"
    ],
    "e": "Fundamental en sistemas Unix/Linux."
   },
   {
    "q": "¿Qué es una Distribución (Distro) Linux?",
    "a": "Kernel Linux + herramientas + gestor de paquetes",
    "w": [
     "Un driver",
     "Un virus",
     "Una marca de PC"
    ],
    "e": "Ejemplos: Ubuntu, Debian, Fedora."
   },
   {
    "q": "¿Qué es el 'Bootloader'?",
    "a": "Programa que carga el sistema operativo en memoria",
    "w": [
     "Un virus",
     "Un driver",
     "Un cable"
    ],
    "e": "Ejemplos: GRUB, LILO, Windows Boot Manager."
   },
   {
    "q": "¿Qué es el modo Usuario vs modo Kernel?",
    "a": "Niveles de privilegio para proteger el sistema",
    "w": [
     "Dos monitores",
     "Dos teclados",
     "Windows vs Linux"
    ],
    "e": "El modo kernel tiene acceso total al hardware."
   },
   {
    "q": "¿Qué es una condición de carrera (Race Condition)?",
    "a": "Error cuando el resultado depende del orden de ejecución",
    "w": [
     "Un virus rápido",
     "Un juego",
     "Un fallo de RAM"
    ],
    "e": "Ocurre si dos procesos acceden a datos compartidos sin control."
   },
   {
    "q": "¿Qué es un Inodo?",
    "a": "Estructura de datos que describe un objeto en el disco",
    "w": [
     "Un virus",
     "Un cable",
     "Una carpeta"
    ],
    "e": "Contiene metadatos como permisos, dueño, tamaño (pero no el nombre)."
   },
   {
    "q": "¿Qué es el 'Mounting' (Montaje)?",
    "a": "Hacer que un sistema de archivos sea accesible en una ruta",
    "w": [
     "Armar el PC",
     "Un virus",
     "Limpiar el disco"
    ],
    "e": "Permite integrar discos o particiones en el árbol de directorios."
   },
   {
    "q": "¿Qué hace el comando 'man' en Linux?",
    "a": "Muestra el manual de un comando",
    "w": [
     "Borra",
     "Copia",
     "Busca"
    ],
    "e": "Manual. Indispensable para aprender comandos."
   },
   {
    "q": "¿Qué es una Pipe (Tubería '|')?",
    "a": "Envía la salida de un comando como entrada de otro",
    "w": [
     "Un cable",
     "Un virus",
     "Un puerto"
    ],
    "e": "Permite encadenar herramientas pequeñas para tareas complejas."
   },
   {
    "q": "¿Qué es un Sistema de Archivos con 'Journaling'?",
    "a": "Lleva un registro de cambios para evitar corrupción en fallos",
    "w": [
     "Un virus",
     "Es más rápido",
     "Es gratis"
    ],
    "e": "Ejemplos: NTFS, EXT4. Mejora la recuperación tras apagones."
   },
   {
    "q": "¿Qué es la Virtualización?",
    "a": "Crear versiones virtuales de hardware o sistemas",
    "w": [
     "Internet",
     "Un juego",
     "Un monitor"
    ],
    "e": "Permite ejecutar múltiples SO en una sola máquina física."
   },
   {
    "q": "¿Qué es el 'User Space'?",
    "a": "Área de memoria donde se ejecutan las aplicaciones",
    "w": [
     "El espacio en el disco",
     "El escritorio",
     "Un virus"
    ],
    "e": "Está restringido para no dañar el kernel."
   },
   {
    "q": "¿Qué es el comando 'kill'?",
    "a": "Envía una señal a un proceso para que termine",
    "w": [
     "Borra archivos",
     "Reinicia",
     "Formatea"
    ],
    "e": "Permite detener procesos bloqueados o no deseados."
   },
   {
    "q": "¿Qué es un Live CD/USB?",
    "a": "SO que arranca y funciona desde un medio extraíble",
    "w": [
     "Un virus",
     "Un driver",
     "Un backup"
    ],
    "e": "No requiere instalación en el disco duro."
   },
   {
    "q": "¿Qué es el comando 'df'?",
    "a": "Muestra el espacio libre en los discos",
    "w": [
     "Borra",
     "Copia",
     "Mueve"
    ],
    "e": "Disk Free."
   },
   {
    "q": "¿Qué es una Excepción?",
    "a": "Interrupción causada por un error de software (ej: div entre 0)",
    "w": [
     "Un virus",
     "Un permiso",
     "Un driver"
    ],
    "e": "También llamadas interrupciones sincrónicas."
   },
   {
    "q": "¿Qué es el 'Safe Mode' (Modo Seguro)?",
    "a": "Arranque con el mínimo de drivers para diagnosticar",
    "w": [
     "Un antivirus",
     "Un virus",
     "Una contraseña"
    ],
    "e": "Ayuda a arreglar problemas de software o drivers."
   },
   {
    "q": "¿Qué es un hipervisor?",
    "a": "Software que crea y gestiona máquinas virtuales",
    "w": [
     "Un monitor grande",
     "Un virus",
     "Un procesador"
    ],
    "e": "Capa entre el hardware y los sistemas operativos virtuales."
   },
   {
    "q": "¿Qué es 'chown'?",
    "a": "Cambia el dueño de un archivo o directorio",
    "w": [
     "Borra",
     "Copia",
     "Cifra"
    ],
    "e": "Change Owner."
   },
   {
    "q": "¿Qué es un Sistema Distribuido?",
    "a": "Colección de PCs que parecen un único sistema",
    "w": [
     "Un SO en piezas",
     "Internet",
     "Un virus"
    ],
    "e": "Reparte la carga de trabajo entre varios nodos."
   },
   {
    "q": "¿Qué es el tiempo de ejecución (Run-time)?",
    "a": "Periodo durante el cual un programa se está ejecutando",
    "w": [
     "Encender el PC",
     "Velocidad de internet",
     "Un virus"
    ],
    "e": "Es el tiempo de vida activa de la aplicación."
   },
   {
    "q": "¿Qué es el comando 'rm -rf'?",
    "a": "Borra recursivamente y a la fuerza (muy peligroso)",
    "w": [
     "Crea archivos",
     "Copia",
     "Mueve"
    ],
    "e": "Puede borrar todo el sistema si se usa con root indebidamente."
   },
   {
    "q": "¿Qué es el comando 'mkdir'?",
    "a": "Crea un nuevo directorio",
    "w": [
     "Borra",
     "Copia",
     "Mueve"
    ],
    "e": "Make Directory."
   },
   {
    "q": "¿Qué es el comando 'pwd'?",
    "a": "Muestra la ruta del directorio actual",
    "w": [
     "Crea claves",
     "Borra",
     "Copia"
    ],
    "e": "Print Working Directory."
   },
   {
    "q": "¿Qué es un Sistema de Archivos?",
    "a": "Forma en que el SO organiza y almacena archivos",
    "w": [
     "Una base de datos",
     "Un virus",
     "Un cable"
    ],
    "e": "Define cómo se nombran y acceden los datos."
   },
   {
    "q": "¿Qué es un Parche de Seguridad?",
    "a": "Actualización que soluciona una vulnerabilidad",
    "w": [
     "Un virus",
     "Un driver",
     "Un juego"
    ],
    "e": "Vital para mantener el sistema protegido."
   },
   {
    "q": "¿Qué es una interfaz WIMP?",
    "a": "Windows, Icons, Menus, Pointers",
    "w": [
     "Un virus",
     "Un monitor",
     "Web Interface Manager"
    ],
    "e": "Es la base de las interfaces gráficas modernas."
   },
   {
    "q": "¿Qué es la prioridad de proceso?",
    "a": "Valor que indica al scheduler qué proceso es más importante",
    "w": [
     "Velocidad",
     "Un virus",
     "El tamaño"
    ],
    "e": "Permite que tareas críticas se ejecuten antes."
   },
   {
    "q": "¿Qué es el 'Up-time'?",
    "a": "Tiempo que el sistema lleva encendido sin reiniciar",
    "w": [
     "Velocidad",
     "Bajar archivos",
     "Un virus"
    ],
    "e": "Mide la estabilidad de un servidor."
   }
  ]
 },
 {
  "id": "redes",
  "name": "Redes y protocolos",
  "color": "#43A047",
  "questions": [
   {
    "q": "¿Qué protocolo de la capa de transporte garantiza la entrega de datos, estableciendo una conexión confiable?",
    "a": "TCP",
    "w": [
     "UDP",
     "ICMP",
     "ARP"
    ],
    "e": "TCP es orientado a conexión y garantiza la entrega mediante acuses de recibo."
   },
   {
    "q": "¿Qué protocolo traduce nombres de dominio a direcciones IP?",
    "a": "DNS",
    "w": [
     "HTTP",
     "DHCP",
     "FTP"
    ],
    "e": "DNS realiza la resolución de nombres a direcciones IP."
   },
   {
    "q": "¿Qué dispositivo de red conecta segmentos basándose en la dirección MAC?",
    "a": "Switch",
    "w": [
     "Router",
     "Hub",
     "Módem"
    ],
    "e": "El Switch opera en la Capa 2 y usa direcciones MAC."
   },
   {
    "q": "¿Qué protocolo asigna automáticamente direcciones IP?",
    "a": "DHCP",
    "w": [
     "SMTP",
     "SNMP",
     "POP3"
    ],
    "e": "DHCP es el protocolo para la configuración automática de red."
   },
   {
    "q": "¿Qué capa OSI es responsable del cifrado/descifrado?",
    "a": "Presentación",
    "w": [
     "Aplicación",
     "Sesión",
     "Transporte"
    ],
    "e": "La Capa de Presentación se ocupa del formato de datos y encriptación."
   },
   {
    "q": "¿Cuál es el puerto estándar de HTTPS?",
    "a": "443",
    "w": [
     "80",
     "25",
     "22"
    ],
    "e": "HTTPS utiliza el puerto 443 para comunicación segura TLS/SSL."
   },
   {
    "q": "¿Qué máscara de subred usa por defecto una Clase C?",
    "a": "255.255.255.0",
    "w": [
     "255.0.0.0",
     "255.255.0.0",
     "255.255.255.255"
    ],
    "e": "La máscara de Clase C por defecto es 255.255.255.0 (/24)."
   },
   {
    "q": "¿Qué protocolo descubre la MAC conociendo la IP?",
    "a": "ARP",
    "w": [
     "ICMP",
     "DNS",
     "RARP"
    ],
    "e": "ARP resuelve direcciones IP a direcciones MAC en la LAN."
   },
   {
    "q": "¿Qué dispositivo opera en la Capa 3 y decide la mejor ruta?",
    "a": "Router",
    "w": [
     "Switch",
     "Hub",
     "Repetidor"
    ],
    "e": "El Router gestiona el enrutamiento a nivel de dirección IP."
   },
   {
    "q": "¿Qué transmisión envía un paquete a toda la red local?",
    "a": "Broadcast",
    "w": [
     "Unicast",
     "Multicast",
     "Anycast"
    ],
    "e": "Broadcast envía la trama a todos los hosts del segmento."
   },
   {
    "q": "¿Qué comando prueba conectividad usando ICMP?",
    "a": "ping",
    "w": [
     "ipconfig",
     "traceroute",
     "netstat"
    ],
    "e": "ping envía paquetes ICMP de solicitud de eco."
   },
   {
    "q": "¿Cuál es el principal inconveniente de UDP?",
    "a": "No garantiza entrega ni orden",
    "w": [
     "Es más lento",
     "Más ancho de banda",
     "Solo para VoIP"
    ],
    "e": "UDP no es orientado a conexión ni confiable."
   },
   {
    "q": "¿Qué protocolo transfiere archivos seguro por puerto 22?",
    "a": "SCP/SFTP",
    "w": [
     "FTP",
     "FTPS",
     "TFTP"
    ],
    "e": "SCP y SFTP utilizan SSH para la seguridad."
   },
   {
    "q": "¿A qué capa OSI pertenece la dirección IP?",
    "a": "Red",
    "w": [
     "Enlace de Datos",
     "Transporte",
     "Aplicación"
    ],
    "e": "La dirección IP es un concepto de la Capa 3 (Red)."
   },
   {
    "q": "¿Qué cable se usa en redes Gigabit Ethernet (1000BASE-T)?",
    "a": "Cat 5e o superior",
    "w": [
     "Coaxial",
     "Fibra monomodo",
     "Cat 3"
    ],
    "e": "Cat 5e y superiores son compatibles con 1000BASE-T."
   },
   {
    "q": "¿Qué es una subred?",
    "a": "División lógica de red IP",
    "w": [
     "Red IPv6",
     "Cambio de máscara",
     "Red estática"
    ],
    "e": "Segmenta la red para optimizar tráfico y gestión."
   },
   {
    "q": "¿Qué protocolo envía correos entre servidores?",
    "a": "SMTP",
    "w": [
     "POP3",
     "IMAP",
     "DHCP"
    ],
    "e": "SMTP es el protocolo de envío de correo."
   },
   {
    "q": "¿Qué traduce IP privada a pública en el borde de red?",
    "a": "NAT",
    "w": [
     "DNS",
     "DHCP",
     "BGP"
    ],
    "e": "NAT permite que múltiples dispositivos usen una sola IP pública."
   },
   {
    "q": "¿Qué es una dirección IP estática?",
    "a": "Asignada manualmente",
    "w": [
     "Cambia cada sesión",
     "Solo para servidores",
     "Una dirección MAC"
    ],
    "e": "La IP estática no cambia automáticamente con el tiempo."
   },
   {
    "q": "¿Qué es la latencia de red?",
    "a": "El retardo que sufren los datos en llegar de un punto a otro",
    "w": [
     "Velocidad de descarga",
     "Ancho de banda",
     "Pérdida de paquetes"
    ],
    "e": "Se mide en milisegundos; el tiempo de ida y vuelta se llama RTT (es lo que muestra ping)."
   },
   {
    "q": "¿Qué puerto usa SSH por defecto?",
    "a": "22",
    "w": [
     "21",
     "23",
     "25"
    ],
    "e": "SSH usa el puerto 22 para acceso remoto seguro."
   },
   {
    "q": "¿Qué topología conecta todos los nodos a un cable central?",
    "a": "Bus",
    "w": [
     "Estrella",
     "Anillo",
     "Malla"
    ],
    "e": "La topología de Bus usa un 'trunk' o cable principal."
   },
   {
    "q": "¿Qué puerto usa Telnet?",
    "a": "23",
    "w": [
     "21",
     "22",
     "80"
    ],
    "e": "Telnet usa el 23 (no es seguro porque viaja en plano)."
   },
   {
    "q": "¿Qué protocolo permite acceso remoto interactivo cifrado?",
    "a": "SSH",
    "w": [
     "Telnet",
     "RDP",
     "VNC"
    ],
    "e": "SSH reemplaza a Telnet por su seguridad."
   },
   {
    "q": "¿Cuál es la función del comando traceroute?",
    "a": "Muestra la ruta de saltos hasta el destino",
    "w": [
     "Mide velocidad",
     "Configura la IP",
     "Borra la caché DNS"
    ],
    "e": "Traceroute lista los routers por los que pasa el paquete."
   },
   {
    "q": "¿Qué es una VLAN?",
    "a": "Red local virtual lógica sobre switches",
    "w": [
     "Red física separada",
     "Tipo de cable",
     "Protocolo de enrutamiento"
    ],
    "e": "Permite agrupar puertos de switches de forma lógica."
   },
   {
    "q": "¿Qué protocolo descarga correos y los suele borrar del servidor?",
    "a": "POP3",
    "w": [
     "IMAP",
     "SMTP",
     "HTTP"
    ],
    "e": "POP3 descarga los mensajes al cliente local."
   },
   {
    "q": "¿Qué protocolo sincroniza el reloj de los dispositivos?",
    "a": "NTP",
    "w": [
     "SNMP",
     "DHCP",
     "DNS"
    ],
    "e": "Network Time Protocol asegura la precisión horaria."
   },
   {
    "q": "¿Cuántos bits tiene una dirección IPv6?",
    "a": "128",
    "w": [
     "32",
     "64",
     "256"
    ],
    "e": "IPv6 usa 128 bits frente a los 32 de IPv4."
   },
   {
    "q": "¿Qué es el 'Handshake' de tres vías?",
    "a": "Establecimiento de conexión TCP",
    "w": [
     "Proceso de cierre UDP",
     "Inicio de sesión HTTP",
     "Cifrado de datos"
    ],
    "e": "SYN, SYN-ACK, ACK para iniciar sesión TCP."
   },
   {
    "q": "¿Qué capa OSI maneja el direccionamiento físico MAC?",
    "a": "Enlace de Datos",
    "w": [
     "Red",
     "Física",
     "Transporte"
    ],
    "e": "La Capa 2 (Enlace) usa la MAC para entrega local."
   },
   {
    "q": "¿Qué dispositivo amplifica la señal sin mirar datos?",
    "a": "Repetidor",
    "w": [
     "Switch",
     "Router",
     "Bridge"
    ],
    "e": "El repetidor opera en la Capa 1 (Física)."
   },
   {
    "q": "¿Qué puerto usa FTP para control?",
    "a": "21",
    "w": [
     "20",
     "22",
     "23"
    ],
    "e": "FTP usa el 21 para comandos y el 20 para datos."
   },
   {
    "q": "¿Qué es una dirección MAC?",
    "a": "Identificador físico único de la tarjeta de red",
    "w": [
     "IP estática",
     "Protocolo de Apple",
     "Máscara de subred"
    ],
    "e": "Media Access Control, quemada en el hardware."
   },
   {
    "q": "¿En qué puerto UDP escucha un agente SNMP las consultas del gestor?",
    "a": "161",
    "w": [
     "162",
     "443",
     "53"
    ],
    "e": "El agente usa el 161; el 162 es el del gestor, que recibe las alertas (traps)."
   },
   {
    "q": "¿Qué protocolo es 'sin estado' por naturaleza?",
    "a": "HTTP",
    "w": [
     "TCP",
     "FTP",
     "SSH"
    ],
    "e": "HTTP no guarda información entre peticiones (usa cookies)."
   },
   {
    "q": "¿Qué es un Gateway (Puerta de Enlace)?",
    "a": "El router que conecta la LAN con otras redes",
    "w": [
     "Un switch",
     "Un servidor DNS",
     "El cable de red"
    ],
    "e": "Es el punto de salida hacia el exterior (Internet)."
   },
   {
    "q": "¿Qué protocolo permite gestionar dispositivos de red?",
    "a": "SNMP",
    "w": [
     "SMTP",
     "NTP",
     "DHCP"
    ],
    "e": "Simple Network Management Protocol."
   },
   {
    "q": "¿Qué es el Ancho de Banda?",
    "a": "Capacidad máxima de transmisión de datos",
    "w": [
     "Velocidad de CPU",
     "Longitud del cable",
     "Número de puertos"
    ],
    "e": "Cantidad de datos que pueden pasar por segundo."
   },
   {
    "q": "¿Qué indica un código HTTP 404?",
    "a": "Recurso no encontrado",
    "w": [
     "Error interno de servidor",
     "Acceso prohibido",
     "Éxito"
    ],
    "e": "Not Found (Página no encontrada)."
   },
   {
    "q": "¿Qué puerto usa RDP (Escritorio Remoto)?",
    "a": "3389",
    "w": [
     "8080",
     "22",
     "445"
    ],
    "e": "Remote Desktop Protocol de Microsoft."
   },
   {
    "q": "¿Qué es el Jitter?",
    "a": "Variación en el tiempo de llegada de paquetes",
    "w": [
     "Velocidad alta",
     "Pérdida de señal",
     "Cifrado"
    ],
    "e": "Causa cortes en voz y video sobre IP."
   },
   {
    "q": "¿Qué protocolo usa el comando 'nslookup'?",
    "a": "DNS",
    "w": [
     "ICMP",
     "HTTP",
     "ARP"
    ],
    "e": "Se usa para consultar servidores de nombres."
   },
   {
    "q": "¿Qué es un firewall de red?",
    "a": "Filtra tráfico basado en reglas de seguridad",
    "w": [
     "Aumenta velocidad",
     "Genera contraseñas",
     "Limpia virus"
    ],
    "e": "Barrera entre redes de distinta confianza."
   },
   {
    "q": "¿Qué puerto usa el protocolo LDAP?",
    "a": "389",
    "w": [
     "636",
     "25",
     "110"
    ],
    "e": "LDAP usa el 389; con TLS (LDAPS), el 636."
   },
   {
    "q": "¿Qué es la encapsulación?",
    "a": "Agregar cabeceras de protocolo al bajar de capa",
    "w": [
     "Cifrar datos",
     "Comprimir archivos",
     "Borrar logs"
    ],
    "e": "Los datos se envuelven en cabeceras OSI."
   },
   {
    "q": "¿Qué protocolo se usa para acceder a web?",
    "a": "HTTP/HTTPS",
    "w": [
     "FTP",
     "SMTP",
     "SNMP"
    ],
    "e": "HyperText Transfer Protocol."
   },
   {
    "q": "¿Qué es una VPN?",
    "a": "Túnel seguro sobre red pública",
    "w": [
     "Red muy rápida",
     "Red de cables",
     "Virus de red"
    ],
    "e": "Virtual Private Network."
   },
   {
    "q": "¿Qué es Full-Duplex?",
    "a": "En ambos sentidos simultáneamente",
    "w": [
     "Transmisión en un sentido",
     "En ambos sentidos pero no a la vez",
     "Sin cables"
    ],
    "e": "Como una llamada telefónica."
   },
   {
    "q": "¿Qué puerto usa SMB (Compartir archivos)?",
    "a": "445",
    "w": [
     "139",
     "21",
     "22"
    ],
    "e": "Puerto moderno para compartición en Windows."
   },
   {
    "q": "¿Qué es el MTU?",
    "a": "Tamaño máximo de paquete en la red",
    "w": [
     "Velocidad de disco",
     "Tipo de memoria",
     "Protocolo de radio"
    ],
    "e": "Maximum Transmission Unit (típicamente 1500 bytes)."
   },
   {
    "q": "¿Qué hace un servidor Proxy?",
    "a": "Actúa como intermediario de peticiones",
    "w": [
     "Sustituye al router",
     "Crea páginas web",
     "Instala el SO"
    ],
    "e": "Intermedia entre el cliente e Internet."
   },
   {
    "q": "¿Qué es el comando netstat?",
    "a": "Muestra conexiones activas y puertos",
    "w": [
     "Borra archivos",
     "Mide el ping",
     "Cambia la IP"
    ],
    "e": "Muestra estadísticas y estado de la red."
   },
   {
    "q": "¿Qué puerto usa el protocolo IMAP?",
    "a": "143",
    "w": [
     "993",
     "110",
     "25"
    ],
    "e": "Puerto estándar sin cifrar."
   },
   {
    "q": "¿Qué es el PoE?",
    "a": "Alimentación eléctrica sobre cable de datos",
    "w": [
     "Internet por cable eléctrico",
     "Red por fibra",
     "Protocolo de voz"
    ],
    "e": "Power over Ethernet."
   },
   {
    "q": "¿Qué es un SSID?",
    "a": "Nombre de una red inalámbrica",
    "w": [
     "Una contraseña",
     "Tipo de router",
     "Frecuencia de radio"
    ],
    "e": "Service Set Identifier."
   },
   {
    "q": "¿Qué puerto usa MySQL?",
    "a": "3306",
    "w": [
     "5432",
     "1521",
     "80"
    ],
    "e": "Puerto por defecto de bases de datos MySQL."
   },
   {
    "q": "¿Qué es el DHCP Lease?",
    "a": "Tiempo que un host tiene asignada una IP",
    "w": [
     "Compra de router",
     "Velocidad de red",
     "Corte de luz"
    ],
    "e": "Tiempo de concesión de la dirección IP."
   },
   {
    "q": "¿Qué puerto usa PostgreSQL?",
    "a": "5432",
    "w": [
     "3306",
     "8080",
     "27017"
    ],
    "e": "Puerto estándar de esta base de datos."
   },
   {
    "q": "¿Qué es el Half-Duplex?",
    "a": "Ambos sentidos pero no a la vez",
    "w": [
     "Un solo sentido",
     "Ambos sentidos a la vez",
     "Solo video"
    ],
    "e": "Como un Walkie-Talkie."
   },
   {
    "q": "¿Qué protocolo usa TFTP?",
    "a": "UDP",
    "w": [
     "TCP",
     "ICMP",
     "IGMP"
    ],
    "e": "Trivial FTP usa UDP para ser más simple."
   },
   {
    "q": "¿Qué es el TTL en un paquete IP?",
    "a": "Tiempo de vida/Límite de saltos",
    "w": [
     "Velocidad",
     "Tamaño",
     "Prioridad"
    ],
    "e": "Time To Live evita bucles infinitos."
   },
   {
    "q": "¿Qué puerto usa SMTP con TLS implícito (SMTPS)?",
    "a": "465",
    "w": [
     "25",
     "587",
     "110"
    ],
    "e": "El 465 cifra desde el principio; el 587 empieza en claro y pasa a TLS con STARTTLS."
   },
   {
    "q": "¿Qué es el 'loopback' IP?",
    "a": "127.0.0.1",
    "w": [
     "192.168.1.1",
     "8.8.8.8",
     "0.0.0.0"
    ],
    "e": "Dirección para referirse al propio host (localhost)."
   },
   {
    "q": "¿Qué puerto usa POP3 con SSL/TLS?",
    "a": "995",
    "w": [
     "110",
     "143",
     "993"
    ],
    "e": "Puerto para recepción segura."
   },
   {
    "q": "¿Qué es un segmento en la red?",
    "a": "Parte de la red donde los paquetes no cruzan un router",
    "w": [
     "Un cable",
     "Un virus",
     "Una IP pública"
    ],
    "e": "Dominio de colisión o difusión."
   },
   {
    "q": "¿Qué puerto usa HTTP alternativo?",
    "a": "8080",
    "w": [
     "443",
     "22",
     "21"
    ],
    "e": "Muy usado en servidores de aplicaciones."
   },
   {
    "q": "¿Qué es el enrutamiento estático?",
    "a": "Configurado a mano por el administrador",
    "w": [
     "Automático",
     "Usa algoritmos IA",
     "Solo para Wifi"
    ],
    "e": "No cambia salvo intervención manual."
   },
   {
    "q": "¿Qué puerto usa DNS para transferencias de zona?",
    "a": "53 TCP",
    "w": [
     "53 UDP",
     "80 TCP",
     "443 TCP"
    ],
    "e": "DNS usa TCP para transferencias de zona grandes."
   },
   {
    "q": "¿Qué es un Dominio de Colisión?",
    "a": "Área donde puede haber choques de tramas",
    "w": [
     "Toda la red",
     "Un servidor web",
     "Una red segura"
    ],
    "e": "Reducidos drásticamente por los switches."
   },
   {
    "q": "¿Qué puerto usa BGP?",
    "a": "179",
    "w": [
     "110",
     "25",
     "53"
    ],
    "e": "Border Gateway Protocol usa el puerto 179."
   },
   {
    "q": "¿Qué es el comando 'arp -a'?",
    "a": "Muestra la tabla de correspondencia IP-MAC",
    "w": [
     "Borra la IP",
     "Resetea el router",
     "Mide la señal"
    ],
    "e": "Enseña las MAC conocidas en la red local."
   },
   {
    "q": "¿Qué puerto usa SIP (VoIP)?",
    "a": "5060",
    "w": [
     "80",
     "443",
     "22"
    ],
    "e": "Protocolo de inicio de sesión de voz."
   },
   {
    "q": "¿Qué es una IP Pública?",
    "a": "IP visible y accesible desde Internet",
    "w": [
     "192.168.1.5",
     "La MAC del router",
     "Dirección de correo"
    ],
    "e": "Identifica la conexión en la red global."
   },
   {
    "q": "¿Qué puerto usa NTP?",
    "a": "123",
    "w": [
     "53",
     "25",
     "110"
    ],
    "e": "Network Time Protocol."
   },
   {
    "q": "¿Qué es la Máscara de Subred?",
    "a": "Define qué parte de la IP es red y qué parte es host",
    "w": [
     "Oculta la IP",
     "Es la MAC",
     "Una clave Wifi"
    ],
    "e": "Permite saber si un destino es local o remoto."
   }
  ]
 },
 {
  "id": "seguridad",
  "name": "Seguridad de la información",
  "color": "#FDD835",
  "questions": [
   {
    "q": "¿Cuál de los tres pilares de la seguridad (CIA) garantiza que los datos no sean alterados?",
    "a": "Integridad",
    "w": [
     "Confidencialidad",
     "Disponibilidad",
     "Autenticidad"
    ],
    "e": "La Integridad asegura que la información permanezca inalterada y precisa."
   },
   {
    "q": "¿Qué término describe el mensaje original antes de ser cifrado?",
    "a": "Plaintext",
    "w": [
     "Ciphertext",
     "Hash",
     "Clave"
    ],
    "e": "Plaintext o texto plano es el mensaje legible original."
   },
   {
    "q": "¿Qué propiedad de una función hash hace muy difícil encontrar dos entradas distintas con el mismo resultado?",
    "a": "Resistencia a colisiones",
    "w": [
     "Reversibilidad",
     "Velocidad",
     "Efecto avalancha"
    ],
    "e": "Las colisiones existen siempre (hay más entradas posibles que resultados), pero en un buen hash es inviable encontrarlas."
   },
   {
    "q": "En el intercambio de claves Diffie-Hellman, ¿qué se intercambia públicamente?",
    "a": "Valores públicos calculados",
    "w": [
     "La clave privada",
     "La clave simétrica",
     "El mensaje cifrado"
    ],
    "e": "Se intercambian valores para derivar una clave secreta común sin enviarla directamente."
   },
   {
    "q": "¿Qué pilar se logra principalmente mediante el cifrado de datos?",
    "a": "Confidencialidad",
    "w": [
     "Disponibilidad",
     "No repudio",
     "Trazabilidad"
    ],
    "e": "El cifrado protege la Confidencialidad al impedir que terceros lean los datos."
   },
   {
    "q": "¿Qué tecnología vincula una clave pública a una identidad?",
    "a": "Certificado Digital (X.509)",
    "w": [
     "Firma electrónica",
     "Clave de sesión",
     "Token"
    ],
    "e": "Un certificado digital emitido por una CA vincula la identidad a la clave."
   },
   {
    "q": "¿Qué ataque intenta adivinar una contraseña probando todas las combinaciones posibles?",
    "a": "Fuerza Bruta",
    "w": [
     "Phishing",
     "Inyección SQL",
     "Man-in-the-Middle"
    ],
    "e": "Fuerza Bruta prueba metódicamente cada posibilidad."
   },
   {
    "q": "¿Qué garantiza el 'No Repudio'?",
    "a": "Que el autor no pueda negar haberlo enviado",
    "w": [
     "Que el mensaje no cambie",
     "Que sea secreto",
     "Que el sistema no caiga"
    ],
    "e": "El emisor no puede negar la autoría gracias a la firma digital."
   },
   {
    "q": "¿Cuál es la ventaja principal del cifrado simétrico sobre el asimétrico?",
    "a": "Es más rápido",
    "w": [
     "Es más seguro",
     "No necesita claves",
     "Es reversible"
    ],
    "e": "El cifrado simétrico requiere mucho menos procesamiento."
   },
   {
    "q": "¿Qué protocolo de red proporciona cifrado para el acceso web?",
    "a": "TLS/SSL",
    "w": [
     "FTP",
     "HTTP",
     "SNMP"
    ],
    "e": "TLS (sucesor de SSL) proporciona seguridad en HTTPS."
   },
   {
    "q": "¿Qué es un 'Zero-day'?",
    "a": "Vulnerabilidad desconocida por el fabricante",
    "w": [
     "Un virus antiguo",
     "Ataque que dura un día",
     "Cifrado de 0 bits"
    ],
    "e": "Es una vulnerabilidad para la cual no hay parche disponible todavía."
   },
   {
    "q": "¿Qué ataque utiliza información secundaria como el consumo de energía para descifrar claves?",
    "a": "Side-Channel Attack",
    "w": [
     "Phishing",
     "Replay Attack",
     "Social Engineering"
    ],
    "e": "Los ataques de canal lateral analizan el hardware físico."
   },
   {
    "q": "¿Cuál de estos algoritmos es de cifrado asimétrico?",
    "a": "RSA",
    "w": [
     "AES",
     "DES",
     "Blowfish"
    ],
    "e": "RSA es el algoritmo de clave pública más conocido."
   },
   {
    "q": "¿Qué función cumple el Vector de Inicialización (IV)?",
    "a": "Añade aleatoriedad al cifrado",
    "w": [
     "Comprime el archivo",
     "Borra el historial",
     "Identifica al usuario"
    ],
    "e": "El IV evita que patrones idénticos en el plaintext produzcan el mismo ciphertext."
   },
   {
    "q": "¿Qué es el 'Salting' en el almacenamiento de contraseñas?",
    "a": "Añadir datos aleatorios antes de aplicar el hash",
    "w": [
     "Cifrar la base de datos",
     "Cambiar la contraseña cada mes",
     "Limitar intentos de login"
    ],
    "e": "Añadir un 'salt' protege contra ataques de tablas arcoíris (Rainbow Tables)."
   },
   {
    "q": "¿Qué ataque se basa en engañar al usuario para obtener información?",
    "a": "Ingeniería Social",
    "w": [
     "DDoS",
     "Ransomware",
     "Backdoor"
    ],
    "e": "La ingeniería social manipula a las personas para romper la seguridad."
   },
   {
    "q": "¿Qué tipo de malware cifra los archivos y pide un rescate?",
    "a": "Ransomware",
    "w": [
     "Spyware",
     "Trojan",
     "Worm"
    ],
    "e": "Ransomware (secuestro de datos) exige pago para devolver el acceso."
   },
   {
    "q": "¿Qué es la Autenticación de Doble Factor (2FA)?",
    "a": "Validar con algo que sabes y algo que tienes/eres",
    "w": [
     "Usar dos contraseñas",
     "Entrar desde dos PCs",
     "Cifrar dos veces"
    ],
    "e": "Combina dos elementos distintos de verificación."
   },
   {
    "q": "¿Qué algoritmo de hash está considerado inseguro hoy en día?",
    "a": "MD5",
    "w": [
     "SHA-256",
     "SHA-3",
     "Bcrypt"
    ],
    "e": "MD5 es vulnerable a colisiones rápidas y ya no es seguro."
   },
   {
    "q": "¿Qué técnica permite detectar si un archivo ha sido modificado?",
    "a": "Hashing",
    "w": [
     "Compresión",
     "Fragmentación",
     "Virtualización"
    ],
    "e": "Un cambio mínimo en el archivo altera completamente su valor hash."
   },
   {
    "q": "¿Qué es un Honeypot?",
    "a": "Un sistema trampa para atraer atacantes",
    "w": [
     "Un antivirus",
     "Un servidor de backups",
     "Una contraseña maestra"
    ],
    "e": "Se usa para estudiar el comportamiento de los atacantes y proteger la red real."
   },
   {
    "q": "¿Cuál es la longitud mínima recomendada para una clave AES moderna?",
    "a": "128 bits",
    "w": [
     "64 bits",
     "256 bits",
     "512 bits"
    ],
    "e": "AES-128 es el estándar mínimo seguro actual."
   },
   {
    "q": "¿Qué hace un IPS (Intrusion Prevention System)?",
    "a": "Detecta y bloquea ataques",
    "w": [
     "Solo detecta",
     "Limpia correos",
     "Crea backups"
    ],
    "e": "A diferencia del IDS, el IPS actúa para detener la amenaza."
   },
   {
    "q": "¿Qué es el 'Shoulder Surfing'?",
    "a": "Mirar por encima del hombro para ver claves",
    "w": [
     "Hackear una Wifi",
     "Un ataque de denegación",
     "Robar un portátil"
    ],
    "e": "Es una técnica de ingeniería social física."
   },
   {
    "q": "¿Qué es un ataque Replay?",
    "a": "Capturar y retransmitir un mensaje de autenticación",
    "w": [
     "Borrar datos",
     "Un virus que se repite",
     "Llenar el disco"
    ],
    "e": "El atacante reenvía una comunicación válida para ganar acceso."
   },
   {
    "q": "¿Qué asegura que el sistema esté disponible cuando se necesita?",
    "a": "Disponibilidad",
    "w": [
     "Integridad",
     "Confidencialidad",
     "Certificación"
    ],
    "e": "El tercer pilar de la CIA (Availability)."
   },
   {
    "q": "¿Qué es el principio de Menor Privilegio?",
    "a": "Solo dar los permisos necesarios para el trabajo",
    "w": [
     "Dar acceso a todo",
     "No usar contraseñas",
     "Permitir solo lectura"
    ],
    "e": "Reduce la superficie de ataque si una cuenta es comprometida."
   },
   {
    "q": "¿Qué es un ataque Man-in-the-Middle (MitM)?",
    "a": "Un atacante intercepta y altera la comunicación",
    "w": [
     "Un virus en el centro",
     "Un empleado descontento",
     "Fallo de hardware"
    ],
    "e": "El atacante se sitúa entre dos partes que creen hablar en privado."
   },
   {
    "q": "¿Qué es el Phishing?",
    "a": "Pescar datos mediante correos falsos",
    "w": [
     "Ataque a bases de datos",
     "Robar cables",
     "Cifrar la red"
    ],
    "e": "Suplantación de identidad para engañar al usuario."
   },
   {
    "q": "¿Qué es la Criptografía Cuántica?",
    "a": "Uso de física cuántica para asegurar claves",
    "w": [
     "Cifrado con muchos bits",
     "Un procesador rápido",
     "Cifrado militar"
    ],
    "e": "Basada en principios físicos para detectar interceptaciones."
   },
   {
    "q": "¿Qué es el 'Dumpster Diving'?",
    "a": "Buscar información en la basura física",
    "w": [
     "Hackear nubes",
     "Escanear puertos",
     "Cifrar archivos temporales"
    ],
    "e": "Recuperar documentos desechados para obtener datos sensibles."
   },
   {
    "q": "¿Qué es un Rootkit?",
    "a": "Malware oculto que toma control total (root)",
    "w": [
     "Un kit de reparación",
     "Un cable de red",
     "Una partición"
    ],
    "e": "Es muy difícil de detectar porque se oculta en el sistema operativo."
   },
   {
    "q": "¿Qué es un Script Kiddie?",
    "a": "Alguien que usa herramientas de otros sin saber cómo funcionan",
    "w": [
     "Un hacker experto",
     "Un programador",
     "Un niño"
    ],
    "e": "Atacantes novatos que usan 'scripts' automáticos."
   },
   {
    "q": "¿Qué es el CVE?",
    "a": "Common Vulnerabilities and Exposures (Lista pública)",
    "w": [
     "Un virus",
     "Un cifrado",
     "Un protocolo"
    ],
    "e": "Es el estándar para identificar vulnerabilidades conocidas."
   },
   {
    "q": "¿Qué es un ataque DDoS?",
    "a": "Denegación de servicio distribuida",
    "w": [
     "Robo de datos",
     "Borrado de disco",
     "Cifrado lento"
    ],
    "e": "Satura un sistema desde múltiples fuentes a la vez."
   },
   {
    "q": "¿Qué es el Sandboxing?",
    "a": "Ejecutar programas en entorno aislado y seguro",
    "w": [
     "Jugar en la red",
     "Limpiar el PC",
     "Cifrado de archivos"
    ],
    "e": "Evita que un malware afecte al resto del sistema."
   },
   {
    "q": "¿Qué es el WPA3?",
    "a": "Protocolo moderno de seguridad Wifi",
    "w": [
     "Un puerto",
     "Un tipo de cable",
     "Un servidor"
    ],
    "e": "Mejora sustancial sobre WPA2 en protección inalámbrica."
   },
   {
    "q": "¿Qué es la Esteganografía?",
    "a": "Ocultar mensajes dentro de otros archivos (ej. imágenes)",
    "w": [
     "Cifrado fuerte",
     "Estudio de virus",
     "Un tipo de disco"
    ],
    "e": "A diferencia del cifrado, aquí se oculta la existencia del mensaje."
   },
   {
    "q": "¿Qué es un 'Backdoor'?",
    "a": "Una puerta trasera de acceso no autorizada",
    "w": [
     "Un cable secundario",
     "Una copia",
     "Un fallo de RAM"
    ],
    "e": "Permite al atacante volver a entrar saltándose la seguridad normal."
   },
   {
    "q": "¿Qué es un Exploit?",
    "a": "Software que aprovecha una vulnerabilidad",
    "w": [
     "Un virus",
     "Un disco duro",
     "Un firewall"
    ],
    "e": "Es el código o herramienta que ejecuta el ataque."
   },
   {
    "q": "¿Qué es la seguridad física?",
    "a": "Protección de hardware, edificios y personal",
    "w": [
     "Poner contraseñas",
     "Hacer ejercicio",
     "Antivirus"
    ],
    "e": "Incluye cámaras, guardias y cerraduras."
   },
   {
    "q": "¿Qué es el SIEM?",
    "a": "Gestión de eventos e información de seguridad",
    "w": [
     "Un cifrado",
     "Un router",
     "Una marca de PC"
    ],
    "e": "Centraliza logs y alertas para detectar amenazas."
   },
   {
    "q": "¿Qué es el Spoofing?",
    "a": "Suplantación de identidad técnica (IP, MAC, DNS)",
    "w": [
     "Borrar datos",
     "Un ataque de ruido",
     "Cifrar cables"
    ],
    "e": "Hacerse pasar por una entidad de confianza en la red."
   },
   {
    "q": "¿Qué es el Bluejacking?",
    "a": "Enviar mensajes no solicitados vía Bluetooth",
    "w": [
     "Robar un coche",
     "Hackear una radio",
     "Cifrar el teclado"
    ],
    "e": "Ataque clásico sobre protocolos inalámbricos de corto alcance."
   }
  ]
 },
 {
  "id": "gestion",
  "name": "Gestión y protección",
  "color": "#5E35B1",
  "questions": [
   {
    "q": "¿Qué significa el concepto de 'Gobernanza de TI'?",
    "a": "Un marco que asegura que el departamento de TI soporte las metas estratégicas de la organización",
    "w": [
     "Instalar software de control",
     "Que el jefe de TI mande sobre todos",
     "Comprar los equipos más caros"
    ],
    "e": "La gobernanza de TI alinea la tecnología con la estrategia del negocio para maximizar el valor."
   },
   {
    "q": "¿Cuál es el propósito principal de una política de 'Escritorio Limpio'?",
    "a": "Reducir el riesgo de brechas de seguridad al no dejar información sensible a la vista",
    "w": [
     "Que el servicio de limpieza no toque los cables",
     "Ahorrar espacio en la oficina",
     "Que las mesas duren más tiempo"
    ],
    "e": "Evita que extraños o personal no autorizado vean contraseñas escritas o documentos confidenciales."
   },
   {
    "q": "¿Qué significan las siglas RPO (Recovery Point Objective)?",
    "a": "La cantidad máxima de datos que una organización está dispuesta a perder tras un incidente (tiempo atrás)",
    "w": [
     "Punto de retorno al trabajo",
     "El tiempo que se tarda en encender los servidores",
     "El coste de la recuperación"
    ],
    "e": "El RPO define la antigüedad de los datos que deben recuperarse (ej. copias de hace 1 hora vs hace 24 horas)."
   },
   {
    "q": "¿Qué es el RTO (Recovery Time Objective)?",
    "a": "El tiempo máximo permitido para restaurar un proceso de negocio tras un fallo",
    "w": [
     "El registro total de operaciones",
     "La revisión técnica de objetos",
     "El tiempo que dura una copia de seguridad"
    ],
    "e": "Es el tiempo que el negocio puede estar 'parado' antes de que las consecuencias sean inaceptables."
   },
   {
    "q": "¿Cuál es el primer paso en un proceso de Gestión de Riesgos?",
    "a": "Identificación de los activos y las amenazas",
    "w": [
     "Comprar un seguro",
     "Apagar los sistemas vulnerables",
     "Despedir al responsable"
    ],
    "e": "No se puede proteger lo que no se sabe que se tiene o de qué peligros se defiende."
   },
   {
    "q": "¿Qué es un BCP (Business Continuity Plan)?",
    "a": "Un plan logístico para que la empresa siga funcionando durante y después de un desastre",
    "w": [
     "Un plan de beneficios sociales",
     "Un programa para hacer copias de seguridad",
     "El presupuesto anual de TI"
    ],
    "e": "El Plan de Continuidad de Negocio se enfoca en mantener las operaciones críticas vivas ante cualquier interrupción."
   },
   {
    "q": "¿Cuál es la diferencia entre un BCP y un DRP?",
    "a": "El BCP es para el negocio global; el DRP (Disaster Recovery Plan) se enfoca en la recuperación técnica de TI",
    "w": [
     "Son lo mismo",
     "El DRP es solo para incendios",
     "El BCP es para el jefe y el DRP para los técnicos"
    ],
    "e": "El DRP es una parte del BCP centrada específicamente en la infraestructura tecnológica."
   },
   {
    "q": "¿Qué es el 'Análisis de Impacto al Negocio' (BIA)?",
    "a": "Un estudio para determinar qué procesos son críticos y las consecuencias de su interrupción",
    "w": [
     "Ver cuánto dinero se ha ganado",
     "Una auditoría de software",
     "Medir la velocidad de la red"
    ],
    "e": "El BIA ayuda a priorizar qué sistemas deben recuperarse primero en caso de desastre."
   },
   {
    "q": "¿Qué se busca con la Gestión de Parches?",
    "a": "Mantener el software actualizado para corregir vulnerabilidades y errores",
    "w": [
     "Que el sistema operativo sea más bonito",
     "Ahorrar espacio en disco",
     "Hacer que el PC vaya más lento"
    ],
    "e": "Tener sistemas sin parchear es una de las mayores causas de infecciones por malware y ataques."
   },
   {
    "q": "¿Qué es un 'Hot Site' en recuperación de desastres?",
    "a": "Un centro de respaldo totalmente equipado y con los datos actualizados listo para funcionar casi al instante",
    "w": [
     "Una oficina con calefacción",
     "Un sitio web muy visitado",
     "Una sala de servidores con mala ventilación"
    ],
    "e": "Es la opción más cara pero la que ofrece el menor tiempo de recuperación (RTO)."
   },
   {
    "q": "¿Qué es un 'Cold Site'?",
    "a": "Un almacén vacío con conexiones básicas pero sin hardware preconfigurado",
    "w": [
     "Una oficina en el polo norte",
     "Una copia de seguridad en la nube",
     "Un servidor apagado"
    ],
    "e": "Tarda días o semanas en estar operativo porque hay que enviar y configurar el equipo primero."
   },
   {
    "q": "¿Cuál es la función de un Acuerdo de Nivel de Servicio (SLA)?",
    "a": "Contrato que especifica el nivel de servicio esperado (disponibilidad, tiempos de respuesta) entre proveedor y cliente",
    "w": [
     "Definir el precio del hardware",
     "Un manual de usuario",
     "La garantía de un portátil"
    ],
    "e": "El SLA establece penalizaciones si el proveedor no cumple con la calidad o tiempos prometidos."
   },
   {
    "q": "¿Qué es la 'Segregación de Funciones'?",
    "a": "Dividir tareas críticas entre varias personas para evitar fraudes o errores",
    "w": [
     "Trabajar en habitaciones separadas",
     "Que cada uno use un sistema operativo distinto",
     "Separar el correo personal del profesional"
    ],
    "e": "Ejemplo: Quien solicita una compra no debe ser quien la autorice ni quien realice el pago."
   },
   {
    "q": "¿Qué significa 'Shadow IT'?",
    "a": "Hardware o software utilizado en la empresa sin la aprobación o conocimiento del departamento de TI",
    "w": [
     "Usar el PC a oscuras",
     "Un tipo de virus espía",
     "Los servidores que están en el sótano"
    ],
    "e": "Supone un riesgo de seguridad porque TI no puede proteger ni parchear lo que no conoce."
   },
   {
    "q": "¿Qué es la Gestión de Activos (Asset Management)?",
    "a": "El inventario y control de todos los recursos de hardware y software de la organización",
    "w": [
     "Vender los ordenadores viejos",
     "Invertir en bolsa",
     "Limpiar los teclados"
    ],
    "e": "Saber qué tenemos es vital para el cumplimiento de licencias y para la seguridad."
   },
   {
    "q": "¿Qué es una 'Auditoría de TI'?",
    "a": "Una evaluación independiente de los controles, políticas y operaciones de tecnología",
    "w": [
     "Un examen para ver si los empleados trabajan",
     "Contar cuántos ratones hay",
     "Formatear todos los PCs"
    ],
    "e": "Verifica que se están cumpliendo las normas y que los controles de seguridad funcionan."
   },
   {
    "q": "¿Qué es el ciclo PDCA en gestión de calidad y seguridad?",
    "a": "Plan (Planificar), Do (Hacer), Check (Verificar), Act (Actuar)",
    "w": [
     "Procesar, Datos, Cifrar, Archivar",
     "Power, Display, Control, Alt",
     "Es un tipo de cable de red"
    ],
    "e": "Es la base de la mejora continua en normas como la ISO 27001."
   },
   {
    "q": "¿Cuál es el objetivo de la 'Gestión de Cambios'?",
    "a": "Asegurar que los cambios en los sistemas se realicen de forma controlada y documentada para evitar interrupciones",
    "w": [
     "Comprar equipos nuevos cada mes",
     "Cambiar al director de TI",
     "Instalar actualizaciones sin avisar"
    ],
    "e": "Evita que un cambio 'improvisado' tumbe un servicio crítico por falta de pruebas."
   },
   {
    "q": "¿Qué es la 'Concienciación en Seguridad'?",
    "a": "Entrenar y educar a los empleados para que reconozcan amenazas como el Phishing",
    "w": [
     "Poner antivirus a todos",
     "Obligar a cambiar la clave cada día",
     "Cerrar internet a los usuarios"
    ],
    "e": "El usuario es el eslabón más débil; la formación es la mejor defensa."
   },
   {
    "q": "¿Qué es el BYOD (Bring Your Own Device)?",
    "a": "Política que permite a los empleados usar sus propios dispositivos personales para trabajar",
    "w": [
     "Comprar un PC para cada empleado",
     "Un tipo de conector de video",
     "Tirar los dispositivos viejos"
    ],
    "e": "Ofrece comodidad pero complica mucho la seguridad de los datos corporativos."
   },
   {
    "q": "¿Qué es el 'Escalamiento' en la gestión de incidentes?",
    "a": "Pasar un problema a un nivel técnico superior o a la dirección si no se resuelve",
    "w": [
     "Subir los servidores al piso de arriba",
     "Comprar más memoria RAM",
     "Gritar al servicio técnico"
    ],
    "e": "Asegura que los problemas graves reciban la atención y recursos necesarios."
   },
   {
    "q": "¿Qué es la Gestión de Incidentes?",
    "a": "El proceso de restaurar el servicio normal lo más rápido posible tras una interrupción",
    "w": [
     "Evitar que pasen cosas malas",
     "Castigar al culpable de un fallo",
     "Escribir un libro sobre fallos"
    ],
    "e": "Se centra en la rapidez de respuesta más que en encontrar la causa raíz (eso es gestión de problemas)."
   },
   {
    "q": "¿Cuál es la diferencia entre un Incidente y un Problema en ITIL?",
    "a": "El incidente es una interrupción puntual; el problema es la causa raíz desconocida de uno o más incidentes",
    "w": [
     "Son lo mismo",
     "El problema es más grave que el incidente",
     "El incidente es de hardware y el problema de software"
    ],
    "e": "Resolver el problema evita que el incidente vuelva a ocurrir."
   },
   {
    "q": "¿Qué es un 'Análisis de Riesgos Cuantitativo'?",
    "a": "Asignar valores numéricos y monetarios a los riesgos y posibles pérdidas",
    "w": [
     "Ver si el riesgo es alto o bajo",
     "Preguntar a los expertos qué opinan",
     "Contar cuántos virus hay"
    ],
    "e": "Permite calcular exactamente cuánto dinero deberíamos invertir en protección (ROI de seguridad)."
   },
   {
    "q": "¿Qué es el 'Riesgo Residual'?",
    "a": "El riesgo que permanece después de haber implementado controles de seguridad",
    "w": [
     "El riesgo que desaparece tras comprar un firewall",
     "El riesgo de que se rompa un cable",
     "El riesgo de las empresas pequeñas"
    ],
    "e": "El riesgo nunca es cero; la dirección debe decidir si acepta el riesgo residual."
   },
   {
    "q": "¿Qué significa 'Mitigar' un riesgo?",
    "a": "Implementar medidas para reducir su probabilidad o impacto",
    "w": [
     "Ignorarlo",
     "Pasárselo a otra empresa",
     "Eliminar el activo"
    ],
    "e": "Ejemplo: Poner un extintor mitiga el impacto de un posible incendio."
   },
   {
    "q": "¿Qué significa 'Transferir' un riesgo?",
    "a": "Pasar la responsabilidad o el coste del impacto a un tercero, como un seguro",
    "w": [
     "Mover el servidor de sitio",
     "Cambiar de sistema operativo",
     "Dárselo al departamento de contabilidad"
    ],
    "e": "Contratar un seguro de ciberriesgo es la forma más común de transferir el riesgo."
   },
   {
    "q": "¿Qué es el 'Control de Acceso Basado en Roles' (RBAC)?",
    "a": "Asignar permisos según la función del empleado en la empresa, no por nombre individual",
    "w": [
     "Que cada uno elija su clave",
     "Solo permitir el acceso desde la oficina",
     "Que los jefes tengan las llaves físicas"
    ],
    "e": "Facilita la gestión: si entra un nuevo administrativo, se le asigna el rol 'Administrativo' y ya tiene todos sus permisos."
   },
   {
    "q": "¿Qué es un 'Plan de Gestión de Crisis'?",
    "a": "Protocolo para la comunicación y toma de decisiones durante un evento que amenaza la reputación o viabilidad de la empresa",
    "w": [
     "Un plan para pedir dinero",
     "Un programa para evitar que la bolsa baje",
     "El despido masivo de empleados"
    ],
    "e": "Se enfoca en la comunicación con medios, clientes y empleados durante un desastre."
   },
   {
    "q": "¿Qué es la 'Debida Diligencia' (Due Diligence)?",
    "a": "La investigación y acciones que una empresa debe realizar para cumplir con los requisitos legales o antes de firmar contratos",
    "w": [
     "Trabajar muchas horas",
     "Pagar las facturas a tiempo",
     "Ser amable con los clientes"
    ],
    "e": "Asegura que la empresa conoce los riesgos antes de tomar una decisión importante."
   },
   {
    "q": "¿Qué es el 'Cuidado Debido' (Due Care)?",
    "a": "El cumplimiento de las responsabilidades legales y éticas para proteger a los demás y a los activos",
    "w": [
     "Limpiar los equipos con cuidado",
     "No usar el PC bajo la lluvia",
     "Tener cuidado al escribir contraseñas"
    ],
    "e": "Es el estándar de comportamiento esperado de una persona u organización responsable (ej. poner un firewall)."
   },
   {
    "q": "¿Qué es un 'Acuerdo de Confidencialidad' (NDA)?",
    "a": "Un contrato legal donde las partes se comprometen a no revelar información secreta",
    "w": [
     "Un contrato para no trabajar en otra empresa",
     "Un tipo de licencia de software libre",
     "La política de privacidad de Facebook"
    ],
    "e": "Es fundamental al contratar consultores externos o empleados con acceso a datos sensibles."
   }
  ]
 },
 {
  "id": "normativas",
  "name": "Normativas y políticas",
  "color": "#FB8C00",
  "questions": [
   {
    "q": "¿Cuál de los siguientes es el objetivo principal de la implementación de un Sistema de Gestión de Seguridad de la Información (SGSI) basado en ISO/IEC 27001?",
    "a": "Preservar la confidencialidad, integridad y disponibilidad de la información",
    "w": [
     "Eliminar el 100% de los riesgos de seguridad",
     "Garantizar el cumplimiento del GDPR en todos los casos",
     "Minimizar los costos de seguridad de la información"
    ],
    "e": "El objetivo central de la ISO 27001 es la gestión y preservación de los tres pilares de la seguridad (CIA)."
   },
   {
    "q": "¿En qué fase del ciclo PDCA de ISO/IEC 27001 se lleva a cabo la evaluación del desempeño y el seguimiento de los objetivos del SGSI?",
    "a": "Verificar (Check)",
    "w": [
     "Planificar (Plan)",
     "Hacer (Do)",
     "Actuar (Act)"
    ],
    "e": "La fase de Verificación incluye la auditoría interna, la revisión por la dirección y la evaluación del desempeño."
   },
   {
    "q": "Según el RGPD, ¿cuál es el plazo máximo para que el responsable del tratamiento notifique a la autoridad de control una violación de seguridad de los datos personales?",
    "a": "72 horas",
    "w": [
     "24 horas",
     "7 días naturales",
     "30 días naturales"
    ],
    "e": "El plazo es de 72 horas a partir de que se tenga constancia de la brecha."
   },
   {
    "q": "¿Qué significa la sigla PIA en el contexto de la protección de datos personales?",
    "a": "Privacy Impact Assessment (Evaluación de Impacto en la Privacidad)",
    "w": [
     "Personal Information Audit",
     "Platform Integration Assessment",
     "Policy Implementation Action"
    ],
    "e": "El PIA (o EIPD) es el análisis de riesgos asociado a un tratamiento de datos."
   },
   {
    "q": "¿Qué establece el Principio de Minimización de Datos según el RGPD?",
    "a": "Los datos solo deben ser tratados si son pertinentes, adecuados y limitados a lo necesario para los fines del tratamiento",
    "w": [
     "Los datos deben conservarse durante el menor tiempo posible",
     "Los datos deben ser tratados con fines específicos y legítimos",
     "Los datos deben ser tratados de forma transparente"
    ],
    "e": "El principio de Minimización se centra en la cantidad y relevancia de los datos recogidos."
   },
   {
    "q": "¿Qué derecho del interesado según el RGPD permite al usuario solicitar que sus datos personales sean borrados sin dilación indebida?",
    "a": "Derecho de Supresión (Derecho al Olvido)",
    "w": [
     "Derecho de Oposición",
     "Derecho de Portabilidad",
     "Derecho de Rectificación"
    ],
    "e": "El Derecho de Supresión es comúnmente conocido como Derecho al Olvido."
   },
   {
    "q": "¿Qué es un DPO (Data Protection Officer) según el RGPD?",
    "a": "Un responsable designado para informar, asesorar y supervisar el cumplimiento de la normativa de protección de datos",
    "w": [
     "El CEO de la empresa",
     "El responsable de las copias de seguridad",
     "El jefe de TI"
    ],
    "e": "El DPO (Delegado de Protección de Datos) es la figura clave en el cumplimiento interno del RGPD."
   },
   {
    "q": "¿Cuál es la principal función de una Autoridad de Control (ej. AEPD en España) en el marco del RGPD?",
    "a": "Supervisar y hacer cumplir la aplicación del RGPD",
    "w": [
     "Emitir certificados de seguridad",
     "Implementar el SGSI de las empresas",
     "Otorgar licencias de software"
    ],
    "e": "La Autoridad de Control es el organismo regulador independiente."
   },
   {
    "q": "¿Qué establece el concepto de Privacidad por Diseño y por Defecto?",
    "a": "Los productos y servicios deben incluir la configuración de privacidad más estricta por defecto y desde el diseño inicial",
    "w": [
     "La privacidad debe ser una opción del usuario",
     "La privacidad es responsabilidad del usuario final",
     "Se aplica solo después de una brecha de datos"
    ],
    "e": "Se exige que la privacidad sea integrada desde las etapas iniciales de desarrollo."
   },
   {
    "q": "¿Qué política de seguridad define las reglas para la creación, protección y uso de contraseñas por parte de los usuarios?",
    "a": "Política de Contraseñas",
    "w": [
     "Política de Uso Aceptable (PUA)",
     "Política de Control de Acceso",
     "Política de Copias de Seguridad"
    ],
    "e": "La Política de Contraseñas establece requisitos como la longitud mínima y la complejidad."
   },
   {
    "q": "¿Qué tipo de modelo de control de acceso utiliza una lista de control de acceso (ACL) para determinar quién puede acceder a un recurso (ej. el propietario decide)?",
    "a": "DAC (Discretionary Access Control)",
    "w": [
     "MAC (Mandatory Access Control)",
     "RBAC (Role-Based Access Control)",
     "ABAC (Attribute-Based Access Control)"
    ],
    "e": "El DAC permite al propietario del recurso transferir o revocar permisos a su discreción."
   },
   {
    "q": "¿Qué modelo de control de acceso es el más común en entornos empresariales grandes y asigna permisos a los usuarios basándose en sus funciones o trabajos?",
    "a": "RBAC (Role-Based Access Control)",
    "w": [
     "DAC",
     "MAC",
     "ABAC"
    ],
    "e": "El RBAC simplifica la gestión de permisos en entornos complejos."
   },
   {
    "q": "¿Qué mecanismo permite iniciar sesión una vez y acceder a varias aplicaciones sin volver a escribir las credenciales (por ejemplo, «Iniciar sesión con Google»)?",
    "a": "SSO (Single Sign-On)",
    "w": [
     "MFA",
     "LDAP",
     "Kerberos"
    ],
    "e": "El SSO mejora la comodidad del usuario y la gestión de identidades."
   },
   {
    "q": "¿Qué protocolo se utiliza principalmente para consultar y modificar la información de un servicio de directorio distribuido (ej. Active Directory)?",
    "a": "LDAP (Lightweight Directory Access Protocol)",
    "w": [
     "Kerberos",
     "RADIUS",
     "TACACS+"
    ],
    "e": "LDAP es el protocolo estándar para consultar servicios de directorio como Active Directory."
   },
   {
    "q": "¿Qué técnica de endurecimiento (hardening) implica eliminar o desactivar servicios, protocolos o puertos innecesarios de un sistema?",
    "a": "Desactivación de servicios innecesarios",
    "w": [
     "Segmentación de red",
     "Patch Management",
     "Configuración de RAID"
    ],
    "e": "La desactivación de servicios reduce la superficie de ataque del sistema."
   },
   {
    "q": "¿Cuál es la finalidad de la Gestión de la Configuración en la seguridad de TI?",
    "a": "Asegurar que los sistemas se mantengan en un estado seguro y consistente a lo largo del tiempo, cumpliendo con la línea base de seguridad",
    "w": [
     "Gestionar las contraseñas de los usuarios",
     "Auditar las redes inalámbricas",
     "Realizar copias de seguridad"
    ],
    "e": "La Gestión de la Configuración mantiene la seguridad de los sistemas a lo largo de su ciclo de vida."
   },
   {
    "q": "¿Qué es un Activo de Información en el contexto de la seguridad?",
    "a": "Cualquier dato, hardware, software, o servicio que tenga valor para la organización y que requiera protección",
    "w": [
     "Solo el software de la empresa",
     "Exclusivamente los servidores",
     "Las vulnerabilidades de seguridad"
    ],
    "e": "Los Activos son aquello que debe protegerse de acuerdo con los criterios CIA."
   },
   {
    "q": "¿Qué es una vulnerabilidad?",
    "a": "Una debilidad o fallo en un sistema que puede ser explotada por una amenaza",
    "w": [
     "Un ataque de malware",
     "Una política de seguridad",
     "Un método de cifrado"
    ],
    "e": "Una vulnerabilidad es una puerta de entrada para una amenaza."
   },
   {
    "q": "¿Qué proceso asegura que un cambio propuesto en un sistema de TI (ej. una actualización de firmware o un nuevo router) sea probado y aprobado antes de su implementación?",
    "a": "Gestión de Cambios",
    "w": [
     "Gestión de Incidentes",
     "Gestión de Activos",
     "Gestión de Vulnerabilidades"
    ],
    "e": "La Gestión de Cambios minimiza los riesgos de introducir fallos o vulnerabilidades en producción."
   },
   {
    "q": "¿Qué es la línea base de seguridad (Security Baseline) de un sistema?",
    "a": "El conjunto de configuraciones mínimas obligatorias y seguras que debe tener un sistema o componente antes de entrar en producción",
    "w": [
     "El nivel de seguridad después de un breach",
     "El firewall principal",
     "El hardware más antiguo de la red"
    ],
    "e": "La Línea Base define el nivel de seguridad esperado."
   },
   {
    "q": "¿Qué término describe el proceso de aplicar una estrategia de seguridad mediante el uso de múltiples capas de controles de seguridad?",
    "a": "Defensa en Profundidad (Defense in Depth)",
    "w": [
     "Zero Trust",
     "Single Sign-On",
     "Least Privilege"
    ],
    "e": "La Defensa en Profundidad garantiza que, si una capa de seguridad falla, las siguientes lo detengan."
   },
   {
    "q": "¿Qué política de seguridad define el comportamiento aceptable de los usuarios al utilizar los recursos de TI de la organización (ej. prohibición de software ilegal, uso personal limitado)?",
    "a": "Política de Uso Aceptable (PUA)",
    "w": [
     "Política de Contraseñas",
     "Política de Datos Abiertos",
     "Política de Recuperación ante Desastres"
    ],
    "e": "La PUA establece las expectativas de comportamiento ético y legal de los usuarios."
   },
   {
    "q": "¿Qué tipo de política de seguridad rige el uso de smartphones y tabletas personales que se conectan a la red corporativa?",
    "a": "BYOD (Bring Your Own Device) Policy",
    "w": [
     "Clean Desk Policy",
     "Política de Patch Management",
     "Política de Control de Acceso Físico"
    ],
    "e": "La política BYOD aborda los riesgos de seguridad derivados del uso de dispositivos personales."
   },
   {
    "q": "¿Cuál de los siguientes es un requisito clave para cumplir con el principio de Responsabilidad Proactiva (Accountability) del RGPD?",
    "a": "Demostrar que se han implementado medidas técnicas y organizativas adecuadas para garantizar el cumplimiento",
    "w": [
     "No registrar ninguna actividad de usuario",
     "Externalizar toda la gestión de datos",
     "No realizar copias de seguridad"
    ],
    "e": "La Responsabilidad Proactiva obliga a la organización a documentar y demostrar su cumplimiento."
   },
   {
    "q": "¿Qué documento debe tener un Responsable de Tratamiento para justificar que se han evaluado los riesgos y el impacto de una actividad de tratamiento de datos de alto riesgo?",
    "a": "La Evaluación de Impacto en la Protección de Datos (EIPD o DPIA)",
    "w": [
     "La política de backup",
     "El certificado de ISO 9001",
     "La política de hardware"
    ],
    "e": "La EIPD/DPIA es obligatoria para tratamientos de alto riesgo."
   },
   {
    "q": "¿Qué mecanismo de seguridad busca evitar la exposición de la arquitectura de red y las versiones de software de los servicios públicos?",
    "a": "Supresión de Banners",
    "w": [
     "Packet Sniffing",
     "NAT",
     "DNS Poisoning"
    ],
    "e": "Suprimir o falsear los banners impide que un atacante averigüe el software y la versión con la técnica de «banner grabbing»."
   },
   {
    "q": "¿Qué es una VPC (Virtual Private Cloud) en el contexto de un proveedor de nube pública?",
    "a": "Un segmento de red lógicamente aislado dentro de la nube pública que funciona como una red privada",
    "w": [
     "Un servidor privado dedicado en la nube",
     "Un tipo de VPN de sitio a sitio",
     "Un servicio de almacenamiento"
    ],
    "e": "Una VPC proporciona al cliente control total sobre la configuración de red virtual."
   },
   {
    "q": "¿Qué método de seguridad se recomienda en una LAN para evitar que dispositivos no autorizados se conecten a los puertos físicos de un switch?",
    "a": "Seguridad de Puertos (Port Security)",
    "w": [
     "DHCP Snooping",
     "ARP Snooping",
     "Spanning Tree Protocol"
    ],
    "e": "La Seguridad de Puertos restringe las direcciones MAC permitidas por puerto."
   },
   {
    "q": "¿Cuál es el principal riesgo si una organización no implementa el cifrado de datos?",
    "a": "Pérdida de Confidencialidad en caso de acceso no autorizado",
    "w": [
     "Fallos de hardware",
     "Baja velocidad de red",
     "Pérdida de Integridad"
    ],
    "e": "El cifrado es el control primario para garantizar la Confidencialidad."
   },
   {
    "q": "¿Qué norma establece los requisitos para un SGSI y es certificable a nivel internacional?",
    "a": "ISO/IEC 27001",
    "w": [
     "RGPD",
     "LOPD",
     "PCI DSS"
    ],
    "e": "ISO/IEC 27001 es el estándar internacional para el Sistema de Gestión de Seguridad de la Información."
   },
   {
    "q": "¿Qué se conoce como el Acta de Auditoría?",
    "a": "El registro formal de los hallazgos, las conclusiones y las recomendaciones de una auditoría de seguridad",
    "w": [
     "El informe final de gestión de incidentes",
     "La política de privacidad",
     "La lista de activos de la organización"
    ],
    "e": "El Acta de Auditoría (o Informe de Auditoría) es el producto final del proceso de auditoría."
   }
  ]
 }
];
})(typeof self !== 'undefined' ? self : this);
if (typeof module === 'object' && module.exports) module.exports = (typeof self !== 'undefined' ? self : this).CI_TRIVIAL;
