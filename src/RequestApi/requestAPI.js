const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.themoviedb.org';


// const genresF = (g) => console.log(g);

    export  const getPost = async ()=> {
            try {
                const response = await axios.get(`/3/movie/${361743}?api_key=5b6b31e1fe12fe8c46151504ff095a5b`);
                //   console.log(response);
              let  genres = response.data.genres.map((g, index, arr) => g.name + ', ').join('').slice(0, -2);
               genresF(genres);


            } catch (error) {
                 
                          
            }
              
        }






export default class MovieAPiServer{
    constructor() {
        this.searchQuery = '';
        this.pageCounter = 1;
        this.API_KEY = '5b6b31e1fe12fe8c46151504ff095a5b';
        this.movieId = null;
    }
    async fetchMovieById () {
  

  
        const URL = `/3/movie/${this.movieId}?api_key=a1157fee69973f579feaed0c038c358a&page`;

        try {
           
            const response = await axios.get(URL);

            return response.data;
          
     

        } catch (error) {
          

            return error;
        }
        
    }

    async fetchMovieByQuery() {
        const URL = `/3/search/movie?api_key=a1157fee69973f579feaed0c038c358a&page=${this.pageCounter}&query=${this.searchQuery}`

        try {
            const response = await axios.get(URL);
            return response.data;
          
        } catch (error) {
            
            return error;
        }
    } 
    
    get id() {
    return this.movieId
    }

    set id(newMovieId){
        return this.movieId = newMovieId;
    }

    get page(){
   
        return this.pageCounter;
    }
    set page(newPage) {
        return this.pageCounter = newPage;
    }
  

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        return this.searchQuery = newQuery;
    }
}











        //  Get movie by name
// export const fetchMovieByQuery = async (query, page=1) => {
          
//   try {
//     const response = await axios.get(`/3/search/movie?api_key=a1157fee69973f579feaed0c038c358a&page=${page}&query=${query}`);
//  console.log(response);
//       return response;
     
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

//     fetchMovieByQuery("Batman")

// GET Movie by ID

//   export  const fetchMovieById = async (movieId) => {

 
//         try {
//       const response = await axios.get(`/3/movie/${movieId}?api_key=a1157fee69973f579feaed0c038c358a&page`);
      
//     //   console.log(response.data); 
//     //   console.log('https://image.tmdb.org/t/p/w500'+response.data.poster_path); Img фильма 

//         }
   
//         catch (error) {
   
//       console.error(error);

//         }
//     }