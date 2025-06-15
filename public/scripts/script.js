// Hamburger menu 
let menu = document.querySelector('.hamburger-menu');
let menuItems = document.querySelector('.menu-items');

menu.addEventListener('click', openMenu)

function openMenu(){
    menuItems.classList.toggle('menuActive')
}