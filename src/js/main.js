document.addEventListener('DOMContentLoaded', () => {
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

  function openModalByTimer() {
    if (!modalOpenedByTimer) {
      modal.style.display = 'flex';
      modalOpenedByTimer = true;
    }
  }

  setTimeout(openModalByTimer, 60000);
});
