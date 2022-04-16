(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1181:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(12),r(27),r(14),r(28);var n=r(7),o=r(1),l=(r(59),r(67),r(68),r(177),r(8),r(86),r(135),r(178)),d=r(1018);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={title:"Distributors",data:function(){return{item:1,alert:!0,edits:!0,show:!1,headers:[{text:"Distributor Name",align:"start",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Supplier Name",value:"supplierName"},{text:"District",value:"zone.district"},{text:"Size",value:"size"},{text:"Status",value:"status"},{text:"Created Date",value:"createdDate"},{text:"Sales Persons",value:"salesPersons"},{text:"Actions",value:"actions",sortable:!1,class:"thright",align:"right"}],tab:null,search:"",pageCount:0,valid:!0,mdiEye:d.h,mdiChevronDoubleDown:d.e,mdiMagnify:d.j,dialog:!1,supplier:"",editedItem:{id:"",name:"",address:"",supplierId:"",userId:"",size:"",parentCategory:"",categories:[],zoneIds:[],minimumAmountPerOrder:0},defaultItem:{id:"",name:"",address:"",userId:"",supplierId:"",categories:[],parentCategory:"",size:"",zoneIds:[],minimumAmountPerOrder:0},size:["Large Size","Mid Size","Small Size"],country:"",region:"",district:"",regions:[],districts:[],zones:[],category:"",editedIndex:-1,way:"deleteDistributor"}},created:function(){this.fetchDistributors(),this.fetchCountries(),this.fetchSuppliers(),this.fetchItems(),this.$store.dispatch("fetchCategoriesForm")},computed:m(m({},Object(l.c)(["allDistributors","suppliers","getDistributors","categories"])),{},{formTitle:function(){return-1===this.editedIndex?"Create new distibutor":"".concat(this.edit?"Edit":"View"," ").concat(this.editedItem.name)},perpage:function(){var e=parseInt(this.itemsperpage,10);return isNaN(e)?20:e},text:function(){return"ACTIVE"==this.editedItem.status?"Deactivate ":"Activate "},user:function(){var e=this;if(-1==this.editedIndex)return""!=this.editedItem.userId?this.getDistributors.find((function(t){return t.id==e.editedItem.userId})):{phone:"",email:""};if(null!=this.editedItem.userId){var t=this.getDistributors.find((function(t){return t.id==e.editedItem.userId}));return null!=t?t:{phone:"",email:""}}return this.getDistributors.length>0?this.getDistributors.find((function(t){return t.phone===e.editedItem.phone})):{phone:"",email:""}},getCountries:function(){if(void 0!==this.countries)return this.countries.map((function(e){return e.name}))},getRegion:function(){if(void 0!==this.regions)return this.regions.map((function(e){return e.name}))},getDistrict:function(){if(void 0!==this.districts)return this.districts.map((function(e){return e.name}))},getZone:function(){if(void 0!==this.zones)return this.zones.map((function(e){return{id:e.id,name:e.name}}))},subcat:function(){var e=this;if(""!=this.editedItem.parentCategory&&null!=this.editedItem.parentCategory){var t=this.categories.find((function(t){return t.id===e.editedItem.parentCategory}));return null==t?void 0:t.subCategories}}}),methods:m(m({},Object(l.b)(["addDistributor","fetchDistributors","deleteDistributor","editDistributor","fetchUserRole","fetchCategoriesForm","fetchSuppliers"])),{},{fetchItems:function(){this.fetchUserRole("DISTRIBUTOR")},zone:function(e){return e&&void 0!==e?e.toString():""},fetchCountries:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$api.$get("/zone/get");case 2:r=t.sent,e.countries=r;case 4:case"end":return t.stop()}}),t)})))()},fetchRegion:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.country){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.country);case 3:r=t.sent,e.regions=r;case 5:case"end":return t.stop()}}),t)})))()},fetchDistrict:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.region){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.country+"&region="+e.region);case 3:r=t.sent,e.districts=r;case 5:case"end":return t.stop()}}),t)})))()},fetchZones:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.district){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.country+"&region="+e.region+"&district="+e.district);case 3:r=t.sent,e.zones=r;case 5:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.allDistributors.indexOf(e),this.editedItem=Object.assign({},e),this.country=this.editedItem.zone.country,this.region=this.editedItem.zone.region,this.district=this.editedItem.zone.district,this.editedItem.zoneIds=this.editedItem.zones.map((function(e){return e.id})),this.fetchRegion(),this.fetchDistrict(),this.fetchZones(),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.edit=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.editedIndex>-1?this.editDistributor(this.editedItem).then((function(){e.fetchDistributors()})):this.addDistributor(this.editedItem).then((function(){e.fetchDistributors()})),this.close()}}),watch:{dialog:function(e){e||this.close()}}},h=r(153),f=r(228),D=r.n(f),I=r(994),x=r(1022),_=r(997),y=r(996),C=r(432),k=r(986),w=r(995),S=r(1174),z=r(1011),O=r(425),$=r(1019),j=r(249),R=r(1006),V=r(977),P=r(992),F=r(227),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8"},[r("div",[r("v-row",[r("summary-card",{attrs:{command:"distributor",property:"Distributors"}})],1)],1),e._v(" "),e.categories.length<0?r("skeleton-table-loader"):r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"lighter-background"},[r("v-data-table",{staticClass:"alternate-card py-4",attrs:{headers:e.headers,items:e.allDistributors,search:e.search,"items-per-page":e.itemsperpage,"footer-props":e.footerprops,"header-props":{sortIcon:e.mdiChevronDoubleDown}},on:{"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"12",md:"2"}},[r("p",{staticClass:"text-h6"},[e._v("\n                    "+e._s(e.$t("label.title.distributors"))+"\n                  ")])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"d-flex justify-end mr-2",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":e.mdiMagnify,dense:"","hide-details":"",color:"#ed1e65",outlined:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-dialog",{attrs:{width:e.isLaptop?"50%":"100%",transition:"scale-transition",origin:"center center"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({class:e.isTablet?"white--text ":"mt-2 white--text ",attrs:{color:"primary",block:e.$vuetify.breakpoint.smAndDown},on:{click:function(t){e.edit=!0}}},"v-btn",o,!1),n),[r("v-icon",{attrs:{small:""}},[e._v("mdi-plus")]),e._v(" \n                         "+e._s(e.$t("label.button.adddistributor"))+"\n                      ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-container",[r("v-form",{staticClass:"py-3 px-4",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("span",{staticClass:"text-h6"},[e._v(" "+e._s(e.formTitle))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?r("v-divider",{staticClass:"my-3"}):e._e()],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"d-flex mt-md-0 justify-sm-start justify-md-end",attrs:{cols:"12",sm:"12",md:"4"}},[r("v-btn",{staticClass:"line-background text-white mx-1",attrs:{small:"",color:"primary"},on:{click:function(t){e.edit=!e.edit}}},[e._v("\n                               "+e._s(e.edit?e.$t("label.button.view"):e.$t("label.button.edit"))+"\n                              ")]),e._v(" "),-1==e.editedIndex?r("v-btn",{staticClass:"border-theme outlined mx-1",attrs:{small:"",outlined:""},on:{click:e.close}},[e._v("\n                                 "+e._s(e.$t("label.button.cancel"))+"\n                              ")]):e._e(),e._v(" "),e.editedIndex>-1?r("delete",{staticClass:"mx-1",attrs:{form:e.editedItem.id,text:e.text+"Distributor",methods:e.way,action:"fetchDistributors"}}):e._e(),e._v(" "),r("v-btn",{staticClass:"line-background text-white mx-1",attrs:{disabled:!e.valid,small:"",type:"submit"}},[e._v("\n                                 "+e._s(e.$t("label.button.save"))+"\n                              ")]),e._v(" "),e.editedIndex>-1?r("v-btn",{staticClass:"mr-2",attrs:{title:"Close",color:"primary",outlined:"",small:""},on:{click:e.close}},[e._v("\n                              "+e._s(e.$t("label.button.cancel"))+"\n                            ")]):e._e()],1)],1),e._v(" "),r("v-card-text",{staticClass:"px-0"},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[r("v-text-field",{attrs:{placeholder:"Enter Distributor's Name",label:"Distributor Name",outlined:"",dense:"",color:"#C7D3DD",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-select",{attrs:{items:e.size,outlined:"","menu-props":"auto",placeholder:"Select size",label:"Select size","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",clearable:"",dense:"",color:"#C7D3DD","single-line":""},model:{value:e.editedItem.size,callback:function(t){e.$set(e.editedItem,"size",t)},expression:"editedItem.size"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-select",{attrs:{items:e.suppliers,"menu-props":"auto","item-text":"name","item-value":"id",label:"Select supplier",placeholder:"Select Supplier","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},model:{value:e.editedItem.supplierId,callback:function(t){e.$set(e.editedItem,"supplierId",t)},expression:"editedItem.supplierId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.categories,"menu-props":"auto","item-text":"name",outlined:"",dense:"",color:"#C7D3DD","item-value":"id",label:"Select Category",clearable:"",placeholder:"Select category","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"","single-line":""},model:{value:e.editedItem.parentCategory,callback:function(t){e.$set(e.editedItem,"parentCategory",t)},expression:"editedItem.parentCategory"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{items:e.subcat,"menu-props":"auto","item-text":"name",outlined:"",dense:"",disabled:!e.edit,color:"#C7D3DD","item-value":"id",label:"Select Sub category",placeholder:"Select Sub Category","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"",multiple:"","single-line":""},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item,o=t.index;return[0===o?r("v-chip",[r("span",[e._v(e._s(n.name))])]):e._e(),e._v(" "),1===o?r("span",{staticClass:"grey--text  "},[e._v("\n                                        (+"+e._s(e.editedItem.categories.length-1)+"\n                                        others)\n                                      ")]):e._e()]}}]),model:{value:e.editedItem.categories,callback:function(t){e.$set(e.editedItem,"categories",t)},expression:"editedItem.categories"}})],1),e._v(" "),r("br"),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-select",{attrs:{items:e.countries,"item-text":"name","item-value":"name","menu-props":"auto",label:"Select country",placeholder:"Select Country","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",clearable:"",dense:"",color:"#C7D3DD","single-line":""},on:{change:e.fetchRegion},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-select",{attrs:{items:e.getRegion,"menu-props":"auto",label:"Select Region",placeholder:"Select Region","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",clearable:"",dense:"",color:"#C7D3DD","single-line":""},on:{change:e.fetchDistrict},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-select",{attrs:{items:e.getDistrict,"menu-props":"auto",label:"Select District",placeholder:"Select District","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},on:{change:e.fetchZones},model:{value:e.district,callback:function(t){e.district=t},expression:"district"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-select",{attrs:{items:e.getZone,"menu-props":"auto",label:"Choose Zone",placeholder:"Choose Zone","hide-details":"",multiple:"","item-text":"name","item-value":"id",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item,o=t.index;return[0===o?r("v-chip",[r("span",[e._v(e._s(n.name))])]):e._e(),e._v(" "),1===o?r("span",{staticClass:"grey--text  "},[e._v("\n                                        (+"+e._s(e.editedItem.zoneIds.length-1)+"\n                                        others)\n                                      ")]):e._e()]}}]),model:{value:e.editedItem.zoneIds,callback:function(t){e.$set(e.editedItem,"zoneIds",t)},expression:"editedItem.zoneIds"}})],1),e._v(" "),r("br"),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-select",{attrs:{items:e.getDistributors,"menu-props":"auto","item-text":"name","item-value":"id",label:"Distributor's Name",placeholder:"Select Distributor","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},model:{value:e.editedItem.userId,callback:function(t){e.$set(e.editedItem,"userId",t)},expression:"editedItem.userId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-text-field",{attrs:{label:"Phone Number",placeholder:"Phone Number",readonly:"",outlined:"",dense:"",color:"#C7D3DD"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-text-field",{attrs:{label:"Email address",placeholder:"Email Address",readonly:"",outlined:"",dense:"",color:"#C7D3DD"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"4",md:"4"}},[r("v-text-field",{attrs:{label:"Minimum amount",placeholder:"Minimum Amount per order",outlined:"",dense:"",color:"#C7D3DD"},model:{value:e.editedItem.minimumAmountPerOrder,callback:function(t){e.$set(e.editedItem,"minimumAmountPerOrder",t)},expression:"editedItem.minimumAmountPerOrder"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:"primary",small:""},on:{click:function(t){return e.editItem(n)}}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[e._v(" mdi-eye ")]),e._v("\n            "+e._s(e.$t("label.button.view"))+"\n          ")],1)]}},{key:"item.status",fn:function(t){var n=t.item;return["INACTIVE"==n.status?r("v-badge",{attrs:{dot:"",inline:"",left:"",color:"#FF0000"}},[e._v("\n            "+e._s(n.status)+"\n          ")]):r("v-badge",{attrs:{dot:"",inline:"",color:"#00ff00",left:""}},[e._v("\n            "+e._s(n.status))])]}},{key:"item.zones",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(e.zone(r.zones))+"\n        ")]}}],null,!0)})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;D()(component,{VBadge:I.a,VBtn:x.a,VCard:_.a,VCardText:y.b,VChip:C.a,VCol:k.a,VContainer:w.a,VDataTable:S.a,VDialog:z.a,VDivider:O.a,VForm:$.a,VIcon:j.a,VRow:R.a,VSelect:V.a,VSpacer:P.a,VTextField:F.a})}}]);