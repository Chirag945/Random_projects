let btn = document.querySelector("button");
// btn.addEventListener("click",action);
// function action(){
//     let randomcolor=generatecolor();
//     let obj = document.querySelector("h1");
//     obj.innerHTML=randomcolor
//     let div123=document.querySelector("div");
//     div123.style.backgroundColor=randomcolor;
// }
// // btn.addEventListener("click",function(event){
// //     event.
// // })
// function generatecolor(){
//     let r,g,b;
//     r=randomnogenrator();
//     g=randomnogenrator();
//     b=randomnogenrator();
//     return `rgb(${r},${g},${b})`;
// }
// function randomnogenrator(){
    
//     let num=Math.random();
//     num=num*255;
//     num=Math.floor(num);
//     console.log(num)
//     return num
// }

let butto = document.createElement("button");
butto.textContent = "hello";
butto.id = "hello";

let div123=document.querySelector("div");
div123.insertAdjacentElement("afterend",butto);

let obj=document.querySelector("input");
obj.addEventListener("input",action);
function action(){
    let obj2=document.querySelector("h1");
    obj2.innerHTML=this.value;
}

