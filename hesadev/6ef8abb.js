(window.webpackJsonp=window.webpackJsonp||[]).push([[25,44],{1001:function(t,e,r){var content=r(1002);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("e23b7040",content,!0,{sourceMap:!1})},1002:function(t,e,r){var n=r(38)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},1008:function(t,e,r){"use strict";r(19),r(12),r(27),r(28);var n=r(1),o=(r(8),r(88),r(132),r(67),r(22),r(54),r(133),r(440),r(77),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(449),r(450),r(451),r(452),r(453),r(89),r(14),r(454),r(6)),c=r(98),l=r(3);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],_=["start","end","center"];function h(t,e){return f.reduce((function(r,n){return r[t+Object(l.I)(n)]=e(),r}),{})}var m=function(t){return[].concat(_,["baseline","stretch"]).includes(t)},x=h("align",(function(){return{type:String,default:null,validator:m}})),y=function(t){return[].concat(_,["space-between","space-around"]).includes(t)},w=h("justify",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(_,["space-between","space-around","stretch"]).includes(t)},j=h("alignContent",(function(){return{type:String,default:null,validator:O}})),C={align:Object.keys(x),justify:Object.keys(w),alignContent:Object.keys(j)},k={align:"align",justify:"justify",alignContent:"align-content"};function P(t,e,r){var n=k[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},x),{},{justify:{type:String,default:null,validator:y}},w),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=S.get(l);return v||function(){var t,e;for(e in v=[],C)C[e].forEach((function(t){var n=r[t],o=P(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),S.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},1077:function(t,e,r){"use strict";r.r(e);r(22),r(19),r(12),r(8),r(27),r(14),r(28);var n=r(1),o=r(7),c=(r(59),r(177));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:{order:{type:Object,default:null}},data:function(){return{salesperson:null,dialog:!1}},created:function(){console.log(this.order)},methods:{forcused:function(){this.$store.dispatch("_get_sales_person")},assigndelivery:function(){var t={orderId:this.order.id,salesPersonId:this.salesperson};this._assign_order_order_to_salesperson(t)},assignedsalesperson:function(){},_assign_order_order_to_salesperson:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$api.$post("order/assign_order",t).then((function(t){e.dialog=!e.dialog})).catch((function(t){console.log(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}},computed:d(d({},Object(c.c)(["salespersons"])),{},{step:function(){var t=0;return"PENDING"===this.order.status.toUpperCase()?t=1:"PROCESSING"===this.order.status.toUpperCase()?t=2:"DELIVERED"===this.order.status.toUpperCase()&&(t=3),t}})},f=r(153),_=r(228),h=r.n(_),m=r(1025),x=r(999),y=r(998),w=r(988),O=r(1013),j=r(422),C=r(301),k=r(125),P=r(1008),S=r(979),D=r(1141),V=r(994),E=r(1033),I=r(1014),R=r(1035),T=r(131),$=r(439),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-11 px-10"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"font-weight-black text-uppercase"},[t._v("ORDER NO.  "+t._s(t.order.id))])]),t._v(" "),r("v-col",{staticClass:"mt-12",attrs:{cols:"12"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"font-weight-bold"},[r("small",{staticClass:" "},[t._v("Customer:")]),t._v(" "+t._s(t.order.storeName))]),t._v(" "),r("v-list-item-title",{staticClass:"font-weight-bold"},[r("small",{staticClass:" "},[t._v("Agent:")]),t._v("\n                     "+t._s(t.order.distributor))])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-list-item",{staticClass:"text-center",attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"font-weight-bold"},[t._v("Complete")]),t._v(" "),r("v-list-item-title",{staticClass:"font-weight-black text-h5 text-center"},[t._v(t._s(t._round_value(33.33*t.step))+"%")])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("v-list-item",{staticClass:"text-center",attrs:{"two-line":""}},[r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"font-weight-bold"},[t._v("Expeted Completion")]),t._v(" "),r("v-list-item-title",{staticClass:"font-weight-bold  "},[t._v(t._s(t.order.expectedDeliveryDate))])],1)],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-stepper",{attrs:{"alt-labels":"",flat:""}},[r("v-stepper-header",[r("v-stepper-step",{staticClass:"pl-0",attrs:{complete:t.step>=1,step:"1"}},[r("small",{staticClass:" "},[t._v("Pending")])]),t._v(" "),r("v-divider",{attrs:{color:"primary"}}),t._v(" "),r("v-stepper-step",{attrs:{complete:t.step>=2,"complete-icon":"mdi-check ",step:"2"}},[r("small",{staticClass:" "},[t._v("Continuing")])]),t._v(" "),r("v-divider",{attrs:{color:"bgcolor"}}),t._v(" "),r("v-stepper-step",{attrs:{complete:t.step>=3,"complete-icon":"mdi-check-bold ",step:"3"}},[r("small",{staticClass:" "},[t._v("Delivered")])])],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n          Product Name\n        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n          Type\n        ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n          Quantity\n        ")])])]),t._v(" "),r("tbody",t._l(t.order.items,(function(e){return r("tr",{key:e.name},[r("td",[t._v(t._s(e.productName))]),t._v(" "),r("td",[t._v(t._s(e.type))]),t._v(" "),r("td",[t._v(t._s(e.count))])])})),0)]},proxy:!0},{key:"top",fn:function(){return[r("v-toolbar",{staticClass:"list",attrs:{flat:""}},[r("v-toolbar-title",[t._v("ORDER DETAILS")])],1)]},proxy:!0}])}),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",md:"8"}},[r("p",{staticClass:"text-subtitle-2 font-weight-medium"},[t._v("Order total")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"4"}},[r("p",{staticClass:"text-subtitle-2 font-weight-medium"},[t._v(t._s(t.order.grandTotal))])])],1),t._v(" "),r("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-flex justify-start",attrs:{cols:"12",md:"6"}},[r("v-select",{attrs:{dense:"",items:t.salespersons,"item-text":"name","item-value":"id",outlined:"",label:"Select nearest salesperson"},on:{focus:t.forcused},model:{value:t.salesperson,callback:function(e){t.salesperson=e},expression:"salesperson"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"4"}},[r("v-btn",{staticClass:"primary lowercase text-white text-body-2",attrs:{disabled:null==t.salesperson},on:{click:function(e){return e.stopPropagation(),t.assigndelivery.apply(null,arguments)}}},[t._v(t._s(t.$t("label.button.assigndelivery")))]),t._v(" "),r("v-dialog",{attrs:{"max-width":"470"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"pa-10",attrs:{flat:""}},[r("v-card-title",{staticClass:" d-flex justify-center"},[r("p",{staticClass:" font-weight-normal text-subtitle-1 success--text"},[t._v("Success")])]),t._v(" "),r("v-card-text",{staticClass:"mt-6 text-justify"},[r("p",{staticClass:"font-weight-normal black--text text-subtitle-1"},[t._v(" "+t._s(t.$t("label.message.ordersubmitted")))])]),t._v(" "),r("v-card-actions",{staticClass:"mt-6 d-flex justify-center"},[r("v-btn",{staticClass:" lowercase py-5 px-16",attrs:{color:"primary",elevation:"0",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                  "+t._s(t.$t("label.button.okay"))+"\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:m.a,VCard:x.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:w.a,VDialog:O.a,VDivider:j.a,VListItem:C.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VRow:P.a,VSelect:S.a,VSimpleTable:D.a,VSpacer:V.a,VStepper:E.a,VStepperHeader:I.a,VStepperStep:R.a,VToolbar:T.a,VToolbarTitle:$.a})},998:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(999),o=r(3),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");n.a},999:function(t,e,r){"use strict";r(22),r(19),r(12),r(8),r(27),r(14),r(28);var n=r(1),o=(r(37),r(391),r(392),r(1001),r(1003)),c=r(455),l=r(185),d=r(20);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})}}]);