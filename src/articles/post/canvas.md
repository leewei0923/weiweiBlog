---
tags: "javascript"
title: "canvas"
date: "2021-10-14"

---

# canvas 小记录

## 起步

> 简介

canvas 标签作用为页面提供画图-----画板

**注意**不要使用css来设置canvas的宽和高，会出现问题。



```javascript
// 画图
        // 检测是否支持绘制对象----画笔
        if(canvas.getContext){
            // 获取绘制对象(画笔)
            let ctx = canvas.getContext("2d");
        }
```

### strokeRect();

```
// 绘制一个矩形
        /*
        strokeRect();
        fillRect();
        clearRect();

        三个方法一致,
        参数一:起始点的横坐标
        参数二: 起始点的纵坐标
        参数三: 矩形的宽
        参数四: 矩形的高
        */
        strokeStyle 路径绘制方法,绘制颜色
        
        beginPath();//开始新的路径
        moveTo(x,y);x,起点的横坐标 y,起点的纵坐标
        lineTo(x,y);绘制路线图
        closePath();闭合路径
        
        
```





### fillRect(); 

```javascript
 ctx.fillStyle="orange"; //设置颜色
 ctx.fillRect(100,130,100,100); 
```

### clearRect()

```javascript
*//clearRect();--重新绘制并设置为透明*

   ctx.clearRect(100,240,100,100);
```

### 正方形

```javascript
ctx.moveTo(300,100);
ctx.lineTo(300,100);
ctx.lineTo(400,100);
ctx.lineTo(400,200);
ctx.lineTo(300,200);
ctx.closePath();

ctx.stroke();

//绘制一个正方形--路径绘制
```

### 三角形

```javascript

        ctx.lineTo(100,200);
        ctx.lineTo(200,200);
        ctx.lineTo(100,100);

        //绘制
        ctx.stroke();
```



### 签名案例

```
起点的横坐标: clientX - offsetLeft
起点的纵坐标: clientY - offsetTop
```



