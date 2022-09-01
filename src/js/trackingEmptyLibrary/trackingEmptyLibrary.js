



export const trackingEmptyLibrary = () => {
    const gallery = document.querySelector('body'); 
    const galleryList = document.querySelector('.gallery__list')

    if (galleryList.children.length === 0) {
        
       return gallery.classList.add('overlay');

    }
    else if (galleryList.children.length > 0) {
        
        return  gallery.classList.remove('overlay');
    }
};