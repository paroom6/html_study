main();

function main() {
    // setNumber(); set함수는 일반적으로 비동기이다.
    // FileReader.onload = () => {}
    // promise then 이 중요하다.
    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);
        setTimeout(()=>{console.log(4);},3000);
        resolve("값")
    }).then((result)=>{
        console.log("then 실행" + result);
    });
    console.log(3);
}
