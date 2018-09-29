import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../getTable_reducer";
import TableResult from "./tableResult";
import TableQuery from "./tableQuery";
import {Row, Col, Menu, Input, Select, Card, DatePicker, Tabs, Tag, Table, Collapse, Button,Layout} from 'antd'
import "./infoQuery.css"

const {SubMenu} = Menu;
const { Content, Sider} = Layout;
 class GetTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dbType: ""//前端输入的要查询的数据
        };
    }

    componentDidMount() {
        let param = {
            dbType: "oracle"
        }
        this.props.loadDataAnalyse(param);
    }//默认初始表的获取

    getInfo(msg) {
        this.setState(msg, () => {
            let param = {
                dbType: this.state.dbType
            };//把前端输入的条件对号入座
            this.props.loadDataAnalyse(param);
        });
    }


    render() {
        return (
            <card>
                <TableQuery
                    onChangeCondition={msg => {
                        this.getInfo(msg)
                    }}//msg用户输入数据的集合
                />
                <Row>
                    <Col offset={1} span={22}>
                        {/* 只有展示功能的表格 */}
                        <TableResult
                            {...this.props.tableList}//展示返回的结果
                        />
                    </Col>
                </Row>
            </card>
        );
    }
}

export default connect(
    state => ({
        //表格参数
        tableList: {
            data: state.GetTable.tableList.data,
            loading: state.GetTable.tableList.loading,
            error: state.GetTable.tableList.error
        },//把后端查询好的数据放入infoList
    }),
    dispatch => bindActionCreators(ActionCreators, dispatch)
)(GetTable);
