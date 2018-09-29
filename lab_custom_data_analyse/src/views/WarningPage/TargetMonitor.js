import { Col, Row, message } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PieChart from "./views/charts/PieChart";
import MapChart from "./views/charts/MapChart";
import WarningTable from "./views/targetMonitor/WarningTable";
import QueryMenu from "./views/targetMonitor/queryMenu";
import * as ActionCreators from "./target_reducer";
import landmark from "../../common/assets/uestc/landmark.png";
import earth from "../../common/assets/uestc/earth.png";
import tableLog from "../../common/assets/uestc/tableLog.png";

import "./TargetMonitor.css";

class TargetMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numType: "0",
      number: "",
      startTime: "",
      endTime: "",
      alertType: "",
      pageNumber: "1",
      pageSize: "9",
      secondsElapsed: 0,
      flag: true
    };
  }

  tick() {
    if (this.state.flag) {
      this.setState(
        prevState => ({
          secondsElapsed: prevState.secondsElapsed + 1
        }),
        () => {
          if (this.state.secondsElapsed === 10) {
            this.setState({ secondsElapsed: 0 });
            let param = {
              numType: this.state.numType,
              number: this.state.number,
              startTime: this.state.startTime,
              endTime: this.state.endTime,
              alertType: this.state.alertType,
              pageNumber: this.state.pageNumber,
              pageSize: this.state.pageSize
            };
            this.props.loadWarningTable(param);
          }
        }
      );
    }
  }

  componentDidMount() {
    let param = {
      numType: this.state.numType,
      number: this.state.number,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      alertType: this.state.alertType,
      pageNumber: this.state.pageNumber,
      pageSize: this.state.pageSize
    };
    this.props.loadWarningTable(param);
    this.props.loadWarningPieChart(null);
    this.props.loadWarningChinaMap(null);
    this.props.loadWarningWorldMap(null);
    this.error();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onChange(msg) {
    this.setState(msg, () => {
      let param = {
        numType: this.state.numType,
        number: this.state.number,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        alertType: this.state.alertType,
        pageNumber: this.state.pageNumber,
        pageSize: this.state.pageSize
      };
      this.props.loadWarningTable(param);
    });
  }

  changePage(page) {
    this.setState({ pageNumber: page }, () => {
      let param = {
        numType: this.state.numType,
        number: this.state.number,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        alertType: this.state.alertType,
        pageNumber: this.state.pageNumber,
        pageSize: this.state.pageSize
      };
      this.props.loadWarningTable(param);
    });
  }

  handleMouseEnter() {
    this.setState({
      flag: false
    });
  }
  handleMouseLeave() {
    this.setState({
      flag: true
    });
  }

  error() {
    if(this.props.table.error){
        message.error("加载表格数据失败");
    }
    if(this.props.pieChart.error){
        message.error("加载饼图数据失败");
    }
    if(this.props.chinaMap.error){
        message.error("加载中国地图数据失败");
    }
    if(this.props.worldMap.error){
        message.error("加载世界地图数据失败");
    }
  }

  render() {
    return (
      <div className="target-monitor">
        <div>
          <QueryMenu onChange={msg => this.onChange(msg)} />
        </div>
        <div className="target-two-map">
          <Row gutter={8}>
            <Col span={12}>
              <div className="target-map-box">
                <div className="target-map-title">
                  <img
                    style={{ height: "16px" }}
                    src={landmark}
                    alt="landmarkLog"
                  />
                  目标国内分布
                </div>
                <div className="target-map">
                  <MapChart
                    title="目标国内分布"
                    type="china"
                    data={this.props.chinaMap}
                  />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="target-map-box">
                <div className="target-map-title">
                  <img style={{ height: "16px" }} src={earth} alt="earthLog" />
                  目标世界分布
                </div>
                <div className="target-map">
                  <MapChart
                    title="目标世界分布"
                    type="world"
                    data={this.props.worldMap}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="target-content">
          <Row gutter={8}>
            <Col span={12}>
              <div className="target-table-box">
                <div className="target-table-title">
                  <img
                    style={{ height: "16px" }}
                    src={tableLog}
                    alt="tableLog"
                  />
                  告警详情
                </div>
                <div
                  className="target-table"
                  onMouseEnter={this.handleMouseEnter.bind(this)}
                  onMouseLeave={this.handleMouseLeave.bind(this)}
                >
                  <WarningTable
                    data={this.props.table}
                    onChange={page => this.changePage(page)}
                  />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="target-pie">
                <PieChart {...this.props.pieChart} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    //表格参数
    table: {
      total: state.TargetMonitor.table.total,
      data: state.TargetMonitor.table.result,
      loading: state.TargetMonitor.table.loading,
      error: state.TargetMonitor.table.error
    },

    //饼图参数
    pieChart: {
      data: state.TargetMonitor.pieChart.result,
      loading: state.TargetMonitor.pieChart.loading,
      error: state.TargetMonitor.pieChart.error
    },

    //中国地图参数
    chinaMap: {
      data: state.TargetMonitor.chinaMap.result,
      loading: state.TargetMonitor.chinaMap.loading,
      error: state.TargetMonitor.chinaMap.error
    },

    //世界地图参数
    worldMap: {
      data: state.TargetMonitor.worldMap.result,
      loading: state.TargetMonitor.worldMap.loading,
      error: state.TargetMonitor.worldMap.error
    }
  }),
  dispatch => bindActionCreators(ActionCreators, dispatch)
)(TargetMonitor);
