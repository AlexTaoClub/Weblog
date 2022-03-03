(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{349:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mac中设置和查看环境变量"}},[s._v("MAC中设置和查看环境变量")]),t("h2",{attrs:{id:"理论篇"}},[s._v("理论篇")]),t("p",[s._v("Mac系统的环境变量，加载顺序为：\n/etc/profile /etc/paths ~/.bash_profile ~/.bash_login ~/.profile ~/.bashrc")]),t("p",[s._v("/etc/profile和/etc/paths是系统级别的，系统启动就会加载，后面几个是当前用户级的环境变量。后面3个按照从前往后的顺序读取，如果/.bash_profile文件存在，则后面的几个文件就会被忽略不读了，如果/.bash_profile文件不存在，才会以此类推读取后面的文件。~/.bashrc没有上述规则，它是bash shell打开的时候载入的。")]),t("p",[s._v("PATH的语法为如下")]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#中间用冒号隔开\nexport PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>\n")])])]),t("h3",{attrs:{id:"上述文件的科普"}},[s._v("上述文件的科普")]),t("ul",[t("li",[s._v("/etc/paths （全局建议修改这个文件 ）\n编辑 paths，将环境变量添加到 paths文件中 ，一行一个路径\nHint：输入环境变量时，不用一个一个地输入，只要拖动文件夹到 Terminal 里就可以了。")]),t("li",[s._v("/etc/profile （建议不修改这个文件 ）\n全局（公有）配置，不管是哪个用户，登录时都会读取该文件。")]),t("li",[s._v("/etc/bashrc （一般在这个文件中添加系统级环境变量）\n全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件")]),t("li",[s._v(".profile 文件为系统的每个用户设置环境信息,当用户第一次登录时,该文件被执行.并从/etc/profile.d目录的配置文件中搜集shell的设置\n"),t("strong",[s._v("使用注意")]),s._v("：如果你有对/etc/profile有修改的话必须得重启你的修改才会生效，此修改对每个用户都生效。")]),t("li",[s._v("./bashrc 每一个运行bash shell的用户执行此文件.当bash shell被打开时,该文件被读取.\n"),t("strong",[s._v("使用注意")]),s._v(" 对所有的使用bash的用户修改某个配置并在以后打开的bash都生效的话可以修改这个文件，修改这个文件不用重启，重新打开一个bash即可生效。")]),t("li",[s._v("./bash_profile 该文件包含专用于你的bash shell的bash信息,当登录时以及每次打开新的shell时,该文件被读取.（每个用户都有一个.bashrc文件，在用户目录下）\n"),t("strong",[s._v("使用注意")]),s._v(" 需要需要重启才会生效，/etc/profile对所有用户生效，~/.bash_profile只对当前用户生效。")])]),t("p",[s._v("source ./.bash_profile 或者 ./.profile 环境信息生效")]),t("h2",{attrs:{id:"操作篇"}},[s._v("操作篇")]),t("h3",{attrs:{id:"全局设置"}},[s._v("全局设置")]),t("ol",[t("li",[s._v("创建一个文件：")])]),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("sudo touch "),t("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/etc/")]),s._v("paths"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql\n")])])]),t("ol",[t("li",[s._v("用 vim 打开这个文件（如果是以 open -t 的方式打开，则不允许编辑）：")])]),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[s._v("sudo vim "),t("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/etc/")]),s._v("paths"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql\n")])])]),t("ol",[t("li",[s._v("编辑该文件，键入路径并保存（关闭该 Terminal 窗口并重新打开一个，就能使用 mysql 命令了）")])]),t("div",{staticClass:"language-groovy extra-class"},[t("pre",{pre:!0,attrs:{class:"language-groovy"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/usr/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token string regex"}},[s._v("/mysql/")]),s._v("bin\n")])])]),t("ol",[t("li",[s._v("$ source 相应的文件 生效配置环境")])]),t("h3",{attrs:{id:"单个用户设置"}},[s._v("单个用户设置")]),t("ol",[t("li",[s._v("cd ~")]),t("li",[s._v("vim ~/.bash_profile （任意一个文件中添加用户级环境变量）")])]),t("div",{staticClass:"language-typescript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),s._v("\n")])])]),t("p",[s._v("把上述代码添加到~/.bash_profile上。")]),t("ol",[t("li",[s._v("source 相应的文件 生效配置环境")])]),t("h3",{attrs:{id:"查看path"}},[s._v("查看PATH")]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);