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

