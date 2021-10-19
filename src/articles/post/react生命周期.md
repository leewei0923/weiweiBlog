---
tags: "React"
title: "React的生命周期"
date: "2021-1-23"

---

React的生命周期从创建到卸载经历以下三阶段:

- 挂载阶段 - 组件实例被创建和插入Dom树的过程
- 更新阶段 - 组件被重新渲染过程
- 卸载阶段 - 组件从Dom树中被删除的过程



## 17 版本前生命周期

> 挂载阶段



初始化操作， 如下几个钩子函数

```
static defaultProps
	-- 设置props数据类型
	
static proTypes
	-- props数据类型检查
	
constructor(props)
	-- 构造函数

componentWillMount()
	-- 组件前挂载前函数

render()
	-- 组件更新钩子

componentDidMount()
	-- 组件挂载成功钩子, 该过程组件已经成功挂载到真实Dom上
	
注意: static 静态方法不依赖构造函数, 只跟类有关, 可优先于构造函数执行
```

 

> 更新阶段

```
componentWillReceiveProps(newProps)
	-- 父组件更新props钩子

shouldComponentUpdate()
	-- 组件是否更新钩子

componentWillUpdate()
	-- 组件更新前钩子

render()
	-- 组件渲染钩子
	
componentDidUpdate()
	-- 组件更新成功钩子
```



> 卸载阶段

```
这个阶段主要从Dom树中删除组件操作, 它的钩子函数:
componentWillUnmount()
	-- 组件将要被卸载的时候调用
```





