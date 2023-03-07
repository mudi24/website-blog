(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{356:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --global user.name 你的英文名\ngit config --global user.email 你的邮箱\ngit config --global push.default simple\ngit config --global core.quotepath false\ngit config --global core.editor "code--wait"\ngit config --global core.autoctlf input\n')])])]),s("ul",[s("li",[t._v(".gitignore 记录哪些变动是不需要提交的")])]),t._v(" "),s("h2",{attrs:{id:"查看代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看代码"}},[t._v("#")]),t._v(" 查看代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git status\ngit status -sb  查看哪个冲突\ngit commit -m\ngit commit -v 打开编辑器，输入本次提交代码的相关信息\ngit log 查看提交历史\ngit reset --hard xxxxxx 回到指定版本\ngit reflog  查看提交历史和版本切换历史\ngit branch\ngit branch -d 删除分支\ngit checkout\ngit show 查看修改的内容\ngit merge\ngit push origin button:button\ngit remote -v 查看关联的远程仓库\n")])])]),s("h2",{attrs:{id:"如何解决代码冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何解决代码冲突"}},[t._v("#")]),t._v(" 如何解决代码冲突")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git status -sb 查看冲突内容\n======   修改冲突\ngit add 文件名 标记文件\ngit commit  提交\n")])])]),s("h2",{attrs:{id:"如何上传其他分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何上传其他分支"}},[t._v("#")]),t._v(" 如何上传其他分支")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("git push origin x:x")])]),t._v(" "),s("li",[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout x\ngit push -u origin x\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"克隆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#克隆"}},[t._v("#")]),t._v(" 克隆")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone git@?/xxx.git yyy 克隆并重命名\ngit clone git@?/xxx.git . 克隆并使用当前目录存放（空目录）\n")])])]),s("h2",{attrs:{id:"上传到两个远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传到两个远程仓库"}},[t._v("#")]),t._v(" 上传到两个远程仓库")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git remote add repo2 git@xxxxxx\ngit push -u repo2 master\n")])])]),s("h2",{attrs:{id:"美化历史命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#美化历史命令"}},[t._v("#")]),t._v(" 美化历史命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git rebase -i xxxx(提交号)\n参数：r，reword 采用，但改写message\n参数：s，squash 采用，但改写message\ngit rebase --abort 取消rebase\ngit rebase --continue 继续\n")])])]),s("h2",{attrs:{id:"临时隐藏代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时隐藏代码"}},[t._v("#")]),t._v(" 临时隐藏代码")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git stash 隐藏\ngit stash pop 出现\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);