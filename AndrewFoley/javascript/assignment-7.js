document.getElementById("name").innerHTML = "Andrew Foley";

const agebtn = document.querySelector("#btnGetAge")
const catbtn = document.querySelector("#btnSwitchCats")
var imgnum = 1;
agebtn.addEventListener("click", ageprompt, false);
catbtn.addEventListener("click", switchcatty, false)

function ageprompt(){
    var valage = document.getElementById("txtage").value
    document.getElementById("divAgeDisplayResult").innerHTML = "I am " + valage + " years old";
}

function switchcatty(){
    if (imgnum === 1){
        document.getElementById("coolcats").src = "/image/cat2.png"
        imgnum = 2;
    }
    else{
        document.getElementById("coolcats").src = "/image/cat1.png"
        imgnum = 1;
    }
}