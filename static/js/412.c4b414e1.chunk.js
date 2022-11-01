"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[412],{149:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,c,i,o=t(739),u=t(168),s=t(444),p=t(731),l=(0,s.ZP)(p.rU)(r||(r=(0,u.Z)(["\n  color: rgba(66, 27, 146);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  &:hover {\n    color: violet;\n  }\n"]))),f=s.ZP.img(a||(a=(0,u.Z)(["\n  margin-right: 20px;\n"]))),d=s.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]))),v=s.ZP.li(i||(i=(0,u.Z)(["\n  width: 20%;\n  color: black;\n  font-size: 24px;\n  font-weight: 700;\n  border: 1px solid white;\n  margin-bottom: 20px;\n  margin-right: 30px;\n  background-color: rgba(250, 250, 250, 0.8);\n  border-radius: 20px;\n  overflow: hidden;\n"]))),h=t(184),x=function(n){var e=n.items,t=(0,o.TH)();return(0,h.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,h.jsx)(v,{children:(0,h.jsxs)(l,{to:"/movies/".concat(e),state:{from:t},children:[(0,h.jsx)(f,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r,width:"100"}),r]})},e)}))},e.id)}},412:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,c,i=t(861),o=t(885),u=t(757),s=t.n(u),p=t(791),l=t(731),f=t(688),d=t(983),v=t(828),h=t(168),x=t(444),g=x.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  width: 100%;\n  max-width: 350px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=x.ZP.button(a||(a=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),b=x.ZP.input(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  text-indent: 15px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    text-indent: 15px;\n  }\n"]))),Z=t(184);function w(n){var e=n.onSubmit;return(0,Z.jsxs)(g,{onSubmit:e,children:[(0,Z.jsx)(b,{type:"text",name:"search",autoFocus:!0,placeholder:"Search movies"}),(0,Z.jsx)(m,{type:"submit",children:(0,Z.jsx)(d.Pd.Provider,{value:{color:"#3f51b5",size:"20px"},children:(0,Z.jsx)(v.Yfv,{})})})]})}var y,k=t(149),P=x.ZP.div(y||(y=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));function j(){var n=(0,p.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)([]),c=(0,o.Z)(a,2),u=c[0],d=c[1],v=(0,l.lr)(),h=(0,o.Z)(v,2),x=h[0],g=h[1],m=x.get("searchQuery");(0,p.useEffect)((function(){if(u){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.R8)(m);case 2:e=n.sent,t=e.results,d(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();m&&n()}}),[m,u]);return(0,Z.jsxs)(P,{children:[(0,Z.jsx)(w,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value.toLowerCase();if(t===e)return g(""),void alert("Please enter a search name.");r(e),d([]),g({searchQuery:e})}}),null===m&&(0,Z.jsx)("p",{children:"Please, enter something in form above"}),null!==m&&(0,Z.jsx)(k.Z,{items:u})]})}},688:function(n,e,t){t.d(e,{R8:function(){return s},Y5:function(){return p},ei:function(){return f},oV:function(){return u},x1:function(){return l}});var r=t(861),a=t(757),c=t.n(a),i=t(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o="3f2d31305f219bdee541e24a029138c5",u=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("/trending/movie/day?api_key=".concat(o));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=412.c4b414e1.chunk.js.map