var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequirea340;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequirea340=n);var r=n("kaaqg"),a=n("5zoDb"),s=n("dy0eF"),i=n("krGWQ"),l=n("iQIUW");n("iQIUW");i=n("krGWQ");function c(){i.refs.modalPagination.classList.toggle("is-hidden")}function u(e){e.preventDefault();const t=e.currentTarget.elements.page.value;i.refs.backdropPagination.dataset.page=t,f()}function f(e){i.refs.formPagination.elements.page.value="",c()}let g="home";const d=new(0,s.default);function m(){"home"===g?p():d.fetchMovieByQuery().then((e=>{h(),(0,a.renderMoviesList)(e.results,d.pageCounter,d.maxPages)})).catch((e=>e)),(0,a.scrollToTop)()}function p(){d.fetchTopMovies().then((e=>{h(),(0,a.renderMoviesList)(e,d.pageCounter,d.maxPages)}))}function h(){i.refs.galleryList.innerHTML="",i.refs.pagginationList.innerHTML=""}d.getGenresList(),l.Notify.init({position:"center-top",timeout:3e3,distance:"15px",width:"390px",fontSize:"14px",cssAnimationStyle:"from-top",cssAnimationDuration:600,showOnlyTheLastOne:!0,useIcon:!1,clickToClose:!0,failure:{background:"rgba(0,0,0,0.1)",textColor:"#FF001B",notiflixIconColor:"rgba(200,0,0,0.4)"},success:{background:"rgba(0,0,0,0.7)",textColor:"#32c682",notiflixIconColor:"rgba(50,200,130,0.4)"}}),i.refs.pagginationList.addEventListener("click",(function(e){const t=e.target.dataset.page;if("..."===t)return void(o=d.maxPages,new Promise(((e,t)=>{i.refs.closeModalBtn.addEventListener("click",f),i.refs.formPagination.addEventListener("submit",u),i.refs.closeFormButton.addEventListener("click",f),i.refs.modalPagination.querySelector("#pagination-input").setAttribute("max",o),i.refs.backdropPagination.dataset.page="0",c();let n=null;n=setInterval((()=>{if(i.refs.modalPagination.classList.contains("is-hidden")){const o=i.refs.backdropPagination.dataset.page;clearInterval(n),0!==Number(o)?e(o):t("перехід не відбувся")}}),300)}))).then((e=>{console.log("перехід на сторінку ",e),d.pageCounter=Number(e),m()})).catch((e=>console.log(e)));var o;if(!t)return;d.pageCounter=Number(t),m()})),i.refs.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(i.refs.form.elements.searchQuery.value="",""===t)return console.log("test"),void l.Notify.failure("Please enter something",{width:"180px"});d.searchQuery=t;const o=d.pageCounter;d.pageCounter=1,d.fetchMovieByQuery().then((e=>{if(console.log(e),0===e.results.length)return l.Notify.failure("Search result not successful.. Enter the correct movie name"),void(d.pageCounter=o);d.maxPages=e.total_pages,g="search",h(),(0,a.renderMoviesList)(e.results,d.pageCounter,d.maxPages)})).catch((e=>e))})),i.refs.galleryList.classList.add("home"),p(),(0,r.btnDayNight)(),console.log(document.querySelector(".js-auth"));const v=()=>document.querySelector(".js-auth").setAttribute("href","/js/AutoForm/form.html");"true"!=(document.querySelector("[data-auth]").dataset=window.localStorage.getItem("auth"))?(console.log("test"),document.querySelector(".js-auth").addEventListener("click",v)):console.log("regyes");
//# sourceMappingURL=index.46f3d8a1.js.map
