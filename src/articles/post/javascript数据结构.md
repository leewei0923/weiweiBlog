---
tags: "C"
title:  "数据结构"
date: "2021-8-13"
---

## 关于数据组织



###  1.1.3关于算法效率

clock(): 捕捉从程序开始运行开始到clock()被调用时所调用时所耗费的时间，时钟打点。

```C
#include <stdio.h>
#include <stdio.h>
#include <time.h>

clock_t start , stop;
// clock_ 是clock_t()函数返回的变量类型

double duration;
//记录被函数运行时间,以秒为单位

int main()
{
	//不在测试范围内的准备工作写在clock()调用之前
	start = clock();
	Myfunction();
	stop = clock();
	duration = (double)(stop - start) / CLK_TCK;
	//其他不在范围的处理写在后面, 例如处处duration的值 
	return 0; 
 } 
```

写程序计算给定的多项式 f(x) = 



```C
#
```



### 1.2 算法的定义

- 有限指令集
- 接受一些输入(有些情况下不需要)
- 产生输出
- 一定在有限步骤之后终止
- 每一条指令必须
  - 有充分明确的目标，不可以有歧义
  - 计算机能处理范围之类
  - 描述不依赖任何一种计算机语言以及具体的实现手段

```
void SelectionSort(int List[],int N)
{
	将N个整数List[0], ...List[N-1] 进行非递减排序
	for(i = 0 ; i < N; i ++)
	{
	MinPosition = ScanForMin(List , i , N-1);
	从List[i]到List[N-1]中找最小元,并将其位置赋给MinPositionl
	将为排序部分最小元换到有序部分的最后位置
	Sqap(List[i], List[MinPosition])
	// 将为排序部分的最小元换到有序部分的最后位置
	}
}
```



### 1.2.2 什么是好的算法

> 空间复杂度

占用存储单元的长度,

> 时间复杂度

耗用时间的长度



计算机计算加法的速度大于计算机做乘除法.

复杂度的渐进式表示法



#### 最大子列和问题

$$
f(i,j) = max\{{0,\sum_{k = i}^n A_k}\}
$$

```
```



```
- 数据结构
 - 数据结构的逻辑结构
   - 线性结构
     - 线性表
     - 栈(特殊的线性表)
     - 队列(特殊线性表)
     - 字符串,数组, 广义表
   - 非线性结构
     - 树形结构
     - 图形结构
 - 数据的存储结构
   - 顺序存储
   - 链式存储
 - 数据的运算
   - 检索 排序 插入 删除 修改
```

## 2.1线性表

逻辑特征:

- 在非空的线性表，有且只有一个开始结点a1, 它没有直接前驱，而仅有一个直接后继

- 有且只有一个终端结点a<sub>n</sub>，它没有直接后继，而只有一个直接前驱a<sub>n-1</sub>

- 其余的内部结点ai(2 <= i<= n-1) 都有且仅有一个直接前驱a<sub>i -1</sub> 和一个直接后继a<sub>i+1</sub>

线性表示一种典型的线性结构



## 2.3线性表的类型定义

```
InitList(&L)
构造一个空的线性表L
DestroyList(&L)
线性表已经存在
销毁线性表L
ClearList(&L)
线性表已经存在
将线性表L重置为空表

ListEmpty(L)
线性表L已经存在
若线性表L为空表, 则返回TRUE, 否则返回FALSE
ListLength(L)
线性表L已经存在
返回线性表L中的数据
GetElem(L,I&e);
线性表L已经存在,1<= i<=ListLength(L)
用e返回线性表L中第i个数据元素的值
LocateElem(L,e,compare())
线性表L已经存在,compare() 是数据元素判定函数
返回L中第1个与e满足compare()的数据元素的位序, 若这样的数据元素不存在则返回值为0

PriorElem(L,cur_e,&pre_e)
线性表已经存在
若cur_e是L的数据元素, 且不是第一个,则用pre_e返回它的前驱否则操作失败
NextElem(L,cur_e,&next_e)

ListInsert(&L,i,e)
1 <= i <=ListLength(L)+1
在L的第i个位置之前插入新的数据元素e, L的长度+1

ListDelete(&L,i,&e)
线性表已经存在, 1 <= i <= ListLength(L)
删除L的第i个数据元素, 并用e返回其值, L的长度减一

ListTraverse(&L,visited())
线性表L已经存在
依次对线性表中的每个元素调用visited()
```

## 2.4线性表的顺序表示和实现

定义: 把逻辑上相邻的数据元素存储在物理上相邻的存储单元中的存储结构

线性表的第1个数据元素a<sub>1</sub>的存储位置, 称作线性表的起始位置或基地址

> 顺序存储结构

【1 ，2， 3， 4， 5， 6 】

- 依次存储，地址连续中间没有空出存储单元

【1 ，2  ， ，，3，4，5，6】

- 地址不连续中间存在空的存储单元

线性表顺序存储结构占用一片连续的存储空间，知道某个元素的存储位置就可以计算其他元素的存储位置



> 顺序表的顺序存储表示

```
			地址连续
顺序表(元素)	 依次存放
			随机存取  数组(元素)用一维数组表示顺序表
			类型相同
			
线性表长课变(删除)
数组长度不可动态定义:
				类型说明符 数组名 [常量表达式]
				常量表达式中可以包含常量和符号,不能包含变量
用一变量表示顺序表的长度属性
```

```C
#define LIST_INIT_SIZE 100 //线性表存储空间的初识分配量
typedef struct {
    ElemType elem[LIST_INIT_SIZE];
    int length; //当前长度
}Sqlist;//顺序表类型
```

多项式的顺序存储结构类型定义


$$
P_n(X) = p_1X^e + p_2x^e +...+p_mx^e
$$
线性表P = ((p1,e1),(p2,e2),...(pm,em))



```C
#define MAXSIZE 1000//多项式可能达到的最大长度

typedef struct{//多项式非零项
    float p; //系数
    int e; //指数
}Polynomial;

typedef struct{
    Polynomial*elem; //存储空间的基地址
    int length; //多项式中当前项的个数
}SqList; //多项式的顺序存储结构类型为SqList
```



```C
//元素类型说明

typedef struct{
    ElemType data[];
    int length;
    
}SqList; //顺序表类型
```



> 数组的定义

```C
//数组静态分配
typedef struct{
	ElemType data[MaxSize];
    //存放data[o]的地址
	int length;
}SqlList; //顺序表类型


//数组动态分配
typedef struct{
    ElemType*data;
    int length;
}SqList; //顺序表类型

SqList L;
L.data = (ElemType*)malloc(sizeof(ElemType)*MaxSize);
//(ElemType*)强制转换为什么指针
//malloc内存分配函数分配空间

malloc(m) //开辟m字节长度的地址空间, 并返回这段空间的首地址
sizeof(x) //计算变量x的长度
free(p) //释放指针p所指变量的存储空间, 即彻底删除一个变量
    
//需要加载头文件: <stdlib.h>
```

```C++
//C++的内存动态分配

new 类型名T(初值列表)
//申请用于存放T类型对象的内存空间,并依初值列表赋以初值
//T类型的指针,执行新分配的内存
    
delete 指针P
//释放指针P所指向的内存.P必须是new 的传递值

//C++中的参数传递
  
```

> C++中的参数传递

参数传递有两种方式

传值方式(参数为整形, 实型, 字符型)

传地址

- 参数为指针变量
- 参数为引用类型
- 参数为数组

```c++
#include <iostream>
void swap(float m, float n)
{
    float temp;
    temp=m;
    m=n;
    n=temp;
}

void main()
{
    float a,b;
    cin>>a>>b;
    swap(a,b);
    cout<<a<<endl<
}
```

