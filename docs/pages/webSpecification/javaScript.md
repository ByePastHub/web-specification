# JavaScript
- ## 命名
  + **采用小写驼峰命名**
    ```js
    let userInfo = {
      name: 'xxx',
      phone: 'xxxxxxxxx'
    }
    ```
  + **自定义的全局属性或者方法采用`$`作为首字符**
    ```js
    wx.$get = require('./config/request').default.get
    wx.$post = require('./config/request').default.post
    ```
  + **常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长**<br/>
    ::: tip 正确例子
    ```js
    const MAX_WIDTH_COUNT = 1024
    ```
    :::
    ::: danger 错误例子
    ```js
    const MAX_COUNT = 1024
    ```
    :::

- ## 多条件判断
  **对于相同变量或表达式的多值条件，用`switch`代替`if`**
  ::: warning 不推荐
  ```js
  function (type) {
    if (type === 'object') {
      // ......
    } else if (type === 'number') {
      // ......
    } else if (type === 'string') {
      // ......
    }
  }
  ```
  :::

  ::: tip 推荐
  **`switch`语句在多选择的时候要比`if else`执行效率要高，而且比`if else`更加具有可读性**
  ```js
  function (type) {
    switch (type) {
      case 'object':
        // ......
        break
      case 'number':
        // ......
        break
      case 'string':
        // ......
        break
    }
  }
  ```
  :::

- ## 代码缩进
  + **推荐使用一个2个空格进行缩进**
  ```js
  if (true) {
    console.log('推荐使用一个2个空格进行缩进')
  }
  ```
  + **定义函数花括号前后、等号前后一个空格**
  ```js
  function getUserInfo () {
    let str = 'header';
    if (str === 'header') {
      // ...
    }
  }
  ```

- ## 字符串
  + **统一使用单引号 '', 不使用双引号 ""。这在创建HTML字符串非常有好处:**
  ::: tip 推荐
  ```js
  let str = 'header'
  let testDiv = '<div class="test"></div>'
  ```
  :::
  ::: warning 不推荐
  ```js
  let testDiv = "<div class='test'></div>"
  ```
  :::

- ## 使用字面值创建对象
  ::: tip 推荐
  ```js
  let user = {
    age: 18,
    name: '张三'
  }
  ```
  :::
  ::: warning 不推荐
  ```js
  let user = new Object()
  user.age = 18
  user.name = '张三'
  ```
  :::

- ## 和渲染无关的数据
  `vue/微信小程序`中`data`的数据默认便会进行双向数据绑定，若是将大量的和渲染无关的数据直接放置在data中，将会浪费双向数据绑定时所消耗的性能。
  ::: danger 错误写法
  ```vue
  <template>
    <div>
      当前数量: {{ count }}
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        count: 1,
        title: 'title' // 这里其实跟页面渲染无关
      }
    },

    mounted () {
      document.title = this.data.title
    }
  }
  </script>
  ```
  :::

  ::: tip 推荐
  ```vue
  <template>
    <div>
      当前数量: {{ count }}
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        count: 1
      }
    },

    mounted () {
      this.title = 'title'
      document.title = this.title
    }
  }
  </script>
  ```
  :::

## data数据层级
  数据具有数据层级结构，切勿过度扁平化或者嵌套层级过深，若是过度扁平化会导致数据命名空间冲突，参数传递和处理，若是层级嵌套过深也会导致`vue`数据劫持的时候递归层级过深，若是嵌套层级丧心病狂那种的，小心递归爆栈的问题。而且层级过深会导致数据操作和处理不便，获取数据做容错处理也比较繁琐。一般层级保持`2-3`层最好。
  ::: warning 不推荐
  ```js
  new Vue({
    data () {
      return {
        name: '',
        age: '',
        gender: ''
      }
    }
  })
  ```
  :::

  ::: tip 推荐
  ```js
  new Vue({
    data () {
      return {
        person: {
          name: '',
          age: '',
          gender: ''
        }
      }
    }
  })
  ```
  :::

## `Modal框`的控制
  一个页面种通常会存在很多个不同功能的弹框，若是每一个弹框都设置一个对应的变量来控制其显示，则会导致变量数量比较冗余和命名困难，可以使用一个变量来控制同一页面中的所有`Modal`弹框的展示
  ::: warning 不推荐
  ```js
  // 每一个数据控制对应的 Modal 展示与隐藏
  new Vue({
    data () {
      return {
        modal1: false,
        modal2: false,
        modal3: false
      }
    }
  })
  ```
  :::

  ::: tip 推荐
  ```js
  new Vue({
    data () {
      return {
        modalType: '' // modalType值为 modal1，modal2，modal3
      }
    }
  })
  ```
  :::