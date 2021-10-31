import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { createFromIconfontCN } from "@ant-design/icons";

// styles
import "./all.css"; //PC端

import "./mobbileAll.css";

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

export default function Header(props) {
  const {sideShow} = props;
    // console.log(sideShow)

  const [tofix, settofix] = useState(false);
  // 获取滚动条的的高度 用来判断是否header fixed
  useEffect(() => {
    const header = document.querySelector(".headerContainer");
    window.addEventListener("scroll", () => {
      window.pageYOffset >= header.clientHeight  ? settofix(true) : settofix(false);
    });
  });


  return (
    <nav className={tofix ? "headerContainer toFix" : "headerContainer"}>
      <div className="blogName">
        <Link to="/">{props.blogname ? props.blogname : "伟伟小世界"}</Link>
      </div>

      <div className="menus">
        <div className="menusItems">
          {url.map((item) => {
            return (
              <div key={item.title} className="menusItem">
                <IconFont type={item.icon}></IconFont>
                <Link to={item.url}> {item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* 移动端 */}
      <div className="mobileMenu" onClick={sideShow }>
        <IconFont type="icon-caidan"></IconFont>
      </div>
    </nav>
  );
}
