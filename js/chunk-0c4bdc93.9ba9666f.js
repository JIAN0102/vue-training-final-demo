(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c4bdc93"],{"99af":function(t,a,e){"use strict";var s=e("23e7"),o=e("d039"),i=e("e8b5"),r=e("861d"),n=e("7b0b"),c=e("50c4"),d=e("8418"),l=e("65f0"),u=e("1dde"),p=e("b622"),m=e("2d00"),v=p("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),_=u("concat"),C=function(t){if(!r(t))return!1;var a=t[v];return void 0!==a?!!a:i(t)},b=!h||!_;s({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,s,o,i,r=n(this),u=l(r,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?r:arguments[a],C(i)){if(o=c(i.length),p+o>f)throw TypeError(g);for(e=0;e<o;e++,p++)e in i&&d(u,p,i[e])}else{if(p>=f)throw TypeError(g);d(u,p++,i)}return u.length=p,u}})},d2e2:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"row mt-4"},t._l(t.products,(function(a,s){return e("div",{key:s,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card border-0 shadow-sm"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body"},[e("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),e("h5",{staticClass:"card-title"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),e("p",{staticClass:"card-text",domProps:{innerHTML:t._s(a.content)}},[t._v(" "+t._s(a.content)+" ")]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a.price?t._e():e("div",{staticClass:"h5"},[t._v(" "+t._s(a.origin_price)+" 元 ")]),a.price?e("del",{staticClass:"h6"},[t._v("原價 "+t._s(a.origin_price)+" 元")]):t._e(),a.price?e("div",{staticClass:"h5"},[t._v(" 現在只要 "+t._s(a.price)+" 元 ")]):t._e()])]),e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(e){return t.getDetailed(a.id)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 查看更多 ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button",disabled:t.status.loadingItem===a.id},on:{click:function(e){return t.addtoCart(a)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"spinner-grow spinner-grow-sm"}):t._e(),t._v(" 加到購物車 ")])])])])})),0),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" "+t._s(t.tempProduct.title)+" ")]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.image,alt:""}}),e("blockquote",{staticClass:"blockquote mt-3"},[e("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.tempProduct.content)}}),e("footer",{staticClass:"blockquote-footer text-right"},[t._v(" "+t._s(t.tempProduct.description)+" ")])]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.tempProduct.price?e("div",[e("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.tempProduct.origin_price)+" 元")]),e("div",{staticClass:"h4"},[t._v(" 現在只要 "+t._s(t.tempProduct.price)+" 元 ")])]):e("div",{staticClass:"h4"},[t._v(" "+t._s(t.tempProduct.origin_price)+" 元 ")])]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.num,expression:"tempProduct.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.tempProduct,"num",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v(" 請選擇數量 ")]),t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" 選購 "+t._s(a)+" "+t._s(t.tempProduct.unit)+" ")])}))],2)]),e("div",{staticClass:"modal-footer"},[t.tempProduct.num?e("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小計 "),e("strong",[t._v(t._s(t.tempProduct.num*t.tempProduct.price))]),t._v(" 元 ")]):t._e(),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(t.tempProduct,t.tempProduct.num)}}},[t.tempProduct.id===t.status.loadingItem?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v(" 加到購物車 ")])])])])]),e("div",{staticClass:"my-5 row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"text-right mb-3"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeAllCartItem()}}},[e("i",{staticClass:"far fa-trash-alt"}),t._v(" 刪除所有品項 ")])]),e("table",{staticClass:"table"},[t._m(1),t.cart.length?e("tbody",t._l(t.cart,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeCartItem(a.product.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?e("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()]),e("td",{staticClass:"align-middle"},[e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.quantityUpdata(a.product.id,a.quantity+1)}}},[t._v(" + ")])]),e("input",{staticClass:"form-control text-center",attrs:{id:"inlineFormInputGroupUsername",type:"text"},domProps:{value:a.quantity},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quantityUpdata(a.product.id,e.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-primary",attrs:{disabled:1===a.quantity},on:{click:function(e){return t.quantityUpdata(a.product.id,a.quantity-1)}}},[t._v(" - ")])])])]),e("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.unit)+" ")]),e("td",{staticClass:"align-middle text-right"},[t._v(" "+t._s(a.product.price)+" ")])])})),0):t._e(),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v(" 總計 ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t.cartTotal)+" ")])]),t.coupon.enabled?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"4"}},[t._v(" 折扣價 ")]),e("td",{staticClass:"text-right text-success"},[t._v(" "+t._s(t.cartTotal*(t.coupon.percent/100))+" ")])]):t._e()])]),e("div",{staticClass:"input-group mb-3 input-group-sm"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v(" 套用優惠碼 ")])])])])]),e("div",{staticClass:"my-5 row justify-content-center"},[e("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:o,attrs:{id:"username",type:"text"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{name:"E-mail",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:o,attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:o,attrs:{id:"tel",type:"tel"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{id:"address",type:"text"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("購買方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{required:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),e("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),e("option",{attrs:{value:"ATM"}},[t._v(" ATM ")]),e("option",{attrs:{value:"CVS"}},[t._v(" CVS ")]),e("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),e("option",{attrs:{value:"Credit"}},[t._v(" Credit ")]),e("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),e("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("留言")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s}},[t._v(" 送出表單 ")])])])]}}])})],1)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th"),e("th",[t._v("品名")]),e("th",{attrs:{width:"150px"}},[t._v(" 數量 ")]),e("th",[t._v("單位")]),e("th",[t._v("單價")])])}],i=(e("99af"),e("4160"),e("159b"),e("1157")),r=e.n(i),n={name:"CustomerOrders",data:function(){return{products:[],tempProduct:{num:0},status:{loadingItem:""},form:{name:"",email:"",tel:"",address:"",payment:"",message:""},cart:{},cartTotal:0,coupon:{},isLoading:!1,coupon_code:"",uuid:"8db6e157-f1c7-4688-bf28-c4948d307e8e"}},created:function(){this.getProducts(),this.getCart()},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/products?page=").concat(a);this.$http.get(e).then((function(a){t.products=a.data.data,t.isLoading=!1}))},getDetailed:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/product/").concat(t);this.$http.get(e).then((function(t){a.tempProduct=t.data.data,a.$set(a.tempProduct,"num",0),r()("#productModal").modal("show"),a.isLoading=!1}))},addtoCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t.id;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/shopping"),o={product:t.id,quantity:e};this.$http.post(s,o).then((function(){a.status.loadingItem="",a.$bus.$emit("message:push","加入購物車成功囉，好棒ヽ(＾Д＾)ﾉ ","success"),r()("#productModal").modal("hide"),a.getCart()})).catch((function(t){a.status.loadingItem="";var e=t.response.data.errors;e.forEach((function(t){a.$bus.$emit("message:push","加入失敗惹，好糗Σ( ° △ °|||)︴\n            ".concat(t),"danger")})),r()("#productModal").modal("hide")}))},getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/shopping");this.$http.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price})),t.isLoading=!1}))},quantityUpdata:function(t,a){var e=this;if(!(a<=0)){this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/shopping"),o={product:t,quantity:a};this.$http.patch(s,o).then((function(){e.isLoading=!1,e.getCart()}))}},removeAllCartItem:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/shopping/all/product");this.$http.delete(a).then((function(){t.$bus.$emit("message:push","刪除成功，好棒ヽ(＾Д＾)ﾉ ","success"),t.isLoading=!1,t.getCart()}))},removeCartItem:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/shopping/").concat(t);this.$http.delete(e).then((function(){a.$bus.$emit("message:push","刪除成功，好棒ヽ(＾Д＾)ﾉ ","success"),a.isLoading=!1,a.getCart()}))},addCoupon:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/coupon/search");this.$http.post(a,{code:this.coupon_code}).then((function(a){t.coupon=a.data.data,t.isLoading=!1})).catch((function(a){var e=a.response.data.errors;if(e)e.code.forEach((function(a){t.$bus.$emit("message:push","加入失敗惹，好糗Σ( ° △ °|||)︴\n            ".concat(a),"danger")})),t.isLoading=!1;else{var s=a.response.data.message;t.$bus.$emit("message:push","加入失敗惹，好糗Σ( ° △ °|||)︴\n            ".concat(s),"danger"),t.isLoading=!1}}))},createOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat(this.uuid,"/ec/orders"),e=Object.assign({},this.form);this.coupon.enabled&&(e.coupon=this.coupon.code),this.$http.post(a,e).then((function(a){a.data.data.id&&t.$router.push("/admin/customer_checkout/".concat(a.data.data.id)),t.isLoading=!1})).catch((function(a){var e=a.response.data.errors;e.forEach((function(a){t.$bus.$emit("message:push","建立訂單失敗惹，好糗Σ( ° △ °|||)︴\n          ".concat(a),"danger")})),t.isLoading=!1}))}}},c=n,d=e("2877"),l=Object(d["a"])(c,s,o,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0c4bdc93.9ba9666f.js.map