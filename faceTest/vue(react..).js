一、一些框架或者别人的轮子
1.为什么要使用vue，为什么不用react
i) 在体积上，vue比react轻量级。在社区生态系统上，react的生态系统比vue要更丰富
i）在react中，一切都是js。在vue中会区分模板和js
i）在数据绑定的实现方式上，vue利用es5的方法，可以自动的将数据的变化和对应的dom更新。而react当数据变化时，从组件根开始，
重新渲染整个组件。这样以来，就不如vue高效。
2.vue双向绑定的原理
利用Object.defineProperty('_people',{
  configurable: true,
  get: function () {
    // 收集数据和dom的对应关系，以便当数据改变时，更新dom
  },
  set: function () {
    // 数据改变时，去更新相应的dom
  }
})
react的双向绑定的原理？？
在数据和最终的dom之间有一层虚拟dom，当数据发生改变时，首先用数据重新渲染整个虚拟dom，然后比较虚拟dom和现有dom之间的差异，
然后只需要更新差异的部分。

3.vuex的整个触发过程(action, mutation, store)
vue的兄弟组件通信时，只能通过用父组件做中转的方式，及一个子组件通过事件的方式通知父组件，让父组件变更数据，然后父组件通过props
去通知另一个子组件。
复杂应用考虑使用vuex，状态比较复杂
store，存储应用级数据
mutation：不能直接通过对store赋值的方式来改变store的数据，只能通过commit提交mutation的方式，在mutation里面去更改store
的值。
例如，store.commit('display')
这样做的原因是为了更加方便的追踪store的变化。
action：action提交mutation，action可以包含异步操作，mutation不可以，mutation里的操作必须是同步的。
action通过dispatch触发，例如：
store.dispatch('ddd')
4.vue组件的生命周期
一个组件的生命周期要经历以下过程：按照钩子函数执行的顺序来说就是：
beforeCreate-->created-->beforeMounted-->beforeMounte-->mounted-->beforeDestory-->destroyed
5.路由的原理
6.猿题库：小程序唤起的弹窗是原生的吗？你觉得是用什么实现的？
7.说出vue的指令
8.<keep-alive></keep-alive>的作用
9.vue生命周期钩子函数
10.vue的全局函数
// Vue.use  Vue.extend  Vue.component  Vue.directive  
