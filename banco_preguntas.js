const bancoPreguntas = [
  {
    q: "Un compilador y un editor de código sirven para hacer otros programas. ¿Qué tipo de software son?",
    c: { t: "Software de desarrollo.", f: "Correcto. Son herramientas que los programadores usan para crear y probar nuevos programas." },
    i: [
      { t: "Software de aplicación.", f: "Incorrecto. Este se usa para tareas diarias de los usuarios, como navegadores o juegos." },
      { t: "Software de sistema.", f: "Incorrecto. Este sirve para administrar físicamente la computadora (ej. Windows)." },
      { t: "Hardware externo.", f: "Incorrecto. El hardware son las partes físicas que puedes tocar de la computadora." }
    ]
  },
  {
    q: "La máquina de Turing se imaginó en 1936 y la ENIAC se construyó después. ¿Qué diferencia importante hay entre ellas?",
    c: { t: "Turing dio la teoría y ENIAC fue la máquina electrónica real.", f: "Correcto. Turing sentó las bases teóricas de cómo funcionaría una computadora y ENIAC ya fue un equipo electrónico físico." },
    i: [
      { t: "Turing era una computadora personal y ENIAC un sistema operativo.", f: "Incorrecto. En esa época no existían las computadoras personales ni los sistemas operativos modernos." },
      { t: "Turing se hizo para reducir el tamaño de ENIAC.", f: "Incorrecto. La máquina de Turing fue antes, y era un concepto, no un intento de hacer más pequeña a ENIAC." },
      { t: "Turing solo era para militares y ENIAC para escuelas.", f: "Incorrecto. Ambas estaban alejadas del uso escolar en sus inicios, pero Turing era principalmente un concepto matemático." }
    ]
  },
  {
    q: "Si muy pocos países o empresas controlan casi toda la tecnología, ¿qué problema causa esto?",
    c: { t: "Crea dependencia y hace más grande la desigualdad entre los que tienen tecnología y los que no.", f: "Correcto. Si solo unos pocos tienen el control, las regiones menos desarrolladas se vuelven dependientes y se quedan atrás." },
    i: [
      { t: "Hace que todos los países tengan la misma tecnología por igual.", f: "Incorrecto. Pasa lo contrario: se concentra la riqueza y los recursos solo en los países creadores." },
      { t: "Resuelve los problemas de privacidad en el mundo.", f: "Incorrecto. De hecho, aumenta los riesgos de privacidad porque estas pocas empresas controlan toda la información." },
      { t: "Impide que se puedan hacer nuevas computadoras.", f: "Incorrecto. Se siguen haciendo, pero el control sobre ellas sigue concentrado." }
    ]
  },
  {
    q: "En los años 50 y 60, los programadores compartían su código libremente. ¿Qué provocó que naciera el movimiento del software libre después?",
    c: { t: "Las empresas empezaron a prohibir copiar o modificar los programas.", f: "Correcto. El software se volvió un negocio cerrado y con licencias restrictivas, por lo que el software libre nació como protesta." },
    i: [
      { t: "Se eliminaron los derechos de autor en el mundo informático.", f: "Incorrecto. Al contrario, los derechos de autor se usaron más fuerte para prohibir compartir los programas." },
      { t: "Se prohibió usar computadoras en las escuelas.", f: "Incorrecto. Las computadoras en las universidades siguieron existiendo; el problema fue que los programas ya no se podían estudiar." },
      { t: "El internet dejó de funcionar en los laboratorios.", f: "Incorrecto. El motivo fue un tema legal de licencias, no una falla técnica del internet." }
    ]
  },
  {
    q: "¿Qué hace especial a la licencia AGPL comparada con la GPL normal cuando un programa está en internet?",
    c: { t: "Te obliga a mostrar el código fuente aunque el programa solo se use como un servicio en una página web.", f: "Correcto. La AGPL asegura que si alguien ofrece el software como un servicio web, también debe compartir los cambios que hizo al código." },
    i: [
      { t: "Te deja esconder el código si las personas no descargan la aplicación.", f: "Incorrecto. Esa es justo la laguna legal que cubre la AGPL; no te permite esconder el código en servicios web." },
      { t: "Prohíbe usar el programa en servidores de internet.", f: "Incorrecto. Sí se puede usar, pero la condición es compartir el código si lo ofreces al público." },
      { t: "Te cobra dinero por cada usuario que entre a tu página.", f: "Incorrecto. Las licencias libres no tratan sobre cobrar por usuario, sino de los permisos sobre el código." }
    ]
  },
  {
    q: "Si un dibujo tiene licencia CC BY y quieres modificarlo para un proyecto para venderlo, ¿qué debes hacer?",
    c: { t: "Darle crédito al creador original de la obra.", f: "Correcto. La licencia BY significa 'Atribución'. Puedes modificarlo y venderlo, pero siempre debes reconocer quién lo hizo primero." },
    i: [
      { t: "No puedes modificar el dibujo de ninguna manera.", f: "Incorrecto. La que prohíbe modificaciones es la licencia ND (No Derivadas), no la BY." },
      { t: "Compartir tu nuevo proyecto con la misma licencia exacta.", f: "Incorrecto. Esa regla es de la licencia SA (Compartir Igual). Con solo BY no estás obligado a usar la misma licencia." },
      { t: "Está prohibido usarlo para ganar dinero.", f: "Incorrecto. La licencia NC (No Comercial) es la que prohíbe ganar dinero, la BY sí lo permite." }
    ]
  },
  {
    q: "¿De qué forma ayudan las licencias libres a los programadores del mundo?",
    c: { t: "Les quitan obstáculos legales para que puedan trabajar juntos en los mismos proyectos.", f: "Correcto. Al permitir usar y modificar sin tantas barreras legales, personas de diferentes países pueden colaborar en equipo." },
    i: [
      { t: "Evitan que personas de otros países vean los proyectos locales.", f: "Incorrecto. Hacen lo contrario: abren el código para que todo el mundo pueda verlo y ayudar." },
      { t: "Hacen que el internet sea más rápido para programar.", f: "Incorrecto. No afectan la velocidad de tu internet, sino los permisos legales del código." },
      { t: "Reemplazan la necesidad de usar internet para trabajar.", f: "Incorrecto. Siguen necesitando conectividad técnica, la licencia ayuda a la conectividad social y legal." }
    ]
  },
  {
    q: "Si quieres usar un navegador de internet diseñado especialmente para mantenerte anónimo, ¿cuál elegirías?",
    c: { t: "Tor Browser.", f: "Correcto. Tor está diseñado específicamente para proteger tu privacidad y anonimato en la red rebotando tu conexión." },
    i: [
      { t: "Microsoft Edge.", f: "Incorrecto. Edge no se enfoca principalmente en ocultar tu identidad mediante la red Tor." },
      { t: "Safari.", f: "Incorrecto. Safari es el navegador de Apple y no usa la red Tor para mantenerte anónimo." },
      { t: "Google Chrome.", f: "Incorrecto. Chrome es popular y rápido, pero recolecta datos y no se centra en anonimato extremo." }
    ]
  },
  {
    q: "Si necesitas un sistema operativo para un celular que se pueda personalizar mucho y lo usen muchas marcas distintas, ¿cuál elegirías?",
    c: { t: "Android.", f: "Correcto. Android es de código abierto en su base, lo que permite que muchas marcas (Samsung, Motorola, etc.) lo adapten a sus teléfonos." },
    i: [
      { t: "iOS.", f: "Incorrecto. iOS es exclusivo de Apple y solo se usa en los iPhone; es muy cerrado." },
      { t: "Windows.", f: "Incorrecto. Windows es el sistema dominante en computadoras de escritorio, no en celulares actualmente." },
      { t: "macOS.", f: "Incorrecto. macOS es exclusivo de las computadoras de Apple (Macs), no de teléfonos." }
    ]
  },
  {
    q: "Si descargas una película que pesa 1 GB, ¿cuántos Megabytes (MB) son aproximadamente según el formato binario de las computadoras?",
    c: { t: "1,024 MB.", f: "Correcto. En informática tradicional (binario), un Gigabyte equivale a 1024 Megabytes." },
    i: [
      { t: "1,000 Mbps.", f: "Incorrecto. Los Mbps (Megabits por segundo) miden velocidad de internet, no espacio." },
      { t: "1,024 GHz.", f: "Incorrecto. Los GHz miden la velocidad del procesador, no cuánto pesa un archivo." },
      { t: "10,000 KB.", f: "Incorrecto. 1 GB son más de 1 millón de KB, no diez mil." }
    ]
  },
  {
    q: "Un maestro pide instalar un programa para escribir y compilar código. Un alumno quiere usar Word porque 'también sirve para escribir'. ¿Por qué está equivocado el alumno?",
    c: { t: "Debe usar un entorno de desarrollo (IDE) porque están hechos para crear y probar software, Word no.", f: "Correcto. Un procesador de textos como Word no tiene herramientas para compilar ni entender el código de programación." },
    i: [
      { t: "Tiene razón, cualquier programa donde escribas funciona para crear sistemas.", f: "Incorrecto. Aunque puedes escribir código en un bloc de notas, Word mete formatos ocultos que arruinan el código, y no compila." },
      { t: "Debería usar solo el sistema operativo sin instalar nada.", f: "Incorrecto. El sistema operativo por sí solo no siempre trae un entorno completo de desarrollo amigable." },
      { t: "Debe usar Excel para escribir código de manera más ordenada.", f: "Incorrecto. Excel es para cálculo de datos, no es un entorno para compilar programas de software." }
    ]
  },
  {
    q: "Antes las computadoras eran gigantes y solo para militares. Hoy las tenemos en casa. ¿Qué cambio tecnológico hizo esto posible?",
    c: { t: "La microelectrónica hizo que las piezas se hicieran diminutas y más baratas.", f: "Correcto. Gracias a la microelectrónica (los chips), las computadoras pasaron del tamaño de un cuarto al tamaño de un libro." },
    i: [
      { t: "Decidieron hacerlas grandes a propósito para que no las robaran.", f: "Incorrecto. Eran grandes porque la tecnología de esa época (tubos de vacío) ocupaba mucho espacio físicamente." },
      { t: "Eliminaron las leyes de derechos de autor y las regalaron a la gente.", f: "Incorrecto. El avance fue técnico (reducción de tamaño), no un tema legal ni de regalar equipos." },
      { t: "Le quitaron los procesadores para que pesaran menos.", f: "Incorrecto. Todas las computadoras necesitan un procesador; lo que pasó fue que el procesador se volvió miniatura." }
    ]
  },
  {
    q: "Una oficina de gobierno quiere dejar de depender de una sola empresa privada para sus programas y quiere poder estudiarlos. ¿Por qué el software libre es una buena idea para ellos?",
    c: { t: "Les da independencia tecnológica, pues les permite modificar y adaptar los programas.", f: "Correcto. Al poder ver y cambiar el código, no dependen de una sola empresa extranjera y tienen control total." },
    i: [
      { t: "Porque los obliga a usar solo programas de una marca reconocida.", f: "Incorrecto. Es al revés, el software libre te libera de estar atado a una sola marca." },
      { t: "Porque prohíbe que cualquier persona modifique los sistemas del gobierno.", f: "Incorrecto. El software libre da permiso explícito de modificar el código para mejorarlo." },
      { t: "Porque el software libre funciona sin necesidad de internet.", f: "Incorrecto. No tiene que ver con internet, sino con la libertad sobre el código fuente de los programas." }
    ]
  },
  {
    q: "Haces una plataforma web libre. Quieres asegurarte de que si otra empresa la usa en su servidor y le hace mejoras, te compartan esas mejoras obligatoriamente. ¿Qué licencia usas?",
    c: { t: "AGPL, porque obliga a compartir el código de los servicios web.", f: "Correcto. La licencia AGPL cierra el hueco legal de los servicios en la nube, obligando a compartir las mejoras." },
    i: [
      { t: "CC BY-ND, porque protege el código para que nadie lo cambie.", f: "Incorrecto. La CC BY-ND (No derivadas) prohíbe que hagan cambios, y tú quieres que los hagan pero que te los compartan." },
      { t: "GPL versión 2, porque es la más famosa y protege servidores.", f: "Incorrecto. La GPLv2 no obliga a mostrar el código si solo se ofrece como un servicio web sin descargas." },
      { t: "Una licencia de Dominio Público sin ninguna regla.", f: "Incorrecto. Si no tiene reglas, la empresa puede modificarlo, cerrarlo y no compartirte nada de vuelta." }
    ]
  },
  {
    q: "Hiciste un dibujo para una tarea y quieres que otros lo copien, lo modifiquen y lo vendan si quieren, pero siempre dando crédito a tu nombre. ¿Qué licencia eliges?",
    c: { t: "CC BY (Atribución).", f: "Correcto. Permite hacer de todo con la obra, incluyendo uso comercial, siempre y cuando mencionen que tú eres la autora." },
    i: [
      { t: "CC BY-NC (No comercial).", f: "Incorrecto. Esta licencia prohíbe que otros usen tu dibujo para ganar dinero, y tú sí querías permitirlo." },
      { t: "CC BY-ND (No derivadas).", f: "Incorrecto. Esta licencia prohíbe que modifiquen o alteren tu dibujo, y tú querías que sí pudieran modificarlo." },
      { t: "GPL (Licencia Pública General).", f: "Incorrecto. La GPL es excelente para código de software, pero para obras de arte se usan las licencias Creative Commons (CC)." }
    ]
  },
  {
    q: "Un proyecto escolar usa programas libres para conectar dispositivos de muchas marcas diferentes usando reglas abiertas. ¿Por qué dicen que esto mejora la interoperabilidad?",
    c: { t: "Porque usan estándares abiertos que permiten a equipos de diferentes fabricantes 'hablar' entre sí sin problemas.", f: "Correcto. Cuando las reglas no le pertenecen a una sola marca, es más fácil que aparatos distintos se conecten." },
    i: [
      { t: "Porque obliga a que todos los dispositivos compren el mismo sistema operativo de paga.", f: "Incorrecto. Eso sería un ecosistema cerrado, exactamente lo opuesto a la interoperabilidad abierta." },
      { t: "Porque la conexión es mejor cuando no hay reglas ni licencias de ningún tipo.", f: "Incorrecto. Para que los equipos se comuniquen sí necesitan reglas (protocolos); el punto es que esas reglas sean abiertas." },
      { t: "Porque el software libre aumenta la velocidad del internet de los dispositivos.", f: "Incorrecto. El software libre no hace que tu proveedor de internet te dé más megas de velocidad mágica." }
    ]
  },
  {
    q: "Tienes una computadora vieja que se traba mucho y buscas un navegador ligero para internet. Según tus lecturas, ¿cuál elegirías?",
    c: { t: "Midori, porque es un navegador muy ligero y no gasta mucha memoria.", f: "Correcto. Midori está diseñado específicamente para consumir pocos recursos de tu computadora." },
    i: [
      { t: "Google Chrome, porque está diseñado para computadoras muy viejas.", f: "Incorrecto. Al revés, Chrome es conocido por consumir mucha memoria RAM y recursos." },
      { t: "Safari, porque se instala sin problemas en computadoras antiguas con Windows.", f: "Incorrecto. Safari es el navegador de Apple y no está disponible para Windows actual ni está hecho para ser ligero." },
      { t: "Internet Explorer, porque es el más moderno y seguro.", f: "Incorrecto. Internet Explorer está descontinuado y ya no es seguro para navegar." }
    ]
  },
  {
    q: "En tu escuela, ¿qué tipo de cuenta de computadora te deben dar para que puedas guardar tus tareas, pero sin que puedas desinstalar los programas del salón?",
    c: { t: "Cuenta de usuario estándar.", f: "Correcto. Esta cuenta te permite usar la PC para tus cosas diarias pero te quita los permisos peligrosos que afectarían a todos." },
    i: [
      { t: "Cuenta de administrador.", f: "Incorrecto. Si fueras administrador, podrías borrar programas o arruinar la configuración de todo el laboratorio." },
      { t: "Cuenta de sistema (root).", f: "Incorrecto. Esta cuenta es como un 'superdios' de la máquina. Un alumno no debe usarla para sus tareas diarias." },
      { t: "Cuenta de mantenimiento.", f: "Incorrecto. Este nombre no es uno de los niveles estándar vistos, y se acercaría más a la cuenta de root." }
    ]
  },
  {
    q: "Un extraño viene de visita a una empresa y necesita usar una PC rápido solo para ver una página web. ¿Qué tipo de usuario le pondrías?",
    c: { t: "Acceso de invitado.", f: "Correcto. Es el nivel con menos permisos; ideal para que use lo básico un ratito y luego se borre su rastro." },
    i: [
      { t: "Acceso de administrador.", f: "Incorrecto. Le estarías dando las llaves de la empresa a un extraño." },
      { t: "Acceso root.", f: "Incorrecto. Root tiene el control absoluto y total de la máquina, muy peligroso para una visita temporal." },
      { t: "Acceso de usuario estándar.", f: "Incorrecto. Sigue teniendo demasiados permisos y su perfil se quedaría guardado en la máquina." }
    ]
  },
  {
    q: "Un compañero cree que un internet de 1 Gbps (Gigabit por segundo) es igual a 100 Mbps (Megabits). ¿Por qué está equivocado?",
    c: { t: "Porque 1 Gbps es igual a 1,000 Mbps; es diez veces más rápido de lo que piensa.", f: "Correcto. En velocidad de red, 'Giga' equivale a 1000 'Megas'. Su cálculo de 100 Mbps era muy bajo." },
    i: [
      { t: "Porque 1 Gbps es almacenamiento, no mide velocidad de internet.", f: "Incorrecto. 'Gbps' (con 'b' minúscula y la 'ps') sí significa Gigabits por segundo, que es velocidad." },
      { t: "Porque 1 Gbps es la velocidad de la memoria RAM, no del internet.", f: "Incorrecto. El internet y las redes se miden comúnmente en Gigabits por segundo." },
      { t: "Porque 1 Gbps es en realidad 10 Megas de velocidad.", f: "Incorrecto. El número real es 1,000 Megabits, no 10." }
    ]
  },
  {
    q: "Grandes empresas como Google o Amazon hacen teléfonos, tienen internet en la nube e inteligencia artificial. ¿Por qué es importante analizar su gran poder?",
    c: { t: "Porque gestionan los datos y servicios de casi todas las personas del mundo.", f: "Correcto. Tienen un control enorme sobre lo que vemos y usamos; concentran muchísima influencia." },
    i: [
      { t: "Porque solo debemos enfocarnos en cuántas oficinas bonitas tienen.", f: "Incorrecto. El problema crítico no es su arquitectura, sino su influencia y manejo de datos." },
      { t: "Porque solo fabrican computadoras viejas que nadie usa.", f: "Incorrecto. Al contrario, están a la vanguardia creando la tecnología que usas cada segundo." },
      { t: "Porque regalan todos sus servicios sin ganar dinero a cambio.", f: "Incorrecto. Su modelo de negocio es muy lucrativo, ganan muchísimo dinero usando nuestros datos." }
    ]
  },
  {
    q: "Cuando una sola red social es la única que todos usan, ¿qué problema de mercado ocurre?",
    c: { t: "Elimina a la competencia, reduce opciones y ellos dictan qué hacen con tus datos.", f: "Correcto. Al no tener un rival, la empresa monopoliza el mercado y tiene todo el poder sobre ti." },
    i: [
      { t: "Garantiza que las empresas pequeñitas tengan mucha ventaja.", f: "Incorrecto. Al revés, las empresas pequeñas no pueden competir y terminan cerrando." },
      { t: "Hace que los gobiernos ya no necesiten poner reglas y leyes.", f: "Incorrecto. Cuando hay monopolios, los gobiernos necesitan poner reglas más fuertes para protegerte." },
      { t: "Significa que esa red social será gratis y no usará tus datos.", f: "Incorrecto. Si es la única opción, es más fácil que use tus datos a su favor." }
    ]
  },
  {
    q: "Un pueblo produce muchísima información por sus actividades, pero una empresa extranjera se lleva esos datos, los procesa y se queda con las ganancias. ¿A esto se le conoce como...?",
    c: { t: "Colonialismo de datos.", f: "Correcto. Así como antes extraían oro sin dejar beneficio al pueblo, ahora extraen datos de las personas para hacerse ricos en otro país." },
    i: [
      { t: "Democratización tecnológica.", f: "Incorrecto. Democratizar sería que el pueblo tuviera poder sobre la tecnología, no que los exploten." },
      { t: "Conectividad ética.", f: "Incorrecto. No hay ética en extraer recursos (datos) de una comunidad sin darle el control de estos." },
      { t: "Software Libre.", f: "Incorrecto. El software libre trata de libertad, esto trata de explotación comercial de tu información." }
    ]
  },
  {
    q: "A la capacidad de que tu país o comunidad pueda decidir cómo se guarda y se usa su propia información digital se le conoce como:",
    c: { t: "Soberanía de la información.", f: "Correcto. La soberanía significa independencia y poder de decisión sobre lo propio, en este caso, nuestros datos." },
    i: [
      { t: "Dependencia tecnológica.", f: "Incorrecto. Ese es el nombre del problema que sufrimos, no de la capacidad de solucionarlo." },
      { t: "Mercantilización de la atención.", f: "Incorrecto. Ese término se refiere a cuando las redes sociales venden tu tiempo, no a la soberanía." },
      { t: "Privacidad condicionada.", f: "Incorrecto. El concepto exacto que estudiamos sobre el control territorial de los datos es la soberanía." }
    ]
  },
  {
    q: "Si TikTok, Facebook o Instagram saben dónde estás y a qué hora te conectas, ¿qué hacen principalmente con esa información?",
    c: { t: "Personalizar tu contenido y mostrarte anuncios que te enganchen más tiempo.", f: "Correcto. Las redes usan tus datos para recomendarte cosas irresistibles y luego cobrarle a los anunciantes para que te vendan cosas." },
    i: [
      { t: "Protegerte de que veas anuncios aburridos.", f: "Incorrecto. Su objetivo principal no es 'protegerte', sino ganar dinero vendiendo espacios publicitarios a tu medida." },
      { t: "Garantizar que no te muestren ninguna publicidad en absoluto.", f: "Incorrecto. Si hacen eso, quiebran; su negocio se basa justamente en mostrarte publicidad." },
      { t: "Avisarle a tus maestros a qué hora terminaste tu tarea.", f: "Incorrecto. Estas plataformas son comerciales globales, no están conectadas a tu escuela para evaluarte." }
    ]
  },
  {
    q: "Si el algoritmo de una red social solo quiere mantenerte pegado a la pantalla, ¿qué efecto negativo puede tener esto?",
    c: { t: "Puede mostrarte noticias falsas o contenido de odio, porque ese morbo genera mucha interacción.", f: "Correcto. Al algoritmo no le importa si es verdad o mentira, solo le importa que la gente discuta y no cierre la app." },
    i: [
      { t: "Te volverás experto en Cultura Digital de manera rápida.", f: "Incorrecto. Te volverás adicto a la red social, no necesariamente experto en temas educativos." },
      { t: "Garantiza que toda la información que veas sea verificada científicamente.", f: "Incorrecto. Los contenidos polémicos se comparten más rápido que los hechos verificados, así que no garantiza rigor." },
      { t: "Hace que te aburras muy rápido y salgas de la aplicación a leer un libro.", f: "Incorrecto. El objetivo del algoritmo es evitar que te aburras para que no te salgas de la aplicación." }
    ]
  },
  {
    q: "Un joven usa una app para cualquier suma o resta simple en su día. Después de un año, le cuesta trabajo hacer una suma en papel. ¿Qué problema representa esto?",
    c: { t: "Dependencia tecnológica y pérdida de habilidades mentales básicas.", f: "Correcto. Cuando le delegas todo el trabajo a la máquina, tu cerebro deja de practicar y pierdes la agilidad mental." },
    i: [
      { t: "Un avance en sus habilidades matemáticas porque la máquina es perfecta.", f: "Incorrecto. Sus habilidades empeoraron porque no las practicó; dependió del dispositivo." },
      { t: "Colonialismo de datos.", f: "Incorrecto. Ese tema es sobre robo comercial de información de países, no sobre sumar." },
      { t: "Brecha digital económica.", f: "Incorrecto. Él sí tiene el equipo (la app), el problema es su mal uso." }
    ]
  },
  {
    q: "¿Cuál es la diferencia entre ser adicto a la tecnología (dependencia) y tener un uso 'consciente'?",
    c: { t: "El uso consciente es usarla como una herramienta de apoyo, pero sabiendo pensar y actuar sin depender de ella.", f: "Correcto. Se trata de aprovechar la tecnología sin dejar que ella controle tu vida ni tus capacidades." },
    i: [
      { t: "El uso consciente significa que usas el celular 15 horas diarias de manera concentrada.", f: "Incorrecto. Si lo usas tanto tiempo, probablemente estés siendo dependiente." },
      { t: "El uso consciente es pedirle a la inteligencia artificial que tome las decisiones de tu vida.", f: "Incorrecto. En el uso consciente, tú mantienes la capacidad de decidir, no se la regalas a la IA." },
      { t: "La diferencia es que en la dependencia no tienes celular, y en el uso consciente sí.", f: "Incorrecto. En ambas tienes celular, la diferencia es la manera en que lo manejas." }
    ]
  },
  {
    q: "En un salón, un compañero no puede comprar datos de celular ni pagar internet en casa. ¿Qué tipo de desigualdad digital es esta?",
    c: { t: "Socioeconómica.", f: "Correcto. Es una desigualdad basada en la falta de recursos de dinero para pagar la tecnología." },
    i: [
      { t: "Desigualdad Regional.", f: "Incorrecto. Sería regional si en todo su pueblo o ciudad no existiera la antena de internet, no por falta de pago." },
      { t: "Desigualdad de Género.", f: "Incorrecto. Sería de género si no le permitieran usar tecnología por el hecho de ser hombre o mujer." },
      { t: "Soberanía Tecnológica.", f: "Incorrecto. Esto se refiere a la capacidad de un pueblo de crear su tecnología, no a si puede pagar su internet." }
    ]
  },
  {
    q: "¿Qué se debe hacer realmente para solucionar el problema de que mucha gente no tiene acceso a internet y a computadoras (brecha digital)?",
    c: { t: "Crear políticas para dar mejor internet a las regiones olvidadas y ofrecer educación igualitaria para todos.", f: "Correcto. Se necesita infraestructura, leyes para bajar precios y educación para que todos sepan usar los equipos." },
    i: [
      { t: "Venderles celulares a los que ya tienen computadoras carísimas.", f: "Incorrecto. Eso solo aumenta la desigualdad dando más a los que ya tienen." },
      { t: "Crear una nueva red social y pensar que con eso el problema está resuelto.", f: "Incorrecto. Una red social no soluciona que la gente no tenga luz, computadora ni cómo pagar los datos." },
      { t: "Regalarles un mouse pero sin darles una computadora.", f: "Incorrecto. Obviamente es inútil dar un accesorio si no se da la herramienta principal ni el internet." }
    ]
  },
  {
    q: "Amazon sabe qué estás buscando comprar. Entonces, aprovecha para poner sus propios productos de su marca hasta arriba para que los compres. ¿Cuál es el riesgo de esto?",
    c: { t: "Que las tienditas y vendedores más pequeños nunca puedan competir de forma justa contra Amazon.", f: "Correcto. Amazon usa su poder y sus datos para darse ventaja, aplastando a la competencia más pequeña." },
    i: [
      { t: "Que hace que todos los vendedores tengan exactamente las mismas ventas.", f: "Incorrecto. Pasa lo contrario; Amazon se lleva las ventas y los pequeños no venden." },
      { t: "Que la tienda se quede sin internet para los demás usuarios.", f: "Incorrecto. Esto es un problema económico comercial, no una falla técnica de internet." },
      { t: "Que Amazon se aburra y borre tu cuenta.", f: "Incorrecto. No tienen motivos para borrarte, quieren que compres." }
    ]
  },
  {
    q: "Al buscar tarea en Google, seleccionas la primera liga sin fijarte si dice 'Anuncio' o si es un blog falso. ¿Qué deberías hacer para ser más crítico?",
    c: { t: "Revisar varias páginas y entender que lo primero que sale puede ser pagado, no lo más cierto.", f: "Correcto. Hay algoritmos e intereses detrás de los primeros resultados, siempre debes investigar más a fondo." },
    i: [
      { t: "Creer todo lo de la primera página, porque Google nunca miente y siempre lee todo primero.", f: "Incorrecto. Google ordena por popularidad o pagos, no garantiza que sea la verdad académica absoluta." },
      { t: "Entrar solo a los 'Anuncios' porque son las páginas más científicas.", f: "Incorrecto. Los anuncios están ahí porque alguien pagó dinero por publicidad, no por ser científicos." },
      { t: "Cerrar la computadora porque toda la información de internet es un engaño.", f: "Incorrecto. Tampoco hay que ser extremista. Sí hay información valiosa, solo debes saber seleccionarla." }
    ]
  },
  {
    q: "Una empresa de Europa quiere venir a tomar fotos de tus tradiciones y costumbres para hacer una inteligencia artificial comercial. ¿Qué deben hacer primero los habitantes?",
    c: { t: "Pedir que les expliquen todo (consentimiento informado) y participar en las decisiones antes de ceder sus datos.", f: "Correcto. La comunidad tiene derecho a saber para qué usarán su cultura y decidir si aceptan o no." },
    i: [
      { t: "Regalar todos los datos y esperar a ver si en el futuro la empresa les da las gracias.", f: "Incorrecto. Sería aceptar el colonialismo de datos pasivamente." },
      { t: "No preguntar nada, porque la empresa europea seguro es más inteligente que ellos.", f: "Incorrecto. Ninguna empresa tiene el derecho de robar la cultura sin preguntar, independientemente de su tecnología." },
      { t: "Comprar computadoras nuevas antes de que la empresa llegue.", f: "Incorrecto. Comprar equipo no soluciona el problema de fondo: la explotación de su cultura e información." }
    ]
  },
  {
    q: "Un país guarda toda la información de sus ciudadanos en servidores alojados en Estados Unidos. Quieren cambiar esto para ser independientes. ¿Qué deben hacer?",
    c: { t: "Crear infraestructura (centros de datos propios) para tener el control de la información en su propio país.", f: "Correcto. Al construir servidores locales, fomentan la soberanía tecnológica." },
    i: [
      { t: "Contratar a una sola empresa más grande en Estados Unidos para no batallar.", f: "Incorrecto. Eso aumentaría la dependencia tecnológica hacia el extranjero." },
      { t: "Regresar a escribir todo en papel y cerrar el internet del país.", f: "Incorrecto. No se trata de eliminar la tecnología, sino de controlarla de forma independiente." },
      { t: "Instalar el navegador Midori en las computadoras de gobierno.", f: "Incorrecto. Cambiar un navegador es una cosa pequeñita y no te da control sobre dónde se almacena toda la información del país." }
    ]
  },
  {
    q: "Entraste a un video y de repente la aplicación ya te está reproduciendo el siguiente en automático, dándote notificaciones y puntos. ¿Cómo se llama esta estrategia?",
    c: { t: "Son mecanismos de retención para robar tu atención y que pases horas conectado.", f: "Correcto. Las notificaciones y la reproducción automática (autoplay) están diseñadas para que no cierres la aplicación." },
    i: [
      { t: "Es un regalo del desarrollador para que ahorres clics.", f: "Incorrecto. No es por tu comodidad; su objetivo es comercial (mostrarte más anuncios)." },
      { t: "Es una técnica para disminuir el tiempo que pasas en el celular.", f: "Incorrecto. Es totalmente lo opuesto: quieren atraparte más tiempo." },
      { t: "Es un virus en tu celular.", f: "Incorrecto. Es una característica normal en el negocio de las redes sociales, no un virus." }
    ]
  },
  {
    q: "Si en Facebook solo le das 'Me encanta' a noticias de futbol, pronto ya no verás noticias de ciencia, arte ni otros deportes. ¿Qué riesgo hay en esto?",
    c: { t: "Que te quedas en una burbuja viendo siempre lo mismo y te vuelves extremo en un solo tema.", f: "Correcto. Te aísla de otros puntos de vista diferentes (polarización) limitando tu visión del mundo." },
    i: [
      { t: "Que el sistema te protegerá y serás un mejor estudiante.", f: "Incorrecto. Esto puede hacerte ignorante de la actualidad global, afectando tu aprendizaje crítico." },
      { t: "Que Facebook dejará de ganar dinero contigo.", f: "Incorrecto. Al contrario, como te tiene contento dándote lo que te gusta, ganarás más clics para ellos." },
      { t: "Que se acabará la memoria de tu celular.", f: "Incorrecto. Que te muestre una cosa u otra no afecta significativamente el almacenamiento físico de tu equipo." }
    ]
  },
  {
    q: "El hecho de delegarle siempre todo a las computadoras, como no memorizar teléfonos porque los guarda el celular, es un ejemplo de:",
    c: { t: "Dependencia tecnológica.", f: "Correcto. Cuando una máquina hace la tarea por tu cerebro al grado de que tú ya no puedes hacerlo." },
    i: [
      { t: "Colonialismo de datos.", f: "Incorrecto. Ese concepto trata sobre grandes empresas explotando datos del sur global." },
      { t: "Aceleración del hardware.", f: "Incorrecto. Esa es una técnica técnica para gráficos o procesadores, nada que ver." },
      { t: "Interoperabilidad de sistemas.", f: "Incorrecto. Se trata de cuando sistemas hablan entre sí. Lo tuyo es un tema de dependencia mental." }
    ]
  },
  {
    q: "Para evitar pasarte 6 horas al día en TikTok y no terminar tu tarea, decides usar una alarma de 30 minutos, y luego dejas el celular en otro cuarto. ¿A esto se le llama...?",
    c: { t: "Un uso consciente de la tecnología.", f: "Correcto. Estás tomando tú el control de la herramienta y marcando los límites, en lugar de que ella te controle." },
    i: [
      { t: "Renunciar a la vida digital para siempre.", f: "Incorrecto. Solo lo pusiste lejos un rato para la tarea, no lo estás abandonando de por vida." },
      { t: "Causar una brecha digital socioeconómica.", f: "Incorrecto. La brecha es cuando no puedes comprar tecnología, no cuando decides voluntariamente apagarla." },
      { t: "Mercantilización tecnológica.", f: "Incorrecto. Esto es cuando las empresas lucran con tu tiempo; tu acción es la resistencia a eso." }
    ]
  },
  {
    q: "Una alumna tiene internet de alta velocidad en casa, pero su compañero de mesa no tiene señal en su zona (campo). ¿Cómo debería apoyar la escuela?",
    c: { t: "Prestar computadoras e internet en la escuela para los que no tienen en casa.", f: "Correcto. Esta es una forma de que la escuela nivele las oportunidades y ataque la brecha digital." },
    i: [
      { t: "Calificar mejor a la que tiene internet porque sus trabajos están más bonitos.", f: "Incorrecto. Esto solo incrementa la desigualdad social; se debe buscar equidad." },
      { t: "Prohibirle a la alumna usar su computadora en casa.", f: "Incorrecto. Tampoco se trata de quitarle oportunidades a quien las tiene, sino de dar soporte a quien no." },
      { t: "Asumir que el alumno del campo nunca podrá aprender.", f: "Incorrecto. Tiene toda la capacidad intelectual, solo necesita acceso a las herramientas." }
    ]
  },
  {
    q: "El presidente municipal regaló tabletas a todos los niños de una comunidad rural, pero allá no hay luz ni internet. ¿Resolvió la brecha digital?",
    c: { t: "No. Porque el acceso a la tecnología no sirve de nada sin conectividad eléctrica y de internet.", f: "Correcto. Entregar aparatos no sirve de nada si falta la infraestructura clave (luz, red) y capacitación." },
    i: [
      { t: "Sí. Porque teniendo la tableta físicamente, la brecha desaparece automáticamente.", f: "Incorrecto. Un dispositivo sin energía o conectividad en un entorno digital actual se vuelve un pisa-papeles." },
      { t: "Sí, siempre y cuando todas las tabletas sean de marca Apple.", f: "Incorrecto. No importa la marca, si no hay luz no prenderá ninguna de ellas." },
      { t: "No, porque debía darles consolas de videojuegos en lugar de tabletas.", f: "Incorrecto. Las consolas tampoco servirían sin luz y no son las herramientas principales para estudio y progreso." }
    ]
  },
  {
    q: "Si un software te da el permiso escrito de copiar el programa y dárselo a tus amigos en una USB, ¿qué principio está promoviendo?",
    c: { t: "La libertad de compartir el programa libremente.", f: "Correcto. El software libre fomenta ayudar a los demás y compartir herramientas sin restricciones legales absurdas." },
    i: [
      { t: "La libertad de mantener el programa en secreto.", f: "Incorrecto. Compartirlo es exactamente lo contrario a mantenerlo en secreto." },
      { t: "El colonialismo de datos.", f: "Incorrecto. Compartir programas libres no tiene que ver con explotar datos y colonizar." },
      { t: "La mercantilización de la atención.", f: "Incorrecto. Eso es de redes sociales queriendo tu tiempo. Aquí compartes programas para uso de un compañero." }
    ]
  },
  {
    q: "El sistema GNU/Linux fue hecho por miles de personas de diferentes países ayudándose por internet. ¿Qué característica destaca de este proyecto?",
    c: { t: "La colaboración mundial comunitaria para crear conocimiento libre.", f: "Correcto. Al abrir el código, cualquier experto pudo sumar su granito de arena, haciendo un sistema robusto y colaborativo." },
    i: [
      { t: "Que una sola empresa cobró mucho dinero por ocultar el código.", f: "Incorrecto. GNU/Linux es gratuito y abierto, no es obra de una empresa que lo venda cerrando el código." },
      { t: "Que fue programado por máquinas sin ayuda de personas.", f: "Incorrecto. Fue creado por desarrolladores humanos apasionados por compartir el conocimiento." },
      { t: "Que solo funciona en computadoras construidas en los años 90.", f: "Incorrecto. Linux hoy está en supercomputadoras, teléfonos Android, servidores y más." }
    ]
  },
  {
    q: "En vez de comprar una computadora nueva, desarmaste la vieja, le pusiste otra memoria, investigaste, y la arreglaste tú misma. ¿Qué cultura informática aplicaste?",
    c: { t: "La cultura Hacker o el enfoque 'Hazlo tú mismo' (DIY).", f: "Correcto. Los verdaderos hackers (curiosos y creadores) y el DIY se basan en desarmar, aprender, reparar y crear." },
    i: [
      { t: "El consumo tecnológico pasivo.", f: "Incorrecto. Consumo pasivo es solo comprar el último modelo sin preguntarte cómo funciona." },
      { t: "La mercantilización de la atención.", f: "Incorrecto. No tiene que ver; tu atención la pusiste en algo constructivo en la vida real." },
      { t: "El colonialismo de datos.", f: "Incorrecto. Esto no se aplica a reparar hardware localmente en casa." }
    ]
  },
  {
    q: "Una compañía grande publica el código de su software para que todos ayuden a encontrar errores técnicos, pero no le interesa ni la ética ni la libertad del usuario. ¿A este enfoque comercial se le conoce como...?",
    c: { t: "Open source (Código abierto).", f: "Correcto. El open source es una forma práctica de hacer software mejor mediante la comunidad, sin meterse en filosofía de libertades." },
    i: [
      { t: "Software Libre puro.", f: "Incorrecto. El movimiento del Software Libre se enfoca fuertemente en la ética y las 4 libertades." },
      { t: "Software Propietario.", f: "Incorrecto. Si fuera propietario (cerrado), no publicarían el código para que otros encuentren errores." },
      { t: "Desarrollo de Hardware.", f: "Incorrecto. Si el problema es con código y programas, estamos hablando de software, no de aparatos físicos (hardware)." }
    ]
  },
  {
    q: "En un programa como Word, si ves la letra muy chiquita en tu pantalla pero no quieres que el tamaño cambie al momento de imprimir, ¿qué herramienta usas?",
    c: { t: "El Zoom.", f: "Correcto. El control de Zoom es como una lupa que solo cambia cómo lo ves tú en la pantalla, pero no afecta al documento final." },
    i: [
      { t: "El tamaño de fuente (letra).", f: "Incorrecto. Si aumentas el tamaño de la fuente, las letras se imprimirán gigantes." },
      { t: "El diseño de los márgenes.", f: "Incorrecto. Cambiar los bordes blancos de la hoja no aumenta el tamaño de visualización de la letra." },
      { t: "Las transiciones.", f: "Incorrecto. Las transiciones son animaciones que se usan en presentaciones de PowerPoint, no en Word." }
    ]
  },
  {
    q: "Tres personas trabajan un ensayo escolar y quieres saber exactamente qué palabra borró tu compañero y qué agregó. ¿Qué herramienta del procesador de textos usas?",
    c: { t: "El control de cambios.", f: "Correcto. Esta herramienta subraya y pone de colores todo lo que los demás escriben o borran para que puedas revisarlo." },
    i: [
      { t: "La herramienta de Zoom.", f: "Incorrecto. El Zoom solo acerca la hoja, no te dice quién modificó el texto." },
      { t: "El tamaño de la hoja (A4, Carta).", f: "Incorrecto. Cambiar si la hoja es tamaño Carta o de otro estilo no registra el trabajo en equipo." },
      { t: "La animación de entrada.", f: "Incorrecto. Las animaciones son exclusivas de programas para presentar diapositivas." }
    ]
  },
  {
    q: "En Excel, quieres que la celda donde está tu calificación se pinte de rojo si sacas menos de 6. ¿Qué función te sirve?",
    c: { t: "Formato Condicional.", f: "Correcto. Esta herramienta te permite pintar de colores las celdas automáticamente según una regla (condición) que establezcas." },
    i: [
      { t: "La herramienta Zoom.", f: "Incorrecto. Solo hace que la cuadrícula se vea más cerca, no evalúa calificaciones ni pinta colores solos." },
      { t: "Gráfico de dispersión.", f: "Incorrecto. Eso es para crear imágenes con puntos que muestren estadísticas matemáticas complejas." },
      { t: "Tabla Dinámica.", f: "Incorrecto. Una tabla dinámica sirve para resumir listados inmensos, no es la forma directa de pintar una celda reprobada." }
    ]
  },
  {
    q: "Tienes una tabla muy larga en Excel de todas las ventas del mes. Quieres generar rápidamente un resumen interactivo que muestre qué categoría vendió más. ¿Qué debes usar?",
    c: { t: "Una tabla dinámica.", f: "Correcto. Las tablas dinámicas son magia: agrupan, suman y resumen miles de filas en un cuadrito pequeño en segundos." },
    i: [
      { t: "Hacer las columnas más anchas.", f: "Incorrecto. Hacer más ancha una celda solo te deja leer textos largos, no calcula ningún resumen matemático." },
      { t: "Imprimir el archivo en tamaño oficio.", f: "Incorrecto. Imprimir grande un montón de datos desordenados no ayuda a analizarlos." },
      { t: "Pintar manualmente las celdas de colores.", f: "Incorrecto. Tardarías meses en calcular y colorear un resumen gigantesco de esa forma manual." }
    ]
  },
  {
    q: "En una presentación (tipo PowerPoint), pusiste un índice y quieres que al darle clic a 'Capítulo 3', salte directo a esa diapositiva. ¿Cómo se logra esto?",
    c: { t: "Insertando Hipervínculos a esos botones o textos.", f: "Correcto. Los hipervínculos (links) te permiten brincar dentro del mismo archivo, a páginas web o videos externos." },
    i: [
      { t: "Poniendo una nota para el presentador.", f: "Incorrecto. Esas son notas ocultas que solo tú lees al exponer para no olvidar el tema." },
      { t: "Usando el corrector ortográfico.", f: "Incorrecto. Solo revisará faltas de ortografía, no creará menús interactivos." },
      { t: "Aplicando una transición de desvanecimiento.", f: "Incorrecto. Eso es un efecto visual bonito para cuando pasas la diapositiva, pero no hace clics." }
    ]
  },
  {
    q: "Estás haciendo una exposición escolar de Biología en línea. ¿Cómo pueden tres estudiantes escribir al mismo tiempo y dejarse recaditos sin borrar lo del otro?",
    c: { t: "Usando Coautoría en tiempo real y dejando Comentarios al margen.", f: "Correcto. Las herramientas modernas en la nube permiten que todos editen a la vez y dejen comentarios como 'Juan, checa este párrafo'." },
    i: [
      { t: "Haciendo tres archivos separados y pegándolos en Paint.", f: "Incorrecto. Sería un desorden total, no se verían las animaciones ni podrían editar textos bien." },
      { t: "Enviándose 20 correos con el archivo 'Final_final_bueno.docx'.", f: "Incorrecto. Aunque antes se hacía así, hoy no es eficiente; trabajar al mismo tiempo (coautoría) es la forma actual." },
      { t: "Cambiando a hoja horizontal.", f: "Incorrecto. Acostar la hoja no permite por arte de magia que entren más personas al documento." }
    ]
  },
  {
    q: "Si en un programa libre tú tienes el derecho de pasárselo a tu hermanito o regalar copias en la calle. ¿Cuál libertad del software se está ejerciendo?",
    c: { t: "Libertad de distribuir copias a los demás.", f: "Correcto. El software libre fomenta la comunidad, permitiendo que cualquiera regale copias legales del mismo sin miedo a ser demandado." },
    i: [
      { t: "Libertad de esconder el código fuente.", f: "Incorrecto. El software libre exige precisamente lo contrario: siempre debes dejar ver el código." },
      { t: "Libertad de infectar computadoras.", f: "Incorrecto. Las libertades éticas buscan compartir tecnología útil, no programas maliciosos." },
      { t: "Libertad de privatizar el software.", f: "Incorrecto. Esa no es una de las 4 libertades éticas planteadas por Stallman en el GNU." }
    ]
  },
  {
    q: "En contraste con GNU/Linux, ¿cómo suele trabajar una empresa que hace software propietario (de patente) y cerrado como Windows o macOS?",
    c: { t: "No dejan ver el código interno y solo te venden el permiso para usarlo bajo sus reglas.", f: "Correcto. El modelo comercial tradicional consiste en ocultar la receta (código) y cobrar por el acceso limitado a usarlo." },
    i: [
      { t: "Ponen todo el código de sus programas en Wikipedia para que lo corrijas.", f: "Incorrecto. Las empresas tradicionales guardan el código en máximo secreto porque es su negocio." },
      { t: "Te obligan a que seas tú quien mejore el programa.", f: "Incorrecto. Como no tienes el código, tú no podrías arreglar el programa aunque quisieras; te toca esperar a que la empresa lo haga." },
      { t: "Se centran en la libertad de los usuarios y regalan el sistema.", f: "Incorrecto. Solo el software libre hace eso; las licencias propietarias te restringen." }
    ]
  },
  {
    q: "El movimiento 'Hazlo tú mismo' (DIY) promueve que las personas no solo consuman videos de tecnología, sino que también...",
    c: { t: "Aprendan a crear, construir sus aparatos o modificar sus propios programas.", f: "Correcto. Se busca pasar de ser un consumidor pasivo a ser un creador y experimentador activo de la tecnología." },
    i: [
      { t: "Gasten más dinero en aparatos caros que no pueden reparar.", f: "Incorrecto. El DIY precisamente nace para evitar que gastes en cosas que no entiendes o que no puedes abrir." },
      { t: "Eviten a toda costa cualquier tipo de tecnología en su vida.", f: "Incorrecto. No le tienen miedo a la tecnología, sino que les gusta tanto que quieren armarla ellos mismos." },
      { t: "Vuelvan al uso de máquinas de escribir manuales.", f: "Incorrecto. Aunque las antigüedades son bonitas, el enfoque es crear y armar soluciones tecnológicas modernas y libres." }
    ]
  },
  {
    q: "Una empresa lanza su código bajo 'Open Source', pero no permite que otras personas usen ese código para hacer negocios. ¿Esto cumple con todas las libertades del Software Libre?",
    c: { t: "No. Porque el software libre exige libertad total de usarlo (incluso comercialmente), estudiar y distribuir.", f: "Correcto. Si te pone trabas como 'solo para uso personal', entonces no es verdaderamente libre en el sentido ético del término." },
    i: [
      { t: "Sí. Todo lo que dice 'open source' en internet es Software Libre garantizado.", f: "Incorrecto. Open Source y Software Libre no son exactamente iguales. A veces el código está abierto a la vista, pero no tienes libertad de tocarlo." },
      { t: "Sí, porque lo importante es que el software se pueda ejecutar en Windows.", f: "Incorrecto. El sistema en el que corra no le quita ni le da libertad a su licencia legal de uso." },
      { t: "No, porque todo el Open Source está infectado con malware.", f: "Incorrecto. Es una mentira; la mayoría de los servidores que manejan internet funcionan con código abierto seguro." }
    ]
  },
  {
    q: "Estás en Word y vas a hacer un reporte con una imagen gigantesca que es más ancha que alta. ¿Qué configuración básica le pones a esa hoja específica?",
    c: { t: "Cambiar la Orientación de la página a Horizontal.", f: "Correcto. Al acostar la hoja (horizontal), ganas espacio a los lados para tu gráfica o imagen ancha." },
    i: [
      { t: "Ponerle Zoom al 200%.", f: "Incorrecto. El Zoom solo te acerca a ti la pantalla, no gira el papel para que quepa la imagen cuando la imprimas." },
      { t: "Cambiar el color de fuente a transparente.", f: "Incorrecto. Si haces eso, tu texto se vuelve invisible, lo cual arruina el reporte pero no acomoda tu imagen." },
      { t: "Poner un fondo azul oscuro.", f: "Incorrecto. Cambiar colores visuales no soluciona el problema de la distribución del espacio físico de la hoja." }
    ]
  },
  {
    q: "Tu maestra de español está revisando tu ensayo digital de 20 páginas y quiere dejarte sugerencias sobre ciertos párrafos sin borrar tus palabras originales. ¿Qué función debe usar?",
    c: { t: "Insertar Comentarios.", f: "Correcto. Los comentarios salen como globitos en el margen de la página y te permiten leer qué cambiar sin arruinar el texto." },
    i: [
      { t: "El buscador de palabras.", f: "Incorrecto. Buscar palabras solo encuentra dónde dice 'zapato', no te permite dejar recados." },
      { t: "Numeración de páginas.", f: "Incorrecto. Eso solo pone los números 1, 2, 3 en la parte de abajo de la hoja para no perderse." },
      { t: "La función de dividir documento (pantalla partida).", f: "Incorrecto. Eso es para que tú veas la página 1 y la página 20 a la vez, no sirve para dejar mensajes al autor." }
    ]
  },
  {
    q: "Imagina un Excel de asistencia. ¿Qué herramienta usas para que todas las celdas donde escribas 'Falta' se pinten solas de un color rojo llamativo?",
    c: { t: "Formato Condicional.", f: "Correcto. Le dices a Excel: 'La condición es que si dice Falta, pon formato color rojo'. Es automático y perfecto para asistencias." },
    i: [
      { t: "La función Matemática de SUMA().", f: "Incorrecto. SUMA solo suma números, como 2+2, no entiende de pintar colores de inasistencias." },
      { t: "Tabla Dinámica.", f: "Incorrecto. Una tabla dinámica te daría el resumen de cuántas faltas tiene un alumno, pero no colorea la celda original solita." },
      { t: "Animaciones de entrada.", f: "Incorrecto. Las animaciones son exclusivas de presentaciones de PowerPoint. En Excel no pones muñequitos rebotando." }
    ]
  },
  {
    q: "Eres el dueño de una panadería y tienes en Excel 10,000 ventas del año. Quieres saber cuánto pan dulce y cuánto bolillo vendiste en total en cada mes de manera rapidísima. ¿Qué herramienta eliges?",
    c: { t: "Tablas Dinámicas.", f: "Correcto. Creas una tabla dinámica, arrastras la categoría 'tipo de pan' a filas y 'meses' a columnas, y boom, te suma miles de datos en un segundo." },
    i: [
      { t: "Hacer las cuentas a mano con calculadora.", f: "Incorrecto. Es poco eficiente y te equivocarías seguro revisando 10,000 registros tú mismo." },
      { t: "Cambiar el tamaño de la letra a 24 para verlo mejor.", f: "Incorrecto. Agrandar la fuente no suma nada, solo te cansa menos la vista." },
      { t: "Poner Zoom para ver toda la pantalla.", f: "Incorrecto. Aunque veas toda la lista de un jalón en miniatura, no te dará la cuenta de las ganancias." }
    ]
  },
  {
    q: "Haces una presentación que parece una página web (tiene un menú principal al inicio que te lleva a diferentes capítulos con dar un clic). ¿Qué opción en PowerPoint permite esto?",
    c: { t: "Hipervínculos o Enlaces en botones o imágenes.", f: "Correcto. Al poner hipervínculos hacia 'lugar de este documento', tus diapositivas se vuelven interactivas como una app." },
    i: [
      { t: "El control de Zoom.", f: "Incorrecto. El Zoom hace las diapositivas grandes o chicas al crear, no hace menús de clics." },
      { t: "Las transiciones.", f: "Incorrecto. La transición es la forma de cambiar entre hojas (desvanecer o cubo) y se hace avanzando, no saltando entre capítulos con botones." },
      { t: "Notas del presentador.", f: "Incorrecto. Es un texto secreto para el que expone. El público no lo ve ni puede darle clic." }
    ]
  },
  {
    q: "Tú y tus compañeros de equipo viven lejos pero deben acabar las diapositivas de historia para mañana. Entran todos a la vez al mismo documento de PowerPoint/Slides en internet. ¿Cómo se llama esto?",
    c: { t: "Edición Colaborativa o Coautoría Simultánea.", f: "Correcto. Trabajar en la nube les permite a todos mover fotos y escribir textos al mismo instante viéndose las caras por cursores." },
    i: [
      { t: "Crear una presentación en una computadora sin internet.", f: "Incorrecto. Sin internet, los demás no podrán ver lo que haces ni participar en tiempo real." },
      { t: "Robo y hackeo de información.", f: "Incorrecto. Hackear es meterse donde no te invitan con intenciones dudosas; ustedes están colaborando legalmente en su tarea." },
      { t: "Impresión masiva.", f: "Incorrecto. Imprimir la presentación es sacarla en papel, no editarla al mismo tiempo juntos." }
    ]
  }
];

