import React, { Component } from 'react';
import { Row, DatePicker, Button, Card, Form, Icon, Tabs, List, Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import moment from 'moment';
import PieChart from "../../../common/component/echarts/PieChart";
import BarTopTypeChart from "../../../common/component/echarts/BarTopTypeChart"
import LineChart from "../../../common/component/echarts/LineChart"
import * as ActionCreators from "../redux/actions"
import TableDescribe from "../../../common/component/table/basictable";
import ReactLoading from "react-loading";
import "./style.css";
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const TabPane = Tabs.TabPane;
const Search = Input.Search;

class DiffMapSearch extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 },
        };
        // const { obtainDateList, diffCodeList, netCodeList } = this.props;
        return(
            <Form layout="inline"  style={{marginLeft:"10px",marginRight:"10px"}}>
                <FormItem {...formItemLayout} label="时间周期" style={{width:"100%",marginBottom:"10px",backgroundColor:"#eee"}}>
                    {getFieldDecorator("obtainDate")(
                        <RangePicker style={{width:"30%"}} format={dateFormat} />
                    )}
                    <Button style={{marginLeft:"200px"}} type="primary" onClick={this.props.handleSearch}><Icon type="sync" />查询</Button>
                </FormItem>
            </Form>
        );

    }
}
const SearchBut = Form.create()(DiffMapSearch);


class MapSigSum extends Component {

    componentWillMount() {
        const param = { "startDate": "", "endDate": "" };
        this.props.getPieChartMap(param);
        this.props.getMapSigList(param);
        this.props.getLineChart(param);
        this.props.lineTopBarChart(param);
        this.props.analazyMes(param);
    }

    handleSearch = (e) => {
        const form = this.form;
        const mapThis = this;
        form.validateFields((err, values) => {
            if(err) {
                return;
            }
            console.log(values);
            mapThis.props.getPieChartMap(values);
            mapThis.props.getMapSigList(values);
            mapThis.props.getLineChart(values);
            mapThis.props.lineTopBarChart(values);
            mapThis.props.analazyMes(values);

        })
    }

    handleStandardTableChange = (pagination, filtersArg, sorter) => {
        let mes = { current: pagination.current };
        this.props.getMapSigList(mes);
        console.log(pagination);
    }

    handleSearchTableMes = (value) => {
        this.props.getMapSigList(value);
    }


    render() {
        const { pie_Data,sign_Data, sign_loading, line_Data, line_loading, top_Data, top_loading, anal_Data, anal_loading } = this.props;
        const mes = "信令类型及数量统计";
        const mapSigListClumns = [
            { "title": "信令类型", "dataIndex": "sigType" },
            { title: "信令分类", "dataIndex": "sigTypeName" },
            { title: "数量", "dataIndex": "num" },
            { title: "占比情况", "dataIndex": "percent", render: (text) => (text + "%") },
        ];
        const pagination = {
            pageSize: 10,
            total: sign_Data === undefined ? 0 : sign_Data.total,
            current: sign_Data === undefined ? 1 : sign_Data.current
        };
        const rowKey = "id";
        console.info(pie_Data)
        return(
            <div style={{overflowX:"hidden",overflowY:"hidden"}} className="sign">
                {/* 查询框 */}
                <SearchBut ref={(ref) => this.form = ref} handleSearch={this.handleSearch.bind(this)}/>
                <Row>

                    {/* Map信令总量 */}
                    <div style={{height:"688px",marginLeft:"10px",width:"48%",marginRight:"10px",display:"inline-block",float:"left"}}>
                        <Card title="Map信令总量" style={{height:"688px"}}>
                            <PieChart pieChartData={pie_Data} style={{height:"688px"}} />
                            {/* {(pie_loading===true)?<ReactLoading type="spinningBubbles" color="#ccc" />:} */}
                        </Card>
                    </div>
                    {/* 信令类型及数量统计 */}
                    <div style={{height:"688px",width:"49%",marginRight:"10px",display:"inline-block",float:"right"}}>
                        <Card title={mes} className="signCount">
                            <Search  enterButton="查询"   placeholder="请输入信令类型/信令分类" onSearch={this.handleSearchTableMes}  style={{ width: 300 }} />
                            <TableDescribe columns={mapSigListClumns} data={sign_Data.data} size="middle"
                                           pagination={pagination} loading={sign_loading} rowKey={rowKey}  onChange={this.handleStandardTableChange}/>
                        </Card>
                    </div>
                </Row>
                <Row>
                    {/* 主要信令类型流量统计趋势和线路号top */}
                    <div style={{height:"457px",marginLeft:"10px",marginTop:"10px",width:"48%",marginRight:"10px",display:"inline-block",float:"left"}}>
                        <Card style={{height:"457px"}}>
                            <Tabs defaultActiveKey="1" size='small'>
                                <TabPane tab="主要信令类型流量统计趋势" key="1">
                                    {(line_loading===true)?<ReactLoading type="spinningBubbles" color="#ccc" />:<LineChart lineChartData={line_Data} />}
                                </TabPane>
                                <TabPane tab="线路号TOP" key="2" style={{height:"400px"}}>
                                    {(top_loading===true)?<ReactLoading type="spinningBubbles" color="#ccc" />:
                                        <BarTopTypeChart  title="" legendData={top_Data.legendData}  xAxisData={top_Data.xAxisData}
                                                          yAxisData={top_Data.yAxisData} series={(top_Data.series===undefined?{name:'',data:[]}:top_Data.series)} />
                                    }
                                </TabPane>
                            </Tabs>
                        </Card>
                    </div>
                    {/* 信令趋势分析 */}
                    <div style={{height:"457px",width:"49%",marginTop:"10px",marginRight:"10px",display:"inline-block",float:"right"}}>
                        <Card title="信令趋势分析">
                            {(anal_loading===true)?<ReactLoading type="spinningBubbles" color="#ccc" />:
                                <List itemLayout="horizontal"
                                      dataSource={anal_Data.data}
                                      renderItem={item => (
                                          <List.Item>
                                              <List.Item.Meta
                                                  title={`${item.name}情况`}
                                                  description={`从${anal_Data.startDate}至 ${anal_Data.endDate} 时间段 最大峰值 ${item.max} 最小峰值 ${item.min}`}
                                              />
                                          </List.Item>
                                      )}/>
                            }
                        </Card>
                    </div>
                </Row>
                {/*</Row>*/}
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        //map信令总量 饼图
        pie_Data: state.Mapsignalling.piechart.data,
        pie_loading: state.Mapsignalling.piechart.loading,
        pie_error: state.Mapsignalling.piechart.error,
        //信令类型统计   表格
        sign_Data: state.Mapsignalling.signlist.data,
        sign_loading: state.Mapsignalling.signlist.loading,
        sign_error: state.Mapsignalling.signlist.error,
        //主要信令类型流量统计   折线图
        line_Data: state.Mapsignalling.linechart.data,
        line_loading: state.Mapsignalling.linechart.loading,
        line_error: state.Mapsignalling.linechart.error,
        //线路号top    柱状图
        top_Data: state.Mapsignalling.linetop.data,
        top_loading: state.Mapsignalling.linetop.loading,
        top_error: state.Mapsignalling.linetop.error,
        //信令趋势分析   卡片
        anal_Data: state.Mapsignalling.analazydata.data,
        anal_loading: state.Mapsignalling.analazydata.loading,
        anal_error: state.Mapsignalling.analazydata.error,
    }
}
export default connect(mapStateToProps, dispath => bindActionCreators(ActionCreators, dispath))(MapSigSum);
