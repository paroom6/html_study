const modal = document.querySelector(".root-modal");
const submitButton = modal.querySelector(".modal-button");
let title = document.querySelector(".modal-title");
let c = 1;
handleAddTodoModalOpen = () => {
    const todoInput = modal.querySelector(".todo-input");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    //add-button에 submiitButton 클릭이 같이 된다.
    modal.classList.add("modal-show");
    submitButton.onclick = () => {
        handleAddTodoSubmit();
    }
}

handleAddTodoSubmit = () => {
    const main = document.querySelector("main");
    const textInputValue = modal.querySelector(".todo-input");
    main.innerHTML += `<div class"list-container">
                        <input type="checkbox" class="done" name = "done-list" onchange="handleCheck(this)"> 
                        <label class="todo-list" name ="done-list"> ${textInputValue.value} </label>
                       </div>`
    const textBox = document.querySelectorAll(".todo-list");
    const listbox = document.querySelectorAll(".done");
    modal.classList.remove("modal-show");
    handleCheck = (object) => {
        for (let i = 0; i < listbox.length; i++) {
            if(listbox[i] === object) {
                if(object.checked) {
                    textBox[i].classList.add("done-list");
                } else {
                    textBox[i].classList.remove("done-list");
                }
            }
            
        }
    }
    for (let text of textBox) {
        text.onclick = () => {
            title.innerHTML = "수정하기";
            modal.classList.add("modal-show");
            submitButton.onclick = () => {
                handleAlterTodoSubmit(text, textInputValue.value);
            }
        }
    }
}

handleAlterTodoSubmit = (text, textValue) => {
    text.innerHTML = textValue;
    modal.classList.remove("modal-show");
}
handleModalCancelClick = () => {
    modal.classList.remove("modal-show");
}

