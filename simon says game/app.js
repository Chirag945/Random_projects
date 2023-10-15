let gameseq = [];
let userseq = [];
let gameStarted = false;
let level = 0;
let colors=["red","green","orange","blue"];
document.addEventListener("keypress", action);
function action(event){
    if(gameStarted==false){
        gameStarted = true;
        levelUp();
    }
}
function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}
function levelUp(){
    level++;
    let num = Math.floor(Math.random()*4);
    let color=colors[num];
    let h2obj = document.querySelector("h2");
    h2obj.innerHTML=`Level ${level}`;
    let obj=document.querySelector(`.${color}`);
   buttonFlash(obj);
   gameseq.push(color);

}
function checkAns(){
    if(gameseq[level-1]===userseq[level-1]) {
        if(userseq.length==gameseq.length)
        return true;}
    else {
        h2.innerHTML="Game over. Press any key to start"
        return false;}
}
function buttonPress(){
    let btn=this;
    buttonFlash(btn);
    let color= btn.getAttribute("id"); 
    userseq.push(color);
    console.log(`${this.classList} button was pressed`);
    let isCorrect=checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}

function doSomething(){
    return new Promise(resolve,reject)
}


let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("request completed");
            }   ,delay)   
    }
    )
}

async function colorchange(){
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("grey",1000);
    await changeColor("green",1000);
    return true;
}
// changeColor("red",1000)
// .then(()=>
// {
//     console.log("Color changed successfully");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("Color changed successfully 2nd time");
//     return changeColor("grey",1000);
// })
// .then(()=>{
//     console.log("sup bitch");
// })
// .catch(()=>{
//     console.error("color could not be changed");
// })

