document.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы
  const openModalBtn = document.querySelector('.open-modal-btn'); // Кнопка для открытия модалки
  const modalContainer = document.querySelector('.modal'); // Модальное окно
  // const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.modal__close-btn');
  const modalForm = document.querySelector('.modal form');

  console.log('DOMContentLoaded: Скрипт загружен.');

  // Проверяем, что элементы существуют
  if (
    !openModalBtn ||
    !modalContainer ||
    !modalOverlay ||
    !closeModalBtn ||
    !modalForm
  ) {
    console.log('Один или несколько элементов не были найдены на странице.');
    return; // Прекращаем выполнение, если что-то не найдено
  }

  // Открытие модального окна
  openModalBtn.addEventListener('click', () => {
    console.log('Открытие модального окна.');
    modalContainer.style.display = 'block'; // Показываем модалку
    // modalOverlay.style.display = 'block'; // Показываем оверлей
  });

  // Закрытие модального окна по кнопке
  closeModalBtn.addEventListener('click', () => {
    console.log('Закрытие модального окна.');
    modalContainer.style.display = 'none'; // Скрываем модалку
    // modalOverlay.style.display = 'none'; // Скрываем оверлей
  });

  // Закрытие модального окна при клике на фон (overlay)
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      // Проверяем, что клик был по самому overlay
      console.log('Клик на оверлей. Закрытие модалки.');
      modalContainer.style.display = 'none'; // Скрываем модалку
      // modalOverlay.style.display = 'none'; // Скрываем оверлей
    }
  });

  // Обработчик отправки формы
  modalForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    console.log('Форма отправлена!');

    // Закрытие модального окна
    modalContainer.style.display = 'none';
    // modalOverlay.style.display = 'none';
  });
});
