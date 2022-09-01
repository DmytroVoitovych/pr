



export const trackingEmptyLibrary = () => { // контродь контейнера
     const gallery = document.querySelector('body'); 
    const galleryList = document.querySelector('.gallery__list');
     const empty = document.querySelector('.empty');

    if (galleryList.children.length === 0) {
        
       empty.classList.remove('visually-hidden');
       return gallery.classList.add('overlay');

    }
    else   {
          empty.classList.add('visually-hidden');
        return  gallery.classList.remove('overlay');
    }
};

