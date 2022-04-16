(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1006:function(t,e,n){"use strict";n(19),n(12),n(27),n(28);var r=n(1),o=(n(8),n(88),n(132),n(67),n(20),n(53),n(133),n(443),n(75),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(89),n(14),n(457),n(6)),l=n(99),c=n(3);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],_=["start","end","center"];function y(t,e){return d.reduce((function(n,r){return n[t+Object(c.I)(r)]=e(),n}),{})}var w=function(t){return[].concat(_,["baseline","stretch"]).includes(t)},m=y("align",(function(){return{type:String,default:null,validator:w}})),h=function(t){return[].concat(_,["space-between","space-around"]).includes(t)},C=y("justify",(function(){return{type:String,default:null,validator:h}})),O=function(t){return[].concat(_,["space-between","space-around","stretch"]).includes(t)},j=y("alignContent",(function(){return{type:String,default:null,validator:O}})),x={align:Object.keys(m),justify:Object.keys(C),alignContent:Object.keys(j)},k={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var V=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:w}},m),{},{justify:{type:String,default:null,validator:h}},C),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var v in n)c+=String(n[v]);var f=V.get(c);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),V.set(c,f)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},1071:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(59),{props:{visit:{type:Object,default:null}},data:function(){return{dialog:!1,availables:null}},created:function(){this._get_stock_availability()},methods:{_get_stock_availability:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("stockAvailability/get_availability_v2",t.page,{params:{visitId:t.visit.id}}).then((function(e){t.availables=e.content.availability})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},close:function(){this.targetdialog=!1}}}),l=n(153),c=n(228),v=n.n(c),f=n(1022),d=n(986),_=n(425),y=n(249),w=n(301),m=n(125),h=n(1006),C=n(1138),O=n(131),j=n(458),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-11 px-10"},[n("v-row",[n("v-col",{staticClass:"d-flex justify-space-between",attrs:{cols:"12"}},[n("p",{staticClass:"font-weight-black text-h5 text-uppercase"},[t._v("STOCK NO. "+t._s(t.visit.id))]),t._v(" "),n("v-btn",{staticClass:"primary  ",staticStyle:{"text-transform":"none !important"},on:{click:function(e){return e.stopPropagation(),t.$store.dispatch("_downloan_report","report")}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-arrow-down-thin")]),t._v("\n        "+t._s(t.$t("label.button.downloadreport")))],1)],1),t._v(" "),n("v-col",{staticClass:"mt-12",attrs:{cols:"12"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"font-weight-bold"},[n("small",{staticClass:" "},[t._v("Sales person:")]),t._v(" Reuben\n                Orinda")]),t._v(" "),n("v-list-item-title",{staticClass:"font-weight-bold"},[n("small",{staticClass:" "},[t._v("Customer:")]),t._v("\n                     Claudia Benet")])],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}})],1)],1),t._v(" "),n("v-col",{staticClass:"mt-16",attrs:{cols:"12"}},[null==t.availables?n("skeleton-datepicker-loader"):n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"\n                  text-center\n                  black--text\n                  font-weight-bold\n                  text-uppercase\n                "},[t._v("\n                Product\n              ")]),t._v(" "),n("th",{staticClass:"\n                  text-center\n                  black--text\n                  font-weight-bold\n                  text-uppercase\n                "},[t._v("\n                Quantity\n              ")]),t._v(" "),n("th",{staticClass:"\n                  text-center\n                  black--text\n                  font-weight-bold\n                  text-uppercase\n                "},[t._v("\n                Type\n              ")]),t._v(" "),n("th",{staticClass:"\n                  text-center\n                  black--text\n                  font-weight-bold\n                  text-uppercase\n                "},[t._v("\n                Expire date\n              ")])])]),t._v(" "),n("tbody",t._l(t.availables,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"text-center"},[t._v(t._s(e.productName))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.quantity))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.unit))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.expire))])])})),0)]},proxy:!0},{key:"top",fn:function(){return[n("v-toolbar",{staticClass:"list",attrs:{flat:""}},[n("v-toolbar-title",[t._v("STOCK DETAILS")])],1)]},proxy:!0},{key:"no-data",fn:function(){return[n("p",[t._v(t._s(t.$t("label.message.nodata")))])]},proxy:!0}])}),t._v(" "),n("v-divider")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VCol:d.a,VDivider:_.a,VIcon:y.a,VListItem:w.a,VListItemContent:m.a,VListItemSubtitle:m.b,VListItemTitle:m.c,VRow:h.a,VSimpleTable:C.a,VToolbar:O.a,VToolbarTitle:j.a})}}]);