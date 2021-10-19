---
tags: "js"
title: "生成自己小爱同学超级课程表"
date: "2021-2-14"
---



# 前言
<!--more-->
![开发者](https://t1.picb.cc/uploads/2021/02/25/Zr3cbG.jpg)


我看过超级课程表的一键导入课表,还有我们学校的一个公众号的一键导入课表,我为此深深着迷.现在看到小爱同学的这一款,总体来说不难.
下面请看我慢慢道来。

## 开发者文档

开发文档很重要,不要忘记了。
[https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb#26bux2](https://ldtu0m3md0.feishu.cn/docs/doccnhZPl8KnswEthRXUz8ivnhb#26bux2)


## 我的学校代码
我们要写的代码主要为 scheduleHtmlProvider.js 和 scheduleHtmlParser.js 这两个文件.如果你的学校是正方教务系统的话,可以在默认的基础上修改,一般不需要大改.

Provider是用来获取html的函数，将获取到的html传给 Parser 进行数据处理，截取出对应的课程信息，再封装为规定的json格式数据返回。

## 代码讲解

以下是默认的Provider函数
```javascript
function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    //除函数名外都可编辑
    //以下为示例，您可以完全重写或在此基础上更改
                                
const ifrs = dom.getElementsByTagName("iframe");
const frs = dom.getElementsByTagName("frame");

if (ifrs.length) {
    for (let i = 0; i < ifrs.length; i++) {
        const dom = ifrs[i].contentWindow.document;
        iframeContent += scheduleHtmlProvider(iframeContent, frameContent, dom);
        }
} 
if (frs.length) {
    for (let i = 0; i < frs.length; i++) {
        const dom = frs[i].contentDocument.body.parentElement;
        frameContent += scheduleHtmlProvider(iframeContent, frameContent, dom);
        }
} 
if(!ifrs.length && !frs.length){
    return dom.querySelector('body').outerHTML
}
return dom.getElementsByTagName('html')[0].innerHTML + iframeContent+frameContent  
}
```

其实我们主要去看 scheduleHtmlParser.js 这个文件,我会详细的介绍这个文件的

（scheduleHtmlParser函数的输出须符合以下数据结构）

|参数名|术语解释|是否必填|说明|
|---|---|---|:---|
|courseInfo|Array[{},{}|是|课程表详细信息: <br>name: String 课程 <br>position: Sting 教室<br> teacher:String 教师<br> weeks:Array(非空)第几周 <br> day:Sring 星期几 <br>section:[] 第几节|
|sectionTimes|Array[{},{}]|否|课时信息:<br> section: Number 第几节<br> startTime: String 开始时间<br> endTime: String 结束时间|

我为缩短开发的时间,然后直接使用默认的,在默认的基础上修改.
其实,Parser 对象选择和Jquery相似,主要是使用正则表达式

我已经在里面写了注释,具体看它把,不懂可以留言
```javascript
function scheduleHtmlParser(html) {
    /*
     Author: @Weiwei
     Version: v0.1.1
    */

    let timeJsonArray = [];
    let result = [];  //放置结果的数组
    let allDom = $('#table1 .timetable_con'); //变量allDom作为选择器选择id为table1 class类为timetable_con
    for (let u = 0; u < allDom.length; u++) {   //for循环遍历allDom
        let re = {
            sections: [],
            weeks: []
        }
        let aaa = $(allDom[u]).find('span')
        let week = $(allDom[u]).parent('td')[0].attribs.id  //获取当前第几周
        if (week) {
            re.day = week.split('-')[0]    //获取当前是周几,分词然后获取第一个内容
        }
        for (let i = 0; i < aaa.length; i++) {
            // 获取上课地点
            if (aaa[i].attribs.title == '上课地点') {

                for (let j = 0; j < $(aaa[i]).next()[0].children.length; j++) {
                    re.position = $(aaa[i]).next()[0].children[j].data
                }
            }
            //获取有多少周课
            if (aaa[i].attribs.title == '节/周') {

                for (let j = 0; j < $(aaa[i]).next()[0].children.length; j++) {

                    let lesson = $(aaa[i]).next()[0].children[j].data
                    //                              console.log("lesson为"+lesson)
                    for (let a = Number(lesson.split(')')[0].split('(')[1].split('-')[0]); a < Number(lesson.split(')')[0].split('(')[1].split('-')[1].split('节')[0]) + 1; a++) {
                        //                                     console.log("a1为"+a)
                        re.sections.push({
                            section: a
                        })
                    }


                    //一个学期上上课的周数
                    if (lesson.length == 20) {

                        for (let a = Number(lesson.split(')')[1].split('-')[0]); a < Number(lesson.split(')')[2].split('-')[1].split('周')[0]) + 1; a++) {

                            re.weeks.push(a)
                        }

                    } else if (lesson.length == 15) {

                        for (let a = Number(lesson.split(')')[1].split('-')[0]); a < Number(lesson.split(')')[1].split('-')[1].split('周')[0]) + 1; a++) {

                            let evenNum = a;
                            if (evenNum % 2 == 0) {
                                re.weeks.push(evenNum)
                            }

                        }

                    } else {

                        for (let a = Number(lesson.split(')')[1].split('-')[0]); a < Number(lesson.split(')')[1].split('-')[1].split('周')[0]) + 1; a++) {

                            re.weeks.push(a)
                        }
                    }


                }
            }
            //获取授课教师姓名
            if (aaa[i].attribs.title == '教师') {

                for (let j = 0; j < $(aaa[i]).next()[0].children.length; j++) {
                    re.teacher = $(aaa[i]).next()[0].children[j].data
                }
            }

            if (aaa[i].attribs.class == 'title') {

                for (let j = 0; j < $(aaa[i]).children()[0].children.length; j++) {
                    re.name = $(aaa[i]).children()[0].children[j].data

                }
            }

        }
        result.push(re)
    }




    // 上课时间

    var classTime = [
        { "section": 1, "startTime": "08:00", "endTime": "08:50" },
        { "section": 2, "startTime": "09:00", "endTime": "09:50" },
        { "section": 3, "startTime": "10:15", "endTime": "11:05" },
        { "section": 4, "startTime": "11:25", "endTime": "12:15" },
        { "section": 5, "startTime": "14:00", "endTime": "14:50" },
        { "section": 6, "startTime": "15:00", "endTime": "15:50" },
        { "section": 7, "startTime": "16:00", "endTime": "16:50" },
        { "section": 8, "startTime": "17:00", "endTime": "17:50" },
        { "section": 9, "startTime": "18:30", "endTime": "20:20" },
        { "section": 10, "startTime": "20:30", "endTime": "21:20" },
    ]


    console.log(result)
    console.log(classTime)
    return {
        courseInfos: result,
        sectionTimes: classTime
    }





}


```