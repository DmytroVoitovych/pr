import MovieAPiServer from './RequestApi/requestAPI';
import { markupList } from './js/markupList';
import { markupPaginationList } from './js/markupPaginationList';
import { modal } from './js/modal/modal';
import { close } from './js/modal/getPost';


const movieAPiServer = new MovieAPiServer();
//рефи
const refs = {
  galleryList: document.querySelector('.gallery-js'),
  buttonPageTop: document.querySelector('.page-up'),
    pagginationList: document.querySelector('.pagination-js'),
    backdrop: document.querySelector('.backdropV'),
};
//прослуховувачі
// window.addEventListener('scroll', throttle(onScroll, 500));
// refs.buttonPageTop.addEventListener('click', onClickButtonPageTop);
refs.pagginationList.addEventListener('click', onClickPagginationList);
refs.backdrop.addEventListener('click', close.funcClickBackdrop);

fetchData();

function fetchData() {
  movieAPiServer.fetchTopMovies().then(data => {
    // console.log('page=', apiService.page, '  maxPages=', apiService.maxPages);
    refs.galleryList.innerHTML = '';
    refs.pagginationList.innerHTML = '';
    renderMoviesList(data);
  });
}

async function renderMoviesList(data) {
  const genresList = await movieAPiServer.getGenresList();
  // console.log(data, genresList);
 await refs.galleryList.insertAdjacentHTML(
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
// Пример работы с запросами:

const fun = e => {
  //  movieAPiServer.query = e.currentTarget.elements.... Значение с инпута
  // movieAPiServer.query = "Spider";
  // movieAPiServer.page = 1;

  movieAPiServer.fetchTopMovie().then(data => console.log(data.data));
};
// fun();


