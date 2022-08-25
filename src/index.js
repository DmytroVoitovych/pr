


// import { getPost, MovieAPiServer } from "./RequestApi/requestAPI";
import MovieAPiServer from "./RequestApi/requestAPI";
// Пример работы с запросами:
// 
const movieAPiServer = new MovieAPiServer;
const fun = (e) => {
    //  movieAPiServer.query = e.currentTarget.elements.... Значение с инпута
    movieAPiServer.query = "Batman";
    movieAPiServer.page = 2;
    movieAPiServer.fetchTopMovie().then(data=>console.log(data));
}
fun();





