(this.webpackJsonpmovie_web_service=this.webpackJsonpmovie_web_service||[]).push([[0],{52:function(e,t,a){e.exports=a(82)},78:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(30),o=a.n(i),c=a(13),l=a.n(c),s=a(31),m=a(32),u=a(33),d=a(50),p=a(49),v=a(34),g=a.n(v),h=a(88),f=a(89),b=a(90);var E=function(e){var t=e.title,a=e.poster_path,n=e.release_date;return r.a.createElement(h.a,{align:"center",background:"white",round:"small",responsive:!0,pad:{horizontal:"medium"},margin:{top:"medium",bottom:"medium",right:"medium",left:"medium"}},r.a.createElement(h.a,{margin:"small"},r.a.createElement(f.a,{src:"https://image.tmdb.org/t/p/w200/"+a,fit:"contain"})),r.a.createElement(h.a,null,r.a.createElement(b.a,{weight:"bold",textAlign:"center"},t)),r.a.createElement(h.a,{margin:{bottom:"small"}},r.a.createElement(b.a,{size:"small"},n)," "))},w=(a(78),a(87)),_=a(91),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movieList:[]},e.getMovies=Object(s.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"0f964f1c444c706954dd15c2853e5d97",t.next=3,g.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=0f964f1c444c706954dd15c2853e5d97&language=ko&page=1&region=KR");case 3:a=t.sent,n=a.data.results,console.log(n),e.setState({movieList:n,isLoading:!1});case 7:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movieList.map((function(e,t){return r.a.createElement(E,{key:t,id:e.id,title:e.title,overview:e.overview,poster_path:e.poster_path,release_date:e.release_date})}));return r.a.createElement(h.a,null,t?r.a.createElement("div",null,r.a.createElement("span",null,"loading...")):r.a.createElement(w.a,null,r.a.createElement(h.a,{background:"light-5"},r.a.createElement(_.a,{columns:{count:5,size:"auto"},responsive:!0,pad:"medium"},a))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.f840295c.chunk.js.map