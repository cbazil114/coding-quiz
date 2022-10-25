// Element variables
const container = document.getElementById("container");
const questionsCon = document.getElementById("questionsCon");
// const header = document.getElementById("header");
const startButton = document.querySelector("#start-button");
// const choicesList = document.getElementById("choices-list");
// const scoresList = document.getElementById("scores-list");
const timeMarker = document.getElementById("timeMarker");




// Variables, including some specific numbers to reference later
let currentScore = 0;
let currentQuestionIndex = 0;
let secondsRemain = 76;
// For some reason, starting the secondRemain variable at 75 causes the timer to start at 74
const penalty = 10;
let intervalTime = 0;
const ulEl = document.createElement("ul");
let counter = 0;

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
// Startbutton activates the timer, and calls the render function for the question
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
            } else if (currentQuestionIndex >= questionArr.length + 1) {
                clearInterval(intervalTime);
                endOfRound();
            }
        }, 1000);
    }
    render(currentQuestionIndex);
});
// Displays question
function render() {
    var currentQuestion = questionArr[currentQuestionIndex];
    questionsCon.innerHTML = "";
    ulEl.innerHTML = "";

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


    // Compare answers to find the correct one to display to user
    function checkAnswer(e) {
        let targetAnswer = e.target;
        if (targetAnswer.matches("li")) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", "newDiv");
            if (targetAnswer.textContent == questionArr[currentQuestionIndex].answer) {
                currentScore++;
                newDiv.textContent = "Correct!";
            } else {
                secondsRemain = secondsRemain - penalty;
                newDiv.textContent = "Incorrect answer. The correct answer is: " + questionArr[currentQuestionIndex].answer;
            }

            // Increase in currentQuestionIndex until all questions have been exhausted
            currentQuestionIndex++;
            if (currentQuestionIndex >= questionArr.length) {
                clearInterval(intervalTime);
                endOfRound();
                newDiv.textContent = "All done!" + " " + "You got " + currentScore + " out of " + questionArr.length + " correct!";
                console.log(newDiv);
                questionsCon.appendChild(newDiv);
            } else {
                render(currentQuestionIndex);
                questionsCon.appendChild(newDiv);
            }


        }
    }
}
// Once the round ends, this will go into the last page which will display slightly differently depending on if time ran out or the quiz was completed
function endOfRound() {
    questionsCon.innerHTML = "";
    timeMarker.innerHTML = "";
    const endH1 = document.createElement("h1");
    endH1.setAttribute("id", "endH1");
    endH1.textContent = "All done!";
    questionsCon.appendChild(endH1);

    const endPara = document.createElement("p");
    endPara.setAttribute("id", "endPara");
    questionsCon.appendChild(endPara);

    let timeLeft; 
    let totalScore;

    if (secondsRemain === 0) {
        timeLeft = secondsRemain;

        let endPara2 = document.createElement("p");
        clearInterval(intervalTime);
        endPara.textContent = "You are out of time, and have failed the quiz";
        questionsCon.appendChild(endPara2);
    }
    // Create elements for users to interact with - initials input, submit button, etc. 
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

    // When you submit your initials, the EventListener will do one of two things - ask for two initials or store the score in the localStorage, and bring you to the highscores page
    submit.addEventListener("click", function () {
        let initials = createInput.value;

        if (initials.length !== 2) {
            window.alert("Pleae enter two initials");
            return;

        } else {
            let finalScore = {
                initials: initials,
                score: currentScore,
            }
            console.log(finalScore);
            let scoreboard = localStorage.getItem("scoreboard");
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


