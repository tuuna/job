import React, {Component} from 'react';
import {Form,Input, Button, Select, Dropdown,Menu, Card, Row, Col, Modal,Icon} from 'antd';
import "./infoQuery.css";


export default class TableQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbType: ""
        }
    }

    inputdbType(e){
        let dbType = e;
        console.log(e);//
        this.setState({
            dbType:dbType
        })
    }

    searchCommon() {
        if (this.props.onChangeCondition) {
           console.log("seach"+this.state)//输出的前台输入
            this.props.onChangeCondition(this.state);
        }
        console.log("seach4"+this.state)
    }

    render() {
        return (



                                <Row>
                                    <Col span={3} style={{color: 'white'}}>搜索</Col>
                                    <Col span={7} offset={1}><Input id="input" size="small"/></Col>
                                    <Col span={6} offset={1}>
                                        <Select style={{width: '100%'}} onChange={this.inputdbType.bind(this)} size="small">
                                        <option value="oracle" >oracle</option>
                                        <option value="mysql">mysql</option></Select>
                                    </Col>
                                    <Col span={2} offset={1}>
                                        <Button className="route_button" onClick={this.searchCommon.bind(this)}>查询</Button>&nbsp;&nbsp;
                                    </Col>
                                </Row>



        );
    }
}