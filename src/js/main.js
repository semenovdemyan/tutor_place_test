document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger'); // Кнопка бургер-меню
  const nav = document.querySelector('.header__nav'); // Меню

  // Если кнопка и меню существуют, добавляем обработчик события
  if (burgerButton && nav) {
    burgerButton.addEventListener('click', function () {
      nav.classList.toggle('open'); // Добавляем/удаляем класс 'open'
    });
  }
});
