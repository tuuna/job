import React, { Component } from "react";
import { Row, Col, Button, DatePicker, Input, Select, Modal } from "antd";
import moment from "moment";
import "../../TargetMonitor.css";

const Option = Select.Option;
const { RangePicker } = DatePicker;

export default class QueryMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numType: "0",
      number: "",
      startTime: "",
      endTime: "",
      alertType: ""
    };
  }

  numTypeChange(value) {
    this.setState({ numType: value });
  }
  warnTypeChange(value) {
    this.setState({ alertType: value });
  }

  inputNumber(e) {
    this.setState({ number: e.target.value });
  }

  onChange(value, dateString) {
    this.setState({
      startTime: Date.parse(dateString[0]),
      endTime: Date.parse(dateString[1])
    });
  }

  searchClick() {
    if (
      this.state.number !== "" &&
      ((this.state.numType === "0" && this.state.number.length !== 11) ||
        (this.state.numType === "1" && this.state.number.length !== 15))
    ) {
      Modal.error({
        title: "长度错误",
        content: "请输入正确的手机号码（11位）或者IMSI号（15位）"
      });
    } else {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    }
  }

  resetClick() {
    this.setState(
      {
        numType: "0",
        number: "",
        startTime: "",
        endTime: "",
        alertType: ""
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <Row className="target-query">
          <Col span={6} className="target-query-start">
            <Input.Group compact>
              <Select
                defaultValue="0"
                value={this.state.numType}
                onSelect={this.numTypeChange.bind(this)}
              >
                <Option value="0" className="target-select-option">手机号</Option>
                <Option value="1" className="target-select-option">IMSI号</Option>
              </Select>
              <Input
                style={{ width: "72%" }}
                value={this.state.number}
                placeholder="请输入手机号或者IMSI号"
                onChange={this.inputNumber.bind(this)}
                id="warning_reset"
              />
            </Input.Group>
          </Col>
          <Col span={6}>
            时间&ensp;
            <RangePicker
              value={[
                this.state.startTime === ""
                  ? null
                  : moment(this.state.startTime),
                this.state.endTime === "" ? null : moment(this.state.endTime)
              ]}
              showTime={{ format: "HH:mm" }}
              format="YYYY-MM-DD HH:mm"
              placeholder={["开始时间", "结束时间"]}
              onChange={this.onChange.bind(this)}
              id="warning_reset"
            />
          </Col>
          <Col span={4}>
            预警类型&ensp;
            <Select
              defaultValue=""
              value={this.state.alertType}
              onSelect={this.warnTypeChange.bind(this)}
              id="warning_reset"
            >
              <Option value="">所有类型</Option>
              <Option value="0">位置更新</Option>
              <Option value="1">目标消失</Option>
              <Option value="2">目标通联</Option>
            </Select>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={this.searchClick.bind(this)}>
              查询
            </Button>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={this.resetClick.bind(this)}>
              重置
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
