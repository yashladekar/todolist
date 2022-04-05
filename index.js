const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

function addToDo(event) {
    if (todoInput.value != "") {
        event.preventDefault();
        //todo Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create li element
        const newToDo = document.createElement("li");
        newToDo.innerHTML = todoInput.value;
        newToDo.classList.add("todo-item");
        todoDiv.appendChild(newToDo);
        //check mark butoon
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //
        todoList.appendChild(todoDiv);
        //empty the input field
        todoInput.value = "";
    }
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const current_todo = item.parentNode;
        current_todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const current_todo = item.parentElement;
        current_todo.classList.toggle("completed");
    }
}