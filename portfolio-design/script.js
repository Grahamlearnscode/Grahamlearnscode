const menu = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hidden');
    menuContainer.classList.toggle('collapsed');
}