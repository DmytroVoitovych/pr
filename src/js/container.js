import MovieAPiServer from '../RequestApi/requestAPI';
import { markupList } from './markupList';
import { markupPaginationList } from './markupPaginationList';
import { modal } from './modal/modal';
import { close } from './modal/getPost';
import { refs } from './refs';
let throttle = require('lodash.throttle');
const movieAPiServer = new MovieAPiServer();
//прослуховувачі

window.addEventListener('scroll', throttle(onScroll, 500));
refs.buttonPageTop.addEventListener('click', scrollToTop);
refs.pagginationList.addEventListener('click', onClickPagginationList);
refs.backdrop.addEventListener('click', close.funcClickBackdrop);
window.addEventListener(
  'onload',
  () => (document.querySelector('.footer').style.opacity = 1)
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

export function fetchDataLibrary(data) {
  refs.galleryList.innerHTML = '';
  refs.pagginationList.innerHTML = '';
  renderMoviesList(data);
}

export function fetchData() {
  movieAPiServer.fetchTopMovies().then(data => {
    // console.log('page=', apiService.page, '  maxPages=', apiService.maxPages);
    refs.galleryList.innerHTML = '';
    refs.pagginationList.innerHTML = '';
    renderMoviesList(data);
  });
}
async function getGenresList() {
  try {
    if (!movieAPiServer.isLoadGenres) {
      console.log('test2');
      const result = sessionStorage.getItem('genresList');

      if (result) {
        return JSON.parse(result);
      }
    }
    console.log('test');
    const genresList = await movieAPiServer.getGenresList();
    sessionStorage.setItem('genresList', JSON.stringify(genresList));
    movieAPiServer.isLoadGenres = false;
    return genresList;
  } catch (error) {
    return error;
  }
}
async function renderMoviesList(data) {
  const genresList = await getGenresList();
  refs.galleryList.insertAdjacentHTML(
    'beforeend',
    markupList(data, genresList)
  );

  refs.pagginationList.insertAdjacentHTML(
    'beforeend',
    markupPaginationList(movieAPiServer.page, movieAPiServer.maxPages)
  );

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
function scrollToTop() {
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
