const toggle = document.querySelector(".header__nav");
const burger = document.querySelector(".header__burger");
const list = document.querySelector(".list");


burger.addEventListener("click", openMenu);
toggle.addEventListener("click", closeMenu);


function openMenu() {
    toggle.classList.toggle("nav-opened");
}

function closeMenu() {
    if (toggle.classList.contains("nav-opened")) {
        toggle.classList.toggle("nav-opened");
    }
}


