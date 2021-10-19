---
tags: "响应式设计"
title: "网页设计/css"
date: "2021-6-23"
---
<!--more-->
## 响应式网页设计原则：创建媒体查询
媒体查询是CSS3中引入的一项新技术，可根据不同的视口大小更改内容的表示形式。视口是用户在网页上的可见区域，视用于访问站点的设备而异。

媒体查询由一种媒体类型组成，如果该媒体类型与显示文档的设备类型匹配，则将应用样式。您可以在媒体查询中根据需要选择任意多个选择器和样式。

以下是媒体查询的示例，该查询在设备的宽度小于或等于100px时返回内容：
```
@media (max-width: 100px) { /* CSS Rules */ }
```
当设备的高度大于或等于350px时，以下媒体查询将返回内容：
```
@media (min-height: 350px) { /* CSS Rules */ }
```
** 请记住，仅当媒体类型与所使用设备的媒体类型匹配时，才会应用媒体查询中的CSS。**

例子：
```css
<style>
  p {
    font-size: 20px;
  }
 
  /* Only change code below this line */
@media (max-height: 800px) {
  p {
    font-size: 10px;
  }
  }

   /* CSS Rules */ 
  /* Only change code above this line */
</style>
```
---

### 自适应网页设计原则：使图像具有响应性
使用CSS使图像具有响应性实际上非常简单。您只需要向图像添加以下属性：
```
img {
  max-width: 100%;
  height: auto;
}
```
max-width的100%将确保图像不会比它在容器更宽，而height中auto将会使图像保持其原始宽高比。

例子：
```
<style>
.responsive-img {


}

img {
  max-width: 100%;
  height:auto;
}
</style>
```
---

###  响应式Web设计原则：使用视网膜图像进行高分辨率显示

随着互联网连接设备的增加，它们的尺寸和规格也有所不同，并且它们使用的显示器在内部和外部可能会有所不同。像素密度是一个设备上可能与其他设备不同的方面，这种密度称为“像素每英寸（PPI）”或“每英寸点数（DPI）”。最著名的显示器就是最新的Apple MacBook Pro笔记本电脑和最近的iMac电脑上的“视网膜显示器”。由于“视网膜”和“非视网膜”显示器之间的像素密度不同，因此某些未考虑高分辨率显示器的图像在高分辨率显示器上渲染时可能看起来“像素化”。

使图像正确显示在高分辨率显示器（例如MacBook Pro“视网膜显示器”）上的最简单方法是将其width和height值定义为原始文件的一半。这是仅使用原始高度和宽度一半的图像的示例：

```css
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

### 响应式网页设计原则：使版式具有响应性
您可以使用视口单位进行响应式排版，而不必使用文本em或不px调整文本大小。视口单位（如百分比）是相对单位，但它们基于不同的项目。视口单位是相对于设备的视口尺寸（宽度或高度），而百分比是相对于父容器元素的大小。

四个不同的视口单位是：

vw（视口宽度）：10vw将为视口宽度的10％。
vh（视口高度）：3vh将为视口高度的3％。
vmin（最小视口）：70vmin将是视口较小尺寸（高度或宽度）的70％。
vmax（最大视口）：100vmax将是视口较大尺寸（高度或宽度）的100％。
这是一个将body标签设置为视口宽度的30％的示例。
```
body { width: 30vw; }

```

## CSS Flexbox：使用显示：flex定位两个框

本节使用交替的质询样式来说明如何使用CSS灵活地放置元素。首先，挑战将解释理论，然后使用简单的tweet组件进行实际挑战将应用flexbox概念。

将CSS属性display: flex;放在元素上可让您使用其他flex属性来构建响应页面。


<style>
  #box-container {
    display: flex;
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

### CSS Flexbox：在Tweet嵌入中添加Flex超级功能

右侧是将用作实际示例的推特嵌入。在不同布局下，某些元素看起来会更好。最后的挑战证明了display: flex。在这里，您将把它添加到嵌入的推文中的几个组件中，以开始调整其位置。

<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
  }
  header .follow-btn {

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {

    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {

  }
  footer .stats {

    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>

---

## CSS Flexbox：使用flex-direction属性创建一行

添加display: flex到元素会将其变成flex容器。这样就可以将该元素的所有子元素对齐到行或列中。通过将flex-direction属性添加到父项并将其设置为行或列来执行此操作。创建一行将使子代水平对齐，创建一列将使子代垂直对齐。

其他选项为flex-direction行反向和列反向。

注意：该flex-direction属性的默认值为row。