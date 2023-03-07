(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{308:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),a("ul",[a("li",[t._v("Promise 是一个类")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Promise.all()")]),t._v(" "),a("ul",[a("li",[t._v("返回一个 "),a("strong",[t._v("Promise 实例")]),t._v("， 所有 promise 都成功才会成功，有一个 promise 失败则为失败。"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  Promise.all([promise1, promise2,promise3).then(function(values) {\n      console.log(values);\n  });\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("Promise.race()")]),t._v(" "),a("ul",[a("li",[t._v("返回一个 "),a("strong",[t._v("promise")]),t._v("，一旦 Promise 中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  const promise1 = new Promise(function(resolve, reject) {\n        setTimeout(resolve, 500, 'one');\n  });\n\n  const promise2 = new Promise(function(resolve, reject) {\n        setTimeout(resolve, 100, 'two');\n  });\n\n  Promise.race([promise1, promise2]).then(function(value) {\n        console.log(value);\n  });\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Promise.reject")]),t._v(" "),a("ul",[a("li",[t._v("返回一个带有拒绝原因的 "),a("strong",[t._v("Promise 对象")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  function resolved(result) {\n        console.log('Resolved');\n  }\n\n  function rejected(result) {\n        console.error(result);\n  }\n\n  Promise.reject(new Error('fail')).then(resolved, rejected);\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Promise.resolve")]),t._v(" "),a("ul",[a("li",[t._v("返回一个以给定值解析后的 "),a("strong",[t._v("Promise 对象")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  Promise.resolve("Success").then(function(value) {\n        console.log(value); // "Success"\n  }, function(value) {\n        // 不会被调用\n  });\n')])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Promise.prototype.then")]),t._v(" "),a("ul",[a("li",[t._v("返回一个 "),a("strong",[t._v("Promise")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  const promise1 = new Promise(function(resolve, reject) {\n        resolve('Success!');\n  });\n\n  promise1.then(function(value) {\n        console.log(value);\n        // expected output: \"Success!\"\n  });\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Promise.prototype.finally")]),t._v(" "),a("ul",[a("li",[t._v("返回一个 "),a("strong",[t._v("Promise")]),t._v("。在 promise 结束时，无论成功还是失败都会执行指定的回调函数。避免了同样的语句需要在 then()和 catch()中各写一次的情况。")])])]),t._v(" "),a("li",[a("p",[t._v("Promise.prototype.catch")]),t._v(" "),a("ul",[a("li",[t._v("返回一个 "),a("strong",[t._v("Promise")]),t._v("。用来捕获错误")])])])]),t._v(" "),a("h4",{attrs:{id:"async、await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async、await"}},[t._v("#")]),t._v(" async、await")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("看起来更像同步，是否需要优先渲染")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  function start() {\n   getWeather('北京').then(weather1 => {\n      console.log('北京:' + weather1.weather)\n   })\n   .then(() => getWeather('杭州'))\n   .then(weather2 => {\n      console.log('杭州:' + weather2.weather)\n   })\n  }.catch(err=>console.log(err))\n\n  async function start() {\n    let weather1 = await getWeather('北京')\n    console.log('北京:' + weather1.weather)\n    let weather2 = await getWeather('杭州')\n    console.log('杭州:' + weather2.weather)\n  }\n  start().catch(err=>console.log(err))\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"手写简易-promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写简易-promise"}},[t._v("#")]),t._v(" 手写简易 Promise")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Promise2 = {\n  state = 'pending'\n  succeed = null\n  fail = null\n\n  resolve(result){\n    setTimeout(()=>{\n      this.state = 'fulfilled'\n      this.succeed(result)\n    })\n  }\n  reject(err){\n    setTimeout(()=>{\n      this.state = 'rejected'\n      this.fail(err)\n    })\n  }\n  constructor(fn){\n    fn(this.resolve.bind(this), this.reject.bind(this))\n  }\n  then(succeed, fail){\n    this.succeed = succeed\n    this.fail = fail\n  }\n}\n")])])]),a("h4",{attrs:{id:"封装-jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装-jsonp"}},[t._v("#")]),t._v(" 封装 JSONP")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function jsonp(url,data={}){\n  return new Promise((resolve,reject) => {\n    window._fn_ = data => resolve(data)\n    let script = document,createElement('script')\n    let query = Object.entries(data).map(a => `${a[0]} = ${a[1]}`).join('&')\n    script.src = url + '?callback = _fn_&' + query\n    script.onerror = () =>reject('加载失败')\n    document.head.appendChild(script)\n    document.head.removeChild(script)\n  })\n}\njsonp('').then(data=>{},err=>{})\n")])])]),a("h4",{attrs:{id:"服务器中转实现跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器中转实现跨域"}},[t._v("#")]),t._v(" 服务器中转实现跨域")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("中转服务器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" urlObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bridge'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Not Found'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not found'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("浏览器端")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前代码在 http://js.jirengu.com 下运行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8888/bridge?url="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);