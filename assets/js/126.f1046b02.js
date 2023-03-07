(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{408:function(t,n,e){"use strict";e.r(n);var o=e(14),a=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("ul",[e("li",[t._v("Vue 文档：https://cn.vuejs.org/v2/guide/typescript.html#ad")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("创建 Vue 项目")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install --global @vue/cli\nvue create my-project\n")])])])]),t._v(" "),e("li",[e("p",[t._v("基于类的 Vue 组件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\n\n// @Component 修饰符注明了此类为一个 Vue 组件\n@Component({\n    // 所有的组件选项都可以放在这里(props, components, watch)\n    template: '<button @click=\"onClick\">Click!</button>'\n})\nexport default class MyComponent extends Vue {\n    // 初始数据可以直接声明为实例的属性(data)\n    message: string = 'Hello!'\n\n    // 组件方法也可以直接声明为实例的方法(methods)\n    onClick (): void {\n      window.alert(this.message)\n    }\n}\n")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("@Component()")]),t._v(" 里面包含的是共用的属性")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("export default class MyComponent extends Vue{}")]),t._v(" 里面包含的是组件自己特有的属性")])]),t._v(" "),e("li",[e("p",[t._v("示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\n\ninterface Todo{\n    name: String;\n    status: 'done' | 'todo' | 'deleted''\n}\n\n@Component({\n    components: {\n      NewTodo,\n      TodoList,\n    },\n    watch: {\n      list(newValue: Array<Todo>){\n        let string = JSON.stringify(newValue)\n        localStorage.setItem('data',string)\n      }\n    }\n})\nexport default class App extends Vue {\n    list: Array<Todo> = localStorage.getItem('data')\n      ? JSON.parse(<string>localStorage.getItem('data')) : []; // 断言\n    addTodo(name:String){\n      let todo: Todo = {name: name, status: 'todo'}\n      this.list.push(todo)\n    }\n    updateTodo(todo: Todo,part: Partial<Todo>){\n      // Partial<Todo>表示类型为Todo中的一部分\n      let index = this.list.indexOf(todo)\n      let newTodo = Object.assign({}, todo, part)\n      this.list.splice(index, 1, newTodo)\n    }\n}\n")])])])])])])}),[],!1,null,null,null);n.default=a.exports}}]);