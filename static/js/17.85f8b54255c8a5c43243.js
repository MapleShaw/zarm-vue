(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{176:function(t,i,s){"use strict";s.r(i);var e=s(7),o=s(6),a=s(8),n=(s(53),{components:{Container:e.a,PageHeader:o.a,PageFooter:a.a},data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,isLoading:!1}},methods:{toastClose:function(t,i){console.log(t,i)}}}),l=s(0),c=Object(l.a)(n,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("Container",{staticClass:"toast-page"},[s("PageHeader",{attrs:{title:"轻提示 Toast"}}),t._v(" "),s("main",[s("div",[s("za-panel",[s("za-panel-header",{attrs:{title:"提示信息"}}),t._v(" "),s("za-panel-body",[s("za-cell",[s("za-button",{attrs:{slot:"description",size:"xs",theme:"error"},on:{click:function(i){t.visible1=!0}},slot:"description"},[t._v("开启")]),t._v("\n            错误提示\n          ")],1),t._v(" "),s("za-cell",[s("za-button",{attrs:{slot:"description",size:"xs",theme:"success"},on:{click:function(i){t.visible2=!0}},slot:"description"},[t._v("开启")]),t._v("\n            成功提示(close-on-click-modal)\n          ")],1),t._v(" "),s("za-cell",[s("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(i){t.visible3=!0}},slot:"description"},[t._v("开启")]),t._v("\n            指定关闭时间\n          ")],1)],1)],1),t._v(" "),s("za-panel",[s("za-panel-header",{attrs:{title:"加载中"}}),t._v(" "),s("za-panel-body",[s("za-cell",[s("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(i){t.visible4=!0}},slot:"description"},[t._v("开启")]),t._v("\n            Loading\n          ")],1)],1)],1)],1),t._v(" "),s("za-toast",{attrs:{visible:t.visible1},on:{"update:visible":function(i){t.visible1=i},close:t.toastClose}},[t._v("默认3秒自动关闭")]),t._v(" "),s("za-toast",{attrs:{visible:t.visible2,"close-on-click-modal":!0},on:{"update:visible":function(i){t.visible2=i},close:t.toastClose}},[s("div",{staticClass:"box"},[s("za-icon",{staticClass:"box-icon",attrs:{type:"right-round-fill"}}),t._v(" "),s("div",{staticClass:"box-text"},[t._v("预约成功")])],1)]),t._v(" "),s("za-toast",{attrs:{visible:t.visible3,duration:1e4},on:{"update:visible":function(i){t.visible3=i},close:t.toastClose}},[t._v("指定10秒自动关闭")]),t._v(" "),s("za-loading",{attrs:{visible:t.visible4},on:{"update:visible":function(i){t.visible4=i}}})],1),t._v(" "),s("PageFooter")],1)},[],!1,null,null,null);i.default=c.exports}}]);
//# sourceMappingURL=17.85f8b54255c8a5c43243.js.map