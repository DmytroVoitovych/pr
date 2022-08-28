import { svg } from "./svg";
import { close } from "./getPost";
export const backdrop = document.querySelector('.backdropV');

        

export const markupModal = ({title, vote_average, vote_count, popularity, original_title, genres, overview, poster_path }) => {
    
    close.onToggle();
    
    
 return  backdrop.innerHTML =  `<div class="modalV container">
        <button class='closeV'>${svg}</button>
        <img src='https://image.tmdb.org/t/p/w500${poster_path ?? backdrop_path}' alt="title" />
        <div>
            <h3 class='modal__titleV'>${title}</h3>
            <div class='flexboxV' >
                <ul class='modal__listV'>
                    <li class='modal__descV'><p  class='modal__pV'>Vote / Votes</p><p class='modal__rV'><span class='reitV'>${vote_average.toFixed(1)}</span> / <span class='countV'>${vote_count}</span></p></li>
                    <li class='modal__descV'><p class='modal__pV'>Popularity</p><p class='modal__valV'>${popularity.toFixed(1)}</p></li>
                    <li class='modal__descV'><p class='modal__pV'>Original Title</p><p class='modal__valV uperV'>${original_title}</p></li>
                    <li class='modal__descV'><p class='modal__pV'>Genre</p><p class='modal__valV'>${genres.map(g => g.name + ', ').join('').slice(0, -2)}</p></li>
                </ul>
                <div>
                <p class='modal__aboutV'>About</p> 
                <p>${overview}</p>
                </div>
                <ul class='modal__button--listV' >
                    <li><button  type='button' class='modal__watchV'>add to Watched</button></li>
                    <li><button type='button'  class='modal__queV'>add to queue</button></li>
                
            </div>
        </div>
    </div>` ;
}