let randbtn = document.getElementById("btnrandomNumber")
randbtn.addEventListener("click", randnum, false)

function randnum(){
    let topnum = document.getElementById("txtrandomNumber").value
    if (topnum > 0) {
        let newnum = Math.floor(Math.random() * topnum)
        document.getElementById("resultrandomNumber").innerHTML = newnum
    } else {
        alert("ENTER A POSITIVE NUMBER!!!");
    }
}
/*
let randsrc = ["https://cse.unl.edu/~aarslan/csce120/images/cat_outside.jpg", "https://cse.unl.edu/~aarslan/csce120/images/cat-george.jpg", "https://cse.unl.edu/~aarslan/csce120/images/adorable-cat.jpg", "https://cse.unl.edu/~aarslan/csce120/images/cat-conjunctivitis-causes.jpg"]
*/
const result= document.getElementById("resultrandomcat");
let randsrc= ["/image/adorable-cat.jpg","/image/cat_outside.jpg","/image/cat-conjunctivitis-causes.jpg","/image/cat-george.jpg"]
let randimgbtn = document.getElementById("btnrandomcat")
randimgbtn.addEventListener("click", randimg, false)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

function randimg(){
    result.innerHTML = "";
    let newimage = randsrc[getRandomInt(randsrc.length)]
    const img = document.createElement("img");
    img.setAttribute("src",newimage);
    result.appendChild(img);
}

/*
let randsrc= ["/image/adorable-cat.jpg","/image/cat_outside.jpg","/image/cat-conjunctivitis-causes.jpg","/image/cat-george.jpg"]
let randimgbtn = document.getElementById("btnrandomcat")
randimgbtn.addEventListener("click", randimg, false)

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

function randimg(){
    let imgnum = getRandomInt(randsrc.length);
    document.getElementById("resultrandomcat").src = randsrc[imgnum]
}
*/
let factorbtn = document.getElementById("btnFlipFlop")
factorbtn.addEventListener("click", factorchecker, false)

function factorchecker() {
    let coolnum = document.getElementById("txtFlipFlop").value
    if (coolnum%3 === 0){
        if (coolnum%5 === 0) {
            document.getElementById("resultFlipFlop").innerHTML = "FlipFlop"

        } else {
            document.getElementById("resultFlipFlop").innerHTML = "Flip"


        }
    } else if (coolnum%5 === 0){
        document.getElementById("resultFlipFlop").innerHTML = "Flop"

    } else{
        document.getElementById("resultFlipFlop").innerHTML = coolnum

    }


}