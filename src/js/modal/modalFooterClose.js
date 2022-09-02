import { controlScreen } from "./controlScreen"; 
import { funcControlArts } from "../arts";


(() => {  
  const refs = {
    openModalBtn: document.querySelector(".footer__items--ref"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector('body')
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", funcClickBackdrop);
  refs.closeModalBtn.addEventListener("click", toggleModal);
 
  

  function toggleModal() {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); 
    
    refs.modal.classList.toggle("is-hidden");
    window.addEventListener("keydown", toggleModalEscape);
   if (refs.modal.classList.contains("is-hidden")) {
      // Disable scroll
      // refs.body.style.overflow = "hidden";
     blockScroll('auto', '', '', '');
      refs.modal.classList.contains('is-hidden')   &&  window.removeEventListener('keydown', toggleModalEscape);
      return window.scrollTo(0, parseInt(refs.body.style.top || '0') * -1);
      } else {
      // Enable scroll
      // refs.body.style.overflow = "auto";
     funcControlArts(document.querySelectorAll('.t-js'))
     return  blockScroll('scroll', `${scrollY}`, `${controlScreen()}`, 'fixed');
    }
  }
  function blockScroll(ov, top, wd, p){
       refs.body.style.overflowY = `${ov}`;
        refs.body.style.position = `${p}`;
         refs.body.style.width = `${wd}`;
      return  refs.body.style.top = `-${top}`;
     }
     
  function toggleModalEscape(e) {
    if (e.code === 'Escape') {
      toggleModal();
      console.log('esc');
     return  refs.modal.classList.contains('is-hidden')   &&  window.removeEventListener('keydown', toggleModalEscape);
    }   
  }
  function funcClickBackdrop(e) {
        if (e.target === e.currentTarget) {
          toggleModal();
          return  refs.modal.classList.contains('is-hidden')   &&  window.removeEventListener('keydown', toggleModalEscape);
         }
    };
})();