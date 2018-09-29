import React, {Component} from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions";
import { Card } from "antd"
import PieChart from "../../../common/component/echarts/PieChart";

import "./style.css";

class SignCount extends Component {
  componentWillMount() {
      this.props.getSignAllCount();
    }
  render() {
    return (
      <div className="signChart" style={{height:"500px",marginLeft:"10px",width:"80%",marginRight:"10px",display:"inline-block",}} >
            <Card title="Map信令总量" style={{height:"520px"}}>
                <PieChart pieChartData={this.props.signchart_data} style={{height:"500px"}} />
            </Card>
      </div>
    )
}

}
export default connect(state => ({
    //拓扑参数
    signchart_data: state.Home.signchartdata.data,
    signchart_loading: state.Home.signchartdata.loading,
    signchart_error: state.Home.signchartdata.error,
  }),dispatch => bindActionCreators(ActionCreators, dispatch))(SignCount);
