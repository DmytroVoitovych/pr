export const controlScreen = () => {
    // создадим элемент с прокруткой
    let div = document.createElement('div');
     
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    document.body.style.overflow = "visible !important";
    div.remove();
    return  `calc(100vw - ${scrollWidth}px)`; 
}