var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequirefb13;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequirefb13=n);var r=n("1iO0g"),i=n("fy93h"),l=n("2nhTy"),a=n("1lZvt"),c=n("fvTqB"),s=n("ds8KB");n("bUb57"),n("eujXJ"),n("30HO2"),(0,r.onAuthStateChanged)(i.auth,(e=>{e?(0,c.getCocktails)().then((e=>{if(a.refs.coctailTitel.textContent="Favorite cocktails",console.log("response",e),!e){const e="<p>You haven't added any favorite cocktails yet</p>";return void document.querySelector(".gallery.container").insertAdjacentHTML("beforeend",e)}const t=[];Object.entries(e).forEach((([e,o])=>{t.push(+o)}));const o=[],n=t.map((e=>(0,s.getCocktailById)(e)));Promise.all(n).then((e=>{for(const{drinks:t}of e)o.push(t[0]);console.log(o),(0,l.main)(o),a.refs.coctailTitel.textContent="Favorite cocktails"}))})).catch((e=>{console.log(e)})):location.replace("/")}));
//# sourceMappingURL=favorites-c.310d4638.js.map