



export const trackingEmptyLibrary = () => {
    const gallery = document.querySelector('.gallery'); 
    const galleryList = document.querySelector('.gallery__list')

    if (galleryList.children.length === 0) {
        
        gallery.classList.add('overlay');

    }
    else if (galleryList.children.length > 0) {
        
          gallery.classList.remove('overlay');
    }
};