async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value

    };
    const jsonData = JSON.stringify(data);
    const dataObj = JSON.parse(jsonData);
    console.log(dataObj);   
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData  
    };
    //fetch("http://localhost:8080/insert_and_select/data/addition", option)
    //  .then((response) => {//promise 형태의 데이터
    //     response.json()//다시 Json화 시켜야한다
    //         .then((json) => {//json을 매개변수로 제공
    //             console.log(json.data)//.data: parse 없이 객체의 data 값
    //         }).catch((error) =>{console.log(error)}); 비동기시 순서 생각하기
    // });
    try {//예외 처리 필요
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option);
        if(!response.ok) {//
            throw await response.json();
        }
        const json = await response.json(); //상위의 상위까지 async가 붙기에 상황봐야한다.
        console.log(json);
        console.log("test");
        
        
    } catch (error) {
        console.log("에러처리");
        console.log(error.errorMasseage);
    }
}   