var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequirefb13;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},e.parcelRequirefb13=t);var r=t("eyjy7"),a=t("fy93h"),i=t("2nhTy");t("1lZvt");var l=t("fvTqB"),d=t("ds8KB");(0,r.onAuthStateChanged)(a.auth,(()=>{(0,l.getCocktails)().then((e=>{if(console.log("response",e),!e){const e="<p>You haven't added any favorite cocktails yet</p>";return void document.querySelector(".gallery.container").insertAdjacentHTML("beforeend",e)}const n=[];Object.entries(e).forEach((([e,o])=>{o.id=e,n.push(o)}));const o=[];n.map((e=>{(0,d.getCocktailById)(e).then((({drinks:e})=>{for(const n of e)o.push(n);(0,i.main)(o)}))}))})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=favorites-c.aa924281.js.map
