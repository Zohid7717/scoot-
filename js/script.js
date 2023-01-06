document.querySelectorAll('.header__container').forEach(function (burgerWrapper) {
  const headerBurger = burgerWrapper.querySelector('.header__burger');
  const headerNav = burgerWrapper.querySelector('.header__nav');
  headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('header__burger-visible');
    headerNav.classList.toggle('header__nav-visible');
  });
});