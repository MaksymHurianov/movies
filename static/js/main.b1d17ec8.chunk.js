(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{10:function(e,t,n){e.exports={recommendation:"movieDetails_recommendation__mxRb9",title:"movieDetails_title__2S7m_",wrapper:"movieDetails_wrapper__1nU8i",matchGenre:"movieDetails_matchGenre__2lSo6",container:"movieDetails_container__2GEBi",description:"movieDetails_description__1Nrat",photoContainer:"movieDetails_photoContainer__3zSlK",overview:"movieDetails_overview__1SFTv",genres:"movieDetails_genres__2Ld5i",movie:"movieDetails_movie__329rB"}},11:function(e,t,n){e.exports={pagination:"App_pagination__hiLa_",title:"App_title__hM2z7"}},13:function(e,t,n){e.exports={wrapper:"movies_wrapper__2B4n5",genre:"movies_genre__3ROtq",scale:"movies_scale__1Vur7",span:"movies_span__1GSt-",movieContainer:"movies_movieContainer__1CEzA",movieTitle:"movies_movieTitle__1FMMr"}},21:function(e,t,n){e.exports={follow:"followUnfollow_follow__1Ze_L",unfollow:"followUnfollow_unfollow__2ftDK"}},24:function(e,t,n){e.exports={pagination:"homePage_pagination__2REM5",miniPagination:"homePage_miniPagination__yuaEK"}},25:function(e,t,n){e.exports={favoriteMovies:"favoriteMovies_favoriteMovies__2hazg",emptyField:"favoriteMovies_emptyField__1BVpe"}},38:function(e,t,n){e.exports={emptyField:"searchPage_emptyField__7XhVE",title:"searchPage_title__3lGRV"}},40:function(e,t,n){e.exports={loading:"loading_loading__3rcdH"}},42:function(e,t,n){e.exports={wrapper:"header_wrapper__2rchP"}},43:function(e,t,n){e.exports={wrapper:"burgerNav_wrapper__3QQ6U"}},50:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(36),c=n.n(r),o=(n(50),n(5)),s=n(14),v=n.n(s),l="0e6fea2ba74daf0a5ff29c95f9480154",j="https://api.themoviedb.org/3",u="".concat(j,"/movie/popular"),g="".concat(j,"/search/movie"),b="".concat(j,"/genre/movie/list"),f="".concat(j,"/movie"),p=function(e,t){return v.a.get(g,{params:{api_key:l,language:"en_US",page:e,query:t}})},h=function(){return v.a.get(b,{params:{api_key:l,language:"en_US"}})},d=n(16),E=n.n(d),O=n(11),m=n.n(O),A=n(45),x=n(21),I=n.n(x),C=n(1);var M=function(e){var t=e.favoriteMovie,n=e.setFavoriteMovie,a=e.movie,i=!0;return t.forEach((function(e){e.id===a.id&&(i=!1)})),Object(C.jsx)(C.Fragment,{children:i?Object(C.jsx)("button",{className:I.a.follow,onClick:function(e){return function(e,t){e.stopPropagation(),n((function(e){return[].concat(Object(A.a)(e),[t])}))}(e,a)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}):Object(C.jsx)("button",{className:I.a.unfollow,onClick:function(e){return function(e,a){e.stopPropagation();var i=t.filter((function(e){return e.id!==a.id}));n(i)}(e,a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"})})},B=n(3),Q=n(13),y=n.n(Q),S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEiCAYAAAC88J3OAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAI3xJREFUeF7t3YeX5EbVxuHvb+WQc84555yjScZk4wg2tsHGGDDOBgdyNsHknPrjkefu1tZK1T2z492e6fd3Th11S6Wqkvq+VbeC1P+3CiEsEoGEMCACCWFABBLCgAgkhAERSAgDIpAQBkQgIQyIQEIYEIGEMCACCWFABBLCgAgkhAERSAgDIpAQBkQgIQyIQEIYEIGEMCACCWFABBLCgAgkhAERSAgDIpAQBkQgIQyIQEIYEIGEMCACCWFABBLCgAgkhAERyCHzn//8Z+9TOA5EICEMiEAOEa1HtSBpSY4HEcgh8d///nfvUzhORCCHAHFUqO+/+c1vVr/4xS9W99133+pXv/rV6g9/+MPqH//4R4R0xIhADoFWGPjlL3+5uvXWW0+E22+/fXXnnXeuvv3tb6/uvvvu1T333LP6/ve/v/rZz362+v3vf7/661//uvrXv/41nRu2iwjkECmB3Hvvvatbbrllddttt50WWuGII9T3O+64Yzr3xz/+8SSy+++/f/WnP/1p9be//W3173//e0o7nF0ikEOGIWspGLyWY12YE1AJp0T2rW99a/Xd73539cMf/nD1ox/9aPXTn/509etf/3r15z//+ay6bLvoHkYgh0A7esVd4k7NGf+ZhGplWuEIWh15ERG37ec///nqt7/97eovf/nL1Och2HWGvcmI266OykUgh8zvfve7E8a8aSgBtEIY7Z8LRGN78803T59tfdeaaX20PAYNuG1//OMfV3//+993skXYLxHIIaPvULV8a8BnEtal1R+v/NtAMBXE0crdddddU5/nO9/5zokBA61Ozy7P6UQghwwXp2rx1lh7w63vc9s27qj1aOPPhT7dSrNCKxrhpptumsKNN9445auP07KLQolADpmf/OQnk5GVETLMVjCC49/85jdP2dY5Fbe2S6FNdymcyXHHDEnvOhHIIcKn11Fm9AysQhmcWpkbo+P8z3/+c+oH6Bf84Ac/mPoKjotbgqnQplHbCq2w+tAfq7SX4rdBPCLcdSKQQ4TBG00qgbRC8ZnfL84c3JcSjREonX39AkO7+grOJaAy3nWh8q7v9bnKU/tHQf9k14lADhGGrdbl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";var L=function(e){var t=e.movies,n=e.genres,a=e.favoriteMovie,i=e.setFavoriteMovie,r=Object(B.g)();function c(e){var t=[];if(e.genres){for(var a=0;a<e.genres.length;a++)t.push(e.genres[a].name);return t}for(var i=function(a){n.find((function(n){n.id===e.genre_ids[a]&&t.push(n.name)}))},r=0;r<e.genre_ids.length;r++)i(r);return t}return Object(C.jsx)("div",{className:y.a.wrapper,children:t.map((function(e){return Object(C.jsxs)("div",{className:y.a.movieContainer,children:[Object(C.jsx)("h3",{className:y.a.movieTitle,children:e.title}),Object(C.jsx)("div",{className:y.a.scale,children:Object(C.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path):S,onClick:function(){return t=e.id,void r.push("/movie/".concat(t));var t}})}),Object(C.jsx)(M,{favoriteMovie:a,setFavoriteMovie:i,movie:e}),Object(C.jsx)("div",{className:y.a.span,children:c(e).map((function(e,t){return Object(C.jsx)("span",{className:y.a.genre,children:e},t)}))})]},e.id)}))})},N=n(39),T=n(38),G=n.n(T);var w=function(e){var t=e.value,n=e.setValue,i=e.genres,r=e.setGenres,c=e.favoriteMovie,s=e.setFavoriteMovie,v=Object(a.useState)([]),l=Object(o.a)(v,2),j=l[0],u=l[1],g=Object(a.useState)(1),b=Object(o.a)(g,2),f=b[0],d=b[1],O=Object(a.useState)(0),A=Object(o.a)(O,2),x=A[0],I=A[1],M=Object(a.useState)(!0),B=Object(o.a)(M,2),Q=B[0],y=B[1];return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[f]),Object(a.useEffect)((function(){h().then((function(e){r(e.data.genres),y(!1)}))}),[]),Q?Object(C.jsx)("div",{children:"Loading..."}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"form",children:Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(f,t).then((function(e){u(e.data.results),I(e.data.total_pages)}))},children:[Object(C.jsx)("input",{className:"search-form",value:t,placeholder:"search movie",onChange:function(e){return n(e.currentTarget.value)}}),Object(C.jsx)("button",{className:"search-button",children:Object(C.jsx)(N.FiSearch,{})})]})}),Object(C.jsx)("h2",{className:m.a.title,children:"Search movie"}),Object(C.jsx)(C.Fragment,{children:0===j.length?Object(C.jsx)("div",{className:G.a.emptyField,children:Object(C.jsx)("p",{children:"\u0424\u0438\u043b\u044c\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})}):Object(C.jsx)(L,{movies:j,genres:i,favoriteMovie:c,setFavoriteMovie:s})}),Object(C.jsx)("div",{className:"issuesPagination ".concat(m.a.pagination),children:Object(C.jsx)(E.a,{initialPage:0,marginPagesDisplayed:3,pageRangeDisplayed:4,pageCount:x,onPageChange:function(e){d((function(t){return e.selected+1})),p(e.selected+1,t).then((function(e){u(e.data.results),I(e.data.total_pages)})).catch((function(){}))},containerClassName:m.a.pagination})})]})},F=n(41),P=n.p+"static/media/preloader.0116944b.svg",W=n(40),K=n.n(W);var V=function(){return Object(C.jsx)("div",{className:K.a.loading,children:Object(C.jsx)("img",{src:P})})},z=n(24),D=n.n(z);var X=function(e){var t=e.value,n=e.setValue,i=e.favoriteMovie,r=e.setFavoriteMovie,c=e.movies,s=e.setMovies,j=e.genres,g=e.setGenres,b=Object(a.useState)(1),f=Object(o.a)(b,2),p=f[0],d=f[1],O=Object(a.useState)(!0),A=Object(o.a)(O,2),x=A[0],I=A[1],M=Object(a.useState)(1),Q=Object(o.a)(M,2),y=Q[0],S=Q[1],N=Object(B.g)();function T(e){d(e.selected+1)}return Object(a.useEffect)((function(){(function(e){return v.a.get(u,{params:{api_key:l,language:"en_US",page:e}})})(p).then((function(e){s(e.data.results),S(e.data.total_pages),I(!1)})),h().then((function(e){g(e.data.genres)})),window.scrollTo(0,0)}),[p]),x?Object(C.jsx)(V,{}):Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"form",children:Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.push("/search")},children:[Object(C.jsx)("input",{className:"search-form",value:t,placeholder:"Search for a movie...",onChange:function(e){return n(e.currentTarget.value)}}),Object(C.jsxs)("button",{className:"search-button",children:[" ",Object(C.jsx)(F.a,{})]})]})}),Object(C.jsx)("h2",{className:m.a.title,children:"Popular movies"}),Object(C.jsx)(L,{movies:c,genres:j,favoriteMovie:i,setFavoriteMovie:r}),Object(C.jsx)("div",{className:"issuesPagination ".concat(m.a.pagination," ").concat(D.a.pagination),children:Object(C.jsx)(E.a,{forcePage:0,marginPagesDisplayed:3,pageRangeDisplayed:3,pageCount:y,onPageChange:T,containerClassName:m.a.pagination})}),Object(C.jsx)("div",{className:"issuesPagination ".concat(m.a.pagination," ").concat(D.a.miniPagination),children:Object(C.jsx)(E.a,{forcePage:0,marginPagesDisplayed:0,pageRangeDisplayed:0,pageCount:y,onPageChange:T,containerClassName:m.a.pagination})})]})},k=n(10),q=n.n(k);var R=function(e){var t=e.genres,n=e.setGenres,i=e.favoriteMovie,r=e.setFavoriteMovie,c=Object(B.h)().id,s=Object(a.useState)(null),j=Object(o.a)(s,2),u=j[0],g=j[1],b=Object(a.useState)(null),p=Object(o.a)(b,2),d=p[0],E=p[1];return Object(a.useEffect)((function(){h().then((function(e){n(e.data.genres)}))}),[]),Object(a.useEffect)((function(){(function(e){return v.a.get("".concat(f,"/").concat(e),{params:{api_key:l,language:"en_US"}})})(c).then((function(e){g(e.data)})),function(e){return v.a.get("".concat(f,"/").concat(e,"/recommendations"),{params:{api_key:l,language:"en_US"}})}(c).then((function(e){E(e.data.results)}))}),[]),u&&d?Object(C.jsxs)("div",{className:q.a.wrapper,children:[Object(C.jsx)("h2",{className:q.a.title,children:"Movie details"}),Object(C.jsxs)("div",{className:q.a.container,children:[Object(C.jsxs)("div",{className:q.a.photoContainer,children:[Object(C.jsx)("img",{src:u.poster_path?"https://image.tmdb.org/t/p/w400".concat(u.poster_path):S}),Object(C.jsx)(M,{favoriteMovie:i,setFavoriteMovie:r,movie:u})]}),Object(C.jsxs)("div",{className:q.a.description,children:[Object(C.jsx)("p",{children:u.title}),Object(C.jsx)("span",{className:q.a.overview,children:u.overview}),Object(C.jsx)("div",{className:q.a.genres,children:function(){for(var e=[],n=function(n){t.forEach((function(t){t.id===u.genres[n].id&&e.push(u.genres[n].name)}))},a=0;a<u.genres.length;a++)n(a);return e}().map((function(e,t){return Object(C.jsx)("span",{className:q.a.matchGenre,children:e},t)}))})]})]}),Object(C.jsx)("h2",{children:"Recommendation"}),Object(C.jsx)("div",{className:q.a.recommendation,children:d.map((function(e){return Object(C.jsxs)("div",{className:q.a.movie,children:[Object(C.jsx)("span",{children:e.title}),Object(C.jsx)("div",{className:q.a.scale,children:Object(C.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w200".concat(e.poster_path):S})})]},e.id)}))})]}):Object(C.jsx)(V,{})},Z=n(25),U=n.n(Z);var H=function(e){var t=e.favoriteMovie,n=e.setFavoriteMovie,i=(e.movies,e.genres),r=e.setGenres;return Object(a.useEffect)((function(){h().then((function(e){r(e.data.genres)}))}),[]),0===t.length?Object(C.jsx)("div",{className:U.a.emptyField,children:Object(C.jsx)("p",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"})}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h2",{className:U.a.favoriteMovies,children:"Favorite movies"}),Object(C.jsx)("div",{children:Object(C.jsx)(L,{movies:t,genres:i,favoriteMovie:t,setFavoriteMovie:n})})]})},Y=n(42),J=n.n(Y);var _=function(){var e=Object(B.g)();return Object(C.jsxs)("div",{className:J.a.wrapper,children:[Object(C.jsx)("div",{onClick:function(){return e.push("/")},children:Object(C.jsx)("span",{children:"Home"})}),Object(C.jsx)("div",{onClick:function(){return e.push("/favorites")},children:Object(C.jsx)("span",{children:"Favorite movies"})})]})},$=n(43),ee=n.n($);var te=function(){var e=Object(B.g)();return Object(C.jsxs)("div",{className:ee.a.wrapper,children:[Object(C.jsx)("div",{onClick:function(){return e.push("/")},children:Object(C.jsx)("span",{children:"Home"})}),Object(C.jsx)("div",{onClick:function(){return e.push("/favorites")},children:Object(C.jsx)("span",{children:"Favorite movies"})})]})};var ne=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),c=Object(o.a)(r,2),s=c[0],v=c[1],l=Object(a.useState)([]),j=Object(o.a)(l,2),u=j[0],g=j[1],b=Object(a.useState)([]),f=Object(o.a)(b,2),p=f[0],h=f[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("storageFavoriteMovies");e&&v(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("storageFavoriteMovies",JSON.stringify(s))})),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_,{}),Object(C.jsx)(te,{}),Object(C.jsxs)(B.d,{children:[Object(C.jsx)(B.b,{path:"/",exact:!0,render:function(){return Object(C.jsx)(X,{value:n,setValue:i,favoriteMovie:s,setFavoriteMovie:v,movies:u,setMovies:g,genres:p,setGenres:h})}}),Object(C.jsx)(B.b,{path:"/movie/:id",exact:!0,render:function(){return Object(C.jsx)(R,{genres:p,setGenres:h,setFavoriteMovie:v,favoriteMovie:s})}}),Object(C.jsx)(B.b,{path:"/search",exact:!0,render:function(){return Object(C.jsx)(w,{value:n,setValue:i,favoriteMovie:s,setFavoriteMovie:v,movies:u,genres:p,setGenres:h})}}),Object(C.jsx)(B.b,{path:"/favorites",exact:!0,render:function(){return Object(C.jsx)(H,{favoriteMovie:s,setFavoriteMovie:v,movies:u,genres:p,setGenres:h,setMovies:g})}}),Object(C.jsx)(B.b,{path:"/404",render:function(){return Object(C.jsx)("h1",{children:"404: PAGE NOT FOUND"})}}),Object(C.jsx)(B.a,{from:"*",to:"/404"})]})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},ie=n(44);n(74);c.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(ie.a,{children:Object(C.jsx)(ne,{})})}),document.getElementById("root")),ae()}},[[78,1,2]]]);
//# sourceMappingURL=main.b1d17ec8.chunk.js.map