document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});
