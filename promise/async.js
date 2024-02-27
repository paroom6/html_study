main();
function main() {
    p1(3,"data").then(r => console.log(r));
    setTimeout(() => { 
        p2("data2").then(r => console.log(r));
    }, 4 * 1000);
    p2("data3").then(r => p3(r,100).then(r => console.log(r)));
    p4("data4");
    console.log("출력");
}

function p1(time, data) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {resolve(data)}, time * 1000);
    });
}

async function p2(data) {
    
    return data;
}

async function p3(data, value) {
    return {[data]: value};
}
async function p4(data, value) {
    const r1 = await p2(data);//resolve가 아닌 return을 사용해야한다.
    const r2 = await p3(r1,200);
    console.log(r2);
    
}
