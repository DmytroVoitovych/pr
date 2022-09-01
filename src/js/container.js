import { markupList } from './markupList';
import { markupPaginationList } from './markupPaginationList';
import { modal } from './modal/modal';
import { close } from './modal/getPost';
import { refs } from './refs';
import { max } from 'lodash';
import { funcLoader } from './preloader/preloader';
let throttle = require('lodash.throttle');
import { Block } from 'notiflix/build/notiflix-block-aio';
import { funcControlArts } from './arts';
import { controlScreen } from './modal/controlScreen';
//прослуховувачі

window.addEventListener('scroll', throttle(onScroll, 500));
refs.buttonPageTop.addEventListener('click', scrollToTop);

refs.backdrop.addEventListener('click', close.funcClickBackdrop);

window.addEventListener(
  'onload',
  (e) => { e.preventDefault();  return document.querySelector('.auth-chek').style.opacity = 1 ; }
); // костыль скрытия футера


window.addEventListener(
  'scroll',
  throttle(() => {
    document.documentElement.style.setProperty(
      '--scroll-y',
      `${window.scrollY}px`
    );
  }, 350)
); // установка положения скролла для костыля

export function renderLibraryList(data, page, maxPages) {
  const genresList = JSON.parse(localStorage.getItem('genresList'));

  refs.galleryList.insertAdjacentHTML(
    'beforeend',
    markupList(data, genresList)
  );
  

  refs.pagginationList.insertAdjacentHTML(
    'beforeend',
    markupPaginationList(page, maxPages)
  );

  document.querySelector('.footer').style.opacity = 1; //костыль
  
  funcControlArts(document.querySelectorAll('.gallery__title')); 
  modal(document.querySelectorAll('.gallery__item'));


}

export function renderMoviesList(data, page, maxPages) {
  const genresList = JSON.parse(localStorage.getItem('genresList'));
  refs.galleryList.insertAdjacentHTML(
    'beforeend',
    markupList(data, genresList)
  );

  if (refs.galleryList.children.length > 0) {
    Block.dots(`.gallery__item`);
    
    funcLoader(document.querySelectorAll(`.gallery__item`));
    
    
    
  }

  refs.pagginationList.insertAdjacentHTML(
    'beforeend',
    markupPaginationList(page, maxPages)
  );
  funcControlArts(document.querySelectorAll('.gallery__title'));
  document.querySelector('.footer').style.opacity = 1; //костыль
  modal(document.querySelectorAll('.gallery__item'));
}
//подія на кнопці пагінації
function onClickPagginationList(event) {
  const currentPage = event.target.dataset.page;
  if (!currentPage) {
    return;
  }
  movieAPiServer.pageCounter = Number(currentPage);

  fetchData();
  scrollToTop();
}
// перехід на верх сторінки
export function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

function onScroll() {
  // console.log("scroll");
  const isHidden = refs.buttonPageTop.classList.contains('is-hidden');
  const isVisible = window.scrollY >= window.innerHeight;
  // console.log(isHidden,isVisible);
  if (isVisible & isHidden) {
    refs.buttonPageTop.classList.remove('is-hidden');
  }
  if (!isVisible & !isHidden) {
    refs.buttonPageTop.classList.add('is-hidden');
  }
}
