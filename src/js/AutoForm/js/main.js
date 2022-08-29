

  
const form = document.querySelector('[data-form]');
console.log(form); 
    
const funcSubmit = (e) => {
    e.preventDefault();
  const login =  e.currentTarget.elements.username.value.trim();
    const pass = e.currentTarget.elements.pass.value.trim();
    const btnSubmit = e.currentTarget.elements[2];

    validLive();
    
    if (login && login.length >= 4 && pass && pass.length >= 4) {
        console.log(login);
        console.log(pass);
        const asyncFire = {
            userlogin: login,
            password: pass,
            date: new Date().toJSON(),
        }; 
        
         console.dir( btnSubmit);
        e.currentTarget.reset();
         btnSubmit.disabled = true; 
    
    }
};





form.addEventListener('submit', funcSubmit);  
    


