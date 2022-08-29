import { fetchData } from './js/container';

// import MovieAPiServer from './RequestApi/requestAPI';
// import { markupList } from './js/markupList';
// import { markupPaginationList } from './js/markupPaginationList';
// import { modal } from './js/modal/modal';
// import { close } from './js/modal/getPost';
import './js/notify-params/notify-styles';
// const throttle = require('lodash.throttle');

// const movieAPiServer = new MovieAPiServer();
//рефи
// const refs = {
//   galleryList: document.querySelector('.gallery-js'),

//   buttonPageTop: document.querySelector('.page-top-js'),
//   pagginationList: document.querySelector('.pagination-js'),
//   backdrop: document.querySelector('.backdropV'),
// };
//прослуховувачі
// window.addEventListener('scroll', throttle(onScroll, 500));
// refs.buttonPageTop.addEventListener('click', scrollToTop);
// refs.pagginationList.addEventListener('click', onClickPagginationList);
// refs.backdrop.addEventListener('click', close.funcClickBackdrop);
// window.addEventListener('onload', e => {
//   e.preventDefault();
//   return (document.querySelector('.footer').style.opacity = 1);
// }); // костыль скрытия футера
// window.addEventListener(
//   'scroll',
//   throttle(() => {
//     document.documentElement.style.setProperty(
//       '--scroll-y',
//       `${window.scrollY}px`
//     );
//   }, 350)
// ); // установка положения скролла для костыля

fetchData();
