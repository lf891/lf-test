(function(t){function e(e){for(var o,l,r=e[0],c=e[1],s=e[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},a=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/lf-test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var s=0;s<r.length;s++)e(r[s]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0af8":function(t,e,n){"use strict";n("2930")},"189a":function(t,e,n){"use strict";n("a08e")},2930:function(t,e,n){},"4e3f":function(t,e,n){"use strict";n("777e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"lf-container"},[n("h2",[t._v("LfDropdown")]),n("h3",[t._v("default")]),n("div",{staticClass:"lf-grid"},t._l(t.dropdownVariants,(function(e){return n("div",{key:e,staticClass:"lf-grid__col"},[n("lf-dropdown",{attrs:{label:t.capitalize(e),variant:e}},[n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/"}},[t._v("https://www.contaazul.com/")]),n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/","new-tab":""}},[t._v("https://www.contaazul.com/(New Tab)")]),n("lf-dropdown-item",{on:{click:t.dropdownItemClick}},[t._v("dropdownItemClick()")])],1)],1)})),0),n("hr",{staticClass:"lf-divider"}),n("h3",[t._v("split prop")]),n("div",{staticClass:"lf-grid"},t._l(t.dropdownVariants,(function(e){return n("div",{key:e,staticClass:"lf-grid__col"},[n("lf-dropdown",{attrs:{label:"Split",variant:e,split:""},on:{click:t.mainButtonClick}},[n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/"}},[t._v("https://www.contaazul.com/")]),n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/","new-tab":""}},[t._v("https://www.contaazul.com/(New Tab)")]),n("lf-dropdown-item",{on:{click:t.dropdownItemClick}},[t._v("dropdownItemClick()")])],1)],1)})),0),n("hr",{staticClass:"lf-divider"}),n("h3",[t._v('close-on-click="false" prop')]),n("div",{staticClass:"lf-grid"},t._l(t.dropdownVariants,(function(e){return n("div",{key:e,staticClass:"lf-grid__col"},[n("lf-dropdown",{attrs:{label:t.capitalize(e),variant:e,"close-on-click":!1,split:""}},[n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/"}},[t._v("https://www.contaazul.com/")]),n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/","new-tab":""}},[t._v("https://www.contaazul.com/(New Tab)")]),n("lf-dropdown-item",{on:{click:t.dropdownItemClick}},[t._v("dropdownItemClick()")])],1)],1)})),0),n("hr",{staticClass:"lf-divider"}),n("h3",[t._v('close-on-click-outside="false" prop')]),n("div",{staticClass:"lf-grid"},t._l(t.dropdownVariants,(function(e){return n("div",{key:e,staticClass:"lf-grid__col"},[n("lf-dropdown",{attrs:{label:t.capitalize(e),variant:e,"close-on-click-outside":!1,split:""}},[n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/"}},[t._v("https://www.contaazul.com/")]),n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/","new-tab":""}},[t._v("https://www.contaazul.com/(New Tab)")]),n("lf-dropdown-item",{on:{click:t.dropdownItemClick}},[t._v("dropdownItemClick()")])],1)],1)})),0),n("hr",{staticClass:"lf-divider"}),n("h3",[t._v("disabled prop")]),n("div",{staticClass:"lf-grid"},t._l(t.dropdownVariants,(function(e){return n("div",{key:e,staticClass:"lf-grid__col"},[n("lf-dropdown",{attrs:{label:"Split",disabled:"",variant:e,"close-on-click":!1,split:""},on:{click:t.mainButtonClick}},[n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/"}},[t._v("https://www.contaazul.com/")]),n("lf-dropdown-item",{attrs:{href:"https://www.contaazul.com/","new-tab":""}},[t._v("https://www.contaazul.com/(New Tab)")]),n("lf-dropdown-item",{on:{click:t.dropdownItemClick}},[t._v("dropdownItemClick()")])],1)],1)})),0)])])},a=[],l=(n("fb6a"),n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside:[clickOutsideState]",value:t.outsideClick,expression:"outsideClick",arg:t.clickOutsideState}],staticClass:"lf-dropdown",class:{"lf-dropdown--split":t.split}},[n("div",{staticClass:"lf-dropdown-actions"},[n("lf-button",{ref:"buttonMain",staticClass:"lf-dropdown__button-main",attrs:{variant:t.variant,disabled:t.disabled},nativeOn:{click:function(e){return t.mainButtonClick(e)}}},[t._v(" "+t._s(t.label)+" ")]),t.split?n("lf-button",{ref:"buttonArrow",staticClass:"lf-dropdown__button-arrow",attrs:{variant:t.variant,disabled:t.disabled,dark:""},on:{click:t.toggle}},[n("svg",{staticClass:"lf-button-icon",attrs:{viewBox:"0 0 12 8"}},[n("path",{attrs:{d:"M5.46009 7.17687L1.01149 2.72827C0.704015 2.4208 0.704015 1.9236 1.01149\n        1.6194L1.750740.880144C2.05822 0.572667 2.55542 0.572667 2.85962 0.880144L6.01289\n        4.03341L9.16617 0.880144C9.47364 0.572667 9.97084 0.572667 10.275 0.880144L11.0143\n        1.6194C11.3218 1.92687 11.3218 2.42407 11.0143 2.72827L6.5657 7.17687C6.26476 7.48435\n        5.76757 7.48435 5.46009 7.17687Z"}})])]):t._e()],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"dropdown",staticClass:"lf-dropdown-menu",on:{click:t.contentClick}},[t._t("default")],2)])}),r=[],c=(n("ac1f"),n("1276"),n("39c3")),s=function(t){document.body.addEventListener("click",t.clickOutsideEvent)},d=function(t){document.body.removeEventListener("click",t.clickOutsideEvent)},u={bind:function(t,e){var n=e.arg,o=void 0===n?"enabled":n,i=e.value;if("enabled"!==o&&"disabled"!==o)throw new Error("click-outside: ".concat(o,' is not an expected argument. The expected arguments are "enabled" or "disabled"'));if("function"!==typeof i)throw new Error("click-outside: Binding value must be a function");var a=t;a.dataset.clickoutsideState=o,a.clickOutsideEvent=function(t){a===t.target||a.contains(t.target)||i(t,a)},"enabled"===a.dataset.clickoutsideState&&s(a)},componentUpdated:function(t,e){var n=e.arg,o=e.oldArg,i=t;setTimeout((function(){n&&n!==o&&(i.dataset.clickoutsideState=n,"enabled"===i.dataset.clickoutsideState?s(i):d(i))}),0)},unbind:function(t){d(t)}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"lf-button",class:t.classList,attrs:{type:"button",disabled:t.disabled},on:{click:t.click}},[t._t("default",[t._v(t._s(t.label))])],2)},f=[],w={name:"LfButton",props:{label:{type:String,required:!1},variant:{type:String,required:!1},disabled:{type:Boolean,default:!1},dark:{type:Boolean,require:!1}},computed:{classList:function(){return(this.variant?"lf-button--".concat(this.variant):"")+(this.dark?" lf-button--dark":"")}},methods:{click:function(){this.$emit("click")}}},h=w,v=(n("4e3f"),n("2877")),m=Object(v["a"])(h,p,f,!1,null,"07b4e493",null),b=m.exports,k={name:"LfDropdown",components:{LfButton:b},directives:{ClickOutside:u},props:{label:{type:String,required:!0},split:{type:Boolean,default:!1},variant:{type:String},disabled:{type:Boolean,default:!1},closeOnClick:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0}},data:function(){return{isOpen:!1}},computed:{clickOutsideState:function(){return this.isOpen?"enabled":"disabled"}},methods:{setupPopper:function(){var t=this;this.$nextTick((function(){if(void 0===t.popper){var e=t.split?t.$refs.buttonArrow.$el:t.$refs.buttonMain.$el,n=t.$refs.dropdown;t.popper=Object(c["a"])(e,n,{placement:"bottom-end"})}}))},open:function(){this.disabled||(this.isOpen=!0,this.$emit("open"))},close:function(){this.isOpen=!1,this.$emit("close")},toggle:function(){this.isOpen?this.close():(this.open(),this.setupPopper())},mainButtonClick:function(){this.disabled||(this.$emit("click"),this.split||this.toggle())},contentClick:function(){this.closeOnClick&&this.isOpen&&this.close()},outsideClick:function(){this.closeOnClickOutside&&this.isOpen&&this.close()}}},_=k,C=(n("0af8"),Object(v["a"])(_,l,r,!1,null,"e7974d72",null)),g=C.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"lf-dropdown-item",attrs:{href:t.href,target:t.hrefTarget},on:{click:t.click}},[t._t("default",[t._v(t._s(t.label))])],2)},O=[],z={name:"LfDropdownItem",props:{label:{type:String},href:{type:String},newTab:{type:Boolean,default:!1}},computed:{hrefTarget:function(){return this.newTab?"_blank":"_self"}},methods:{click:function(){this.$emit("click")}}},S=z,B=(n("189a"),Object(v["a"])(S,y,O,!1,null,"6b085b39",null)),L=B.exports,x={name:"App",components:{LfDropdown:g,LfDropdownItem:L},data:function(){return{dropdownVariants:["default","primary","secondary","danger"]}},methods:{capitalize:function(t){return t?t.toString().charAt(0).toUpperCase()+t.slice(1):""},mainButtonClick:function(){alert("Main Button Click")},dropdownItemClick:function(){alert("Dropdown Item Click")}}},$=x,T=(n("5c0b"),Object(v["a"])($,i,a,!1,null,null,null)),j=T.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"777e":function(t,e,n){},"9c0c":function(t,e,n){},a08e:function(t,e,n){}});
//# sourceMappingURL=app.4cc8f3b5.js.map