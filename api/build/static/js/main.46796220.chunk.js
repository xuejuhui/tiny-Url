(this["webpackJsonptiny-url"]=this["webpackJsonptiny-url"]||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),o=(n(162),n(163),n(97)),s=n(17),u=n(335),l=n(321),d=n(324),p=n(326),j=n(82),b=n(328),f=n(327),x=n(141),O=n.n(x),h=n(2),v=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function m(){var e=v();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(d.a,{position:"static",children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(h.jsx)(O.a,{})}),Object(h.jsx)(j.a,{variant:"h6",className:e.title,children:"Short Link"}),Object(h.jsx)(b.a,{color:"inherit",children:"Login"})]})})})}var g=n(10),w=n(16),y=n(8),I=n.n(y),U=n(19),k=n(33),S=n(329),G=n(43),N=n(50),P=n.n(N),L=n(289),F=n(330),z=n(331),T=n(332),R=n(336),C=n(333);var E=function(e){var t=e.urls,n=e.deleteUrl;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(S.a,{container:!0,item:!0,xs:12,spacing:1,children:Object(h.jsx)(S.a,{item:!0,xs:12,children:Object(h.jsx)(G.c,{droppableId:"noGroupUrls",children:function(e){return Object(h.jsxs)(L.a,Object(g.a)(Object(g.a)({elevation:3},e.droppableProps),{},{ref:e.innerRef,children:[t.map((function(e,t){return Object(h.jsx)(F.a,{dense:!0,children:Object(h.jsx)(G.b,{draggableId:String(e.id),index:t,children:function(t){return Object(h.jsxs)(z.a,Object(g.a)(Object(g.a)(Object(g.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:[Object(h.jsx)(T.a,{children:Object(h.jsx)(R.a,{alt:e.fullUrl,src:e.favicons})}),Object(h.jsx)(C.a,{primary:e.shortUrl,secondary:e.fullUrl?null===e||void 0===e?void 0:e.fullUrl:null}),Object(h.jsx)(f.a,{"aria-label":"delete",children:Object(h.jsx)(P.a,{})})," ",Object(h.jsx)(f.a,{"aria-label":"delete",children:Object(h.jsx)(P.a,{})}),Object(h.jsx)(f.a,{"aria-label":"delete",onClick:function(){return n(e.id)},children:Object(h.jsx)(P.a,{})})]}))}},e.id)},e.id)})),e.placeholder]}))}})})})})};var A=function(e){var t=e.groups,n=e.deleteGroup,r=e.deleteUrl;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsxs)(S.a,{container:!0,item:!0,xs:12,md:6,spacing:1,children:[Object(h.jsx)(S.a,{item:!0,xs:12,children:Object(h.jsxs)(L.a,{elevation:3,children:[Object(h.jsxs)(j.a,{variant:"body",children:[e.name,e.id]}),Object(h.jsx)(f.a,{"aria-label":"delete",onClick:function(){return n(e.id)},children:Object(h.jsx)(P.a,{})})]})}),Object(h.jsx)(S.a,{item:!0,xs:12,children:Object(h.jsx)(G.c,{droppableId:"".concat(e.id),children:function(t){var n;return Object(h.jsxs)(L.a,Object(g.a)(Object(g.a)({elevation:3},t.droppableProps),{},{ref:t.innerRef,style:{minHeight:"250px"},children:[null===(n=e.urls)||void 0===n?void 0:n.map((function(t,n){return Object(h.jsx)(F.a,{dense:!0,children:Object(h.jsx)(G.b,{draggableId:String(t.id),index:n,children:function(n){return Object(h.jsxs)(z.a,Object(g.a)(Object(g.a)(Object(g.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:[Object(h.jsx)(T.a,{children:Object(h.jsx)(R.a,{alt:t.fullUrl,src:t.favicons})}),Object(h.jsx)(C.a,{primary:t.shortUrl,secondary:t.fullUrl?null===t||void 0===t?void 0:t.fullUrl:null}),Object(h.jsx)(f.a,{"aria-label":"delete",onClick:function(){return r(t.id,e.id)},children:Object(h.jsx)(P.a,{})})]}))}},t.id)},t.id)})),t.placeholder]}))}})})]},e.id)}))})},q=n(57),B=n(334),_=n(81),H=n.n(_),Z=n(23),D=n(44),J=D.a().shape({fullUrl:D.b().matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Enter correct url!").required("Required"),shortUrl:D.b().min(2,"Too Short!").max(50,"Too Long!"),alias:D.b().min(2,"Too Short!").max(50,"Too Long!")}),V=Object(l.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var M=function(e){var t=e.addUrl,n=V();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(Z.c,{initialValues:{fullUrl:"",shortUrl:"",alias:""},validationSchema:J,onSubmit:t,children:Object(h.jsxs)(Z.b,{className:n.root,children:[Object(h.jsxs)(B.a,{row:!0,className:n.root,children:[Object(h.jsx)(Z.a,{component:q.a,name:"fullUrl",type:"text",label:"Full Url",variant:"outlined",InputLabelProps:{shrink:!0}}),Object(h.jsx)(Z.a,{component:q.a,name:"shortUrl",type:"text",label:"Short Url",variant:"outlined",InputLabelProps:{shrink:!0}}),Object(h.jsx)(Z.a,{component:q.a,name:"alias",type:"text",label:"Alias",variant:"outlined",InputLabelProps:{shrink:!0}})]}),Object(h.jsx)(B.a,{row:!0,className:n.root,children:Object(h.jsx)(b.a,{variant:"contained",color:"primary",type:"submit",endIcon:Object(h.jsx)(H.a,{}),children:"Submit"})})]})})})},$=D.a().shape({name:D.b().min(2,"Too Short!").max(50,"Too Long!").required("Required")}),K=Object(l.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var Q=function(e){var t=e.addGroup,n=K();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(Z.c,{initialValues:{name:""},validationSchema:$,onSubmit:t,children:Object(h.jsxs)(Z.b,{className:n.root,children:[Object(h.jsx)(B.a,{row:!0,className:n.root,children:Object(h.jsx)(Z.a,{component:q.a,name:"name",type:"text",label:"Group Name",variant:"outlined",InputLabelProps:{shrink:!0}})}),Object(h.jsx)(B.a,{row:!0,className:n.root,children:Object(h.jsx)(b.a,{variant:"contained",color:"primary",type:"submit",endIcon:Object(h.jsx)(H.a,{}),children:"Submit"})})]})})})},W=n(28),X=n.n(W),Y=function(){var e=Object(U.a)(I.a.mark((function e(){var t,n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("/api/urls");case 2:return t=e.sent,n=t.data,a=null===(r=void 0===n?[]:n)||void 0===r?void 0:r.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{favicons:"https://www.google.com/s2/favicons?sz=32&domain_url=".concat(e.fullUrl)})})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.post("/api/urls",Object(g.a)({},t));case 2:return n=e.sent,r=n.data,a=Object(g.a)(Object(g.a)({},r),{},{favicons:"https://www.google.com/s2/favicons?sz=32&domain_url=".concat(r.fullUrl)}),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.delete("/api/urls/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(U.a)(I.a.mark((function e(t,n){var r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.patch("/api/urls/".concat(t),n);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(U.a)(I.a.mark((function e(){var t,n,r,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.get("/api/groups");case 2:return t=e.sent,n=t.data,a=null===(r=void 0===n?[]:n)||void 0===r?void 0:r.map((function(e){var t,n=null===(t=e.urls)||void 0===t?void 0:t.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{favicons:"https://www.google.com/s2/favicons?sz=32&domain_url=".concat(e.fullUrl)})}));return Object(g.a)(Object(g.a)({},e),{},{urls:n})})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.post("/api/groups",Object(g.a)({},t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.a.delete("/api/groups/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ie=function(){var e=Object(r.useState)([]),t=Object(k.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(k.a)(c,2),o=i[0],s=i[1];Object(r.useEffect)((function(){(function(){var e=Object(U.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){(function(){var e=Object(U.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var u=function(){var e=Object(U.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee(t);case 3:n=e.sent,a((function(e){return[].concat(Object(w.a)(e),[n])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(U.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae(t);case 3:n=e.sent,s((function(e){return[].concat(Object(w.a)(e),[Object(g.a)(Object(g.a)({},n),{},{urls:[]})])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(U.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{ce(t)&&(n=o.find((function(e){return e.id===Number(t)})),s((function(e){var n;return null===(n=Object(w.a)(e))||void 0===n?void 0:n.filter((function(e){return e.id!==t}))})),a((function(e){return[].concat(Object(w.a)(e),Object(w.a)(n.urls))})))}catch(r){console.log(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(U.a)(I.a.mark((function e(t){var r,c,i,u,l,d,p=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.length>1&&void 0!==p[1]?p[1]:null,e.prev=1,e.next=4,te(t);case 4:e.sent&&(r?(u=o.findIndex((function(e){return e.id===r})),l=Object(w.a)(o),d=null===(i=l[u].urls)||void 0===i?void 0:i.filter((function(e){return e.id!==t})),l[u].urls=d,s(l)):(c=n.filter((function(e){return e.id!==t})),a(c))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t;"noGroupUrls"!==e?t=o.find((function(t){return t.id===Number(e)})).urls:t=n;return Object(w.a)(t)},b=function(){var e=Object(U.a)(I.a.mark((function e(t,n){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="noGroupUrls"===n?null:n,e.next=3,ne(t,{groupId:r});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r,c,i,u,l,d,p,f,x,O,h,v;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.source,r=t.destination){e.next=3;break}return e.abrupt("return");case 3:if(n.droppableId!==r.droppableId){e.next=11;break}c=j(n.droppableId),i=c.splice(n.index,1),u=Object(k.a)(i,1),l=u[0],c.splice(r.index,0,l),"noGroupUrls"===n.droppableId&&a(c),"noGroupUrls"!==n.droppableId&&(console.log(n.droppableId),d=Object(w.a)(o),p=d.findIndex((function(e){return e.id===Number(n.droppableId)})),d[p]=Object(g.a)(Object(g.a)({},d[p]),{},{urls:c}),s(d)),e.next=21;break;case 11:return f=j(n.droppableId),x=j(r.droppableId),O=f.splice(n.index,1),h=Object(k.a)(O,1),v=h[0],e.next=16,b(v.id,r.droppableId);case 16:x.splice(r.index,0,v),"noGroupUrls"===n.droppableId&&a(f),"noGroupUrls"===r.droppableId&&a(x),"noGroupUrls"!==n.droppableId&&s((function(e){var t=Object(w.a)(e);console.log(typeof n.droppableId);var r=t.findIndex((function(e){return e.id===Number(n.droppableId)}));return t[r]=Object(g.a)(Object(g.a)({},t[r]),{},{urls:f}),t})),"noGroupUrls"!==r.droppableId&&s((function(e){var t=Object(w.a)(e),n=t.findIndex((function(e){return e.id===Number(r.droppableId)}));return t[n]=Object(g.a)(Object(g.a)({},t[n]),{},{urls:x}),t}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{style:{margin:"20px 0"},children:Object(h.jsxs)(S.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(h.jsxs)(S.a,{item:!0,xs:4,children:[Object(h.jsx)(M,{addUrl:u}),Object(h.jsx)(Q,{addGroup:l})]}),Object(h.jsx)(S.a,{item:!0,xs:8,container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(h.jsxs)(G.a,{onDragEnd:f,children:[Object(h.jsx)(S.a,{container:!0,item:!0,xs:12,md:4,direction:"row",justify:"center",alignItems:"center",spacing:2,children:Object(h.jsx)(E,{urls:n,deleteUrl:p})}),Object(h.jsx)(S.a,{container:!0,item:!0,xs:12,md:8,direction:"row",justify:"center",alignItems:"center",spacing:2,children:Object(h.jsx)(A,{groups:o,deleteGroup:d,deleteUrl:p})})]})})]})})};var oe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{}),Object(h.jsx)(ie,{})]})};var se=function(){var e=Object(s.g)().shortUrl,t=Object(s.f)();return console.log(t),Object(r.useEffect)((function(){(function(){var t=Object(U.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.a.get("/api/urls/".concat(e)).then((function(e){var t=e.data;console.log(t),(null===t||void 0===t?void 0:t.fullUrl)&&(window.location="//".concat(null===t||void 0===t?void 0:t.fullUrl))})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(h.jsx)("div",{})};var ue=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(o.a,{children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",exact:!0,component:oe}),Object(h.jsx)(s.a,{path:"/:shortUrl",component:se})]})})]})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,338)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(ue,{})}),document.getElementById("root")),le()}},[[287,1,2]]]);
//# sourceMappingURL=main.46796220.chunk.js.map