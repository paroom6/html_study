
window.addEventListener('DOMContentLoaded', () => {
    getTextList();
    inputAdd();
    //moveFocus();
  });

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

function inputAdd() {
    const inputBox = document.querySelector(".input-box");
    inputBox.onkeydown = (e) => {
        if(e.keyCode === 13) {
            const inputBox = document.querySelector(".input-box");
            let textListJSON = localStorage.getItem("textList");
            let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
            let lastId = textList.length === 0 ? 0 : textList[textList.length - 1].textId;
            let textBox = {
                textId: lastId + 1,
                textContent: inputBox.value
            }
            textList = [...textList, textBox];
            localStorage.setItem("textList", JSON.stringify(textList));
            inputBox.value = "";
            getTextList();
        }
    }
}

// 익명함수의 매개변수를 이용하여 이벤트 핸들러의 클로저를 명확히 함 그러나 종료된 후 재시작과 관계없다.
// 클로저(closure)는 함수와 함수가 선언된 어휘적 환경(Lexical Environment)과의 조합입니다. 
// 이것은 함수가 선언될 때 해당 함수의 외부 스코프의 변수들에 대한 참조를 기억하고 있음을 의미합니다.
//이벤트 위임(Event Delegation)은 여러 하위 요소에 대한 이벤트 처리를 부모 요소에 위임하는 기법입니다.
function inputEdit() {
    const textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    for (let i = 0; i < textList.length; i++) {
        (function(index) {
            document.querySelector(`.li-${textList[index].textId}`).addEventListener('click', function(e) {
                if (e.target.classList.contains('edit-button')) { 
                    console.log(index);
                    textList[index].textContent = document.querySelector(`.li-${textList[index].textId}>input`).value;
                    localStorage.setItem("textList", JSON.stringify(textList));
                    getTextList();
                }
            });
        })(i);
    }
}


// function inputEdit() {
//     const textListJSON = localStorage.getItem("textList");
//     let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
//     for (let i = 0; i < textList.length; i++) {
//         document.querySelector(`.li-${textList[i].textId}>button`).onclick = () => {
//             textList[i].textContent = document.querySelector(`.li-${textList[i].textId}>input`).value;
//             localStorage.setItem("textList", JSON.stringify(textList));
//             getTextList();
//             return inputEdit();  
//         }
//     }
// }


inputRemove = () => {
    const textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    for (let i = 0; i < textList.length; i++) {
        ((index) => {
            document.querySelector(`.li-${textList[index].textId}`).addEventListener("click",function(e) {
                if(e.target.classList.contains("remove-button")){
                    let selected = confirm("정말로 삭제하시겠습니까?");
                    if (!selected) {
                        return;
                    }
                    textList = textList.filter(text => text.textId !== textList[index].textId);            
                    localStorage.setItem("textList", JSON.stringify(textList));
                    getTextList();
                }
                });
        })(i);       
    }
}

function moveFocus() {
    const textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    for (let i = 0; i < textList.length - 1; i++) {
        let editBox = document.querySelector(`.li-${textList[i].textId}>input`);
        editBox.onkeydown = (e) => {
            if(e.keyCode === 13) {
                document.querySelector(`.li-${textList[i].textId + 1}>input`).focus();
            } 
        }   
    }
}


function getTextList() {
    const inputList = document.querySelector(".input-list");
    let textListJSON = localStorage.getItem("textList");
    let textList = textListJSON !== null ? JSON.parse(textListJSON) : new Array();
    inputList.innerHTML = "";
    //목표: 코드 간결화? 매개변수 최소화edit-box
    //방법: 상위 태그에 구별가능한 클래스 부여, 버튼과 연결시도 
    //get 함수가 호출될 때 마다 새로운 버튼 생성 - 이벤트 재지정 필요
    for (let text of textList) {
        inputList.innerHTML += `
            <li class="li-${text.textId}">
                <label class="input-id" >${text.textId}번 </label>
                <span class="input-content">${text.textContent}</span>
                <input type="text" class = "input-box"  value = "${text.textContent}">
                <button class="edit-button">수정</button>
                <button class="remove-button")">삭제</button>
            </li>`;
    }
    inputEdit();
    inputRemove();
}