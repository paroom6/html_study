window.onload = () => {
    handleSearchClick();
}

async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/Todo_list/todoList/select")
        console.log("working");
        if(!response.ok) {//
            throw await response.json();
        }

        const responseData =  await response.json();
        const todoLists = document.querySelector(".todolist-list");
        todoLists.innerHTML = "";
        for (let todoList of responseData) {
            todoLists.innerHTML += `
                <li>todo_id: ${todoList.todo_id} / todo_content: ${todoList.todo_content} / todo_summary: ${todoList.todo_summary} 
                / todo_data: ${todoList.todo_data}  / todo_priority: ${todoList.todo_priority} </li>
            `
        }
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }
}

async function handleAddClick() {
    const productInputs = document.querySelectorAll("input");
    let productObj = {
        todo_content : productInputs[0].value,
        todo_summary : productInputs[1].value,
        todo_date_str : productInputs[2].value,
        todo_priority : productInputs[3].value
    };
    try {   
        const response = await fetch("http://localhost:8080/Todo_list/todoList/addition", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productObj) 
        });
        if(!response.ok) {
            throw await response.json();
        }
        const responseData = await response.json();
        console.log(responseData);
        handleSearchClick();
    } catch (error) {
        console.log("에러발생");
        alert(error?.errorMasseage);
        //?. null이나 undifined일 경우 참조하지 않는다.
    }
}