"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{3601:function(e,t,c){c.d(t,{FQ:function(){return s},Mh:function(){return r},Oe:function(){return o},Pg:function(){return a},gW:function(){return i}});var n=c(3263);function a(){return n.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4","&page=1"))}function r(e){var t="https://api.themoviedb.org/3/movie/".concat(e);return n.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function i(e){var t={key:"866c6d075a3e37e8cd8cfb5e85076bc4",nameFilm:e},c=t.key,a=t.nameFilm;return n.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(c,"&query=").concat(a,"&page=1"))}function o(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits");return n.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function s(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews");return n.Z.get("".concat(t,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}},3597:function(e,t,c){c.r(t);var n=c(5861),a=c(9439),r=c(7757),i=c.n(r),o=c(7689),s=c(2791),u=c(924),p=c(3601),h=c(4321),d=c(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),c=(0,a.Z)(t,2),r=c[0],f=c[1],m=(0,s.useState)(!1),l=(0,a.Z)(m,2),g=l[0],v=l[1],b=(0,s.useState)(""),_=(0,a.Z)(b,2),w=_[0],x=_[1];return(0,u.Z)((function(){function t(){return(t=(0,n.Z)(i().mark((function t(){var c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Oe)(e);case 3:if(0===(c=t.sent).data.cast.length){t.next=8;break}return f(c.data.cast),v(!1),t.abrupt("return");case 8:throw v(!1),f([]),new Error("Sory, no result!");case 13:t.prev=13,t.t0=t.catch(0),v(!1),x(t.t0),f([]),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}v(!0),function(){t.apply(this,arguments)}()})),(0,d.jsxs)("section",{children:[g&&(0,d.jsx)(h.Z,{}),w&&(0,d.jsx)("h2",{children:w.message}),0!==r.length&&(0,d.jsx)("ul",{children:r.map((function(e){return(0,d.jsxs)("li",{children:[e.profile_path&&(0,d.jsx)("img",{width:100,src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:""}),!e.profile_path&&(0,d.jsx)("img",{width:100,src:"https://www.meme-arsenal.com/memes/fefac21eda463aa9a307c7cfdbea1bee.jpg",alt:""}),(0,d.jsx)("p",{children:e.name}),(0,d.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}},4321:function(e,t,c){var n=c(5243),a=c(184);t.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(n.g4,{})})}}}]);
//# sourceMappingURL=597.56eeaadb.chunk.js.map