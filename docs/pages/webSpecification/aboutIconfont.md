# 关于图标
- **用`字体图标`和`SVG`代替图片图标，图标最好还是不要再使用图片了**
- **推荐用`字体图标`或者用`SVG`来代替图片**

# 为什么不使用图片
  - ## [字体图标的优点]()
    + **一旦图标字体加载了，图标就会马上渲染出来，不需要下载一个图像。可以减少HTTP请求，还可以配合HTML5离线存储做性能优化**
    + **图标字体可以用font-size属性设置其任何大小，还可以加各种文字效果，包括颜色、Hover状态、透明度、阴影和翻转等效果**
    + **图片进行放大时会失真（即变模糊），当图片进行缩小时就会浪费掉像素，而字体图标就跟字体一样，即使放大了，也不会模糊**
    + **同时，字体也支持所有现代浏览器，包括IE低版本**

  - ## [字体图标的缺点]()
    + **字体字体只能基本上只支持单色，例如：不能左边里面是一个色，外面一个色。**
    + **一些复杂的图标还是无法胜任(`symbol` 引用可以支持多色，不过也是属于`SVG`范畴)，这时候就可以用`SVG`来代替了**

  - ## [SVG的优点]()
    + **SVG 称之为可缩放[矢量图形]()，可以任意放大或者缩小，都不会破坏图像的清晰度、细节等**
    + **SVG由于基于文本的格式，因此有利于SEO，而且SVG图像中的文字保留可以选中和复制原始状态**
    + **SVG相对于图片来说，大小方面相差巨大，如下图所示，SVG 才`13KB`，而 PNG `473KB`接近37倍，完全不是一个量级的，因为大小完全是取决与代码量的大小。因为`SVG`属于代码形式，大小是代码的大小决定的，我们打包时压缩后也不会有任何色彩和清晰度的变化**
    + **SVG做起动画起来也很方便，很多炫酷的效果都不在话下，当然你对动画方面也要很熟悉的情况下**

  <img :src="$withBase('/images/png-vs-svg.jpg')" alt="PNG.png">

  - ## [SVG的缺点]()
    + **兼容性较差，支持 ie9+，及现代浏览器。**
    + **浏览器渲染svg的性能一般，还不如png**

# SVG 在 webpack 下的使用
- **先来看一下 SVG 的样子，下面是直接在蓝湖下载的 SVG，长这个样子**
```vue
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78">
  <defs>
    <style>
      .cls-1 {
        fill: #be1d2c;
      }

      .cls-2 {
        fill: #fff;
      }

      .cls-3 {
        filter: url(#矩形_1824);
      }
    </style>
    <filter id="矩形_1824" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="组_4703" data-name="组 4703" transform="translate(-324 -784)">
    <g class="cls-3" transform="matrix(1, 0, 0, 1, 324, 784)">
      <rect id="矩形_1824-2" data-name="矩形 1824" class="cls-1" width="60" height="60" rx="30" transform="translate(9 6)"/>
    </g>
    <path id="联合_27" data-name="联合 27" class="cls-2" d="M632-11569v-12H620a2,2,0,0,1-2-2,2,2,0,0,1,2-2h12v-12a2,2,0,0,1,2-2,2,2,0,0,1,2,2v12h12a2,2,0,0,1,2,2,2,2,0,0,1-2,2H636v12a2,2,0,0,1-2,2A2,2,0,0,1,632-11569Z" transform="translate(-271 12403)"/>
  </g>
</svg>
```

::: danger 提示
**但是如果这样直接放在 Vue template上面，会直接报`style`不会被解析的错误，像这样的有两种解决办法**
:::

::: tip 正确操作
1. 把 style 标签放在 template 外面，但是这样不是最好的，还有一种可以把`svg`大小给压缩，就是把样式跟标签里的样式给跟一些不需要的属性都给删了，把属性直接添加到标签里
:::

```vue
<template>
  <div class="add_svg">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78">
      <defs>
        <filter id="矩形_1824" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="组_4703" data-name="组 4703" transform="translate(-324 -784)">
        <g class="cls-3" transform="matrix(1, 0, 0, 1, 324, 784)">
          <rect id="矩形_1824-2" data-name="矩形 1824" class="cls-1" width="60" height="60" rx="30" transform="translate(9 6)"/>
        </g>
        <path id="联合_27" data-name="联合 27" class="cls-2" d="M632-11569v-12H620a2,2,0,0,1-2-2,2,2,0,0,1,2-2h12v-12a2,2,0,0,1,2-2,2,2,0,0,1,2,2v12h12a2,2,0,0,1,2,2,2,2,0,0,1-2,2H636v12a2,2,0,0,1-2,2A2,2,0,0,1,632-11569Z" transform="translate(-271 12403)"/>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" type="text/scss" scoped>
.cls-1 {
  fill: #be1d2c;
}

.cls-2 {
  fill: #fff;
}

.cls-3 {
  filter: url(#矩形_1824);
}
</style>
```
::: tip 推荐
2. 像上面简单 SVG 很容易进行优化后，大小为`622 字节`，第一种的方式大小是`1277 字节`
删除了上面的`defs`和`style`，因为这个图标根本不需要用到滤镜，我们可以直接删除他
然后手动填充就可以了，如下
:::
```vue
<template>
  <div class="add_svg">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="78" height="78" viewBox="0 0 78 78">
      <g transform="translate(-324 -784)">
        <g transform="matrix(1, 0, 0, 1, 324, 784)">
          <rect fill="#be1d2c" width="60" height="60" rx="30" transform="translate(9 6)"/>
        </g>
        <path fill="#fff" d="M632-11569v-12H620a2,2,0,0,1-2-2,2,2,0,0,1,2-2h12v-12a2,2,0,0,1,2-2,2,2,0,0,1,2,2v12h12a2,2,0,0,1,2,2,2,2,0,0,1-2,2H636v12a2,2,0,0,1-2,2A2,2,0,0,1,632-11569Z" transform="translate(-271 12403)"/>
      </g>
    </svg>
  </div>
</template>
```