const addBox = document.querySelector(".add-box-button");
addBox.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    const movedContainer = document.querySelector(".moved-box-container");
    boxContainer.innerHTML += `<div class="box"></div>`;

    const boxList = document.querySelectorAll(".box");
   
    for (let i = 0; i < boxList.length; i++) {
        boxList[i].onclick = () => {//이벤트 핸들러 중첩 주의 클릭 이벤트가 한번만 일어나는등 에러 발생
            let isBlueBox = boxList[i].classList.contains("blue-box");
            let isRedBox = boxList[i].classList.contains("red-box");
            if(!isBlueBox && !isRedBox) {
                boxList[i].classList.add("blue-box");
            } else if(isRedBox) {
                //boxContainer.removeChild(boxList[i]); appendChild에 이동 후 제거 기능이 중복됨 
                movedContainer.appendChild(boxList[i]);
            } else if(isBlueBox) {
                boxList[i].classList.remove("blue-box");
                boxList[i].classList.add("red-box");//클래스를 추가
           } 
        }
    }

}
