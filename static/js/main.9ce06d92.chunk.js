(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(48),o=a.n(c),s=(a(56),a(13)),i=(a(32),"https://accounts.spotify.com/authorize"),u="e06a8e4468034056a35e699e61e7b0cb",l="https://huangdarren1106.github.io/",f=["user-top-read","user-read-currently-playing","user-read-playback-state"],p=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e},{});window.location.hash="";var b=p,d=(a(78),a(79),a(27)),m=a.n(d),h=a(9),g=a(49),j=(a(35),a(82),a(44),a(50));function O(e){var t=e.chartData,a=e.artistToGenres;return console.log(a),r.a.createElement("div",null,r.a.createElement(j.a,{className:"pichart",data:t,options:{plugins:{title:{display:!0,text:"Your Top Genres",color:"#000000"},legend:{display:!0,position:"bottom",labels:{color:"#000000",font:{size:16}}},tooltip:{callbacks:{label:function(e){var t=e.label+": ",n=[];return a.map(function(t){t.genresArr.includes(e.label)&&n.push(t.artistName)}),n.map(function(e){t=t+e+", "}),t=t.substring(0,t.length-2)}}}}}}))}function v(e){var t=e.token,c=Object(n.useState)([]),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(n.useState)({}),f=Object(s.a)(l,2),p=(f[0],f[1]),b=a(32),d=(a(99),a(87),a(96),Object(n.useState)({})),j=Object(s.a)(d,2),v=j[0],w=j[1],y=Object(n.useState)(!1),k=Object(s.a)(y,2),E=k[0],S=k[1],N=function(e){if(0===e.length)return-1;for(var t=e[0],a=0,n=1;n<e.length;n++)e[n]>t&&(a=n,t=e[n]);return a};return Object(n.useEffect)(function(){var e=[];(function(){var t=Object(g.a)(m.a.mark(function t(a){var n,r,c,o,s,i,l,f,d,g,j,O,v,y;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={Authorization:"Bearer "+a},t.next=3,b.get("https://api.spotify.com/v1/me/top/artists",{headers:r}).then(function(t){e=t.data.items});case 3:for(c=e.map(function(e,t){var a=e.name;e.images[0].url;return{artistName:a,genresArr:e.genres}}),u(c),o=e.map(function(e,t){return e.genres}),s=(n=[]).concat.apply(n,Object(h.a)(o)),i={},s.map(function(e){i[e]=0}),s.map(function(e){i[e]=i[e]+1}),l=Object.keys(i),f=Object.values(i),d=0,g=[];20!=d&&0!=l.length;)j=N(f),g.push(l[j]),l.splice(j,1),f.splice(j,1),d++;O={},g.map(function(e){O[e]=i[e]}),p(O),v=Object.values(O).reduce(function(e,t){return e+t},0),console.log(v),y={labels:Object.keys(O),datasets:[{label:"Your Top Genres",data:Object.values(O).map(function(e){return Math.round(e/v*100)/100}),backgroundColor:["#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080"],borderColor:"white",radius:"100%"}]},w(y),S(!0);case 23:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}})()(t)},[]),E?r.a.createElement("body",{className:"GraphScreen"},r.a.createElement(O,{chartData:v,artistToGenres:i}),r.a.createElement("table",null)):r.a.createElement("div",{className:"GraphScreen"},r.a.createElement("header",{className:"App-header"},"mounting"))}a(97),a(98);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),p=Object(s.a)(o,2),d=(p[0],p[1],Object(n.useState)(!1)),m=Object(s.a)(d,2),h=(m[0],m[1],Object(n.useState)([])),g=Object(s.a)(h,2),j=(g[0],g[1],Object(n.useState)(!1)),O=Object(s.a)(j,2);return O[0],O[1],Object(n.useEffect)(function(){var e=b.access_token;e&&c(e)}),r.a.createElement("div",null,r.a.createElement("body",{className:"App-body"},!a&&r.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat(i,"?client_id=").concat(u,"&redirect_uri=").concat(l,"&scope=").concat(f.join("%20"),"&response_type=token&show_dialog=true")},"Login to Spotify"),a&&r.a.createElement(v,{token:a})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){},51:function(e,t,a){e.exports=a(100)},56:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},97:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},98:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.9ce06d92.chunk.js.map