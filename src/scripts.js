document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});

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