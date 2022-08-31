import { btnDayNight } from './js/btnDayNight';

import { renderMoviesList, scrollToTop } from './js/container';
import MovieAPiServer from './RequestApi/requestAPI';
import { refs } from './js/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { paramsNotify } from './js/notify-params/notify-styles';
import { modalPagination } from './js/modal/modalPagination';

let currentGroup = 'home';

const movieAPiServer = new MovieAPiServer();
movieAPiServer.getGenresList();
Notify.init(paramsNotify);

refs.pagginationList.addEventListener('click', onClickPagginationList);
refs.form.addEventListener('submit', onSubmitForm);
refs.galleryList.classList.add('home');
fetchData();

btnDayNight();

// function onClickPagginationList(event) {
//   const currentPage = event.target.dataset.page;
//   if (!currentPage) {
//     return;
//   }
//   movieAPiServer.pageCounter = Number(currentPage);

function checkCurrentPage() {
  if (currentGroup === 'home') {
    fetchData();
  } else {
    fetchMovieByQueryAgain();
  }
  scrollToTop();
}
function onClickPagginationList(event) {
  const currentPage = event.target.dataset.page;
  if (currentPage === '...') {
    modalPagination(movieAPiServer.maxPages)
      .then(page => {
        if (Number(page) === movieAPiServer.pageCounter) {
          return;
        }
        console.log('перехід на сторінку ', page);
        movieAPiServer.pageCounter = Number(page);
        checkCurrentPage();
      })
      .catch(error => console.log(error));
    return;
  }
  if (!currentPage) {
    return;
  }
  movieAPiServer.pageCounter = Number(currentPage);
  checkCurrentPage();
}

function fetchData() {
  movieAPiServer.fetchTopMovies().then(data => {
    // console.log('page=', apiService.page, '  maxPages=', apiService.maxPages);
    clearList();
    renderMoviesList(data, movieAPiServer.pageCounter, movieAPiServer.maxPages);
  });
  // .catch(error => {
  //   return error;
  // });
}

const red = () =>
  document
    .querySelector('.js-auth')
    .setAttribute('href', '/js/AutoForm/form.html');

const funcAutoLoginControl = () => {
  const controlLogin = (document.querySelector('[data-auth]').dataset =
    window.localStorage.getItem('auth'));
  if (controlLogin != 'true') {
    console.log('test');
    return document.querySelector('.js-auth').addEventListener('click', red);
  }
  return;
};
funcAutoLoginControl();

function onSubmitForm(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
  refs.form.elements.searchQuery.value = '';
  if (searchQuery === '') {
    console.log('test');
    Notify.failure('Please enter something', { width: '180px' });
    return;
  }
  movieAPiServer.searchQuery = searchQuery;
  const pageHome = movieAPiServer.pageCounter;
  movieAPiServer.pageCounter = 1;
  movieAPiServer
    .fetchMovieByQuery()
    .then(data => {
      console.log(data);
      if (data.results.length === 0) {
        Notify.failure(
          'Search result not successful.. Enter the correct movie name'
        );
        movieAPiServer.pageCounter = pageHome;
        return;
      }
      movieAPiServer.maxPages = data.total_pages;
      currentGroup = 'search';
      clearList();
      renderMoviesList(
        data.results,
        movieAPiServer.pageCounter,
        movieAPiServer.maxPages
      );
    })
    .catch(error => {
      return error;
    });
}
function fetchMovieByQueryAgain() {
  movieAPiServer
    .fetchMovieByQuery()
    .then(data => {
      clearList();
      renderMoviesList(
        data.results,
        movieAPiServer.pageCounter,
        movieAPiServer.maxPages
      );
    })
    .catch(error => {
      return error;
    });
}
function clearList() {
  refs.galleryList.innerHTML = '';
  refs.pagginationList.innerHTML = '';
}
