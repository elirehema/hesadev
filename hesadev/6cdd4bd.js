(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1098:function(t,e,n){"use strict";n.r(e);n(111);var o={props:["form","methods","text","action"],data:function(){return{dialog:!1}},methods:{deleteItem:function(){var t=this;this.$store.dispatch(this.methods,this.form).then((function(){t.dialog=!1,setTimeout((function(){null==t.action?t.$router.go():t.$store.dispatch(t.action)}),t.delay_seconds)}))}}},r=n(153),c=n(228),l=n.n(c),d=n(1022),v=n(997),h=n(996),_=n(1011),f=n(992),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{transition:"scale-transition",origin:"center center","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"border-theme outlined",attrs:{small:""}},o),[t._v("\n      "+t._s(t.text)+"\n    ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline text-monospace text-danger"},[t._v("Warning Alert")]),t._v(" "),n("v-card-text",[t._v("Are you sure you want to Proceed with this Action?."),n("br")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){return t.deleteItem()}}},[t._v("Agree")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Disagree")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VDialog:_.a,VSpacer:f.a})}}]);