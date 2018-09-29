import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions";
import { Table} from "antd";

import "./style.css";

const columns = [{
              title: '信令点名',
              dataIndex: 'name',
              key: 'name'
            }, {
              title: '国家',
              dataIndex: 'country',
              key: 'country'
            }, {
              title: '城市',
              dataIndex: 'city',
              key: 'city'
            }, {
              title: '运营商',
              dataIndex: 'operator',
              key: 'operator'
            }];

class AllNodeInformation extends React.PureComponent {


  render() {
    return (
      <div>
        <Table
          columns ={columns}
          dataSource={this.props.signTable_result}
          total={this.props.signTable_total}
          loading={this.props.signTable_loading}
         />
      </div>
    );
  }

}
export default connect(state => ({
    // 信令点基本信息数据
    signTable_result: state.SignalingTopology.signBasicsTable.result,
    signTable_total: state.SignalingTopology.signBasicsTable.total,
    signTable_loading: state.SignalingTopology.signBasicsTable.loading,
    signTable_error: state.SignalingTopology.signBasicsTable.error,
  }),dispatch => bindActionCreators(ActionCreators, dispatch))(AllNodeInformation);
