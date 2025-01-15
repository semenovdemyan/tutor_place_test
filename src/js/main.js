document
  .querySelector('.header__burger')
  .addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('open');
    this.classList.toggle('open');
  });
