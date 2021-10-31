# 伟伟小世界


## 开始

```sh
    git clone https://github.com/leewei0923/weiweibolg.git

    cd weiweiblog

    npm install 

    npm start
```

## 前言

早就有了自己写一个个人博客的想法了，以前是想用 Hexo 写一个个人博客,奈何技术不够，后面学习了 react ，所以有了现在的伟伟小世界这个博客系统了。该博客是我个人是使用的不具有通用性，以锻炼我的能力而做，看看就好。

## 简介

该博客采用 Jamstack

什么是 jamstack?

<details>
    <sumary>Jamstck</sumarry>
        <p>Jamstack 是一种构建网站和 web 应用程序的新方法。Jamstack 的 Stack 指的是许多独立，但是可以组合的技术栈。当它们结合在一起时能够提供一个完整的 web 应用。<br/>Jamstack 架构中的 JAM 是指客户端 JavaScript、可重用的后端 API，和用户界面的 Markup，比如 HTML 与 CSS。</p>
</details>

学习React之后就希望自己写一个博客，现在时机成熟，所以有了现在的博客。

主要采用了gatsby + react技术栈。[gatsby传送门](https://www.gatsbyjs.cn/)

## 仓库地址

演示地址: [伟伟小世界]()
仓库地址: [GitHub]()


## 文档大纲


```
- src
  |- articles 用来放自己文章
    |- 数量较多不展示
  |- component 用来放一些组件
    |- Header.js
    |- Layout.js
    |- RightSide.js
    |- Footer.js
    |= all.css
  |- images
    |- icon图片之类
  |- pages  主要的页面
    |- 404.js
    |- about.js
    |- friendLink.js
    |- index.js
    |- tags.js
    |- page.css
  |- styles 全局的css文件
    |- Animation.css
    |- global.css
  |- templates  
    |- blogpost.js
    |- Pgae.js
- gatsby-browser.js
- gatsby-config.js
- package.json
- README.md
```

## 用到的技术 / 工具

🔖 博客主要使用到的技术

前端 (博客页面)

    - React 
    - gatsby cli
    - Antd 组件库
    - 


## 主要功能

- 首页预览所有文章
- 查看文章评论、发布评论、评论回复
- 搜索文章：根据关键字搜索、分类搜索、标签搜索
- 查看相册
- 查看说说
- 查看留言板留言、发布留言、留言回复
- 查看友链、访问友链
- 查看小作品
- 查看建站日志时间轴
- 查看关于本站/关于我


## 建站记录

## 遇到问题:

1. 文章详情页，无法修改样式


2. 定义在header 组件中中一个按钮，控制侧边栏的显示 / 隐藏 

解决: 父与子通信 ， 在layout定义一个函数通过props传递给 header组件

3. 用window.innerWidth 来判断页面的宽度 , 只是在初始加载的时候生效，后期再改变页面宽度不生效

4. 页面弹出遮罩层时，页面还是可以滚动或滑动

解决: