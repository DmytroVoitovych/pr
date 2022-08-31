


export const funcAutorisation = (email, password) => {
    const API = 'AIzaSyCJO6J5S13Pdm3k-fiqWujVysknh69eHLg';
   return  fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API}`, {
        method: "POST",
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => response.json()).then(data => data.idToken);  
};