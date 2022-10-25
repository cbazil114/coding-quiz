const highscore = document.getElementById("highscore");
const returns = document.getElementById("returns");
const clear = document.getElementById("clear");

// EventListener to clear the highscores when clicked
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

})
// Returns high score values
let scoreboard = localStorage.getItem("scoreboard");
scoreboard = JSON.parse(scoreboard);

// List on the scoreboard/highscores page
if (scoreboard !== null) {
    for (let i = 0; i < scoreboard.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = scoreboard[i].initials + " " + scoreboard[i].score;
        highscore.appendChild(liEl);
    }
}
// Return to the start quiz page
returns.addEventListener("click", function () {
    window.location.replace("./index.html")
})