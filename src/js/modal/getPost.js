import MovieAPiServer from "../../RequestApi/requestAPI";
const movieAPiServer = new MovieAPiServer();
import { markupModal } from "./markupModal";
import { ModalClose } from "./modalClose";
 export const close = new ModalClose();
 

export const getPost = async (e) => {
    
    movieAPiServer.movieId = e.currentTarget.dataset.ip;
    
    try {
        
    const response = await movieAPiServer.fetchMovieById(); 
        console.dir(response);
      await markupModal(response);
     
      await document.querySelector('.closeV').addEventListener('click', close.onToggle); 
        
    
    } catch (error) {
        
        // не забыть влепить нотифашку
        }
               
  }