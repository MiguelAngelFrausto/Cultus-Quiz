const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const categoria = document.getElementById("categoria");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let i=0;
let availableQuestions = [];
let answerClient;

// Arreglo almacendado las preguntas y respuestas
let questions = [

    {
       
        categoria: "Producto/Servicio",
        question: "¿Cómo calificas la calidad de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 1

    },

    {
        
        categoria:"Producto/Servcio",
        question: "¿Cómo calificas el precio de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 5
        
    },

    {
        
        categoria: "Producto/Servicio",
        question: "¿Cómo calificas el desempeño de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 5
        
    },

    {
        
        categoria: "Producto/Servicio",
        question: "¿Cómo consideras la ubicación o distribución  de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 2
        
    },

    {
        categoria: "Experiencia",
        question: "¿Cómo calificas la facilidad de uso  de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 4
        
    },

    {
        categoria: "Experiencia",
        question: "¿Cómo calificas la información disponible para el consumidor  de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 2
        
    },

    {
        categoria: "Experiencia",
        question: "¿Cómo calificas la atención para el consumidor en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 1
        
    },

    {
        categoria: "Experiencia",
        question: "¿Cómo calificas la satisfacción del consumidor después de usar tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 1
        
    },

    {
        categoria: "Comunicación",
        question: "¿Cómo la identidad de tu marca en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 1
        
    },
    
    {
        categoria: "Comunicación",
        question: "¿Cómo calificas la segmentación de tu mercado en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 4
        
    },
    
    {
        categoria: "Comunicación",
        question: "¿Cómo calificas la diferenciación de tu posicionamiento de marca en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 5
        
    },
    
    {
        categoria: "Comunicación",
        question: "¿Cómo calificas el alcance de tus medios en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 3
        
    },
];

 // Constantes
 const MAX_QUESTIONS = 12;   
 startGame = () => {

    questionCounter = 0;
    i = 0;
    score = 0;
    availableQuestions = questions;
    console.log(availableQuestions);
    getNewQuestions();
 };

 // Mostrar las respuestas
 getNewQuestions = () => {
    /*
    if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS){

        
    }
*/
    questionCounter++;
    const questionIndex = Math.floor(Math.random() / availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    categoria.innerText = currentQuestion.categoria;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

 };

// Selecion de respuesta

 choices.forEach( choice => {
    choice.addEventListener("click", e => {

        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        console.log(selectedAnswer);
        getNewQuestions();

    });
 });

 startGame();


