"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[197],{3601:function(t,e,n){n.d(e,{FQ:function(){return c},Mh:function(){return a},Oe:function(){return s},Pg:function(){return r},Tg:function(){return u},gW:function(){return i}});var o=n(3263);function r(){return o.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4","&page=1"))}function a(t){var e="https://api.themoviedb.org/3/movie/".concat(t);return o.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function i(t){var e={key:"866c6d075a3e37e8cd8cfb5e85076bc4",nameFilm:t},n=e.key,r=e.nameFilm;return o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(n,"&query=").concat(r,"&page=1"))}function s(t){var e="https://api.themoviedb.org/3/movie/".concat(t,"/credits");return o.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function c(t){var e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews");return o.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function u(t){var e="https://api.themoviedb.org/3/movie/".concat(t,"/videos");return o.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}},4138:function(t,e,n){n.d(e,{a:function(){return a}});var o,r=n(168),a=n(6444).ZP.ul(o||(o=(0,r.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n\n    li {\n        border-radius: 2px;\n        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n        img{\n            width: 100%;\n            height: 500px;\n            object-fit: cover;\n            transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n            :hover {\n                transform: scale(1.05);\n                cursor: pointer;\n            }\n        }\n   }\n\n"])))},854:function(t,e,n){var o=n(5243),r=n(184);e.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(o.g4,{})})}},6197:function(t,e,n){n.r(e),n.d(e,{default:function(){return lt}});var o=n(5861),r=n(9439),a=n(7757),i=n.n(a),s=n(2791),c=n(1087),u=n(924);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=n(3433);function v(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=v(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}var g=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=v(t))&&(o&&(o+=" "),o+=e);return o},h=["theme","type"],y=["delay","staleId"],b=function(t){return"number"==typeof t&&!isNaN(t)},E=function(t){return"string"==typeof t},T=function(t){return"function"==typeof t},x=function(t){return E(t)||T(t)?t:null},_=function(t){return(0,s.isValidElement)(t)||E(t)||T(t)||b(t)};function O(t){var e=t.enter,n=t.exit,o=t.appendPosition,r=void 0!==o&&o,a=t.collapse,i=void 0===a||a,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var o=t.children,a=t.position,c=t.preventExitTransition,l=t.done,d=t.nodeRef,f=t.isIn,p=r?"".concat(e,"--").concat(a):e,v=r?"".concat(n,"--").concat(a):n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var t,e=d.current,n=p.split(" "),o=function t(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,m.Z)(n)))};(t=e.classList).add.apply(t,(0,m.Z)(n)),e.addEventListener("animationend",o),e.addEventListener("animationcancel",o)}),[]),(0,s.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),i?function(t,e,n){void 0===n&&(n=300);var o=t.scrollHeight,r=t.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(e,n)}))}))}(t,l,u):l()};f||(c?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[f]),s.createElement(s.Fragment,null,o)}}function C(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var w={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,m.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(r)}))}},I=function(t){var e=t.theme,n=t.type,o=p(t,h);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},k={info:function(t){return s.createElement(I,f({},t),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return s.createElement(I,f({},t),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return s.createElement(I,f({},t),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return s.createElement(I,f({},t),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function L(t){var e=(0,s.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],o=(0,s.useState)([]),a=(0,r.Z)(o,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,d=function(t){return-1!==i.indexOf(t)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:d,getToast:function(t){return l.get(t)}}).current;function g(t){var e=t.containerId;!v.props.limit||e&&v.containerId!==e||(v.count-=v.queue.length,v.queue=[])}function h(t){c((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function O(){var t=v.queue.shift();L(t.toastContent,t.toastProps,t.staleId)}function I(t,e){var o=e.delay,r=e.staleId,a=p(e,y);if(_(t)&&!function(t){return!u.current||v.props.enableMultiContainer&&t.containerId!==v.props.containerId||l.has(t.toastId)&&null==t.updateId}(a)){var i=a.toastId,c=a.updateId,d=a.data,m=v.props,g=function(){return h(i)},I=null==c;I&&v.count++;var P,N,j=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:c,data:d,closeToast:g,isIn:!1,className:x(a.className||m.toastClassName),bodyClassName:x(a.bodyClassName||m.bodyClassName),progressClassName:x(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(P=a.autoClose,N=m.autoClose,!1===P||b(P)&&P>0?P:N),deleteToast:function(){var t=C(l.get(i),"removed");l.delete(i),w.emit(4,t);var e=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),e>0){var o=null==i?v.props.limit:1;if(1===e||1===o)v.displayedToast++,O();else{var r=o>e?e:o;v.displayedToast=r;for(var a=0;a<r;a++)O()}}else n()}});j.iconOut=function(t){var e=t.theme,n=t.type,o=t.isLoading,r=t.icon,a=null,i={theme:e,type:n};return!1===r||(T(r)?a=r(i):(0,s.isValidElement)(r)?a=(0,s.cloneElement)(r,i):E(r)||b(r)?a=r:o?a=k.spinner():function(t){return t in k}(n)&&(a=k[n](i))),a}(j),T(a.onOpen)&&(j.onOpen=a.onOpen),T(a.onClose)&&(j.onClose=a.onClose),j.closeButton=m.closeButton,!1===a.closeButton||_(a.closeButton)?j.closeButton=a.closeButton:!0===a.closeButton&&(j.closeButton=!_(m.closeButton)||m.closeButton);var R=t;(0,s.isValidElement)(t)&&!E(t.type)?R=(0,s.cloneElement)(t,{closeToast:g,toastProps:j,data:d}):T(t)&&(R=t({closeToast:g,toastProps:j,data:d})),m.limit&&m.limit>0&&v.count>m.limit&&I?v.queue.push({toastContent:R,toastProps:j,staleId:r}):b(o)?setTimeout((function(){L(R,j,r)}),o):L(R,j,r)}}function L(t,e,n){var o=e.toastId;n&&l.delete(n);var r={content:t,props:e};l.set(o,r),c((function(t){return[].concat((0,m.Z)(t),[o]).filter((function(t){return t!==n}))})),w.emit(4,C(r,null==r.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=t.containerId,w.cancelEmit(3).on(0,I).on(1,(function(t){return u.current&&h(t)})).on(5,g).emit(2,v),function(){l.clear(),w.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=t,v.isToastActive=d,v.displayedToast=i.length})),{getToastToRender:function(e){var n=new Map,o=Array.from(l.values());return t.newestOnTop&&o.reverse(),o.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:u,isToastActive:d}}function P(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function N(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function j(t){var e=(0,s.useState)(!1),n=(0,r.Z)(e,2),o=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(t),m=t.autoClose,v=t.pauseOnHover,g=t.closeToast,h=t.onClick,y=t.closeOnClick;function b(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=P(e.nativeEvent),f.y=N(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(e){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?_():x()}}function x(){a(!0)}function _(){a(!1)}function O(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=P(e),f.y=N(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,s.useEffect)((function(){p.current=t})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),T(t.onOpen)&&t.onOpen((0,s.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;T(t.onClose)&&t.onClose((0,s.isValidElement)(t.children)&&t.children.props)}}),[]),(0,s.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",x),window.addEventListener("blur",_)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",_))}}),[t.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(w.onMouseEnter=_,w.onMouseLeave=x),y&&(w.onClick=function(t){h&&h(t),f.canCloseOnClick&&g()}),{playToast:x,pauseToast:_,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:w}}function R(t){var e=t.closeToast,n=t.theme,o=t.ariaLabel,r=void 0===o?"close":o;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":r},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Z(t){var e=t.delay,n=t.isRunning,o=t.closeToast,r=t.type,a=void 0===r?"default":r,i=t.hide,c=t.className,u=t.style,d=t.controlledProgress,p=t.progress,m=t.rtl,v=t.isIn,h=t.theme,y=i||d&&0===p,b=f(f({},u),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var E=g("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),x=T(c)?c({rtl:m,type:a,defaultClassName:E}):g(E,c);return s.createElement("div",l({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:x,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){v&&o()}))}var S=function(t){var e=j(t),n=e.isRunning,o=e.preventExitTransition,r=e.toastRef,a=e.eventHandlers,i=t.closeButton,c=t.children,u=t.autoClose,l=t.onClick,d=t.type,p=t.hideProgressBar,m=t.closeToast,v=t.transition,h=t.position,y=t.className,b=t.style,E=t.bodyClassName,x=t.bodyStyle,_=t.progressClassName,O=t.progressStyle,C=t.updateId,w=t.role,I=t.progress,k=t.rtl,L=t.toastId,P=t.deleteToast,N=t.isIn,S=t.isLoading,M=t.iconOut,D=t.closeOnClick,B=t.theme,z=g("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":D}),A=T(y)?y({rtl:k,position:h,type:d,defaultClassName:z}):g(z,y),F=!!I||!u,q={closeToast:m,type:d,theme:B},H=null;return!1===i||(H=T(i)?i(q):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,q):R(q)),s.createElement(v,{isIn:N,done:P,position:h,preventExitTransition:o,nodeRef:r},s.createElement("div",f(f({id:L,onClick:l,className:A},a),{},{style:b,ref:r}),s.createElement("div",f(f({},N&&{role:w}),{},{className:T(E)?E({type:d}):g("Toastify__toast-body",E),style:x}),null!=M&&s.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},M),s.createElement("div",null,c)),H,s.createElement(Z,f(f({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:k,theme:B,delay:u,isRunning:n,isIn:N,closeToast:m,hide:p,type:d,style:O,className:_,controlledProgress:F,progress:I||0}))))},M=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},D=O(M("bounce",!0)),B=(O(M("slide",!0)),O(M("zoom")),O(M("flip")),(0,s.forwardRef)((function(t,e){var n=L(t),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=t.className,c=t.style,u=t.rtl,l=t.containerId;function d(t){var e=g("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":u});return T(i)?i({position:t,rtl:u,defaultClassName:e}):g(e,x(i))}return(0,s.useEffect)((function(){e&&(e.current=r.current)}),[]),s.createElement("div",{ref:r,className:"Toastify",id:l},o((function(t,e){var n=e.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var o=t.content,r=t.props;return s.createElement(S,f(f({},r),{},{isIn:a(r.toastId),style:f(f({},r.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(r.key)}),o)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,A=new Map,F=[],q=1;function H(){return""+q++}function Q(t){return t&&(E(t.toastId)||b(t.toastId))?t.toastId:H()}function V(t,e){return A.size>0?w.emit(0,t,e):F.push({content:t,options:e}),e.toastId}function W(t,e){return f(f({},e),{},{type:e&&e.type||t,toastId:Q(e)})}function U(t){return function(e,n){return V(e,W(t,n))}}function G(t,e){return V(t,W("default",e))}G.loading=function(t,e){return V(t,W("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},G.promise=function(t,e,n){var o,r=e.pending,a=e.error,i=e.success;r&&(o=E(r)?G.loading(r,n):G.loading(r.render,f(f({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,r){if(null!=e){var a=f(f(f({type:t},s),n),{},{data:r}),i=E(e)?{render:e}:e;return o?G.update(o,f(f({},a),i)):G(i.render,f(f({},a),i)),r}G.dismiss(o)},u=T(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},G.success=U("success"),G.info=U("info"),G.error=U("error"),G.warning=U("warning"),G.warn=G.warning,G.dark=function(t,e){return V(t,W("default",f({theme:"dark"},e)))},G.dismiss=function(t){A.size>0?w.emit(1,t):F=F.filter((function(e){return null!=t&&e.options.toastId!==t}))},G.clearWaitingQueue=function(t){return void 0===t&&(t={}),w.emit(5,t)},G.isActive=function(t){var e=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},G.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,o=A.get(n||z);return o&&o.getToast(t)}(t,e);if(n){var o=n.props,r=n.content,a=f(f(f({},o),e),{},{toastId:e.toastId||t,updateId:H()});a.toastId!==t&&(a.staleId=t);var i=a.render||r;delete a.render,V(i,a)}}),0)},G.done=function(t){G.update(t,{progress:1})},G.onChange=function(t){return w.on(4,t),function(){w.off(4,t)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(t){z=t.containerId||t,A.set(z,t),F.forEach((function(t){w.emit(0,t.content,t.options)})),F=[]})).on(3,(function(t){A.delete(t.containerId||t),0===A.size&&w.off(0).off(1).off(5)}));var X,Y,K,J=n(3601),$=n(854),tt=n(7689),et=n(4138),nt=n(184),ot=function(t){var e=t.arraySearch,n=(0,tt.TH)();return(0,nt.jsx)(et.a,{children:e.map((function(t){return(0,nt.jsx)("li",{children:(0,nt.jsxs)(c.rU,{to:"".concat(t.id),state:{from:n},children:[t.poster_path&&(0,nt.jsx)("img",{width:250,src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),!t.poster_path&&(0,nt.jsx)("img",{width:250,src:"https://sitysun.ru/wp-content/uploads/oboi-vertikalnye-krasivye_74.jpg",alt:""})]})},t.id)}))})},rt=n(168),at=n(6444),it=at.ZP.form(X||(X=(0,rt.Z)(["\n    margin-left: 24px;\n    margin-bottom: 20px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n"]))),st=at.ZP.input(Y||(Y=(0,rt.Z)(["\n    display: inline-block;\n    width: 50%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    border-bottom: 2px solid #8e8edd;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n"]))),ct=at.ZP.button(K||(K=(0,rt.Z)(["\n    padding: 6px 20px;\n    border-radius: 5px;\n    color: black;\n    font-weight: 500;\n    border: 2px solid #8e8edd;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 18px;\n\n    :hover {\n        color: white;\n        background-color: #8e8edd;\n    }\n"]))),ut=function(t){var e=t.onSubmit,n=(0,s.useState)(""),o=(0,r.Z)(n,2),a=o[0],i=o[1];return(0,nt.jsxs)(it,{onSubmit:function(t){t.preventDefault(),""!==a.trim()?(e(a.trim()),i("")):G.warn("Please, input something!")},children:[(0,nt.jsx)(st,{className:"SearchForm-input",type:"text",value:a,onChange:function(t){i(t.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,nt.jsx)(ct,{type:"submit",children:"Search"})]})},lt=function(){var t,e=(0,c.lr)(),n=(0,r.Z)(e,2),a=n[0],l=n[1],d=null!==(t=a.get("query"))&&void 0!==t?t:"",f=(0,s.useState)(""),p=(0,r.Z)(f,2),m=p[0],v=p[1],g=(0,s.useState)([]),h=(0,r.Z)(g,2),y=h[0],b=h[1],E=(0,s.useState)(!1),T=(0,r.Z)(E,2),x=T[0],_=T[1],O=(0,s.useState)(""),C=(0,r.Z)(O,2),w=C[0],I=C[1];return(0,u.Z)((function(){function t(){return(t=(0,o.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,J.gW)(d);case 3:if(0===(e=t.sent).data.results.length){t.next=8;break}return b(e.data.results),_(!1),t.abrupt("return");case 8:throw _(!1),new Error("Sory, no result!");case 12:t.prev=12,t.t0=t.catch(0),_(!1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}d&&(_(!0),function(){t.apply(this,arguments)}())})),(0,s.useEffect)((function(){function t(){return(t=(0,o.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,J.gW)(m);case 3:if(0===(e=t.sent).data.results.length){t.next=8;break}return b(e.data.results),_(!1),t.abrupt("return");case 8:throw _(!1),b([]),new Error("Sory, no result!");case 13:t.prev=13,t.t0=t.catch(0),_(!1),I(t.t0),b([]),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}""!==m&&(_(!0),function(){t.apply(this,arguments)}())}),[m]),(0,nt.jsxs)("main",{children:[(0,nt.jsx)(ut,{onSubmit:function(t){l(""!==t?{query:t}:{}),v(t),I("")}}),(0,nt.jsx)(B,{autoClose:3e3}),x&&(0,nt.jsx)($.Z,{}),w&&(0,nt.jsx)("h2",{children:w.message}),(0,nt.jsx)(ot,{arraySearch:y})]})}}}]);
//# sourceMappingURL=197.77af5295.chunk.js.map