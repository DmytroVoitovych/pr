function markupList(data, genresList) {
  console.log(data, genresList);
  return data
    .map(({ genre_ids, id, title, release_date, poster_path }) => {
      const genresMovie = genre_ids
        .map(genreId => genresList.find(({ id }) => id === genreId))
        .map(({ name }) => name);
      if (genresMovie.length > 3) {
        genresMovie.splice(2, genresMovie.length - 2, 'Other');
      }
      const date = new Date(release_date);
      return `
      <li class="gallery__item" data-ip=${id}>
        <img class="gallery__img" src="https://image.tmdb.org/t/p/w500/${poster_path}">
        <div class="gallery__info">
          <p class="gallery__title">${title}</p>
          <p class="gallery__text">${genresMovie.join(
            ', '
          )} | <span>${date.getFullYear()}</span></p>
        </div>
      </li>`;
    })
    .join(' ');
}
export { markupList };
