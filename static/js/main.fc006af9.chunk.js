(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Captain America",image:"https://images-na.ssl-images-amazon.com/images/I/41eda53vWaL.jpg",clicked:!1},{id:2,name:"Black Panther",image:"http://nerdreactor.com/wp-content/uploads/2015/10/black_panther_el_capitan_poster-500x500_c.jpg",clicked:!1},{id:3,name:"Iron Man",image:"https://i1.sndcdn.com/artworks-000128116070-mzte7r-t500x500.jpg",clicked:!1},{id:4,name:"Ant Man",image:"http://nerdreactor.com/wp-content/uploads/2015/05/ant-man-BF_Payoff_1-Sht_v8_Lg-thumb-500x500_c.jpg",clicked:!1},{id:5,name:"Hawkeye",image:"https://static.comicvine.com/uploads/original/11/113509/4411572-hawkeye+2.jpg",clicked:!1},{id:6,name:"Thor",image:"https://static.tvtropes.org/pmwiki/pub/images/mcu_thor.png",clicked:!1},{id:7,name:"Dr. Strange",image:"https://pbs.twimg.com/profile_images/817369685192605696/iWkgUdBf_400x400.jpg",clicked:!1},{id:8,name:"Hulk",image:"http://www-deadline-com.vimg.net/wp-content/uploads/2013/03/hulk-ruffalo__130308150754.jpg",clicked:!1},{id:9,name:"Scarlett Witch",image:"http://nerdreactor.com/wp-content/uploads/2015/01/avengers_age_of_ultron_scarlet_witch_comiccon-500x500_c.jpg",clicked:!1},{id:10,name:"Spider Man",image:"https://pixel.nymag.com/imgs/daily/vulture/2017/06/30/30-spiderman.w700.h700.jpg",clicked:!1},{id:11,name:"Black Widow",image:"http://larkable.com/wp-content/uploads/2014/02/the-avengers-black-widow.png",clicked:!1},{id:12,name:"Deadpool",image:"https://m.media-amazon.com/images/S/aplus-media/vc/dda730b2-1344-4f00-8322-34f905318277._CR0,0,300,300_PT0_SX300__.jpg",clicked:!1}]},,,,function(e,a,t){e.exports=t(24)},,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),l=(t(16),t(7)),o=t(3),s=t(4),m=t(8),d=t(5),u=t(9),p=function(e){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light bg-danger"},c.a.createElement("span",{className:"navbar-brand mb-0 h1 text-left"},"Clicky Game"),c.a.createElement("span",{className:"navbar-brand mb-0 h1 text-center"},"Click and Image to Begin!"),c.a.createElement("span",{className:"navbar-brand mb-0 h1 text-right"},"Score: ",e.score," | Top Score: ",e.bestScore)))};var g=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron"},c.a.createElement("br",null),c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"display-4"},"Marvel Clicky Game!"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("p",{className:"lead"},"Click on any of the superheroes below to begin!")),c.a.createElement("br",null)))},h=(t(18),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),b=(t(20),function(e){return c.a.createElement("div",{onClick:function(){return e.handleClick(e.id)},className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,height:"350px",width:"350px"})))}),k=t(6);var f=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-light bg-danger"},c.a.createElement("span",{className:"navbar-brand mb-0 h1 text-left"},"Clicky Game")))},v=(t(22),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={clicked:[],list:k,score:0,bestScore:0},t.shuffleArray=function(e){return e.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]})},t.handleClick=function(e){if(t.state.clicked.includes(e))t.resetGame();else{var a=[].concat(Object(l.a)(t.state.clicked),[e]);console.log(a),t.setState({clicked:a}),t.handleIncrement();var n=t.shuffleArray(t.state.list);t.setState({list:n}),console.log(n)}},t.handleIncrement=function(){t.state.score>=t.state.bestScore?(t.setState({score:t.state.score+=1}),t.setState({bestScore:t.state.bestScore+=1})):t.setState({score:t.state.score+=1})},t.resetGame=function(){t.setState({score:0,clicked:[]})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(p,{bestScore:this.state.bestScore,score:this.state.score}),c.a.createElement(g,null),c.a.createElement(h,null,this.state.list.map(function(a){return c.a.createElement(b,{id:a.id,key:a.id,name:a.name,image:a.image,handleClick:e.handleClick})})),c.a.createElement(f,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.fc006af9.chunk.js.map