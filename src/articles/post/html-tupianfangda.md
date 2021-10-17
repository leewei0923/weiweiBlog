---
tags: "html"
title: "鼠标移上去图片放大"
date: "2021-11-14"

---

# 图片放大
<!--more-->
### html文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>鼠标移上去图片放大</title>
    <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
    <div id="image"></div>
    <script src="js/01.js"></script>
</body>
</html>
````

```css
/*
content: 鼠标移上去放大样式表
author: weiWei
time: 2021/03/14 13:54
class: imation
*/


body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
#image{
    width: 300px;
    height: 300px;
    background-color: #000;
    background-image: url(../img/dog.jpg);
    background-size: 300px;
    background-repeat: no-repeat;
}

#image[index]{
    background-size: 900px 900px;
    background-position: calc(var(--x)*100%) calc(var(--y)*100%);
}
```


```javascript
/*
content: 鼠标移上去放大脚本
author: weiWei
time: 2021/03/14 13:54
class: imation
*/

//电脑版鼠标移动事件
document.querySelector('#image').addEventListener('mouseenter', enterImage);//进入图片触发mouseenter

document.querySelector('#image').addEventListener('mousemove', moveImage);//鼠标在图片游动上触发mousemove

document.querySelector('#image').addEventListener('mouseleave', leaveImage);//离开图片触发mouseenter

//手机触摸事件
document.querySelector('#image').addEventListener('touchstart', enterImage);//触摸进入图片触发

document.querySelector('#image').addEventListener('touchmove', moveImage);//在图片上触摸滑动触发

document.querySelector('#image').addEventListener('touchend', leaveImage);//离开图片触发


//进入图片的函数
function enterImage(e) {
    e.target.setAttribute('index', 1);
    moveImage(e);
}
/*
    touch事件的event没有offsetX和offsetY
*/
//鼠标在图片上面移动
function moveImage(e) {
    let rect = e.target.getBoundingClientRect();

    //自己定义offsetX和offsetY
    let offsetX , offsetY ;
    if(['touchstart', 'touchmove', 'touchend'].includes(e.type)){
        offsetX = e.touches[0].pageX - rect.left;
        offsetY = e.touches[0].pageY - rect.top; 
        e.preventDefault()
    }else{
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    }

    let x = offsetX / rect.width;  //获取图片在X轴的位移
    let y = offsetY / rect.height;  //获取图片在Y轴的位移

    e.target.style.setProperty('--x', x);
    e.target.style.setProperty('--y', y);
}

//鼠标在离开图片以后
function leaveImage(e) {
    e.target.removeAttribute('index',1);
    moveImage(e);
}

```
## 心得

* css变量

      # 解释
       - CSS 变量是由CSS作者定义的实体，其中包含要在整个文档中重复使用的特定值。使用自定义属性来设置变量名，并使用特定的 var() 来访问。（比如  color: var(--main-color);）。
      # 解决问题
       在构建大型站点的时候,面对很多的重复使用信息,可以设定变量,重复使用
       CSS变量为我们带来一些预处理器的便利，并且不需要额外的编译。
      
      并使用特定的 var() 来访问。（比如  color: var(--main-color);）。
  
* 鼠标事件

  mouseenter: 鼠标进入

  mousemove: 鼠标移动

  mouseleave: 鼠标离开

     # addEventListener('event','function',useCapture) 
       方法用于向指定元素添加事件句柄。
    参数: 
        event: 必须。字符串，指定事件名。
        function: 指定要触发的函数名称
        useCapture: 可有可无,放置布尔值
         可能值:
              true - 事件句柄在捕获阶段执行
              false- 默认。事件句柄在冒泡阶段执行

   **注意**: 不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。

* 形式参数e

   这里的e是参数的名字。参数分为：
   1.形参：形式参数，相当于函数声明的局部变量，实参把自己的值赋给形参，形参就保存了这个值
   2.形参只能在函数内部使用。

* 移动端 touch事件
   Touch
   Touch对象代表一个触点，可以通过 event.touches[0]获取，每个触点包含位置，大小，形状，压力大小，和目标 element属性。

