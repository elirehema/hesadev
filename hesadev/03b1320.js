(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1192:function(e,t,r){"use strict";r.r(t);r(20),r(19),r(12),r(27),r(14),r(28);var n=r(1),l=(r(8),r(466),r(88),r(132),r(134),r(86),r(68),r(53),r(135),r(177));function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={title:"Users",data:function(){return{item:1,alert:!0,edits:!1,show:!1,headers:[{text:"",value:"image"},{text:"First Name",value:"firstname"},{text:"Last Name",value:"lastname"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Roles",value:"roles"},{text:"Status",value:"status"},{text:"Actions",value:"actions",sortable:!1,class:"thright",align:"right"}],tab:null,search:"",pageCount:0,valid:!0,dialog:!1,user:"",editedItem:{firstname:"",lastname:"",email:"",phone:"",roles:"",image:""},defaultItem:{firstname:"",lastname:"",email:"",phone:"",roles:"",image:""},fileName:"",file:"",editedIndex:-1,rules:[function(e){return!e||e.size<2e6||"Avatar size should be less than 2 MB!"}],way:"deleteUser"}},created:function(){this.$store.dispatch("fetchUsers"),this.$store.dispatch("fetchRoles")},computed:d(d({},Object(l.c)(["roles","users"])),{},{formTitle:function(){return-1===this.editedIndex?"Add new user":"Modify ".concat(this.editedItem.firstname+" "+this.editedItem.lastname)},perpage:function(){var e=parseInt(this.itemsperpage,10);return isNaN(e)?20:e}}),methods:d(d({},Object(l.b)(["addUser","fetchUsers","fetchRoles","deleteUser","editUser"])),{},{customSearch:function(e,t,r){return Array.isArray(e)?e.some((function(e){return Object.values(e).some((function(e){return e&&e.toString().toLowerCase().includes(t)}))})):Object.values(r).some((function(e){return e&&e.toString().toLowerCase().includes(t)}))},thisroles:function(e){return e.map((function(e){return e.name}))},previewFiles:function(e){this.fileName="",this.file=e,this.file&&"image"===this.file.type.split("/")[0]?this.fileName=this.file.name:this.fileName="Unsupported File!"},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=new FormData;""!=this.file&&e.append("img",this.file),e.append("firstname",this.editedItem.firstname),e.append("lastname",this.editedItem.lastname),e.append("phone",this.editedItem.phone),e.append("email",this.editedItem.email),e.append("roles",JSON.stringify(this.editedItem.roles)),this.editedIndex>-1?(this.editUser(e),this.fetchUsers()):(this.addUser(e),this.fetchUsers()),this.close()}}),watch:{dialog:function(e){e||this.close()}}},m=r(153),v=r(228),f=r.n(v),h=r(424),x=r(994),y=r(1021),I=r(997),_=r(996),w=r(432),k=r(986),O=r(995),C=r(1173),j=r(1012),V=r(1154),F=r(1024),$=r(249),N=r(385),P=r(1006),S=r(977),U=r(992),A=r(227),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pt-8"},[r("div",[r("v-row",[r("summary-card",{attrs:{command:"users",property:"Users"}})],1)],1),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("div",{staticClass:"lighter-background"},[r("v-data-table",{staticClass:"alternate-card py-4",attrs:{headers:e.headers,items:e.users,search:e.search,"items-per-page":e.itemsperpage,"custom-filter":e.customSearch,"footer-props":e.footerprops,"header-props":e.headerprops},on:{"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",sm:"12",md:"2"}},[r("p",{staticClass:"text-h6"},[e._v(e._s(e.$t("label.title.users")))])]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"d-flex justify-end mr-2",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-text-field",{attrs:{placeholder:"Search","prepend-inner-icon":"mdi-magnify",dense:"","hide-details":"",color:"#ed1e65",outlined:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"12",sm:"12",md:"2"}},[r("v-dialog",{attrs:{width:"50%",transition:"scale-transition",origin:"center center",fullscreen:e.$vuetify.breakpoint.xsOnly},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-btn",e._g(e._b({class:e.isTablet?"white--text":"mt-2 white--text",attrs:{color:"primary",dark:"",block:e.$vuetify.breakpoint.smAndDown,elevation:"0"}},"v-btn",l,!1),n),[e._v("\n                      + Add user\n                    ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-container",[r("v-form",{staticClass:"py-3 px-4",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("div",{staticClass:"spacers py-2 px-4"},[r("span",{staticClass:"text-h6"},[e._v(" "+e._s(e.formTitle))]),e._v(" "),r("div",[r("v-btn",{staticClass:"border-theme outlined mr-3",attrs:{small:""},on:{click:e.close}},[e._v("\n                              "+e._s(e.$t("label.button.cancel"))+"\n                            ")]),e._v(" "),r("v-btn",{staticClass:"line-background text-white",attrs:{disabled:!e.valid,small:"",type:"submit"}},[e._v("\n                              "+e._s(e.$t("label.button.save"))+"\n                            ")])],1)]),e._v(" "),r("v-card-text",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"First name",placeholder:"First Name",dense:"",outlined:"",rules:[function(e){return!!e||"Field is required"}],required:""},model:{value:e.editedItem.firstname,callback:function(t){e.$set(e.editedItem,"firstname",t)},expression:"editedItem.firstname"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Last name",placeholder:"Last Name",dense:"",outlined:"",color:"#ed1e65",rules:[function(e){return!!e||"Field is required"}],required:""},model:{value:e.editedItem.lastname,callback:function(t){e.$set(e.editedItem,"lastname",t)},expression:"editedItem.lastname"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Email",placeholder:"Email",dense:"",outlined:"",type:"email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{label:"Phone No.",placeholder:"Phone number",outlined:"",dense:"",rules:[function(e){return!!e||"Field is required"}],required:""},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-select",{attrs:{items:e.roles,"menu-props":"auto","item-text":"name","item-value":"name",chips:"",outlined:"",clearable:"",multiple:"",label:"Roles",placeholder:"Choose roles","hide-details":"",rules:[function(e){return!!e||"Field is required"}],required:"",dense:"",color:"#ed1e65","single-line":""},model:{value:e.editedItem.roles,callback:function(t){e.$set(e.editedItem,"roles",t)},expression:"editedItem.roles"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[r("v-file-input",{attrs:{rules:e.rules,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Profile photo"},on:{change:e.previewFiles}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-btn",{attrs:{color:"primary",small:""},on:{click:function(t){return e.editItem(n)}}},[r("v-icon",{staticClass:"pr-1",attrs:{small:""}},[e._v(" mdi-eye ")]),e._v("\n            "+e._s(e.$t("label.button.view"))+"\n          ")],1)]}},{key:"item.image",fn:function(e){var t=e.item;return[r("v-avatar",{attrs:{size:"56"}},[r("v-img",{attrs:{src:t.profile}})],1)]}},{key:"item.status",fn:function(t){var n=t.item;return["INACTIVE"==n.status?r("v-badge",{attrs:{dot:"",inline:"",left:"",color:"#FFFF00"}},[e._v("\n            "+e._s(n.status)+"\n          ")]):r("v-badge",{attrs:{dot:"",inline:"",color:"#ed1e65",left:""}},[e._v("\n            "+e._s(n.status))])]}},{key:"item.roles",fn:function(t){var n=t.item;return e._l(e.thisroles(n.roles),(function(t,n){return r("v-chip",{key:n,staticClass:"mr-1 text-lowercase",attrs:{dark:"",color:"primary",small:""}},[e._v("\n            "+e._s(t)+"\n          ")])}))}}],null,!0)})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VAvatar:h.a,VBadge:x.a,VBtn:y.a,VCard:I.a,VCardText:_.b,VChip:w.a,VCol:k.a,VContainer:O.a,VDataTable:C.a,VDialog:j.a,VFileInput:V.a,VForm:F.a,VIcon:$.a,VImg:N.a,VRow:P.a,VSelect:S.a,VSpacer:U.a,VTextField:A.a})}}]);