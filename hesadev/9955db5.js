(window.webpackJsonp=window.webpackJsonp||[]).push([[51,33],{1004:function(t,e,n){var content=n(1005);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("2065bca8",content,!0,{sourceMap:!1})},1005:function(t,e,n){var r=n(38)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},1007:function(t,e,n){"use strict";n(19),n(12),n(27),n(28);var r=n(1),o=(n(8),n(88),n(132),n(67),n(22),n(54),n(133),n(440),n(77),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(89),n(14),n(454),n(6)),l=n(98),c=n(3);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(c.I)(r)]=e(),n}),{})}var y=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:y}})),_=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:_}})),k=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},O=m("alignContent",(function(){return{type:String,default:null,validator:k}})),C={align:Object.keys(x),justify:Object.keys(w),alignContent:Object.keys(O)},j={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=j[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:_}},w),{},{alignContent:{type:String,default:null,validator:k}},O),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var d in n)c+=String(n[d]);var v=$.get(c);return v||function(){var t,e;for(e in v=[],C)C[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(c,v)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:v}),o)}})},1012:function(t,e,n){"use strict";var r=n(99),o=n(1),l=(n(37),n(154),n(114),n(88),n(132),n(8),n(178),n(22),n(19),n(12),n(27),n(14),n(28),n(1004),n(991)),c=n(282),d=n(230),v=n(458),f=n(459),h=n(456),m=n(457),y=n(229),x=n(20),_=n(30),w=n(3);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(x.a)(d.a,v.a,f.a,h.a,m.a,c.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(_.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.z.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:O({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=O(O({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1092:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(59),{props:{returned:{type:Object,default:null}},data:function(){return{dialog:!1,stock:null,desserts:[]}},created:function(){this.initialize(),this._get_warehouse_return_stock()},methods:{initialize:function(){for(var t={product:"Unga Poa 50",type:"Bag",quantity:"10",expiredate:"12 DEC 2022"},i=0;i<11;i++)this.desserts.push(t)},_get_warehouse_return_stock:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("stock/view_warehouse_return",t.page,{params:{id:t.returned.id}}).then((function(e){t.stock=e.stocks})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},close:function(){this.targetdialog=!1}}}),l=n(153),c=n(228),d=n.n(c),v=n(1024),f=n(987),h=n(422),m=n(249),y=n(1007),x=n(1140),_=n(131),w=n(439),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-11 px-10"},[n("v-row",[n("v-col",{staticClass:"d-flex justify-space-between",attrs:{cols:"12"}}),t._v(" "),n("v-col",{staticClass:"mt-12",attrs:{cols:"12"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"4",md:"6"}},[n("v-simple-table",{attrs:{dense:""}},[n("tbody",[n("tr",[n("td",{staticClass:"text-start"},[t._v("Sales person")]),t._v(" "),n("td",{staticClass:"text-start"},[t._v(t._s(t.returned.salesPersonName))])]),n("tr",[n("td",{staticClass:"text-start"},[t._v("Customer")]),t._v(" "),n("td",{staticClass:"text-start"},[t._v(t._s(t.returned.distributorName))])]),t._v(" "),n("tr",[n("td",{staticClass:"text-start"},[t._v("Confirmation Status")]),t._v(" "),n("td",{staticClass:"text-start success--text font-weight-bold"},[t._v(t._s(t.returned.confirmed?"Confirmed":"Not Confirmed"))])]),t._v(" "),n("tr",[n("td",{staticClass:"text-start"},[t._v("Confirmed by")]),t._v(" "),n("td",{staticClass:"text-start font-weight-bold"},[t._v(t._s(t.returned.confirmedBy))])])])])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}}),t._v(" "),n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"2"}},[n("v-btn",{staticClass:"primary  ",staticStyle:{"text-transform":"none !important"},on:{click:function(e){return e.stopPropagation(),t.$store.dispatch("_downloan_report","report")}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-arrow-down-thin")]),t._v("\n                    "+t._s(t.$t("label.button.downloadreport")))],1)],1)],1)],1),t._v(" "),n("v-col",{staticClass:"mt-16",attrs:{cols:"12"}},[null==t.stock?n("skeleton-datepicker-loader"):n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center black--text font-weight-bold text-uppercase"},[t._v("\n          Product\n        ")]),t._v(" "),n("th",{staticClass:"text-center black--text font-weight-bold text-uppercase"},[t._v("\n          Quantity\n        ")]),t._v(" "),n("th",{staticClass:"text-center black--text font-weight-bold text-uppercase"},[t._v("\n          Type\n        ")]),t._v(" "),n("th",{staticClass:"text-center black--text font-weight-bold text-uppercase"},[t._v("\n          Expire date\n        ")])])]),t._v(" "),n("tbody",t._l(t.stock,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"text-center"},[t._v(t._s(e.productName))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.quantity))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.unit))]),t._v(" "),n("td",{staticClass:"text-center"},[t._v(t._s(e.productExpireDate))])])})),0)]},proxy:!0},{key:"top",fn:function(){return[n("v-toolbar",{staticClass:"list",attrs:{flat:""}},[n("v-toolbar-title",[t._v("STOCK DETAILS")])],1)]},proxy:!0}])}),t._v(" "),n("v-divider")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCol:f.a,VDivider:h.a,VIcon:m.a,VRow:y.a,VSimpleTable:x.a,VToolbar:_.a,VToolbarTitle:w.a})},1119:function(t,e,n){"use strict";n.r(e);var r=n(1092),o={props:{returns:{type:Array,default:null}},title:"Sales Activities orders",components:{"dialog-view-warehouse-return":r.default},data:function(){return{tab:null,dialog:!1,dialogDelete:!1,search:null,targetdialog:!1,headers:[{text:"Sales person",value:"salesPersonName",class:"text-uppercase"},{text:"Distributor",value:"distributorName",class:"text-uppercase"},{text:"Distributor Number",value:"distributorPhone",class:"text-uppercase"},{text:"When",value:"createdDate",class:"text-uppercase"},{text:"Action",value:"actions",class:"text-uppercase thright",sortable:!1,align:"right"}],desserts:[],ret:null,editedIndex:-1}},created:function(){},methods:{viewWareHouserReturn:function(rt){this.ret=rt,this.dialog=!0},close:function(){this.targetdialog=!1}},computed:{}},l=n(153),c=n(228),d=n.n(c),v=n(1024),f=n(428),h=n(987),m=n(996),y=n(1172),x=n(1012),_=n(249),w=n(427),k=n(1007),O=n(993),C=n(227),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[null==t.returns?n("skeleton-table-loader"):n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.returns,"sort-by":"calories",search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"mt-4 pt-2 ml-2",attrs:{"no-gutters":""}},[t.$vuetify.breakpoint.mdAndUp?n("v-col",{attrs:{cols:"12",sm:"12",md:"2"}},[n("v-text-field",{attrs:{type:"number",label:"Entries",dense:"",outlined:"","single-line":"","hide-details":""},model:{value:t.itemsperpage,callback:function(e){t.itemsperpage=e},expression:"itemsperpage"}}),t._v("  \n            ")],1):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"d-flex justify-center mt-md-0 mt-sm-5",attrs:{cols:"12",sm:"12",md:"2"}},[n("v-btn",{staticClass:"primary  ",staticStyle:{"text-transform":"none !important"},attrs:{medium:"",block:t.$vuetify.breakpoint.smAndDown,elevation:"0"},on:{click:function(e){return e.stopPropagation(),t.$store.dispatch("_downloan_report","report")}}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v("mdi-arrow-down-thin")]),t._v("\n                "+t._s(t.$t("label.button.downloadreport")))],1)],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-center mt-md-0 mt-sm-5",attrs:{cols:"12",sm:"12",md:"1"}},[t._e()],1),t._v(" "),n("v-col",{staticClass:"d-flex justify-end mt-md-0 mt-sm-5",attrs:{cols:"12",sm:"12",md:"2"}},[n("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":"mdi-magnify",dense:"","hide-details":"",color:"#ed1e65",outlined:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(e){return t.viewWareHouserReturn(r)}}},[t._v("\n          "+t._s(t.$t("label.button.view")))])]}},{key:"item.return",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.productName)+" "+t._s(n.quantity)+" "+t._s(n.unit)+"\n      ")]}},{key:"item.reason",fn:function(e){var r=e.item;return[n("v-chip",{staticClass:"text-lowercase",attrs:{raised:"",outlined:"",dark:"",small:"",label:"",color:"orange accent-4"}},[t._v("\n          "+t._s(r.reason)+"\n        ")])]}},{key:"no-data",fn:function(){return[n("p",[t._v(t._s(t.$t("label.message.nodata")))])]},proxy:!0}],null,!0)}),t._v(" "),n("v-overlay",{attrs:{value:t.dialog}},[n("v-dialog",{attrs:{"content-class":"tile","hide-overlay":"",width:"50%","overlay-color":"blue",fullscreen:"",transition:"dialog-top-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("dialog-view-warehouse-return",{attrs:{returned:t.ret}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VChip:f.a,VCol:h.a,VContainer:m.a,VDataTable:y.a,VDialog:x.a,VIcon:_.a,VOverlay:w.a,VRow:k.a,VSpacer:O.a,VTextField:C.a})}}]);