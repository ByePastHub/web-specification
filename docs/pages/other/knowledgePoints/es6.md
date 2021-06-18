---
sidebarDepth: 4
---
# ES6
  ## ES6 简介
  - **大家口中的`ES6`是什么呢？**<br/>
  `ECMAScript 6.0`（以下简称 `ES6`）是 `JavaScript` 语言的下一代标准，已经在 `2015年6月`正式发布了。它的目标，是使得 `JavaScript` 语言可以用来编写复杂的大型应用程序，成为企业级开发语言

  - **`ECMAScript` 和 `JavaScript` 有什么的关系呢？**<br/>
  要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。<br/><br/>
  该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。<br/><br/>
  因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的

  - **ES6 与 ECMAScript 2015 的关系**
  ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？

  2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本

  ## let 和 const 命令
  - ES6之前，`javaScript`并没有块级作用域，let 和 const 命令的出现就是为了解决块级作用域和常量的。
  - `let`命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在`let`命令所在的代码块内有效。
  - `const`声明一个只读的常量。一旦声明，常量的值就不能改变。
  ### let 和 const `对比` var 命令
  - **`let` 和 `const`有块级作用域，而`var`只有函数作用域**
  - **`var`存在`变量提升`，`let` 和 `const`没有**
  - **在`let`和`const`之间，建议优先使用`const`，尤其是在全局环境，不应该设置变量，只应设置常量**<br/>

     `const`优于`let`有几个原因

      + 一个是`const`可以提醒阅读程序的人，这个变量不应该改变。
      + 另一个是`const`比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算。
      + 最后一个原因是`JavaScript`编译器会对`const`进行优化，所以多使用`const`，有利于提高程序的运行效率，也就是说`let`和`const`的本质区别，其实是编译器内部的处理不同。

  - **`var` 会存在变量提升，而 `let` 和 `const` 没有**
  ```js
  // var 的情况
  console.log(foo); // 输出undefined
  var foo = 2;

  // let 的情况
  console.log(bar); // 直接就报错了, Cannot access 'bar' before initialization
  let bar = 2;

  // const 的情况
  console.log(PI); // 直接就报错了, Cannot access 'PI' before initialization
  const PI = 3.1415;
  ```
  **那么什么叫做`变量提升`?**
  ```js
  console.log(a); // 输出undefined
  var a = 2;

  // 实际上预编译会转成这样
  var a;
  console.log(a); // 输出undefined
  a = 2;
  // 只有 var 命名会挂在到 window 对象上(不在函数作用域下面的情况下)
  console.log(window.a) // 2

  // 没有使用声明语句的情况下，会默认用 var 声明
  b = 3
  console.log(b) // 3
  // 实际上预编译会转成这样
  var b
  b = 3
  console.log(b) // 3
  ```
  `在JavaScript中存在一种预编译的机制，这也是Java等一些语言中没有的特性，也就正是因为这个预编译的机制，导致了js中变量提升的一些问题`<br/><br/>
  ### 块级作用域
  ```js
  {
    let a = 10;
    let B = 'B'
    var c = 1;
  }

  console.log(a) // a is not defined
  console.log(B) // B is not defined
  console.log(c) // 1 var并没有没有块级作用域，也就不会报错

  // 实际上预编译时，会转成
  var c
  {
    let a = 10;
    let B = 'B'
  }
  c = 1;
  ```
  `而 var 作用域只在函数体内才有作用域之说`

  ## 变量的解构赋值
  ### 数组的解构赋值
  `ES6` 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
  以前，为变量赋值，只能直接指定值
  ```js
  let a = 1;
  let b = 2;
  let c = 3;
  ```
  ES6 允许写成下面这样
  ```js
  let [a, b, c] = [1, 2, 3];
  console.log(a) // 1
  console.log(b) // 2
  console.log(c) // 3
  ```
  ### 对象的解构赋值
  解构不仅可以用于数组，还可以用于对象
  我们平时经常会看到`import { Swiper, SwiperSlide } from 'vue-awesome-swiper'`，这就是`ES6`的对象的解构赋值
  ```js
  let { foo, bar, baz } = { foo: 'aaa', bar: 'bbb' };
  console.log(foo) // aaa
  console.log(bar) // bbb
  console.log(baz) // undefined

  // 等同于
  let obj = { foo: 'aaa', bar: 'bbb' }
  console.log(obj.foo) // aaa
  console.log(obj.bar) // bbb
  console.log(obj.baz) // undefined
  ```
  对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定。<br/>
  而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。<br/>
  如果解构失败，变量的值等于`undefined`<br/>

  ### 字符串的解构赋值
  ```js
  const [a, b, c, d, e] = 'hello----';
  a // "h"
  b // "e"
  c // "l"
  d // "l"
  e // "o"
  ```
  ### 函数参数的解构赋值
  ```js
  function add ([x, y]){
    return x + y;
  }

  add([1, 2]); // 3
  ```
  上面代码中，函数`add`的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量`x`和`y`。对于函数内部的代码来说，它们能感受到的参数就是`x`和`y`

  ## 对象的扩展
  ### 解构赋值
  对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的`enumerable`、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面
  ```js
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  x // 1
  y // 2
  z // { a: 3, b: 4 }
  ```
  `上面代码中，变量z是解构赋值所在的对象。它获取等号右边的所有尚未读取的键` a `和` b `，将它们连同值一起拷贝过来`

  **<font color="red">使用注意点</font>**
  - 由于解构赋值要求等号右边是一个对象，所以如果等号右边是`undefined`或`null`，就会报错，因为它们无法转为对象。
  ```js
  let { ...z } = null; // 运行时错误
  let { ...z } = undefined; // 运行时错误
  ```
  - 解构赋值必须是最后一个参数，否则会报错
  ```js
  let { ...x, y, z } = someObject; // 句法错误
  let { x, ...y, ...z } = someObject; // 句法错误
  ```

  ### 扩展运算符
  对象的扩展运算符`...`用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
  ```js
  let z = { a: 3, b: 4 };
  let n = { ...z };
  n // { a: 3, b: 4 }
  ```
  由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。
  ```js
  let foo = { ...['a', 'b', 'c'] };
  foo // {0: "a", 1: "b", 2: "c"}
  ```

  ## 函数的扩展
  ### 函数参数的默认值
  `ES6` 之前，不能直接为函数的参数指定默认值，只能采用变通的方法，但是这样存在一些问题
  ```js
  function log (x, y) {
    x = x || 'Hello';
    y = y || 'World';

    return x + ' ' + y
  }

  // 如果我传的值 JavaScript 最终会转成 false 的话，问题就出现了，如下：
  log(false, '') // "Hello World", 结果被改为默认值
  ```
  为了避免这个问题，通常需要先判断一下参数`x`,`y`是否被赋值，如果没有，再等于默认值。
  ```js
  function log (x, y) {
    if (typeof x === 'undefined') {
      x = 'Hello';
    }
    if (typeof y === 'undefined') {
      y = 'World';
    }

    return x + ' ' + y
  }

  log(false, '') // "false "
  ```
  **而 `ES6`允许为函数的参数设置默认值**
  ```js
  function log (x = 'Hello', y = 'World') {
    return x + ' ' + y
  }

  log() // "Hello World"
  log(false, '') // "false "
  ```
  `可以看到，ES6 的写法比 ES5 简洁许多`

  ### rest 参数
  `ES6` 引入 `rest` 参数（形式为`...变量名`），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。`rest` 参数搭配的变量是一个数组，该变量将多余的参数放入数组中
  ```js
  function add (...values) {
    console.log(values) // [2, 5, 3]
    let sum = 0;

    for (var val of values) {
      sum += val;
    }

    return sum;
  }

  add(2, 5, 3) // 10
  ```
  ### 箭头函数
  `ES6` 允许使用“箭头” `=>` 定义函数
  ```js
  const f = v => v; // 如果是单行，并且没有花括号，默认会有 return

  // 等同于
  const f = function (v) {
    return v;
  };
  ```
  `如果箭头函数的代码块部分多于一条语句，如果想要返回值，就要使用大括号将它们括起来，并且使用return关键字返回`

  #### this 指向
  ```js
  const container = document.getElementById('container');
  container.addEventListener('click', () => {
    console.log(this) // Window {parent: Window, opener: null, top: Window, length: 2, frames: Window, …}，这里的 this 指向了 Window 对象
  });

  const container = document.getElementById('container');
  container.addEventListener('click', function () {
    console.log(this) // <div id="container">...</div>，这里 this 指向了当前节点
  });
  ```

  **<font color="red">使用注意点</font>**
  - 函数体内的this对象，引用外层的的是`this`，不存在自身的`this`
  - 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
  - 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替
  - 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数