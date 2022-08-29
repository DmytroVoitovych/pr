
export const watch = [].concat(JSON.parse(window.localStorage.getItem('watched')) ?? []); // база просмотреных
export const queue = [].concat(JSON.parse(window.localStorage.getItem('queued')) ?? [] ) ; // база в очереди

console.log(watch);
console.log(queue);

const funcUnic = (obj, id, list, ) => { // функция проверки обьекта на уникальность
  const checkId = obj => obj.id === id;

    if (list.some(checkId)) {
        
        return list.splice(-1,1); ;
    }  
    return list.push(obj);
};

export const funcAddWatchBtn = (obj, btnW, btnQ, id) => { // функция добавления на страницу библиотекы данных
        
    btnW.addEventListener('click', () => {  // в список просмотреных
        
        if (!btnW.classList.contains('remove')) {
            btnW.classList.toggle('remove');    
            btnW.textContent = 'remove';
            
        }
        else {
            btnW.classList.toggle('remove');
           btnW.textContent = 'add to Watched';
           
        }
                
        funcUnic(obj, id, watch, btnW);
         console.log(watch);
        return  window.localStorage.setItem(`watched`, JSON.stringify(watch));
    });


    btnQ.addEventListener('click', () => {  // в список очереди
        
         if (!btnQ.classList.contains('remove')) {
            btnQ.classList.toggle('remove');    
            btnQ.textContent = 'remove';
            
        }
        else {
            btnQ.classList.toggle('remove');
           btnQ.textContent = 'add to Watched';
           
        }
      
        funcUnic(obj, id, queue, btnQ);
        console.log(queue, );
        return  window.localStorage.setItem(`queued`, JSON.stringify(queue));
    });
};