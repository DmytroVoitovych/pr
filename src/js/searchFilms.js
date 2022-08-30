import api from '../RequestApi/requestAPI';
import { markupModal } from "./modal/markupModal";
import Pagination from './markupPaginationList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let name = '';

const searchFormEl = document.querySelector('.search-form');
const notificationEl = document.querySelector('.notification');

searchFormEl.addEventListener('submit', onSubmit);

// Пагінація
const container = document.getElementById('tui-pagination-container');
const paginationSearch = new Pagination(container, {
    page: 1,
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
});
const page = paginationSearch.getCurrentPage();
// =======================================

// Опції виведення сповіщень
export const msgOptions = {
    position: 'center-top',
    distance: '150px',
    timeout: 3000,
    clickToClose: true,
};

function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const searchName = form.elements.filmName.value;

    const normalizedName = searchName.toLowerCase().trim().split(' ').join('+');
    console.log(normalizedName);
    if (normalizedName.length === 0 || normalizedName === name) {
    Notify.failure('Same query', msgOptions);
    return;
    }
    name = normalizedName;

    api
    .getMovieBySearch(name, page)
    .then(data => {
        const moviesData = data.resultsSearch;
        if (moviesData.length === 0) {
            Notify.failure(
            'Search result not successful. Enter the correct movie name',
            msgOptions
        );
        } else {
        Notify.success(`We found ${data.totalItems} movies`, msgOptions);
        transformData(moviesData);
        transformGenres(moviesData);

    // Дані, що підключаються до пагінації
        paginationSearch.reset(data.totalItems);

        loadStartGallery(moviesData);
        }
    })
    .finally(() => form.reset());
}

// Виклик пагінації
paginationSearch.on('afterMove', event => {
    const currentPage = event.page;
    api.getMovieBySearch(name, currentPage).then(data => {
    const moviesData = data.resultsSearch;
    transformData(moviesData);
    transformGenres(moviesData);
    loadStartGallery(moviesData);
    slowScroll();
    });
});
