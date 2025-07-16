const hamburgerMenu = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show');
});