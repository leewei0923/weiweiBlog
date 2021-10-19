---
tags: "css|js"
title: "tab的实现"
date: "2021-4-15"

---

## tab实现的方法
下面的代码的注释中已经描述的十分清楚。
主要就是css+js的方法实现点击就切换的方法.
 <!--more-->

## setAttibute函数:
 定义和用法

    setAttribute() 方法添加指定的属性，并为其赋指定的值。

    如果这个指定的属性已存在，则仅设置/更改值。
    setAttribute(string name, string value)：
    增加一个指定名称和值的新属性，或者把一个现有的属性设定为指定的值。
### 语法:
```javascript
element.setAttribute(attributename,attributevalue)
```
### 参数
|参数|类型|描述|
|----|----|----|
|attributename|string|必需。您希望添加的属性的名称。|
|attributevalue|String|必需。您希望添加的属性值。|
### 例子:
```javascript
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "q");
input.setAttribute("class",bordercss);
```
```
<input type="text" name="q" class="bordercss">,即，input控件具有bordercss样式属性
```
##  getAttribute()函数
### 定义和用法
    getAttribute() 方法返回指定属性名的属性值。
    提示：如果您希望以 Attr 对象返回属性，请使getAttributeNode。
    --------------------------------------------------------
    getAttribute()方法是一个函数。它只有一个参数——你打算查询的属性的名字,下面为大家介绍下其具体的使用

### 语法
```javascript
element.getAttribute(attributename)
```
### 参数
|参数|类型|描述|
|----|----|----|
|attributename|字符串值。|必需。需要获得属性值的属性名称。|
### 返回值
|类型|描述|
|----|----|
|String|指定属性的值。|

**注意**

不过，getAttribute()方法不能通过document对象调用，这与我们此前介绍过的其他方法不同。我们只能通过一个元素节点对象调用它。

可以把它与getElementsByTagName()方法结合起来，去查询每个\<p>元素的title属性

### 例子
```javascript
var text=document.getElementsByTagName("p");
for (var i=0;i<text.length;i++)
{
alert(text[i].getAttribute("title"));
}
```
## 代码展示
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>手风琴</title>
</head>

<body>
    <div class="tabs">
        <div class="nav-tab">
            <span class="dis">张羽习</span>
            <span>李一桐</span>
            <span>冷檬</span>

        </div>
        <div class="content">
            <ul>
                <li class="info">张羽习</li>
                <li>李一桐</li>
                <li>冷檬</li>
            </ul>
        </div>
    </div>
    <script>
        var spanlist = document.querySelectorAll('span');
        var lis = document.querySelectorAll('li');
        for (var i =0 ; i < spanlist.length; i++) {
            //添加自定义属性
            spanlist[i].setAttribute('index', i);
            //获取span点击事件
            spanlist[i].onclick= function() {
                console.log(spanlist)
                //获取自定义属性,然后遍历数组
                var index = this.getAttribute('index');
                //遍历lis这个数组,然后再用if进行判断是不是这个
                for (var l = 0; l < lis.length; l++) {
                    //通过if来判定 两个伪数组的下标是否相同,如果相同就改变属性 ---(style.display 和 classroom的值)
                    if (index == l) {
                        //注意是==
                        //如果index下标和j的下标一样的就执行代码
                        spanlist[l].className = 'dis';
                        lis[l].style.display = 'block';
                    } else {// if 和else需要写完整以后才能执行
                        spanlist[l].className = '';
                        lis[l].style.display = 'none';
                    }
                }
            }

        }
    </script>
</body>

</html>
```

```css
*{
    margin: 0;
    padding: 0;
}

.tabs .nav-tab{
    width: 300px;
    height: 40px;
    background: #e5e6e5;
}
.tabs .nav-tab span{
    width: 100px;
    padding: 10px;
    position: relative;
    top: 10px;
}
.tabs .nav-tab span:hover{
    background: #bcbdbd;
}
.content {
    width: 300px;
    background: black;
}
.content ul li {
    margin: 5px;
    padding: 10px;
    color: #fff;
    display: none;
}
.content .info{
    display: block;
}
```