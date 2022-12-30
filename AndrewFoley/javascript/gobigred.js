const colors = ['#0000FF', '#8A2BE2', '#A52A2A', '#7FFF00', '#FF0000', '#D2691E', '#8B008B', '#006400', '#556B2F', '#B22222', '#800000'];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
const btn = document.querySelector("#box");
btn.addEventListener("click", changecolor, false);

function changecolor(){
    let color = colors[getRandomInt(colors.length)];
    document.getElementById("box").style.backgroundColor = color;
    document.getElementById("box").innerHTML = getRandomInt(colors.length);

    if (color === "#FF0000"){
        document.getElementById("scoreBoard").innerHTML = "GO BIG RED :) !!!";
    }
}
