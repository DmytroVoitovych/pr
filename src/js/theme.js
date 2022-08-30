document.querySelector(".themes").addEventListener("change", (e) => {
    if (e.target.nodeName === "INPUT") {
        console.log("hsdvjab");
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(e.target.value);       
    }
});

// window.addEventListener('load', windowLoad);
// function windowLoad() {
//     const themeBtn = document.querySelector('.theme-btn');
//     const htmlBlock = document.documentElement;
//     const saveUserTheme = localStorage.getItem('user-theme');
//     // menuSwitcher();
//     // showLibrary();
//     let userTheme;
//     if (window.matchMedia) {
//         userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
//             ? 'dark'
//             : 'light';
//     }
//     window
//         .matchMedia('(prefers-color-scheme: dark)')
//         .addEventListener('change', e => {
//             !saveUserTheme ? changeTheme() : null;
//         });

//     if (themeBtn) {
//         themeBtn.addEventListener('click', function (e) {
//             changeTheme(true);
//         });
//     }

//     function setThemeClass() {
//         if (saveUserTheme) {
//             htmlBlock.classList.add(saveUserTheme);
//         } else {
//             htmlBlock.classList.add(userTheme);
//         }
//     }
//     setThemeClass();

//     function changeTheme(saveTheme = false) {
//         let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
//         let newTheme;
//         if (currentTheme === 'light') {
//             newTheme = 'dark';
//         } else if (currentTheme === 'dark') {
//             newTheme = 'light';
//         }
//         htmlBlock.classList.remove(currentTheme);
//         htmlBlock.classList.add(newTheme);
//         saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
//     }
// }