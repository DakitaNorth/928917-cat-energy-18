var popup = document.querySelector(".main-nav");
var popup_button = document.querySelector(".page-header__button");
var menu_button = document.querySelector(".page-header__button");

popup_button.addEventListener("click",function(evt) {
    evt.preventDefault();
    popup.classList.toggle("main_open");
    menu_button.classList.toggle("page-header__button--close");
});
