const body = document.querySelector("body");
const menuBtn = document.querySelector(".header__m-menu");
const menuBtnLineBefore = document.querySelector(".header__m-menu-line");
const navTabletMenu = document.querySelector(".header__tablet-menu");
menuBtn.addEventListener("click",function(){
    menuBtn.classList.toggle("header__m-menu-line--active-1");
    menuBtn.classList.toggle("header__m-menu-line--active-2");
    menuBtn.classList.toggle("header__m-menu-line--active-3");
    navTabletMenu.classList.toggle("header__tablet-menu--active");
    body.classList.toggle("overflow--active");
    console.log("проверка");
    let b = window.innerWidth;
    console.log(b);
    
});