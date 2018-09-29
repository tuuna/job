import React, {Component} from "react"
import PushNotice from "./PushNotice";
import SignCount from "./SignCount";
import DataClean from "./DataClean";
import "./style.css";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        {/* 页面上部分的echarts */}
        <div className="homePageUpper">
            {/* 信令总量 */}
            <div style={{width:'50%',height:"550px",float:"left" }} className="signCount" >
              <SignCount />
            </div>
            {/* 数据清洗 */}
            <div className="dataClean" style={{float:'right',width:"50%",height:"550px"}} >
              <DataClean />
            </div>
        </div>
        {/* 页面下方的通告 */}
        <div className="homePageUnderneath">
          <PushNotice/>
        </div>
      </div>
    )
  }
}

export default HomePage;
