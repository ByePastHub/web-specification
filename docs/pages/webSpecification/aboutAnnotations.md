# 关于注释

- **单行注释以两个斜线开始，例如**
- **内容前与注释符离前应当距离一个空格**
```js
// 设置最大值位 100
let maxValue = 100
```

# **函数注释**
像一些公共函数，就需要像这样的函数注释，其他的随便一点也可以
```js
/**
* 以星号开头，紧跟一个空格，第一行为函数说明
* @param {类型} 参数 单独类型的参数
* @param {[类型|类型|类型]} 参数 多种类型的参数
* @param {类型} [可选参数] 参数 可选参数用[]包起来
* @return {类型} 说明
* @example 举例（如果需要）
* @todo 待办
*/
```

## [例子]()
```js
/**
* 获取用户名
* @param {number} id 单独类型的参数
* @return {string} 返回用户名
*/
function getUserName (id) {
  ...
  return xxx
}
```
## 错误例子
::: danger
- **当看的这样的一个公共函数什么备注都没有都情况下**<br/>
- **感觉可能自己写一个比看这个还快**
  + **首先, 我需要看这个`fmt`参数是什么, 然后我看到了这里`if(/(y+)/.test(fmt))`就是说`匹配前面的y一次或者多次`才进入 if 语句**
  + **然后, 看到`fmt.replace`正则匹配那里, 匹配第一个`子表达式`, 获取年份后转换为字符串, 然后在用`substr`截取字符串里`4 - 第一个子表达式的长度`, 这时可以大致可以得出`获取年份需要 fmt = "yyyy"`**
  + **接着遍历了`o对象`, 然后...就全部写出来了**
  + **最后才明白`fmt`我具体要传什么才能的得到我要的效果**

```js
// 全局的方法js
const util = {}
util.dateFmt(fmt,time) {
  let date = new Date(time)
  var o = {
    "M+" : date.getMonth()+1,                 //月份
    "d+" : date.getDate(),                    //日
    "h+" : date.getHours(),                   //小时
    "m+" : date.getMinutes(),                 //分
    "s+" : date.getSeconds(),                 //秒
    "q+" : Math.floor((date.getMonth()+3)/3), //季度
    "S"  : date.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}
export default util
```
:::

## 正确例子
::: tip
- **看完对比一下上面的，有没有感觉清楚一点**
- **就算我不会正则，我看备注我也知道该怎么用，看一下就知道这个函数能不能解决我的需求**
- **不然我用一个公共函数我还有去看怎么用，那可能以后会造成大家懒得用公共函数的习惯，写公共函数也就没什么很大意义，也节省不了什么时间**
- **公共函数名不推荐写简写**
```js
// 全局的方法js
/**
 * 格式时间
 * @param {string} fmt // 格式
 * @param {number} time // Date对象 或者 时间戳
 * @example
 *  dateFormat('yyyy-MM-dd', new Date()) // "2020-07-26"
 *  dateFormat('yyyy-MM-dd', 1595760154896)  // "2020-07-26", 注意：时间戳在 ios 转换不了时间
 *  dateFormat('yyyy-MM-dd hh:mm:ss', new Date()) // "2020-07-26 18:47:25"
 *  dateFormat('yyyy-MM-dd hh:mm:ss S毫秒', new Date().valueOf()) // "2020-07-26 18:50:35 710毫秒", 注意：时间戳在 ios 转换不了时间
 *  dateFormat('yyyy-MM-dd hh:mm:ss S毫秒 第q季', 1595760154896) // "2020-07-26 18:42:34 896毫秒 第3季", 注意：时间戳在 ios 转换不了时间
 */
function dateFormat (fmt, time) {
  // 解决 IOS 时间转换 NaN bug
  if (/-/g.test(time)) {
    time = time.replace(/-/g, '/')
  }
  let date = new Date(time)
  var o = {
    "M+" : date.getMonth() + 1, // 月份
    "d+" : date.getDate(), // 日
    "h+" : date.getHours(), // 小时
    "m+" : date.getMinutes(), // 分
    "s+" : date.getSeconds(), // 秒
    "q+" : Math.floor((date.getMonth() + 3) / 3), // 季度
    "S"  : date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length))) }
  }
  return fmt
}
```
:::