import { backdrop } from "./markupModal";
import { controlScreen } from "./controlScreen"; 
import { watch } from "../storage/storage";
// import { render } from "../../partials/biblioteca/bibl";

export class ModalClose {

    body = document.querySelector('body');

    onToggle = () => {

      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');   
        
      backdrop.classList.toggle('visibleV'); // закрытие по кнопке
      
        if (!document.querySelector('.visibleV')) {
            this.blockScroll('auto', '', '', '');
            return window.scrollTo(0, parseInt(this.body.style.top || '0') * -1);
        }

        else {  return  this.blockScroll('scroll', `${scrollY}`, `${controlScreen()}`, 'fixed'); }
       };

   
    blockScroll = (ov, top, wd, p) => {
       document.querySelector('body').style.overflowY = `${ov}`;
        document.querySelector('body').style.position = `${p}`;
         document.querySelector('body').style.width = `${wd}`;
      return  document.querySelector('body').style.top = `-${top}`;
     };
    

     funcKeyDown = (e) => { // закрытие по ескейпу
       if (e.code === 'Escape') {
          
            this.onToggle();
           return !backdrop.classList.contains('visibleV') && window.removeEventListener('keydown', this.funcKeyDown);   
         }
         return;        
    };

     funcClickBackdrop = e => {  //закрытие по бекдропу
        if (e.target === e.currentTarget) {
          this.onToggle();
          
         }
    };
}


