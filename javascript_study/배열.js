// 자바스크립트의 배열은 자바의 ArrayList와 유사하다.

let numbers1 = [];
// let numbers1 = [10, 20, 30];
let numbers2 = new Array();

numbers1.push(10);
console.log(numbers1);
numbers1.push(20);
console.log(numbers1[0]);
numbers1[0] = 30;
console.log(numbers1[0]);
numbers1[2] = 50; //값이 추가된다.
console.log(numbers1);
numbers1[5] = 100; //<2 empty items> 뒤에 값이 추가됨
console.log(numbers1); 
console.log(numbers1[3]); //선언되지 않은 공간

for(let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}
console.log();
for(let num of numbers1) { // : 대신 of 사용 배열의 마지막 값까지
    console.log(num);
}
console.log();
numbers1.forEach(num => console.log(num));//undefined 제외하고 출력

