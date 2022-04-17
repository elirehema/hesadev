(window.webpackJsonp=window.webpackJsonp||[]).push([[65,15,62],{1004:function(t,e,n){var content=n(1005);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("2065bca8",content,!0,{sourceMap:!1})},1005:function(t,e,n){var r=n(38)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},1013:function(t,e,n){"use strict";var r=n(100),o=n(1),l=(n(37),n(155),n(111),n(88),n(132),n(8),n(178),n(20),n(19),n(12),n(27),n(14),n(28),n(1004),n(991)),c=n(282),d=n(230),v=n(463),m=n(464),f=n(461),h=n(462),_=n(229),y=n(21),x=n(30),w=n(3);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(y.a)(d.a,v.a,m.a,f.a,h.a,c.a);e.a=k.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(x.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.z.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:O({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=O(O({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1023:function(t,e,n){var r=n(35),o=n(232),l=n(76),c=n(469),d=n(126),v=r(c),m=r("".slice),f=Math.ceil,h=function(t){return function(e,n,r){var c,h,_=l(d(e)),y=o(n),x=_.length,w=void 0===r?" ":l(r);return y<=x||""==w?_:((h=v(w,f((c=y-x)/w.length))).length>c&&(h=m(h,0,c)),t?_+h:h+_)}};t.exports={start:h(!1),end:h(!0)}},1024:function(t,e,n){var r=n(187);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},1040:function(t,e,n){"use strict";var r=n(16),o=n(1023).start;r({target:"String",proto:!0,forced:n(1024)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1077:function(t,e,n){"use strict";n.r(e);var r=n(395),o={props:["type","data"],data:function(){return{mdiCog:r.f,headers:[{text:"Name",align:"start",value:"name",width:"60%",class:"lined"},{text:"Revenue",value:"revenue",class:"lined"}],pagesync:1,pageCount:0}}},l=n(153),c=n(228),d=n.n(c),v=n(1022),m=n(998),f=n(1173),h=n(426),_=n(249),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"1",flat:""}},[n("div",{staticClass:"px-3 py-3"},[n("div",{staticClass:"d-flex",staticStyle:{"justify-content":"space-between"}},[n("div",[n("p",{staticClass:"text-body-1 mb-0"},[t._v("Total Sales")]),t._v(" "),n("p",{staticClass:"  lighttext--text"},[t._v("Last 30 Days")])]),t._v(" "),n("v-btn",{attrs:{"x-small":"",fab:"",outlined:"",color:"grey"}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-cog ")])],1)],1),t._v(" "),t.type?t._e():n("div",[n("h5",{staticClass:"primary--text text-h6 text-uppercase font-weight-black"},[t._v("Tsh 329, 009, 374")]),t._v(" "),n("p",{staticClass:" "},[t._v("2830 Orders")])]),t._v(" "),"list"==t.type?n("div",[n("v-divider"),t._v(" "),n("v-data-table",{staticClass:"lined",attrs:{headers:t.headers,items:t.data,"items-per-page":t.itemsperpage,page:t.pagesync,dense:"","hide-default-footer":"","header-props":t.headerprops},on:{"update:page":function(e){t.pagesync=e},"page-count":function(e){t.pageCount=e}}}),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"text-center my-4"})],1):t._e(),t._v(" "),"bar"==t.type?n("div",[n("br")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VDataTable:f.a,VDivider:h.a,VIcon:_.a})},1080:function(t,e,n){"use strict";n.r(e);n(37);var r={props:{data:{type:Object,default:{}},title:{type:String,default:""},ndays:{type:Number,default:0}},data:function(){return{headers:[{text:"Name",align:"start",value:"name",width:"60%",class:"lined"},{text:"Revenue",value:"revenue",class:"lined"}],pagesync:1,pageCount:0}}},o=n(153),l=n(228),c=n.n(l),d=n(1022),v=n(998),m=n(249),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"1",flat:""}},[n("div",{staticClass:"px-3 py-3"},[n("div",{staticClass:"d-flex",staticStyle:{"justify-content":"space-between"}},[n("div",[n("p",{staticClass:"text-body-1 mb-0"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"  lighttext--text"},[t._v(t._s(0==t.ndays?"Today":1==t.ndays?"Yesterday":"Last "+t.ndays+" Days"))])]),t._v(" "),n("v-btn",{attrs:{"x-small":"",fab:"",outlined:"",color:"grey"}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-cog-outline")])],1)],1),t._v(" "),n("div",[n("h5",{staticClass:"primary--text text-h6 text-uppercase font-weight-black"},[t._v("Tsh "+t._s(t.data.amount.toLocaleString()))]),t._v(" "),n("p",{staticClass:" "},[t._v(t._s(t.data.orders)+" Orders")])])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VIcon:m.a})},1112:function(t,e,n){"use strict";n.r(e);n(20),n(19),n(12),n(27),n(14),n(28);var r=n(1),o=(n(86),n(8),n(134),n(53),n(133),n(1077)),l=n(1080),c=n(177),d=n(395);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{"card-two":o.default,"summary-component":l.default},title:"Dashboard",data:function(){return{item:1,alert:!0,tab:null,supplierId:"",userId:"",range:{startDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),endDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},headers:[{text:"Order Id",align:"start",value:"id"},{text:"Merchant",value:"store.name"},{text:"Address",value:"store.address"},{text:"Amount",value:"grandTotal"},{text:"Date",value:"createdDate"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1,class:"thright",align:"right"}],tableData:[{name:"Mark Paul",revenue:"Tsh 67,345,830"},{name:"Claudian Benet",revenue:"Tsh 55,468,670"},{name:"Mercy Allen",revenue:"Tsh 40,000,000"},{name:"Samuel",revenue:"Tsh 12,300,830"}],editedItem:{},defaultItem:{},dialog:!1,editedIndex:-1,pageCount:0,activebtn:0,endDate:"",startDate:"",mdiMagnify:d.i,mdiEye:d.g,mdiCog:d.f,date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dates:[this.date,this.date],menu2:!1,x:0,y:0}},created:function(){this.fetchSuppliers(),this.fetchDistributors(),this.fetchOrders(),this.$store.dispatch("_gethomesummary",this.range)},methods:m(m({},Object(c.b)(["fetchSuppliers","fetchDistributors","fetchOrders"])),{},{filterDate:function(t){var e=new Date,n=new Date((new Date).setDate(e.getDate()-t));this.range.endDate=n.toISOString().substr(0,10),this.activebtn=t,this.$store.dispatch("_gethomesummary",this.range)},orders:function(t){if(t.length>0)return t.map((function(t){return null==t?void 0:t.productName})).toString()},truncate:function(t,e){return t.length<e?t:t.substring(0,e).replace(/\w{3}$/gi,"...")},editItem:function(t){this.editedIndex=this.allOrders.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},datechange:function(){console.log(this.dates)}}),computed:m(m({},Object(c.c)(["suppliers","distributors","allOrders","dashboardsummaries"])),{},{perpage:function(){var t=parseInt(this.itemsperpage,10);return isNaN(t)?20:t},products:function(){var t;return null!==(t=this.editedItem)&&void 0!==t&&t.items?this.editedItem.items:[]}})},h=n(153),_=n(228),y=n.n(_),x=n(995),w=n(1022),C=n(998),O=n(997),k=n(987),I=n(996),D=n(1173),S=n(1172),j=n(1013),T=n(1025),V=n(249),$=n(427),A=n(301),P=n(125),E=n(435),B=n(1007),F=n(978),N=n(993),z=n(1170),L=n(1206),M=n(1205),Z=n(1167),R=n(1161),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tabs",{attrs:{"background-color":"white"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"line-color"}}),t._v(" "),n("v-tab",{staticClass:"  px-10",staticStyle:{"text-transform":"none"}},[t._v("\n      "+t._s(t.$t("label.tabs.overview"))+"\n    ")]),t._v(" "),n("v-tab",{staticClass:"  px-10",staticStyle:{"text-transform":"none"}},[t._v("\n      "+t._s(t.$t("label.tabs.dailystats"))+"\n    ")])],1),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("v-tabs-items",{staticClass:"mt-3",staticStyle:{"background-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("h2",{staticClass:"font-weight-bold text-h5 py-4"},[t._v("\n          "+t._s(t.$t("label.tabs.overview"))+"\n        ")]),t._v(" "),n("v-row",{staticClass:"mt-5"},[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[n("label",{staticClass:"black--text text-body-2"},[t._v(" Supplier ")]),t._v(" "),n("v-select",{staticClass:"mt-1",staticStyle:{background:"#fff"},attrs:{items:t.suppliers,"menu-props":"auto","item-text":"name","item-value":"id",placeholder:"All","hide-details":"",solo:"",flat:"",dense:"","single-line":""},model:{value:t.supplierId,callback:function(e){t.supplierId=e},expression:"supplierId"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[n("label",{staticClass:"black--text text-body-2"},[t._v("\n                  Distributor's Name")]),t._v(" "),n("v-select",{staticClass:"mt-1",staticStyle:{background:"#fff"},attrs:{items:t.distributors,"menu-props":"auto","item-text":"name","item-value":"id",placeholder:"All","hide-details":"",solo:"",flat:"",dense:"","single-line":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}})],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"d-flex justify-end mt-6",attrs:{cols:"12",sm:"12",md:"5"}},[n("label",{staticClass:"black--text text-body-1 mr-5 mt-2"},[t._v("\n                  Time Period")]),t._v(" "),n("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:0==t.activebtn?"primary":"#fff"},on:{click:function(e){return t.filterDate(0)}}},[t._v("\n                  Today")]),t._v(" "),n("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:1==t.activebtn?"primary":"#fff"},on:{click:function(e){return t.filterDate(1)}}},[t._v("Yesterday")]),t._v(" "),n("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:7==t.activebtn?"primary":"#fff"},on:{click:function(e){return t.filterDate(7)}}},[t._v("\n                  7 Days")]),t._v(" "),n("v-btn",{staticClass:"lowercase mr-1 elevation-0",attrs:{small:"",color:30==t.days?"primary":"white"},on:{click:function(e){return t.filterDate(30)}}},[t._v("\n                  30 Days")]),t._v(" "),n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","position-x":t.x,"position-y":t.y,"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"lowercase mr-1 elevation-0",attrs:{color:"#fff ",small:""}},"v-btn",o,!1),r),[t._v("\n                      Custom")])]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),n("v-date-picker",{attrs:{range:"",color:"primary"},on:{change:t.datechange},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1)],1)],1)],1)],1),t._v(" "),n("v-row",[null!=t.dashboardsummaries?n("v-col",{attrs:{cols:"12",sm:"12",md:"9"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("summary-component",{attrs:{title:"Total Sales",ndays:t.activebtn,data:t.dashboardsummaries.totalSales}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("summary-component",{attrs:{title:"Total Paid",ndays:t.activebtn,data:t.dashboardsummaries.totalPaid}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[n("summary-component",{attrs:{title:"Total credited",ndays:t.activebtn,data:t.dashboardsummaries.totalCredited}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-card",[n("v-container",{staticClass:"lighter-background alternate-card",attrs:{fluid:""}},[n("v-dialog",{attrs:{width:"80%",persistent:"",transition:"scale-transition",origin:"center center",fullscreen:t.$vuetify.breakpoint.xsOnly},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{flat:""}},[n("v-container",[n("v-form",{staticClass:"py-3 px-4"},[n("div",{staticClass:"spacers py-2 px-4"},[n("span",{staticClass:"text-h5"},[t._v(" Viewing Order ")]),t._v(" "),n("div",[n("v-btn",{staticClass:"ml-2",attrs:{title:"Close",fab:"",elevation:"0",small:""},on:{click:t.close}},[t._v("\n                                  x\n                                ")])],1)]),t._v(" "),n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[t.editedItem?n("v-col",{staticClass:"alternate-card",attrs:{cols:"12",sm:"6",md:"6"}},[n("h5",{staticClass:"text-decoration-underline"},[t._v("\n                                      Order Info\n                                    ")]),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                            "+t._s(t.editedItem.createdDate))]),t._v(" "),n("v-list-item-subtitle",[t._v("Created on")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                            "+t._s(t.editedItem.grandTotal))]),t._v(" "),n("v-list-item-subtitle",[t._v("Total")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",["PENDING"==t.editedItem.status?n("v-badge",{attrs:{dot:"",inline:"",left:"",color:"#FFFF00"}},[t._v("\n                                              "+t._s(t.editedItem.status)+"\n                                            ")]):n("v-badge",{attrs:{dot:"",inline:"",color:"#ed1e65",left:""}},[t._v("\n                                              "+t._s(t.editedItem.status))])],1),t._v(" "),n("v-list-item-subtitle",[t._v("Status")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                            "+t._s(t.editedItem.paymentStatus))]),t._v(" "),n("v-list-item-subtitle",[t._v("Payment\n                                            Status")])],1)],1)],1)],1):t._e(),t._v(" "),t.editedItem.store?n("v-col",{staticClass:"alternate-card",attrs:{cols:"12",sm:"6",md:"6"}},[n("h5",{staticClass:"text-decoration-underline"},[t._v("\n                                      Store Info\n                                    ")]),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                            "+t._s(t.editedItem.store.name))]),t._v(" "),n("v-list-item-subtitle",[t._v("Owner")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                            "+t._s(t.editedItem.store.address))]),t._v(" "),n("v-list-item-subtitle",[t._v("Address")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                            "+t._s(t.editedItem.store.createdDate))]),t._v(" "),n("v-list-item-subtitle",[t._v("Created On")])],1)],1)],1)],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("h4",{staticClass:"\n                                        text-decoration-underline\n                                        bold\n                                        text-muted\n                                      "},[t._v("\n                                      Items in this Order\n                                    ")]),t._v(" "),n("br"),t._v(" "),n("v-row",t._l(t.products,(function(e,r){return n("v-col",{key:r,staticClass:"alternate-card-1",attrs:{cols:"12",sm:"6",md:"4"}},[n("h6",{staticClass:"text-center"},[t._v("\n                                          Product "+t._s(r+1)+"\n                                        ")]),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                                "+t._s(e.productName))]),t._v(" "),n("v-list-item-subtitle",[t._v("Product\n                                                name")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                                "+t._s(e.totalPrice))]),t._v(" "),n("v-list-item-subtitle",[t._v("Total\n                                                Price")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[n("b",[t._v(t._s(e.count))])]),t._v(" "),n("v-list-item-subtitle",[t._v("Number of Items\n                                                (Count)")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                                "+t._s(e.unitPrice))]),t._v(" "),n("v-list-item-subtitle",[t._v("Unit\n                                                Price")])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                                                "+t._s(e.discountAmount))]),t._v(" "),n("v-list-item-subtitle",[t._v("Discount\n                                                Amount")])],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("div",[n("v-row",[n("v-col",{staticClass:"px-3",attrs:{cols:"7",sm:"7",md:"4"}},[n("p",{staticClass:"text-h6"},[t._v("Daily Sales")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"4",sm:"3",md:"2"}},[n("v-btn",{staticClass:"mt-1",attrs:{to:"/orders","x-small":"",fab:"",outlined:"",color:"primary",elevation:"0"}},[n("v-icon",{attrs:{color:"black"}},[t._v(" mdi-cog")])],1)],1)],1),t._v(" "),n("v-data-table",{staticClass:"py-4",attrs:{headers:t.headers,items:t.allOrders,"items-per-page":t.itemsperpage,"footer-props":t.footerprops,"header-props":t.headerprops},on:{"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.status",fn:function(e){var r=e.item;return["PENDING"==r.status?n("v-badge",{attrs:{dot:"",inline:"",left:"",color:"#FF0000"}},[t._v("\n                            "+t._s(t.upperCaseFirstLetter(r.status))+"\n                          ")]):n("v-badge",{attrs:{dot:"",inline:"",color:"#00FF00",left:""}},[t._v("\n                            "+t._s(t.upperCaseFirstLetter(r.status)))])]}},{key:"item.id",fn:function(e){var r=e.item;return[n("span",[t._v(" "+t._s(t.truncate(r.id,10))+" ")])]}},{key:"item.items",fn:function(e){var r=e.item;return[n("span",[t._v(" "+t._s(t.orders(r.items))+" ")])]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){return t.editItem(r)}}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[t._v("mdi-eye ")]),t._v("\n                            View\n                          ")],1)]}}],null,!0)})],1)],1)],1)],1)],1)],1):t._e(),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"3"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("card-two",{attrs:{type:"list",data:t.tableData}})],1),t._v(" "),n("br"),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("card-two",{attrs:{type:"chart",data:t.tableData}})],1)],1)],1)],1)],1),t._v(" "),n("v-tab-item",[n("h2",{staticClass:"font-weight-bold"},[t._v("Stats")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBadge:x.a,VBtn:w.a,VCard:C.a,VCardText:O.b,VCol:k.a,VContainer:I.a,VDataTable:D.a,VDatePicker:S.a,VDialog:j.a,VForm:T.a,VIcon:V.a,VList:$.a,VListItem:A.a,VListItemContent:P.a,VListItemSubtitle:P.b,VListItemTitle:P.c,VMenu:E.a,VRow:B.a,VSelect:F.a,VSpacer:N.a,VTab:z.a,VTabItem:L.a,VTabs:M.a,VTabsItems:Z.a,VTabsSlider:R.a})},1181:function(t,e,n){"use strict";n.r(e);var r={components:{"dashboard-component":n(1112).default},data:function(){return{}}},o=n(153),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("dashboard-component")}),[],!1,null,null,null);e.default=component.exports}}]);