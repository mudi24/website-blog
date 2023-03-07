(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{312:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"基本数据类型-原始数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型-原始数据类型"}},[t._v("#")]),t._v(" 基本数据类型(原始数据类型)")]),t._v(" "),s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" number")]),t._v(" "),s("h3",{attrs:{id:"string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" string")]),t._v(" "),s("h3",{attrs:{id:"boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" boolean")]),t._v(" "),s("ul",[s("li",[t._v("使用 Boolean 进行转换时，只有"),s("strong",[t._v("undefined, null, 0, -0, NaN, ''")]),t._v(" 这六种会被转换为 false")])]),t._v(" "),s("h3",{attrs:{id:"null"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" null")]),t._v(" "),s("ul",[s("li",[t._v("let x = null ，此时已经初始化")])]),t._v(" "),s("h3",{attrs:{id:"undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined"}},[t._v("#")]),t._v(" undefined")]),t._v(" "),s("ul",[s("li",[t._v("let x 等同于 let x = undefined ,此时并没有初始化")])]),t._v(" "),s("h3",{attrs:{id:"注意-五个特殊的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-五个特殊的值"}},[t._v("#")]),t._v(" 注意：五个特殊的值")]),t._v(" "),s("ul",[s("li",[t._v("falsy 值：相当于 false 但又不是 false 的值")]),t._v(" "),s("li",[t._v("undefined, null, 0, '', NaN")])]),t._v(" "),s("h3",{attrs:{id:"undefined-和-null-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined-和-null-的区别"}},[t._v("#")]),t._v(" undefined 和 null 的区别")]),t._v(" "),s("ul",[s("li",[t._v("相同点：\n"),s("ul",[s("li",[t._v("都是 falsy 值")]),t._v(" "),s("li",[t._v("都表示空")])])]),t._v(" "),s("li",[t._v("不同点：\n"),s("ul",[s("li",[t._v("null 是关键字，undefined 不是关键字")]),t._v(" "),s("li",[t._v("如果变量声明了但未赋值，默认为 undefined（未初始化），例："),s("code",[t._v("let x")]),t._v("等同于"),s("code",[t._v("let x = undefined")])]),t._v(" "),s("li",[t._v("如果变量声明为 null，表示该变量已经初始化")]),t._v(" "),s("li",[t._v("如果函数没有 return，默认 return undefined")]),t._v(" "),s("li",[t._v("前端程序员习惯上，把非对象的空值写为 undefined，把对象的空值写为 null")]),t._v(" "),s("li",[s("code",[t._v("null == undefined 为 true")]),t._v(","),s("code",[t._v("null===undefined为false")])]),t._v(" "),s("li",[t._v("null 转换为数字为 0，而 undefined 转换为数字为 NaN")])])])]),t._v(" "),s("h2",{attrs:{id:"复杂数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复杂数据类型"}},[t._v("#")]),t._v(" 复杂数据类型")]),t._v(" "),s("h3",{attrs:{id:"object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" object")]),t._v(" "),s("ul",[s("li",[t._v("键名是字符串（symbol 也可以作键名）")]),t._v(" "),s("li",[t._v("引号可以省略，省略之后只能写标识符")]),t._v(" "),s("li",[t._v("如果使用 [] 语法，那么 JS 会先求 [] 中的值，注意区分表达式是变量还是常量")]),t._v(" "),s("li",[t._v("如果使用点语法，那么点后面一定是 string 常量")])]),t._v(" "),s("h4",{attrs:{id:"查看属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看属性"}},[t._v("#")]),t._v(" 查看属性")]),t._v(" "),s("ul",[s("li",[t._v("Object.keys() 获取 obj 的 key，得到数组")]),t._v(" "),s("li",[t._v("Object.entries() 查看 obj 的键和值")]),t._v(" "),s("li",[t._v("Object.hasOwnProperty() 判断属性是否为自身属性")])]),t._v(" "),s("h4",{attrs:{id:"修改或增加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改或增加"}},[t._v("#")]),t._v(" 修改或增加")]),t._v(" "),s("ul",[s("li",[t._v("Object.assign() 批量赋值（浅拷贝对象的方法）")]),t._v(" "),s("li",[t._v("Object.create() 修改构造函数 Object 原型上的属性的另一种方法（推荐）"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"frank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("Object.prototype.toString 修改构造函数 Object 原型上的属性的另一种方法")])]),t._v(" "),s("h3",{attrs:{id:"array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array"}},[t._v("#")]),t._v(" array")]),t._v(" "),s("h3",{attrs:{id:"function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" function")]),t._v(" "),s("h3",{attrs:{id:"symbol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" symbol")]),t._v(" "),s("h3",{attrs:{id:"bigint-2020-年-6-月新增-表示任意大的整数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigint-2020-年-6-月新增-表示任意大的整数"}},[t._v("#")]),t._v(" BigInt(2020 年 6 月新增)，表示任意大的整数")]),t._v(" "),s("ul",[s("li",[t._v("目前用不到，MDN 链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt")])]),t._v(" "),s("h2",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),s("ul",[s("li",[t._v("number(n) 转换为 string: "),s("strong",[t._v("String(n)")]),t._v(" 或者 "),s("strong",[t._v("n + ''")])]),t._v(" "),s("li",[t._v("string(s) 转换为 number: "),s("strong",[t._v("Number(s)")]),t._v(" 或者 "),s("strong",[t._v("s - 0")]),t._v(" 或者 "),s("strong",[t._v("+s")]),t._v("， 或者使用 JS 提供的"),s("strong",[t._v("parseInt(s)"),s("strong",[t._v("和")]),t._v("parseFloat(s)")])]),t._v(" "),s("li",[t._v("任意数据类型(x)转换为 bool: "),s("strong",[t._v("Boolean(x)")]),t._v(" 或者 "),s("strong",[t._v("!!x")])]),t._v(" "),s("li",[t._v("特例："),s("code",[t._v("1.toString()")]),t._v(" 在浏览器运行中会报错")]),t._v(" "),s("li",[t._v("解决方案：\n"),s("ul",[s("li",[t._v("(1).toString()")]),t._v(" "),s("li",[t._v("1..toString()")]),t._v(" "),s("li",[t._v("1.0.toString()")]),t._v(" "),s("li",[t._v("1 .toString()")])])])]),t._v(" "),s("h2",{attrs:{id:"typeof-查看当前数据类型-返回一个字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof-查看当前数据类型-返回一个字符串"}},[t._v("#")]),t._v(" typeof() 查看当前数据类型，返回一个字符串")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Undefined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//boolean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//number")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//symbol")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//function")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" 其他对象"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Object")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);