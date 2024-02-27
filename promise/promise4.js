//Promise.all없이 순서대로 출력

main();

async function main() {
    // const promises = [
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(1),3000)
    //     }),
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(2),2000)
    //     }),
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(3),1000)
    //     })
    // ];
    // // for (const promise of promises) {
    // //     await promise.then((r)=>console.log(r)); 
    // // }
    
    new Promise((resolve, reject) => {
        let result = [];
        setTimeout(() => resolve([result, 1]),3000)
    }).then(({result, r}) => {
        result.push(r);
        console.log(r);
        new Promise((resolve, reject) => {
            setTimeout(() => resolve([result, 2]),2000)
        })
    }).then(({result, r}) => {
        result.push(r);
        console.log(r);
            p3 = new Promise((resolve, reject) => {
            setTimeout(() => resolve([result, 3]),1000)
        })
    }).then(({result, r}) => {
        result.push(r);
        console.log(r);
        return result;
    }).then((r) => {
        console.log(r);
    })
}