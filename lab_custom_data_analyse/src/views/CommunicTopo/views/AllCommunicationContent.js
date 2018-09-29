import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../reducer'
import { Button,  Row,  } from 'antd';
import Table from '../../../common/component/table/table';
import communicationLogo from "../../../common/assets/count.png";
import "./style.css";


const commu_columns = [{
    title: '主叫号码',
    dataIndex: 'calling',
    key: 'calling'
}, {
    title: '被叫号码',
    dataIndex: 'called',
    key: 'called'
}, {
    title: '通信方式',
    dataIndex: 'ways',
    key: 'ways'
}, {
    title: '开始时间',
    dataIndex: 'starttime',
    key: 'starttime'
}, {
    title: '结束时间',
    dataIndex: 'endtime',
    key: 'endtime'
}, {
    title: '通信时长',
    dataIndex: 'time',
    key: 'time'
}, {
    title: '详情',
    dataIndex: '',
    key: 'details',
    render: function(record) {
        if(record.ways === "短信") {
            return <a>查看</a>
        } else if(record.ways === "通话") {
            return <a>播放</a>
        }
    }
}];

class CommunicationContent extends React.PureComponent {


    render() {
        return(
                <div>
                    <p className="tableTitle">
                        <span className="condition">
                          <img src={communicationLogo} alt="communicationLogo" />
                        </span>
                        <span className="condition" style={{fontSize:"16px",fontWeight:"700"}}>通信情况</span>
                        <Button size="small">导出记录</Button>
                    </p>
                    <Row style={{height:"564px"}}>
                        <Table
                            total={this.props.commu_total}
                            result={this.props.commu_result}
                            loading={this.props.commu_loading}
                            columns={commu_columns}
                            size="middle"
                        >
                        </Table>
                    </Row>
                </div>
        )
    }
}
export default connect(state => ({
    //通信表格数据
    commu_total: state.CommunicTopo.communication.total,
    commu_result: state.CommunicTopo.communication.result,
    commu_loading: state.CommunicTopo.communication.loading,
    commu_error: state.CommunicTopo.communication.error,
}), dispatch => bindActionCreators(ActionCreators, dispatch))(CommunicationContent)
