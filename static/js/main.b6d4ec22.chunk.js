(this["webpackJsonpmovie-browser"]=this["webpackJsonpmovie-browser"]||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logo.8dad8028.svg"},13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__eFdHF",value:"Counter_value__26MZs",button:"Counter_button__3bVua",textbox:"Counter_textbox__2Xvsv",asyncButton:"Counter_asyncButton__xJehS Counter_button__3bVua"}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),c=(n(18),n(10)),u=n.n(c),s=n(12),i=n(3),m=n(5),p=Object(m.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),d=p.actions,b=d.increment,v=d.decrement,E=d.incrementByAmount,f=function(e){return e.counter.value},_=p.reducer,h=n(2),g=n.n(h);function k(){var e=Object(i.c)(f),t=Object(i.b)(),n=Object(a.useState)("2"),o=Object(s.a)(n,2),l=o[0],c=o[1];return r.a.createElement("div",null,r.a.createElement("div",{className:g.a.row},r.a.createElement("button",{className:g.a.button,"aria-label":"Increment value",onClick:function(){return t(b())}},"+"),r.a.createElement("span",{className:g.a.value},e),r.a.createElement("button",{className:g.a.button,"aria-label":"Decrement value",onClick:function(){return t(v())}},"-")),r.a.createElement("div",{className:g.a.row},r.a.createElement("input",{className:g.a.textbox,"aria-label":"Set increment amount",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:g.a.button,onClick:function(){return t(E(Number(l)||0))}},"Add Amount"),r.a.createElement("button",{className:g.a.asyncButton,onClick:function(){return t((e=Number(l)||0,function(t){setTimeout((function(){t(E(e))}),1e3)}));var e}},"Add Async")))}n(25);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),r.a.createElement(k,null),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("span",null,r.a.createElement("span",null,"Learn "),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),r.a.createElement("span",null,", "),r.a.createElement("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),r.a.createElement("span",null,", "),r.a.createElement("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux Toolkit"),",",r.a.createElement("span",null," and "),r.a.createElement("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"React Redux"))))},x=Object(m.a)({reducer:{counter:_}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:x},r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.b6d4ec22.chunk.js.map