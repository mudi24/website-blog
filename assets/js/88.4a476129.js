(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{366:function(n,e,a){"use strict";a.r(e);var t=a(14),l=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"基础类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础类型"}},[n._v("#")]),n._v(" 基础类型")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("七种数据类型（symbol）")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let a:null = null\nlet b:undefined = undefined\nlet c:boolean = true\nlet d:string = 'xxx'\nlet e:number = 1.223\nlet obj:Object = { name:'Irelia'}\nlet n:any = 1; //可以是任意数据类型\n")])])])])]),n._v(" "),a("ul",[a("li",[n._v("枚举\n"),a("ul",[a("li",[n._v("值默认为 0,1,2...")]),n._v(" "),a("li",[n._v("如果当前枚举成员没有初始化的值且它之前的枚举成员是一个数字常量。当前枚举成员的值为它上一个枚举成员的值加 1。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  enum Gender{\n        Man = 'man';  // 默认为Man = 0\n        A = 1, B, C;  // 1,2,3\n  }\n")])])])]),n._v(" "),a("li",[n._v("void(空)"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  function print(x:any):void { // 没有返回值\n    console.log(x)\n  }\n")])])])]),n._v(" "),a("li",[n._v("undefined\n"),a("ul",[a("li",[n._v("默认情况下，null 和 undefined 是所有类型的子类型。就是说可以把 null 和 undefined 赋值给任意类型的变量。")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let a:number = undefined\nlet a:string = null\n")])])])])]),n._v(" "),a("h3",{attrs:{id:"类型断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型断言"}},[n._v("#")]),n._v(" 类型断言")]),n._v(" "),a("ul",[a("li",[n._v("断言\n"),a("ul",[a("li",[n._v("在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let n:any = '122';\nconsole.log((<string>n).split('')) // 写法1\nconsole.log((n as string).split('')) // 写法2\n")])])]),a("ul",[a("li",[n._v("解构赋值"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  function({name,age}:any){\n    console.log(`Hi，${name}，${age}`)\n  }\n")])])])])]),n._v(" "),a("ul",[a("li",[a("p",[n._v("展开运算符")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let a1 = [1,2,3]\nlet a2 = [4,5,6]\nlet a3 = [...a1, ...a2]\n")])])])])]),n._v(" "),a("h3",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[n._v("#")]),n._v(" 类型转换")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let a:number = 123;\nlet b:string = a.toString(); //数字变字符串\n\nlet c:string = '123';\nlet d:number = parseFloat(c) // 字符串变数字\n\nlet s1:number = 1;\nlet b1:boolean = Boolean(s1); // 数字变布尔\n\nlet obj = { name: 'Irelia'};\nlet string = JSON.stringify(obj) // 字符串变对象\n\nlet string2 = `{ \"name\": \"Irelia\"}`;\nlet obj2 = JSON.parse(string) // 对象变字符串\n")])])]),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[n._v("#")]),n._v(" 接口")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("接口就是规定一个对象必须有这些属性。")])]),n._v(" "),a("li",[a("p",[n._v("readonly 只读属性")])]),n._v(" "),a("li",[a("p",[n._v("? 可选属性")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    interface Shape{\n        head:string;\n        body:string;\n    }\n    interface Human{\n        readonly name:string; // 只读属性，不可修改\n        age:number;\n        shape:Shape;\n        likeGame?: Array<string> // 可选属性，可有可无\n        say(word:string):void;\n    }\n    let frank:Human = {\n        name:'Irelia',\n        age:18,\n        shape: {head:'脑袋', body:'躯干'},\n        say(word:string){\n          console.log(word);\n        }\n    }\n    frank.say('I am Irelia')\n")])])]),a("ul",[a("li",[n._v("额外的属性来限制输入")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  interface SquareConfig{\n      height?: number;\n      width?: number;\n      [propsName:string]: number;\n      // 属性名为string时，对应的值必须为number\n  }\n  function createSquare(config: SquareConfig):void {}\n  let config ={\n      height: 666\n  }\n  let mySquare = createSquare(config)\n")])])]),a("ul",[a("li",[n._v("如果这个对象是函数")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  interface SearchFunc {\n      (source: string, substring: string):boolean;\n      // 参数类型为string，返回值类型为boolean\n  }\n")])])]),a("ul",[a("li",[n._v("如果这个对象是函数，而且这个对象的属性也是函数")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  interface 二则运算{\n      (a:number, b:number):number;\n      逆运算(a:number, b:number):number;\n  }\n  let fn = ():二则运算 => {\n      let x:any = function(a:number, b:number):number{\n        return a+b;\n      };\n      x.逆运算 = function(a:number, b:number){\n        return a-b;\n      };\n      return x\n  }\n  let add: 二则运算 = fn()\n  console.log(add(1,2));\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  let add: 二则运算 = ((): 二则运算 => {\n      let x: any = function(a:number, b:number):number{\n        return a+b;\n      }\n      x.逆运算 = function(a: number, b: number):number{\n        return a - b\n      }\n      return x\n  })();\n  console.log(add(1,2));\n")])])]),a("ul",[a("li",[n._v("接口继承\n"),a("ul",[a("li",[n._v("接口继承两个接口")]),n._v(" "),a("li",[n._v("接口可以继承继承过的接口")])])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("    interface 有机物{\n          c:boolean,\n          h:boolean,\n          o:boolean,\n    }\n    interface Animal extends 有机物{\n          move():void\n    }\n    // interface Human extends Animal, 有机物{}\n    interface Human extends Animal{\n          name: string;\n          age: number;\n    }\n    let frank:Human = {\n          c:true,\n          h:true,\n          o:true,\n          age:18,\n          name:'frank',\n          move(){}\n    }\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);