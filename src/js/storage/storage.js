import { find } from "lodash";

export const watch = [].concat(JSON.parse(window.localStorage.getItem('watched')) ?? []); // база просмотреных
export const queue = [].concat(JSON.parse(window.localStorage.getItem('queued')) ?? [] ) ; // база в очереди

console.log(watch);
console.log(queue);

const funcUnic = (obj, id, list, ) => { // функция проверки обьекта на уникальность
  const checkId = obj => obj.id === id;
 
    let index = list.findIndex(el => el.id == obj.id); // доп проверка 
   
    if (list.some(checkId)) {
      
        return list.splice(index, 1); ;
    }  
    return list.push(obj);
};

export const funcAddWatchBtn = (obj, btnW, btnQ, id) => { // функция добавления на страницу библиотекы данных
        
    btnW.addEventListener('click', () => {  // в список просмотреных
        
        if (!btnW.classList.contains('remove')) {
            btnW.classList.toggle('remove');    
            btnW.textContent = 'remove to Watched';
            
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
        
         if (!btnQ.classList.contains('removeQ')) {
            btnQ.classList.toggle('removeQ');    
            btnQ.textContent = 'remove to Queue';
            
        }
        else {
            btnQ.classList.toggle('removeQ');
           btnQ.textContent = 'add to Queue';
           
        }
      
        funcUnic(obj, id, queue, btnQ);
        
        return  window.localStorage.setItem(`queued`, JSON.stringify(queue));
    });
};