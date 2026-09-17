// Variables de estado del examen
let preguntasSeleccionadas = [];
let indiceActual = 0;
let correctas = 0;
let incorrectas = 0;
let preguntasFalladas = [];
let indiceCorrectaAnterior = -1;

// Variables de tiempo y cronómetro
let timerEnabled = true;
let timerDurationSeconds = 50 * 60;
let timerRemainingSeconds = 50 * 60;
let timerElapsedSeconds = 0;
let timerInterval = null;
let preguntaStartTime = null;
let examenStartTime = null;
let tiemposPorRespuesta = [];

// Banco de frases motivacionales positivas
const frasesCorrectas = [
    "¡Lo hiciste muy bien, es correcto!",
    "¡Excelente trabajo! Has elegido la respuesta correcta.",
    "¡Muy bien pensado! Tu respuesta es completamente acertada.",
    "¡Gran deducción! Demuestras que comprendes el tema a la perfección.",
    "¡Felicidades! Un análisis impecable y respuesta correcta."
];

const frasesIncorrectas = [
    "Lo harás mejor en la próxima, ¡sigue esforzándote!",
    "¡No te desanimes! Cada error es una valiosa oportunidad de aprender.",
    "Ánimo, con paciencia y práctica lo lograrás en la próxima.",
    "¡Buen intento! Revisa la retroalimentación para seguir fortaleciendo tus conocimientos.",
    "No te preocupes, lo harás mucho mejor en la próxima. ¡Tú puedes!"
];

// Referencias del DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');

const questionsCountInput = document.getElementById('questions-count');
const maxQuestionsLabel = document.getElementById('max-questions-label');
const totalQuestionsCounter = document.getElementById('total-questions-counter');
const changeConfigBtn = document.getElementById('change-config-btn');

const timerEnableCheck = document.getElementById('timer-enable');
const timerInputContainer = document.getElementById('timer-input-container');
const timerMinutesInput = document.getElementById('timer-minutes');
const timerBadge = document.getElementById('timer-badge');
const timerDisplay = document.getElementById('timer-display');
const timeoutAlert = document.getElementById('timeout-alert');
const avgTimeDisplay = document.getElementById('avg-time');
const totalTimeDisplay = document.getElementById('total-time');

// Event listeners para inicialización
startBtn.addEventListener('click', iniciarExamen);
nextBtn.addEventListener('click', siguientePregunta);
retryBtn.addEventListener('click', iniciarExamen);

if (changeConfigBtn) {
    changeConfigBtn.addEventListener('click', () => {
        endScreen.classList.remove('active');
        startScreen.classList.add('active');
    });
}

// Configuración de límites dinámicos para la cantidad de preguntas según el banco
if (questionsCountInput && typeof bancoPreguntas !== 'undefined') {
    questionsCountInput.min = 1;
    questionsCountInput.max = bancoPreguntas.length;
    if (maxQuestionsLabel) {
        maxQuestionsLabel.innerText = `preguntas (mín. 1, máx. ${bancoPreguntas.length})`;
    }

    // Validación interactiva para evitar que exceda el total o sea menor a 1
    questionsCountInput.addEventListener('input', () => {
        let val = parseInt(questionsCountInput.value, 10);
        if (!isNaN(val) && val > bancoPreguntas.length) {
            questionsCountInput.value = bancoPreguntas.length;
        }
    });

    questionsCountInput.addEventListener('blur', () => {
        let val = parseInt(questionsCountInput.value, 10);
        if (isNaN(val) || val < 1) {
            questionsCountInput.value = 1;
        } else if (val > bancoPreguntas.length) {
            questionsCountInput.value = bancoPreguntas.length;
        }
    });
}

// Control visual del input de minutos según el checkbox
timerEnableCheck.addEventListener('change', () => {
    if (timerEnableCheck.checked) {
        timerInputContainer.style.display = 'flex';
    } else {
        timerInputContainer.style.display = 'none';
    }
});

// Función para mezclar elementos de un arreglo (Fisher-Yates)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Formateador de tiempo estilo MM:SS
function formatTimeClock(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');
    return `${mStr}:${sStr}`;
}

// Formateador de tiempo legible (ej. "45 segundos" o "1 min 12 s")
function formatTimeReadable(totalSeconds) {
    totalSeconds = Math.max(0, Math.round(totalSeconds));
    if (totalSeconds < 60) {
        return `${totalSeconds} segundo${totalSeconds !== 1 ? 's' : ''}`;
    }
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins} min ${secs} s`;
}

function iniciarExamen() {
    // Detener cualquier cronómetro previo
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Reiniciar estado
    correctas = 0;
    incorrectas = 0;
    indiceActual = 0;
    preguntasFalladas = [];
    indiceCorrectaAnterior = -1;
    tiemposPorRespuesta = [];
    actualizarMarcadores();

    if (timeoutAlert) {
        timeoutAlert.classList.add('hidden');
    }

    // Configuración del cronómetro
    timerEnabled = timerEnableCheck.checked;
    const minutosConfigurados = Math.max(1, parseInt(timerMinutesInput.value, 10) || 50);
    timerDurationSeconds = minutosConfigurados * 60;
    timerRemainingSeconds = timerDurationSeconds;
    timerElapsedSeconds = 0;

    timerBadge.classList.remove('warning', 'danger');

    if (timerEnabled) {
        timerDisplay.innerText = formatTimeClock(timerRemainingSeconds);
        timerInterval = setInterval(() => {
            timerRemainingSeconds--;
            timerDisplay.innerText = formatTimeClock(timerRemainingSeconds);

            // Alerta visual cuando queda poco tiempo
            if (timerRemainingSeconds <= 300 && timerRemainingSeconds > 60) {
                timerBadge.classList.add('warning');
                timerBadge.classList.remove('danger');
            } else if (timerRemainingSeconds <= 60) {
                timerBadge.classList.remove('warning');
                timerBadge.classList.add('danger');
            }

            if (timerRemainingSeconds <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                finalizarExamen(true); // Finalizar por tiempo agotado
            }
        }, 1000);
    } else {
        // Modo medición libre (cuenta progresiva hacia arriba)
        timerDisplay.innerText = formatTimeClock(timerElapsedSeconds);
        timerInterval = setInterval(() => {
            timerElapsedSeconds++;
            timerDisplay.innerText = formatTimeClock(timerElapsedSeconds);
        }, 1000);
    }

    // Marca de tiempo de inicio del examen
    examenStartTime = performance.now();

    // Validar cantidad de preguntas deseada (mínimo 1, máximo el total del banco)
    let cantidadDeseada = 16;
    if (questionsCountInput) {
        cantidadDeseada = parseInt(questionsCountInput.value, 10);
        if (isNaN(cantidadDeseada) || cantidadDeseada < 1) {
            cantidadDeseada = 1;
        } else if (cantidadDeseada > bancoPreguntas.length) {
            cantidadDeseada = bancoPreguntas.length;
        }
        questionsCountInput.value = cantidadDeseada;
    }

    // Seleccionar la cantidad elegida de preguntas aleatorias del banco
    const bancoMezclado = shuffle([...bancoPreguntas]);
    preguntasSeleccionadas = bancoMezclado.slice(0, cantidadDeseada);

    if (totalQuestionsCounter) {
        totalQuestionsCounter.innerText = preguntasSeleccionadas.length;
    }

    // Cambiar a pantalla de quiz
    startScreen.classList.remove('active');
    endScreen.classList.remove('active');
    quizScreen.classList.add('active');

    mostrarPregunta();
}

function mostrarPregunta() {
    // Ocultar feedback y botón siguiente
    feedbackContainer.classList.add('hidden');
    feedbackContainer.classList.remove('correct', 'incorrect');
    nextBtn.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    const p = preguntasSeleccionadas[indiceActual];
    document.getElementById('question-text').innerText = `${indiceActual + 1}. ${p.q}`;
    document.getElementById('question-counter').innerText = indiceActual + 1;
    if (totalQuestionsCounter) {
        totalQuestionsCounter.innerText = preguntasSeleccionadas.length;
    }

    // Registrar momento en que se muestra la pregunta para medir el tiempo de respuesta
    preguntaStartTime = performance.now();

    // Lógica para que la posición de la respuesta correcta NO se repita consecutivamente
    let posiblesIndices = [0, 1, 2, 3];
    if (indiceCorrectaAnterior !== -1) {
        posiblesIndices = posiblesIndices.filter(i => i !== indiceCorrectaAnterior);
    }
    
    // Elegir aleatoriamente de los índices permitidos
    const indiceCorrecta = posiblesIndices[Math.floor(Math.random() * posiblesIndices.length)];
    indiceCorrectaAnterior = indiceCorrecta; // Guardar para la siguiente pregunta

    // Mezclar las 3 opciones incorrectas
    const incorrectasMezcladas = shuffle([...p.i]).slice(0, 3);
    const opciones = [];
    let indexIncorrecta = 0;

    const letras = ['A', 'B', 'C', 'D'];

    // Construir el arreglo de las 4 opciones
    for (let i = 0; i < 4; i++) {
        if (i === indiceCorrecta) {
            opciones.push({ texto: p.c.t, retro: p.c.f, esCorrecta: true });
        } else {
            opciones.push({ texto: incorrectasMezcladas[indexIncorrecta].t, retro: incorrectasMezcladas[indexIncorrecta].f, esCorrecta: false });
            indexIncorrecta++;
        }
    }

    // Renderizar botones
    opciones.forEach((opc, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="letra">${letras[index]})</span> <span>${opc.texto}</span>`;
        btn.onclick = () => procesarRespuesta(btn, opc, p);
        optionsContainer.appendChild(btn);
    });
}

function procesarRespuesta(btnSeleccionado, opcion, preguntaOriginal) {
    // Calcular tiempo que tardó el alumno en responder esta pregunta
    if (preguntaStartTime) {
        const segundosTomados = (performance.now() - preguntaStartTime) / 1000;
        tiemposPorRespuesta.push(segundosTomados);
        preguntaStartTime = null;
    }

    // Deshabilitar todos los botones para que no responda de nuevo
    const botones = optionsContainer.querySelectorAll('.option-btn');
    botones.forEach(b => b.disabled = true);

    const fTitle = document.getElementById('feedback-title');
    const fText = document.getElementById('feedback-text');

    if (opcion.esCorrecta) {
        btnSeleccionado.classList.add('correct');
        correctas++;
        feedbackContainer.classList.add('correct');
        
        // Selección aleatoria de frase motivacional positiva para aciertos
        const frasePositiva = frasesCorrectas[Math.floor(Math.random() * frasesCorrectas.length)];
        fTitle.innerText = frasePositiva;
        fText.innerHTML = `<p>${opcion.retro}</p>`;
    } else {
        btnSeleccionado.classList.add('incorrect');
        incorrectas++;
        
        // Buscar el botón correcto para resaltarlo
        botones.forEach(b => {
            if (b.innerHTML.includes(preguntaOriginal.c.t)) {
                b.classList.add('correct');
            }
        });

        feedbackContainer.classList.add('incorrect');
        
        // Selección aleatoria de frase motivacional positiva para errores
        const fraseAnimo = frasesIncorrectas[Math.floor(Math.random() * frasesIncorrectas.length)];
        fTitle.innerText = fraseAnimo;
        fText.innerHTML = `<strong>¿Por qué no es correcta tu elección?:</strong> ${opcion.retro}<br><br><strong>La respuesta correcta era:</strong> ${preguntaOriginal.c.t}<br><strong>¿Por qué?:</strong> ${preguntaOriginal.c.f}`;
        
        // Guardar para la sección de repaso al final
        preguntasFalladas.push({
            q: preguntaOriginal.q,
            retro: `<strong>La respuesta correcta es:</strong> ${preguntaOriginal.c.t}<br><em>${preguntaOriginal.c.f}</em>`
        });
    }

    actualizarMarcadores();
    feedbackContainer.classList.remove('hidden');
    nextBtn.style.display = 'inline-block';
}

function siguientePregunta() {
    indiceActual++;
    if (indiceActual < preguntasSeleccionadas.length) {
        mostrarPregunta();
    } else {
        finalizarExamen(false);
    }
}

function actualizarMarcadores() {
    document.getElementById('score-correct').innerText = correctas;
    document.getElementById('score-incorrect').innerText = incorrectas;
}

function finalizarExamen(porTiempoAgotado = false) {
    // Detener cronómetro
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // Si terminó por tiempo agotado y estaba respondiendo una pregunta sin enviar
    if (porTiempoAgotado && preguntaStartTime) {
        const segundosTomados = (performance.now() - preguntaStartTime) / 1000;
        tiemposPorRespuesta.push(segundosTomados);
        preguntaStartTime = null;
    }

    quizScreen.classList.remove('active');
    endScreen.classList.add('active');

    // Mostrar alerta de tiempo agotado si aplica
    if (timeoutAlert) {
        if (porTiempoAgotado) {
            timeoutAlert.classList.remove('hidden');
        } else {
            timeoutAlert.classList.add('hidden');
        }
    }

    document.getElementById('final-correct').innerText = correctas;
    document.getElementById('final-incorrect').innerText = incorrectas;

    // Calcular estadísticas de tiempo
    const totalSegundosRespuestas = tiemposPorRespuesta.reduce((acc, curr) => acc + curr, 0);
    const tiempoPromedioSegundos = tiemposPorRespuesta.length > 0 
        ? (totalSegundosRespuestas / tiemposPorRespuesta.length) 
        : 0;

    const tiempoTotalExamenSegundos = examenStartTime 
        ? ((performance.now() - examenStartTime) / 1000) 
        : 0;

    avgTimeDisplay.innerText = formatTimeReadable(tiempoPromedioSegundos);
    totalTimeDisplay.innerText = formatTimeReadable(tiempoTotalExamenSegundos);

    // Listado de repaso de preguntas falladas
    const reviewList = document.getElementById('review-list');
    const reviewContainer = document.getElementById('review-container');
    reviewList.innerHTML = '';

    if (preguntasFalladas.length > 0) {
        reviewContainer.style.display = 'block';
        preguntasFalladas.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${p.q}</strong>${p.retro}`;
            reviewList.appendChild(li);
        });
    } else {
        reviewContainer.style.display = 'none';
    }
}
