import React, {Component} from "react"
import { Tabs } from "antd";
import SignCount from "./SignCount";
import SmsCount from "./SmsCount";
import "./style.css";

const TabPane = Tabs.TabPane;

class CountAnalysis extends Component {
  render() {
    return (
      // 短信和信令两个tab页面组件
      <div className="countAnalysis">
        <Tabs defaultActiveKey="2" onChange={this.callback}>
          <TabPane tab="短信" key="1">
            <SmsCount/>
          </TabPane>
          <TabPane tab="信令" key="2">
            <SignCount/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
  callback=(key)=>{

  }
}

export default CountAnalysis;
