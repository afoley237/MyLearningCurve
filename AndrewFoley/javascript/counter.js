

let number= 0;

const btndecrease = document.querySelector("#btnDecrease");
const btnincrease = document.querySelector("#btnIncrease");


btndecrease.addEventListener("click", decrease, false);
btnincrease.addEventListener("click", increase, false);

function decrease() {
    if (number === 0){

    } else {
        number=number - 1
        document.getElementById("countBoard").innerHTML = number;
        if (number > 0){
            document.getElementById("countBoard").style.backgroundColor = "yellow";
    
        } else {
            document.getElementById("countBoard").style.backgroundColor = "red";
        }
    }

    
}
function increase() {
    number=number + 1
    document.getElementById("countBoard").innerHTML = number;
    if (number > 0){
        document.getElementById("countBoard").style.backgroundColor = "yellow";

    } else {
        document.getElementById("countBoard").style.backgroundColor = "red";
    }
    
}
