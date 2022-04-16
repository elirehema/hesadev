(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1190:function(t,e,l){"use strict";l.r(e);l(20),l(19),l(12),l(8),l(27),l(14),l(28);var r=l(1),n=l(178);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var o={components:{"tab-running-stock":l(1163).default},title:"Sales Activities",data:function(){return{tab:null,dialog:!1,dialogDelete:!1,search:null,days:1,product:null}},methods:{filter_by_date:function(t){console.log(t)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)(["salespersons","warehouses","products"]))},d=o,m=l(153),v=l(228),f=l.n(v),_=l(1022),h=l(997),y=l(986),w=l(1006),O=l(977),C=l(992),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-5"},[l("h2",{staticClass:"font-weight-bold text-h5 py-4"},[t._v("\n    "+t._s(t.$t("label.heading.runningstock"))+"\n  ")]),t._v(" "),l("v-row",[l("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[l("v-row",[l("v-col",{staticClass:"d-flex-wrap align-center justify-start",attrs:{cols:"12",sm:"12",md:"3"}},[l("label",{staticClass:"text-subtitle-2 font-weight-normal mr-5 mt-3"},[t._v("\n            "+t._s(t.$t("label.heading.products"))+"\n          ")]),t._v(" "),l("v-spacer"),t._v(" "),l("v-select",{staticClass:"mt-1",staticStyle:{background:"#fff"},attrs:{items:t.products,"menu-props":"auto","item-text":"name","item-value":"name",placeholder:"All","hide-details":"",solo:"",flat:"",dense:"","single-line":""},on:{focus:function(e){return t.$store.dispatch("_get_sales_person")}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),l("v-col",{staticClass:"d-flex-wrap align-top justify-start",attrs:{cols:"12",sm:"12",md:"3"}},[l("label",{staticClass:"text-subtitle-2 font-weight-normal mr-5 mt-3"},[t._v("\n            "+t._s(t.$t("label.heading.warehouses"))+"\n          ")]),l("v-spacer"),t._v(" "),l("v-select",{staticClass:"mt-1",staticStyle:{background:"#fff"},attrs:{items:t.warehouses,"menu-props":"auto","item-text":"name","item-value":"name",placeholder:"All","hide-details":"",solo:"",flat:"",dense:"","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),l("v-spacer"),t._v(" "),l("v-col",{staticClass:"d-flex justify-end mt-7",attrs:{cols:"12",sm:"12",md:"6"}},[l("label",{staticClass:"\n              black--text\n              text-subtitle-2\n              font-weight-light\n              text-uppercase\n              mt-1\n              mr-5\n            "},[t._v("\n            Time Period")]),t._v(" "),l("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",tile:"",color:1==t.days||0==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(0)}}},[t._v("\n            Today")]),t._v(" "),l("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:7==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(7)}}},[t._v("7 days")]),t._v(" "),l("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:30==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(30)}}},[t._v("\n            30 Days")]),t._v(" "),l("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:60==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(60)}}},[t._v("\n            60 Days")]),t._v(" "),l("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:"#fff "}},[t._v("\n            Custom")])],1)],1)],1)],1),t._v(" "),l("v-card",{staticClass:"mt-2",attrs:{flat:""}},[l("tab-running-stock",{attrs:{salesPersonId:t.salesperson,search:t.search}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:_.a,VCard:h.a,VCol:y.a,VRow:w.a,VSelect:O.a,VSpacer:C.a})}}]);