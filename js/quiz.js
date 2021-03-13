const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const categoria = document.getElementById("categoria");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let answerClient;

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
        categoria: "Producto/Servicio",
        question: "¿Cómo calificas la calidad de tu producto o servicio en comparación con tu competencia?",
        choice1: "Muy mal",
        choice2: "Mal",
        choice3: "Aceptable",
        choice4: "Bueno",
        choice5: "Sobresaliente",
        answer: 3
        
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

 startGame = () => {

    questionCounter = 0;
    score = 0;
    availableQuestions = questions;
    console.log(availableQuestions);
    getNewQuestions();
 };

 
 getNewQuestions = () => {

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    categoria.innerText = currentQuestion.categoria;

 };

 startGame();


