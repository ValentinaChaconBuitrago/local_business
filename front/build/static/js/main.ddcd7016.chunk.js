(this.webpackJsonpprueba=this.webpackJsonpprueba||[]).push([[0],{151:function(e,a,t){e.exports=t(357)},356:function(e,a,t){},357:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(59),c=t.n(r),s=t(14),m=t(22),o=(t(62),t(10)),i=t(87),u=t.n(i);function d(e,a,t){var n=t.split("#"),l=n[0],r=parseInt(n[2]),c=(parseInt(n[1])*r+e)/(r+1);r+=1,function(e,a){fetch("/store/"+e,{method:"PUT",body:a,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){}),(function(e){console.log("fallamos")}))}(l,JSON.stringify({rating:c,nRatings:r}))}var E=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1];return r?r?l.a.createElement("div",null,l.a.createElement("div",{className:"card border-dark mb-3",key:e.item._id,style:{maxWidth:"50ww%"}},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},"A ",e.item.dist," Km de distancia"),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{type:"button",class:"close","aria-label":"Close",onClick:function(){c(!1)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))),l.a.createElement("div",{className:"card-body text-dark"},l.a.createElement("div",{className:"col-8"},l.a.createElement("h5",{className:"card-title"},e.item.name)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",{className:"card-text"},e.item.description),l.a.createElement("p",{className:"card-text"},"Tel\xe9fono: ",e.item.phone),l.a.createElement("p",{className:"card-text"},"Direcci\xf3n: ",e.item.address)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},l.a.createElement("img",{alt:"Card image cap",className:"card-img-top embed-responsive-item",src:e.item.image})))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("p",{className:"font-weight-bold"},"Deja una calificaci\xf3n!")),l.a.createElement("div",null,l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("div",{className:"p-2"},l.a.createElement(u.a,{name:e.item._id+"#"+e.item.rating+"#"+e.item.nRatings,starCount:5,value:0,onStarClick:d.bind(void 0)}))))))))):void 0:l.a.createElement("div",null,l.a.createElement("div",{className:"card border-dark mb-3",key:e.item._id,style:{maxWidth:"50ww%"}},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",null,"A ",e.item.dist," Km de distancia")))),l.a.createElement("div",{className:"card-body text-dark"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("h5",{className:"card-title"},e.item.name)),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"d-flex flex-row-reverse"},l.a.createElement("div",{className:"p-2"},l.a.createElement(u.a,{name:e.item._id+"#"+e.item.rating+"#"+e.item.nRatings,starCount:5,value:e.item.rating,onStarClick:function(){}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",{className:"card-text"},e.item.description),l.a.createElement("a",null,l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(!0)}},"Ver detalles"))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},l.a.createElement("img",{alt:"Card image cap",className:"card-img-top embed-responsive-item",src:e.item.image})))))))};var v=function(e){var a=[];return e.stores.map((function(t){var n=function(e,a,t,n){var l=e*Math.PI/180,r=a*Math.PI/180,c=(a-e)*Math.PI/180,s=(n-t)*Math.PI/180,m=Math.sin(c/2)*Math.sin(c/2)+Math.cos(l)*Math.cos(r)*Math.sin(s/2)*Math.sin(s/2),o=6371e3*(2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m)));return o/=1e3,o*=10,(o|=0)/10}(e.lat,t.position.lat,e.lon,t.position.lng);t.dist=n,a.push(t)})),a.sort((function(e,a){return e.dist-a.dist})),l.a.createElement("div",null,l.a.createElement("ul",null,a.map((function(a){return l.a.createElement("div",{key:a._id},l.a.createElement(E,{item:a,lat:e.lat,lon:e.lon}))}))))},p=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"MicroShopping"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(s.b,{to:"/",className:"nav-link"},l.a.createElement("li",{className:"nav-item active"},"Inicio"),l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("div",{id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav navbar-right"},l.a.createElement(s.b,{to:"/signup",className:"nav-link btn-info navbar-btn"},l.a.createElement("li",null,"Registrarse"),l.a.createElement("span",{className:"sr-only"},"(current)")),l.a.createElement(s.b,{to:"/login",className:"nav-link"},l.a.createElement("li",null,"Ingresar"),l.a.createElement("span",{className:"sr-only"},"(current)")))))},f=t(34),b=Object(f.withGoogleMap)((function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(f.GoogleMap,{defaultZoom:14,defaultCenter:e.mar},e.isMarkerShown&&l.a.createElement(f.Marker,{position:e.mar}),e.tiendas.map((function(e){return l.a.createElement(f.Marker,{icon:{url:" https://maps.gstatic.com/mapfiles/ms2/micons/grocerystore.png"},key:e._id,position:e.position,onMouseOver:function(){c(e)},onMouseOut:function(){c(null)}})})),r&&l.a.createElement(f.InfoWindow,{position:r.position,onCloseClick:function(){c(null)}},l.a.createElement("div",{id:"divGloboMapa"},l.a.createElement("p",null,r.name),l.a.createElement("img",{id:"imgGlobo",src:r.image,height:"80",alt:"Imagen\xb4{selected.name}\xb4"}))))})),N=(t(356),function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),m=s[0],i=s[1],u=Object(n.useState)([]),d=Object(o.a)(u,2),E=d[0],f=d[1],N=Object(n.useState)(4.7108341),g=Object(o.a)(N,2),h=g[0],y=g[1],w=Object(n.useState)(-74.0490092),k=Object(o.a)(w,2),j=k[0],x=k[1];return navigator.geolocation.watchPosition((function(e){y(e.coords.latitude),x(e.coords.longitude)})),Object(n.useEffect)((function(){var e;navigator.geolocation.getCurrentPosition((function(e){var a=e.coords;y(a.latitude),x(a.longitude)}));e=4e3,new Promise((function(a){return setTimeout(a,e)})),fetch("./getRestaurants").then((function(e){return e.json()})).then((function(e){f(e)}),(function(e){r(e)})).then((function(){return i(!0)}))}),[]),t?l.a.createElement("div",null,"Error: ",t.message):m?l.a.createElement("div",{className:"Client"},l.a.createElement(p,null),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 ",id:"storesTitle"},"Tiendas cercanas"))),l.a.createElement("div",null,l.a.createElement("div",{className:"row row-height"},l.a.createElement("div",{id:"storesDiv",className:"col-md-6 left "},l.a.createElement(v,{stores:E,lat:h,lon:j})),l.a.createElement("div",{className:"col-md-6 "},l.a.createElement("div",{id:"rowDiv"},l.a.createElement(b,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%",width:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"80vh"}}),mar:{lat:h,lng:j},tiendas:E})))))):l.a.createElement("div",null,"Loading...")}),g=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 col-sm-offset-3"}),l.a.createElement("div",{className:"col-sm-4 col-sm-offset-3"},l.a.createElement("h1",null,l.a.createElement("span",{className:"fa fa-sign-in"})," Ingresar"),l.a.createElement("form",{action:"/login",method:"post"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Usuario"),l.a.createElement("input",{type:"text",className:"form-control",name:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Contrase\xf1a"),l.a.createElement("input",{type:"password",className:"form-control",name:"password"})),l.a.createElement("button",{type:"submit",className:"btn btn-warning btn-lg"},"Entrar")),l.a.createElement("hr",null),l.a.createElement("p",null,"Necesita una cuenta? ",l.a.createElement("a",{href:"/signup"},"Registrarse")),l.a.createElement("p",null,"Ir a",l.a.createElement("a",{href:"/"}," Inicio"),"."))))},h=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"well"},l.a.createElement("h3",null,l.a.createElement("span",{className:"fa fa-user"})," Informaci\xf3n del usuario"),l.a.createElement("p",null,l.a.createElement("strong",null,"Usuario"),": ",e.username,l.a.createElement("br",null),l.a.createElement("strong",null,"Contrase\xf1a"),": *****")))))},y=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"MicroShopping"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(s.b,{to:"/",className:"nav-link"},l.a.createElement("li",{className:"nav-item active"},"Home"),l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement("div",{id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav navbar-right"},l.a.createElement(s.b,{to:"/login",className:"nav-link btn-info navbar-btn"},l.a.createElement("li",null,"Profile"),l.a.createElement("span",{className:"sr-only"},"(current)")),l.a.createElement(s.b,{to:"/formAddStore",className:"nav-link"},l.a.createElement("li",null,"Add Business"),l.a.createElement("span",{className:"sr-only"},"(current)")))))},w=function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,l.a.createElement("span",{className:"fa fa-shopping-cart"})," Agregar un negocio"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 col-sm-offset-3"}),l.a.createElement("div",{className:"col-sm-4 col-sm-offset-3"},l.a.createElement("form",{action:"/addStore",method:"post"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nombre"),l.a.createElement("input",{placeholder:"Tienda de Don Luis",type:"text",className:"form-control",name:"name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Direcci\xf3n"),l.a.createElement("input",{placeholder:"calle 78# 7-98",type:"text",className:"form-control",name:"address"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Tel\xe9fono"),l.a.createElement("input",{placeholder:"3193970054",type:"text",className:"form-control",name:"phone"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"URL de la imagen"),l.a.createElement("input",{placeholder:"https://blog.rappi.com/masa.jpg",type:"text",className:"form-control",name:"image"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Descripci\xf3n"),l.a.createElement("textarea",{placeholder:"Minimercado de frutas y verduras",className:"form-control",name:"description",rows:"4",cols:"40"})),l.a.createElement("button",{type:"submit",className:"btn btn-info btn-lg"},"Agragar negocio"),l.a.createElement("hr",null))))))},k=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("/getUser").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),l.a.createElement("div",null,t?l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-sm-offset-3"}),l.a.createElement("div",{className:"col-sm-3 col-sm-offset-3"},l.a.createElement(h,{username:t.username,_id:t._id,password:t.password})),l.a.createElement("div",{className:"col-sm-3 col-sm-offset-3"},l.a.createElement("button",{onClick:function(){fetch("/logout").then((function(){return r(null)}))},className:"btn btn-primary"},"Cerrar sesi\xf3n")))):l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(g,null)))},j=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 col-sm-offset-3"}),l.a.createElement("div",{className:"col-sm-4 col-sm-offset-3"},l.a.createElement("h1",null,l.a.createElement("span",{className:"fa fa-sign-in"})," Registrarse"),l.a.createElement("form",{action:"/signup",method:"post"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Usuario"),l.a.createElement("input",{type:"text",className:"form-control",name:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Contrase\xf1a"),l.a.createElement("input",{type:"password",className:"form-control",name:"password"})),l.a.createElement("button",{type:"submit",className:"btn btn-warning btn-lg"},"Registrarse")),l.a.createElement("hr",null),l.a.createElement("p",null,"Ya tiene una cuenta? ",l.a.createElement("a",{href:"/login"},"Ingresar")),l.a.createElement("p",null,"Ir a",l.a.createElement("a",{href:"/"}," Inicio"),"."))))},x=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){fetch("/getUser").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),l.a.createElement("div",null,t?l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-sm-offset-3"}),l.a.createElement("div",{className:"col-sm-3 col-sm-offset-3"},l.a.createElement(h,{username:t.username,_id:t._id,password:t.password})),l.a.createElement("div",{className:"col-sm-3 col-sm-offset-3"},l.a.createElement("button",{onClick:function(){fetch("/logout").then((function(){return r(null)}))},className:"btn btn-primary"},"Cerrar sesi\xf3n")))):l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(j,null)))},M=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:N}),l.a.createElement(m.a,{path:"/login",exact:!0,component:k}),l.a.createElement(m.a,{path:"/signup",exact:!0,component:x}),l.a.createElement(m.a,{path:"/formAddStore",exact:!0,component:w}))))};c.a.render(l.a.createElement(M,null),document.querySelector("#target"))},62:function(e,a,t){}},[[151,1,2]]]);
//# sourceMappingURL=main.ddcd7016.chunk.js.map