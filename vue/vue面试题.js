1. vue核心思想
2. 挂载在Vue上有哪些方法和属性？Vue.use()/Vue.extend()
3. vuex
4. Vue.component({
  template: '',
  data: function () {},
  methods: {}
})
// 插件
Vue.use(myPlugin)
myPlugin.install = function (Vue, options) {
  Vue.prototype.$toast = function (msg) {
  }
}
// 指令
Vue.directive('trim', function (el, binding) {
})

// pipe
Vue.filter('formatTimstamp', function (value) {
})

// nextTick, 等到dom更新后，执行回调
Vue.nextTick(function () {})

// set delete
Vue.set(target, propetyName, value)

// 混入
Vue.mixin({ 可以用vue里的各种钩子函数和配置： data, created, })

// 编译 没看懂
Vue.compile()

// :class  字符串、对象、字符串和对象组成的数组
:class = "className"
:class = "{'active': curPage === 0}"
:class="[{'active': curPage === 0}, 'ddd', className]"

// :style 字符串、对象、对象组成的数组


// slot 不太懂