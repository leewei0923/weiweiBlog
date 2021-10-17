---
tags: "C++"
title: "C++日记"
date: "2021-9-14"

---





---

# 第一阶段  - -  C++基础语法入门

## day 1 

### 输出Hello World



```c++
#include <iostream> 

using namespace std; //表示使用std的命名的空间 

int main()
{
	cout << "你好世界";  //会在屏幕上显示消息 "Hello World"。
	return 0;  //终止程序
}
```



## Day 2



### 常量

C++ 定义常量两种方式

1. #define 宏常量 `#define`  常量名 常量值
2. const 修饰的变量 const 数据类型 常量名 常量值



### sizeof关键字

```
1. 整型:short ,int ,long ,long long
2. 可以利用sizeof求出数据类型占用的内存
3. 语法: sizeof(数据类型/ 变量)
```



### 实型

1. 单精度 float
2. 双精度 double



| 数据类型 | 占用空间 | 有效数字范围    |
| -------- | -------- | --------------- |
| float    | 4字节    | 7位有效数字     |
| double   | 8字节    | 15-16位有效数字 |



### 字符型

作用: 字符型变量用于显示单个字符

语法: char ch = 'a';



*注意*

1. 在显示字符型变量时, 用单引号符号括起来  , 不能用双引号
2. 单引号只能由一个字符 , 不可以是字符串

C和C++ 中字符型变量只占用1个字符



强制转换类型前面加(int) -- 转为整数型



### 转义字符



| 转义字符 | 含义                          | ASCII码值 |
| -------- | ----------------------------- | --------- |
| \a       | 换行 , 将当前位置移到下一行头 | 010       |
| \\\      | 表示反斜杠                    | 092       |
| \t       | 水平制表符(跳到下一个TAB位置) | 009       |



### 字符串型



C语言:

`char 变量名[] = "字符串值"`

C++风格:

`string 变量名 = "字符串值"`



## day 3

### 数据的输入

作用: 用于从键盘获取数据

关键字 : cin

`cin >> 变量 `

```c++
//整数
int a ;
cout << "请输入一个整数" << endl;
cin >> a;
cout << "整型变量a=" << a << endl;

//浮点数
float f = 3.14f;

//字符型

char ch = 'a';
cout << "请给字符型变量ch赋值" << endl;

cin >> ch;
cout << "字符型变量ch=" << ch << endl;

// 字符串型
//要事先引用 #include <string>
string str = "hello";
cout << "请给字符串 str 赋值" << endl;
cin >> str;
cout << "字符串str=" << str << endl;


```

## Day 4

### 数组

> 初始化数组

```
type arrayName [ arraySize ];
```

一维数组

```c++
double blance[10];
double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};
```

> setw函数

**引用** iomanip

```C++
// 简单生成某个班级学生数学成绩

#include <iostream>
using namespace std;

#include <iomanip>
using std::setw;

int main()
{
	int n[10]; // n是一个包含10 个整数的数组 n 表示包含10行成绩

	// 初始化数组元素

	for (int i = 0; i < 10; i++)
	{
		n[i] = i + 10;
	}

	cout << "学号" << setw(1) << "成绩" << endl;

	for (int j = 0; j < 10; j++)
	{
		cout << setw(2) << j << setw(1) << n[j] << endl;
	}
	return 0;
}
```







# 第二阶段 - -  核心编程





# 第三阶段 - - C++ 提高编程

