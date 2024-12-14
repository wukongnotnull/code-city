(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{576:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"初识python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初识python"}},[t._v("#")]),t._v(" 初识Python")]),t._v(" "),a("h2",{attrs:{id:"python简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python简介"}},[t._v("#")]),t._v(" Python简介")]),t._v(" "),a("h3",{attrs:{id:"python的历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python的历史"}},[t._v("#")]),t._v(" Python的历史")]),t._v(" "),a("ol",[a("li",[t._v("1989年圣诞节：Guido von Rossum开始写Python语言的编译器。")]),t._v(" "),a("li",[t._v("1991年2月：第一个Python编译器（同时也是解释器）诞生，它是用C语言实现的（后面），可以调用C语言的库函数。在最早的版本中，Python已经提供了对“类”，“函数”，“异常处理”等构造块的支持，还有对列表、字典等核心数据类型，同时支持以模块为基础来构造应用程序。")]),t._v(" "),a("li",[t._v("1994年1月：Python 1.0正式发布。")]),t._v(" "),a("li",[t._v("2000年10月16日：Python 2.0发布，增加了完整的"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8)",target:"_blank",rel:"noopener noreferrer"}},[t._v("垃圾回收"),a("OutboundLink")],1),t._v("，提供了对"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Unicode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode"),a("OutboundLink")],1),t._v("的支持。与此同时，Python的整个开发过程更加透明，社区对开发进度的影响逐渐扩大，生态圈开始慢慢形成。")]),t._v(" "),a("li",[t._v("2008年12月3日：Python 3.0发布，它并不完全兼容之前的Python代码，不过因为目前还有不少公司在项目和运维中使用Python 2.x版本，所以Python 3.x的很多新特性后来也被移植到Python 2.6/2.7版本中。")])]),t._v(" "),a("p",[t._v("目前我们使用的Python 3.7.x的版本是在2018年发布的，Python的版本号分为三段，形如A.B.C。其中A表示大版本号，一般当整体重写，或出现不向后兼容的改变时，增加A；B表示功能更新，出现新功能时增加B；C表示小的改动（例如：修复了某个Bug），只要有修改就增加C。如果对Python的历史感兴趣，可以阅读名为"),a("a",{attrs:{href:"http://www.cnblogs.com/vamei/archive/2013/02/06/2892628.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Python简史》"),a("OutboundLink")],1),t._v("的网络文章。")]),t._v(" "),a("h3",{attrs:{id:"python的优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python的优缺点"}},[t._v("#")]),t._v(" Python的优缺点")]),t._v(" "),a("p",[t._v("Python的优点很多，简单的可以总结为以下几点。")]),t._v(" "),a("ol",[a("li",[t._v("简单明了，学习曲线低，比很多编程语言都容易上手。")]),t._v(" "),a("li",[t._v("开放源代码，拥有强大的社区和生态圈，尤其是在数据分析和机器学习领域。")]),t._v(" "),a("li",[t._v("解释型语言，天生具有平台可移植性，代码可以工作于不同的操作系统。")]),t._v(" "),a("li",[t._v("对两种主流的编程范式（面向对象编程和函数式编程）都提供了支持。")]),t._v(" "),a("li",[t._v("代码规范程度高，可读性强，适合有代码洁癖和强迫症的人群。")])]),t._v(" "),a("p",[t._v("Python的缺点主要集中在以下几点。")]),t._v(" "),a("ol",[a("li",[t._v("执行效率稍低，对执行效率要求高的部分可以由其他语言（如：C、C++）编写。")]),t._v(" "),a("li",[t._v("代码无法加密，但是现在很多公司都不销售卖软件而是销售服务，这个问题会被弱化。")]),t._v(" "),a("li",[t._v("在开发时可以选择的框架太多（如Web框架就有100多个），有选择的地方就有错误。")])]),t._v(" "),a("h3",{attrs:{id:"python的应用领域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python的应用领域"}},[t._v("#")]),t._v(" Python的应用领域")]),t._v(" "),a("p",[t._v("目前Python在Web应用后端开发、云基础设施建设、DevOps、网络数据采集（爬虫）、自动化测试、数据分析、机器学习等领域都有着广泛的应用。")]),t._v(" "),a("h2",{attrs:{id:"安装python解释器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装python解释器"}},[t._v("#")]),t._v(" 安装Python解释器")]),t._v(" "),a("p",[t._v("想要开始Python编程之旅，首先得在自己使用的计算机上安装Python解释器环境，下面将以安装官方的Python解释器为例，讲解如何在不同的操作系统上安装Python环境。官方的Python解释器是用C语言实现的，也是使用最为广泛的Python解释器，通常称之为CPython。除此之外，Python解释器还有Java语言实现的Jython、C#语言实现的IronPython以及PyPy、Brython、Pyston等版本，有兴趣的读者可以自行了解。")]),t._v(" "),a("h3",{attrs:{id:"windows环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows环境"}},[t._v("#")]),t._v(" Windows环境")]),t._v(" "),a("p",[t._v("可以在"),a("a",{attrs:{href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python官方网站"),a("OutboundLink")],1),t._v("下载到Python的Windows安装程序（exe文件），需要注意的是如果在Windows 7环境下安装Python 3.x，需要先安装Service Pack 1补丁包（可以通过一些工具软件自动安装系统补丁的功能来安装），安装过程建议勾选“Add Python 3.x to PATH”（将Python 3.x添加到PATH环境变量）并选择自定义安装，在设置“Optional Features”界面最好将“pip”、“tcl/tk”、“Python test suite”等项全部勾选上。强烈建议选择自定义的安装路径并保证路径中没有中文。安装完成会看到“Setup was successful”的提示。如果稍后运行Python程序时，出现因为缺失一些动态链接库文件而导致Python解释器无法工作的问题，可以按照下面的方法加以解决。")]),t._v(" "),a("p",[t._v("如果系统显示api-ms-win-crt*.dll文件缺失，可以参照"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32087135",target:"_blank",rel:"noopener noreferrer"}},[t._v("《api-ms-win-crt*.dll缺失原因分析和解决方法》"),a("OutboundLink")],1),t._v("一文讲解的方法进行处理或者直接在"),a("a",{attrs:{href:"https://www.microsoft.com/zh-cn/download/details.aspx?id=48145",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软官网"),a("OutboundLink")],1),t._v("下载Visual C++ Redistributable for Visual Studio 2015文件进行修复；如果是因为更新Windows的DirectX之后导致某些动态链接库文件缺失问题，可以下载一个"),a("a",{attrs:{href:"https://dl.pconline.com.cn/download/360074-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DirectX修复工具"),a("OutboundLink")],1),t._v("进行修复。")]),t._v(" "),a("h3",{attrs:{id:"linux环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux环境"}},[t._v("#")]),t._v(" Linux环境")]),t._v(" "),a("p",[t._v("Linux环境自带了Python 2.x版本，但是如果要更新到3.x的版本，可以在"),a("a",{attrs:{href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python的官方网站"),a("OutboundLink")],1),t._v("下载Python的源代码并通过源代码构建安装的方式进行安装，具体的步骤如下所示（以CentOS为例）。")]),t._v(" "),a("ol",[a("li",[t._v("安装依赖库（因为没有这些依赖库可能在源代码构件安装时因为缺失底层依赖库而失败）。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("下载Python源代码并解压缩到指定目录。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tar.xz\nxz -d Python-3.7.6.tar.xz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf Python-3.7.6.tar\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("切换至Python源代码目录并执行下面的命令进行配置和安装。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Python-3.7.6\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/python37 --enable-optimizations\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("修改用户主目录下名为.bash_profile的文件，配置PATH环境变量并使其生效。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" .bash_profile\n")])])]),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... 此处省略上面的代码 ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(":/usr/local/python37/bin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... 此处省略下面的代码 ...")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("激活环境变量。")])]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" .bash_profile\n")])])]),a("h3",{attrs:{id:"macos环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos环境"}},[t._v("#")]),t._v(" macOS环境")]),t._v(" "),a("p",[t._v("macOS也自带了Python 2.x版本，可以通过"),a("a",{attrs:{href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python的官方网站"),a("OutboundLink")],1),t._v("提供的安装文件（pkg文件）安装Python 3.x的版本。默认安装完成后，可以通过在终端执行"),a("code",[t._v("python")]),t._v("命令来启动2.x版本的Python解释器，启动3.x版本的Python解释器需要执行"),a("code",[t._v("python3")]),t._v("命令。")]),t._v(" "),a("h2",{attrs:{id:"运行python程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行python程序"}},[t._v("#")]),t._v(" 运行Python程序")]),t._v(" "),a("h3",{attrs:{id:"确认python的版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确认python的版本"}},[t._v("#")]),t._v(" 确认Python的版本")]),t._v(" "),a("p",[t._v("可以Windows的命令行提示符中键入下面的命令。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python --version\n")])])]),a("p",[t._v("在Linux或macOS系统的终端中键入下面的命令。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python3 --version\n")])])]),a("p",[t._v("当然也可以先输入"),a("code",[t._v("python")]),t._v("或"),a("code",[t._v("python3")]),t._v("进入交互式环境，再执行以下的代码检查Python的版本。")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"编写python源代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写python源代码"}},[t._v("#")]),t._v(" 编写Python源代码")]),t._v(" "),a("p",[t._v("可以用文本编辑工具（推荐使用"),a("a",{attrs:{href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sublime"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),a("OutboundLink")],1),t._v("等高级文本编辑工具）编写Python源代码并用py作为后缀名保存该文件，代码内容如下所示。")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello, world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"运行程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行程序"}},[t._v("#")]),t._v(" 运行程序")]),t._v(" "),a("p",[t._v('切换到源代码所在的目录并执行下面的命令，看看屏幕上是否输出了"hello, world!"。')]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python hello.py\n")])])]),a("p",[t._v("或")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("python3 hello.py\n")])])]),a("h3",{attrs:{id:"代码中的注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码中的注释"}},[t._v("#")]),t._v(" 代码中的注释")]),t._v(" "),a("p",[t._v("注释是编程语言的一个重要组成部分，用于在源代码中解释代码的作用从而增强程序的可读性和可维护性，当然也可以将源代码中不需要参与运行的代码段通过注释来去掉，这一点在调试程序的时候经常用到。注释在随源代码进入预处理器或编译时会被移除，不会在目标代码中保留也不会影响程序的执行结果。")]),t._v(" "),a("ol",[a("li",[t._v("单行注释 - 以#和空格开头的部分")]),t._v(" "),a("li",[t._v("多行注释 - 三个引号开头，三个引号结尾")])]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n第一个Python程序 - hello, world!\n向伟大的Dennis M. Ritchie先生致敬\n\nVersion: 0.1\nAuthor: 骆昊\n"""')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello, world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# print("你好, 世界！")')]),t._v("\n")])])]),a("h2",{attrs:{id:"python开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python开发工具"}},[t._v("#")]),t._v(" Python开发工具")]),t._v(" "),a("h3",{attrs:{id:"idle-自带的集成开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idle-自带的集成开发工具"}},[t._v("#")]),t._v(" IDLE - 自带的集成开发工具")]),t._v(" "),a("p",[t._v("IDLE是安装Python环境时自带的集成开发工具，如下图所示。但是由于IDLE的用户体验并不是那么好所以很少在实际开发中被采用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wuKongNotNull/images-hosting/wukong-website/python-idle.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"ipython-更好的交互式编程工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipython-更好的交互式编程工具"}},[t._v("#")]),t._v(" IPython - 更好的交互式编程工具")]),t._v(" "),a("p",[t._v("IPython是一种基于Python的交互式解释器。相较于原生的Python交互式环境，IPython提供了更为强大的编辑和交互功能。可以通过Python的包管理工具pip安装IPython，具体的操作如下所示。")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ipython\n")])])]),a("p",[t._v("或")]),t._v(" "),a("div",{staticClass:"language-Shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ipython\n")])])]),a("p",[t._v("安装成功后，可以通过下面的ipython命令启动IPython，如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wuKongNotNull/images-hosting/wukong-website/python-ipython.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"sublime-text-高级文本编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sublime-text-高级文本编辑器"}},[t._v("#")]),t._v(" Sublime Text - 高级文本编辑器")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wuKongNotNull/images-hosting/wukong-website/python-sublime.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("首先可以通过"),a("a",{attrs:{href:"https://www.sublimetext.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),a("OutboundLink")],1),t._v("下载安装程序安装Sublime Text 3或Sublime Text 2。")])]),t._v(" "),a("li",[a("p",[t._v("安装包管理工具。")]),t._v(" "),a("ol",[a("li",[t._v("通过快捷键Ctrl+`或者在View菜单中选择Show Console打开控制台，输入下面的代码。")])]),t._v(" "),a("ul",[a("li",[t._v("Sublime 3")])]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v("  urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("pf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Package Control.sublime-package'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("ipp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sublime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("installed_packages_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_opener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_opener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProxyHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlopen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://sublime.wbond.net/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%20'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Sublime 2")])]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v("  urllib2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("pf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Package Control.sublime-package'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("ipp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sublime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("installed_packages_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("makedirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("ifnotos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("elseNone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("urllib2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_opener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urllib2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("build_opener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urllib2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProxyHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ipp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urllib2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlopen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://sublime.wbond.net/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%20'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please restart Sublime Text to finish installation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v('在浏览器中输入  https://sublime.wbond.net/Package%20Control.sublime-package 下载包管理工具的安装包，并找到安装Sublime目录下名为"Installed Packages"的目录，把刚才下载的文件放到这个文件加下，然后重启Sublime Text就搞定了。')])])]),t._v(" "),a("li",[a("p",[t._v("安装插件。通过Preference菜单的Package Control或快捷键Ctrl+Shift+P打开命令面板，在面板中输入Install Package就可以找到安装插件的工具，然后再查找需要的插件。我们推荐大家安装以下几个插件：")]),t._v(" "),a("ul",[a("li",[t._v("SublimeCodeIntel - 代码自动补全工具插件。")]),t._v(" "),a("li",[t._v("Emmet - 前端开发代码模板插件。")]),t._v(" "),a("li",[t._v("Git - 版本控制工具插件。")]),t._v(" "),a("li",[t._v("Python PEP8 Autoformat - PEP8规范自动格式化插件。")]),t._v(" "),a("li",[t._v("ConvertToUTF8 - 将本地编码转换为UTF-8。")])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("说明")]),t._v("：事实上"),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code"),a("OutboundLink")],1),t._v("可能是更好的选择，它不用花钱并提供了更为完整和强大的功能，有兴趣的读者可以自行研究。")])]),t._v(" "),a("h3",{attrs:{id:"pycharm-python开发神器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pycharm-python开发神器"}},[t._v("#")]),t._v(" PyCharm - Python开发神器")]),t._v(" "),a("p",[t._v("PyCharm的安装、配置和使用在"),a("RouterLink",{attrs:{to:"/Python/玩转PyCharm.html"}},[t._v("《玩转PyCharm》")]),t._v("进行了介绍，有兴趣的读者可以选择阅读。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wuKongNotNull/images-hosting/wukong-website/python-pycharm.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在Python交互式环境中输入下面的代码并查看结果，请尝试将看到的内容翻译成中文。")]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" this\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("说明")]),t._v("：输入上面的代码，在Python的交互式环境中可以看到Tim Peter撰写的"),a("RouterLink",{attrs:{to:"/Python/Python之禅.html"}},[t._v("“Python之禅”")]),t._v("，里面讲述的道理不仅仅适用于Python，也适用于其他编程语言。")],1)])]),t._v(" "),a("li",[a("p",[t._v("学习使用turtle在屏幕上绘制图形。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("说明")]),t._v("：turtle是Python内置的一个非常有趣的模块，特别适合对计算机程序设计进行初体验的小伙伴，它最早是Logo语言的一部分，Logo语言是Wally Feurzig和Seymour Papert在1966发明的编程语言。")])]),t._v(" "),a("div",{staticClass:"language-Python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" turtle\n\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pensize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pencolor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nturtle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainloop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("提示")]),t._v("：本章提供的代码中还有画国旗和画小猪佩奇的代码，有兴趣的读者请自行研究。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);