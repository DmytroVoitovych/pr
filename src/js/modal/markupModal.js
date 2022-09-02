import { svg } from "./svg";
import { close } from "./getPost";
export const backdrop = document.querySelector('.backdropV');
import { funcAddWatchBtn } from "../storage/storage";
import { chekWatch } from "../storage/checkLocal";
import { chekQueue } from "../storage/checkLocal";  
import { funcControlModalArts } from "../arts"; 


export const markupModal = ({ title, vote_average, vote_count, popularity, original_title, genres, overview, poster_path, id, release_date }) => {
       
    close.onToggle();
   
    backdrop.innerHTML = `<div class="modalV container " >
        <button class='closeV'>${svg}</button>
        <img  ${ poster_path? `src=https://image.tmdb.org/t/p/w500${poster_path}`: 'src=https://i.ibb.co/7rX0ptx/e58db01cbe029d1732074b2e642bdc0e-3.jpg '  } alt="title" />
        <div>
            <h3 class='modal__titleV t-js'>${title != null && title? title: 'No date' }</h3>
            <div class='flexboxV' >
                <ul class='modal__listV '>
                    <li class='modal__descV'><p  class='modal__pV'>Vote / Votes</p><p class='modal__rV'><span class='reitV'>${vote_average.toFixed(1)}</span> / <span class='countV'>${vote_count}</span></p></li>
                    <li class='modal__descV'><p class='modal__pV'>Popularity</p><p class='modal__valV t-js'>${popularity.toFixed(1)}</p></li>
                    <li class='modal__descV'><p class='modal__pV'>Original Title</p><p class='modal__valV uperV t-js'>${original_title}</p></li>
                    <li class='modal__descV'><p class='modal__pV'>Genre</p><p class='modal__valV t-js'>${genres.map(g => g.name + ', ').join('').slice(0, -2) != null  &&
                    genres.map(g => g.name + ', ').join('').slice(0, -2) ?genres.map(g => g.name + ', ').join('').slice(0, -2): 'No date'}</p></li>
                </ul>
                <div>
                <p class='modal__aboutV t-js'>About</p>
                <p class='t-js'>${overview != null && overview ? overview:'No description will be added soon. Sorry for the inconvenience'}</p>
                </div>
                <ul class='modal__button--listV' >
                    <li><button data-btn = ${id}  type='button' class='modal__watchV'>add to Watched</button></li>
                    <li><button data-btn = ${id} type='button'  class='modal__queV'>add to queue</button></li>
                
            </div>
        </div>
    </div>` ;
    
    // them();
    chekQueue();
    chekWatch();
    funcControlModalArts(document.querySelectorAll('.t-js'), document.querySelector('.modalV'), document.querySelectorAll('.modal__pV'));
    
    const obj = { title, vote_average, vote_count, popularity, original_title, genres, overview, poster_path, id, release_date };
    console.log(obj);
    return funcAddWatchBtn(obj,document.querySelector('.modal__watchV'), document.querySelector('.modal__queV'), id);   
}



