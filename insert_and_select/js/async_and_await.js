
async function fx1() { //기본적으로 resolve를 리턴 return이 promise 
    console.log("fx1 실행");
    // throw new Error();//예외 강제 발생
    return 10; //resolve
}
async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num+"출력");
}
async function fx3() {
    let arg = 0;
    let fx1Result = await fx1(); // 리턴을 promise가 아닌 값을 준다. await을 통하면 비동기를 동기로 바꾼다.
    fx2(fx1Result);
}
function handleSubmitClick2() {
    fx3().then(() => {
        console.log("then");
    }).catch(() => {
        console.log("에러");
    });
    console.log("동기실행");
}

function handleSubmitClick() {
    const p = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
         resolve();
        //reject();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    });
    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });
    p.then(() => {
        console.log("p1 then 실행");
        return 10;//다음 then의 매개변수로 준다.
    }).then((num) => {//비동기 안에서 동기처리가 된다.
        console.log(num);
    }).then(() => {
        console.log("세번째 then");
    }).catch(() => {
        console.log("오류");
    });
    console.log("동기실행");
}

