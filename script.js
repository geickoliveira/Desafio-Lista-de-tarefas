
let inputPlace = document.getElementById("input");
let button = document.getElementById("save");
let reset = document.getElementById("clear");
let toDoList = document.getElementById("toDoList");

document.addEventListener("DOMContentLoaded", getTodos);
button.addEventListener("click", function(){
    var list= document.createElement("li");
    list.innerText= inputPlace.value;
    toDoList.appendChild(list);
    saveList(inputPlace.value);
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
    function saveList(todo){
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"))
        }
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    function getTodos(){
        let todos;
        if(localStorage.getItem("todos") === null){
            todos = [];
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }
    }