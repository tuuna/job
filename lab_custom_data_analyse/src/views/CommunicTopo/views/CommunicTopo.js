import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions";
import { Button, Input, message, Row, Col, Select, DatePicker } from "antd";
// import TwoPersonsContent from "./TwoPersonsContent";
import AllCommunicationContent from "./AllCommunicationContent";

import "./style.css";
import Topo from "./topo";
const InputGroup = Input.Group;
const { RangePicker } = DatePicker;
const Option = Select.Option;

let param = {
  startTime: "",
  endTime: "",
  searchWay: "phonenumber",
  keyWord: ""
};

class CommunicTopo extends React.PureComponent {
  componentDidMount() {
    this.questData();
    this.error();
  }

  questData() {
    this.props.loadTopology(param);
    this.props.loadCommunication(param);
    this.error();
  }

  error() {
    if (this.props.error) message.error("This is a message of error");
  }

  onTime(datas, dateStrings) {
    param.startTime = dateStrings[0];
    param.endTime = dateStrings[1];
  }

  onSearch() {
    this.questData();
  }

  onchangeKey(e) {
    param.keyWord = e.target.value;
  }

  onBus(value) {
    console.log(value);
    param.searchWay = value;
  }

  render() {
    return (
      <div>
        {/*通联分析头部*/}
        <Row className="TopoSearch">
          <Col span={7} className="searchSelected">
            <InputGroup compact style={{ width: 350 }}>
              <Select defaultValue="手机号码" onChange={this.onBus.bind(this)}>
                <Option value="phonenumber">手机号码</Option>
                <Option value="imei">IMEI号</Option>
              </Select>
              <Input
                style={{ width: "66%" }}
                placeholder="请输入手机号码或IMSI号码"
                onChange={this.onchangeKey.bind(this)}
              />
            </InputGroup>
          </Col>
          <Col span={7}>
            时间 :{" "}
            <RangePicker
              format="YYYY-MM-DD HH:mm"
              onChange={this.onTime.bind(this)}
            />
          </Col>

          <Col span={4}>
            <Button
              type="primary"
              icon="search"
              onClick={this.onSearch.bind(this)}
            >
              查询
            </Button>
          </Col>
        </Row>
          {/*拓扑图正文内容*/}
        <Row className="topoBelowContent">
            {/*左侧拓扑图*/}
          <div className="communicTopo">
            <p className="communicTopoTitle">拓扑图分析</p>
            <Topo  data={this.props.topo_data} links={this.props.topo_links}></Topo>
          </div>
            {/*右侧聊天内容*/}
          <div className="chartContent">
              <AllCommunicationContent/>
            {/* <TwoPersonsContent/> */}
          </div>
        </Row>
      </div>
    );
  }
}
export default connect(
  state => ({
    //拓扑参数
    topo_data: state.CommunicTopo.topology.data,
    topo_links: state.CommunicTopo.topology.links,
    topo_loading: state.CommunicTopo.topology.loading,
    topo_error: state.CommunicTopo.topology.error,

  }),
  dispatch => bindActionCreators(ActionCreators, dispatch)
)(CommunicTopo);
