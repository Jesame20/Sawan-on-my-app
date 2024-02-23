// JavaScript code for todo-list functionality

document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    addButton.addEventListener("click", function () {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            listItem.innerHTML = `
                ${todoText}
                <span class="badge badge-primary badge-pill delete-btn">X</span>
            `;
            todoList.appendChild(listItem);
            todoInput.value = "";
        }
    });

    todoList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.parentElement.remove();
        }
    });
});
