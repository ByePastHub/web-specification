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
  ::: tip 推荐写法
  ```js
  let str = 'header'
  let testDiv = '<div class="test"></div>'
  ```
  :::
  ::: warning 不推荐写法
  ```js
  let testDiv = "<div class='test'></div>"
  ```
  :::

- ## 使用字面值创建对象
  ::: tip 推荐写法
  ```js
  let user = {
    age: 18,
    name: '张三'
  }
  ```
  :::
  ::: warning 不推荐写法
  ```js
  let user = new Object()
  user.age = 18
  user.name = '张三'
  ```
  :::