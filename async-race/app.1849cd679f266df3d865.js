(()=>{"use strict";var e={980:(e,t,n)=>{n.r(t)},334:(e,t,n)=>{n.r(t)},492:(e,t,n)=>{n.r(t)},848:(e,t,n)=>{n.r(t)},522:(e,t,n)=>{n.r(t)},85:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Base=void 0,t.Base=class{constructor(){this.body=document.body,this.createMainBlock=()=>{const e=document.createElement("main");e.id="main",this.body.append(e)}}}},851:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function c(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0;const o=n(110),s=n(5),r=n(969),c=n(459);t.Event=class{constructor(){this.generate=new o.Generate,this.request=new r.Request,this.random=new s.Random,this.animationCars=new c.AnimationCars,this.generateCars=()=>{document.getElementsByClassName("btn-generate")[0].addEventListener("click",(()=>a(this,void 0,void 0,(function*(){for(let e=0;e<100;e++){const e={name:this.random.createNameCar(),color:this.random.createColorCar()};yield this.request.requestCreateCar(e)}yield this.generate.generateBlockCars("default")}))))},this.carRace=(e,t)=>a(this,void 0,void 0,(function*(){const e=document.getElementsByClassName("btn-reset")[0],t=document.getElementsByClassName("btn-race")[0],n=Array.from(document.getElementsByClassName("block-race"));t.addEventListener("click",(()=>{console.log("raceField carrace "),console.log(n);for(let e=0;e<n.length;e++)n[e].classList.add("race--active"),this.animationCars.moveCar(e,+n[e].id);t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),this.carReset()})),this.carReset=e=>{const t=document.getElementsByClassName("btn-reset")[0],n=document.getElementsByClassName("btn-race")[0],a=Array.from(document.getElementsByClassName("block-race")),o=Array.from(document.getElementsByClassName("btn-stop-car")),s=Array.from(document.getElementsByClassName("block-car-and-flag")),r=Array.from(document.getElementsByClassName("btn-start-car")),c=Array.from(document.getElementsByClassName("svg-car"));t.addEventListener("click",(()=>{for(let e=0;e<c.length;e++)a[e].classList.remove("race--active"),this.animationCars.carStop(e,c,s,r,o);n.setAttribute("disabled","true"),t.removeAttribute("disabled")}))},this.clickBtnWinners=()=>{const e=document.getElementsByClassName("btn-Winner")[0],t=document.getElementsByClassName("menu__block-Garage")[0];e.addEventListener("click",(()=>{console.log("click Winner"),document.getElementsByClassName("block-create-car")[0],document.getElementsByClassName("block-update-car")[0],document.getElementsByClassName("block-control-car")[0];const e=document.getElementById("race-field");document.getElementsByClassName("menu__block-winners")[0].classList.remove("block--none"),t.classList.add("block--none"),null==e||e.classList.add("block--none")}))},this.clickBtnGarage=()=>{const e=document.getElementsByClassName("btn-Garage")[0],t=document.getElementsByClassName("menu__block-Garage")[0];e.addEventListener("click",(()=>{console.log("click Garage"),document.getElementsByClassName("block-create-car")[0],document.getElementsByClassName("block-update-car")[0],document.getElementsByClassName("block-control-car")[0];const e=document.getElementById("race-field");document.getElementsByClassName("menu__block-winners")[0].classList.add("block--none"),t.classList.remove("block--none"),null==e||e.classList.remove("block--none")}))}}}},37:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LocalStorage=void 0,t.LocalStorage=class{constructor(){this.setLocalSorage=e=>{console.log("localstorage"+e),localStorage.setItem("pageActive",`${e}`)},this.getLocalSorage=e=>(console.log("get localstorage"+e),localStorage.getItem(`${e}`))}}},983:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function c(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ControlMenu=void 0;const o=n(110),s=n(969),r=n(5),c=n(851);t.ControlMenu=class{constructor(){this.generate=new o.Generate,this.request=new s.Request,this.random=new r.Random,this.event=new c.Event,this.createBlockMenu=()=>{const e=document.createElement("div"),t=document.createElement("div"),n=document.getElementById("main");e.id="menu",t.className="menu__block-Garage",e.className="block-menu",null!==n&&(n.append(e),e.append(t))},this.createBtnPageChange=()=>{const e=document.getElementById("menu");if(console.log(null!==e),null!==e){console.log(null!==e);const t=document.createElement("div"),n=document.createElement("button"),a=document.createElement("button");t.className="block-btns-page-change",n.className="btn btn-Garage",a.className="btn btn-Winner",n.innerText="Garage",a.innerText="Winner",e.prepend(t),t.append(n),t.append(a)}},this.createBlockCreateCar=()=>{const e=document.getElementById("menu"),t=document.getElementsByClassName("menu__block-Garage")[0];if(null!==e){const e=document.createElement("div"),n=document.createElement("input"),a=document.createElement("input"),o=document.createElement("button");n.setAttribute("type","text"),a.setAttribute("type","color"),e.className="block-create-car",n.id="input-name-create",a.id="input-color-create",o.className="btn btn-create-car",o.innerText="Create",t.append(e),e.append(n),e.append(a),e.append(o)}},this.createBlockUpdateCar=()=>{const e=document.getElementById("menu"),t=document.getElementsByClassName("menu__block-Garage")[0];if(null!==e){const e=document.createElement("div"),n=document.createElement("input"),a=document.createElement("input"),o=document.createElement("button");n.setAttribute("type","text"),a.setAttribute("type","color"),e.className="block-update-car",n.id="input-name-update",a.id="input-color-update",o.id="btn-update-car",o.className="btn",o.innerText="Update",t.append(e),e.append(n),e.append(a),e.append(o)}},this.createBlockControlCar=()=>{const e=document.getElementById("menu"),t=document.getElementsByClassName("menu__block-Garage")[0];if(null!==e){const e=document.createElement("div"),n=document.createElement("button"),a=document.createElement("button"),o=document.createElement("button");e.className="block-control-car",n.className="btn btn-race",a.className="btn btn-reset",o.className="btn btn-generate",n.innerText="Race",a.innerText="Reset",o.innerText="Generate",a.setAttribute("disabled","true"),t.append(e),e.append(n),e.append(a),e.append(o)}this.event.generateCars()},this.clickBtnCreate=()=>{document.getElementsByClassName("btn-create-car")[0].addEventListener("click",(()=>a(this,void 0,void 0,(function*(){const e=document.getElementById("input-name-create"),t=(document.getElementById("input-color-create"),{name:""!==e.value?e.value:this.random.createNameCar(),color:this.random.createColorCar()});yield this.request.requestCreateCar(t),yield this.generate.generateBlockCars("newCar"),window.location.reload()}))))}}}},295:function(e,t,n){var a,o=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function c(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))},s=this&&this.__classPrivateFieldGet||function(e,t,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Pagination=void 0;const r=n(969),c=n(110),l=n(851),i=n(37);t.Pagination=class{constructor(){this.request=new r.Request,this.generate=new c.Generate,this.event=new l.Event,this.localStorage=new i.LocalStorage,a.set(this,7),this.test=e=>o(this,void 0,void 0,(function*(){const t=yield this.request.requestGarage(),n=(e-1)*s(this,a,"f"),o=n+s(this,a,"f"),r=t.slice(n,o);console.log(r),yield this.generate.generateBlockCars("pagination",r)})),this.pagination=()=>o(this,void 0,void 0,(function*(){const e=document.getElementsByClassName("block-count__page")[0],t=document.getElementsByClassName("block-count_cars")[0],n=document.querySelector(".block__li-pagination"),a=yield this.request.requestGarage();this.createCuntPage(a.length);const s=this.localStorage.getLocalSorage("pageActive");null!==s&&this.test(+s);const r=Array.from(document.getElementsByClassName("item"));e.innerText=`Page #${s}`,t.innerText=`Garage (${a.length})`;for(let e=0;e<r.length;e++)r[e].addEventListener("click",(()=>o(this,void 0,void 0,(function*(){null!==n&&(n.id=""+ +r[e].innerHTML,this.localStorage.setLocalSorage(+n.id)),this.test(+r[e].innerHTML),window.location.reload()}))))})),this.createCuntPage=e=>{const t=Math.ceil(e/s(this,a,"f"));for(let e=1;e<=t;e++){const t=document.createElement("li"),n=document.getElementsByClassName("list")[0],a=document.getElementsByClassName("block__li-pagination")[0];t.className="item",t.innerText=`${e}`,a.append(n),n.append(t)}}}},a=new WeakMap},459:function(e,t,n){var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function c(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AnimationCars=void 0;const o=n(969);t.AnimationCars=class{constructor(){this.request=new o.Request,this.carStop=(e,t,n,a,o)=>{console.log("STop"),console.log(e),console.log(t[e]),console.log(n[e]),console.log(a[e]),t[e].style.transform="translateX(0px)",a[e].removeAttribute("disabled"),o[e].setAttribute("disabled","true")},this.clickBtnStart=()=>{var e;const t=Array.from(document.getElementsByClassName("btn-stop-car")),n=Array.from(document.getElementsByClassName("btn-start-car")),a=Array.from(document.getElementsByClassName("block-car-and-flag")),o=Array.from(document.getElementsByClassName("block-race"));console.log(`${n.length} - length ${n}`);for(let s=0;s<n.length;s++){const r=()=>{var e,r,c,l;(null===(e=a[s])||void 0===e?void 0:e.classList.contains("race--active"))||(console.log("START"),console.log(o),console.log(o[s]),null===(r=a[s])||void 0===r||r.classList.add("race--active"),this.moveCar(s,+o[s].id),null===(c=n[s])||void 0===c||c.setAttribute("disabled","true"),null===(l=t[s])||void 0===l||l.removeAttribute("disabled"))};null===(e=n[s])||void 0===e||e.addEventListener("click",r)}},this.clickBtnStop=()=>{var e;const t=Array.from(document.getElementsByClassName("btn-stop-car")),n=Array.from(document.getElementsByClassName("block-car-and-flag")),a=Array.from(document.getElementsByClassName("btn-start-car")),o=Array.from(document.getElementsByClassName("svg-car"));console.log(`${t.length} - length ${t}`),console.log(t);for(let s=0;s<t.length;s++)null===(e=t[s])||void 0===e||e.addEventListener("click",(()=>{var e;(null===(e=n[s])||void 0===e?void 0:e.classList.contains("race--active"))&&this.carStop(s,o,n,a,t)}))},this.returnStatusEror=e=>a(this,void 0,void 0,(function*(){return yield this.request.requestFrameDriveEngine(e).then((()=>0)).catch((()=>1))})),this.moveCar=(e,t,n)=>a(this,void 0,void 0,(function*(){console.log(`index-  ${e}`),console.log(`id-  ${t}`);const n=Array.from(document.getElementsByClassName("img-car"))[0],a=Array.from(document.getElementsByClassName("svg-car")),o=yield this.request.requestFrameStartEngine(t);console.log("BLOCK MOVE"),console.log(Array.from(document.getElementsByClassName("block-race")));let s=0;const r=o.velocity,c=o.distance/r,l=c/1e3*60,i=n.offsetWidth+50,d=(n.offsetWidth,(i-s)/l);console.log(c),console.log(e+"----проверка индекса");const m=()=>{let n=0;s>i&&(console.log("rEALfinish"),console.log(s),n++,1===n&&this.timer(n),this.request.requestFrameStopEngine(t)),1===s&&(console.log("rEALfinish---500"),console.log(s),this.timer(1),this.request.requestFrameStopEngine(t)),s<i&&1!==s&&(a[e].style.transform=`translateX(${s+=d}px)`,requestAnimationFrame(m))};m(),s=yield this.returnStatusEror(t).then((e=>e)),console.log(i)})),this.timer=e=>{let t=0,n=0;document.createElement("span");const a=setInterval((()=>{t+=1,100===t&&(n+=1,t=0),this.returTime(t,n,e),1===e&&clearInterval(a)}),10);console.log(`${t}/${n} фффффф`)},this.returTime=(e,t,n)=>{1===n&&console.log(`${e}/${t} finis`),console.log(`${e}/${t} sssss`)}}}},110:function(e,t,n){var a,o=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function c(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))},s=this&&this.__classPrivateFieldGet||function(e,t,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Generate=void 0;const r=n(969),c=n(459);t.Generate=class{constructor(){this.request=new r.Request,this.animationCars=new c.AnimationCars,a.set(this,(e=>{let t;return t=void 0!==e?`<?xml version="1.0" encoding="utf-8"?>\x3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\x3e\n        <svg class="svg-car"  viewBox="0 0 400 400" fill=${e} xmlns="http://www.w3.org/2000/svg">\n        <path d="M47 232.735C48.4246 221.084 48.7322 209.254 49.8438 197.66" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M55.168 192.264C94.3021 170.326 238.898 95.2264 246.732 181.436" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M75.4033 195.607C120.206 186.193 361.578 139.763 344.331 235.433" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M322.277 244.876C332.859 243.916 342.827 239.677 353.305 238.131" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M268.316 227.65C273.344 223.411 276.541 214.633 283.581 213.083C309.001 207.493 331.57 243.568 304.852 256.789C281.398 268.387 260.878 243.015 277.586 224.415" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M79.5169 226.914C110.155 175.735 153.384 245.823 109.035 258.807C90.5036 264.232 70.4089 244.217 83.8087 229.115" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M258.873 239.059C190.155 241.806 116.847 229.997 48.4229 235.624" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M352.003 219.244C351.792 226.929 352.003 234.736 352.003 242.178" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>`:'<?xml version="1.0" encoding="utf-8"?>\x3c!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\x3e\n        <svg class="flag" width="800px" height="800px" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">\n        <path d="M5 22V14M5 14V4M5 14L7.47067 13.5059C9.1212 13.1758 10.8321 13.3328 12.3949 13.958C14.0885 14.6354 15.9524 14.7619 17.722 14.3195L17.9364 14.2659C18.5615 14.1096 19 13.548 19 12.9037V5.53669C19 4.75613 18.2665 4.18339 17.5092 4.3727C15.878 4.78051 14.1597 4.66389 12.5986 4.03943L12.3949 3.95797C10.8321 3.33284 9.1212 3.17576 7.47067 3.50587L5 4M5 4V2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\n        </svg>',t})),this.generateBlockCars=(e,t)=>o(this,void 0,void 0,(function*(){let n;const o=yield this.request.requestGarage().then((e=>e));if("default"===e?n=yield this.request.requestGarage().then((e=>e)):"newCar"===e?n=yield this.request.getRequestCar(+o[o.length-1].id).then((e=>[e])):"pagination"===e&&(this.deleteBlocs(),n=t),void 0!==n)for(let e=0;e<n.length;e++)if(e<7){const t=n[e].name,o=n[e].color,r=n[e].id,c=document.getElementById("race-field"),l=document.createElement("div"),i=document.createElement("div"),d=document.createElement("button"),m=document.createElement("button"),u=document.createElement("span"),h=document.createElement("div"),g=document.createElement("div"),p=document.createElement("div"),v=document.createElement("button"),f=document.createElement("button"),y=document.createElement("div"),b=document.createElement("div"),E=document.createElement("div"),k=document.createElement("div");l.className="block-race",l.id=`${r}`,i.className="block-race__car-info",d.className="btn btn-seclect",m.className="btn btn-remove",u.className="car-brand",h.className="block-car",g.className="control-car",p.className="control-car__btns",v.className="btn btn-start-car",f.className="bnt btn-stop-car",y.className="block-car-and-flag",b.className="img-car",E.className="img-flag",k.className="road-race",u.className="car-brand",v.innerText="Start",f.innerText="Stop",u.innerText=t,b.innerHTML=s(this,a,"f").call(this,o),E.innerHTML=s(this,a,"f").call(this),d.innerText="SELECT",m.innerText="REMOVE",null==f||f.setAttribute("disabled","true"),null!==c&&(c.append(l),l.append(i),l.append(h),i.append(d),i.append(m),i.append(u),h.append(g),h.append(k),g.append(p),g.append(y),p.append(v),p.append(f),y.append(b),y.append(E))}this.clickBtnSelect(),this.clickBtnRemove(),this.animationCars.clickBtnStart(),this.animationCars.clickBtnStop()})),this.deleteBlocs=()=>{const e=Array.from(document.getElementsByClassName("block-race"));for(let t=0;t<e.length;t++)e[t].remove()},this.clickBtnSelect=()=>{const e=Array.from(document.getElementsByClassName("block-race")),t=Array.from(document.getElementsByClassName("btn-seclect")),n=document.getElementById("input-name-update"),a=document.getElementById("input-color-update"),s=document.getElementById("btn-update-car"),r=Array.from(document.getElementsByClassName("car-brand")),c=Array.from(document.getElementsByClassName("svg-car"));for(let l=0;l<t.length;l++)t[l].addEventListener("click",(()=>o(this,void 0,void 0,(function*(){const t=yield this.request.getRequestCar(+e[l].id).then((e=>e));console.log("SELECT"),null==n||n.focus(),t.name,t.color,n.value=t.name,a.value=t.color,null==s||s.addEventListener("click",(()=>o(this,void 0,void 0,(function*(){r[l].innerText=n.value,c[l].style.fill=a.value;const t={name:n.value,color:a.value};yield this.request.requestUpdateCar(t,+e[l].id),yield this.request.requestGarage(),n.value="",a.value="#000000"}))))}))))},this.clickBtnRemove=()=>o(this,void 0,void 0,(function*(){const e=document.querySelectorAll(".btn-remove"),t=document.querySelectorAll(".block-race");document.querySelector(".race-field");for(let n=0;n<e.length;n++){const a=()=>o(this,void 0,void 0,(function*(){console.log("REMOVE"),yield this.request.requestDeleteCar(+t[n].id),yield this.request.requestGarage(),t[n].remove(),window.location.reload(),e[n].removeEventListener("click",a)}));e[n].addEventListener("click",a)}}))}},a=new WeakMap},484:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RaceField=void 0;const a=n(37);t.RaceField=class{constructor(){this.localStorage=new a.LocalStorage,this.createBlockRaceField=()=>{const e=document.createElement("div"),t=document.getElementById("main"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("span"),s=document.createElement("span"),r=document.createElement("ul"),c=this.localStorage.getLocalSorage("pageActive");e.id="race-field",e.className="block-race-field",n.className="block__li-pagination",this.localStorage.getLocalSorage("pageActive")?n.id=`${c}`:n.id="1",a.className="block-count",o.className="block-count__page",s.className="block-count_cars",r.className="list",null!==t&&(t.append(e),e.append(a),a.append(s),a.append(o),t.append(n),n.append(r))}}}},5:function(e,t){var n,a,o,s=this&&this.__classPrivateFieldGet||function(e,t,n,a){if("a"===n&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0,t.Random=class{constructor(){n.set(this,["Tesla","BMW","Ferrari","Ford","Porsh","Jaguar","Mitsubishi","Nissan","Mazda","Alfa Romeo"]),a.set(this,["1","2","3","4","5","6","7","8","9","10"]),o.set(this,["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]),this.getRandom=e=>{for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},this.createNameCar=()=>{const e=`${this.getRandom(s(this,n,"f"))[0]} ${this.getRandom(s(this,a,"f"))[0]}`;return console.log(e),e},this.createColorCar=()=>{let e="#";for(let t=0;t<6;t++)e+=this.getRandom(s(this,o,"f"))[0];return console.log(e),e}}},n=new WeakMap,a=new WeakMap,o=new WeakMap},969:function(e,t){var n=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(o,s){function r(e){try{l(a.next(e))}catch(e){s(e)}}function c(e){try{l(a.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Request=void 0,t.Request=class{constructor(){this.url="http://127.0.0.1:3000",this.requestGarage=()=>n(this,void 0,void 0,(function*(){const e=yield fetch(`${this.url}/garage`);return yield e.json()})),this.getRequestCar=e=>n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.url}/garage/${e}`);return yield t.json()})),this.requestFrameStartEngine=e=>n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.url}/engine?id=${e}&status=started`,{method:"PATCH"});return yield t.json()})),this.requestFrameDriveEngine=e=>n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.url}/engine?id=${e}&status=drive`,{method:"PATCH"});return yield t.json()})),this.requestFrameStopEngine=e=>n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.url}/engine?id=${e}&status=stopped`,{method:"PATCH"});return yield t.json()})),this.requestStatusEngine=e=>n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.url}/engine?id=${e}&status=started`,{method:"PATCH"});return yield t.json()})),this.requestCreateCar=e=>n(this,void 0,void 0,(function*(){const t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},n=yield fetch(`${this.url}/garage`,t);return yield n.json().then((e=>console.log(e)))})),this.requestDeleteCar=e=>n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.url}/garage/${e}`,{method:"DELETE"});return yield t.json()})),this.requestUpdateCar=(e,t)=>n(this,void 0,void 0,(function*(){const n={method:"Put",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},a=yield fetch(`${this.url}/garage/${t}`,n);return yield a.json().then((e=>console.log(e.status)))}))}}},287:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Winners=void 0,t.Winners=class{constructor(){this.creatBlockTableWinners=()=>{const e=document.getElementById("menu");if(null!==e){const t=document.createElement("div"),n=document.createElement("span"),a=document.createElement("span"),o=document.createElement("div");t.className="menu__block-winners",n.className="menu__counter-winners",a.className="menu__counter-page",o.className="menu__block-table",t.classList.add("block--none"),n.innerText="Winners (0)",a.innerText="Page #1",e.append(t),t.append(n),t.append(a),t.append(o),this.creatTableWinners(o)}},this.creatTableWinners=e=>{const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),r=document.createElement("div"),c=document.createElement("span"),l=document.createElement("span"),i=document.createElement("span"),d=document.createElement("span"),m=document.createElement("span");t.className="block-table__table",n.className="table-item table__number",a.className="table-item table__car",o.className="table-item table__name",s.className="table-item table__wins",r.className="table-item table__time",c.className="table__header",l.className="table__header",i.className="table__header",d.className="table__header",m.className="table__header",c.innerText="№",l.innerText="Car",i.innerText="Name",d.innerText="Wins",m.innerText="Time",e.append(t),t.append(n),t.append(a),t.append(o),t.append(s),t.append(r),n.append(c),a.append(l),o.append(i),s.append(d),r.append(m)}}}},607:function(e,t,n){this&&this.__awaiter,Object.defineProperty(t,"__esModule",{value:!0}),n(334),n(848),n(492),n(522),n(980);const a=n(85),o=n(983),s=n(484),r=n(110),c=n(459),l=n(5),i=n(851),d=n(287),m=n(295),u=n(37),h=new a.Base,g=new o.ControlMenu,p=new s.RaceField,v=(new r.Generate,new d.Winners),f=(new c.AnimationCars,new l.Random,new i.Event),y=new m.Pagination,b=new u.LocalStorage;h.createMainBlock(),g.createBlockMenu(),g.createBtnPageChange(),g.createBlockCreateCar(),g.createBlockUpdateCar(),g.createBlockControlCar(),g.clickBtnCreate(),v.creatBlockTableWinners(),p.createBlockRaceField();const E=b.getLocalSorage("pageActive");null!==E&&y.test(+E),setTimeout((()=>{y.pagination(),f.clickBtnGarage(),f.clickBtnWinners(),f.carRace(),f.carReset()}),500)}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();