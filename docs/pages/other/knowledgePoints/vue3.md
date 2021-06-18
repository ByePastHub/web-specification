# Vue3.0

  ## 区别
  - 更快
    + 首先来说说vue的渲染功能，总所周知，大家都知道vue2.x使用的`Virtual Dom`实现的渲染，相比2.x，3.0的版本对此也是进行的重构。性能几乎可以翻倍，甚至都达到了倍数之多
    + 众所周知，vue2.x之前是使用es5的`object.definePropty`中`getter`和`setter`实现的数据监听，不能监听数组的变化，和更改对象属性的新增或删除。`vue2.x`在实现数组的响应式时，它使用了一些hack，把无法监听数组的情况通过重写数组的部分方法来实现响应式，这也只限制在数组的`push/pop/shift/unshift/splice/sort/reverse`七个方法，其他数组方法及数组的使用则无法检测到。从而不会触发`watch`来进行视图的更新，需要我们重新调用`vm.$forceUpdate()`来更新。
    + 而vue3.0的版本，是基于Proxy进行监听的，只要你用到了才会监听，可以理解为‘按需监听’，官方给出的诠释是：速度加倍，同时内存占用还减半
  - 更小
    + vue2.x中new出的实例对象，所有的东西都在这个vue对象上，这样其实无论你用到还是没用到，都会跑一遍。而vue3.0中可以用ES6 module imports按需引入，如：keep-alive内置组件、v-model指令，等等。

  ### Vue2.x 跟写法上的 Vue3.0 最大的区别
  - 写法上，我们写的内容都写在了`setup`函数里了
  - 注意：在`setup`函数中无法访问到`this`
  - 目前`Vue3.0`目前是支持以前的`Vue.2x`的写法，以后在正式版上会不会移除目前还未知晓

  ## setup
  `setup`函数是一个新的组件选项。作为在组件内使用`Composition API`的入口点
  ### 模板中使用
  - 如果 setup 返回一个对象，则对象的属性将会被合并到组件模板的渲染上下文：
  ```vue
  <template>
      <button @click="increment">
        Count is: {{ state.count }}, double is: {{ state.double  }}
      </button>
    </template>

    <script>
    import { reactive, computed } from 'vue'

    export default {
      /*
      * Vue3.0 提供的新的组件选项
      * @param {object} props
      * @param {object} context 上下文对象，从原来 2.x 中 this 选择性地暴露了一些 property
      */
      setup (props, context) {
        const state = reactive({
          count: 0,
          // 计算属性 computed
          double: computed(() => state.count * 2)
        })

        const increment = () => {
          state.count++
        }

        return {
          state,
          increment
        }
      }
    }
    </script>
  ```

  ## 生命周期钩子函数
  可以直接导入 onXXX 一族的函数来注册生命周期钩子：
  ```js
  import { onMounted, onUpdated, onUnmounted } from 'vue'

  const MyComponent = {
    setup() {
      onMounted(() => {
        console.log('mounted!')
      })
      onUpdated(() => {
        console.log('updated!')
      })
    },
  }
  ```
  `组件实例上下文也是在生命周期钩子同步执行期间设置的，因此，在卸载组件时，在生命周期钩子内部同步创建的侦听器和计算状态也将自动删除`

  - **与 2.x 版本生命周期相对应的组合式 API**
    + ~~`beforeCreate`~~ -> 使用 `setup()`
    + ~~`created`~~ -> 使用 `setup()`
    + `beforeMount` -> `onBeforeMount`
    + `mounted` -> `onMounted`
    + `beforeUpdate` -> `onBeforeUpdate`
    + `updated` -> `onUpdated`
    + `beforeDestroy` -> `onBeforeUnmount`
    + `destroyed` -> `onUnmounted`
    + `errorCaptured` -> `onErrorCaptured`

  <!-- - **新增的钩子函数**
  除了和 2.x 生命周期等效项之外，组合式 API 还提供了以下调试钩子函数：
    + `onRenderTracked`
    + `onRenderTriggered`
  两个钩子函数都接收一个 `DebuggerEvent`，与 `watchEffect` 参数选项中的 `onTrack` 和 `onTrigger` 类似
  ```js
  export default {
    onRenderTriggered(e) {
      debugger
      // 检查哪个依赖性导致组件重新渲染
    },
  }
  ``` -->