const hamburgerMenu = document.getElementById('menu-toggle');

hamburgerMenu.addEventListener('click', () => {
  const nav = document.querySelector('.nav-list');
  nav.classList.toggle('clicked-nav');
});