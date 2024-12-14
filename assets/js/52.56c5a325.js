(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{490:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"解决百度无法收录搭建在github上的静态博客的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决百度无法收录搭建在github上的静态博客的问题"}},[t._v("#")]),t._v(" 解决百度无法收录搭建在GitHub上的静态博客的问题")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果你正在寻找本博客的搭建文档，博主建议您查看这个仓库的"),a("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("由于GitHub禁止百度爬虫访问，造成托管在GitHub Pages上的博客无法被百度收录。相关问题可以通过百度站长平台的"),a("code",[t._v("抓取诊断")]),t._v("再现，每次都是403 Forbidden的错误。")]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[t._v("同时将博客同时同步托管到GitHub Pages和"),a("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding pages"),a("OutboundLink")],1),t._v("上，解决百度不收录问题。最后发现在国内使用coding pages打开速度特别快，而且还会被百度收录，因此我把coding pages的站点作为主站点，原本在github pages的作为分站点。")]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("p",[t._v("1、注册"),a("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding"),a("OutboundLink")],1),t._v("账号，创建仓库，把代码推送到coding仓库，并开启pages服务。")]),t._v(" "),a("blockquote",[a("p",[t._v("git 操作部分和使用github的差不多，不了解git操作的可以看我的另一篇文章："),a("a",{attrs:{href:"https://xugaoyi.com/pages/9a7ee40fc232253e/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git使用手册"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("2、我的博客项目使用vuepress搭建的，使用的是如下自动部署脚本，同时将代码推送到github和conding。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# github")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b.xugaoyi.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@github.com:xugaoyi/blog.git master:gh-pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到github")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# coding")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xugaoyi.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CNAME\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f git@git.dev.tencent.com:xugaoyi/xugaoyi.git master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布到coding")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退回开始所在目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf docs/.vuepress/dist\n")])])]),a("blockquote",[a("p",[t._v("因为我想给两个平台上绑定不同的自定义域名，因此我分开创建了CNAME文件。")])]),t._v(" "),a("p",[t._v("3、有自定义域名的，也可以在coding pages绑定自定义域名，域名DNS解析中添加CNAME记录指向coding pages的站点地址即可。（没有自定义域名的可忽略，同时把自动部署脚本中的创建CNAME文件的脚本去掉）")]),t._v(" "),a("p",[t._v("最后，使用百度站长的抓取诊断，发现抓取成功啦，再使用百度站长的"),a("a",{attrs:{href:"https://ziyuan.baidu.com/linksubmit/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接提交"),a("OutboundLink")],1),t._v("功能，把链接提交给百度，过一段时间就可能在百度搜索中搜索到啦。")]),t._v(" "),a("h3",{attrs:{id:"如何知道百度有没有收录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何知道百度有没有收录"}},[t._v("#")]),t._v(" 如何知道百度有没有收录？")]),t._v(" "),a("p",[t._v("在百度搜索框中使用site:<链接地址>，如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("site:xugaoyi.com\n")])])]),a("h2",{attrs:{id:"相关文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://xugaoyi.com/pages/f44d2f9ad04ab8d3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《GitHub Actions 定时运行代码：每天定时百度链接推送》"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);