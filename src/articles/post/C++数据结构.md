---
tags: "C++"
title: "C++数据结构"
date: "2021-6-13"
---

## 线性表

```C++
//顺序表静态分配定义
#define Maxsize 100 //最大空间

typedef struct{
    ElemType data[Maxsize]; //一维数组
    int length; //顺序表的长度
}SqList
    
    
// ElemType 元素类型, 需要什么类型就写什么类型
// 用typedef将结构体等价于类型名SqlList
    
    
//顺序表动态分配的定义
#define MaxSize 100 // 最大空间
    typedef struct{
        ElemType * elem;
        int length; // 顺序表的长度
    }
```



### 顺序表基本操作

```C++
//1. 初始化
bool InitList(SqlList, &L) //构造一个空的顺序表L
{
    //前面加&表示引用参数, 函数内部的改变跳出函数后仍然有效
    //如果不加&, 函数内部的改变在跳出函数便会无效
    L.elem  = new int[MaxSize]; //为顺序表动态分配MaxSize个空间
    if(!L.elem) retuurn false; //分配空间失败
    L.length = 0; //顺序表长度为0
    return 0;
}

//2. 创建
bool CreateList(Sqlist, &L) //创建一个顺序表L
{
    //前面加&表示引用参数, 函数内部的改变跳出函数后仍然有效
    //如果不加&, 函数内部的改变在跳出函数便会无效
    
    int x , i = 0;
    while(x != 1) //输入-1时, 结束也可以设置其他的结束条件
    {
        if(L.length == Maxsize)
        {
            cout << "顺序表已满"
                return false;
        }
        cin >>x;//输入一个数据元素
        L.elem[i++] = x ; //将数据存入第i个位置, 然后i++
        L.length++; //顺序表长度加1
    }
    return true;
}

//3.取值

bool GetElem(SqList L ,int i , int &e)
{
if(i < 1 || i > L.length) return false;
    //判断i值是否合理,若不合理, 则返回false
    e = L.elem[i - i]; //第i-1个单元存储着第i个数据
    return true;
}

//4.查找

int LocateElem(SqList L, int e)
{
    for(i = 0;i < SqList.length;i++)
        if(L.elem[i] == e) return i + 1; //下标为i 实际为第i+1个元素
    return -1; //如果没找到, 则返回-1
}

//5. 插入
bool ListInsert_Sq(SqList &L,int i , int e)
{
    if(i < 1 || i > L.length) return false; //i值不合法
    if(L.length == Maxsize) return false; //存储空间已满
    for(int j = L.lenght-1; j >= i -1; j--)
        L.elem[j+1] = L.elem[j]; //从最后一个元素开始后移, 直到第i个元素后移
    L.elem[i-1] = e; //将新元素e放入第i个位置
    L.length++; //表长加1
    return true;
}

//6. 删除
bool ListDelete_Sq(SqList &L,int i , int e)
{
    if(i < 1 || i > L.length) return false; //i值不合法
    e = L.elem[i-1]; //将欲删除的元素保存在e中
    for(int j=i;j <= L.length-1; j++)
        L.elem[j-1] = L.elem[j]; //被删除元素之后的元素前移
    L.length--; //表长度减一
    return true;
}
```

**注**

```
顺序表的操作是不是和Javascript中数据操作差不多
```



### 单链表

1. 初始化建立一个空表，创建头节点，不存储数据

```c++
//1.初始化

bool InitList_L(LinkList &L) //构造一个空的单链表
{
    L=new LNode; //生成新节点作为头节点, 用头指针L指向头节点
    if(!L)
        return false; //生成头节点失败
    L -> next = Null;//头节点的指针域置空
    return true;
}
```



2. 创建

```C++
void CreateList_H(LinkList &L) //头插法创建单链表
{
    int n; //输入n个元素的值, 建立到头节点的单链表L
    LinkList s;//定义一个指针变量
    L = new LNode;
    L -> next = NULL; //先建立一个带头节点的空链表
    cout << "请输入元素个数n" <<endl;
    cin>>n;
    cout <<"请依次输入n个元素:" <<endl;
    cout <<"头插法创建单链表..."<<endl;
    while(n--)
    {
		s = new LNode; //生成新节点s
        cin >>s->data;//输入元素赋值给新节点的数据域
        s->next=L->next;
        L->next=s;//将新节点s插入头节点之后
    }
}
```

   
