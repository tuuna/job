import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions";
import { Button, Input, message, DatePicker  ,Form} from "antd";
import AllNodeInformation from "./AllNodeInformation";

import "./style.css";
import Topology from "./Topology";
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

let param = {
  startTime: "",
  endTime: "",
  countryName: "",
  signName:""
};

class SignTopology extends React.PureComponent {

  componentDidMount() {
    this.questData();
    this.error();
  }

  questData() {
    this.props.loadSignTopology(param);
    this.props.loadSignBasicsTable(param);
    this.error();
  }

  error() {
    if (this.props.error) message.error("出错了！");
  }
// 时间选项卡
  onTime=(datas, dateStrings)=> {

    param.startTime = dateStrings[0];
    param.endTime = dateStrings[1];

  }

  onSearch=()=> {
    this.questData();
  }

  onchangeKey=(e)=> {
    param.keyWord = e.target.value;
  }

  onBus=(value)=> {
    console.log(value);
    param.searchWay = value;
  }
  handleCurrencyChange = (currency) => {
      console.info("currency",currency)
    }
    // 更改国家名
    handleCountryNameChange= (e)=>{
      param.countryName = e.target.value;
      console.info("CountryName",e.target.value)
    }
    // 更改信令点名
    signNameChange =(e) =>{
      param.signName = e.target.value;
      console.info("signName",e.target.value)
    }
  render() {
    return (
      <div>
        {/*通联分析头部*/}
        <div className="signSearch">
          <div  className="country" style={{float:"left"}}>
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem label="国家名:">
                <Input
                  type="text"
                  placeholder="请输入国家名称"
                  onChange={this.handleCountryNameChange}
                  style={{ width: '100%', marginRight: '3%' }}
                />
              </FormItem>
            </Form>
          </div>
          <div  className="searchSelected">
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem label="信令点名称">
                <Input
                  type="text"
                  placeholder="请输入信令点名称"
                  onChange={this.signNameChange}
                  style={{ width: '100%', marginRight: '3%' }}
                />
              </FormItem>
            </Form>
          </div>
          <div className="timeSelected" >
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem label="时间:">
                <RangePicker
                  format="YYYY-MM-DD HH:mm"
                  onChange={this.onTime}
                />
              </FormItem>
            </Form>
          </div>

          <div className="buttonSelected">
            <Button
              type="primary"
              icon="search"
              onClick={this.onSearch}
            >
              查询
            </Button>
          </div>
        </div>
        <div className="searchContent">
          {/*拓扑图*/}
          <div className="signTopo">
            <Topology  data={this.props.topo_data} links={this.props.topo_links}></Topology>
          </div>
          {/* 信令点的基本信息 */}
          <div className="allNodeInformation">
            <AllNodeInformation />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => ({
    // 信令点拓扑数据
    topo_data: state.SignalingTopology.topology.data,
    topo_links: state.SignalingTopology.topology.links,
    topo_loading: state.SignalingTopology.topology.loading,
    topo_error: state.SignalingTopology.topology.error,

  }),dispatch => bindActionCreators(ActionCreators, dispatch))(SignTopology);
