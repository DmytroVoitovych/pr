!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequirea340;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequirea340=a);var o,i=a("8nrFW"),l=a("g9G2c"),s=a("4Nugj"),c=function(){var e=localStorage.getItem("activeGroup"),t="queued";e?t=e:localStorage.setItem("activeGroup",t);return t}(),u=1;o=c,e(i)(s.refs.buttonsContainer.children).map((function(e){console.log("lang=",e.dataset.lang,"activeGroup=",o),e.dataset.lang===o&&e.classList.add("selected")})),s.refs.buttonsContainer.addEventListener("click",(function(t){var n=t.target.dataset.lang;if(n===c)return;c=n,u=1,localStorage.setItem("activeGroup",c);var r=localStorage.getItem("".concat(c));d=JSON.parse(r),u=1,g(),e(i)(s.refs.buttonsContainer.children).map((function(e){return e.classList.toggle("selected")}))})),s.refs.pagginationList.addEventListener("click",(function(e){var t=e.target.dataset.page;if(!t)return;u=Number(t),g(),(0,l.scrollToTop)()})),s.refs.backdrop.addEventListener("focusin",(function(e){console.log("testtesttest"),console.log(c);var t=localStorage.getItem("".concat(c));d=JSON.parse(t),console.log(d),g()}));var f=localStorage.getItem("".concat(c)),d=JSON.parse(f);function g(){s.refs.galleryList.innerHTML="",s.refs.pagginationList.innerHTML="";var e=d.filter((function(e,t){return t>=6*(u-1)&&t<6*u}));(0,l.renderLibraryList)(e,u,Math.ceil(d.length/6))}g()}();
//# sourceMappingURL=biblioteca.9be4a506.js.map