import { find } from "lodash";
import { Notify,  } from "notiflix";



export const watch = [].concat(JSON.parse(window.localStorage.getItem('watched')) ?? []); // база просмотреных
export const queue = [].concat(JSON.parse(window.localStorage.getItem('queued')) ?? [] ) ; // база в очереди

console.log(watch);
console.log(queue);

// console.log(auth);

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
        
 const auth = localStorage.getItem('auth');
   
        if (!auth) {
     
            return Notify.failure('Sorry, but you are not registered',{ timeout: 1000});
  
        }  

        if (!btnW.classList.contains('remove')) {
            btnW.classList.toggle('remove');    

            btnW.textContent = 'remove from Watched';
             Notify.success('Was added to watched', { timeout: 1000});

        }
        else {
            btnW.classList.toggle('remove');
            btnW.textContent = 'add to Watched';

             Notify.success('Was deleted from watched',{ timeout: 1000});

        }
                
        funcUnic(obj, id, watch, btnW);
         console.log(watch);
        return  window.localStorage.setItem(`watched`, JSON.stringify(watch));
    });


    btnQ.addEventListener('click', () => {  // в список очереди

         const auth = localStorage.getItem('auth');
   
        if (!auth) {
     
            return Notify.failure('Sorry, but you are not registered',{ timeout: 1000});
  
        } 
      

         if (!btnQ.classList.contains('removeQ')) {
            btnQ.classList.toggle('removeQ');    

            btnQ.textContent = 'remove from Queue';
             Notify.success('Was add from queue', { timeout: 1000});
            
                }
        else {
            btnQ.classList.toggle('removeQ');
          btnQ.textContent = 'add to Queue';
            Notify.success('Was deleted from queue',{ timeout: 1000});
        }
      
        funcUnic(obj, id, queue, btnQ);
        
      return  window.localStorage.setItem(`queued`, JSON.stringify(queue));
        
    });
};