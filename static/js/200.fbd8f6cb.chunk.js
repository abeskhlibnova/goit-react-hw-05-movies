"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[200],{149:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,c,o,u=t(739),i=t(168),s=t(444),p=t(731),f=(0,s.ZP)(p.rU)(r||(r=(0,i.Z)(["\n  color: white;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  &:hover {\n    color: violet;\n  }\n"]))),l=s.ZP.img(a||(a=(0,i.Z)(["\n  margin-right: 20px;\n"]))),h=s.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]))),v=s.ZP.li(o||(o=(0,i.Z)(["\n  width: 30%;\n  color: white;\n  font-size: 24px;\n  font-weight: 700;\n  border: 1px solid white;\n  margin-bottom: 20px;\n  margin-right: 30px;\n  background-color: rgba(250, 250, 250, 0.2);\n  border-radius: 20px;\n  overflow: hidden;\n"]))),x=t(184),d=function(n){var e=n.items,t=(0,u.TH)();return(0,x.jsx)(h,{children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path;return(0,x.jsx)(v,{children:(0,x.jsxs)(f,{to:"/movies/".concat(e),state:{from:t},children:[(0,x.jsx)(l,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r,width:"100"}),r]})},e)}))},e.id)}},200:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,a=t(861),c=t(885),o=t(757),u=t.n(o),i=t(791),s=t(688),p=t(149),f=t(168),l=t(444).ZP.h2(r||(r=(0,f.Z)(["\n  color: rgba(66, 27, 146);\n  font-size: 40px;\n  font-weight: 900;\n  text-shadow: 2px 2px 2px white, 0 2px 2px white, -2px 0 2px white,\n    0 -2px 2px white;\n  margin-left: auto;\n  margin-right: auto;\n"]))),h=t(184);function v(){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,a.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.oV)();case 2:return e=n.sent,n.next=5,e.results;case 5:t=n.sent,r(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{children:"Trending Movies Today"}),(0,h.jsx)(p.Z,{items:t})]})}},688:function(n,e,t){t.d(e,{R8:function(){return s},Y5:function(){return p},ei:function(){return l},oV:function(){return i},x1:function(){return f}});var r=t(861),a=t(757),c=t.n(a),o=t(44);o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u="3f2d31305f219bdee541e24a029138c5",i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("/trending/movie/day?api_key=".concat(u));case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=200.fbd8f6cb.chunk.js.map