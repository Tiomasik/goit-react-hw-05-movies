"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[548],{3601:function(e,t,n){n.d(t,{FQ:function(){return c},Mh:function(){return a},Oe:function(){return s},Pg:function(){return r},gW:function(){return i}});var o=n(3263);function r(){return o.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4","&page=1"))}function a(e){var t="https://api.themoviedb.org/3/movie/".concat(e);return o.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function i(e){var t={key:"866c6d075a3e37e8cd8cfb5e85076bc4",nameFilm:e},n=t.key,r=t.nameFilm;return o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(n,"&query=").concat(r,"&page=1"))}function s(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits");return o.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function c(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews");return o.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}},4321:function(e,t,n){var o=n(5243),r=n(184);t.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(o.g4,{})})}},7548:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var o=n(5861),r=n(9439),a=n(7757),i=n.n(a),s=n(2791);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=n(3433);function p(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=p(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var m=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=p(e))&&(o&&(o+=" "),o+=t);return o},v=["theme","type"],g=["delay","staleId"],h=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},b=function(e){return"function"==typeof e},E=function(e){return y(e)||b(e)?e:null},T=function(e){return(0,s.isValidElement)(e)||y(e)||b(e)||h(e)};function O(e){var t=e.enter,n=e.exit,o=e.appendPosition,r=void 0!==o&&o,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,p=e.isIn,m=r?"".concat(t,"--").concat(a):t,v=r?"".concat(n,"--").concat(a):n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),o=function e(o){var r;o.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==o.type&&(r=t.classList).remove.apply(r,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};p||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),s.createElement(s.Fragment,null,o)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var C={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,d.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},I=function(e){var t=e.theme,n=e.type,o=f(e,v);return s.createElement("svg",l({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},w={info:function(e){return s.createElement(I,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(I,l({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(I,l({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(I,l({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function x(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,s.useState)([]),a=(0,r.Z)(o,2),i=a[0],c=a[1],u=(0,s.useRef)(null),p=(0,s.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return p.get(e)}}).current;function O(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function I(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=v.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,r=t.staleId,a=f(t,g);if(T(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||p.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,d=a.data,m=v.props,O=function(){return I(i)},L=null==c;L&&v.count++;var N,P,R=l(l(l({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:c,data:d,closeToast:O,isIn:!1,className:E(a.className||m.toastClassName),bodyClassName:E(a.bodyClassName||m.bodyClassName),progressClassName:E(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(N=a.autoClose,P=m.autoClose,!1===N||h(N)&&N>0?N:P),deleteToast:function(){var e=_(p.get(i),"removed");p.delete(i),C.emit(4,e);var t=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var o=null==i?v.props.limit:1;if(1===t||1===o)v.displayedToast++,x();else{var r=o>t?t:o;v.displayedToast=r;for(var a=0;a<r;a++)x()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,r=e.icon,a=null,i={theme:t,type:n};return!1===r||(b(r)?a=r(i):(0,s.isValidElement)(r)?a=(0,s.cloneElement)(r,i):y(r)||h(r)?a=r:o?a=w.spinner():function(e){return e in w}(n)&&(a=w[n](i))),a}(R),b(a.onOpen)&&(R.onOpen=a.onOpen),b(a.onClose)&&(R.onClose=a.onClose),R.closeButton=m.closeButton,!1===a.closeButton||T(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!T(m.closeButton)||m.closeButton);var j=e;(0,s.isValidElement)(e)&&!y(e.type)?j=(0,s.cloneElement)(e,{closeToast:O,toastProps:R,data:d}):b(e)&&(j=e({closeToast:O,toastProps:R,data:d})),m.limit&&m.limit>0&&v.count>m.limit&&L?v.queue.push({toastContent:j,toastProps:R,staleId:r}):h(o)?setTimeout((function(){k(j,R,r)}),o):k(j,R,r)}}function k(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),c((function(e){return[].concat((0,d.Z)(e),[o]).filter((function(e){return e!==n}))})),C.emit(4,_(r,null==r.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,C.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&I(e)})).on(5,O).emit(2,v),function(){p.clear(),C.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,r.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",I),document.addEventListener("touchmove",C),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=L(t.nativeEvent),d.y=k(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,o=n.top,r=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=o&&d.y<=r?_():O()}}function O(){a(!0)}function _(){a(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,o&&_(),d.x=L(t),d.y=k(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",I);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),b(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;b(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",O),window.addEventListener("blur",_)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:T,onTouchEnd:T};return m&&v&&(w.onMouseEnter=_,w.onMouseLeave=O),y&&(w.onClick=function(e){h&&h(e),d.canCloseOnClick&&g()}),{playToast:O,pauseToast:_,isRunning:o,preventExitTransition:u,toastRef:f,eventHandlers:w}}function P(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,r=void 0===o?"close":o;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var t=e.delay,n=e.isRunning,o=e.closeToast,r=e.type,a=void 0===r?"default":r,i=e.hide,u=e.className,f=e.style,d=e.controlledProgress,p=e.progress,v=e.rtl,g=e.isIn,h=e.theme,y=i||d&&0===p,E=l(l({},f),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(E.transform="scaleX(".concat(p,")"));var T=m("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":v}),O=b(u)?u({rtl:v,type:a,defaultClassName:T}):m(T,u);return s.createElement("div",c({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:O,style:E},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){g&&o()}))}var j=function(e){var t=N(e),n=t.isRunning,o=t.preventExitTransition,r=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,f=e.onClick,d=e.type,p=e.hideProgressBar,v=e.closeToast,g=e.transition,h=e.position,y=e.className,E=e.style,T=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,I=e.updateId,w=e.role,x=e.progress,L=e.rtl,k=e.toastId,j=e.deleteToast,M=e.isIn,S=e.isLoading,D=e.iconOut,Z=e.closeOnClick,B=e.theme,A=m("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":Z}),F=b(y)?y({rtl:L,position:h,type:d,defaultClassName:A}):m(A,y),z=!!x||!u,q={closeToast:v,type:d,theme:B},H=null;return!1===i||(H=b(i)?i(q):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,q):P(q)),s.createElement(g,{isIn:M,done:j,position:h,preventExitTransition:o,nodeRef:r},s.createElement("div",l(l({id:k,onClick:f,className:F},a),{},{style:E,ref:r}),s.createElement("div",l(l({},M&&{role:w}),{},{className:b(T)?T({type:d}):m("Toastify__toast-body",T),style:O}),null!=D&&s.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},D),s.createElement("div",null,c)),H,s.createElement(R,l(l({},I&&!z?{key:"pb-".concat(I)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:M,closeToast:v,hide:p,type:d,style:C,className:_,controlledProgress:z,progress:x||0}))))},M=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},S=O(M("bounce",!0)),D=(O(M("slide",!0)),O(M("zoom")),O(M("flip")),(0,s.forwardRef)((function(e,t){var n=x(e),o=n.getToastToRender,r=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,f=e.containerId;function d(e){var t=m("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return b(i)?i({position:e,rtl:u,defaultClassName:t}):m(t,E(i))}return(0,s.useEffect)((function(){t&&(t.current=r.current)}),[]),s.createElement("div",{ref:r,className:"Toastify",id:f},o((function(e,t){var n=t.length?l({},c):l(l({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,r=e.props;return s.createElement(j,l(l({},r),{},{isIn:a(r.toastId),style:l(l({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:P,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Z,B=new Map,A=[],F=1;function z(){return""+F++}function q(e){return e&&(y(e.toastId)||h(e.toastId))?e.toastId:z()}function H(e,t){return B.size>0?C.emit(0,e,t):A.push({content:e,options:t}),t.toastId}function Q(e,t){return l(l({},t),{},{type:t&&t.type||e,toastId:q(t)})}function V(e){return function(t,n){return H(t,Q(e,n))}}function W(e,t){return H(e,Q("default",t))}W.loading=function(e,t){return H(e,Q("default",l({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=y(r)?W.loading(r,n):W.loading(r.render,l(l({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=l(l(l({type:e},s),n),{},{data:r}),i=y(t)?{render:t}:t;return o?W.update(o,l(l({},a),i)):W(i.render,l(l({},a),i)),r}W.dismiss(o)},u=b(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=V("success"),W.info=V("info"),W.error=V("error"),W.warning=V("warning"),W.warn=W.warning,W.dark=function(e,t){return H(e,Q("default",l({theme:"dark"},t)))},W.dismiss=function(e){B.size>0?C.emit(1,e):A=A.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),C.emit(5,e)},W.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=B.get(n||Z);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,r=n.content,a=l(l(l({},o),t),{},{toastId:t.toastId||e,updateId:z()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,H(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return C.on(4,e),function(){C.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(e){Z=e.containerId||e,B.set(Z,e),A.forEach((function(e){C.emit(0,e.content,e.options)})),A=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&C.off(0).off(1).off(5)}));var U=n(1087),G=n(7689),X=n(924),Y=n(3601),K=n(4321),J=n(184),$=function(){var e,t=(0,G.TH)(),n=(0,U.lr)(),a=(0,r.Z)(n,2),c=a[0],u=a[1],l=null!==(e=c.get("query"))&&void 0!==e?e:"",f=(0,s.useState)(""),d=(0,r.Z)(f,2),p=d[0],m=d[1],v=(0,s.useState)(""),g=(0,r.Z)(v,2),h=g[0],y=g[1],b=(0,s.useState)([]),E=(0,r.Z)(b,2),T=E[0],O=E[1],_=(0,s.useState)(!1),C=(0,r.Z)(_,2),I=C[0],w=C[1],x=(0,s.useState)(""),L=(0,r.Z)(x,2),k=L[0],N=L[1];return(0,X.Z)((function(){function e(){return(e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Y.gW)(l);case 3:if(0===(t=e.sent).data.results.length){e.next=8;break}return O(t.data.results),w(!1),e.abrupt("return");case 8:throw w(!1),new Error("Sory, no result!");case 12:e.prev=12,e.t0=e.catch(0),w(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}l&&(w(!0),function(){e.apply(this,arguments)}())})),(0,s.useEffect)((function(){function e(){return(e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Y.gW)(h);case 3:if(0===(t=e.sent).data.results.length){e.next=8;break}return O(t.data.results),w(!1),e.abrupt("return");case 8:throw w(!1),O([]),new Error("Sory, no result!");case 13:e.prev=13,e.t0=e.catch(0),w(!1),N(e.t0),O([]),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}""!==h&&(w(!0),function(){e.apply(this,arguments)}())}),[h]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)("form",{onSubmit:function(e){(e.preventDefault(),""!==p.trim())?(u(""!==p?{query:p}:{}),y(p),m("")):W.warn("Please, input something!")},children:[(0,J.jsx)("input",{className:"SearchForm-input",type:"text",value:p,onChange:function(e){m(e.target.value),N("")},autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,J.jsx)("button",{type:"submit",children:"Search"})]}),(0,J.jsx)(D,{autoClose:3e3}),I&&(0,J.jsx)(K.Z,{}),k&&(0,J.jsx)("h2",{children:k.message}),(0,J.jsx)("ul",{children:T.map((function(e){return(0,J.jsx)("li",{children:(0,J.jsx)(U.rU,{to:"".concat(e.id),state:{from:t},children:(0,J.jsx)("p",{children:e.title})})},e.id)}))})]})}}}]);
//# sourceMappingURL=548.bdc46769.chunk.js.map