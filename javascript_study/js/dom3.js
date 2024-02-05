id = 1; // 지역변수가 되면 안된다.
const submitButton = document.querySelector("#submit");
submitButton.onclick = () => {
    
    const inputs = document.querySelectorAll("input");
    
    dataList = document.querySelector("#data-list");
    dataList.innerHTML +=  
        `<tr>
            <td>${id}</td>    
            <td>${inputs[0].value}</td>    
            <td>${inputs[1].value}</td>    
            <td>${inputs[2].value}</td>
        </tr>`
    id++;
    for (let input of inputs) {
        input.value = "";
    }
}