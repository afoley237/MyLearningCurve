const gameObjects = ["🪨","📰","✂️"];

const targetObjects = document.querySelectorAll(".gamezone a")
const scoreboard = document.querySelector("#scoreBoard")

for (var i = 0; i < targetObjects.length; i++) {
    targetObjects[i].addEventListener("click", playGame, false)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

function playGame(){
    let computerchoice = gameObjects[getRandomInt(gameObjects.length)]
    let consumerchoice = this.textContent;

    if (computerchoice === gameObjects[0]) {
        var pc = "rock"
    } else if (computerchoice === gameObjects[1]) {
        var pc = "paper"
    } else{
        var pc = "scissor";
    }
    if (consumerchoice === gameObjects[0]) {
        var person = "rock"
    } else if (consumerchoice === gameObjects[1]) {
        var person = "paper"
    } else{
        var person = "scissor";
    }
    if (person === "rock"){
        if (pc === "rock"){
            scoreboard.innerHTML = "It's a TIE, You chose " + consumerchoice + ",Computer chose " + computerchoice
        } else if(pc === "paper"){
            scoreboard.innerHTML = "YOU LOSE, You chose " + consumerchoice + ",Computer chose " + computerchoice

        } else {
            scoreboard.innerHTML = "YOU WIN, You chose " + consumerchoice + ",Computer chose " + computerchoice

        }

    } else if (person === "paper"){
        if (pc === "rock"){
            scoreboard.innerHTML = "YOU WIN, You chose " + consumerchoice + ",Computer chose " + computerchoice
        } else if(pc === "paper"){
            scoreboard.innerHTML = "It's a TIE, You chose " + consumerchoice + ",Computer chose " + computerchoice

        } else {
            scoreboard.innerHTML = "YOU LOSE, You chose " + consumerchoice + ",Computer chose " + computerchoice

        }

    } else{
        if (pc === "rock"){
            scoreboard.innerHTML = "YOU LOSE, You chose " + consumerchoice + ",Computer chose " + computerchoice
        } else if(pc === "paper"){
            scoreboard.innerHTML = "YOU WIN, You chose " + consumerchoice + ",Computer chose " + computerchoice

        } else {
            scoreboard.innerHTML = "It's a TIE, You chose " + consumerchoice + ",Computer chose " + computerchoice

        }
    }
}