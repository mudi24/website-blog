(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{422:function(e,n,t){"use strict";t.r(n);var a=t(14),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"directives-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directives-指令"}},[e._v("#")]),e._v(" directives(指令)")]),e._v(" "),t("ul",[t("li",[e._v("全局指令"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  Vue.directives('my-directive',{\n    inserted: function(el){\n      el.addEventListener('click', ()=>{console.log('directive')})}\n  })\n")])])])]),e._v(" "),t("li",[e._v("局部指令"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  directives:{\n    on2:{ // 模仿简单版v-on\n      inserted(el, info){\n        el.addEventListener(info.arg, info.value)\n      }\n    },\n    unbind(el, info){ // 移除事件监听\n      el.removeEventListener(info.arg, info.value)\n    }\n  }\n")])])])])]),e._v(" "),t("ul",[t("li",[e._v("directive 函数属性\n"),t("ul",[t("li",[e._v("bind(el, info, vnode, oldVnode) 与 created 类似")]),e._v(" "),t("li",[e._v("inserted(el, info, vnode, oldVnode) 与 mounted 类似")]),e._v(" "),t("li",[e._v("update(el, info, vnode, oldVnode) 与 updated 类似")]),e._v(" "),t("li",[e._v("componentUpdated(el, info, vnode, oldVnode)")]),e._v(" "),t("li",[e._v("unbind(el, info, vnode, oldVnode) 与 destoryed 类似")])])])]),e._v(" "),t("ul",[t("li",[e._v("指令的作用\n"),t("ul",[t("li",[e._v("减少重复的 DOM 操作（数据绑定，事件监听，DOM 更新）")])])])]),e._v(" "),t("h3",{attrs:{id:"mixins-混入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixins-混入"}},[e._v("#")]),e._v(" mixins(混入)")]),e._v(" "),t("ul",[t("li",[e._v("mixins 的作用: 减少 data、methods、钩子的重复")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    // log.js\n      const log = {}\n      export default log\n    // 其他组件引入并使用\n      import log from 'log.js'\n      export default{\n        mixins:[log]\n      }\n")])])]),t("ul",[t("li",[e._v("选项智能合并\n"),t("ul",[t("li",[e._v("当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。")]),e._v(" "),t("li",[e._v("数据对象在内部会进行合并，并在发生冲突时以组件数据优先。")]),e._v(" "),t("li",[e._v("同名钩子函数将合并为一个数组，都将被调用。混入对象的钩子将在组件自身钩子之前调用。")]),e._v(" "),t("li",[e._v("值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。")])])]),e._v(" "),t("li",[e._v("不推荐全局混入（会造成意外的效果）")]),e._v(" "),t("li",[e._v("自定义选项合并策略：https://cn.vuejs.org/v2/guide/mixins.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5")])]),e._v(" "),t("h3",{attrs:{id:"extends-继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extends-继承"}},[e._v("#")]),e._v(" extends(继承)")]),e._v(" "),t("ul",[t("li",[e._v("extends 也使用与 mixins 同样的策略进行合并。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    // 全局\n      const MyVue = Vue.extend()\n      export default MyVue\n    // 局部\n      import MyVue from 'MyVue.js'\n      export default{\n        extends: MyVue\n      }\n")])])]),t("h3",{attrs:{id:"provide-提供-和-inject-注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provide-提供-和-inject-注入"}},[e._v("#")]),e._v(" provide(提供) 和 inject(注入)")]),e._v(" "),t("ul",[t("li",[e._v("作用：大范围的 data 和 method 共用")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  // 祖先提供\n    export default{\n      provide:{\n        'themeName' = this.themeName,\n        // 定义修改数据的函数，然后暴露出去\n        'changeTheme'= this.changeTheme\n      }\n      methods:{\n        changeTheme(){}\n      }\n    }\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  // 后代注入\n    export default{\n      // 接收并调用函数，修改祖先数据\n      inject:['themeName', 'changeTheme']\n      methods:{\n        change(){\n          changeTheme()\n        }\n      }\n    }\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);