(window.webpackJsonp=window.webpackJsonp||[]).push([[64,44],{1001:function(t,e,r){var content=r(1002);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("e23b7040",content,!0,{sourceMap:!1})},1002:function(t,e,r){var n=r(38)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},1008:function(t,e,r){"use strict";r(19),r(12),r(27),r(28);var n=r(1),o=(r(8),r(88),r(132),r(67),r(22),r(54),r(133),r(440),r(77),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(449),r(450),r(451),r(452),r(453),r(89),r(14),r(454),r(6)),c=r(98),l=r(3);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function _(t,e){return f.reduce((function(r,n){return r[t+Object(l.I)(n)]=e(),r}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=_("align",(function(){return{type:String,default:null,validator:m}})),x=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=_("justify",(function(){return{type:String,default:null,validator:x}})),O=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},j=_("alignContent",(function(){return{type:String,default:null,validator:O}})),k={align:Object.keys(y),justify:Object.keys(w),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,r){var n=C[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},y),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var v=P.get(l);return v||function(){var t,e;for(e in v=[],k)k[e].forEach((function(t){var n=r[t],o=D(e,t,n);o&&v.push(o)}));v.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),P.set(l,v)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},1082:function(t,e,r){"use strict";r.r(e);var n={props:{revenue:{type:Object,default:null},priordate:{type:Date,default:new Date},days:{type:String,default:"1"}},data:function(){return{now:new Date}}},o=r(153),c=r(228),l=r.n(c),d=r(999),v=r(998),f=r(988),h=r(422),_=r(1008),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"outlined",attrs:{tile:"",flat:"",elevation:"0",color:"white"}},[r("v-card-text",[r("v-row",[r("v-col",{staticClass:"pa-5 d-flex  align-center ",attrs:{cols:"12",sm:"12",md:"3"}},[r("p",{staticClass:"text-uppercase text-subtitle-1 black--text "},[t._v("\n          "+t._s(t.$t("label.heading.totalsales"))+"\n        ")])]),t._v(" "),r("v-divider",{staticClass:"my-5",attrs:{vertical:"",color:"black"}}),t._v(" "),r("v-col",{class:t.$vuetify.breakpoint.mdAndDown?"d-flex  align-center mx-10":"d-flex justify-center align-center mx-10",attrs:{cols:"12",sm:"12",md:"2"}},[r("p",{staticClass:"text-h5 font-weight-bold mt-5 primary--text"},[t._v(t._s(this.revenue.target)+" Tsh")])]),t._v(" "),r("v-divider",{staticClass:"my-5",attrs:{vertical:"",color:"black"}}),t._v(" "),r("v-col",{staticClass:"d-flex justify-start align-center ml-10",attrs:{cols:"12",sm:"12",md:"5"}},[r("p",{staticClass:"mt-5 text-h5 black--text"},[t._v(t._s(t._round_value(isNaN(100*this.revenue.sales/this.revenue.target)?0:100*this.revenue.sales/this.revenue.target))+"% OF TARGET")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:v.b,VCol:f.a,VDivider:h.a,VRow:_.a})},1185:function(t,e,r){"use strict";r.r(e);r(22),r(19),r(12),r(8),r(27),r(14),r(28);var n=r(1),o=r(7),c=(r(59),r(177)),l=r(1077),d=r(1104),v=r(1082);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{"view-order":l.default,"order-tab":d.default,"summary-order":v.default},data:function(){return{tab:null,dialog:!1,dialogDelete:!1,search:8,status:"PENDING",orders:null,activity:{salesPersonId:null,startDate:null,endDate:null},revenue:{sales:0,target:0},days:1,now:new Date,priordate:new Date,options:{weekday:"long",year:"numeric",month:"long",day:"numeric"}}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){},methods:Object(n.a)({_get_order_by_status:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.status=t,e.$nuxt.$emit("page-update"),console.log(t);case 3:case"end":return r.stop()}}),r)})))()},filter_by_date:function(t){this.days=t;var e=new Date,r=new Date((new Date).setDate(e.getDate()-t));this.priordate=r,this.activity.endDate=e.toISOString().substr(0,10),this.activity.startDate=r.toISOString().substr(0,10),this._get_order_by_status("",this.activity)},forcused:function(){this.$store.dispatch("_get_sales_person")},_updatePagination:function(t){this.page=t,this._get_order_by_status(this.status)},_get_targets:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$api.$get("target/get",{params:t}).then((function(t){null==t.revenue&&null==t.revenue||(e.target=t,e.revenue=t.revenue)})).catch((function(t){console.log(t)}));case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}},"_get_order_by_status",(function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.orderss=[],n.next=3,r.$api.$post("order/get_v2?status=".concat(t),r.page,{params:e}).then((function(t){null==t.content&&null==t.content||(r.orderss=t)})).catch((function(t){console.log(t)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()})),computed:h(h({},Object(c.c)({statuses:"orderstatuses",salespersons:"salespersons"})),{},{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},loader:function(){return this.$store.state.orders.showLoader}})},m=r(153),y=r(228),x=r.n(y),w=r(1025),O=r(988),j=r(997),k=r(1013),C=r(427),D=r(1008),P=r(979),S=r(994),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-overlay",{attrs:{value:t.dialog}},[r("v-dialog",{attrs:{"content-class":"tile","hide-overlay":"",width:"50%","overlay-color":"blue",fullscreen:"",transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("view-order")],1)],1),t._v(" "),t.statuses.length<0?r("skeleton-table-loader"):r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"d-flex justify-start mt-md-8",attrs:{cols:"12",sm:"12",md:"1"}},[r("label",{staticClass:"text-subtitle-2 font-weight-light mr-5 mt-3"},[t._v("\n              SALESPERSON\n            ")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-start align-center mt-md-8",attrs:{cols:"12",sm:"12",md:"3"}},[r("v-select",{staticClass:"mt-1",staticStyle:{background:"#fff"},attrs:{items:t.salespersons,"menu-props":"auto","item-text":"name","item-value":"id",placeholder:"All","hide-details":"",solo:"",flat:"",dense:"","single-line":""},on:{focus:function(e){return t.forcused()},change:function(e){return t.filter_by_date(t.days)}},model:{value:t.activity.salesPersonId,callback:function(e){t.$set(t.activity,"salesPersonId",e)},expression:"activity.salesPersonId"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"d-flex justify-start mt-md-8",attrs:{cols:"12",sm:"12",md:"2"}},[r("label",{staticClass:"\n                black--text\n                text-subtitle-2\n                font-weight-light\n                text-uppercase mt-3\n              "},[t._v("\n              Time Period")])]),t._v(" "),r("v-col",{staticClass:"d-flex justify-md-end mt-md-10",attrs:{cols:"12",sm:"12",md:"4"}},[r("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",tile:"",color:1==t.days||0==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(0)}}},[t._v("\n              Today")]),t._v(" "),r("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:7==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(7)}}},[t._v("7 days")]),t._v(" "),r("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:30==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(30)}}},[t._v("\n              30 Days")]),t._v(" "),r("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:60==t.days?"primary":"white"},on:{click:function(e){return t.filter_by_date(60)}}},[t._v("\n              60 Days")]),t._v(" "),r("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:"#fff "}},[t._v("\n              Custom")])],1)],1),t._v(" "),r("order-tab",{ref:"usernameInput",staticClass:"mt-5",attrs:{status:t.status}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VBtn:w.a,VCol:O.a,VContainer:j.a,VDialog:k.a,VOverlay:C.a,VRow:D.a,VSelect:P.a,VSpacer:S.a})},998:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var n=r(999),o=r(3),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");n.a},999:function(t,e,r){"use strict";r(22),r(19),r(12),r(8),r(27),r(14),r(28);var n=r(1),o=(r(37),r(391),r(392),r(1001),r(1003)),c=r(455),l=r(185),d=r(20);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})}}]);