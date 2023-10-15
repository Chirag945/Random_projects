let buttonObj=document.querySelector("button");
buttonObj.addEventListener("click",function(){
    //console.log("button clicked");
    let inputtext = document.querySelector("input");
    let value = inputtext.value;
    console.log(value);
    let newtask = document.createElement("li");
    //console.log("created");
    newtask.textContent=value;
   // console.log("valur given");
    let addTask = document.querySelector("ul");
    //console.log("task added");
    addTask.appendChild(newtask);
    //console.log("created");
    inputtext.value=null;
    let delbtn  = document.createElement("button");
    delbtn.innerText="delete";
    newtask.appendChild(delbtn);
    delbtn.classList.add("del");
    

})

let ul = document.querySelector("ul");
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
       let obj= event.target.parentElement;
       obj.remove();
       console.log("del")
    }
})