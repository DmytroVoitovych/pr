import { refs } from '../refs';

// refs.openModalBtn.addEventListener('click', toggleModal);

export function modalPagination(maxPages) {
  const promise = new Promise((resolve, reject) => {
    refs.closeModalBtn.addEventListener('click', onCloseModalPagination);
    refs.formPagination.addEventListener('submit', onInputChange);
    refs.closeFormButton.addEventListener('click', onCloseModalPagination);
    refs.modalPagination
      .querySelector('#pagination-input')
      .setAttribute('max', maxPages);
    refs.backdropPagination.dataset.page = '0';
    toggleModal();
    let timer = null;
    timer = setInterval(() => {
      if (refs.modalPagination.classList.contains('is-hidden')) {
        const page = refs.backdropPagination.dataset.page;
        clearInterval(timer);
        if (Number(page) !== 0) {
          resolve(page);
        } else {
          reject('перехід не відбувся');
        }
      }
    }, 300);
  });
  return promise;
}

function toggleModal() {
  refs.modalPagination.classList.toggle('is-hidden');
}

function onInputChange(event) {
  event.preventDefault();
  const page = event.currentTarget.elements.page.value;
  refs.backdropPagination.dataset.page = page;
  onCloseModalPagination();
}
function onCloseModalPagination(event) {
  refs.formPagination.elements.page.value = '';
  toggleModal();
}
