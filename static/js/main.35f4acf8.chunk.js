(this["webpackJsonpcarat-service"]=this["webpackJsonpcarat-service"]||[]).push([[0],{29:function(e,t,a){},34:function(e,t,a){e.exports=a(60)},39:function(e,t,a){},40:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),o=a.n(l),r=(a(39),a(32)),u=a(3),s=(a(40),a(20)),i=a(10),f=a(15),m=a(33),v=a(14),d=a(31),b=a(21),E=(a(45),a(47),a(50),b.apps.length?b.app():b.initializeApp({apiKey:"AIzaSyAiL7JZvFt7gq-kCv0AabVjU2tFVDLUqE8",authDomain:"store-be1e1.firebaseapp.com",databaseURL:"https://store-be1e1.firebaseio.com",projectId:"store-be1e1",storageBucket:"store-be1e1.appspot.com",messagingSenderId:"185606745586",appId:"1:185606745586:web:fa03570cbb499ce03b0f6b",measurementId:"G-WD83C4CKLW"})),p=E.database().ref().child("tools");function h(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return e="all"!==a?t.filter((function(e){return e.section===a})):t,"all"!==n&&(e=e.filter((function(e){return e.subsection===n}))),{type:"SHOW_TOOLS",payload:e}}function O(e,t,a){return function(n){p.on("value",(function(c){var l=c.val(),o=a?l.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())})):l;n(h(o,e,t))}))}}var g=Object(v.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_TOOLS":return Object(m.a)(t.payload);default:return e}}),Object(v.a)(d.a));a(53);var j=function(){return c.a.createElement("div",{className:"head"},c.a.createElement("div",{className:"contacts"}),c.a.createElement("div",{className:"nav-head"}))};a(54);var N=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("button",null,c.a.createElement("a",{href:"/carat-service/catalog"},"aksjdkajsdk")))};a(55);var S=function(){return c.a.createElement("div",{className:"main"})};a(56);var w=function(){return c.a.createElement("div",{className:"top"})};a(57);var y=function(){return c.a.createElement("div",{className:"footer"})};a(29);var L={fetchTools:O,showTools:h},T=Object(i.b)((function(e){return{tools:e}}),L)((function(e){var t=e.fetchTools,a=e.tools,l=Object(n.useState)(),o=Object(s.a)(l,2);return o[0],o[1],Object(n.useEffect)((function(){t("all","all")}),[]),Object(n.useEffect)((function(){console.log(a)}),[a]),console.log(a),c.a.createElement("div",null,c.a.createElement(j,null),c.a.createElement(N,null),c.a.createElement(S,null),c.a.createElement(w,null),c.a.createElement(f.c,null,c.a.createElement(f.a,{className:"map",defaultState:{center:[54.083866,28.314445],zoom:16}},c.a.createElement(f.b,{geometry:[54.083866,28.314445]}))),c.a.createElement(y,null))}));a(58);var k=function(){return c.a.createElement("div",{className:"list"})};var I={fetchTools:O,showTools:h},C=Object(i.b)((function(e){return{tools:e}}),I)((function(e){var t=e.fetchTools,a=e.tools,l=Object(n.useState)(),o=Object(s.a)(l,2);return o[0],o[1],Object(n.useEffect)((function(){t("all","all")}),[]),Object(n.useEffect)((function(){console.log(a)}),[a]),console.log(a),c.a.createElement("div",null,c.a.createElement(j,null),c.a.createElement(k,null),c.a.createElement(y,null))}));var A=function(){return c.a.createElement(r.a,{basename:"".concat("/carat-service","/")},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0,component:T}),c.a.createElement(u.a,{path:"/catalog",component:C})))};o.a.render(c.a.createElement(i.a,{store:g},c.a.createElement(A,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.35f4acf8.chunk.js.map