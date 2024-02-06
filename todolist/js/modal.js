// const modalOpen = document.querySelector(".add-button");
handleAddTodoModalOpen = () => {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit();  //add-button에 submiitButton 클릭이 같이 된다
    modal.classList.add("modal-show");
}

handleAddTodoSubmit = () => {
    console.log(1);
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}

handleModalCancelClick = () => {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}