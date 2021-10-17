---
tags: " javascript"
title: " js再看"
date: "2021-10-14"

---



### js与Unicode字符集

```javascript
const CARD_PONITS = ['A','1','2','3','4','5','6','7','8','9','10','J','P','Q'];
const CARD_SUITS = ['♥','♣','♠','♦'];

function getRandomItem(list){
    return list[Math.floor(Math.random(list.length))]
}

function getRandomCard(){
    const point = getRandomItem(CARD_POINTS);
    const suit = getRandomItem(CARD_SUITS);
}
```



### 不允许换行



- return和返回值之间
- break/continue和label之间
- 变量和`++` , `--` 后缀运算符之间
- throw 和异常对象之间
- 箭头函数的参数列表和箭头 `=>` 之间
- yield和迭代值之间
- async 和 异步函数声明, 函数表达式, 方法名



### var变量提升



```javascript
console.log( a === undefined) //true
var a = 10;

function foo(){
    console.log(a,i); //undefined , undefined
    
    var a = 20;
    for(var i = 0; i < a ; i++){
        
    }
    console.log(a,i);  //20 ,20
}
```



### let 暂存死区(DTZ)

```javascript
{
let x = 10;
console.log('x is '+x); //x is 10
}

console.log(typeof a); //error

let x = 10
function foo(){
    console.log(x); // undefined
    var x = 20;
    return x*x
}

console.log(foo()); //400
```



### 隐式类型转换

- 字符串与数值相加时, 数值被转换为字符串
- 字符串参与飞假发数学运算时, 字符串被转换为数值
- 布尔值与数值进行运算时, true视为1 , false 视为0 
- 布尔值与字符串进行相加时, 布尔值视为字符串

```javascript
const a= 10 , b= 'abc,c= 1;
console.log(a + b + c); //10abc1

const a = 123 , b = '456' , c = 1
console.log(a + b - c); //123455

const a = true , b = false
console.log(a + 1, b * 3); //2 0

const a = true , b = false
console.log(a + '', b + 'foobar')
```



###  == 与 ====



- 使用 ==  操作符比较时, 会触发隐式类型转换
- 值用 === 操作符比较时, 不会触发隐式类型转换
- 一般原则出来与null比较外,尽量使用 ===



### 显示类型转换



通过调用方法`Number` , `String`, `Boolean`  等





### NULL和 Undefined



Null和Undefined 是javascript 中的两种原始类型

它们分别只有一个值

- Null 的值是null
- Undefined 的值是undefined
- 在非严格比较下, null == undefined



```javascript
let foo //变量标识符被声明而没有初始化
console.log(foo)

function bar(a,b){
    return [a,b]
}

// bar函数的第二个形参没有传入实参

console.log(bar(1)) // [1, undefined]

let sum = 0;
function addSum(sum){
    sum += sum;
}

// addSum 没有return
console.log(addSum(10)); // undefined

// 访问p对象不存在的z属性
let p = {x:1, y:2}
console.log(p.z); //undefined

let foo = null;
console.log(foo) // null

```



### 私有属性

新的语言标准private field 有些不理想 , 所以也可以采用Symbol来定义私有属性

```javascript
const size = Symbol('size');

class Collection{
    constructor(){
        this[size] = 0
}
    
add(item){
    this[this[size]] = item;
    this[size]++;
}
    
static sizeOf(instance){
    return instance[size];
}
```



### 内置Symbol

ES6内置了一些有用的Symbol, 可以用来控制对象的一些内部行为

- Symbol.iterator
- Symbol.toPrimitive 
- Symbol.toStringTag





小结

```javascript
class Path {
    constructor(){
        this._points = []
    }
    
    add(..points){
        this._ponits.push(..points);
    }
    
    *[Symbol.iterator](){
        yield * this._points;
    }
    gwt length(){
        return this._points.length;
    }
}

const path = new Path();
path.add([1,1],[1,2],[2,3]);
console.log(path.length);

for(let point of path){
    console.log(point); //[1,2],[1,2],[2,3]
}
```



### 执行上下文

函数有执行上下文，运行时会产生‘闭包

- 闭包是运行有函数调用而成
- 通过闭包可访问执行上下文中的数据
- 如果产生闭包的引用被销毁， 闭包被销毁

```javascript
function sayHelloTo(person){
    return function(){
        console.log(`Hello World`);
    }
}

let greeting1 = sayHelloTo("Tom");
let greeting2 = sayHelloTo("Jerry");

greeting1(); // Hello Tom
greeting2(); // Hello Jerry

greeting1 = null;
geerting2 = null;
```



### this上下文



```javascript
const person = {
    firstName: '三',
    lastName:'张',
    getFullName:function(){
        return this.lastName+' '+ this.firstName;
    }
}

console.log(person.firstName);// 三
console.log(person.lastName); //张
console.log(person.getFullName()) //张三

person.sayHelloTo = function(){
    console.log(`Hello ${this.lastName}`);
} 

person.sayHelloTo(); //Hello 张
setTimeout(person.sayHelloTo,100); //Hello undefined
```



### 构造

```javascript
// 字面量
{
    let myObj = {
        name:'ak',
        birday:'12-29'
    }
}

// 构造器(不推荐)

{
    let myObj = new Object();
    myObj.name = 'ak'
    myObj.birday = '12-29'
}

// 原型(高级用法)

{
    let myObj = Object.create({
        name:'ak',
        birday:'12-29'
    })
}
```



#### 构造器与类

```javascript
//函数作为构造器
{
    function Vetor2d(x,y){
        this.x = x;
        this.y = y;
    }
    
    const v = new Vector2d(3,4)
    console.log(v)
}

//定义class

{
 class Vector{
     constructor(x,y){
         this.x = x ;
         this.y = y
     }
 }   
    const v = new Vector(3,4)
    console.log(v)
}

```





## 原则

### 版本一



```javascript
const btn= document.getElementById('modeBtn')

btn.addEventListener('click',(e) => {
    const body = document.body;
    if(e.target.innerHtml ==='白天'){
        body.style.backgroundColor = 'black';
        body.style.color = 'white'
        e.target.innerHtml = '黑夜'
    }else{
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        e.target.innerHtml = '白天'
    }
});

```



### 版本二

```javascript
const btn = document.getElementById('modeBtn');
btn.addEventListener('click',(e) => {
    const body = document.body;
    if(body.className != 'night'){
        body.className = 'night'
    }else{
        body.className = '';
    }
})
```



版本一和版本二区别:

一 代码的可读性不强, 二 代码可读性强. 各司其职, js用来逻辑的切换 , css用来做样式

## 组件

组件是web上抽出来的一个个包含模板HTML JS CSS 的单元







