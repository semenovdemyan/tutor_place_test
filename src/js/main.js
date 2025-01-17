document.addEventListener('DOMContentLoaded', () => {
  // Модальное окно
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('.btn--modal-trigger');
  const closeModalBtn = document.querySelector('.modal__close-btn');
  const modalForm = document.querySelector('#modalForm');

  let modalOpenedByTimer = false;

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Форма отправлена!');
  });

  function openModalByTimer() {
    if (!modalOpenedByTimer) {
      modal.style.display = 'flex';
      modalOpenedByTimer = true;
    }
  }

  setTimeout(openModalByTimer, 5000);

  // Burger Menu
  const burgerButton = document.querySelector('.header__burger');
  const burgerNav = document.querySelector('.burger__nav');
  const container = document.querySelector('.container');

  burgerButton.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    container.classList.toggle('blurred');
  });

  window.addEventListener('click', (e) => {
    if (
      burgerNav.classList.contains('active') &&
      !burgerNav.contains(e.target) &&
      !burgerButton.contains(e.target)
    ) {
      burgerNav.classList.remove('active');
      container.classList.remove('blurred');
    }
  });
});
