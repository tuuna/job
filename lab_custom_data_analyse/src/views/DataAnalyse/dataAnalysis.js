import React, {Component} from 'react';
import * as ActionCreators from "./getTable_reducer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Row, Col, Menu, Input, Select, Card, DatePicker, Tabs, Tag, Table, Collapse, Button} from 'antd';
import DataAnalyseBarChart  from "../../common/component/echarts/dataAnalysisBarChart";
// import {Table, Column, HeaderCell, Cell, TablePagination} from 'rsuite-table';
import './dataAnalysis.css';
import TableResult from "./getTable/tableResult";
import TableQuery from "./getTable/tableQuery";
import Query from "./showTable/query";
import TableColumn from "./showTable/tableColumn";
import 'rsuite/styles/less/index.less';
import "./getTable/infoQuery.css";
import MyTable from "./Table/MyTable";
import AnalyseFrequency from "./getTable/charts/analyseFrequency";


const Search = Input.Search
const TabPane = Tabs.TabPane;
const { CheckableTag } = Tag;
const {Panel} = Collapse
class GetTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "data",
            currentAna: "connect",
            homeData: [1,10,39,15,50,20],
            belongData: [15,1,20,15,20,19],
            xAxisData: ["一月", "二月", "三月", "四月","五月", "六月"],
            dbType: "oracle",//前端输入的要查询的数据
            tableName:"",
            colomn:"",
            button:"2",
            selectColomn:[]
        };
    }

    componentDidMount() {
        let param = {
            dbType: "oracle"
        }
        this.props.loadDataAnalyse(param);
        this.props.loadDataAnalyseTables(param);
        this.props.showTable(param);
    }

    callbackTabs(key) {
        this.setState({
            button: key
        })
    }

    getInfo(msg) {
        this.setState(msg, () => {
            let param = {
                dbType: this.state.dbType
            };//把前端输入的条件对号入座
            console.log("getinfo"+JSON.stringify(msg));
            this.props.loadDataAnalyse(param);
            // this.props.loadDataAnalyseTables(param);
            console.log("tableList:"+JSON.stringify(this.props.tableList))
            // console.log("tables:"+JSON.stringify(this.props.tables))
        });
    }
    getDatas(msg) {
        this.setState(msg, () => {
            let param = {
                dbType: this.state.dbType
            };//把前端输入的条件对号入座
            this.props.loadDataAnalyseTables(param);
        });
    }


    searchCommon() {
        if (this.props.onChangeCondition) {
            this.props.onChangeCondition(this.state);
        }
    }
    // 记录时间
    onTimeChange(value) {
        console.log('Selected Time: ', value.format('YYYY-MM-DD'));
        console.log('Formatted Selected Time: ', value.format('HH:mm:ss'));
      }
    onTimeOk(value) {
        console.log('onTimeOk: ', value.format('YYYY-MM-DD HH:mm:ss'));
      }
      // 字段，SQL筛选
    callback(key) {
    console.log(key);
    }
    //查询，保存，查看
    handleChange1(checked) {
        if(checked) {
            this.setState({
                checked1: checked,
                checked2: false,
                checked3: false
            })
        } else {
            this.setState({
                checked1: checked
            })
        }
    }
    handleChange2(checked) {
        if(checked) {
            this.setState({
                checked2: checked,
                checked1: false,
                checked3: false
            })
        } else {
            this.setState({
                checked2: checked
            })
        }
    }
    handleChange3(checked) {
        if(checked) {
            this.setState({
                checked3: checked,
                checked2: false,
                checked1: false
            })
        } else {
            this.setState({
                checked3: checked
            })
        }
    }
     //导出excel,csv
     handleExpChange1(checked) {
        if(checked) {
            this.setState({
                expChecked1: checked,
                expChecked2: false,
            })
        } else {
            this.setState({
                expChecked1: checked
            })
        }
    }
    handleExpChange2(checked) {
        if(checked) {
            this.setState({
                expChecked2: checked,
                expChecked1: false,
            })
        } else {
            this.setState({
                expChecked2: checked
            })
        }
    }

    getCertainColumnToChart(msg) {
     this.setState({selectColomn:msg}, () => {
         console.log(msg)
         let param = {
             colomn: this.state.selectColomn,
             dbType: this.state.dbType,
             tableName: this.state.tableName
         }
         console.log(param)
         this.props.showCertainChartFrequency(param)
     })
    }

    record(msg) {
        this.setState(msg, () => {
            let param = {
              tableName:this.state.tableName
            };
            this.props.showTable(param);
        });
    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

            },
          };
          const columns2 = [{
            title: "c1",
            dataIndex: "c1",
            key: "c1",
            width: "15%",
            render: text => <span style={{cursor: "pointer"}} onClick={(e) => {console.log(e, "点击")}}>{text}</span>,
          }, {
            title: "c2",
            dataIndex: "c2",
            width: "15%",
            key: "c2",
          }, {
            title: "c3",
            dataIndex: "c3",
            width: "15%",
            key: "c3",
          }, {
            title: "c4",
            dataIndex: "c4",
            width: "15%",
            key: "c4",
          }]
        const data2 = [{
            key: 'r1',
            c1: 'r1',
            c2: 'r1',
            c3: 'c1',
            c4:'c1'
          }, {
            key: 'r2',
            c1: 'r2',
            c2: 'r2',
            c3: 'r2',
            c4:'r2'
          },{
            key: 'r3',
            c1: 'r3',
            c2: 'r3',
            c3: 'r3',
            c4:'r3'
          }, {
            key: 'r4',
            c1: 'r4',
            c2: 'r4',
            c3: 'r4',
            c4:'r4'
          }]
          const columns3 = [{
            title: '表名',
            dataIndex: 'name',
            key: 'name',
            width: '60%',
            render: text => <span style={{cursor: 'pointer'}} onClick={(e) => {console.log(e, '点击')}}>{text}</span>,
          }, {
            title: '消息',
            dataIndex: 'age',
            key: 'age',
            width: '40%',
          }]
        const data3 = [{
            key: '1',
            name: 'John Brown',
            id: 32,
          }, {
            key: '2',
            name: 'Jim Green',
            id: 42,
          },{
            key: '3',
            name: 'John Brown',
            id: 32,
          }, {
            key: '4',
            name: 'Jim Green',
            id: 42,
          }]
        return (
            <div className="dataAnalysis">
                <Row>
                    <Col span={6}>
                        <Card>

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
                                        getRecord={msg=>{
                                            this.record(msg)
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                    <Col span={18}>
                        <MyTable
                        columns={this.props.showTableList.data}
                        data={this.props.tables.data}
                        onChangeCondition={msg => {
                            this.getDatas(msg)
                        }}//msg用户输入数据的集合
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Card>
                            <Row style={{color: 'white', width: '50%'}}>
                                {/*<Query*/}
                                    {/*onChangeCondition={msg => {*/}
                                        {/*this.getTable(msg)*/}
                                    {/*}}//msg用户输入数据的集合*/}
                                {/*/>*/}
                                <Col>
                                    <Tabs onChange={(e) => this.callback.bind(this)(e)} type="card">
                                        <TabPane tab="分析1" key="1" onClick={this.searchCommon.bind(this)}/>
                                        <TabPane tab="分析2" key="2" />
                                    </Tabs>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset={1} span={22}>
                                    {/* 只有展示功能的表格 */}

                                    <TableColumn
                                        {...this.props.showTableList}
                                        getChartData={msg => {
                                            this.getCertainColumnToChart(msg)
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={18}>
                        <Card>
                            <Row style={{color: '#2f95dc', marginBottom: '20px', fontSize: 18 }}>
                            分析结果
                            </Row>
                            <Row style={{color: 'white'}}>
                                <Col>
                                    <Tabs onChange={(e) => this.callbackTabs.bind(this)(e)} type="card">
                                        <TabPane tab="关联分析" key="1" />
                                        <TabPane tab="频次分析" key="2" />
                                        <TabPane tab="长度分析" key="3" />
                                        <TabPane tab="TopN分析" key="4" />
                                        <TabPane tab="空值分析" key="5" />
                                        <TabPane tab="异常值分析" key="6" />
                                    </Tabs>
                                </Col>
                            </Row>
                            {(
                                () => {
                                    let title1 = "话务量变化趋势"
                                    let title2 = "频次分析"
                                    let title3 = "话务量活跃度变化TOP"
                                    switch (this.state.button) {
                                        case "1":
                                            return (<Row style={{color: 'white'}}>
                                                <Col span={20} offset={2}>
                                                    <DataAnalyseBarChart  homeData={this.state.homeData} belongData={this.state.belongData}  xAxisData={this.state.xAxisData} />
                                                </Col>
                                            </Row>);
                                            break;
                                        case "2":
                                            return (<Row style={{color: 'white'}}>
                                                <Col span={20} offset={2}>
                                                    <AnalyseFrequency  title={title2} {...this.props.showFrequencyList}/>
                                                </Col>
                                            </Row>);
                                            break;
                                        case "3":
                                            return (<Row style={{color: 'white'}}>
                                                <Col span={20} offset={2}>
                                                    <DataAnalyseBarChart  homeData={this.state.homeData} belongData={this.state.belongData}  xAxisData={this.state.xAxisData} />
                                                </Col>
                                            </Row>);
                                            break;
                                        case "4":
                                            return (<Row style={{color: 'white'}}>
                                                <Col span={20} offset={2}>
                                                    <DataAnalyseBarChart  homeData={this.state.homeData} belongData={this.state.belongData}  xAxisData={this.state.xAxisData} title={title1}/>
                                                </Col>
                                            </Row>);
                                            break;
                                        case "5":
                                            return (<Row style={{color: 'white'}}>
                                                <Col span={20} offset={2}>
                                                    <DataAnalyseBarChart  homeData={this.state.homeData} belongData={this.state.belongData}  xAxisData={this.state.xAxisData} title={title1}/>
                                                </Col>
                                            </Row>);
                                            break;
                                        case "6":
                                            return (<Row style={{color: 'white'}}>
                                                <Col span={20} offset={2}>
                                                    <DataAnalyseBarChart  homeData={this.state.homeData} belongData={this.state.belongData}  xAxisData={this.state.xAxisData} title={title1}/>
                                                </Col>
                                            </Row>);
                                            break;
                                        default:
                                            return null;
                                    }
                                }
                            )()}
                            {/*<Row style={{color: 'white'}}>
                                <Col span={20} offset={2}>
                                    <DataAnalyseBarChart  homeData={this.state.homeData} belongData={this.state.belongData}  xAxisData={this.state.xAxisData} />
                                </Col>
                            </Row>*/}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
// export default DataAnalysis;
export default connect(
    state => ({
        //表格参数
        tableList: {
            data: state.GetTable.tableList.data,
            loading: state.GetTable.tableList.loading,
            error: state.GetTable.tableList.error
        },//把后端查询好的数据放入infoList
        tables:{
            data: state.GetTable.tables.data,
            loading: state.GetTable.tables.loading,
            error: state.GetTable.tables.error
        } ,  //,
        // columns:{
        //     data: state.GetTable.tables.data,
        //     loading: state.GetTable.tables.loading,
        //     error: state.GetTable.tables.error
        // }
        showTableList:{
            data: state.GetTable.showTableList.data,
            loading: state.GetTable.showTableList.loading,
            error: state.GetTable.showTableList.error
        },
        showFrequencyList: {
            data: state.GetTable.showFrequencyList.data,
            loading: state.GetTable.showFrequencyList.loading,
            error: state.GetTable.showFrequencyList.error
        }
    }),
    dispatch => bindActionCreators(ActionCreators, dispatch)
)(GetTable);
