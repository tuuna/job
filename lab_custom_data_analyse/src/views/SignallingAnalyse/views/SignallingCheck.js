import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CheckTable from './CheckTable'
import * as ActionCreators from '../redux/actions'

import {
  DatePicker,
  message,
  Input,
  Layout,
  Select
} from 'antd';

//样式
import "./signlingCheck.css";
const {RangePicker} = DatePicker;
const Search = Input.Search;
const Option = Select.Option;
const { Sider, Content} = Layout;

//es7修饰器写法  需要侵入creact-react-app
// @connect(
//   state => ({
//     signallingList: state.SignallingCheck.signallingList,
//   }),
//   dispatch => bindActionCreators(ActionCreators, dispatch)
//    dispatch => ({
//   loadSignallings: bindActionCreators(ActionCreators, dispatch)
//    })
// )
let param = {
  startTime: "",
  endTime: "",
  signallingBus: "",
  table: "",
  column: "",
  keyWord: ""
}
class SignallingCheck extends React.PureComponent {
  componentDidMount() {
    this.props.loadSignalling(param);
    this.error();
  }

  error() {
    if (this.props.error)
      message.error('This is a message of error');
    }

  onTime(datas, dateStrings) {
    param.startTime = dateStrings[0];
    param.endTime = dateStrings[1];
  }

  onSearch(value) {
    param.keyWord = value;
    this.props.loadSignalling(param);
    this.error();
  }

  onBus(value) {
    param.signallingBus = value;
  }

  onTable(value) {
    param.table = value;
  }

  onColumn(value) {
    param.column = value;
  }

  render() {
    return (<div style={{backgroundColor:"#FFFFFF"}}>
      <Layout>
        {/* 左边栏 */}
        <Sider>
          {/* 条件检索 */}
          <div className="searchCondition">
            <p>检索条件</p>
            <RangePicker format="YYYY-MM-DD HH:mm" onChange={this.onTime.bind(this)}/>
            <Select style={{
                width: 150
              }} placeholder="信令业务" onChange={this.onBus.bind(this)}>
              <Option value="1">业务1</Option>
              <Option value="2">业务2</Option>
              <Option value="3">业务3</Option>
            </Select>
            <Select style={{
                width: 150
              }} placeholder="数据表" onChange={this.onTable.bind(this)}>
              <Option value="1">表1</Option>
              <Option value="2">表2</Option>
              <Option value="3">表3</Option>
            </Select>
            <Select style={{
                width: 150
              }} placeholder="表列" onChange={this.onColumn.bind(this)}>
              <Option value="1">列1</Option>
              <Option value="2">列2</Option>
              <Option value="3">列3</Option>
            </Select>
            <Search placeholder="关键字" onSearch={this.onSearch.bind(this)} enterButton="检索"/>
          </div>

          <div className="functionMenu">
            <p>功能菜单</p>
          </div>

        </Sider>
        {/* 右边内容栏 */}
        <Content>
          <CheckTable {...this.props}/>
        </Content>
      </Layout>

    </div>);
  }
}

export default connect(state => ({
  total: state.SignallingCheck.total,
  result: state.SignallingCheck.result,
  detail_result: state.SignallingCheck.detail_result,
  loading: state.SignallingCheck.table_status.loading,
  error: state.SignallingCheck.table_status.error,
  modalVisible: state.SignallingCheck.detail_status.modalVisible
}), dispatch => bindActionCreators(ActionCreators, dispatch))(SignallingCheck)
