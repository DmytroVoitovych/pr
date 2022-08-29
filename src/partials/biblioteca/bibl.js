// корневой js для библиотеки
//окуратно оставляет только основу
import { renderLibraryList, scrollToTop } from '../../js/container';
import { refs } from '../../js/refs';

const NUMBER_MOVIE_ON_PAGE = 6;
let activeGroup = getactiveGroup();
let page = 1; // watched or queued
addClassSelectedOnActiveButton(activeGroup); //добавляю клас selected на активну групу

refs.buttonsContainer.addEventListener('click', onClickButtons);
refs.pagginationList.addEventListener('click', onClickPagginationList);
refs.backdrop.addEventListener('focusin', onCloseModal);
// const ppp = document.querySelector('.modalV');
// console.log(ppp);
// ppp.addEventListener('focusin', event => console.log('1'));

const currentData = localStorage.getItem(`${activeGroup}`);
let data = JSON.parse(currentData);
fetchDataLibrary();
function onClickButtons(event) {
  const selectData = event.target.dataset.lang;
  if (selectData === activeGroup) {
    return;
  }
  activeGroup = selectData;
  page = 1;
  localStorage.setItem('activeGroup', activeGroup);
  const currentData = localStorage.getItem(`${activeGroup}`);
  data = JSON.parse(currentData);
  page = 1;
  fetchDataLibrary(data);
  toggleClassOnButtons(selectData);
}
function toggleClassOnButtons(currentPage) {
  const buttons = [...refs.buttonsContainer.children];
  buttons.map(button => button.classList.toggle('selected'));
}
function addClassSelectedOnActiveButton(activeGroup) {
  const buttons = [...refs.buttonsContainer.children];
  buttons.map(button => {
    console.log('lang=', button.dataset.lang, 'activeGroup=', activeGroup);
    if (button.dataset.lang === activeGroup) {
      button.classList.add('selected');
    }
  });
}
function getactiveGroup() {
  const checkStorageactiveGroup = localStorage.getItem('activeGroup');
  let activeGroup = 'queued';
  if (!checkStorageactiveGroup) {
    localStorage.setItem('activeGroup', activeGroup);
  } else {
    activeGroup = checkStorageactiveGroup;
  }
  return activeGroup;
}
function onClickPagginationList(event) {
  const currentPage = event.target.dataset.page;
  if (!currentPage) {
    return;
  }
  page = Number(currentPage);

  fetchDataLibrary();
  scrollToTop();
}
function fetchDataLibrary() {
  // console.log(page);
  refs.galleryList.innerHTML = '';
  refs.pagginationList.innerHTML = '';
  const newData = data.filter(
    (item, index) =>
      index >= (page - 1) * NUMBER_MOVIE_ON_PAGE &&
      index < page * NUMBER_MOVIE_ON_PAGE
  );
  // console.log(newData);
  renderLibraryList(
    newData,
    page,
    Math.ceil(data.length / NUMBER_MOVIE_ON_PAGE)
  );
}
function onCloseModal(event) {
  console.log('testtesttest');
  console.log(activeGroup);
  const currentData = localStorage.getItem(`${activeGroup}`);

  data = JSON.parse(currentData);
  console.log(data);
  fetchDataLibrary();
}
