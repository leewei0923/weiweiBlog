import React,{useState} from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./page.css"
import avator from "../images/avator.jpg";
import RightSideMobbile from "../component/RightSideMobbile";
import { createFromIconfontCN } from "@ant-design/icons";


export default function About() {
  const FontIcon = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_2872071_bul5xy5x3ij.js",
  });


  let [sideShow, setsideShow] = useState(false);

  let sideShowBtn = () => {
    setsideShow(!sideShow);
    sideShow
      ? (document.documentElement.style.overflow = "scroll")
      : (document.documentElement.style.overflow = "hidden");
  };

  return (
    <div>
      <Header sideShow={sideShowBtn} />

      <div className="personInfoContainer">
        {/* 基本信息 */}

        <div className="peronInfo">
          <div className="avatar">
            <img src={avator} alt="头像" />
          </div>
          <div className="personInfoBox1">
            <div className="icon">
              <FontIcon type="icon-yonghu" />
              <span>江湖名称: 大伟</span>
            </div>
            <div className="icon">
              <FontIcon type="icon-dianzanaixin" />
              <span>破壳日: 2000</span>
            </div>
          </div>
          <div className="personInfoBox2">
            <div className="icon">
              <FontIcon type="icon-dingwei" />
              <span>常驻之地: China | 山东 | 青岛</span>
            </div>
            <div className="icon">
              <FontIcon type="icon-tisheng" />
              <span>目标语言: javaScript | Java | Python</span>
            </div>
          </div>
        </div>
        <div className="peronDetailBox">
          <div className="skill">
            <div>技能 | Skill</div>
            <div className="skillBox">
              <div className="skillBox1">
                <div>Html/CSS</div>
                <div>JavaScript</div>
                <div>Python</div>
                <div>R</div>
                <div>ps/pr</div>
              </div>
              <div className="skillBox2">
                <div id="skillBox2Num0" name="skillBox2Num">
                  30%
                </div>
                <div id="skillBox2Num1" name="skillBox2Num">
                  40%
                </div>
                <div id="skillBox2Num2" name="skillBox2Num">
                  100%
                </div>
                <div id="skillBox2Num3" name="skillBox2Num">
                  20%
                </div>
                <div id="skillBox2Num4" name="skillBox2Num">
                  10%
                </div>
              </div>
            </div>
          </div>
          <div className="introduction">
            <div>简介 | Introduction</div>
            <ul className="content">
              <li className="contentText">学历：本科</li>
              <li className="contentText">目标：前端工程师or全栈工程师</li>
              <li className="contentText">博客：技术积累，共享知识</li>
              <li className="contentText">兴趣：骑车，运动</li>
              <li className="contentText">其他：一只小菜鸟，一直努力飞</li>
            </ul>
          </div>
        </div>
      </div>
      {/* 移动端显示该组件 */}
      {sideShow ? <RightSideMobbile sideShow={sideShowBtn} /> : ""}
      <div style={{ display: "flex" }}>
        <Footer />
      </div>
    </div>
  );
}
