import React, {Component} from "react";
import DragLineChart from "../../../common/component/echarts/DragLineChart";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions";

import "./style.css";

class DataClean extends Component {
  componentWillMount() {
      this.props.getDataClean();
    }
  render() {
    return (
      <div>
        {
          (this.props.dragLineChart_loading===true)?
          <ReactLoading type="spinningBubbles" color="#ccc" />:
          <DragLineChart DragLineChartData={this.props.dragLineChart_data} />
        }
      </div>
    )
  }
}

export default connect(state => ({
    //拓扑参数
    dragLineChart_data: state.Home.dragLineChartData.data,
    dragLineChart_loading: state.Home.dragLineChartData.loading,
    dragLineChart_error: state.Home.dragLineChartData.error,
  }),dispatch => bindActionCreators(ActionCreators, dispatch))(DataClean);
