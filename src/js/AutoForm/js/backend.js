import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';
import { regVis } from './regBtn';

export class Autorisation {
     
    static create(accaunt) {
         const API = 'AIzaSyCJO6J5S13Pdm3k-fiqWujVysknh69eHLg';
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API}`, {
            method: "POST",
            body: JSON.stringify(accaunt),
            headers: {
                "Content-Type": "application/json"
            }
            
        }).then(response => response.json()).then(response => {
            if (response.error) {
                Block.remove('.login100-form ')
                Notify.failure('вы уже зарегистрированы');
            }

            else {
                  console.log('yes');  // запрос отработал
                Block.remove('.login100-form ')  // лоадер отключаем
                regVis(); //перевод на форму регистрации
             Notify.info('Регистрация успешна');
            };
        });
}

    static fetch(token) {
        if (!token) {
            console.log(token);
            Block.remove('.login100-form ');
            regVis();
            return Promise.resolve(Notify.info('Зарегистрируйтесь в системе'));
        }
        else {
            Block.remove('.login100-form ');
             window.localStorage.setItem(`auth`, JSON.stringify(true));
            Notify.success('Вы выпонили авторизацию');
            return  time();  
    }
    
       
          
      }

}
 
function time() {
    setTimeout(() => window.location.replace('../../biblioteca.html'), 1000);
};



// если вдруг мне захочетя залезть в базу данных 
// fetch(`https://autorisation-cda1f-default-rtdb.europe-west1.firebasedatabase.app/accaunt.json?auth=${token}}`).then( // если токен есть забираем 
//          response => console.log(response.json())).then(baza => {  console.log(baza);
//              if (baza.error) {  // проверка на ошибку
//              return console.log('error');
//              }
             
//              return baza ? Object.keys(baza).map(key => ({  //   разбираю  базу если что то есть 
//                  ...baza[key],
//                  id: key,
//              })) : [];   // иначе сервак как это часто бывает возвращает пустой массив

//          });