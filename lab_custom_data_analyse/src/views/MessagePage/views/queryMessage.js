import React, {Component} from 'react';
import {Form, Input, Button, Select, DatePicker, Card, Row, Col, Modal,Icon} from 'antd';
import moment from "moment";
import "./queryMessage.css";

const FormItem = Form.Item;
const Option = Select.Option;
const {RangePicker} = DatePicker;

export default class QueryMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            visible: 'none',
            confirmLoading: false,
            startTime:"",
            endTime:"",
            numType: "phone",
            keywords: "",
            num: "",
            listSort:"desc",
            own_number:"",
            op_number: "",
            address: "",
            op_address: "",
            own_imsi: "",
            op_imsi: "",
            from: "",
            to: "",
            pageNum:"0",
            pageSize:"4"
        }
    }

    numTypeChange = (value) => {
        this.setState({
            numType:value
        })
    }

    inputNumber(e) {
        let newNumber = e.target.value.trim();
        this.setState({
            num:newNumber
        })
    }

    inputOpNumber(e) {
        let op_number = e.target.value.trim();
        this.setState({
            op_number:op_number
        })
    }

    inputKeyword(e) {
        let keyword = e.target.value.trim();
        this.setState({
            keywords:keyword
        })
    }

    inputAddress(e) {
        let address = e.target.value.trim();
        this.setState({
            address:address
        })
    }

    inputOpAddress(e) {
        let opAddress = e.target.value.trim();
        this.setState({
            op_address:opAddress
        })
    }

    inputOwnImsi(e) {
        let own_imsi = e.target.value.trim();
        this.setState({
            own_imsi:own_imsi
        })
    }

    inputOpImsi(e) {
        let op_imsi = e.target.value.trim();
        this.setState({
            op_imsi:op_imsi
        })
    }

    inputFrom(e) {
        let from = e.target.value.trim();
        this.setState({
            from:from
        })
    }

    inputTo(e) {
        let to = e.target.value.trim();
        this.setState({
            to:to
        })
    }

    inputOwnNumber(e){
        let own_number = e.target.value.trim();
        this.setState({
            own_number:own_number
        })
    }


    onChange(value, dateString) {
        this.setState({
            startTime: moment(dateString[0]).valueOf(),
            endTime: moment(dateString[1]).valueOf()
        })
    }


    errorMessage(title,content) {
        Modal.error({
            title: title,
            content: content
        });
    }
    searchCommon() {
        let flag = 1
        if(this.state.num !== ""){
            if(isNaN(parseInt(this.state.num))) {
                flag = 0
                this.errorMessage("请输入数字","请输入数字格式的数据")
            } else {
                if (
                    (this.state.numType === "phone" && this.state.num.length !== 11) ||
                    (this.state.numType === "imsi" && this.state.num.length !== 15)
                ) {
                        flag = 0
                        this.errorMessage("长度错误","请输入正确的手机号码（11位）或者IMSI号（15位)")
                }
            }

        }

        if (this.props.onChangeMsg && flag === 1) {
            console.log(this.state)
            this.props.onChangeMsg(this.state);
        }
    }

    searchAdvanced() {
        let flag = 1;
        if(
            (this.state.own_number !== "" && isNaN(parseInt(this.state.own_number))) ||
            (this.state.op_number !== "" && isNaN(parseInt(this.state.op_number))) ||
            (this.state.from !== "" && isNaN(parseInt(this.state.from))) ||
            (this.state.to !== "" && isNaN(parseInt(this.state.to))) ||
            (this.state.own_imsi !== "" && isNaN(parseInt(this.state.own_imsi))) ||
            (this.state.op_imsi !== "" && isNaN(parseInt(this.state.op_imsi)))
        ){
            flag = 0
            this.errorMessage("请输入数字","请输入数字格式的数据")
        } else if(
            (this.state.own_number !== "" && this.state.own_number.length !== 11 && !isNaN(parseInt(this.state.own_number))) ||
                (this.state.op_number !== "" && this.state.op_number.length !== 11 && !isNaN(parseInt(this.state.op_number))) ||
                    (this.state.from !== "" && this.state.from.length !== 11 && !isNaN(parseInt(this.state.from))) ||
                        (this.state.to !== "" && this.state.to.length !== 11 && !isNaN(parseInt(this.state.to))) ||
                            (this.state.own_imsi !== "" && this.state.own_imsi.length !== 15 && !isNaN(parseInt(this.state.own_imsi))) ||
                                (this.state.op_imsi !== "" && this.state.op_imsi.length !== 15 && !isNaN(parseInt(this.state.op_imsi)))
        ){
            flag = 0
            this.errorMessage("长度错误","请输入正确的手机号码（11位）或者IMSI号（15位)")
        } else if(
            (this.state.address !== "" && !isNaN(parseInt(this.state.address))) ||
            (this.state.op_address !== "" && !isNaN(parseInt(this.state.op_address)))
        ) {
            flag = 0
            this.errorMessage("请输入汉字","请输入正确格式的归属地")
        } else if (this.state.num !== "" ||
            this.state.keywords !== "") {
            flag = 0
            this.errorMessage("交叉查询","请勿高级和初级查询混用")
        }
        if (this.props.onChangeMsg && flag === 1) {
            console.log(this.state)
            this.props.onChangeMsg(this.state);
        }

    }

    resetData() {
        document.getElementById("common_form").reset();
        document.getElementById("advance_form").reset();
        this.setState({
            startTime: "",
            endTime: "",
            numType: "phone",
            keywords: "",
            num: "",
            listSort:"desc",
            own_number:"",
            op_number: "",
            address: "",
            op_address: "",
            own_imsi: "",
            op_imsi: "",
            from: "",
            to: "",
            pageNum:"0",
            pageSize:"4"
        })
    }


    showModal = () => {
        document.getElementById("common_form").reset();
        this.setState({
            startTime: "",
            endTime: "",
            numType: "phone",
            keywords: "",
            num: "",
            listSort:"desc",
            own_number:"",
            op_number: "",
            address: "",
            op_address: "",
            own_imsi: "",
            op_imsi: "",
            from: "",
            to: "",
            pageNum:"0",
            pageSize:"4"
        })
        if (this.state.visible === 'none') {
            this.setState({
                visible: 'block',
            });
        } else {
            this.setState({
                visible: 'none',
            });
        }
    }

    render() {
        return (
            <div>
                <div style={{padding:"8px",marginTop:"-8px"}}>
                    <div className="main_layout">
                        <Form layout="inline" id="common_form" className="form_layout">
                            <FormItem>
                                <Select defaultValue="phone" onSelect={this.numTypeChange} className="select_form">
                                    <Option value="phone">对端手机号</Option>
                                    <Option value="imsi">对端IMSI号</Option>
                                </Select>
                            </FormItem>
                            <FormItem>
                                <Input placeholder="请输入对端手机号或者IMSI号" value={this.state.num} onChange={this.inputNumber.bind(this)} style={{backgroundColor:"#072C59",borderColor:"#5bbeff",color: "#FFFFFF"}}/>
                            </FormItem>

                            <FormItem className="over_label" label="时间周期"/>
                            <FormItem >

                                <RangePicker
                                    showTime={{format: 'HH:mm'}}
                                    format="YYYY-MM-DD HH:mm"
                                    placeholder={['Start Time', 'End Time']}
                                    onChange={this.onChange.bind(this)}
                                    value={[
                                        this.state.startTime === ""
                                            ? null
                                            : moment(this.state.startTime),
                                        this.state.endTime === "" ? null : moment(this.state.endTime)
                                    ]}
                                    className="time_picker"
                                />
                            </FormItem>

                            <FormItem  className="over_label" label="关键字"/>
                            <FormItem>
                                <Input placeholder="请输入关键字" value={this.state.keywords} onChange={this.inputKeyword.bind(this)} style={{backgroundColor:"#072C59",borderColor:"#5bbeff",color: "#FFFFFF"}}/>
                            </FormItem>


                            <FormItem>
                                <Button className="button_all" onClick={this.searchCommon.bind(this)}>查询</Button>&nbsp;&nbsp;
                                <Button className="button_all" onClick={this.showModal}>高级</Button>
                            </FormItem>

                        </Form>
                    </div>
                    <div style={{display: this.state.visible,borderStyle:"solid",marginTop:"8px",
                        borderColor:"#5bbeff",
                        borderWidth:"1px"}}>
                        <Form layout="inline" id="advance_form" className="form_layout_ad">
                            <Row  className="row2">
                                <Col span={8} className="col_margin">
                                    <FormItem className="over_label" label="本机号码："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.own_number} placeholder="请输入本机号码" onChange={this.inputOwnNumber.bind(this)}/>
                                    </FormItem>
                                    <br/>
                                    <FormItem className="over_label" label="对端号码："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.op_number} placeholder="请输入对端号码" onChange={this.inputOpNumber.bind(this)}/>
                                    </FormItem>
                                    <br/>
                                    <FormItem className="over_label" label="发送方号："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.from} placeholder="请输入发送方号" onChange={this.inputFrom.bind(this)}/>
                                    </FormItem>
                                </Col>
                                <Col span={8} className="col_margin">
                                    <FormItem className="over_label" label="本机归属："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.address} placeholder="请输入本机号码归属地" onChange={this.inputAddress.bind(this)}/>
                                    </FormItem>
                                    <br/>
                                    <FormItem className="over_label" label="对端归属："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.op_address} placeholder="请输入对端号码归属地" onChange={this.inputOpAddress.bind(this)}/>
                                    </FormItem>

                                    <br/>
                                    <FormItem className="over_label" label="接收方号："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.to} placeholder="请输入接收方号" onChange={this.inputTo.bind(this)}/>
                                    </FormItem>
                                </Col>
                                <Col span={8} className="col_margin">
                                    <FormItem className="over_label" label="本机IMSI："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.own_imsi} placeholder="请输入本机IMSI" onChange={this.inputOwnImsi.bind(this)}/>
                                    </FormItem>
                                    <br/>
                                    <FormItem className="over_label" label="对端IMSI："/>
                                    <FormItem>
                                        <Input className="input_all" value={this.state.op_imsi} placeholder="请输入对端IMSI" onChange={this.inputOpImsi.bind(this)}/>
                                    </FormItem>
                                    <br/>
                                    <FormItem  className="over_label" label="时间周期："/>
                                    <FormItem style={{width: '50%'}}>

                                        <RangePicker className="time_picker"
                                                     showTime={{format: 'HH:mm'}}
                                                     format="YYYY-MM-DD HH:mm"
                                                     placeholder={['发送时间', '接收时间']}
                                                     onChange={this.onChange.bind(this)}
                                                     value={[
                                                         this.state.startTime === ""
                                                             ? null
                                                             : moment(this.state.startTime),
                                                         this.state.endTime === "" ? null : moment(this.state.endTime)
                                                     ]}
                                        />
                                    </FormItem>
                                    <br/>
                                    <FormItem style={{padding: '15px'}}>
                                        <Button
                                            onClick={this.searchAdvanced.bind(this)}
                                            className="button_all">搜索</Button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button
                                            onClick={this.resetData.bind(this)}
                                            className="button_all">重置</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}