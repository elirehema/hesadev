(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1006:function(t,n,e){"use strict";e(19),e(12),e(27),e(28);var r=e(1),c=(e(8),e(88),e(132),e(67),e(20),e(53),e(133),e(443),e(75),e(444),e(445),e(446),e(447),e(448),e(449),e(450),e(451),e(452),e(453),e(454),e(455),e(456),e(89),e(14),e(457),e(6)),o=e(99),l=e(3);function f(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var j=["sm","md","lg","xl"],y=["start","end","center"];function v(t,n){return j.reduce((function(e,r){return e[t+Object(l.I)(r)]=n(),e}),{})}var O=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},w=v("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},C=v("justify",(function(){return{type:String,default:null,validator:h}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},P=v("alignContent",(function(){return{type:String,default:null,validator:S}})),m={align:Object.keys(w),justify:Object.keys(C),alignContent:Object.keys(P)},k={align:"align",justify:"justify",alignContent:"align-content"};function x(t,n,e){var r=k[t];if(null!=e){if(n){var c=n.replace(t,"");r+="-".concat(c)}return(r+="-".concat(e)).toLowerCase()}}var D=new Map;n.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:h}},C),{},{alignContent:{type:String,default:null,validator:S}},P),render:function(t,n){var e=n.props,data=n.data,c=n.children,l="";for(var f in e)l+=String(e[f]);var d=D.get(l);return d||function(){var t,n;for(n in d=[],m)m[n].forEach((function(t){var r=e[t],c=x(n,t,r);c&&d.push(c)}));d.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),D.set(l,d)}(),t(e.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},1205:function(t,n,e){"use strict";e.r(n);var r=e(153),c=e(228),o=e.n(c),l=e(986),f=e(995),d=e(1006),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"12"}},[t._v("\n         Settings\n     ")])],1)],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VCol:l.a,VContainer:f.a,VRow:d.a})}}]);