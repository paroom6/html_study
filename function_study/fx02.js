응답데이터_뿌려주기();

function 응답데이터_뿌려주기() {
    const responseData = {
        title: "응답데이터",
        dataList: [
            {
                name:"조성민",
                age: 25
            },
            {
                name:"조성이",
                age: 27
            },
            {
                name:"조성삼",
                age: 28
            }
        ]
    };
    
    
    //비구조 할당
    // const 학생들 = responseData.dataList
    // const 타이틀 = responseData.title;
    const{title, dataList} = responseData;
    const {name, age} = dataList[0];
    console.log(타이틀_컴포넌트(title));
    for (let 학생 of dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생));
    }
    for (let i = 0; i < responseData.length; i++) {
        console.log(테이블_TR_TD_컴포넌트(responseData.dataList[i]));
    }


const user = {
    username : "aaa",
    password : "1234",
    name : "조성민"
}


const {username} = user;//원하는 필드만 지정해서 대입가능하다
console.log(username);
}
function 타이틀_컴포넌트(타이틀) {
    return`
        <h1>${타이틀}</h1>
    `;
}

function 테이블_TR_TD_컴포넌트({name, age}) {
    
    return`
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>
    `;
}