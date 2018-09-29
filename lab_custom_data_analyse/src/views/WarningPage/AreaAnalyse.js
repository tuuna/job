import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tabs, message } from "antd";
import DomesticComponent from "./views/areaAnalyse/DomesticComponent";
import WorldComponent from "./views/areaAnalyse/WorldComponent";
import * as ActionCreators from "./area_reducer";
import "./AreaAnalyse.css";

const TabPane = Tabs.TabPane;

class AreaAnalyse extends Component {
  constructor(props) {
    super(props);
    this.error.bind(this);
  }
  componentDidMount() {
    this.props.loadWarningAreaChinaMap(null);
    this.props.loadWarningAreaWorldMap(null);
    this.props.loadWarningWorldDiffuse(null);
    this.props.loadWarningChinaDiffuse(null);
    this.error();
  }

  error() {
    if (this.props.world.worldDiffuse.error) {
      message.error("加载国际漫入漫出数据失败");
    }
    if (this.props.world.worldMap.error) {
      message.error("加载世界地图数据失败");
    }
    if (this.props.china.chinaDiffuse.error) {
      message.error("加载国内漫入漫出数据失败");
    }
    if (this.props.china.chinaMap.error) {
      message.error("加载国内地图数据失败");
    }
  }

  render() {
    return (
      <div className="area">
        <Tabs defaultActiveKey="1">
          <TabPane tab="国际分布" key="1">
            <div className="area-tabs">
              <WorldComponent {...this.props.world} />
            </div>
          </TabPane>
          <TabPane tab="国内分布" key="2">
            <div className="area-tabs">
              <DomesticComponent {...this.props.china} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(
  state => ({
    world: {
      worldDiffuse: {
        weekAddress: state.AreaAnalyse.worldDiffuse.weekCountry,
        monthAddress: state.AreaAnalyse.worldDiffuse.monthCountry,
        count: {
          week: {
            in: state.AreaAnalyse.worldDiffuse.count.week.in,
            out: state.AreaAnalyse.worldDiffuse.count.week.out
          },
          month: {
            in: state.AreaAnalyse.worldDiffuse.count.month.in,
            out: state.AreaAnalyse.worldDiffuse.count.month.out
          }
        },
        legend: state.AreaAnalyse.worldDiffuse.legend,
        change: state.AreaAnalyse.worldDiffuse.change,
        loading: state.AreaAnalyse.worldDiffuse.loading,
        error: state.AreaAnalyse.worldDiffuse.error
      },

      worldMap: {
        data: state.AreaAnalyse.worldMap.result,
        loading: state.AreaAnalyse.worldMap.loading,
        error: state.AreaAnalyse.worldMap.error
      }
    },
    china: {
      chinaDiffuse: {
        weekAddress: state.AreaAnalyse.chinaDiffuse.weekProvince,
        monthAddress: state.AreaAnalyse.chinaDiffuse.monthProvince,
        count: {
          week: {
            in: state.AreaAnalyse.chinaDiffuse.count.week.in,
            out: state.AreaAnalyse.chinaDiffuse.count.week.out
          },
          month: {
            in: state.AreaAnalyse.chinaDiffuse.count.month.in,
            out: state.AreaAnalyse.chinaDiffuse.count.month.out
          }
        },
        legend: state.AreaAnalyse.chinaDiffuse.legend,
        change: state.AreaAnalyse.chinaDiffuse.change,
        loading: state.AreaAnalyse.chinaDiffuse.loading,
        error: state.AreaAnalyse.chinaDiffuse.error
      },

      chinaMap: {
        data: state.AreaAnalyse.chinaMap.result,
        loading: state.AreaAnalyse.chinaMap.loading,
        error: state.AreaAnalyse.chinaMap.error
      }
    }
  }),
  dispatch => bindActionCreators(ActionCreators, dispatch)
)(AreaAnalyse);
