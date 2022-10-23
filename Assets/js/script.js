// Element variables
const container = document.getElementById("container");
const header = document.getElementById("header");
const startButton = document.querySelector("#start-button");
const choicesList = document.getElementById("choices-list");
const scoresList = document.getElementById("scores-list");
const timer = document.getElementById("timer");

// Questions array
const questionArr = [{
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
},
{
    question: "The condition in an if / else statement is enclosed within _____.",
    possibleAnswers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above",
},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    possibleAnswers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: "console.log",
},
]

// Getting the timer to display
// let counter = 0;
// let timerEl = document.createElement("header", "id", "timer", "Time Remaining: ");
// timerEl.setAttribute("class", "top-position", "right: 5px");
// header.appendChild(timerEl);
// let counterSpan = document.createElement("span", "id", "countdown", "counter" );
// timerEl.appendChild(counterSpan);

// How the timer should function on the page
// function startTimer() {
//     timer = setInterval(function() {
//         counter--;
//         counterSpan.textContent = counter;
//         if (counter === 0) {
//           clearInterval(timerCount);
//           lose();
//         }
//     }, 1000);
// }

function countdownClock () {
    let timerInterval = setInterval(function() {
        gameClock.textContent = gameTimer;
        gameTimer--;
    })
}

// function lose( {
//     counterSpan.textContent = 0;
//     h1.textContent = "The game is over"
    
// })


// Some variables regarding the questions, starting score, and starting time
let currentQuestionIndex = 0;
const totalQuestions = questionArr.length
let finalQuestionIndex = questionArr.length - 1;
let questionChoices = questionArr[currentQuestionIndex].possibleAnswers;
let score = 0;

// counter = 75;
// counterSpan.textContent = counter;


function renderQuiz () {
    const question = document.createElement("h1");
    question.setAttribute("class", "question");
    question.setAttribute("id", "question");
    question.textContent = questionArr[currentQuestionIndex].question;
    container.appendChild(question);

    const answer = document.createElement("button");
    answer.setAttribute("class", "possibleAnswers")
    answer.setAttribute("id", "possibleAnswers")
    answer.textContent = questionArr[currentQuestionIndex].possibleAnswers[0];
    question.appendChild(possibleAnswers);
}

// Display the four choices for each question
// function choices () {
//     for (var i = 0; i < possibleAnswers.length; i++) {
//         let choicesBtn = document.createElement("button");
//         choicesBtn.setAttribute("class", aChoice);
//         choicesBtn.setAttribute("id", i);
//         choicesBtn.textContent = questionArr(currentQuestionIndex).possibleAnswers[i];
//         container.appendChild(choicesBtn);

//     }
// }

function choices () {
    
}

// Starts the quiz; removing that container elements and starting renderQuiz to bring questions
function startQuiz () {
    console.log("Beginning the quiz!");
    event.preventDefault();
    container.innerHTML = "";
    renderQuiz();


}

// function userInitials () {

// }

function recordScores() {
    let scores = JSON.parse(window.localStorage.getitem("scores")) 
}

startButton.addEventListener("click", startQuiz);

