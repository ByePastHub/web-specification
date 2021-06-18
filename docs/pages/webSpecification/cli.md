# 项目构建

  ## 环境搭建
  - **不推荐使用`Vue-cli2.x`版本，配置内容都暴露了出来，应当遵循预定大于配置，目录结构不够精简**
  - **推荐使用`自定义配置webpack`或者配置`Vue-cli3.x`以上的配置，项目基本0配置，结构清晰，我们应该遵守约定大于配置，后期等`vite`正式版出来时可能会直接用`vite`，希望大家了解一下`vite`**
  - **写原生项目时，我们也应该配置一下`gulp`或者`webpack`等等这些，然后再开始写项目**

  ## 移动端项目构建，或者自适应的项目
  首先移动端我们就要用到`rem`来适配不同的设备<br/>
  那么有的人可能就写`rem`配合不同设备设置不同的`html`fontSize的大小方式，或许你们没有发现，当我们引入第三方UI框架的时候，我们自己写的`rem`是可以适配不同的设备，但是第三方的UI样式都是`px`，这样就不能很好的兼容第三方UI组件的样式，单单这样做的话，还不够。<br/>
  - **那么我们应该怎么做呢？**<br/>
  那么我们可以用`postcss-px2rem`插件把我们`UI框架`里的样式也一起转成`rem`，然后再配合不同设备设置不同的`html`fontSize的大小方式。这样我们就可以完美的兼容不同设备了，而且可以通过配置，我们可以直接写`px`的方式就可以转换成`rem`了

  **比如：果品大屏的响应式布局**
  <img :src="$withBase('/images/rem.png')" alt="rem.png">
  <img :src="$withBase('/images/rem1.png')" alt="rem.png">
  ## 项目打包优化
  ::: tip 提示
    这关系到项目的首屏加载速度，以及其他资源的加载速度
    在客户服务器带宽慢的情况下或者用户网络慢的情况下，有大幅度的提升
  :::

  ::: warning 注意⚠️
  **下面配置只针对`Vue-cli3.x`或以上的版本**
  :::

## 图片压缩
  安装`cnpm i image-webpack-loader -D`，`image-webpack-loader`其实也是使用了`imagemin`来缩小 PNG，JPEG，GIF，SVG和WEBP图像<br/>
  ```js
  // vue.config.js
  module.exports = {
    chainWebpack: config => {
      // 图片压缩
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })
        .end()
    }
  }
  ```
## 开启Gzip压缩
  ### Gzip概念
  - **Gzip用于UNⅨ系统的文件压缩，在Linux中经常会用到后缀为.gz的文件，它们就是GZIP格式的，现今已经成为`Internet`上使用非常普遍的一种数据压缩格式**
  ### Gzip基本原理
  - **Gzip压缩算法就是在处理用户请求的时候，服务器进行解析请求并返回给客户端压缩后的数据。通过客户端来进行解压(客户端指的是我们的浏览器比如谷歌/火狐)**
  - **浏览器请求资源文件时会自动带一个`Accept-Encoding`的请求头告诉服务器支持的压缩编码类型**
  - **浏览器接收到响应后查看响应头是否带有`Content-Encoding: gzip`，如果有，客户端会进行对返回的资源文件进行解压，然后再进行解析渲染**

  ### 这里可能会出现两种情况
  - **第一种: 客户端不支持解压，那么服务器直接会返回原始的文件**
  - **第二种: 客户端支持解压，那么数据就会解压后再渲染层现到客户端**

  ### 注意点
  - **低版本浏览器兼容性，服务器可以设置一些忽略规则，哪些浏览器不用`gzip`(基本可以忽略，目前浏览器基本都支持，包括天朝IE，Gzip已经是很老的技术了)**
  - **媒体文件无需开启:图片、音乐和视频大多数都已压缩过了，通常的，我们只对`js、css、svg、woff、ttf、json、html`进行压缩**
  - **CPU负载：压缩文件耗费CPU（压缩等级越高，CPU耗损越大），服务器需要压缩文件、浏览器解压文件**

  ### Gzip 性能优化
  - **服务端nginx启动`gzip_static`，来配合前端打包的的静态`.gz`文件(nginx需要安装`http_gzip_static_module`以支持gzip_static)**
  - **该模块启用后，nginx首先检查是否存在请求静态文件的`.gz`结尾的文件，如果有则直接返回该gz文件内容, 不会主动压缩，降低cpu负载，优化了服务器性能**
  - **为了要兼容不支持gzip的浏览器，启用`gzip_static模块`就必须同时保留原始静态文件和gz文件**

  ### 效果
  <center>
    <font color="#3eaf7c" size="40px">未压缩前</font>
  </center>

  <img :src="$withBase('/images/gizp-off-0.png')" alt="未压缩前">
  <center>
    <font color="#3eaf7c" size="40px">压缩后</font>
  </center>

  <img :src="$withBase('/images/gizp-on-0.png')" alt="压缩后">
  **在`1M带宽的服务器下`，未压缩前加载完成的速度是`8.28秒`, 压缩后的速度是`2.21秒`，接近`4倍`的差距**

  ### 开启 Gzip 前端配置
  安装`cnpm i compression-webpack-plugin -D`
  ```js
  // vue.config.js
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  module.exports = {
    configureWebpack: {
      module: {
        rules: []
      },
      plugins: [
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip", // 可以是 function(buf, callback) 或者字符串。对于字符串来说依照 zlib 的算法(或者 zopfli 的算法)。默认值是 "gzip"
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          threshold: 10240, // 对10K以上的数据进行压缩
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理。默认值是 0.8
          deleteOriginalAssets: false //是否删除源文件
        })
      ]
    }
  }
  ```



