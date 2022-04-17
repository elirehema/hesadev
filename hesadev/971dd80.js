(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1190:function(e,t,n){"use strict";n.r(t);n(20),n(19),n(12),n(8),n(27),n(14),n(28);var r=n(7),o=n(1),d=(n(59),n(67),n(68),n(86),n(177));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={title:"Zones",data:function(){return{item:1,alert:!0,headers:[{text:"Country",align:"start",value:"country"},{text:"Region",value:"region"},{text:"District",value:"district"},{text:"Zone",value:"name"},{text:"Actions",value:"actions",sortable:!1,class:"thright",align:"right"}],tab:null,search:"",pageCount:0,valid:!0,dialog:!1,zone:"",editedItem:{name:"",country:"",district:"",region:""},defaultItem:{name:"",country:"",district:"",region:""},regions:[],districts:[],editedIndex:-1,way:"deleteZone"}},created:function(){this.fetchZones(),this.$store.dispatch("_getcountries")},computed:c(c({},Object(d.c)(["allZones"])),{},{formTitle:function(){return-1===this.editedIndex?"Add new zone":"".concat(this.edit?"Edit":"View"," ").concat(this.editedItem.name," zone")},perpage:function(){var e=parseInt(this.itemsperpage,10);return isNaN(e)?20:e},getRegion:function(){if(this.regions.length>0)return this.regions.map((function(e){return e.name}))},getDistrict:function(){if(this.districts.length>0)return this.districts.map((function(e){return e.name}))}}),methods:c(c({},Object(d.b)(["addZone","fetchZones","deleteZone","editZone"])),{},{fetchRegion:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.country){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.editedItem.country);case 3:n=t.sent,e.regions=n;case 5:case"end":return t.stop()}}),t)})))()},fetchDistrict:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.region){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.editedItem.country+"&region="+e.editedItem.region);case 3:n=t.sent,e.districts=n;case 5:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.allZones.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.edit=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.editedItem.index=this.editedIndex,this.editZone(this.editedItem)):this.addZone(this.editedItem),this.close()}}),watch:{dialog:function(e){e||this.close()}}},v=n(153),f=n(228),h=n.n(f),x=n(1022),y=n(996),I=n(995),_=n(985),w=n(994),D=n(1170),k=n(1010),C=n(424),O=n(1028),$=n(249),j=n(1005),Z=n(976),V=n(991),R=n(227),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-8"},[n("div",[n("v-row",[n("summary-card",{attrs:{command:"zone",property:"Zones"}})],1)],1),e._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"lighter-background"},[n("v-data-table",{attrs:{headers:e.headers,items:e.allZones,search:e.search,"items-per-page":e.itemsperpage,"footer-props":e.footerprops,"header-props":e.headerprops,"mobile-breakpoint":e.mbp},on:{"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"12",md:"2"}},[n("p",{staticClass:"text-h6"},[e._v(e._s(e.$t("label.title.zones")))])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"d-flex justify-end mr-2",attrs:{cols:"12",sm:"12",md:"2"}},[n("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":e.mdiMagnify,dense:"","hide-details":"",color:"#ed1e65",outlined:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),n("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12",sm:"12",md:"2"}},[n("v-dialog",{attrs:{width:e.isLaptop?"50%":"100%",transition:"scale-transition",origin:"center center"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({class:e.isTablet?"white--text":"mt-2 white--text",attrs:{color:"primary",dark:"",block:e.$vuetify.breakpoint.smAndDown,elevation:"0"},on:{click:function(t){e.edit=!0}}},"v-btn",o,!1),r),[e._v("\n                        + Add Zone\n                      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-container",[n("v-form",{staticClass:"py-3 px-4",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("div",{staticClass:"py-sm-0 py-md-2 px-sm-0 px-md-4"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4"}},[n("span",{staticClass:"text-h6"},[e._v(" "+e._s(e.formTitle))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?n("v-divider",{staticClass:"my-3"}):e._e()],1),e._v(" "),n("v-col",{staticClass:"d-md-flex d-flex justify-md-end align-sm-start",attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[n("v-btn",{staticClass:"line-background text-white mx-1",attrs:{small:"",color:"primary"},on:{click:function(t){e.edit=!e.edit}}},[e._v("\n                                 "+e._s(e.edit?e.$t("label.button.view"):e.$t("label.button.edit"))+"\n                                ")]),e._v(" "),-1==e.editedIndex?n("v-btn",{staticClass:"border-theme outlined mx-1",attrs:{outlined:"",small:""},on:{click:e.close}},[e._v("\n                                "+e._s(e.$t("label.button.cancel"))+"\n                              ")]):e._e(),e._v(" "),e.editedIndex>-1?n("delete",{staticClass:"mx-1",attrs:{form:e.editedItem.id,text:"Delete Zone",methods:e.way}}):e._e(),e._v(" "),n("v-btn",{staticClass:"line-background text-white mx-1",attrs:{disabled:!e.valid,small:"",type:"submit"}},[e._v("\n                                "+e._s(e.$t("label.button.save"))+"\n                              ")]),e._v(" "),e.editedIndex>-1?n("v-btn",{staticClass:"mx-1",attrs:{title:"Close",outlined:"",color:"primary",small:""},on:{click:e.close}},[e._v("\n                                "+e._s(e.$t("label.button.cancel"))+"\n                              ")]):e._e()],1)],1)],1),e._v(" "),n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[-1==e.editedIndex?n("v-col",{attrs:{cols:"12",sm:"5",md:"5"}},[n("v-select",{attrs:{items:e.countries,"menu-props":"auto",label:"Select country",placeholder:"Select country","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,"item-text":"name","item-value":"name",required:"",clearable:"",dense:"",color:"#C7D3DD",outlined:"","single-line":""},on:{change:e.fetchRegion},model:{value:e.editedItem.country,callback:function(t){e.$set(e.editedItem,"country",t)},expression:"editedItem.country"}})],1):n("v-col",{attrs:{cols:"12",sm:"5",md:"5"}},[n("v-text-field",{attrs:{label:"Country",readonly:"",color:"#C7D3DD",outlined:"",dense:""},model:{value:e.editedItem.country,callback:function(t){e.$set(e.editedItem,"country",t)},expression:"editedItem.country"}})],1),e._v(" "),-1==e.editedIndex?n("v-col",{attrs:{cols:"12",sm:"7",md:"7"}},[n("v-select",{attrs:{items:e.getRegion,"menu-props":"auto",label:"Region",placeholder:"Select region","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",clearable:"",outlined:"",color:"#C7D3DD",dense:"","single-line":""},on:{change:e.fetchDistrict},model:{value:e.editedItem.region,callback:function(t){e.$set(e.editedItem,"region",t)},expression:"editedItem.region"}})],1):n("v-col",{attrs:{cols:"12",sm:"7",md:"7"}},[n("v-text-field",{attrs:{label:"Region",readonly:"",color:"#C7D3DD",outlined:"",dense:""},model:{value:e.editedItem.region,callback:function(t){e.$set(e.editedItem,"region",t)},expression:"editedItem.region"}})],1),e._v(" "),-1==e.editedIndex?n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-select",{attrs:{items:e.getDistrict,"menu-props":"auto",label:"Select district",placeholder:"Select district","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},model:{value:e.editedItem.district,callback:function(t){e.$set(e.editedItem,"district",t)},expression:"editedItem.district"}})],1):n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"District",readonly:"",color:"#C7D3DD",rules:[function(e){return!!e||"Field is required"}],required:"",outlined:"",dense:""},model:{value:e.editedItem.district,callback:function(t){e.$set(e.editedItem,"district",t)},expression:"editedItem.district"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Zone",placeholder:"Enter Zone Name",outlined:"",dense:"",color:"#ed1e65",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:"primary",small:""},on:{click:function(t){return e.editItem(r)}}},[n("v-icon",{staticClass:"pr-1",attrs:{small:""}},[e._v(" mdi-eye ")]),e._v("\n            "+e._s(e.$t("label.button.view"))+"\n          ")],1)]}}],null,!0)})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:x.a,VCard:y.a,VCardText:I.b,VCol:_.a,VContainer:w.a,VDataTable:D.a,VDialog:k.a,VDivider:C.a,VForm:O.a,VIcon:$.a,VRow:j.a,VSelect:Z.a,VSpacer:V.a,VTextField:R.a})}}]);