(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{347:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图片适配及优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片适配及优化"}},[t._v("#")]),t._v(" 图片适配及优化")]),t._v(" "),a("p",[t._v("图像通常占据了网页上下载资源绝的大部分。优化图像通常可以最大限度地减少从网站下载的字节数以及提高网站性能。\n通常可以，有一些通用的优化手段：")]),t._v(" "),a("ol",[a("li",[t._v("消除多余的图像资源")]),t._v(" "),a("li",[t._v("尽可能利用 CSS3\\SVG 矢量图像替代某些光栅图像")]),t._v(" "),a("li",[t._v("谨慎使用字体图标，使用网页字体取代在图像中进行文本编码")]),t._v(" "),a("li",[t._v("选择正确的图片格式")]),t._v(" "),a("li",[t._v("为不同 DPR 屏幕提供最适合的图片尺寸")])]),t._v(" "),a("p",[t._v("本文重点关注如何在不同的 dpr 屏幕下，让图片看起来都不失真。\n首先就是上述的第二点，尽可能利用 CSS3\\SVG 矢量图像替代某些光栅图像。某些简单的几何图标，可以用 CSS3 快速实现的图形，都应该尽量避免使用光栅图像。这样能够保证它们在任何尺寸下都不会失真。")]),t._v(" "),a("p",[t._v("其次，实在到了必须使用光栅图像的地步，也是有许多方式能保证图像在各种场景下都不失真。")]),t._v(" "),a("h3",{attrs:{id:"无脑多倍图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无脑多倍图"}},[t._v("#")]),t._v(" 无脑多倍图")]),t._v(" "),a("p",[t._v("在移动端假设我们需要一张 CSS 像素为 300 x 200 的图像，考虑到现在已经有了 dpr = 3 的设备，那么要保证图片在 dpr = 3 的设备下也正常高清展示，我们最大可能需要一张 900 x 600 的原图。\n这样，不管设备的 dpr 是否为 3，我们统一都使用 3 倍图。这样即使在 dpr = 1，dpr = 2 的设备上，也能非常好的展示图片。\n当然这样并不可取，会造成大量带宽的浪费。现代浏览器，提供了更好的方式，让我们能够根据设备 dpr 的不同，提供不同尺寸的图片。")]),t._v(" "),a("h3",{attrs:{id:"srcset-配合-1x-2x-像素密度描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#srcset-配合-1x-2x-像素密度描述符"}},[t._v("#")]),t._v(" srcset 配合 1x 2x 像素密度描述符")]),t._v(" "),a("p",[t._v("简单来说，srcset 可以根据不同的 dpr 拉取对应尺寸的图片：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("illustration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("illustration-small.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("images/illustration-small.png 1x, images/illustration-big.png 2x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("上面 srcset 里的 1x，2x 表示 像素密度描述符，表示")]),t._v(" "),a("ul",[a("li",[t._v("当屏幕的 dpr = 1 时，使用 images/illustration-small.png 这张图")]),t._v(" "),a("li",[t._v("当屏幕的 dpr = 2 时，使用 images/illustration-big.png 这张图")])]),t._v(" "),a("h3",{attrs:{id:"srcset-属性配合-sizes-属性-w-宽度描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#srcset-属性配合-sizes-属性-w-宽度描述符"}},[t._v("#")]),t._v(" srcset 属性配合 sizes 属性 w 宽度描述符")]),t._v(" "),a("p",[t._v("上面 1x，2x 的写法比较容易接受易于理解。\n除此之外，srcset 属性还有一个 w 宽度描述符，配合 sizes 属性一起使用，可以覆盖更多的面。\n以下面这段代码为例子：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sizes")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(min-width: 600px) 600px, 300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("srcset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("photo@1x.png 300w, photo@2x.png 600w, photo@3x.png 1200w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v('解析一下：\nsizes = “(min-width: 600px) 600px, 300px"的意思是，如果屏幕当前的 CSS 像素宽度大于或者等于 600px，则图片的 CSS 宽度为 600px，反之，则图片的 CSS 宽度为 300px。\n也就是 sizes 属性声明了在不同宽度下图片的 CSS 宽度表现。这里可以理解为，大屏幕下图片宽度为 600px，小屏幕下图片宽度为 300px。（具体的媒体查询代码由 CSS 实现）')]),t._v(" "),a("blockquote",[a("p",[t._v("这里的 sizes 属性只是声明了在不同宽度下图片的 CSS 宽度表现，而具体使图片在大于 600px 的屏幕上展示为 600px 宽度的代码需要另外由 CSS 或者 JS 实现，有点绕。")])]),t._v(" "),a("p",[t._v("srcset = “photo@1x.png 300w, photo@2x.png 600w, photo@3x.png 1200w 里面的 300w，600w，900w 叫宽度描述符。怎么确定当前场景会选取哪张图片呢？")]),t._v(" "),a("h3",{attrs:{id:"当前屏幕-dpr-2-css-宽度为-375px。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前屏幕-dpr-2-css-宽度为-375px。"}},[t._v("#")]),t._v(" 当前屏幕 dpr = 2 ，CSS 宽度为 375px。")]),t._v(" "),a("p",[t._v("当前屏幕 CSS 宽度为 375px，则图片 CSS 宽度为 300px。分别用上述 3 个宽度描述符的数值除以 300。")]),t._v(" "),a("ol",[a("li",[t._v("300 / 300 = 1")]),t._v(" "),a("li",[t._v("600 / 300 = 2")]),t._v(" "),a("li",[t._v("1200 / 300 = 4")])]),t._v(" "),a("p",[t._v("上面计算得到的 1、 2、 4 即是算出的有效的像素密度，换算成和 x 描述符等价的值 。这里 600w 算出的 2 即满足 dpr = 2 的情况，选择此张图。")]),t._v(" "),a("h3",{attrs:{id:"当前屏幕-dpr-3-css-宽度为-414px。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前屏幕-dpr-3-css-宽度为-414px。"}},[t._v("#")]),t._v(" 当前屏幕 dpr = 3 ，CSS 宽度为 414px。")]),t._v(" "),a("p",[t._v("当前屏幕 CSS 宽度为 414px，则图片 CSS 宽度仍为 300px。再计算一次：")]),t._v(" "),a("ol",[a("li",[t._v("300 / 300 = 1")]),t._v(" "),a("li",[t._v("600 / 300 = 2")]),t._v(" "),a("li",[t._v("1200 / 300 = 4")])]),t._v(" "),a("p",[t._v("因为 dpr = 3，2 已经不满足了，则此时会选择 1200w 这张图。")]),t._v(" "),a("h3",{attrs:{id:"当前屏幕-dpr-1-css-宽度为-1920px。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前屏幕-dpr-1-css-宽度为-1920px。"}},[t._v("#")]),t._v(" 当前屏幕 dpr = 1 ，CSS 宽度为 1920px。")]),t._v(" "),a("p",[t._v("当前屏幕 CSS 宽度为 1920px，则图片 CSS 宽度变为了 600px。再计算一次：")]),t._v(" "),a("ol",[a("li",[t._v("300 / 600 = .5")]),t._v(" "),a("li",[t._v("600 / 600 = 1")]),t._v(" "),a("li",[t._v("1200 / 600 = 2")])]),t._v(" "),a("p",[t._v("因为 dpr = 1，所以此时会选择 600w 对应的图片。\n具体的可以试下这个 Demo：CodePen Demo -- srcset 属性配合 w 宽度描述符配合 sizes 属性\n此方案的意义在于考虑到了响应性布局的复杂性与屏幕的多样性，利用上述规则，可以一次适配 PC 端大屏幕和移动端高清屏，一箭多雕。")])])}),[],!1,null,null,null);s.default=p.exports}}]);