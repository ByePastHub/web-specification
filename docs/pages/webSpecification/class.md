---
sidebarDepth: 4
---
# class

- ## 命名
  + **命名应该按照 web H5语义化标签命名**
  + **`class`选择器皆为小写形式，以横杆`-`或者下划线`_`来做分隔，不要使用驼峰命名**
  + **`id`选择器使用驼峰命名**
  ::: tip 建议
  因为经常会复制粘贴，横杆`-`会导致双击复制不全，推荐使用下划线`_`来作为分隔符
  :::
  #### [例子]()
  ```html
  <!-- 头部 -->
  <header class="header">
    <!-- 导航栏 -->
    <nav class="nav-list">
      <div class="nav-item">首页</div>
      <div class="nav-item">关于我们</div>
    </nav>
  </header>

  <!-- 或者下面这种 -->
  <!-- 头部 -->
  <header class="header">
    <!-- 导航栏 -->
    <nav class="nav_list">
      <div class="nav_item">首页</div>
      <div class="nav_item">关于我们</div>
    </nav>
  </header>
  ```
  ### 页面命名
    - 一个项目里面，根节点避免出现相同的命名
    ::: warning 注意⚠️
    ```vue
    <!-- 第一个页面 -->
    <template>
      <div class="main">
        ...
      </div>
    </template>

    <!-- 第二个页面 -->
    <template>
      <div class="main">
        ...
      </div>
    </template>
    ```
    :::

  - ## Vue class 作用域
  ::: danger 场景
  在之前开发的时，跟一个同事写管理后台的时候，我页面开发完成了，但是隔天拉代码的时候发现我样式居然出现了问题，一开始我以为我同时改了我写的这样页面样式，然后我看了一下他提交的代码内容，发现也没有改我的页面，然后打开调试发现我的UI组件样式被覆盖了，发现是我一个同事写页面没有加`scoped`，而且直接用UI类名加了`!important`，如下：
  ```css
  .el-input__inner {
    width: 100% !important;
  }
  ```
  :::
  **所以我们应当应该每个页面都需要添加上`scoped`css 作用域`<style lang="scss" scoped>`，以至于不对全局造成污染**<br/>
  **`!important`不推荐使用，可以不用就尽量不要使用**
  ::: tip 问题
  或许你们会发现，加了这个`scoped`后，就是有时候就算加上`!important`也覆盖不了第三方UI样式
  :::
  ::: tip 解决办法
  可以使用深度作用选择器，`less`使用`/deep/`、`scss`使用`::v-deep`、`stylus`使用`>>>`
  ```css
  /deep/.xxx-xxx {
    background-color: red !important;
  }
  ```
  有的人可能用过这个可能就会发现了，我这样有些样式还是重置不了它的样式啊，没有关系，还有一种。<br/>
  `100%`可以在全局覆盖的方式，不过就要求页面根节点命名不要重名，避免把其他页面的样式一起给改了。<br/>

  **推荐**
    ```vue
    <!-- 比如第一个页面是订单列表 -->
    <template>
      <div class="order-list">
        ...
      </div>
    </template>

    <!-- 第二个页面是订单详情 -->
    <template>
      <div class="order-detail">
        ...
      </div>
    </template>
    ```

  或者我们可以在重置UI样式表那里重置对应页面的样式。<br/>
  例如我引入了`vant-ui`UI框架，那么我就会去新建一个重置`vant-ui`样式的css，专门用来重置`vant-ui`样式。<br/>

  `vantReset.css`
  ```css
  /* 作用全局在页面上 */
  .van-xxx {
    font-size: 20px;
  }

  /* 指定作用在某个页面上 */
  .order-list .van-xxx {
    background-color: red !important;
  }
  .order-detail .van-xxx {
    background-color: blue !important;
  }
  ```
  :::

  基本上，新建的项目都会去重置一下样式，避免不同浏览器出现不一样的间距和大小，指定用哪个盒子模型，或者一些最基本公用的样式(`fl`, `fr`)，我们会写在`reset.css`。<br/>
  同样，我们决定引入一个`UI框架`时，我们需要新建一个重置`UI框架`样式。<br/>

  **公司新建项目时，统一用一套样式来重置，可以根据不同项目对这套样式做一些调整**

  `reset.css`
  ```css
  * {
    box-sizing: border-box;
  }
  body, p, ul, ol, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, form, fieldset, legend, input, select, textarea, button, th, td, menu {
    margin: 0;
    padding: 0;
  }
  ul, dl, ol {
    list-style: none;
  }
  img, fieldset, input[type="submit"] {
    border: 0 none;
  }
  em {
    font-style: normal;
  }
  strong {
    font-weight: normal;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button, input[type="button"] {
    cursor: pointer;
    border: 0 none;
    -webkit-user-select: none;
  }
  a, button, input, img {
    -webkit-touch-callout: none;
  }
  input, select, textarea {
    outline: none;
  }
  a, a:hover, a:focus {
    text-decoration: none;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clear {
    clear: both;
  }
  .clearfix::after{
    content: "";
    display: block;
    clear: both;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    outline-color: invert ;
    outline-style: none ;
    outline-width: 0px ;
    border: none ;
    border-style: none ;
    text-shadow: none ;
    -webkit-appearance: none ;
    -webkit-user-select: text ;
    outline-color: transparent ;
    box-shadow: none;
  }
  /*** 消除input元素 type="number" 时默认的 加减按钮---moz版*/
  input[type=number] {
    -moz-appearance: textfield;
  }
  html, body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html {
    width: 100%;
    height: 100%;
    outline: 0;
    -webkit-text-size-adjust: none;
    font-family: Source Han Sans CN;
  }
  body {
    position: relative;
    height: 100%;
    margin: 0;
    background-color: rgba(26,44,84,1);
    font-size: 16px;
  }
  ```

  - ## 单位
  **省略0后面的单位**
  ::: warning 不推荐
  ```css
  .header {
    padding-top: 0rem;
    margin: 0px;
  }
  ```
  :::
  ::: tip 推荐
  ```css
  .header {
    padding-top: 0;
    margin: 0;
  }
  ```
  :::
