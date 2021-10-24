import React from "react";
import "./all.css";
import { GithubOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footerContainer">
      {/* footer 信息 */}
      <div className="footerInfo">
        <a href="https://www.gatsbyjs.cn/">gatsby</a>
        <p>&</p>
        <a href="https://github.com/leewei0923">
          <GithubOutlined />
        </a>
      </div>
      {/* 备案信息 */}
      <div>
        <a href="http://beian.miit.gov.cn/">皖ICP备20004665号-1</a>
      </div>
    </div>
  );
}
