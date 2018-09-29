import { Col, Row, Select } from "antd";
import React, { Component } from "react";
import MapChart from "../charts/MapChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import "../../AreaAnalyse.css";

const Option = Select.Option;

export default class DomesticComponent extends Component {
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
            城市&ensp;
            <Select
              className="area-select-address"
              mode="multiple"
              placeholder="默认显示TOP10"
              maxTagCount={10}
              defaultValue={[]}
              onChange={this.countryChange.bind(this)}
            >
              {this.props.chinaDiffuse.weekAddress.map(item => {
                return (
                  <Option value={item} key={item}>
                    {item}
                  </Option>
                );
              })}
            </Select>
          </Col>
          <Col span={2} style={{ width: "86px" }}>
            <Select defaultValue="week" onSelect={this.timeChange.bind(this)}>
              <Option value="week">前一周</Option>
              <Option value="month">前一月</Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <div className="area-map">
            <MapChart
              title="目标国内分布"
              type="china"
              data={this.props.chinaMap}
            />
          </div>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="area-chart">
              <BarChart
                choice={this.state}
                title="国内漫入漫出TOP"
                data={this.props.chinaDiffuse}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="area-chart">
              <LineChart
                choice={this.state}
                title="国内漫入漫出变化率"
                data={this.props.chinaDiffuse}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
