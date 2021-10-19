const menuIcon = document.querySelector(".menu-img");
const menu = document.querySelector(".menu-list");


menuIcon.addEventListener('click', function (event) {
    menu.classList.toggle("menu-list--hidden");
    menu.classList.toggle("menu-list--animation");
}); 