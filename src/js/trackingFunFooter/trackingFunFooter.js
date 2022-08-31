import { refs } from "../refs"



export const trackingFunFooter = () => {
    console.log(refs.galleryList.children.length);
    if ( refs.galleryList.children.length === 0) {
      
        refs.galleryList.style.height =`32vh` ;
    }
    
       return
}