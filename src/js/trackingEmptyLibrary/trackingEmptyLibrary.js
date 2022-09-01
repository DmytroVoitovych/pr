



export const trackingEmptyLibrary = () => {
    const gallery = document.querySelector('.gallery'); 
    const galleryList = document.querySelector('.gallery__list')

    if (galleryList.children.length === 0) {
    console.log(gallery);
        const img = document.createElement('img');
        img.setAttribute('src', 'http://www.imgworlds.com/wp-content/uploads/2015/11/novocinema1.jpg');

        gallery.appendChild(img);
    }
    
    return;
};