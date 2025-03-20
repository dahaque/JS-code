let gameSeq = [];
let userSeq = [];
let colors = ["red", "yellow", "blue", "green"];

let gameStarted = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(gameStarted === false){
        console.log("Game is started");
        gameStarted = true;

        levelUp();
    }
})

function levelUp(){
    level++;
    h2.innerText = `Level : ${level}`;
    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = colors[randomIndex];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flashBtn(randombtn);
}

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout( () => {
        btn.classList.remove("flash")
    } ,300)
}

function Userflash(btn){
    btn.classList.add("userFlash");
    setTimeout( () => {
        btn.classList.remove("userFlash")
    } ,300)
}

function btnPress(){
    let btn = this;
    Userflash(btn)
    
    btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}