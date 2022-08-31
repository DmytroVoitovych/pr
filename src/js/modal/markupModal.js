import { svg } from "./svg";
import { close } from "./getPost";
export const backdrop = document.querySelector('.backdropV');
import { funcAddWatchBtn } from "../storage/storage";
import { chekWatch } from "../storage/checkLocal";
import { chekQueue } from "../storage/checkLocal";  
 


export const markupModal = ({ title, vote_average, vote_count, popularity, original_title, genres, overview, poster_path, id }) => {
       
    close.onToggle();
   
    backdrop.innerHTML = `<div class="modalV container " >
        <button class='closeV'>${svg}</button>
        <img  ${ poster_path? `src=https://image.tmdb.org/t/p/w500${poster_path}`: 'src=https://i.ibb.co/7rX0ptx/e58db01cbe029d1732074b2e642bdc0e-3.jpg '  } alt="title" />
        <div>
            <h3 class='modal__titleV '>${title != null && title? title: 'No date' }</h3>
            <div class='flexboxV' >
                <ul class='modal__listV '>
                    <li class='modal__descV'><p  class='modal__pV'>Vote / Votes</p><p class='modal__rV'><span class='reitV'>${vote_average.toFixed(1)}</span> / <span class='countV'>${vote_count}</span></p></li>
                    <li class='modal__descV'><p class='modal__pV'>Popularity</p><p class='modal__valV'>${popularity.toFixed(1)}</p></li>
                    <li class='modal__descV'><p class='modal__pV'>Original Title</p><p class='modal__valV uperV'>${original_title}</p></li>
                    <li class='modal__descV'><p class='modal__pV'>Genre</p><p class='modal__valV'>${genres.map(g => g.name + ', ').join('').slice(0, -2) != null  &&
                    genres.map(g => g.name + ', ').join('').slice(0, -2) ?genres.map(g => g.name + ', ').join('').slice(0, -2): 'No date'}</p></li>
                </ul>
                <div>
                <p class='modal__aboutV'>About</p>
                <p>${overview != null && overview ? overview:'No description will be added soon. Sorry for the inconvenience'}</p>
                </div>
                <ul class='modal__button--listV' >
                    <li><button data-btn = ${id}  type='button' class='modal__watchV'>add to Watched</button></li>
                    <li><button data-btn = ${id} type='button'  class='modal__queV'>add to queue</button></li>
                
            </div>
        </div>
    </div>` ;
    
    them();
    chekQueue();
    chekWatch();
    
    const obj = { title, vote_average, vote_count, popularity, original_title, genres, overview, poster_path, id };
    console.log(obj);
    return funcAddWatchBtn(obj,document.querySelector('.modal__watchV'), document.querySelector('.modal__queV'), id);   
}

/////////////////////////////////////them control///////////////
const them = () => {
  if (document.body.classList.contains('section-night')) {
    document.body.classList.add('them');
    console.log(document.querySelector('.modalV'));
    document.querySelector('.modalV').style.backgroundColor = 'brown';
  }
  else {
    document.body.classList.remove('them');
  }
};

