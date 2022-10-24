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
const ulEl = document.createElement("ul");

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
];

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
// Displays question
function render(currentQuestionIndex) {
    questionsCon.innerHTML = "";
    ulEl.innerHTML = "";
    for (let i = 0; i < questionArr.length; i++) {
        let titleQuestion = questionArr[currentQuestionIndex].question;
        const userChoices = questionArr[currentQuestionIndex].choices;
        questionsCon.textContent = titleQuestion;

        userChoices.forEach(function (newItem) {
        let liEl = document.createElement("li");
        liEl.textContent = newItem;
        questionsCon.appendChild(ulEl);
        ulEl.appendChild(liEl);
        liEl.addEventListener("click", (checkAnswer));
        });
    }

// Compare answers to find the correct one
function checkAnswer (e) {
    let targetAnswer = e.target;
    if (targetAnswer.matches("li")) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");
        if (targetAnswer.textContent == questionArr[currentQuestionIndex].answer) {
            score++;
            newDiv.textContent = "Correct!";
        } else {
            secondsRemain = secondsRemain - penalty;
            newDiv.textContent = "Incorrect answer. The correct answer is: " + questionArr[currentQuestionIndex].answer;
        }
    
// New question
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionArr.length) {
        endOfRound();
        newDiv.textContent = "All done!" + " " + "You got " + score + "out of " + questionArr.length + " correct!";
    } else {
        render(currentQuestionIndex);
        questionsCon.appendChild(newDiv);
    }
    

}
}
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

    const createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
    questionsCon.appendChild(createInput);

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Submit";
    questionsCon.appendChild(submit);

    submit.addEventListener("click", function () {
        let initials = createInput.value;

        if (initials === null) {
            window.alert("No value entered");

        } else {
            let finalScore = {
                initials: initials,
                score: timeLeft,
            }
            console.log(finalScore);
            const scoreboard = localStorage.getItem("scoreboard");
            if (scoreboard === null) {
                scoreboard = [];
            } else {
                scoreboard = JSON.parse(scoreboard);
            }
            scoreboard.push(finalScore);
            let newScore = JSON.stringify(scoreboard);
            localStorage.setItem("scoreboard", newScore);
            window.location.replace("./highscores.html");
            }
        });
    }


//EVERYTHING BELOW THIS LINE IS CODE I TRIED AND FAILED AT CERTAIN POINTS. I WANTED TO KEEP IT TO BETTER UNDERSTAND WHERE I WENT WRONG


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
// 
