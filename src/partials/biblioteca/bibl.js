// корневой js для библиотеки
//окуратно оставляет только основу
console.log('эработаетэ');


import { fetchDataLibrary } from '../../js/container';
const refs = {
  buttonsContainer: document.querySelector('.library__btn--wrapper'),
};
refs.buttonsContainer.addEventListener('click', onClickButtons);
//рефи
let currentPage = 'queue';
const libraryData = [
  {
    adult: false,
    backdrop_path: '/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg',
    genre_ids: [28, 18],
    id: 361743,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    popularity: 4156.584,
    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    release_date: '2022-05-24',
    title: 'Top Gun: Maverick',
    video: false,
    vote_average: 8.374,
    vote_count: 2911,
    watched: true,
    queue: true,
  },
  {
    adult: false,
    backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
    genre_ids: [16, 12, 35, 14],
    id: 438148,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Minions: The Rise of Gru',
    overview:
      'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
    popularity: 3250.085,
    poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    release_date: '2022-06-29',
    title: 'Minions: The Rise of Gru',
    video: false,
    vote_average: 7.726,
    vote_count: 1653,
    watched: false,
    queue: true,
  },
  {
    adult: false,
    backdrop_path: '/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg',
    genre_ids: [28, 18],
    id: 361743,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    popularity: 4156.584,
    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    release_date: '2022-05-24',
    title: 'Top Gun: Maverick',
    video: false,
    vote_average: 8.374,
    vote_count: 2911,
    watched: true,
    queue: true,
  },
  {
    adult: false,
    backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
    genre_ids: [16, 12, 35, 14],
    id: 438148,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Minions: The Rise of Gru',
    overview:
      'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
    popularity: 3250.085,
    poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    release_date: '2022-06-29',
    title: 'Minions: The Rise of Gru',
    video: false,
    vote_average: 7.726,
    vote_count: 1653,
    watched: false,
    queue: true,
  },
  {
    adult: false,
    backdrop_path: '/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg',
    genre_ids: [28, 18],
    id: 361743,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Top Gun: Maverick',
    overview:
      'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
    popularity: 4156.584,
    poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    release_date: '2022-05-24',
    title: 'Top Gun: Maverick',
    video: false,
    vote_average: 8.374,
    vote_count: 2911,
    watched: true,
    queue: true,
  },
  {
    adult: false,
    backdrop_path: '/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg',
    genre_ids: [16, 12, 35, 14],
    id: 438148,
    media_type: 'movie',
    original_language: 'en',
    original_title: 'Minions: The Rise of Gru',
    overview:
      'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
    popularity: 3250.085,
    poster_path: '/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
    release_date: '2022-06-29',
    title: 'Minions: The Rise of Gru',
    video: false,
    vote_average: 7.726,
    vote_count: 1653,
    watched: false,
    queue: true,
  },
];
const currentData = libraryData.filter(item => item[currentPage]);
fetchDataLibrary(currentData);
function onClickButtons(event) {
  const selectData = event.target.dataset.lang;
  if (selectData === currentPage) {
    return;
  }

  const currentData = libraryData.filter(item => item[selectData]);
  // console.log(currentData);
  toggleClassOnButtons(selectData);
  fetchDataLibrary(currentData);
  currentPage = selectData;
}
function toggleClassOnButtons(currentPage) {
  const buttons = [...refs.buttonsContainer.children];
  buttons.map(button => button.classList.toggle('selected'));
}

