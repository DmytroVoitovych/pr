!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequirea340;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequirea340=r);var o=r("7kasF"),a=r("g9G2c"),i=r("cmNEd"),s=r("4Nugj"),u=r("h6c0i");r("h6c0i");s=r("4Nugj");function c(){s.refs.modalPagination.classList.toggle("is-hidden")}function l(e){e.preventDefault();var t=e.currentTarget.elements.page.value;s.refs.backdropPagination.dataset.page=t,f()}function f(e){s.refs.formPagination.elements.page.value="",c()}var g="home",d=new(0,i.default);function m(){"home"===g?p():d.fetchMovieByQuery().then((function(e){v(),(0,a.renderMoviesList)(e.results,d.pageCounter,d.maxPages)})).catch((function(e){return e})),(0,a.scrollToTop)()}function p(){d.fetchTopMovies().then((function(e){v(),(0,a.renderMoviesList)(e,d.pageCounter,d.maxPages)}))}d.getGenresList(),u.Notify.init({position:"center-top",timeout:3e3,distance:"15px",width:"390px",fontSize:"14px",cssAnimationStyle:"from-top",cssAnimationDuration:600,showOnlyTheLastOne:!0,useIcon:!1,clickToClose:!0,failure:{background:"rgba(0,0,0,0.1)",textColor:"#FF001B",notiflixIconColor:"rgba(200,0,0,0.4)"},success:{background:"rgba(0,0,0,0.7)",textColor:"#32c682",notiflixIconColor:"rgba(50,200,130,0.4)"}}),s.refs.pagginationList.addEventListener("click",(function(e){var t=e.target.dataset.page;if("..."===t)return void(n=d.maxPages,new Promise((function(e,t){s.refs.closeModalBtn.addEventListener("click",f),s.refs.formPagination.addEventListener("submit",l),s.refs.closeFormButton.addEventListener("click",f),s.refs.modalPagination.querySelector("#pagination-input").setAttribute("max",n),s.refs.backdropPagination.dataset.page="0",c();var r=null;r=setInterval((function(){if(s.refs.modalPagination.classList.contains("is-hidden")){var n=s.refs.backdropPagination.dataset.page;clearInterval(r),0!==Number(n)?e(n):t("перехід не відбувся")}}),300)}))).then((function(e){console.log("перехід на сторінку ",e),d.pageCounter=Number(e),m()})).catch((function(e){return console.log(e)}));var n;if(!t)return;d.pageCounter=Number(t),m()})),s.refs.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.searchQuery.value.trim();if(s.refs.form.elements.searchQuery.value="",""===t)return console.log("test"),void u.Notify.failure("Please enter something",{width:"180px"});d.searchQuery=t;var n=d.pageCounter;d.pageCounter=1,d.fetchMovieByQuery().then((function(e){if(console.log(e),0===e.results.length)return u.Notify.failure("Search result not successful.. Enter the correct movie name"),void(d.pageCounter=n);d.maxPages=e.total_pages,g="search",v(),(0,a.renderMoviesList)(e.results,d.pageCounter,d.maxPages)})).catch((function(e){return e}))})),s.refs.galleryList.classList.add("home"),p(),(0,o.btnDayNight)();var h=function(){return document.querySelector(".js-auth").setAttribute("href","/js/AutoForm/form.html")};function v(){s.refs.galleryList.innerHTML="",s.refs.pagginationList.innerHTML=""}!function(){if("true"!=(document.querySelector("[data-auth]").dataset=window.localStorage.getItem("auth")))console.log("test"),document.querySelector(".js-auth").addEventListener("click",h)}()}();
//# sourceMappingURL=index.b10934fd.js.map
