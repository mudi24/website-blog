(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{351:function(t,e,r){"use strict";r.r(e);var a=r(14),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"适配不同屏幕大小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适配不同屏幕大小"}},[t._v("#")]),t._v(" 适配不同屏幕大小")]),t._v(" "),r("p",[t._v("适配不同屏幕大小，也就是适配不同屏幕下的 CSS 像素。最早移动端屏幕 CSS 像素适配方案是 CSS 媒体查询。但是无法做到高保真接近 100% 的还原。")]),t._v(" "),r("p",[t._v("适配不同屏幕大小其实只需要遵循一条原则，确保页面元素大小的与屏幕大小保持一定比例。也就是：按比例还原设计稿")]),t._v(" "),r("h3",{attrs:{id:"rem-适配方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem-适配方案"}},[t._v("#")]),t._v(" rem 适配方案")]),t._v(" "),r("p",[t._v("rem 布局是一种适配不同屏幕的方案，rem 是一个全局的基准单位。")]),t._v(" "),r("blockquote",[r("p",[t._v("rem（font size of the root element），在 "),r("a",{attrs:{href:"https://drafts.csswg.org/css-values-3/#lengths",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Values and Units Module Level 3"),r("OutboundLink")],1),t._v(" 中的定义就是， 根据网页的根元素来设置字体大小，和 em（font size of the element）的区别是，em 是根据其父元素的字体大小来设置，而 rem 是根据网页的跟元素（html）来设置字体大小。")])]),t._v(" "),r("h4",{attrs:{id:"flexible"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flexible"}},[t._v("#")]),t._v(" flexible")]),t._v(" "),r("p",[t._v("基于此，淘宝早年推行的一套以 rem 为基准的适配方案："),r("a",{attrs:{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib-flexible"),r("OutboundLink")],1),t._v("。其核心做法在于：")]),t._v(" "),r("ul",[r("li",[r("s",[t._v("根据设备的 dpr 动态改写 "),r("code",[t._v("<meta>")]),t._v(" 标签，设置 viewport 的缩放")])]),t._v(" "),r("li",[r("s",[t._v("给 "),r("code",[t._v("<html>")]),t._v(" 元素添加 data-dpr 属性，并且动态改写 data-dpr 的值")])]),t._v(" "),r("li",[t._v("根据 document.documentElement.clientWidth 动态修改 "),r("code",[t._v("<html>")]),t._v(" 的 font-size ，页面其他元素使用 rem 作为长度单位进行布局，从而实现页面的等比缩放")])]),t._v(" "),r("blockquote",[r("p",[t._v("关于头两点，其实现在的 lib-flexible 库已经不这样做了，不再去缩放 Viewport，字体大小的设定也直接使用了 rem")])]),t._v(" "),r("h4",{attrs:{id:"hotcss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hotcss"}},[t._v("#")]),t._v(" hotcss")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/imochen/hotcss",target:"_blank",rel:"noopener noreferrer"}},[t._v("hotcss"),r("OutboundLink")],1),t._v(" 不是一个库，也不是一个框架。它是一个移动端布局开发解决方案。使用 hotcss 可以让移动端布局开发更容易。本质的思想与 flexible 完全一致。")]),t._v(" "),r("h4",{attrs:{id:"rem-方案的一些总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rem-方案的一些总结"}},[t._v("#")]),t._v(" rem 方案的一些总结")]),t._v(" "),r("p",[t._v("使用 flexible/hotcss 作为屏幕宽度适配解决方案，是存在一些问题的：")]),t._v(" "),r("ol",[r("li",[t._v("动态修改 Viewport 存在一定的风险的，譬如通过 Viewport 改变了页面的缩放之后，获取到的 innerWidth/innerHeight 也会随之发生变化，如果业务逻辑有获取此类高宽进行其他计算的，可能会导致意想不到的错误；")])]),t._v(" "),r("blockquote",[r("p",[t._v("到今天，其实存在很多在 flexible 基础上演化而来的各种 rem 解决方案，有的不会对 Viewport 进行缩放处理，自行处理 1px 边框问题。")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("flexible/hotcss 都并非纯 CSS 方案，需要引入一定的 Javascript 代码")]),t._v(" "),r("li",[t._v("rem 的设计初衷并非是用于解决此类问题，用 rem 进行页面的宽度适配多少有一种 hack 的感觉")]),t._v(" "),r("li",[t._v("存在一定的兼容性问题，对于安卓 4.4 以下版本系统不支持 viewport 缩放（当然，flexible 处理 Android 系列时，始终认为其 dpr 为 1，没有进行 viewport 缩放）")])]),t._v(" "),r("h3",{attrs:{id:"vw-适配方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vw-适配方案"}},[t._v("#")]),t._v(" vw 适配方案")]),t._v(" "),r("p",[t._v("格来说，使用 rem 进行页面适配其实是一种 hack 手段，rem 单位的初衷本身并不是用来进行移动端页面宽度适配的。")]),t._v(" "),r("p",[t._v("到了今天，有了一种更好的替代方案，使用 vw 进行适配 。")]),t._v(" "),r("p",[t._v("百分比适配方案的核心需要一个全局通用的基准单位，rem 是不错，但是需要借助 Javascript 进行动态修改根元素的 font-size，而 vw/vh（vmax/vmin） 的出现则很好弥补 rem 需要 JS 辅助的缺点。")]),t._v(" "),r("p",[t._v("根据 CSS Values and Units Module Level 4：vw 等于初始包含块（html 元素）宽度的 1%，也就是")]),t._v(" "),r("ul",[r("li",[t._v("1vw 等于 window.innerWidth 的数值的 1%")]),t._v(" "),r("li",[t._v("1vh 等于 window.innerHeight 的数值的 1%")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/5/16cff475dbd5fce0~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp",alt:""}})]),t._v(" "),r("p",[t._v("再以上面设计稿图的元素为例，那么，")]),t._v(" "),r("ul",[r("li",[t._v("元素的宽度为：209/375 = 55.73% = 55.73vw")]),t._v(" "),r("li",[t._v("元素的高度为：80/375 = 21.33% = 21.33vw")]),t._v(" "),r("li",[t._v("元素的上左右边距依次计算...")])]),t._v(" "),r("p",[t._v("根据相关的测试，可以使用 vw 进行长度单位的有：")]),t._v(" "),r("ul",[r("li",[t._v("容器大小适配，可以使用 vw")]),t._v(" "),r("li",[t._v("文本大小的适配，可以使用 vw")]),t._v(" "),r("li",[t._v("大于 1px 的边框、圆角、阴影都可以使用 vw")]),t._v(" "),r("li",[t._v("内距和外距，可以使用 vw")])]),t._v(" "),r("p",[t._v("使用 vw 方案就实现了等比例缩放的效果")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/oNvWVYq?editors=1100",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen Demo（移动端打开）：使用 vw 进行页面适配"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"自动转换插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动转换插件"}},[t._v("#")]),t._v(" 自动转换插件")]),t._v(" "),r("p",[t._v("当我们使用 rem 作为长度单位的时，通常会有借助 Sass/Less 实现一个转换函数，像是这样：")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设设计稿的宽度是 375px，假设取设计稿宽度下 1rem = 100px")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseFontSize "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("px2rem")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("px")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" px "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" baseFontSize "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 1rem"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("使用 vw 方案时，需要修改这个方法")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设设计稿的宽度是 375px")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("px2vw")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("px")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" px "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 100vw"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("当然，我们还可以借助一些插件包去实现这个自动转换，提高效率，譬如 "),r("a",{attrs:{href:"https://www.npmjs.com/package/postcss-px-to-viewport",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-px-to-viewport"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"vw-polyfill"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vw-polyfill"}},[t._v("#")]),t._v(" vw polyfill")]),t._v(" "),r("p",[t._v("vw 现在毕竟还是存在兼容问题的，看看兼容性：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/5/16cff4761d178232~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp",alt:""}})]),t._v(" "),r("p",[t._v("其实已经覆盖了绝大部分设备，那么如果业务使用了且又真的出现了兼容问题，应该怎么处理呢？有两种方式可以进行降级处理：")]),t._v(" "),r("ul",[r("li",[t._v("CSS Houdini：通过 CSS Houdini 针对 vw 做处理，调用 CSS Typed OM Level1 提供的 CSSUnitValue API。")]),t._v(" "),r("li",[t._v("CSS Polyfill：通过相应的 Polyfill 做相应的处理，目前针对于 vw 单位的 Polyfill 主要有：vminpoly、Viewport Units Buggyfill、vunits.js 和 Modernizr")])]),t._v(" "),r("h4",{attrs:{id:"vw-方案存在的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vw-方案存在的问题"}},[t._v("#")]),t._v(" vw 方案存在的问题")]),t._v(" "),r("p",[t._v("vw 确实看上去很不错，但是也是存在它的一些问题：")]),t._v(" "),r("ol",[r("li",[t._v("也没能很好的解决 1px 边框在高清屏下的显示问题，需要自行处理")]),t._v(" "),r("li",[t._v("由于 vw 方案是完全的等比缩放，在完全等比还原设计稿的同时带来的一个问题是无法很好的限定一个最大最小宽度值，由于 rem 方案是借助 Javascript 的，所以这一点 rem 比 vw 会更加的灵活")])]),t._v(" "),r("p",[t._v("当然，两个方案现阶段其实都可以使用甚至一起搭配使用，更多详情可以读读：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://mp.weixin.qq.com/s/NgGd9zSm6NEaF5Jxp5WBKg",target:"_blank",rel:"noopener noreferrer"}},[t._v("H5 必知必会之像素级还原设计稿"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.smashingmagazine.com/2016/05/fluid-typography/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Responsive And Fluid Typography With vh And vw Units"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/wengxuesong/archive/2016/05/16/5497653.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 VH 和 VW 实现真正的流体排版"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"_1px-线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1px-线"}},[t._v("#")]),t._v(" 1px 线")]),t._v(" "),r("p",[t._v("上面说到使用 vw 适配屏幕大小方案，其中有一个缺点就是在 Retina 屏下，无法很好的展示真正的 1px 物理像素线条。")]),t._v(" "),r("p",[t._v("设计师想要的 retina 下 border: 1px，其实是 1 物理像素宽，而不是 1 CSS 像素宽度，对于 CSS 而言：")]),t._v(" "),r("ul",[r("li",[t._v("在 dpr = 1 时，此时 1 物理像素等于 1 CSS 像素宽度；")]),t._v(" "),r("li",[t._v("在 dpr = 2 时，此时 1 物理像素等于 0.5 CSS 宽度像素，可以认为 border-width: 1px 这里的 1px 其实是 1 CSS 像素宽度，等于 2 像素物理宽度，设计师其实想要的是 border-width: 0.5px;")]),t._v(" "),r("li",[t._v("在 dpr = 3 时，此时 1 物理像素等于 0.33 CSS 宽度像素，设计师其实想要的是 border: 0.333px")])]),t._v(" "),r("p",[t._v("然而，并不是所有手机浏览器都能识别 border-width: 0.5px，在 iOS7 以下，Android 等其他系统里，小于 1px 的单位会被当成为 0px 处理，那么如何实现这 0.5px、0.33px 呢？")]),t._v(" "),r("p",[t._v("这里介绍几种方法：")]),t._v(" "),r("ul",[r("li",[t._v("渐变实现")]),t._v(" "),r("li",[t._v("使用缩放实现")]),t._v(" "),r("li",[t._v("使用图片实现（base64）")]),t._v(" "),r("li",[t._v("使用 SVG 实现（嵌入 background url）")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://codepen.io/Chokcoco/pen/XyNjqK",target:"_blank",rel:"noopener noreferrer"}},[t._v("Retina 屏幕下 1px 线的实现"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("https://juejin.cn/post/6844903935568789517#heading-6")])])}),[],!1,null,null,null);e.default=s.exports}}]);