var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequirea340;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequirea340=r);var o=r("5zoDb"),a=r("krGWQ");console.log("эработаетэ");let i=function(){const e=localStorage.getItem("activeGroup");let t="queued";e?t=e:localStorage.setItem("activeGroup",t);return t}(),l=1;var s;s=i,[...a.refs.buttonsContainer.children].map((e=>{e.dataset.lang===s&&e.classList.add("selected")})),a.refs.buttonsContainer.addEventListener("click",(function(e){const t=e.target.dataset.lang;if(t===i)return;i=t,l=1,localStorage.setItem("activeGroup",i),c=f(),l=1,d(),[...a.refs.buttonsContainer.children].map((e=>e.classList.toggle("selected")))})),a.refs.pagginationList.addEventListener("click",(function(e){const t=e.target.dataset.page;if(!t)return;l=Number(t),d(),(0,o.scrollToTop)()})),a.refs.backdrop.addEventListener("focusin",(function(){c=f(),c.length%6==0&&(console.log("ntcn"),1!==l&&(l-=1));d()}));let c=f();function d(){a.refs.galleryList.innerHTML="",a.refs.pagginationList.innerHTML="";const e=c.filter(((e,t)=>t>=6*(l-1)&&t<6*l));(0,o.renderLibraryList)(e,l,Math.ceil(c.length/6))}function f(){const e=localStorage.getItem(`${i}`);return JSON.parse(e)}d();
//# sourceMappingURL=biblioteca.780d6323.js.map