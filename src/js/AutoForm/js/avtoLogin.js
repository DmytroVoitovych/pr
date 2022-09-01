

export const funcLoginControl = () => {  // функция ответствена за автологин
   const controlLogin = document.querySelector('[data-auth]').dataset.auth = window.localStorage.getItem('auth');
   
  if (controlLogin != 'true') {   
    return document.querySelector('.js-auth').setAttribute('href', 'https://dmytrovoitovych.github.io/pr/js/AutoForm/form.html');
  }
      
};