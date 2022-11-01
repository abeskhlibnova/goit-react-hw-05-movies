"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[170],{170:function(e,n,r){r.r(n),r.d(n,{default:function(){return z}});var t,a,c,i,s,o,u,p,l,d=r(861),f=r(885),h=r(757),x=r.n(h),v=r(791),g=r(739),m=r(688),w=r(168),Z=r(444),j=r(731),b=Z.ZP.div(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 100px;\n"]))),k=Z.ZP.div(a||(a=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n"]))),y=Z.ZP.button(c||(c=(0,w.Z)(["\n  color: rgba(66, 27, 146);\n  border: 1px solid white;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  width: 150px;\n  height: 40px;\n  margin: 20px;\n"]))),_=Z.ZP.div(i||(i=(0,w.Z)(["\n  margin-left: 50px;\n"]))),P=Z.ZP.ul(s||(s=(0,w.Z)(["\n  width: 50%;\n"]))),S=Z.ZP.li(o||(o=(0,w.Z)(["\n  /* display: flex; */\n  margin-bottom: 30px;\n"]))),U=Z.ZP.h2(u||(u=(0,w.Z)([""]))),C=(0,Z.ZP)(j.rU)(p||(p=(0,w.Z)(["\n  color: rgba(66, 27, 146);\n  border: 1px solid white;\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  width: 150px;\n  height: 40px;\n"]))),R=Z.ZP.h3(l||(l=(0,w.Z)([""]))),Y=r(184);function z(){var e=(0,v.useState)(""),n=(0,f.Z)(e,2),r=n[0],t=n[1],a=(0,v.useState)([]),c=(0,f.Z)(a,2),i=c[0],s=c[1],o=(0,g.UO)().movieId,u=(0,g.s0)();(0,v.useEffect)((function(){var e=function(){var e=(0,d.Z)(x().mark((function e(){var n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Y5)(o);case 2:n=e.sent,t(n),s(n.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]);var p=r.title,l=r.poster_path,h=r.release_date,w=r.overview,Z=r.vote_average,j=new Date(h).getFullYear(),z=Number(Z).toFixed(2),F=i.map((function(e){return e.name})).join(", ");return r?(0,Y.jsxs)(b,{children:[(0,Y.jsxs)(k,{children:[(0,Y.jsxs)("div",{children:[(0,Y.jsx)(y,{onClick:function(){return u(-1)},children:"Go back"}),(0,Y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(l),alt:p,width:"250"})]}),(0,Y.jsxs)(_,{children:[(0,Y.jsxs)(U,{children:[p," (",j,")"]}),(0,Y.jsxs)(P,{children:[(0,Y.jsx)(S,{children:(0,Y.jsxs)("p",{children:["Rating: ",z]})}),(0,Y.jsxs)(S,{children:[(0,Y.jsx)("p",{children:"Overview: "}),(0,Y.jsx)("p",{children:w})]}),(0,Y.jsxs)(S,{children:[(0,Y.jsx)("p",{children:"Genres: "}),(0,Y.jsx)("p",{children:F})]})]})]})]}),(0,Y.jsxs)("div",{children:[(0,Y.jsx)(R,{children:"Additional information"}),(0,Y.jsxs)(P,{children:[(0,Y.jsx)(S,{children:(0,Y.jsx)(C,{to:"cast",children:"Cast - click to see more"})}),(0,Y.jsx)(S,{children:(0,Y.jsx)(C,{to:"reviews",children:"Reviews - click to see more"})})]})]}),(0,Y.jsx)(g.j3,{})]}):(0,Y.jsx)("div",{children:"Sorry,no information"})}},688:function(e,n,r){r.d(n,{R8:function(){return u},Y5:function(){return p},ei:function(){return d},oV:function(){return o},x1:function(){return l}});var t=r(861),a=r(757),c=r.n(a),i=r(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="3f2d31305f219bdee541e24a029138c5",o=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.ZP.get("/trending/movie/day?api_key=".concat(s));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.ZP.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 3:return r=e.sent,e.next=6,r.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.ZP.get("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.next=6,r.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return r=e.sent,e.next=6,r.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return r=e.sent,e.next=6,r.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=170.9fecc03b.chunk.js.map