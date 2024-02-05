// 변수: var let
// 상수: const
var num1 = 10;
var num2 = 20;

console.log(num1 + num2);
//호이스팅: 메모리 참조 이전에 선언이 무조건 먼저 일어나는 현상
console.log(num1 + num3);//num3가 선언되었으나 값이 대입되지 않기에 not a number가 출력된다.
var num3 = 40;
console.log(num3);
var num3 = "안녕"; //var키워드는 중복선언이 되는 오류가 존재한다.+ 
console.log(num3);

//이후로 var가 아닌 let을 사용

// console.log(num4); let은 호이스팅 불가
let num4 = 10;
// let num4 = 20; 선언은 한번만 가능


const num5 = 30;
// num5 = 40; 
console.log(num5);

