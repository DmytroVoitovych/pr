var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequirea340;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var d={id:e,exports:{}};return o[e]=d,n.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequirea340=n);var d=n("bk7Qu");(()=>{const e={openModalBtn:document.querySelector(".footer__items--ref"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function o(){const o=document.documentElement.style.getPropertyValue("--scroll-y");return e.modal.classList.toggle("is-hidden"),e.modal.classList.contains("is-hidden")?(t("auto","","",""),window.scrollTo(0,-1*parseInt(e.body.style.top||"0"))):t("scroll",`${o}`,`${(0,d.controlScreen)()}`,"fixed")}function t(o,t,n,d){return e.body.style.overflowY=`${o}`,e.body.style.position=`${d}`,e.body.style.width=`${n}`,e.body.style.top=`-${t}`}e.openModalBtn.addEventListener("click",o),e.modal.addEventListener("click",(function(e){e.target===e.currentTarget&&o()})),e.closeModalBtn.addEventListener("click",o),document.addEventListener("keydown",(function(o){"Escape"===o.code&&(e.modal.classList.add("is-hidden"),document.removeEventListener("keydown"))}))})();
//# sourceMappingURL=index.e4795a92.js.map