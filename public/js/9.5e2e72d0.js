(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{7901:function(t,e,a){"use strict";a.r(e);var o,s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$q.platform.is.mobile?a("q-table",{staticClass:"tabla_mobile",attrs:{title:t.parametros.tittle,data:t.parametros.data,columns:t.parametros.columns,"row-key":t.parametros.selectedkey,selection:"multiple",selected:t.parametros.selected,pagination:t.parametros.pagination,filter:t.parametros.filter,grid:""},on:{"update:selected":function(e){return t.$set(t.parametros,"selected",e)},"update:pagination":function(e){return t.$set(t.parametros,"pagination",e)}},scopedSlots:t._u([{key:"top-right",fn:function(){return[a("q-input",{staticClass:"buscar_mobile",attrs:{dense:"",standout:"",required:"",rounded:"",placeholder:"Buscar"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!1,4009527860),model:{value:t.parametros.filter,callback:function(e){t.$set(t.parametros,"filter",e)},expression:"parametros.filter"}}),a("q-space"),a("q-btn",{staticClass:"color_icon_acciones",attrs:{size:"md",flat:"",round:"",dense:"",icon:"more_vert"}},[a("q-tooltip",[t._v("\n\t\t\t\tAcciones\n\t\t\t")]),a("q-menu",{attrs:{"content-class":"bg-secondary m-accion","transition-show":"jump-down",color:"accent","transition-hide":"jump-down"}},[a("q-list",{attrs:{bordered:""}},t._l(t.parametros.acciones,(function(e,o){return a("div",{key:o},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},nativeOn:{click:function(a){t.funciones[e.cmd]()}}},[a("q-item-section",{staticStyle:{"min-width":"24px !important"},attrs:{avatar:""}},[a("q-icon",{attrs:{color:"accent",name:e.icon}})],1),a("q-item-section",{attrs:{color:"accent"}},[t._v(t._s(e.accion))])],1)],1)})),0)],1)],1),a("q-space")]},proxy:!0},{key:"item",fn:function(e){return[a("div",{staticClass:"q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition",style:e.selected?"transform: scale(0.95);":""},[a("q-card",{class:e.selected?"card_tabla_mobile_selected":"card_tabla_mobile"},[a("q-card-section",{staticClass:"q-py-none q-px-xs"},[a("q-checkbox",{attrs:{size:"sm",color:"accent"},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"props.selected"}})],1),a("q-separator"),a("q-list",{attrs:{dense:""}},t._l(e.cols.filter((function(t){return"codigo"!==t.name})),(function(e){return a("q-item",{key:e.name},[a("q-item-section",[a("q-item-label",[t._v(t._s(e.label))])],1),a("q-item-section",{attrs:{side:""}},["estado"!==e.name?a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.value)+"\n\t\t\t\t\t\t\t\t"),a("q-tooltip",[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.value)+"\n\t\t\t\t\t\t\t\t")])],1):a("q-item-label",{attrs:{caption:""}},[e.value?a("q-chip",{staticClass:"activo",attrs:{size:"sm","text-color":"white"}},[t._v("\n\t\t\t\t\t\t\t\t\tActivo\n\t\t\t\t\t\t\t\t")]):a("q-chip",{staticClass:"inactivo",attrs:{size:"sm","text-color":"white"}},[t._v("\n\t\t\t\t\t\t\t\t\tInactivo\n\t\t\t\t\t\t\t\t")])],1)],1)],1)})),1)],1)],1)]}}],null,!1,1289097646)}):a("q-table",{staticClass:"tabla",attrs:{title:t.parametros.tittle,data:t.parametros.data,columns:t.parametros.columns,"row-key":t.parametros.selectedkey,selection:"multiple",selected:t.parametros.selected,pagination:t.parametros.pagination,filter:t.parametros.filter},on:{"update:selected":function(e){return t.$set(t.parametros,"selected",e)},"update:pagination":function(e){return t.$set(t.parametros,"pagination",e)}},scopedSlots:t._u([{key:"top-right",fn:function(){return[a("q-input",{attrs:{dense:"",standout:"",required:"",rounded:"",placeholder:"Buscar"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.parametros.filter,callback:function(e){t.$set(t.parametros,"filter",e)},expression:"parametros.filter"}}),a("q-space"),a("q-btn",{staticClass:"color_icon_acciones",attrs:{size:"md",flat:"",round:"",dense:"",icon:"more_vert"}},[a("q-tooltip",[t._v("\n\t\t\t\tAcciones\n\t\t\t")]),a("q-menu",{attrs:{"content-class":"bg-secondary m-accion","transition-show":"jump-down",color:"accent","transition-hide":"jump-down"}},[a("q-list",{attrs:{bordered:""}},t._l(t.parametros.acciones,(function(e,o){return a("div",{key:o},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},nativeOn:{click:function(a){t.funciones[e.cmd]()}}},[a("q-item-section",{staticStyle:{"min-width":"24px !important"},attrs:{avatar:""}},[a("q-icon",{attrs:{color:"accent",name:e.icon}})],1),a("q-item-section",{attrs:{color:"accent"}},[t._v(t._s(e.accion))])],1)],1)})),0)],1)],1),a("q-space")]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e},on:{dblclick:function(a){return t.funciones.editar_fila(e.row.codigo)}}},[a("q-td",{attrs:{"auto-width":""}},[a("q-checkbox",{attrs:{size:"sm",color:"accent"},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"props.selected"}})],1),a("q-td",{key:"cargo",attrs:{props:e}},[t._v(t._s(e.row.cargo)),e.row.cargo?a("q-tooltip",[t._v(t._s(e.row.cargo))]):t._e()],1),a("q-td",{key:"descripcion",attrs:{props:e}},[t._v(t._s(e.row.descripcion)+"\n\t\t\t\t"),e.row.descripcion?a("q-tooltip",[t._v(t._s(e.row.descripcion))]):t._e()],1),a("q-td",{key:"link",attrs:{props:e}},[t._v(t._s(e.row.link)),e.row.link?a("q-tooltip",[t._v(t._s(e.row.link))]):t._e()],1),a("q-td",{key:"hotel",attrs:{props:e}},[t._v(t._s(e.row.hotel)),e.row.hotel?a("q-tooltip",[t._v(t._s(e.row.hotel))]):t._e()],1),e.row.estado?a("q-td",{key:"estado",attrs:{props:e}},[a("q-btn",{staticClass:"activo",attrs:{unelevated:"",rounded:"",color:"accent",size:"xs",label:"activo"}})],1):a("q-td",{key:"estado",attrs:{props:e}},[a("q-btn",{staticClass:"inactivo",attrs:{unelevated:"",rounded:"",color:"accent",size:"xs",label:"Inactivo"}})],1)],1)]}}])})},n=[],r=a("c47a"),c=a.n(r),i=a("a026"),l=i["a"].component("tabla",(o={props:["funciones","parametros"],name:"tabla",components:{},data:function(){return{}},computed:{},methods:{}},c()(o,"components",{}),c()(o,"created",(function(){})),c()(o,"mounted",(function(){})),c()(o,"updated",(function(){})),c()(o,"watch",{}),o)),p=l,d=a("2877"),u=Object(d["a"])(p,s,n,!1,null,null,null);e["default"]=u.exports}}]);