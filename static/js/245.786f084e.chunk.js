"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[245],{3601:function(e,t,n){n.d(t,{FQ:function(){return c},Mh:function(){return a},Oe:function(){return s},Pg:function(){return r},gW:function(){return i}});var o=n(3263);function r(){return o.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4","&page=1"))}function a(e){var t="https://api.themoviedb.org/3/movie/".concat(e);return o.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function i(e){var t={key:"866c6d075a3e37e8cd8cfb5e85076bc4",nameFilm:e},n=t.key,r=t.nameFilm;return o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(n,"&query=").concat(r,"&page=1"))}function s(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits");return o.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function c(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews");return o.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}},4321:function(e,t,n){var o=n(5243),r=n(184);t.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(o.g4,{})})}},3245:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var o=n(5861),r=n(9439),a=n(7757),i=n.n(a),s=n(2791),c=n(1087),u=n(924);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=n(3433);function v(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var g=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o},h=["theme","type"],y=["delay","staleId"],b=function(e){return"number"==typeof e&&!isNaN(e)},E=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},O=function(e){return E(e)||T(e)?e:null},_=function(e){return(0,s.isValidElement)(e)||E(e)||T(e)||b(e)};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,a=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),o=function e(o){var r;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,m.Z)(n)))};(e=t.classList).add.apply(e,(0,m.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,s.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,o)}}function x(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,m.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},w=function(e){var t=e.theme,n=e.type,o=p(e,h);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},L={info:function(e){return s.createElement(w,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(w,f({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(w,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(w,f({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function k(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,s.useState)([]),a=(0,r.Z)(o,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,d=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function g(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function h(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function C(){var e=v.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var o=t.delay,r=t.staleId,a=p(t,y);if(_(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,d=a.data,m=v.props,g=function(){return h(i)},w=null==c;w&&v.count++;var P,N,R=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:c,data:d,closeToast:g,isIn:!1,className:O(a.className||m.toastClassName),bodyClassName:O(a.bodyClassName||m.bodyClassName),progressClassName:O(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(P=a.autoClose,N=m.autoClose,!1===P||b(P)&&P>0?P:N),deleteToast:function(){var e=x(l.get(i),"removed");l.delete(i),I.emit(4,e);var t=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var o=null==i?v.props.limit:1;if(1===t||1===o)v.displayedToast++,C();else{var r=o>t?t:o;v.displayedToast=r;for(var a=0;a<r;a++)C()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(T(r)?a=r(i):(0,s.isValidElement)(r)?a=(0,s.cloneElement)(r,i):E(r)||b(r)?a=r:o?a=L.spinner():function(e){return e in L}(n)&&(a=L[n](i))),a}(R),T(a.onOpen)&&(R.onOpen=a.onOpen),T(a.onClose)&&(R.onClose=a.onClose),R.closeButton=m.closeButton,!1===a.closeButton||_(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!_(m.closeButton)||m.closeButton);var j=e;(0,s.isValidElement)(e)&&!E(e.type)?j=(0,s.cloneElement)(e,{closeToast:g,toastProps:R,data:d}):T(e)&&(j=e({closeToast:g,toastProps:R,data:d})),m.limit&&m.limit>0&&v.count>m.limit&&w?v.queue.push({toastContent:j,toastProps:R,staleId:r}):b(o)?setTimeout((function(){k(j,R,r)}),o):k(j,R,r)}}function k(e,t,n){var o=t.toastId;n&&l.delete(n);var r={content:e,props:t};l.set(o,r),c((function(e){return[].concat((0,m.Z)(e),[o]).filter((function(e){return e!==n}))})),I.emit(4,x(r,null==r.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,I.cancelEmit(3).on(0,w).on(1,(function(e){return u.current&&h(e)})).on(5,g).emit(2,v),function(){l.clear(),I.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=d,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(l.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:d}}function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=P(t.nativeEvent),f.y=N(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=o&&f.y<=r?_():O()}}function O(){a(!0)}function _(){a(!1)}function C(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&_(),f.x=P(t),f.y=N(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",O,{once:!0}),T(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",O),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(I.onMouseEnter=_,I.onMouseLeave=O),y&&(I.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:O,pauseToast:_,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:I}}function j(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function S(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,c=e.className,u=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,h=e.theme,y=i||d&&0===p,b=f(f({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var E=g("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),O=T(c)?c({rtl:m,type:a,defaultClassName:E}):g(E,c);return s.createElement("div",l({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:O,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){v&&o()}))}var Z=function(e){var t=R(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,h=e.position,y=e.className,b=e.style,E=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,x=e.updateId,I=e.role,w=e.progress,L=e.rtl,k=e.toastId,P=e.deleteToast,N=e.isIn,Z=e.isLoading,M=e.iconOut,D=e.closeOnClick,B=e.theme,A=g("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),z=T(y)?y({rtl:L,position:h,type:d,defaultClassName:A}):g(A,y),F=!!w||!u,q={closeToast:m,type:d,theme:B},H=null;return!1===i||(H=T(i)?i(q):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,q):j(q)),s.createElement(v,{isIn:N,done:P,position:h,preventExitTransition:o,nodeRef:r},s.createElement("div",f(f({id:k,onClick:l,className:z},a),{},{style:b,ref:r}),s.createElement("div",f(f({},N&&{role:I}),{},{className:T(E)?E({type:d}):g("Toastify__toast-body",E),style:O}),null!=M&&s.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Z})},M),s.createElement("div",null,c)),H,s.createElement(S,f(f({},x&&!F?{key:"pb-".concat(x)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:N,closeToast:m,hide:p,type:d,style:C,className:_,controlledProgress:F,progress:w||0}))))},M=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=C(M("bounce",!0)),B=(C(M("slide",!0)),C(M("zoom")),C(M("flip")),(0,s.forwardRef)((function(e,t){var n=k(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=g("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(i)?i({position:e,rtl:u,defaultClassName:t}):g(t,O(i))}return(0,s.useEffect)((function(){t&&(t.current=r.current)}),[]),s.createElement("div",{ref:r,className:"Toastify",id:l},o((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return s.createElement(Z,f(f({},r),{},{isIn:a(r.toastId),style:f(f({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,z=new Map,F=[],q=1;function H(){return""+q++}function Q(e){return e&&(E(e.toastId)||b(e.toastId))?e.toastId:H()}function V(e,t){return z.size>0?I.emit(0,e,t):F.push({content:e,options:t}),t.toastId}function W(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function U(e){return function(t,n){return V(t,W(e,n))}}function G(e,t){return V(e,W("default",t))}G.loading=function(e,t){return V(e,W("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=E(r)?G.loading(r,n):G.loading(r.render,f(f({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:r}),i=E(t)?{render:t}:t;return o?G.update(o,f(f({},a),i)):G(i.render,f(f({},a),i)),r}G.dismiss(o)},u=T(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},G.success=U("success"),G.info=U("info"),G.error=U("error"),G.warning=U("warning"),G.warn=G.warning,G.dark=function(e,t){return V(e,W("default",f({theme:"dark"},t)))},G.dismiss=function(e){z.size>0?I.emit(1,e):F=F.filter((function(t){return null!=e&&t.options.toastId!==e}))},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},G.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=z.get(n||A);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=f(f(f({},o),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,V(i,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){A=e.containerId||e,z.set(A,e),F.forEach((function(e){I.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&I.off(0).off(1).off(5)}));var X,Y,K,J=n(3601),$=n(4321),ee=n(7689),te=n(184),ne=function(e){var t=e.arraySearch,n=(0,ee.TH)();return(0,te.jsx)("ul",{children:t.map((function(e){return(0,te.jsx)("li",{children:(0,te.jsx)(c.rU,{to:"".concat(e.id),state:{from:n},children:(0,te.jsx)("p",{children:e.title})})},e.id)}))})},oe=n(168),re=n(6444),ae=re.ZP.form(X||(X=(0,oe.Z)(["\n    margin-left: 20px;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n"]))),ie=re.ZP.input(Y||(Y=(0,oe.Z)(["\n    width: 250px;\n    height: 30px;\n    font-size: 18px;\n"]))),se=re.ZP.button(K||(K=(0,oe.Z)(["\n    padding: 6px 20px;\n    border-radius: 5px;\n    color: black;\n    font-weight: 500;\n    border: 1px solid blue;\n    background-color: transparent;\n    cursor: pointer;\n    font-size: 18px;\n\n    :hover {\n        color: white;\n        background-color: blue;\n    }\n"]))),ce=function(e){var t=e.onSubmit,n=(0,s.useState)(""),o=(0,r.Z)(n,2),a=o[0],i=o[1];return(0,te.jsxs)(ae,{onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a.trim()),i("")):G.warn("Please, input something!")},children:[(0,te.jsx)(ie,{className:"SearchForm-input",type:"text",value:a,onChange:function(e){i(e.target.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,te.jsx)(se,{type:"submit",children:"Search"})]})},ue=function(){var e,t=(0,c.lr)(),n=(0,r.Z)(t,2),a=n[0],l=n[1],d=null!==(e=a.get("query"))&&void 0!==e?e:"",f=(0,s.useState)(""),p=(0,r.Z)(f,2),m=p[0],v=p[1],g=(0,s.useState)([]),h=(0,r.Z)(g,2),y=h[0],b=h[1],E=(0,s.useState)(!1),T=(0,r.Z)(E,2),O=T[0],_=T[1],C=(0,s.useState)(""),x=(0,r.Z)(C,2),I=x[0],w=x[1];return(0,u.Z)((function(){function e(){return(e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.gW)(d);case 3:if(0===(t=e.sent).data.results.length){e.next=8;break}return b(t.data.results),_(!1),e.abrupt("return");case 8:throw _(!1),new Error("Sory, no result!");case 12:e.prev=12,e.t0=e.catch(0),_(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}d&&(_(!0),function(){e.apply(this,arguments)}())})),(0,s.useEffect)((function(){function e(){return(e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,J.gW)(m);case 3:if(0===(t=e.sent).data.results.length){e.next=8;break}return b(t.data.results),_(!1),e.abrupt("return");case 8:throw _(!1),b([]),new Error("Sory, no result!");case 13:e.prev=13,e.t0=e.catch(0),_(!1),w(e.t0),b([]),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}""!==m&&(_(!0),function(){e.apply(this,arguments)}())}),[m]),(0,te.jsxs)("main",{children:[(0,te.jsx)(ce,{onSubmit:function(e){l(""!==e?{query:e}:{}),v(e),w("")}}),(0,te.jsx)(B,{autoClose:3e3}),O&&(0,te.jsx)($.Z,{}),I&&(0,te.jsx)("h2",{children:I.message}),(0,te.jsx)(ne,{arraySearch:y})]})}}}]);
//# sourceMappingURL=245.786f084e.chunk.js.map