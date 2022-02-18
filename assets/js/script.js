console.dir(window.document);


var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function () {
    var listIemEl = document.createElement("li");
    listIemEl.className = "task-item"
    listIemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listIemEl);
    };

buttonEl.addEventListener("click",createTaskHandler);


