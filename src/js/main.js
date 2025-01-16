document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#modal');
  const openModalBtn = document.querySelector('.hero__btn.hero__btn--primary'); // кнопка для открытия
  const closeModalBtn = document.querySelector('.modal__close-btn'); // кнопка для закрытия
  const modalOverlay = document.querySelector('.modal-overlay'); // фон для затемнения и блюра
  const modalForm = document.querySelector('#modalForm'); // форма внутри модалки

  // Открытие модального окна
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block'; // отображаем модальное окно
    modal.showModal(); // открытие диалога
    modalOverlay.style.filter = 'blur(5px)'; // применяем блюр на фоне
  });

  // Закрытие модального окна
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // скрываем модальное окно
    modal.close(); // закрытие диалога
    modalOverlay.style.filter = ''; // убираем блюр с фона
  });

  // Закрытие модального окна при клике вне области модалки
  window.addEventListener('click', (e) => {
    if (e.target === modal && modalOverlay) {
      modal.style.display = 'none'; // скрываем модальное окно
      modal.close(); // закрытие диалога
      modalOverlay.style.filter = ''; // убираем блюр с фона
    }
  });

  // Остановка прокрутки при отправке формы
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault(); // предотвращаем стандартное поведение формы (отправка данных и перезагрузка страницы)
    alert('Форма отправлена!'); // тут можно добавить логику для отправки данных, если нужно
  });
});
