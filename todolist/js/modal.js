// window.onload = () => {
//     let arr = new Array();
//     let obj = {
//         id : 1,
//         name : "조성민"
//     }
//     arr.push(obj);
//     let obj2 = {
//         id : 2,
//         name : "조성이" 
//     }
//     arr.push(obj2);
//     console.log(arr);
//     console.log(arr[0].name);

//     console.log(JSON.stringify(arr));//json 형태로 변환 숫자이외의 키값을 문자열로 치환
//     console.log(JSON.stringify(obj));//json 형태로 변환
//     console.log(JSON.stringify(obj2));//json 형태로 변환
//     let jsonArr = JSON.stringify(arr);
//     console.log(JSON.parse(jsonArr));

//      const day = ["일", "월", "화", "수", "목", "금", "토"]
//      let now = new Date();
//      now.getFullYear;
//      console.log(now.getFullYear());
//      console.log(now.getMonth() + 1); //0월 부터 시작하기에 +1 필요
//      console.log(now.getDate());
//      console.log(day[now.getDay()]);
// } onload는 하나만 사용가능
window.onkeyup = (e) => {
    if(e.keyCode === 27) {
        handleModalCancelClick();
    }
}

handleAddTodoModalOpen = () => {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    /**
     * 함수의 호출과 함수의 정의(대입)을 구분
     * 만약 매개변수등의 이유로 ()가 필요할 경우 익명함수를 대입 익명함수 실행시 매개변수를 가진 함수 실행
     * 함수 이름 뒤에 괄호를 사용하면 해당 함수가 즉시 실행됩니다. 이것은 함수를 호출하는 일반적인 방법입니다. 
     * 함수를 호출할 때는 함수 이름 뒤에 소괄호를 붙이고, 필요한 매개변수를 전달할 수 있습니다. 
     * 이렇게 하면 함수가 실행되고, 함수가 반환하는 값을 받거나 함수가 하는 일을 처리할 수 있습니다.
     * 그러나 이벤트 핸들러에 함수를 할당할 때는 함수가 즉시 실행되어서는 안 됩니다.
     * 대신, 이벤트가 발생했을 때 실행되어야 합니다. 이를 위해서는 함수의 참조만을 전달해야 합니다. 
     * 이때 함수 이름 뒤에 괄호를 붙이지 않습니다. 
     * 
     * 에러: add-button에 submiitButton 클릭이 같이 된다
     * 이벤트가 발생하지 않았더라도 함수가 즉시 실행되어 해당 함수가 반환하는 값을 사용하려고 시도합니다. 
     * 이는 이벤트가 발생하기 전에 함수를 실행하고자 할 때는 의도하지 않은 동작을 초래할 수 있습니다.
     * 2.이벤트가 발생했을 때 함수가 이미 실행되었기 때문에, 해당 이벤트에 대한 이벤트 핸들러로 함수가 
     * 할당되지 않게 됩니다. 따라서 이벤트가 발생해도 이벤트 핸들러가 실행되지 않습니다.
    */
    todoInput.onkeydown = (e) => {
       if (e.keyCode === 13 && !e.shiftKey) {
           submitButton.click();
        //    handleAddTodoSubmit()
        }
        console.log(e.keyCode);
    }
    submitButton.onclick = handleAddTodoSubmit;  
    modal.classList.add("modal-show");
}

function convertDateKor(curruntdate) {
    const dayKor = ["일", "월", "화", "수", "목", "금", "토"];
    const year = curruntdate.getFullYear();
    const month = curruntdate.getMonth() + 1;
    const date = curruntdate.getDate();
    const day = dayKor[curruntdate.getDay()];
    return `${year}년 ${month}월 ${date}일(${day})`
}

handleAddTodoSubmit = () => {
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    let todoListJson = localStorage.getItem("todoList");
    if(todoInput.value.length === 0) {
        todoInput.onkeyup = (e) => {
            if (e.keyCode === 13) {
                console.log(e.keyCode);
                todoInput.value = "";
             }
         }
        return;
    }
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    
    let lastTodoId =  todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;     

    let todoObject = {
        todoId: lastTodoId + 1,
        todoContent: todoInput.value,
        date: convertDateKor(new Date())
    }
    todoList.push(todoObject)

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
    modal.classList.remove("modal-show");
}


handleEditTodoModalOpen = (todoId) => {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0];
    title.innerHTML = "수정하기";
    
    todoInput.value = findTodoByTodoId.todoContent;
    todoInput.onkeydown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            handleEditTodoSubmit(todoId);
        }
    }
    submitButton.onclick = () =>handleEditTodoSubmit(todoId); // 익명함수를 대입 익명함수 실행시 매개변수를 가진 함수 실행
    modal.classList.add("modal-show");
}

handleEditTodoSubmit = (todoId) => {//수정된 날짜로 + 내용 변경
    const modal = document.querySelector(".root-modal");
    let findIndex = -1;
    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    for (let i = 0; i < todoList.length; i++) {
        if(todoList[i].todoId === todoId) {
            findIndex = i;
            break;
        }
    }
    if(findIndex === -1) {
        alert("수정오류!");
        return;
    }
    todoList[findIndex].todoContent = modal.querySelector(".todo-input").value;
    todoList[findIndex].date = convertDateKor(new Date());
    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
    modal.classList.remove("modal-show");
}

handleModalCancelClick = () => {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}