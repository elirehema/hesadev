(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1192:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(12),r(27),r(14),r(28);var n=r(7),o=r(1),l=(r(59),r(67),r(68),r(177),r(8),r(86),r(178));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={title:"Supplier",data:function(){return{item:1,alert:!0,edits:!1,show:!1,headers:[{text:"Supplier Name",align:"start",value:"supplierName"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Region",value:"zone.region"},{text:"Size",value:"size"},{text:"Status",value:"status"},{text:"Created Date",value:"createdDate"},{text:"No. Distributors",value:"distributor"},{text:"Actions",value:"actions",sortable:!1,class:"thright",align:"right"}],size:["Large Size","Mid Size","Small Size"],tab:null,search:"",pageCount:0,valid:!0,dialog:!1,supplier:"",editedItem:{name:"",address:"",userId:"",categories:[],zoneId:"",size:"",parentCategory:"",numberOfSalesPerson:""},defaultItem:{name:"",address:"",userId:"",size:"",parentCategory:"",categories:[],zoneId:"",numberOfSalesPerson:""},country:"",region:"",district:"",regions:[],districts:[],zones:[],editedIndex:-1,way:"deleteSupplier"}},created:function(){this.fetchSuppliers(),this.fetchItems(),this.$store.dispatch("_getcountries"),this.$store.dispatch("fetchCategoriesForm")},computed:c(c({},Object(l.c)(["allSuppliers","getUsers","categories"])),{},{formTitle:function(){return-1===this.editedIndex?"Create new supplier":"".concat(this.edit?"Edit ":"View "," supplier ").concat(this.editedItem.name)},perpage:function(){var e=parseInt(this.itemsperpage,10);return isNaN(e)?20:e},text:function(){return"ACTIVE"==this.editedItem.status?"Deactivate ":"Activate "},user:function(){var e=this;return-1==this.editedIndex?""!=this.editedItem.userId?this.getUsers.find((function(t){return t.id==e.editedItem.userId})):{phone:"",email:""}:null!=this.editedItem.userId?this.getUsers.find((function(t){return t.id==e.editedItem.userId})):void 0!==this.getUsers?this.getUsers.find((function(t){return t.phone==e.editedItem.phone})):{phone:"",email:""}},getCountries:function(){if(void 0!==this.countries)return console.log(this.countries),this.countries.map((function(e){return e.name}))},getRegion:function(){if(void 0!==this.regions)return this.regions.map((function(e){return e.name}))},getDistrict:function(){if(void 0!==this.districts)return this.districts.map((function(e){return e.name}))},getZone:function(){if(void 0!==this.zones)return this.zones.map((function(e){return{id:e.id,name:e.name}}))},subcat:function(){var e=this;if(""!=this.editedItem.parentCategory&&null!=this.editedItem.parentCategory)return this.categories.find((function(t){return t.id===e.editedItem.parentCategory})).subCategories}}),methods:c(c({},Object(l.b)(["addSupplier","fetchSuppliers","deleteSupplier","fetchCategoriesForm","editSupplier","fetchUserRole"])),{},{fetchItems:function(){this.fetchUserRole("SUPPLIER")},fetchRegion:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.country){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.country);case 3:r=t.sent,e.regions=r;case 5:case"end":return t.stop()}}),t)})))()},fetchDistrict:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.region){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.country+"&region="+e.region);case 3:r=t.sent,e.districts=r;case 5:case"end":return t.stop()}}),t)})))()},fetchZones:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.district){t.next=5;break}return t.next=3,e.$api.$get("/zone/get?country="+e.country+"&region="+e.region+"&district="+e.district);case 3:r=t.sent,e.zones=r;case 5:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.allSuppliers.indexOf(e),this.editedItem=Object.assign({},e),this.editedItem.name=e.supplierName,this.country=this.editedItem.zone.country,this.region=this.editedItem.zone.region,this.district=this.editedItem.zone.district,this.editedItem.zoneId=this.editedItem.zone.id,this.fetchRegion(),this.fetchDistrict(),this.fetchZones(),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.edit=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.editedIndex>-1?this.editSupplier(this.editedItem).then((function(){e.fetchSuppliers()})):this.addSupplier(this.editedItem).then((function(){e.fetchSuppliers()})),this.close()}}),watch:{dialog:function(e){e||this.close()}}},v=r(153),h=r(228),f=r.n(h),_=r(994),x=r(1022),I=r(997),C=r(996),y=r(432),D=r(986),S=r(995),k=r(1174),w=r(1011),z=r(425),O=r(1019),$=r(249),j=r(1006),P=r(977),V=r(992),R=r(227),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-wrapper pt-8"},[r("div",[r("v-row",[r("summary-card",{attrs:{command:"supplier",property:"Suppliers"}})],1)],1),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"lighter-background"},[r("v-data-table",{staticClass:"alternate-card py-4",attrs:{headers:e.headers,items:e.allSuppliers,search:e.search,"items-per-page":e.itemsperpage,"footer-props":e.footerprops,"header-props":{sortIcon:e.mdi-e.chevron-e.double-e.down}},on:{"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-row",[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"12",md:"2"}},[r("p",{staticClass:"text-h6"},[e._v(e._s(e.$t("label.title.suppliers")))])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"d-flex justify-end mr-2",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":e.mdiMagnify,dense:"","hide-details":"",color:"#ed1e65",outlined:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-dialog",{attrs:{width:e.isLaptop?"50%":"100%",transition:"scale-transition",origin:"center center"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({class:e.isTablet?"white--text":"mt-2 white--text",attrs:{color:"primary",dark:"",block:e.$vuetify.breakpoint.smAndDown,elevation:"0"},on:{click:function(t){e.edit=!0}}},"v-btn",o,!1),n),[e._v("\n                          + Add supplier\n                        ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-container",[r("v-form",{staticClass:"py-3 px-4",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("div",{staticClass:"py-sm-0 py-md-2 px-sm-0 px-md-4"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"4",lg:"4"}},[r("span",{staticClass:"text-h6"},[e._v(" "+e._s(e.formTitle))]),e._v(" "),e.$vuetify.breakpoint.smAndDown?r("v-divider",{staticClass:"my-3"}):e._e()],1),e._v(" "),r("v-col",{staticClass:"d-md-flex d-flex-sm-wrap justify-end align-sm-start justify-sm-start justify-md-end ",attrs:{cols:"12",sm:"12",md:"8",lg:"8"}},[-1==e.editedIndex?r("v-btn",{staticClass:"border-theme outlined mx-1",attrs:{small:""},on:{click:e.close}},[e._v("\n                                   "+e._s(e.$t("label.button.cancel"))+"\n                                ")]):e._e(),e._v(" "),e.editedIndex>-1?r("delete",{staticClass:"mx-1",attrs:{form:e.editedItem.id,text:e.text+"Supplier",methods:e.way,action:"fetchSuppliers"}}):e._e(),e._v(" "),r("v-btn",{staticClass:"line-background text-white mx-1",attrs:{small:"",color:"primary"},on:{click:function(t){e.edit=!e.edit}}},[e._v("\n                               "+e._s(e.edit?e.$t("label.button.view"):e.$t("label.button.edit"))+"\n                              ")]),e._v(" "),r("v-btn",{staticClass:"line-background text-white mx-1",attrs:{disabled:!e.valid||!e.edit,small:"",type:"submit"}},[e._v("\n                                   "+e._s(e.$t("label.button.save"))+"\n                                ")]),e._v(" "),e.editedIndex>-1?r("v-btn",{staticClass:"mx-1",attrs:{title:"Close",outlined:"",color:"primary",small:""},on:{click:e.close}},[e._v("\n                                "+e._s(e.$t("label.button.cancel"))+"\n                              ")]):e._e()],1)],1)],1),e._v(" "),r("v-card-text",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",md:"8"}},[r("label",[e._v(" Supplier's Name ")]),e._v(" "),r("v-text-field",{attrs:{placeholder:"Supplier Name",color:"#C7D3DD",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" Size ")]),e._v(" "),r("v-select",{attrs:{items:e.size,outlined:"","menu-props":"auto",placeholder:"Choose Size","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",dense:"",color:"#C7D3DD","single-line":""},model:{value:e.editedItem.size,callback:function(t){e.$set(e.editedItem,"size",t)},expression:"editedItem.size"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("label",[e._v("Choose Category ")]),e._v(" "),r("v-select",{attrs:{items:e.categories,"menu-props":"auto","item-text":"name",outlined:"",dense:"",disabled:!e.edit,color:"#C7D3DD","item-value":"id",placeholder:"Choose Category","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"","single-line":""},model:{value:e.editedItem.parentCategory,callback:function(t){e.$set(e.editedItem,"parentCategory",t)},expression:"editedItem.parentCategory"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("label",[e._v("Choose Sub Category ")]),e._v(" "),r("v-select",{attrs:{items:e.subcat,"menu-props":"auto","item-text":"name",outlined:"",dense:"",disabled:!e.edit,color:"#C7D3DD","item-value":"id",placeholder:"Choose Sub Category","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"",multiple:"","single-line":""},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item,o=t.index;return[0===o?r("v-chip",[r("span",[e._v(e._s(n.name))])]):e._e(),e._v(" "),1===o?r("span",{staticClass:"grey--text  "},[e._v("\n                                          (+"+e._s(e.editedItem.categories.length-1)+"\n                                          others)\n                                        ")]):e._e()]}}]),model:{value:e.editedItem.categories,callback:function(t){e.$set(e.editedItem,"categories",t)},expression:"editedItem.categories"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" Country ")]),e._v(" "),r("v-select",{attrs:{items:e.countries,"menu-props":"auto","item-text":"name","item-value":"name",placeholder:"Choose Country","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"",dense:"",disabled:!e.edit,color:"#C7D3DD",outlined:"","single-line":""},on:{change:e.fetchRegion},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" Region ")]),e._v(" "),r("v-select",{attrs:{items:e.getRegion,"menu-props":"auto",placeholder:"Choose Region","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",color:"#C7D3DD",dense:"","single-line":""},on:{change:e.fetchDistrict},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" District")]),e._v(" "),r("v-select",{attrs:{items:e.getDistrict,"menu-props":"auto",placeholder:"Choose District","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},on:{change:e.fetchZones},model:{value:e.district,callback:function(t){e.district=t},expression:"district"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("label",[e._v(" Zones")]),e._v(" "),r("v-select",{attrs:{items:e.getZone,"menu-props":"auto",placeholder:"Choose Zone","hide-details":"","item-text":"name","item-value":"id",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",color:"#C7D3DD",dense:"",outlined:"","single-line":""},model:{value:e.editedItem.zoneId,callback:function(t){e.$set(e.editedItem,"zoneId",t)},expression:"editedItem.zoneId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("label",[e._v(" Number of Sales Person ")]),e._v(" "),r("v-text-field",{attrs:{disabled:!e.edit,placeholder:"Sales Person",dense:"",outlined:"",color:"#C7D3DD"},model:{value:e.editedItem.numberOfSalesPerson,callback:function(t){e.$set(e.editedItem,"numberOfSalesPerson",t)},expression:"\n                                        editedItem.numberOfSalesPerson\n                                      "}})],1),e._v(" "),r("br"),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" Supplier's Name")]),e._v(" "),r("v-select",{attrs:{items:e.getUsers,"menu-props":"auto","item-text":"name","item-value":"id",placeholder:"Choose Supplier","hide-details":"",rules:[function(e){return!!e||"Field is required"}],disabled:!e.edit,required:"",outlined:"",dense:"",color:"#C7D3DD","single-line":""},model:{value:e.editedItem.userId,callback:function(t){e.$set(e.editedItem,"userId",t)},expression:"editedItem.userId"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" Phone ")]),e._v(" "),r("v-text-field",{attrs:{placeholder:"Phone Number",dense:"",disabled:"",outlined:"",color:"#C7D3DD"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"4"}},[r("label",[e._v(" Email ")]),e._v(" "),r("v-text-field",{attrs:{placeholder:"Email Address",dense:"",outlined:"",disabled:"",color:"#C7D3DD"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:"primary",small:""},on:{click:function(t){return e.editItem(n)}}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[e._v(" mdi-eye ")]),e._v("\n            "+e._s(e.$t("label.button.view"))+"\n          ")],1)]}},{key:"item.status",fn:function(t){var n=t.item;return["INACTIVE"==n.status?r("v-badge",{attrs:{dot:"",inline:"",left:"",color:"#FF0000"}},[e._v("\n            "+e._s(n.status)+"\n          ")]):r("v-badge",{attrs:{dot:"",inline:"",color:"#00ff00",left:""}},[e._v("\n            "+e._s(n.status))])]}}],null,!0)})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBadge:_.a,VBtn:x.a,VCard:I.a,VCardText:C.b,VChip:y.a,VCol:D.a,VContainer:S.a,VDataTable:k.a,VDialog:w.a,VDivider:z.a,VForm:O.a,VIcon:$.a,VRow:j.a,VSelect:P.a,VSpacer:V.a,VTextField:R.a})}}]);