(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{304:function(e,a,t){"use strict";t.r(a);var l=t(14),n=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ol",[t("li",[t("p",[e._v("对象基本知识")]),e._v(" "),t("ul",[t("li",[e._v("声明对象的两种语法"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- let obj = { 'name':小明, 'age':18 }\n- let obj = new Object({ 'name':小明, 'age':18 })\n")])])])])]),e._v(" "),t("ul",[t("li",[e._v("注意：\n"),t("ul",[t("li",[e._v("键名是字符串，引号省略也是字符串（symbol 也可以作为属性名）")]),e._v(" "),t("li",[e._v("引号可以省略，省略之后只能写标识符")])])]),e._v(" "),t("li",[e._v("变量作为属性名"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let a = 'mmp'\nlet obj = {a: 'emm'} // obj.a\nlet obj = {[a]: 'emm'} // obj[a]\n")])])]),t("ul",[t("li",[e._v("如果使用 [ ] 语法，那么 JS 会先求 [ ] 中表达式的值，注意区分表达式是变量还是常量。")]),e._v(" "),t("li",[e._v("如果使用点语法，那么点后面一定是 string 常量。")])])])]),e._v(" "),t("ul",[t("li",[e._v("对象的原型\n"),t("ul",[t("li",[e._v("每个对象都有一个隐藏属性，保存着原型的地址")]),e._v(" "),t("li",[e._v("共有属性组成的对象叫原型")])])])])]),e._v(" "),t("li",[t("p",[e._v("删除对象的属性")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- delete obj.XXX/delete obj['xxx']\n- 'xxx' in obj : 检查 obj 是否包含属性名\n- 'xxx' in obj && obj.xxx === undefined : 包含属性名，但是值为 undefined\n")])])])]),e._v(" "),t("li",[t("p",[e._v("查看对象的属性")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- Object.keys(obj)： 查看 obj 的所有 key\n- Object.entries(obj)： 查看 obj 的键和值\n* console.dir(obj)： 查看自身和共有属性\n* obj.hasOwnProperty( 'toString' )： 检查是否是自身属性\n")])])])]),e._v(" "),t("li",[t("p",[e._v("修改或增加对象的属性")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- Object.assign(obj, {name: 'jack', age: 18})：批量赋值\n- Object.prototype.toString 修改原型上的属性\n- Object.create() 改原型（推荐使用）\n")])])])]),e._v(" "),t("li",[t("p",[e._v("'name' in obj 和 obj.hasOwnProperty('name') 的区别")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- 'name' in obj： 检查 name 是否是 obj 的属性\n- obj.hasOwnProperty('name')： 检查那么是否是 obj 自身的属性\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);