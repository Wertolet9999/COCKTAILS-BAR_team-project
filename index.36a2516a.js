var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequirefb13;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequirefb13=r),r("1iCTa"),r("bUb57"),r("30HO2");const n={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailsTitle:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul")};var i=r("2nhTy"),s=r("3J0QU");function c(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>{if(!e)throw new Error(e.message);return e.json()})).then((e=>{const{drinks:t}=e;if(null===t)return(0,s.responseNull)();n.coctailsTitle.textContent="Cocktails",(0,i.main)(t)}))}const{heroList:l,heroTitle:a,hero:d,select:h,isHiden:u,heroItem:f,herospan:m,coctailTitel:p,cocktalisTitel:y,heroBox:L,heroSelect:v,heroListUl:b}=n;const T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];l.addEventListener("click",(function(e){const t=e.target.dataset.name,o=e.target,r=e.currentTarget.querySelectorAll(".hero-button");t&&innerWidth>767&&(r.forEach((e=>{e.classList.contains("is-hover")&&e.classList.remove("is-hover")})),o.classList.add("is-hover"),c(t))}));const S=T.map((e=>`<li class=hero-item value=${e} id=${e}>${e}</li>`));const g=function(e){return e.map((e=>`<li class=hero-item >\n        <button class=hero-button data-name=${e}>${e}</button>\n        </li>`))}(T),q='<div class="hero-container">\n</div>';if(innerWidth>767&&(u.classList.add("is-hiden"),l.insertAdjacentHTML("beforeend",g.join("")),d.insertAdjacentHTML("beforeend",q)),innerWidth<767){u.classList.remove("is-hiden"),a.insertAdjacentHTML("beforebegin",q),h.insertAdjacentHTML("beforeend",S.join("")),l.addEventListener("click",(function(e){const t=document.querySelector(".hero-svg"),o=document.querySelector(".hero-span"),r=e.target;r===v||r===o||r===t?(b.classList.remove("is-hiden-select"),b.classList.add("is-hden-select_display")):(b.classList.add("is-hiden-select"),b.classList.remove("is-hden-select_display"));const n=e.target;if(n){const t=e.target.id;t&&c(t).then((e=>{m.textContent=t}))}}))}r("aFV0K"),r("eujXJ"),r("hAisU"),r("3J0QU"),r("2nhTy");
//# sourceMappingURL=index.36a2516a.js.map
