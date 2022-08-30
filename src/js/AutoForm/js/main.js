import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';
import { Autorisation } from './backend';
import { funcAutorisation } from './autorisation';
import { regVis } from './regBtn';

  
const form = document.querySelector('[data-form]');
const regF = document.querySelector('[data-registr]');
const btnA = document.querySelector('.login100-form-btn');
const inputs = document.querySelectorAll('.validate-input');

    
const funcSubmit = (e) => {   // авторизация
    e.preventDefault();
    const login =  e.currentTarget.elements.username.value.trim();
    const pass = e.currentTarget.elements.pass.value.trim();
       
    if (login && login.length >= 4 || pass && pass.length >= 4) {
        console.log(login);
        console.log(pass);
                   
        e.currentTarget.reset();

        btnA.disabled = true;
        Block.dots('.login100-form '); // это лоадер перед запросом 
        
              
       return   funcAutorisation(login, pass).then(token => Autorisation.fetch(token)); // такен даем  на проверку
    }
     
    else if (!login || !pass) {
        Notify.info('поля должны быть заполнены')
    }

    else {
        Notify.failure('Введите больше символов');
    }
};







const funcSubmitReg = (e) => { // регистрация 
    
    e.preventDefault();
    const login = e.currentTarget.elements.username.value.trim();
    const email =  e.currentTarget.elements.email.value.trim();
    const pass = e.currentTarget.elements.passReg.value.trim();
    const btnSubmit = e.currentTarget.elements[2];
   
    if (login && login.length >= 4 && pass && pass.length >= 6) {
        
        const regObj = {
            password: pass,
            email: email,
           };
        
       
        e.currentTarget.reset();

        btnA.disabled = true;
        Block.dots('.login100-form '); // это лоадер перед запросом 
       
       
        return Autorisation.create(regObj)
        
    }
     
    else if (!login || !pass) {
        btnA.disabled = true; 
       return Notify.info('поля должны быть заполнены')
    }
            
    else {
       btnA.disabled = true;  
      return  Notify.failure('Введите больше символов');
    }
};


form.addEventListener('submit', funcSubmit);  
regF.addEventListener('submit', funcSubmitReg);  
document.querySelector('.reg').addEventListener('click',  regVis);   
window.addEventListener('load', (e) =>  e.preventDefault());
document.querySelector('.formArrow').addEventListener('click', regVis);


