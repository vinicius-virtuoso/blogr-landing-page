const $btnMenu = document.querySelector('.menu__btn');
const $navMenu = document.querySelector('.nav__menu');
const $navItems = document.querySelectorAll('.nav__item');



$btnMenu.addEventListener('click', () => {
  $btnMenu.classList.toggle('open__btn');
  $navMenu.classList.toggle('menu__open');
})
$navItems.forEach((navLinks, index) => {
  navLinks.addEventListener('click', ({ target }) => {
    target.classList.toggle('sub__menu__show');
  })
})