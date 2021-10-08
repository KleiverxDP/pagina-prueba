const menu= document.querySelector(".menu");
const OpenMenuBtn= document.querySelector(".open-menu");
const CloseMenuBtn= document.querySelector(".close-menu");

function toggleMenu(){

    menu.classList.toggle("menu_opened");
}

OpenMenuBtn.addEventListener("click", toggleMenu);
CloseMenuBtn.addEventListener("click", toggleMenu);