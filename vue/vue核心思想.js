文章来源：https://ustbhuangyi.github.io/vue-analysis/prepare/directory.html#platform
// 1.数据驱动
2个方法：render，和 update方法
render方法，通过createElement方法创建vNode的集合，它描述了页面的整个的唯一的dom结构。
vNode就是虚拟DOM，它是一个数据结构，用来模仿真正的dom节点信息，有常见的有关dom节点的属性
比如：tag、children、data、parent
render方法，如果遇到组件节点，则会调用createComponent方法。
update方法：将虚拟dom转换为真正的dom节点插入页面，具体即递归的遍历vNode集合，用原生
操作dom的方法，插入节点。update方法会在组件首次渲染或者数据发生变化，需要更新dom的时候
调用。

// 2.组件化
// 3.深入响应式原理
前面2章介绍的都是Vue怎么实现数据渲染和组件化的，主要讲的是初始化的过程，把原始的数据最终映射到
dom中，但并没有涉及到从数据变化到DOM变化的部分，而Vue的数据驱动，除了数据渲染DOM外，还有一个
很重要的体现就是数据的变化会触发DOM的变化。
其实前端开发重要的2个工作，一个是把数据渲染到页面，一个是处理用户交互，用到了Object.defineProperty
Object.defineProperty会直接在一个对象上定义一个新的属性，或者修改一个已经有的属性。
Object.defineProperty(obj, prop, descriptor)
比较核心的是descriptor, 它有很多可选键值，这里我们最关心的是get和set方法，
get是给一个属性提供的getter方法，当我们访问了该属性的时候，会触发此方法。set是给属性提供的
setter方法，当给该属性重新赋值的时候，会触发此方法。
一旦对象拥有了setter和getter方法，这个对象就变成了响应式对象。
无论props还是data的初始化，都是把他们定义的各个属性变成响应式对象。
首先介绍一下代理，代理的作用是把props和data上的属性代理到vm实例上，这也就是为什么，我们定义了props。
却可以通过vm实例访问到它。

3.2 把props和data都变成响应式对象后，在getter方法中进行依赖收集，在setter方法中进行派发更新。

3.2.1Dep是依赖收集的重要数据结构。Dep收集的是Watcher。每个对象的getter都持有一个dep，dep里有很多watcher。
当触发对象的setter的时候，就知道了应该通知哪些watcher进行更新。应该把哪些watcher装入dep里呢？
访问对象的时候，就会收集依赖，什么时候访问的呢？
在模版渲染的时候，会把原生的html或者组件渲染为VNode，这个时候会访问数据，进而触发getter。收集到了
依赖。
后续会进行依赖清空的逻辑。
3.2.2
当更新某个对象的属性的时候，会在setter里派发更新。
调用dep.notify()方法--遍历dep里的所有的watcher，然后执行每个watcher的update方法。

