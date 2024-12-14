(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{546:function(t,_,a){"use strict";a.r(_);var v=a(25),i=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git篇"}},[t._v("#")]),t._v(" Git篇")]),t._v(" "),a("h2",{attrs:{id:"_1、git和svn有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、git和svn有什么区别"}},[t._v("#")]),t._v(" 1、Git和SVN有什么区别？")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("Git")]),t._v(" "),a("strong",[t._v("SVN")])]),t._v(" "),a("p",[t._v("1. Git是一个分布式的版本控制工具          1. SVN 是集中版本控制工具")]),t._v(" "),a("p",[t._v("2.它属于第3代版本控制工具                  2.它属于第2代版本控制工具")]),t._v(" "),a("p",[t._v("3.客户端可以在其本地系统上克隆整个存储库   3.版本历史记录存储在服务器端存储库中")]),t._v(" "),a("p",[t._v("4.即使离线也可以提交                       4.只允许在线提交")]),t._v(" "),a("p",[t._v("5.Push/pull 操作更快                       5.Push/pull 操作较慢")]),t._v(" "),a("p",[t._v("6.工程可以用 commit 自动共享               6.没有任何东西自动共享")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("2、什么是Git？")])])]),t._v(" "),a("p",[t._v("我建议你先通过了解 git 的架构再来回答这个问题，如下图所示，试着解释一下这个图：")]),t._v(" "),a("blockquote",[a("p",[t._v("Git 是分布式版本控制系统（DVCS）。它可以跟踪文件的更改，并允许你恢复到任何特定版本的更改。")]),t._v(" "),a("p",[t._v("与 SVN 等其他版本控制系统（VCS）相比，其分布式架构具有许多优势，一个主要优点是它不依赖于中央服务器来存储项目文件的所有版本。")]),t._v(" "),a("p",[t._v('每个开发人员都可以"克隆"我在图中用"Local repository"标注的存储库的副本，并且在他的硬盘驱动器上具有项目的完整历史记录，因此当服务器中断时，你需要的所有恢复数据都在你队 友的本地 Git 存储库中。')]),t._v(" "),a("p",[t._v('还有一个中央云存储库，开发人员可以向其提交更改，并与其他团队成员进行共享，如图所 示，所有协作者都在提交更改"远程存储库"。')])]),t._v(" "),a("p",[a("img",{attrs:{src:"media/image1.png",alt:""}}),t._v('{width="5.229166666666667in" height="2.5in"}')]),t._v(" "),a("h2",{attrs:{id:"_3、在-git-中提交的命令是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在-git-中提交的命令是什么"}},[t._v("#")]),t._v(" 3、在 Git 中提交的命令是什么？")]),t._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:"media/image2.png",alt:""}}),t._v('{width="0.21944444444444444in" height="0.1986111111111111in"}'),a("img",{attrs:{src:"media/image3.png",alt:""}}),t._v('{width="0.2298611111111111in" height="0.1986111111111111in"}答案非常简单。 用于写入提交的命令是 '),a("strong",[t._v("git commit -a")]),t._v("。")])]),t._v(" "),a("p",[t._v("现在解释一下")]),t._v(" "),a("p",[t._v("标志， 通过在命令行上加")]),t._v(" "),a("p",[t._v("指示 git 提交已修改的所有被跟踪文件的新内容。")]),t._v(" "),a("p",[t._v("还要提一下，如果你是第一次需要提交新文件，可以在在")]),t._v(" "),a("h2",{attrs:{id:"_4、什么是-git-中的-裸存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、什么是-git-中的-裸存储库"}},[t._v("#")]),t._v(' 4、什么是 Git 中的"裸存储库"？')]),t._v(" "),a("p",[t._v('你应该说明 "工作目录" 和 "裸存储库" 之间的区别。')]),t._v(" "),a("blockquote",[a("p",[t._v("之前先 "),a("strong",[t._v("git add")]),t._v(" 。")])]),t._v(" "),a("p",[t._v('Git 中的 "裸" 存储库只包含版本控制信息而没有工作文件（没有工作树），并且它不包含特殊的')]),t._v(" "),a("blockquote",[a("p",[t._v("子目录。相反，它直接在主目录本身包含 子目录中的所有内容，其中工作目录包括：")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("一个 子目录，其中包含你的仓库所有相关的 Git 修订历史记录。")])]),t._v(" "),a("li",[a("p",[t._v("工作树，或签出的项目文件的副本。")])])]),t._v(" "),a("h2",{attrs:{id:"_5-git-是用什么语言编写的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-git-是用什么语言编写的"}},[t._v("#")]),t._v(" 5 Git 是用什么语言编写的？")]),t._v(" "),a("p",[t._v("你需要说明使用它的原因，而不仅仅是说出语言的名称。我建议你这样回答：")]),t._v(" "),a("p",[t._v("Git使用 C 语言编写。 GIT 很快，C 语言通过减少运行时的开销来做到这一点。")]),t._v(" "),a("h2",{attrs:{id:"_6、在git中-你如何还原已经-push-并公开的提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、在git中-你如何还原已经-push-并公开的提交"}},[t._v("#")]),t._v(" 6、在Git中，你如何还原已经 push 并公开的提交？")]),t._v(" "),a("p",[t._v("There can be two answers to this question and make sure that you include both because any of the below options can be used depending on the situation: 1 这个问题可以有两个答案，你回答时也要保包含这两个答案，因为根据具体情况可以使用以下选项：")]),t._v(" "),a("blockquote",[a("p",[t._v("删除或修复新提交中的错误文件，并将其推送到远程存储库。这是修复错误的最自然方式。对 文件进行必要的修改后，将其提交到我将使用的远程存储库")]),t._v(" "),a("p",[t._v("创建一个新的提交，撤消在错误提交中所做的所有更改。可以使用命令：")])]),t._v(" "),a("h2",{attrs:{id:"_7、git-pull-和-git-fetch-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、git-pull-和-git-fetch-有什么区别"}},[t._v("#")]),t._v(" 7、git pull 和 git fetch 有什么区别？")]),t._v(" "),a("blockquote",[a("p",[t._v("命令从中央存储库中提取特定分支的新更改或提交，并更新本地存储库中的目标分支。")]),t._v(" "),a("p",[t._v("也用于相同的目的，但它的工作方式略有不同。当你执行 时，它会从所需")])]),t._v(" "),a("p",[t._v("的分支中提取所有新提交，并将其存储在本地存储库中的新分支中。如果要在目标分支中反映这些")]),t._v(" "),a("p",[t._v("更改，必须在")]),t._v(" "),a("p",[t._v("之后执行")]),t._v(" "),a("p",[t._v("。只有在对目标分支和获取的分支进行合并后才会")]),t._v(" "),a("p",[t._v("更新目标分支。为了方便起见，请记住以下等式：")]),t._v(" "),a("h2",{attrs:{id:"_8、git中的-staging-area-或-index-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、git中的-staging-area-或-index-是什么"}},[t._v("#")]),t._v(' 8、git中的"staging area"或"index"是什么？')]),t._v(" "),a("p",[t._v("For this answer try to explain the below diagram as you can see: 可以通过下图进行解释：")]),t._v(" "),a("p",[t._v('在完成提交之前，可以在称为"staging area"或"index"的中间区域中对其进行格式化和审查。从图中可以看出，每个更改首先在暂存区域中进行验证，我将其称为"stage ﬁle"，然后将更改提交到存储库。')]),t._v(" "),a("p",[a("img",{attrs:{src:"media/image4.png",alt:""}}),t._v('{width="6.822916666666667in" height="6.71875in"}')]),t._v(" "),a("h2",{attrs:{id:"_9、什么是-git-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、什么是-git-stash"}},[t._v("#")]),t._v(" 9、什么是 git stash?")]),t._v(" "),a("p",[t._v("首先应该解释 git stash 的必要性。")]),t._v(" "),a("p",[t._v("通常情况下，当你一直在处理项目的某一部分时，如果你想要在某个时候切换分支去处理其他事 情，事情会处于混乱的状态。问题是，你不想把完成了一半的工作的提交，以便你以后就可以回到 当前的工作。解决这个问题的答案是 git stash。")]),t._v(" "),a("p",[t._v("再解释什么是git stash。")]),t._v(" "),a("p",[t._v("stash 会将你的工作目录，即修改后的跟踪文件和暂存的更改保存在一堆未完成的更改中，你可以随时重新应用这些更改。")]),t._v(" "),a("h2",{attrs:{id:"_10、什么是git-stash-drop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、什么是git-stash-drop"}},[t._v("#")]),t._v(" 10、什么是git stash drop？")]),t._v(" "),a("p",[t._v("通过说明我们使用 的目的来回答这个问题。")]),t._v(" "),a("p",[t._v("命令用于删除隐藏的项目。默认情况下，它将删除最后添加的存储项，如果提供参数的话，它还可以删除特定项。")]),t._v(" "),a("p",[t._v("下面举个例子。")]),t._v(" "),a("p",[t._v("如果要从隐藏项目列表中删除特定的存储项目，可以使用以下命令：")]),t._v(" "),a("blockquote",[a("p",[t._v("**git stash list：**它将显示隐藏项目列表，如：")])]),t._v(" "),a("p",[t._v('stash@{0}: WIP on master: 049d078 added the index ﬁle stash@{1}: WIP on master: c264051 Revert "added ﬁle_size" stash@{2}: WIP on master: 21d80a5 added number to log')]),t._v(" "),a("blockquote",[a("p",[t._v("如果要删除名为 stash@{0} 的项目，请使用命令 "),a("strong",[t._v("git stash drop stash@{0}")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_11-、如何找到特定提交中已更改的文件列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-、如何找到特定提交中已更改的文件列表"}},[t._v("#")]),t._v(" 11.、如何找到特定提交中已更改的文件列表？")]),t._v(" "),a("p",[t._v("对于这个问题，不能仅仅是提供命令，还要解释这个命令究竟做了些什么。要获取特定提交中已更改的列表文件，请使用以下命令：")]),t._v(" "),a("h4",{attrs:{id:"git-diff-tree-r-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-tree-r-hash"}},[t._v("#")]),t._v(" git diﬀ-tree -r {hash}")]),t._v(" "),a("p",[a("img",{attrs:{src:"media/image5.png",alt:""}}),t._v('{width="0.21944444444444444in" height="0.1986111111111111in"}给定提交哈希，这将列出在该提交中更改或添加的所有文件。是仅将它们折叠到根目录名称中。')]),t._v(" "),a("p",[t._v("标志使命令列出单个文件，而不")]),t._v(" "),a("p",[t._v("你还可以包括下面提到的内容，虽然它是可选的，但有助于给面试官留下深刻印象。输出还将包含一些额外信息，可以通过包含两个标志把它们轻松的屏蔽掉：")]),t._v(" "),a("h4",{attrs:{id:"git-diff-tree-no-commit-id-name-only-r-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-diff-tree-no-commit-id-name-only-r-hash"}},[t._v("#")]),t._v(" git diﬀ-tree --no-commit-id --name-only -r {hash}")]),t._v(" "),a("p",[t._v("这里")]),t._v(" "),a("p",[t._v("的路径。")]),t._v(" "),a("p",[t._v("将禁止提交哈希值出现在输出中，而")]),t._v(" "),a("p",[t._v("只会打印文件名而不是它们")]),t._v(" "),a("h2",{attrs:{id:"_12、git-config-的功能是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12、git-config-的功能是什么"}},[t._v("#")]),t._v(" 12、git conﬁg 的功能是什么？")]),t._v(" "),a("p",[t._v("首先说明为什么我们需要 。")]),t._v(" "),a("p",[t._v("git 使用你的用户名将提交与身份相关联。户名。")]),t._v(" "),a("p",[t._v("下面用一个例子来解释。")]),t._v(" "),a("p",[t._v("命令可用来更改你的 git 配置，包括你的用")]),t._v(" "),a("p",[t._v("假设你要提供用户名和电子邮件 ID 用来将提交与身份相关联，以便你可以知道是谁进行了特定提交。为此，我将使用：")]),t._v(" "),a("h4",{attrs:{id:"git-config-global-user-name-your-name-此命令将添加用户名。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-config-global-user-name-your-name-此命令将添加用户名。"}},[t._v("#")]),t._v(' git conﬁg --global user.name "Your Name": 此命令将添加用户名。')]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v('git conﬁg --global user.email "Your E-mail Address":')]),t._v(" 此命令将添加电子邮件ID。")])]),t._v(" "),a("h2",{attrs:{id:"_13、提交对象包含什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13、提交对象包含什么"}},[t._v("#")]),t._v(" 13、提交对象包含什么？")]),t._v(" "),a("blockquote",[a("p",[t._v("Commit 对象包含以下组件，你应该提到以下这三点： 一组文件，表示给定时间点的项目状态")]),t._v(" "),a("p",[t._v("引用父提交对象")]),t._v(" "),a("p",[t._v("SHAI 名称，一个40个字符的字符串，提交对象的唯一标识。")])]),t._v(" "),a("h2",{attrs:{id:"_14、-如何在git中创建存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14、-如何在git中创建存储库"}},[t._v("#")]),t._v(" 14、 如何在Git中创建存储库？")]),t._v(" "),a("p",[t._v("这可能是最常见的问题，答案很简单。")]),t._v(" "),a("p",[t._v("要创建存储库，先为项目创建一个目录（如果该目录不存在），然后运行命令 "),a("strong",[t._v("git init")]),t._v("。通过运行此命令，将在项目的目录中创建 .git 目录。")]),t._v(" "),a("h2",{attrs:{id:"_15、怎样将-n-次提交压缩成一次提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15、怎样将-n-次提交压缩成一次提交"}},[t._v("#")]),t._v(" 15、怎样将 N 次提交压缩成一次提交？")]),t._v(" "),a("p",[t._v("将N个提交压缩到单个提交中有两种方式：")]),t._v(" "),a("blockquote",[a("p",[t._v("如果要从头开始编写新的提交消息，请使用以下命令：")]),t._v(" "),a("p",[t._v("如果你想在新的提交消息中串联现有的提交消息，那么需要提取这些消息并将它们传给 git commit，可以这样：")])]),t._v(" "),a("h2",{attrs:{id:"_16、-什么是-git-bisect-如何使用它来确定-回归-错误的来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16、-什么是-git-bisect-如何使用它来确定-回归-错误的来源"}},[t._v("#")]),t._v(" 16、 什么是 Git bisect？如何使用它来确定（回归）错误的来源？")]),t._v(" "),a("p",[t._v("我建议你先给出一个Git bisect 的小定义。")]),t._v(" "),a("p",[t._v("Git bisect 用于查找使用二进制搜索引入错误的提交。 Git bisect的命令是")]),t._v(" "),a("p",[t._v("既然你已经提到过上面的命令，那就解释一下这个命令会做什么。")]),t._v(" "),a("p",[t._v('此命令用了二进制搜索算法来查找项目历史记录中的哪个提交引入了错误。你可以通过告诉它已知 包含该错误的"错误"提交以及在引入错误之前已知的"良好"提交来使用它。然后 git bisect 在这两个端点之间选择一个提交，并询问你所选的提交是"好"还是"坏"。它继续缩小范围，直到找到引入更改的确切提交。')]),t._v(" "),a("h2",{attrs:{id:"_17、如果想要在提交之前运行代码性检查工具-并在测试失败时阻止提交-该怎样配置-git-存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17、如果想要在提交之前运行代码性检查工具-并在测试失败时阻止提交-该怎样配置-git-存储库"}},[t._v("#")]),t._v(" 17、如果想要在提交之前运行代码性检查工具，并在测试失败时阻止提交，该怎样配置 Git 存储库？")]),t._v(" "),a("p",[t._v("我建议你先介绍一下完整性检查。")]),t._v(" "),a("p",[t._v("完整性或冒烟测试用来确定继续测试是否可行和合理。下面解释如何实现这一目标。")]),t._v(" "),a("p",[t._v("这可以通过与存储库的 pre-commit hook 相关的简单脚本来完成。git 会在提交之前触发 pre- commit hook。你可以在这个脚本中运行其他工具，例如 linters，并对提交到存储库中的更改执行完整性检查。")]),t._v(" "),a("p",[t._v("最后举个例子，你可以参考下面的脚本：")]),t._v(" "),a("p",[t._v("这段脚本检查是否需要通过标准 Go 源代码格式化工具 gofmt 传递所有即将提交的 .go 文件。如果")]),t._v(" "),a("p",[a("img",{attrs:{src:"media/image6.png",alt:""}}),t._v('{width="0.17777777777777778in" height="0.1986111111111111in"}脚步以非 状态退出，脚本会有效地阻止提交操作。')]),t._v(" "),a("h2",{attrs:{id:"、描述一下你所使用的分支策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#、描述一下你所使用的分支策略"}},[t._v("#")]),t._v(" 、描述一下你所使用的分支策略？")]),t._v(" "),a("p",[t._v("这个问题被要求用Git来测试你的分支经验，告诉他们你在以前的工作中如何使用分支以及它的用途 是什么，你可以参考以下提到的要点：")]),t._v(" "),a("blockquote",[a("p",[t._v("功能分支（Feature branching）")]),t._v(" "),a("p",[t._v("要素分支模型将特定要素的所有更改保留在分支内。当通过自动化测试对功能进行全面测试和 验证时，该分支将合并到主服务器中。")]),t._v(" "),a("p",[t._v("任务分支（Task branching）")]),t._v(" "),a("p",[t._v("在此模型中，每个任务都在其自己的分支上实现，任务键包含在分支名称中。很容易看出哪个 代码实现了哪个任务，只需在分支名称中查找任务键。")]),t._v(" "),a("p",[t._v("发布分支（Release branching）")]),t._v(" "),a("p",[t._v("一旦开发分支获得了足够的发布功能，你就可以克隆该分支来形成发布分支。创建该分支将会 启动下一个发布周期，所以在此之后不能再添加任何新功能，只有错误修复，文档生成和其他 面向发布的任务应该包含在此分支中。一旦准备好发布，该版本将合并到主服务器并标记版本 号。此外，它还应该再将自发布以来已经取得的进展合并回开发分支。")])]),t._v(" "),a("p",[t._v("最后告诉他们分支策略因团队而异，所以我知道基本的分支操作，如删除、合并、检查分支等。")]),t._v(" "),a("h2",{attrs:{id:"_19、如果分支是否已合并为master-你可以通过什么手段知道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19、如果分支是否已合并为master-你可以通过什么手段知道"}},[t._v("#")]),t._v(" 19、如果分支是否已合并为master，你可以通过什么手段知道？")]),t._v(" "),a("p",[t._v("答案很直接。")]),t._v(" "),a("p",[t._v("要知道某个分支是否已合并为master，你可以使用以下命令：")]),t._v(" "),a("blockquote",[a("p",[t._v("它列出了已合并到当前分支的分支。它列出了尚未合并的分支。")])]),t._v(" "),a("h2",{attrs:{id:"_20、-什么是subgit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20、-什么是subgit"}},[t._v("#")]),t._v(" 20、 什么是SubGit？")]),t._v(" "),a("p",[t._v("SubGit 是将 SVN 到 Git迁移的工具。它创建了一个可写的本地或远程 Subversion 存储库的 Git 镜像，并且只要你愿意，可以随意使用 Subversion 和 Git。")]),t._v(" "),a("p",[t._v("这样做有很多优点，比如你可以从 Subversion 快速一次性导入到 Git 或者在 Atlassian Bitbucket Server 中使用SubGit。我们可以用 SubGit 创建现有 Subversion 存储库的双向 Git-SVN 镜像。你可以在方便时 push 到 Git 或提交 Subversion。同步由 SubGit 完成。")]),t._v(" "),a("h2",{attrs:{id:"_21、列举工作中常用的几个git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21、列举工作中常用的几个git命令"}},[t._v("#")]),t._v(" 21、列举工作中常用的几个git命令？")]),t._v(" "),a("p",[t._v("新增文件的命令：git add ﬁle或者git add . 提交文件的命令：git commit --m或者git commit --a 查看工作区状况：git status --s 拉取合并远程分支的操作：git fetch/git merge或者git pull 查看提交记录命令：git reﬂog")]),t._v(" "),a("h2",{attrs:{id:"_22、如果本次提交误操作-如何撤销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22、如果本次提交误操作-如何撤销"}},[t._v("#")]),t._v(" 22、如果本次提交误操作，如何撤销？")]),t._v(" "),a("blockquote",[a("p",[t._v("如果想撤销提交到索引区的文件，可以通过"),a("strong",[t._v("git reset HEAD ﬁle")]),t._v("；如果想撤销提交到本地仓库的文件，可以通过"),a("strong",[t._v("git reset --soft HEAD^n")]),t._v("恢复当前分支的版本库至上一次提交的状态，索引区和工作空间不变更；可以通过"),a("strong",[t._v("git reset --mixed HEAD^n")]),t._v("恢复当前分支的版本库和索引区至上一次提交的")])]),t._v(" "),a("h2",{attrs:{id:"_23、你使用过git-stash命令吗-你一般什么情况下会使用它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_23、你使用过git-stash命令吗-你一般什么情况下会使用它"}},[t._v("#")]),t._v(" 23、你使用过git stash命令吗？你一般什么情况下会使用它？")]),t._v(" "),a("blockquote",[a("p",[t._v("命令git stash是把工作区修改的内容存储在栈区。 以下几种情况会使用到它： 解决冲突文件时，会先执行git stash，然后解决冲突；")]),t._v(" "),a("p",[t._v("遇到紧急开发任务但目前任务不能提交时，会先执行git stash，然后进行紧急任务的开发，然后通过git stash pop取出栈区的内容继续开发；")]),t._v(" "),a("p",[t._v("切换分支时，当前工作空间内容不能提交时，会先执行git stash再进行分支切换；")])]),t._v(" "),a("h2",{attrs:{id:"_24、如何查看分支提交的历史记录-查看某个文件的历史记录呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24、如何查看分支提交的历史记录-查看某个文件的历史记录呢"}},[t._v("#")]),t._v(" 24、如何查看分支提交的历史记录？查看某个文件的历史记录呢？")]),t._v(" "),a("p",[t._v("查看分支的提交历史记录：")]),t._v(" "),a("blockquote",[a("p",[t._v("命令git log --number：表示查看当前分支前number个详细的提交历史记录；")]),t._v(" "),a("p",[t._v("命令git log --number --pretty=oneline：在上个命令的基础上进行简化，只显示sha-1码和提交信息；")]),t._v(" "),a("p",[t._v("命令git reﬂog --number: 表示查看所有分支前number个简化的提交历史记录； 命令git reﬂog --number --pretty=oneline：显示简化的信息历史信息；")]),t._v(" "),a("p",[t._v("如果要查看某文件的提交历史记录，直接在上面命令后面加上文件名即可。注意：如果没有number则显示全部提交次数。")])]),t._v(" "),a("h2",{attrs:{id:"_25、使用过git-merge和git-rebase吗-它们之间有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_25、使用过git-merge和git-rebase吗-它们之间有什么区别"}},[t._v("#")]),t._v(" 25、使用过git merge和git rebase吗？它们之间有什么区别？")]),t._v(" "),a("p",[t._v("简单的说，git merge和git rebase都是合并分支的命令。 git merge branch会把branch分支的差异内容pull到本地，然后与本地分支的内容一并形成一个committer对象提交到主分支上，合并后的 分支与主分支一致； git rebase branch会把branch分支优先合并到主分支，然后把本地分支的commit放到主分支后面，合并后的分支就好像从合并后主分支又拉了一个分支一样，本地分支本身 不会保留提交历史。")]),t._v(" "),a("h2",{attrs:{id:"_26、使用过git-cherry-pick-有什么作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_26、使用过git-cherry-pick-有什么作用"}},[t._v("#")]),t._v(" 26、使用过git cherry-pick，有什么作用？")]),t._v(" "),a("p",[t._v("命令git cherry-pick可以把branch A的commit复制到branch B上。 在branch B上进行命令操作：")]),t._v(" "),a("blockquote",[a("p",[t._v("复制单个提交：git cherry-pick commitId")]),t._v(" "),a("p",[t._v("复制多个提交：git cherry-pick commitId1...commitId3")]),t._v(" "),a("p",[t._v("注意：复制多个提交的命令不包含commitId1")])])])}),[],!1,null,null,null);_.default=i.exports}}]);