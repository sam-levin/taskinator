console.dir(window.document);


var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    
    event.preventDefault();
    console.log(event)
    var listIemEl = document.createElement("li");
    listIemEl.className = "task-item"
    listIemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listIemEl);
    };

formEl.addEventListener("submit",createTaskHandler);


