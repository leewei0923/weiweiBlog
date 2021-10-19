---
tags: "css|html"
title: "时光轴"
date: "2021-4-24"
---

# 简易的时光轴练习
## 相关知识
这个简易的时光轴的实现,使用了html和css.元素主要有时间,图片,文字.
 
<!--more-->
### list-style
**定义和用法**

list-style 简写属性在一个声明中设置所有的列表属性。

说明

该属性是一个简写属性，涵盖了所有其他列表样式属性。由于它应用到所有 display 为 list-item 的元素，所以在普通的 HTML 和 XHTML 中只能用于 li 元素，不过实际上它可以应用到任何元素，并由 list-item 元素继承。

可以按顺序设置如下属性：
```css
list-style-type
list-style-position
list-style-image
```
可以不设置其中的某个值，比如 "list-style:circle inside;" 也是允许的。未设置的属性会使用其默认值。
|默认值：|disc outside none|
|----|----|
|继承性：|yes|
|版本：|CSS1|
|JavaScript 语法：|object.style.listStyle="decimal inside"|

------
|描述|值|
|----|----|
|list-style-type|设置列表项标记的类型。|
|list-style-position|设置在何处放置列表项标记。|
|list-style-image|使用图像来替换列表项的标记|
|inherit|规定应该从父元素继承 list-style 属性的值。|

## transform属性
**属性定义及使用说明**
Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。
|默认值：|none|
|----|----|
|继承：|no|
|版本：|CSS3|
|JavaScript 语法：|object.style.transform="rotate(7deg)"|

语法
```css
transform: none|transform-functions;
```
|值|描述|
|----|----|
|none|定义不进行转换。|
|matrix(n,n,n,n,n,n)|定义 2D 转换，使用六个值的矩阵。|
|matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)|定义 3D 转换，使用 16 个值的 4x4 矩阵。|
|translate(x,y)|定义 2D 转换。|
|translate3d(x,y,z)|定义 3D 转换。|
|translateX(x)|定义转换，只是用 X 轴的值|
|translateY(y)|定义转换，只是用 Y 轴的值。|
|translateZ(z)|定义 3D 转换，只是用 Z 轴的值。|
|scale(x[,y]?)|定义 2D 缩放转换。|
|scale3d(x,y,z)|定义 3D 缩放转换。|
|scaleX(x)|通过设置 X 轴的值来定义缩放转换|
|scaleY(y)|通过设置 Y 轴的值来定义缩放转换。|
|rotate(angle)|定义 2D 旋转，在参数中规定角度|
还有很多,[点击查看](https://www.runoob.com/cssref/css3-pr-transform.html)


## transition

**属性定义及使用说明**

transition 属性设置元素当过渡效果，四个简写属性为：
```css
transition-property
transition-duration
transition-timing-function
transition-delay
```
注意： 始终指定transition-duration属性，否则持续时间为0，transition不会有任何效果。
|默认值|all 0 ease 0|
|----|----|
|继承：|	no|
|版本：|	CSS3|
|JavaScript 语法：|object.style.transition="width 2s"|


|值|描述|
|----|----|
|transition-property|指定CSS属性的name，transition效果|
|transition-duration|transition效果需要指定多少秒或毫秒才能完成|
|transition-timing-function|指定transition效果的转速曲线|
|transition-delay|定义transition效果开始的时候|
## 代码展示

**html**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>时光轴效果</title>
</head>

<body>
    <ul>
        <li>
            <span>2021年1月28日21:11:41</span>
            <div class="content">
                <div class="content-img">
                    <img src="img/01.jpg" alt="羽习">
                </div>
                <div class="content-words">
                    不见你,恍如三秋啊!
                </div>
            </div>
        </li>
        <li>
            <span>2021年1月28日21:11:51</span>
            <div class="content">
                <div class="content-img">
                    <img src="img/02.jpg" alt="羽习">
                </div>
                <div class="content-words">
                对你有时候甚是思念
                </div>
            </div>
        </li>
        <li>
            <span>2021年1月28日21:11:56</span>
            <div class="content">
                <div class="content-img">
                    <img src="img/03.jpg" alt="羽习">
                </div>
                <div class="content-words">
                有时候就是想想就好,没有想过我的结果,就是做出这一步
                </div>
            </div>
        </li>
    </ul>
</body>

</html>
```

**css**
```css
*{
    margin: 0;
    padding: 0;
}

ul{
    list-style: none;
}

ul{
    max-width: 600px;
    margin: 100px auto;
    border: 1px solid #ddd;
    position: relative;
    padding-left:20px ;
}
ul::before{
    content: '';
    width: 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #00ffff;
    left: 0;
}
ul li{
    margin-bottom: 20px;
    position: relative;
}

ul li::before{
    content: '';
    width: 20px;
    height: 20px;
    background-color: #00ffff ;
    position: absolute;
    border-radius: 50%;
    left: -28px;
    box-shadow: 0 0 6px;
}
ul li span {
    color: gray;
}

ul li .content{
    padding-top: 20px ;
}

ul li .content-img{
    overflow: hidden;
}

ul li .content-img img{
    width: 100px;
    transition: transform 0.4s;
}

ul li .content-img img:hover{
    transform: scale(1.1);
}
ul li .content .content-words{
    text-align: justify;
    font-size: 18px;
    padding-top: 18px;
    line-height: 1.6;
    transition: transform 0.4s;
}
ul li .content .content-words:hover{
    transform:translateX(10px);
    color: gray;
}
```