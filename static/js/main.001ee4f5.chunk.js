(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(50),o=n.n(l),s=(n(57),n(51)),r=n(9),i=n(10),m=n(12),u=n(11),d=(n(21),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("article",{id:"page",className:"mainpage"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3 d-flex justify-content-center "},c.a.createElement("img",{onClick:this.ultimate,src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Super_Smash_Bros._Ultimate_Logo.png",className:"img-responsive logo",width:"70%"})),c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("h1",null," Smash Compiler ")),c.a.createElement("div",{className:"col-3 d-flex justify-content-center "},c.a.createElement("img",{onClick:this.melee,src:"https://www.pngkey.com/png/detail/355-3554183_the-melee-logo-in-hd-http-super-smash.png",className:"img-responsive logo",width:"70%"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 d-flex justify-content-center"},c.a.createElement("h3",null," A resource for Smash Data of all shapes and kinds "))),c.a.createElement("div",{className:"row"})))}}]),n}(a.Component)),f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("h4",null," Ultimate News Feed ")),c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("h4",null," Melee News Feed "))))}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("article",{className:"Listings"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("img",{src:this.props.meleeinfo.link})),c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("img",{src:this.props.ultinfo.link}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("h4",null," ",this.props.meleeinfo.text," ")),c.a.createElement("div",{className:"col-6 d-flex justify-content-center"},c.a.createElement("h4",null," ",this.props.ultinfo.text," ")))))}}]),n}(a.Component),h=n(58),E=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={meleeposts:[],ultiposts:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new h({userAgent:"A random string.",clientId:"-0bzUta-4HbkFA",clientSecret:"RT287RG-man9a0r_nw8eSgZgAnI",refreshToken:"494759915551-hg1GrUIyIyr5tpOxzppMuCz0aK8"}),n=t.getSubreddit("smashbrosultimate"),a=n.getTop({time:"week",limit:3}),c=[];a.forEach((function(e){c.push({link:e.url,text:e.title,score:e.score})})),console.log(c),a=(n=t.getSubreddit("ssbm")).getTop({time:"week",limit:3});var l=[];a.forEach((function(e){l.push({link:e.url,text:e.title,score:e.score})})),console.log(l),this.setState({meleeposts:l,ultiposts:c},(function(){console.log("meleeposts"),console.log(e.state.meleeposts),console.log("ultiposts"),console.log(e.state.ultiposts)}))}},{key:"render",value:function(){return c.a.createElement("div",Object(s.a)({className:"container",id:"whole"},"className","app"),c.a.createElement(d,null," "),c.a.createElement(f,null," "),this.state.meleeposts.map((function(e,t){return c.a.createElement("h4",null," ",e.text," ")})),",",this.state.ultiposts.map((function(e){return c.a.createElement(p,{keyUlti:e})})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,n){},39:function(e,t){},43:function(e,t){},52:function(e,t,n){e.exports=n(104)},57:function(e,t,n){},66:function(e,t){},75:function(e,t){},83:function(e,t){},89:function(e,t){},91:function(e,t){},99:function(e,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.001ee4f5.chunk.js.map