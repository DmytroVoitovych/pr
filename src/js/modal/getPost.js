import MovieAPiServer from "../../RequestApi/requestAPI";
const movieAPiServer = new MovieAPiServer();
import { markupModal } from "./markupModal";
import { ModalClose } from "./modalClose";
 export const close = new ModalClose();


export const getPost = async (e) => {
    
    movieAPiServer.movieId = e.currentTarget.dataset.ip;
    
    try {
        
    const response = await movieAPiServer.fetchMovieById(); 
        
      await markupModal(response);
      await window.addEventListener('keydown', close.funcKeyDown); 
      await document.querySelector('.closeV').addEventListener('click', close.onToggle); 
    
    } catch (error) {
        
        // не забыть влепить нотифашку
        }
               
  }