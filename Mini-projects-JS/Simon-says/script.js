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
    userSeq = [];
    level++;
    h2.innerText = `Level : ${level}`;
    let randomIndex = Math.floor(Math.random() * 4);
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

function checkColor(index){

    if(gameSeq[index] === userSeq[index]){
        if(userSeq.length == gameSeq.length){  
          setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `GAME OVER! Your score was ${level} \n Press any key to restart`;
        resetGame();
    }
}

function btnPress(){
    let btn = this;
    Userflash(btn)
    
    let btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);

    checkColor(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click", btnPress);
}

function resetGame(){
    gameStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

    document.addEventListener('keypress', function(){
        if(gameStarted === false){
            console.log("Game is started");
            gameStarted = true;
            levelUp();
        }
    }, { once: true }); 
}