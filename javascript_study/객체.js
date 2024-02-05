//자바스크립트의 객체 형태 = {key: value, key: value} 중괄호를 열고 닫는것 자체로 객체 
let student = { //클래스없이 바로 생성 가장 자주 사용함
    age: 31
}

console.log(student);
console.log(typeof(student));
console.log(student.name);

class Student {
    name;
    age;
    //생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s = new Student("조성이", 26);
console.log(s);

class User { //보통 function으로 사용
    #username; //변수명 앞에 #을 붙이면 private 이 된다. 
    password;
    set setUsername(username) {
        this.#username = username;
    }
    get getUsername() {
        return this.#username;
    }
}

let user = new User();
user.setUsername = "jsm"; //자바스크립트의 경우 대입으로 매개변수를 넣는다.
console.log(user.getUsername); 

let dataMap = new Map();
dataMap.set("username","jsm");
dataMap.set("password","1234");

console.log(dataMap); 
console.log(dataMap.get("password"));