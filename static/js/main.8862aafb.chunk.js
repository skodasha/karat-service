(this["webpackJsonpcarat-service"]=this["webpackJsonpcarat-service"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/Rectangle.806a9d11.svg"},,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.49dda441.svg"},,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/fottime.d67ce60a.svg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/adress.9a1ae10a.svg"},function(e,a,t){e.exports=t.p+"static/media/call.dff179f0.svg"},function(e,a,t){e.exports=t.p+"static/media/email.386270c5.svg"},function(e,a,t){e.exports=t.p+"static/media/phone.75a01a51.svg"},function(e,a,t){e.exports=t.p+"static/media/time.dc32d955.svg"},function(e,a,t){e.exports=t.p+"static/media/search.f7fdf92e.svg"},function(e,a,t){e.exports=t.p+"static/media/sale.2bdd8cab.svg"},function(e,a,t){e.exports=t.p+"static/media/data.8b032f56.svg"},function(e,a,t){e.exports=t.p+"static/media/chat.d8415792.svg"},function(e,a,t){e.exports=t.p+"static/media/car.a327e558.svg"},function(e,a,t){e.exports=t.p+"static/media/discount.ed315aef.svg"},function(e,a,t){e.exports=t.p+"static/media/glog.2d9e9ed5.svg"},function(e,a,t){e.exports=t.p+"static/media/fotcall.6fb6d7df.svg"},function(e,a,t){e.exports=t.p+"static/media/fotphone.96e2b307.svg"},function(e,a,t){e.exports=t.p+"static/media/rect.8eb277e2.svg"},function(e,a,t){e.exports=t.p+"static/media/rect2.a9c1b4cd.svg"},function(e,a,t){e.exports=t.p+"static/media/img.88226bb3.svg"},function(e,a,t){e.exports=t.p+"static/media/2.ae38b6d5.svg"},function(e,a,t){e.exports=t.p+"static/media/3.8d3b6d18.svg"},function(e,a,t){e.exports=t.p+"static/media/loader.a97096be.svg"},function(e,a,t){e.exports=t.p+"static/media/abim1.510d1017.svg"},function(e,a,t){e.exports=t.p+"static/media/abim2.6d6ec55f.svg"},function(e,a,t){e.exports=t.p+"static/media/rab1.598679e6.svg"},function(e,a,t){e.exports=t.p+"static/media/rab2.77f6d718.svg"},function(e,a,t){e.exports=t.p+"static/media/01.0611a6b4.svg"},function(e,a,t){e.exports=t.p+"static/media/02.235825d0.svg"},function(e,a,t){e.exports=t.p+"static/media/03.90af4cae.svg"},function(e,a,t){e.exports=t.p+"static/media/04.32259a99.svg"},function(e,a,t){e.exports=t.p+"static/media/05.dae66d58.svg"},,function(e,a,t){e.exports=t(97)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/fotemail.23020ed8.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=t(20),s=t.n(l),m=(t(71),t(14)),r=t(3),i=(t(72),t(9)),o=t(10),d=t(18),E=t(16),u=t(35),v=t(24),f=(t(77),t(79),t(82),v.apps.length?v.app():v.initializeApp({apiKey:"AIzaSyAiL7JZvFt7gq-kCv0AabVjU2tFVDLUqE8",authDomain:"store-be1e1.firebaseapp.com",databaseURL:"https://store-be1e1.firebaseio.com",projectId:"store-be1e1",storageBucket:"store-be1e1.appspot.com",messagingSenderId:"185606745586",appId:"1:185606745586:web:fa03570cbb499ce03b0f6b",measurementId:"G-WD83C4CKLW"})),p=f.database().ref(),N={};function g(e,a,t){return{type:"FILTER_TOOLS",payload:N,category:e,subcategory:a,brand:t}}function b(e,a){return{type:"SHOW_TOOLS",payload:N,category:e,subcategory:a}}function h(){return function(e){p.on("value",(function(a){N=a.val(),e(b("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0430"))}))}}var x=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHOW_TOOLS":return Object(d.a)(a.payload[a.category][a.subcategory]);case"FILTER_TOOLS":return Object(d.a)(a.payload[a.category][a.subcategory].filter((function(e){return e.brand==a.brand})));case"FIND_TOOLS":var t=[];for(var c in a.payload["\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438"])t=[].concat(Object(d.a)(t),Object(d.a)(a.payload["\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438"][c].filter((function(e){return e.title.toLowerCase().includes(a.title)}))));return console.log(t),t;default:return e}}),Object(E.a)(u.a)),w=t(65),j=(t(85),t(36)),k=t.n(j),O=t(37),y=t.n(O),T=t(38),S=t.n(T),_=t(39),L=t.n(_),C=t(40),I=t.n(C),D=t(23),F=t.n(D),R=t(41),J=t.n(R);var U=function(){var e=Object(c.useState)(""),a=Object(w.a)(e,2),t=a[0],l=a[1];return n.a.createElement("div",{className:"head"},n.a.createElement("div",{className:"contacts"},n.a.createElement("div",{className:"contacts-item"},n.a.createElement("img",{className:"contacts-img",src:k.a,alt:"icon"}),n.a.createElement("h4",{className:"contacts-h4"},"\u0443\u043b. \u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f, 29")),n.a.createElement("div",{className:"contacts-item"},n.a.createElement("img",{className:"contacts-img",src:I.a,alt:"icon"}),n.a.createElement("h4",{className:"contacts-h4"},"\u041f\u041d - \u041f\u0422 8.00 - 17.00")),n.a.createElement("div",{className:"contacts-item"},n.a.createElement("img",{className:"contacts-img",src:S.a,alt:"icon"}),n.a.createElement("h4",{className:"contacts-h4"},"karat.servis@tut.by")),n.a.createElement("div",{className:"contacts-item"},n.a.createElement("img",{className:"contacts-img",src:L.a,alt:"icon"}),n.a.createElement("h4",{className:"contacts-h4"},"8 017 75 34 798")),n.a.createElement("div",{className:"contacts-item"},n.a.createElement("img",{className:"contacts-img",src:y.a,alt:"icon"}),n.a.createElement("h4",{className:"contacts-h4"},"+375 29 682 02 35"))),n.a.createElement("div",{className:"nav-head"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("img",{src:F.a,alt:"logo"}),n.a.createElement("ul",{className:"nav-container"},n.a.createElement("li",{className:"nav-li"},n.a.createElement("a",{className:"nav-a",href:"/catalog"},"\u041a\u0410\u0422\u0410\u041b\u041e\u0413")),n.a.createElement("li",{className:"nav-li"},n.a.createElement("a",{className:"nav-a",href:"/about"},"\u041e \u041d\u0410\u0421")),n.a.createElement("li",{className:"nav-li"},n.a.createElement("a",{className:"nav-a",href:"#footer"},"\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b"))),n.a.createElement("div",{className:"nav-search"},n.a.createElement("input",{className:"nav-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430...",onChange:function(e){l(e.target.value)}}),n.a.createElement("a",{href:"/catalog?search=".concat(t)},n.a.createElement("img",{src:J.a,className:"search-ico",alt:"icon"}))))))},z=(t(86),t(42)),A=t.n(z);var W=function(){return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"wrapper-header"},n.a.createElement("div",{className:"header-h3"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0432 \u0416\u043e\u0434\u0438\u043d\u043e \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439"),n.a.createElement("div",{className:"header-h2"},"\u041b\u0443\u0447\u0448\u0438\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439 \u043f\u043e \u043b\u0443\u0447\u0448\u0438\u043c \u0446\u0435\u043d\u0430\u043c"),n.a.createElement("button",{className:"header-catalog"},n.a.createElement("a",{className:"header-a",href:"/catalog"},"\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433")),n.a.createElement("div",{className:"sale"},n.a.createElement("img",{src:A.a,alt:"icon"}),n.a.createElement("div",{className:"sale-info"},n.a.createElement("h3",{className:"sale-title"},"\u0426\u0435\u043c\u0435\u043d\u0442 \u0442\u0430\u043a\u043e\u0439 \u0432\u043e\u0442"),n.a.createElement("p",{className:"sale-description"},"\u041d\u0443 \u0442\u0443\u0442 \u0442\u0438\u043f\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0430\u043a\u0446\u0438\u044f. \u042f \u0432\u043e\u043e\u0431\u0449\u0435-\u0442\u043e \u043f\u0440\u043e\u0441\u0438\u043b\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u043d\u0444\u0443 \u043d\u0430\u0441\u0447\u0435\u0442 \u043d\u0438\u0445. \u041d\u043e \u0440\u0430\u0437 \u043d\u0435\u0442, \u0442\u043e \u0442\u0443\u0442 \u0431\u0443\u0434\u0435\u0442 \u044d\u0442\u043e\u0442 \u0434\u0435\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442.")))))},q=(t(87),t(5)),B=t.n(q),H=t(43),K=t.n(H),V=t(44),G=t.n(V),Z=t(45),M=t.n(Z),P=t(46),Q=t.n(P);var X=function(){return n.a.createElement("div",{className:"main"},n.a.createElement("h2",{className:"ad-h2"},n.a.createElement("img",{src:B.a,alt:"icon"}),"  \u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b?  ",n.a.createElement("img",{src:B.a})),n.a.createElement("div",{className:"adv"},n.a.createElement("div",{className:"adv-item"},n.a.createElement("div",{className:"adv-img"},n.a.createElement("img",{src:K.a,alt:"icon"})),n.a.createElement("div",{className:"adv-h"},"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c\u044b\u0439 \u0430\u0441c\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442"),n.a.createElement("hr",{className:"adv-hr"}),n.a.createElement("div",{className:"adv-p"},"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439")),n.a.createElement("div",{className:"adv-item"},n.a.createElement("div",{className:"adv-img"},n.a.createElement("img",{src:M.a,alt:"icon"})),n.a.createElement("div",{className:"adv-h"},"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),n.a.createElement("hr",{className:"adv-hr"}),n.a.createElement("div",{className:"adv-p"},"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u043b\u044e\u0431\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u0416\u043e\u0434\u0438\u043d\u043e \u0437\u0430 24 \u0447\u0430\u0441\u0430")),n.a.createElement("div",{className:"adv-item"},n.a.createElement("div",{className:"adv-img"},n.a.createElement("img",{src:Q.a,alt:"icon"})),n.a.createElement("div",{className:"adv-h"},"\u041f\u0440\u0438\u044f\u0442\u043d\u044b\u0435 \u0446\u0435\u043d\u044b"),n.a.createElement("hr",{className:"adv-hr"}),n.a.createElement("div",{className:"adv-p"},"\u0421\u0430\u043c\u044b\u0435 \u043d\u0438\u0437\u043a\u0438\u0435 \u0446\u0435\u043d\u044b \u0432 \u0433\u043e\u0440\u043e\u0434\u0435, \u043d\u0430\u043b\u0430\u0436\u0435\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0441\u043a\u0438\u0434\u043e\u043a")),n.a.createElement("div",{className:"adv-item"},n.a.createElement("div",{className:"adv-img"},n.a.createElement("img",{src:G.a,alt:"icon"})),n.a.createElement("div",{className:"adv-h"},"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438"),n.a.createElement("hr",{className:"adv-hr"}),n.a.createElement("div",{className:"adv-p"},"\u041e\u0442\u0432\u0435\u0442\u044b \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u043e\u0432 \u043d\u0430 \u043b\u044e\u0431\u044b\u0435 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"))))};t(88);var Y=function(){return n.a.createElement("div",{className:"top"},n.a.createElement("h2",{className:"top-h2"},n.a.createElement("img",{src:B.a,alt:"icon"}),"  \u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u0442\u043e\u0432\u0430\u0440  ",n.a.createElement("img",{src:B.a})),n.a.createElement("div",{className:"top-row"},n.a.createElement("div",{className:"top-item"},n.a.createElement("img",{className:"top-img"}),n.a.createElement("div",{className:"top-title"},"sljflskjflksdj"),n.a.createElement("div",{className:"top-price"},"15 / \u0428\u0422")),n.a.createElement("div",{className:"top-item"},n.a.createElement("img",{className:"top-img"}),n.a.createElement("div",{className:"top-title"},"sljflskjflksdj"),n.a.createElement("div",{className:"top-price"},"15 / \u0428\u0422")),n.a.createElement("div",{className:"top-item"},n.a.createElement("img",{className:"top-img"}),n.a.createElement("div",{className:"top-title"},"sljflskjflksdj"),n.a.createElement("div",{className:"top-price"},"15 / \u0428\u0422"))),n.a.createElement("div",{className:"top-row"},n.a.createElement("div",{className:"top-item"},n.a.createElement("img",{className:"top-img",alt:"icon"}),n.a.createElement("div",{className:"top-title"},"sljflskjflksdj"),n.a.createElement("div",{className:"top-price"},"15 / \u0428\u0422")),n.a.createElement("div",{className:"top-item"},n.a.createElement("img",{className:"top-img",alt:"icon"}),n.a.createElement("div",{className:"top-title"},"sljflskjflksdj"),n.a.createElement("div",{className:"top-price"},"15 / \u0428\u0422")),n.a.createElement("div",{className:"top-item"},n.a.createElement("img",{className:"top-img",alt:"icon"}),n.a.createElement("div",{className:"top-title"},"sljflskjflksdj"),n.a.createElement("div",{className:"top-price"},"15 / \u0428\u0422"))),n.a.createElement("button",{className:"top-catalog"},n.a.createElement("a",{className:"top-a",href:"/catalog"},"\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435")))},$=(t(89),t(47)),ee=t.n($),ae=t(30),te=t.n(ae),ce=t(48),ne=t.n(ce),le=t(49),se=t.n(le);t(90);var me=function(){return n.a.createElement("div",{className:"footer",id:"footer"},n.a.createElement("div",{className:"wrapper-footer"},n.a.createElement("div",{className:"fot-logo"},n.a.createElement("img",{src:F.a,alt:"logo"}),n.a.createElement("div",{className:"fot-h2"},"2020 / \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b")),n.a.createElement("div",{className:"fot-nav"},n.a.createElement("ul",{className:"fot-container"},n.a.createElement("li",{className:"fot-li"},n.a.createElement("a",{className:"fot-a",href:"/catalog"},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433")),n.a.createElement("li",{className:"fot-li"},n.a.createElement("a",{className:"fot-a",href:"/about"},"\u041e \u043d\u0430\u0441")),n.a.createElement("li",{className:"fot-li"},n.a.createElement("a",{className:"fot-a",href:"#"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")))),n.a.createElement("div",{className:"fot-adr"},n.a.createElement("div",{className:"fot-work"},n.a.createElement("img",{src:ee.a,alt:"icon"}),n.a.createElement("div",{className:"fot-h4"},"\u0443\u043b. \u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f, 29")),n.a.createElement("div",{className:"fot-work"},n.a.createElement("img",{src:te.a,alt:"icon"}),n.a.createElement("div",{className:"fot-h4"},"\u041f\u041d - \u041f\u0422 8.00 - 17.00"))),n.a.createElement("div",{className:"fot-phone"},n.a.createElement("div",{className:"fot-work"},n.a.createElement("img",{src:ne.a,alt:"icon"}),n.a.createElement("div",{className:"fot-h4"},"+375 29 682 02 35")),n.a.createElement("div",{className:"fot-work"},n.a.createElement("img",{src:se.a,alt:"icon"}),n.a.createElement("div",{className:"fot-h4"},"8 017 75 34 798")),n.a.createElement("div",{className:"fot-work"},n.a.createElement("img",{src:te.a,alt:"icon"}),n.a.createElement("div",{className:"fot-h4"},"karat.servis@tut.by")))))},re=(t(91),t(50)),ie=t.n(re),oe=t(51),de=t.n(oe),Ee=t(52),ue=t.n(Ee),ve=t(53),fe=t.n(ve),pe=t(54),Ne=t.n(pe);var ge=function(){return n.a.createElement("div",{className:"about"},n.a.createElement("h2",{className:"about-h2"},n.a.createElement("img",{src:B.a}),"  \u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f  ",n.a.createElement("img",{src:B.a})),n.a.createElement("img",{src:ie.a,className:"img-rect",alt:"image"}),n.a.createElement("img",{src:de.a,className:"img-rect2",alt:"image"}),n.a.createElement("img",{src:ue.a,className:"img-img",alt:"image"}),n.a.createElement("img",{src:fe.a,className:"img-p2",alt:"image"}),n.a.createElement("img",{src:Ne.a,className:"img-p3",alt:"image"}),n.a.createElement("div",{className:"about-p1"},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043b\u0438\u0446\u0430\u043c \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u043c. \u0412\u0441\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u044b \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u0438 \u0438\u043c\u0435\u044e\u0442 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043d\u043e\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438"),n.a.createElement("div",{className:"about-p2"},"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0445 \u043a \u043f\u0440\u043e\u0434\u0430\u0436\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u0438 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u0433. \u0416\u043e\u0434\u0438\u043d\u043e \u0443\u043b. \u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f, 29. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438 \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"),n.a.createElement("div",{className:"about-p3"},"\u0412\u044b\u0431\u0438\u0440\u0430\u044f \u043d\u0430\u0441, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0433\u043e\u0442\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043d\u0430\u0448\u0438\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432"))};t(28);var be={fetchTools:h,showTools:b},he=Object(i.b)((function(e){return{tools:e}}),be)((function(e){return e.fetchTools,e.tools,n.a.createElement("div",null,n.a.createElement(U,null),n.a.createElement(W,null),n.a.createElement(X,null),n.a.createElement(Y,null),n.a.createElement(ge,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{className:"map",defaultState:{center:[54.083866,28.314445],zoom:16}},n.a.createElement(o.b,{geometry:[54.083866,28.314445]}))),n.a.createElement(me,null))})),xe=t(55),we=t.n(xe);t(92);var je=function(e){var a=e.tools;return n.a.createElement("div",{className:"list"},0==a.length?n.a.createElement("img",{className:"loader",src:we.a,alt:"loading..."}):null,a.map((function(e,a){return n.a.createElement("a",{key:a,className:"top-item",href:"/info?tool=".concat(encodeURI(JSON.stringify(e)))},n.a.createElement("img",{className:"top-img",src:e.image,alt:"tool"}),n.a.createElement("div",{className:"top-title"},e.title),n.a.createElement("div",{className:"top-price"},e.price))})))};t(93);var ke={showTools:b,filterTools:g},Oe=Object(i.b)((function(e){return{tools:e}}),ke)((function(e){var a=e.showTools,t=e.filterTools;return n.a.createElement("div",{className:"menu"},n.a.createElement("div",{class:"dropdown"},n.a.createElement("button",{class:"dropbtn"},"\u0413\u0438\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d \u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435"),n.a.createElement("div",{class:"dropdown-content"},n.a.createElement("button",{className:"menu-item"},"\u0413\u0438\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d"),n.a.createElement("button",{className:"menu-item"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0434\u043b\u044f \u0433\u0438\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d\u0430"),n.a.createElement("button",{className:"menu-item"},"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f \u0433\u0438\u043f\u0441\u043e\u043a\u0430\u0440\u0442\u043e\u043d\u0430"),n.a.createElement("button",{className:"menu-item"},"\u0421\u0430\u043c\u043e\u0440\u0435\u0437\u044b"),n.a.createElement("button",{className:"menu-item"},"\u0414\u044e\u0431\u0435\u043b\u0438"),n.a.createElement("button",{className:"menu-item"},"\u0421\u0435\u0440\u043f\u044f\u043d\u043a\u0438, \u043b\u0435\u043d\u0442\u044b"))),n.a.createElement("div",{class:"dropdown"},n.a.createElement("button",{class:"dropbtn"},"\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u043c\u0435\u0441\u0438"),n.a.createElement("div",{class:"dropdown-content"},n.a.createElement("div",{class:"dropdown2"},n.a.createElement("button",{class:"dropbtn2",onClick:function(e){return a("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0430")}},"\u0428\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0430"),n.a.createElement("div",{class:"dropdown-content2"},n.a.createElement("button",{className:"menu-item",onClick:function(e){return t("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0430","ilmax")}},"ilmax"),n.a.createElement("button",{className:"menu-item",onClick:function(e){return t("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u0442\u0443\u043a\u0430\u0442\u0443\u0440\u043a\u0430","taifun")}},"taifun"))),n.a.createElement("div",{class:"dropdown2"},n.a.createElement("button",{class:"dropbtn2",onClick:function(e){return a("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u043f\u0430\u0442\u043b\u0435\u0432\u043a\u0430")}},"\u0428\u043f\u0430\u0442\u043b\u0435\u0432\u043a\u0430"),n.a.createElement("div",{class:"dropdown-content2"},n.a.createElement("button",{className:"menu-item",onClick:function(e){return t("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u043f\u0430\u0442\u043b\u0435\u0432\u043a\u0430","ilmax")}},"ilmax"),n.a.createElement("button",{className:"menu-item",onClick:function(e){return t("\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435_\u0441\u043c\u0435\u0441\u0438","\u0448\u043f\u0430\u0442\u043b\u0435\u0432\u043a\u0430","taifun")}},"taifun"))),n.a.createElement("button",{className:"menu-item"},"fbvhfvbhf"),n.a.createElement("button",{className:"menu-item"},"fbvhfvbhf"),n.a.createElement("button",{className:"menu-item"},"fbvhfvbhf"))),n.a.createElement("div",{class:"dropdown"},n.a.createElement("button",{class:"dropbtn"},"Dropdown"),n.a.createElement("div",{class:"dropdown-content"},n.a.createElement("button",{className:"menu-item"},"fbvhfvbhf"),n.a.createElement("button",{className:"menu-item"},"fbvhfvbhf"),n.a.createElement("button",{className:"menu-item"},"fbvhfvbhf"))))}));var ye={fetchTools:h,showTools:b,filterTools:g,findTools:function(e){return{type:"FIND_TOOLS",payload:N,title:e.toLowerCase()}}},Te=Object(i.b)((function(e){return{tools:e}}),ye)((function(e){var a=e.fetchTools,t=(e.showTools,e.filterTools,e.findTools,e.tools);return Object(c.useEffect)((function(){a()}),[]),Object(c.useEffect)((function(){}),[t]),n.a.createElement("div",null,n.a.createElement(U,null),n.a.createElement("div",{className:"wrapper-catalog"},n.a.createElement(Oe,null),n.a.createElement(je,{tools:t})),n.a.createElement(me,null))}));t(94);var Se=function(e){var a=e.tool;return console.log(a),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"info-item"},n.a.createElement("div",{className:"wrap-img"},n.a.createElement("img",{className:"info-img",src:a.image,alt:"tool"})),n.a.createElement("div",{className:"info-item-desc"},n.a.createElement("div",{className:"info-title"},a.title),n.a.createElement("div",{className:"info-brand"},"\u0411\u0440\u0435\u043d\u0434: ",a.brand),n.a.createElement("div",{className:"info-price"},a.price))),n.a.createElement("div",{className:"info-description"},a.description),n.a.createElement("div",{className:"info-number"},"\u0414\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430: +375 29 682 02 35"))};var _e=function(e){var a=JSON.parse(decodeURI(window.location.search.slice(6)));return n.a.createElement("div",null,n.a.createElement(U,null),n.a.createElement(Se,{tool:a}),n.a.createElement(o.c,null,n.a.createElement(o.a,{className:"map",defaultState:{center:[54.083866,28.314445],zoom:16}},n.a.createElement(o.b,{geometry:[54.083866,28.314445]}))),n.a.createElement(me,null))},Le=(t(95),t(56)),Ce=t.n(Le),Ie=t(57),De=t.n(Ie),Fe=t(58),Re=t.n(Fe),Je=t(59),Ue=t.n(Je),ze=t(60),Ae=t.n(ze),We=t(61),qe=t.n(We),Be=t(62),He=t.n(Be),Ke=t(63),Ve=t.n(Ke),Ge=t(64),Ze=t.n(Ge);var Me=[{path:"/carat-service",component:he},{path:"/catalog",component:Te},{path:"/info",component:_e},{path:"/about",component:function(){return n.a.createElement("div",{className:"about-info"},n.a.createElement(U,null),n.a.createElement("h2",{className:"top-h2"},n.a.createElement("img",{src:B.a,alt:"icon"}),"  \u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f  ",n.a.createElement("img",{src:B.a})),n.a.createElement("img",{className:"rec1",src:Re.a,alt:"rec"}),n.a.createElement("div",{className:"ab-item"},n.a.createElement("img",{className:"ab-img1",src:Ce.a,alt:"img"}),n.a.createElement("div",{className:"ab-text"},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043b\u0438\u0446\u0430\u043c \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u043c. \u0412\u0441\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u044b \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u0438 \u0438\u043c\u0435\u044e\u0442 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043d\u043e\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043c\u0438.",n.a.createElement("br",null),n.a.createElement("br",null),"\u041e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u044b\u0445 \u043a \u043f\u0440\u043e\u0434\u0430\u0436\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u0438 \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u0433. \u0416\u043e\u0434\u0438\u043d\u043e \u0443\u043b. \u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f, 29. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438 \u043e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443",n.a.createElement("br",null),n.a.createElement("br",null),"\u0412\u044b\u0431\u0438\u0440\u0430\u044f \u043d\u0430\u0441, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0433\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0433\u043e\u0442\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u043d\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u043d\u0430\u0448\u0438\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432")),n.a.createElement("div",{className:"ab-item"},n.a.createElement("div",{className:"ab-text"},"\u0423 \u043d\u0430\u0441 \u0432\u044b \u043d\u0430\u0439\u0434\u0451\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0434\u0430\u0432\u043d\u043e \u0438\u0441\u043a\u0430\u043b\u0438:",n.a.createElement("br",null),n.a.createElement("br",null),"\u0423 \u043d\u0430\u0441 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",n.a.createElement("br",null),n.a.createElement("br",null),"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0446\u0435\u043d\u044b. \u0414\u0435\u0448\u0435\u0432\u043b\u0435 \u0441\u0442\u0440\u043e\u0439\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u044b \u0441\u043b\u0435\u0434\u0438\u043c \u0437\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0446\u0435\u043d, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0438\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0433\u043e\u0434\u043d\u043e\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u0446\u0435\u043d\u0430-\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e",n.a.createElement("br",null),n.a.createElement("br",null),"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438. \u041d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0442\u0440\u043e\u0439\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043a\u0443\u043f\u0438\u0442\u044c \u2013 \u0438\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0435\u0449\u0435 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c. \u0421 \u043d\u0430\u043c\u0438 \u0432\u0430\u043c \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 \u044d\u0442\u043e \u0432\u0440\u0435\u043c\u044f. \u041c\u044b \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0412\u0430\u0448\u0443 \u043f\u043e\u043a\u0443\u043f\u043a\u0443 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",n.a.createElement("br",null),n.a.createElement("br",null),"\u0423\u0434\u043e\u0431\u0441\u0442\u0432\u043e \u0437\u0430\u043a\u0430\u0437\u0430 \u0438 \u043e\u043f\u043b\u0430\u0442\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438. \u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c, \u043f\u043e\u0434\u0441\u043a\u0430\u0436\u0435\u0442, \u0447\u0442\u043e \u043b\u0443\u0447\u0448\u0435 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"),n.a.createElement("img",{className:"ab-img1",src:De.a,alt:"img"})),n.a.createElement("img",{className:"rec2",src:Ue.a,alt:"rec"}),n.a.createElement("h2",{className:"top-h2"},n.a.createElement("img",{src:B.a,alt:"icon"}),"  \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b  ",n.a.createElement("img",{src:B.a})),n.a.createElement("div",{className:"sert"},n.a.createElement("img",{className:"sert-img",src:Ae.a,alt:"rec"}),n.a.createElement("img",{className:"sert-img",src:qe.a,alt:"rec"}),n.a.createElement("img",{className:"sert-img",src:He.a,alt:"rec"}),n.a.createElement("img",{className:"sert-img",src:Ve.a,alt:"rec"}),n.a.createElement("img",{className:"sert-img",src:Ze.a,alt:"rec"})),n.a.createElement(me,null))}}];function Pe(e){return n.a.createElement(r.a,{path:e.path,render:function(a){return n.a.createElement(e.component,Object.assign({},a,{routes:e.routes}))}})}var Qe=function(){return n.a.createElement(m.a,null,n.a.createElement(r.c,null,Me.map((function(e,a){return n.a.createElement(Pe,Object.assign({key:a},e))}))))};s.a.render(n.a.createElement(i.a,{store:x},n.a.createElement(Qe,null)),document.getElementById("root"))}],[[66,1,2]]]);
//# sourceMappingURL=main.8862aafb.chunk.js.map