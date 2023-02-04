"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[967],{3601:function(n,e,t){t.d(e,{FQ:function(){return s},Mh:function(){return c},Oe:function(){return o},Pg:function(){return r},Tg:function(){return d},gW:function(){return a}});var i=t(3263);function r(){return i.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4","&page=1"))}function c(n){var e="https://api.themoviedb.org/3/movie/".concat(n);return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function a(n){var e={key:"866c6d075a3e37e8cd8cfb5e85076bc4",nameFilm:n},t=e.key,r=e.nameFilm;return i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(t,"&query=").concat(r,"&page=1"))}function o(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/credits");return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function s(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/reviews");return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function d(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/videos");return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}},4967:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var i,r,c,a,o,s,d,p=t(5861),l=t(9439),u=t(7757),h=t.n(u),x=t(7689),g=t(2791),v=t(924),m=t(3601),f=t(2134),b=t(168),j=t(6444),Z=t(1087),w=j.ZP.main(i||(i=(0,b.Z)(["\n    padding: 0 20px;\n   \n"]))),k=(0,j.ZP)(Z.rU)(r||(r=(0,b.Z)(["\n    display: flex;\n    gap: 10px;\n    width: 120px;\n    align-items: center;\n    padding: 4px 8px;\n    border-radius: 5px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n    margin-bottom: 20px;\n\n    :hover {\n        color: white;\n        background-color: #8e8edd;\n    }\n\n    p {\n        margin: 0;\n    }\n"]))),y=j.ZP.div(c||(c=(0,b.Z)(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n\n    @media screen and (min-width: 768px) {\n        flex-direction: row;\n    }\n\n    img {\n        width: 320px;\n    }\n\n    div{\n        max-width: 400px;\n    }\n"]))),_=j.ZP.p(a||(a=(0,b.Z)(["\n    margin: 0;\n    font-weight: 700;\n"]))),P=j.ZP.p(o||(o=(0,b.Z)(["\n    margin: 0;\n    margin-bottom: 20px\n"]))),S=j.ZP.ul(s||(s=(0,b.Z)(["\n    display: flex;\n    gap: 10px;\n    padding: 0;\n    list-style: none;\n\n"]))),C=(0,j.ZP)(Z.rU)(d||(d=(0,b.Z)(["\n\n    color: black;\n    font-weight: 700;\n    padding: 4px 12px;\n    border-radius: 5px;\n\n    :hover {\n        color: #8e8edd;\n    }\n"]))),F=t(184),I=function(n){var e=n.filmId,t=n.loc,i=n.date,r=n.genre;return(0,F.jsxs)(w,{children:[(0,F.jsxs)(k,{to:t,children:[(0,F.jsx)(f.FtK,{}),(0,F.jsx)("p",{children:"Come Back"})]}),e&&(0,F.jsxs)(y,{children:[e.poster_path&&(0,F.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:""}),!e.poster_path&&(0,F.jsx)("img",{src:"https://sitysun.ru/wp-content/uploads/oboi-vertikalnye-krasivye_74.jpg",alt:""}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("h2",{children:[e.original_title," (",i,")"]}),(0,F.jsx)(_,{children:"Overview"}),(0,F.jsx)(P,{children:e.overview}),r&&(0,F.jsx)(_,{children:"Genres"}),(0,F.jsx)(P,{children:r})]})]}),(0,F.jsx)("div",{children:(0,F.jsxs)(S,{children:[(0,F.jsx)("li",{children:(0,F.jsx)(C,{to:"cast",children:"Cast"})}),(0,F.jsx)("li",{children:(0,F.jsx)(C,{to:"reviews",children:"Reviews"})}),(0,F.jsx)("li",{children:(0,F.jsx)(C,{to:"trailer",children:"Trailer"})})]})}),(0,F.jsx)(g.Suspense,{children:(0,F.jsx)(x.j3,{})})]})},O=function(){var n=(0,x.UO)().movieId,e=(0,x.TH)(),t=(0,g.useState)(""),i=(0,l.Z)(t,2),r=i[0],c=i[1],a=(0,g.useState)([]),o=(0,l.Z)(a,2),s=o[0],d=o[1],u=(0,g.useState)(""),f=(0,l.Z)(u,2),b=f[0],j=f[1],Z=(0,g.useState)(""),w=(0,l.Z)(Z,2),k=w[0],y=w[1];return(0,v.Z)((function(){var t,i;function r(){return r=(0,p.Z)(h().mark((function e(){var t,i;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Mh)(n);case 3:if(t=e.sent,i=[],t.data.genres.map((function(n){return i.push(" "+n.name)})),t.data){e.next=8;break}throw new Error("Sory, no result!");case 8:c(t.data),d(i.toString().split("").slice(1).join("")),j(t.data.release_date.split("-")[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),r.apply(this,arguments)}y(null!==(t=null===(i=e.state)||void 0===i?void 0:i.from)&&void 0!==t?t:"/"),function(){r.apply(this,arguments)}()})),(0,F.jsx)(I,{filmId:r,loc:k,date:b,genre:s})}}}]);
//# sourceMappingURL=967.6a98260f.chunk.js.map