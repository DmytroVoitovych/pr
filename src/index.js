
import MovieAPiServer from "./RequestApi/requestAPI";

// Пример работы с запросами:

const movieAPiServer = new MovieAPiServer;
const fun = (e) => {
    //  movieAPiServer.query = e.currentTarget.elements.... Значение с инпута
    // movieAPiServer.query = "Spider";
    // movieAPiServer.page = 1;

    movieAPiServer.fetchTopMovie().then(data => console.log(data.data)
    
    )
}
fun();




