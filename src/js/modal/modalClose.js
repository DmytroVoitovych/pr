import { backdrop } from "./markupModal";
import { controlScreen } from "./controlScreen"; 

export class ModalClose {

    body = document.querySelector('body');

    onToggle = () => {

      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');   
        
        backdrop.classList.toggle('visibleV');
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
    

     funcKeyDown = (e) => {
         if (e.code === 'Escape') {
            this.onToggle();
           return !backdrop.classList.contains('visibleV') && window.removeEventListener('keydown', this.funcKeyDown);   
         }
         return;        
    };

     funcClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            this.onToggle();
         }
    };
}


