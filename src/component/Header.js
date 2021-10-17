import { Link } from "gatsby";
import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

// styles
import "./all.css";

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

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2872071_zkbv9iemqw9.js",
});
export default function Header(props) {
  return (
    <nav className="headerContainer">
      <div className="blogName">
        <Link to="/">{props.blogname}</Link>
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

      <ul></ul>
    </nav>
  );
}
