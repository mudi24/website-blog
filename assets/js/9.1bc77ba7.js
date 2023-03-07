(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{274:function(t,i,s){t.exports=s.p+"assets/img/stacking-context.20c25e77.jpg"},349:function(t,i,s){"use strict";s.r(i);var a=s(14),v=Object(a.a)({},(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[t._v("#")]),t._v(" 定位")]),t._v(" "),a("h4",{attrs:{id:"position-static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-static"}},[t._v("#")]),t._v(" position:static")]),t._v(" "),a("ul",[a("li",[t._v("元素在文档常规流中当前的布局位置")]),t._v(" "),a("li",[t._v("top, right, bottom, left 和 z-index 属性无效")]),t._v(" "),a("li",[t._v("用来取消元素的定位")])]),t._v(" "),a("h4",{attrs:{id:"position-relative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-relative"}},[t._v("#")]),t._v(" position:relative")]),t._v(" "),a("ul",[a("li",[t._v("元素在文档流中占据的位置不会改变")]),t._v(" "),a("li",[t._v("视觉上位置改变了，不会影响其他元素")])]),t._v(" "),a("h4",{attrs:{id:"position-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-absolute"}},[t._v("#")]),t._v(" position:absolute")]),t._v(" "),a("ul",[a("li",[t._v("脱离了文档流")]),t._v(" "),a("li",[t._v("left: 10px 是自己的外边距相对于参考元素的边框内壁偏移 10px。")]),t._v(" "),a("li",[t._v("如果不设置 left/top，或者设为 auto，则绝对定位元素的位置处于默认位置")]),t._v(" "),a("li",[t._v("绝对定位的元素的宽度不会撑开父元素")]),t._v(" "),a("li",[t._v("给行内元素设置绝对定位后就有了块级的特性，可以设置宽高")]),t._v(" "),a("li",[t._v("为元素添加绝对定位后，元素的宽度会变为 0，需要手动设置")])]),t._v(" "),a("h4",{attrs:{id:"position-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed"}},[t._v("#")]),t._v(" position:fixed")]),t._v(" "),a("ul",[a("li",[t._v("固定定位（定位基准是 viewport，有诈），手机上尽量不用")]),t._v(" "),a("li",[t._v("相对于浏览器窗口")]),t._v(" "),a("li",[t._v("一定要设置 top/bottom")])]),t._v(" "),a("h4",{attrs:{id:"position-sticky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-sticky"}},[t._v("#")]),t._v(" position:sticky")]),t._v(" "),a("ul",[a("li",[t._v("粘滞定位（兼容性很差）")]),t._v(" "),a("li",[t._v("一定要设置 top")]),t._v(" "),a("li",[t._v("某些浏览器如果不写 top/left 会位置错乱")]),t._v(" "),a("li",[t._v("当页面向下滚动时，被视窗顶部拦住，被父级块元素下边缘推走")]),t._v(" "),a("li",[t._v("如果出现多个 sticky，放置在同一容器内，会出现下一个 sticky 元素把上一个“覆盖”的效果")]),t._v(" "),a("li",[t._v("如果出现多个 sticky，放置在并列的多个块级容器内，会出现下一个 sticky 元素把上一个“推走”的效果")])]),t._v(" "),a("h4",{attrs:{id:"使用经验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用经验"}},[t._v("#")]),t._v(" 使用经验")]),t._v(" "),a("ul",[a("li",[t._v("position:relative 做轻微的偏移，比如图标位置不齐")]),t._v(" "),a("li",[t._v("position:absolute 适用出现元素重叠、放置任意位置的场景")]),t._v(" "),a("li",[t._v("position:fixed 适用需持续固定在浏览器某位置的场景")]),t._v(" "),a("li",[t._v("position:sticky 标题随页面滚动，到顶部固定")]),t._v(" "),a("li",[t._v("行内元素设置绝对定位后有了块级特性，可以设置宽高")])]),t._v(" "),a("h3",{attrs:{id:"z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-index"}},[t._v("#")]),t._v(" z-index")]),t._v(" "),a("ul",[a("li",[t._v("auto 默认值")]),t._v(" "),a("li",[t._v("0/1/2 和-1/-2 不创建层叠上下文")])]),t._v(" "),a("h3",{attrs:{id:"white-space-nowrap-文字不许换行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#white-space-nowrap-文字不许换行"}},[t._v("#")]),t._v(" white-space:nowrap 文字不许换行")]),t._v(" "),a("h3",{attrs:{id:"层叠上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文"}},[t._v("#")]),t._v(" 层叠上下文")]),t._v(" "),a("p",[a("img",{attrs:{src:s(274),alt:"层叠上下文"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("常见的创建层叠上下文的情况：")]),t._v(" "),a("ul",[a("li",[t._v("z-index: 0")]),t._v(" "),a("li",[t._v("display: flex")]),t._v(" "),a("li",[t._v("opacity 小于 1 的元素")]),t._v(" "),a("li",[t._v("transform")])])]),t._v(" "),a("li",[a("p",[t._v("opacity: 0.5 元素内部整体的透明度")])]),t._v(" "),a("li",[a("p",[t._v("background: rgba(255, 0, 0, 0.5) 背景颜色的透明度")])]),t._v(" "),a("li",[a("p",[t._v("MDN 文档: https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context")])])])])}),[],!1,null,null,null);i.default=v.exports}}]);