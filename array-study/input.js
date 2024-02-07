window.onload = () => {
    getTextList();
}

const inputBox = document.querySelector(".input-box");
inputBox.onkeydown = (e) => {
    if(e.keyCode === 13) {
        inputAdd();
    }
}
inputAdd = () => {
    let textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    let lastId = textList.length === 0 ? 0 : textList[textList.length - 1].textId;
    let textBox = {
        textId: lastId + 1,
        textContent: inputBox.value
    }
    textList.push(textBox);
    localStorage.setItem("textList", JSON.stringify(textList));
    inputBox.value = "";
    getTextList();
}

inputEdit = (textId) => {
    const editBoxs = document.querySelectorAll(".edit-box");
    let textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    let findIndex = -1;
    for (let i = 0; i < textList.length; i++) {
        if(textList[i].textId === textId) {
            findIndex = i;
            break;
        }
    }
    if(findIndex === -1) {
        alert("인덱스 오류!!!");
        return;
    }
    textList[findIndex].textContent = editBoxs[findIndex].value;
    localStorage.setItem("textList", JSON.stringify(textList));
    getTextList();
}

inputRemove = (textId) => {
    let selected = confirm("정말로 삭제하시겠습니까?");
    if (!selected) {
        return;
    }
    console.log("try");
    let textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    let findIndex = -1;
    for (let i = 0; i < textList.length; i++) {
        if(textList[i].textId === textId) {
            findIndex = i;
            break;
        }
    }
    console.log(findIndex);
    if(findIndex === -1) {
        alert("인덱스 오류!!!");
        return;
    }
    textList = textList.filter(text => text.textId !== textList[findIndex].textId);
    localStorage.setItem("textList", JSON.stringify(textList));
    getTextList();
}

function getTextList() {
    const inputList = document.querySelector(".input-list");
    let textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    inputList.innerHTML = "";
    for (let text of textList) {
        inputList.innerHTML += `
            <li>
                <span class="input-id">${text.textId}번 </span>
                <span class="input-content">${text.textContent}</span>
                <input type="text" class = "edit-box" onkeydown = "moveFocus(${text.textId})">
                <button class="edit-button" onclick = "inputEdit(${text.textId})">수정</button>
                <button class="remove-button" onclick = "inputRemove(${text.textId})">삭제</button>
            </li>`;
    }
}

function moveFocus(textId) {
    const editBoxs = document.querySelectorAll(".edit-box"); 
    let textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    let findIndex = -1;
    for (let i = 0; i < textList.length; i++) {
        if(textList[i].textId === textId) {
            findIndex = i;
            break;
        }
    }
    if(findIndex === -1) {
        alert("인덱스 오류!!!");
        return;
    }
    editBoxs[findIndex].onkeyup = (e) => {
        if(e.keyCode === 13) {
            if(findIndex < textList.length -1) {
                editBoxs[findIndex + 1].focus();
            }
        } 
    }
}