const $btnMenu = document.querySelector('.menu__btn');
const $navMenu = document.querySelector('.nav__menu');
const $navItems = document.querySelectorAll('.nav__item');



$btnMenu.addEventListener('click', () => {
  $btnMenu.classList.toggle('open__btn');
  $navMenu.classList.toggle('menu__open');
})
$navItems.forEach(($navLinks) => {
  $navLinks.addEventListener('click', () => {
    if (!$navLinks.classList.contains('sub__menu__show')) {
      $navItems.forEach($link => $link.classList.remove('sub__menu__show'))
      $navLinks.classList.add('sub__menu__show');
    } else {
      $navLinks.classList.remove('sub__menu__show');
    }
  })
})