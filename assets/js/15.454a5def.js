(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{359:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目构建"}},[t._v("#")]),t._v(" 项目构建")]),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("不推荐使用"),a("code",[t._v("Vue-cli2.x")]),t._v("版本，配置内容都暴露了出来，应当遵循预定大于配置，目录结构不够精简")])]),t._v(" "),a("li",[a("strong",[t._v("推荐使用"),a("code",[t._v("自定义配置webpack")]),t._v("或者配置"),a("code",[t._v("Vue-cli3.x")]),t._v("以上的配置，项目基本0配置，结构清晰，我们应该遵守约定大于配置，后期等"),a("code",[t._v("vite")]),t._v("正式版出来时可能会直接用"),a("code",[t._v("vite")]),t._v("，希望大家了解一下"),a("code",[t._v("vite")])])]),t._v(" "),a("li",[a("strong",[t._v("写原生项目时，我们也应该配置一下"),a("code",[t._v("gulp")]),t._v("或者"),a("code",[t._v("webpack")]),t._v("等等这些，然后再开始写项目")])])]),t._v(" "),a("h2",{attrs:{id:"移动端项目构建，或者自适应的项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端项目构建，或者自适应的项目"}},[t._v("#")]),t._v(" 移动端项目构建，或者自适应的项目")]),t._v(" "),a("p",[t._v("首先移动端我们就要用到"),a("code",[t._v("rem")]),t._v("来适配不同的设备"),a("br"),t._v("\n那么有的人可能就写"),a("code",[t._v("rem")]),t._v("配合不同设备设置不同的"),a("code",[t._v("html")]),t._v("fontSize的大小方式，或许你们没有发现，当我们引入第三方UI框架的时候，我们自己写的"),a("code",[t._v("rem")]),t._v("是可以适配不同的设备，但是第三方的UI样式都是"),a("code",[t._v("px")]),t._v("，这样就不能很好的兼容第三方UI组件的样式，单单这样做的话，还不够。"),a("br")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("那么我们应该怎么做呢？")]),a("br"),t._v("\n那么我们可以用"),a("code",[t._v("postcss-px2rem")]),t._v("插件把我们"),a("code",[t._v("UI框架")]),t._v("里的样式也一起转成"),a("code",[t._v("rem")]),t._v("，然后再配合不同设备设置不同的"),a("code",[t._v("html")]),t._v("fontSize的大小方式。这样我们就可以完美的兼容不同设备了，而且可以通过配置，我们可以直接写"),a("code",[t._v("px")]),t._v("的方式就可以转换成"),a("code",[t._v("rem")]),t._v("了")])]),t._v(" "),a("p",[a("strong",[t._v("比如：果品大屏的响应式布局")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/rem.png"),alt:"rem.png"}}),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/rem1.png"),alt:"rem.png"}})]),t._v(" "),a("h2",{attrs:{id:"项目打包优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目打包优化"}},[t._v("#")]),t._v(" 项目打包优化")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("这关系到项目的首屏加载速度，以及其他资源的加载速度\n在客户服务器带宽慢的情况下或者用户网络慢的情况下，有大幅度的提升\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意⚠️")]),t._v(" "),a("p",[a("strong",[t._v("下面配置只针对"),a("code",[t._v("Vue-cli3.x")]),t._v("或以上的版本")])])]),t._v(" "),a("h2",{attrs:{id:"图片压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩"}},[t._v("#")]),t._v(" 图片压缩")]),t._v(" "),a("p",[t._v("安装"),a("code",[t._v("cnpm i image-webpack-loader -D")]),t._v("，"),a("code",[t._v("image-webpack-loader")]),t._v("其实也是使用了"),a("code",[t._v("imagemin")]),t._v("来缩小 PNG，JPEG，GIF，SVG和WEBP图像"),a("br")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片压缩")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image-webpack-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image-webpack-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bypassOnDebug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"开启gzip压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启gzip压缩"}},[t._v("#")]),t._v(" 开启Gzip压缩")]),t._v(" "),a("h3",{attrs:{id:"gzip概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip概念"}},[t._v("#")]),t._v(" Gzip概念")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Gzip用于UNⅨ系统的文件压缩，在Linux中经常会用到后缀为.gz的文件，它们就是GZIP格式的，现今已经成为"),a("code",[t._v("Internet")]),t._v("上使用非常普遍的一种数据压缩格式")])])]),t._v(" "),a("h3",{attrs:{id:"gzip基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip基本原理"}},[t._v("#")]),t._v(" Gzip基本原理")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Gzip压缩算法就是在处理用户请求的时候，服务器进行解析请求并返回给客户端压缩后的数据。通过客户端来进行解压(客户端指的是我们的浏览器比如谷歌/火狐)")])]),t._v(" "),a("li",[a("strong",[t._v("浏览器请求资源文件时会自动带一个"),a("code",[t._v("Accept-Encoding")]),t._v("的请求头告诉服务器支持的压缩编码类型")])]),t._v(" "),a("li",[a("strong",[t._v("浏览器接收到响应后查看响应头是否带有"),a("code",[t._v("Content-Encoding: gzip")]),t._v("，如果有，客户端会进行对返回的资源文件进行解压，然后再进行解析渲染")])])]),t._v(" "),a("h3",{attrs:{id:"这里可能会出现两种情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里可能会出现两种情况"}},[t._v("#")]),t._v(" 这里可能会出现两种情况")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("第一种: 客户端不支持解压，那么服务器直接会返回原始的文件")])]),t._v(" "),a("li",[a("strong",[t._v("第二种: 客户端支持解压，那么数据就会解压后再渲染层现到客户端")])])]),t._v(" "),a("h3",{attrs:{id:"注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("低版本浏览器兼容性，服务器可以设置一些忽略规则，哪些浏览器不用"),a("code",[t._v("gzip")]),t._v("(基本可以忽略，目前浏览器基本都支持，包括天朝IE，Gzip已经是很老的技术了)")])]),t._v(" "),a("li",[a("strong",[t._v("媒体文件无需开启:图片、音乐和视频大多数都已压缩过了，通常的，我们只对"),a("code",[t._v("js、css、svg、woff、ttf、json、html")]),t._v("进行压缩")])]),t._v(" "),a("li",[a("strong",[t._v("CPU负载：压缩文件耗费CPU（压缩等级越高，CPU耗损越大），服务器需要压缩文件、浏览器解压文件")])])]),t._v(" "),a("h3",{attrs:{id:"gzip-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gzip-性能优化"}},[t._v("#")]),t._v(" Gzip 性能优化")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("服务端nginx启动"),a("code",[t._v("gzip_static")]),t._v("，来配合前端打包的的静态"),a("code",[t._v(".gz")]),t._v("文件(nginx需要安装"),a("code",[t._v("http_gzip_static_module")]),t._v("以支持gzip_static)")])]),t._v(" "),a("li",[a("strong",[t._v("该模块启用后，nginx首先检查是否存在请求静态文件的"),a("code",[t._v(".gz")]),t._v("结尾的文件，如果有则直接返回该gz文件内容, 不会主动压缩，降低cpu负载，优化了服务器性能")])]),t._v(" "),a("li",[a("strong",[t._v("为了要兼容不支持gzip的浏览器，启用"),a("code",[t._v("gzip_static模块")]),t._v("就必须同时保留原始静态文件和gz文件")])])]),t._v(" "),a("h3",{attrs:{id:"效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),a("center",[a("font",{attrs:{color:"#3eaf7c",size:"40px"}},[t._v("未压缩前")])],1),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/gizp-off-0.png"),alt:"未压缩前"}}),t._v(" "),a("center",[a("font",{attrs:{color:"#3eaf7c",size:"40px"}},[t._v("压缩后")])],1),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/gizp-on-0.png"),alt:"压缩后"}}),t._v("\n  **在`1M带宽的服务器下`，未压缩前加载完成的速度是`8.28秒`, 压缩后的速度是`2.21秒`，接近`4倍`的差距**\n"),a("h3",{attrs:{id:"开启-gzip-前端配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-gzip-前端配置"}},[t._v("#")]),t._v(" 开启 Gzip 前端配置")]),t._v(" "),a("p",[t._v("安装"),a("code",[t._v("cnpm i compression-webpack-plugin -D")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CompressionWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compression-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompressionWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[path].gz[query]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        algorithm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gzip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"')]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(js|css|svg|woff|ttf|json|html)$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        threshold"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10240")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对10K以上的数据进行压缩")]),t._v("\n        minRatio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有压缩率小于这个值的资源才会被处理。默认值是 0.8")]),t._v("\n        deleteOriginalAssets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否删除源文件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);