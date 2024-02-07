window.onload = () => {
    getTodoList();
    
}

function getTodoList() {
        const todoListJSON = localStorage.getItem("todoList");
        const todoContentList = document.querySelector(".todo-content-list");
        const todoList = todoListJSON !== null ? JSON.parse(todoListJSON) : new Array();

        todoContentList.innerHTML = "";

        for (let todo of todoList) {
            todoContentList.innerHTML += `
            <li class="todo-content-box">
            <div class="todo-content-header">
            <span>
            <i class="fa-regular fa-star"></i>
            </span>
            <span class="todo-content-date">
            ${todo.date}
            </span>
            </div>
            <div class="todo-content-main">    
            <pre class="todo-content">${todo.todoContent}</pre>
            </div>
            <div class="todo-content-footer" >
            <button class="todo-edit-button" onclick="handleEditTodoModalOpen(${todo.todoId})">
            <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="todo-remove-button" onclick="handleRemoveTodoClick(${todo.todoId})">
            <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>
            </li>`;
        }
}

function handleRemoveTodoClick(todoId) {
    let selected = confirm("정말로 삭제하시겠습니까?");
    console.log(selected); //확인 취소 : 확인시 true
    if(!selected) {
        return
    }
    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    const newTodoList = todoList.filter(todo => todo.todoId !== todoId);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    getTodoList();
}