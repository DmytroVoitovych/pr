(() => {
  const refs = {
    openModalBtn: document.querySelector(".footer__items--ref"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", funcClickBackdrop);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  document.addEventListener("keydown", toggleModalEscape);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");

  }
  function toggleModalEscape(e) {
    if (e.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      document.removeEventListener('keydown');
    }   
  }
  function funcClickBackdrop(e) {
        if (e.target === e.currentTarget) {
            toggleModal();
         }
    };
})();