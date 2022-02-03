//modals
const body = document.querySelector('body');
const openModalBtn = document.querySelectorAll('.js-open-modal');
const modals = document.querySelectorAll('.modal');
const modalContainer = document.querySelectorAll('.modal__container');
const modalClose = document.querySelectorAll('.modal__btn-close');


/*--- Кнопки открытия модалок ---*/
openModalBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let current = e.currentTarget;
    let targetModal = document.getElementById(current.getAttribute('data-modal'));

    body.dataset.scrollY = getBodyScrollTop(); // сохраним значение скролла

    openModal(targetModal);
  });
});

/*--- Закрытие модалки по клику вне ---*/
modalContainer.forEach(item => {
  item.addEventListener('click', event => {
    event.stopPropagation();
  });
});

modals.forEach(item => {
  item.addEventListener('click', event => {
    let currentModal = event.currentTarget;

    closeModal(currentModal);
  })
});
/*--------*/

modalClose.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    let currentTarget = event.currentTarget;
    let currentModal = currentTarget.closest('.modal');

    closeModal(currentModal);
  });
});

const openModal = (modal) => {
  modals.forEach(item => { // на случай если вызывается вторая модалка с текущей
    closeModal(item);
  });

  modal.classList.add('modal--open');
  modal.setAttribute('aria-hidden', 'false');
  if (existVerticalScroll()) {
    body.classList.add('body-lock');
    body.style.top = `-${body.dataset.scrollY}px`;
  }
}

const closeModal = (modal) => {
  modal.classList.remove('modal--open');
  modal.setAttribute('aria-hidden', 'true');
  if (existVerticalScroll()) {
    body.classList.remove('body-lock')
    window.scrollTo(0, body.dataset.scrollY);
    body.style.top = null;
  }
};



















