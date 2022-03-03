(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{284:function(e,r,o){"use strict";o.r(r);var t=o(0),s=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"在开发环境中使用服务发现"}},[e._v("在开发环境中使用服务发现")]),o("p",[e._v("服务发现应用是很多服务化系统的组成部分，所以在开发、测试环境中也就有必要配备一套服务发现体系来配合我们的开发、测试工作。在这一小节里，我们就来谈谈如何在 Docker 环境下部署服务发现应用。")]),o("h2",{attrs:{id:"使用-docker-compose-模拟-zookeeper-集群"}},[e._v("使用 Docker Compose 模拟 Zookeeper 集群")]),o("p",[e._v("实现服务发现的方法有很多种，其中较为常见的一种是利用分布式注册中心，解决服务之间协调的问题。")]),o("p",[e._v("在众多注册中心应用中，Zookeeper 是较为常见和常用的一款程序，这里我们就以 Zookeeper 为例，介绍如何使用 Docker 搭建 Zookeeper 的运行环境。")]),o("h3",{attrs:{id:"设计目录结构"}},[e._v("设计目录结构")]),o("p",[e._v("由于 Zookeeper 的运行并不需要太多的关注配置和调整，这里我们就以最基础的形式来设计 Docker Compose 项目的结构。")]),e._m(0),o("p",[e._v("为了方便日常操作，我们依然编写了 "),o("a",{attrs:{href:"http://compose.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("compose.sh"),o("OutboundLink")],1),e._v(" 这个脚本来辅助我们控制 Docker Compose 项目。")]),o("h3",{attrs:{id:"编写-docker-compose-yml"}},[e._v("编写 docker-compose.yml")]),o("p",[e._v("很多读者会问到一个问题，怎么样才能通过 Docker 的虚拟化技术实现在一个机器上模拟出多台机器的效果。或者说一个我们这里会涉及的具体问题，如何只用一个 Docker 来模拟一个高可用的 Zookeeper 集群。")]),o("p",[e._v("我们知道，要实现 Zookeeper 的高可用，至少需要三个 Zookeeper 节点进行协作，所以这里我们用三个单独的 Docker Compose 服务定义来分别定义这三个节点。")]),e._m(1),o("p",[e._v("在这个 Docker Compose 项目中，我们定义的三个 Zookeeper 服务都直接使用了官方制作的 zookeeper 镜像。")]),o("p",[e._v("在这个镜像里，我们可以留意定制 ZOO_MY_ID 和 ZOO_SERVERS 这两个环境变量。这两个变量主要是用来识别 Zookeeper 集群中不同 Zookeeper 程序的。")]),o("p",[e._v("其中 ZOO_MY_ID 是 Zookeeper 在集群中的编号，而 ZOO_SERVERS 用来定义集群中的所有 Zookeeper 及它们的连接方式。")]),o("p",[e._v("我们以 zk1 这个服务为例来解释一下 ZOO_SERVERS 的定义方法。")]),e._m(2),e._m(3),o("p",[e._v("在这个例子里，我们描述了三个 Zookeeper 程序的连接地址。")]),o("p",[e._v("由于每个容器都有独立的端口表，所以即使这些程序都运行在一个主机里，我们依然不需要担心，它们会造成端口的冲突。所以这里我们直接使用默认的 2888 和 3888 来进行服务间的相互通信即可。")]),o("p",[e._v("而在进行容器互联的过程中，我们可以通过 Docker 的解析机制，直接填入对应服务的名称替代它们的 IP 地址，也就是这个例子里的 zk2 和 zk3。")]),o("h3",{attrs:{id:"重启机制"}},[e._v("重启机制")]),e._m(4),o("p",[e._v("这里的 always 指的是不论任何情况，容器出现问题后都会自动重启，也包括 Docker 服务本身在启动后容器也会自动启动。")]),o("p",[e._v("另外，restart 还支持几种配置：")]),o("p",[e._v("配置值")]),o("p",[e._v("说明")]),o("p",[e._v("no")]),o("p",[e._v("不设重启机制")]),o("p",[e._v("always")]),o("p",[e._v("总是重启")]),o("p",[e._v("on-failure")]),o("p",[e._v("在异常退出时重启")]),o("p",[e._v("unless-stopped")]),o("p",[e._v("除非由停止命令结束，其他情况都重启")]),o("p",[e._v("在实际使用中，我们可以根据需要选择不同的重启策略。")]),o("p",[e._v("而这个项目里，我们希望 Zookeeper 能够一直健壮的运行，所以使用了 always 这个重启策略。")]),o("h2",{attrs:{id:"启动项目"}},[e._v("启动项目")]),o("p",[e._v("一切就绪，我们就可以直接通过 Docker Compose 的命令来启动开发环境了。")]),e._m(5),o("h2",{attrs:{id:"留言互动"}},[e._v("留言互动")]),o("p",[e._v("在这节中，我们展示了在开发中使用 Docker 部署服务发现工具的过程，下面就是大家自己动手进行实践的时候了。")]),o("p",[e._v("本小节中的示例，已经更新到了：")]),o("p",[o("a",{attrs:{href:"https://github.com/youmingdot/docker-book-for-developer-samples",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/youmingdot/docker-book-for-developer-samples"),o("OutboundLink")],1)]),o("p",[e._v("大家可以在实践过程中的用其作为参考。")]),o("p",[e._v("欢迎大家通过留言的方式说出你的实践之路。我会选出有代表性的优质留言，推荐给大家。")]),o("p",[e._v("同时，如果大家在实践过程中遇到困难，或者有自己的实践心得要与大家分享，可以加入到这本小册的官方微信群中，参与对相关问题的讨论。")])])}),[function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("└─ project\n   ├─ bin\n   │  └─ compose.sh\n   └─ compose\n      └─ docker-compose.yml\n\n")])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("version: '3'\n\nservices:\n\n  zk1:\n    image: zookeeper:3.4\n    restart: always\n    hostname: zk1\n    environment:\n      ZOO_MY_ID: 1\n      ZOO_SERVERS: server.1=0.0.0.0:2888:3888 server.2=zk2:2888:3888 server.3=zk3:2888:3888\n    ports:\n      - 2181:2181\n\n  zk2:\n    image: zookeeper:3.4\n    restart: always\n    hostname: zk2\n    environment:\n      ZOO_MY_ID: 2\n      ZOO_SERVERS: server.1=zk1:2888:3888 server.2=0.0.0.0:2888:3888 server.3=zk3:2888:3888\n    ports:\n      - 2182:2181\n\n  zk3:\n    image: zookeeper:3.4\n    restart: always\n    hostname: zk3\n    environment:\n      ZOO_MY_ID: 3\n      ZOO_SERVERS: server.1=zk1:2888:3888 server.2=zk2:2888:3888 server.3=0.0.0.0:2888:3888\n    ports:\n      - 2183:2181\n\n")])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("server.1=0.0.0.0:2888:3888 server.2=zk2:2888:3888 server.3=zk3:2888:3888\n\n")])])])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("我们可以在 ZOO_SERVERS 中定义所有处于 Zookeeper 集群中的程序，通过空格来间隔它们。而每个服务的的定义形式为 "),r("code",[this._v("server.[id]=[host]:[port]:[port]")]),this._v("，所以就有了上面例子中我们看到的样子。")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("在项目定义中，我们还注意到了 "),r("code",[this._v("restart: always")]),this._v(" 这个配置，这个配置主要是用来控制容器的重启策略的。")])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[this._v("# ./bin/compose.sh up -d\n\n")])])])}],!1,null,null,null);r.default=s.exports}}]);