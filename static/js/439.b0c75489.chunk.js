"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[439],{3601:function(n,e,t){t.d(e,{FQ:function(){return s},Mh:function(){return c},Oe:function(){return o},Pg:function(){return r},gW:function(){return a}});var i=t(3263);function r(){return i.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4","&page=1"))}function c(n){var e="https://api.themoviedb.org/3/movie/".concat(n);return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function a(n){var e={key:"866c6d075a3e37e8cd8cfb5e85076bc4",nameFilm:n},t=e.key,r=e.nameFilm;return i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(t,"&query=").concat(r,"&page=1"))}function o(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/credits");return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}function s(n){var e="https://api.themoviedb.org/3/movie/".concat(n,"/reviews");return i.Z.get("".concat(e,"?api_key=").concat("866c6d075a3e37e8cd8cfb5e85076bc4"))}},6439:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var i,r,c,a,o,s,d,p=t(5861),l=t(9439),u=t(7757),h=t.n(u),x=t(7689),g=t(2791),v=t(3601),f=t(924),m=t(2134),b=t(168),Z=t(6444),j=t(1087),w=Z.ZP.main(i||(i=(0,b.Z)(["\n    padding: 0 20px;\n"]))),k=(0,Z.ZP)(j.rU)(r||(r=(0,b.Z)(["\n    display: flex;\n    gap: 10px;\n    width: 120px;\n    align-items: center;\n    padding: 4px 8px;\n    border-radius: 5px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n    margin-bottom: 20px;\n\n    :hover {\n        color: white;\n        background-color: blue;\n    }\n\n    p {\n        margin: 0;\n    }\n"]))),y=Z.ZP.div(c||(c=(0,b.Z)(["\n    display: flex;\n    gap: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n\n    div{\n        width: 600px;\n    }\n"]))),_=Z.ZP.p(a||(a=(0,b.Z)(["\n    margin: 0;\n    font-weight: 700;\n"]))),P=Z.ZP.p(o||(o=(0,b.Z)(["\n    margin: 0;\n    margin-bottom: 20px\n"]))),S=Z.ZP.ul(s||(s=(0,b.Z)(["\n    display: flex;\n    gap: 10px;\n    padding: 0;\n    list-style: none;\n\n"]))),C=(0,Z.ZP)(j.rU)(d||(d=(0,b.Z)(["\n\n    color: black;\n    font-weight: 700;\n    padding: 4px 12px;\n    border-radius: 5px;\n\n    :hover {\n        color: blue;\n    }\n"]))),F=t(184),O=function(){var n=(0,x.UO)().movieId,e=(0,x.TH)(),t=(0,g.useState)(""),i=(0,l.Z)(t,2),r=i[0],c=i[1],a=(0,g.useState)([]),o=(0,l.Z)(a,2),s=o[0],d=o[1],u=(0,g.useState)(""),b=(0,l.Z)(u,2),Z=b[0],j=b[1],O=(0,g.useState)(""),U=(0,l.Z)(O,2),M=U[0],q=U[1];return(0,f.Z)((function(){var t,i;function r(){return r=(0,p.Z)(h().mark((function e(){var t,i;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Mh)(n);case 3:if(t=e.sent,i=[],t.data.genres.map((function(n){return i.push(" "+n.name)})),t.data){e.next=8;break}throw new Error("Sory, no result!");case 8:c(t.data),d(i.toString().split("").slice(1).join("")),j(t.data.release_date.split("-")[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),r.apply(this,arguments)}q(null!==(t=null===(i=e.state)||void 0===i?void 0:i.from)&&void 0!==t?t:"/"),function(){r.apply(this,arguments)}()})),(0,F.jsxs)(w,{children:[(0,F.jsxs)(k,{to:M,children:[(0,F.jsx)(m.FtK,{}),(0,F.jsx)("p",{children:"Come Back"})]}),r&&(0,F.jsxs)(y,{children:[(0,F.jsx)("img",{width:250,src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:""}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("h2",{children:[r.original_title," (",Z,")"]}),(0,F.jsx)(_,{children:"Overview"}),(0,F.jsx)(P,{children:r.overview}),(0,F.jsx)(_,{children:"Genres"}),(0,F.jsx)(P,{children:s})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("p",{children:"Additional information"}),(0,F.jsxs)(S,{children:[(0,F.jsx)("li",{children:(0,F.jsx)(C,{to:"cast",filmid:n,children:"Cast"})}),(0,F.jsx)("li",{children:(0,F.jsx)(C,{to:"reviews",filmid:n,children:"Reviews"})})]})]}),(0,F.jsx)(g.Suspense,{children:(0,F.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=439.b0c75489.chunk.js.map