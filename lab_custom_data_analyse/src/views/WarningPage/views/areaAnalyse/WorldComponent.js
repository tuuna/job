import { Col, Row, Select } from "antd";
import React, { Component } from "react";
import MapChart from "../charts/MapChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import "../../AreaAnalyse.css";

const Option = Select.Option;

export default class WorldComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "week",
      address: []
    };
    this.countryChange.bind(this);
    this.timeChange.bind(this);
  }

  countryChange(value) {
    this.setState({
      address: value
    });
  }

  timeChange(value) {
    this.setState({
      time: value
    });
  }

  render() {
    return (
      <div>
        <Row className="area-select">
          <Col span={20}>
            国家&ensp;
            <Select
              className="area-select-address"
              mode="multiple"
              placeholder="默认显示TOP10"
              maxTagCount={10}
              defaultValue={[]}
              onChange={this.countryChange.bind(this)}
            >
              {this.props.worldDiffuse.weekAddress.map(item => {
                return (
                  <Option value={item} key={item}>
                    {item}
                  </Option>
                );
              })}
            </Select>
          </Col>
          <Col span={2}>
            <Select defaultValue="week" onSelect={this.timeChange.bind(this)}>
              <Option value="week">前一周</Option>
              <Option value="month">前一月</Option>
            </Select>
          </Col>
        </Row>
        <Row className="area-map">
          <MapChart
            title="目标世界分布"
            type="world"
            data={this.props.worldMap}
          />
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="area-chart">
              <BarChart
                choice={this.state}
                title="国际漫入漫出TOP"
                data={this.props.worldDiffuse}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="area-chart">
              <LineChart
                choice={this.state}
                title="国际漫入漫出变化率"
                data={this.props.worldDiffuse}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
