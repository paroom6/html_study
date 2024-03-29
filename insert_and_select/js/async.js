// console.log(1);//ctrl alt n - 실행 동기처리
// console.log(2);
// console.log(3);

// setTimeout(() => { //callback 함수
//     console.log(4);
//     setTimeout(() => {console.log(5)}, 2000);
// }, 3000);

// new Promise((resolve, reject) => { //비동기
//     setTimeout(() =>{
//         console.log(10)
//     }, 2000)
//     resolve(30);//then 안의 함수 실행
// }).then((result) => {
//     console.log(result);
// });
// console.log(20);

console.log("프로그램 시작");

const p = new Promise((resolve, reject) => {//reject: 오류일 때 사용 promise의 경우 생성되자마자 실행
    if (0 === 0) {
        resolve("?") ;
    } else {
        reject(new Error("오류입니다."));
    }
    console.log("여기서");
    console.log("여기서 여기까지");
    resolve();
});

p.then(() => {//비동기: 실행 순서가 관계없는 경우 속도 향상을 위해 사용
    setTimeout(() => {
        console.log("3초 뒤에 출력");
    }, 3000);
}).catch((error) => {
    console.log(error);
}).finally(() => {

});

console.log("여기가 먼저");


run();

async function run() {
    const num1 = print1();//promise 자료형 
    const num2 = await print2();// return 값을 가져온다.
    console.log(num2);
    num1.then((num) => {
        console.log(num);
    })
    console.log(num1); 
    console.log(num2);
}
async function print1() {
    console.log(1);
    return 1;
}
async function print2() {
    console.log(2);
    return 2;
}

