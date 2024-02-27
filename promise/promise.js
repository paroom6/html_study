main();
function main() {
    

    nums(4,1);
    nums(2,2);
    nums(3,3);
    nums(6,4);
    console.log(1);
    console.log(2);
    console.log(3);

}

function nums(time, name) {
    const p = new Promise((resolve) => {
        console.log(`${name}: 뒤로번호`);
    });
    setTimeout(()=> {
        console.log(`${name}: number`);
    }, time * 1000)
}