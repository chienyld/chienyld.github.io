"use strict";(self["webpackChunkchienyld_github_ionic"]=self["webpackChunkchienyld_github_ionic"]||[]).push([[74],{74:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return i}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=e=>{let t,n,i,f=10*-u,v=0;const p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),h=new WeakMap,m=e=>{f=(0,o.u)(e),g(e)},L=e=>{f=(0,o.u)(e),k(e)},w=e=>{if(2===e.button)return;const t=(0,o.u)(e)-u;f<t&&g(e)},E=e=>{const t=(0,o.u)(e)-u;f<t&&k(e)},b=()=>{clearTimeout(i),i=void 0,t&&(C(!1),t=void 0)},g=e=>{t||T(s(e),e)},k=e=>{T(void 0,e)},T=(e,n)=>{if(e&&e===t)return;clearTimeout(i),i=void 0;const{x:s,y:c}=(0,o.q)(n);if(t){if(h.has(t))throw new Error("internal error");t.classList.contains(r)||y(t,s,c),C(!0)}if(e){const t=h.get(e);t&&(clearTimeout(t),h.delete(e));const n=a(e)?0:d;e.classList.remove(r),i=setTimeout((()=>{y(e,s,c),i=void 0}),n)}t=e},y=(e,t,o)=>{v=Date.now(),e.classList.add(r);const i=p&&c(e);i&&i.addRipple&&(R(),n=i.addRipple(t,o))},R=()=>{void 0!==n&&(n.then((e=>e())),n=void 0)},C=e=>{R();const n=t;if(!n)return;const o=l-Date.now()+v;if(e&&o>0&&!a(n)){const e=setTimeout((()=>{n.classList.remove(r),h.delete(n)}),l);h.set(n,e)}else n.classList.remove(r)},_=document;_.addEventListener("ionGestureCaptured",b),_.addEventListener("touchstart",m,!0),_.addEventListener("touchcancel",L,!0),_.addEventListener("touchend",L,!0),_.addEventListener("pointercancel",b,!0),_.addEventListener("mousedown",w,!0),_.addEventListener("mouseup",E,!0)},s=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(!(n instanceof ShadowRoot)&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=74.c85cefb5.js.map