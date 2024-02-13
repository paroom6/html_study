window.onload = () => {
    let userListJSON = localStorage.getItem("userList");
    if(userListJSON === null) {

        let userObj = {
            username: "test",
            password: "1234"
        }
        let userList = new Array(); 
        userList.push(userObj);
        localStorage.setItem("userList", JSON.stringify(userList));
    }
}
const loginButton = document.querySelector(".login-button");
loginButton.onclick = () => {
    const inputUsername = document.querySelector(".login-box")
    const inputPassword = document.querySelector(".password-box")
    let userListJSON = localStorage.getItem("userList");
    let userList = userListJSON !== null ? JSON.parse(userListJSON) : new Array();
    let login = false;
    for (let user of userList) {
        if(user.username === inputUsername.value && user.password === inputPassword.value) {
            login = true;
            alert("로그인 성공!");
            break;
        }
    }
    if(!login) {
        alert("로그인 실패")
    }
}

addUser = () => {
    const inputUsername = document.querySelector(".login-box")
    const inputPassword = document.querySelector(".password-box")
    let userListJSON = localStorage.getItem("userList");
    let userList = userListJSON !== null ? JSON.parse(userListJSON) : new Array();
    let isDouble = false;
    for (let user of userList) {
        if(user.username == inputUsername.value) {
            isDouble = true;
            break;
        }
    }
    console.log(isDouble);
    if(isDouble) {
       alert("중복되는 아이디입니다.");
       return; 
    } 
    let userObj = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    userList.push(userObj);
    localStorage.setItem("userList", JSON.stringify(userList));
    alert("회원가입 성공!");
    
}