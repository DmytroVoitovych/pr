// корневой js для библиотеки


//окуратно оставляет только основу
console.log('эработаетэ');
import { btnDayNight } from '../../js/btnDayNight';
import { renderLibraryList, scrollToTop } from '../../js/container';
import { refs } from '../../js/refs';
import { funcControlArts } from '../../js/arts';
import { trackingEmptyLibrary } from '../../js/trackingEmptyLibrary/trackingEmptyLibrary';
// import { trackingFunFooter } from '../../js/trackingFunFooter/trackingFunFooter';

const NUMBER_MOVIE_ON_PAGE = 6; //кількість фільмів на сторінку
let activeGroup = getActiveGroup();
let page = 1; // watched or queued
addClassSelectedOnActiveButton(activeGroup); //добавляю клас selected на активну групу

refs.buttonsContainer.addEventListener('click', onClickButtons);
refs.pagginationList.addEventListener('click', onClickPagginationList);
refs.backdrop.addEventListener('focusin', onCloseModal);

let data = getDataActiveGroup();

btnDayNight();

fetchDataLibrary();
trackingEmptyLibrary();

// if (data === 0) {
//   trackingFunFooter();
// }


//клік по кнопкам вибору групи
function onClickButtons(event) {
  const selectData = event.target.dataset.lang;
  if (selectData === activeGroup) {
    return;
  }
  activeGroup = selectData;
  page = 1;
  localStorage.setItem('activeGroup', activeGroup);
  data = getDataActiveGroup();
  page = 1;
  fetchDataLibrary(data);
  toggleClassOnButtons(selectData);
}
//тоглим класи на кнопках при іншому виборі
function toggleClassOnButtons(currentPage) {
  const buttons = [...refs.buttonsContainer.children];
  buttons.map(button => button.classList.toggle('selected'));
}

// добавляєм клас selected для активної групи
function addClassSelectedOnActiveButton(activeGroup) {
  const buttons = [...refs.buttonsContainer.children];
  buttons.map(button => {
    if (button.dataset.lang === activeGroup) {
      button.classList.add('selected');
    }
  });
}
// отримуємо активну групу з локалсторадж інакше ставимо активну queued
function getActiveGroup() {
  const checkStorageactiveGroup = localStorage.getItem('activeGroup');
  let activeGroup = 'queued';
  if (!checkStorageactiveGroup) {
    localStorage.setItem('activeGroup', activeGroup);
  } else {
    activeGroup = checkStorageactiveGroup;
  }
  return activeGroup;
}
//обробляється подія при виборі кнопки пагінації
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
  refs.galleryList.innerHTML = '';
  refs.pagginationList.innerHTML = '';

  const newData = data.filter(
    (item, index) =>
      index >= (page - 1) * NUMBER_MOVIE_ON_PAGE &&
      index < page * NUMBER_MOVIE_ON_PAGE
  );
  renderLibraryList(
    newData,
    page,
    Math.ceil(data.length / NUMBER_MOVIE_ON_PAGE)
  );
  
}
//подія при закриті модалки
function onCloseModal() {
  data = getDataActiveGroup();
  if (data.length % NUMBER_MOVIE_ON_PAGE === 0) {
    console.log('ntcn');
    if (page !== 1) {
      page -= 1;
    }
  }
  fetchDataLibrary();

  // if (data === 0) {
  //   trackingFunFooter();
  // }

}
//отримуємо дані з локалсторадж активної групи
function getDataActiveGroup() {
  const currentData = localStorage.getItem(`${activeGroup}`);
  if (!currentData) {
    return [];
  }
  return JSON.parse(currentData);
}
