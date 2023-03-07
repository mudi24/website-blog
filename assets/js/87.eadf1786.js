(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{365:function(t,e,n){"use strict";n.r(e);var s=n(14),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("ul",[n("li",[t._v("配置 npm 淘宝源："),n("code",[t._v("npm config set registry https://registry.npm.taobao.org/")])]),t._v(" "),n("li",[n("code",[t._v("npm install typescript@版本号 -g")])]),t._v(" "),n("li",[n("code",[t._v("npm install ts-node@版本号 -g")]),t._v(" // 使 ts 可以在 node 上运行\n"),n("ul",[n("li",[t._v("把 ts-node 安装后的可执行文件路径记录下来")])])])]),t._v(" "),n("h3",{attrs:{id:"调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Windows 用户需要运行命令")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("npm init -y")])]),t._v(" "),n("li",[n("code",[t._v("npm i -D ts-node typescript")])])])]),t._v(" "),n("li",[n("p",[t._v("创建.vscode/launch.json 文件，内容如下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n   "configurations": [\n       {\n       "name": "ts-node",\n       "type": "node",\n       "request": "launch",\n       "program": "注意看这里，要写成ts-node对应的可执行文件，Windows 用户注意了，你应该写成\n       ${workspaceRoot}/node_modules/ts-node/dist/bin.js",\n       "args": ["${relativeFile}"],\n       "cwd": "${workspaceRoot}",\n       "protocol": "inspector"\n       }\n   ]\n}\n')])])])])]),t._v(" "),n("ul",[n("li",[t._v("找到调试选项，选择 ts-node，然后点击调试，就会在下方控制台输出结果")]),t._v(" "),n("li",[t._v("ts 文件需要通过 tsc 命令编译为 js 文件才可以在浏览器中运行")])]),t._v(" "),n("h3",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("ul",[n("li",[t._v("接口"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('  interface Person{\n    姓: string;\n    名: string;\n  }\n  function greeter(person:Person){\n    return "Hello,"+person.姓+" "+person.名;\n  }\n  let user = {姓:"type",名:"script"}\n  console.log(greeter(user))\n')])])])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  class Student {\n    fullName: string;\n    constructor(public 姓, public 名) {\n        // public会把属性变为对象的属性，等价于this.firstName = firstName\n        this.fullName = 姓 + 名;\n    }\n  }\n")])])])]),t._v(" "),n("li",[n("p",[t._v("重载")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 可以支持多种形式的参数类型\n  function add(a:string, b:string):string;\n  function add(a:number, b:number):number;\n  function add(a:any, b:any):any{\n    return a + b\n  }\n")])])])]),t._v(" "),n("li",[n("p",[t._v("数组")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let list: number[] = [1,2,3]\nlet list: Array<number> = [1,2,3]\n")])])])]),t._v(" "),n("li",[n("p",[t._v("元组")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let x: [string, number]\n")])])])]),t._v(" "),n("li",[n("p",[t._v("枚举")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  enum Gender{\n    Male,\n    Female\n  }\n")])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);