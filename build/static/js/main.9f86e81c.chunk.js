(this["webpackJsonpzig-movie-app"]=this["webpackJsonpzig-movie-app"]||[]).push([[0],{39:function(e,t,a){},61:function(e,t,a){e.exports=a(92)},66:function(e,t,a){},83:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(21),o=a.n(l),c=(a(66),a(19)),i=a(15),m=a(6),s=(a(39),a(25)),u=a.n(s),d=(a(83),a(98)),p=a(99),v=a(97),h=a(54),f=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,e=>e&&r.a.createElement(d.a,{bg:"danger",fixed:"top",variant:"dark"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(d.a.Brand,{as:i.b,to:"/home"},"Popular Movies")," "),r.a.createElement(v.a,{style:{display:"flex",flexDirection:"row"}},r.a.createElement(h.a,{size:"sm",type:"text",placeholder:"Search",className:"mr-sm-2",style:{backgroundColor:"transparent",color:"white"},onChange:t=>{e.setSearch(t.target.value)}})," ")))),E=a(96),b=a(94),g=(a(90),a(95)),w=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,t=>{var a;return t&&r.a.createElement(b.a,null," ",r.a.createElement(i.b,{to:"/movies/".concat(e.title),style:{color:"#555"},onClick:()=>t.movieDetail(e.id)},r.a.createElement(g.a,{className:"card_image",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,thumbnail:!0})),r.a.createElement("div",{className:"card_title"},r.a.createElement(i.b,{to:"/movies/".concat(e.title),style:{color:"#fff9"},onClick:()=>t.movieDetail(e.id)},e.title),r.a.createElement("p",{style:{color:"#777",marginTop:"0px"}},null===(a=e.release_date)||void 0===a?void 0:a.slice(0,4))))})),x=a(55),j=()=>r.a.createElement(Q,null,e=>{var t;return e&&r.a.createElement("div",null,r.a.createElement(E.a,{fluid:!0,className:"jumbotron"},r.a.createElement(b.a,null," ",r.a.createElement(x.a,{size:40,color:"red"}),r.a.createElement("h2",null,"Popular Movies"),r.a.createElement("h5",null,"A The Zig Challenge"))),null===(t=e.movies)||void 0===t?void 0:t.map(e=>r.a.createElement("div",{className:" movies",key:e.id},r.a.createElement(w,{id:e.id,popularity:e.popularity,poster_path:e.poster_path,vote_average:e.vote_average,title:e.title,release_date:e.release_date}))))}),y=a(56),O=e=>r.a.createElement(Q,null,t=>t&&r.a.createElement(i.b,{to:"/movies/".concat(e.title),style:{color:"#333",backgroundColor:"white",float:"right",width:"100%",padding:"5px  10px",transition:" 0.5s ease",fontSize:"14px"},onClick:()=>t.movieDetail(e.id)},r.a.createElement("p",null,r.a.createElement(y.a,{size:14})," ",e.title),r.a.createElement("hr",null))),_=a(13),k=a(14),S=a(57);function z(){var e=Object(_.a)(["\n\tdisplay: inline-block;\n"]);return z=function(){return e},e}function C(){var e=Object(_.a)(["\n\tdisplay:inline-flex\n\tfont-weight: bold;\n\tfont-size: 17px;\n\t\n"]);return C=function(){return e},e}function N(){var e=Object(_.a)(["\n\ttext-overflow: wrap;\n\n\tfont-size: 15px;\n\tmargin-top: 10px;\n"]);return N=function(){return e},e}function D(){var e=Object(_.a)(["\n\tfont-weight: bold;\n\tfont-size: 27px;\n\tdisplay: inline;\n"]);return D=function(){return e},e}function F(){var e=Object(_.a)(["\n\tfont-weight: bold;\n"]);return F=function(){return e},e}function B(){var e=Object(_.a)(["\n\tdisplay: flex;\n\tcolor: #fff9;\n"]);return B=function(){return e},e}function P(){var e=Object(_.a)(["\n\twidth: 50%;\n\tdisplay: block;\n"]);return P=function(){return e},e}function H(){var e=Object(_.a)(["\n\twidth: inherit;\n\theight: inherit;\n\tobject-fit: cover;\n\n\tborder-radius: inherit;\n\tmargin: -1px 0 0 -1px;\n"]);return H=function(){return e},e}function J(){var e=Object(_.a)(["\n\twidth: 250px;\n\theight: 380px;\n\tborder-radius: 3px;\n\tmargin-right: 80px;\n"]);return J=function(){return e},e}function M(){var e=Object(_.a)(["\n\ttext-decoration: none;\n\tcolor: inherit;\n\t:hover {\n\t\ttext-style: none;\n\t\ttext-decoration: none;\n\t\tcolor: #fffd;\n\t}\n"]);return M=function(){return e},e}var T=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,e=>e&&r.a.createElement(b.a,null,r.a.createElement(U,null,r.a.createElement(q,null," ",r.a.createElement(A,{src:"https://image.tmdb.org/t/p/w500/".concat(e.details.poster_path),alt:e.details.title})),r.a.createElement(I,null," ",r.a.createElement(Y,null,r.a.createElement(W,{href:e.details.homepage,target:"_blank"},e.details.title),r.a.createElement(Z,null,"(",e.details.release_date.slice(0,4),")")),r.a.createElement(G,null,r.a.createElement("h3",null,e.details.vote_average,r.a.createElement(S.a,{color:"#fff9",size:25})))," ",r.a.createElement("br",null),r.a.createElement(K,null," ",e.details.genres.map(e=>r.a.createElement("span",null,e.name," "))),r.a.createElement($,null,r.a.createElement("h5",null,"Overview"),e.details.overview)))))),W=k.a.a(M()),q=k.a.div(J()),A=k.a.img(H()),I=k.a.div(P()),U=k.a.div(B()),Y=k.a.h1(F()),Z=k.a.p(D()),$=k.a.div(N()),G=k.a.div(C()),K=k.a.h6(z()),L=r.a.createContext(null),Q=L.Consumer,R=()=>{var e,t,a=Object(n.useState)([]),l=Object(c.a)(a,2),o=l[0],s=l[1],d=Object(n.useState)(),p=Object(c.a)(d,2),v=p[0],h=p[1],E=Object(n.useState)(),b=Object(c.a)(E,2),g=b[0],w=b[1],x=Object(n.useState)(""),y=Object(c.a)(x,2),_=y[0],k=y[1],S=Object(n.useState)(1),z=Object(c.a)(S,2),C=z[0],N=z[1],D=Object(n.useState)(),F=Object(c.a)(D,2),B=F[0],P=F[1];window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-5&&N(C+1)},Object(n.useEffect)(()=>{u.a.get("http://api.themoviedb.org/3/search/movie?api_key=e76c5953047a45b321529afcee0a5460&query=".concat(_," ")).then(e=>{var t=e.data.results;P(t)})},[_,B]),Object(n.useEffect)(()=>{u.a.get("https://api.themoviedb.org/3/movie/popular?api_key=e76c5953047a45b321529afcee0a5460&language=en-US&page=".concat(C)).then(e=>{var t=e.data.results;s(e=>e.concat(t))}),H(" ")},[C]);var H=e=>{u.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=e76c5953047a45b321529afcee0a5460")).then(e=>{h(e.data)}),u.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=e76c5953047a45b321529afcee0a5460")).then(e=>{console.log(e.data),w(e.data)})},J={movies:o,details:v,searched:B,search:_,movieDetail:H,setSearch:k,credit:g};return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.Provider,{value:J},r.a.createElement(i.a,null,r.a.createElement(f,null),r.a.createElement("div",{className:"app "},void 0===J.searched?"":r.a.createElement("div",{id:"search"},null===(e=J.searched)||void 0===e?void 0:e.map(e=>r.a.createElement("div",{key:e.id,className:"container "},r.a.createElement(O,{id:e.id,poster_path:e.poster_path,title:e.title,release_date:e.release_date})))),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/home",component:j}),r.a.createElement(m.a,{exact:!0,from:"/",to:"/home"}),null==v?r.a.createElement(m.a,{to:"/home"}):r.a.createElement(m.b,{exact:!0,path:"/movies/:".concat(null===(t=J.details)||void 0===t?void 0:t.id),component:T}),r.a.createElement(m.b,{exact:!0,path:"/movie",component:T}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(91);o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[61,1,2]]]);
//# sourceMappingURL=main.9f86e81c.chunk.js.map