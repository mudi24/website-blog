(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{300:function(s,a,t){"use strict";t.r(a);var v=t(14),e=Object(v.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[s._v("#")]),s._v(" 浏览器")]),s._v(" "),t("h2",{attrs:{id:"输入-url-后按下回车会发生什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入-url-后按下回车会发生什么"}},[s._v("#")]),s._v(" 输入 url 后按下回车会发生什么")]),s._v(" "),t("p",[s._v("1 解析域名\n2 缓存判断 --有资源直接返回、否则向服务器发起新的请求\n3 DNS 解析\n4 获取 MAC 地址\n5 会把请求的内容存储到 dns\n6 TCP 三次握手\n7 HTTPS 握手\n8 返回数据\n9 TCP 四次挥手")]),s._v(" "),t("h2",{attrs:{id:"回流和重绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[s._v("#")]),s._v(" 回流和重绘")]),s._v(" "),t("p",[s._v("网页生成过程：")]),s._v(" "),t("ul",[t("li",[s._v("HTML 被 HTML 解析器解析成 DOM 树")]),s._v(" "),t("li",[s._v("css 则被 css 解析器解析成 CSSOM 树")]),s._v(" "),t("li",[s._v("结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree)")]),s._v(" "),t("li",[s._v("生成布局（flow），即将所有渲染树的所有节点进行平面合成")]),s._v(" "),t("li",[s._v("将布局绘制（paint）在屏幕上")])]),s._v(" "),t("p",[s._v("重排(也称回流):   当 DOM 的变化影响了元素的几何属性（DOM 对象的位置和尺寸大小），浏览器需要重新计算元素的几何属性，将其安放在界面中正确的位置，这个过程就叫回流。触发：")]),s._v(" "),t("ol",[t("li",[s._v("添加或者删除可见的 DOM 元素")]),s._v(" "),t("li",[s._v("元素尺寸改变——边距、填充、边框、宽度和高度")])]),s._v(" "),t("p",[s._v("重绘： 当一个元素的外观发生了改变，但没有改变布局，重新把元素外观绘制出来的过程，叫做重绘，触发：")]),s._v(" "),t("ul",[t("li",[s._v("改变元素的 color、background、box-shadow 属性")])]),s._v(" "),t("h2",{attrs:{id:"cookie、sessionstorage、localstorage-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie、sessionstorage、localstorage-的区别"}},[s._v("#")]),s._v(" cookie、sessionStorage、localStorage 的区别")]),s._v(" "),t("ul",[t("li",[s._v("cookie 可以设置失效时间")]),s._v(" "),t("li",[s._v("localStorage 除非手动清除，否则永久保存")]),s._v(" "),t("li",[s._v("sessionStorage 尽在当前网页有效，关闭页面就被清除")]),s._v(" "),t("li",[s._v("cookie 储存大小是 4k，localStorage 和 sessionStorage 是 5M")]),s._v(" "),t("li",[s._v("请求时：cookie 自动携带 HTTP 头部中，localStorage 和 sessionStorage 仅在浏览器保存，不参与服务器通信")])]),s._v(" "),t("h2",{attrs:{id:"跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[s._v("#")]),s._v(" 跨域")]),s._v(" "),t("p",[s._v("同源策略，协议、端口号、域名必须一致")]),s._v(" "),t("ul",[t("li",[s._v("jsonp(利用 script 标签没有跨域限制的漏洞实现。缺点：只支持 GET 请求)")]),s._v(" "),t("li",[s._v("CORS(设置 Access-Control-Allow-Origin：指定可访问资源的域名")]),s._v(" "),t("li",[s._v("Node 中间件代理")]),s._v(" "),t("li",[s._v("Nginx 反向代理")])]),s._v(" "),t("h2",{attrs:{id:"渐进增强-vs-优雅降级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强-vs-优雅降级"}},[s._v("#")]),s._v(" 渐进增强 vs. 优雅降级")]),s._v(" "),t("p",[s._v("渐进增强（progressive enhancement）：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。")]),s._v(" "),t("p",[s._v("优雅降级（graceful degradation）：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")]),s._v(" "),t("p",[s._v("区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。")])])}),[],!1,null,null,null);a.default=e.exports}}]);