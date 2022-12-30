var canvas = document.getElementById("gamecanvas")
var context = canvas.getContext("2d")


var xtail = [25]
var ytail = [25]

var head = context.fillRect(xtail[0],ytail[0], 25, 25)

let score = 0;

var xvelocity = 0;
var yvelocity = 0;

window.addEventListener('keydown',this.check,false);

function check(e) {
    var code = e.keyCode;
    switch (code) {
        case 37: xvelocity = -25; yvelocity = 0; break; //Left key
        case 38: xvelocity = 0; yvelocity = -25; break; //Up key
        case 39: xvelocity = 25; yvelocity = 0; break; //Right key
        case 40: xvelocity = 0; yvelocity = 25; break; //Down key
    }
};

//Apple code
let randappx = [0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475]
let randappy = [0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450,475]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var appx = -25;
var appy = -25;
var apple = context.fillRect(appx,appy, 25, 25)

function getnewapple(){
    appx = randappx[getRandomInt(randappx.length)]
    appy = randappy[getRandomInt(randappy.length)]
    context.fillStyle = "#FF0000"
    apple = context.fillRect(appx,appy, 25, 25)
    context.fillStyle = "#000000"
}

//snake tail processing
const delay = ms => new Promise(res => setTimeout(res, ms));

function crash(){
    alert("YOU CRASHED! GREAT EFFORT! MAYBE NEXT TIME! SCORE: " + score)
    xvelocity=0
    yvelocity=0
    score = 0
    xtail = [25]
    ytail = [25]
}

//game process ordering

function move(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    //moving the snake
    xtail[xtail.length - 1] = xtail[xtail.length - 1] + xvelocity;
    ytail[ytail.length - 1] = ytail[ytail.length - 1] + yvelocity;
    for (let i = 0; i < xtail.length-1; i++){
        xtail[i] = xtail[i+1]
        ytail[i] = ytail[i+1]
    } 
    //if snake eats apple
    if (appx === xtail[xtail.length - 1]) {
        if (appy === ytail[ytail.length - 1]) {
            score = score + 1;
            getnewapple()
            xtail.unshift(oldx)
            ytail.unshift(oldy)
            xtail.unshift(old2x)
            ytail.unshift(old2y)
        }
    }
    //check for crashes
    if (xtail[xtail.length - 1]=== -25 || xtail[xtail.length - 1]=== 500){
        crash()
    }
    if (ytail[ytail.length - 1]=== -25 || ytail[ytail.length - 1]=== 500){
        crash()
    }
    for (let i = 0; i < (xtail.length - 1); i++){
        if (xtail[xtail.length - 1]=== xtail[i-1] && ytail[ytail.length - 1]=== ytail[i-1]){
            crash()
        }
    }

    //putting the snake on the screen
    for (let i = 0; i < xtail.length; i++){
        context.fillRect(xtail[i],ytail[i], 25, 25)
    }
    var oldx = xtail[0];
    var oldy = ytail[0];
    var old2x = xtail[1];
    var old2y = ytail[1];

    context.fillStyle = "#FF0000"
    let apple = context.fillRect(appx,appy, 25, 25)
    context.fillStyle = "#000000"

    setTimeout(move, 90)
    document.getElementById("scoreboard").innerHTML = "SCORE: " + score;
}

getnewapple()
move()
