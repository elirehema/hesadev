(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1175:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(12),r(8),r(27),r(14),r(28);var n=r(1),l=(r(67),r(68),r(111),r(177));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={title:"Sales Person",data:function(){return{item:1,alert:!0,edits:!1,show:!1,headers:[{text:"Name",align:"start",value:"name"},{text:"Phone",value:"phone"},{text:"Email",value:"email"},{text:"Company",value:"company"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1,class:"thright",align:"right"}],tab:null,search:"",pageCount:0,valid:!0,dialog:!1,supplier:"",editedItem:{id:"",distributorId:"",userId:""},defaultItem:{id:"",userId:"",distributorId:""},editedIndex:-1,way:"deleteSeller"}},created:function(){this._fetch_sale_psersons()},computed:d(d({},Object(l.c)(["allSellers","getUsers","getDistributors"])),{},{formTitle:function(){return-1===this.editedIndex?"Create new SalesPerson":"".concat(this.edit?"Modify":"View"," ").concat(this.editedItem.name)},perpage:function(){var e=parseInt(this.itemsperpage,10);return isNaN(e)?20:e}}),methods:d(d({},Object(l.b)(["addSeller","fetchSellers","deleteSeller","editSeller","fetchUserRole"])),{},{fetchItems:function(e){this.fetchUserRole(e)},_fetch_sale_psersons:function(){this.$store.dispatch("fetchSellers")},editItem:function(e){this.editedIndex=this.allSellers.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.edit=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1})),setTimeout((function(){e._fetch_sale_psersons()}),this.delay_seconds)},save:function(){this.editedIndex>-1?(this.editedItem.index=this.editedIndex,this.$store.dispatch("editSeller",this.editedItem)):this.$store.dispatch("addSeller",this.editedItem),this.close()}}),watch:{dialog:function(e){e||this.close()}}},m=r(153),v=r(228),f=r.n(v),h=r(994),_=r(1021),I=r(997),x=r(996),y=r(986),w=r(995),C=r(1172),k=r(1011),S=r(425),O=r(1024),j=r(249),V=r(1006),$=r(977),D=r(992),P=r(227),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8"},[r("div",[r("v-row",[r("summary-card")],1)],1),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"lighter-background"},[r("v-data-table",{staticClass:"alternate-card py-4",attrs:{headers:e.headers,items:e.allSellers,search:e.search,"items-per-page":e.perpage,"hide-default-footer":"","header-props":e.headerprops},on:{"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"12",md:"2"}},[r("p",{staticClass:"text-h6"},[e._v("\n                    "+e._s(e.$t("label.title.salesperson"))+"\n                  ")])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"d-flex justify-end mr-2",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":e.mdiMagnify,dense:"","hide-details":"",color:"#ed1e65",outlined:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-dialog",{attrs:{width:e.isLaptop?"50%":"100%",transition:"scale-transition",origin:"center center"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({class:e.isTablet?"white--text":"mt-2 white--text",attrs:{color:"primary",block:e.$vuetify.breakpoint.smAndDown},on:{click:function(t){e.edit=!0}}},"v-btn",l,!1),n),[e._v("\n                        + "+e._s(e.$t("label.button.addsalesperson"))+"\n                      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-container",[r("v-form",{staticClass:"py-3 px-4",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[r("span",{staticClass:"text-h6"},[e._v(" "+e._s(e.formTitle))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?r("v-divider",{staticClass:"my-3"}):e._e()],1),e._v(" "),r("v-col",{staticClass:"d-md-flex d-flex-sm-wrap justify-end align-sm-start justify-sm-start justify-md-end ",attrs:{cols:"12",sm:"12",md:"6",lg:"6"}},[r("v-btn",{staticClass:"line-background text-white",attrs:{small:"",color:"primary"},on:{click:function(t){e.edit=!e.edit}}},[e._v("\n                                 "+e._s(e.edit?e.$t("label.button.view"):e.$t("label.button.edit"))+"\n                                ")]),e._v(" "),-1==e.editedIndex?r("v-btn",{staticClass:"border-theme outlined mr-3",attrs:{small:""},on:{click:e.close}},[e._v("\n                                "+e._s(e.$t("label.button.cancel"))+"\n                              ")]):e._e(),e._v(" "),e.editedIndex>-1?r("delete",{attrs:{form:e.editedItem.id,text:"Deactivate",methods:e.way}}):e._e(),e._v(" "),r("v-btn",{staticClass:"line-background text-white",attrs:{disabled:!e.valid,small:"",type:"submit"}},[e._v("\n                                "+e._s(e.$t("label.button.save"))+"\n                              ")]),e._v(" "),e.editedIndex>-1?r("v-btn",{staticClass:"mr-2",attrs:{title:"Close",color:"primary",outlined:"",small:""},on:{click:e.close}},[e._v("\n                                "+e._s(e.$t("label.button.cancel"))+"\n                              ")]):e._e()],1)],1),e._v(" "),r("v-card-text",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"},on:{click:function(t){return e.fetchItems("SALES")}}},[r("label",[e._v(" Choose Sales Person ")]),e._v(" "),r("v-select",{attrs:{items:e.getUsers,"menu-props":"auto","item-text":"name","item-value":"id",chips:"",disabled:!e.edit,placeholder:"Choose Sales Person","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"",outlined:"",dense:"",color:"#ed1e65","single-line":""},model:{value:e.editedItem.userId,callback:function(t){e.$set(e.editedItem,"userId",t)},expression:"editedItem.userId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"},on:{click:function(t){return e.fetchItems("DISTRIBUTOR")}}},[r("label",[e._v(" Choose Distributor ")]),e._v(" "),r("v-select",{attrs:{items:e.getDistributors,"menu-props":"auto","item-text":"name","item-value":"id",outlined:"",chips:"",disabled:!e.edit,placeholder:"Choose Distributor","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"",dense:"",color:"#ed1e65","single-line":""},model:{value:e.editedItem.distributorId,callback:function(t){e.$set(e.editedItem,"distributorId",t)},expression:"editedItem.distributorId"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:"primary",small:""},on:{click:function(t){return e.editItem(n)}}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[e._v(" mdi-eye ")]),e._v("\n            "+e._s(e.$t("label.button.view"))+"\n          ")],1)]}},{key:"item.status",fn:function(t){var n=t.item;return[r("v-badge",{attrs:{dot:"",inline:"",left:"",color:"INACTIVE"==n.status?"primary":"#FFFF00"}},[e._v("\n            "+e._s(n.status)+"\n          ")])]}}],null,!0)})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBadge:h.a,VBtn:_.a,VCard:I.a,VCardText:x.b,VCol:y.a,VContainer:w.a,VDataTable:C.a,VDialog:k.a,VDivider:S.a,VForm:O.a,VIcon:j.a,VRow:V.a,VSelect:$.a,VSpacer:D.a,VTextField:P.a})}}]);