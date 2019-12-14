(this.webpackJsonproutercrud=this.webpackJsonproutercrud||[]).push([[0],{240:function(e,t,a){e.exports=a(435)},267:function(e,t){},269:function(e,t){},311:function(e,t){},312:function(e,t){},435:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),l=a(225),c=a.n(l),o=a(30),s=a.n(o),i=a(60),u=a(35),m=a(44),p=a(63),d=a(53),f=a.n(d),E=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement(m.b,{to:"/productos",className:"navbar-brand"},"React CRUD"),n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.c,{to:"/registros",className:"nav-link",activeClassName:"active"},"Registros")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.c,{to:"/nuevo-registro",className:"nav-link",activeClassName:"active"},"Nuevo Registro")))))},b=a(48),g=a.n(b),v=a(25);var h=v.d.create({page:{flexDirection:"row",backgroundColor:"#FFFFFF"},section:{margin:10,padding:10,flexGrow:1},title:{fontSize:11,backgroundColor:"#98999A"},subtitle:{fontSize:11}}),N=function(e){var t=e.history,a=e.producto,r=e.guardarRecargarRegistros;return n.a.createElement("li",{"data-categoria":a.categoria,className:"list-group-item d-flex justify-content-between\r aling-items-center"},n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"}," ",a.nombre),n.a.createElement("span",{className:"font-weight-bold"},"  ",a.apellidoP),n.a.createElement("span",{className:"font-weight-bold"},"  ",a.apellidoM,"  "),a.fecha," "),n.a.createElement("div",null,n.a.createElement(m.b,{to:"/registros/editar/".concat(a.id),className:"btn btn-success mr-2"},"Editar"),n.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return e=a.id,console.log("Eliminando",e),void g.a.fire({title:"\xbfEstas Seguro?",text:"Un Registro eliminado no se puede recuperar!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then(function(){var a=Object(i.a)(s.a.mark((function a(n){var l;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n.value){a.next=15;break}return a.prev=1,l="https://prueba-ap.herokuapp.com/restaurant/".concat(e),a.next=5,f.a.delete(l);case 5:200===a.sent.status&&g.a.fire("Eliminado!","El Registro se ha eliminado.","success"),r(!1),t.push("/registros"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.log(a.t0),g.a.fire({type:"error",title:"Error",text:"Hubo un error, vuelva a intentarlo!"});case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}());var e}},"Eliminar \xd7"),n.a.createElement(v.b,{document:n.a.createElement((function(){return n.a.createElement(v.a,null,n.a.createElement(v.c,{size:"A4",style:h.page},n.a.createElement(v.f,{style:h.section},n.a.createElement(v.e,{style:h.title},"NOMBRE"),n.a.createElement(v.e,{style:h.subtitle},a.nombre,"")),n.a.createElement(v.f,{style:h.section},n.a.createElement(v.e,{style:h.title},"APELLIDO PATERNO"),n.a.createElement(v.e,{style:h.subtitle},a.apellidoP)),n.a.createElement(v.f,{style:h.section},n.a.createElement(v.e,{style:h.title},"APELLIDO MATERNO"),n.a.createElement(v.e,{style:h.subtitle},a.apellidoM)),n.a.createElement(v.f,{style:h.section},n.a.createElement(v.e,{style:h.title},"E-MAIL"),n.a.createElement(v.e,{style:h.subtitle},a.correo)),n.a.createElement(v.f,{style:h.section},n.a.createElement(v.e,{style:h.title},"F-NACIMIENTO"),n.a.createElement(v.e,{style:h.subtitle},a.fecha))))}),null),fileName:"Ejemplo.pdf"},(function(e){return e.loading?"Loading document...":"Download now!"}),n.a.createElement("button",{type:"button",className:"btn btn-success mr-2"},"PDF"))))};var x=function(e){var t=e.productos,a=e.guardarRecargarProductos;return n.a.createElement(r.Fragment,null,n.a.createElement("h1",{className:"text-center"},"Registros"),n.a.createElement("ul",{className:"list-group mt-5"},t.map((function(e){return n.a.createElement(N,{key:e.id,producto:e,guardarRecargarProductos:a})}))))},y=function(e){var t=e.mensaje;return n.a.createElement("p",{className:"alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold"},t)};var O=Object(p.f)((function(e){var t=e.history,a=e.producto,l=e.guardarRecargarRegistros,c=Object(r.useRef)(""),o=Object(r.useRef)(""),m=Object(r.useRef)(""),p=Object(r.useRef)(""),d=Object(r.useRef)(""),E=Object(r.useState)(!1),b=Object(u.a)(E,2),v=b[0],h=b[1],N=function(){var e=Object(i.a)(s.a.mark((function e(r){var n,i,u,E,b,v,N;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=c.current.value,i=o.current.value,u=m.current.value,E=p.current.value,b=d.current.value,""!==n&&""!==i&&""!==u&&""!==E&&""!==b){e.next=5;break}return h(!0),e.abrupt("return");case 5:return h(!1),v={nombre:n,apellidoP:i,apellidoM:u,correo:E,fecha:b},N="https://prueba-ap.herokuapp.com/restaurant/".concat(a.id),e.prev=8,e.next=11,f.a.put(N,v);case 11:200===e.sent.status&&g.a.fire("Registro Editado!","El registro se edito correctamente!","success"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),console.log(e.t0),g.a.fire({type:"error",title:"Error",text:"Hubo un error, vuelva a intentarlo!"});case 19:l(!1),t.push("/registros");case 21:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"col-md-8 mx-auto "},n.a.createElement("h1",{className:"text-center"},"Editar Registro"),v?n.a.createElement(y,{mensaje:"Todos los campos son obligatorios"}):null,n.a.createElement("form",{className:"mt-5",onSubmit:N},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre"),n.a.createElement("input",{type:"text",className:"form-control",name:"Nombre",pattern:"[A-Z,a-z]{2,15}",title:"El nombre debe de iniciar con letra may\xfascula .",maxLength:20,ref:c,defaultValue:a.nombre})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido Paterno"),n.a.createElement("input",{type:"text",className:"form-control",name:"Apellido Paterno",pattern:"[A-Z,a-z]{2,15}",title:"El apellido paterno debe de iniciar con letra may\xfascula.",maxLength:20,ref:o,defaultValue:a.apellidoP}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido Materno"),n.a.createElement("input",{type:"text",className:"form-control",name:"Apellido Materno",pattern:"[A-Z,a-z]{2,15}",title:"El apellido materno debe de iniciar con letra may\xfascula.",maxLength:20,ref:m,defaultValue:a.apellidoM})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Correo"),n.a.createElement("input",{type:"email",className:"form-control",name:"Correo",placeholder:"Correo",maxLength:30,ref:p,defaultValue:a.correo})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Fecha Nacimiento"),n.a.createElement("input",{type:"date",name:"trip-start",ref:d,defaultValue:a.fecha}))),n.a.createElement("input",{type:"submit",className:"font-weight-bold text-uppercase mt-5 btn \r btn-primary btn-block py-3",value:"Editar Registro"})))}));var R=Object(p.f)((function(e){var t=e.history,a=e.guardarRecargarRegistros,l=Object(r.useState)(""),c=Object(u.a)(l,2),o=c[0],m=c[1],p=Object(r.useState)(""),d=Object(u.a)(p,2),E=d[0],b=d[1],v=Object(r.useState)(""),h=Object(u.a)(v,2),N=h[0],x=h[1],O=Object(r.useState)(""),R=Object(u.a)(O,2),j=R[0],k=R[1],w=Object(r.useState)(""),A=Object(u.a)(w,2),C=A[0],P=A[1],L=Object(r.useState)(!1),S=Object(u.a)(L,2),M=S[0],F=S[1],D=function(){var e=Object(i.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),""!==o&&""!==E&&""!==N&&""!==j&&""!==C){e.next=4;break}return F(!0),e.abrupt("return");case 4:return F(!1),e.prev=5,e.next=8,f.a.post("https://prueba-ap.herokuapp.com/restaurant",{nombre:o,apellidoP:E,apellidoM:N,correo:j,fecha:C});case 8:if(201!==e.sent.status){e.next=14;break}return g.a.fire("Registro Creado!","El registro se creo correctamente!","success"),e.next=13,f.a.get("https://prueba-ap.herokuapp.com/restaurant");case 13:e.sent;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0),g.a.fire({type:"error",title:"Error",text:"Hubo un error, vuelva a intentarlo!"});case 20:t.push("/registros"),a(!0);case 22:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"col-md-8 mx-auto "},n.a.createElement("h1",{className:"text-center"},"Agregar Nuevo Registro"),M?n.a.createElement(y,{mensaje:"Todos los campos son obligatorios"}):null,n.a.createElement("form",{className:"mt-5",onSubmit:D},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Nombre"),n.a.createElement("input",{type:"text",className:"form-control",name:"Nombre",pattern:"[A-Z,a-z]{2,15}",title:"El nombre debe de iniciar con letra may\xfascula .",maxLength:20,onChange:function(e){return m(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido Paterno"),n.a.createElement("input",{type:"text",className:"form-control",name:"Apellido Paterno",pattern:"[A-Z,a-z]{2,15}",title:"El apellido paterno debe de iniciar con letra may\xfascula.",maxLength:20,onChange:function(e){return b(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Apellido Materno"),n.a.createElement("input",{type:"text",className:"form-control",name:"Apellido Materno",pattern:"[A-Z,a-z]{2,15}",title:"El apellido materno debe de iniciar con letra may\xfascula.",maxLength:20,onChange:function(e){return x(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Correo"),n.a.createElement("input",{type:"email",className:"form-control",name:"correo",maxLength:30,onChange:function(e){return k(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",null,"Fecha Nacimiento"),n.a.createElement("input",{type:"date",name:"trip-start",onChange:function(e){return P(e.target.value)}})),n.a.createElement("input",{type:"submit",className:"font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3",value:"Agregar Registro"})))}));var j=function(){return n.a.createElement("h1",{className:"text-center"},"Datos del Producto")};var k=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(!0),o=Object(u.a)(c,2),d=o[0],b=o[1];return Object(r.useEffect)((function(){d&&(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://prueba-ap.herokuapp.com/restaurant");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),b(!0))}),[d]),n.a.createElement(m.a,null,n.a.createElement(E,null),n.a.createElement("main",{className:"container mt-5"},n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/registros",render:function(){return n.a.createElement(x,{productos:a,guardarRecargarRegistros:b})}}),n.a.createElement(p.a,{exact:!0,path:"/nuevo-registro",render:function(){return n.a.createElement(R,{guardarRecargarRegistros:b})}}),n.a.createElement(p.a,{exact:!0,path:"/registros/:id",component:j}),n.a.createElement(p.a,{exact:!0,path:"/registros/editar/:id",render:function(e){var t=parseInt(e.match.params.id),r=a.filter((function(e){return e.id===t}));return n.a.createElement(O,{producto:r[0],guardarRecargarRegistros:b})}}))),n.a.createElement("p",{className:"mt-4 p2 text-center"},"Todos los Derechos Reservados"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[240,1,2]]]);
//# sourceMappingURL=main.51dc443f.chunk.js.map