import React, { Component } from "react";
import {Row, Col, Menu, Checkbox ,Input,Modal, Select, Card, DatePicker, Tabs, Tag, Collapse, Button} from 'antd'
import '../dataAnalysis.css';
import { Table } from 'rsuite';

const Search = Input.Search
const TabPane = Tabs.TabPane;
const { CheckableTag } = Tag;
const {Panel} = Collapse
const { Column, HeaderCell, Cell, Pagination } = Table;
export default  class MyTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dbType: "",
            // columns: [],
            SQL: "",
            colums_local:[],//本地存储全表的列数组
            colums_table:[],//本地表格需要的列数据
            data_table:[],//   本地表格所需的数据 行
            columns_check:[],// 已被选择要查看的列
            checkAll:false,//   是否选择所有的列
            column_visible:false// 字段筛选弹框是否显示
        };
    }
    componentDidMount() {
        this.props.columns.map((v,i)=>{
            this.state.colums_local.push(v.dataIndex);
        })

        this.state.colums_local.map((v,i)=>{
            this.state.colums_table.push({
                title: v,
                dataIndex: v,
                key: i,
                width: '15%',
            })
        })
        // let param = {
        //     dbType: "vvvv",
        //     colums_local:colums
        // }
        // console.log("")
        // this.props.loadDataAnalyse(param);
    }//默认初始表的获取

    componentDidUpdate(prepro,curstate){
        if(prepro===curstate){
            this.props.columns.map((v,i)=>{
                this.state.colums_local.push(v.dataIndex);
            })

            this.state.colums_local.map((v,i)=>{
                this.state.colums_table.push({
                    title: v,
                    dataIndex: v,
                    key: i,
                    width: '15%',
                })
            })
        }
    }

    //字段刷选框确认 更新colums_table
    handleOk = () => {
        this.state.colums_table=[]
        this.state.columns_check.map((v,i)=>{
            this.state.colums_table.push({
                title: v,
                dataIndex: v,
                key: i,
                width: '15%',
            })
        })
        this.setState({column_visible: false});
    }
    //字段筛选框取消
    handleCancel = () => {
        this.setState({column_visible: false});
    }
    onCheckAllChange(e){
        this.setState({
            columns_check: e.target.checked ?this.state.colums_local: [],
            checkAll: e.target.checked,
        });
    }
    ColumnCheckonChange(checkedList){
        console.log("value"+checkedList)
        this.setState({
            columns_check:checkedList,
            checkAll: checkedList.length === this.state.colums_local.length
        })
    }
    callback(key) {
        console.log(key);
        this.setState({column_visible: true});
        this.props.onChangeCondition(this.state);
    }

    //查询，保存，查看
    handleChange1(checked) {
        if(checked) {
            this.setState({
                checked1: checked,
                checked2: false,
                checked3: false
            })
            var c=[]
            // c=JSON.stringify(this.props.data2);
            c=this.props.data2;
            console.log("vv"+c[1])
        } else {
            this.setState({
                checked1: checked
            })
        }
    }
    render() {
        // const {data, loading} = this.props;
        const columns2 = [{
            title: 'c1',
            dataIndex: 'c1',
            key: 'c1',
            width: '15%',
            // render: text => <span style={{cursor: 'pointer'}} onClick={(e) => {console.log(e, '点击')}}>{text}</span>,
        }, {
            title: 'c2',
            dataIndex: 'c2',
            width: '15%',
            key: 'c2',
        }, {
            title: 'c3',
            dataIndex: 'c3',
            width: '15%',
            key: 'c3',
        }, {
            title: 'c4',
            dataIndex: 'c4',
            width: '15%',
            key: 'c4',
        }]
        return (
            <Card>
                <Row>
                    <Col span={15} style={{color: 'white'}}>
                        <Tabs onChange={(e) => this.callback.bind(this)(e)} type="card">
                            <TabPane tab="字段筛选" key="1" />
                            <TabPane tab="SQL筛选" key="2" />
                        </Tabs>
                        <Modal
                            visible={this.state.column_visible}
                            title="选择你要查询的字段"
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer={[
                                <Button key="back" onClick={this.handleCancel}>返回</Button>,
                                <Button key="submit" type="primary" loading={this.state.loading}
                                        onClick={this.handleOk}>
                                    提交
                                </Button>,
                            ]}
                            className="modal_item"
                        >
                            <div>
                                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                                    <Checkbox
                                        indeterminate={this.state.indeterminate}
                                        onChange={this.onCheckAllChange.bind(this)}
                                        checked={this.state.checkAll}
                                    >
                                        Check all
                                    </Checkbox>
                                </div>
                                <br />
                                <Checkbox.Group options={this.state.colums_local} value={this.state.columns_check} onChange={this.ColumnCheckonChange.bind(this)} />
                            </div>
                        </Modal>
                    </Col>
                    <Col span={5} offset={4}>
                        <CheckableTag checked={this.state.checked1} onChange={(e) => this.handleChange1.bind(this)(e)}>查询数据</CheckableTag>
                        <CheckableTag checked={this.state.checked2} onChange={(e) => this.handleChange2.bind(this)(e)}>保存查询</CheckableTag>
                        <CheckableTag checked={this.state.checked3} onChange={(e) => this.handleChange3.bind(this)(e)}>查看SQL</CheckableTag>
                    </Col>
                </Row>
                <Row>
                    <Collapse bordered={false}>
                        <Panel header="筛选条件" key="1">
                            <Row>
                                <Col span={2} offset={1} style={{color: 'white'}}>记录时间:</Col>
                                <Col span={6}>
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD HH:mm:ss"
                                        placeholder="请选择时间"
                                        onChange={(e) => this.onTimeChange.bind(this)(e)}
                                        onOk={(e) => this.onTimeOk.bind(this)(e)}
                                        size="small"
                                    />
                                </Col>
                                <Col span={2} style={{color: 'white'}}>通信内容:</Col>
                                <Col span={5}><Input id="input" size="small" style={{width: '200px'}} /></Col>
                                <Col>
                                    <Button type="primary" size="small">筛选</Button>
                                </Col>
                            </Row>
                        </Panel>
                    </Collapse>,
                </Row>
                <Row>
                    <Col span={4} offset={20}>
                        <CheckableTag checked={this.state.expChecked1} onChange={(e) => this.handleExpChange1.bind(this)(e)}>导出excel</CheckableTag>
                        <CheckableTag checked={this.state.expChecked2} onChange={(e) => this.handleExpChange2.bind(this)(e)}>导出csv</CheckableTag>
                    </Col>
                </Row>
                <Row>
                    <Col offset={1} span={22}>
                        {/* 只有展示功能的表格 */}

                       {/* <Table data={this.props.data}>
                            {
                                this.state.colums_table.map( (item,index) =>{
                                        return (
                                            <Column align="center" resizable>
                                                <HeaderCell>{item.COLUMNNAME}</HeaderCell>
                                                <Cell dataKey={index} />
                                            </Column>
                                        )
                                })
                            }

                        </Table>*/}
                        <Table data={this.props.data}>
                            <Column width={50} align="center" resizable>
                                <HeaderCell>Id</HeaderCell>
                                <Cell dataKey="id" />
                            </Column>

                            <Column width={100} resizable>
                                <HeaderCell>First Name</HeaderCell>
                                <Cell dataKey="firstName" />
                            </Column>

                            <Column width={100} resizable>
                                <HeaderCell>Last Name</HeaderCell>
                                <Cell dataKey="lastName" />
                            </Column>

                            <Column width={200} resizable>
                                <HeaderCell>City</HeaderCell>
                                <Cell dataKey="city" />
                            </Column>

                            <Column width={200} resizable>
                                <HeaderCell>Company Name</HeaderCell>
                                <Cell dataKey="companyName" />
                            </Column>
                        </Table>
                        {/*<Table size="small" dataSource={this.props.data} columns={this.state.colums_table} scroll={{y: 60}}/>*/}
                    </Col>
                </Row>
            </Card>
        );
    }

}