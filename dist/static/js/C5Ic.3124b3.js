(window.webpackJsonp=window.webpackJsonp||[]).push([["C5Ic"],{C5Ic:function(e,t,n){"use strict";n.r(t);var o=n("/MKj"),i=n("q1tI"),r=n.n(i),a=n("i8i4"),c=n.n(a),l=n("17x9"),u=n.n(l);function d(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=!1;if("undefined"!=typeof window){var v={get passive(){s=!0}};window.addEventListener("testPassive",null,v),window.removeEventListener("testPassive",null,v)}var f="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),m=[],g=!1,h=-1,p=void 0,w=void 0,y=function(e){return m.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},E=function(e){var t=e||window.event;return!!y(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},b=function(){setTimeout((function(){void 0!==w&&(document.body.style.paddingRight=w,w=void 0),void 0!==p&&(document.body.style.overflow=p,p=void 0)}))},T=function(e,t){if(f){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!m.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};m=[].concat(d(m),[n]),e.ontouchstart=function(e){1===e.targetTouches.length&&(h=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-h;!y(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?E(e):e.stopPropagation())}(t,e)},g||(document.addEventListener("touchmove",E,s?{passive:!1}:void 0),g=!0)}}else{!function(e){setTimeout((function(){if(void 0===w){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(w=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===p&&(p=document.body.style.overflow,document.body.style.overflow="hidden")}))}(t);var o={targetElement:e,options:t||{}};m=[].concat(d(m),[o])}},L=n("GWjx"),I=n.n(L),P=document.getElementById("overlay");function S(e){var t=e.isLoading,n=Object(i.useRef)(document.createElement("div"));return Object(i.useEffect)((function(){return P.appendChild(n.current),function(){P.removeChild(n.current)}}),[]),Object(i.useEffect)((function(){return t?T(n):function(e){if(f){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,m=m.filter((function(t){return t.targetElement!==e})),g&&0===m.length&&(document.removeEventListener("touchmove",E,s?{passive:!1}:void 0),g=!1)}else(m=m.filter((function(t){return t.targetElement!==e}))).length||b()}(n),function(){f?(m.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),g&&(document.removeEventListener("touchmove",E,s?{passive:!1}:void 0),g=!1),m=[],h=-1):(b(),m=[])}}),[t]),c.a.createPortal(t?r.a.createElement("div",{className:I.a.default},r.a.createElement("div",{className:"ts active inverted dimmer"},r.a.createElement("div",{className:"ts loader"}))):null,n.current)}S.propTypes={isLoading:u.a.bool},S.defaultProps={isLoading:!1};t.default=Object(o.c)((function(e){return{isLoading:e.ui.state.isLoading}}))(S)}}]);