const highscore = document.getElementById("highscore");
const return = document.getElementById("return");
const clear = document.getElementById("clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

})

let scoreboard = localStorage.getItem("scoreboard");
scoreboard = JSON.parse(scoreboard);

if (scoreboard !== null) {
    for (let i = 0; i < scoreboard.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = scoreboard[1].initials + " " + scoreboard[i].score;
        highscore.appendChild(liEl);
    }
}

return.addEventListener("click", function () {
    window.location.replace("./index.html")
})