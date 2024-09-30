const preguntas = [
    {
        pregunta: "1. ¿Qué son las actividades productivas urbanas?",
        opciones: ["Actividades que se realizan en el campo", "Actividades económicas que se desarrollan en la ciudad", "Actividades relacionadas con el turismo"],
        respuesta: 2
    },
    {
        pregunta: "2. ¿Cuál es un ejemplo de una actividad productiva urbana?",
        opciones: ["Venta de productos en un mercado", "Pesca en el río", "Cosecha de maíz en una granja"],
        respuesta: 1
    },
    {
        pregunta: "3. ¿Qué tipo de transporte es común en las actividades productivas urbanas?",
        opciones: ["Carros tirados por caballos", "Tractores", "Camiones y bicicletas para entregas"],
        respuesta: 3
    },
    {
        pregunta: "4. ¿Cuál es una diferencia clave entre áreas urbanas y rurales?",
        opciones: ["En las áreas urbanas hay más naturaleza", "Las áreas urbanas tienen más población y actividades comerciales que las rurales", "En las áreas rurales hay más edificios altos"],
        respuesta: 2
    },
    {
        pregunta: "5. ¿Qué hacen las empresas tecnológicas en las ciudades?",
        opciones: ["Cultivan frutas y verduras", "Crían animales", "Desarrollan programas y aplicaciones para dispositivos"],
        respuesta: 3
    },
    {
        pregunta: "6. ¿Qué es el comercio en las ciudades?",
        opciones: ["Hacer excursiones en la naturaleza", "Vender productos y servicios", "Cosechar frutas"],
        respuesta: 2
    },
    {
        pregunta: "7. ¿Qué son las huertas urbanas?",
        opciones: ["Espacios donde las personas cultivan plantas y vegetales en la ciudad ", "Campos grandes fuera de la ciudad", "Fabricas de ropa"],
        respuesta: 1
    },
    {
        pregunta: "8. ¿Qué es el reciclaje en las ciudades?",
        opciones: ["Quemar basura", "Usar materiales viejos para hacer cosas nuevas", "Tirar basura al río"],
        respuesta: 2
    },
    {
        pregunta: "9. ¿Qué tipos de trabajos se encuentran en una ciudad?",
        opciones: ["Agricultura y ganadería", "Conducción de trenes", "Pesca y minería"],
        respuesta: 2
    },
    {
        pregunta: "10. ¿Cómo ayudan los parques en las ciudades?",
        opciones: ["Sirven como estacionamientos", "Reducen la contaminación y mejoran el aire", "Generan energía eléctrica"],
        respuesta: 2
    }
];

const inicioBoton = document.getElementById('inicio');
const preguntaElemento = document.getElementById('pregunta');
const opcionesElementos = [document.getElementById('opcion1'), document.getElementById('opcion2'), document.getElementById('opcion3')];
const labelElementos = [document.getElementById('label1'), document.getElementById('label2'), document.getElementById('label3')];
const siguienteBoton = document.getElementById('siguiente');
const puntuacionElemento = document.getElementById('puntuacion');
const tiempoElemento = document.getElementById('tiempo');

let indicePregunta = 0;
let puntuacion = 0;

function mostrarPregunta() {
    // Mostrar los checkboxes y etiquetas
    document.getElementById('opcion1-container').style.display = "block";
    document.getElementById('opcion2-container').style.display = "block";
    document.getElementById('opcion3-container').style.display = "block";

    const preguntaActual = preguntas[indicePregunta];
    preguntaElemento.textContent = preguntaActual.pregunta;
    preguntaElemento.style.display = "block";

    for (let i = 0; i < 3; i++) {
        labelElementos[i].textContent = preguntaActual.opciones[i];
        opcionesElementos[i].style.display = "block";
        labelElementos[i].style.display = "block";
    }

    siguienteBoton.style.display = "block";
    inicioBoton.style.display = "none";
}

inicioBoton.addEventListener('click', () => {
    inicioBoton.style.display = "none"; // Ocultar el botón "Comenzar"
    mostrarPregunta();
});

function verificarRespuesta() {
    const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked');
    
    if (opcionSeleccionada) {
        const indiceRespuesta = Number(opcionSeleccionada.id.slice(-1));
        const preguntaActual = preguntas[indicePregunta];
        
        if (indiceRespuesta === preguntaActual.respuesta) {
            puntuacion++;
        }
    }

    puntuacionElemento.textContent = `Puntuación: ${puntuacion}`;
    indicePregunta++;

    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
        preguntaElemento.textContent = "Trivia completada. Tu puntuación final es: " + puntuacion;
        for (let i = 0; i < 3; i++) {
            opcionesElementos[i].style.display = "none";
            labelElementos[i].style.display = "none";
        }
        siguienteBoton.style.display = "none";
    }
}

inicioBoton.addEventListener('click', mostrarPregunta);
siguienteBoton.addEventListener('click', () => {
    verificarRespuesta();
});