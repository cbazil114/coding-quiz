// Element variables
const container = document.getElementById("container");
const questionsCon = document.getElementById("questionsCon");
// const header = document.getElementById("header");
const startButton = document.querySelector("#start-button");
// const choicesList = document.getElementById("choices-list");
// const scoresList = document.getElementById("scores-list");
const timeMarker = document.getElementById("timeMarker");




// Variables, including some specific numbers to reference later
let score = 0;
let currentQuestionIndex = 0;
let secondsRemain = 76;
// For some reason, starting the secondRemain variable at 75 causes the timer to start at 74
const penalty = 10;
let intervalTime = 0;

// Questions array
const questionArr = [{
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
},
{
    question: "The condition in an if / else statement is enclosed within _____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above",
},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
},
]

startButton.addEventListener("click", function () {
    if (intervalTime === 0) {
        intervalTime = setInterval(function () {
            secondsRemain--;
            timeMarker.textContent = "Time Left: " + secondsRemain;
            if (secondsRemain <= 0) {
                // Why does this not work when = 0?
                clearInterval(intervalTime);
                endOfRound();
                timeMarker.textContent = "Out of time!";
            }
        }, 1000);
    }
    render(currentQuestionIndex);
});
// Displays questions and answers
function render(currentQuestionIndex) {
    questionsCon.innerHTML = "";


}

// Once the round ends, this will go into the last page (creating a new header, paragraph, label, and input)
function endOfRound () {
    questionsCon.innerHTML = "";
    timeMarker.innerHTML = "";
    const endH1 = document.createElement("h1");
    endH1.setAttribute("id", "endH1");
    endH1.textContent = "All done!";
    questionsCon.appendChild(endH1);

    const endPara = document.createElement("p");
    endPara.setAttribute("id", "endPara");
    questionsCon.appendChild(endPara);

    if (secondsRemain >= 0) {
        let timeLeft = secondsRemain;
        let endPara2 = document.createElement("p");
        clearInterval(intervalTime);
        endPara.textContent = "Your final score is " + timeLeft;
        questionsCon.appendChild(endPara2);
    }
    const createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    questionsCon.appendChild(createLabel);

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    questionsCon.appendChild("submit");

}


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

// function countdownClock () {
//     let timerInterval = setInterval(function() {
//         gameClock.textContent = gameTimer;
//         gameTimer--;
//     })
// }

// // function lose( {
// //     counterSpan.textContent = 0;
// //     h1.textContent = "The game is over"
    
// // })


// // Some variables regarding the questions, starting score, and starting time
// let currentQuestionIndex = 0;
// const totalQuestions = questionArr.length
// let finalQuestionIndex = questionArr.length - 1;
// let questionChoices = questionArr[currentQuestionIndex].possibleAnswers;
// let score = 0;

// // counter = 75;
// // counterSpan.textContent = counter;


// function renderQuiz () {
//     const question = document.createElement("h1");
//     question.setAttribute("class", "question");
//     question.setAttribute("id", "question");
//     question.textContent = questionArr[currentQuestionIndex].question;
//     container.appendChild(question);

//     const answer = document.createElement("button");
//     answer.setAttribute("class", "possibleAnswers")
//     answer.setAttribute("id", "possibleAnswers")
//     answer.textContent = questionArr[currentQuestionIndex].possibleAnswers[0];
//     question.appendChild(possibleAnswers);
// }

// // Display the four choices for each question
// // function choices () {
// //     for (var i = 0; i < possibleAnswers.length; i++) {
// //         let choicesBtn = document.createElement("button");
// //         choicesBtn.setAttribute("class", aChoice);
// //         choicesBtn.setAttribute("id", i);
// //         choicesBtn.textContent = questionArr(currentQuestionIndex).possibleAnswers[i];
// //         container.appendChild(choicesBtn);

// //     }
// // }

// function choices () {
    
// }

// // Starts the quiz; removing that container elements and starting renderQuiz to bring questions
// function startQuiz () {
//     console.log("Beginning the quiz!");
//     event.preventDefault();
//     container.innerHTML = "";
//     renderQuiz();


// }

// // function userInitials () {

// // }

// function recordScores() {
//     let scores = JSON.parse(window.localStorage.getitem("scores")) 
// }

// startButton.addEventListener("click", startQuiz);

