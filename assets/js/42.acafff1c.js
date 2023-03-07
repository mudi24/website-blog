(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{317:function(e,t,r){"use strict";r.r(t);var s=r(14),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"http-模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-模块"}},[e._v("#")]),e._v(" HTTP 模块")]),e._v(" "),r("ul",[r("li",[e._v("node-dev 文件修改自动重启 node")]),e._v(" "),r("li",[e._v("ts-node 可以在 node 环境下直接运行 ts")]),e._v(" "),r("li",[e._v("ts-node-dev 结合了以上两种工具")])]),e._v(" "),r("h3",{attrs:{id:"curl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#curl"}},[e._v("#")]),e._v(" curl")]),e._v(" "),r("ul",[r("li",[e._v("GET 请求：curl -v url")]),e._v(" "),r("li",[e._v('POST 请求：curl -v -d "name=Irelia" url')]),e._v(" "),r("li",[e._v("设置请求头：-H 'Content-Type:application/json'")]),e._v(" "),r("li",[e._v("设置动词：-X PUT")]),e._v(" "),r("li",[e._v("JSON 请求：curl -d '{\"name\":\"bob\"}' -H 'Content-Type:application/json' url")]),e._v(" "),r("li",[e._v("-v 查看请求的内容")])]),e._v(" "),r("h2",{attrs:{id:"使用-ts-node-dev"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-ts-node-dev"}},[e._v("#")]),e._v(" 使用 ts-node-dev")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ts-node-dev index.ts\n")])])]),r("h2",{attrs:{id:"添加声明依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加声明依赖"}},[e._v("#")]),e._v(" 添加声明依赖")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yarn add --dev @types/node\n")])])]),r("h2",{attrs:{id:"server-是-http-server-类的实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-是-http-server-类的实例"}},[e._v("#")]),e._v(" server 是 http.Server 类的实例")]),e._v(" "),r("ul",[r("li",[e._v("http.createServer 的返回值")]),e._v(" "),r("li",[e._v("request 事件和 listen()方法比较常用")])]),e._v(" "),r("h2",{attrs:{id:"http-server-继承了-net-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-server-继承了-net-server"}},[e._v("#")]),e._v(" http.Server 继承了 net.Server")]),e._v(" "),r("ul",[r("li",[e._v("可以使用 net.Server 的 error 事件和 address()方法")])]),e._v(" "),r("h3",{attrs:{id:"request-是-http-incomingmessage-的实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-是-http-incomingmessage-的实例"}},[e._v("#")]),e._v(" request 是 http.IncomingMessage 的实例")]),e._v(" "),r("ul",[r("li",[e._v("拥有 headers/method/url 等属性")]),e._v(" "),r("li",[e._v("继承了 stream.Readable 的 data/end/error 事件")]),e._v(" "),r("li",[e._v("因为 TCP 协议，无法直接拿到请求的消息体")])]),e._v(" "),r("h2",{attrs:{id:"用-node-js-获取请求内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用-node-js-获取请求内容"}},[e._v("#")]),e._v(" 用 Node.js 获取请求内容")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("server.on('request', (request, response)=>{\n  const array = []\n  // 上传数据时触发，每次内容较小，多次触发\n  request.on('data', (chunk)=>{\n    array.push(chunk)\n  })\n  // 数据上传结束时触发\n  request.on('end', ()=>{\n    const body = Buffer.concat(array).toString()\n    // 每次获取的都是 Buffer，使用Buffer类连接在一起组成整块buffer，再把buffer转换为字符串\n    response.end('hi') // 请求处理结束之后进行响应\n  })\n})\n")])])]),r("h3",{attrs:{id:"response-是-http-serverresponse-的实例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-是-http-serverresponse-的实例"}},[e._v("#")]),e._v(" response 是 http.ServerResponse 的实例")]),e._v(" "),r("ul",[r("li",[e._v("拥有 getHeader/setHeader/end/write 等方法")]),e._v(" "),r("li",[e._v("拥有 statusCode 属性，可读可写")]),e._v(" "),r("li",[e._v("继承了 stream")])]),e._v(" "),r("h2",{attrs:{id:"完成几个基本操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#完成几个基本操作"}},[e._v("#")]),e._v(" 完成几个基本操作")]),e._v(" "),r("ul",[r("li",[e._v("根据 url 返回不同的文件")]),e._v(" "),r("li",[e._v("处理查询参数")]),e._v(" "),r("li",[e._v("匹配任意文件")]),e._v(" "),r("li",[e._v("处理不存在的页面（404）")]),e._v(" "),r("li",[e._v("处理非 GET 请求")]),e._v(" "),r("li",[e._v("添加缓存选项")]),e._v(" "),r("li",[e._v("响应内容启用 gzip")]),e._v(" "),r("li",[e._v("对比业界优秀案例 http-server/node-static，制作一个静态服务器")])]),e._v(" "),r("h2",{attrs:{id:"用-node-js-读取请求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用-node-js-读取请求"}},[e._v("#")]),e._v(" 用 Node.js 读取请求")]),e._v(" "),r("ul",[r("li",[e._v("读取请求动词 request.method")]),e._v(" "),r("li",[e._v("读取路径：\n"),r("ul",[r("li",[e._v("request.url 路径，带查询参数")]),e._v(" "),r("li",[e._v("path 纯路径，不带查询参数")]),e._v(" "),r("li",[e._v("query 只有查询参数")])])]),e._v(" "),r("li",[e._v("读取请求头：request.headers['Accept']")])]),e._v(" "),r("h2",{attrs:{id:"用-node-js-设置响应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用-node-js-设置响应"}},[e._v("#")]),e._v(" 用 Node.js 设置响应")]),e._v(" "),r("ul",[r("li",[e._v("设置响应状态码：response.statusCode = 200")]),e._v(" "),r("li",[e._v("设置响应头：response.setHeader('Content-Type','text/html')")]),e._v(" "),r("li",[e._v("设置响应体：response.write('内容)，可以用 response.write 追加内容")])])])}),[],!1,null,null,null);t.default=a.exports}}]);