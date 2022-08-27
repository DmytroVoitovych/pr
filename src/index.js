import { throttle } from 'lodash';
import MovieAPiServer from './RequestApi/requestAPI';
import { markupList } from './js/markupList';
import { markupPaginationList } from './js/markupPaginationList';

const movieAPiServer = new MovieAPiServer();
//рефи
const refs = {
  galleryList: document.querySelector('.gallery-js'),
  buttonPageTop: document.querySelector('.page-top-js'),
  pagginationList: document.querySelector('.pagination-js'),
};
//прослуховувачі
window.addEventListener('scroll', throttle(onScroll, 500));
refs.buttonPageTop.addEventListener('click', scrollToTop);
refs.pagginationList.addEventListener('click', onClickPagginationList);

fetchData();

function fetchData() {
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
// Пример работы с запросами:

// const fun = e => {
//   //  movieAPiServer.query = e.currentTarget.elements.... Значение с инпута
//   // movieAPiServer.query = "Spider";
//   // movieAPiServer.page = 1;

//   movieAPiServer.fetchTopMovie().then(data => console.log(data.data));
// };
// fun();
