const container = document.getElementById("container");
const startButton = document.querySelector("#start-button");

const questions = [{
    question: "Commonly used data types DO NOT include",
    possibleAnswers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "d",
},
{
    question: "The condition in an if / else statement is enclosed within _____.",
    possibleAnswers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "d",
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above",
},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    possibleAnswers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "d",
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: "d",
},
]

let currentQuestionIndex = 0;

function renderQuiz () {
    const question = document.createElement("header");
    question.setAttribute("class", "someName");
    question.setAttribute("id", "someIdName");
    question.textContent = questions[currentQuestionIndex].question;
    container.appendChild(question);
    // build questions, append questions
}

function startQuiz () {
    console.log("Hello");
    container.innerHTML = "";
    renderQuiz();
}

startButton.addEventListener("click", startQuiz);

