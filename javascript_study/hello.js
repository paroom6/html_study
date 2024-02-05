// << 자바스크립트 >>

// 베이스 문법 -> 자바
// 타입리스 : 타입명시가 없다. 값이 대입되는 순간 타입이 정해진다.
// var : 자바에서도 존재하지만 잘 사용하지 않는다.
var num = 10;
console.log(num);
num = "안녕";
console.log(num);

// typof 키워드

console.log(typeof(10.0));
console.log(typeof("10"));
console.log(typeof(true));
var n;
console.log(typeof(n));
console.log(n);
n = null;
console.log(typeof(n));
console.log(n);
console.log(() => {});