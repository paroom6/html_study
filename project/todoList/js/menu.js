const sideBarButton = document.querySelector(".side-bar-close-button");
const menuButton = document.querySelector(".menu-button");
const sideBarLayout = document.querySelector(".side-bar-layout")
const sideBarContainer = document.querySelector(".side-bar-container");
menuButton.onclick = () => {
    //css의 스타일을 추가할 때는 클래스를 추가하는 편이 좋다. 
    //style을 직접 변경하면 인라인 스타일이 되어 권장하지 않는다.
    sideBarContainer.classList.add("side-bar-container-show");
}

sideBarButton.onclick = () => {
    sideBarContainer.classList.remove("side-bar-container-show");
}