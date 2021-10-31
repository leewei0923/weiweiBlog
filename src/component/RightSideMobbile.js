import React from 'react'
import "./mobbileAll.css"

export default function RightSideMobbile(props) {


    // 接收点击事件

    const { sideShow } = props;

    return (
      <aside className="mobbileRightContainer">
        {/* 左边 */}
        <div className="mobbileLeft" onClick={sideShow}></div>

        {/* 右边 */}
        <div className="mobbileRight"></div>
      </aside>
    );
}
