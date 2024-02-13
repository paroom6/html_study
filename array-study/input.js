window.onload = () => {
    getTextList();
    inputAdd();
}
inputAdd = () => {
    const inputBox = document.querySelector(".input-box");
    inputBox.onkeydown = (e) => {
        if(e.keyCode === 13) {
            let textListJSON = localStorage.getItem("textList");
            let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
            let lastId = textList.length === 0 ? 0 : textList[textList.length - 1].textId;
            let textBox = {
                textId: lastId + 1,
                textContent: inputBox.value
            }
            fetch("http://localhost:8080/data_array/data/addition", { 
                //fetch(주소,요청에 관한 정보를 가진 객체{method:post,get...,header:컨텐츠 타입 지정,body: 내용}); 
                method: "POST",
                mode:"cors",
                // http와 https는 다르다
                // news.naver.com, naver.com은 도메인이 다르다.
                // port 가 다르다 -- cors에 걸린다.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(textBox)
            }).then(response => {
                console.log(response);
            });
            textList = [...textList, textBox];
            localStorage.setItem("textList", JSON.stringify(textList));
            inputBox.value = "";
            getTextList();
        }
    }
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
        inputList.innerHTML += ContentText(text);
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

//컴포넌트: 함수임에도 대문자로 작명
//함수 실행시 문자열 리턴
function ContentText({textId,textContent}) { //비구조 할당으로 객체의 키로 변수 생성 객체 지정없이 바로 값 대입가능
    return `
    <li>
        <span class="input-id">${textId}번 </span>
        <span class="input-content">${textContent}</span>
        <input type="text" class = "edit-box" onkeydown = "moveFocus(${textId})" value = "${textContent}">
        <button class="edit-button" onclick = "inputEdit(${textId})">수정</button>
        <button class="remove-button" onclick = "inputRemove(${textId})">삭제</button>
    </li>`;
}

// spread 연산
//...으로 이전의 값 지정
// 객체를 수정할 때도 유용
// let obj = {
//     name:"13",
//     age : 12
// } 
// let obj2 = {
//     ...obj,
//     name:"123"
// } 
// let obj3 = {
//     name:"13",
//     age : 12
// } 
// let arr = [obj, obj3];
// arr = [...arr,obj2];  
// console.log(arr);

//비구조 할당: 객체를 풀어쓰는 법
// let obj = {
//     id : 1,
//     name: "조성민",
//     age: 25
// }
// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.age);
//id,name,age의 변수를 {}를 통해 한번에 생성 각 키에 맞는 값을 대입
// let {id, name, age} = obj;
// let {id, age} = obj;
// console.log(id);
// console.log(name);
// console.log(age);


