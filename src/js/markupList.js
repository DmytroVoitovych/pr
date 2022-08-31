import { refs } from './refs';
const blankMovie = refs.imageBlank.src;

function markupList(data, genresList) {
  // console.log(data, genresList);
  return data
    .map(
      ({
        genre_ids,
        genres,
        id,
        title,
        release_date,
        poster_path,
        vote_average,
      }) => {
        if (!genre_ids) {
          genre_ids = genres.map(genre => genre.id);
        }
        const genresMovie = getGenresMovie(genre_ids, genresList);
        let date;

        const roundRating = Math.round(vote_average * 10).toString();
        const goodRating =
          roundRating.slice(0, roundRating.length - 1) +
          '.' +
          roundRating[roundRating.length - 1];
        return `
      <li class="gallery__item  "  data-ip=${id}>
        <img class="gallery__img  "
         ${
           poster_path
             ? `src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}"`
             : `src="${blankMovie}"`
         } loading="lazy">
        <div class="gallery__info">
          <p class="gallery__title them">${title}</p>
          <p class="gallery__text them">${genresMovie} | <span>${getDate(
          release_date
        )}</span><span class="gallery__rating them">${goodRating}</span></p>


        </div>
      </li>`;
      }
    )
    .join(' ');
}
function getDate(release_date) {
  if (!release_date) {
    return 'No date';
  }
  return new Date(release_date).getFullYear();
}
function getGenresMovie(genre_ids, genresList) {
  if (genre_ids.length === 0) {
    return 'No genre';
  }
  const genresMovie = genre_ids
    .map(genreId => genresList.find(({ id }) => id === genreId))
    .map(({ name }) => name);
  if (genresMovie.length > 3) {
    genresMovie.splice(2, genresMovie.length - 2, 'Other');
  }
  return genresMovie.join(', ');
}

export { markupList };
