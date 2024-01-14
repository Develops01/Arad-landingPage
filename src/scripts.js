
//  humburger menu
const Menu = document.querySelector('.menu');
const Burger = document.querySelector('.menu-burger');
var bool = true;

Burger.addEventListener('click', () => {
  if (bool == true) {
    Burger.classList.add('open');
    Menu.style.right = 0;
    bool = false;
  } else {
    Burger.classList.remove('open');
    Menu.style.right = '-100%';
    bool = true;
  }
})