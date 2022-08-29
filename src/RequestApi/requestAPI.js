import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: { 'Cache-Control': 'no-cache' },
  // cache will be enabled by default
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default class MovieAPiServer {
  constructor() {
    this.searchQuery = '';
    this.pageCounter = 1;
    this.API_KEY = 'a1157fee69973f579feaed0c038c358a';
    this.movieId = null;

    // добавив
    this.maxPages = null;
  }
  //зміни запит популярні фільми за тиждень
  async fetchTopMovies() {
    const URL = `/3/trending/movie/week?api_key=${this.API_KEY}&page=${this.pageCounter}`;
    try {
      const response = await http.get(URL);
      //добавив
      this.maxPages = Math.ceil(response.data.total_pages / 20);
      // ---
      return response.data.results;
    } catch (error) {
      return error;
    }
  }

  //добавив запит на жанри, можна один раз його зробити
  async getGenresList() {
    const URL = `/3/genre/movie/list?api_key=${this.API_KEY}`;
    try {
      const response = await http.get(URL);

      return response.data.genres;
    } catch (error) {
      return error;
    }
  }
  // ----
  async fetchMovieById() {
    const URL = `/3/movie/${this.movieId}?api_key=${this.API_KEY}`;

    try {
      const response = await http.get(URL);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async fetchMovieByQuery() {
    const URL = `/3/search/movie?api_key=${this.API_KEY}&page=${this.pageCounter}&query=${this.searchQuery}`;

    try {
      const response = await http.get(URL);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getMovieBySearch(searchQuery, page) {
    const url = `${baseURL}/search/movie?api_key=${this.API_KEY}&query=${searchQuery}&page=${page}`;
    return await axios
        .get(url)
        .then((response) => {
            // console.log('Search response', response.data);
            return {
                page: page,
                totalItems: response.data.total_results,
                resultsSearch: response.data.results
            }
        })
        .catch((error) => {console.error("Something wrong with getMovieBySearch fetch", error.message) 
    })
  }


  get id() {
    return this.movieId;
  }

  set id(newMovieId) {
    return (this.movieId = newMovieId);
  }

  get page() {
    return this.pageCounter;
  }
  set page(newPage) {
    return (this.pageCounter = newPage);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
