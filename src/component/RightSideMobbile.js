import React from 'react'
import "./mobbileAll.css"
import { createFromIconfontCN } from "@ant-design/icons";
import { Link } from "gatsby";

//data

const url = [
  {
    title: "首页",
    url: "/",
    icon: "icon-oA",
  },
  {
    title: "文章列表",
    url: "/tags",
    icon: "icon-wenzhang",
  },
  {
    title: "关于我们",
    url: "/about",
    icon: "icon-guanyuwomen",
  },
  {
    title: "友链",
    url: "/friendLink",
    icon: "icon-youlian",
  },
];

// alicion 自定义图标
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2872071_mfj58sc8wud.js",
});



export default function RightSideMobbile(props) {


    // 接收点击事件

    const { sideShow } = props;

    return (
      <aside className="mobbileRightContainer" onClick={sideShow}>
        {/* 左边 */}
        <div className="mobbileLeft"></div>

        {/* 右边 */}
        <div className="mobbileRight">
          {/* 头像 */}
          <div className="avator">
            <img
              src="https://qi.7miaoyu.com/weiweiblog-avator.jpg"
              alt="头像"
            />

            <p></p>
          </div>
          <hr />
          {/* 文章 */}
          <div className="articleCount">
            <p>文章</p>
            <p>30</p>
          </div>
          {/* 导航栏 */}

          <nav className="navList">
            {url.map((item) => {
              return (
                <div key={item.title} className="navItem">
                  <IconFont type={item.icon}></IconFont>
                  <Link to={item.url}> {item.title}</Link>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    );
}
