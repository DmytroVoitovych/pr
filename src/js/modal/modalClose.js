import { backdrop } from "./markupModal";

export class ModalClose {

    onToggle = () => {
        backdrop.classList.toggle('visibleV');
        if (!document.querySelector('.visibleV')) {
            return this.blockScroll('auto');
        }

        else {
           return this.blockScroll('hidden'); 
        }
    };

    blockScroll = (cl) =>  document.querySelector('body').style.overflow = `${cl}`;


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


