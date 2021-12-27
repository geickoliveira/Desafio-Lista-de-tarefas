
let inputPlace = document.getElementById("input");
let button = document.getElementById("save");
let reset = document.getElementById("clear");
let toDoList = document.getElementById("toDoList");

button.addEventListener("click", function(){
    var list= document.createElement("li");
    list.innerHTML= inputPlace.value;
    toDoList.appendChild(list);
    inputPlace.value= "";
    list.addEventListener("click", function(check){
        list.style.color= "rgba(0, 0, 0, 0.5)";
        list.style.textDecoration= "line-through";
    })
    list.addEventListener("dblclick", function(){
        list.style.color= "black";
        list.style.textDecoration= "none";
        list.style.userSelect= "none";
    })
    reset.addEventListener("click", function(){
        toDoList.removeChild(list);
    })



})

