import { refs } from '../refs';
import { close } from './getPost';
import { controlScreen } from './controlScreen';
import { funcControlArts } from '../arts';

// refs.openModalBtn.addEventListener('click', toggleModal);

export function modalPagination(maxPages) {
  const promise = new Promise((resolve, reject) => {
    refs.closeModalBtn.addEventListener('click', onCloseModalPagination);
    refs.formPagination.addEventListener('submit', onInputChange);
    // refs.closeFormButton.addEventListener('click', onCloseModalPagination);
    refs.backdropPagination.addEventListener('click', onClickBackdrop);
    refs.modalPagination
      .querySelector('#pagination-input')
      .setAttribute('max', maxPages);
    refs.backdropPagination.dataset.page = '0';

    toggleModal();
    let timer = null;
    // document.querySelector('body').style = '';

    // document.querySelector('body').classList.add('is-open');// мешали
    // document.querySelector('body').classList.toggle('is-open');// мешали
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
   const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); 
console.log(scrollY);
  refs.modalPagination.classList.toggle('is-hidden'); 
  funcControlArts(document.querySelectorAll('.t-js')); // полный контроль стилей

  if (document.querySelector('[modal-pagination]').classList.contains('is-hidden')) {
      
          close.blockScroll('auto', ``, ``, '');
          return window.scrollTo(0, parseInt(document.body.style.top || '0') * -1); 
        }

  else { return close.blockScroll('scroll', `${scrollY}`, `${controlScreen()}`, 'fixed') };
    
}



function onInputChange(event) {
  event.preventDefault();
  const page = event.currentTarget.elements.page.value;
  refs.backdropPagination.dataset.page = page;
  onCloseModalPagination();
}
function onCloseModalPagination(event) {
  document.querySelector('body').classList.remove('is-open');
  refs.formPagination.elements.page.value = '';
  toggleModal(document.querySelector('body').classList);
}
function onClickBackdrop(event) {
  if (event.target.classList.contains('backdrop')) {
    onCloseModalPagination();
  }
  if (event.target.classList.contains('button_no')) {
    onCloseModalPagination();
  }
}

// document.addEventListener("keydown", toggleModalEscape);// нужно тестировать

//  function toggleModalEscape(e) {
//     if (e.code === 'Escape') {
//       refs.modalPagination.classList.add('is-hidden');
//      return  !refs.modalPagination.classList.contains('is-hidden')   &&  window.removeEventListener('keydown', toggleModalEscape);
//     }   //Валерия для удаления события нужна доп проверка  и второй аргумент в слушатели событий обьязателен
//   }
