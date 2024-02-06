let submitType = "";
handleAddTodoModalOpen = (submittype) => {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    title.innerHTML = submittype;
    title.innerHTML += "하기";
    submitType = submittype;
    todoInput.value = "";
    //add-button에 submiitButton 클릭이 같이 된다.
    modal.classList.add("modal-show");
}

handleAddTodoSubmit = () => {
    const main = document.querySelector("main");
    const modal = document.querySelector(".root-modal");
    const textInputValue = modal.querySelector(".todo-input")
    if(submitType === "추가") {
        main.innerHTML += `<div class="todo-list"> ${textInputValue.value} </div>`
    }
    modal.classList.remove("modal-show");
}

handleModalCancelClick = () => {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}

const textBox = document.querySelector(".todo-list");
console.log(0);
textBox.onclick = () => {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    submitType = "수정"
    title.innerHTML = submitType;
    title.innerHTML += "하기";
    
}