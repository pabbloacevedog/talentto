(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{1757:function(t,e,o){"use strict";o.r(e);var a,r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$q.platform.is.mobile?o("q-table",{staticClass:"tabla_mobile",attrs:{title:t.parametros.tittle,data:t.parametros.data,columns:t.parametros.columns,"row-key":t.parametros.selectedkey,selection:"multiple",selected:t.parametros.selected,pagination:t.parametros.pagination,filter:t.parametros.filter,grid:""},on:{"update:selected":function(e){return t.$set(t.parametros,"selected",e)},"update:pagination":function(e){return t.$set(t.parametros,"pagination",e)}},scopedSlots:t._u([{key:"top-right",fn:function(){return[o("q-input",{staticClass:"buscar_mobile",attrs:{dense:"",standout:"",required:"",rounded:"",placeholder:"Buscar"},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,4009527860),model:{value:t.parametros.filter,callback:function(e){t.$set(t.parametros,"filter",e)},expression:"parametros.filter"}}),o("q-space"),o("q-btn",{staticClass:"color_icon_acciones",attrs:{size:"md",flat:"",round:"",dense:"",icon:"more_vert"}},[o("q-tooltip",[t._v("\n\t\t\t\tAcciones\n\t\t\t")]),o("q-menu",{attrs:{"content-class":"bg-secondary m-accion","transition-show":"jump-down",color:"accent","transition-hide":"jump-down"}},[o("q-list",{attrs:{bordered:""}},t._l(t.parametros.acciones,(function(e,a){return o("div",{key:a},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},nativeOn:{click:function(o){t.funciones[e.cmd]()}}},[o("q-item-section",{staticStyle:{"min-width":"24px !important"},attrs:{avatar:""}},[o("q-icon",{attrs:{color:"accent",name:e.icon}})],1),o("q-item-section",{attrs:{color:"accent"}},[t._v(t._s(e.accion))])],1)],1)})),0)],1)],1),o("q-space")]},proxy:!0},{key:"item",fn:function(e){return[o("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:e.selected?"transform: scale(0.95);":""},[o("q-card",{class:e.selected?"card_tabla_mobile_selected":"card_tabla_mobile"},[o("q-card-section",{staticClass:"q-py-none q-px-xs"},[o("q-checkbox",{attrs:{size:"sm",color:"accent"},model:{value:e.selected,callback:function(o){t.$set(e,"selected",o)},expression:"props.selected"}})],1),o("q-separator"),o("q-list",{attrs:{dense:""}},t._l(e.cols.filter((function(t){return"codigo"!==t.name})),(function(a){return o("q-item",{key:a.name},[o("q-item-section",[o("q-item-label",[t._v(t._s(a.label))])],1),o("q-item-section",{attrs:{side:""}},["banner"==a.name?o("q-item-label",{attrs:{caption:""}},[""!=e.row.banner?o("q-btn",{attrs:{unelevated:"",rounded:"",color:"accent",size:"xs",label:"Ver banner"},on:{click:function(o){return t.funciones.mostrar_banner(e.row.banner)}}}):t._e()],1):"estado"!==a.name?o("q-item-label",{attrs:{caption:""}},[t._v(t._s(a.value)+"\n\t\t\t\t\t\t\t\t"),o("q-tooltip",[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(a.value)+"\n\t\t\t\t\t\t\t\t")])],1):o("q-item-label",{attrs:{caption:""}},[a.value?o("q-chip",{staticClass:"activo",attrs:{size:"sm","text-color":"white"}},[t._v("\n\t\t\t\t\t\t\t\t\tActivo\n\t\t\t\t\t\t\t\t")]):o("q-chip",{staticClass:"inactivo",attrs:{size:"sm","text-color":"white"}},[t._v("\n\t\t\t\t\t\t\t\t\tInactivo\n\t\t\t\t\t\t\t\t")])],1)],1)],1)})),1)],1)],1)]}}],null,!1,63571176)}):o("q-table",{staticClass:"tabla",attrs:{title:t.parametros.tittle,data:t.parametros.data,columns:t.parametros.columns,"row-key":t.parametros.selectedkey,selection:"multiple",selected:t.parametros.selected,pagination:t.parametros.pagination,filter:t.parametros.filter},on:{"update:selected":function(e){return t.$set(t.parametros,"selected",e)},"update:pagination":function(e){return t.$set(t.parametros,"pagination",e)}},scopedSlots:t._u([{key:"top-right",fn:function(){return[o("q-input",{staticClass:"buscar_mobile",attrs:{dense:"",standout:"",required:"",rounded:"",placeholder:"Buscar"},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.parametros.filter,callback:function(e){t.$set(t.parametros,"filter",e)},expression:"parametros.filter"}}),o("q-space"),o("q-btn",{staticClass:"color_icon_acciones",attrs:{size:"md",flat:"",round:"",dense:"",icon:"more_vert"}},[o("q-tooltip",[t._v("\n\t\t\t\tAcciones\n\t\t\t")]),o("q-menu",{attrs:{"content-class":"bg-secondary m-accion","transition-show":"jump-down",color:"accent","transition-hide":"jump-down"}},[o("q-list",{attrs:{bordered:""}},t._l(t.parametros.acciones,(function(e,a){return o("div",{key:a},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},nativeOn:{click:function(o){t.funciones[e.cmd]()}}},[o("q-item-section",{staticStyle:{"min-width":"24px !important"},attrs:{avatar:""}},[o("q-icon",{attrs:{color:"accent",name:e.icon}})],1),o("q-item-section",{attrs:{color:"accent"}},[t._v(t._s(e.accion))])],1)],1)})),0)],1)],1),o("q-space")]},proxy:!0},{key:"body",fn:function(e){return[o("q-tr",{attrs:{props:e},on:{dblclick:function(o){return t.funciones.editar_fila(e.row.codigo)}}},[o("q-td",{attrs:{"auto-width":""}},[o("q-checkbox",{attrs:{size:"sm",color:"accent"},model:{value:e.selected,callback:function(o){t.$set(e,"selected",o)},expression:"props.selected"}})],1),o("q-td",{key:"proveedor",attrs:{props:e}},[t._v(t._s(e.row.proveedor)),e.row.proveedor?o("q-tooltip",[t._v(t._s(e.row.proveedor))]):t._e()],1),o("q-td",{key:"direccion",attrs:{props:e}},[t._v(t._s(e.row.direccion)),e.row.direccion?o("q-tooltip",[t._v(t._s(e.row.direccion))]):t._e()],1),o("q-td",{key:"telefono",attrs:{props:e}},[t._v(t._s(e.row.telefono)),e.row.telefono?o("q-tooltip",[t._v(t._s(e.row.telefono))]):t._e()],1),o("q-td",{key:"email",attrs:{props:e}},[t._v(t._s(e.row.email)),e.row.email?o("q-tooltip",[t._v(t._s(e.row.email))]):t._e()],1),o("q-td",{key:"web",attrs:{props:e}},[t._v(t._s(e.row.web)),e.row.web?o("q-tooltip",[t._v(t._s(e.row.web))]):t._e()],1),o("q-td",{key:"nombre_categoria",attrs:{props:e}},[t._v(t._s(e.row.nombre_categoria)+"\n\t\t\t\t"),e.row.nombre_categoria?o("q-tooltip",[t._v(t._s(e.row.nombre_categoria))]):t._e()],1),o("q-td",{key:"descripcion",attrs:{props:e}},[t._v(t._s(e.row.descripcion)+"\n\t\t\t\t"),e.row.descripcion?o("q-tooltip",[t._v(t._s(e.row.descripcion))]):t._e()],1),o("q-td",{key:"banner",attrs:{props:e}},[""!=e.row.banner?o("q-btn",{attrs:{unelevated:"",rounded:"",color:"accent",size:"xs",label:"Ver banner"},on:{click:function(o){return t.funciones.mostrar_banner(e.row.banner)}}}):t._e()],1),e.row.estado?o("q-td",{key:"estado",attrs:{props:e}},[o("q-btn",{staticClass:"activo",attrs:{unelevated:"",rounded:"",color:"accent",size:"xs",label:"activo"}})],1):o("q-td",{key:"estado",attrs:{props:e}},[o("q-btn",{staticClass:"inactivo",attrs:{unelevated:"",rounded:"",color:"accent",size:"xs",label:"Inactivo"}})],1)],1)]}}])})},n=[],s=o("9523"),c=o.n(s),i=o("a026"),l=i["a"].component("tabla",(a={props:["funciones","parametros"],name:"tabla",components:{},data:function(){return{}},computed:{},methods:{}},c()(a,"components",{}),c()(a,"created",(function(){})),c()(a,"mounted",(function(){})),c()(a,"updated",(function(){})),c()(a,"watch",{}),a)),p=l,d=o("2877"),u=Object(d["a"])(p,r,n,!1,null,null,null);e["default"]=u.exports}}]);